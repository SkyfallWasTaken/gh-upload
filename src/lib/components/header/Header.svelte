<script lang="ts">
	import UserInfo from './UserInfo.svelte';
	import Separator from '../ui/separator/separator.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	export let loggedIn: boolean;
	export let username: string | null;
	export let avatar: string | null;
</script>

<div
	class="flex flex-col items-start justify-between space-y-2 px-8 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16"
>
	<h2 class="w-full text-lg font-semibold">Skyfall Upload</h2>
	<div class="ml-auto flex w-full space-x-2 sm:justify-end">
		<ThemeToggle />
		<UserInfo {loggedIn} {username} {avatar} />
	</div>
</div>
<Separator />
