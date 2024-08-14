<script lang="ts">
	import type { PageData } from './$types';
	import UploadContainer from '$lib/components/UploadContainer.svelte';
	import Dropzone from 'svelte-file-dropzone';
	import { Button } from '$lib/components/ui/button';
	import Upload from 'lucide-svelte/icons/upload';

	export let data: PageData;

	let filesToUpload: File[] = [];

	function onFileUpload(files: File[]) {
		filesToUpload = [...filesToUpload, ...files];
	}

	let files: File[] = [];
</script>

<main class="px-2 py-4">
	<div class="flex flex-col items-center justify-center gap-12">
		<h1 class="mt-4 text-center text-6xl font-bold">Uploads made<br />simple</h1>
		<UploadContainer loggedIn={data.loggedIn} bind:files />
		{#if files.length > 0}
			<Button><Upload class="mr-2 h-4 w-4" />Upload files</Button>
		{/if}
	</div>
</main>
