import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { forkJoin, Observable, of } from 'rxjs';

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
  carouselPosition: number = 0;
  movieCategories: { name: string; movies$: Observable<Movie[]> }[] = [];

  constructor(private movieService: MovieService) {}

  //Obtiene las peliculas populares, guarda las imagenes para el carousel y define las categorias del grid
  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(movies => {
        this.popularMovies = movies; 
        this.movieService.initializeMoviesImages(movies); 
        this.movieService.initializeMoviesLogos(movies);
    });
    this.movieCategories = [
      { name: 'Popular', movies$: of(this.popularMovies) }, ];
  }

  //Cambia la posicion del carousel
  onPageChange(event: any) {
    this.carouselPosition = event.page;
  }
}
