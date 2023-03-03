/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			satoshi: "'Satoshi', sans-serif"
		},
		container: {
			center: true
		},
		extend: {
			colors: {
				deeppurple: '#0F172E'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
