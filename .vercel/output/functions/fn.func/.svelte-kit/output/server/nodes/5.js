

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.79a32b42.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/index.176ec7d1.js","_app/immutable/chunks/stores.5421ed31.js","_app/immutable/chunks/singletons.5591f521.js"];
export const stylesheets = [];
export const fonts = [];
