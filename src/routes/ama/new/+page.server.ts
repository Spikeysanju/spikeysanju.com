import { redirect, type Actions, fail } from '@sveltejs/kit';
import prisma from '$lib/prisma/prisma';

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
		const question = formData.get('question') as string;
		const description = formData.get('description') as string;
		const flair = formData.get('flair') as string;

		if (!question || !description || !flair) {
			return fail(400, {
				message: 'Please fill out all fields'
			});
		}

		await prisma.ama
			.create({
				data: {
					question: question,
					description: description,
					flair: flair,
					user: {
						connect: {
							email: session?.user?.email as string
						}
					}
				}
			})
			.then((response) => {
				return {
					status: 303,
					headers: {
						location: `/ama/${response.id}`
					}
				};
			})
			.catch((error) => {
				return fail(400, {
					message: 'Something went wrong' + error
				});
			});
	}
};
