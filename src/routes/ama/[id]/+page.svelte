<script lang="ts">
	import type { PageData } from './$types';
	import { formatDistance } from 'date-fns';
	import AmaCommentCard from '$lib/components/ama/AmaCommentCard.svelte';

	export let data: PageData;
	let comment: string = '';
</script>

<section class="flex w-full flex-col">
	<div class="flex w-full flex-col space-y-3">
		<h1>{data.ama?.question}</h1>
		<p>{data.ama?.description}</p>

		<div class="flex flex-row items-center justify-between">
			<div class="flow-row flex items-center justify-center space-x-3">
				<img
					src={data.ama?.user?.image}
					alt={data.ama?.user?.name}
					class="h-12 w-12 rounded-full"
				/>
				<span class="font-bold text-gray-900">{data.ama?.user?.name}</span>
			</div>

			<div class="text-right">
				<span class="text-gray-500"
					>{formatDistance(new Date(`${data.ama?.createdAt}`), new Date())}</span
				>
			</div>
		</div>
	</div>

	<div class="mt-6 flex w-full flex-col space-y-3">
		<h3>Comments</h3>

		<form method="post" action="?/create">
			<input type="hidden" name="amaId" id="amaId" value={data.ama?.id} />

			<div
				class="flex flex-col items-end justify-center space-x-0 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3"
			>
				<textarea
					name="comment"
					id="comment"
					placeholder="Share your thoughts..."
					rows="3"
					bind:value={comment}
					on:keydown
					class="w-full whitespace-pre-line rounded-md border border-gray-300 p-3"
				/>

				<button
					type="submit"
					class="w-full rounded bg-black py-3 px-4 font-bold text-white hover:bg-gray-900 sm:w-auto sm:flex-auto"
				>
					Submit
				</button>
			</div>
		</form>

		<h6 class="py-3">Recent comments</h6>

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
