<script lang="ts">
	import type { PageData } from './$types';
	import { formatDistance } from 'date-fns';
	import AmaCommentCard from '$lib/components/ama/AmaCommentCard.svelte';

	export let data: PageData;
	let comment: string = '';

	// check if the user is the author of the ama post or not if yes then show the author tag else show guest tag else if the user is admin then show the creator tag else show guest tag return respective tag as string with condition
	function isAuthor(userId: string): string {
		if (data.ama?.userId === userId && data.user?.role === 'USER') {
			return 'Author';
		} else if (data.ama?.userId === userId && data.user?.role === 'ADMIN') {
			return 'Creator';
		} else {
			return 'Guest';
		}
	}
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
				<span class="font-medium text-gray-900">{data.ama?.user?.name}</span>

				<div class="text-right">
					<span class="text-gray-500"
						>{formatDistance(new Date(`${data.ama?.createdAt}`), new Date())}</span
					>
				</div>
			</div>
		</div>

		<div class="flex w-full flex-col">
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
						class="w-full rounded bg-black py-3 px-4 font-bold text-white shadow-lg hover:bg-gray-900 sm:w-auto sm:flex-auto"
					>
						Submit
					</button>
				</div>
			</form>

			<h6 class="py-3">Recent comments</h6>

			{#if data.comments.length > 0}
				{#each data.comments as item}
					<AmaCommentCard
						name={item.user?.name ?? 'Anonymous'}
						image={item.user?.image ?? '/images/anonymous.png'}
						content={item.content ?? ''}
						isAuthor={isAuthor(item.user?.id ?? 'Anonymous')}
						createdAt={item.createdAt ?? ''}
					/>
				{/each}
			{:else}
				<div class="flex h-full w-full flex-col items-center justify-center">
					<h5>No comments found.</h5>
					<p class="text-gray-500">Be the first to comment.</p>
				</div>
			{/if}
		</div>
	</div>
</section>
