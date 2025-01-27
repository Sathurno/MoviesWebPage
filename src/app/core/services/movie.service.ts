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
     forkJoin(movies.map(movie => this.getMoviesBackdrops([movie])))
       .subscribe(movieBackdrops => {
         movies.forEach((movie, index) => {
           movie.principalImage = movieBackdrops[index]?.[0] || null; 
           movie.thumbnails = movieBackdrops[index]?.slice(1, 5) || [];
         });
       });
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
  private async translateToSpanish(originalLanguage: string, text: string): Promise<string> {
    if (!text || originalLanguage === 'es') {
      return text || 'Descripción no disponible.';
    }
  
    const apiKey = 'TU_API_KEY_DE_GOOGLE_TRANSLATE';
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  
    const body = {
      q: text,
      source: originalLanguage,
      target: 'es',
      format: 'text',
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
      });
      
      const result = await response.json();
      return result.data.translations[0].translatedText || 'Descripción no disponible.';
    } catch (error) {
      console.error('Error al traducir:', error);
      return 'Descripción no disponible.';
    }
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

  //obtener backdrops
  getMoviesBackdrops(movies: Movie[]): Observable<Backdrop[]> {
    return forkJoin(
      movies.map((movie) => 
        this.apiService.getMoviesBackdrop(Number(movie.link.split('/movie/')[1]))
      )
    ).pipe(
      map((backdropsArray) => 
        backdropsArray.flat().filter((backdropData: any) => !this.containsLogo(backdropData))
          .map((backdropData: any) => createBackdrop(backdropData))
      ),
      catchError((error) => {
        console.error('Error fetching backdrops:', error);
        return of([]);
      })
    );
  }
  
  containsLogo(backdropData: any): boolean {
    // Lógica para determinar si la imagen tiene un logo o marca
    // Esto podría ser tan simple como comprobar si la URL o las propiedades del objeto `backdropData` incluyen un logo.
    return backdropData.file_path.includes('logo') || backdropData.file_path.includes('watermark');
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

  // Obtener categorías de películas
  getCategory(category: string, page: number, mediaType: string): Observable<Movie[]> {
    return this.apiService.getCategory(category, page, mediaType).pipe(
      map((response: any) => response.results.map(this.mapMovieData))
    );
  }
  
  getGenreList(media: string): Observable<any> {
    return this.apiService.getGenreList(media).pipe(
      map((response: any) => response.genres.map((genre: any) => ({
        id: genre.id,
        name: genre.name
      }))),
      catchError(error => throwError(() => new Error('Error fetching genres')))
    );
  }
}
