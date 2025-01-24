import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../../core/models/movie.model';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ScrollerModule } from 'primeng/scroller';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ProgressSpinnerModule, CardModule, ButtonModule, ScrollerModule, CommonModule, SkeletonModule, CarouselModule],
  host: { ngSkipHydration: 'true' },
})
export class HomeComponent implements OnInit {
  moviesSlider$: Observable<Movie[]> = new Observable<Movie[]>();  
  moviesData$: Observable<Movie[]> = new Observable<Movie[]>(); 
  movieList$: Observable<Movie[]> = new Observable<Movie[]>();
  loading: boolean = true; 
  totalPages: number[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.moviesSlider$ = this.movieService.fetchTrendingMovies();
    this.moviesData$ = this.movieService.getAllMoviesPaginated(10);
    this.moviesData$.subscribe(movies => {
      this.totalPages = Array.from({ length: Math.ceil(movies.length / 40) }, (_, i) => i + 1);
      this.movieList$ = this.movieService.getMoviesByPage(1);
      this.loading = false;
    });
  }

  changePage(page: number) {
    this.movieList$ = this.movieService.getMoviesByPage(page);
  }
}