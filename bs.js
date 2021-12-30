const bs = require('browser-sync');

bs({
  server: 'templates',
  files: 'templates/**',
  notify: false,
  port: 4000,
});
