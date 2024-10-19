import{a as u,c as V,h as v,g as j}from"./index.135e7b8b.js";import{h as D,b}from"./render.f1930b0f.js";const Q={xs:18,sm:24,md:32,lg:38,xl:46},H={size:String};function T(e,r=Q){return u(()=>e.size!==void 0?{fontSize:e.size in r?`${r[e.size]}px`:e.size}:null)}const L="0 0 24 24",O=e=>e,S=e=>`ionicons ${e}`,z={"mdi-":e=>`mdi ${e}`,"icon-":O,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":S,"ion-ios":S,"ion-logo":S,"iconfont ":O,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},I={o_:"-outlined",r_:"-round",s_:"-sharp"},q={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},N=new RegExp("^("+Object.keys(z).join("|")+")"),U=new RegExp("^("+Object.keys(I).join("|")+")"),_=new RegExp("^("+Object.keys(q).join("|")+")"),G=/^[Mm]\s?[-+]?\.?\d/,J=/^img:/,W=/^svguse:/,X=/^ion-/,Y=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var ie=V({name:"QIcon",props:{...H,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:r}){const{proxy:{$q:l}}=j(),n=T(e),c=u(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=u(()=>{let a,t=e.name;if(t==="none"||!t)return{none:!0};if(l.iconMapFn!==null){const s=l.iconMapFn(t);if(s!==void 0)if(s.icon!==void 0){if(t=s.icon,t==="none"||!t)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(G.test(t)===!0){const[s,h=L]=t.split("|");return{svg:!0,viewBox:h,nodes:s.split("&&").map(R=>{const[$,x,k]=R.split("@@");return v("path",{style:x,d:$,transform:k})})}}if(J.test(t)===!0)return{img:!0,src:t.substring(4)};if(W.test(t)===!0){const[s,h=L]=t.split("|");return{svguse:!0,src:s.substring(7),viewBox:h}}let p=" ";const g=t.match(N);if(g!==null)a=z[g[1]](t);else if(Y.test(t)===!0)a=t;else if(X.test(t)===!0)a=`ionicons ion-${l.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(_.test(t)===!0){a="notranslate material-symbols";const s=t.match(_);s!==null&&(t=t.substring(6),a+=q[s[1]]),p=t}else{a="notranslate material-icons";const s=t.match(U);s!==null&&(t=t.substring(2),a+=I[s[1]]),p=t}return{cls:a,content:p}});return()=>{const a={class:c.value,style:n.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?v(e.tag,a,D(r.default)):o.value.img===!0?v(e.tag,a,b(r.default,[v("img",{src:o.value.src})])):o.value.svg===!0?v(e.tag,a,b(r.default,[v("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?v(e.tag,a,b(r.default,[v("svg",{viewBox:o.value.viewBox},[v("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(a.class+=" "+o.value.cls),v(e.tag,a,b(r.default,[o.value.content])))}}});function Z(e){return e.appContext.config.globalProperties.$router!==void 0}function w(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function C(e,r){return(e.aliasOf||e)===(r.aliasOf||r)}function ee(e,r){for(const l in r){const n=r[l],c=e[l];if(typeof n=="string"){if(n!==c)return!1}else if(Array.isArray(c)===!1||c.length!==n.length||n.some((o,a)=>o!==c[a]))return!1}return!0}function M(e,r){return Array.isArray(r)===!0?e.length===r.length&&e.every((l,n)=>l===r[n]):e.length===1&&e[0]===r}function te(e,r){return Array.isArray(e)===!0?M(e,r):Array.isArray(r)===!0?M(r,e):e===r}function ne(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(const l in e)if(te(e[l],r[l])===!1)return!1;return!0}const re={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},oe={...re,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function ue({fallbackTag:e,useDisableForRouterLinkProps:r=!0}={}){const l=j(),{props:n,proxy:c,emit:o}=l,a=Z(l),t=u(()=>n.disable!==!0&&n.href!==void 0),p=r===!0?u(()=>a===!0&&n.disable!==!0&&t.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):u(()=>a===!0&&t.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),g=u(()=>p.value===!0?E(n.to):null),s=u(()=>g.value!==null),h=u(()=>t.value===!0||s.value===!0),R=u(()=>n.type==="a"||h.value===!0?"a":n.tag||e||"div"),$=u(()=>t.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:g.value.href,target:n.target}:{}),x=u(()=>{if(s.value===!1)return-1;const{matched:i}=g.value,{length:f}=i,d=i[f-1];if(d===void 0)return-1;const m=c.$route.matched;if(m.length===0)return-1;const y=m.findIndex(C.bind(null,d));if(y!==-1)return y;const B=w(i[f-2]);return f>1&&w(d)===B&&m[m.length-1].path!==B?m.findIndex(C.bind(null,i[f-2])):y}),k=u(()=>s.value===!0&&x.value!==-1&&ee(c.$route.params,g.value.params)),A=u(()=>k.value===!0&&x.value===c.$route.matched.length-1&&ne(c.$route.params,g.value.params)),F=u(()=>s.value===!0?A.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function E(i){try{return c.$router.resolve(i)}catch{}return null}function P(i,{returnRouterError:f,to:d=n.to,replace:m=n.replace}={}){if(n.disable===!0)return i.preventDefault(),Promise.resolve(!1);if(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey||i.button!==void 0&&i.button!==0||n.target==="_blank")return Promise.resolve(!1);i.preventDefault();const y=c.$router[m===!0?"replace":"push"](d);return f===!0?y:y.then(()=>{}).catch(()=>{})}function K(i){if(s.value===!0){const f=d=>P(i,d);o("click",i,f),i.defaultPrevented!==!0&&f()}else o("click",i)}return{hasRouterLink:s,hasHrefLink:t,hasLink:h,linkTag:R,resolvedLink:g,linkIsActive:k,linkIsExactActive:A,linkClass:F,linkAttrs:$,getLink:E,navigateToRouterLink:P,navigateOnClick:K}}export{ie as Q,ue as a,Q as b,H as c,re as d,T as e,oe as u};
