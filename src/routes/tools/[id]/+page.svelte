<script lang="ts">
	import type { PageData } from './$types';
	import AmaCommentCard from '$lib/components/ama/AmaCommentCard.svelte';

	export let data: PageData;
	let comment: string = '';
</script>

<section class="flex w-full flex-col">
	<div class="flex w-full flex-col space-y-3">
		<h1>{data.tools?.name}</h1>
		<p>{data.tools?.description}</p>
	</div>

	<div class="mt-6 flex w-full flex-col space-y-3">
		<h3>Comments</h3>

		<form method="post" action="?/create">
			<input type="hidden" name="toolId" id="toolId" value={data.tools?.id} />

			<input
				name="comment"
				id="comment"
				placeholder="Share your thoughts..."
				bind:value={comment}
				on:keydown
				class="w-full rounded-md border border-gray-300 p-3"
			/>
		</form>

		{#each data.comments as item}
			<AmaCommentCard
				name={item.user?.name ?? 'Anonymous'}
				image={item.user?.image ?? '/images/anonymous.png'}
				content={item.content ?? ''}
				createdAt={item.createdAt ?? ''}
			/>
		{/each}
	</div>
</section>
