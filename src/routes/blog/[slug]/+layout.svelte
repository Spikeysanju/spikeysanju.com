<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="container mx-auto max-w-2xl">
	<slot />
</div>
