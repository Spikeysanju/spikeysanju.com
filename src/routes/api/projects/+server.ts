import { fetchProjectsMarkdownPosts } from '$lib/utils/utils';
import type { RequestHandler } from './$types';
import type { Data } from '$lib/type/blog-metadata';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'edge'
};

export const GET: RequestHandler = async () => {
	const allProjects = await fetchProjectsMarkdownPosts();

	const sortedProjects = allProjects.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	}) satisfies Data[];

	return new Response(JSON.stringify(sortedProjects), {
		headers: {
			'Content-Type': 'application/json'
		},
		status: 200,
		statusText: 'OK'
	});
};
