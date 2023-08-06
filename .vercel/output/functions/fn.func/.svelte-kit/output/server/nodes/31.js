import * as server from '../entries/pages/photos/_page.server.ts.js';

export const index = 31;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/photos/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/photos/+page.server.ts";
export const imports = ["_app/immutable/nodes/31.efe8a25f.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.176ec7d1.js","_app/immutable/chunks/stores.5421ed31.js","_app/immutable/chunks/singletons.5591f521.js","_app/immutable/chunks/public.bfc2b6ad.js"];
export const stylesheets = [];
export const fonts = [];
