/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '320px'
		},
		extend: {
			boxShadow: {
				custom: '0px 0px 24px -2px #FFF, 0px 0px 6px -1px #FFF'
			}
		}
	},
	plugins: []
};
