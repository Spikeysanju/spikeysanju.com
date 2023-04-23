import { fetchBlogPostBySlug } from '$lib/utils/utils';
import type { RequestHandler } from './$types';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'edge'
};
export const GET: RequestHandler = async () => {
	const post = await fetchBlogPostBySlug('impact-of-user-flow-in-startup');

	return new Response(JSON.stringify(post?.path), {
		headers: {
			'Content-Type': 'application/json'
		},
		status: 200,
		statusText: 'OK'
	});
};
