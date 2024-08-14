<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';

	import Header from '$lib/components/header/Header.svelte';
	import '../app.css';

	import type { PageData } from './$types';
	export let data: PageData;

	let username: string | null;
	if (data.session?.user) {
		username = data.session.user.username || 'Unknown';
	}
</script>

<ModeWatcher />
<Header {username} loggedIn={data.session != null} />
<slot></slot>
