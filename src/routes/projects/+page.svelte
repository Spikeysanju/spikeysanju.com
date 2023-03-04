<script lang="ts">
	import { PUBLIC_WEBSITE_URL } from '$env/static/public';
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Projects | Spikey Sanju</title>
	<meta name="description" content="Projects I've worked on." />

	<!-- canonical -->
	<link rel="canonical" href="{PUBLIC_WEBSITE_URL}/projects" />

	<!-- robots -->
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="flex min-h-screen w-full flex-col items-center justify-start">
	<h1 class="flex w-full text-start tracking-tight">Projects.</h1>
	<p class="flex w-full text-gray-500 dark:text-gray-400">
		Here are some of the projects I've worked on.
	</p>

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
