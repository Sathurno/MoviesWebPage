import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable, of } from 'rxjs';

// Services
import { MovieService } from '../../core/services/movie.service';
import { Movie } from '../../core/models/movie.model';
import { Backdrop } from '../../core/models/backdrop.model';

// Components
import { MovieCategoryComponent } from "../../shared/components/movies-category/movies-category.component";

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
  imports: [ProgressSpinnerModule, CardModule, ButtonModule, ScrollerModule, CommonModule, SkeletonModule, CarouselModule, MovieCategoryComponent, LazyLoadDirective],
  host: { ngSkipHydration: 'true' },
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  carouselPosition = 0;
  movieCategories: { id: number; name: string; movies$: Observable<Movie[]>; loading: boolean; loaded: boolean }[] = [];
  selectedImage: Backdrop | null = null;
  allMovies = new Set<number>();
  
  showNavigators = false;
  @HostListener('window:resize', ['$event'])onResize(event: any) {
    this.showNavigators = window.innerWidth >= 800;
  }

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(movies => {
      this.popularMovies = movies.filter(({ description }) => description?.trim());
      if (this.popularMovies.length > 0) {
        this.loadMovieDetails(this.popularMovies[0]);
      }
    });

    this.movieService.getGenreList('movie').subscribe((genres: { id: number; name: string }[]) => {
      this.movieCategories = genres.slice(0, 11).map(({ id, name }) => {
        return {
          id,
          name,
          movies$: of([]),
          loading: false,
          loaded: false
        };
      });
    });
    
  }

  loadMovieDetails(movie: Movie) {
    if (movie.principalImage) { // Ya cargado
      return;
    }

    this.movieService.initializeMoviesImages([movie]);
    this.movieService.initializeMoviesLogos([movie]);
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
        return movies.filter(({ id }) => !this.allMovies.has(Number(id)) && this.allMovies.add(Number(id)))
      })
    );
  }

  onPageChange(event: any) {
    this.carouselPosition = event.page;
    this.selectedImage = null;
    
    const movie = this.popularMovies[event.page];
    if (movie) {
      this.loadMovieDetails(movie);
    }
  }

  onThumbnailClick(thumb: Backdrop) {
    this.selectedImage = thumb;
  }

  getImageForCarousel(movie: Movie): string {
    return this.selectedImage?.getBackdropUrl() || movie.principalImage?.getBackdropUrl() || '';
  }
}
