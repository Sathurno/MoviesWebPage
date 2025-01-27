import { Component, Input } from '@angular/core';
import { Movie } from '../../../core/models/movie.model';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movies-category.component.html',
  imports: [CommonModule, CarouselModule, ButtonModule],
  styleUrls: ['./movies-category.component.scss'],
})
export class MovieCategoryComponent {
  @Input() title: string = '';
  @Input() movies: Movie[] = [];

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
  onMovieClick(movie: Movie) {
    console.log('Película seleccionada:', movie);
    // Puedes redirigir a una página de detalles o abrir un modal
  }
  
  
}
