import{S as g,i as v,s as b,k as $,q as m,l as q,m as x,r as p,h as f,b as C,D as u,u as h,C as d,R as E}from"../../../chunks/index-695f9ad5.js";import{p as S}from"../../../chunks/stores-0d063f77.js";function k(n){var c;let e,s=n[0].status+"",r,o,l=((c=n[0].error)==null?void 0:c.message)+"",i;return{c(){e=$("h1"),r=m(s),o=m(": "),i=m(l)},l(a){e=q(a,"H1",{});var t=x(e);r=p(t,s),o=p(t,": "),i=p(t,l),t.forEach(f)},m(a,t){C(a,e,t),u(e,r),u(e,o),u(e,i)},p(a,[t]){var _;t&1&&s!==(s=a[0].status+"")&&h(r,s),t&1&&l!==(l=((_=a[0].error)==null?void 0:_.message)+"")&&h(i,l)},i:d,o:d,d(a){a&&f(e)}}}function y(n,e,s){let r;return E(n,S,o=>s(0,r=o)),[r]}class R extends g{constructor(e){super(),v(this,e,y,k,b,{})}}export{R as default};
