<script lang="ts">
	export let name: string;
	export let width: string;
	export let height: string;

	type Icon = {
		box: number;
		svg: string;
	};

	type Icons = {
		[key: string]: Icon;
		day: Icon;
		night: Icon;
		rightArrow: Icon;
		sponsor: Icon;
	};

	const icons: Icons = {
		day: {
			box: 24,
			svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>`
		},
		night: {
			box: 24,
			svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="m2 2 20 20"></path><path d="M9 2.804A6 6 0 0 1 18 8a4.65 4.65 0 0 1-1.03 3"></path><path d="M8.91 14a4.61 4.61 0 0 0-1.41-2.5C6.23 10.23 6 9 6 8a6 6 0 0 1 .084-1"></path></svg>`
		},
		rightArrow: {
			box: 24,
			svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`
		},
		sponsor: {
			box: 24,
			svg: `<svg width="151" height="20" viewBox="0 0 151 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.756 0.343999V6.868H10.472V20H16.996V6.868H26.712V0.343999H0.756ZM47.6118 0.371999V7.176H35.9078V0.371999H29.3838V20H35.9078V13.168H47.6118V20H54.1078V0.371999H47.6118ZM57.5794 20H64.1034V0.371999H57.5794V20ZM78.7185 0.399999C70.0665 0.399999 66.6785 0.987999 66.6785 6.812C66.6785 11.88 70.7385 12.272 78.7185 12.916C83.8705 13.336 84.4585 13.224 84.4585 13.84C84.4585 14.736 83.9265 14.708 79.1945 14.708C74.1825 14.708 73.7065 14.428 73.7065 13.252C72.8665 13.252 66.9585 13.252 66.9585 13.252C66.9585 18.992 68.5545 20 78.9145 20C90.1705 20 92.0745 18.964 92.0745 13.924C92.0745 8.856 89.7225 8.716 78.8305 7.82C73.9025 7.428 73.5385 7.4 73.4825 6.868C73.4825 6.14 73.9025 5.916 78.8865 5.916C84.0385 5.916 84.4305 6.504 84.4305 7.512C85.5505 7.512 91.3745 7.512 91.3745 7.512C91.3745 1.828 88.9945 0.399999 78.7185 0.399999ZM106.817 20C112.109 20 116.449 19.216 118.045 16.136C119.193 13.952 119.417 11.152 119.417 5.076V0.343999H112.529C112.529 0.343999 112.529 6.756 112.529 9.136C112.529 11.544 112.137 14.624 106.817 14.624C101.497 14.624 100.937 11.544 100.937 9.136C100.937 6.756 100.937 0.343999 100.937 0.343999H94.0485V5.076C94.0485 11.152 94.2725 13.952 95.4205 16.136C97.0165 19.216 101.525 20 106.817 20ZM150.019 0.343999H141.227L136.047 5.944L130.951 0.343999H122.159L131.007 10.172L122.075 20H130.867L136.019 14.428L141.143 20H149.935L141.087 10.172L150.019 0.343999Z" fill="black"/></svg>`
		}
	};

	// get icon by name from icons object
	const icon = icons[name];
</script>

<svg
	class={$$props.class}
	{width}
	{height}
	viewBox="0 0 {icon.box} {icon.box}"
	fill="none"
	stroke="currentColor"
	>{@html icon.svg}
</svg>
