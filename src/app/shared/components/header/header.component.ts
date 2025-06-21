import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap, startWith, pairwise } from 'rxjs/operators';
import { MovieService } from '../../../core/services/movie.service';
import { SearchStateService } from '../../../core/services/search-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  public isScrolled = false;

  constructor(
    private movieService: MovieService,
    private searchStateService: SearchStateService,
    private router: Router
  ) {}

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'input').pipe(
      map(event => (event.target as HTMLInputElement).value),
      startWith(''),
      pairwise(),
      tap(([prevQuery, currentQuery]) => {
        if (!prevQuery && currentQuery && this.router.url !== '/') {
          this.searchStateService.setPreviousUrl(this.router.url);
        }

        this.searchStateService.setSearching(!!currentQuery);
        this.searchStateService.setSearchQuery(currentQuery);

        if (currentQuery) {
          this.router.navigate(['/']);
        } else {
          const previousUrl = this.searchStateService.getPreviousUrl();
          if (previousUrl) {
            this.router.navigateByUrl(previousUrl);
            this.searchStateService.setPreviousUrl(null);
          }
        }
      }),
      map(([_, currentQuery]) => currentQuery),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => {
        if (query) {
          return this.movieService.searchMovies(query);
        } else {
          this.searchStateService.setSearchResults([]);
          return [];
        }
      })
    ).subscribe(results => {
      this.searchStateService.setSearchResults(results);
    });
  }

  clearSearch() {
    this.searchInput.nativeElement.value = '';
    this.searchInput.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }
} 