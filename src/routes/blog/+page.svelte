<script lang="ts">
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Blogs – Spikey Sanju</title>
	<meta
		name="description"
		content="I write about web development, programming, and other stuff. I also write about my personal life."
	/>
</svelte:head>

<section class="flex min-h-screen w-full flex-col items-center justify-start">
	<h1 class="w-full text-start tracking-tight">Blog.</h1>

	<p class="w-full text-start text-gray-500 dark:text-gray-400">
		{data.blogs.length}
		{data.blogs.length === 1 ? 'post' : 'posts'}
	</p>

	{#if data.categories}
		<div class="mb-3 mt-3 flex w-full items-center space-x-3">
			{#each data.categories as item}
				<a href={`/blog/categories/${item}`}>
					<span
						class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200"
					>
						{item}
					</span>
				</a>
			{/each}
		</div>
	{/if}

	<div class="mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.72),1fr))] gap-6">
		{#each data.blogs as item}
			<a href={`/blog/${item.path}`}>
				<BlogCard title={item.meta.title} author={item.meta.author} image={item.meta.image} />
			</a>
		{/each}

		{#if data.blogs.length === 0}
			<div class="flex h-full w-full flex-col items-center justify-center">
				<h2 class="text-2xl">No blogs found.</h2>
			</div>
		{/if}
	</div>
</section>
