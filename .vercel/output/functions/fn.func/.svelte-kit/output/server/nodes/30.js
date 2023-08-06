import * as server from '../entries/pages/links/_page.server.ts.js';

export const index = 30;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/links/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/links/+page.server.ts";
export const imports = ["_app/immutable/nodes/30.69ed3c05.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/index.176ec7d1.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/MenuCell.60fb954d.js","_app/immutable/chunks/Icon.aa31ef65.js"];
export const stylesheets = [];
export const fonts = [];
