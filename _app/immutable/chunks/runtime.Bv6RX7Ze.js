var vn=Array.isArray,pn=Array.from,hn=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,jt=Object.getOwnPropertyDescriptors,dn=Object.prototype,En=Array.prototype,Yt=Object.getPrototypeOf;const yn=()=>{};function wn(t){return typeof(t==null?void 0:t.then)=="function"}function Tn(t){return t()}function Ht(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ft=4,N=8,_t=16,w=32,J=64,x=128,H=256,d=512,A=1024,C=2048,D=4096,P=8192,Ut=16384,ct=32768,mn=65536,Bt=1<<18,et=Symbol("$state");function vt(t){return t===this.v}function Vt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function pt(t){return!Vt(t,this.v)}function Kt(t){throw new Error("effect_in_teardown")}function $t(){throw new Error("effect_in_unowned_derived")}function Gt(t){throw new Error("effect_orphan")}function Zt(){throw new Error("effect_update_depth_exceeded")}function An(){throw new Error("hydration_failed")}function gn(t){throw new Error("props_invalid_value")}function Rn(){throw new Error("state_descriptors_fixed")}function xn(){throw new Error("state_prototype_fixed")}function Wt(){throw new Error("state_unsafe_local_read")}function Xt(){throw new Error("state_unsafe_mutation")}function Q(t){return{f:0,v:t,reactions:null,equals:vt,version:0}}function In(t){return zt(Q(t))}function Sn(t){var r;const n=Q(t);return n.equals=pt,f!==null&&f.l!==null&&((r=f.l).s??(r.s=[])).push(n),n}function zt(t){return l!==null&&l.f&m&&(y===null?un([t]):y.push(t)),t}function On(t,n){return l!==null&&X()&&l.f&m&&(y===null||!y.includes(t))&&Xt(),t.equals(n)||(t.v=n,t.version=Pt(),ht(t,A),X()&&i!==null&&i.f&d&&!(i.f&w)&&(v!==null&&v.includes(t)?(h(i,A),$(i)):T===null?ln([t]):T.push(t))),n}function ht(t,n){var r=t.reactions;if(r!==null)for(var e=X(),s=r.length,o=0;o<s;o++){var u=r[o],_=u.f;_&A||!e&&u===i||(h(u,n),_&(d|x)&&(_&m?ht(u,C):$(u)))}}const kn=1,Dn=2,Nn=16,Cn=1,Pn=2,qn=4,Fn=8,bn=16,Mn=1,Ln=2,Jt="[",Qt="[!",tn="]",dt={},jn=Symbol();function Et(t){console.warn("hydration_mismatch")}let R=!1;function Yn(t){R=t}let E;function U(t){if(t===null)throw Et(),dt;return E=t}function Hn(){return U(I(E))}function Un(t){if(R){if(I(E)!==null)throw Et(),dt;E=t}}function Bn(t=1){if(R){for(var n=t,r=E;n--;)r=I(r);E=r}}function Vn(){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===tn){if(t===0)return n;t-=1}else(r===Jt||r===Qt)&&(t+=1)}var e=I(n);n.remove(),n=e}}var st,yt,wt;function Kn(){if(st===void 0){st=window;var t=Element.prototype,n=Node.prototype;yt=rt(n,"firstChild").get,wt=rt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function Tt(t=""){return document.createTextNode(t)}function Z(t){return yt.call(t)}function I(t){return wt.call(t)}function $n(t){if(!R)return Z(t);var n=Z(E);return n===null&&(n=E.appendChild(Tt())),U(n),n}function Gn(t,n){if(!R){var r=Z(t);return r instanceof Comment&&r.data===""?I(r):r}return E}function Zn(t,n=1,r=!1){let e=R?E:t;for(;n--;)e=I(e);if(!R)return e;var s=e.nodeType;if(r&&s!==3){var o=Tt();return e==null||e.before(o),U(o),o}return U(e),e}function Wn(t){t.textContent=""}function mt(t){i===null&&l===null&&Gt(),l!==null&&l.f&x&&$t(),tt&&Kt()}function ot(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&J)!==0,o=i,u={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|A,first:null,fn:n,last:null,next:null,parent:s?null:o,prev:null,teardown:null,transitions:null,version:0};if(r){var _=O;try{ut(!0),K(u),u.f|=Ut}catch(c){throw V(u),c}finally{ut(_)}}else n!==null&&$(u);var a=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null;return!a&&!s&&e&&(o!==null&&ot(u,o),l!==null&&l.f&m&&ot(u,l)),u}function Xn(t){const n=q(N,null,!1);return h(n,d),n.teardown=t,n}function zn(t){mt();var n=i!==null&&(i.f&N)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push(t)}else{var e=At(t);return e}}function Jn(t){return mt(),gt(t)}function Qn(t){const n=q(J,t,!0);return()=>{V(n)}}function At(t){return q(ft,t,!1)}function gt(t){return q(N,t,!0)}function tr(t){return gt(t)}function nr(t,n=0){return q(N|_t|n,t,!0)}function rr(t,n=!0){return q(N|w,t,!0,n)}function Rt(t){var n=t.teardown;if(n!==null){const r=tt,e=l;lt(!0),at(null);try{n.call(null)}finally{lt(r),at(e)}}}function V(t,n=!0){var r=!1;if((n||t.f&Bt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var o=e===s?null:I(e);e.remove(),e=o}r=!0}nt(t,n&&!r),L(t,0),h(t,P);var u=t.transitions;if(u!==null)for(const a of u)a.stop();Rt(t);var _=t.parent;_!==null&&t.f&w&&_.first!==null&&xt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function xt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function er(t,n){var r=[];It(t,r,!0),nn(r,()=>{V(t),n&&n()})}function nn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function It(t,n,r){if(!(t.f&D)){if(t.f^=D,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var s=e.next,o=(e.f&ct)!==0||(e.f&w)!==0;It(e,n,o?r:!1),e=s}}}function sr(t){St(t,!0)}function St(t,n){if(t.f&D){t.f^=D,j(t)&&K(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ct)!==0||(r.f&w)!==0;St(r,s?n:!1),r=e}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&o.in()}}let B=!1,W=[];function Ot(){B=!1;const t=W.slice();W=[],Ht(t)}function or(t){B||(B=!0,queueMicrotask(Ot)),W.push(t)}function rn(){B&&Ot()}function en(t){let n=m|A;i===null&&(n|=x);const r={deps:null,deriveds:null,equals:vt,f:n,first:null,fn:t,last:null,reactions:null,v:null,version:0};if(l!==null&&l.f&m){var e=l;e.deriveds===null?e.deriveds=[r]:e.deriveds.push(r)}return r}function ur(t){const n=en(t);return n.equals=pt,n}function kt(t){nt(t);var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)sn(n[r])}}function Dt(t){var n;kt(t),n=qt(t);var r=(S||t.f&x)&&t.deps!==null?C:d;h(t,r),t.equals(n)||(t.v=n,t.version=Pt())}function sn(t){kt(t),L(t,0),h(t,P),t.first=t.last=t.deps=t.reactions=t.fn=null}const Nt=0,on=1;let Y=Nt,M=!1,O=!1,tt=!1;function ut(t){O=t}function lt(t){tt=t}let g=[],k=0,l=null;function at(t){l=t}let i=null;function lr(t){i=t}let y=null;function un(t){y=t}let v=null,p=0,T=null;function ln(t){T=t}let Ct=0,S=!1,f=null;function ar(t){f=t}function Pt(){return Ct++}function X(){return f!==null&&f.l===null}function j(t){var u,_;var n=t.f;if(n&A)return!0;if(n&C){var r=t.deps,e=(n&x)!==0;if(r!==null){var s;if(n&H){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(t);t.f^=H}for(s=0;s<r.length;s++){var o=r[s];if(j(o)&&Dt(o),o.version>t.version)return!0;e&&!S&&!((_=o==null?void 0:o.reactions)!=null&&_.includes(t))&&(o.reactions??(o.reactions=[])).push(t)}}e||h(t,d)}return!1}function an(t,n,r){throw t}function qt(t){var F;var n=v,r=p,e=T,s=l,o=S,u=y;v=null,p=0,T=null,l=t.f&(w|J)?null:t,S=!O&&(t.f&x)!==0,y=null;try{var _=(0,t.fn)(),a=t.deps;if(v!==null){var c;if(L(t,p),a!==null&&p>0)for(a.length=p+v.length,c=0;c<v.length;c++)a[p+c]=v[c];else t.deps=a=v;if(!S)for(c=p;c<a.length;c++)((F=a[c]).reactions??(F.reactions=[])).push(t)}else a!==null&&p<a.length&&(L(t,p),a.length=p);return _}finally{v=n,p=r,T=e,l=s,S=o,y=u}}function fn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(h(n,C),n.f&(x|H)||(n.f^=H),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)fn(t,r[e])}function nt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;V(r,n),r=e}}function K(t){var n=t.f;if(!(n&P)){h(t,d);var r=t.ctx,e=i,s=f;i=t,f=r;try{n&_t||nt(t),Rt(t);var o=qt(t);t.teardown=typeof o=="function"?o:null,t.version=Ct}catch(u){an(u)}finally{i=e,f=s}}}function Ft(){k>1e3&&(k=0,Zt()),k++}function bt(t){var n=t.length;if(n!==0){Ft();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];if(s.first===null&&!(s.f&w))it([s]);else{var o=[];Mt(s,o),it(o)}}}finally{O=r}}}function it(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(P|D))&&j(e)&&(K(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?xt(e):e.fn=null))}}function _n(){if(M=!1,k>1001)return;const t=g;g=[],bt(t),M||(k=0)}function $(t){Y===Nt&&(M||(M=!0,queueMicrotask(_n)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&w){if(!(r&d))return;h(n,C)}}g.push(n)}function Mt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,o=(s&(P|D))===0,u=(s&w)!==0,_=(s&d)!==0,a=r.first;if(o&&(!u||!_)){if(u&&h(r,d),s&N){if(!u&&j(r)&&(K(r),a=r.first),a!==null){r=a;continue}}else if(s&ft)if(u||_){if(a!==null){r=a;continue}}else e.push(r)}var c=r.next;if(c===null){let b=r.parent;for(;b!==null;){if(t===b)break t;var F=b.next;if(F!==null){r=F;continue t}b=b.parent}}r=c}for(var G=0;G<e.length;G++)a=e[G],n.push(a),Mt(a,n)}function Lt(t){var n=Y,r=g;try{Ft();const s=[];Y=on,g=s,M=!1,bt(r);var e=t==null?void 0:t();return rn(),(g.length>0||s.length>0)&&Lt(),k=0,e}finally{Y=n,g=r}}async function ir(){await Promise.resolve(),Lt()}function fr(t){var n=t.f;if(n&P)return t.v;if(l!==null){y!==null&&y.includes(t)&&Wt();var r=l.deps;v===null&&r!==null&&r[p]===t?p++:v===null?v=[t]:v.push(t),T!==null&&i!==null&&i.f&d&&!(i.f&w)&&T.includes(t)&&(h(i,A),$(i))}if(n&m){var e=t;j(e)&&Dt(e)}return t.v}function _r(t){const n=l;try{return l=null,t()}finally{l=n}}const cn=~(A|C|d);function h(t,n){t.f=t.f&cn|n}function cr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:Q(!1)})}function vr(t){const n=f;if(n!==null){const e=n.e;if(e!==null){n.e=null;for(var r=0;r<e.length;r++)At(e[r])}f=n.p,n.m=!0}return{}}function pr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(et in t)z(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&et in r&&z(r)}}}function z(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{z(t[e],n)}catch{}const r=Yt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=jt(r);for(let s in e){const o=e[s].get;if(o)try{o.call(t)}catch{}}}}}export{Dn as $,en as A,ur as B,qn as C,pt as D,Cn as E,Fn as F,bn as G,Sn as H,Z as I,Ln as J,Tt as K,mn as L,U as M,or as N,pn as O,Pn as P,Qt as Q,Vn as R,et as S,Mn as T,jn as U,Yn as V,tn as W,sr as X,D as Y,kn as Z,Nn as _,Hn as a,It as a0,Wn as a1,nn as a2,V as a3,I as a4,cr as a5,Zn as a6,Gn as a7,vr as a8,Un as a9,$n as aa,tr as ab,hn as ac,Kn as ad,Jt as ae,dt as af,Et as ag,An as ah,Qn as ai,yn as aj,Xn as ak,X as al,wn as am,lr as an,at as ao,ar as ap,Lt as aq,ct as ar,At as as,gt as at,ir as au,In as av,Vt as aw,nr as b,rr as c,E as d,zn as e,f,_r as g,R as h,Tn as i,fr as j,pr as k,En as l,Rn as m,Bn as n,dn as o,er as p,On as q,Ht as r,Q as s,rt as t,Jn as u,i as v,xn as w,Yt as x,vn as y,gn as z};
