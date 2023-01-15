import prisma from '$lib/prisma/prisma';
import { redirect, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Prisma } from '@prisma/client';

export const load = (async ({ params }) => {
	const tools = await prisma.tools.findUnique({
		where: {
			id: params.id
		},
		include: {
			user: true
		}
	});

	const comments = await prisma.comment.findMany({
		where: {
			toolsId: params.id
		},
		include: {
			user: true
		}
	});

	return {
		tools: tools,
		comments: comments
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	create: async (event) => {
		const { request } = event;
		const session = await event.locals.getSession();

		// check if user is logged in
		if (!session) {
			throw redirect(303, '/login');
		}

		// we are save, so we can get the form data
		const formData = await request.formData();
		const toolsId = formData.get('toolsId') as string;
		const comment = formData.get('comment') as string;

		if (!comment) {
			return fail(400, {
				message: 'Please fill out all fields'
			});
		}

		// create comment
		await prisma.comment
			.create({
				data: {
					content: comment,
					toolsId: toolsId,
					userId: 'clcv8d4j20000no51pcp04bop'
				} as Prisma.CommentCreateInput
			})
			.then(() => {
				return redirect(303, `/tools/${toolsId}`);
			})
			.catch((err) => {
				return fail(400, {
					message: err
				});
			});
	}
};
