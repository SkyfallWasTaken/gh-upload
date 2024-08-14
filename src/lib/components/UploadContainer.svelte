<script lang="ts">
	import { Button } from './ui/button';
	import Upload from 'lucide-svelte/icons/upload';
	import LockKeyhole from 'lucide-svelte/icons/lock-keyhole';

	export let loggedIn: boolean;
</script>

<div
	class="container flex flex-col items-center gap-3 rounded-lg border-4 border-dashed border-slate-400 bg-secondary p-6"
>
	{#if loggedIn}
		<h2 class="text-xl font-semibold">Select a file</h2>
		<p class="text-muted-foreground">Or drag and drop to upload</p>
		<Button>
			<Upload class="mr-2 h-4 w-4" />
			Choose a file
		</Button>
	{:else}
		<h2 class="text-xl font-semibold">First, sign in to GitHub</h2>
		<p class="text-muted-foreground">Once you're done, we'll go to the next stage.</p>
		<Button>
			<LockKeyhole class="mr-2 h-4 w-4" />
			Sign in to GitHub
		</Button>
	{/if}
</div>
