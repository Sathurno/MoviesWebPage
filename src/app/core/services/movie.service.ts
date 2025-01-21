import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { forkJoin, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private apiService: ApiService) {}

  // Obtener las películas más populares
  fetchTrendingMovies(): Observable<Movie[]> {
    return this.apiService.getTrending('movie', 1).pipe(
      map((response: any) => response.results.map((item: any) => ({
        link: `/movie/${item.id}`,
        imgSrc: item.poster_path ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}` : null,
        title: item.title,
        rating: item.vote_average * 10,
        vote: item.vote_average,
      })))
    );
  }

  // Obtener las películas que están ahora en cartelera
  getNowPlayingMovies(): Observable<Movie[]> {
    return this.apiService.getNowPlaying('movie', 1).pipe(
      map((response: any) => response.results.map((item: any) => ({
        link: `/movie/${item.id}`,
        imgSrc: item.poster_path ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}` : null,
        title: item.title,
        rating: item.vote_average * 10,
        vote: item.vote_average,
      })))
    );
  }
  
  //Obtener pelis populares
  getPopularMovies(): Observable<Movie[]> {
    return this.apiService.getCategory('popular', 1, 'movie').pipe(
      map((response: any) => response.results.map((item: any) => ({
        link: `/movie/${item.id}`,
        imgSrc: item.poster_path ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}` : null,
        title: item.title,
        rating: item.vote_average * 10,
        vote: item.vote_average,
      })))
    );
  }

  //obtener pelis recomendadas
  getRecommendedMovies(movieId: number): Observable<Movie[]> {
    return this.apiService.getRecommended(movieId, 1, 'movie').pipe(
      map((response: any) => response.results.map((item: any) => ({
        link: `/movie/${item.id}`,
        imgSrc: item.poster_path ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}` : null,
        title: item.title,
        rating: item.vote_average * 10,
        vote: item.vote_average,
      })))
    );
  }

  //obtener pelis mas votadas
  getTopRatedMovies(): Observable<Movie[]> {
    return this.apiService.getCategory('top_rated', 1, 'movie').pipe(
      map((response: any) => response.results.map((item: any) => ({
        link: `/movie/${item.id}`,
        imgSrc: item.poster_path ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}` : null,
        title: item.title,
        rating: item.vote_average * 10,
        vote: item.vote_average,
      })))
    );
  }

  //Obtener una lista de peliculas extensa según el número de ventanas requeridas (API devuelve packs de 20)
  getAllMoviesPaginated(maxPages: number): Observable<Movie[]> {
    const requests = Array.from({ length: maxPages }, (_, index) => 
      this.apiService.getDiscoverMovies(index + 1)
    );
  
    return forkJoin(requests).pipe(
      map((responses: any[]) => 
        responses.flatMap(response => 
          response.results.map((item: any) => ({
            link: `/movie/${item.id}`,
            imgSrc: item.poster_path ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}` : null,
            title: item.title,
            rating: item.vote_average * 10,
            vote: item.vote_average,
          }))
        )
      ),
      catchError(error => throwError(() => new Error('Error fetching movies')))
    );
  }
 
    // Obtener el tráiler de YouTube para una película
    getYouTubeTrailer(movieId: number): Observable<Movie> {
      return this.apiService.getYouTubeVideo(movieId, 'movie').pipe(
        map((videoRes: any) => videoRes.results.find((vid: any) => vid.site === 'YouTube' && vid.type === 'Trailer'))
      );
    }
  
    //obtener detalles de la pelicula
    getMovieDetails(movieId: number): Observable<Movie> {
      return this.apiService.getMovie(movieId).pipe(
        map((response: any) => ({
          link: `/movie/${response.id}`,
          imgSrc: response.poster_path ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2${response.poster_path}` : null,
          title: response.title,
          rating: response.vote_average * 10,
          vote: response.vote_average,
          overview: response.overview, // Agrega más detalles si es necesario
        }))
      );
    }
}
