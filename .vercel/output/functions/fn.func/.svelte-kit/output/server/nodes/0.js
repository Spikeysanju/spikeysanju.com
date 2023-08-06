import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.d4cfd2a7.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/index.176ec7d1.js","_app/immutable/chunks/stores.5421ed31.js","_app/immutable/chunks/singletons.5591f521.js","_app/immutable/chunks/store.560762cd.js","_app/immutable/chunks/Icon.aa31ef65.js"];
export const stylesheets = ["_app/immutable/assets/0.05952372.css"];
export const fonts = ["_app/immutable/assets/Satoshi-Bold.c289c6a4.woff2","_app/immutable/assets/Satoshi-Bold.1460df32.woff","_app/immutable/assets/Satoshi-Medium.696fe5dc.woff2","_app/immutable/assets/Satoshi-Medium.9f65fcb5.woff","_app/immutable/assets/Satoshi-Regular.ceac3ba2.woff2","_app/immutable/assets/Satoshi-Regular.d98bed41.woff"];
