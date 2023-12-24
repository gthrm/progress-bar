<script lang="ts">
	import { fade } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import { BarItemStatus } from '$lib/types/BarItem';
	import { getStatusClass } from '$lib/utilities/bar.utils';
	import { ANIMATION_DURATION, CUSTOM_CLASSES } from '$lib/const';

	export let status: BarItemStatus = BarItemStatus.Inactive;

	$: statusClass = getStatusClass({ status });
</script>

<div
	class={`bg-white sm:w-2 w-1.5 sm:h-6 h-5 ${CUSTOM_CLASSES[statusClass]} sm:rounded-sm rounded-[3px]`}
	transition:fade={{ duration: ANIMATION_DURATION, easing: sineInOut }}
	style:transition={`width ${ANIMATION_DURATION}ms ease, height ${ANIMATION_DURATION}ms ease, background-opacity ${ANIMATION_DURATION}ms ease`}
/>
