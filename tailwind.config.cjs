/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			satoshi: "'Satoshi', sans-serif"
		},
		container: {
			center: true
		},
		extend: {
			colors: {
				deeppurple: '#171630'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
