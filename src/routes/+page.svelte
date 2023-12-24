<script lang="ts">
	import ProgressBar from '$lib/components/ProgressBar/index.svelte';
	import { ANIMATION_DURATION } from '$lib/const';

	let value = 0;
	const min = 0;
	const max = 1;
	const optimum = 0.5;
	const numberOfItems = 7;

	let isSwitcherOn = false;

	const handlePlayAnimation = () => {
		isSwitcherOn = !isSwitcherOn;
		setTimeout(
			() => {
				isSwitcherOn = !isSwitcherOn;
			},
			(ANIMATION_DURATION / 2) * numberOfItems
		);
	};

	$: {
		if (isSwitcherOn) {
			value = 1;
		} else {
			value = 0;
		}
	}
</script>

<div class="root w-screen flex items-center justify-center flex-col sm:py-20 py-10 m-0 gap-8 min-h-[100dvh]">
	<ProgressBar {value} {min} {max} {optimum} {numberOfItems} />
	<input type="checkbox" bind:checked={isSwitcherOn} id="cb1-6" class="hidden" />
	<label
		for="cb1-6"
		class="relative w-16 h-9 cursor-pointer rounded-full"
		class:bg-green-400={isSwitcherOn}
		class:bg-gray-200={!isSwitcherOn}
	>
		<span
			class={`absolute block  top-1 bg-white w-7 h-7 rounded-full shadow transition-transform duration-300 ${
				isSwitcherOn ? 'translate-x-8' : 'left-1 translate-x-0'
			}`}
		></span>
	</label>
	<input
		class="px-3 py-2 bg-neutral-500 rounded-sm min-w-[150px] text-white text-xl uppercase font-extrabold cursor-pointer"
		type="button"
		name="play"
		id="play"
		on:click={handlePlayAnimation}
		value="Play"
	/>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.neutral.700);
		color: theme(colors.white);
	}
</style>
