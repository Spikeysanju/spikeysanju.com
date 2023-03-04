<script lang="ts">
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import { capitalizeFirstLetter } from '$lib/utils/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{`Blogs in ${data.category}`} | Spikey Sanju</title>
	<meta
		name="description"
		content="I write about web development, programming, and other stuff. I also write about my personal life."
	/>
</svelte:head>

<section class="flex min-h-screen w-full flex-col items-center justify-start">
	<h1 class="w-full text-start tracking-tight">
		{capitalizeFirstLetter(data.params.category)} Blogs.
	</h1>

	<div class="mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.72),1fr))] gap-6">
		{#each data.posts as item}
			<a href={`/blog/${item.path}`}>
				<BlogCard title={item.meta.title} author={item.meta.author} image={item.meta.image} />
			</a>
		{/each}

		{#if data.posts.length === 0}
			<div class="flex h-full w-full flex-col items-center justify-center">
				<h2 class="text-2xl">No blogs found.</h2>
			</div>
		{/if}
	</div>
</section>
