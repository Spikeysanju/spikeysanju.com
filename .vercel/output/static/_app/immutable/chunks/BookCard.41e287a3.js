import{S as D,i as S,s as A,k as f,a as w,q as C,l as m,m as b,c as q,r as I,h as _,a4 as p,n as c,b as G,D as n,u as y,C as B}from"./index.e2d88345.js";function H(i){let a,e,o,u,s,t,g,x,h,d;return{c(){a=f("article"),e=f("img"),u=w(),s=f("div"),t=f("h1"),g=C(i[0]),x=w(),h=f("p"),d=C(i[1]),this.h()},l(r){a=m(r,"ARTICLE",{class:!0});var l=b(a);e=m(l,"IMG",{src:!0,alt:!0,class:!0}),u=q(l),s=m(l,"DIV",{class:!0});var v=b(s);t=m(v,"H1",{class:!0});var E=b(t);g=I(E,i[0]),E.forEach(_),x=q(v),h=m(v,"P",{class:!0});var k=b(h);d=I(k,i[1]),k.forEach(_),v.forEach(_),l.forEach(_),this.h()},h(){p(e.src,o=i[2])||c(e,"src",o),c(e,"alt",i[0]),c(e,"class","aspect-auto shadow-lg"),c(t,"class","-mb-2 truncate text-lg tracking-tight text-black"),c(h,"class","text-base text-gray-500"),c(s,"class","space-y mt-3 mb-3 flex w-full flex-col space-y-2"),c(a,"class","flex w-full max-w-sm flex-col transition-all ease-linear hover:-rotate-3")},m(r,l){G(r,a,l),n(a,e),n(a,u),n(a,s),n(s,t),n(t,g),n(s,x),n(s,h),n(h,d)},p(r,[l]){l&4&&!p(e.src,o=r[2])&&c(e,"src",o),l&1&&c(e,"alt",r[0]),l&1&&y(g,r[0]),l&2&&y(d,r[1])},i:B,o:B,d(r){r&&_(a)}}}function L(i,a,e){let{title:o}=a,{author:u}=a,{image:s}=a;return i.$$set=t=>{"title"in t&&e(0,o=t.title),"author"in t&&e(1,u=t.author),"image"in t&&e(2,s=t.image)},[o,u,s]}class P extends D{constructor(a){super(),S(this,a,L,H,A,{title:0,author:1,image:2})}}export{P as B};