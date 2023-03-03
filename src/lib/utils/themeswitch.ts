import { themeStore } from '$lib/store/store';

const LIGHT = 'light';
const DARK = 'dark';

export const handleThemeSwitch = () => {
	const theme = localStorage.getItem('theme') || 'light';
	const root = window.document.documentElement;
	const isDark = theme === DARK;
	root.classList.remove(theme);
	root.classList.add(isDark ? LIGHT : DARK);
	localStorage.setItem('theme', isDark ? LIGHT : DARK);
	themeStore.set(isDark ? LIGHT : DARK);
};
