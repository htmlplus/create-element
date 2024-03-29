import { htmlplus } from '@htmlplus/element/bundlers/rollup.js';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { rollup } from 'rollup';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

import plugins from '../htmlplus.config.js';

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: './src/my-counter.tsx',
  output: [
    {
      format: 'esm',
      dir: 'dist'
    }
  ],
  plugins: [
    postcss({
      inject: false,
      minimize: true
    }),

    htmlplus(...plugins),

    resolve({
      browser: true
    }),

    commonjs(),

    typescript({ useTsconfigDeclarationDir: true })
  ]
};

(async () => {
  const bundle = await rollup(options);

  for (const output of options.output) await bundle.write(output);

  await bundle.close();
})();
