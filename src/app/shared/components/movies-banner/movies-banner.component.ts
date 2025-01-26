import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Movie } from '../../../core/models/movie.model';
import { Backdrop } from '../../../core/models/backdrop.model';
import { MovieService } from '../../../core/services/movie.service';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-banner',
  templateUrl: './movies-banner.component.html',
  styleUrls: ['./movies-banner.component.scss'],
  imports: [CarouselModule, CommonModule],
})
export class MoviesBannerComponent implements OnInit {
  @Input() movies$: Observable<Movie[]> = new Observable<Movie[]>();
  @Output() pageChanged = new EventEmitter<number>(); 

  allBackdrops: Backdrop[] = [];
  selectedMovieBackdrops: Backdrop[] = [];
  movies: Movie[] = [];
  selectedThumbnails: Backdrop[] = [];
  selectedMovieIndex: number = 0;
  loading: boolean = true;

  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 }
  ];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies$.subscribe(movies => {
      if (movies.length > 0) {
        this.loadAllMoviesBackdrops(movies);
      }
    });
  }

  loadAllMoviesBackdrops(movies: Movie[]) {
    this.loading = true;
    forkJoin(movies.map(movie => this.movieService.getMoviesBackdrops([movie]))).subscribe(allBackdrops => {
      this.allBackdrops = allBackdrops.map(backdrops => backdrops[0]).filter(Boolean);
      
      movies.forEach((movie, index) => {
        movie.thumbnails = allBackdrops[index].slice(1, 5); 
      });
  
      // Verificar si las miniaturas se cargan correctamente
      console.log('Thumbnails:', movies[0]?.thumbnails);
  
      this.selectedThumbnails = movies[0]?.thumbnails || [];
      this.loading = false;
    });
  }
  

  onPageChange(event: any) {
    this.selectedMovieIndex = event.page;
  
    // Asegúrate de que la película seleccionada tenga miniaturas
    const selectedMovie = this.movies[this.selectedMovieIndex];
    this.selectedThumbnails = selectedMovie?.thumbnails || [];
  
    // Actualizar la portada de la película
    this.selectedMovieBackdrops = [this.allBackdrops[this.selectedMovieIndex]]; // Asegúrate de que allBackdrops está alineado con las películas
  }
}
