import{S as T,i as B,s as X,k as p,q as k,a as q,l as v,m as y,r as w,c as F,h as g,n as m,b as U,H as u,u as z,C as j,f as D,d as L,t as H,X as M,x as N,y as O,z as R,A as G,g as J}from"../../chunks/index-42721989.js";function K(r){let e,n,t,i,c;return{c(){e=p("a"),n=k(r[0]),t=q(),i=p("p"),c=k("→"),this.h()},l(o){e=v(o,"A",{class:!0,href:!0});var h=y(e);n=w(h,r[0]),t=F(h),i=v(h,"P",{class:!0});var b=y(i);c=w(b,"→"),b.forEach(g),h.forEach(g),this.h()},h(){m(i,"class","hover:translate-x-3"),m(e,"class","delay-50 flex w-full items-center justify-between text-start text-2xl font-semibold tracking-tight text-gray-900 transition-all hover:underline"),m(e,"href",r[1])},m(o,h){U(o,e,h),u(e,n),u(e,t),u(e,i),u(i,c)},p(o,[h]){h&1&&z(n,o[0]),h&2&&m(e,"href",o[1])},i:j,o:j,d(o){o&&g(e)}}}function Q(r,e,n){let{name:t=""}=e,{href:i=""}=e,{icon:c=""}=e;return r.$$set=o=>{"name"in o&&n(0,t=o.name),"href"in o&&n(1,i=o.href),"icon"in o&&n(2,c=o.icon)},[t,i,c]}class W extends T{constructor(e){super(),B(this,e,Q,K,X,{name:0,href:1,icon:2})}}function C(r,e,n){const t=r.slice();return t[2]=e[n],t}function P(r){let e,n;return e=new W({props:{name:r[2].name,href:r[2].href}}),{c(){N(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,i){R(e,t,i),n=!0},p:j,i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Y(r){let e,n,t,i,c,o,h,b,d,S,_=r[0],s=[];for(let l=0;l<_.length;l+=1)s[l]=P(C(r,_,l));const V=l=>H(s[l],1,1,()=>{s[l]=null});return{c(){e=p("section"),n=p("div"),t=p("h1"),i=k("Hi i'm Spikey Sanju, Designer & Engineer, Founder of "),c=p("a"),o=k(`THISUX Design Studio
			`),h=k(", where ADHD meets Innovation!"),b=q(),d=p("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=v(l,"SECTION",{class:!0});var f=y(e);n=v(f,"DIV",{class:!0});var a=y(n);t=v(a,"H1",{class:!0});var x=y(t);i=w(x,"Hi i'm Spikey Sanju, Designer & Engineer, Founder of "),c=v(x,"A",{href:!0,class:!0});var I=y(c);o=w(I,`THISUX Design Studio
			`),I.forEach(g),h=w(x,", where ADHD meets Innovation!"),x.forEach(g),b=F(a),d=v(a,"DIV",{class:!0});var A=y(d);for(let E=0;E<s.length;E+=1)s[E].l(A);A.forEach(g),a.forEach(g),f.forEach(g),this.h()},h(){m(c,"href","https://www.thisux.com"),m(c,"class","hover:underline"),m(t,"class","text-3xl leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight"),m(d,"class","flex w-full flex-col items-center justify-between space-y-4"),m(n,"class","flex w-full max-w-6xl flex-col items-center justify-center space-y-8"),m(e,"class","flex h-screen flex-col items-center justify-center space-y-8")},m(l,f){U(l,e,f),u(e,n),u(n,t),u(t,i),u(t,c),u(c,o),u(t,h),u(n,b),u(n,d);for(let a=0;a<s.length;a+=1)s[a].m(d,null);S=!0},p(l,[f]){if(f&1){_=l[0];let a;for(a=0;a<_.length;a+=1){const x=C(l,_,a);s[a]?(s[a].p(x,f),D(s[a],1)):(s[a]=P(x),s[a].c(),D(s[a],1),s[a].m(d,null))}for(J(),a=_.length;a<s.length;a+=1)V(a);L()}},i(l){if(!S){for(let f=0;f<_.length;f+=1)D(s[f]);S=!0}},o(l){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)H(s[f]);S=!1},d(l){l&&g(e),M(s,l)}}}function Z(r,e,n){let{data:t}=e;const i=[{name:"About",href:"/about",icon:"about"},{name:"Blogs",href:"/blog",icon:"blog"},{name:"Projects",href:"/projects",icon:"projects"},{name:"Books",href:"/books",icon:"books"},{name:"Photos",href:"/photos",icon:"photos"},{name:"Tools",href:"/tools",icon:"tools"},{name:"Ama",href:"/ama",icon:"ama"},{name:"IRL",href:"/irl",icon:"irl"}];return r.$$set=c=>{"data"in c&&n(1,t=c.data)},[i,t]}class ee extends T{constructor(e){super(),B(this,e,Z,Y,X,{data:1})}}export{ee as default};
