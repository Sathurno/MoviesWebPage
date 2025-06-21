import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface LoadingState {
  isLoading: boolean;
  title?: string;
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<LoadingState>({
    isLoading: false,
    title: '',
    message: '',
    showProgress: false,
    progress: 0
  });

  public loading$: Observable<LoadingState> = this.loadingSubject.asObservable();

  show(title?: string, message?: string): void {
    this.loadingSubject.next({
      isLoading: true,
      title: title || 'Cargando...',
      message: message || 'Preparando tu experiencia cinematográfica',
      showProgress: false,
      progress: 0
    });
  }

  showWithProgress(title?: string, message?: string): void {
    this.loadingSubject.next({
      isLoading: true,
      title: title || 'Cargando...',
      message: message || 'Preparando tu experiencia cinematográfica',
      showProgress: true,
      progress: 0
    });
  }

  updateProgress(progress: number): void {
    const currentState = this.loadingSubject.value;
    this.loadingSubject.next({
      ...currentState,
      progress: Math.min(100, Math.max(0, progress))
    });
  }

  hide(): void {
    this.loadingSubject.next({
      isLoading: false,
      title: '',
      message: '',
      showProgress: false,
      progress: 0
    });
  }

  // Método para simular progreso automático
  simulateProgress(duration: number = 3000, steps: number = 30): void {
    this.showWithProgress();
    const interval = duration / steps;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      const progress = (currentStep / steps) * 100;
      this.updateProgress(progress);

      if (currentStep >= steps) {
        clearInterval(progressInterval);
        setTimeout(() => this.hide(), 500);
      }
    }, interval);
  }
} 