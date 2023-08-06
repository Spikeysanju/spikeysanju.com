import * as universal from '../entries/pages/irl/new/_page.ts.js';
import * as server from '../entries/pages/irl/new/_page.server.ts.js';

export const index = 29;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/irl/new/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/irl/new/+page.ts";
export { server };
export const server_id = "src/routes/irl/new/+page.server.ts";
export const imports = ["_app/immutable/nodes/29.563d501c.js","_app/immutable/chunks/forms.66c8e974.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.5591f521.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/navigation.f46915c2.js","_app/immutable/chunks/index.176ec7d1.js"];
export const stylesheets = [];
export const fonts = [];
