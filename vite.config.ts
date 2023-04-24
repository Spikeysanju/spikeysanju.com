import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig, Plugin } from 'vite';
import fs from 'fs';

const config: UserConfig = {
	plugins: [sveltekit(), rawFonts(['.woff', '.woff2'])],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		proxy: {
			'/v1/vitals': 'https://vitals.vercel-analytics.com'
		}
	}
};

function rawFonts(ext: string[]): Plugin {
	return {
		name: 'vite-plugin-raw-fonts',
		transform(code: string, id: string) {
			if (ext.some((e: string) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id);
				return { code: `export default ${JSON.stringify(buffer)}`, map: null };
			}
		}
	};
}

export default config;
