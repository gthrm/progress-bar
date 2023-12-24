<script lang="ts">
	import BarItem from '$lib/components/BarItem/index.svelte';
	import { ANIMATION_DURATION } from '$lib/const';
	import DarkIcon from '$lib/icons/Dark/index.svelte';
	import LightIcon from '$lib/icons/Light/index.svelte';
	import type { IBarItem } from '$lib/types/BarItem';
	import { createProgressBarItemsData } from '$lib/utilities/bar.utils';
	import { sineInOut } from 'svelte/easing';
	import { tweened, type Tweened } from 'svelte/motion';

	export let value = 0;
	export let min = 0;
	export let max = 1;
	export let optimum = 0.5;
	export let numberOfItems = 7;

	$: fullDuration = numberOfItems * ANIMATION_DURATION;

	$: progress = tweened(0, {
		duration: fullDuration,
		easing: sineInOut
	});

	$: isLight = $progress >= optimum;

	$: progressBarItemsData = createProgressBarItemsData({
		value: $progress,
		min,
		max,
		optimum,
		numberOfItems
	});

	$: {
		progress.set(value);
	}
</script>

<div
	class="sm:w-[254px] w-[230px] sm:h-[58px] h-[52px] sm:p-2 p-0 rounded-lg justify-center items-center gap-7 inline-flex"
>
	<div class="w-8 h-8 p-1.5 justify-center items-center flex">
		<DarkIcon isActive={!isLight} />
	</div>
	<div class="justify-center items-center gap-2.5 flex">
		{#each progressBarItemsData as { id, status } (id)}
			<BarItem {status} />
		{/each}
	</div>
	<div class="w-8 h-8 p-1 justify-center items-center flex">
		<LightIcon isActive={isLight} />
	</div>
</div>
