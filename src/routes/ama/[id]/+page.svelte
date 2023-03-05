<script lang="ts">
	import type { PageData } from './$types';
	import { formatDistance } from 'date-fns';
	import AmaCommentCard from '$lib/components/ama/AmaCommentCard.svelte';
	import { enhance } from '$app/forms';
	import { showLoginModal } from '$lib/store/store';
	import { page } from '$app/stores';

	export let data: PageData;
	let comment = '';

	// check if the user is the author of the ama post or not if yes then show the author tag else show guest tag else if the user is admin then show the creator tag else show guest tag return respective tag as string with condition
	function isAuthor(userId: string): string {
		if (data.ama?.userId === userId) {
			return 'Author';
		} else {
			return 'Guest';
		}
	}
</script>

<svelte:head>
	<title>{data.ama?.question} | Spikey Sanju</title>
	<meta name="description" content={data.ama?.description} />
</svelte:head>

<section class="flex min-h-screen w-full flex-col">
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
				<span class="font-medium text-black dark:text-white">{data.ama?.user?.name}</span>

				<div class="text-right">
					<span class="text-gray-500"
						>{formatDistance(new Date(`${data.ama?.createdAt}`), new Date())}</span
					>
				</div>
			</div>
		</div>

		<div class="flex w-full flex-col">
			<h3>Comments</h3>

			{#if $page.data.session && $page.data.session.user}
				<form method="post" action="?/create" use:enhance>
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
							class="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white"
						/>

						<button
							type="submit"
							class="w-full rounded bg-black py-3 px-4 font-bold text-white shadow-lg hover:bg-gray-900 sm:w-auto sm:flex-auto"
						>
							Submit
						</button>
					</div>
				</form>
			{:else}
				<button
					on:click={() => ($showLoginModal = true)}
					class="rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200"
					>Sign in to comment</button
				>
			{/if}

			<h6 class="py-3">Recent comments</h6>

			{#if data.comments.length > 0}
				{#each data.comments as item}
					<AmaCommentCard
						name={item.user?.name ?? 'Anonymous'}
						image={item.user?.image ?? '/images/anonymous.png'}
						content={item.content ?? ''}
						isAuthor={isAuthor(item.user?.id ?? 'Guest')}
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
