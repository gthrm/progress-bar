<script lang="ts">
	import { SMALL_SCREEN_WIDTH } from '$lib/const';
	import { BarItemStatus } from '$lib/types/BarItem';
	import { getBarItemParams } from '$lib/utilities/bar.utils';

	export let id = 0;
	export let status: BarItemStatus = BarItemStatus.Inactive;

	let innerWidth = 320;

	$: isSmallScreen = innerWidth < SMALL_SCREEN_WIDTH;

	$: barItemParams = getBarItemParams(id, status, isSmallScreen);

	$: isFilterApplied =
		status === BarItemStatus.Current ||
		status === BarItemStatus.Active ||
		status === BarItemStatus.Prev;
</script>

<svelte:window bind:innerWidth />
<g id={`line_${id}`} filter={isFilterApplied ? 'url(#shiny_filter)' : null}>
	<rect
		x={barItemParams.x}
		y={barItemParams.y}
		width={barItemParams.width}
		height={barItemParams.height}
		fill-opacity={barItemParams.fillOpacity}
		rx="3"
		fill="white"
	/>
</g>

<style>
	g,
	rect {
		transition: all 350ms ease-out 30ms;
	}
</style>
