import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-a36c4a06.js';
export { universal };
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-a36c4a06.js","_app/immutable/chunks/index-695f9ad5.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/singletons-f0b56158.js","_app/immutable/chunks/stores-0d063f77.js","_app/immutable/modules/pages/_layout.ts-65cc33a8.js","_app/immutable/chunks/_layout-1962c95f.js"];
export const stylesheets = ["_app/immutable/assets/_layout-27af5e22.css"];
export const fonts = [];
