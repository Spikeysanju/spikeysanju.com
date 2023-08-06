import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 22;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/22.cfc930bc.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/index.176ec7d1.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/BlogCard.5f9656b2.js","_app/immutable/chunks/utils.39804466.js"];
export const stylesheets = [];
export const fonts = [];
