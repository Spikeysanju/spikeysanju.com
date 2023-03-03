import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/entry/_layout.svelte.384a7fba.js';
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/entry/_layout.svelte.384a7fba.js","_app/immutable/chunks/index.8632a010.js","_app/immutable/chunks/singletons.558254a3.js","_app/immutable/chunks/Icon.0b0ec72e.js","_app/immutable/chunks/stores.0b47cb50.js"];
export const stylesheets = ["_app/immutable/assets/_layout.5b3cc3af.css"];
export const fonts = [];
