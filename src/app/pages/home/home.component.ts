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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ProgressSpinnerModule, CardModule, ButtonModule, ScrollerModule, CommonModule, SkeletonModule]
})
export class HomeComponent implements OnInit {
  moviesSlider$: Observable<Movie[]> = new Observable<Movie[]>();  
  moviesData$: Observable<Movie[]> = new Observable<Movie[]>(); 
  movieList$: Observable<Movie[]> = new Observable<Movie[]>();
  loading: boolean = true;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    // Llamar a la API para obtener películas populares y en cartelera
    this.moviesSlider$ = this.movieService.fetchTrendingMovies();
    this.moviesData$ = this.movieService.getAllMoviesPaginated(7);
    
    // Ocultar el spinner cuando los datos estén listos
    this.moviesSlider$.subscribe(() => (this.loading = false));
    this.moviesData$.subscribe(() => (this.loading = false));

    //Elegir peliculas a mostrar
    this.movieList$ = this.moviesData$;


  }
}
