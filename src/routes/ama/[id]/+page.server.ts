import prisma from '$lib/prisma/prisma';
import { redirect, type Actions, fail } from '@sveltejs/kit';
import { CommentProvider, type Prisma } from '@prisma/client';
import { EMAIL_AUTH_TOKEN } from '$env/static/private';

export const load = async ({ params }) => {
	const ama = await prisma.ama.findUnique({
		where: {
			id: params.id
		},
		include: {
			user: true,
			comment: true
		}
	});

	if (!ama) {
		throw redirect(303, '/ama');
	}

	return {
		ama: ama
	};
};

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
		const amaId = formData.get('amaId') as string;
		const amaTitle = formData.get('amaTitle') as string;
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
					commentProvider: CommentProvider.ASKMEANYTHING,
					ama: {
						connect: {
							id: amaId
						}
					},
					user: {
						connect: {
							email: session?.user?.email as string
						}
					}
				} as Prisma.CommentCreateInput
			})
			.then(async () => {
				console.log('comment created');

				// Send the email
				await event
					.fetch('/api/mail/new-comment', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'X-Auth-Token': EMAIL_AUTH_TOKEN
						},

						body: JSON.stringify({
							amaId: amaId,
							title: amaTitle,
							comment: comment,
							type: 'ama',
							username: session?.user?.name as string
						})
					})
					.then((res) => {
						console.log(res);
					});

				return redirect(303, `/ama/${amaId}`);
			})
			.catch((err) => {
				console.log(err);
				return fail(400, {
					message: err
				});
			});
	}
};
