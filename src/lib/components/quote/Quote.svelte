<script lang="ts">
	export let quote = 'Quote';
	export let author = 'Author';
	export let bgColor:
		| 'bg-yellow-300'
		| 'bg-pink-300'
		| 'bg-blue-300'
		| 'bg-green-300'
		| 'bg-purple-300'
		| 'bg-gray-900' = 'bg-yellow-300';
	export let textColor: 'text-gray-900' | 'text-white' = 'text-gray-900';
	export let shadowColor:
		| 'shadow-yellow-300/20'
		| 'shadow-pink-300/20'
		| 'shadow-blue-300/20'
		| 'shadow-green-300/20'
		| 'shadow-purple-300/20'
		| 'shadown-gray-900/20' = 'shadow-yellow-300/20';
</script>

<br />

<div
	class={`relative flex w-full flex-col space-y-3 p-6 ${bgColor} shadow-xl ${shadowColor} ${textColor}`}
>
	<h1 class="absolute top-3 left-6 text-3xl font-bold">"</h1>
	<div class="font-medium text-xl tracking-tight">{quote}</div>
	<p>– {author}</p>
</div>
<br />
