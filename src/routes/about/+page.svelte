<script lang="ts">
	import { PUBLIC_WEBSITE_URL } from '$env/static/public';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title} – Spikey Sanju</title>
	<meta name="description" content={data.description} />

	<!-- canonical -->
	<link rel="canonical" href="{PUBLIC_WEBSITE_URL}/about" />

	<!-- robots -->
	<meta name="robots" content="index, follow" />
</svelte:head>

<section>
	<h1
		class="text-3xl leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-snug lg:text-4xl lg:leading-tight"
	>
		When people ask me what I do, I tell them I'm a designer and an engineer. Then they give me that
		confused look, and I tell them, "Think of me as a visual mechanic - I fix broken interfaces and
		give them a fresh coat of pixels." My passion for design and engineering is like a marriage - we
		may argue at times, but we always come to a happy resolution. As the founder of my own UX design
		studio, I specialize in taking a user's experience from "meh" to "heck yeah!
	</h1>
</section>
