<script lang="ts">
	import ProgressBar from '$lib/components/ProgressBar/index.svelte';

	let value = 1;
	const min = 0;
	const max = 1;
	const optimum = 0.5;
	const numberOfItems = 7;

	let isSwitcherOn = false;

	$: {
		if (isSwitcherOn) {
			value = 1;
		} else {
			value = 0;
		}
	}
</script>

<div class="root w-screen flex items-center justify-center flex-col m-2 sm:m-0">
	<h1 class="text-3xl text-white font-bold">Hello world!</h1>
	<ProgressBar {value} {min} {max} {optimum} {numberOfItems} />
	<input type="checkbox" name="switcher" id="switcher" bind:checked={isSwitcherOn} />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.neutral.700);
		color: theme(colors.white);
	}
</style>
