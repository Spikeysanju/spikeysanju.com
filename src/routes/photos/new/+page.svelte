<script lang="ts">
	import { enhance } from '$app/forms';
	import { selectImageAndUploadToServer } from '$lib/utils/utils';
	import type { Snapshot } from '@sveltejs/kit';

	// user inputs
	let title = '';
	let description = '';
	let image = '';
	let fileType = '';

	// restore data from snapshot if available
	export const snapshot: Snapshot = {
		capture: () => ({ title, description, image, fileType }),
		restore: (value) => {
			title = value.title;
			description = value.description;
			image = value.image;
			fileType = value.fileType;
		}
	};

	// image upload to server
	let fileinput: HTMLInputElement;
	function handleFileInputChange() {
		if (fileinput.files != null) {
			const file = fileinput.files[0];
			selectImageAndUploadToServer(file, onSuccess, onError);
		}
	}
	function onSuccess(file: string, fileType: string) {
		uploadImage(file, fileType);
	}
	function onError(error: string) {
		console.error('Error during image upload: ', error);
	}

	// upload image to database
	const uploadImage = async (file: string, type: string) => {
		const res = await fetch('/api/upload', {
			method: 'PUT',
			body: JSON.stringify({
				image: file,
				fileType: type
			})
		})
			.then((res) => res.json())
			.then((res) => {
				console.log('res', res);
				return res;
			});

		// set both image and type parallely
		image = res.url;
		fileType = res.fileType;
	};
</script>

<svelte:head>
	<title>Add Photo – Spikey Sanju</title>
	<meta name="description" content="Add a new photo to the gallery" />
</svelte:head>

<section class="flex min-h-screen w-full flex-col items-center justify-start">
	<form action="?/create" method="post" class="flex w-full flex-col space-y-3" use:enhance>
		<label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label
		>
		<div class="mt-1">
			<input
				type="text"
				name="title"
				id="title"
				autocomplete="title"
				bind:value={title}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white sm:text-sm"
			/>
		</div>

		<label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
			>Description</label
		>
		<div class="mt-1">
			<input
				type="text"
				name="description"
				id="description"
				autocomplete="name"
				bind:value={description}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white sm:text-sm"
			/>
		</div>

		<label for="image" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
			>Image</label
		>
		<div class="mt-1">
			<input
				id="image-to-upload"
				type="file"
				accept=".png,.jpg, .jpeg"
				bind:this={fileinput}
				on:change={handleFileInputChange}
			/>
		</div>

		<input id="image" name="image" type="url" class="hidden" bind:value={image} />
		<input id="type" name="type" type="text" class="hidden" bind:value={fileType} />

		<button
			type="submit"
			class="text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-white dark:text-black"
			>Add photo</button
		>
	</form>
</section>
