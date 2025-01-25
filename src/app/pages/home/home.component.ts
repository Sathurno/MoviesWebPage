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
  selectedMovieIndex: number = 0;
  allBackdrops: Backdrop[] = [];
  moviesData$: Observable<Movie[]> = new Observable<Movie[]>();
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

    this.moviesData$ = this.movieService.getAllMoviesPaginated(10);
    this.moviesData$.subscribe(movies => {
      this.totalPages = Array.from({ length: Math.ceil(movies.length / 40) }, (_, i) => i + 1);
      this.movieList$ = this.movieService.getMoviesByPage(1);
      this.loading = false;
    });
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

  // Mostrar el backdrop seleccionado al hacer clic en una miniatura
  showBackdrop(backdrop: Backdrop) {
    this.selectedMovieBackdrops = [backdrop];
    const movie = this.movies.find(m => m.thumbnails?.includes(backdrop));
    if (movie) {
      this.selectedThumbnails = movie.thumbnails || [];
    }
  }

  changePage(page: number) {
    this.movieList$ = this.movieService.getMoviesByPage(page);
  }
}
