import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x',
			split: false,
			isr: false,
			maxDuration: 10,
		})
	},
	preprocess: [
		{
			preserve: ['ld+json']
		},
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
			highlight: {
				// highlight.js theme to use
				theme: 'material-palenight'
			}
		})
	],
	extensions: ['.svelte', '.md']
};

export default config;
