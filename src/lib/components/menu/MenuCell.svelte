<script lang="ts">
	import Icon from '../icon/Icon.svelte';
	export let name = '';
	export let href = '';
	export let icon = '';
</script>

<div
	class="flex w-full flex-row items-center justify-between transition-all delay-75 ease-in-out hover:-rotate-1"
>
	<a
		class="delay-50 flex w-full items-center justify-between text-start text-2xl font-medium tracking-tight text-gray-900 transition-all hover:underline dark:text-white"
		{href}
	>
		{name}
	</a>

	<div>
		<Icon size="medium" name={icon} />
	</div>
</div>
