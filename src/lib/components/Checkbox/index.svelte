<script lang="ts">
	export let checked = false;
	export let disabled = false;
</script>

<input type="checkbox" bind:checked id="cb1-6" class="hidden" {disabled} />
<label
	for="cb1-6"
	class={`relative w-16 h-9 ${disabled ? 'cursor-wait' : 'cursor-pointer'} rounded-full`}
	class:bg-green-400={checked}
	class:bg-gray-200={!checked}
>
	<span
		class={`absolute block  top-1 bg-white w-7 h-7 rounded-full shadow transition-transform duration-300 ${
			checked ? 'translate-x-8' : 'left-1 translate-x-0'
		}`}
	></span>
</label>
