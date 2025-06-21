import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.routes').then(m =>  m.HOME_ROUTES),
        pathMatch: 'full',
    },
    {
        path: 'movie/:id',
        loadChildren: () => import('./pages/movie-details/movie-details.routes').then(m => m.MOVIE_DETAILS_ROUTES),
    }
];
