import{S as D,i as S,s as A,k as u,a as k,q,l as m,m as b,c as w,r as I,h as _,a4 as p,n as c,b as G,D as n,u as y,C as B}from"./index.e2d88345.js";function H(r){let e,a,o,f,s,t,g,x,h,d;return{c(){e=u("article"),a=u("img"),f=k(),s=u("div"),t=u("h1"),g=q(r[0]),x=k(),h=u("p"),d=q(r[1]),this.h()},l(i){e=m(i,"ARTICLE",{class:!0});var l=b(e);a=m(l,"IMG",{src:!0,alt:!0,class:!0}),f=w(l),s=m(l,"DIV",{class:!0});var v=b(s);t=m(v,"H1",{class:!0});var E=b(t);g=I(E,r[0]),E.forEach(_),x=w(v),h=m(v,"P",{class:!0});var C=b(h);d=I(C,r[1]),C.forEach(_),v.forEach(_),l.forEach(_),this.h()},h(){p(a.src,o=r[2])||c(a,"src",o),c(a,"alt",r[0]),c(a,"class","aspect-video"),c(t,"class","-mb-2 text-lg tracking-tight text-black"),c(h,"class","text-base text-gray-500"),c(s,"class","space-y mt-3 mb-3 flex w-full flex-col space-y-2"),c(e,"class","flex w-full max-w-sm flex-col transition-all ease-linear hover:-rotate-3")},m(i,l){G(i,e,l),n(e,a),n(e,f),n(e,s),n(s,t),n(t,g),n(s,x),n(s,h),n(h,d)},p(i,[l]){l&4&&!p(a.src,o=i[2])&&c(a,"src",o),l&1&&c(a,"alt",i[0]),l&1&&y(g,i[0]),l&2&&y(d,i[1])},i:B,o:B,d(i){i&&_(e)}}}function L(r,e,a){let{title:o}=e,{author:f}=e,{image:s}=e;return r.$$set=t=>{"title"in t&&a(0,o=t.title),"author"in t&&a(1,f=t.author),"image"in t&&a(2,s=t.image)},[o,f,s]}class P extends D{constructor(e){super(),S(this,e,L,H,A,{title:0,author:1,image:2})}}export{P as B};
