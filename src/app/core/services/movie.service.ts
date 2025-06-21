import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { LoadingService } from './loading.service';
import { forkJoin, Observable, of, throwError, BehaviorSubject, timer } from 'rxjs';
import { catchError, map, switchMap, tap, shareReplay, retry, delay } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { createBackdrop, Backdrop } from '../../core/models/backdrop.model';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private processedBackdropLinks: Set<string> = new Set();
  private movieCache = new Map<string, Movie[]>();
  private popularMoviesCache: Movie[] | null = null;
  private cacheExpiry = new Map<string, number>();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

  constructor(
    private apiService: ApiService,
    private loadingService: LoadingService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private mapMovieData(item: any): Movie {
    return {
      id: item.id,
      link: `/movie/${item.id}`,
      imgSrc: item.poster_path ? `${environment.imageBaseUrl}/${environment.imageSize.w370}${item.poster_path}` : null,
      title: item.title,
      rating: item.vote_average * 10,
      vote: item.vote_average,
      description: item.overview || '',
    };
  }

  private isCacheValid(key: string): boolean {
    const expiry = this.cacheExpiry.get(key);
    return expiry ? Date.now() < expiry : false;
  }

  private setCache(key: string, data: Movie[]): void {
    this.movieCache.set(key, data);
    this.cacheExpiry.set(key, Date.now() + this.CACHE_DURATION);
  }

  private getCache(key: string): Movie[] | null {
    return this.isCacheValid(key) ? this.movieCache.get(key) || null : null;
  }

  // Optimización: Preload de imágenes críticas
  preloadCriticalImages(movies: Movie[]): void {
    if (!movies || movies.length === 0 || !isPlatformBrowser(this.platformId)) {
      return;
    }
    // Preload solo las primeras 3 imágenes del carousel
    const criticalMovies = movies.slice(0, 3);
    
    criticalMovies.forEach(movie => {
      if (movie.imgSrc) {
        const img = new Image();
        img.src = movie.imgSrc;
      }
    });
  }

  // Optimización: Carga progresiva de imágenes
  initializeMoviesImages(movies: Movie[]): Observable<Movie[]> {
    if (!movies || movies.length === 0) {
      return of([]);
    }

    this.loadingService.updateProgress(20);

    const movieObservables = movies.map((movie, index) =>
      this.getMoviesScreenCaptures([movie]).pipe(
        map(screenCaptures => {
          const validScreenCaptures = screenCaptures.filter(sc =>
            sc.width >= 1920 && sc.height >= 1080 && sc.aspect_ratio >= 1.77
          );
          const uniqueScreenCaptures = this.getRandomImages(validScreenCaptures, 5);
          movie.principalImage = uniqueScreenCaptures[0] || null;
          movie.thumbnails = uniqueScreenCaptures.slice(1) || [];
          
          // Actualizar progreso
          const progress = 20 + ((index + 1) / movies.length) * 60;
          this.loadingService.updateProgress(progress);
          
          return movie;
        })
      )
    );

    return forkJoin(movieObservables).pipe(
      tap(() => this.loadingService.updateProgress(80)),
      shareReplay(1) // Cache del observable
    );
  }
  
  getMoviesScreenCaptures(movies: Movie[]): Observable<Backdrop[]> {
    return forkJoin(
      movies.map((movie) => 
        this.apiService.getMoviesBackdrop(Number(movie.link.split('/movie/')[1]))
      )
    ).pipe(
      map((screenCapturesArray) => 
        screenCapturesArray.flat().filter((screenCaptureData: any) => 
          !this.containsLogo(screenCaptureData) && !this.isDuplicateBackdrop(screenCaptureData)
        ).map((screenCaptureData: any) => createBackdrop(screenCaptureData))
      ),
      catchError((error) => {
        console.error('Error fetching screen captures:', error);
        return of([]);
      }),
      retry(2) // Reintentar 2 veces en caso de error
    );
  }
  
  getRandomImages(images: any[], count: number): any[] {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  initializeMoviesLogos(movies: Movie[]): Observable<void> {
    if (!movies || movies.length === 0) {
        return of(undefined);
    }
    const logoObservables = movies.map(movie =>
        this.apiService.getMovieLogos(movie.id).pipe(
            tap(logosList => {
                movie.logosUrls = logosList || [];
            }),
            catchError(err => {
                console.error(`Error loading logos for movie ${movie.id}`, err);
                return of([]); // continue even if one fails
            })
        )
    );

    return forkJoin(logoObservables).pipe(
        map(() => undefined), // we don't care about the emitted values
        tap(() => {
            this.loadingService.updateProgress(100);
        })
    );
  }

  // Optimización: Caché para películas populares
  getPopularMovies(): Observable<Movie[]> {
    // Verificar caché
    if (this.popularMoviesCache && this.isCacheValid('popular')) {
      return of(this.popularMoviesCache);
    }

    setTimeout(() => this.loadingService.updateProgress(10));

    this.processedBackdropLinks.clear();
    
    return this.apiService.getCategory('popular', 1, 'movie', { language: 'es' }).pipe(
      map((response: any) => response.results.map(this.mapMovieData)),
      switchMap(movies => this.initializeMoviesImages(movies)),
      map(moviesWithImages => moviesWithImages.filter(movie =>
        movie.principalImage != null &&
        movie.description?.trim() &&
        movie.thumbnails && movie.thumbnails.length > 0
      )),
      tap(movies => {
        // Cachear resultado
        this.popularMoviesCache = movies;
        this.setCache('popular', movies);
        
        // Preload imágenes críticas
        this.preloadCriticalImages(movies);
      }),
      catchError(error => {
        console.error('Error loading popular movies:', error);
        return throwError(() => error);
      }),
      shareReplay(1)
    );
  }

  // Optimización: Caché para géneros
  getMediaByGenreRange(media: string, genreId: number, pageRange: number[]): Observable<Movie[]> {
    const cacheKey = `${media}_genre_${genreId}_${pageRange.join('_')}`;
    
    // Verificar caché
    const cached = this.getCache(cacheKey);
    if (cached) {
      return of(cached);
    }

    const pageRequests = pageRange.map(page =>
      this.apiService.getMediaByGenre(media, genreId, page).pipe(
        map((response: any) => response.results.map(this.mapMovieData)),
        retry(2)
      )
    );
  
    return forkJoin(pageRequests).pipe(
      map((results: Movie[][]) => {
        const flatResults = results.flat();
        this.setCache(cacheKey, flatResults);
        return flatResults;
      }),
      catchError(error => {
        console.error('Error loading movies by genre:', error);
        return of([]);
      })
    );
  }

  // Optimización: Búsqueda con debounce
  searchMovies(query: string): Observable<Movie[]> {
    if (!query.trim()) {
      return of([]);
    }

    const cacheKey = `search_${query.toLowerCase()}`;
    const cached = this.getCache(cacheKey);
    if (cached) {
      return of(cached);
    }

    return this.apiService.search(query, 1).pipe(
      map(response => response.results
        .filter((item: any) => item.media_type === 'movie' && item.poster_path)
        .map(this.mapMovieData)
      ),
      tap(results => this.setCache(cacheKey, results)),
      catchError(error => {
        console.error('Error searching movies:', error);
        return of([]);
      })
    );
  }

  // Métodos existentes con optimizaciones...
  fetchTrendingMovies(): Observable<Movie[]> {
    const cacheKey = 'trending';
    const cached = this.getCache(cacheKey);
    if (cached) {
      return of(cached);
    }

    return this.apiService.getTrending('movie', 1).pipe(
      map((response: any) => response.results.map(this.mapMovieData)),
      tap(movies => this.setCache(cacheKey, movies)),
      shareReplay(1)
    );
  }

  getNowPlayingMovies(): Observable<Movie[]> {
    const cacheKey = 'now_playing';
    const cached = this.getCache(cacheKey);
    if (cached) {
      return of(cached);
    }

    return this.apiService.getNowPlaying('movie', 1).pipe(
      map((response: any) => response.results.map(this.mapMovieData)),
      tap(movies => this.setCache(cacheKey, movies)),
      shareReplay(1)
    );
  }

  getRecommendedMovies(movieId: number): Observable<Movie[]> {
    const cacheKey = `recommended_${movieId}`;
    const cached = this.getCache(cacheKey);
    if (cached) {
      return of(cached);
    }

    return this.apiService.getRecommended(movieId, 1, 'movie').pipe(
      map((response: any) => response.results.map(this.mapMovieData)),
      tap(movies => this.setCache(cacheKey, movies)),
      shareReplay(1)
    );
  }

  getMoviesBackdrops(movies: Movie[]): Observable<Backdrop[]> {
    return forkJoin(
      movies.map((movie) => 
        this.apiService.getMoviesBackdrop(Number(movie.link.split('/movie/')[1]))
      )
    ).pipe(
      map((backdropsArray) => 
        backdropsArray.flat().filter((backdropData: any) => 
          !this.containsLogo(backdropData) && !this.isDuplicateBackdrop(backdropData)
        ).map((backdropData: any) => createBackdrop(backdropData))
      ),
      catchError((error) => {
        console.error('Error fetching backdrops:', error);
        return of([]);
      }),
      retry(2)
    );
  }

  containsLogo(backdropData: any): boolean {
    return backdropData.file_path.includes('logo') || backdropData.file_path.includes('watermark');
  }

  private isDuplicateBackdrop(backdropData: any): boolean {
    const backdropLink = backdropData.file_path;
    if (this.processedBackdropLinks.has(backdropLink)) {
      return true;
    } else {
      this.processedBackdropLinks.add(backdropLink);
      return false;
    }
  }

  getAllMoviesPaginated(maxPages: number): Observable<Movie[]> {
    const requests = Array.from({ length: maxPages }, (_, index) => 
      this.apiService.getDiscoverMovies(index + 1)
    );
  
    return forkJoin(requests).pipe(
      map((response: any) => response.results.map(this.mapMovieData)),
      catchError(error => throwError(() => new Error('Error fetching movies'))),
      retry(2)
    );
  }
  
  getMoviesByPage(page: number): Observable<Movie[]> {
    const cacheKey = `movies_page_${page}`;
    const cached = this.getCache(cacheKey);
    if (cached) {
      return of(cached);
    }

    return this.apiService.getDiscoverMovies(page).pipe(
      map((response: any) => response.results.map(this.mapMovieData)),
      tap(movies => this.setCache(cacheKey, movies)),
      catchError(error => throwError(() => new Error('Error fetching movies'))),
      retry(2)
    );
  }

  getYouTubeTrailer(movieId: number): Observable<Movie> {
    return this.apiService.getYouTubeVideo(movieId, 'movie').pipe(
      map((videoRes: any) => videoRes.results.find((vid: any) => vid.site === 'YouTube' && vid.type === 'Trailer')),
      retry(2)
    );
  }

  getMovieDetails(movieId: number): Observable<Movie> {
    return this.apiService.getMovie(movieId).pipe(
      map((response: any) => response.results.map(this.mapMovieData)),
      retry(2)
    );
  }

  getMovieWallpapers(movieId: number): Observable<string[]> {
    return this.apiService.getMoviesBackdrop(movieId).pipe(
      map((backdrops: any[]) =>
        backdrops.map((image: any) => 
          `${environment.imageBaseUrl}/${environment.imageSize.original}${image.file_path}`
        )
      ),
      catchError(error => throwError(() => new Error('Error fetching movie wallpapers'))),
      retry(2)
    );
  }
  
  getByGenre(id: number, type: string, page: number): Observable<Movie[]> {
    const cacheKey = `genre_${id}_${type}_${page}`;
    const cached = this.getCache(cacheKey);
    if (cached) {
      return of(cached);
    }

    return this.apiService.getByGenre(id, type, page).pipe(
      map((response: any) => response.results.map(this.mapMovieData)),
      tap(movies => this.setCache(cacheKey, movies)),
      retry(2)
    );
  }

  getCategory(category: string, page: number, mediaType: string): Observable<Movie[]> {
    const cacheKey = `category_${category}_${mediaType}_${page}`;
    const cached = this.getCache(cacheKey);
    if (cached) {
      return of(cached);
    }

    return this.apiService.getCategory(category, page, mediaType).pipe(
      map((response: any) => response.results.map(this.mapMovieData)),
      tap(movies => this.setCache(cacheKey, movies)),
      retry(2)
    );
  }
  
  getGenreList(language: string): Observable<any> {
    const cacheKey = `genres_${language}`;
    const cached = this.getCache(cacheKey);
    if (cached) {
      return of(cached);
    }

    return this.apiService.getGenreList(language).pipe(
      map((response: any) => response.genres.map((genre: any) => ({
        id: genre.id,
        name: genre.name
      }))),
      tap(genres => this.setCache(cacheKey, genres)),
      catchError(error => throwError(() => new Error('Error fetching genres'))),
      retry(2)
    );
  }

  // Método para limpiar caché
  clearCache(): void {
    this.movieCache.clear();
    this.cacheExpiry.clear();
    this.popularMoviesCache = null;
    this.processedBackdropLinks.clear();
  }
}
