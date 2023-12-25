<script lang="ts">
	import { BarItemStatus } from '$lib/types/BarItem';
	import { getStatusClass } from '$lib/utilities/bar.utils';
	import { ANIMATION_DURATION, CUSTOM_CLASSES } from '$lib/const';

	export let status: BarItemStatus = BarItemStatus.Inactive;

	$: statusClass = getStatusClass({ status });
</script>

<div
	class={`bg-white ${CUSTOM_CLASSES[statusClass]} rounded-sm sm:rounded-[3px] transition-all duration-200 ease-out`}
	style:transition={`all ${ANIMATION_DURATION}ms ease-out`}
/>
