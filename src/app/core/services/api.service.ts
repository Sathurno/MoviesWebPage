import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, Observable, throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Backdrop } from '../models/backdrop.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiKey = environment.apiKey;
  private apiUrl = 'https://api.themoviedb.org/3';
  private language = 'en-US';

  constructor(private http: HttpClient) {}

  // Función para obtener el logo de una película
  getMovieLogos(movieId: string): Observable<string[]> {
    return forkJoin([
      // Logo en español
      this.http.get(`${this.apiUrl}/movie/${movieId}/images?api_key=${this.apiKey}&language=es`)
        .pipe(map((data: any) => data.logos && data.logos.length > 0 ? `https://image.tmdb.org/t/p/w500${data.logos[0].file_path}` : null)),
  
      // Logo en inglés
      this.http.get(`${this.apiUrl}/movie/${movieId}/images?api_key=${this.apiKey}&language=en`)
        .pipe(map((data: any) => data.logos && data.logos.length > 0 ? `https://image.tmdb.org/t/p/w500${data.logos[0].file_path}` : null)),
  
      // Logo en idioma original
      this.http.get(`${this.apiUrl}/movie/${movieId}/images?api_key=${this.apiKey}&language=`)
        .pipe(map((data: any) => data.logos && data.logos.length > 0 ? `https://image.tmdb.org/t/p/w500${data.logos[0].file_path}` : null)),
    ]).pipe(
      map((logos: (string | null)[]) => {
        // Filtramos los logos nulos y retornamos solo los logos disponibles
        return logos.filter(logo => logo !== null) as string[];
      }),
      catchError(this.handleError) // Manejo de errores
    );
  }
  
  getNowPlaying(mediaType: string, page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/${mediaType}/now_playing`, { params })
      .pipe(catchError(this.handleError));
  }
  getCategory(category: string, page: number, mediaType: string, additionalParams: { [key: string]: any } = {}): Observable<any> {
    const params = this.buildParams({ 
      page: page.toString(), 
      ...additionalParams  // Añadir parámetros adicionales como el idioma
    });
  
    return this.http.get(`${this.apiUrl}/${mediaType}/${category}`, { params })
      .pipe(catchError(this.handleError));
  }
  

  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}`, { params: this.buildParams({}) })
      .pipe(catchError(this.handleError));
  }

  getExternalId(id: number, mediaType: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${mediaType}/${id}/external_ids`, { params: this.buildParams({}) })
      .pipe(catchError(this.handleError));
  }

  getRecommended(id: number, page: number, mediaType: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${mediaType}/${id}/recommendations`, { params: this.buildParams({}) })
  }

  getBackdrops(id: number, mediaType: string): Observable<any> {
    const url = `${this.apiUrl}/${mediaType}/${id}/images?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getYouTubeVideo(id: number, mediaType: string): Observable<any> {
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/${mediaType}/${id}/videos`, { params })
      .pipe(catchError(this.handleError));
  }

  getTrending(media: string, page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/trending/${media}/week`, { params })
      .pipe(catchError(this.handleError));
  }

  getTvDiscover(page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/discover/tv`, { params })
      .pipe(catchError(this.handleError));
  }

  getPersonExternalId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/person/${id}/external_ids`, { params: this.buildParams({}) })
      .pipe(catchError(this.handleError));
  }

  getTvShow(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tv/${id}`, { params: this.buildParams({}) })
      .pipe(catchError(this.handleError));
  }

  getTvShowEpisodes(id: number, season: number): Observable<any> {
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/tv/${id}/season/${season}`, { params })
      .pipe(catchError(this.handleError));
  }

  getMediaByGenre(media: string, genreId: number, page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString(), with_genres: genreId.toString() });
    return this.http.get(`${this.apiUrl}/discover/${media}`, { params })
      .pipe(catchError(this.handleError));
  }

  getGenreList(media: string): Observable<any> {
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/genre/${media}/list`, { params })
      .pipe(catchError(this.handleError));
  }

  getByGenre(id: number, type: string, page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString() });
    return this.http.get(`${this.apiUrl}/genre/${id}/${type}`, { params })
      .pipe(catchError(this.handleError));
  }

  getDiscoverMovies(page: number): Observable<any> {
    const params = this.buildParams({ page: page.toString(), sort_by: 'popularity.desc' });
    return this.http.get(`${this.apiUrl}/discover/movie`, { params })
      .pipe(catchError(this.handleError));
  }
  
  getCredits(id: number, type: string): Observable<any> {
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/${type}/${id}/credits`, { params })
      .pipe(catchError(this.handleError));
  }

  getPerson(id: number): Observable<any> {
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/person/${id}`, { params })
      .pipe(catchError(this.handleError));
  }
  getPersonImages(id: number): Observable<any> {
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/person/${id}/images`, { params })
      .pipe(catchError(this.handleError));
  }

  getPersonCredit(id: number): Observable<any> {
    const params = this.buildParams({});
    return this.http.get(`${this.apiUrl}/person/${id}/movie_credits`, { params })
      .pipe(catchError(this.handleError));
  }

  search(query: string, page: number): Observable<any> {
    const params = this.buildParams({ query, page: page.toString() });
    return this.http.get(`${this.apiUrl}/search/multi`, { params })
      .pipe(catchError(this.handleError));
  }
  getMoviesBackdrop(movieId: number, language: string = 'en'): Observable<Backdrop[]> {
    // Construcción de los parámetros para la solicitud
    const params = this.buildParams({ movieId: movieId.toString(), language, include_image_language: 'en,null' });
    
    return this.http.get(`${this.apiUrl}/movie/${movieId}/images`, { params })
      .pipe(
        map((response: any) => response.backdrops),  // Extraemos solo los backdrops de la respuesta
        catchError(this.handleError)  // Manejo de errores
      );
  }
  
  private buildParams(params: any): HttpParams {
    let httpParams = new HttpParams().set('api_key', this.apiKey || '').set('language', this.language);
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return httpParams;
  }  

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(() => new Error('Something went wrong'));
  }
}
