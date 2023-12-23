<script lang="ts">
	const STYLES: Record<string, string> = {
		'bar-active': 'bg-opacity-100',
		'bar-prev': 'sm:w-2 w-1.5 sm:h-7 h-6 bg-opacity-100',
		'bar-current': 'bg-opacity-100 sm:w-2.5 w-1.5 sm:h-[42px] h-9 ',
		'bar-next': 'sm:w-2 w-1.5 sm:h-7 h-6 bg-opacity-60',
		'bar-inactive': 'bg-opacity-40'
	};

	import { BarItemStatus } from '$lib/types/BarItem';
	import { getStatusClass } from '$lib/utilities/bar.utils';

	export let status: BarItemStatus = BarItemStatus.Inactive;

	const statusClass = getStatusClass({ status });
</script>

<div
	class={`bg-white shadow sm:w-2 w-1.5 sm:h-6 h-5 ${STYLES[statusClass]} sm:rounded-sm rounded-[3px]`}
/>
