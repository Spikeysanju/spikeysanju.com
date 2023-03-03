<script lang="ts">
	import { scale } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	export let showModal = false;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<dialog
	transition:scale={{ duration: 300, easing: cubicInOut }}
	class="inset-0 z-10 flex w-full max-w-2xl overflow-y-auto rounded-lg p-5 transition-all delay-75 ease-in-out backdrop:bg-black/50"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div on:click|stopPropagation class="space-y-3">
		<slot name="header" />
		<slot name="content" />
		<slot name="cta" />
	</div>
</dialog>
