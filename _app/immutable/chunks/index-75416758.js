function k(){}function ut(t,e){for(const n in e)t[n]=e[n];return t}function at(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function X(t){return t()}function R(){return Object.create(null)}function S(t){t.forEach(X)}function F(t){return typeof t=="function"}function jt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function zt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ft(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Pt(t,e,n){t.$$.on_destroy.push(dt(e,n))}function Tt(t,e,n,i){if(t){const r=Y(t,e,n,i);return t[0](r)}}function Y(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function qt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)c[u]=e.dirty[u]|r[u];return c}return e.dirty|r}return e.dirty}function Dt(t,e,n,i,r,c){if(r){const s=Y(e,n,i,c);t.p(s,r)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Wt(t){return t??""}function Bt(t,e,n){return t.set(n),e}function It(t){return t&&F(t.destroy)?t.destroy:k}const Z=typeof window<"u";let Ot=Z?()=>window.performance.now():()=>Date.now(),tt=Z?t=>requestAnimationFrame(t):k;const v=new Set;function et(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&tt(et)}function Ft(t){let e;return v.size===0&&tt(et),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let P=!1;function _t(){P=!0}function ht(){P=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const d=e[l];d.claim_order!==void 0&&o.push(d)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,d=(r>0&&e[n[r]].claim_order<=l?r+1:mt(1,r,a=>e[n[a]].claim_order,l))-1;i[o]=n[d]+1;const _=d+1;n[_]=o,r=Math.max(_,r)}const c=[],s=[];let u=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);u>=o;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);c.reverse(),s.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<s.length;o++){for(;l<c.length&&s[o].claim_order>=c[l].claim_order;)l++;const d=l<c.length?c[l]:null;t.insertBefore(s[o],d)}}function yt(t,e){t.appendChild(e)}function gt(t,e){if(P){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){P&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function nt(t){t.parentNode&&t.parentNode.removeChild(t)}function Gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function it(t){return document.createElement(t)}function bt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function Jt(){return H(" ")}function Kt(){return H("")}function U(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Qt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Rt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Vt(t){return t===""?null:+t}function wt(t){return Array.from(t.childNodes)}function xt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,r=!1){xt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function st(t,e,n,i){return rt(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||c.push(u.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Xt(t,e,n){return st(t,e,n,it)}function Yt(t,e,n){return st(t,e,n,bt)}function $t(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Zt(t){return $t(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e){t.value=e??""}function ne(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ie(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function re(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let M;function vt(){if(M===void 0){M=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{M=!0}}return M}function se(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=it("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=vt();let c;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=U(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=U(i.contentWindow,"resize",e)}),yt(t,i),()=>{(r||c&&i.contentWindow)&&c(),nt(i)}}function ce(t,e,n){t.classList[n?"add":"remove"](e)}function kt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function oe(t,e){return new t(e)}let E;function g(t){E=t}function w(){if(!E)throw new Error("Function called outside component initialization");return E}function le(t){w().$$.on_mount.push(t)}function ue(t){w().$$.after_update.push(t)}function ae(t){w().$$.on_destroy.push(t)}function fe(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=kt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}function de(t,e){return w().$$.context.set(t,e),e}function _e(t){return w().$$.context.get(t)}const $=[],V=[],j=[],B=[],ct=Promise.resolve();let I=!1;function ot(){I||(I=!0,ct.then(G))}function he(){return ot(),ct}function O(t){j.push(t)}function me(t){B.push(t)}const W=new Set;let x=0;function G(){if(x!==0)return;const t=E;do{try{for(;x<$.length;){const e=$[x];x++,g(e),Et(e.$$)}}catch(e){throw $.length=0,x=0,e}for(g(null),$.length=0,x=0;V.length;)V.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];W.has(n)||(W.add(n),n())}j.length=0}while($.length);for(;B.length;)B.pop()();I=!1,W.clear(),g(t)}function Et(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const z=new Set;let b;function St(){b={r:0,c:[],p:b}}function Ct(){b.r||S(b.c),b=b.p}function J(t,e){t&&t.i&&(z.delete(t),t.i(e))}function lt(t,e,n,i){if(t&&t.o){if(z.has(t))return;z.add(t),b.c.push(()=>{z.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function pe(t,e){const n=e.token={};function i(r,c,s,u){if(e.token!==n)return;e.resolved=u;let o=e.ctx;s!==void 0&&(o=o.slice(),o[s]=u);const l=r&&(e.current=r)(o);let d=!1;e.block&&(e.blocks?e.blocks.forEach((_,a)=>{a!==c&&_&&(St(),lt(_,1,1,()=>{e.blocks[a]===_&&(e.blocks[a]=null)}),Ct())}):e.block.d(1),l.c(),J(l,1),l.m(e.mount(),e.anchor),d=!0),e.block=l,e.blocks&&(e.blocks[c]=l),d&&G()}if(at(t)){const r=w();if(t.then(c=>{g(r),i(e.then,1,e.value,c),g(null)},c=>{if(g(r),i(e.catch,2,e.error,c),g(null),!e.hasCatch)throw c}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function ye(t,e,n){const i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}const ge=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function be(t,e){lt(t,1,1,()=>{e.delete(t.key)})}function we(t,e,n,i,r,c,s,u,o,l,d,_){let a=t.length,m=c.length,h=a;const T={};for(;h--;)T[t[h].key]=h;const C=[],q=new Map,D=new Map;for(h=m;h--;){const f=_(r,c,h),p=n(f);let y=s.get(p);y?i&&y.p(f,e):(y=l(p,f),y.c()),q.set(p,C[h]=y),p in T&&D.set(p,Math.abs(h-T[p]))}const K=new Set,Q=new Set;function L(f){J(f,1),f.m(u,d),s.set(f.key,f),d=f.first,m--}for(;a&&m;){const f=C[m-1],p=t[a-1],y=f.key,N=p.key;f===p?(d=f.first,a--,m--):q.has(N)?!s.has(y)||K.has(y)?L(f):Q.has(N)?a--:D.get(y)>D.get(N)?(Q.add(y),L(f)):(K.add(N),a--):(o(p,s),a--)}for(;a--;){const f=t[a];q.has(f.key)||o(f,s)}for(;m;)L(C[m-1]);return C}function xe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function $e(t){t&&t.c()}function ve(t,e){t&&t.l(e)}function Nt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||O(()=>{const s=t.$$.on_mount.map(X).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...s):S(s),t.$$.on_mount=[]}),c.forEach(O)}function At(t,e){const n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mt(t,e){t.$$.dirty[0]===-1&&($.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ke(t,e,n,i,r,c,s,u=[-1]){const o=E;g(t);const l=t.$$={fragment:null,ctx:[],props:c,update:k,not_equal:r,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:R(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};s&&s(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(_,a,...m)=>{const h=m.length?m[0]:a;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),d&&Mt(t,_)),a}):[],l.update(),d=!0,S(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){_t();const _=wt(e.target);l.fragment&&l.fragment.l(_),_.forEach(nt)}else l.fragment&&l.fragment.c();e.intro&&J(t.$$.fragment),Nt(t,e.target,e.anchor,e.customElement),ht(),G()}g(o)}class Ee{$destroy(){At(this,1),this.$destroy=k}$on(e,n){if(!F(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{_e as $,At as A,he as B,k as C,dt as D,S as E,F,Tt as G,Dt as H,Lt as I,qt as J,gt as K,Pt as L,Gt as M,re as N,O,ie as P,U as Q,bt as R,Ee as S,Yt as T,ce as U,It as V,ee as W,xe as X,me as Y,Wt as Z,se as _,Jt as a,de as a0,fe as a1,Ot as a2,Ft as a3,Qt as a4,ge as a5,Rt as a6,Bt as a7,ae as a8,we as a9,be as aa,Vt as ab,zt as ac,pe as ad,ye as ae,Ht as b,Zt as c,Ct as d,Kt as e,J as f,St as g,nt as h,ke as i,ue as j,it as k,Xt as l,wt as m,Ut as n,le as o,ne as p,H as q,$t as r,jt as s,lt as t,te as u,V as v,oe as w,$e as x,ve as y,Nt as z};
