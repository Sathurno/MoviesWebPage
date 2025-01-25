import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { forkJoin, Observable } from 'rxjs';
import { Movie } from '../../core/models/movie.model';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ScrollerModule } from 'primeng/scroller';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { CarouselModule } from 'primeng/carousel';
import { Backdrop } from '../../core/models/backdrop.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ProgressSpinnerModule, CardModule, ButtonModule, ScrollerModule, CommonModule, SkeletonModule, CarouselModule],
  host: { ngSkipHydration: 'true' },
})
export class HomeComponent implements OnInit {
  movies$: Observable<Movie[]> = new Observable<Movie[]>(); 
  selectedMovieBackdrops: Backdrop[] = [];
  selectedThumbnails: Backdrop[] = [];
  allBackdrops: Backdrop[] = []

  backdrops$: Observable<Backdrop[]> = new Observable<Backdrop[]>(); 
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

  ngOnInit() {;
    this.movies$ = this.movieService.getPopularMovies();
    this.movies$.subscribe(movies => {
      if (movies.length > 0) {
        this.loadAllMoviesBackdrops(movies);
      }
    });
  

    this.moviesData$ = this.movieService.getAllMoviesPaginated(10);
    this.moviesData$.subscribe(movies => {
      this.totalPages = Array.from({ length: Math.ceil(movies.length / 40) }, (_, i) => i + 1);
      this.movieList$ = this.movieService.getMoviesByPage(1);
      this.loading = false;
    });
  }
  // Carga un backdrop de cada película y almacena 4 miniaturas adicionales para la primera película
  loadAllMoviesBackdrops(movies: Movie[]) {
    this.loading = true;
    
    // Obtener los backdrops de todas las películas simultáneamente
    forkJoin(movies.map(movie => this.movieService.getMoviesBackdrops([movie]))).subscribe(allBackdrops => {
      // Mostrar un backdrop de cada película en el carrusel
      this.allBackdrops = allBackdrops.map(backdrops => backdrops[0]).filter(Boolean);

      // Cargar miniaturas de la primera película
      if (allBackdrops.length > 0 && allBackdrops[0].length > 1) {
        this.selectedMovieBackdrops = [allBackdrops[0][0]];
        this.selectedThumbnails = allBackdrops[0].slice(1, 5); // Tomar 4 miniaturas
      }

      this.loading = false;
    });
  }
  // Cambiar película en el carrusel
  changeMovie(event: any) {
    const selectedIndex = event.page;
    this.selectedMovieBackdrops = [this.allBackdrops[selectedIndex]];

    // Obtener y mostrar miniaturas de la película seleccionada
    this.movies$.subscribe(movies => {
      this.movieService.getMoviesBackdrops([movies[selectedIndex]]).subscribe(backdrops => {
        this.selectedThumbnails = backdrops.slice(1, 5);
      });
    });
  }

  // Mostrar el backdrop seleccionado al hacer clic en una miniatura
  showBackdrop(backdrop: Backdrop) {
    this.selectedMovieBackdrops = [backdrop];
  }

  changePage(page: number) {
    this.movieList$ = this.movieService.getMoviesByPage(page);
  }
}