import { writable } from 'svelte/store';

type NavigationState = 'loading' | 'loaded' | null;

export const navigationState = writable<NavigationState>(null);

// Uploaded file url
export const uploadedFileUrl = writable<string | null>(null);
export const uploadedFileType = writable<string | null>(null);

// Theme
type Theme = 'light' | 'dark';
export const themeStore = writable<Theme>('light');

// Show/hide login modal
export const showLoginModal = writable<boolean>(false);
