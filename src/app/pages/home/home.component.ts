import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { Movie } from '../../core/models/movie.model'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  moviesSlider$: Observable<Movie[]> = new Observable<Movie[]>();  
  moviesData$: Observable<Movie[]> = new Observable<Movie[]>(); 
  
  constructor(private movieService: MovieService, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    // Mostrar el spinner cuando se comienza a cargar la información
    this.spinner.show();

    // Llamar a la API para obtener películas populares y en cartelera
    this.moviesSlider$ = this.movieService.fetchTrendingMovies();
    this.moviesData$ = this.movieService.getNowPlayingMovies();

    // Ocultar el spinner cuando los datos estén listos
    this.moviesSlider$.subscribe(() => this.spinner.hide());
    this.moviesData$.subscribe(() => this.spinner.hide());
  }
}
