<script lang="ts">
	import BarItem from '$lib/components/BarItem/index.svelte';
	import DarkIcon from '$lib/icons/Dark/index.svelte';
	import LightIcon from '$lib/icons/Light/index.svelte';
	import { createProgressBarItemsData } from '$lib/utilities/bar.utils';

	const NUMBER_OF_ITEMS = 7;

	export let value = 0;
	export let min = 0;
	export let max = 1;
	export let optimum = 0.5;

	const progressBarItemsData = createProgressBarItemsData({
		numberOfItems: NUMBER_OF_ITEMS,
		value,
		min,
		max,
		optimum
	});

	console.log('progressBarItemsData', progressBarItemsData);
</script>

<div class="w-[254px] h-[58px] p-2 rounded-lg border justify-center items-center gap-7 inline-flex">
	<div class="w-8 h-8 p-1.5 justify-center items-center flex">
		<DarkIcon />
	</div>
	<div class="justify-center items-center gap-2.5 flex">
		{#each progressBarItemsData as { id, active, preActive } (id)}
			<BarItem {active} {preActive} />
		{/each}
	</div>
	<div class="w-8 h-8 p-1 justify-center items-center flex">
		<LightIcon />
	</div>
</div>
