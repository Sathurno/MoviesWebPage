import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
        ...item,
        link: `/movie/${item.id}`,
        videoId: '', // Inicializar con una cadena vacía
      })))
    );
  }

  // Obtener el tráiler de YouTube para una película
  getYouTubeTrailer(movieId: number): Observable<Movie> {
    return this.apiService.getYouTubeVideo(movieId, 'movie').pipe(
      map((videoRes: any) => videoRes.results.find((vid: any) => vid.site === 'YouTube' && vid.type === 'Trailer'))
    );
  }
}
