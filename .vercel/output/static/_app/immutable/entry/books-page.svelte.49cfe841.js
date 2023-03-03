import{S as G,i as J,s as Q,k as p,a as x,q as C,R as X,l as k,h,c as $,m as I,r as D,n as d,D as m,b as B,g as P,f as Y,d as q,a0 as W,u as Z,y as ee,z as te,A as ae,B as le,v as oe}from"../chunks/index.8632a010.js";import{P as se}from"../chunks/public.bfc2b6ad.js";import{B as ne}from"../chunks/BookCard.42e09d24.js";function M(i,e,s){const t=i.slice();return t[1]=e[s],t}function R(i,e,s){const t=i.slice();return t[1]=e[s],t}function U(i){let e,s=i[0].categories,t=[];for(let o=0;o<s.length;o+=1)t[o]=z(R(i,s,o));return{c(){e=p("div");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=k(o,"DIV",{class:!0});var a=I(e);for(let l=0;l<t.length;l+=1)t[l].l(a);a.forEach(h),this.h()},h(){d(e,"class","mb-3 mt-3 flex w-full items-center space-x-3")},m(o,a){B(o,e,a);for(let l=0;l<t.length;l+=1)t[l].m(e,null)},p(o,a){if(a&1){s=o[0].categories;let l;for(l=0;l<s.length;l+=1){const f=R(o,s,l);t[l]?t[l].p(f,a):(t[l]=z(f),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=s.length}},d(o){o&&h(e),W(t,o)}}}function z(i){let e,s,t=i[1]+"",o,a,l;return{c(){e=p("a"),s=p("span"),o=C(t),a=x(),this.h()},l(f){e=k(f,"A",{href:!0});var v=I(e);s=k(v,"SPAN",{class:!0});var E=I(s);o=D(E,t),E.forEach(h),a=$(v),v.forEach(h),this.h()},h(){d(s,"class","inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200 dark:bg-purpleontop dark:text-white"),d(e,"href",l=`/books/categories/${i[1]}`)},m(f,v){B(f,e,v),m(e,s),m(s,o),m(e,a)},p(f,v){v&1&&t!==(t=f[1]+"")&&Z(o,t),v&1&&l!==(l=`/books/categories/${f[1]}`)&&d(e,"href",l)},d(f){f&&h(e)}}}function K(i){let e,s,t,o;return s=new ne({props:{title:i[1].meta.title,author:i[1].meta.author,image:i[1].meta.image}}),{c(){e=p("a"),ee(s.$$.fragment),this.h()},l(a){e=k(a,"A",{href:!0});var l=I(e);te(s.$$.fragment,l),l.forEach(h),this.h()},h(){d(e,"href",t=`/books/${i[1].path}`)},m(a,l){B(a,e,l),ae(s,e,null),o=!0},p(a,l){const f={};l&1&&(f.title=a[1].meta.title),l&1&&(f.author=a[1].meta.author),l&1&&(f.image=a[1].meta.image),s.$set(f),(!o||l&1&&t!==(t=`/books/${a[1].path}`))&&d(e,"href",t)},i(a){o||(P(s.$$.fragment,a),o=!0)},o(a){q(s.$$.fragment,a),o=!1},d(a){a&&h(e),le(s)}}}function O(i){let e,s,t;return{c(){e=p("div"),s=p("h2"),t=C("No books found."),this.h()},l(o){e=k(o,"DIV",{class:!0});var a=I(e);s=k(a,"H2",{class:!0});var l=I(s);t=D(l,"No books found."),l.forEach(h),a.forEach(h),this.h()},h(){d(s,"class","text-2xl"),d(e,"class","flex h-full w-full flex-col items-center justify-center")},m(o,a){B(o,e,a),m(e,s),m(s,t)},d(o){o&&h(e)}}}function re(i){let e,s,t,o,a,l,f,v,E,T,L,S,b,j,A,_=i[0].categories&&U(i),w=i[0].books,c=[];for(let n=0;n<w.length;n+=1)c[n]=K(M(i,w,n));const F=n=>q(c[n],1,1,()=>{c[n]=null});let g=i[0].books.length===0&&O();return{c(){e=p("meta"),s=p("link"),t=p("meta"),o=x(),a=p("section"),l=p("h1"),f=C("Books."),v=x(),E=p("p"),T=C(`Books I've read and enjoyed. I've tried to keep this list as up to date as possible, but I'm
		sure I've missed a few.`),L=x(),_&&_.c(),S=x(),b=p("div");for(let n=0;n<c.length;n+=1)c[n].c();j=x(),g&&g.c(),this.h()},l(n){const u=X("svelte-1vf2n5f",document.head);e=k(u,"META",{name:!0,content:!0}),s=k(u,"LINK",{rel:!0,href:!0}),t=k(u,"META",{name:!0,content:!0}),u.forEach(h),o=$(n),a=k(n,"SECTION",{class:!0});var r=I(a);l=k(r,"H1",{class:!0});var y=I(l);f=D(y,"Books."),y.forEach(h),v=$(r),E=k(r,"P",{class:!0});var H=I(E);T=D(H,`Books I've read and enjoyed. I've tried to keep this list as up to date as possible, but I'm
		sure I've missed a few.`),H.forEach(h),L=$(r),_&&_.l(r),S=$(r),b=k(r,"DIV",{class:!0});var N=I(b);for(let V=0;V<c.length;V+=1)c[V].l(N);j=$(N),g&&g.l(N),N.forEach(h),r.forEach(h),this.h()},h(){document.title="Books – Spikey Sanju",d(e,"name","description"),d(e,"content",`Books I've read and enjoyed. I've tried to keep this list as up to date as possible, but I'm
		sure I've missed a few.`),d(s,"rel","canonical"),d(s,"href",se+"/books"),d(t,"name","robots"),d(t,"content","index, follow"),d(l,"class","flex w-full text-start tracking-tight"),d(E,"class","flex w-full text-gray-500 dark:text-gray-400"),d(b,"class","mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.40),1fr))] gap-6"),d(a,"class","flex min-h-screen w-full flex-col items-center justify-start")},m(n,u){m(document.head,e),m(document.head,s),m(document.head,t),B(n,o,u),B(n,a,u),m(a,l),m(l,f),m(a,v),m(a,E),m(E,T),m(a,L),_&&_.m(a,null),m(a,S),m(a,b);for(let r=0;r<c.length;r+=1)c[r].m(b,null);m(b,j),g&&g.m(b,null),A=!0},p(n,[u]){if(n[0].categories?_?_.p(n,u):(_=U(n),_.c(),_.m(a,S)):_&&(_.d(1),_=null),u&1){w=n[0].books;let r;for(r=0;r<w.length;r+=1){const y=M(n,w,r);c[r]?(c[r].p(y,u),P(c[r],1)):(c[r]=K(y),c[r].c(),P(c[r],1),c[r].m(b,j))}for(oe(),r=w.length;r<c.length;r+=1)F(r);Y()}n[0].books.length===0?g||(g=O(),g.c(),g.m(b,null)):g&&(g.d(1),g=null)},i(n){if(!A){for(let u=0;u<w.length;u+=1)P(c[u]);A=!0}},o(n){c=c.filter(Boolean);for(let u=0;u<c.length;u+=1)q(c[u]);A=!1},d(n){h(e),h(s),h(t),n&&h(o),n&&h(a),_&&_.d(),W(c,n),g&&g.d()}}}function ie(i,e,s){let{data:t}=e;return i.$$set=o=>{"data"in o&&s(0,t=o.data)},[t]}class ue extends G{constructor(e){super(),J(this,e,ie,re,Q,{data:0})}}export{ue as default};
