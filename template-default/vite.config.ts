import path from 'node:path';

import { vite as htmlplus } from '@htmlplus/element/bundlers.js';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import plugins from './htmlplus.config.js';

export default defineConfig({
	server: {
		open: true
	},
	plugins: [
		htmlplus(...plugins),
		peerDepsExternal(),
		dts({
			outDir: 'dist/types',
			resolvers: [
				/**
				 * This resolver generates `.d.ts` files for each `.tsx` file.
				 * While this approach is somewhat of a workaround and temporary,
				 * we are actively seeking a more robust solution.
				 */
				{
					name: 'attach-dynamic-typing',
					supports: (id) => id.endsWith('.tsx'),
					transform({ root, id, code, program }) {
						const sourceFile = program.getSourceFile(id);

						let output = '';

						program.emit(sourceFile, (_fileName, contents) => {
							output =
								contents + code.split('THE FOLLOWING TYPES HAVE BEEN ADDED AUTOMATICALLY').pop() ||
								'';
						});

						return [
							{
								content: output,
								path: path.relative(root, id.replace(/\.tsx?$/, '.d.ts'))
							}
						];
					}
				}
			]
		})
	],
	build: {
		emptyOutDir: false,
		minify: false,
		lib: {
			formats: ['es'],
			entry: {
				'my-counter': 'src/my-counter.tsx'
			}
		}
	}
});
