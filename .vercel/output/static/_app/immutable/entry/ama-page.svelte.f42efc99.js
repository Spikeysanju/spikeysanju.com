import{S as J,i as K,s as L,k as p,q as j,a as x,l as b,m as E,r as D,h,c as S,n as m,a4 as O,b as V,D as o,u as H,C as G,a3 as W,g as T,f as X,d as z,T as Y,R as Z,y as $,z as ee,A as te,B as ae,v as se}from"../chunks/index.e2d88345.js";import{p as le}from"../chunks/stores.8edac08e.js";function ne(f){let e,t,s,i,a,u,r,q,w,A,g,y,I,d;return{c(){e=p("div"),t=p("h1"),s=j(f[0]),i=x(),a=p("div"),u=p("div"),r=p("img"),w=x(),A=p("span"),g=j(f[1]),y=x(),I=p("p"),d=j(f[2]),this.h()},l(_){e=b(_,"DIV",{class:!0});var l=E(e);t=b(l,"H1",{class:!0});var N=E(t);s=D(N,f[0]),N.forEach(h),i=S(l),a=b(l,"DIV",{class:!0});var v=E(a);u=b(v,"DIV",{class:!0});var n=E(u);r=b(n,"IMG",{src:!0,alt:!0,class:!0}),w=S(n),A=b(n,"SPAN",{});var k=E(A);g=D(k,f[1]),k.forEach(h),n.forEach(h),y=S(v),I=b(v,"P",{class:!0});var c=E(I);d=D(c,f[2]),c.forEach(h),v.forEach(h),l.forEach(h),this.h()},h(){m(t,"class","w-full text-lg font-medium tracking-tight"),O(r.src,q=f[3])||m(r,"src",q),m(r,"alt",f[1]),m(r,"class","h-9 w-9 rounded-full"),m(u,"class","flex flex-row items-center justify-center space-x-3"),m(I,"class","text-sm text-stone-500"),m(a,"class","items-centerw flex w-full flex-row justify-between"),m(e,"class","flex w-full flex-col items-center justify-center space-y-3")},m(_,l){V(_,e,l),o(e,t),o(t,s),o(e,i),o(e,a),o(a,u),o(u,r),o(u,w),o(u,A),o(A,g),o(a,y),o(a,I),o(I,d)},p(_,[l]){l&1&&H(s,_[0]),l&8&&!O(r.src,q=_[3])&&m(r,"src",q),l&2&&m(r,"alt",_[1]),l&2&&H(g,_[1]),l&4&&H(d,_[2])},i:G,o:G,d(_){_&&h(e)}}}function re(f,e,t){let{question:s=""}=e,{author:i=""}=e,{timeago:a=""}=e,{authorImage:u=""}=e;return f.$$set=r=>{"question"in r&&t(0,s=r.question),"author"in r&&t(1,i=r.author),"timeago"in r&&t(2,a=r.timeago),"authorImage"in r&&t(3,u=r.authorImage)},[s,i,a,u]}class oe extends J{constructor(e){super(),K(this,e,re,ne,L,{question:0,author:1,timeago:2,authorImage:3})}}function Q(f,e,t){const s=f.slice();return s[2]=e[t],s}function R(f){let e,t,s;return{c(){e=p("div"),t=p("a"),s=j("Ask a question"),this.h()},l(i){e=b(i,"DIV",{class:!0});var a=E(e);t=b(a,"A",{href:!0,class:!0});var u=E(t);s=D(u,"Ask a question"),u.forEach(h),a.forEach(h),this.h()},h(){m(t,"href","ama/new"),m(t,"class","rounded-sm border border-gray-200 bg-gray-100 px-3 py-2 font-medium text-black shadow-sm hover:cursor-pointer hover:bg-gray-200"),m(e,"class","mt-3 flex w-full")},m(i,a){V(i,e,a),o(e,t),o(t,s)},d(i){i&&h(e)}}}function U(f){let e,t,s,i;return t=new oe({props:{question:f[2].question,author:"Sanju S",timeago:"5 min ago",authorImage:"https://github.com/spikeysanju.png?size=36"}}),{c(){e=p("a"),$(t.$$.fragment),this.h()},l(a){e=b(a,"A",{href:!0});var u=E(e);ee(t.$$.fragment,u),u.forEach(h),this.h()},h(){m(e,"href",s=`/ama/${f[2].id}`)},m(a,u){V(a,e,u),te(t,e,null),i=!0},p(a,u){const r={};u&1&&(r.question=a[2].question),t.$set(r),(!i||u&1&&s!==(s=`/ama/${a[2].id}`))&&m(e,"href",s)},i(a){i||(T(t.$$.fragment,a),i=!0)},o(a){z(t.$$.fragment,a),i=!1},d(a){a&&h(e),ae(t)}}}function F(f){let e,t,s,i,a,u,r,q,w,A;return{c(){e=p("div"),t=p("h2"),s=j("No posts found."),i=x(),a=p("p"),u=j("Be the first to ask a question."),r=x(),q=p("a"),w=p("button"),A=j("Ask a question"),this.h()},l(g){e=b(g,"DIV",{class:!0});var y=E(e);t=b(y,"H2",{class:!0});var I=E(t);s=D(I,"No posts found."),I.forEach(h),i=S(y),a=b(y,"P",{class:!0});var d=E(a);u=D(d,"Be the first to ask a question."),d.forEach(h),r=S(y),q=b(y,"A",{href:!0,class:!0});var _=E(q);w=b(_,"BUTTON",{class:!0});var l=E(w);A=D(l,"Ask a question"),l.forEach(h),_.forEach(h),y.forEach(h),this.h()},h(){m(t,"class","text-2xl"),m(a,"class","text-gray-500"),m(w,"class","btn btn-primary"),m(q,"href","/ama/new"),m(q,"class","mt-4"),m(e,"class","flex h-full w-full flex-col items-center justify-center")},m(g,y){V(g,e,y),o(e,t),o(t,s),o(e,i),o(e,a),o(a,u),o(e,r),o(e,q),o(q,w),o(w,A)},d(g){g&&h(e)}}}function ie(f){let e,t,s,i,a,u,r,q,w,A,g,y,I,d=f[1].data.session&&f[1].data.session.user&&R(),_=f[0].ama,l=[];for(let n=0;n<_.length;n+=1)l[n]=U(Q(f,_,n));const N=n=>z(l[n],1,1,()=>{l[n]=null});let v=f[0].ama.length===0&&F();return{c(){e=p("meta"),t=x(),s=p("section"),i=p("h1"),a=j("Ask me anything"),u=x(),r=p("p"),q=j("I'll try to answer as many questions as possible."),w=x(),d&&d.c(),A=x(),g=p("div");for(let n=0;n<l.length;n+=1)l[n].c();y=x(),v&&v.c(),this.h()},l(n){const k=W("svelte-ria5vw",document.head);e=b(k,"META",{name:!0,content:!0}),k.forEach(h),t=S(n),s=b(n,"SECTION",{});var c=E(s);i=b(c,"H1",{});var B=E(i);a=D(B,"Ask me anything"),B.forEach(h),u=S(c),r=b(c,"P",{class:!0});var M=E(r);q=D(M,"I'll try to answer as many questions as possible."),M.forEach(h),w=S(c),d&&d.l(c),A=S(c),g=b(c,"DIV",{class:!0});var P=E(g);for(let C=0;C<l.length;C+=1)l[C].l(P);y=S(P),v&&v.l(P),P.forEach(h),c.forEach(h),this.h()},h(){document.title="Ama – Spikey Sanju",m(e,"name","description"),m(e,"content","Ask me anything."),m(r,"class","w-full text-gray-500"),m(g,"class","mt-6 flex w-full flex-col gap-8")},m(n,k){o(document.head,e),V(n,t,k),V(n,s,k),o(s,i),o(i,a),o(s,u),o(s,r),o(r,q),o(s,w),d&&d.m(s,null),o(s,A),o(s,g);for(let c=0;c<l.length;c+=1)l[c].m(g,null);o(g,y),v&&v.m(g,null),I=!0},p(n,[k]){if(n[1].data.session&&n[1].data.session.user?d||(d=R(),d.c(),d.m(s,A)):d&&(d.d(1),d=null),k&1){_=n[0].ama;let c;for(c=0;c<_.length;c+=1){const B=Q(n,_,c);l[c]?(l[c].p(B,k),T(l[c],1)):(l[c]=U(B),l[c].c(),T(l[c],1),l[c].m(g,y))}for(se(),c=_.length;c<l.length;c+=1)N(c);X()}n[0].ama.length===0?v||(v=F(),v.c(),v.m(g,null)):v&&(v.d(1),v=null)},i(n){if(!I){for(let k=0;k<_.length;k+=1)T(l[k]);I=!0}},o(n){l=l.filter(Boolean);for(let k=0;k<l.length;k+=1)z(l[k]);I=!1},d(n){h(e),n&&h(t),n&&h(s),d&&d.d(),Y(l,n),v&&v.d()}}}function ce(f,e,t){let s;Z(f,le,a=>t(1,s=a));let{data:i}=e;return f.$$set=a=>{"data"in a&&t(0,i=a.data)},[i,s]}class he extends J{constructor(e){super(),K(this,e,ce,ie,L,{data:0})}}export{he as default};