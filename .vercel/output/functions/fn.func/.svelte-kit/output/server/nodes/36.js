import * as universal from '../entries/pages/tools/_slug_/_page.ts.js';
import * as server from '../entries/pages/tools/_slug_/_page.server.ts.js';

export const index = 36;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tools/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tools/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/tools/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/36.0fbeb485.js","_app/immutable/chunks/forms.66c8e974.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.5591f521.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/navigation.f46915c2.js","_app/immutable/chunks/index.176ec7d1.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/AmaCommentCard.de0f681d.js","_app/immutable/chunks/index.357ffd1e.js","_app/immutable/chunks/store.560762cd.js","_app/immutable/chunks/stores.5421ed31.js"];
export const stylesheets = [];
export const fonts = [];
