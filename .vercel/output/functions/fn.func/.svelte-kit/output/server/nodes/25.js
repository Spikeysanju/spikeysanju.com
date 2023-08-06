import * as server from '../entries/pages/books/_page.server.ts.js';

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/books/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/books/+page.server.ts";
export const imports = ["_app/immutable/nodes/25.c1289d7e.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/index.176ec7d1.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/public.bfc2b6ad.js","_app/immutable/chunks/BookCard.ebe211b4.js","_app/immutable/chunks/utils.39804466.js"];
export const stylesheets = [];
export const fonts = [];
