import{S as oe,i as ne,s as ue,k as s,q as N,a as k,l as r,m as u,r as U,h as n,c as g,n as e,b as ie,H as a,a1 as y,T as R,C as re,Y as ce}from"../../../../chunks/index-42721989.js";function de(p){let b,t,c,E,x,h,o,P,v,V,q,T,i,C,A,O,S,w,Y,F,B,d,H,L,M,X,D,m,j,I,z,G,J;return{c(){b=s("div"),t=s("form"),c=s("label"),E=N("Name"),x=k(),h=s("div"),o=s("input"),P=k(),v=s("label"),V=N("Description"),q=k(),T=s("div"),i=s("textarea"),C=k(),A=s("p"),O=N("Brief description of your tool. URLs are hyperlinked."),S=k(),w=s("label"),Y=N("Image"),F=k(),B=s("div"),d=s("input"),H=k(),L=s("label"),M=N("Link"),X=k(),D=s("div"),m=s("input"),j=k(),I=s("button"),z=N("Add Tool"),this.h()},l(f){b=r(f,"DIV",{class:!0});var _=u(b);t=r(_,"FORM",{action:!0,method:!0,class:!0});var l=u(t);c=r(l,"LABEL",{for:!0,class:!0});var K=u(c);E=U(K,"Name"),K.forEach(n),x=g(l),h=r(l,"DIV",{class:!0});var Q=u(h);o=r(Q,"INPUT",{type:!0,name:!0,id:!0,autocomplete:!0,class:!0}),Q.forEach(n),P=g(l),v=r(l,"LABEL",{for:!0,class:!0});var W=u(v);V=U(W,"Description"),W.forEach(n),q=g(l),T=r(l,"DIV",{class:!0});var Z=u(T);i=r(Z,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0,placeholder:!0}),u(i).forEach(n),Z.forEach(n),C=g(l),A=r(l,"P",{class:!0});var $=u(A);O=U($,"Brief description of your tool. URLs are hyperlinked."),$.forEach(n),S=g(l),w=r(l,"LABEL",{for:!0,class:!0});var ee=u(w);Y=U(ee,"Image"),ee.forEach(n),F=g(l),B=r(l,"DIV",{class:!0});var te=u(B);d=r(te,"INPUT",{type:!0,name:!0,id:!0,autocomplete:!0,class:!0}),te.forEach(n),H=g(l),L=r(l,"LABEL",{for:!0,class:!0});var ae=u(L);M=U(ae,"Link"),ae.forEach(n),X=g(l),D=r(l,"DIV",{class:!0});var le=u(D);m=r(le,"INPUT",{type:!0,name:!0,id:!0,autocomplete:!0,class:!0}),le.forEach(n),j=g(l),I=r(l,"BUTTON",{type:!0,class:!0});var se=u(I);z=U(se,"Add Tool"),se.forEach(n),l.forEach(n),_.forEach(n),this.h()},h(){e(c,"for","name"),e(c,"class","block text-sm font-medium text-gray-700"),e(o,"type","text"),e(o,"name","name"),e(o,"id","name"),e(o,"autocomplete","name"),e(o,"class","block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"),e(h,"class","mt-1"),e(v,"for","description"),e(v,"class","block text-sm font-medium text-gray-700"),e(i,"id","description"),e(i,"name","description"),e(i,"rows","3"),e(i,"class","mt-1 block w-full whitespace-pre-line rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"),e(i,"placeholder","You can use markdown here."),e(T,"class","mt-1"),e(A,"class","mt-2 text-sm text-gray-500"),e(w,"for","image"),e(w,"class","block text-sm font-medium text-gray-700"),e(d,"type","url"),e(d,"name","image"),e(d,"id","image"),e(d,"autocomplete","image"),e(d,"class","block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"),e(B,"class","mt-1"),e(L,"for","link"),e(L,"class","block text-sm font-medium text-gray-700"),e(m,"type","url"),e(m,"name","link"),e(m,"id","link"),e(m,"autocomplete","link"),e(m,"class","block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"),e(D,"class","mt-1"),e(I,"type","submit"),e(I,"class","text-md w-full items-center rounded-md border border-transparent bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"),e(t,"action","?/create"),e(t,"method","post"),e(t,"class","flex w-full flex-col space-y-3"),e(b,"class","flex w-full flex-col")},m(f,_){ie(f,b,_),a(b,t),a(t,c),a(c,E),a(t,x),a(t,h),a(h,o),y(o,p[0]),a(t,P),a(t,v),a(v,V),a(t,q),a(t,T),a(T,i),y(i,p[1]),a(t,C),a(t,A),a(A,O),a(t,S),a(t,w),a(w,Y),a(t,F),a(t,B),a(B,d),y(d,p[2]),a(t,H),a(t,L),a(L,M),a(t,X),a(t,D),a(D,m),y(m,p[3]),a(t,j),a(t,I),a(I,z),G||(J=[R(o,"input",p[4]),R(i,"input",p[5]),R(d,"input",p[6]),R(m,"input",p[7])],G=!0)},p(f,[_]){_&1&&o.value!==f[0]&&y(o,f[0]),_&2&&y(i,f[1]),_&4&&y(d,f[2]),_&8&&y(m,f[3])},i:re,o:re,d(f){f&&n(b),G=!1,ce(J)}}}function me(p,b,t){let c="",E="",x="",h="";function o(){c=this.value,t(0,c)}function P(){E=this.value,t(1,E)}function v(){x=this.value,t(2,x)}function V(){h=this.value,t(3,h)}return[c,E,x,h,o,P,v,V]}class pe extends oe{constructor(b){super(),ne(this,b,me,de,ue,{})}}export{pe as default};
