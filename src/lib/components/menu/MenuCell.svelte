<script lang="ts">
	import Icon from '../icon/Icon.svelte';

	export let name: string = '';
	export let href: string = '';
	export let icon: string = '';
</script>

<di
	class="flex w-full flex-row items-center justify-between transition-all delay-75 ease-in-out hover:-rotate-1"
>
	<a
		class="delay-50 flex w-full items-center justify-between text-start text-2xl font-medium tracking-tight text-gray-900 transition-all hover:underline dark:text-white"
		{href}
	>
		{name}
	</a>

	<div>
		<Icon width="24" height="24" name={icon} />
	</div>
</di>
