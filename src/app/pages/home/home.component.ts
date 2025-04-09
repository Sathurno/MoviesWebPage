import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ProgressSpinnerModule, CardModule, ButtonModule, ScrollerModule, CommonModule, SkeletonModule, CarouselModule, MovieCategoryComponent],
  host: { ngSkipHydration: 'true' },
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  carouselPosition = 0;
  movieCategories: { name: string; movies$: Observable<Movie[]> }[] = [];
  selectedImage: Backdrop | null = null;
  allMovies = new Set<number>();
  
  showNavigators = false;
  @HostListener('window:resize', ['$event'])onResize(event: any) {
    this.showNavigators = window.innerWidth >= 800;
  }

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(movies => {
      this.movieService.initializeMoviesImages(movies);
      this.movieService.initializeMoviesLogos(movies);
      this.popularMovies = movies.filter(({ description, thumbnails }) => description?.trim() && thumbnails?.length);
    });

    this.movieService.getGenreList('movie').subscribe((genres: { id: string | number; name: string }[]) => {
      this.movieCategories = genres.slice(0, 11).map(({ id, name }) => {
        return {
          name,
          movies$: this.movieService.getMediaByGenreRange('movie', Number(id), [1, 2]).pipe(
            map(movies => movies.filter(({ id }) => !this.allMovies.has(Number(id)) && this.allMovies.add(Number(id))))
          )
        };
      });
    });
    
  }

  onPageChange(event: any) {
    this.carouselPosition = event.page;
    this.selectedImage = null;
  }

  onThumbnailClick(thumb: Backdrop) {
    this.selectedImage = thumb;
  }

  getImageForCarousel(movie: Movie): string {
    return this.selectedImage?.getBackdropUrl() || movie.principalImage?.getBackdropUrl() || '';
  }
}
