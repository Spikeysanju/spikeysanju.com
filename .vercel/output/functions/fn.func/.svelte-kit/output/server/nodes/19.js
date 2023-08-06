import * as server from '../entries/pages/ama/_page.server.ts.js';

export const index = 19;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ama/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/ama/+page.server.ts";
export const imports = ["_app/immutable/nodes/19.a710b502.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/index.176ec7d1.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/navigation.f46915c2.js","_app/immutable/chunks/singletons.5591f521.js","_app/immutable/chunks/stores.5421ed31.js","_app/immutable/chunks/store.560762cd.js","_app/immutable/chunks/index.357ffd1e.js"];
export const stylesheets = [];
export const fonts = [];
