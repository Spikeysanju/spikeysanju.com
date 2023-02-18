<script lang="ts">
	export let question: string = '';
	export let author: string = '';
	export let timeago: string = '';
	export let authorImage: string = '';
</script>

<div class="flex w-full flex-col items-center justify-center space-y-3">
	<h1 class="w-full text-lg font-medium tracking-tight">
		{question}
	</h1>

	<div class="items-centerw flex w-full flex-row justify-between">
		<div class="flex flex-row items-center justify-center space-x-3">
			<img src={authorImage} alt={author} class="h-9 w-9 rounded-full" />
			<span>{author}</span>
		</div>
		<p class="text-sm text-stone-500">{timeago}</p>
	</div>
</div>
