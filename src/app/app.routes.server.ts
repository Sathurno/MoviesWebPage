import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'movie/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Return an empty array to skip prerendering for this route
      return [];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
