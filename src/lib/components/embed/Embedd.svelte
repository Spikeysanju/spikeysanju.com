<script lang="ts">
	import { Tweet, Spotify } from 'sveltekit-embed';
	export let tweetLink: string;
</script>

<span class="flex w-full flex-col">
	<h1>{tweetLink}</h1>
	<Tweet tweetLink="adamwathan/status/959078631434731521" />
	<Spotify spotifyLink="show/4XPl3uEEL9hvqMkoZrzbx5" />
</span>
