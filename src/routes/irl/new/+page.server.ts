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
				if (response?.role !== 'ADMIN') {
					throw redirect(303, '/');
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
		const name = formData.get('name') as string;
		const link = formData.get('link') as string;
		const tags = formData.get('tags') as string;

		if (!name || !link || !tags) {
			return fail(400, {
				message: 'Please fill out all fields'
			});
		}

		await prisma.peopleIWannaMeetIRL
			.create({
				data: {
					name: name,
					link: link,
					tags: tags,
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
					message: 'Success - Redirecting to /irl',
					body: response,
					headers: {
						location: '/irl'
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
