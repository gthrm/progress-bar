<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';

	import BarItemsSvg from '$lib/components/BarItemsSvg/index.svelte';
	import BarItem from '$lib/components/BarItem/index.svelte';
	import DarkIcon from '$lib/icons/Dark/index.svelte';
	import LightIcon from '$lib/icons/Light/index.svelte';

	import { ANIMATION_DURATION } from '$lib/const';
	import { createProgressBarItemsData } from '$lib/utilities/bar.utils';

	export let value = 0;
	export let min = 0;
	export let max = 1;
	export let optimum = 0.5;
	export let numberOfItems = 7;
	export let useSVG = true;

	let currentValue = 0;

	const BASE_DURATION = ANIMATION_DURATION / 2;

	$: fullDuration = numberOfItems * BASE_DURATION;

	$: progress = tweened(0, {
		duration: fullDuration,
		easing: linear
	});

	$: isLight = $progress >= optimum;

	$: progressBarItemsData = createProgressBarItemsData({
		value: $progress,
		min,
		max,
		numberOfItems
	});

	$: if (typeof value === 'number') {
		const stepChange = Math.abs(value - currentValue);
		const conditionalStepValue = stepChange / (max - min);
		const duration = conditionalStepValue * numberOfItems * BASE_DURATION;

		progress.set(value, { duration });
		currentValue = value;
	}
</script>

{#if useSVG}
	<div
		class="bg-neutral-700 sm:w-[254px] w-[230px] sm:h-[58px] h-[52px] p-2 rounded-lg justify-center items-center sm:gap-[6px] gap-[6px] inline-flex"
	>
		<div class="w-8 h-8 justify-center items-center flex">
			<DarkIcon isActive={!isLight} />
		</div>
		<BarItemsSvg itemsData={progressBarItemsData} />
		<div class="w-8 h-8 p-1 justify-center items-center flex">
			<LightIcon isActive={isLight} />
		</div>
	</div>
{:else}
	<div
		class="bg-neutral-700 sm:w-[254px] w-[230px] sm:h-[58px] h-[52px] p-2 rounded-lg justify-center items-center sm:gap-[28px] gap-[24px] inline-flex"
	>
		<div class="w-8 h-8 justify-center items-center flex">
			<DarkIcon isActive={!isLight} />
		</div>
		<div
			class="sm:w-[118px] w-[102px] sm:h-[42px] h-[36px] justify-center items-center gap-2.5 flex"
		>
			{#each progressBarItemsData as { id, status } (id)}
				<BarItem {status} />
			{/each}
		</div>

		<div class="w-8 h-8 p-1 justify-center items-center flex">
			<LightIcon isActive={isLight} />
		</div>
	</div>
{/if}
