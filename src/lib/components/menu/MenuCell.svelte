<script lang="ts">
	export let name: string = '';
	export let href: string = '';
	export let icon: string = '';
</script>

<a
	class="delay-50 flex w-full items-center justify-between text-start text-2xl font-semibold tracking-tight text-gray-900 transition-all hover:underline"
	{href}
>
	{name}
	<p class="hover:translate-x-3">→</p>
</a>
