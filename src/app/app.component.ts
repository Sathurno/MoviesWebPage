import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoadingOverlayComponent } from './shared/components/loading-overlay/loading-overlay.component';
import { LoadingService, LoadingState } from './core/services/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, LoadingOverlayComponent],
  template: `
    <app-loading-overlay 
      [isLoading]="(loadingState$ | async)?.isLoading || false"
      [title]="(loadingState$ | async)?.title || ''"
      [message]="(loadingState$ | async)?.message || ''"
      [showProgress]="(loadingState$ | async)?.showProgress || false"
      [progress]="(loadingState$ | async)?.progress || 0">
    </app-loading-overlay>
    
    <div class="main-content" [class.content-hidden]="(loadingState$ | async)?.isLoading">
      <app-header></app-header>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .main-content {
      transition: opacity 0.4s ease-in-out;
      opacity: 1;
    }

    .content-hidden {
      opacity: 0;
      pointer-events: none;
    }
  `]
})
export class AppComponent {
  loadingState$: Observable<LoadingState>;

  constructor(private loadingService: LoadingService) {
    this.loadingState$ = this.loadingService.loading$;
  }
}
 