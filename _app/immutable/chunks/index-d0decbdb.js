function $(){}const rt=t=>t;function $t(t,e){for(const n in e)t[n]=e[n];return t}function ot(t){return t()}function tt(){return Object.create(null)}function C(t){t.forEach(ot)}function I(t){return typeof t=="function"}function Zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function te(t,e){return z||(z=document.createElement("a")),z.href=e,t===z.href}function vt(t){return Object.keys(t).length===0}function kt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ee(t,e,n){t.$$.on_destroy.push(kt(e,n))}function ne(t,e,n,i){if(t){const s=ct(t,e,n,i);return t[0](s)}}function ct(t,e,n,i){return t[1]&&i?$t(n.ctx.slice(),t[1](i(e))):n.ctx}function ie(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function se(t,e,n,i,s,o){if(s){const r=ct(e,n,i,o);t.p(r,s)}}function re(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function oe(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ce(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function le(t){return t==null?"":t}function ae(t,e,n){return t.set(n),e}function ue(t){return t&&I(t.destroy)?t.destroy:$}const lt=typeof window<"u";let at=lt?()=>window.performance.now():()=>Date.now(),Y=lt?t=>requestAnimationFrame(t):$;const E=new Set;function ut(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&Y(ut)}function ft(t){let e;return E.size===0&&Y(ut),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let F=!1;function Et(){F=!0}function Nt(){F=!1}function Ct(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function St(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:Ct(1,s,u=>e[n[u]].claim_order,a))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<o.length&&r[c].claim_order>=o[a].claim_order;)a++;const _=a<o.length?o[a]:null;t.insertBefore(r[c],_)}}function dt(t,e){t.appendChild(e)}function _t(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=G("style");return Tt(_t(t),e),e.sheet}function Tt(t,e){return dt(t.head||t,e),e.sheet}function Mt(t,e){if(F){for(St(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){t.insertBefore(e,n||null)}function Dt(t,e,n){F&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function fe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function Rt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Z(t){return document.createTextNode(t)}function de(){return Z(" ")}function _e(){return Z("")}function et(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function he(t){return function(e){return e.preventDefault(),t.call(this,e)}}function zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function me(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:zt(t,i,e[i])}function pe(t){return t===""?null:+t}function Bt(t){return Array.from(t.childNodes)}function ht(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function mt(t,e,n,i,s=!1){ht(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Ht(t,e,n,i){return mt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ye(t,e,n){return Ht(t,e,n,G)}function Lt(t,e){return mt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Z(e),!0)}function ge(t){return Lt(t," ")}function nt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function we(t,e){const n=nt(t,"HTML_TAG_START",0),i=nt(t,"HTML_TAG_END",n);if(n===i)return new it(void 0,e);ht(t);const s=t.splice(n,i-n+1);N(s[0]),N(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new it(o,e)}function xe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function be(t,e){t.value=e==null?"":e}function $e(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ve(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function ke(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let B;function Ot(){if(B===void 0){B=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{B=!0}}return B}function Ee(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=G("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Ot();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=et(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=et(i.contentWindow,"resize",e)}),dt(t,i),()=>{(s||o&&i.contentWindow)&&o(),N(i)}}function Ne(t,e,n){t.classList[n?"add":"remove"](e)}function pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}class Pt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Rt(n.nodeName):this.e=G(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)jt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}class it extends Pt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Dt(this.t,this.n[n],e)}}function Ce(t,e){return new t(e)}const P=new Map;let q=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Wt(t,e){const n={stylesheet:At(e),rules:{}};return P.set(t,n),n}function U(t,e,n,i,s,o,r,l=0){const c=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=c){const y=e+(n-e)*o(p);a+=p*100+`%{${r(y,1-y)}}
`}const _=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${qt(_)}_${l}`,u=_t(t),{stylesheet:d,rules:h}=P.get(u)||Wt(u,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${i}ms linear ${s}ms 1 both`,q+=1,f}function yt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),q-=s,q||It())}function It(){Y(()=>{q||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&N(e)}),P.clear())})}function Se(t,e,n,i){if(!e)return $;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:o=0,duration:r=300,easing:l=rt,start:c=at()+o,end:a=c+r,tick:_=$,css:f}=n(t,{from:e,to:s},i);let u=!0,d=!1,h;function g(){f&&(h=U(t,0,1,r,o,l,f)),o||(d=!0)}function p(){f&&yt(t,h),u=!1}return ft(y=>{if(!d&&y>=c&&(d=!0),d&&y>=a&&(_(1,0),p()),!u)return!1;if(d){const v=y-c,w=0+1*l(v/r);_(w,1-w)}return!0}),g(),_(0,1),p}function Ae(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Ft(t,s)}}function Ft(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let j;function M(t){j=t}function S(){if(!j)throw new Error("Function called outside component initialization");return j}function Te(t){S().$$.on_mount.push(t)}function Me(t){S().$$.after_update.push(t)}function je(t){S().$$.on_destroy.push(t)}function De(){const t=S();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=pt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Re(t,e){return S().$$.context.set(t,e),e}function ze(t){return S().$$.context.get(t)}const T=[],st=[],L=[],V=[],gt=Promise.resolve();let X=!1;function wt(){X||(X=!0,gt.then(xt))}function Be(){return wt(),gt}function W(t){L.push(t)}function He(t){V.push(t)}const K=new Set;let H=0;function xt(){const t=j;do{for(;H<T.length;){const e=T[H];H++,M(e),Gt(e.$$)}for(M(null),T.length=0,H=0;st.length;)st.pop()();for(let e=0;e<L.length;e+=1){const n=L[e];K.has(n)||(K.add(n),n())}L.length=0}while(T.length);for(;V.length;)V.pop()();X=!1,K.clear(),M(t)}function Gt(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}let A;function Jt(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function Q(t,e,n){t.dispatchEvent(pt(`${e?"intro":"outro"}${n}`))}const O=new Set;let k;function Le(){k={r:0,c:[],p:k}}function Oe(){k.r||C(k.c),k=k.p}function bt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function Kt(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),k.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Qt={duration:0};function Pe(t,e,n,i){let s=e(t,n),o=i?0:1,r=null,l=null,c=null;function a(){c&&yt(t,c)}function _(u,d){const h=u.b-o;return d*=Math.abs(h),{a:o,b:u.b,d:h,duration:d,start:u.start,end:u.start+d,group:u.group}}function f(u){const{delay:d=0,duration:h=300,easing:g=rt,tick:p=$,css:y}=s||Qt,v={start:at()+d,b:u};u||(v.group=k,k.r+=1),r||l?l=v:(y&&(a(),c=U(t,o,u,h,d,g,y)),u&&p(0,1),r=_(v,h),W(()=>Q(t,u,"start")),ft(w=>{if(l&&w>l.start&&(r=_(l,h),l=null,Q(t,r.b,"start"),y&&(a(),c=U(t,o,r.b,r.duration,0,g,s.css))),r){if(w>=r.end)p(o=r.b,1-o),Q(t,r.b,"end"),l||(r.b?a():--r.group.r||C(r.group.c)),r=null;else if(w>=r.start){const D=w-r.start;o=r.a+r.d*g(D/r.duration),p(o,1-o)}}return!!(r||l)}))}return{run(u){I(s)?Jt().then(()=>{s=s(),f(u)}):f(u)},end(){a(),r=l=null}}}const qe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ut(t,e){Kt(t,1,1,()=>{e.delete(t.key)})}function We(t,e){t.f(),Ut(t,e)}function Ie(t,e,n,i,s,o,r,l,c,a,_,f){let u=t.length,d=o.length,h=u;const g={};for(;h--;)g[t[h].key]=h;const p=[],y=new Map,v=new Map;for(h=d;h--;){const m=f(s,o,h),x=n(m);let b=r.get(x);b?i&&b.p(m,e):(b=a(x,m),b.c()),y.set(x,p[h]=b),x in g&&v.set(x,Math.abs(h-g[x]))}const w=new Set,D=new Set;function J(m){bt(m,1),m.m(l,_),r.set(m.key,m),_=m.first,d--}for(;u&&d;){const m=p[d-1],x=t[u-1],b=m.key,R=x.key;m===x?(_=m.first,u--,d--):y.has(R)?!r.has(b)||w.has(b)?J(m):D.has(R)?u--:v.get(b)>v.get(R)?(D.add(b),J(m)):(w.add(R),u--):(c(x,r),u--)}for(;u--;){const m=t[u];y.has(m.key)||c(m,r)}for(;d;)J(p[d-1]);return p}function Fe(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ge(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Je(t){t&&t.c()}function Ke(t,e){t&&t.l(e)}function Vt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||W(()=>{const r=t.$$.on_mount.map(ot).filter(I);t.$$.on_destroy?t.$$.on_destroy.push(...r):C(r),t.$$.on_mount=[]}),o.forEach(W)}function Xt(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Yt(t,e){t.$$.dirty[0]===-1&&(T.push(t),wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qe(t,e,n,i,s,o,r,l=[-1]){const c=j;M(t);const a=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:s,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:tt(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,u,...d)=>{const h=d.length?d[0]:u;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),_&&Yt(t,f)),u}):[],a.update(),_=!0,C(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Et();const f=Bt(e.target);a.fragment&&a.fragment.l(f),f.forEach(N)}else a.fragment&&a.fragment.c();e.intro&&bt(t.$$.fragment),Vt(t,e.target,e.anchor,e.customElement),Nt(),xt()}M(c)}class Ue{$destroy(){Xt(this,1),this.$destroy=$}$on(e,n){if(!I(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!vt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{st as $,Be as A,$ as B,ne as C,se as D,re as E,ie as F,Mt as G,ee as H,I,rt as J,$t as K,me as L,Ne as M,be as N,et as O,Fe as P,C as Q,ce as R,Ue as S,oe as T,qe as U,Ie as V,Ae as W,Ft as X,Se as Y,W as Z,Pe as _,de as a,fe as a0,We as a1,he as a2,it as a3,we as a4,Ge as a5,He as a6,De as a7,ke as a8,ve as a9,ue as aa,le as ab,Ee as ac,ze as ad,Re as ae,ae as af,je as ag,pe as ah,te as ai,Dt as b,ge as c,Oe as d,_e as e,bt as f,Le as g,N as h,Qe as i,Me as j,G as k,ye as l,Bt as m,zt as n,Te as o,$e as p,Z as q,Lt as r,Zt as s,Kt as t,xe as u,Ce as v,Je as w,Ke as x,Vt as y,Xt as z};