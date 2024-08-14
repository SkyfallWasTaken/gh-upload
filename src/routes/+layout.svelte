<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';

	import Header from '$lib/components/header/Header.svelte';
	import '../app.css';

	import type { PageData } from './$types';
	export let data: PageData;
	console.log('layout', data);
</script>

<ModeWatcher />
<Header username={data.username} loggedIn={data.loggedIn} />
<slot></slot>
