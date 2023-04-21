<script lang="ts">
	export let quote = 'Quote';
	export let author = 'Author';

	export let borderColor:
		| 'border-yellow-300'
		| 'border-pink-300'
		| 'border-blue-300'
		| 'border-green-300'
		| 'border-purple-300'
		| 'border-gray-900' = 'border-yellow-300';

	export let textColor: 'text-gray-900' | 'text-white' = 'text-gray-900';
</script>

<br />

<div
	class={`relative flex w-full flex-col space-y-3 border-l-4 ${borderColor} p-6  ${textColor} dark:text-white`}
>
	<h1 class="absolute top-3 left-6 text-3xl font-bold">"</h1>
	<div class="text-2xl leading-relaxed tracking-tight sm:text-3xl">{quote}</div>
	<p>– {author}</p>
</div>
<br />
