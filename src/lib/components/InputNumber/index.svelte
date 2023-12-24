<script lang="ts">
	export let inputName = 'InputNumber';
	export let value = 0;
	export let min = 0;
	export let max = 100;
	export let label = 'Label';
	export let step = 1;
	export let disabled = false;
</script>

<label for={inputName}>
	<span class="text-xl font-extrabold px-2">{label}</span>
	<input
		bind:value
		class={`w-full bg-neutral-300 rounded-sm px-4 py-2 text-neutral-600 text-xl uppercase font-extrabold my-1 ${
			disabled ? 'cursor-not-allowed' : ''
		}`}
		type="number"
		name={inputName}
		id={inputName}
		{disabled}
		{min}
		{max}
		{step}
	/>
</label>
