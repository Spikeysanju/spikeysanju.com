import{S as K,i as O,s as W,k as p,a as A,q as T,a3 as $,l as v,h as i,c as j,m as k,r as q,n as o,D as n,b as C,C as M,T as z,R as F,a4 as B,u as J}from"../chunks/index.e2d88345.js";import{p as Q}from"../chunks/stores.8edac08e.js";import{P as X}from"../chunks/public.bfc2b6ad.js";function H(h,e,t){const s=h.slice();return s[2]=e[t],s}function R(h){let e,t,s;return{c(){e=p("div"),t=p("a"),s=T("Add photo"),this.h()},l(r){e=v(r,"DIV",{class:!0});var l=k(e);t=v(l,"A",{href:!0,class:!0});var f=k(t);s=q(f,"Add photo"),f.forEach(i),l.forEach(i),this.h()},h(){o(t,"href","photos/new"),o(t,"class","rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200"),o(e,"class","mt-3 flex w-full")},m(r,l){C(r,e,l),n(e,t),n(t,s)},d(r){r&&i(e)}}}function U(h){let e,t,s,r,l,f,x,I=h[2].title+"",E,w;return{c(){e=p("a"),t=p("div"),s=p("img"),f=A(),x=p("p"),E=T(I),this.h()},l(g){e=v(g,"A",{href:!0,class:!0});var b=k(e);t=v(b,"DIV",{class:!0});var d=k(t);s=v(d,"IMG",{src:!0,class:!0,alt:!0}),f=j(d),x=v(d,"P",{class:!0});var S=k(x);E=q(S,I),S.forEach(i),d.forEach(i),b.forEach(i),this.h()},h(){B(s.src,r=`${h[2].url}`)||o(s,"src",r),o(s,"class","aspect-auto object-cover"),o(s,"alt",l=h[2].title),o(x,"class","flex w-full text-sm"),o(t,"class","flex flex-col items-center justify-center space-y-3"),o(e,"href",w=`${h[2].url}`),o(e,"class","text-gray-500 hover:text-black hover:underline")},m(g,b){C(g,e,b),n(e,t),n(t,s),n(t,f),n(t,x),n(x,E)},p(g,b){b&1&&!B(s.src,r=`${g[2].url}`)&&o(s,"src",r),b&1&&l!==(l=g[2].title)&&o(s,"alt",l),b&1&&I!==(I=g[2].title+"")&&J(E,I),b&1&&w!==(w=`${g[2].url}`)&&o(e,"href",w)},d(g){g&&i(e)}}}function G(h){let e,t,s;return{c(){e=p("div"),t=p("h2"),s=T("No photos found."),this.h()},l(r){e=v(r,"DIV",{class:!0});var l=k(e);t=v(l,"H2",{class:!0});var f=k(t);s=q(f,"No photos found."),f.forEach(i),l.forEach(i),this.h()},h(){o(t,"class","text-2xl"),o(e,"class","flex h-full w-full flex-col items-center justify-center")},m(r,l){C(r,e,l),n(e,t),n(t,s)},d(r){r&&i(e)}}}function Y(h){let e,t,s,r,l,f,x,I,E,w,g,b,d,S,m=h[1].data.session&&h[1].data.session.user&&R(),P=h[0].photos,u=[];for(let c=0;c<P.length;c+=1)u[c]=U(H(h,P,c));let _=h[0].photos.length===0&&G();return{c(){e=p("meta"),t=p("link"),s=p("meta"),r=A(),l=p("section"),f=p("h1"),x=T("Photos."),I=A(),E=p("p"),w=T("Some photos I've taken over the years."),g=A(),m&&m.c(),b=A(),d=p("div");for(let c=0;c<u.length;c+=1)u[c].c();S=A(),_&&_.c(),this.h()},l(c){const y=$("svelte-q4m9hi",document.head);e=v(y,"META",{name:!0,content:!0}),t=v(y,"LINK",{rel:!0,href:!0}),s=v(y,"META",{name:!0,content:!0}),y.forEach(i),r=j(c),l=v(c,"SECTION",{class:!0});var a=k(l);f=v(a,"H1",{class:!0});var D=k(f);x=q(D,"Photos."),D.forEach(i),I=j(a),E=v(a,"P",{class:!0});var L=k(E);w=q(L,"Some photos I've taken over the years."),L.forEach(i),g=j(a),m&&m.l(a),b=j(a),d=v(a,"DIV",{class:!0});var N=k(d);for(let V=0;V<u.length;V+=1)u[V].l(N);S=j(N),_&&_.l(N),N.forEach(i),a.forEach(i),this.h()},h(){document.title="Photos – Spikey Sanju",o(e,"name","description"),o(e,"content","Some photos I've taken over the years."),o(t,"rel","canonical"),o(t,"href",X+"/photos"),o(s,"name","robots"),o(s,"content","index, follow"),o(f,"class","flex w-full text-start tracking-tight"),o(E,"class","flex w-full text-gray-500"),o(d,"class","mt-6 mb-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.60),1fr))] gap-6"),o(l,"class","flex w-full flex-col items-center justify-center")},m(c,y){n(document.head,e),n(document.head,t),n(document.head,s),C(c,r,y),C(c,l,y),n(l,f),n(f,x),n(l,I),n(l,E),n(E,w),n(l,g),m&&m.m(l,null),n(l,b),n(l,d);for(let a=0;a<u.length;a+=1)u[a].m(d,null);n(d,S),_&&_.m(d,null)},p(c,[y]){if(c[1].data.session&&c[1].data.session.user?m||(m=R(),m.c(),m.m(l,b)):m&&(m.d(1),m=null),y&1){P=c[0].photos;let a;for(a=0;a<P.length;a+=1){const D=H(c,P,a);u[a]?u[a].p(D,y):(u[a]=U(D),u[a].c(),u[a].m(d,S))}for(;a<u.length;a+=1)u[a].d(1);u.length=P.length}c[0].photos.length===0?_||(_=G(),_.c(),_.m(d,null)):_&&(_.d(1),_=null)},i:M,o:M,d(c){i(e),i(t),i(s),c&&i(r),c&&i(l),m&&m.d(),z(u,c),_&&_.d()}}}function Z(h,e,t){let s;F(h,Q,l=>t(1,s=l));let{data:r}=e;return h.$$set=l=>{"data"in l&&t(0,r=l.data)},[r,s]}class se extends K{constructor(e){super(),O(this,e,Z,Y,W,{data:0})}}export{se as default};
