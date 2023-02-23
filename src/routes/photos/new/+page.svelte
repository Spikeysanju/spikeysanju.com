<script lang="ts">
	import { selectImageAndUploadToServer } from '$lib/utils/utils';
	import type { Snapshot } from '@sveltejs/kit';

	// user inputs
	let title: string = '';
	let description: string = '';
	let image: string = '';
	let fileType: string = '';

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

<div class="flex w-full flex-col">
	<form action="?/create" method="post" class="flex w-full flex-col space-y-3">
		<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
		<div class="mt-1">
			<input
				type="text"
				name="title"
				id="title"
				autocomplete="title"
				bind:value={title}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
			/>
		</div>

		<label for="description" class="block text-sm font-medium text-gray-700">Description</label>
		<div class="mt-1">
			<input
				type="text"
				name="description"
				id="description"
				autocomplete="name"
				bind:value={description}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
			/>
		</div>

		<label for="image" class="block text-sm font-medium text-gray-700">Image</label>
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
			class="text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
			>Add photo</button
		>
	</form>
</div>
