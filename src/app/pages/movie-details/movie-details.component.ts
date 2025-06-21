import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';
import { ApiService } from '../../core/services/api.service';
import { Movie, CastMember, Director } from '../../core/models/movie.model';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

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

    this.apiService.getMovie(Number(movieId)).subscribe({
      next: (response: any) => {
        if (response) {
          this.movie = {
            id: response.id.toString(),
            link: `/movie/${response.id}`,
            imgSrc: response.poster_path ? `https://image.tmdb.org/t/p/w500${response.poster_path}` : null,
            title: response.title,
            rating: Math.round(response.vote_average * 10),
            vote: response.vote_average,
            description: response.overview || '',
            genres: response.genres,
            release_date: response.release_date,
            budget: response.budget,
            revenue: response.revenue,
            runtime: response.runtime,
          };
          this.loadCredits(Number(movieId));
          this.loadSimilarMovies(this.movie);
        } else {
          this.error = true;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading movie details:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  private loadCredits(movieId: number): void {
    this.apiService.getCredits(movieId, 'movie').subscribe({
      next: (credits: any) => {
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

        this.cast = credits.cast.slice(0, 10).map((member: any) => ({
          id: member.id,
          name: member.name,
          character: member.character,
          profile_path: member.profile_path 
            ? `https://image.tmdb.org/t/p/w200${member.profile_path}` 
            : null,
        }));
      },
      error: (err) => {
        console.error('Error loading credits:', err);
      }
    });
  }

  private loadSimilarMovies(movie: Movie): void {
    const recommended$ = this.movieService.getRecommendedMovies(Number(movie.id));
    const similarByCategory$ = movie.genres && movie.genres.length > 0
      ? this.movieService.getMediaByGenreRange('movie', movie.genres[0].id, [1, 2])
      : forkJoin([]);
  
    forkJoin([recommended$, similarByCategory$]).pipe(
      map(([recommended, similar]) => {
        const allSimilar = [...recommended, ...similar];
        const uniqueMovies = Array.from(new Map(allSimilar.map(m => [m.id, m])).values());
        return uniqueMovies.filter(m => m.id !== movie.id).slice(0, 6);
      })
    ).subscribe({
      next: (movies) => {
        this.similarMovies = movies;
      },
      error: (err) => {
        console.error('Error loading similar movies:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
} 