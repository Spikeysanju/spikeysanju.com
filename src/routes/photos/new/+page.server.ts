import { redirect, type Actions, fail } from '@sveltejs/kit';
import prisma from '$lib/prisma/prisma';
import type { PageServerLoad } from '../$types';
import { Role } from '@prisma/client';

export const load = (async ({ locals }) => {
	const session = await locals.getSession();

	const user = await prisma.user.findUnique({
		where: {
			email: session?.user?.email as string
		}
	});

	// only admins can create new people
	if (user?.role !== Role.ADMIN) {
		throw redirect(303, '/');
	}
}) satisfies PageServerLoad;

export const actions: Actions = {
	create: async (event) => {
		const { request } = event;
		const session = await event.locals.getSession();

		// check if user is logged in
		if (!session) {
			throw redirect(303, '/login');
		}

		// get current user and check if user is admin
		await prisma.user
			.findUnique({
				where: {
					email: session?.user?.email as string
				}
			})
			.then((response) => {
				// if user is not admin, redirect to home
				if (response?.role !== Role.ADMIN) {
					throw redirect(303, '/signin');
				}

				return response;
			})
			.catch((error) => {
				return fail(400, {
					message: 'Something went wrong' + error
				});
			});

		// we are save, so we can get the form data
		const formData = await request.formData();
		const title = formData.get('title') as string;
		const description = formData.get('description') as string;
		const image = formData.get('image') as string;
		const fileType = formData.get('type') as string;

		if (!title || !description || !image || !fileType) {
			return fail(400, {
				message: 'Please fill out all fields'
			});
		}

		await prisma.media
			.create({
				data: {
					title: title,
					description: description,
					url: image,
					type: fileType,
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
					message: 'Success - Redirecting to /photos',
					body: response,
					headers: {
						location: '/photos'
					},
					redirect: true
				};
			})
			.catch((error) => {
				return fail(400, {
					message: 'Something went wrong' + error
				});
			});
	}
};
