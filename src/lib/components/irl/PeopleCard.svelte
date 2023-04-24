<script lang="ts">
	import { clsx } from '$lib/utils/clsx';

	export let name: string;
	export let url: string;
	export let met: boolean;

	export let tags: string[];
</script>

<div class="mt-6 flex w-full flex-row items-center justify-between space-y-3">
	<div class="flex w-full items-center justify-center space-x-3">
		<div class="space-y flex w-full flex-col">
			<h1
				class={clsx(
					met ? 'text-gray-500 line-through' : 'text-gray-900',
					'w-full text-lg tracking-tight'
				)}
			>
				{name}
			</h1>

			<p class="text-sm text-gray-500">{url}</p>
		</div>
	</div>

	{#if tags}
		<div class="flex flex-row gap-x-2">
			{#each tags as tag}
				<span
					class="py w-fit items-center rounded-xl bg-gray-50 px-2 text-center text-xs font-bold capitalize tracking-wider text-gray-900"
					>{tag}</span
				>
			{/each}
		</div>
	{/if}
</div>
