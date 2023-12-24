<script lang="ts">
	import { BarItemStatus } from '$lib/types/BarItem';
	import { getStatusClass } from '$lib/utilities/bar.utils';
	import { ANIMATION_DURATION, CUSTOM_CLASSES } from '$lib/const';

	export let status: BarItemStatus = BarItemStatus.Inactive;

	$: statusClass = getStatusClass({ status });
</script>

<div
	class={`bg-white sm:w-2 w-1.5 sm:h-6 h-5 ${CUSTOM_CLASSES[statusClass]} rounded-sm sm:rounded-[3px]`}
	style:transition={`all ${ANIMATION_DURATION}ms ease-out`}
/>
