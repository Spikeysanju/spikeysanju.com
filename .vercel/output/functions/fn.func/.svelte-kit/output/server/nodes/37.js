import * as universal from '../entries/pages/tools/new/_page.ts.js';
import * as server from '../entries/pages/tools/new/_page.server.ts.js';

export const index = 37;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tools/new/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tools/new/+page.ts";
export { server };
export const server_id = "src/routes/tools/new/+page.server.ts";
export const imports = ["_app/immutable/nodes/37.41c220de.js","_app/immutable/chunks/forms.66c8e974.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.5591f521.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/navigation.f46915c2.js","_app/immutable/chunks/index.176ec7d1.js"];
export const stylesheets = [];
export const fonts = [];
