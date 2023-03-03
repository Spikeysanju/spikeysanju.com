import { writable } from 'svelte/store';

// Uploaded file url
export const uploadedFileUrl = writable<string | null>(null);
export const uploadedFileType = writable<string | null>(null);

// Theme
type Theme = 'light' | 'dark';
export const themeStore = writable<Theme>('light');
