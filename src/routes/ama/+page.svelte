<script lang="ts">
	import AmaCard from '$lib/components/ama/AmaQuestionCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<h1>Ask me anything</h1>
	<p>You can feel free to ask any question about career, tech, design or topics.</p>

	<div class="mt-6 flex w-full flex-col">
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
