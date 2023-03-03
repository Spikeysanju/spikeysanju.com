<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	let name: string = '';
	let description: string = '';
	let image: string = '';
	let link: string = '';
</script>

<svelte:head>
	<title>New Tool – Spikey Sanju</title>
	<meta name="description" content="Add a new tool to the list." />
</svelte:head>

<div class="flex w-full flex-col">
	<form action="?/create" method="post" class="flex w-full flex-col space-y-3" use:enhance>
		<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
		<div class="mt-1">
			<input
				type="text"
				name="name"
				id="name"
				autocomplete="name"
				bind:value={name}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
			/>
		</div>

		<label for="description" class="block text-sm font-medium text-gray-700">Description</label>
		<div class="mt-1">
			<textarea
				id="description"
				name="description"
				rows="3"
				bind:value={description}
				class="mt-1 block w-full whitespace-pre-line rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
				placeholder="You can use markdown here."
			/>
		</div>
		<p class="mt-2 text-sm text-gray-500">Brief description of your tool. URLs are hyperlinked.</p>

		<label for="image" class="block text-sm font-medium text-gray-700">Image</label>
		<div class="mt-1">
			<input
				type="url"
				name="image"
				id="image"
				autocomplete="image"
				bind:value={image}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
			/>
		</div>

		<label for="link" class="block text-sm font-medium text-gray-700">Link</label>
		<div class="mt-1">
			<input
				type="url"
				name="link"
				id="link"
				autocomplete="link"
				bind:value={link}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
			/>
		</div>

		<button
			type="submit"
			class="text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
			>Add Tool</button
		>
	</form>
</div>
