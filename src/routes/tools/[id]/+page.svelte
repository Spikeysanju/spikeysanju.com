<script lang="ts">
	import type { PageData } from './$types';
	import AmaCommentCard from '$lib/components/ama/AmaCommentCard.svelte';
	import { showLoginModal } from '$lib/store/store';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	export let data: PageData;
	let comment = '';

	// check if the user is the author of the ama post or not if yes then show the author tag else show guest tag else if the user is admin then show the creator tag else show guest tag return respective tag as string with condition
	function isAuthor(userId: string): string {
		if (data.tools?.userId === userId) {
			return 'Author';
		} else {
			return 'Guest';
		}
	}
</script>

<svelte:head>
	<title>{data.tools?.name} – Spikey Sanju</title>
	<meta name="description" content={data.tools?.description} />
</svelte:head>

<section class="flex w-full flex-col">
	<div class="flex w-full flex-col space-y-3">
		<h1>{data.tools?.name}</h1>
		<p>{data.tools?.description}</p>
	</div>

	<div class="mt-6 flex w-full flex-col space-y-3">
		<h3>Comments</h3>

		{#if $page.data.session && $page.data.session.user}
			<form method="post" action="?/create" use:enhance>
				<input type="hidden" name="toolId" id="toolId" value={data.tools?.id} />

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

		{#each data.comments as item}
			<AmaCommentCard
				name={item.user?.name ?? 'Anonymous'}
				image={item.user?.image ?? '/images/anonymous.png'}
				content={item.content ?? ''}
				isAuthor={isAuthor(item.user?.id ?? 'Guest')}
				createdAt={item.createdAt ?? ''}
			/>
		{/each}
	</div>
</section>
