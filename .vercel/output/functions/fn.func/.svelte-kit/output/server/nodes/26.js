import * as universal from '../entries/pages/books/_slug_/_page.ts.js';

export const index = 26;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/books/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/books/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/26.87f09410.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/dynamic-import-helper.be004503.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/index.176ec7d1.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/public.bfc2b6ad.js","_app/immutable/chunks/utils.39804466.js"];
export const stylesheets = [];
export const fonts = [];
