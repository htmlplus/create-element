import { vite as htmlplus } from '@htmlplus/element/bundlers/index.js';
import { createServer } from 'vite';

import plugins from '../plus.config.js';

createServer({
  server: {
    open: true
  },
  esbuild: {
    target: 'ES2016'
  },
  plugins: [htmlplus(...plugins)]
})
  .then((server) => server.listen())
  .catch((error) => console.log(error));
