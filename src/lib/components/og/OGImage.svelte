<script lang="ts">
	import Icon from '../icon/Icon.svelte';

	export let title = '';
	export let content = '';
	export let author = 'www.spikeysanju.com';
</script>

<div class="flex h-[630px] w-[1200px] flex-col items-start justify-between space-y-6 bg-white p-12">
	<div id="content" class="flex flex-col space-y-3">
		{#if title.length !== 0}
			<h1
				id="title"
				class="flex flex-col whitespace-pre-line bg-yellow-100 text-5xl text-yellow-800 underline-offset-auto"
			>
				{#if title.length > 40}
					{#each title.split('\n') as line}
						<div>{line}</div>
					{/each}
				{:else}
					{title}
				{/if}
			</h1>
		{/if}

		<h1 id="description" class="flex w-full flex-col text-5xl">
			{#if content.length > 50}
				{#each content.split('\n') as line}
					<div>{line}</div>
				{/each}
			{:else}
				{content}
			{/if}
		</h1>
	</div>

	<div class="flex w-full flex-row items-center justify-between space-x-12">
		<div class="flex flex-col space-y-6">
			<h6 class="mb-3">Sponsered by</h6>
			<Icon width="24" height="24" name="sponsor" />
		</div>

		<h6 class="text-3xl">{author}</h6>
	</div>
</div>
