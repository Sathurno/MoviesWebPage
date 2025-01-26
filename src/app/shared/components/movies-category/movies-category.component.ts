import { Component, Input } from '@angular/core';
import { Movie } from '../../../core/models/movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movies-category.component.html',
  imports: [CommonModule],
  styleUrls: ['./movies-category.component.scss'],
})
export class MovieCategoryComponent {
  @Input() title: string = '';
  @Input() movies: Movie[] = [];
}
