import{b as L}from"../chunks/paths.CKuy7BW3.js";import"../chunks/disclose-version.Bg9kRutz.js";import{K as Q,f as U,h as x,M as w,i as W,I as Z,y as $,N as X,O as F,Q as C,R as M,k as T,V as G,W as j,j as q,p as J,X as ee,v as H,q as ae,Y as re,Z as ne,H as te,s as O,_ as se,$ as le,a0 as fe,a1 as ie,a2 as ue,a3 as oe,a4 as ve,a5 as ce,a6 as _e,a7 as pe,a8 as N,a9 as S,aa as de,g as D}from"../chunks/runtime.0sKRX3HQ.js";import{s as he}from"../chunks/render.DyCho7dH.js";import{a as V,t as z}from"../chunks/template.BiTd2flZ.js";import{s as ge}from"../chunks/attributes.BmBTPUeq.js";import{i as me}from"../chunks/lifecycle.BM0qlqtz.js";import{p as Ee}from"../chunks/props.COxYy_1G.js";let R=null;function ye(n,e){return e}function xe(n,e,r,f){for(var v=[],u=e.length,t=0;t<u;t++)le(e[t].e,v,!0);var c=u>0&&v.length===0&&r!==null;if(c){var p=r.parentNode;fe(p),p.append(r),f.clear(),E(n,e[0].prev,e[u-1].next)}ie(v,()=>{for(var a=0;a<u;a++){var i=e[a];c||(f.delete(i.k),E(n,i.prev,i.next)),ue(i.e,!c)}})}function Te(n,e,r,f,v,u=null){var t=n,c={flags:e,items:new Map,first:null};{var p=n;t=x?w(Z(p)):p.appendChild(Q())}x&&W();var a=null;U(()=>{var i=r(),s=$(i)?i:i==null?[]:X(i),o=s.length;let d=!1;if(x){var _=t.data===F;_!==(o===0)&&(t=C(),w(t),M(!1),d=!0)}if(x){for(var g=null,l,h=0;h<o;h++){if(T.nodeType===8&&T.data===G){t=T,d=!0,M(!1);break}var b=s[h],y=f(b,h);l=B(T,c,g,null,b,y,h,v,e),c.items.set(y,l),g=l}o>0&&w(C())}x||be(s,c,t,v,e,f),u!==null&&(o===0?a?j(a):a=q(()=>u(t)):a!==null&&J(a,()=>{a=null})),d&&M(!0)}),x&&(t=T)}function be(n,e,r,f,v,u){var t=n.length,c=e.items,p=e.first,a=p,i,s=null,o=[],d=[],_,g,l,h;for(h=0;h<t;h+=1){if(_=n[h],g=u(_,h),l=c.get(g),l===void 0){var b=a?a.e.nodes_start:r;s=B(b,e,s,s===null?e.first:s.next,_,g,h,f,v),c.set(g,s),o=[],d=[],a=s.next;continue}if(Ie(l,_,h),l.e.f&ee&&j(l.e),l!==a){if(i!==void 0&&i.has(l)){if(o.length<d.length){var y=d[0],m;s=y.prev;var k=o[0],I=o[o.length-1];for(m=0;m<o.length;m+=1)Y(o[m],y,r);for(m=0;m<d.length;m+=1)i.delete(d[m]);E(e,k.prev,I.next),E(e,s,k),E(e,I,y),a=y,s=I,h-=1,o=[],d=[]}else i.delete(l),Y(l,a,r),E(e,l.prev,l.next),E(e,l,s===null?e.first:s.next),E(e,s,l),s=l;continue}for(o=[],d=[];a!==null&&a.k!==g;)(i??(i=new Set)).add(a),d.push(a),a=a.next;if(a===null)continue;l=a}o.push(l),s=l,a=l.next}if(a!==null||i!==void 0){for(var A=i===void 0?[]:X(i);a!==null;)A.push(a),a=a.next;var K=A.length;if(K>0){var P=t===0?r:null;xe(e,A,P,c)}}H.first=e.first&&e.first.e,H.last=s&&s.e}function Ie(n,e,r,f){ae(n.v,e),n.i=r}function B(n,e,r,f,v,u,t,c,p){var a=R;try{var i=(p&re)!==0,s=(p&ne)===0,o=i?s?te(v):O(v):v,d=p&se?O(t):t,_={i:d,v:o,k:u,a:null,e:null,prev:r,next:f};return R=_,_.e=q(()=>c(n,o,d),x),_.e.prev=r&&r.e,_.e.next=f&&f.e,r===null?e.first=_:(r.next=_,r.e.next=_.e),f!==null&&(f.prev=_,f.e.prev=_.e),_}finally{R=a}}function Y(n,e,r){for(var f=n.next?n.next.e.nodes_start:r,v=e?e.e.nodes_start:r,u=n.e.nodes_start;u!==f;){var t=oe(u);v.before(u),u=t}}function E(n,e,r){e===null?n.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}const Ae=async({fetch:n})=>({projects:await(await n(`${L}/api/projects`)).json()}),Ve=Object.freeze(Object.defineProperty({__proto__:null,load:Ae},Symbol.toStringTag,{value:"Module"}));var we=z("<li><a> </a></li>"),Me=z("<h1>projects</h1> <ul></ul>",1);function Ye(n,e){ve(e,!1);let r=Ee(e,"data",8);me();var f=Me(),v=ce(_e(f),2);Te(v,5,()=>r().projects,ye,(u,t)=>{var c=we(),p=S(c),a=S(p);N(p),N(c),de(()=>{ge(p,"href",L+D(t).path),he(a,D(t).meta.title)}),V(u,c)}),N(v),V(n,f),pe()}export{Ye as component,Ve as universal};
