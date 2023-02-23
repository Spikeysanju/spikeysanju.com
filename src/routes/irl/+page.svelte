<script lang="ts">
	import { page } from '$app/stores';
	import PeopleCard from '$lib/components/irl/PeopleCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="flex w-full flex-col items-center justify-center">
	<h1 class="flex w-full">People I want to Meet IRL.</h1>
	<p class="flex w-full text-gray-500">
		Check out my list of inspirations, people whose work & character I admire.
	</p>
	{#if $page.data.session && $page.data.session.user}
		<div class="mt-3 flex w-full">
			<a
				href="irl/new"
				class="text-md  items-center rounded-md border border-transparent bg-black px-4 py-2 font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
				>Add person to list</a
			>
		</div>
	{/if}

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
	</div>
</section>
