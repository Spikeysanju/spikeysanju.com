export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/satoshi/woff/Satoshi-Bold.woff","fonts/satoshi/woff/Satoshi-Medium.woff","fonts/satoshi/woff/Satoshi-Regular.woff","fonts/satoshi/woff2/Satoshi-Bold.woff2","fonts/satoshi/woff2/Satoshi-Medium.woff2","fonts/satoshi/woff2/Satoshi-Regular.woff2"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		entry: {"file":"_app/immutable/start-c206b87b.js","imports":["_app/immutable/start-c206b87b.js","_app/immutable/chunks/index-42721989.js","_app/immutable/chunks/singletons-e3d4c4d1.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js'),
			() => import('../output/server/nodes/16.js'),
			() => import('../output/server/nodes/17.js'),
			() => import('../output/server/nodes/18.js'),
			() => import('../output/server/nodes/19.js'),
			() => import('../output/server/nodes/20.js'),
			() => import('../output/server/nodes/21.js'),
			() => import('../output/server/nodes/22.js'),
			() => import('../output/server/nodes/23.js'),
			() => import('../output/server/nodes/24.js'),
			() => import('../output/server/nodes/25.js'),
			() => import('../output/server/nodes/26.js'),
			() => import('../output/server/nodes/27.js'),
			() => import('../output/server/nodes/28.js'),
			() => import('../output/server/nodes/29.js'),
			() => import('../output/server/nodes/30.js'),
			() => import('../output/server/nodes/31.js'),
			() => import('../output/server/nodes/32.js'),
			() => import('../output/server/nodes/33.js'),
			() => import('../output/server/nodes/34.js'),
			() => import('../output/server/nodes/35.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,2], leaf: 17 },
				endpoint: null
			},
			{
				id: "/ama",
				pattern: /^\/ama\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/ama/new",
				pattern: /^\/ama\/new\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,3], leaf: 20 },
				endpoint: null
			},
			{
				id: "/ama/[id]",
				pattern: /^\/ama\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
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
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,4], leaf: 21 },
				endpoint: null
			},
			{
				id: "/blog/categories/[category]",
				pattern: /^\/blog\/categories\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,,], errors: [1,4,6], leaf: 23 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,,], errors: [1,4,5], leaf: 22 },
				endpoint: null
			},
			{
				id: "/books",
				pattern: /^\/books\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,7], leaf: 24 },
				endpoint: null
			},
			{
				id: "/books/categories/[category]",
				pattern: /^\/books\/categories\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,,], errors: [1,7,9], leaf: 26 },
				endpoint: null
			},
			{
				id: "/books/[slug]",
				pattern: /^\/books\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,,], errors: [1,7,8], leaf: 25 },
				endpoint: null
			},
			{
				id: "/irl",
				pattern: /^\/irl\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 27 },
				endpoint: null
			},
			{
				id: "/irl/new",
				pattern: /^\/irl\/new\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,10], leaf: 28 },
				endpoint: null
			},
			{
				id: "/photos",
				pattern: /^\/photos\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,11], leaf: 29 },
				endpoint: null
			},
			{
				id: "/photos/new",
				pattern: /^\/photos\/new\/?$/,
				params: [],
				page: { layouts: [0,,,], errors: [1,11,12], leaf: 30 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,13], leaf: 31 },
				endpoint: null
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,,], errors: [1,13,14], leaf: 32 },
				endpoint: null
			},
			{
				id: "/tools",
				pattern: /^\/tools\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 33 },
				endpoint: null
			},
			{
				id: "/tools/new",
				pattern: /^\/tools\/new\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,15], leaf: 35 },
				endpoint: null
			},
			{
				id: "/tools/[id]",
				pattern: /^\/tools\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 34 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
