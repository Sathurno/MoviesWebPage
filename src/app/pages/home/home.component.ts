import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { forkJoin, Observable } from 'rxjs';

import { MovieService } from '../../core/services/movie.service';
import { Movie } from '../../core/models/movie.model';
import { Backdrop } from '../../core/models/backdrop.model';

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
  movieCategories = [
    { name: 'Popular', movies$: new Observable<Movie[]>() },
    { name: 'Recommends', movies$: new Observable<Movie[]>() },
  ];
  movies$: Observable<Movie[]> = new Observable<Movie[]>();
  selectedMovieBackdrops: Backdrop[] = [];
  selectedThumbnails: Backdrop[] = [];
  selectedMovieIndex: number = 0;
  allBackdrops: Backdrop[] = [];
  movieList$: Observable<Movie[]> = new Observable<Movie[]>();
  loading: boolean = true;
  totalPages: number[] = [];

  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 }
  ];

  // Guardamos las películas en una variable local para acceso directo
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies$ = this.movieService.getPopularMovies();
    this.movies$.subscribe(movies => {
      if (movies.length > 0) {
        this.movies = movies; // Guardamos las películas en una variable local
        this.loadAllMoviesBackdrops(movies); // Cargamos los fondos de pantalla
      }
    });
    this.movieList$ = this.movieService.getPopularMovies();
    this.movieCategories = [
      { name: 'Popular', movies$: this.movieService.getPopularMovies() },
    ];
  }

  loadAllMoviesBackdrops(movies: Movie[]) {
    this.loading = true;
    forkJoin(movies.map(movie => this.movieService.getMoviesBackdrops([movie]))).subscribe(allBackdrops => {
      this.allBackdrops = allBackdrops.map(backdrops => backdrops[0]).filter(Boolean);
  
      movies.forEach((movie, index) => {
        movie.thumbnails = allBackdrops[index].slice(1, 5); // Asignar las primeras 4 miniaturas
      });

      this.selectedThumbnails = movies[0].thumbnails || []; // Miniaturas de la primera película
      this.loading = false;
    });
  }

  // Cambiar película en el carrusel y actualizar miniaturas
  onPageChange(event: any) {
    this.selectedMovieIndex = event.page;

    // Accedemos a las películas ya cargadas y actualizamos las miniaturas
    const selectedMovie = this.movies[this.selectedMovieIndex];
    this.selectedThumbnails = selectedMovie?.thumbnails || [];

    // Actualizar la portada de la película actual
    this.selectedMovieBackdrops = [this.allBackdrops[this.selectedMovieIndex]]; // Asumimos que allBackdrops está alineado con las películas
  }
}
