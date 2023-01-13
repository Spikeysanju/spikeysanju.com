<script lang="ts">
	export let name: string = '';
	export let href: string = '';
	export let icon: string = '';
</script>

<a
	class="flex w-full items-center justify-between text-start text-2xl tracking-tight text-gray-900 transition-all delay-150 hover:underline"
	{href}
>
	{name}
	<p class="hover:translate-x-3">→</p>
</a>
