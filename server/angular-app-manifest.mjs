
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/MoviesWebPage/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/MoviesWebPage"
  }
],
  assets: {
    'index.csr.html': {size: 11130, hash: '84029e972ae8d2759ef33dbcd1c8b533387f99ad5d9289146a96a75d8382ea6f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10495, hash: 'a8fa1db668ebe9dea9595ad7d5354c247d85f3963880a7eeada843d322d289c4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1791380, hash: '0d492a58ea26b0f8b1d73848336bffaf4e7d5aad2452dfaa0243771459a8bb29', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7LQY33HC.css': {size: 1023, hash: '041C93KcD5A', text: () => import('./assets-chunks/styles-7LQY33HC_css.mjs').then(m => m.default)}
  },
};
