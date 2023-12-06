import { htmlplus } from '@htmlplus/element/bundlers/vite.js';
import { createServer } from 'vite';

import plugins from '../htmlplus.config.js';

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
