import * as server from '../entries/pages/_page.server.ts.js';

export const index = 17;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/17.86979079.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/index.176ec7d1.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/public.bfc2b6ad.js","_app/immutable/chunks/MenuCell.60fb954d.js","_app/immutable/chunks/Icon.aa31ef65.js"];
export const stylesheets = [];
export const fonts = [];
