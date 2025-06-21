import { Directive, ElementRef, EventEmitter, Output, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appLazyLoad]',
  standalone: true
})
export class LazyLoadDirective implements AfterViewInit, OnDestroy {
  @Output() appLazyLoad = new EventEmitter<void>();
  private observer: IntersectionObserver | undefined;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.appLazyLoad.emit();
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      });

      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
