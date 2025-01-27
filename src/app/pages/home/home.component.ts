import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { forkJoin, map, Observable, of } from 'rxjs';

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
  showNavigators: boolean = true;
  popularMovies: Movie[] = [];
  carouselPosition: number = 0;
  movieCategories: { name: string; movies$: Observable<Movie[]> }[] = [];
  selectedImage: Backdrop | null = null;
  genreList: Observable<any>;
  allMovies: Set<number> = new Set(); // Para asegurar que no haya películas repetidas

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth < 800) {
      this.showNavigators = false; // Ocultar los navegadores cuando la ventana es menor a 1000px
    } else {
      this.showNavigators = true; // Mostrar los navegadores si la ventana es mayor o igual a 1000px
    }
  }
  
  constructor(private movieService: MovieService) {
    this.genreList = this.movieService.getGenreList('movie');
  }

  //Obtiene las peliculas populares, guarda las imagenes para el carousel y define las categorias del grid
  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(movies => {
      this.movieService.initializeMoviesImages(movies); 
      this.movieService.initializeMoviesLogos(movies);
      this.popularMovies = movies.filter(movie => 
        movie.description && movie.description.trim() !== '' && movie.thumbnails && movie.thumbnails?.length > 0
      );       
    });
    this.movieService.getGenreList('movie').subscribe(genres => {
      const genreObservables = genres.slice(0, 11).map((genre: { id: number; name: string }) => {
        return {
          name: genre.name,
          movies$: this.movieService.getMediaByGenreRange('movie', genre.id, [1, 2]).pipe(
            map((movies: Movie[]) => {
              const uniqueMovies = movies.filter(movie => !this.allMovies.has(Number(movie.id)));
              uniqueMovies.forEach(movie => this.allMovies.add(Number(movie.id))); // Añadir las películas al set
              return uniqueMovies;
            })
          )
        };
      });
      this.movieCategories = genreObservables;
    });
    this.movieCategories = [
      ...this.movieCategories, 
    ];
  }

  //Cambia la posicion del carousel
  onPageChange(event: any) {
    this.carouselPosition = event.page;
    this.selectedImage = null;
  }

  // Cambiar la imagen principal al hacer clic en un thumbnail
  onThumbnailClick(thumb: Backdrop) {
    this.selectedImage = thumb; 

  }

   // Obtener la imagen principal dependiendo si se seleccionó un thumbnail
  getImageForCarousel(movie: Movie): string {
    return this.selectedImage?.getBackdropUrl() || movie.principalImage?.getBackdropUrl() || '';
  }
}
