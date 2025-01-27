import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { createBackdrop, Backdrop } from '../../core/models/backdrop.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private apiService: ApiService) {}
  private mapMovieData(item: any): Movie {
    return {
      id: item.id,
      link: `/movie/${item.id}`,
      imgSrc: item.poster_path ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}` : null,
      title: item.title,
      rating: item.vote_average * 10,
      vote: item.vote_average,
      description: item.overview || '', // Agregar el campo overview
    };
  }

   //Aigna a cada pelicula de la lista una imagen principal y sus miniaturas 
   initializeMoviesImages(movies: Movie[]) {
    forkJoin(movies.map(movie => this.getMoviesScreenCaptures([movie])))  // Cambiar a getMoviesScreenCaptures
      .subscribe(movieScreenCaptures => {
        movies.forEach((movie, index) => {
          // Filtrar imágenes por aspect_ratio adecuado para calidad (ej. 1.77 para 16:9)
          const validScreenCaptures = movieScreenCaptures[index].filter(screenCapture => 
            screenCapture.width >= 1920 && screenCapture.height >= 1080 && screenCapture.aspect_ratio >= 1.77
          );
          
          // Obtener 4 imágenes aleatorias sin repetir
          const uniqueScreenCaptures = this.getRandomImages(validScreenCaptures, 5);
      
          // Asignar la principal y los thumbnails
          movie.principalImage = uniqueScreenCaptures[0] || null;
          movie.thumbnails = uniqueScreenCaptures.slice(1) || [];
        });
      });
  }
  
  getMoviesScreenCaptures(movies: Movie[]): Observable<Backdrop[]> {
    return forkJoin(
      movies.map((movie) => 
        this.apiService.getMoviesBackdrop(Number(movie.link.split('/movie/')[1]))  // Cambiar a getMoviesScreenCaptures
      )
    ).pipe(
      map((screenCapturesArray) => 
        screenCapturesArray.flat().filter((screenCaptureData: any) => 
          !this.containsLogo(screenCaptureData) && !this.isDuplicateBackdrop(screenCaptureData) // Compara el enlace del screenCapture
        ).map((screenCaptureData: any) => createBackdrop(screenCaptureData))  // Asegúrate de que la función de creación siga siendo válida
      ),
      catchError((error) => {
        console.error('Error fetching screen captures:', error);
        return of([]);
      })
    );
  }
  
  
  // Función para obtener N imágenes aleatorias sin repetir
  getRandomImages(images: any[], count: number): any[] {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  
   initializeMoviesLogos(movies: Movie[]) {
    // Usamos forkJoin para hacer todas las solicitudes de los logos en paralelo
    forkJoin(movies.map(movie => 
      this.apiService.getMovieLogos(movie.id)  // Obtenemos los tres logos
    ))
    .subscribe(logosList => {
      // Asignamos la lista de logos a la propiedad `logosUrls` de cada película
      movies.forEach((movie, index) => {
        movie.logosUrls = logosList[index] || []; // Asigna la lista de logos o una lista vacía si no se obtienen
      });
    });
  }
  // Obtener las películas más populares
  fetchTrendingMovies(): Observable<Movie[]> {
    return this.apiService.getTrending('movie', 1).pipe(
      map((response: any) => response.results.map(this.mapMovieData))
    );
  }

  // Obtener las películas que están ahora en cartelera
  getNowPlayingMovies(): Observable<Movie[]> {
    return this.apiService.getNowPlaying('movie', 1).pipe(
    map((response: any) => response.results.map(this.mapMovieData))
  );
  }
  
  //Obtener pelis populares
  getPopularMovies(): Observable<Movie[]> {
    return this.apiService.getCategory('popular', 1, 'movie', { language: 'es' }).pipe(
      map((response: any) => response.results.map(this.mapMovieData))
    );
  }
  

  //obtener pelis recomendadas
  getRecommendedMovies(movieId: number): Observable<Movie[]> {
    return this.apiService.getRecommended(movieId, 1, 'movie').pipe(
      map((response: any) => response.results.map(this.mapMovieData))
    );
  }
  private processedBackdropLinks: Set<string> = new Set();
  //obtener backdrops
  getMoviesBackdrops(movies: Movie[]): Observable<Backdrop[]> {
    return forkJoin(
      movies.map((movie) => 
        this.apiService.getMoviesBackdrop(Number(movie.link.split('/movie/')[1]))
      )
    ).pipe(
      map((backdropsArray) => 
        backdropsArray.flat().filter((backdropData: any) => 
          !this.containsLogo(backdropData) && !this.isDuplicateBackdrop(backdropData) // Compara el enlace del backdrop
        ).map((backdropData: any) => createBackdrop(backdropData))
      ),
      catchError((error) => {
        console.error('Error fetching backdrops:', error);
        return of([]);
      })
    );
  }

  containsLogo(backdropData: any): boolean {
    // Lógica para determinar si la imagen tiene un logo o marca
    return backdropData.file_path.includes('logo') || backdropData.file_path.includes('watermark');
  }

  // Verificar si el enlace del backdrop ya ha sido procesado
  private isDuplicateBackdrop(backdropData: any): boolean {
    const backdropLink = backdropData.file_path; // Usamos el link del backdrop para comparar
    if (this.processedBackdropLinks.has(backdropLink)) {
      return true; // Si el enlace ya está en el conjunto, es un duplicado
    } else {
      this.processedBackdropLinks.add(backdropLink); // Si no está en el conjunto, lo agregamos
      return false; // No es un duplicado
    }
  }
  

  //Obtener una lista de peliculas extensa según el número de ventanas requeridas (API devuelve packs de 20)
  getAllMoviesPaginated(maxPages: number): Observable<Movie[]> {
    const requests = Array.from({ length: maxPages }, (_, index) => 
      this.apiService.getDiscoverMovies(index + 1)
    );
  
    return forkJoin(requests).pipe(
      map((response: any) => response.results.map(this.mapMovieData)),
      catchError(error => throwError(() => new Error('Error fetching movies')))
    );
  }
  
  getMoviesByPage(page: number): Observable<Movie[]> {
    return this.apiService.getDiscoverMovies(page).pipe(
      map((response: any) => response.results.map(this.mapMovieData)),
      catchError(error => throwError(() => new Error('Error fetching movies')))
    );
  }    // Obtener el tráiler de YouTube para una película
   getYouTubeTrailer(movieId: number): Observable<Movie> {
     return this.apiService.getYouTubeVideo(movieId, 'movie').pipe(
       map((videoRes: any) => videoRes.results.find((vid: any) => vid.site === 'YouTube' && vid.type === 'Trailer'))
     );
   }
     //obtener detalles de la pelicula
   getMovieDetails(movieId: number): Observable<Movie> {
     return this.apiService.getMovie(movieId).pipe(
      map((response: any) => response.results.map(this.mapMovieData))
     );
   }
   getMovieWallpapers(movieId: number): Observable<string[]> {
     return this.apiService.getMoviesBackdrop(movieId).pipe(
       map((backdrops: any[]) =>
         backdrops.map((image: any) => 
           `https://image.tmdb.org/t/p/original${image.file_path}`
         )
       ),
       catchError(error => throwError(() => new Error('Error fetching movie wallpapers')))
     );
   }
   
      // Obtener películas por género
  getByGenre(id: number, type: string, page: number): Observable<Movie[]> {
    return this.apiService.getByGenre(id, type, page).pipe(
      map((response: any) => response.results.map(this.mapMovieData))
    );
  }
  getMediaByGenreRange(media: string, genreId: number, pageRange: number[]): Observable<Movie[]> {
    const pageRequests = pageRange.map(page =>
      this.apiService.getMediaByGenre(media, genreId, page).pipe(
        map((response: any) => response.results.map(this.mapMovieData))
      )
    );
  
    return forkJoin(pageRequests).pipe(
      map((results: Movie[][]) => results.flat()) // Aplana el array de arrays a un solo array de películas
    );
  }
  
  // Obtener categorías de películas
  getCategory(category: string, page: number, mediaType: string): Observable<Movie[]> {
    return this.apiService.getCategory(category, page, mediaType).pipe(
      map((response: any) => response.results.map(this.mapMovieData))
    );
  }
  
  getGenreList(language: string): Observable<any> {
    return this.apiService.getGenreList(language).pipe(
      map((response: any) => response.genres.map((genre: any) => ({
        id: genre.id,
        name: genre.name
      }))),
      catchError(error => throwError(() => new Error('Error fetching genres')))
    );
  }
}
