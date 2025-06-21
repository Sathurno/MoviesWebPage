import { Component, EventEmitter, Input, OnInit, Output, HostListener, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movie } from '../../../core/models/movie.model';
import { Backdrop } from '../../../core/models/backdrop.model';
import { MovieService } from '../../../core/services/movie.service';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-banner',
  templateUrl: './movies-banner.component.html',
  styleUrls: ['./movies-banner.component.scss'],
  imports: [CarouselModule, CommonModule],
  standalone: true
})
export class MoviesBannerComponent implements OnInit, OnDestroy {
  @Input() movies$!: Observable<Movie[]>;
  @Output() pageChanged = new EventEmitter<number>(); 

  movies: Movie[] = [];
  selectedImage: Backdrop | null = null;
  carouselPosition: number = 0;
  showNavigators = false;
  isBrowser: boolean;
  private subscription: Subscription = new Subscription();

  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 }
  ];

  constructor(
    private movieService: MovieService,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.isBrowser) {
      this.showNavigators = window.innerWidth >= 800;
    }
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.showNavigators = window.innerWidth >= 800;
    }

    if (this.movies$) {
      this.subscription.add(
        this.movies$.subscribe({
          next: (movies) => {
            if (movies && movies.length > 0) {
              this.movieService.initializeMoviesImages(movies);
              this.movieService.initializeMoviesLogos(movies);
              this.movies = movies.filter(movie => 
                movie.description && movie.description.trim() !== '' && movie.thumbnails && movie.thumbnails?.length > 0
              );
            }
          },
          error: (error) => {
            console.error('Error loading movies:', error);
          }
        })
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onPageChange(event: any) {
    this.carouselPosition = event.page;
    this.selectedImage = null;
    this.pageChanged.emit(event.page);
  }

  onThumbnailClick(thumb: Backdrop) {
    this.selectedImage = thumb;
  }

  onMovieClick(movie: Movie) {
    console.log('Movie clicked:', movie);
    this.router.navigate(['/movie', movie.id]);
  }

  getImageForCarousel(movie: Movie): string {
    return this.selectedImage?.getBackdropUrl() || movie.principalImage?.getBackdropUrl() || '';
  }
}
