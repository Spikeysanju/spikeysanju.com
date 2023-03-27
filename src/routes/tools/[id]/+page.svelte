<script lang="ts">
	import AmaCommentCard from '$lib/components/ama/AmaCommentCard.svelte';
	import { showLoginModal } from '$lib/store/store';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	export let data;
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
	<title>{data.tools?.name} | Spikey Sanju</title>
	<meta name="description" content={data.tools?.description} />
</svelte:head>

<section class="mb-3 flex min-h-screen w-full flex-col items-center justify-start">
	<div class="mt-3 flex w-full flex-col space-y-3">
		<img src={data.tools?.image} alt={data.tools?.name} class="aspect-square w-24 object-cover" />
		<h1>{data.tools?.name}</h1>
		<p class="whitespace-pre-line">{data.tools?.description}</p>
	</div>

	<div class="mt-6 flex w-full flex-col space-y-3">
		<h3>Comments</h3>

		{#if data.tools.comment.length > 0}
			{#each data.tools.comment as item}
				<AmaCommentCard
					name={data.tools.user?.name ?? 'Anonymous'}
					image={data.tools.user?.image ?? '/images/anonymous.png'}
					content={item.content ?? ''}
					isAuthor={isAuthor(data.tools.user?.id ?? 'Guest')}
					createdAt={item.createdAt ?? ''}
				/>
			{/each}
		{:else}
			<p>No comments yet</p>
		{/if}

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
	</div>
</section>
