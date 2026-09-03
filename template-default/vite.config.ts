import { vite as htmlplus } from '@htmlplus/element/bundlers.js';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	server: {
		open: true
	},
	plugins: [htmlplus(), peerDepsExternal(), dts({ outDir: 'dist/types' })],
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
