import type { Data } from '$lib/type/blog-metadata';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/projects`);
	const projects = (await response.json()) as Data[];

	return {
		projects: projects
	};
}) satisfies PageServerLoad;
