import{S as rt,i as ot,s as st,a as it,e as F,c as lt,b as K,g as pe,t as V,d as he,f as B,h as J,j as ct,o as Le,k as ft,l as ut,m as dt,n as Ee,p as q,q as pt,r as ht,u as mt,v as H,w as W,x as Ne,y as Y,z as X,A as le}from"./chunks/index-5cbadba0.js";import{S as nt,I as C,g as We,f as Ye,a as ke,b as ce,s as G,i as Xe,c as de,P as Ze,d as gt,e as _t,h as wt}from"./chunks/singletons-f31f1661.js";import{_ as Se}from"./chunks/preload-helper-41c905a7.js";function yt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function bt(a){return a.split("%25").map(decodeURI).join("%25")}function vt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(a,e){const n=new URL(a);for(const i of Et){let s=n[i];Object.defineProperty(n,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return St(n),n}function St(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function Ot(a){return a.replace(/\/$/,"")+Rt}function It(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ee.delete(Ue(a)),me(a,e));const ee=new Map;function $t(a,e){const n=Ue(a,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:s,...m}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ee.set(n,{body:s,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,m))}return me(a,e)}function Lt(a,e,n){if(ee.size>0){const i=Ue(a,n),s=ee.get(i);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);ee.delete(i)}}return me(e,n)}function Ue(a,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${It(e.body)}"]`),i}const Pt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function jt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Nt(a).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const m=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(m)return e.push({name:m[1],matcher:m[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((h,g)=>{if(g%2){if(h.startsWith("x+"))return Re(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return Re(String.fromCharCode(...h.slice(2).split("-").map(P=>parseInt(P,16))));const w=Pt.exec(h);if(!w)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,S,U,T]=w;return e.push({name:U,matcher:T,optional:!!v,rest:!!S,chained:S?g===1&&t[0]==="":!1}),S?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return Re(h)}).join("")}).join("")}/?$`),params:e}}function At(a){return!/^\([^)]+\)$/.test(a)}function Nt(a){return a.slice(1).split("/").filter(At)}function Ut(a,e,n){const i={},s=a.slice(1);let m="";for(let t=0;t<e.length;t+=1){const f=e[t];let h=s[t];if(f.chained&&f.rest&&m&&(h=h?m+"/"+h:m),m="",h===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](h)){if(f.optional&&f.chained){let g=s.indexOf(void 0,t);if(g===-1){const w=e[t+1];if((w==null?void 0:w.rest)&&w.chained)m=h;else return}for(;g>=t;)s[g]=s[g-1],g-=1;continue}return}i[f.name]=h}}if(!m)return i}function Re(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Tt(a,e,n,i){const s=new Set(e);return Object.entries(n).map(([f,[h,g,w]])=>{const{pattern:v,params:S}=jt(f),U={id:f,exec:T=>{const P=v.exec(T);if(P)return Ut(P,S,i)},errors:[1,...w||[]].map(T=>a[T]),layouts:[0,...g||[]].map(t),leaf:m(h)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function m(f){const h=f<0;return h&&(f=~f),[h,a[f]]}function t(f){return f===void 0?f:[s.has(f),a[f]]}}function Dt(a){let e,n,i;var s=a[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=H(s,m(a))),{c(){e&&W(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,f){e&&Y(e,t,f),K(t,n,f),i=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&2&&(h.form=t[1]),s!==(s=t[0][0])){if(e){pe();const g=e;V(g.$$.fragment,1,0,()=>{X(g,1)}),he()}s?(e=H(s,m(t)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&X(e,t)}}}function qt(a){let e,n,i;var s=a[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return s&&(e=H(s,m(a))),{c(){e&&W(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,f){e&&Y(e,t,f),K(t,n,f),i=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&523&&(h.$$scope={dirty:f,ctx:t}),s!==(s=t[0][0])){if(e){pe();const g=e;V(g.$$.fragment,1,0,()=>{X(g,1)}),he()}s?(e=H(s,m(t)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&X(e,t)}}}function Ct(a){let e,n,i;var s=a[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=H(s,m(a))),{c(){e&&W(e.$$.fragment),n=F()},l(t){e&&Ne(e.$$.fragment,t),n=F()},m(t,f){e&&Y(e,t,f),K(t,n,f),i=!0},p(t,f){const h={};if(f&8&&(h.data=t[3]),f&2&&(h.form=t[1]),s!==(s=t[0][1])){if(e){pe();const g=e;V(g.$$.fragment,1,0,()=>{X(g,1)}),he()}s?(e=H(s,m(t)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&X(e,t)}}}function Qe(a){let e,n=a[5]&&xe(a);return{c(){e=ft("div"),n&&n.c(),this.h()},l(i){e=ut(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=dt(e);n&&n.l(s),s.forEach(J),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(i,s){K(i,e,s),n&&n.m(e,null)},p(i,s){i[5]?n?n.p(i,s):(n=xe(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&J(e),n&&n.d()}}}function xe(a){let e;return{c(){e=pt(a[6])},l(n){e=ht(n,a[6])},m(n,i){K(n,e,i)},p(n,i){i&64&&mt(e,n[6])},d(n){n&&J(e)}}}function Ft(a){let e,n,i,s,m;const t=[qt,Dt],f=[];function h(w,v){return w[0][1]?0:1}e=h(a),n=f[e]=t[e](a);let g=a[4]&&Qe(a);return{c(){n.c(),i=it(),g&&g.c(),s=F()},l(w){n.l(w),i=lt(w),g&&g.l(w),s=F()},m(w,v){f[e].m(w,v),K(w,i,v),g&&g.m(w,v),K(w,s,v),m=!0},p(w,[v]){let S=e;e=h(w),e===S?f[e].p(w,v):(pe(),V(f[S],1,1,()=>{f[S]=null}),he(),n=f[e],n?n.p(w,v):(n=f[e]=t[e](w),n.c()),B(n,1),n.m(i.parentNode,i)),w[4]?g?g.p(w,v):(g=Qe(w),g.c(),g.m(s.parentNode,s)):g&&(g.d(1),g=null)},i(w){m||(B(n),m=!0)},o(w){V(n),m=!1},d(w){f[e].d(w),w&&J(i),g&&g.d(w),w&&J(s)}}}function Vt(a,e,n){let{stores:i}=e,{page:s}=e,{components:m}=e,{form:t}=e,{data_0:f=null}=e,{data_1:h=null}=e;ct(i.page.notify);let g=!1,w=!1,v=null;return Le(()=>{const S=i.page.subscribe(()=>{g&&(n(5,w=!0),n(6,v=document.title||"untitled page"))});return n(4,g=!0),S}),a.$$set=S=>{"stores"in S&&n(7,i=S.stores),"page"in S&&n(8,s=S.page),"components"in S&&n(0,m=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,f=S.data_0),"data_1"in S&&n(3,h=S.data_1)},a.$$.update=()=>{a.$$.dirty&384&&i.page.set(s)},[m,t,f,h,g,w,v,i,s]}class Bt extends rt{constructor(e){super(),ot(this,e,Vt,Ft,st,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Jt={},ge=[()=>Se(()=>import("./chunks/0-8c3f9aed.js"),["./chunks/0-8c3f9aed.js","./components/layout.svelte-e9f0b961.js","./chunks/index-5cbadba0.js"],import.meta.url),()=>Se(()=>import("./chunks/1-30f21a4c.js"),["./chunks/1-30f21a4c.js","./components/error.svelte-0e95dec4.js","./chunks/index-5cbadba0.js","./chunks/singletons-f31f1661.js","./chunks/index-189e0129.js"],import.meta.url),()=>Se(()=>import("./chunks/2-14c96dc2.js"),["./chunks/2-14c96dc2.js","./chunks/_page-7e4796dc.js","./chunks/_page-d4b92023.js","./chunks/preload-helper-41c905a7.js","./chunks/index-5cbadba0.js","./chunks/index-189e0129.js","./assets/_page-07bf5adb.css"],import.meta.url)],Mt=[],Gt={"/":[2]},Kt={handleError:({error:a})=>{console.error(a)}};class Pe{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class et{constructor(e,n){this.status=e,this.location=n}}async function zt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([i,s])=>[i,await s])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ht=-1,Wt=-2,Yt=-3,Xt=-4,Zt=-5,Qt=-6;function xt(a){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function i(s,m=!1){if(s===Ht)return;if(s===Yt)return NaN;if(s===Xt)return 1/0;if(s===Zt)return-1/0;if(s===Qt)return-0;if(m)throw new Error("Invalid input");if(s in n)return n[s];const t=e[s];if(!t||typeof t!="object")n[s]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[s]=new Date(t[1]);break;case"Set":const h=new Set;n[s]=h;for(let v=1;v<t.length;v+=1)h.add(i(t[v]));break;case"Map":const g=new Map;n[s]=g;for(let v=1;v<t.length;v+=2)g.set(i(t[v]),i(t[v+1]));break;case"RegExp":n[s]=new RegExp(t[1],t[2]);break;case"Object":n[s]=Object(t[1]);break;case"BigInt":n[s]=BigInt(t[1]);break;case"null":const w=Object.create(null);n[s]=w;for(let v=1;v<t.length;v+=2)w[t[v]]=i(t[v+1]);break}else{const f=new Array(t.length);n[s]=f;for(let h=0;h<t.length;h+=1){const g=t[h];g!==Wt&&(f[h]=i(g))}}else{const f={};n[s]=f;for(const h in t){const g=t[h];f[h]=i(g)}}return n[s]}return i(0)}const Oe=Tt(ge,Mt,Gt,Jt),je=ge[0],Ae=ge[1];je();Ae();let te={};try{te=JSON.parse(sessionStorage[nt])}catch{}function Ie(a){te[a]=de()}function en({target:a,base:e}){var Ke;const n=document.documentElement,i=[];let s=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,h=!1,g=!0,w=!1,v=!1,S=!1,U=!1,T,P=(Ke=history.state)==null?void 0:Ke[C];P||(P=Date.now(),history.replaceState({...history.state,[C]:P},"",location.href));const _e=te[P];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let M,Te,ne;async function De(){ne=ne||Promise.resolve(),await ne,ne=null;const r=new URL(location.href),o=oe(r,!0);s=null,await Ce(o,r,[])}async function we(r,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:d={},invalidateAll:u=!1},p,b){return typeof r=="string"&&(r=new URL(r,We(document))),se({url:r,scroll:o?de():null,keepfocus:l,redirect_chain:p,details:{state:d,replaceState:c},nav_token:b,accepted:()=>{u&&(U=!0)},blocked:()=>{},type:"goto"})}async function qe(r){const o=oe(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return s={id:o.id,promise:Be(o).then(c=>(c.type==="loaded"&&c.state.error&&(s=null),c))},s.promise}async function ae(...r){const c=Oe.filter(l=>r.some(d=>l.exec(d))).map(l=>Promise.all([...l.layouts,l.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(c)}async function Ce(r,o,c,l,d={},u){var b,y;Te=d;let p=r&&await Be(r);if(p||(p=await Ge(o,{id:null},await x(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,Te!==d)return!1;if(p.type==="redirect")if(c.length>10||c.includes(o.pathname))p=await re({status:500,error:await x(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return we(new URL(p.location,o).href,{},[...c,o.pathname],d),!1;else((y=(b=p.props)==null?void 0:b.page)==null?void 0:y.status)>=400&&await G.updated.check()&&await ie(o);if(i.length=0,U=!1,w=!0,l&&l.details){const{details:_}=l,O=_.replaceState?0:1;_.state[C]=P+=O,history[_.replaceState?"replaceState":"pushState"](_.state,"",o)}if(s=null,h){t=p.state,p.props.page&&(p.props.page.url=o);const _=ue();T.$set(p.props),_()}else Fe(p);if(l){const{scroll:_,keepfocus:O}=l;if(O||$e(),await le(),g){const I=o.hash&&document.getElementById(o.hash.slice(1));_?scrollTo(_.x,_.y):I?I.scrollIntoView():scrollTo(0,0)}}else await le();g=!0,p.props.page&&(M=p.props.page),u&&u(),w=!1}function Fe(r){var d;t=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),M=r.props.page;const c=ue();T=new Bt({target:a,props:{...r.props,stores:G},hydrate:!0}),c();const l={from:null,to:fe("to",{params:t.params,route:{id:((d=t.route)==null?void 0:d.id)??null},url:new URL(location.href)}),willUnload:!1,type:"enter"};m.after_navigate.forEach(u=>u(l)),h=!0}async function Z({url:r,params:o,branch:c,status:l,error:d,route:u,form:p}){const b=c.filter(Boolean);let y="never";for(const R of c)(R==null?void 0:R.slash)!==void 0&&(y=R.slash);r.pathname=yt(r.pathname,y),r.search=r.search;const _={type:"loaded",state:{url:r,params:o,branch:c,error:d,route:u},props:{components:b.map(R=>R.node.component)}};p!==void 0&&(_.props.form=p);let O={},I=!M;for(let R=0;R<b.length;R+=1){const E=b[R];O={...O,...E.data},(I||!t.branch.some(j=>j===E))&&(_.props[`data_${R}`]=O,I=I||Object.keys(E.data??{}).length>0)}if(I||(I=Object.keys(M.data).length!==Object.keys(O).length),!t.url||r.href!==t.url.href||t.error!==d||p!==void 0||I){_.props.page={error:d,params:o,route:u,status:l,url:new URL(r),form:p??null,data:I?O:M.data},Object.defineProperty(_.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const R=(E,j)=>{Object.defineProperty(_.props.page,E,{get:()=>{throw new Error(`$page.${E} has been replaced by $page.url.${j}`)}})};R("origin","origin"),R("path","pathname"),R("query","searchParams")}return _}async function ye({loader:r,parent:o,url:c,params:l,route:d,server_data_node:u}){var _,O,I;let p=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await r();if((_=y.shared)!=null&&_.load){let D=function(...E){for(const j of E){const{href:N}=new URL(j,c);b.dependencies.add(N)}};const R={route:{get id(){return b.route=!0,d.id}},params:new Proxy(l,{get:(E,j)=>(b.params.add(j),E[j])}),data:(u==null?void 0:u.data)??null,url:kt(c,()=>{b.url=!0}),async fetch(E,j){let N;E instanceof Request?(N=E.url,j={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...j}):N=E;const k=new URL(N,c).href;return D(k),h?Lt(N,k,j):$t(N,j)},setHeaders:()=>{},depends:D,parent(){return b.parent=!0,o()}};Object.defineProperties(R,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),p=await y.shared.load.call(null,R)??null,p=p?await zt(p):null}return{node:y,loader:r,server:u,shared:(O=y.shared)!=null&&O.load?{type:"data",data:p,uses:b}:null,data:p??(u==null?void 0:u.data)??null,slash:((I=y.shared)==null?void 0:I.trailingSlash)??(u==null?void 0:u.slash)}}function Ve(r,o,c,l,d){if(U)return!0;if(!l)return!1;if(l.parent&&r||l.route&&o||l.url&&c)return!0;for(const u of l.params)if(d[u]!==t.params[u])return!0;for(const u of l.dependencies)if(i.some(p=>p(new URL(u))))return!0;return!1}function be(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Be({id:r,invalidating:o,url:c,params:l,route:d}){if((s==null?void 0:s.id)===r)return s.promise;const{errors:u,layouts:p,leaf:b}=d,y=[...p,b];u.forEach(k=>k==null?void 0:k().catch(()=>{})),y.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let _=null;const O=t.url?r!==t.url.pathname+t.url.search:!1,I=t.route?r!==t.route.id:!1,D=y.reduce((k,L,A)=>{var Q;const $=t.branch[A],z=!!(L!=null&&L[0])&&(($==null?void 0:$.loader)!==L[1]||Ve(k.some(Boolean),I,O,(Q=$.server)==null?void 0:Q.uses,l));return k.push(z),k},[]);if(D.some(Boolean)){try{_=await tt(c,D)}catch(k){return re({status:500,error:await x(k,{url:c,params:l,route:{id:d.id}}),url:c,route:d})}if(_.type==="redirect")return _}const R=_==null?void 0:_.nodes;let E=!1;const j=y.map(async(k,L)=>{var Q;if(!k)return;const A=t.branch[L],$=R==null?void 0:R[L];if((!$||$.type==="skip")&&k[1]===(A==null?void 0:A.loader)&&!Ve(E,I,O,(Q=A.shared)==null?void 0:Q.uses,l))return A;if(E=!0,($==null?void 0:$.type)==="error")throw $;return ye({loader:k[1],url:c,params:l,route:d,parent:async()=>{var He;const ze={};for(let ve=0;ve<L;ve+=1)Object.assign(ze,(He=await j[ve])==null?void 0:He.data);return ze},server_data_node:be($===void 0&&k[0]?{type:"skip"}:$??null,A==null?void 0:A.server)})});for(const k of j)k.catch(()=>{});const N=[];for(let k=0;k<y.length;k+=1)if(y[k])try{N.push(await j[k])}catch(L){if(L instanceof et)return{type:"redirect",location:L.location};let A=500,$;R!=null&&R.includes(L)?(A=L.status??A,$=L.error):L instanceof Pe?(A=L.status,$=L.body):$=await x(L,{params:l,url:c,route:{id:d.id}});const z=await Je(k,N,u);return z?await Z({url:c,params:l,branch:N.slice(0,z.idx).concat(z.node),status:A,error:$,route:d}):await Ge(c,{id:d.id},$,A)}else N.push(void 0);return await Z({url:c,params:l,branch:N,status:200,error:null,route:d,form:o?void 0:null})}async function Je(r,o,c){for(;r--;)if(c[r]){let l=r;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,shared:null}}}catch{continue}}}async function re({status:r,error:o,url:c,route:l}){const d={},u=await je();let p=null;if(u.server)try{const _=await tt(c,[!0]);if(_.type!=="data"||_.nodes[0]&&_.nodes[0].type!=="data")throw 0;p=_.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ie(c)}const b=await ye({loader:je,url:c,params:d,route:l,parent:()=>Promise.resolve({}),server_data_node:be(p)}),y={node:await Ae(),loader:Ae,shared:null,server:null,data:null};return await Z({url:c,params:d,branch:[b,y],status:r,error:o,route:null})}function oe(r,o){if(Xe(r,e))return;const c=bt(r.pathname.slice(e.length)||"/");for(const l of Oe){const d=l.exec(c);if(d)return{id:r.pathname+r.search,invalidating:o,route:l,params:vt(d),url:r}}}function Me({url:r,type:o,intent:c,delta:l}){var b,y;let d=!1;const u={from:fe("from",{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url}),to:fe("to",{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:r}),willUnload:!c,type:o};l!==void 0&&(u.delta=l);const p={...u,cancel:()=>{d=!0}};return v||m.before_navigate.forEach(_=>_(p)),d?null:u}async function se({url:r,scroll:o,keepfocus:c,redirect_chain:l,details:d,type:u,delta:p,nav_token:b,accepted:y,blocked:_}){const O=oe(r,!1),I=Me({url:r,type:u,delta:p,intent:O});if(!I){_();return}Ie(P),y(),v=!0,h&&G.navigating.set(I),await Ce(O,r,l,{scroll:o,keepfocus:c,details:d},b,()=>{v=!1,m.after_navigate.forEach(D=>D(I)),G.navigating.set(null)})}async function Ge(r,o,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await re({status:l,error:c,url:r,route:o}):await ie(r)}function ie(r){return location.href=r.href,new Promise(()=>{})}function at(){let r;n.addEventListener("mousemove",u=>{const p=u.target;clearTimeout(r),r=setTimeout(()=>{l(p,2)},20)});function o(u){l(u.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(u=>{for(const p of u)p.isIntersecting&&(ae(new URL(p.target.href).pathname),c.unobserve(p.target))},{threshold:0});function l(u,p){const b=Ye(u,n);if(!b)return;const{url:y,external:_}=ke(b,e);if(_)return;const O=ce(b);O.reload||(p<=O.preload_data?qe(y):p<=O.preload_code&&ae(y.pathname))}function d(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:p,external:b}=ke(u,e);if(b)continue;const y=ce(u);y.reload||(y.preload_code===Ze.viewport&&c.observe(u),y.preload_code===Ze.eager&&ae(p.pathname))}}m.after_navigate.push(d),d()}return{after_navigate:r=>{Le(()=>(m.after_navigate.push(r),()=>{const o=m.after_navigate.indexOf(r);m.after_navigate.splice(o,1)}))},before_navigate:r=>{Le(()=>(m.before_navigate.push(r),()=>{const o=m.before_navigate.indexOf(r);m.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(w||!h)&&(g=!1)},goto:(r,o={})=>{if("keepfocus"in o&&!("keepFocus"in o))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in o&&!("noScroll"in o))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return we(r,o,[])},invalidate:r=>{if(r===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof r=="function")i.push(r);else{const{href:o}=new URL(r,location.href);i.push(c=>c.href===o)}return De()},invalidateAll:()=>(U=!0,De()),preload_data:async r=>{const o=new URL(r,We(document));await qe(o)},preload_code:ae,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const d=await Je(t.branch.length,c,l.errors);if(d){const u=await Z({url:o,params:t.params,branch:c.slice(0,d.idx).concat(d.node),status:500,error:r.error,route:l});t=u.state;const p=ue();T.$set(u.props),p(),le().then($e)}}else if(r.type==="redirect")we(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...M,form:r.data,status:r.status}},c=ue();T.$set(o),c(),r.type==="success"&&le().then($e)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!v){const d={from:fe("from",{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};m.before_navigate.forEach(u=>u(d))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ie(P);try{sessionStorage[nt]=JSON.stringify(te)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||at(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=Ye(o.composedPath()[0],n);if(!c)return;const{url:l,external:d,has:u}=ke(c,e),p=ce(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||u.download)return;if(d||p.reload){Me({url:l,type:"link"})||o.preventDefault(),v=!0;return}const[y,_]=l.href.split("#");if(_!==void 0&&y===location.href.split("#")[0]){S=!0,Ie(P),t.url=l,G.page.set({...M,url:l}),G.page.notify();return}se({url:l,scroll:p.noscroll?de():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var y;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const u=new URL(((y=o.submitter)==null?void 0:y.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(Xe(u,e))return;const{noscroll:p,reload:b}=ce(o.target);b||(o.preventDefault(),o.stopPropagation(),u.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:u,scroll:p?de():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[C]){if(o.state[C]===P)return;const l=o.state[C]-P;se({url:new URL(location.href),scroll:te[o.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=o.state[C]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[C]:++P},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&G.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:c,params:l,route:d,data:u,form:p})=>{f=!0;const b=new URL(location.href);({params:l={},route:d={id:null}}=oe(b,!1)||{});let y;try{const _=c.map(async(O,I)=>{const D=u[I];return ye({loader:ge[O],url:b,params:l,route:d,parent:async()=>{const R={};for(let E=0;E<I;E+=1)Object.assign(R,(await _[E]).data);return R},server_data_node:be(D)})});y=await Z({url:b,params:l,branch:await Promise.all(_),status:r,error:o,form:p,route:Oe.find(({id:O})=>O===d.id)??null})}catch(_){if(_ instanceof et){await ie(new URL(_.location,location.href));return}y=await re({status:_ instanceof Pe?_.status:500,error:await x(_,{url:b,params:l,route:d}),url:b,route:d})}Fe(y)}}}async function tt(a,e){var m;const n=new URL(a);n.pathname=Ot(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await me(n.href),s=await i.json();if(!i.ok)throw new Error(s);return(m=s.nodes)==null||m.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=xt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function x(a,e){return a instanceof Pe?a.body:Kt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}const tn=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function fe(a,e){for(const n of tn)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${a}.${n} should now be ${a}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${a}.routeId should now be ${a}.route.id`)},enumerable:!1}),e}function ue(){return()=>{}}function $e(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function on({env:a,hydrate:e,paths:n,target:i,version:s}){gt(n),wt(s);const m=en({target:i,base:n.base});_t({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{on as start};
