import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-ec667d07.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-ec667d07.js","_app/immutable/chunks/index-42721989.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/singletons-e3d4c4d1.js"];
export const stylesheets = ["_app/immutable/assets/_layout-e6ea2427.css"];
export const fonts = [];
