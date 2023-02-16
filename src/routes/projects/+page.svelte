<script lang="ts">
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="flex w-full flex-col items-center justify-center">
	<h1 class="flex w-full text-start tracking-tight">Projects.</h1>
	<p class="flex w-full text-gray-500">Here are some of the projects I've worked on.</p>

	<div class="mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.72),1fr))] gap-6">
		{#each data.projects as item}
			<a href={`/projects/${item.path}`}>
				<BlogCard title={item.meta.title} author={item.meta.author} image={item.meta.image} />
			</a>
		{/each}

		{#if data.projects.length === 0}
			<div class="flex h-full w-full flex-col items-center justify-center">
				<h2 class="text-2xl">No projects found.</h2>
			</div>
		{/if}
	</div>
</section>
