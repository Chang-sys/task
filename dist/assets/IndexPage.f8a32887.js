import{c as g,A as s,B as t,d as c,h as p,j as d,C as h,g as f,k as y,v as m}from"./index.8f7b3fe2.js";import{a as v}from"./render.7fc09fb0.js";var x=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(a,{slots:r}){const{proxy:{$q:o}}=f(),e=s(d,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(s(h,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const i=c(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof a.styleFn=="function"){const u=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return a.styleFn(n,u)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":o.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":o.screen.height-n+"px"}}),l=c(()=>`q-page${a.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:l.value,style:i.value},v(r.default))}});const Q=Object.assign({name:"IndexPage"},{__name:"IndexPage",setup(a){return(r,o)=>(y(),m(x,{class:"flex flex-center"}))}});export{Q as default};
