export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","mstile-150x150.png","robots.txt","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".txt":"text/plain",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.7ceea832.js","app":"_app/immutable/entry/app.e398e3fd.js","imports":["_app/immutable/entry/start.7ceea832.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/singletons.5591f521.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.e398e3fd.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.bf64c14b.js","_app/immutable/chunks/index.176ec7d1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js')),
			__memo(() => import('../output/server/nodes/18.js')),
			__memo(() => import('../output/server/nodes/19.js')),
			__memo(() => import('../output/server/nodes/20.js')),
			__memo(() => import('../output/server/nodes/21.js')),
			__memo(() => import('../output/server/nodes/22.js')),
			__memo(() => import('../output/server/nodes/23.js')),
			__memo(() => import('../output/server/nodes/24.js')),
			__memo(() => import('../output/server/nodes/25.js')),
			__memo(() => import('../output/server/nodes/26.js')),
			__memo(() => import('../output/server/nodes/27.js')),
			__memo(() => import('../output/server/nodes/28.js')),
			__memo(() => import('../output/server/nodes/29.js')),
			__memo(() => import('../output/server/nodes/30.js')),
			__memo(() => import('../output/server/nodes/31.js')),
			__memo(() => import('../output/server/nodes/32.js')),
			__memo(() => import('../output/server/nodes/33.js')),
			__memo(() => import('../output/server/nodes/34.js')),
			__memo(() => import('../output/server/nodes/35.js')),
			__memo(() => import('../output/server/nodes/36.js')),
			__memo(() => import('../output/server/nodes/37.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,2,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/ama",
				pattern: /^\/ama\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/ama/new",
				pattern: /^\/ama\/new\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,3,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/ama/[id]",
				pattern: /^\/ama\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/api/blogs",
				pattern: /^\/api\/blogs\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/blogs/_server.ts.js'))
			},
			{
				id: "/api/books",
				pattern: /^\/api\/books\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/books/_server.ts.js'))
			},
			{
				id: "/api/mail/new-comment",
				pattern: /^\/api\/mail\/new-comment\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/mail/new-comment/_server.ts.js'))
			},
			{
				id: "/api/og",
				pattern: /^\/api\/og\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/og/_server.ts.js'))
			},
			{
				id: "/api/projects",
				pattern: /^\/api\/projects\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/projects/_server.ts.js'))
			},
			{
				id: "/api/test",
				pattern: /^\/api\/test\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/test/_server.ts.js'))
			},
			{
				id: "/api/upload",
				pattern: /^\/api\/upload\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/upload/_server.ts.js'))
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,4,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/blog/categories/[category]",
				pattern: /^\/blog\/categories\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,,], errors: [1,4,6,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,,], errors: [1,4,5,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/books",
				pattern: /^\/books\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,7,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/books/categories/[category]",
				pattern: /^\/books\/categories\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,,], errors: [1,7,9,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/books/[slug]",
				pattern: /^\/books\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,,], errors: [1,7,8,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/irl",
				pattern: /^\/irl\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/irl/new",
				pattern: /^\/irl\/new\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,10,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/links",
				pattern: /^\/links\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,11,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/photos",
				pattern: /^\/photos\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,12,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/photos/new",
				pattern: /^\/photos\/new\/?$/,
				params: [],
				page: { layouts: [0,,,], errors: [1,12,13,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,14,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,,], errors: [1,14,15,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/_server.ts.js'))
			},
			{
				id: "/sitemap.xml/amas",
				pattern: /^\/sitemap\.xml\/amas\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/amas/_server.ts.js'))
			},
			{
				id: "/sitemap.xml/blogs",
				pattern: /^\/sitemap\.xml\/blogs\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/blogs/_server.ts.js'))
			},
			{
				id: "/sitemap.xml/books",
				pattern: /^\/sitemap\.xml\/books\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/books/_server.ts.js'))
			},
			{
				id: "/sitemap.xml/irl",
				pattern: /^\/sitemap\.xml\/irl\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/irl/_server.ts.js'))
			},
			{
				id: "/sitemap.xml/projects",
				pattern: /^\/sitemap\.xml\/projects\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/projects/_server.ts.js'))
			},
			{
				id: "/sitemap.xml/tools",
				pattern: /^\/sitemap\.xml\/tools\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/tools/_server.ts.js'))
			},
			{
				id: "/tools",
				pattern: /^\/tools\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/tools/new",
				pattern: /^\/tools\/new\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,16,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/tools/[slug]",
				pattern: /^\/tools\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 36 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
