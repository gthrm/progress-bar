<script lang="ts">
	import ProgressBar from '$lib/components/ProgressBar/index.svelte';
	import SlideOutMenu from '$lib/components/SlideOutMenu/index.svelte';
	import InputNumber from '$lib/components/InputNumber/index.svelte';
	import Button from '$lib/components/Button/index.svelte';
	import Checkbox from '$lib/components/Checkbox/index.svelte';

	import { ANIMATION_DURATION } from '$lib/const';

	let value = 0;
	let min = 0;
	let max = 1;
	let optimum = 0.5;

	const numberOfItems = 7;

	let isSwitcherOn = false;
	let isSettingsOpen = false;
	let isPlayingStarted = false;

	const handlePlayAnimation = () => {
		if (isPlayingStarted) return;
		const playingTimeout = (ANIMATION_DURATION / 2) * numberOfItems;

		isPlayingStarted = true;
		isSwitcherOn = !isSwitcherOn;

		setTimeout(() => {
			isSwitcherOn = !isSwitcherOn;
			setTimeout(() => {
				isPlayingStarted = false;
			}, playingTimeout);
		}, playingTimeout);
	};

	const handleParamsMenuOpen = () => {
		isSettingsOpen = !isSettingsOpen;
	};

	$: {
		if (isSwitcherOn) {
			value = max;
		} else {
			value = min;
		}
	}
</script>

<section
	class="root w-screen flex items-center justify-center flex-col sm:py-20 py-10 m-0 gap-8 min-h-[100dvh]"
>
	<ProgressBar {value} {min} {max} {optimum} {numberOfItems} />

	<Checkbox bind:checked={isSwitcherOn} disabled={isPlayingStarted} />

	<Button
		inputName="play"
		on:click={handlePlayAnimation}
		value={isPlayingStarted ? 'Playing...' : 'Play'}
		disabled={isPlayingStarted}
	/>

	<input
		class="text-neutral-500 text-sm uppercase font-extrabold cursor-pointer"
		type="button"
		name="set_params"
		id="set_params"
		on:click={handleParamsMenuOpen}
		value="Set Params"
	/>

	<SlideOutMenu bind:isOpen={isSettingsOpen} on:close={handleParamsMenuOpen}>
		<div class="flex flex-col mx-4 gap-4 px">
			<InputNumber
				label="Min value"
				bind:value={min}
				inputName="min-number"
				min={0}
				{max}
				step={max / 10}
				disabled={isPlayingStarted}
			/>

			<InputNumber
				label="Max value"
				bind:value={max}
				inputName="max-number"
				step={1}
				{min}
				disabled={isPlayingStarted}
			/>

			<InputNumber
				label="Current value"
				bind:value
				inputName="value-number"
				{min}
				{max}
				step={max / 10}
				disabled={isPlayingStarted}
			/>

			<InputNumber
				label="Optimum value"
				bind:value={optimum}
				inputName="optimum-number"
				step={max / 10}
				{min}
				{max}
				disabled={isPlayingStarted}
			/>
			<Button
				inputName="ok"
				on:click={handleParamsMenuOpen}
				value={isPlayingStarted ? 'Waiting...' : 'Ok'}
				disabled={isPlayingStarted}
			/>
		</div>
	</SlideOutMenu>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.neutral.700);
		color: theme(colors.white);
	}
</style>
