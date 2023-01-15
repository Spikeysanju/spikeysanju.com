import prisma from '$lib/prisma/prisma';
import { redirect, type Actions, fail } from '@sveltejs/kit';

export const actions: Actions = {
	create: async (event) => {
		const { request } = event;
		const session = await event.locals.getSession();

		// check if user is logged in
		if (!session) {
			throw redirect(303, '/');
		}

		// we are save, lets user schedule a post
		const formData = await request.formData();
		const slug = formData.get('slug') as string;
		const comment = formData.get('comment') as string;

		if (!comment || !slug) {
			return fail(400, {
				message: 'No comment or slug provided',
				missing: true
			});
		}

		// check if blog post exists if not create it
		await prisma.blog
			.findUnique({
				where: {
					id: slug
				}
			})
			.then((blog) => {
				if (!blog) {
					return fail(404, {
						message: 'Blog post not found',
						missing: true
					});
				}
				return blog;
			});

		return { success: true, message: 'Comment published', type: 'success' };
	}
};
