import * as server from '../entries/pages/about/_page.server.ts.js';

export const index = 18;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about/+page.server.ts";
export const imports = ["_app/immutable/nodes/18.9545e3ab.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/index.176ec7d1.js","_app/immutable/chunks/public.bfc2b6ad.js","_app/immutable/chunks/Embedd.92056afa.js","_app/immutable/chunks/tweet.73f6d04d.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/tweet.f3b701f6.css"];
export const fonts = [];
