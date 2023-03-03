import{S as X,i as Y,s as Z,k as b,a as x,q as D,R as ee,l as v,h as u,c as B,m as E,r as N,n as p,D as g,b as I,u as O,g as H,f as te,d as R,a0 as U,y as le,z as ae,A as se,B as oe,v as ne}from"../chunks/index.8632a010.js";import{B as re}from"../chunks/BlogCard.041d4193.js";function F(i,t,s){const e=i.slice();return e[1]=t[s],e}function G(i,t,s){const e=i.slice();return e[1]=t[s],e}function J(i){let t,s=i[0].categories,e=[];for(let l=0;l<s.length;l+=1)e[l]=K(G(i,s,l));return{c(){t=b("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=v(l,"DIV",{class:!0});var o=E(t);for(let a=0;a<e.length;a+=1)e[a].l(o);o.forEach(u),this.h()},h(){p(t,"class","mb-3 mt-3 flex w-full items-center space-x-3")},m(l,o){I(l,t,o);for(let a=0;a<e.length;a+=1)e[a].m(t,null)},p(l,o){if(o&1){s=l[0].categories;let a;for(a=0;a<s.length;a+=1){const f=G(l,s,a);e[a]?e[a].p(f,o):(e[a]=K(f),e[a].c(),e[a].m(t,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=s.length}},d(l){l&&u(t),U(e,l)}}}function K(i){let t,s,e=i[1]+"",l,o,a;return{c(){t=b("a"),s=b("span"),l=D(e),o=x(),this.h()},l(f){t=v(f,"A",{href:!0});var d=E(t);s=v(d,"SPAN",{class:!0});var $=E(s);l=N($,e),$.forEach(u),o=B(d),d.forEach(u),this.h()},h(){p(s,"class","inline-flex rounded-full bg-gray-100 px-2 text-xs font-medium leading-5 text-gray-800 hover:bg-gray-200 dark:bg-purpleontop dark:text-white"),p(t,"href",a=`/blog/categories/${i[1]}`)},m(f,d){I(f,t,d),g(t,s),g(s,l),g(t,o)},p(f,d){d&1&&e!==(e=f[1]+"")&&O(l,e),d&1&&a!==(a=`/blog/categories/${f[1]}`)&&p(t,"href",a)},d(f){f&&u(t)}}}function L(i){let t,s,e,l;return s=new re({props:{title:i[1].meta.title,author:i[1].meta.author,image:i[1].meta.image}}),{c(){t=b("a"),le(s.$$.fragment),this.h()},l(o){t=v(o,"A",{href:!0});var a=E(t);ae(s.$$.fragment,a),a.forEach(u),this.h()},h(){p(t,"href",e=`/blog/${i[1].path}`)},m(o,a){I(o,t,a),se(s,t,null),l=!0},p(o,a){const f={};a&1&&(f.title=o[1].meta.title),a&1&&(f.author=o[1].meta.author),a&1&&(f.image=o[1].meta.image),s.$set(f),(!l||a&1&&e!==(e=`/blog/${o[1].path}`))&&p(t,"href",e)},i(o){l||(H(s.$$.fragment,o),l=!0)},o(o){R(s.$$.fragment,o),l=!1},d(o){o&&u(t),oe(s)}}}function Q(i){let t,s,e;return{c(){t=b("div"),s=b("h2"),e=D("No blogs found."),this.h()},l(l){t=v(l,"DIV",{class:!0});var o=E(t);s=v(o,"H2",{class:!0});var a=E(s);e=N(a,"No blogs found."),a.forEach(u),o.forEach(u),this.h()},h(){p(s,"class","text-2xl"),p(t,"class","flex h-full w-full flex-col items-center justify-center")},m(l,o){I(l,t,o),g(t,s),g(s,e)},d(l){l&&u(t)}}}function ie(i){let t,s,e,l,o,a,f,d=i[0].blogs.length+"",$,T,S=i[0].blogs.length===1?"post":"posts",j,z,q,k,C,y,m=i[0].categories&&J(i),w=i[0].blogs,c=[];for(let n=0;n<w.length;n+=1)c[n]=L(F(i,w,n));const W=n=>R(c[n],1,1,()=>{c[n]=null});let _=i[0].blogs.length===0&&Q();return{c(){t=b("meta"),s=x(),e=b("section"),l=b("h1"),o=D("Blog."),a=x(),f=b("p"),$=D(d),T=x(),j=D(S),z=x(),m&&m.c(),q=x(),k=b("div");for(let n=0;n<c.length;n+=1)c[n].c();C=x(),_&&_.c(),this.h()},l(n){const h=ee("svelte-11qyvs",document.head);t=v(h,"META",{name:!0,content:!0}),h.forEach(u),s=B(n),e=v(n,"SECTION",{class:!0});var r=E(e);l=v(r,"H1",{class:!0});var A=E(l);o=N(A,"Blog."),A.forEach(u),a=B(r),f=v(r,"P",{class:!0});var P=E(f);$=N(P,d),T=B(P),j=N(P,S),P.forEach(u),z=B(r),m&&m.l(r),q=B(r),k=v(r,"DIV",{class:!0});var V=E(k);for(let M=0;M<c.length;M+=1)c[M].l(V);C=B(V),_&&_.l(V),V.forEach(u),r.forEach(u),this.h()},h(){document.title="Blogs – Spikey Sanju",p(t,"name","description"),p(t,"content","I write about web development, programming, and other stuff. I also write about my personal life."),p(l,"class","w-full text-start tracking-tight"),p(f,"class","w-full text-start text-gray-500 dark:text-gray-400"),p(k,"class","mt-6 grid w-full grid-cols-[repeat(auto-fill,minmax(theme(width.72),1fr))] gap-6"),p(e,"class","flex min-h-screen w-full flex-col items-center justify-start")},m(n,h){g(document.head,t),I(n,s,h),I(n,e,h),g(e,l),g(l,o),g(e,a),g(e,f),g(f,$),g(f,T),g(f,j),g(e,z),m&&m.m(e,null),g(e,q),g(e,k);for(let r=0;r<c.length;r+=1)c[r].m(k,null);g(k,C),_&&_.m(k,null),y=!0},p(n,[h]){if((!y||h&1)&&d!==(d=n[0].blogs.length+"")&&O($,d),(!y||h&1)&&S!==(S=n[0].blogs.length===1?"post":"posts")&&O(j,S),n[0].categories?m?m.p(n,h):(m=J(n),m.c(),m.m(e,q)):m&&(m.d(1),m=null),h&1){w=n[0].blogs;let r;for(r=0;r<w.length;r+=1){const A=F(n,w,r);c[r]?(c[r].p(A,h),H(c[r],1)):(c[r]=L(A),c[r].c(),H(c[r],1),c[r].m(k,C))}for(ne(),r=w.length;r<c.length;r+=1)W(r);te()}n[0].blogs.length===0?_||(_=Q(),_.c(),_.m(k,null)):_&&(_.d(1),_=null)},i(n){if(!y){for(let h=0;h<w.length;h+=1)H(c[h]);y=!0}},o(n){c=c.filter(Boolean);for(let h=0;h<c.length;h+=1)R(c[h]);y=!1},d(n){u(t),n&&u(s),n&&u(e),m&&m.d(),U(c,n),_&&_.d()}}}function fe(i,t,s){let{data:e}=t;return i.$$set=l=>{"data"in l&&s(0,e=l.data)},[e]}class ue extends X{constructor(t){super(),Y(this,t,fe,ie,Z,{data:0})}}export{ue as default};
