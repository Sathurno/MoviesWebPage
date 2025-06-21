import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-overlay',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-overlay" [class.active]="isLoading">
      <div class="loading-content">
        <div class="loading-logo">
          <i class="fas fa-film"></i>
        </div>
        <div class="loading-spinner">
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
        </div>
        <div class="loading-text">
          <h3>{{ title || 'Cargando...' }}</h3>
          <p>{{ message || 'Preparando tu experiencia cinematográfica' }}</p>
        </div>
        <div class="loading-progress" *ngIf="showProgress">
          <div class="progress-bar">
            <div class="progress-fill" [style.width.%]="progress"></div>
          </div>
          <span class="progress-text">{{ progress }}%</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent {
  @Input() isLoading: boolean = false;
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() showProgress: boolean = false;
  @Input() progress: number = 0;
} 