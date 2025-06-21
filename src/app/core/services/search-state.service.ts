import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class SearchStateService {
  private isSearchingSubject = new BehaviorSubject<boolean>(false);
  isSearching$ = this.isSearchingSubject.asObservable();

  private searchResultsSubject = new BehaviorSubject<Movie[]>([]);
  searchResults$ = this.searchResultsSubject.asObservable();

  private searchQuerySubject = new BehaviorSubject<string>('');
  searchQuery$ = this.searchQuerySubject.asObservable();

  private previousUrl: string | null = null;

  constructor() { }

  setSearching(isSearching: boolean) {
    this.isSearchingSubject.next(isSearching);
  }

  setSearchResults(results: Movie[]) {
    this.searchResultsSubject.next(results);
  }

  setSearchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }

  clearSearch() {
    this.isSearchingSubject.next(false);
    this.searchResultsSubject.next([]);
    this.searchQuerySubject.next('');
  }

  setPreviousUrl(url: string | null) {
    this.previousUrl = url;
  }

  getPreviousUrl(): string | null {
    return this.previousUrl;
  }
}
