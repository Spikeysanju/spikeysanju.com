import{S as ie,i as ue,s as ce,k as v,a as P,q as L,a3 as me,l as A,h as g,c as D,m as $,r as Q,n as m,D as u,b as te,Z as ae,O as ne,u as oe,f as V,d as fe,t as W,T as de,U as he,x as _e,y as pe,z as ge,A as ve,g as Ae,a2 as Ee}from"../../../../chunks/index-695f9ad5.js";import{A as ye}from"../../../../chunks/AmaCommentCard-8693f6ef.js";function le(o,l,r){const f=o.slice();return f[4]=l[r],f}function se(o){var f,h;let l,r;return l=new ye({props:{name:((f=o[4].user)==null?void 0:f.name)??"Anonymous",image:((h=o[4].user)==null?void 0:h.image)??"/images/anonymous.png",content:o[4].content??"",createdAt:o[4].createdAt??""}}),{c(){_e(l.$$.fragment)},l(t){pe(l.$$.fragment,t)},m(t,i){ge(l,t,i),r=!0},p(t,i){var k,w;const c={};i&1&&(c.name=((k=t[4].user)==null?void 0:k.name)??"Anonymous"),i&1&&(c.image=((w=t[4].user)==null?void 0:w.image)??"/images/anonymous.png"),i&1&&(c.content=t[4].content??""),i&1&&(c.createdAt=t[4].createdAt??""),l.$set(c)},i(t){r||(V(l.$$.fragment,t),r=!0)},o(t){W(l.$$.fragment,t),r=!1},d(t){ve(l,t)}}}function be(o){var Y,x,ee;let l,r,f,h,t,i,c,k=((Y=o[0].tools)==null?void 0:Y.name)+"",w,z,N,O=((x=o[0].tools)==null?void 0:x.description)+"",H,B,_,U,F,R,E,S,M,Z,d,G,y,J,X;document.title=l=((ee=o[0].tools)==null?void 0:ee.name)+" – Spikey Sanju";let I=o[0].comments,n=[];for(let e=0;e<I.length;e+=1)n[e]=se(le(o,I,e));const re=e=>W(n[e],1,1,()=>{n[e]=null});return{c(){r=v("meta"),h=P(),t=v("section"),i=v("div"),c=v("h1"),w=L(k),z=P(),N=v("p"),H=L(O),B=P(),_=v("div"),U=v("h3"),F=L("Comments"),R=P(),E=v("form"),S=v("input"),Z=P(),d=v("input"),G=P();for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){const a=me("svelte-1ses4ln",document.head);r=A(a,"META",{name:!0,content:!0}),a.forEach(g),h=D(e),t=A(e,"SECTION",{class:!0});var p=$(t);i=A(p,"DIV",{class:!0});var C=$(i);c=A(C,"H1",{});var j=$(c);w=Q(j,k),j.forEach(g),z=D(C),N=A(C,"P",{});var q=$(N);H=Q(q,O),q.forEach(g),C.forEach(g),B=D(p),_=A(p,"DIV",{class:!0});var b=$(_);U=A(b,"H3",{});var s=$(U);F=Q(s,"Comments"),s.forEach(g),R=D(b),E=A(b,"FORM",{method:!0,action:!0});var T=$(E);S=A(T,"INPUT",{type:!0,name:!0,id:!0}),Z=D(T),d=A(T,"INPUT",{name:!0,id:!0,placeholder:!0,class:!0}),T.forEach(g),G=D(b);for(let K=0;K<n.length;K+=1)n[K].l(b);b.forEach(g),p.forEach(g),this.h()},h(){var e,a;m(r,"name","description"),m(r,"content",f=(e=o[0].tools)==null?void 0:e.description),m(i,"class","flex w-full flex-col space-y-3"),m(S,"type","hidden"),m(S,"name","toolId"),m(S,"id","toolId"),S.value=M=(a=o[0].tools)==null?void 0:a.id,m(d,"name","comment"),m(d,"id","comment"),m(d,"placeholder","Share your thoughts..."),m(d,"class","w-full rounded-md border border-gray-300 p-3"),m(E,"method","post"),m(E,"action","?/create"),m(_,"class","mt-6 flex w-full flex-col space-y-3"),m(t,"class","flex w-full flex-col")},m(e,a){u(document.head,r),te(e,h,a),te(e,t,a),u(t,i),u(i,c),u(c,w),u(i,z),u(i,N),u(N,H),u(t,B),u(t,_),u(_,U),u(U,F),u(_,R),u(_,E),u(E,S),u(E,Z),u(E,d),ae(d,o[1]),u(_,G);for(let p=0;p<n.length;p+=1)n[p].m(_,null);y=!0,J||(X=[ne(d,"input",o[3]),ne(d,"keydown",o[2])],J=!0)},p(e,[a]){var p,C,j,q,b;if((!y||a&1)&&l!==(l=((p=e[0].tools)==null?void 0:p.name)+" – Spikey Sanju")&&(document.title=l),(!y||a&1&&f!==(f=(C=e[0].tools)==null?void 0:C.description))&&m(r,"content",f),(!y||a&1)&&k!==(k=((j=e[0].tools)==null?void 0:j.name)+"")&&oe(w,k),(!y||a&1)&&O!==(O=((q=e[0].tools)==null?void 0:q.description)+"")&&oe(H,O),(!y||a&1&&M!==(M=(b=e[0].tools)==null?void 0:b.id))&&(S.value=M),a&2&&d.value!==e[1]&&ae(d,e[1]),a&1){I=e[0].comments;let s;for(s=0;s<I.length;s+=1){const T=le(e,I,s);n[s]?(n[s].p(T,a),V(n[s],1)):(n[s]=se(T),n[s].c(),V(n[s],1),n[s].m(_,null))}for(Ae(),s=I.length;s<n.length;s+=1)re(s);fe()}},i(e){if(!y){for(let a=0;a<I.length;a+=1)V(n[a]);y=!0}},o(e){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)W(n[a]);y=!1},d(e){g(r),e&&g(h),e&&g(t),de(n,e),J=!1,he(X)}}}function ke(o,l,r){let{data:f}=l,h="";function t(c){Ee.call(this,o,c)}function i(){h=this.value,r(1,h)}return o.$$set=c=>{"data"in c&&r(0,f=c.data)},[f,h,t,i]}class Ie extends ie{constructor(l){super(),ue(this,l,ke,be,ce,{data:0})}}export{Ie as default};
