<script lang="ts">
	import BookCard from '$lib/components/book/BookCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="flex w-full flex-col items-center justify-center">
	<h1 class="flex w-full text-start tracking-tight">Books.</h1>
	<p class="flex w-full text-gray-500">
		Books I've read and enjoyed. I've tried to keep this list as up to date as possible, but I'm
		sure I've missed a few.
	</p>

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
