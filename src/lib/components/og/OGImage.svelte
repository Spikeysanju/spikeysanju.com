<script lang="ts">
	export let message: string = '';
	export let author: string = 'Spikey Sanju';
</script>

<div>
	{#if message.length > 50}
		{#each message.split('\n') as line}
			<div>{line}</div>
		{/each}
	{:else}
		{message}
	{/if}

	<p>– {author}</p>
</div>

<style>
	div {
		font-family: 'Satoshi', sans-serif;
		display: flex;
		flex-direction: column;
		font-size: 50px;
		background-color: white;
		color: black;
		height: 100%;
		width: 100%;
		align-items: flex-start;
		justify-content: center;
		padding: 36px;
	}

	p {
		text-align: left;
	}
</style>
