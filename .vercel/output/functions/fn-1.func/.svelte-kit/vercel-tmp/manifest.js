export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/satoshi/woff/Satoshi-Bold.woff","fonts/satoshi/woff/Satoshi-Medium.woff","fonts/satoshi/woff/Satoshi-Regular.woff","fonts/satoshi/woff2/Satoshi-Bold.woff2","fonts/satoshi/woff2/Satoshi-Medium.woff2","fonts/satoshi/woff2/Satoshi-Regular.woff2","robots.txt"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-337c87a8.js","imports":["_app/immutable/start-337c87a8.js","_app/immutable/chunks/index-695f9ad5.js","_app/immutable/chunks/singletons-f0b56158.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			{
				id: "/api/blogs",
				pattern: /^\/api\/blogs\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/blogs/_server.ts.js')
			},
			{
				id: "/api/books",
				pattern: /^\/api\/books\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/books/_server.ts.js')
			},
			{
				id: "/api/og",
				pattern: /^\/api\/og\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/og/_server.ts.js')
			},
			{
				id: "/api/projects",
				pattern: /^\/api\/projects\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/projects/_server.ts.js')
			},
			{
				id: "/api/test",
				pattern: /^\/api\/test\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/test/_server.ts.js')
			},
			{
				id: "/api/upload",
				pattern: /^\/api\/upload\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/upload/_server.ts.js')
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/sitemap.xml/_server.ts.js')
			},
			{
				id: "/sitemap.xml/amas",
				pattern: /^\/sitemap\.xml\/amas\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/sitemap.xml/amas/_server.ts.js')
			},
			{
				id: "/sitemap.xml/blogs",
				pattern: /^\/sitemap\.xml\/blogs\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/sitemap.xml/blogs/_server.ts.js')
			},
			{
				id: "/sitemap.xml/books",
				pattern: /^\/sitemap\.xml\/books\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/sitemap.xml/books/_server.ts.js')
			},
			{
				id: "/sitemap.xml/projects",
				pattern: /^\/sitemap\.xml\/projects\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/sitemap.xml/projects/_server.ts.js')
			},
			{
				id: "/sitemap.xml/tools",
				pattern: /^\/sitemap\.xml\/tools\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/sitemap.xml/tools/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
