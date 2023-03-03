<script lang="ts">
	import { formatDistance } from 'date-fns';

	export let isAuthor = '';
	export let image = '';
	export let name = '';
	export let content = '';
	export let createdAt = '';
</script>

<div class="py-3">
	<div class="flex flex-row items-center justify-between">
		<div class="flow-row item-center flex w-full justify-between">
			<div class="flex flex-row items-center justify-center space-x-3">
				<img src={image} alt={name} class="h-9 w-9 rounded-full" />
				<span class="font-medium text-gray-900 dark:text-white">{name}</span>
				{#if isAuthor === 'Author'}
					<span
						class="inline-flex rounded-full bg-green-100 px-2 text-xs font-medium leading-5 text-green-800 hover:bg-green-200"
					>
						AUTHOR
					</span>
				{:else if isAuthor === 'Creator'}
					<span
						class="inline-flex rounded-full bg-blue-100 px-2 text-xs font-medium leading-5 text-blue-800 hover:bg-blue-200"
					>
						CREATOR
					</span>
				{:else}
					<span
						class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200"
					>
						GUEST
					</span>
				{/if}
			</div>

			<div class="text-right">
				<span class="text-gray-500">{formatDistance(new Date(`${createdAt}`), new Date())}</span>
			</div>
		</div>
	</div>

	<p class="mt-3 whitespace-pre-line">{content}</p>
</div>
