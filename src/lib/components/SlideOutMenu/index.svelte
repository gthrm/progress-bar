<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let isOpen = false;
	const dispatch = createEventDispatcher();

	const handleClose = (event: Event) => {
		dispatch('close', event);
	};
</script>

<div
	class={`fixed top-0 right-0 h-full bg-neutral-600 border-l border-neutral-500 z-10 transition-transform duration-300
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
              sm:max-w-[350px] w-full`}
>
	<div class="flex justify-end items-center">
		<input
			class="text-white text-[30px] uppercase font-bold cursor-pointer py-3 px-4"
			type="button"
			on:click={handleClose}
			value="X"
		/>
	</div>
	<slot />
</div>
