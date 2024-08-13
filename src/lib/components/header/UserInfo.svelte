<script lang="ts">
	import type { PageData } from '../../../routes/$types';
	import Button from '$lib/components/ui/button/button.svelte';

	export let loggedIn: boolean;
	export let username: string | null;

	// 	ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center
	// whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none
	// focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
	// border-input bg-background hover:bg-accent hover:text-accent-foreground border h-10 w-10
</script>

{#if loggedIn}
	<div
		class="inline-flex h-10 flex-row items-center gap-1 rounded-md border border-input px-3 text-sm"
	>
		<span>{username}</span>
		<span>&bull;</span>
		<a href="/logout" class="font-semibold">Sign out</a>
	</div>
{:else}
	<a href="/login"><Button>Sign in</Button></a>
{/if}
