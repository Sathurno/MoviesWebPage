import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';
import { ApiService } from '../../core/services/api.service';
import { LoadingService } from '../../core/services/loading.service';
import { Movie, CastMember, Director } from '../../core/models/movie.model';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';
import { forkJoin } from 'rxjs';
import { map, finalize, catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, FooterComponent, MovieCardComponent],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | null = null;
  similarMovies: Movie[] = [];
  cast: CastMember[] = [];
  director: Director | null = null;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private apiService: ApiService,
    private loadingService: LoadingService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      if (movieId) {
        this.loadMovieDetails(movieId);
      }
    });
  }

  private loadMovieDetails(movieId: string): void {
    this.loading = true;
    this.error = false;
    this.loadingService.show('Cargando película', 'Obteniendo detalles y información...');

    // Cargar datos en paralelo para mejor rendimiento
    const movieDetails$ = this.apiService.getMovie(Number(movieId));
    const credits$ = this.apiService.getCredits(Number(movieId), 'movie');
    const similar$ = this.movieService.getRecommendedMovies(Number(movieId));

    forkJoin([movieDetails$, credits$, similar$])
      .pipe(
        finalize(() => {
          this.loading = false;
          this.loadingService.hide();
          this.cdr.detectChanges();
        }),
        retry(2)
      )
      .subscribe({
        next: ([movieResponse, creditsResponse, similarMovies]) => {
          if (movieResponse) {
            this.movie = {
              id: movieResponse.id.toString(),
              link: `/movie/${movieResponse.id}`,
              imgSrc: movieResponse.poster_path ? `https://image.tmdb.org/t/p/w500${movieResponse.poster_path}` : null,
              title: movieResponse.title,
              rating: Math.round(movieResponse.vote_average * 10),
              vote: movieResponse.vote_average,
              description: movieResponse.overview || '',
              genres: movieResponse.genres,
              release_date: movieResponse.release_date,
              budget: movieResponse.budget,
              revenue: movieResponse.revenue,
              runtime: movieResponse.runtime,
            };

            // Procesar créditos
            this.processCredits(creditsResponse);
            
            // Procesar películas similares
            this.similarMovies = similarMovies.filter(m => m.id !== movieId).slice(0, 6);

            // Preload imágenes críticas
            this.preloadCriticalImages();
          } else {
            this.error = true;
          }
        },
        error: (err) => {
          console.error('Error loading movie details:', err);
          this.error = true;
        }
      });
  }

  private processCredits(credits: any): void {
    // Procesar director
    const directorData = credits.crew.find((member: any) => member.job === 'Director');
    if (directorData) {
      this.director = {
        id: directorData.id,
        name: directorData.name,
        profile_path: directorData.profile_path
          ? `https://image.tmdb.org/t/p/w200${directorData.profile_path}`
          : null,
      };
    }

    // Procesar cast (solo los primeros 10 para mejor rendimiento)
    this.cast = credits.cast.slice(0, 10).map((member: any) => ({
      id: member.id,
      name: member.name,
      character: member.character,
      profile_path: member.profile_path 
        ? `https://image.tmdb.org/t/p/w200${member.profile_path}` 
        : null,
    }));
  }

  private preloadCriticalImages(): void {
    if (!this.movie) return;

    // Preload poster principal
    if (this.movie.imgSrc) {
      const img = new Image();
      img.src = this.movie.imgSrc;
    }

    // Preload imágenes del cast (solo las primeras 5)
    this.cast.slice(0, 5).forEach(actor => {
      if (actor.profile_path) {
        const img = new Image();
        img.src = actor.profile_path;
      }
    });

    // Preload imágenes de películas similares (solo las primeras 3)
    this.similarMovies.slice(0, 3).forEach(movie => {
      if (movie.imgSrc) {
        const img = new Image();
        img.src = movie.imgSrc;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
} 