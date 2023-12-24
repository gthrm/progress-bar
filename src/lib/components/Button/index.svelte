<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value = 'Value';
	export let inputName: string | null = null;
	export let disabled = false;
	const dispatch = createEventDispatcher();

	const handleClick = (event: Event) => {
		dispatch('click', event);
	};
</script>

<input
	class={`px-3 py-2 bg-neutral-500 rounded-sm min-w-[150px] text-white text-xl uppercase font-extrabold ${
		disabled ? 'cursor-wait' : 'cursor-pointer'
	}`}
	type="button"
	name={inputName}
	id={inputName}
	on:click={handleClick}
	{value}
	{disabled}
/>
