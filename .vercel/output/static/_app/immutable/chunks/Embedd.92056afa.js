import{s as I,f as m,g as p,h as g,d as u,i as w,X as j,v as q,D as O,U as A,j as f,B as M,I as C,L as N,M as P,N as T,K as S,a as X,c as z,u as B}from"./scheduler.bf64c14b.js";import{S as V,i as D,g as F,t as _,c as G,a as d,b as k,d as $,m as E,e as L}from"./index.176ec7d1.js";import{T as K}from"./tweet.73f6d04d.js";let b;function R(){b||(b=new IntersectionObserver(l=>{l.filter(({isIntersecting:e})=>e).forEach(e=>{e.target.dispatchEvent(new CustomEvent("enterViewport"))})},{rootMargin:"1000px"}))}function U(l){return R(),b.observe(l),{destroy(){b.unobserve(l)}}}function Z(l){let e,s;return{c(){e=m("div"),this.h()},l(t){e=p(t,"DIV",{class:!0,style:!0}),g(e).forEach(u),this.h()},h(){f(e,"class","flex justify-center mb-12"),f(e,"style",s=`height:${l[0]}px;width: 100%`)},m(t,i){w(t,e,i)},p(t,i){i&1&&s!==(s=`height:${t[0]}px;width: 100%`)&&f(e,"style",s)},i:M,o:M,d(t){t&&u(e)}}}function H(l){let e,s,t;const i=l[5].default,r=C(i,l,l[4],null);return{c(){e=m("div"),r&&r.c(),this.h()},l(n){e=p(n,"DIV",{class:!0,style:!0});var a=g(e);r&&r.l(a),a.forEach(u),this.h()},h(){f(e,"class","flex justify-center mb-12"),f(e,"style",s=`width: ${l[1]}`)},m(n,a){w(n,e,a),r&&r.m(e,null),t=!0},p(n,a){r&&r.p&&(!t||a&16)&&N(r,i,n,n[4],t?T(i,n[4],a,null):P(n[4]),null),(!t||a&2&&s!==(s=`width: ${n[1]}`))&&f(e,"style",s)},i(n){t||(d(r,n),t=!0)},o(n){_(r,n),t=!1},d(n){n&&u(e),r&&r.d(n)}}}function J(l){let e,s,t,i,r,n;const a=[H,Z],c=[];function v(o,h){return o[2]?0:1}return s=v(l),t=c[s]=a[s](l),{c(){e=m("div"),t.c()},l(o){e=p(o,"DIV",{});var h=g(e);t.l(h),h.forEach(u)},m(o,h){w(o,e,h),c[s].m(e,null),i=!0,r||(n=[j(U.call(null,e)),q(e,"enterViewport",l[6])],r=!0)},p(o,[h]){let y=s;s=v(o),s===y?c[s].p(o,h):(F(),_(c[y],1,1,()=>{c[y]=null}),G(),t=c[s],t?t.p(o,h):(t=c[s]=a[s](o),t.c()),d(t,1),t.m(e,null))},i(o){i||(d(t),i=!0)},o(o){_(t),i=!1},d(o){o&&u(e),c[s].d(),r=!1,O(n)}}}function Q(l,e,s){let{$$slots:t={},$$scope:i}=e;const r=A();let{height:n="100"}=e,{width:a="100"}=e,c;const v=()=>{s(2,c=!0),r("enterViewport")};return l.$$set=o=>{"height"in o&&s(0,n=o.height),"width"in o&&s(1,a=o.width),"$$scope"in o&&s(4,i=o.$$scope)},[n,a,c,r,i,t,v]}class W extends V{constructor(e){super(),D(this,e,Q,J,I,{height:0,width:1})}}function Y(l){let e,s,t;return{c(){e=m("iframe"),this.h()},l(i){e=p(i,"IFRAME",{"data-testid":!0,title:!0,class:!0,src:!0,width:!0,height:!0,frameborder:!0,allow:!0}),g(e).forEach(u),this.h()},h(){f(e,"data-testid","spotify"),f(e,"title",s=`spotify-${l[0]}`),f(e,"class","spotify-sveltekit-embed"),S(e.src,t=`https://open.spotify.com/embed/${l[0]}`)||f(e,"src",t),f(e,"width",l[1]),f(e,"height",l[2]),f(e,"frameborder","0"),f(e,"allow","encrypted-media")},m(i,r){w(i,e,r)},p(i,r){r&1&&s!==(s=`spotify-${i[0]}`)&&f(e,"title",s),r&1&&!S(e.src,t=`https://open.spotify.com/embed/${i[0]}`)&&f(e,"src",t),r&2&&f(e,"width",i[1]),r&4&&f(e,"height",i[2])},d(i){i&&u(e)}}}function x(l){let e,s;return e=new W({props:{height:l[2],width:l[1],$$slots:{default:[Y]},$$scope:{ctx:l}}}),{c(){k(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,i){E(e,t,i),s=!0},p(t,[i]){const r={};i&4&&(r.height=t[2]),i&2&&(r.width=t[1]),i&15&&(r.$$scope={dirty:i,ctx:t}),e.$set(r)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function ee(l,e,s){let{spotifyLink:t=""}=e,{width:i="320"}=e,{height:r="380"}=e;return l.$$set=n=>{"spotifyLink"in n&&s(0,t=n.spotifyLink),"width"in n&&s(1,i=n.width),"height"in n&&s(2,r=n.height)},[t,i,r]}class te extends V{constructor(e){super(),D(this,e,ee,x,I,{spotifyLink:0,width:1,height:2})}}function se(l){let e,s,t,i,r;return s=new K({props:{tweetLink:l[0]}}),i=new te({props:{spotifyLink:"show/4XPl3uEEL9hvqMkoZrzbx5"}}),{c(){e=m("span"),k(s.$$.fragment),t=X(),k(i.$$.fragment),this.h()},l(n){e=p(n,"SPAN",{class:!0});var a=g(e);$(s.$$.fragment,a),t=z(a),$(i.$$.fragment,a),a.forEach(u),this.h()},h(){f(e,"class","flex w-full flex-col")},m(n,a){w(n,e,a),E(s,e,null),B(e,t),E(i,e,null),r=!0},p(n,[a]){const c={};a&1&&(c.tweetLink=n[0]),s.$set(c)},i(n){r||(d(s.$$.fragment,n),d(i.$$.fragment,n),r=!0)},o(n){_(s.$$.fragment,n),_(i.$$.fragment,n),r=!1},d(n){n&&u(e),L(s),L(i)}}}function ie(l,e,s){let{tweetLink:t}=e;return l.$$set=i=>{"tweetLink"in i&&s(0,t=i.tweetLink)},[t]}class ae extends V{constructor(e){super(),D(this,e,ie,se,I,{tweetLink:0})}}export{ae as E};
