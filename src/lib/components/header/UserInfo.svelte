<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Avatar from '$lib/components/ui/avatar';

	export let loggedIn: boolean;
	export let username: string | null;
	export let avatar: string | null;

	// 	ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center
	// whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none
	// focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
	// border-input bg-background hover:bg-accent hover:text-accent-foreground border h-10 w-10
</script>

{#if loggedIn}
	<div
		class="inline-flex h-10 flex-row items-center gap-1 rounded-md border border-input px-3 text-sm"
	>
		{#if avatar}
			<Avatar.Root class="mr-1 h-6 w-6">
				<Avatar.Image src={avatar} alt={`@${username}`} />
				<Avatar.Fallback>??</Avatar.Fallback>
			</Avatar.Root>
		{/if}
		<span>{username}</span>
		<span>&bull;</span>
		<a href="/" class="font-semibold" on:click={() => signOut()}>Sign out</a>
	</div>
{:else}
	<Button on:click={() => signIn('github')}>Sign in</Button>
{/if}
