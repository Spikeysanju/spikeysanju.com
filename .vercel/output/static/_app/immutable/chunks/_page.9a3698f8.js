const n=async({fetch:t,params:e})=>{const{category:o}=e,s=(await(await t("/api/blogs")).json()).filter(a=>a.meta.categories.includes(o));return{category:o,posts:s,params:e}},r=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{r as _,n as l};
