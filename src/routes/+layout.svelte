<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';

	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<ModeWatcher />
<Header />
<slot></slot>
