import{S as V,i as K,s as O,k as p,a as b,q as H,a3 as R,l as g,h,c as P,m as k,r as N,n as m,D as d,b as y,f as S,d as W,t as D,T as F,x as G,y as J,z as Q,A as X,g as Y}from"../../../chunks/index-695f9ad5.js";import{P as Z}from"../../../chunks/public-bfc2b6ad.js";import{B as ee}from"../../../chunks/BlogCard-e47db54a.js";function q(u,t,l){const s=u.slice();return s[1]=t[l],s}function z(u){let t,l,s,n;return l=new ee({props:{title:u[1].meta.title,author:u[1].meta.author,image:u[1].meta.image}}),{c(){t=p("a"),G(l.$$.fragment),this.h()},l(e){t=g(e,"A",{href:!0});var c=k(t);J(l.$$.fragment,c),c.forEach(h),this.h()},h(){m(t,"href",s=`/projects/${u[1].path}`)},m(e,c){y(e,t,c),Q(l,t,null),n=!0},p(e,c){const v={};c&1&&(v.title=e[1].meta.title),c&1&&(v.author=e[1].meta.author),c&1&&(v.image=e[1].meta.image),l.$set(v),(!n||c&1&&s!==(s=`/projects/${e[1].path}`))&&m(t,"href",s)},i(e){n||(S(l.$$.fragment,e),n=!0)},o(e){D(l.$$.fragment,e),n=!1},d(e){e&&h(t),X(l)}}}function M(u){let t,l,s;return{c(){t=p("div"),l=p("h2"),s=H("No projects found."),this.h()},l(n){t=g(n,"DIV",{class:!0});var e=k(t);l=g(e,"H2",{class:!0});var c=k(l);s=N(c,"No projects found."),c.forEach(h),e.forEach(h),this.h()},h(){m(l,"class","text-2xl"),m(t,"class","flex h-full w-full flex-col items-center justify-center")},m(n,e){y(n,t,e),d(t,l),d(l,s)},d(n){n&&h(t)}}}function te(u){let t,l,s,n,e,c,v,B,E,T,A,_,x,$,j=u[0].projects,r=[];for(let a=0;a<j.length;a+=1)r[a]=z(q(u,j,a));const U=a=>D(r[a],1,1,()=>{r[a]=null});let f=u[0].projects.length===0&&M();return{c(){t=p("meta"),l=p("link"),s=p("meta"),n=b(),e=p("section"),c=p("h1"),v=H("Projects."),B=b(),E=p("p"),T=H("Here are some of the projects I've worked on."),A=b(),_=p("div");for(let a=0;a<r.length;a+=1)r[a].c();x=b(),f&&f.c(),this.h()},l(a){const i=R("svelte-zw35me",document.head);t=g(i,"META",{name:!0,content:!0}),l=g(i,"LINK",{rel:!0,href:!0}),s=g(i,"META",{name:!0,content:!0}),i.forEach(h),n=P(a),e=g(a,"SECTION",{class:!0});var o=k(e);c=g(o,"H1",{class:!0});var w=k(c);v=N(w,"Projects."),w.forEach(h),B=P(o),E=g(o,"P",{class:!0});var L=k(E);T=N(L,"Here are some of the projects I've worked on."),L.forEach(h),A=P(o),_=g(o,"DIV",{class:!0});var I=k(_);for(let C=0;C<r.length;C+=1)r[C].l(I);x=P(I),f&&f.l(I),I.forEach(h),o.forEach(h),this.h()},h(){document.title="Projects – Spikey Sanju",m(t,"name","description"),m(t,"content","Projects I've worked on."),m(l,"rel","canonical"),m(l,"href",Z+"/projects"),m(s,"name","robots"),m(s,"content","index, follow"),m(c,"class","flex w-full text-start tracking-tight"),m(E,"class","flex w-full text-gray-500"),m(_,"class","mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.72),1fr))] gap-6"),m(e,"class","flex w-full flex-col items-center justify-center")},m(a,i){d(document.head,t),d(document.head,l),d(document.head,s),y(a,n,i),y(a,e,i),d(e,c),d(c,v),d(e,B),d(e,E),d(E,T),d(e,A),d(e,_);for(let o=0;o<r.length;o+=1)r[o].m(_,null);d(_,x),f&&f.m(_,null),$=!0},p(a,[i]){if(i&1){j=a[0].projects;let o;for(o=0;o<j.length;o+=1){const w=q(a,j,o);r[o]?(r[o].p(w,i),S(r[o],1)):(r[o]=z(w),r[o].c(),S(r[o],1),r[o].m(_,x))}for(Y(),o=j.length;o<r.length;o+=1)U(o);W()}a[0].projects.length===0?f||(f=M(),f.c(),f.m(_,null)):f&&(f.d(1),f=null)},i(a){if(!$){for(let i=0;i<j.length;i+=1)S(r[i]);$=!0}},o(a){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)D(r[i]);$=!1},d(a){h(t),h(l),h(s),a&&h(n),a&&h(e),F(r,a),f&&f.d()}}}function ae(u,t,l){let{data:s}=t;return u.$$set=n=>{"data"in n&&l(0,s=n.data)},[s]}class se extends V{constructor(t){super(),K(this,t,ae,te,O,{data:0})}}export{se as default};