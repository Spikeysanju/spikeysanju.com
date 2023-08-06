import{s as Z,f as v,a as E,l as V,J as ee,g as k,d as m,c as C,h as I,r as W,m as O,j as p,u as d,i as y,n as q,O as X}from"../chunks/scheduler.bf64c14b.js";import{S as te,i as le,a as H,c as ae,t as z,b as se,d as ne,m as oe,e as re,g as ie}from"../chunks/index.176ec7d1.js";import{e as L}from"../chunks/each.e59479a4.js";import{B as fe}from"../chunks/BlogCard.5f9656b2.js";import{c as F}from"../chunks/utils.39804466.js";function J(i,t,s){const e=i.slice();return e[1]=t[s],e}function G(i,t,s){const e=i.slice();return e[1]=t[s],e}function K(i){let t,s=L(i[0].categories),e=[];for(let l=0;l<s.length;l+=1)e[l]=Q(G(i,s,l));return{c(){t=v("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=k(l,"DIV",{class:!0});var o=I(t);for(let a=0;a<e.length;a+=1)e[a].l(o);o.forEach(m),this.h()},h(){p(t,"class","mb-3 mt-3 flex w-full items-center space-x-3")},m(l,o){y(l,t,o);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(t,null)},p(l,o){if(o&1){s=L(l[0].categories);let a;for(a=0;a<s.length;a+=1){const f=G(l,s,a);e[a]?e[a].p(f,o):(e[a]=Q(f),e[a].c(),e[a].m(t,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=s.length}},d(l){l&&m(t),X(e,l)}}}function Q(i){let t,s,e=F(i[1])+"",l,o,a;return{c(){t=v("a"),s=v("span"),l=V(e),o=E(),this.h()},l(f){t=k(f,"A",{href:!0});var _=I(t);s=k(_,"SPAN",{class:!0});var w=I(s);l=O(w,e),w.forEach(m),o=C(_),_.forEach(m),this.h()},h(){p(s,"class","inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200 dark:bg-purpleontop dark:text-white"),p(t,"href",a=`/blog/categories/${i[1]}`)},m(f,_){y(f,t,_),d(t,s),d(s,l),d(t,o)},p(f,_){_&1&&e!==(e=F(f[1])+"")&&q(l,e),_&1&&a!==(a=`/blog/categories/${f[1]}`)&&p(t,"href",a)},d(f){f&&m(t)}}}function R(i){let t,s,e,l;return s=new fe({props:{title:i[1].meta.title,author:i[1].meta.author,image:i[1].meta.image}}),{c(){t=v("a"),se(s.$$.fragment),this.h()},l(o){t=k(o,"A",{href:!0});var a=I(t);ne(s.$$.fragment,a),a.forEach(m),this.h()},h(){p(t,"href",e=`/blog/${i[1].path}`)},m(o,a){y(o,t,a),oe(s,t,null),l=!0},p(o,a){const f={};a&1&&(f.title=o[1].meta.title),a&1&&(f.author=o[1].meta.author),a&1&&(f.image=o[1].meta.image),s.$set(f),(!l||a&1&&e!==(e=`/blog/${o[1].path}`))&&p(t,"href",e)},i(o){l||(H(s.$$.fragment,o),l=!0)},o(o){z(s.$$.fragment,o),l=!1},d(o){o&&m(t),re(s)}}}function U(i){let t,s='<h2 class="text-2xl">No blogs found.</h2>';return{c(){t=v("div"),t.innerHTML=s,this.h()},l(e){t=k(e,"DIV",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-1kgatdo"&&(t.innerHTML=s),this.h()},h(){p(t,"class","flex h-full w-full flex-col items-center justify-center")},m(e,l){y(e,t,l)},d(e){e&&m(t)}}}function ce(i){let t,s,e,l,o="Blog.",a,f,_=i[0].blogs.length+"",w,M,B=i[0].blogs.length===1?"post":"posts",j,N,A,b,T,S,u=i[0].categories&&K(i),$=L(i[0].blogs),c=[];for(let n=0;n<$.length;n+=1)c[n]=R(J(i,$,n));const Y=n=>z(c[n],1,1,()=>{c[n]=null});let g=i[0].blogs.length===0&&U();return{c(){t=v("meta"),s=E(),e=v("section"),l=v("h1"),l.textContent=o,a=E(),f=v("p"),w=V(_),M=E(),j=V(B),N=E(),u&&u.c(),A=E(),b=v("div");for(let n=0;n<c.length;n+=1)c[n].c();T=E(),g&&g.c(),this.h()},l(n){const h=ee("svelte-94pe3n",document.head);t=k(h,"META",{name:!0,content:!0}),h.forEach(m),s=C(n),e=k(n,"SECTION",{class:!0});var r=I(e);l=k(r,"H1",{class:!0,"data-svelte-h":!0}),W(l)!=="svelte-wn1uig"&&(l.textContent=o),a=C(r),f=k(r,"P",{class:!0});var x=I(f);w=O(x,_),M=C(x),j=O(x,B),x.forEach(m),N=C(r),u&&u.l(r),A=C(r),b=k(r,"DIV",{class:!0});var D=I(b);for(let P=0;P<c.length;P+=1)c[P].l(D);T=C(D),g&&g.l(D),D.forEach(m),r.forEach(m),this.h()},h(){document.title="Blogs | Spikey Sanju",p(t,"name","description"),p(t,"content","I write about web development, programming, and other stuff. I also write about my personal life."),p(l,"class","w-full text-start tracking-tight"),p(f,"class","w-full text-start text-gray-500 dark:text-gray-400"),p(b,"class","mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.72),1fr))] gap-6"),p(e,"class","flex min-h-screen w-full flex-col items-center justify-start")},m(n,h){d(document.head,t),y(n,s,h),y(n,e,h),d(e,l),d(e,a),d(e,f),d(f,w),d(f,M),d(f,j),d(e,N),u&&u.m(e,null),d(e,A),d(e,b);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(b,null);d(b,T),g&&g.m(b,null),S=!0},p(n,[h]){if((!S||h&1)&&_!==(_=n[0].blogs.length+"")&&q(w,_),(!S||h&1)&&B!==(B=n[0].blogs.length===1?"post":"posts")&&q(j,B),n[0].categories?u?u.p(n,h):(u=K(n),u.c(),u.m(e,A)):u&&(u.d(1),u=null),h&1){$=L(n[0].blogs);let r;for(r=0;r<$.length;r+=1){const x=J(n,$,r);c[r]?(c[r].p(x,h),H(c[r],1)):(c[r]=R(x),c[r].c(),H(c[r],1),c[r].m(b,T))}for(ie(),r=$.length;r<c.length;r+=1)Y(r);ae()}n[0].blogs.length===0?g||(g=U(),g.c(),g.m(b,null)):g&&(g.d(1),g=null)},i(n){if(!S){for(let h=0;h<$.length;h+=1)H(c[h]);S=!0}},o(n){c=c.filter(Boolean);for(let h=0;h<c.length;h+=1)z(c[h]);S=!1},d(n){n&&(m(s),m(e)),m(t),u&&u.d(),X(c,n),g&&g.d()}}}function he(i,t,s){let{data:e}=t;return i.$$set=l=>{"data"in l&&s(0,e=l.data)},[e]}class pe extends te{constructor(t){super(),le(this,t,he,ce,Z,{data:0})}}export{pe as component};
