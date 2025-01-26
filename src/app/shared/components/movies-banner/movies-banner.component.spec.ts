import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesBannerComponent } from './movies-banner.component';

describe('MoviesBannerComponent', () => {
  let component: MoviesBannerComponent;
  let fixture: ComponentFixture<MoviesBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
