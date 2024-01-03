
import node from '@sveltejs/adapter-node';
import { dependencies } from './package.json';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		mdsvex({
			layout: {
				blog: './src/lib/BlogLayout.svelte',
			}
		})
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: node(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(dependencies || {})
			}
		}
	}
};
