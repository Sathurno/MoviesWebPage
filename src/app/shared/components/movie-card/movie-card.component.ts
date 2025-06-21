import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../core/models/movie.model';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie: Movie | undefined;
  @Output() cardClick = new EventEmitter<Movie>();

  constructor(private router: Router) {}

  onCardClick(): void {
    if (this.movie) {
      this.router.navigate(['/movie', this.movie.id]);
    }
  }
} 