import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

interface CacheEntry {
  data: any;
  timestamp: number;
  expiresAt: number;
}

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, CacheEntry>();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Solo cachear peticiones GET
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const cacheKey = this.generateCacheKey(request);
    const cachedResponse = this.getCachedResponse(cacheKey);

    if (cachedResponse) {
      return of(new HttpResponse({ body: cachedResponse }));
    }

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cacheResponse(cacheKey, event.body);
        }
      }),
      catchError(error => {
        // En caso de error, intentar usar caché si existe
        const cachedResponse = this.getCachedResponse(cacheKey);
        if (cachedResponse) {
          return of(new HttpResponse({ body: cachedResponse }));
        }
        throw error;
      })
    );
  }

  private generateCacheKey(request: HttpRequest<any>): string {
    const url = request.url;
    const params = request.params.toString();
    return `${url}?${params}`;
  }

  private getCachedResponse(key: string): any {
    const entry = this.cache.get(key);
    if (entry && Date.now() < entry.expiresAt) {
      return entry.data;
    }
    if (entry) {
      this.cache.delete(key);
    }
    return null;
  }

  private cacheResponse(key: string, data: any): void {
    const entry: CacheEntry = {
      data,
      timestamp: Date.now(),
      expiresAt: Date.now() + this.CACHE_DURATION
    };
    this.cache.set(key, entry);
  }

  clearCache(): void {
    this.cache.clear();
  }
} 