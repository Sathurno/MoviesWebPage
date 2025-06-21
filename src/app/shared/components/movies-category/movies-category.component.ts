import { Component, Input, OnInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { Movie } from '../../../core/models/movie.model';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movies-category.component.html',
  imports: [CommonModule, CarouselModule, ButtonModule, SkeletonModule],
  styleUrls: ['./movies-category.component.scss'],
})
export class MovieCategoryComponent implements OnInit {
  @Input() title: string = '';
  @Input() movies: Movie[] = [];
  @Input() loading: boolean = false;

  isMobile: boolean = false;

  // Array para los esqueletos de carga
  skeletonItems = Array(5).fill(0);

  responsiveOptions = [
    {
      breakpoint: '1200px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '992px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '576px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '375px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.checkIfMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event): void {
    this.checkIfMobile();
  }

  private checkIfMobile(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  onMovieClick(movie: Movie) {
    console.log('Película seleccionada:', movie);
    // Navigate to movie details page
    this.router.navigate(['/movie', movie.id]);
  }
}
