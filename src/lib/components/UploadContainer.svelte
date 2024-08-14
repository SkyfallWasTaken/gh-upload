<script lang="ts">
	import { Button } from './ui/button';
	import FileDrop from 'svelte-droplet/FileDrop.svelte';
	import Upload from 'lucide-svelte/icons/upload';
	import LockKeyhole from 'lucide-svelte/icons/lock-keyhole';

	export let loggedIn: boolean;
	export let files: File[] = [];
	let filenames: string[] = [];

	function handleFiles(newFiles: File[]) {
		for (const file of newFiles) {
			if (!filenames.includes(file.name)) {
				files = [...files, file];
				filenames = [...filenames, file.name];
			}
		}
	}
</script>

<div class="w-full px-2 md:w-1/4 md:px-0">
	<FileDrop {handleFiles} let:droppable disabled={!loggedIn}>
		<div
			class="{loggedIn ??
				droppable} container flex flex-col items-center gap-3 rounded-lg border-4 border-dashed border-slate-400 bg-secondary p-6"
		>
			{#if loggedIn}
				<div class="text-center">
					<h2 class="text-xl font-semibold">Select a file</h2>
					<p class="text-md text-muted-foreground">Or drag and drop to upload</p>
				</div>
				<Button>
					<Upload class="mr-2 h-4 w-4" />
					Choose a file
				</Button>
				{#if files.length > 0}
					<div class="mt-4 text-center">
						<h3 class="mb-2 text-lg font-semibold">Files to upload</h3>
						<ul class="grid w-full gap-2">
							{#each files as file}
								<div class="truncate rounded-md border border-2 border-slate-400 px-4 py-2">
									{file.name}
								</div>
							{/each}
						</ul>
					</div>
				{/if}
			{:else}
				<div class="text-center">
					<h2 class="text-xl font-semibold">First, sign in to GitHub</h2>
					<p class="text-muted-foreground">Once you're done, we'll go to the next stage.</p>
				</div>
				<Button href="/login">
					<LockKeyhole class="mr-2 h-4 w-4" />
					Sign in to GitHub
				</Button>
			{/if}
		</div>
	</FileDrop>
</div>
