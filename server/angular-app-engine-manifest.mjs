
export default {
  basePath: '/MoviesWebPage/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
