<script>
	import Button from './ui/button/button.svelte';
	import Separator from './ui/separator/separator.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div
	class="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16"
>
	<h2 class="w-full text-lg font-semibold">Skyfall Upload</h2>
	<div class="ml-auto flex w-full space-x-2 sm:justify-end">
		<ThemeToggle />
		<a href="/login"><Button>Sign in</Button></a>
	</div>
</div>
<Separator />
