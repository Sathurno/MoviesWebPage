
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 11116, hash: '913e4619ea9f962ecc66c7f8edee8068f8898f8bc0d1424b237b4199a70c7fd8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10481, hash: '1f12c1ce56ff580dc9ec0337ff6da1d2ea292e0f034d4991ccdf32e5f6463f53', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36614, hash: 'eb9fae92b87c9f3b37160896fd53a80e9db098162b4207af2c979eddcfc4a150', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7LQY33HC.css': {size: 1023, hash: '041C93KcD5A', text: () => import('./assets-chunks/styles-7LQY33HC_css.mjs').then(m => m.default)}
  },
};
