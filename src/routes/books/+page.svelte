<script lang="ts">
	import { PUBLIC_WEBSITE_URL } from '$env/static/public';
	import BookCard from '$lib/components/book/BookCard.svelte';
	import { capitalizeFirstLetter } from '$lib/utils/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Books | Spikey Sanju</title>
	<meta
		name="description"
		content="Books I've read and enjoyed. I've tried to keep this list as up to date as possible, but I'm
		sure I've missed a few."
	/>
	<!-- canonical -->
	<link rel="canonical" href="{PUBLIC_WEBSITE_URL}/books" />

	<!-- robots -->
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="flex min-h-screen w-full flex-col items-center justify-start">
	<h1 class="flex w-full text-start tracking-tight">Books.</h1>
	<p class="flex w-full text-gray-500 dark:text-gray-400">
		Books I've read and enjoyed. I've tried to keep this list as up to date as possible, but I'm
		sure I've missed a few.
	</p>

	{#if data.categories}
		<div class="mb-3 mt-3 flex w-full items-center space-x-3">
			{#each data.categories as item}
				<a href={`/books/categories/${item}`}>
					<span
						class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200 dark:bg-purpleontop dark:text-white"
					>
						{capitalizeFirstLetter(item)}
					</span>
				</a>
			{/each}
		</div>
	{/if}

	<div class="mt-6 grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
		{#each data.books as item}
			<a href={`/books/${item.path}`}>
				<BookCard title={item.meta.title} author={item.meta.author} image={item.meta.image} />
			</a>
		{/each}

		{#if data.books.length === 0}
			<div class="flex h-full w-full flex-col items-center justify-center">
				<h2 class="text-2xl">No books found.</h2>
			</div>
		{/if}
	</div>
</section>
