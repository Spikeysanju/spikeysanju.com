function k(){}const V=t=>t;function bt(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function it(){return Object.create(null)}function S(t){t.forEach(st)}function j(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function It(t,e){return z||(z=document.createElement("a")),z.href=e,t===z.href}function xt(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Wt(t){let e;return ot(t,n=>e=n)(),e}function Gt(t,e,n){t.$$.on_destroy.push(ot(e,n))}function Jt(t,e,n,i){if(t){const r=ct(t,e,n,i);return t[0](r)}}function ct(t,e,n,i){return t[1]&&i?bt(n.ctx.slice(),t[1](i(e))):n.ctx}function Kt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)c[o]=e.dirty[o]|r[o];return c}return e.dirty|r}return e.dirty}function Qt(t,e,n,i,r,c){if(r){const s=ct(e,n,i,c);t.p(s,r)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Vt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Xt(t){return t??""}function Yt(t){return t&&j(t.destroy)?t.destroy:k}const lt=typeof window<"u";let X=lt?()=>window.performance.now():()=>Date.now(),Y=lt?t=>requestAnimationFrame(t):k;const M=new Set;function at(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&Y(at)}function Z(t){let e;return M.size===0&&Y(at),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}let J=!1;function wt(){J=!0}function vt(){J=!1}function Et(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=a?r+1:Et(1,r,h=>e[n[h]].claim_order,a))-1;i[l]=n[f]+1;const _=f+1;n[_]=l,r=Math.max(_,r)}const c=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);c.reverse(),s.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<s.length;l++){for(;a<c.length&&s[l].claim_order>=c[a].claim_order;)a++;const f=a<c.length?c[a]:null;t.insertBefore(s[l],f)}}function Nt(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function St(t){const e=_t("style");return At(ut(t),e),e.sheet}function At(t,e){return Nt(t.head||t,e),e.sheet}function Ct(t,e){if(J){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Zt(t,e,n){J&&!n?Ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _t(t){return document.createElement(t)}function Mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function tt(t){return document.createTextNode(t)}function ee(){return tt(" ")}function ne(){return tt("")}function ie(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function re(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function se(t){return function(e){e.target===this&&t.call(this,e)}}function oe(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Dt(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,i,r=!1){jt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function ht(t,e,n,i){return dt(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||c.push(o.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ce(t,e,n){return ht(t,e,n,_t)}function le(t,e,n){return ht(t,e,n,Mt)}function Pt(t,e){return dt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>tt(e),!0)}function ae(t){return Pt(t," ")}function ue(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function fe(t,e){t.value=e??""}function _e(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function de(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function he(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function me(t,e,n){t.classList[n?"add":"remove"](e)}function mt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function pe(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ye(t,e){return new t(e)}const F=new Map;let I=0;function Tt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function qt(t,e){const n={stylesheet:St(e),rules:{}};return F.set(t,n),n}function W(t,e,n,i,r,c,s,o=0){const l=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=l){const g=e+(n-e)*c(m);a+=m*100+`%{${s(g,1-g)}}
`}const f=a+`100% {${s(n,1-n)}}
}`,_=`__svelte_${Tt(f)}_${o}`,h=ut(t),{stylesheet:u,rules:d}=F.get(h)||qt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${r}ms 1 both`,I+=1,_}function G(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),I-=r,I||Ot())}function Ot(){Y(()=>{I||(F.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ft(e)}),F.clear())})}let R;function O(t){R=t}function P(){if(!R)throw new Error("Function called outside component initialization");return R}function ge(t){P().$$.on_mount.push(t)}function $e(t){P().$$.after_update.push(t)}function be(t){P().$$.on_destroy.push(t)}function xe(){const t=P();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=mt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}function we(t,e){return P().$$.context.set(t,e),e}function ve(t){return P().$$.context.get(t)}function Ee(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const C=[],rt=[],B=[],Q=[],pt=Promise.resolve();let U=!1;function yt(){U||(U=!0,pt.then(gt))}function ke(){return yt(),pt}function D(t){B.push(t)}function Ne(t){Q.push(t)}const K=new Set;let A=0;function gt(){if(A!==0)return;const t=R;do{try{for(;A<C.length;){const e=C[A];A++,O(e),Rt(e.$$)}}catch(e){throw C.length=0,A=0,e}for(O(null),C.length=0,A=0;rt.length;)rt.pop()();for(let e=0;e<B.length;e+=1){const n=B[e];K.has(n)||(K.add(n),n())}B.length=0}while(C.length);for(;Q.length;)Q.pop()();U=!1,K.clear(),O(t)}function Rt(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let q;function et(){return q||(q=Promise.resolve(),q.then(()=>{q=null})),q}function N(t,e,n){t.dispatchEvent(mt(`${e?"intro":"outro"}${n}`))}const H=new Set;let v;function Se(){v={r:0,c:[],p:v}}function Ae(){v.r||S(v.c),v=v.p}function $t(t,e){t&&t.i&&(H.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if(H.has(t))return;H.add(t),v.c.push(()=>{H.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const nt={duration:0};function Ce(t,e,n){const i={direction:"in"};let r=e(t,n,i),c=!1,s,o,l=0;function a(){s&&G(t,s)}function f(){const{delay:h=0,duration:u=300,easing:d=V,tick:p=k,css:m}=r||nt;m&&(s=W(t,0,1,u,h,d,m,l++)),p(0,1);const g=X()+h,E=g+u;o&&o.abort(),c=!0,D(()=>N(t,!0,"start")),o=Z($=>{if(c){if($>=E)return p(1,0),N(t,!0,"end"),a(),c=!1;if($>=g){const b=d(($-g)/u);p(b,1-b)}}return c})}let _=!1;return{start(){_||(_=!0,G(t),j(r)?(r=r(i),et().then(f)):f())},invalidate(){_=!1},end(){c&&(a(),c=!1)}}}function Me(t,e,n){const i={direction:"out"};let r=e(t,n,i),c=!0,s;const o=v;o.r+=1;function l(){const{delay:a=0,duration:f=300,easing:_=V,tick:h=k,css:u}=r||nt;u&&(s=W(t,1,0,f,a,_,u));const d=X()+a,p=d+f;D(()=>N(t,!1,"start")),Z(m=>{if(c){if(m>=p)return h(0,1),N(t,!1,"end"),--o.r||S(o.c),!1;if(m>=d){const g=_((m-d)/f);h(1-g,g)}}return c})}return j(r)?et().then(()=>{r=r(i),l()}):l(),{end(a){a&&r.tick&&r.tick(1,0),c&&(s&&G(t,s),c=!1)}}}function De(t,e,n,i){const r={direction:"both"};let c=e(t,n,r),s=i?0:1,o=null,l=null,a=null;function f(){a&&G(t,a)}function _(u,d){const p=u.b-s;return d*=Math.abs(p),{a:s,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=V,tick:g=k,css:E}=c||nt,$={start:X()+d,b:u};u||($.group=v,v.r+=1),o||l?l=$:(E&&(f(),a=W(t,s,u,p,d,m,E)),u&&g(0,1),o=_($,p),D(()=>N(t,u,"start")),Z(b=>{if(l&&b>l.start&&(o=_(l,p),l=null,N(t,o.b,"start"),E&&(f(),a=W(t,s,o.b,o.duration,0,m,c.css))),o){if(b>=o.end)g(s=o.b,1-s),N(t,o.b,"end"),l||(o.b?f():--o.group.r||S(o.group.c)),o=null;else if(b>=o.start){const T=b-o.start;s=o.a+o.d*m(T/o.duration),g(s,1-s)}}return!!(o||l)}))}return{run(u){j(c)?et().then(()=>{c=c(r),h(u)}):h(u)},end(){f(),o=l=null}}}function je(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function Pe(t,e,n,i,r,c,s,o,l,a,f,_){let h=t.length,u=c.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],g=new Map,E=new Map;for(d=u;d--;){const y=_(r,c,d),x=n(y);let w=s.get(x);w?i&&w.p(y,e):(w=a(x,y),w.c()),g.set(x,m[d]=w),x in p&&E.set(x,Math.abs(d-p[x]))}const $=new Set,b=new Set;function T(y){$t(y,1),y.m(o,f),s.set(y.key,y),f=y.first,u--}for(;h&&u;){const y=m[u-1],x=t[h-1],w=y.key,L=x.key;y===x?(f=y.first,h--,u--):g.has(L)?!s.has(w)||$.has(w)?T(y):b.has(L)?h--:E.get(w)>E.get(L)?(b.add(w),T(y)):($.add(L),h--):(l(x,s),h--)}for(;h--;){const y=t[h];g.has(y.key)||l(y,s)}for(;u;)T(m[u-1]);return m}function Te(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function qe(t){t&&t.c()}function Oe(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||D(()=>{const s=t.$$.on_mount.map(st).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...s):S(s),t.$$.on_mount=[]}),c.forEach(D)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(C.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Re(t,e,n,i,r,c,s,o=[-1]){const l=R;O(t);const a=t.$$={fragment:null,ctx:[],props:c,update:k,not_equal:r,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:it(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return a.ctx&&r(a.ctx[_],a.ctx[_]=d)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](d),f&&Ht(t,_)),h}):[],a.update(),f=!0,S(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){wt();const _=Dt(e.target);a.fragment&&a.fragment.l(_),_.forEach(ft)}else a.fragment&&a.fragment.c();e.intro&&$t(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),vt(),gt()}O(l)}class Le{$destroy(){Bt(this,1),this.$destroy=k}$on(e,n){if(!j(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{se as $,zt as A,Bt as B,k as C,Ct as D,V as E,Jt as F,Yt as G,Qt as H,Ut as I,Kt as J,j as K,Wt as L,Xt as M,me as N,ie as O,xe as P,ve as Q,Gt as R,Le as S,te as T,S as U,be as V,Pe as W,je as X,we as Y,fe as Z,re as _,ee as a,D as a0,De as a1,Ee as a2,pe as a3,It as a4,Ce as a5,Me as a6,Te as a7,Ne as a8,Mt as a9,le as aa,bt as ab,Vt as ac,de as ad,he as ae,Zt as b,ae as c,Lt as d,ne as e,Ae as f,$t as g,ft as h,Re as i,$e as j,_t as k,ce as l,Dt as m,oe as n,ge as o,_e as p,tt as q,Pt as r,Ft as s,ke as t,ue as u,Se as v,rt as w,ye as x,qe as y,Oe as z};
