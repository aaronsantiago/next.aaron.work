import{J as c,T as v,K as p,h as u,d as i,M as f,v as d,a as h,N as T,O as E}from"./runtime.CwBQmc7F.js";function g(t){var r=document.createElement("template");return r.innerHTML=t,r.content}function s(t,r){var e=d;e.nodes_start===null&&(e.nodes_start=t,e.nodes_end=r)}function x(t,r){var e=(r&v)!==0,a=(r&p)!==0,n,_=!t.startsWith("<!>");return()=>{if(u)return s(i,null),i;n===void 0&&(n=g(_?t:"<!>"+t),e||(n=c(n)));var o=a?document.importNode(n,!0):n.cloneNode(!0);if(e){var m=c(o),l=o.lastChild;s(m,l)}else s(o,o);return o}}function N(t,r){var e=!0,a=x(t,r);return()=>{if(u)return a();var n=a();return e&&(e=!1,y(n)),n}}function y(t){if(u)return;const r=t.tagName==="SCRIPT"?[t]:t.querySelectorAll("script");for(const n of r){var e=document.createElement("script");for(var a of n.attributes)e.setAttribute(a.name,a.value);e.textContent=n.textContent,n===t?E(()=>n.replaceWith(e)):n.replaceWith(e)}}function A(t=""){if(!u){var r=f(t+"");return s(r,r),r}var e=i;return e.nodeType!==3&&(e.before(e=f()),T(e)),s(e,e),e}function C(){if(u)return s(i,null),i;var t=document.createDocumentFragment(),r=document.createComment(""),e=f();return t.append(r,e),s(r,e),t}function b(t,r){if(u){d.nodes_end=i,h();return}t!==null&&t.before(r)}export{b as a,s as b,C as c,A as d,N as e,x as t};