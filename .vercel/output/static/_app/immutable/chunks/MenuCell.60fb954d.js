import{s as w,f as d,l as x,a as y,g as _,h as g,m as I,d as c,c as b,j as u,i as j,u as h,n as p}from"./scheduler.bf64c14b.js";import{S as E,i as k,b as C,d as D,m as M,a as S,t as V,e as q}from"./index.176ec7d1.js";import{I as z}from"./Icon.aa31ef65.js";function A(r){let e,n,o,l,s,t,f;return t=new z({props:{size:"medium",name:r[2]}}),{c(){e=d("div"),n=d("a"),o=x(r[0]),l=y(),s=d("div"),C(t.$$.fragment),this.h()},l(a){e=_(a,"DIV",{class:!0});var i=g(e);n=_(i,"A",{class:!0,href:!0});var m=g(n);o=I(m,r[0]),m.forEach(c),l=b(i),s=_(i,"DIV",{});var v=g(s);D(t.$$.fragment,v),v.forEach(c),i.forEach(c),this.h()},h(){u(n,"class","delay-50 flex w-full items-center justify-between text-start text-2xl font-medium tracking-tight text-gray-900 transition-all hover:underline dark:text-white"),u(n,"href",r[1]),u(e,"class","flex w-full flex-row items-center justify-between transition-all delay-75 ease-in-out hover:-rotate-1")},m(a,i){j(a,e,i),h(e,n),h(n,o),h(e,l),h(e,s),M(t,s,null),f=!0},p(a,[i]){(!f||i&1)&&p(o,a[0]),(!f||i&2)&&u(n,"href",a[1]);const m={};i&4&&(m.name=a[2]),t.$set(m)},i(a){f||(S(t.$$.fragment,a),f=!0)},o(a){V(t.$$.fragment,a),f=!1},d(a){a&&c(e),q(t)}}}function B(r,e,n){let{name:o=""}=e,{href:l=""}=e,{icon:s=""}=e;return r.$$set=t=>{"name"in t&&n(0,o=t.name),"href"in t&&n(1,l=t.href),"icon"in t&&n(2,s=t.icon)},[o,l,s]}class J extends E{constructor(e){super(),k(this,e,B,A,w,{name:0,href:1,icon:2})}}export{J as M};
