const __resolved__virtual_storySource_srcLibComponentsProgressbarProgressbarStorySvelte = `<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import ProgressBar from '$lib/components/ProgressBar/index.svelte';

	export let Hst: Hst;

	let currentValue = 0.5;
	let min = 0;
	let max = 1;
	let optimum = 0.4;
<\/script>

<Hst.Story title="ProgressBar" layout={{ type: 'single' }}>
	<Hst.Variant title="default">
		<ProgressBar {min} {max} value={currentValue} {optimum} />
		<svelte:fragment slot="controls">
			Current value: <input class="border py-1 px-2" type="number" bind:value={currentValue} />
			<br />

			Min value: <input class="border py-1 px-2" type="number" bind:value={min} />
			<br />

			Max value: <input class="border py-1 px-2" type="number" bind:value={max} />
			<br />

			Optimum value: <input class="border py-1 px-2" type="number" bind:value={optimum} />
		</svelte:fragment>
	</Hst.Variant>
</Hst.Story>;
`;
export { __resolved__virtual_storySource_srcLibComponentsProgressbarProgressbarStorySvelte as default };
