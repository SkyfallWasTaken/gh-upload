<script lang="ts">
	import type { PageData } from './$types';
	import UploadContainer from '$lib/components/UploadContainer.svelte';

	export let data: PageData;
</script>

<main class="px-2 py-4">
	<div class="flex flex-col items-center justify-center gap-1">
		<h1 class="my-4 text-center text-6xl font-bold">Uploads made<br />simple</h1>
		<p>This is a simple file upload service.</p>
		<p>Click the button below to upload a file.</p>
		<UploadContainer loggedIn={data.loggedIn} />
	</div>
</main>
