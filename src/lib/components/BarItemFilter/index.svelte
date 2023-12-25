<script>
	export let width = 162;
	export let height = 86;
	export let id = 'shiny_filter';
</script>

<defs>
	<filter
		{id}
		x="0"
		y="0"
		{width}
		{height}
		filterUnits="userSpaceOnUse"
		color-interpolation-filters="sRGB"
	>
		<feFlood flood-opacity="0" result="BackgroundImageFix" />
		<feColorMatrix
			in="SourceAlpha"
			type="matrix"
			values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
			result="hardAlpha"
		/>
		<feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_14_169" />
		<feOffset />
		<feGaussianBlur stdDeviation="12" />
		<feComposite in2="hardAlpha" operator="out" />
		<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
		<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_169" />
		<feColorMatrix
			in="SourceAlpha"
			type="matrix"
			values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
			result="hardAlpha"
		/>
		<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_14_169" />
		<feOffset />
		<feGaussianBlur stdDeviation="3" />
		<feComposite in2="hardAlpha" operator="out" />
		<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
		<feBlend mode="normal" in2="effect1_dropShadow_14_169" result="effect2_dropShadow_14_169" />
		<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_14_169" result="shape" />
	</filter>
</defs>
