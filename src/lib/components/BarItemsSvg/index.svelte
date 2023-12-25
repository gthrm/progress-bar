<script lang="ts">
	import BarItemSvg from '$lib/components/BarItemSvg/index.svelte';
	import BarItemFilter from '$lib/components/BarItemFilter/index.svelte';
	import { type IBarItem } from '$lib/types/BarItem';
	import { SMALL_SCREEN_WIDTH } from '$lib/const';

	export let itemsData: IBarItem[] = [];

	let innerWidth = 320;

	$: isSmallScreen = innerWidth < SMALL_SCREEN_WIDTH;

	$: svgWidth = isSmallScreen ? 148 : 162;
	$: svgHeight = isSmallScreen ? 80 : 86;
</script>

<svelte:window bind:innerWidth />
<svg
	width={svgWidth}
	height={svgHeight}
	viewBox={`0 0 ${svgWidth} ${svgHeight}`}
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g id="bar">
		{#each itemsData as { id, status } (id)}
			<BarItemSvg {id} {status} />
		{/each}
	</g>
	<BarItemFilter />
</svg>
