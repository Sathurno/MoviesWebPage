import { Component, HostListener, OnInit, OnDestroy, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable, of, Subscription, forkJoin, timer, delay, switchMap, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { takeUntil, finalize } from 'rxjs/operators';

// Services
import { MovieService } from '../../core/services/movie.service';
import { Movie } from '../../core/models/movie.model';
import { Backdrop } from '../../core/models/backdrop.model';
import { SearchStateService } from '../../core/services/search-state.service';
import { LoadingService } from '../../core/services/loading.service';

// Components
import { MovieCategoryComponent } from "../../shared/components/movies-category/movies-category.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';

// PrimeNG Modules
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ScrollerModule } from 'primeng/scroller';
import { SkeletonModule } from 'primeng/skeleton';
import { CarouselModule } from 'primeng/carousel';
import { LazyLoadDirective } from '../../shared/directives/lazy-load.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ProgressSpinnerModule, CardModule, ButtonModule, ScrollerModule, CommonModule, SkeletonModule, CarouselModule, MovieCategoryComponent, LazyLoadDirective, FooterComponent, MovieCardComponent],
  host: { ngSkipHydration: 'true' },
})
export class HomeComponent implements OnInit, OnDestroy {
  popularMovies: Movie[] = [];
  carouselPosition = 0;
  movieCategories: { id: number; name: string; movies$: Observable<Movie[]>; loading: boolean; loaded: boolean }[] = [];
  selectedImage: Backdrop | null = null;
  allMovies = new Set<number>();
  
  isSearching: boolean = false;
  searchResults: Movie[] = [];
  searchQuery: string = '';
  private searchSubscription: Subscription | undefined;
  private querySubscription: Subscription | undefined;
  private destroy$ = new Subscription();

  showNavigators = true;
  isMobile = false;
  isInitialLoad = true;

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  constructor(
    private movieService: MovieService,
    private searchStateService: SearchStateService,
    private loadingService: LoadingService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.onResize();
  }

  ngOnInit() {
    this.loadInitialData();
    this.setupSearchSubscriptions();
  }

  private loadInitialData(): void {
    const dataFetch$ = this.movieService.getPopularMovies().pipe(
      tap(movies => {
        this.popularMovies = movies;
      }),
      switchMap(movies => {
        const genresAndCategories$ = this.movieService.getGenreList('movie').pipe(
          switchMap(genres => {
            this.movieCategories = genres.slice(0, 11).map((genre: { id: number; name: string; }) => ({
              id: genre.id,
              name: genre.name,
              movies$: of([]),
              loading: false,
              loaded: false
            }));
            
            const initialCategories = this.movieCategories.slice(0, 3);
            if (initialCategories.length === 0) {
              return of([]);
            }

            const categoryLoaders$ = initialCategories.map(category => {
              category.loading = true;
              return this.movieService.getMediaByGenreRange('movie', category.id, [1, 2]).pipe(
                tap(catMovies => {
                  category.loading = false;
                  category.loaded = true;
                  const uniqueMovies = catMovies.filter(({ id }) => !this.allMovies.has(Number(id)) && this.allMovies.add(Number(id)));
                  category.movies$ = of(this.isMobile ? uniqueMovies.slice(0, 9) : uniqueMovies);
                })
              );
            });
            return forkJoin(categoryLoaders$);
          })
        );

        const movieDetails$ = movies.length > 0 ? this.loadMovieDetails(movies[0]) : of(null);

        return forkJoin([genresAndCategories$, movieDetails$]);
      })
    );

    of(null).pipe(
      delay(0),
      tap(() => this.loadingService.show()),
      switchMap(() => dataFetch$),
      finalize(() => {
        this.isInitialLoad = false;
        this.loadingService.hide();
        this.cdr.detectChanges();
      })
    ).subscribe({
      error: (error) => {
        console.error('Error loading initial data:', error);
      }
    });
  }

  private setupSearchSubscriptions(): void {
    this.searchSubscription = this.searchStateService.isSearching$.subscribe(isSearching => {
      this.isSearching = isSearching;
      if (isSearching) {
        this.movieCategories.forEach(c => c.loaded = false);
        this.allMovies.clear();
      }
    });

    this.searchStateService.searchResults$.subscribe(results => {
      this.searchResults = results;
    });

    this.querySubscription = this.searchStateService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
    });
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe();
    this.searchSubscription?.unsubscribe();
    this.querySubscription?.unsubscribe();
  }

  loadMovieDetails(movie: Movie): Observable<void> {
    if (movie.logosUrls) {
      return of(undefined);
    }
    return this.movieService.initializeMoviesLogos([movie]);
  }

  loadCategory(category: { id: number; name: string; movies$: Observable<Movie[]>; loading: boolean; loaded: boolean }) {
    if (category.loaded || category.loading) {
      return;
    }
    
    category.loading = true;
    category.movies$ = this.movieService.getMediaByGenreRange('movie', category.id, [1, 2]).pipe(
      map(movies => {
        category.loading = false;
        category.loaded = true;
        const uniqueMovies = movies.filter(({ id }) => !this.allMovies.has(Number(id)) && this.allMovies.add(Number(id)));
        return this.isMobile ? uniqueMovies.slice(0, 9) : uniqueMovies;
      }),
      finalize(() => {
        category.loading = false;
        this.cdr.detectChanges();
      })
    );
  }

  onPageChange(event: any) {
    this.carouselPosition = event.page;
    this.selectedImage = null;
    
    const movie = this.popularMovies[event.page];
    if (movie) {
      this.loadMovieDetails(movie).subscribe();
    }
  }

  onThumbnailClick(thumb: Backdrop) {
    this.selectedImage = thumb;
  }

  getImageForCarousel(movie: Movie): string {
    return this.selectedImage?.getBackdropUrl() || movie.principalImage?.getBackdropUrl() || '';
  }

  isLongDescription(description: string): boolean {
    if (!description) {
      return false;
    }
    const wordCount = description.split(/\s+/).length;
    return wordCount > 50;
  }
}
