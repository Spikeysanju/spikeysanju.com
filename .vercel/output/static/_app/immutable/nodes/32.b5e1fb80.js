import{d as Y,e as Z}from"../chunks/forms.66c8e974.js";import{s as $,f as i,a as x,J as ee,g as c,d as T,c as C,h as O,r as q,j as e,u as n,i as K,W as S,v as B,X as te,B as Q,D as se,p as ne}from"../chunks/scheduler.bf64c14b.js";import{S as re,i as oe}from"../chunks/index.176ec7d1.js";import{s as ae}from"../chunks/utils.39804466.js";const le=Y,ue=!1,ge=Object.freeze(Object.defineProperty({__proto__:null,csr:le,prerender:ue},Symbol.toStringTag,{value:"Module"}));function ie(l){let v,o,f,t,u,k="Name",j,m,d,A,y,D="Description",U,w,p,L,s,N="Image",P,h,E,M,g,V,b,F,I,z="Add photo",J,R;return{c(){v=i("meta"),o=x(),f=i("section"),t=i("form"),u=i("label"),u.textContent=k,j=x(),m=i("div"),d=i("input"),A=x(),y=i("label"),y.textContent=D,U=x(),w=i("div"),p=i("input"),L=x(),s=i("label"),s.textContent=N,P=x(),h=i("div"),E=i("input"),M=x(),g=i("input"),V=x(),b=i("input"),F=x(),I=i("button"),I.textContent=z,this.h()},l(a){const _=ee("svelte-1bc9716",document.head);v=c(_,"META",{name:!0,content:!0}),_.forEach(T),o=C(a),f=c(a,"SECTION",{class:!0});var W=O(f);t=c(W,"FORM",{action:!0,method:!0,class:!0});var r=O(t);u=c(r,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),q(u)!=="svelte-1fy0t1k"&&(u.textContent=k),j=C(r),m=c(r,"DIV",{class:!0});var X=O(m);d=c(X,"INPUT",{type:!0,name:!0,id:!0,autocomplete:!0,class:!0}),X.forEach(T),A=C(r),y=c(r,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),q(y)!=="svelte-2vq9u3"&&(y.textContent=D),U=C(r),w=c(r,"DIV",{class:!0});var G=O(w);p=c(G,"INPUT",{type:!0,name:!0,id:!0,autocomplete:!0,class:!0}),G.forEach(T),L=C(r),s=c(r,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),q(s)!=="svelte-ff3qov"&&(s.textContent=N),P=C(r),h=c(r,"DIV",{class:!0});var H=O(h);E=c(H,"INPUT",{id:!0,type:!0,accept:!0}),H.forEach(T),M=C(r),g=c(r,"INPUT",{id:!0,name:!0,type:!0,class:!0}),V=C(r),b=c(r,"INPUT",{id:!0,name:!0,type:!0,class:!0}),F=C(r),I=c(r,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),q(I)!=="svelte-17aedv3"&&(I.textContent=z),r.forEach(T),W.forEach(T),this.h()},h(){document.title="Add Photo | Spikey Sanju",e(v,"name","description"),e(v,"content","Add a new photo to the gallery"),e(u,"for","name"),e(u,"class","block text-sm font-medium text-gray-700 dark:text-gray-200"),e(d,"type","text"),e(d,"name","title"),e(d,"id","title"),e(d,"autocomplete","title"),e(d,"class","block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white sm:text-sm"),e(m,"class","mt-1"),e(y,"for","description"),e(y,"class","block text-sm font-medium text-gray-700 dark:text-gray-200"),e(p,"type","text"),e(p,"name","description"),e(p,"id","description"),e(p,"autocomplete","name"),e(p,"class","block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black dark:border-gray-500 dark:bg-purpleontop dark:focus:border-white sm:text-sm"),e(w,"class","mt-1"),e(s,"for","image"),e(s,"class","block text-sm font-medium text-gray-700 dark:text-gray-200"),e(E,"id","image-to-upload"),e(E,"type","file"),e(E,"accept",".png,.jpg, .jpeg"),e(h,"class","mt-1"),e(g,"id","image"),e(g,"name","image"),e(g,"type","url"),e(g,"class","hidden"),e(b,"id","type"),e(b,"name","type"),e(b,"type","text"),e(b,"class","hidden"),e(I,"type","submit"),e(I,"class","text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-white dark:text-black"),e(t,"action","?/create"),e(t,"method","post"),e(t,"class","flex w-full flex-col space-y-3"),e(f,"class","flex min-h-screen w-full flex-col items-center justify-start")},m(a,_){n(document.head,v),K(a,o,_),K(a,f,_),n(f,t),n(t,u),n(t,j),n(t,m),n(m,d),S(d,l[0]),n(t,A),n(t,y),n(t,U),n(t,w),n(w,p),S(p,l[1]),n(t,L),n(t,s),n(t,P),n(t,h),n(h,E),l[9](E),n(t,M),n(t,g),S(g,l[2]),n(t,V),n(t,b),S(b,l[3]),n(t,F),n(t,I),J||(R=[B(d,"input",l[7]),B(p,"input",l[8]),B(E,"change",l[5]),B(g,"input",l[10]),B(b,"input",l[11]),te(Z.call(null,t))],J=!0)},p(a,[_]){_&1&&d.value!==a[0]&&S(d,a[0]),_&2&&p.value!==a[1]&&S(p,a[1]),_&4&&g.value!==a[2]&&S(g,a[2]),_&8&&b.value!==a[3]&&S(b,a[3])},i:Q,o:Q,d(a){a&&(T(o),T(f)),T(v),l[9](null),J=!1,se(R)}}}function ce(l){console.error("Error during image upload: ",l)}function de(l,v,o){let f="",t="",u="",k="";const j={capture:()=>({title:f,description:t,image:u,fileType:k}),restore:s=>{o(0,f=s.title),o(1,t=s.description),o(2,u=s.image),o(3,k=s.fileType)}};let m;function d(){if(m.files!=null){const s=m.files[0];ae(s,A,ce)}}function A(s,N){y(s,N)}const y=async(s,N)=>{const P=await fetch("/api/upload",{method:"PUT",body:JSON.stringify({image:s,fileType:N})}).then(h=>h.json()).then(h=>(console.log("res",h),h));o(2,u=P.url),o(3,k=P.fileType)};function D(){f=this.value,o(0,f)}function U(){t=this.value,o(1,t)}function w(s){ne[s?"unshift":"push"](()=>{m=s,o(4,m)})}function p(){u=this.value,o(2,u)}function L(){k=this.value,o(3,k)}return[f,t,u,k,m,d,j,D,U,w,p,L]}class be extends re{constructor(v){super(),oe(this,v,de,ie,$,{snapshot:6})}get snapshot(){return this.$$.ctx[6]}}export{be as component,ge as universal};
