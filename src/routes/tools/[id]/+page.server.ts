import prisma from '$lib/prisma/prisma';
import { redirect, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Prisma } from '@prisma/client';

export const load = (async ({ params }) => {
	// parallel requests
	const [tools, comments] = await Promise.all([
		prisma.tools.findUnique({
			where: {
				id: params.id
			},
			include: {
				user: true
			}
		}),
		prisma.comment.findMany({
			where: {
				toolsId: params.id
			},
			include: {
				user: true
			}
		})
	]);

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
		const toolId = formData.get('toolId') as string;
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
					tools: {
						connect: {
							id: toolId
						}
					},
					user: {
						connect: {
							email: session?.user?.email as string
						}
					}
				} as Prisma.CommentCreateInput
			})
			.then(() => {
				return {
					status: 201,
					message: 'Comment created'
				};
			})
			.catch((err) => {
				console.log(err);
				return fail(400, {
					message: err
				});
			});
	}
};
