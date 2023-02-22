<script lang="ts">
	import BookCard from '$lib/components/book/BookCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Books – Spikey Sanju</title>
	<meta
		name="description"
		content="Books I've read and enjoyed. I've tried to keep this list as up to date as possible, but I'm
		sure I've missed a few."
	/>
</svelte:head>

<section class="flex w-full flex-col items-center justify-center">
	<h1 class="flex w-full text-start tracking-tight">Books.</h1>
	<p class="flex w-full text-gray-500">
		Books I've read and enjoyed. I've tried to keep this list as up to date as possible, but I'm
		sure I've missed a few.
	</p>

	{#if data.categories}
		<div class="mb-3 mt-3 flex w-full items-center space-x-3">
			{#each data.categories as item}
				<a href={`/books/categories/${item}`}>
					<span
						class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200"
					>
						{item}
					</span>
				</a>
			{/each}
		</div>
	{/if}

	<div class="mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.40),1fr))] gap-6">
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
