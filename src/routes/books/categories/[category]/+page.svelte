<script lang="ts">
	import BookCard from '$lib/components/book/BookCard.svelte';
	import { capitalizeFirstLetter } from '$lib/utils/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Books in {data.category} | Spikey Sanju</title>
	<meta name="description" content={data.category} />
</svelte:head>

<section class="flex min-h-screen w-full flex-col items-center justify-start">
	<h1 class="w-full text-start tracking-tight">
		{capitalizeFirstLetter(data.params.category)} Books.
	</h1>

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
