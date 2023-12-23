<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import ProgressBar from '$lib/components/ProgressBar/index.svelte';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
	const value = 0.5;
	const min = 0;
	const max = 1;
	const optimum = 0.5;
</script>

<div class="root w-screen flex items-center justify-center flex-col m-2 sm:m-0">
	<h1 class="text-3xl font-bold underline">Hello world!</h1>
	<ProgressBar {value} {min} {max} {optimum} />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.neutral.700);
	}
</style>
