import{h as F,an as q,at as R,au as j,ao as L,av as z,v as B,aw as M,O as P,aj as T,ax as U,ay as G,g as K}from"./runtime.CwBQmc7F.js";import{a as D}from"./render.vRBGU0cb.js";function ta(a,t){var s=a.__className,r=H(t);F&&a.className===r?a.__className=r:(s!==r||F&&a.className!==r)&&(t==null?a.removeAttribute("class"):a.className=r,a.__className=r)}function H(a){return a??""}const J=requestAnimationFrame,Q=()=>performance.now(),h={tick:a=>J(a),now:()=>Q(),tasks:new Set};function C(a){h.tasks.forEach(t=>{t.c(a)||(h.tasks.delete(t),t.f())}),h.tasks.size!==0&&h.tick(C)}function V(a){let t;return h.tasks.size===0&&h.tick(C),{promise:new Promise(s=>{h.tasks.add(t={c:a,f:s})}),abort(){h.tasks.delete(t)}}}function A(a,t){a.dispatchEvent(new CustomEvent(t))}function W(a){const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function I(a){const t={},s=a.split(";");for(const r of s){const[i,v]=r.split(":");if(!i||v===void 0)break;const u=W(i.trim());t[u]=v.trim()}return t}const X=a=>a;function ra(a,t,s,r){var i=(a&z)!==0,v=(a&U)!==0,u=i&&v,m=(a&G)!==0,N=u?"both":i?"in":"out",d,o=t.inert,e,n;function p(){return d??(d=s()(t,(r==null?void 0:r())??{},{direction:N}))}var y={is_global:m,in(){var c;if(t.inert=o,!i){n==null||n.abort(),(c=n==null?void 0:n.reset)==null||c.call(n);return}v||e==null||e.abort(),A(t,"introstart"),e=E(t,p(),n,1,()=>{A(t,"introend"),e==null||e.abort(),e=d=void 0})},out(c){if(!v){c==null||c(),d=void 0;return}t.inert=!0,A(t,"outrostart"),n=E(t,p(),e,0,()=>{A(t,"outroend"),c==null||c()})},stop:()=>{e==null||e.abort(),n==null||n.abort()}},f=B;if((f.transitions??(f.transitions=[])).push(y),i&&D){var _=m;if(!_){for(var l=f.parent;l&&l.f&q;)for(;(l=l.parent)&&!(l.f&R););_=!l||(l.f&j)!==0}_&&L(()=>{K(()=>y.in())})}}function E(a,t,s,r,i){var v=r===1;if(M(t)){var u,m=!1;return P(()=>{if(!m){var _=t({direction:v?"in":"out"});u=E(a,_,s,r,i)}}),{abort:()=>{m=!0,u==null||u.abort()},deactivate:()=>u.deactivate(),reset:()=>u.reset(),t:()=>u.t()}}if(s==null||s.deactivate(),!(t!=null&&t.duration))return i(),{abort:T,deactivate:T,reset:T,t:()=>r};const{delay:N=0,css:d,tick:o,easing:e=X}=t;var n=[];if(v&&s===void 0&&(o&&o(0,1),d)){var p=I(d(0,1));n.push(p,p)}var y=()=>1-r,f=a.animate(n,{duration:N});return f.onfinish=()=>{var _=(s==null?void 0:s.t())??1-r;s==null||s.abort();var l=r-_,c=t.duration*Math.abs(l),k=[];if(c>0){if(d)for(var w=Math.ceil(c/16.666666666666668),g=0;g<=w;g+=1){var x=_+l*e(g/w),$=d(x,1-x);k.push(I($))}y=()=>{var b=f.currentTime;return _+l*e(b/c)},o&&V(()=>{if(f.playState!=="running")return!1;var b=y();return o(b,1-b),!0})}f=a.animate(k,{duration:c,fill:"forwards"}),f.onfinish=()=>{y=()=>r,o==null||o(r,1-r),i()}},{abort:()=>{f&&(f.cancel(),f.effect=null)},deactivate:()=>{i=T},reset:()=>{r===0&&(o==null||o(1,0))},t:()=>y()}}function S(a){var t,s,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var i=a.length;for(t=0;t<i;t++)a[t]&&(s=S(a[t]))&&(r&&(r+=" "),r+=s)}else for(s in a)a[s]&&(r&&(r+=" "),r+=s);return r}function sa(){for(var a,t,s=0,r="",i=arguments.length;s<i;s++)(a=arguments[s])&&(t=S(a))&&(r&&(r+=" "),r+=t);return r}function Y(a){const t=a-1;return t*t*t+1}function O(a){const t=typeof a=="string"&&a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[a,"px"]}function ia(a,{delay:t=0,duration:s=400,easing:r=Y,x:i=0,y:v=0,opacity:u=0}={}){const m=getComputedStyle(a),N=+m.opacity,d=m.transform==="none"?"":m.transform,o=N*(1-u),[e,n]=O(i),[p,y]=O(v);return{delay:t,duration:s,easing:r,css:(f,_)=>`
			transform: ${d} translate(${(1-f)*e}${n}, ${(1-f)*p}${y});
			opacity: ${N-o*_}`}}function na(a){return a*a*a*a*a}function ea(a){return--a*a*a*a*a+1}export{na as a,sa as c,ia as f,ea as q,ta as s,ra as t};