<script lang="ts">
	import PeopleCard from '$lib/components/irl/PeopleCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="flex w-full flex-col items-center justify-center">
	<h1 class="flex w-full">People I want to Meet IRL.</h1>
	<p class="flex w-full text-gray-500">
		Check out my list of inspirations, people whose work & character I admire.
	</p>

	<div class="flex-co mt-6 flex w-full">
		{#each data.peopleIWannaMeetIRL as item}
			<a href={item.link}>
				<PeopleCard
					name={item.name}
					met={item.met}
					image={item.image}
					tags={item.tags}
					url={'https://www.twitter.com/spikeysanju'}
				/>
			</a>
		{/each}

		{#if data.peopleIWannaMeetIRL.length === 0}
			<div class="flex h-full w-full flex-col items-center justify-center">
				<h2 class="text-2xl">No people found.</h2>
				<p class="text-gray-500">Be the first to ask a question.</p>

				<a href="/ama/new" class="mt-4">
					<button class="btn btn-primary">Ask a question</button>
				</a>
			</div>
		{/if}
	</div>
</section>
