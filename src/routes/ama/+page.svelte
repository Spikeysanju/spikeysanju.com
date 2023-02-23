<script lang="ts">
	import { page } from '$app/stores';
	import AmaCard from '$lib/components/ama/AmaQuestionCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Ama | Spikey Sanju</title>
	<meta name="description" content="Ask me anything." />
</svelte:head>

<section>
	<h1>Ask me anything</h1>
	<p class="w-full text-gray-500">I'll try to answer as many questions as possible.</p>

	{#if $page.data.session && $page.data.session.user}
		<div class="mt-3 flex w-full">
			<a
				href="ama/new"
				class="rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200"
				>Ask a question</a
			>
		</div>
	{/if}

	<div class="mt-6 flex w-full flex-col gap-8">
		{#each data.ama as item}
			<a href={`/ama/${item.id}`}>
				<AmaCard
					question={item.question}
					author="Sanju S"
					timeago="5 min ago"
					authorImage="https://github.com/spikeysanju.png?size=36"
				/>
			</a>
		{/each}

		{#if data.ama.length === 0}
			<div class="flex h-full w-full flex-col items-center justify-center">
				<h2 class="text-2xl">No posts found.</h2>
				<p class="text-gray-500">Be the first to ask a question.</p>

				<a href="/ama/new" class="mt-4">
					<button class="btn btn-primary">Ask a question</button>
				</a>
			</div>
		{/if}
	</div>
</section>
