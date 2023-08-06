<script lang="ts">
	import { enhance } from '$app/forms';
	let name = '';
	let description = '';
	let image = '';
	let link = '';
</script>

<svelte:head>
	<title>New Tool | Spikey Sanju</title>
	<meta name="description" content="Add a new tool to the list." />

	<meta property="og:title" content="New Tool | Spikey Sanju" />
	<meta property="og:description" content="Add a new tool to the list." />
	<meta property="og:url" content="https://spikeysanju.github.io/tools/new" />
	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://spikeysanju.github.io/tools/assets/images/og-image.png"
	/>
	<meta property="og:image:alt" content="Spikey Sanju" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Spikey Sanju" />
	<meta property="og:updated_time" content="2021-09-10T00:00:00+00:00" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@spikeysanju" />
	<meta name="twitter:creator" content="@spikeysanju" />
	<meta name="twitter:title" content="New Tool | Spikey Sanju" />
	<meta name="twitter:description" content="Add a new tool to the list." />
	<meta
		name="twitter:image"
		content="https://spikeysanju.github.io/tools/assets/images/og-image.png"
	/>
	<meta name="twitter:image:alt" content="Spikey Sanju" />
	<meta name="twitter:image:width" content="1200" />
	<meta name="twitter:image:height" content="630" />
	<meta name="twitter:domain" content="Spikey Sanju" />
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

		<label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
			>Description</label
		>
		<div class="mt-1">
			<textarea
				id="description"
				name="description"
				rows="3"
				bind:value={description}
				class="mt-1 block w-full whitespace-pre-line rounded-md border-gray-300 bg-white shadow-sm focus:border-black focus:ring-black dark:border-gray-400 dark:bg-purpleontop dark:focus:border-white dark:focus:ring-white sm:text-sm"
				placeholder="You can use markdown here."
			/>
		</div>
		<p class="mt-2 text-sm text-gray-500">Brief description of your tool. URLs are hyperlinked.</p>

		<label for="image" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
			>Image</label
		>
		<div class="mt-1">
			<input
				type="url"
				name="image"
				id="image"
				autocomplete="image"
				bind:value={image}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white sm:text-sm"
			/>
		</div>

		<label for="link" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Link</label
		>
		<div class="mt-1">
			<input
				type="url"
				name="link"
				id="link"
				autocomplete="link"
				bind:value={link}
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white sm:text-sm"
			/>
		</div>

		<button
			type="submit"
			class="text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-white/80 dark:focus:ring-white"
			>Add Tool</button
		>
	</form>
</section>
