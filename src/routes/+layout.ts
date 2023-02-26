import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'nodejs16.x',
	regions: ['us-east-1'],
	split: false,
};
