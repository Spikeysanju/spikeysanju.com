<script lang="ts">
	import { enhance } from '$app/forms';

	let name = '';
	let link = '';
	let tags = '';
</script>

<svelte:head>
	<title>Add IRL – Spikey Sanju</title>
	<meta name="description" content="Add a new IRL to the gallery" />
</svelte:head>

<section class="flex min-h-screen w-full flex-col items-center justify-start">
	<form action="?/create" method="post" class="flex w-full flex-col space-y-3" use:enhance>
		<label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label
		>
		<div class="mt-1">
			<input
				type="text"
				name="name"
				id="name"
				autocomplete="name"
				bind:value={name}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white sm:text-sm"
			/>
		</div>

		<label for="link" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Link</label
		>
		<div class="mt-1">
			<input
				type="text"
				name="link"
				id="link"
				autocomplete="link"
				bind:value={link}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white sm:text-sm"
			/>
		</div>

		<label for="tags" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
			>Flair</label
		>
		<select
			id="tags"
			name="tags"
			autocomplete="tags"
			bind:value={tags}
			class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white sm:text-sm"
		>
			<option>Brand</option>
			<option>Design</option>
			<option>Craft</option>
			<option>Design Engineer</option>
			<option>Indie Hacker</option>
		</select>

		<button
			type="submit"
			class="text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-white dark:text-black dark:focus:ring-white"
			>Add person</button
		>
	</form>
</section>
