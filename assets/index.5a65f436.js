(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Tf(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function Qu(r){if(Ye(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=Wt(n)?Bg(n):Qu(n);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Wt(r))return r;if(Tt(r))return r}}const Pg=/;(?![^(]*\))/g,Lg=/:([^]+)/,Rg=/\/\*.*?\*\//gs;function Bg(r){const e={};return r.replace(Rg,"").split(Pg).forEach(t=>{if(t){const n=t.split(Lg);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function la(r){let e="";if(Wt(r))e=r;else if(Ye(r))for(let t=0;t<r.length;t++){const n=la(r[t]);n&&(e+=n+" ")}else if(Tt(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const Ig="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ug=Tf(Ig);function Wp(r){return!!r||r===""}const Og=r=>Wt(r)?r:r==null?"":Ye(r)||Tt(r)&&(r.toString===Xp||!Ze(r.toString))?JSON.stringify(r,Gp,2):String(r),Gp=(r,e)=>e&&e.__v_isRef?Gp(r,e.value):io(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,i])=>(t[`${n} =>`]=i,t),{})}:Vp(e)?{[`Set(${e.size})`]:[...e.values()]}:Tt(e)&&!Ye(e)&&!qp(e)?String(e):e,_t={},no=[],Si=()=>{},Ng=()=>!1,kg=/^on[^a-z]/,el=r=>kg.test(r),Af=r=>r.startsWith("onUpdate:"),cn=Object.assign,Cf=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},zg=Object.prototype.hasOwnProperty,at=(r,e)=>zg.call(r,e),Ye=Array.isArray,io=r=>tl(r)==="[object Map]",Vp=r=>tl(r)==="[object Set]",Ze=r=>typeof r=="function",Wt=r=>typeof r=="string",Df=r=>typeof r=="symbol",Tt=r=>r!==null&&typeof r=="object",Hp=r=>Tt(r)&&Ze(r.then)&&Ze(r.catch),Xp=Object.prototype.toString,tl=r=>Xp.call(r),Wg=r=>tl(r).slice(8,-1),qp=r=>tl(r)==="[object Object]",Ff=r=>Wt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,bu=Tf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nl=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},Gg=/-(\w)/g,ki=nl(r=>r.replace(Gg,(e,t)=>t?t.toUpperCase():"")),Vg=/\B([A-Z])/g,Do=nl(r=>r.replace(Vg,"-$1").toLowerCase()),il=nl(r=>r.charAt(0).toUpperCase()+r.slice(1)),El=nl(r=>r?`on${il(r)}`:""),ca=(r,e)=>!Object.is(r,e),Tl=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},Uu=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},$p=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let vh;const Hg=()=>vh||(vh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ti;class Xg{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ti,!e&&Ti&&(this.index=(Ti.scopes||(Ti.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Ti;try{return Ti=this,e()}finally{Ti=t}}}on(){Ti=this}off(){Ti=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function qg(r,e=Ti){e&&e.active&&e.effects.push(r)}const Pf=r=>{const e=new Set(r);return e.w=0,e.n=0,e},Yp=r=>(r.w&Br)>0,jp=r=>(r.n&Br)>0,$g=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=Br},Yg=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];Yp(i)&&!jp(i)?i.delete(r):e[t++]=i,i.w&=~Br,i.n&=~Br}e.length=t}},Fc=new WeakMap;let Go=0,Br=1;const Pc=30;let vi;const fs=Symbol(""),Lc=Symbol("");class Lf{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,qg(this,n)}run(){if(!this.active)return this.fn();let e=vi,t=Cr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=vi,vi=this,Cr=!0,Br=1<<++Go,Go<=Pc?$g(this):yh(this),this.fn()}finally{Go<=Pc&&Yg(this),Br=1<<--Go,vi=this.parent,Cr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){vi===this?this.deferStop=!0:this.active&&(yh(this),this.onStop&&this.onStop(),this.active=!1)}}function yh(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let Cr=!0;const Zp=[];function Fo(){Zp.push(Cr),Cr=!1}function Po(){const r=Zp.pop();Cr=r===void 0?!0:r}function qn(r,e,t){if(Cr&&vi){let n=Fc.get(r);n||Fc.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=Pf()),Kp(i)}}function Kp(r,e){let t=!1;Go<=Pc?jp(r)||(r.n|=Br,t=!Yp(r)):t=!r.has(vi),t&&(r.add(vi),vi.deps.push(r))}function er(r,e,t,n,i,s){const o=Fc.get(r);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ye(r)){const u=$p(n);o.forEach((l,c)=>{(c==="length"||c>=u)&&a.push(l)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ye(r)?Ff(t)&&a.push(o.get("length")):(a.push(o.get(fs)),io(r)&&a.push(o.get(Lc)));break;case"delete":Ye(r)||(a.push(o.get(fs)),io(r)&&a.push(o.get(Lc)));break;case"set":io(r)&&a.push(o.get(fs));break}if(a.length===1)a[0]&&Rc(a[0]);else{const u=[];for(const l of a)l&&u.push(...l);Rc(Pf(u))}}function Rc(r,e){const t=Ye(r)?r:[...r];for(const n of t)n.computed&&bh(n);for(const n of t)n.computed||bh(n)}function bh(r,e){(r!==vi||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const jg=Tf("__proto__,__v_isRef,__isVue"),Jp=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(Df)),Zg=Rf(),Kg=Rf(!1,!0),Jg=Rf(!0),Mh=Qg();function Qg(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=ct(this);for(let s=0,o=this.length;s<o;s++)qn(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(ct)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){Fo();const n=ct(this)[e].apply(this,t);return Po(),n}}),r}function Rf(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(r?e?m_:i0:e?n0:t0).get(n))return n;const o=Ye(n);if(!r&&o&&at(Mh,i))return Reflect.get(Mh,i,s);const a=Reflect.get(n,i,s);return(Df(i)?Jp.has(i):jg(i))||(r||qn(n,"get",i),e)?a:an(a)?o&&Ff(i)?a:a.value:Tt(a)?r?r0(a):Uf(a):a}}const e_=Qp(),t_=Qp(!0);function Qp(r=!1){return function(t,n,i,s){let o=t[n];if(po(o)&&an(o)&&!an(i))return!1;if(!r&&(!Ou(i)&&!po(i)&&(o=ct(o),i=ct(i)),!Ye(t)&&an(o)&&!an(i)))return o.value=i,!0;const a=Ye(t)&&Ff(n)?Number(n)<t.length:at(t,n),u=Reflect.set(t,n,i,s);return t===ct(s)&&(a?ca(i,o)&&er(t,"set",n,i):er(t,"add",n,i)),u}}function n_(r,e){const t=at(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&er(r,"delete",e,void 0),n}function i_(r,e){const t=Reflect.has(r,e);return(!Df(e)||!Jp.has(e))&&qn(r,"has",e),t}function r_(r){return qn(r,"iterate",Ye(r)?"length":fs),Reflect.ownKeys(r)}const e0={get:Zg,set:e_,deleteProperty:n_,has:i_,ownKeys:r_},s_={get:Jg,set(r,e){return!0},deleteProperty(r,e){return!0}},o_=cn({},e0,{get:Kg,set:t_}),Bf=r=>r,rl=r=>Reflect.getPrototypeOf(r);function Ra(r,e,t=!1,n=!1){r=r.__v_raw;const i=ct(r),s=ct(e);t||(e!==s&&qn(i,"get",e),qn(i,"get",s));const{has:o}=rl(i),a=n?Bf:t?Nf:fa;if(o.call(i,e))return a(r.get(e));if(o.call(i,s))return a(r.get(s));r!==i&&r.get(e)}function Ba(r,e=!1){const t=this.__v_raw,n=ct(t),i=ct(r);return e||(r!==i&&qn(n,"has",r),qn(n,"has",i)),r===i?t.has(r):t.has(r)||t.has(i)}function Ia(r,e=!1){return r=r.__v_raw,!e&&qn(ct(r),"iterate",fs),Reflect.get(r,"size",r)}function Sh(r){r=ct(r);const e=ct(this);return rl(e).has.call(e,r)||(e.add(r),er(e,"add",r,r)),this}function wh(r,e){e=ct(e);const t=ct(this),{has:n,get:i}=rl(t);let s=n.call(t,r);s||(r=ct(r),s=n.call(t,r));const o=i.call(t,r);return t.set(r,e),s?ca(e,o)&&er(t,"set",r,e):er(t,"add",r,e),this}function Eh(r){const e=ct(this),{has:t,get:n}=rl(e);let i=t.call(e,r);i||(r=ct(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&er(e,"delete",r,void 0),s}function Th(){const r=ct(this),e=r.size!==0,t=r.clear();return e&&er(r,"clear",void 0,void 0),t}function Ua(r,e){return function(n,i){const s=this,o=s.__v_raw,a=ct(o),u=e?Bf:r?Nf:fa;return!r&&qn(a,"iterate",fs),o.forEach((l,c)=>n.call(i,u(l),u(c),s))}}function Oa(r,e,t){return function(...n){const i=this.__v_raw,s=ct(i),o=io(s),a=r==="entries"||r===Symbol.iterator&&o,u=r==="keys"&&o,l=i[r](...n),c=t?Bf:e?Nf:fa;return!e&&qn(s,"iterate",u?Lc:fs),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[c(h[0]),c(h[1])]:c(h),done:f}},[Symbol.iterator](){return this}}}}function ur(r){return function(...e){return r==="delete"?!1:this}}function a_(){const r={get(s){return Ra(this,s)},get size(){return Ia(this)},has:Ba,add:Sh,set:wh,delete:Eh,clear:Th,forEach:Ua(!1,!1)},e={get(s){return Ra(this,s,!1,!0)},get size(){return Ia(this)},has:Ba,add:Sh,set:wh,delete:Eh,clear:Th,forEach:Ua(!1,!0)},t={get(s){return Ra(this,s,!0)},get size(){return Ia(this,!0)},has(s){return Ba.call(this,s,!0)},add:ur("add"),set:ur("set"),delete:ur("delete"),clear:ur("clear"),forEach:Ua(!0,!1)},n={get(s){return Ra(this,s,!0,!0)},get size(){return Ia(this,!0)},has(s){return Ba.call(this,s,!0)},add:ur("add"),set:ur("set"),delete:ur("delete"),clear:ur("clear"),forEach:Ua(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=Oa(s,!1,!1),t[s]=Oa(s,!0,!1),e[s]=Oa(s,!1,!0),n[s]=Oa(s,!0,!0)}),[r,t,e,n]}const[u_,l_,c_,f_]=a_();function If(r,e){const t=e?r?f_:c_:r?l_:u_;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(at(t,i)&&i in n?t:n,i,s)}const h_={get:If(!1,!1)},d_={get:If(!1,!0)},p_={get:If(!0,!1)},t0=new WeakMap,n0=new WeakMap,i0=new WeakMap,m_=new WeakMap;function g_(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function __(r){return r.__v_skip||!Object.isExtensible(r)?0:g_(Wg(r))}function Uf(r){return po(r)?r:Of(r,!1,e0,h_,t0)}function x_(r){return Of(r,!1,o_,d_,n0)}function r0(r){return Of(r,!0,s_,p_,i0)}function Of(r,e,t,n,i){if(!Tt(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const o=__(r);if(o===0)return r;const a=new Proxy(r,o===2?n:t);return i.set(r,a),a}function ro(r){return po(r)?ro(r.__v_raw):!!(r&&r.__v_isReactive)}function po(r){return!!(r&&r.__v_isReadonly)}function Ou(r){return!!(r&&r.__v_isShallow)}function s0(r){return ro(r)||po(r)}function ct(r){const e=r&&r.__v_raw;return e?ct(e):r}function o0(r){return Uu(r,"__v_skip",!0),r}const fa=r=>Tt(r)?Uf(r):r,Nf=r=>Tt(r)?r0(r):r;function a0(r){Cr&&vi&&(r=ct(r),Kp(r.dep||(r.dep=Pf())))}function u0(r,e){r=ct(r),r.dep&&Rc(r.dep)}function an(r){return!!(r&&r.__v_isRef===!0)}function Ui(r){return v_(r,!1)}function v_(r,e){return an(r)?r:new y_(r,e)}class y_{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ct(e),this._value=t?e:fa(e)}get value(){return a0(this),this._value}set value(e){const t=this.__v_isShallow||Ou(e)||po(e);e=t?e:ct(e),ca(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:fa(e),u0(this))}}function b_(r){return an(r)?r.value:r}const M_={get:(r,e,t)=>b_(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return an(i)&&!an(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function l0(r){return ro(r)?r:new Proxy(r,M_)}var c0;class S_{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[c0]=!1,this._dirty=!0,this.effect=new Lf(e,()=>{this._dirty||(this._dirty=!0,u0(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=ct(this);return a0(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}c0="__v_isReadonly";function w_(r,e,t=!1){let n,i;const s=Ze(r);return s?(n=r,i=Si):(n=r.get,i=r.set),new S_(n,i,s||!i,t)}function Dr(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){sl(s,e,t)}return i}function ai(r,e,t,n){if(Ze(r)){const s=Dr(r,e,t,n);return s&&Hp(s)&&s.catch(o=>{sl(o,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(ai(r[s],e,t,n));return i}function sl(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const l=s.ec;if(l){for(let c=0;c<l.length;c++)if(l[c](r,o,a)===!1)return}s=s.parent}const u=e.appContext.config.errorHandler;if(u){Dr(u,null,10,[r,o,a]);return}}E_(r,t,i,n)}function E_(r,e,t,n=!0){console.error(r)}let ha=!1,Bc=!1;const sn=[];let Li=0;const so=[];let qi=null,ts=0;const f0=Promise.resolve();let kf=null;function T_(r){const e=kf||f0;return r?e.then(this?r.bind(this):r):e}function A_(r){let e=Li+1,t=sn.length;for(;e<t;){const n=e+t>>>1;da(sn[n])<r?e=n+1:t=n}return e}function zf(r){(!sn.length||!sn.includes(r,ha&&r.allowRecurse?Li+1:Li))&&(r.id==null?sn.push(r):sn.splice(A_(r.id),0,r),h0())}function h0(){!ha&&!Bc&&(Bc=!0,kf=f0.then(p0))}function C_(r){const e=sn.indexOf(r);e>Li&&sn.splice(e,1)}function D_(r){Ye(r)?so.push(...r):(!qi||!qi.includes(r,r.allowRecurse?ts+1:ts))&&so.push(r),h0()}function Ah(r,e=ha?Li+1:0){for(;e<sn.length;e++){const t=sn[e];t&&t.pre&&(sn.splice(e,1),e--,t())}}function d0(r){if(so.length){const e=[...new Set(so)];if(so.length=0,qi){qi.push(...e);return}for(qi=e,qi.sort((t,n)=>da(t)-da(n)),ts=0;ts<qi.length;ts++)qi[ts]();qi=null,ts=0}}const da=r=>r.id==null?1/0:r.id,F_=(r,e)=>{const t=da(r)-da(e);if(t===0){if(r.pre&&!e.pre)return-1;if(e.pre&&!r.pre)return 1}return t};function p0(r){Bc=!1,ha=!0,sn.sort(F_);const e=Si;try{for(Li=0;Li<sn.length;Li++){const t=sn[Li];t&&t.active!==!1&&Dr(t,null,14)}}finally{Li=0,sn.length=0,d0(),ha=!1,kf=null,(sn.length||so.length)&&p0()}}function P_(r,e,...t){if(r.isUnmounted)return;const n=r.vnode.props||_t;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[c]||_t;f&&(i=t.map(m=>Wt(m)?m.trim():m)),h&&(i=t.map($p))}let a,u=n[a=El(e)]||n[a=El(ki(e))];!u&&s&&(u=n[a=El(Do(e))]),u&&ai(u,r,6,i);const l=n[a+"Once"];if(l){if(!r.emitted)r.emitted={};else if(r.emitted[a])return;r.emitted[a]=!0,ai(l,r,6,i)}}function m0(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let o={},a=!1;if(!Ze(r)){const u=l=>{const c=m0(l,e,!0);c&&(a=!0,cn(o,c))};!t&&e.mixins.length&&e.mixins.forEach(u),r.extends&&u(r.extends),r.mixins&&r.mixins.forEach(u)}return!s&&!a?(Tt(r)&&n.set(r,null),null):(Ye(s)?s.forEach(u=>o[u]=null):cn(o,s),Tt(r)&&n.set(r,o),o)}function ol(r,e){return!r||!el(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(r,e[0].toLowerCase()+e.slice(1))||at(r,Do(e))||at(r,e))}let en=null,al=null;function Nu(r){const e=en;return en=r,al=r&&r.type.__scopeId||null,e}function L_(r){al=r}function R_(){al=null}function Ve(r,e=en,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&Oh(-1);const s=Nu(e);let o;try{o=r(...i)}finally{Nu(s),n._d&&Oh(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Al(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:u,emit:l,render:c,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:d}=r;let p,x;const b=Nu(r);try{if(t.shapeFlag&4){const y=i||n;p=Fi(c.call(y,y,h,s,m,f,g)),x=u}else{const y=e;p=Fi(y.length>1?y(s,{attrs:u,slots:a,emit:l}):y(s,null)),x=e.props?u:B_(u)}}catch(y){Jo.length=0,sl(y,r,1),p=ke(ui)}let _=p;if(x&&d!==!1){const y=Object.keys(x),{shapeFlag:M}=_;y.length&&M&7&&(o&&y.some(Af)&&(x=I_(x,o)),_=Ir(_,x))}return t.dirs&&(_=Ir(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),p=_,Nu(b),p}const B_=r=>{let e;for(const t in r)(t==="class"||t==="style"||el(t))&&((e||(e={}))[t]=r[t]);return e},I_=(r,e)=>{const t={};for(const n in r)(!Af(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function U_(r,e,t){const{props:n,children:i,component:s}=r,{props:o,children:a,patchFlag:u}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&u>=0){if(u&1024)return!0;if(u&16)return n?Ch(n,o,l):!!o;if(u&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const f=c[h];if(o[f]!==n[f]&&!ol(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Ch(n,o,l):!0:!!o;return!1}function Ch(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!ol(t,s))return!0}return!1}function O_({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const N_=r=>r.__isSuspense;function k_(r,e){e&&e.pendingBranch?Ye(r)?e.effects.push(...r):e.effects.push(r):D_(r)}function z_(r,e){if($t){let t=$t.provides;const n=$t.parent&&$t.parent.provides;n===t&&(t=$t.provides=Object.create(n)),t[r]=e}}function Mu(r,e,t=!1){const n=$t||en;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&Ze(e)?e.call(n.proxy):e}}const Na={};function Cl(r,e,t){return g0(r,e,t)}function g0(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:o}=_t){const a=$t;let u,l=!1,c=!1;if(an(r)?(u=()=>r.value,l=Ou(r)):ro(r)?(u=()=>r,n=!0):Ye(r)?(c=!0,l=r.some(_=>ro(_)||Ou(_)),u=()=>r.map(_=>{if(an(_))return _.value;if(ro(_))return os(_);if(Ze(_))return Dr(_,a,2)})):Ze(r)?e?u=()=>Dr(r,a,2):u=()=>{if(!(a&&a.isUnmounted))return h&&h(),ai(r,a,3,[f])}:u=Si,e&&n){const _=u;u=()=>os(_())}let h,f=_=>{h=x.onStop=()=>{Dr(_,a,4)}},m;if(ga)if(f=Si,e?t&&ai(e,a,3,[u(),c?[]:void 0,f]):u(),i==="sync"){const _=z3();m=_.__watcherHandles||(_.__watcherHandles=[])}else return Si;let g=c?new Array(r.length).fill(Na):Na;const d=()=>{if(!!x.active)if(e){const _=x.run();(n||l||(c?_.some((y,M)=>ca(y,g[M])):ca(_,g)))&&(h&&h(),ai(e,a,3,[_,g===Na?void 0:c&&g[0]===Na?[]:g,f]),g=_)}else x.run()};d.allowRecurse=!!e;let p;i==="sync"?p=d:i==="post"?p=()=>Mn(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),p=()=>zf(d));const x=new Lf(u,p);e?t?d():g=x.run():i==="post"?Mn(x.run.bind(x),a&&a.suspense):x.run();const b=()=>{x.stop(),a&&a.scope&&Cf(a.scope.effects,x)};return m&&m.push(b),b}function W_(r,e,t){const n=this.proxy,i=Wt(r)?r.includes(".")?_0(n,r):()=>n[r]:r.bind(n,n);let s;Ze(e)?s=e:(s=e.handler,t=e);const o=$t;mo(this);const a=g0(i,s.bind(n),t);return o?mo(o):hs(),a}function _0(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function os(r,e){if(!Tt(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),an(r))os(r.value,e);else if(Ye(r))for(let t=0;t<r.length;t++)os(r[t],e);else if(Vp(r)||io(r))r.forEach(t=>{os(t,e)});else if(qp(r))for(const t in r)os(r[t],e);return r}function G_(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sr(()=>{r.isMounted=!0}),b0(()=>{r.isUnmounting=!0}),r}const Zn=[Function,Array],V_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zn,onEnter:Zn,onAfterEnter:Zn,onEnterCancelled:Zn,onBeforeLeave:Zn,onLeave:Zn,onAfterLeave:Zn,onLeaveCancelled:Zn,onBeforeAppear:Zn,onAppear:Zn,onAfterAppear:Zn,onAppearCancelled:Zn},setup(r,{slots:e}){const t=P3(),n=G_();let i;return()=>{const s=e.default&&v0(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const d of s)if(d.type!==ui){o=d;break}}const a=ct(r),{mode:u}=a;if(n.isLeaving)return Dl(o);const l=Dh(o);if(!l)return Dl(o);const c=Ic(l,a,n,t);Uc(l,c);const h=t.subTree,f=h&&Dh(h);let m=!1;const{getTransitionKey:g}=l.type;if(g){const d=g();i===void 0?i=d:d!==i&&(i=d,m=!0)}if(f&&f.type!==ui&&(!ns(l,f)||m)){const d=Ic(f,a,n,t);if(Uc(f,d),u==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},Dl(o);u==="in-out"&&l.type!==ui&&(d.delayLeave=(p,x,b)=>{const _=x0(n,f);_[String(f.key)]=f,p._leaveCb=()=>{x(),p._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=b})}return o}}},H_=V_;function x0(r,e){const{leavingVNodes:t}=r;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Ic(r,e,t,n){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:l,onEnterCancelled:c,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:d,onAppear:p,onAfterAppear:x,onAppearCancelled:b}=e,_=String(r.key),y=x0(t,r),M=(v,w)=>{v&&ai(v,n,9,w)},E=(v,w)=>{const F=w[1];M(v,w),Ye(v)?v.every(O=>O.length<=1)&&F():v.length<=1&&F()},T={mode:s,persisted:o,beforeEnter(v){let w=a;if(!t.isMounted)if(i)w=d||a;else return;v._leaveCb&&v._leaveCb(!0);const F=y[_];F&&ns(r,F)&&F.el._leaveCb&&F.el._leaveCb(),M(w,[v])},enter(v){let w=u,F=l,O=c;if(!t.isMounted)if(i)w=p||u,F=x||l,O=b||c;else return;let Z=!1;const z=v._enterCb=I=>{Z||(Z=!0,I?M(O,[v]):M(F,[v]),T.delayedLeave&&T.delayedLeave(),v._enterCb=void 0)};w?E(w,[v,z]):z()},leave(v,w){const F=String(r.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return w();M(h,[v]);let O=!1;const Z=v._leaveCb=z=>{O||(O=!0,w(),z?M(g,[v]):M(m,[v]),v._leaveCb=void 0,y[F]===r&&delete y[F])};y[F]=r,f?E(f,[v,Z]):Z()},clone(v){return Ic(v,e,t,n)}};return T}function Dl(r){if(ul(r))return r=Ir(r),r.children=null,r}function Dh(r){return ul(r)?r.children?r.children[0]:void 0:r}function Uc(r,e){r.shapeFlag&6&&r.component?Uc(r.component.subTree,e):r.shapeFlag&128?(r.ssContent.transition=e.clone(r.ssContent),r.ssFallback.transition=e.clone(r.ssFallback)):r.transition=e}function v0(r,e=!1,t){let n=[],i=0;for(let s=0;s<r.length;s++){let o=r[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===xn?(o.patchFlag&128&&i++,n=n.concat(v0(o.children,e,a))):(e||o.type!==ui)&&n.push(a!=null?Ir(o,{key:a}):o)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function ir(r){return Ze(r)?{setup:r,name:r.name}:r}const Zo=r=>!!r.type.__asyncLoader,ul=r=>r.type.__isKeepAlive;function X_(r,e){y0(r,"a",e)}function q_(r,e){y0(r,"da",e)}function y0(r,e,t=$t){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(ll(e,n,t),t){let i=t.parent;for(;i&&i.parent;)ul(i.parent.vnode)&&$_(n,e,t,i),i=i.parent}}function $_(r,e,t,n){const i=ll(e,r,n,!0);M0(()=>{Cf(n[e],i)},t)}function ll(r,e,t=$t,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Fo(),mo(t);const a=ai(e,t,r,o);return hs(),Po(),a});return n?i.unshift(s):i.push(s),s}}const rr=r=>(e,t=$t)=>(!ga||r==="sp")&&ll(r,(...n)=>e(...n),t),Y_=rr("bm"),sr=rr("m"),j_=rr("bu"),Z_=rr("u"),b0=rr("bum"),M0=rr("um"),K_=rr("sp"),J_=rr("rtg"),Q_=rr("rtc");function e3(r,e=$t){ll("ec",r,e)}function _r(r,e){const t=en;if(t===null)return r;const n=hl(t)||t.proxy,i=r.dirs||(r.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,u,l=_t]=e[s];o&&(Ze(o)&&(o={mounted:o,updated:o}),o.deep&&os(a),i.push({dir:o,instance:n,value:a,oldValue:void 0,arg:u,modifiers:l}))}return r}function Vr(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let u=a.dir[n];u&&(Fo(),ai(u,t,8,[r.el,a,r,e]),Po())}}const t3="components",n3="directives",i3=Symbol();function Oc(r){return r3(n3,r)}function r3(r,e,t=!0,n=!1){const i=en||$t;if(i){const s=i.type;if(r===t3){const a=U3(s,!1);if(a&&(a===e||a===ki(e)||a===il(ki(e))))return s}const o=Fh(i[r]||s[r],e)||Fh(i.appContext[r],e);return!o&&n?s:o}}function Fh(r,e){return r&&(r[e]||r[ki(e)]||r[il(ki(e))])}function s3(r,e,t,n){let i;const s=t&&t[n];if(Ye(r)||Wt(r)){i=new Array(r.length);for(let o=0,a=r.length;o<a;o++)i[o]=e(r[o],o,void 0,s&&s[o])}else if(typeof r=="number"){i=new Array(r);for(let o=0;o<r;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Tt(r))if(r[Symbol.iterator])i=Array.from(r,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(r);i=new Array(o.length);for(let a=0,u=o.length;a<u;a++){const l=o[a];i[a]=e(r[l],l,a,s&&s[a])}}else i=[];return t&&(t[n]=i),i}function pa(r,e,t={},n,i){if(en.isCE||en.parent&&Zo(en.parent)&&en.parent.isCE)return e!=="default"&&(t.name=e),ke("slot",t,n&&n());let s=r[e];s&&s._c&&(s._d=!1),St();const o=s&&S0(s(t)),a=Vf(xn,{key:t.key||o&&o.key||`_${e}`},o||(n?n():[]),o&&r._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function S0(r){return r.some(e=>R0(e)?!(e.type===ui||e.type===xn&&!S0(e.children)):!0)?r:null}const Nc=r=>r?I0(r)?hl(r)||r.proxy:Nc(r.parent):null,Ko=cn(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Nc(r.parent),$root:r=>Nc(r.root),$emit:r=>r.emit,$options:r=>Wf(r),$forceUpdate:r=>r.f||(r.f=()=>zf(r.update)),$nextTick:r=>r.n||(r.n=T_.bind(r.proxy)),$watch:r=>W_.bind(r)}),Fl=(r,e)=>r!==_t&&!r.__isScriptSetup&&at(r,e),o3={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:o,type:a,appContext:u}=r;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Fl(n,e))return o[e]=1,n[e];if(i!==_t&&at(i,e))return o[e]=2,i[e];if((l=r.propsOptions[0])&&at(l,e))return o[e]=3,s[e];if(t!==_t&&at(t,e))return o[e]=4,t[e];kc&&(o[e]=0)}}const c=Ko[e];let h,f;if(c)return e==="$attrs"&&qn(r,"get",e),c(r);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==_t&&at(t,e))return o[e]=4,t[e];if(f=u.config.globalProperties,at(f,e))return f[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;return Fl(i,e)?(i[e]=t,!0):n!==_t&&at(n,e)?(n[e]=t,!0):at(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},o){let a;return!!t[o]||r!==_t&&at(r,o)||Fl(e,o)||(a=s[0])&&at(a,o)||at(n,o)||at(Ko,o)||at(i.config.globalProperties,o)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:at(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};let kc=!0;function a3(r){const e=Wf(r),t=r.proxy,n=r.ctx;kc=!1,e.beforeCreate&&Ph(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:o,watch:a,provide:u,inject:l,created:c,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:d,deactivated:p,beforeDestroy:x,beforeUnmount:b,destroyed:_,unmounted:y,render:M,renderTracked:E,renderTriggered:T,errorCaptured:v,serverPrefetch:w,expose:F,inheritAttrs:O,components:Z,directives:z,filters:I}=e;if(l&&u3(l,n,null,r.appContext.config.unwrapInjectedRef),o)for(const Y in o){const B=o[Y];Ze(B)&&(n[Y]=B.bind(t))}if(i){const Y=i.call(t,t);Tt(Y)&&(r.data=Uf(Y))}if(kc=!0,s)for(const Y in s){const B=s[Y],se=Ze(B)?B.bind(t,t):Ze(B.get)?B.get.bind(t,t):Si,L=!Ze(B)&&Ze(B.set)?B.set.bind(t):Si,X=N3({get:se,set:L});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>X.value,set:G=>X.value=G})}if(a)for(const Y in a)w0(a[Y],n,t,Y);if(u){const Y=Ze(u)?u.call(t):u;Reflect.ownKeys(Y).forEach(B=>{z_(B,Y[B])})}c&&Ph(c,r,"c");function V(Y,B){Ye(B)?B.forEach(se=>Y(se.bind(t))):B&&Y(B.bind(t))}if(V(Y_,h),V(sr,f),V(j_,m),V(Z_,g),V(X_,d),V(q_,p),V(e3,v),V(Q_,E),V(J_,T),V(b0,b),V(M0,y),V(K_,w),Ye(F))if(F.length){const Y=r.exposed||(r.exposed={});F.forEach(B=>{Object.defineProperty(Y,B,{get:()=>t[B],set:se=>t[B]=se})})}else r.exposed||(r.exposed={});M&&r.render===Si&&(r.render=M),O!=null&&(r.inheritAttrs=O),Z&&(r.components=Z),z&&(r.directives=z)}function u3(r,e,t=Si,n=!1){Ye(r)&&(r=zc(r));for(const i in r){const s=r[i];let o;Tt(s)?"default"in s?o=Mu(s.from||i,s.default,!0):o=Mu(s.from||i):o=Mu(s),an(o)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Ph(r,e,t){ai(Ye(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function w0(r,e,t,n){const i=n.includes(".")?_0(t,n):()=>t[n];if(Wt(r)){const s=e[r];Ze(s)&&Cl(i,s)}else if(Ze(r))Cl(i,r.bind(t));else if(Tt(r))if(Ye(r))r.forEach(s=>w0(s,e,t,n));else{const s=Ze(r.handler)?r.handler.bind(t):e[r.handler];Ze(s)&&Cl(i,s,r)}}function Wf(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=r.appContext,a=s.get(e);let u;return a?u=a:!i.length&&!t&&!n?u=e:(u={},i.length&&i.forEach(l=>ku(u,l,o,!0)),ku(u,e,o)),Tt(e)&&s.set(e,u),u}function ku(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&ku(r,s,t,!0),i&&i.forEach(o=>ku(r,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=l3[o]||t&&t[o];r[o]=a?a(r[o],e[o]):e[o]}return r}const l3={data:Lh,props:Zr,emits:Zr,methods:Zr,computed:Zr,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:Zr,directives:Zr,watch:f3,provide:Lh,inject:c3};function Lh(r,e){return e?r?function(){return cn(Ze(r)?r.call(this,this):r,Ze(e)?e.call(this,this):e)}:e:r}function c3(r,e){return Zr(zc(r),zc(e))}function zc(r){if(Ye(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function pn(r,e){return r?[...new Set([].concat(r,e))]:e}function Zr(r,e){return r?cn(cn(Object.create(null),r),e):e}function f3(r,e){if(!r)return e;if(!e)return r;const t=cn(Object.create(null),r);for(const n in e)t[n]=pn(r[n],e[n]);return t}function h3(r,e,t,n=!1){const i={},s={};Uu(s,fl,1),r.propsDefaults=Object.create(null),E0(r,e,i,s);for(const o in r.propsOptions[0])o in i||(i[o]=void 0);t?r.props=n?i:x_(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function d3(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:o}}=r,a=ct(i),[u]=r.propsOptions;let l=!1;if((n||o>0)&&!(o&16)){if(o&8){const c=r.vnode.dynamicProps;for(let h=0;h<c.length;h++){let f=c[h];if(ol(r.emitsOptions,f))continue;const m=e[f];if(u)if(at(s,f))m!==s[f]&&(s[f]=m,l=!0);else{const g=ki(f);i[g]=Wc(u,a,g,m,r,!1)}else m!==s[f]&&(s[f]=m,l=!0)}}}else{E0(r,e,i,s)&&(l=!0);let c;for(const h in a)(!e||!at(e,h)&&((c=Do(h))===h||!at(e,c)))&&(u?t&&(t[h]!==void 0||t[c]!==void 0)&&(i[h]=Wc(u,a,h,void 0,r,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!at(e,h)&&!0)&&(delete s[h],l=!0)}l&&er(r,"set","$attrs")}function E0(r,e,t,n){const[i,s]=r.propsOptions;let o=!1,a;if(e)for(let u in e){if(bu(u))continue;const l=e[u];let c;i&&at(i,c=ki(u))?!s||!s.includes(c)?t[c]=l:(a||(a={}))[c]=l:ol(r.emitsOptions,u)||(!(u in n)||l!==n[u])&&(n[u]=l,o=!0)}if(s){const u=ct(t),l=a||_t;for(let c=0;c<s.length;c++){const h=s[c];t[h]=Wc(i,u,h,l[h],r,!at(l,h))}}return o}function Wc(r,e,t,n,i,s){const o=r[t];if(o!=null){const a=at(o,"default");if(a&&n===void 0){const u=o.default;if(o.type!==Function&&Ze(u)){const{propsDefaults:l}=i;t in l?n=l[t]:(mo(i),n=l[t]=u.call(null,e),hs())}else n=u}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Do(t))&&(n=!0))}return n}function T0(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,o={},a=[];let u=!1;if(!Ze(r)){const c=h=>{u=!0;const[f,m]=T0(h,e,!0);cn(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),r.extends&&c(r.extends),r.mixins&&r.mixins.forEach(c)}if(!s&&!u)return Tt(r)&&n.set(r,no),no;if(Ye(s))for(let c=0;c<s.length;c++){const h=ki(s[c]);Rh(h)&&(o[h]=_t)}else if(s)for(const c in s){const h=ki(c);if(Rh(h)){const f=s[c],m=o[h]=Ye(f)||Ze(f)?{type:f}:Object.assign({},f);if(m){const g=Uh(Boolean,m.type),d=Uh(String,m.type);m[0]=g>-1,m[1]=d<0||g<d,(g>-1||at(m,"default"))&&a.push(h)}}}const l=[o,a];return Tt(r)&&n.set(r,l),l}function Rh(r){return r[0]!=="$"}function Bh(r){const e=r&&r.toString().match(/^\s*function (\w+)/);return e?e[1]:r===null?"null":""}function Ih(r,e){return Bh(r)===Bh(e)}function Uh(r,e){return Ye(e)?e.findIndex(t=>Ih(t,r)):Ze(e)&&Ih(e,r)?0:-1}const A0=r=>r[0]==="_"||r==="$stable",Gf=r=>Ye(r)?r.map(Fi):[Fi(r)],p3=(r,e,t)=>{if(e._n)return e;const n=Ve((...i)=>Gf(e(...i)),t);return n._c=!1,n},C0=(r,e,t)=>{const n=r._ctx;for(const i in r){if(A0(i))continue;const s=r[i];if(Ze(s))e[i]=p3(i,s,n);else if(s!=null){const o=Gf(s);e[i]=()=>o}}},D0=(r,e)=>{const t=Gf(e);r.slots.default=()=>t},m3=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=ct(e),Uu(e,"_",t)):C0(e,r.slots={})}else r.slots={},e&&D0(r,e);Uu(r.slots,fl,1)},g3=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,o=_t;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(cn(i,e),!t&&a===1&&delete i._):(s=!e.$stable,C0(e,i)),o=e}else e&&(D0(r,e),o={default:1});if(s)for(const a in i)!A0(a)&&!(a in o)&&delete i[a]};function F0(){return{app:null,config:{isNativeTag:Ng,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _3=0;function x3(r,e){return function(n,i=null){Ze(n)||(n=Object.assign({},n)),i!=null&&!Tt(i)&&(i=null);const s=F0(),o=new Set;let a=!1;const u=s.app={_uid:_3++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:W3,get config(){return s.config},set config(l){},use(l,...c){return o.has(l)||(l&&Ze(l.install)?(o.add(l),l.install(u,...c)):Ze(l)&&(o.add(l),l(u,...c))),u},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),u},component(l,c){return c?(s.components[l]=c,u):s.components[l]},directive(l,c){return c?(s.directives[l]=c,u):s.directives[l]},mount(l,c,h){if(!a){const f=ke(n,i);return f.appContext=s,c&&e?e(f,l):r(f,l,h),a=!0,u._container=l,l.__vue_app__=u,hl(f.component)||f.component.proxy}},unmount(){a&&(r(null,u._container),delete u._container.__vue_app__)},provide(l,c){return s.provides[l]=c,u}};return u}}function Gc(r,e,t,n,i=!1){if(Ye(r)){r.forEach((f,m)=>Gc(f,e&&(Ye(e)?e[m]:e),t,n,i));return}if(Zo(n)&&!i)return;const s=n.shapeFlag&4?hl(n.component)||n.component.proxy:n.el,o=i?null:s,{i:a,r:u}=r,l=e&&e.r,c=a.refs===_t?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==u&&(Wt(l)?(c[l]=null,at(h,l)&&(h[l]=null)):an(l)&&(l.value=null)),Ze(u))Dr(u,a,12,[o,c]);else{const f=Wt(u),m=an(u);if(f||m){const g=()=>{if(r.f){const d=f?at(h,u)?h[u]:c[u]:u.value;i?Ye(d)&&Cf(d,s):Ye(d)?d.includes(s)||d.push(s):f?(c[u]=[s],at(h,u)&&(h[u]=c[u])):(u.value=[s],r.k&&(c[r.k]=u.value))}else f?(c[u]=o,at(h,u)&&(h[u]=o)):m&&(u.value=o,r.k&&(c[r.k]=o))};o?(g.id=-1,Mn(g,t)):g()}}}const Mn=k_;function v3(r){return y3(r)}function y3(r,e){const t=Hg();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:o,createText:a,createComment:u,setText:l,setElementText:c,parentNode:h,nextSibling:f,setScopeId:m=Si,insertStaticContent:g}=r,d=(D,P,$,oe=null,ne=null,R=null,pe=!1,te=null,me=!!P.dynamicChildren)=>{if(D===P)return;D&&!ns(D,P)&&(oe=Re(D),G(D,ne,R,!0),D=null),P.patchFlag===-2&&(me=!1,P.dynamicChildren=null);const{type:le,ref:A,shapeFlag:S}=P;switch(le){case cl:p(D,P,$,oe);break;case ui:x(D,P,$,oe);break;case Pl:D==null&&b(P,$,oe,pe);break;case xn:Z(D,P,$,oe,ne,R,pe,te,me);break;default:S&1?M(D,P,$,oe,ne,R,pe,te,me):S&6?z(D,P,$,oe,ne,R,pe,te,me):(S&64||S&128)&&le.process(D,P,$,oe,ne,R,pe,te,me,Be)}A!=null&&ne&&Gc(A,D&&D.ref,R,P||D,!P)},p=(D,P,$,oe)=>{if(D==null)n(P.el=a(P.children),$,oe);else{const ne=P.el=D.el;P.children!==D.children&&l(ne,P.children)}},x=(D,P,$,oe)=>{D==null?n(P.el=u(P.children||""),$,oe):P.el=D.el},b=(D,P,$,oe)=>{[D.el,D.anchor]=g(D.children,P,$,oe,D.el,D.anchor)},_=({el:D,anchor:P},$,oe)=>{let ne;for(;D&&D!==P;)ne=f(D),n(D,$,oe),D=ne;n(P,$,oe)},y=({el:D,anchor:P})=>{let $;for(;D&&D!==P;)$=f(D),i(D),D=$;i(P)},M=(D,P,$,oe,ne,R,pe,te,me)=>{pe=pe||P.type==="svg",D==null?E(P,$,oe,ne,R,pe,te,me):w(D,P,ne,R,pe,te,me)},E=(D,P,$,oe,ne,R,pe,te)=>{let me,le;const{type:A,props:S,shapeFlag:N,transition:K,dirs:Q}=D;if(me=D.el=o(D.type,R,S&&S.is,S),N&8?c(me,D.children):N&16&&v(D.children,me,null,oe,ne,R&&A!=="foreignObject",pe,te),Q&&Vr(D,null,oe,"created"),S){for(const xe in S)xe!=="value"&&!bu(xe)&&s(me,xe,null,S[xe],R,D.children,oe,ne,H);"value"in S&&s(me,"value",null,S.value),(le=S.onVnodeBeforeMount)&&Ei(le,oe,D)}T(me,D,D.scopeId,pe,oe),Q&&Vr(D,null,oe,"beforeMount");const fe=(!ne||ne&&!ne.pendingBranch)&&K&&!K.persisted;fe&&K.beforeEnter(me),n(me,P,$),((le=S&&S.onVnodeMounted)||fe||Q)&&Mn(()=>{le&&Ei(le,oe,D),fe&&K.enter(me),Q&&Vr(D,null,oe,"mounted")},ne)},T=(D,P,$,oe,ne)=>{if($&&m(D,$),oe)for(let R=0;R<oe.length;R++)m(D,oe[R]);if(ne){let R=ne.subTree;if(P===R){const pe=ne.vnode;T(D,pe,pe.scopeId,pe.slotScopeIds,ne.parent)}}},v=(D,P,$,oe,ne,R,pe,te,me=0)=>{for(let le=me;le<D.length;le++){const A=D[le]=te?vr(D[le]):Fi(D[le]);d(null,A,P,$,oe,ne,R,pe,te)}},w=(D,P,$,oe,ne,R,pe)=>{const te=P.el=D.el;let{patchFlag:me,dynamicChildren:le,dirs:A}=P;me|=D.patchFlag&16;const S=D.props||_t,N=P.props||_t;let K;$&&Hr($,!1),(K=N.onVnodeBeforeUpdate)&&Ei(K,$,P,D),A&&Vr(P,D,$,"beforeUpdate"),$&&Hr($,!0);const Q=ne&&P.type!=="foreignObject";if(le?F(D.dynamicChildren,le,te,$,oe,Q,R):pe||B(D,P,te,null,$,oe,Q,R,!1),me>0){if(me&16)O(te,P,S,N,$,oe,ne);else if(me&2&&S.class!==N.class&&s(te,"class",null,N.class,ne),me&4&&s(te,"style",S.style,N.style,ne),me&8){const fe=P.dynamicProps;for(let xe=0;xe<fe.length;xe++){const _e=fe[xe],ee=S[_e],Fe=N[_e];(Fe!==ee||_e==="value")&&s(te,_e,ee,Fe,ne,D.children,$,oe,H)}}me&1&&D.children!==P.children&&c(te,P.children)}else!pe&&le==null&&O(te,P,S,N,$,oe,ne);((K=N.onVnodeUpdated)||A)&&Mn(()=>{K&&Ei(K,$,P,D),A&&Vr(P,D,$,"updated")},oe)},F=(D,P,$,oe,ne,R,pe)=>{for(let te=0;te<P.length;te++){const me=D[te],le=P[te],A=me.el&&(me.type===xn||!ns(me,le)||me.shapeFlag&70)?h(me.el):$;d(me,le,A,null,oe,ne,R,pe,!0)}},O=(D,P,$,oe,ne,R,pe)=>{if($!==oe){if($!==_t)for(const te in $)!bu(te)&&!(te in oe)&&s(D,te,$[te],null,pe,P.children,ne,R,H);for(const te in oe){if(bu(te))continue;const me=oe[te],le=$[te];me!==le&&te!=="value"&&s(D,te,le,me,pe,P.children,ne,R,H)}"value"in oe&&s(D,"value",$.value,oe.value)}},Z=(D,P,$,oe,ne,R,pe,te,me)=>{const le=P.el=D?D.el:a(""),A=P.anchor=D?D.anchor:a("");let{patchFlag:S,dynamicChildren:N,slotScopeIds:K}=P;K&&(te=te?te.concat(K):K),D==null?(n(le,$,oe),n(A,$,oe),v(P.children,$,A,ne,R,pe,te,me)):S>0&&S&64&&N&&D.dynamicChildren?(F(D.dynamicChildren,N,$,ne,R,pe,te),(P.key!=null||ne&&P===ne.subTree)&&P0(D,P,!0)):B(D,P,$,A,ne,R,pe,te,me)},z=(D,P,$,oe,ne,R,pe,te,me)=>{P.slotScopeIds=te,D==null?P.shapeFlag&512?ne.ctx.activate(P,$,oe,pe,me):I(P,$,oe,ne,R,pe,me):q(D,P,me)},I=(D,P,$,oe,ne,R,pe)=>{const te=D.component=F3(D,oe,ne);if(ul(D)&&(te.ctx.renderer=Be),L3(te),te.asyncDep){if(ne&&ne.registerDep(te,V),!D.el){const me=te.subTree=ke(ui);x(null,me,P,$)}return}V(te,D,P,$,ne,R,pe)},q=(D,P,$)=>{const oe=P.component=D.component;if(U_(D,P,$))if(oe.asyncDep&&!oe.asyncResolved){Y(oe,P,$);return}else oe.next=P,C_(oe.update),oe.update();else P.el=D.el,oe.vnode=P},V=(D,P,$,oe,ne,R,pe)=>{const te=()=>{if(D.isMounted){let{next:A,bu:S,u:N,parent:K,vnode:Q}=D,fe=A,xe;Hr(D,!1),A?(A.el=Q.el,Y(D,A,pe)):A=Q,S&&Tl(S),(xe=A.props&&A.props.onVnodeBeforeUpdate)&&Ei(xe,K,A,Q),Hr(D,!0);const _e=Al(D),ee=D.subTree;D.subTree=_e,d(ee,_e,h(ee.el),Re(ee),D,ne,R),A.el=_e.el,fe===null&&O_(D,_e.el),N&&Mn(N,ne),(xe=A.props&&A.props.onVnodeUpdated)&&Mn(()=>Ei(xe,K,A,Q),ne)}else{let A;const{el:S,props:N}=P,{bm:K,m:Q,parent:fe}=D,xe=Zo(P);if(Hr(D,!1),K&&Tl(K),!xe&&(A=N&&N.onVnodeBeforeMount)&&Ei(A,fe,P),Hr(D,!0),S&&Ge){const _e=()=>{D.subTree=Al(D),Ge(S,D.subTree,D,ne,null)};xe?P.type.__asyncLoader().then(()=>!D.isUnmounted&&_e()):_e()}else{const _e=D.subTree=Al(D);d(null,_e,$,oe,D,ne,R),P.el=_e.el}if(Q&&Mn(Q,ne),!xe&&(A=N&&N.onVnodeMounted)){const _e=P;Mn(()=>Ei(A,fe,_e),ne)}(P.shapeFlag&256||fe&&Zo(fe.vnode)&&fe.vnode.shapeFlag&256)&&D.a&&Mn(D.a,ne),D.isMounted=!0,P=$=oe=null}},me=D.effect=new Lf(te,()=>zf(le),D.scope),le=D.update=()=>me.run();le.id=D.uid,Hr(D,!0),le()},Y=(D,P,$)=>{P.component=D;const oe=D.vnode.props;D.vnode=P,D.next=null,d3(D,P.props,oe,$),g3(D,P.children,$),Fo(),Ah(),Po()},B=(D,P,$,oe,ne,R,pe,te,me=!1)=>{const le=D&&D.children,A=D?D.shapeFlag:0,S=P.children,{patchFlag:N,shapeFlag:K}=P;if(N>0){if(N&128){L(le,S,$,oe,ne,R,pe,te,me);return}else if(N&256){se(le,S,$,oe,ne,R,pe,te,me);return}}K&8?(A&16&&H(le,ne,R),S!==le&&c($,S)):A&16?K&16?L(le,S,$,oe,ne,R,pe,te,me):H(le,ne,R,!0):(A&8&&c($,""),K&16&&v(S,$,oe,ne,R,pe,te,me))},se=(D,P,$,oe,ne,R,pe,te,me)=>{D=D||no,P=P||no;const le=D.length,A=P.length,S=Math.min(le,A);let N;for(N=0;N<S;N++){const K=P[N]=me?vr(P[N]):Fi(P[N]);d(D[N],K,$,null,ne,R,pe,te,me)}le>A?H(D,ne,R,!0,!1,S):v(P,$,oe,ne,R,pe,te,me,S)},L=(D,P,$,oe,ne,R,pe,te,me)=>{let le=0;const A=P.length;let S=D.length-1,N=A-1;for(;le<=S&&le<=N;){const K=D[le],Q=P[le]=me?vr(P[le]):Fi(P[le]);if(ns(K,Q))d(K,Q,$,null,ne,R,pe,te,me);else break;le++}for(;le<=S&&le<=N;){const K=D[S],Q=P[N]=me?vr(P[N]):Fi(P[N]);if(ns(K,Q))d(K,Q,$,null,ne,R,pe,te,me);else break;S--,N--}if(le>S){if(le<=N){const K=N+1,Q=K<A?P[K].el:oe;for(;le<=N;)d(null,P[le]=me?vr(P[le]):Fi(P[le]),$,Q,ne,R,pe,te,me),le++}}else if(le>N)for(;le<=S;)G(D[le],ne,R,!0),le++;else{const K=le,Q=le,fe=new Map;for(le=Q;le<=N;le++){const Ee=P[le]=me?vr(P[le]):Fi(P[le]);Ee.key!=null&&fe.set(Ee.key,le)}let xe,_e=0;const ee=N-Q+1;let Fe=!1,Ne=0;const Ae=new Array(ee);for(le=0;le<ee;le++)Ae[le]=0;for(le=K;le<=S;le++){const Ee=D[le];if(_e>=ee){G(Ee,ne,R,!0);continue}let Te;if(Ee.key!=null)Te=fe.get(Ee.key);else for(xe=Q;xe<=N;xe++)if(Ae[xe-Q]===0&&ns(Ee,P[xe])){Te=xe;break}Te===void 0?G(Ee,ne,R,!0):(Ae[Te-Q]=le+1,Te>=Ne?Ne=Te:Fe=!0,d(Ee,P[Te],$,null,ne,R,pe,te,me),_e++)}const Ie=Fe?b3(Ae):no;for(xe=Ie.length-1,le=ee-1;le>=0;le--){const Ee=Q+le,Te=P[Ee],nt=Ee+1<A?P[Ee+1].el:oe;Ae[le]===0?d(null,Te,$,nt,ne,R,pe,te,me):Fe&&(xe<0||le!==Ie[xe]?X(Te,$,nt,2):xe--)}}},X=(D,P,$,oe,ne=null)=>{const{el:R,type:pe,transition:te,children:me,shapeFlag:le}=D;if(le&6){X(D.component.subTree,P,$,oe);return}if(le&128){D.suspense.move(P,$,oe);return}if(le&64){pe.move(D,P,$,Be);return}if(pe===xn){n(R,P,$);for(let S=0;S<me.length;S++)X(me[S],P,$,oe);n(D.anchor,P,$);return}if(pe===Pl){_(D,P,$);return}if(oe!==2&&le&1&&te)if(oe===0)te.beforeEnter(R),n(R,P,$),Mn(()=>te.enter(R),ne);else{const{leave:S,delayLeave:N,afterLeave:K}=te,Q=()=>n(R,P,$),fe=()=>{S(R,()=>{Q(),K&&K()})};N?N(R,Q,fe):fe()}else n(R,P,$)},G=(D,P,$,oe=!1,ne=!1)=>{const{type:R,props:pe,ref:te,children:me,dynamicChildren:le,shapeFlag:A,patchFlag:S,dirs:N}=D;if(te!=null&&Gc(te,null,$,D,!0),A&256){P.ctx.deactivate(D);return}const K=A&1&&N,Q=!Zo(D);let fe;if(Q&&(fe=pe&&pe.onVnodeBeforeUnmount)&&Ei(fe,P,D),A&6)ge(D.component,$,oe);else{if(A&128){D.suspense.unmount($,oe);return}K&&Vr(D,null,P,"beforeUnmount"),A&64?D.type.remove(D,P,$,ne,Be,oe):le&&(R!==xn||S>0&&S&64)?H(le,P,$,!1,!0):(R===xn&&S&384||!ne&&A&16)&&H(me,P,$),oe&&he(D)}(Q&&(fe=pe&&pe.onVnodeUnmounted)||K)&&Mn(()=>{fe&&Ei(fe,P,D),K&&Vr(D,null,P,"unmounted")},$)},he=D=>{const{type:P,el:$,anchor:oe,transition:ne}=D;if(P===xn){ce($,oe);return}if(P===Pl){y(D);return}const R=()=>{i($),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(D.shapeFlag&1&&ne&&!ne.persisted){const{leave:pe,delayLeave:te}=ne,me=()=>pe($,R);te?te(D.el,R,me):me()}else R()},ce=(D,P)=>{let $;for(;D!==P;)$=f(D),i(D),D=$;i(P)},ge=(D,P,$)=>{const{bum:oe,scope:ne,update:R,subTree:pe,um:te}=D;oe&&Tl(oe),ne.stop(),R&&(R.active=!1,G(pe,D,P,$)),te&&Mn(te,P),Mn(()=>{D.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},H=(D,P,$,oe=!1,ne=!1,R=0)=>{for(let pe=R;pe<D.length;pe++)G(D[pe],P,$,oe,ne)},Re=D=>D.shapeFlag&6?Re(D.component.subTree):D.shapeFlag&128?D.suspense.next():f(D.anchor||D.el),ye=(D,P,$)=>{D==null?P._vnode&&G(P._vnode,null,null,!0):d(P._vnode||null,D,P,null,null,null,$),Ah(),d0(),P._vnode=D},Be={p:d,um:G,m:X,r:he,mt:I,mc:v,pc:B,pbc:F,n:Re,o:r};let ve,Ge;return e&&([ve,Ge]=e(Be)),{render:ye,hydrate:ve,createApp:x3(ye,ve)}}function Hr({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function P0(r,e,t=!1){const n=r.children,i=e.children;if(Ye(n)&&Ye(i))for(let s=0;s<n.length;s++){const o=n[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=vr(i[s]),a.el=o.el),t||P0(o,a)),a.type===cl&&(a.el=o.el)}}function b3(r){const e=r.slice(),t=[0];let n,i,s,o,a;const u=r.length;for(n=0;n<u;n++){const l=r[n];if(l!==0){if(i=t[t.length-1],r[i]<l){e[n]=i,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,r[t[a]]<l?s=a+1:o=a;l<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const M3=r=>r.__isTeleport,xn=Symbol(void 0),cl=Symbol(void 0),ui=Symbol(void 0),Pl=Symbol(void 0),Jo=[];let Mi=null;function St(r=!1){Jo.push(Mi=r?null:[])}function S3(){Jo.pop(),Mi=Jo[Jo.length-1]||null}let ma=1;function Oh(r){ma+=r}function L0(r){return r.dynamicChildren=ma>0?Mi||no:null,S3(),ma>0&&Mi&&Mi.push(r),r}function It(r,e,t,n,i,s){return L0(ue(r,e,t,n,i,s,!0))}function Vf(r,e,t,n,i){return L0(ke(r,e,t,n,i,!0))}function R0(r){return r?r.__v_isVNode===!0:!1}function ns(r,e){return r.type===e.type&&r.key===e.key}const fl="__vInternal",B0=({key:r})=>r!=null?r:null,Su=({ref:r,ref_key:e,ref_for:t})=>r!=null?Wt(r)||an(r)||Ze(r)?{i:en,r,k:e,f:!!t}:r:null;function ue(r,e=null,t=null,n=0,i=null,s=r===xn?0:1,o=!1,a=!1){const u={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&B0(e),ref:e&&Su(e),scopeId:al,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:en};return a?(Hf(u,t),s&128&&r.normalize(u)):t&&(u.shapeFlag|=Wt(t)?8:16),ma>0&&!o&&Mi&&(u.patchFlag>0||s&6)&&u.patchFlag!==32&&Mi.push(u),u}const ke=w3;function w3(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===i3)&&(r=ui),R0(r)){const a=Ir(r,e,!0);return t&&Hf(a,t),ma>0&&!s&&Mi&&(a.shapeFlag&6?Mi[Mi.indexOf(r)]=a:Mi.push(a)),a.patchFlag|=-2,a}if(O3(r)&&(r=r.__vccOpts),e){e=E3(e);let{class:a,style:u}=e;a&&!Wt(a)&&(e.class=la(a)),Tt(u)&&(s0(u)&&!Ye(u)&&(u=cn({},u)),e.style=Qu(u))}const o=Wt(r)?1:N_(r)?128:M3(r)?64:Tt(r)?4:Ze(r)?2:0;return ue(r,e,t,n,i,o,s,!0)}function E3(r){return r?s0(r)||fl in r?cn({},r):r:null}function Ir(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:o}=r,a=e?A3(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:a,key:a&&B0(a),ref:e&&e.ref?t&&i?Ye(i)?i.concat(Su(e)):[i,Su(e)]:Su(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:o,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==xn?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Ir(r.ssContent),ssFallback:r.ssFallback&&Ir(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx}}function Me(r=" ",e=0){return ke(cl,null,r,e)}function T3(r="",e=!1){return e?(St(),Vf(ui,null,r)):ke(ui,null,r)}function Fi(r){return r==null||typeof r=="boolean"?ke(ui):Ye(r)?ke(xn,null,r.slice()):typeof r=="object"?vr(r):ke(cl,null,String(r))}function vr(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:Ir(r)}function Hf(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(Ye(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Hf(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(fl in e)?e._ctx=en:i===3&&en&&(en.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:en},t=32):(e=String(e),n&64?(t=16,e=[Me(e)]):t=8);r.children=e,r.shapeFlag|=t}function A3(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=la([e.class,n.class]));else if(i==="style")e.style=Qu([e.style,n.style]);else if(el(i)){const s=e[i],o=n[i];o&&s!==o&&!(Ye(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=n[i])}return e}function Ei(r,e,t,n=null){ai(r,e,7,[t,n])}const C3=F0();let D3=0;function F3(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||C3,s={uid:D3++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:T0(n,i),emitsOptions:m0(n,i),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:n.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=P_.bind(null,s),r.ce&&r.ce(s),s}let $t=null;const P3=()=>$t||en,mo=r=>{$t=r,r.scope.on()},hs=()=>{$t&&$t.scope.off(),$t=null};function I0(r){return r.vnode.shapeFlag&4}let ga=!1;function L3(r,e=!1){ga=e;const{props:t,children:n}=r.vnode,i=I0(r);h3(r,t,i,e),m3(r,n);const s=i?R3(r,e):void 0;return ga=!1,s}function R3(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=o0(new Proxy(r.ctx,o3));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?I3(r):null;mo(r),Fo();const s=Dr(n,r,0,[r.props,i]);if(Po(),hs(),Hp(s)){if(s.then(hs,hs),e)return s.then(o=>{Nh(r,o,e)}).catch(o=>{sl(o,r,0)});r.asyncDep=s}else Nh(r,s,e)}else U0(r,e)}function Nh(r,e,t){Ze(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:Tt(e)&&(r.setupState=l0(e)),U0(r,t)}let kh;function U0(r,e,t){const n=r.type;if(!r.render){if(!e&&kh&&!n.render){const i=n.template||Wf(r).template;if(i){const{isCustomElement:s,compilerOptions:o}=r.appContext.config,{delimiters:a,compilerOptions:u}=n,l=cn(cn({isCustomElement:s,delimiters:a},o),u);n.render=kh(i,l)}}r.render=n.render||Si}mo(r),Fo(),a3(r),Po(),hs()}function B3(r){return new Proxy(r.attrs,{get(e,t){return qn(r,"get","$attrs"),e[t]}})}function I3(r){const e=n=>{r.exposed=n||{}};let t;return{get attrs(){return t||(t=B3(r))},slots:r.slots,emit:r.emit,expose:e}}function hl(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(l0(o0(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ko)return Ko[t](r)},has(e,t){return t in e||t in Ko}}))}function U3(r,e=!0){return Ze(r)?r.displayName||r.name:r.name||e&&r.__name}function O3(r){return Ze(r)&&"__vccOpts"in r}const N3=(r,e)=>w_(r,e,ga),k3=Symbol(""),z3=()=>Mu(k3),W3="3.2.45",G3="http://www.w3.org/2000/svg",is=typeof document<"u"?document:null,zh=is&&is.createElement("template"),V3={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?is.createElementNS(G3,r):is.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>is.createTextNode(r),createComment:r=>is.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>is.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,n,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{zh.innerHTML=n?`<svg>${r}</svg>`:r;const a=zh.content;if(n){const u=a.firstChild;for(;u.firstChild;)a.appendChild(u.firstChild);a.removeChild(u)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function H3(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function X3(r,e,t){const n=r.style,i=Wt(t);if(t&&!i){for(const s in t)Vc(n,s,t[s]);if(e&&!Wt(e))for(const s in e)t[s]==null&&Vc(n,s,"")}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const Wh=/\s*!important$/;function Vc(r,e,t){if(Ye(t))t.forEach(n=>Vc(r,e,n));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const n=q3(r,e);Wh.test(t)?r.setProperty(Do(n),t.replace(Wh,""),"important"):r[n]=t}}const Gh=["Webkit","Moz","ms"],Ll={};function q3(r,e){const t=Ll[e];if(t)return t;let n=ki(e);if(n!=="filter"&&n in r)return Ll[e]=n;n=il(n);for(let i=0;i<Gh.length;i++){const s=Gh[i]+n;if(s in r)return Ll[e]=s}return e}const Vh="http://www.w3.org/1999/xlink";function $3(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(Vh,e.slice(6,e.length)):r.setAttributeNS(Vh,e,t);else{const s=Ug(e);t==null||s&&!Wp(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function Y3(r,e,t,n,i,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,i,s),r[e]=t==null?"":t;return}if(e==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=t;const u=t==null?"":t;(r.value!==u||r.tagName==="OPTION")&&(r.value=u),t==null&&r.removeAttribute(e);return}let a=!1;if(t===""||t==null){const u=typeof r[e];u==="boolean"?t=Wp(t):t==null&&u==="string"?(t="",a=!0):u==="number"&&(t=0,a=!0)}try{r[e]=t}catch{}a&&r.removeAttribute(e)}function j3(r,e,t,n){r.addEventListener(e,t,n)}function Z3(r,e,t,n){r.removeEventListener(e,t,n)}function K3(r,e,t,n,i=null){const s=r._vei||(r._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,u]=J3(e);if(n){const l=s[e]=tx(n,i);j3(r,a,l,u)}else o&&(Z3(r,a,o,u),s[e]=void 0)}}const Hh=/(?:Once|Passive|Capture)$/;function J3(r){let e;if(Hh.test(r)){e={};let n;for(;n=r.match(Hh);)r=r.slice(0,r.length-n[0].length),e[n[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):Do(r.slice(2)),e]}let Rl=0;const Q3=Promise.resolve(),ex=()=>Rl||(Q3.then(()=>Rl=0),Rl=Date.now());function tx(r,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;ai(nx(n,t.value),e,5,[n])};return t.value=r,t.attached=ex(),t}function nx(r,e){if(Ye(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const Xh=/^on[a-z]/,ix=(r,e,t,n,i=!1,s,o,a,u)=>{e==="class"?H3(r,n,i):e==="style"?X3(r,t,n):el(e)?Af(e)||K3(r,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rx(r,e,n,i))?Y3(r,e,n,s,o,a,u):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),$3(r,e,n,i))};function rx(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&Xh.test(e)&&Ze(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||Xh.test(e)&&Wt(t)?!1:e in r}const sx={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};H_.props;const ox=cn({patchProp:ix},V3);let qh;function ax(){return qh||(qh=v3(ox))}const ux=(...r)=>{const e=ax().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=lx(n);if(!i)return;const s=e._component;!Ze(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function lx(r){return Wt(r)?document.querySelector(r):r}const cx="/sandbox-vite/assets/first-view.1f715004.mov";function $i(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function O0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},go={duration:.5,overwrite:!1,delay:0},Xf,Tn,Ut,ri=1e8,dt=1/ri,Hc=Math.PI*2,fx=Hc/4,hx=0,N0=Math.sqrt,dx=Math.cos,px=Math.sin,jt=function(e){return typeof e=="string"},Ft=function(e){return typeof e=="function"},tr=function(e){return typeof e=="number"},qf=function(e){return typeof e>"u"},zi=function(e){return typeof e=="object"},An=function(e){return e!==!1},k0=function(){return typeof window<"u"},ka=function(e){return Ft(e)||jt(e)},z0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,Xc=/(?:-?\.?\d|\.)+/gi,W0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,G0=/[+-]=-?[.\d]+/,V0=/[^,'"\[\]\s]+/gi,mx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,ei,qc,$f,$n={},zu={},H0,X0=function(e){return(zu=Ms(e,$n))&&Yn},Yf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wu=function(e,t){return!t&&console.warn(e)},q0=function(e,t){return e&&($n[e]=t)&&zu&&(zu[e]=t)||$n},_a=function(){return 0},gx={suppressEvents:!0,isStart:!0,kill:!1},wu={suppressEvents:!0,kill:!1},_x={suppressEvents:!0},jf={},Fr=[],$c={},$0,kn={},Il={},$h=30,Eu=[],Zf="",Kf=function(e){var t=e[0],n,i;if(zi(t)||Ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Eu.length;i--&&!Eu[i].targetTest(t););n=Eu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new mm(e[i],n)))||e.splice(i,1);return e},ds=function(e){return e._gsap||Kf(si(e))[0]._gsap},Y0=function(e,t,n){return(n=e[t])&&Ft(n)?e[t]():qf(n)&&e.getAttribute&&e.getAttribute(t)||n},Cn=function(e,t){return(e=e.split(",")).forEach(t)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},Qt=function(e){return Math.round(e*1e7)/1e7||0},oo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},xx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Gu=function(){var e=Fr.length,t=Fr.slice(0),n,i;for($c={},Fr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},j0=function(e,t,n,i){Fr.length&&Gu(),e.render(t,n,i||Tn&&t<0&&(e._initted||e._startAt)),Fr.length&&Gu()},Z0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(V0).length<2?t:jt(e)?e.trim():e},K0=function(e){return e},hi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},vx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ms=function(e,t){for(var n in t)e[n]=t[n];return e},Yh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=zi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Vu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Qo=function(e){var t=e.parent||wt,n=e.keyframes?vx(ln(e.keyframes)):hi;if(An(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},yx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},J0=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},dl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ur=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},bx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Yc=function(e,t,n,i){return e._startAt&&(Tn?e._startAt.revert(wu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Mx=function r(e){return!e||e._ts&&r(e.parent)},jh=function(e){return e._repeat?_o(e._tTime,e=e.duration()+e._rDelay)*e:0},_o=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Hu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},pl=function(e){return e._end=Qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||dt)||0))},ml=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),pl(e),n._dirty||ps(n,e)),e},Q0=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Hu(e.rawTime(),t),(!t._dur||Ta(0,t.totalDuration(),n)-t._tTime>dt)&&t.render(n,!0)),ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-dt}},Ri=function(e,t,n,i){return t.parent&&Ur(t),t._start=Qt((tr(n)?n:n||e!==wt?Qn(e,n,t):e._time)+t._delay),t._end=Qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),J0(e,t,"_first","_last",e._sort?"_start":0),jc(t)||(e._recent=t),i||Q0(e,t),e._ts<0&&ml(e,e._tTime),e},em=function(e,t){return($n.ScrollTrigger||Yf("scrollTrigger",t))&&$n.ScrollTrigger.create(t,e)},tm=function(e,t,n,i,s){if(Qf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$0!==Wn.frame)return Fr.push(e),e._lazy=[s,i],1},Sx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},jc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},wx=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Sx(e)&&!(!e._initted&&jc(e))||(e._ts<0||e._dp._ts<0)&&!jc(e))?0:1,a=e._rDelay,u=0,l,c,h;if(a&&e._repeat&&(u=Ta(0,e._tDur,t),c=_o(u,a),e._yoyo&&c&1&&(o=1-o),c!==_o(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Tn||i||e._zTime===dt||!t&&e._zTime){if(!e._initted&&tm(e,t,i,n,u))return;for(h=e._zTime,e._zTime=t||(n?dt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=u,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&Yc(e,t,n,!0),e._onUpdate&&!n&&oi(e,"onUpdate"),u&&e._repeat&&!n&&e.parent&&oi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ur(e,1),!n&&!Tn&&(oi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ex=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},xo=function(e,t,n,i){var s=e._repeat,o=Qt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Qt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&ml(e,e._tTime=e._tDur*a),e.parent&&pl(e),n||ps(e.parent,e),e},Zh=function(e){return e instanceof En?ps(e):xo(e,e._dur)},Tx={_start:0,endTime:_a,totalDuration:_a},Qn=function r(e,t,n){var i=e.labels,s=e._recent||Tx,o=e.duration()>=ri?s.endTime(!1):e._dur,a,u,l;return jt(t)&&(isNaN(t)||t in i)?(u=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),u==="<"||u===">"?(a>=0&&(t=t.replace(/=/,"")),(u==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(u=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(u=u/100*(ln(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+u:o+u)):t==null?o:+t},ea=function(e,t,n){var i=tr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,u;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,u=n;u&&!("immediateRender"in a);)a=u.vars.defaults||{},u=An(u.vars.inherit)&&u.parent;o.immediateRender=An(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new kt(t[0],o,t[s+1])},zr=function(e,t){return e||e===0?t(e):t},Ta=function(e,t,n){return n<e?e:n>t?t:n},on=function(e,t){return!jt(e)||!(t=mx.exec(e))?"":t[1]},Ax=function(e,t,n){return zr(n,function(i){return Ta(e,t,i)})},Zc=[].slice,nm=function(e,t){return e&&zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&zi(e[0]))&&!e.nodeType&&e!==ei},Cx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return jt(i)&&!t||nm(i,1)?(s=n).push.apply(s,si(i)):n.push(i)})||n},si=function(e,t,n){return Ut&&!t&&Ut.selector?Ut.selector(e):jt(e)&&!n&&(qc||!vo())?Zc.call((t||$f).querySelectorAll(e),0):ln(e)?Cx(e,n):nm(e)?Zc.call(e,0):e?[e]:[]},Kc=function(e){return e=si(e)[0]||Wu("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return si(t,n.querySelectorAll?n:n===e?Wu("Invalid scope")||$f.createElement("div"):e)}},im=function(e){return e.sort(function(){return .5-Math.random()})},rm=function(e){if(Ft(e))return e;var t=zi(e)?e:{each:e},n=ms(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,u=isNaN(i)||a,l=t.axis,c=i,h=i;return jt(i)?c=h={center:.5,edges:.5,end:1}[i]||0:!a&&u&&(c=i[0],h=i[1]),function(f,m,g){var d=(g||t).length,p=o[d],x,b,_,y,M,E,T,v,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,ri])[1],!w){for(T=-ri;T<(T=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(p=o[d]=[],x=u?Math.min(w,d)*c-.5:i%w,b=w===ri?0:u?d*h/w-.5:i/w|0,T=0,v=ri,E=0;E<d;E++)_=E%w-x,y=b-(E/w|0),p[E]=M=l?Math.abs(l==="y"?y:_):N0(_*_+y*y),M>T&&(T=M),M<v&&(v=M);i==="random"&&im(p),p.max=T-v,p.min=v,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:l?l==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),p.b=d<0?s-d:s,p.u=on(t.amount||t.each)||0,n=n&&d<0?hm(n):n}return d=(p[f]-p.min)/p.max||0,Qt(p.b+(n?n(d):d)*p.v)+p.u}},Jc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Qt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(tr(n)?0:on(n))}},sm=function(e,t){var n=ln(e),i,s;return!n&&zi(e)&&(i=n=e.radius||ri,e.values?(e=si(e.values),(s=!tr(e[0]))&&(i*=i)):e=Jc(e.increment)),zr(t,n?Ft(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),u=parseFloat(s?o.y:0),l=ri,c=0,h=e.length,f,m;h--;)s?(f=e[h].x-a,m=e[h].y-u,f=f*f+m*m):f=Math.abs(e[h]-a),f<l&&(l=f,c=h);return c=!i||l<=i?e[c]:o,s||c===o||tr(o)?c:c+on(o)}:Jc(e))},om=function(e,t,n,i){return zr(ln(e)?!t:n===!0?!!(n=0):!i,function(){return ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Dx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Fx=function(e,t){return function(n){return e(parseFloat(n))+(t||on(n))}},Px=function(e,t,n){return um(e,t,0,1,n)},am=function(e,t,n){return zr(n,function(i){return e[~~t(i)]})},Lx=function r(e,t,n){var i=t-e;return ln(e)?am(e,r(0,e.length),t):zr(n,function(s){return(i+(s-e)%i)%i+e})},Rx=function r(e,t,n){var i=t-e,s=i*2;return ln(e)?am(e,r(0,e.length-1),t):zr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},xa=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?V0:Xc),n+=e.substr(t,i-t)+om(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},um=function(e,t,n,i,s){var o=t-e,a=i-n;return zr(s,function(u){return n+((u-e)/o*a||0)})},Bx=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=jt(e),a={},u,l,c,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(ln(e)&&!ln(t)){for(c=[],h=e.length,f=h-2,l=1;l<h;l++)c.push(r(e[l-1],e[l]));h--,s=function(g){g*=h;var d=Math.min(f,~~g);return c[d](g-d)},n=t}else i||(e=Ms(ln(e)?[]:{},e));if(!c){for(u in t)Jf.call(a,e,u,"get",t[u]);s=function(g){return nh(g,a)||(o?e.p:e)}}}return zr(n,s)},Kh=function(e,t,n){var i=e.labels,s=ri,o,a,u;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(u=o,s=a);return u},oi=function(e,t,n){var i=e.vars,s=i[t],o=Ut,a=e._ctx,u,l,c;if(!!s)return u=i[t+"Params"],l=i.callbackScope||e,n&&Fr.length&&Gu(),a&&(Ut=a),c=u?s.apply(l,u):s.call(l),Ut=o,c},Vo=function(e){return Ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Tn),e.progress()<1&&oi(e,"onInterrupt"),e},Js,Ix=function(e){e=!e.name&&e.default||e;var t=e.name,n=Ft(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:_a,render:nh,add:Jf,kill:Kx,modifier:Zx,rawVars:0},o={targetTest:0,get:0,getSetter:th,aliases:{},register:0};if(vo(),e!==i){if(kn[t])return;hi(i,hi(Vu(e,s),o)),Ms(i.prototype,Ms(s,Vu(e,o))),kn[i.prop=t]=i,e.targetTest&&(Eu.push(i),jf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}q0(t,i),e.register&&e.register(Yn,i,Dn)},pt=255,Ho={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},Ul=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*pt+.5|0},lm=function(e,t,n){var i=e?tr(e)?[e>>16,e>>8&pt,e&pt]:0:Ho.black,s,o,a,u,l,c,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ho[e])i=Ho[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&pt,i&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Xc),!t)u=+i[0]%360/360,l=+i[1]/100,c=+i[2]/100,o=c<=.5?c*(l+1):c+l-c*l,s=c*2-o,i.length>3&&(i[3]*=1),i[0]=Ul(u+1/3,s,o),i[1]=Ul(u,s,o),i[2]=Ul(u-1/3,s,o);else if(~e.indexOf("="))return i=e.match(W0),n&&i.length<4&&(i[3]=1),i}else i=e.match(Xc)||Ho.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/pt,o=i[1]/pt,a=i[2]/pt,h=Math.max(s,o,a),f=Math.min(s,o,a),c=(h+f)/2,h===f?u=l=0:(m=h-f,l=c>.5?m/(2-h-f):m/(h+f),u=h===s?(o-a)/m+(o<a?6:0):h===o?(a-s)/m+2:(s-o)/m+4,u*=60),i[0]=~~(u+.5),i[1]=~~(l*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},cm=function(e){var t=[],n=[],i=-1;return e.split(Pr).forEach(function(s){var o=s.match(Ks)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Jh=function(e,t,n){var i="",s=(e+i).match(Pr),o=t?"hsla(":"rgba(",a=0,u,l,c,h;if(!s)return e;if(s=s.map(function(f){return(f=lm(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(c=cm(e),u=n.c,u.join(i)!==c.c.join(i)))for(l=e.replace(Pr,"1").split(Ks),h=l.length-1;a<h;a++)i+=l[a]+(~u.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:n).shift());if(!l)for(l=e.split(Pr),h=l.length-1;a<h;a++)i+=l[a]+s[a];return i+l[h]},Pr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ho)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Ux=/hsl[a]?\(/,fm=function(e){var t=e.join(" "),n;if(Pr.lastIndex=0,Pr.test(t))return n=Ux.test(t),e[1]=Jh(e[1],n),e[0]=Jh(e[0],n,cm(e[1])),!0},va,Wn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],u,l,c,h,f,m,g=function d(p){var x=r()-i,b=p===!0,_,y,M,E;if(x>e&&(n+=x-t),i+=x,M=i-n,_=M-o,(_>0||b)&&(E=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=_+(_>=s?4:s-_),y=1),b||(u=l(d)),y)for(m=0;m<a.length;m++)a[m](M,f,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){H0&&(!qc&&k0()&&(ei=qc=window,$f=ei.document||{},$n.gsap=Yn,(ei.gsapVersions||(ei.gsapVersions=[])).push(Yn.version),X0(zu||ei.GreenSockGlobals||!ei.gsap&&ei||{}),c=ei.requestAnimationFrame),u&&h.sleep(),l=c||function(p){return setTimeout(p,o-h.time*1e3+1|0)},va=1,g(2))},sleep:function(){(c?ei.cancelAnimationFrame:clearTimeout)(u),va=0,l=_a},lagSmoothing:function(p,x){e=p||1/dt,t=Math.min(x,e,0)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,x,b){var _=x?function(y,M,E,T){p(y,M,E,T),h.remove(_)}:p;return h.remove(p),a[b?"unshift":"push"](_),vo(),_},remove:function(p,x){~(x=a.indexOf(p))&&a.splice(x,1)&&m>=x&&m--},_listeners:a},h}(),vo=function(){return!va&&Wn.wake()},st={},Ox=/^[\d.\-M][\d.\-,\s]/,Nx=/["']/g,kx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,u,l;s<o;s++)u=n[s],a=s!==o-1?u.lastIndexOf(","):u.length,l=u.substr(0,a),t[i]=isNaN(l)?l.replace(Nx,"").trim():+l,i=u.substr(a+1).trim();return t},zx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Wx=function(e){var t=(e+"").split("("),n=st[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[kx(t[1])]:zx(e).split(",").map(Z0)):st._CE&&Ox.test(e)?st._CE("",e):n},hm=function(e){return function(t){return 1-e(1-t)}},dm=function r(e,t){for(var n=e._first,i;n;)n instanceof En?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ms=function(e,t){return e&&(Ft(e)?e:st[e]||Wx(e))||t},Fs=function(e,t,n,i){n===void 0&&(n=function(u){return 1-t(1-u)}),i===void 0&&(i=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Cn(e,function(a){st[a]=$n[a]=s,st[o=a.toLowerCase()]=n;for(var u in s)st[o+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=st[a+"."+u]=s[u]}),s},pm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ol=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Hc*(Math.asin(1/i)||0),a=function(c){return c===1?1:i*Math.pow(2,-10*c)*px((c-o)*s)+1},u=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:pm(a);return s=Hc/s,u.config=function(l,c){return r(e,l,c)},u},Nl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:pm(n);return i.config=function(s){return r(e,s)},i};Cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Fs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});st.Linear.easeNone=st.none=st.Linear.easeIn;Fs("Elastic",Ol("in"),Ol("out"),Ol());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Fs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Fs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Fs("Circ",function(r){return-(N0(1-r*r)-1)});Fs("Sine",function(r){return r===1?1:-dx(r*fx)+1});Fs("Back",Nl("in"),Nl("out"),Nl());st.SteppedEase=st.steps=$n.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-dt;return function(a){return((i*Ta(0,o,a)|0)+s)*n}}};go.ease=st["quad.out"];Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zf+=r+","+r+"Params,"});var mm=function(e,t){this.id=hx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Y0,this.set=t?t.getSetter:th},yo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,xo(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),va||Wn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,xo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(vo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ml(this,n),!s._dp||s.parent||Q0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===dt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),j0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?_o(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-dt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Hu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-dt?0:this._rts,this.totalTime(Ta(-this._delay,this._tDur,i),!0),pl(this),bx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(vo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==dt&&(this._tTime-=dt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ri(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Hu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=_x);var i=Tn;return Tn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Tn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Zh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Qn(this,n),An(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,An(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-dt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-dt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Ft(n)?n:K0,a=function(){var l=i.then;i.then=null,Ft(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),s(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Vo(this)},r}();hi(yo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-dt,_prom:0,_ps:!1,_rts:1});var En=function(r){O0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),wt&&Ri(n.parent||wt,$i(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&em($i(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ea(0,arguments,this),this},t.from=function(i,s,o){return ea(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ea(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Qo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new kt(i,s,Qn(this,o),1),this},t.call=function(i,s,o){return Ri(this,kt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,u,l,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=c,o.parent=this,new kt(i,o,Qn(this,u)),this},t.staggerFrom=function(i,s,o,a,u,l,c){return o.runBackwards=1,Qo(o).immediateRender=An(o.immediateRender),this.staggerTo(i,s,o,a,u,l,c)},t.staggerFromTo=function(i,s,o,a,u,l,c,h){return a.startAt=o,Qo(a).immediateRender=An(a.immediateRender),this.staggerTo(i,s,a,u,l,c,h)},t.render=function(i,s,o){var a=this._time,u=this._dirty?this.totalDuration():this._tDur,l=this._dur,c=i<=0?0:Qt(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,m,g,d,p,x,b,_,y,M,E,T;if(this!==wt&&c>u&&i>=0&&(c=u),c!==this._tTime||o||h){if(a!==this._time&&l&&(c+=this._time-a,i+=this._time-a),f=c,y=this._start,_=this._ts,x=!_,h&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Qt(c%p),c===u?(d=this._repeat,f=l):(d=~~(c/p),d&&d===c/p&&(f=l,d--),f>l&&(f=l)),M=_o(this._tTime,p),!a&&this._tTime&&M!==d&&(M=d),E&&d&1&&(f=l-f,T=1),d!==M&&!this._lock){var v=E&&M&1,w=v===(E&&d&1);if(d<M&&(v=!v),a=v?0:l,this._lock=1,this.render(a||(T?0:Qt(d*p)),s,!l)._lock=0,this._tTime=c,!s&&this.parent&&oi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,u=this._tDur,w&&(this._lock=2,a=v?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;dm(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Ex(this,Qt(a),Qt(f)),b&&(c-=f-(f=b._start))),this._tTime=c,this._time=f,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&(oi(this,"onStart"),this._tTime!==c))return this;if(f>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,o),f!==this._time||!this._ts&&!x){b=0,g&&(c+=this._zTime=-dt);break}}m=g}else{m=this._last;for(var F=i<0?i:f;m;){if(g=m._prev,(m._act||F<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(F-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(F-m._start)*m._ts,s,o||Tn&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!x){b=0,g&&(c+=this._zTime=F?-dt:dt);break}}m=g}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-dt)._zTime=f>=a?1:-1,this._ts))return this._start=y,pl(this),this.render(i,s,o);this._onUpdate&&!s&&oi(this,"onUpdate",!0),(c===u&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(c===u&&this._ts>0||!c&&this._ts<0)&&Ur(this,1),!s&&!(i<0&&!a)&&(c||a||!u)&&(oi(this,c===u&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(tr(s)||(s=Qn(this,s,i)),!(i instanceof yo)){if(ln(i))return i.forEach(function(a){return o.add(a,s)}),this;if(jt(i))return this.addLabel(i,s);if(Ft(i))i=kt.delayedCall(0,i);else return this}return this!==i?Ri(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ri);for(var u=[],l=this._first;l;)l._start>=a&&(l instanceof kt?s&&u.push(l):(o&&u.push(l),i&&u.push.apply(u,l.getChildren(!0,s,o)))),l=l._next;return u},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return jt(i)?this.removeLabel(i):Ft(i)?this.killTweensOf(i):(dl(this,i),i===this._recent&&(this._recent=this._last),ps(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Qt(Wn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Qn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=kt.delayedCall(0,s||_a,o);return a.data="isPause",this._hasPause=1,Ri(this,a,Qn(this,i))},t.removePause=function(i){var s=this._first;for(i=Qn(this,i);s;)s._start===i&&s.data==="isPause"&&Ur(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),u=a.length;u--;)yr!==a[u]&&a[u].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=si(i),u=this._first,l=tr(s),c;u;)u instanceof kt?xx(u._targets,a)&&(l?(!yr||u._initted&&u._ts)&&u.globalTime(0)<=s&&u.globalTime(u.totalDuration())>s:!s||u.isActive())&&o.push(u):(c=u.getTweensOf(a,s)).length&&o.push.apply(o,c),u=u._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Qn(o,i),u=s,l=u.startAt,c=u.onStart,h=u.onStartParams,f=u.immediateRender,m,g=kt.to(o,hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||dt,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==p&&xo(g,p,0,1).render(g._time,!0,!0),m=1}c&&c.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,hi({startAt:{time:Qn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Kh(this,Qn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Kh(this,Qn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+dt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,u=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in u)u[l]>=o&&(u[l]+=i);return ps(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ps(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,u=ri,l,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>u&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ri(o,a,c-a._delay,1)._lock=0):u=c,c<0&&a._ts&&(s-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),u=0),a._end>s&&a._ts&&(s=a._end),a=l;xo(o,o===wt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(wt._ts&&(j0(wt,Hu(i,wt)),$0=Wn.frame),Wn.frame>=$h){$h+=Hn.autoSleep||120;var s=wt._first;if((!s||!s._ts)&&Hn.autoSleep&&Wn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Wn.sleep()}}},e}(yo);hi(En.prototype,{_lock:0,_hasPause:0,_forcing:0});var Gx=function(e,t,n,i,s,o,a){var u=new Dn(this._pt,e,t,0,1,bm,null,s),l=0,c=0,h,f,m,g,d,p,x,b;for(u.b=n,u.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=xa(i)),o&&(b=[n,i],o(b,e,t),n=b[0],i=b[1]),f=n.match(Bl)||[];h=Bl.exec(i);)g=h[0],d=i.substring(l,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[c++]&&(p=parseFloat(f[c-1])||0,u._pt={_next:u._pt,p:d||c===1?d:",",s:p,c:g.charAt(1)==="="?oo(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},l=Bl.lastIndex);return u.c=l<i.length?i.substring(l,i.length):"",u.fp=a,(G0.test(i)||x)&&(u.e=0),this._pt=u,u},Jf=function(e,t,n,i,s,o,a,u,l,c){Ft(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Ft(h)?l?e[t.indexOf("set")||!Ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,m=Ft(h)?l?$x:vm:eh,g;if(jt(i)&&(~i.indexOf("random(")&&(i=xa(i)),i.charAt(1)==="="&&(g=oo(f,i)+(on(f)||0),(g||g===0)&&(i=g))),!c||f!==i||Qc)return!isNaN(f*i)&&i!==""?(g=new Dn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?jx:ym,0,m),l&&(g.fp=l),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Yf(t,i),Gx.call(this,e,t,f,i,m,u||Hn.stringFilter,l))},Vx=function(e,t,n,i,s){if(Ft(e)&&(e=ta(e,s,t,n,i)),!zi(e)||e.style&&e.nodeType||ln(e)||z0(e))return jt(e)?ta(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ta(e[a],s,t,n,i);return o},gm=function(e,t,n,i,s,o){var a,u,l,c;if(kn[e]&&(a=new kn[e]).init(s,a.rawVars?t[e]:Vx(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=u=new Dn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Js))for(l=n._ptLookup[n._targets.indexOf(s)],c=a._props.length;c--;)l[a._props[c]]=u;return a},yr,Qc,Qf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,u=i.lazy,l=i.onUpdate,c=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=e._dur,x=e._startAt,b=e._targets,_=e.parent,y=_&&_.data==="nested"?_.vars.targets:b,M=e._overwrite==="auto"&&!Xf,E=e.timeline,T,v,w,F,O,Z,z,I,q,V,Y,B,se;if(E&&(!g||!s)&&(s="none"),e._ease=ms(s,go.ease),e._yEase=m?hm(ms(m===!0?s:m,go.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(I=b[0]?ds(b[0]).harness:0,B=I&&i[I.prop],T=Vu(i,jf),x&&(x._zTime<0&&x.progress(1),t<0&&f&&a&&!d?x.render(-1,!0):x.revert(f&&p?wu:gx),x._lazy=0),o){if(Ur(e._startAt=kt.set(b,hi({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:An(u),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:h,stagger:0},o))),e._startAt._dp=0,t<0&&(Tn||!a&&!d)&&e._startAt.revert(wu),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!x){if(t&&(a=!1),w=hi({overwrite:!1,data:"isFromStart",lazy:a&&An(u),immediateRender:a,stagger:0,parent:_},T),B&&(w[I.prop]=B),Ur(e._startAt=kt.set(b,w)),e._startAt._dp=0,t<0&&(Tn?e._startAt.revert(wu):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,dt,dt);else if(!t)return}for(e._pt=e._ptCache=0,u=p&&An(u)||u&&!p,v=0;v<b.length;v++){if(O=b[v],z=O._gsap||Kf(b)[v]._gsap,e._ptLookup[v]=V={},$c[z.id]&&Fr.length&&Gu(),Y=y===b?v:y.indexOf(O),I&&(q=new I).init(O,B||T,e,Y,y)!==!1&&(e._pt=F=new Dn(e._pt,O,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(L){V[L]=F}),q.priority&&(Z=1)),!I||B)for(w in T)kn[w]&&(q=gm(w,T,e,Y,O,y))?q.priority&&(Z=1):V[w]=F=Jf.call(e,O,w,"get",T[w],Y,y,0,i.stringFilter);e._op&&e._op[v]&&e.kill(O,e._op[v]),M&&e._pt&&(yr=e,wt.killTweensOf(O,V,e.globalTime(t)),se=!e.parent,yr=0),e._pt&&u&&($c[z.id]=1)}Z&&Mm(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!se,g&&t<=0&&E.render(ri,!0,!0)},Hx=function(e,t,n,i,s,o,a){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,c,h,f;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(l=h[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return Qc=1,e.vars[t]="+=0",Qf(e,a),Qc=0,1;u.push(l)}for(f=u.length;f--;)c=u[f],l=c._pt||c,l.s=(i||i===0)&&!s?i:l.s+(i||0)+o*l.c,l.c=n-l.s,c.e&&(c.e=Rt(n)+on(c.e)),c.b&&(c.b=l.s+on(c.b))},Xx=function(e,t){var n=e[0]?ds(e[0]).harness:0,i=n&&n.aliases,s,o,a,u;if(!i)return t;s=Ms({},t);for(o in i)if(o in s)for(u=i[o].split(","),a=u.length;a--;)s[u[a]]=s[o];return s},qx=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(ln(t))a=n[e]||(n[e]=[]),t.forEach(function(u,l){return a.push({t:l/(t.length-1)*100,v:u,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ta=function(e,t,n,i,s){return Ft(e)?e.call(t,n,i,s):jt(e)&&~e.indexOf("random(")?xa(e):e},_m=Zf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",xm={};Cn(_m+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return xm[r]=1});var kt=function(r){O0(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Qo(i))||this;var u=a.vars,l=u.duration,c=u.delay,h=u.immediateRender,f=u.stagger,m=u.overwrite,g=u.keyframes,d=u.defaults,p=u.scrollTrigger,x=u.yoyoEase,b=i.parent||wt,_=(ln(n)||z0(n)?tr(n[0]):"length"in i)?[n]:si(n),y,M,E,T,v,w,F,O;if(a._targets=_.length?Kf(_):Wu("GSAP target "+n+" not found. https://greensock.com",!Hn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||f||ka(l)||ka(c)){if(i=a.vars,y=a.timeline=new En({data:"nested",defaults:d||{},targets:b&&b.data==="nested"?b.vars.targets:_}),y.kill(),y.parent=y._dp=$i(a),y._start=0,f||ka(l)||ka(c)){if(T=_.length,F=f&&rm(f),zi(f))for(v in f)~_m.indexOf(v)&&(O||(O={}),O[v]=f[v]);for(M=0;M<T;M++)E=Vu(i,xm),E.stagger=0,x&&(E.yoyoEase=x),O&&Ms(E,O),w=_[M],E.duration=+ta(l,$i(a),M,w,_),E.delay=(+ta(c,$i(a),M,w,_)||0)-a._delay,!f&&T===1&&E.delay&&(a._delay=c=E.delay,a._start+=c,E.delay=0),y.to(w,E,F?F(M,w,_):0),y._ease=st.none;y.duration()?l=c=0:a.timeline=0}else if(g){Qo(hi(y.vars.defaults,{ease:"none"})),y._ease=ms(g.ease||i.ease||"none");var Z=0,z,I,q;if(ln(g))g.forEach(function(V){return y.to(_,V,">")}),y.duration();else{E={};for(v in g)v==="ease"||v==="easeEach"||qx(v,g[v],E,g.easeEach);for(v in E)for(z=E[v].sort(function(V,Y){return V.t-Y.t}),Z=0,M=0;M<z.length;M++)I=z[M],q={ease:I.e,duration:(I.t-(M?z[M-1].t:0))/100*l},q[v]=I.v,y.to(_,q,Z),Z+=q.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||a.duration(l=y.duration())}else a.timeline=0;return m===!0&&!Xf&&(yr=$i(a),wt.killTweensOf(_),yr=0),Ri(b,$i(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!g&&a._start===Qt(b._time)&&An(h)&&Mx($i(a))&&b.data!=="nested")&&(a._tTime=-dt,a.render(Math.max(0,-c)||0)),p&&em($i(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,u=this._tDur,l=this._dur,c=i<0,h=i>u-dt&&!c?u:i<dt?0:i,f,m,g,d,p,x,b,_,y;if(!l)wx(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(f=h,_=this.timeline,this._repeat){if(d=l+this._rDelay,this._repeat<-1&&c)return this.totalTime(d*100+i,s,o);if(f=Qt(h%d),h===u?(g=this._repeat,f=l):(g=~~(h/d),g&&g===h/d&&(f=l,g--),f>l&&(f=l)),x=this._yoyo&&g&1,x&&(y=this._yEase,f=l-f),p=_o(this._tTime,d),f===a&&!o&&this._initted)return this._tTime=h,this;g!==p&&(_&&this._yEase&&dm(_,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=o=1,this.render(Qt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(tm(this,c?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(l!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(f/l),this._from&&(this.ratio=b=1-b),f&&!a&&!s&&(oi(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;_&&_.render(i<0?i:!f&&x?-dt:_._dur*_._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(c&&Yc(this,i,s,o),oi(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&oi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&Yc(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ur(this,1),!s&&!(c&&!a)&&(h||a||x)&&(oi(this,h===u?"onComplete":"onReverseComplete",!0),this._prom&&!(h<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){va||Wn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||Qf(this,u),l=this._ease(u/this._dur),Hx(this,i,s,o,a,l,u)?this.resetTo(i,s,o,a):(ml(this,0),this.parent||J0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Vo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,yr&&yr.vars.overwrite!==!0)._first||Vo(this),this.parent&&o!==this.timeline.totalDuration()&&xo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,u=i?si(i):a,l=this._ptLookup,c=this._pt,h,f,m,g,d,p,x;if((!s||s==="all")&&yx(a,u))return s==="all"&&(this._pt=0),Vo(this);for(h=this._op=this._op||[],s!=="all"&&(jt(s)&&(d={},Cn(s,function(b){return d[b]=1}),s=d),s=Xx(a,s)),x=a.length;x--;)if(~u.indexOf(a[x])){f=l[x],s==="all"?(h[x]=s,g=f,m={}):(m=h[x]=h[x]||{},g=s);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&dl(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&c&&Vo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ea(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ea(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return wt.killTweensOf(i,s,o)},e}(yo);hi(kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Cn("staggerTo,staggerFrom,staggerFromTo",function(r){kt[r]=function(){var e=new En,t=Zc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var eh=function(e,t,n){return e[t]=n},vm=function(e,t,n){return e[t](n)},$x=function(e,t,n,i){return e[t](i.fp,n)},Yx=function(e,t,n){return e.setAttribute(t,n)},th=function(e,t){return Ft(e[t])?vm:qf(e[t])&&e.setAttribute?Yx:eh},ym=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},jx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},bm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},nh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Zx=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Kx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?dl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Jx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Mm=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Dn=function(){function r(t,n,i,s,o,a,u,l,c){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||ym,this.d=u||this,this.set=l||eh,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Jx,this.m=n,this.mt=s,this.tween=i},r}();Cn(Zf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return jf[r]=1});$n.TweenMax=$n.TweenLite=kt;$n.TimelineLite=$n.TimelineMax=En;wt=new En({sortChildren:!1,defaults:go,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Hn.stringFilter=fm;var bo=[],Tu={},Qx=[],Qh=0,kl=function(e){return(Tu[e]||Qx).map(function(t){return t()})},ef=function(){var e=Date.now(),t=[];e-Qh>2&&(kl("matchMediaInit"),bo.forEach(function(n){var i=n.queries,s=n.conditions,o,a,u,l;for(a in i)o=ei.matchMedia(i[a]).matches,o&&(u=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),u&&t.push(n))}),kl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Qh=e,kl("matchMedia"))},Sm=function(){function r(t,n){this.selector=n&&Kc(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ft(n)&&(s=i,i=n,n=Ft);var o=this,a=function(){var l=Ut,c=o.selector,h;return l&&l!==o&&l.data.push(o),s&&(o.selector=Kc(s)),Ut=o,h=i.apply(o,arguments),Ft(h)&&o._r.push(h),Ut=l,o.selector=c,o.isReverted=!1,h};return o.last=a,n===Ft?a(o):n?o[n]=a:a},e.ignore=function(n){var i=Ut;Ut=null,n(this),Ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(u){u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(l){return o.splice(o.indexOf(l),1)}))}),o.map(function(u){return{g:u.globalTime(0),t:u}}).sort(function(u,l){return l.g-u.g||-1}).forEach(function(u){return u.t.revert(n)}),this.data.forEach(function(u){return!(u instanceof yo)&&u.revert&&u.revert(n)}),this._r.forEach(function(u){return u(n,s)}),this.isReverted=!0}else this.data.forEach(function(u){return u.kill&&u.kill()});if(this.clear(),i){var a=bo.indexOf(this);~a&&bo.splice(a,1)}},e.revert=function(n){this.kill(n||{})},r}(),ev=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){zi(n)||(n={matches:n});var o=new Sm(0,s||this.scope),a=o.conditions={},u,l,c;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?c=1:(u=ei.matchMedia(n[l]),u&&(bo.indexOf(o)<0&&bo.push(o),(a[l]=u.matches)&&(c=1),u.addListener?u.addListener(ef):u.addEventListener("change",ef)));return c&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Xu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ix(i)})},timeline:function(e){return new En(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,n,i){jt(e)&&(e=si(e)[0]);var s=ds(e||{}).get,o=n?K0:Z0;return n==="native"&&(n=""),e&&(t?o((kn[t]&&kn[t].get||s)(e,t,n,i)):function(a,u,l){return o((kn[a]&&kn[a].get||s)(e,a,u,l))})},quickSetter:function(e,t,n){if(e=si(e),e.length>1){var i=e.map(function(c){return Yn.quickSetter(c,t,n)}),s=i.length;return function(c){for(var h=s;h--;)i[h](c)}}e=e[0]||{};var o=kn[t],a=ds(e),u=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(c){var h=new o;Js._pt=0,h.init(e,n?c+n:c,Js,0,[e]),h.render(1,h),Js._pt&&nh(1,Js)}:a.set(e,u);return o?l:function(c){return l(e,u,n?c+n:c,a,1)}},quickTo:function(e,t,n){var i,s=Yn.to(e,Ms((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(u,l,c){return s.resetTo(t,u,l,c)};return o.tween=s,o},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ms(e.ease,go.ease)),Yh(go,e||{})},config:function(e){return Yh(Hn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!kn[a]&&!$n[a]&&Wu(t+" effect requires "+a+" plugin.")}),Il[t]=function(a,u,l){return n(si(a),hi(u||{},s),l)},o&&(En.prototype[t]=function(a,u,l){return this.add(Il[t](a,zi(u)?u:(l=u)&&{},this),l)})},registerEase:function(e,t){st[e]=ms(t)},parseEase:function(e,t){return arguments.length?ms(e,t):st},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new En(e),i,s;for(n.smoothChildTiming=An(e.smoothChildTiming),wt.remove(n),n._dp=0,n._time=n._tTime=wt._time,i=wt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof kt&&i.vars.onComplete===i._targets[0]))&&Ri(n,i,i._start-i._delay),i=s;return Ri(wt,n,0),n},context:function(e,t){return e?new Sm(e,t):Ut},matchMedia:function(e){return new ev(e)},matchMediaRefresh:function(){return bo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ef()},addEventListener:function(e,t){var n=Tu[e]||(Tu[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Tu[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Lx,wrapYoyo:Rx,distribute:rm,random:om,snap:sm,normalize:Px,getUnit:on,clamp:Ax,splitColor:lm,toArray:si,selector:Kc,mapRange:um,pipe:Dx,unitize:Fx,interpolate:Bx,shuffle:im},install:X0,effects:Il,ticker:Wn,updateRoot:En.updateRoot,plugins:kn,globalTimeline:wt,core:{PropTween:Dn,globals:q0,Tween:kt,Timeline:En,Animation:yo,getCache:ds,_removeLinkedListItem:dl,reverting:function(){return Tn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return Xf=e}}};Cn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Xu[r]=kt[r]});Wn.add(En.updateRoot);Js=Xu.to({},{duration:0});var tv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},nv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=tv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},zl=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var u,l;if(jt(s)&&(u={},Cn(s,function(c){return u[c]=1}),s=u),t){u={};for(l in s)u[l]=t(s[l]);s=u}nv(a,s)}}}},Yn=Xu.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,u;this.tween=n;for(o in t)u=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(u||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=u,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Tn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},zl("roundProps",Jc),zl("modifiers"),zl("snap",sm))||Xu;kt.version=En.version=Yn.version="3.11.3";H0=1;k0()&&vo();st.Power0;st.Power1;st.Power2;st.Power3;st.Power4;st.Linear;st.Quad;st.Cubic;st.Quart;st.Quint;st.Strong;st.Elastic;st.Back;st.SteppedEase;st.Bounce;st.Sine;st.Expo;st.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ed,br,ao,ih,as,td,rh,iv=function(){return typeof window<"u"},nr={},Kr=180/Math.PI,uo=Math.PI/180,Ps=Math.atan2,nd=1e8,sh=/([A-Z])/g,rv=/(left|right|width|margin|padding|x)/i,sv=/[\s,\(]\S/,Ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ov=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},av=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},uv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},wm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Em=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},lv=function(e,t,n){return e.style[t]=n},cv=function(e,t,n){return e.style.setProperty(t,n)},fv=function(e,t,n){return e._gsap[t]=n},hv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},dv=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},pv=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Et="transform",wi=Et+"Origin",mv=function(e,t){var n=this,i=this.target,s=i.style;if(e in nr){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Ki[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Yi(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Yi(i,e)),this.props.indexOf(Et)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wi,t,"")),e=Et}(s||t)&&this.props.push(e,t,s[e])},Tm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(sh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=rh(),s&&!s.isStart&&!n[Et]&&(Tm(n),i.uncache=1)}},Am=function(e,t){var n={target:e,props:[],revert:gv,save:mv};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Cm,nf=function(e,t){var n=br.createElementNS?br.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):br.createElement(e);return n.style?n:br.createElement(e)},Oi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(sh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Mo(t)||t,1)||""},id="O,Moz,ms,Ms,Webkit".split(","),Mo=function(e,t,n){var i=t||as,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(id[o]+e in s););return o<0?null:(o===3?"ms":o>=0?id[o]:"")+e},rf=function(){iv()&&window.document&&(ed=window,br=ed.document,ao=br.documentElement,as=nf("div")||{style:{}},nf("div"),Et=Mo(Et),wi=Et+"Origin",as.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cm=!!Mo("perspective"),rh=Yn.core.reverting,ih=1)},Wl=function r(e){var t=nf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(ao.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ao.removeChild(t),this.style.cssText=s,o},rd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Dm=function(e){var t;try{t=e.getBBox()}catch{t=Wl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Wl||(t=Wl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+rd(e,["x","cx","x1"])||0,y:+rd(e,["y","cy","y1"])||0,width:0,height:0}:t},Fm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dm(e))},ya=function(e,t){if(t){var n=e.style;t in nr&&t!==wi&&(t=Et),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(sh,"-$1").toLowerCase())):n.removeAttribute(t)}},Mr=function(e,t,n,i,s,o){var a=new Dn(e._pt,t,n,0,1,o?Em:wm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},sd={deg:1,rad:1,turn:1},_v={grid:1,flex:1},Or=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=as.style,u=rv.test(t),l=e.tagName.toLowerCase()==="svg",c=(l?"client":"offset")+(u?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,x;return i===o||!s||sd[i]||sd[o]?s:(o!=="px"&&!f&&(s=r(e,t,n,"px")),x=e.getCTM&&Fm(e),(m||o==="%")&&(nr[t]||~t.indexOf("adius"))?(g=x?e.getBBox()[u?"width":"height"]:e[c],Rt(m?s/g*h:s/100*g)):(a[u?"width":"height"]=h+(f?o:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,x&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===br||!d.appendChild)&&(d=br.body),p=d._gsap,p&&m&&p.width&&u&&p.time===Wn.time&&!p.uncache?Rt(s/p.width*h):((m||o==="%")&&!_v[Oi(d,"display")]&&(a.position=Oi(e,"position")),d===e&&(a.position="static"),d.appendChild(as),g=as[c],d.removeChild(as),a.position="absolute",u&&m&&(p=ds(d),p.time=Wn.time,p.width=d[c]),Rt(f?g*s/h:g&&s?h/g*s:0))))},Yi=function(e,t,n,i){var s;return ih||rf(),t in Ki&&t!=="transform"&&(t=Ki[t],~t.indexOf(",")&&(t=t.split(",")[0])),nr[t]&&t!=="transform"?(s=Ma(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:$u(Oi(e,wi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=qu[t]&&qu[t](e,t,n)||Oi(e,t)||Y0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Or(e,t,s,n)+n:s},xv=function(e,t,n,i){if(!n||n==="none"){var s=Mo(t,e,1),o=s&&Oi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Oi(e,"borderTopColor"))}var a=new Dn(this._pt,e.style,t,0,1,bm),u=0,l=0,c,h,f,m,g,d,p,x,b,_,y,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Oi(e,t)||i,e.style[t]=n),c=[n,i],fm(c),n=c[0],i=c[1],f=n.match(Ks)||[],M=i.match(Ks)||[],M.length){for(;h=Ks.exec(i);)p=h[0],b=i.substring(u,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(d=f[l++]||"")&&(m=parseFloat(d)||0,y=d.substr((m+"").length),p.charAt(1)==="="&&(p=oo(m,p)+y),x=parseFloat(p),_=p.substr((x+"").length),u=Ks.lastIndex-_.length,_||(_=_||Hn.units[t]||y,u===i.length&&(i+=_,a.e+=_)),y!==_&&(m=Or(e,t,d,_)||0),a._pt={_next:a._pt,p:b||l===1?b:",",s:m,c:x-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=u<i.length?i.substring(u,i.length):""}else a.r=t==="display"&&i==="none"?Em:wm;return G0.test(i)&&(a.e=0),this._pt=a,a},od={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=od[n]||n,t[1]=od[i]||i,t.join(" ")},yv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,u,l;if(s==="all"||s===!0)i.cssText="",u=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],nr[a]&&(u=1,a=a==="transformOrigin"?wi:Et),ya(n,a);u&&(ya(n,Et),o&&(o.svg&&n.removeAttribute("transform"),Ma(n,1),o.uncache=1,Tm(i)))}},qu={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Dn(e._pt,t,n,0,0,yv);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ba=[1,0,0,1,0,0],Pm={},Lm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ad=function(e){var t=Oi(e,Et);return Lm(t)?ba:t.substr(7).match(W0).map(Rt)},oh=function(e,t){var n=e._gsap||ds(e),i=e.style,s=ad(e),o,a,u,l;return n.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,s=[u.a,u.b,u.c,u.d,u.e,u.f],s.join(",")==="1,0,0,1,0,0"?ba:s):(s===ba&&!e.offsetParent&&e!==ao&&!n.svg&&(u=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(l=1,a=e.nextElementSibling,ao.appendChild(e)),s=ad(e),u?i.display=u:ya(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):ao.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},sf=function(e,t,n,i,s,o){var a=e._gsap,u=s||oh(e,!0),l=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,m=u[0],g=u[1],d=u[2],p=u[3],x=u[4],b=u[5],_=t.split(" "),y=parseFloat(_[0])||0,M=parseFloat(_[1])||0,E,T,v,w;n?u!==ba&&(T=m*p-g*d)&&(v=y*(p/T)+M*(-d/T)+(d*b-p*x)/T,w=y*(-g/T)+M*(m/T)-(m*b-g*x)/T,y=v,M=w):(E=Dm(e),y=E.x+(~_[0].indexOf("%")?y/100*E.width:y),M=E.y+(~(_[1]||_[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&a.smooth?(x=y-l,b=M-c,a.xOffset=h+(x*m+b*d)-x,a.yOffset=f+(x*g+b*p)-b):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[wi]="0px 0px",o&&(Mr(o,a,"xOrigin",l,y),Mr(o,a,"yOrigin",c,M),Mr(o,a,"xOffset",h,a.xOffset),Mr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Ma=function(e,t){var n=e._gsap||new mm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",u=getComputedStyle(e),l=Oi(e,wi)||"0",c,h,f,m,g,d,p,x,b,_,y,M,E,T,v,w,F,O,Z,z,I,q,V,Y,B,se,L,X,G,he,ce,ge;return c=h=f=d=p=x=b=_=y=0,m=g=1,n.svg=!!(e.getCTM&&Fm(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(i[Et]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[Et]!=="none"?u[Et]:"")),i.scale=i.rotate=i.translate="none"),T=oh(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),l=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),sf(e,Y||l,!!Y||n.originIsAbsolute,n.smooth!==!1,T)),M=n.xOrigin||0,E=n.yOrigin||0,T!==ba&&(O=T[0],Z=T[1],z=T[2],I=T[3],c=q=T[4],h=V=T[5],T.length===6?(m=Math.sqrt(O*O+Z*Z),g=Math.sqrt(I*I+z*z),d=O||Z?Ps(Z,O)*Kr:0,b=z||I?Ps(z,I)*Kr+d:0,b&&(g*=Math.abs(Math.cos(b*uo))),n.svg&&(c-=M-(M*O+E*z),h-=E-(M*Z+E*I))):(ge=T[6],he=T[7],L=T[8],X=T[9],G=T[10],ce=T[11],c=T[12],h=T[13],f=T[14],v=Ps(ge,G),p=v*Kr,v&&(w=Math.cos(-v),F=Math.sin(-v),Y=q*w+L*F,B=V*w+X*F,se=ge*w+G*F,L=q*-F+L*w,X=V*-F+X*w,G=ge*-F+G*w,ce=he*-F+ce*w,q=Y,V=B,ge=se),v=Ps(-z,G),x=v*Kr,v&&(w=Math.cos(-v),F=Math.sin(-v),Y=O*w-L*F,B=Z*w-X*F,se=z*w-G*F,ce=I*F+ce*w,O=Y,Z=B,z=se),v=Ps(Z,O),d=v*Kr,v&&(w=Math.cos(v),F=Math.sin(v),Y=O*w+Z*F,B=q*w+V*F,Z=Z*w-O*F,V=V*w-q*F,O=Y,q=B),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,x=180-x),m=Rt(Math.sqrt(O*O+Z*Z+z*z)),g=Rt(Math.sqrt(V*V+ge*ge)),v=Ps(q,V),b=Math.abs(v)>2e-4?v*Kr:0,y=ce?1/(ce<0?-ce:ce):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Lm(Oi(e,Et)),Y&&e.setAttribute("transform",Y))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(m*=-1,b+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Rt(m),n.scaleY=Rt(g),n.rotation=Rt(d)+a,n.rotationX=Rt(p)+a,n.rotationY=Rt(x)+a,n.skewX=b+a,n.skewY=_+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[wi]=$u(l)),n.xOffset=n.yOffset=0,n.force3D=Hn.force3D,n.renderTransform=n.svg?Mv:Cm?Rm:bv,n.uncache=0,n},$u=function(e){return(e=e.split(" "))[0]+" "+e[1]},Gl=function(e,t,n){var i=on(t);return Rt(parseFloat(t)+parseFloat(Or(e,"x",n+"px",i)))+i},bv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Rm(e,t)},Xr="0deg",Io="0px",qr=") ",Rm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,u=n.z,l=n.rotation,c=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,x=n.force3D,b=n.target,_=n.zOrigin,y="",M=x==="auto"&&e&&e!==1||x===!0;if(_&&(h!==Xr||c!==Xr)){var E=parseFloat(c)*uo,T=Math.sin(E),v=Math.cos(E),w;E=parseFloat(h)*uo,w=Math.cos(E),o=Gl(b,o,T*w*-_),a=Gl(b,a,-Math.sin(E)*-_),u=Gl(b,u,v*w*-_+_)}p!==Io&&(y+="perspective("+p+qr),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(M||o!==Io||a!==Io||u!==Io)&&(y+=u!==Io||M?"translate3d("+o+", "+a+", "+u+") ":"translate("+o+", "+a+qr),l!==Xr&&(y+="rotate("+l+qr),c!==Xr&&(y+="rotateY("+c+qr),h!==Xr&&(y+="rotateX("+h+qr),(f!==Xr||m!==Xr)&&(y+="skew("+f+", "+m+qr),(g!==1||d!==1)&&(y+="scale("+g+", "+d+qr),b.style[Et]=y||"translate(0, 0)"},Mv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,u=n.rotation,l=n.skewX,c=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,x=n.yOffset,b=n.forceCSS,_=parseFloat(o),y=parseFloat(a),M,E,T,v,w;u=parseFloat(u),l=parseFloat(l),c=parseFloat(c),c&&(c=parseFloat(c),l+=c,u+=c),u||l?(u*=uo,l*=uo,M=Math.cos(u)*h,E=Math.sin(u)*h,T=Math.sin(u-l)*-f,v=Math.cos(u-l)*f,l&&(c*=uo,w=Math.tan(l-c),w=Math.sqrt(1+w*w),T*=w,v*=w,c&&(w=Math.tan(c),w=Math.sqrt(1+w*w),M*=w,E*=w)),M=Rt(M),E=Rt(E),T=Rt(T),v=Rt(v)):(M=h,v=f,E=T=0),(_&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(_=Or(m,"x",o,"px"),y=Or(m,"y",a,"px")),(g||d||p||x)&&(_=Rt(_+g-(g*M+d*T)+p),y=Rt(y+d-(g*E+d*v)+x)),(i||s)&&(w=m.getBBox(),_=Rt(_+i/100*w.width),y=Rt(y+s/100*w.height)),w="matrix("+M+","+E+","+T+","+v+","+_+","+y+")",m.setAttribute("transform",w),b&&(m.style[Et]=w)},Sv=function(e,t,n,i,s){var o=360,a=jt(s),u=parseFloat(s)*(a&&~s.indexOf("rad")?Kr:1),l=u-i,c=i+l+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*nd)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*nd)%o-~~(l/o)*o)),e._pt=f=new Dn(e._pt,t,n,i,l,ov),f.e=c,f.u="deg",e._props.push(n),f},ud=function(e,t){for(var n in t)e[n]=t[n];return e},wv=function(e,t,n){var i=ud({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,u,l,c,h,f,m,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Et]=t,a=Ma(n,1),ya(n,Et),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Et],o[Et]=t,a=Ma(n,1),o[Et]=l);for(u in nr)l=i[u],c=a[u],l!==c&&s.indexOf(u)<0&&(m=on(l),g=on(c),h=m!==g?Or(n,u,l,g):parseFloat(l),f=parseFloat(c),e._pt=new Dn(e._pt,a,u,h,f-h,tf),e._pt.u=g||0,e._props.push(u));ud(a,i)};Cn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});qu[e>1?"border"+r:r]=function(a,u,l,c,h){var f,m;if(arguments.length<4)return f=o.map(function(g){return Yi(a,g,l)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(c+"").split(" "),m={},o.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),a.init(u,m,h)}});var Bm={name:"css",register:rf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,u=n.vars.startAt,l,c,h,f,m,g,d,p,x,b,_,y,M,E,T,v;ih||rf(),this.styles=this.styles||Am(e),v=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(c=t[d],!(kn[d]&&gm(d,t,n,i,e,s)))){if(m=typeof c,g=qu[d],m==="function"&&(c=c.call(n,i,e,s),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=xa(c)),g)g(this,e,d,c,n)&&(T=1);else if(d.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(d)+"").trim(),c+="",Pr.lastIndex=0,Pr.test(l)||(p=on(l),x=on(c)),x?p!==x&&(l=Or(e,d,l,x)+x):p&&(c+=p),this.add(a,"setProperty",l,c,i,s,0,0,d),o.push(d),v.push(d,0,a[d]);else if(m!=="undefined"){if(u&&d in u?(l=typeof u[d]=="function"?u[d].call(n,i,e,s):u[d],jt(l)&&~l.indexOf("random(")&&(l=xa(l)),on(l+"")||(l+=Hn.units[d]||on(Yi(e,d))||""),(l+"").charAt(1)==="="&&(l=Yi(e,d))):l=Yi(e,d),f=parseFloat(l),b=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),b&&(c=c.substr(2)),h=parseFloat(c),d in Ki&&(d==="autoAlpha"&&(f===1&&Yi(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,a.visibility),Mr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Ki[d],~d.indexOf(",")&&(d=d.split(",")[0]))),_=d in nr,_){if(this.styles.save(d),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ma(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new Dn(this._pt,a,Et,0,1,M.renderTransform,M,0,-1),y.dep=1),d==="scale")this._pt=new Dn(this._pt,M,"scaleY",f,(b?oo(f,b+h):h)-f||0,tf),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(wi,0,a[wi]),c=vv(c),M.svg?sf(e,c,0,E,0,this):(x=parseFloat(c.split(" ")[2])||0,x!==M.zOrigin&&Mr(this,M,"zOrigin",M.zOrigin,x),Mr(this,a,d,$u(l),$u(c)));continue}else if(d==="svgOrigin"){sf(e,c,1,E,0,this);continue}else if(d in Pm){Sv(this,M,d,f,b?oo(f,b+c):c);continue}else if(d==="smoothOrigin"){Mr(this,M,"smooth",M.smooth,c);continue}else if(d==="force3D"){M[d]=c;continue}else if(d==="transform"){wv(this,c,e);continue}}else d in a||(d=Mo(d)||d);if(_||(h||h===0)&&(f||f===0)&&!sv.test(c)&&d in a)p=(l+"").substr((f+"").length),h||(h=0),x=on(c)||(d in Hn.units?Hn.units[d]:p),p!==x&&(f=Or(e,d,l,x)),this._pt=new Dn(this._pt,_?M:a,d,f,(b?oo(f,b+h):h)-f,!_&&(x==="px"||d==="zIndex")&&t.autoRound!==!1?uv:tf),this._pt.u=x||0,p!==x&&x!=="%"&&(this._pt.b=l,this._pt.r=av);else if(d in a)xv.call(this,e,d,l,b?b+c:c);else if(d in e)this.add(e,d,l||e[d],b?b+c:c,i,s);else{Yf(d,c);continue}_||(d in a?v.push(d,0,a[d]):v.push(d,1,l||e[d])),o.push(d)}}T&&Mm(this)},render:function(e,t){if(t.tween._time||!rh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Yi,aliases:Ki,getSetter:function(e,t,n){var i=Ki[t];return i&&i.indexOf(",")<0&&(t=i),t in nr&&t!==wi&&(e._gsap.x||Yi(e,"x"))?n&&td===n?t==="scale"?hv:fv:(td=n||{})&&(t==="scale"?dv:pv):e.style&&!qf(e.style[t])?lv:~t.indexOf("-")?cv:th(e,t)},core:{_removeProperty:ya,_getMatrix:oh}};Yn.utils.checkPrefix=Mo;Yn.core.getStyleSaver=Am;(function(r,e,t,n){var i=Cn(r+","+e+","+t,function(s){nr[s]=1});Cn(e,function(s){Hn.units[s]="deg",Pm[s]=1}),Ki[i[13]]=r+","+e,Cn(n,function(s){var o=s.split(":");Ki[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Hn.units[r]="px"});Yn.registerPlugin(Bm);var Fn=Yn.registerPlugin(Bm)||Yn;Fn.core.Tween;const Ev=ir({__name:"FirstView",setup(r){const e=Ui(),t=Ui(),n=Ui(),i=Ui(window.innerHeight);return sr(()=>{if(t.value){const o=t.value.textContent.split("").map(u=>'<span style="display:inline-block">'+u+"</span>");t.value.innerHTML=o.join(""),Fn.timeline().set(n.value,{x:"-50vw",y:"-20vh"}).set("body",{overflow:"hidden"}).to(n.value,{y:0,duration:1,ease:"Bounce.easeOut"}).to(n.value,{x:"54vw",duration:3,delay:-1,ease:"Power.easeOut"}).fromTo(".first-view span",{opacity:0,y:-10},{opacity:1,y:0,duration:1,delay:-2.6,stagger:{each:.09},ease:"Bounce.easeOut"}).to(e.value,{background:"rgba(0,0,0,0)",scale:.8,duration:1,ease:"Power2.easeOut"}).to("body",{overflow:"auto"},"-=1")}}),(s,o)=>(St(),It("div",{class:"first-view",ref_key:"base",ref:e,style:Qu(`height:${i.value}px`)},[ue("div",{ref_key:"ball",ref:n,class:"ball"},null,512),ue("h1",{ref_key:"headingText",ref:t},"Frontend\u7802\u904A\u3073\u3057\u3066\u307F\u305F",512)],4))}});const or=(r,e)=>{const t=r.__vccOpts||r;for(const[n,i]of e)t[n]=i;return t},Tv=or(Ev,[["__scopeId","data-v-d805a4a4"]]);function ld(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Av(r,e,t){return e&&ld(r.prototype,e),t&&ld(r,t),r}/*!
 * Observer 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var un,of,Gn,Sr,wr,lo,Im,Jr,na,Um,Ji,gi,Om=function(){return un||typeof window<"u"&&(un=window.gsap)&&un.registerPlugin&&un},Nm=1,Qs=[],rt=[],Ni=[],ia=Date.now,af=function(e,t){return t},Cv=function(){var e=na.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,rt),i.push.apply(i,Ni),rt=n,Ni=i,af=function(o,a){return t[o](a)}},Lr=function(e,t){return~Ni.indexOf(e)&&Ni[Ni.indexOf(e)+1][t]},ra=function(e){return!!~Um.indexOf(e)},bn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},hn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},za="scrollLeft",Wa="scrollTop",uf=function(){return Ji&&Ji.isPressed||rt.cache++},Yu=function(e,t){var n=function i(s){if(s||s===0){Nm&&(Gn.history.scrollRestoration="manual");var o=Ji&&Ji.isPressed;s=i.v=Math.round(s)||(Ji&&Ji.iOS?1:0),e(s),i.cacheID=rt.cache,o&&af("ss",s)}else(t||rt.cache!==i.cacheID||af("ref"))&&(i.cacheID=rt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},vn={s:za,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yu(function(r){return arguments.length?Gn.scrollTo(r,zt.sc()):Gn.pageXOffset||Sr[za]||wr[za]||lo[za]||0})},zt={s:Wa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:vn,sc:Yu(function(r){return arguments.length?Gn.scrollTo(vn.sc(),r):Gn.pageYOffset||Sr[Wa]||wr[Wa]||lo[Wa]||0})},Sn=function(e){return un.utils.toArray(e)[0]||(typeof e=="string"&&un.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Nr=function(e,t){var n=t.s,i=t.sc;ra(e)&&(e=Sr.scrollingElement||wr);var s=rt.indexOf(e),o=i===zt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||e.addEventListener("scroll",uf);var a=rt[s+o],u=a||(rt[s+o]=Yu(Lr(e,n),!0)||(ra(e)?i:Yu(function(l){return arguments.length?e[n]=l:e[n]})));return u.target=e,a||(u.smooth=un.getProperty(e,"scrollBehavior")==="smooth"),u},lf=function(e,t,n){var i=e,s=e,o=ia(),a=o,u=t||50,l=Math.max(500,u*3),c=function(g,d){var p=ia();d||p-o>u?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var d=a,p=s,x=ia();return(g||g===0)&&g!==i&&c(g),o===a||x-a>l?0:(i+(n?p:-p))/((n?x:o)-d)*1e3};return{update:c,reset:h,getVelocity:f}},Uo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},cd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},km=function(){na=un.core.globals().ScrollTrigger,na&&na.core&&Cv()},zm=function(e){return un=e||Om(),un&&typeof document<"u"&&document.body&&(Gn=window,Sr=document,wr=Sr.documentElement,lo=Sr.body,Um=[Gn,Sr,wr,lo],un.utils.clamp,Jr="onpointerenter"in lo?"pointer":"mouse",Im=Ot.isTouch=Gn.matchMedia&&Gn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Gn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,gi=Ot.eventTypes=("ontouchstart"in wr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in wr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Nm=0},500),km(),of=1),of};vn.op=zt;rt.cache=0;var Ot=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){of||zm(un)||console.warn("Please gsap.registerPlugin(Observer)"),na||km();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,u=n.lineHeight,l=n.debounce,c=n.preventDefault,h=n.onStop,f=n.onStopDelay,m=n.ignore,g=n.wheelSpeed,d=n.event,p=n.onDragStart,x=n.onDragEnd,b=n.onDrag,_=n.onPress,y=n.onRelease,M=n.onRight,E=n.onLeft,T=n.onUp,v=n.onDown,w=n.onChangeX,F=n.onChangeY,O=n.onChange,Z=n.onToggleX,z=n.onToggleY,I=n.onHover,q=n.onHoverEnd,V=n.onMove,Y=n.ignoreCheck,B=n.isNormalizer,se=n.onGestureStart,L=n.onGestureEnd,X=n.onWheel,G=n.onEnable,he=n.onDisable,ce=n.onClick,ge=n.scrollSpeed,H=n.capture,Re=n.allowClicks,ye=n.lockAxis,Be=n.onLockAxis;this.target=a=Sn(a)||wr,this.vars=n,m&&(m=un.utils.toArray(m)),i=i||1e-9,s=s||0,g=g||1,ge=ge||1,o=o||"wheel,touch,pointer",l=l!==!1,u||(u=parseFloat(Gn.getComputedStyle(lo).lineHeight)||22);var ve,Ge,D,P,$,oe,ne,R=this,pe=0,te=0,me=Nr(a,vn),le=Nr(a,zt),A=me(),S=le(),N=~o.indexOf("touch")&&!~o.indexOf("pointer")&&gi[0]==="pointerdown",K=ra(a),Q=a.ownerDocument||Sr,fe=[0,0,0],xe=[0,0,0],_e=0,ee=function(){return _e=ia()},Fe=function(ie,De){return(R.event=ie)&&m&&~m.indexOf(ie.target)||De&&N&&ie.pointerType!=="touch"||Y&&Y(ie,De)},Ne=function(){R._vx.reset(),R._vy.reset(),Ge.pause(),h&&h(R)},Ae=function(){var ie=R.deltaX=cd(fe),De=R.deltaY=cd(xe),Ce=Math.abs(ie)>=i,He=Math.abs(De)>=i;O&&(Ce||He)&&O(R,ie,De,fe,xe),Ce&&(M&&R.deltaX>0&&M(R),E&&R.deltaX<0&&E(R),w&&w(R),Z&&R.deltaX<0!=pe<0&&Z(R),pe=R.deltaX,fe[0]=fe[1]=fe[2]=0),He&&(v&&R.deltaY>0&&v(R),T&&R.deltaY<0&&T(R),F&&F(R),z&&R.deltaY<0!=te<0&&z(R),te=R.deltaY,xe[0]=xe[1]=xe[2]=0),(P||D)&&(V&&V(R),D&&(b(R),D=!1),P=!1),oe&&!(oe=!1)&&Be&&Be(R),$&&(X(R),$=!1),ve=0},Ie=function(ie,De,Ce){fe[Ce]+=ie,xe[Ce]+=De,R._vx.update(ie),R._vy.update(De),l?ve||(ve=requestAnimationFrame(Ae)):Ae()},Ee=function(ie,De){ye&&!ne&&(R.axis=ne=Math.abs(ie)>Math.abs(De)?"x":"y",oe=!0),ne!=="y"&&(fe[2]+=ie,R._vx.update(ie,!0)),ne!=="x"&&(xe[2]+=De,R._vy.update(De,!0)),l?ve||(ve=requestAnimationFrame(Ae)):Ae()},Te=function(ie){if(!Fe(ie,1)){ie=Uo(ie,c);var De=ie.clientX,Ce=ie.clientY,He=De-R.x,Pt=Ce-R.y,qe=R.isDragging;R.x=De,R.y=Ce,(qe||Math.abs(R.startX-De)>=s||Math.abs(R.startY-Ce)>=s)&&(b&&(D=!0),qe||(R.isDragging=!0),Ee(He,Pt),qe||p&&p(R))}},nt=R.onPress=function(je){Fe(je,1)||(R.axis=ne=null,Ge.pause(),R.isPressed=!0,je=Uo(je),pe=te=0,R.startX=R.x=je.clientX,R.startY=R.y=je.clientY,R._vx.reset(),R._vy.reset(),bn(B?a:Q,gi[1],Te,c,!0),R.deltaX=R.deltaY=0,_&&_(R))},ut=function(ie){if(!Fe(ie,1)){hn(B?a:Q,gi[1],Te,!0);var De=R.isDragging&&(Math.abs(R.x-R.startX)>3||Math.abs(R.y-R.startY)>3),Ce=Uo(ie);De||(R._vx.reset(),R._vy.reset(),c&&Re&&un.delayedCall(.08,function(){if(ia()-_e>300&&!ie.defaultPrevented){if(ie.target.click)ie.target.click();else if(Q.createEvent){var He=Q.createEvent("MouseEvents");He.initMouseEvent("click",!0,!0,Gn,1,Ce.screenX,Ce.screenY,Ce.clientX,Ce.clientY,!1,!1,!1,!1,0,null),ie.target.dispatchEvent(He)}}})),R.isDragging=R.isGesturing=R.isPressed=!1,h&&!B&&Ge.restart(!0),x&&De&&x(R),y&&y(R,De)}},U=function(ie){return ie.touches&&ie.touches.length>1&&(R.isGesturing=!0)&&se(ie,R.isDragging)},re=function(){return(R.isGesturing=!1)||L(R)},de=function(ie){if(!Fe(ie)){var De=me(),Ce=le();Ie((De-A)*ge,(Ce-S)*ge,1),A=De,S=Ce,h&&Ge.restart(!0)}},Se=function(ie){if(!Fe(ie)){ie=Uo(ie,c),X&&($=!0);var De=(ie.deltaMode===1?u:ie.deltaMode===2?Gn.innerHeight:1)*g;Ie(ie.deltaX*De,ie.deltaY*De,0),h&&!B&&Ge.restart(!0)}},Le=function(ie){if(!Fe(ie)){var De=ie.clientX,Ce=ie.clientY,He=De-R.x,Pt=Ce-R.y;R.x=De,R.y=Ce,P=!0,(He||Pt)&&Ee(He,Pt)}},Ke=function(ie){R.event=ie,I(R)},vt=function(ie){R.event=ie,q(R)},At=function(ie){return Fe(ie)||Uo(ie,c)&&ce(R)};Ge=R._dc=un.delayedCall(f||.25,Ne).pause(),R.deltaX=R.deltaY=0,R._vx=lf(0,50,!0),R._vy=lf(0,50,!0),R.scrollX=me,R.scrollY=le,R.isDragging=R.isGesturing=R.isPressed=!1,R.enable=function(je){return R.isEnabled||(bn(K?Q:a,"scroll",uf),o.indexOf("scroll")>=0&&bn(K?Q:a,"scroll",de,c,H),o.indexOf("wheel")>=0&&bn(a,"wheel",Se,c,H),(o.indexOf("touch")>=0&&Im||o.indexOf("pointer")>=0)&&(bn(a,gi[0],nt,c,H),bn(Q,gi[2],ut),bn(Q,gi[3],ut),Re&&bn(a,"click",ee,!1,!0),ce&&bn(a,"click",At),se&&bn(Q,"gesturestart",U),L&&bn(Q,"gestureend",re),I&&bn(a,Jr+"enter",Ke),q&&bn(a,Jr+"leave",vt),V&&bn(a,Jr+"move",Le)),R.isEnabled=!0,je&&je.type&&nt(je),G&&G(R)),R},R.disable=function(){R.isEnabled&&(Qs.filter(function(je){return je!==R&&ra(je.target)}).length||hn(K?Q:a,"scroll",uf),R.isPressed&&(R._vx.reset(),R._vy.reset(),hn(B?a:Q,gi[1],Te,!0)),hn(K?Q:a,"scroll",de,H),hn(a,"wheel",Se,H),hn(a,gi[0],nt,H),hn(Q,gi[2],ut),hn(Q,gi[3],ut),hn(a,"click",ee,!0),hn(a,"click",At),hn(Q,"gesturestart",U),hn(Q,"gestureend",re),hn(a,Jr+"enter",Ke),hn(a,Jr+"leave",vt),hn(a,Jr+"move",Le),R.isEnabled=R.isPressed=R.isDragging=!1,he&&he(R))},R.kill=function(){R.disable();var je=Qs.indexOf(R);je>=0&&Qs.splice(je,1),Ji===R&&(Ji=0)},Qs.push(R),B&&ra(a)&&(Ji=R),R.enable(d)},Av(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ot.version="3.11.3";Ot.create=function(r){return new Ot(r)};Ot.register=zm;Ot.getAll=function(){return Qs.slice()};Ot.getById=function(r){return Qs.filter(function(e){return e.vars.id===r})[0]};Om()&&un.registerPlugin(Ot);/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ze,Ys,it,bt,Bi,Dt,Wm,ju,Zu,eo,Au,Ga,rn,gl,cf,gn,fd,hd,js,Gm,Vl,Vm,On,Hm,Xm,qm,xr,ff,ah,Hl,Va=1,_n=Date.now,Xl=_n(),li=0,Ha=0,dd=function(){return gl=1},pd=function(){return gl=0},Ci=function(e){return e},Xo=function(e){return Math.round(e*1e5)/1e5||0},$m=function(){return typeof window<"u"},Ym=function(){return ze||$m()&&(ze=window.gsap)&&ze.registerPlugin&&ze},Ss=function(e){return!!~Wm.indexOf(e)},jm=function(e){return Lr(e,"getBoundingClientRect")||(Ss(e)?function(){return Ru.width=it.innerWidth,Ru.height=it.innerHeight,Ru}:function(){return ji(e)})},Dv=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Lr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?it["inner"+s]:e["client"+s])||0}},Fv=function(e,t){return!t||~Ni.indexOf(e)?jm(e):function(){return Ru}},Er=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return(n="scroll"+i)&&(o=Lr(e,n))?o()-jm(e)()[s]:Ss(e)?(Bi[n]||Dt[n])-(it["inner"+i]||Bi["client"+i]||Dt["client"+i]):e[n]-e["offset"+i]},Xa=function(e,t){for(var n=0;n<js.length;n+=3)(!t||~t.indexOf(js[n+1]))&&e(js[n],js[n+1],js[n+2])},_i=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},qo=function(e){return typeof e=="number"},Cu=function(e){return typeof e=="object"},Oo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ql=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ls=Math.abs,Zm="left",Km="top",uh="right",lh="bottom",gs="width",_s="height",sa="Right",oa="Left",aa="Top",ua="Bottom",Lt="padding",ti="margin",So="Width",ch="Height",Kt="px",Ii=function(e){return it.getComputedStyle(e)},Pv=function(e){var t=Ii(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},md=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ji=function(e,t){var n=t&&Ii(e)[cf]!=="matrix(1, 0, 0, 1, 0, 0)"&&ze.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},hf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Jm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Lv=function(e){return function(t){return ze.utils.snap(Jm(e),t)}},fh=function(e){var t=ze.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Rv=function(e){return function(t,n){return fh(Jm(e))(t,n.direction)}},qa=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Jt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},qt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},$a=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},gd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ya={toggleActions:"play",anticipatePin:0},Ku={top:0,left:0,center:.5,bottom:1,right:1},Du=function(e,t){if(_i(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ku?Ku[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ja=function(e,t,n,i,s,o,a,u){var l=s.startColor,c=s.endColor,h=s.fontSize,f=s.indent,m=s.fontWeight,g=bt.createElement("div"),d=Ss(n)||Lr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,x=d?Dt:n,b=e.indexOf("start")!==-1,_=b?l:c,y="border-color:"+_+";font-size:"+h+";color:"+_+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||u)&&d?"fixed;":"absolute;"),(p||u||!d)&&(y+=(i===zt?uh:lh)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,x.children[0]?x.insertBefore(g,x.children[0]):x.appendChild(g),g._offset=g["offset"+i.op.d2],Fu(g,0,i,b),g},Fu=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+So]=1,s["border"+a+So]=0,s[n.p]=t+"px",ze.set(e,s)},tt=[],df={},Sa,_d=function(){return _n()-li>34&&(Sa||(Sa=requestAnimationFrame(Ts)))},Rs=function(){(!On||!On.isPressed||On.startX>Dt.clientWidth)&&(rt.cache++,On?Sa||(Sa=requestAnimationFrame(Ts)):Ts(),li||Es("scrollStart"),li=_n())},$l=function(){qm=it.innerWidth,Xm=it.innerHeight},$o=function(){rt.cache++,!rn&&!Vm&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!Hm||qm!==it.innerWidth||Math.abs(it.innerHeight-Xm)>it.innerHeight*.25)&&ju.restart(!0)},ws={},Bv=[],Qm=function r(){return qt(Qe,"scrollEnd",r)||us(!0)},Es=function(e){return ws[e]&&ws[e].map(function(t){return t()})||Bv},Nn=[],eg=function(e){for(var t=0;t<Nn.length;t+=5)(!e||Nn[t+4]&&Nn[t+4].query===e)&&(Nn[t].style.cssText=Nn[t+1],Nn[t].getBBox&&Nn[t].setAttribute("transform",Nn[t+2]||""),Nn[t+3].uncache=1)},hh=function(e,t){var n;for(gn=0;gn<tt.length;gn++)n=tt[gn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&eg(t),t||Es("revert")},tg=function(e,t){rt.cache++,(t||!xi)&&rt.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),_i(e)&&(it.history.scrollRestoration=ah=e)},xi,xs=0,xd,Iv=function(){if(xd!==xs){var e=xd=xs;requestAnimationFrame(function(){return e===xs&&us(!0)})}},us=function(e,t){if(li&&!e){Jt(Qe,"scrollEnd",Qm);return}xi=Qe.isRefreshing=!0,rt.forEach(function(i){return yn(i)&&i.cacheID++&&(i.rec=i())});var n=Es("refreshInit");Gm&&Qe.sort(),t||hh(),rt.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),tt.forEach(function(i,s){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-a),i.revert(!1,1)}}),tt.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,Er(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),rt.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),tg(ah,1),ju.pause(),xs++,Ts(2),tt.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),xi=Qe.isRefreshing=!1,Es("refresh")},vd=0,Pu=1,rs,Ts=function(e){if(!xi||e===2){Qe.isUpdating=!0,rs&&rs.update(0);var t=tt.length,n=_n(),i=n-Xl>=50,s=t&&tt[0].scroll();if(Pu=vd>s?-1:1,vd=s,i&&(li&&!gl&&n-li>200&&(li=0,Es("scrollEnd")),Au=Xl,Xl=n),Pu<0){for(gn=t;gn-- >0;)tt[gn]&&tt[gn].update(0,i);Pu=1}else for(gn=0;gn<t;gn++)tt[gn]&&tt[gn].update(0,i);Qe.isUpdating=!1}Sa=0},pf=[Zm,Km,lh,uh,ti+ua,ti+sa,ti+aa,ti+oa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Lu=pf.concat([gs,_s,"boxSizing","max"+So,"max"+ch,"position",ti,Lt,Lt+aa,Lt+sa,Lt+ua,Lt+oa]),Uv=function(e,t,n){co(n);var i=e._gsap;if(i.spacerIsNative)co(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Yl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=pf.length,o=t.style,a=e.style,u;s--;)u=pf[s],o[u]=n[u];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[lh]=a[uh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[gs]=hf(e,vn)+Kt,o[_s]=hf(e,zt)+Kt,o[Lt]=a[ti]=a[Km]=a[Zm]="0",co(i),a[gs]=a["max"+So]=n[gs],a[_s]=a["max"+ch]=n[_s],a[Lt]=n[Lt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Ov=/([A-Z])/g,co=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ze.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Ov,"-$1").toLowerCase())}},Za=function(e){for(var t=Lu.length,n=e.style,i=[],s=0;s<t;s++)i.push(Lu[s],n[Lu[s]]);return i.t=e,i},Nv=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Ru={left:0,top:0},yd=function(e,t,n,i,s,o,a,u,l,c,h,f,m){yn(e)&&(e=e(u)),_i(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Du("0"+e.substr(3),n):0));var g=m?m.time():0,d,p,x;if(m&&m.seek(0),qo(e))a&&Fu(a,n,i,!0);else{yn(t)&&(t=t(u));var b=(e||"0").split(" "),_,y,M,E;x=Sn(t)||Dt,_=ji(x)||{},(!_||!_.left&&!_.top)&&Ii(x).display==="none"&&(E=x.style.display,x.style.display="block",_=ji(x),E?x.style.display=E:x.style.removeProperty("display")),y=Du(b[0],_[i.d]),M=Du(b[1]||"0",n),e=_[i.p]-l[i.p]-c+y+s-M,a&&Fu(a,M,i,n-M<20||a._isStart&&M>20),n-=n-M}if(o){var T=e+n,v=o._isStart;d="scroll"+i.d2,Fu(o,T,i,v&&T>20||!v&&(h?Math.max(Dt[d],Bi[d]):o.parentNode[d])<=T+1),h&&(l=ji(a),h&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+Kt))}return m&&x&&(d=ji(x),m.seek(f),p=ji(x),m._caScrollDist=d[i.p]-p[i.p],e=e/m._caScrollDist*f),m&&m.seek(g),m?e:Math.round(e)},kv=/(webkit|moz|length|cssText|inset)/i,bd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Dt){e._stOrig=s.cssText,a=Ii(e);for(o in a)!+o&&!kv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ze.core.getCache(e).uncache=1,t.appendChild(e)}},Md=function(e,t){var n=Nr(e,t),i="_scroll"+t.p2,s,o,a=function u(l,c,h,f,m){var g=u.tween,d=c.onComplete,p={};return h=h||n(),m=f&&m||0,f=f||l-h,g&&g.kill(),s=Math.round(h),c[i]=l,c.modifiers=p,p[i]=function(x){return x=Math.round(n()),x!==s&&x!==o&&Math.abs(x-s)>3&&Math.abs(x-o)>3?(g.kill(),u.tween=0):x=h+f*g.ratio+m*g.ratio*g.ratio,o=s,s=Math.round(x)},c.onComplete=function(){u.tween=0,d&&d.call(g)},g=u.tween=ze.to(e,c),g};return e[i]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Jt(e,"wheel",n.wheelHandler),a},Qe=function(){function r(t,n){Ys||r.register(ze)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ha){this.update=this.refresh=this.kill=Ci;return}n=md(_i(n)||qo(n)||n.nodeType?{trigger:n}:n,Ya);var s=n,o=s.onUpdate,a=s.toggleClass,u=s.id,l=s.onToggle,c=s.onRefresh,h=s.scrub,f=s.trigger,m=s.pin,g=s.pinSpacing,d=s.invalidateOnRefresh,p=s.anticipatePin,x=s.onScrubComplete,b=s.onSnapComplete,_=s.once,y=s.snap,M=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,v=s.fastScrollEnd,w=s.preventOverlaps,F=n.horizontal||n.containerAnimation&&n.horizontal!==!1?vn:zt,O=!h&&h!==0,Z=Sn(n.scroller||it),z=ze.core.getCache(Z),I=Ss(Z),q=("pinType"in n?n.pinType:Lr(Z,"pinType")||I&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=O&&n.toggleActions.split(" "),B="markers"in n?n.markers:Ya.markers,se=I?0:parseFloat(Ii(Z)["border"+F.p2+So])||0,L=this,X=n.onRefreshInit&&function(){return n.onRefreshInit(L)},G=Dv(Z,I,F),he=Fv(Z,I),ce=0,ge=0,H=Nr(Z,F),Re,ye,Be,ve,Ge,D,P,$,oe,ne,R,pe,te,me,le,A,S,N,K,Q,fe,xe,_e,ee,Fe,Ne,Ae,Ie,Ee,Te,nt,ut,U,re,de,Se,Le,Ke;if(ff(L),L._dir=F,p*=45,L.scroller=Z,L.scroll=T?T.time.bind(T):H,ve=H(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Gm=1,n.refreshPriority===-9999&&(rs=L)),z.tweenScroll=z.tweenScroll||{top:Md(Z,zt),left:Md(Z,vn)},L.tweenTo=Re=z.tweenScroll[F.p],L.scrubDuration=function(ie){nt=qo(ie)&&ie,nt?Te?Te.duration(ie):Te=ze.to(i,{ease:"expo",totalProgress:"+=0.001",duration:nt,paused:!0,onComplete:function(){return x&&x(L)}}):(Te&&Te.progress(1).kill(),Te=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),Ie=0,u||(u=i.vars.id)),tt.push(L),y&&((!Cu(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Dt.style&&ze.set(I?[Dt,Bi]:Z,{scrollBehavior:"auto"}),rt.forEach(function(ie){return yn(ie)&&ie.target===(I?bt.scrollingElement||Bi:Z)&&(ie.smooth=!1)}),Be=yn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Lv(i):y.snapTo==="labelsDirectional"?Rv(i):y.directional!==!1?function(ie,De){return fh(y.snapTo)(ie,_n()-ge<500?0:De.direction)}:ze.utils.snap(y.snapTo),ut=y.duration||{min:.1,max:2},ut=Cu(ut)?eo(ut.min,ut.max):eo(ut,ut),U=ze.delayedCall(y.delay||nt/2||.1,function(){var ie=H(),De=_n()-ge<500,Ce=Re.tween;if((De||Math.abs(L.getVelocity())<10)&&!Ce&&!gl&&ce!==ie){var He=(ie-D)/te,Pt=i&&!O?i.totalProgress():He,qe=De?0:(Pt-Ee)/(_n()-Au)*1e3||0,Ct=ze.utils.clamp(-He,1-He,Ls(qe/2)*qe/.185),C=He+(y.inertia===!1?0:Ct),W=eo(0,1,Be(C,L)),j=Math.round(D+W*te),k=y,ae=k.onStart,we=k.onInterrupt,Pe=k.onComplete;if(ie<=P&&ie>=D&&j!==ie){if(Ce&&!Ce._initted&&Ce.data<=Ls(j-ie))return;y.inertia===!1&&(Ct=W-He),Re(j,{duration:ut(Ls(Math.max(Ls(C-Pt),Ls(W-Pt))*.185/qe/.05||0)),ease:y.ease||"power3",data:Ls(j-ie),onInterrupt:function(){return U.restart(!0)&&we&&we(L)},onComplete:function(){L.update(),ce=H(),Ie=Ee=i&&!O?i.totalProgress():L.progress,b&&b(L),Pe&&Pe(L)}},ie,Ct*te,j-ie-Ct*te),ae&&ae(L,Re.tween)}}else L.isActive&&ce!==ie&&U.restart(!0)}).pause()),u&&(df[u]=L),f=L.trigger=Sn(f||m),Ke=f&&f._gsap&&f._gsap.stRevert,Ke&&(Ke=Ke(L)),m=m===!0?f:Sn(m),_i(a)&&(a={targets:f,className:a}),m&&(g===!1||g===ti||(g=!g&&m.parentNode&&m.parentNode.style&&Ii(m.parentNode).display==="flex"?!1:Lt),L.pin=m,ye=ze.core.getCache(m),ye.spacer?me=ye.pinState:(E&&(E=Sn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),ye.spacerIsNative=!!E,E&&(ye.spacerState=Za(E))),ye.spacer=S=E||bt.createElement("div"),S.classList.add("pin-spacer"),u&&S.classList.add("pin-spacer-"+u),ye.pinState=me=Za(m)),n.force3D!==!1&&ze.set(m,{force3D:!0}),L.spacer=S=ye.spacer,Ae=Ii(m),_e=Ae[g+F.os2],K=ze.getProperty(m),Q=ze.quickSetter(m,F.a,Kt),Yl(m,S,Ae),A=Za(m)),B){pe=Cu(B)?md(B,gd):gd,ne=ja("scroller-start",u,Z,F,pe,0),R=ja("scroller-end",u,Z,F,pe,0,ne),N=ne["offset"+F.op.d2];var vt=Sn(Lr(Z,"content")||Z);$=this.markerStart=ja("start",u,vt,F,pe,N,0,T),oe=this.markerEnd=ja("end",u,vt,F,pe,N,0,T),T&&(Le=ze.quickSetter([$,oe],F.a,Kt)),!q&&!(Ni.length&&Lr(Z,"fixedMarkers")===!0)&&(Pv(I?Dt:Z),ze.set([ne,R],{force3D:!0}),Fe=ze.quickSetter(ne,F.a,Kt),Ne=ze.quickSetter(R,F.a,Kt))}if(T){var At=T.vars.onUpdate,je=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){L.update(0,0,1),At&&At.apply(je||[])})}L.previous=function(){return tt[tt.indexOf(L)-1]},L.next=function(){return tt[tt.indexOf(L)+1]},L.revert=function(ie,De){if(!De)return L.kill(!0);var Ce=ie!==!1||!L.enabled,He=rn;Ce!==L.isReverted&&(Ce&&(de=Math.max(H(),L.scroll.rec||0),re=L.progress,Se=i&&i.progress()),$&&[$,oe,ne,R].forEach(function(Pt){return Pt.style.display=Ce?"none":"block"}),Ce&&(rn=1,L.update(Ce)),m&&(Ce?Uv(m,S,me):(!M||!L.isActive)&&Yl(m,S,Ii(m),ee)),Ce||L.update(Ce),rn=He,L.isReverted=Ce)},L.refresh=function(ie,De){if(!((rn||!L.enabled)&&!De)){if(m&&ie&&li){Jt(r,"scrollEnd",Qm);return}!xi&&X&&X(L),rn=1,ge=_n(),Re.tween&&(Re.tween.kill(),Re.tween=0),Te&&Te.pause(),d&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;for(var Ce=G(),He=he(),Pt=T?T.duration():Er(Z,F),qe=0,Ct=0,C=n.end,W=n.endTrigger||f,j=n.start||(n.start===0||!f?0:m?"0 0":"0 100%"),k=L.pinnedContainer=n.pinnedContainer&&Sn(n.pinnedContainer),ae=f&&Math.max(0,tt.indexOf(L))||0,we=ae,Pe,Ue,Xe,Je,We,Oe,ft,Zt,jn,Ln;we--;)Oe=tt[we],Oe.end||Oe.refresh(0,1)||(rn=1),ft=Oe.pin,ft&&(ft===f||ft===m)&&!Oe.isReverted&&(Ln||(Ln=[]),Ln.unshift(Oe),Oe.revert(!0,!0)),Oe!==tt[we]&&(ae--,we--);for(yn(j)&&(j=j(L)),D=yd(j,f,Ce,F,H(),$,ne,L,He,se,q,Pt,T)||(m?-.001:0),yn(C)&&(C=C(L)),_i(C)&&!C.indexOf("+=")&&(~C.indexOf(" ")?C=(_i(j)?j.split(" ")[0]:"")+C:(qe=Du(C.substr(2),Ce),C=_i(j)?j:D+qe,W=f)),P=Math.max(D,yd(C||(W?"100% 0":Pt),W,Ce,F,H()+qe,oe,R,L,He,se,q,Pt,T))||-.001,te=P-D||(D-=.01)&&.001,qe=0,we=ae;we--;)Oe=tt[we],ft=Oe.pin,ft&&Oe.start-Oe._pinPush<=D&&!T&&Oe.end>0&&(Pe=Oe.end-Oe.start,(ft===f&&Oe.start-Oe._pinPush<D||ft===k)&&!qo(j)&&(qe+=Pe*(1-Oe.progress)),ft===m&&(Ct+=Pe));if(D+=qe,P+=qe,L._pinPush=Ct,$&&qe&&(Pe={},Pe[F.a]="+="+qe,k&&(Pe[F.p]="-="+H()),ze.set([$,oe],Pe)),m)Pe=Ii(m),Je=F===zt,Xe=H(),fe=parseFloat(K(F.a))+Ct,!Pt&&P>1&&((I?Dt:Z).style["overflow-"+F.a]="scroll"),Yl(m,S,Pe),A=Za(m),Ue=ji(m,!0),Zt=q&&Nr(Z,Je?vn:zt)(),g&&(ee=[g+F.os2,te+Ct+Kt],ee.t=S,we=g===Lt?hf(m,F)+te+Ct:0,we&&ee.push(F.d,we+Kt),co(ee),k&&tt.forEach(function(mt){mt.pin===k&&mt.vars.pinSpacing!==!1&&(mt._subPinOffset=!0)}),q&&H(de)),q&&(We={top:Ue.top+(Je?Xe-D:Zt)+Kt,left:Ue.left+(Je?Zt:Xe-D)+Kt,boxSizing:"border-box",position:"fixed"},We[gs]=We["max"+So]=Math.ceil(Ue.width)+Kt,We[_s]=We["max"+ch]=Math.ceil(Ue.height)+Kt,We[ti]=We[ti+aa]=We[ti+sa]=We[ti+ua]=We[ti+oa]="0",We[Lt]=Pe[Lt],We[Lt+aa]=Pe[Lt+aa],We[Lt+sa]=Pe[Lt+sa],We[Lt+ua]=Pe[Lt+ua],We[Lt+oa]=Pe[Lt+oa],le=Nv(me,We,M),xi&&H(0)),i?(jn=i._initted,Vl(1),i.render(i.duration(),!0,!0),xe=K(F.a)-fe+te+Ct,te!==xe&&q&&le.splice(le.length-2,2),i.render(0,!0,!0),jn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Vl(0)):xe=te;else if(f&&H()&&!T)for(Ue=f.parentNode;Ue&&Ue!==Dt;)Ue._pinOffset&&(D-=Ue._pinOffset,P-=Ue._pinOffset),Ue=Ue.parentNode;Ln&&Ln.forEach(function(mt){return mt.revert(!1,!0)}),L.start=D,L.end=P,ve=Ge=xi?de:H(),!T&&!xi&&(ve<de&&H(de),L.scroll.rec=0),L.revert(!1,!0),U&&(ce=-1,L.isActive&&H(D+te*re),U.restart(!0)),rn=0,i&&O&&(i._initted||Se)&&i.progress()!==Se&&i.progress(Se,!0).render(i.time(),!0,!0),(re!==L.progress||T)&&(i&&!O&&i.totalProgress(re,!0),L.progress=(ve-D)/te===re?0:re),m&&g&&(S._pinOffset=Math.round(L.progress*xe)),c&&!xi&&c(L)}},L.getVelocity=function(){return(H()-Ge)/(_n()-Au)*1e3||0},L.endAnimation=function(){Oo(L.callbackAnimation),i&&(Te?Te.progress(1):i.paused()?O||Oo(i,L.direction<0,1):Oo(i,i.reversed()))},L.labelToScroll=function(ie){return i&&i.labels&&(D||L.refresh()||D)+i.labels[ie]/i.duration()*te||0},L.getTrailing=function(ie){var De=tt.indexOf(L),Ce=L.direction>0?tt.slice(0,De).reverse():tt.slice(De+1);return(_i(ie)?Ce.filter(function(He){return He.vars.preventOverlaps===ie}):Ce).filter(function(He){return L.direction>0?He.end<=D:He.start>=P})},L.update=function(ie,De,Ce){if(!(T&&!Ce&&!ie)){var He=xi?de:L.scroll(),Pt=ie?0:(He-D)/te,qe=Pt<0?0:Pt>1?1:Pt||0,Ct=L.progress,C,W,j,k,ae,we,Pe,Ue;if(De&&(Ge=ve,ve=T?H():He,y&&(Ee=Ie,Ie=i&&!O?i.totalProgress():qe)),p&&!qe&&m&&!rn&&!Va&&li&&D<He+(He-Ge)/(_n()-Au)*p&&(qe=1e-4),qe!==Ct&&L.enabled){if(C=L.isActive=!!qe&&qe<1,W=!!Ct&&Ct<1,we=C!==W,ae=we||!!qe!=!!Ct,L.direction=qe>Ct?1:-1,L.progress=qe,ae&&!rn&&(j=qe&&!Ct?0:qe===1?1:Ct===1?2:3,O&&(k=!we&&Y[j+1]!=="none"&&Y[j+1]||Y[j],Ue=i&&(k==="complete"||k==="reset"||k in i))),w&&(we||Ue)&&(Ue||h||!i)&&(yn(w)?w(L):L.getTrailing(w).forEach(function(Oe){return Oe.endAnimation()})),O||(Te&&!rn&&!Va?((T||rs&&rs!==L)&&Te.render(Te._dp._time-Te._start),Te.resetTo?Te.resetTo("totalProgress",qe,i._tTime/i._tDur):(Te.vars.totalProgress=qe,Te.invalidate().restart())):i&&i.totalProgress(qe,!!rn)),m){if(ie&&g&&(S.style[g+F.os2]=_e),!q)Q(Xo(fe+xe*qe));else if(ae){if(Pe=!ie&&qe>Ct&&P+1>He&&He+1>=Er(Z,F),M)if(!ie&&(C||Pe)){var Xe=ji(m,!0),Je=He-D;bd(m,Dt,Xe.top+(F===zt?Je:0)+Kt,Xe.left+(F===zt?0:Je)+Kt)}else bd(m,S);co(C||Pe?le:A),xe!==te&&qe<1&&C||Q(fe+(qe===1&&!Pe?xe:0))}}y&&!Re.tween&&!rn&&!Va&&U.restart(!0),a&&(we||_&&qe&&(qe<1||!Hl))&&Zu(a.targets).forEach(function(Oe){return Oe.classList[C||_?"add":"remove"](a.className)}),o&&!O&&!ie&&o(L),ae&&!rn?(O&&(Ue&&(k==="complete"?i.pause().totalProgress(1):k==="reset"?i.restart(!0).pause():k==="restart"?i.restart(!0):i[k]()),o&&o(L)),(we||!Hl)&&(l&&we&&ql(L,l),V[j]&&ql(L,V[j]),_&&(qe===1?L.kill(!1,1):V[j]=0),we||(j=qe===1?1:3,V[j]&&ql(L,V[j]))),v&&!C&&Math.abs(L.getVelocity())>(qo(v)?v:2500)&&(Oo(L.callbackAnimation),Te?Te.progress(1):Oo(i,k==="reverse"?1:!qe,1))):O&&o&&!rn&&o(L)}if(Ne){var We=T?He/T.duration()*(T._caScrollDist||0):He;Fe(We+(ne._isFlipped?1:0)),Ne(We)}Le&&Le(-He/T.duration()*(T._caScrollDist||0))}},L.enable=function(ie,De){L.enabled||(L.enabled=!0,Jt(Z,"resize",$o),Jt(I?bt:Z,"scroll",Rs),X&&Jt(r,"refreshInit",X),ie!==!1&&(L.progress=re=0,ve=Ge=ce=H()),De!==!1&&L.refresh())},L.getTween=function(ie){return ie&&Re?Re.tween:Te},L.setPositions=function(ie,De){m&&(fe+=ie-D,xe+=De-ie-te,g===Lt&&L.adjustPinSpacing(De-ie-te)),L.start=D=ie,L.end=P=De,te=De-ie,L.update()},L.adjustPinSpacing=function(ie){if(ee){var De=ee.indexOf(F.d)+1;ee[De]=parseFloat(ee[De])+ie+Kt,ee[1]=parseFloat(ee[1])+ie+Kt,co(ee)}},L.disable=function(ie,De){if(L.enabled&&(ie!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,De||Te&&Te.pause(),de=0,ye&&(ye.uncache=1),X&&qt(r,"refreshInit",X),U&&(U.pause(),Re.tween&&Re.tween.kill()&&(Re.tween=0)),!I)){for(var Ce=tt.length;Ce--;)if(tt[Ce].scroller===Z&&tt[Ce]!==L)return;qt(Z,"resize",$o),qt(Z,"scroll",Rs)}},L.kill=function(ie,De){L.disable(ie,De),Te&&!De&&Te.kill(),u&&delete df[u];var Ce=tt.indexOf(L);Ce>=0&&tt.splice(Ce,1),Ce===gn&&Pu>0&&gn--,Ce=0,tt.forEach(function(He){return He.scroller===L.scroller&&(Ce=1)}),Ce||xi||(L.scroll.rec=0),i&&(i.scrollTrigger=null,ie&&i.revert({kill:!1}),De||i.kill()),$&&[$,oe,ne,R].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),rs===L&&(rs=0),m&&(ye&&(ye.uncache=1),Ce=0,tt.forEach(function(He){return He.pin===m&&Ce++}),Ce||(ye.spacer=0)),n.onKill&&n.onKill(L)},L.enable(!1,!1),Ke&&Ke(L),!i||!i.add||te?L.refresh():ze.delayedCall(.01,function(){return D||P||L.refresh()})&&(te=.01)&&(D=P=0),m&&Iv()},r.register=function(n){return Ys||(ze=n||Ym(),$m()&&window.document&&r.enable(),Ys=Ha),Ys},r.defaults=function(n){if(n)for(var i in n)Ya[i]=n[i];return Ya},r.disable=function(n,i){Ha=0,tt.forEach(function(o){return o[i?"kill":"disable"](n)}),qt(it,"wheel",Rs),qt(bt,"scroll",Rs),clearInterval(Ga),qt(bt,"touchcancel",Ci),qt(Dt,"touchstart",Ci),qa(qt,bt,"pointerdown,touchstart,mousedown",dd),qa(qt,bt,"pointerup,touchend,mouseup",pd),ju.kill(),Xa(qt);for(var s=0;s<rt.length;s+=3)$a(qt,rt[s],rt[s+1]),$a(qt,rt[s],rt[s+2])},r.enable=function(){if(it=window,bt=document,Bi=bt.documentElement,Dt=bt.body,ze&&(Zu=ze.utils.toArray,eo=ze.utils.clamp,ff=ze.core.context||Ci,Vl=ze.core.suppressOverwrites||Ci,ah=it.history.scrollRestoration||"auto",ze.core.globals("ScrollTrigger",r),Dt)){Ha=1,Ot.register(ze),r.isTouch=Ot.isTouch,xr=Ot.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Jt(it,"wheel",Rs),Wm=[it,bt,Bi,Dt],ze.matchMedia?(r.matchMedia=function(u){var l=ze.matchMedia(),c;for(c in u)l.add(c,u[c]);return l},ze.addEventListener("matchMediaInit",function(){return hh()}),ze.addEventListener("matchMediaRevert",function(){return eg()}),ze.addEventListener("matchMedia",function(){us(0,1),Es("matchMedia")}),ze.matchMedia("(orientation: portrait)",function(){return $l(),$l})):console.warn("Requires GSAP 3.11.0 or later"),$l(),Jt(bt,"scroll",Rs);var n=Dt.style,i=n.borderTopStyle,s=ze.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=ji(Dt),zt.m=Math.round(o.top+zt.sc())||0,vn.m=Math.round(o.left+vn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ga=setInterval(_d,250),ze.delayedCall(.5,function(){return Va=0}),Jt(bt,"touchcancel",Ci),Jt(Dt,"touchstart",Ci),qa(Jt,bt,"pointerdown,touchstart,mousedown",dd),qa(Jt,bt,"pointerup,touchend,mouseup",pd),cf=ze.utils.checkPrefix("transform"),Lu.push(cf),Ys=_n(),ju=ze.delayedCall(.2,us).pause(),js=[bt,"visibilitychange",function(){var u=it.innerWidth,l=it.innerHeight;bt.hidden?(fd=u,hd=l):(fd!==u||hd!==l)&&$o()},bt,"DOMContentLoaded",us,it,"load",us,it,"resize",$o],Xa(Jt),tt.forEach(function(u){return u.enable(0,1)}),a=0;a<rt.length;a+=3)$a(qt,rt[a],rt[a+1]),$a(qt,rt[a],rt[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Hl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ga)||(Ga=i)&&setInterval(_d,i),"ignoreMobileResize"in n&&(Hm=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Xa(qt)||Xa(Jt,n.autoRefreshEvents||"none"),Vm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Sn(n),o=rt.indexOf(s),a=Ss(s);~o&&rt.splice(o,a?6:2),i&&(a?Ni.unshift(it,i,Dt,i,Bi,i):Ni.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(_i(n)?Sn(n):n).getBoundingClientRect(),a=o[s?gs:_s]*i||0;return s?o.right-a>0&&o.left+a<it.innerWidth:o.bottom-a>0&&o.top+a<it.innerHeight},r.positionInViewport=function(n,i,s){_i(n)&&(n=Sn(n));var o=n.getBoundingClientRect(),a=o[s?gs:_s],u=i==null?a/2:i in Ku?Ku[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+u)/it.innerWidth:(o.top+u)/it.innerHeight},r.killAll=function(n){if(tt.forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ws.killAll||[];ws={},i.forEach(function(s){return s()})}},r}();Qe.version="3.11.3";Qe.saveStyles=function(r){return r?Zu(r).forEach(function(e){if(e&&e.style){var t=Nn.indexOf(e);t>=0&&Nn.splice(t,5),Nn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ze.core.getCache(e),ff())}}):Nn};Qe.revert=function(r,e){return hh(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?$o():(Ys||Qe.register())&&us(!0)};Qe.update=Ts;Qe.clearScrollMemory=tg;Qe.maxScroll=function(r,e){return Er(r,e?vn:zt)};Qe.getScrollFunc=function(r,e){return Nr(Sn(r),e?vn:zt)};Qe.getById=function(r){return df[r]};Qe.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!li};Qe.snapDirectional=fh;Qe.addEventListener=function(r,e){var t=ws[r]||(ws[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=ws[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(l,c){var h=[],f=[],m=ze.delayedCall(i,function(){c(h,f),h=[],f=[]}).pause();return function(g){h.length||m.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&m.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&yn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return yn(s)&&(s=s(),Jt(Qe,"refresh",function(){return s=e.batchMax()})),Zu(r).forEach(function(u){var l={};for(a in n)l[a]=n[a];l.trigger=u,t.push(Qe.create(l))}),t};var Sd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},jl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ot.isTouch?" pinch-zoom":""):"none",e===Bi&&r(Dt,t)},wd={auto:1,scroll:1},zv=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ze.core.getCache(s),a=_n(),u;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s.scrollHeight<=s.clientHeight;)s=s.parentNode;o._isScroll=s&&!Ss(s)&&s!==n&&(wd[(u=Ii(s)).overflowY]||wd[u.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ng=function(e,t,n,i){return Ot.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&zv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Jt(bt,Ot.eventTypes[0],Td,!1,!0)},onDisable:function(){return qt(bt,Ot.eventTypes[0],Td,!0)}})},Wv=/(input|label|select|textarea)/i,Ed,Td=function(e){var t=Wv.test(e.target.tagName);(t||Ed)&&(e._gsapAllow=!0,Ed=t)},Gv=function(e){Cu(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o,a,u=Sn(e.target)||Bi,l=ze.core.globals().ScrollSmoother,c=l&&l.get(),h=xr&&(e.content&&Sn(e.content)||c&&e.content!==!1&&!c.smooth()&&c.content()),f=Nr(u,zt),m=Nr(u,vn),g=1,d=(Ot.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,p=0,x=yn(i)?function(){return i(o)}:function(){return i||2.8},b,_,y=ng(u,e.type,!0,s),M=function(){return _=!1},E=Ci,T=Ci,v=function(){a=Er(u,zt),T=eo(xr?1:0,a),n&&(E=eo(0,Er(u,vn))),b=xs},w=function(){h._gsap.y=Xo(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},F=function(){if(_){requestAnimationFrame(M);var Y=Xo(o.deltaY/2),B=T(f.v-Y);if(h&&B!==f.v+f.offset){f.offset=B-f.v;var se=Xo((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+se+", 0, 1)",h._gsap.y=se+"px",f.cacheID=rt.cache,Ts()}return!0}f.offset&&w(),_=!0},O,Z,z,I,q=function(){v(),O.isActive()&&O.vars.scrollY>a&&(f()>a?O.progress(1)&&f(a):O.resetTo("scrollY",a))};return h&&ze.set(h,{y:"+=0"}),e.ignoreCheck=function(V){return xr&&V.type==="touchmove"&&F()||g>1.05&&V.type!=="touchstart"||o.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){var V=g;g=Xo((it.visualViewport&&it.visualViewport.scale||1)/d),O.pause(),V!==g&&jl(u,g>1.01?!0:n?!1:"x"),Z=m(),z=f(),v(),b=xs},e.onRelease=e.onGestureStart=function(V,Y){if(f.offset&&w(),!Y)I.restart(!0);else{rt.cache++;var B=x(),se,L;n&&(se=m(),L=se+B*.05*-V.velocityX/.227,B*=Sd(m,se,L,Er(u,vn)),O.vars.scrollX=E(L)),se=f(),L=se+B*.05*-V.velocityY/.227,B*=Sd(f,se,L,Er(u,zt)),O.vars.scrollY=T(L),O.invalidate().duration(B).play(.01),(xr&&O.vars.scrollY>=a||se>=a-1)&&ze.to({},{onUpdate:q,duration:B})}},e.onWheel=function(){O._ts&&O.pause(),_n()-p>1e3&&(b=0,p=_n())},e.onChange=function(V,Y,B,se,L){if(xs!==b&&v(),Y&&n&&m(E(se[2]===Y?Z+(V.startX-V.x):m()+Y-se[1])),B){f.offset&&w();var X=L[2]===B,G=X?z+V.startY-V.y:f()+B-L[1],he=T(G);X&&G!==he&&(z+=he-G),f(he)}(B||Y)&&Ts()},e.onEnable=function(){jl(u,n?!1:"x"),Qe.addEventListener("refresh",q),Jt(it,"resize",q),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),y.enable()},e.onDisable=function(){jl(u,!0),qt(it,"resize",q),Qe.removeEventListener("refresh",q),y.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ot(e),o.iOS=xr,xr&&!f()&&f(1),xr&&ze.ticker.add(Ci),I=o._dc,O=ze.to(o,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:I.vars.onComplete}),o};Qe.sort=function(r){return tt.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new Ot(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return On;if(r===!0&&On)return On.enable();if(r===!1)return On&&On.kill();var e=r instanceof Ot?r:Gv(r);return On&&On.target===e.target&&On.kill(),Ss(e.target)&&(On=e),e};Qe.core={_getVelocityProp:lf,_inputObserver:ng,_scrollers:rt,_proxies:Ni,bridge:{ss:function(){li||Es("scrollStart"),li=_n()},ref:function(){return rn}}};Ym()&&ze.registerPlugin(Qe);const Vv={preserveAspectRatio:"xMidYMin meet",class:"line",viewBox:"0 0 942 3187",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Hv=ir({__name:"SvgAnimation",setup(r){Fn.registerPlugin(Qe);const e=Ui();return sr(()=>{setTimeout(()=>{const t=e.value,n=Math.floor(t.getTotalLength());Fn.timeline({scrollTrigger:{trigger:t,scrub:!0,start:"top+=100 top",end:"bottom bottom"}}).set(t,{"stroke-width":"100px"}).fromTo(t,{"stroke-dasharray":n,"stroke-dashoffset":n},{"stroke-dashoffset":"0"})},300)}),(t,n)=>(St(),It("div",null,[(St(),It("svg",Vv,[ue("path",{ref_key:"targetLine",ref:e,d:"M358.612 51C230.278 77 2.51186 231 118.112 639C262.612 1149 154.112 1269.5 70.1118 1521.5C-13.8882 1773.5 192.029 1959.5 345 1959.5C518.388 1959.5 687.753 1770.39 832.612 1937C979.112 2105.5 746.5 2233 784 2446.5C822.531 2665.87 958.612 2662 850.612 3136",stroke:"#D7D7D7","stroke-width":"100","stroke-linecap":"round"},null,512)]))]))}});const Xv=or(Hv,[["__scopeId","data-v-f3b3f02e"]]),qv=ir({__name:"Background",setup(r){Fn.registerPlugin(Qe);const e=Ui(),t=Ui();return sr(()=>{Fn.timeline({scrollTrigger:{trigger:e.value,scrub:!0,start:"top-=200 bottom",end:"top center"}}).to(t.value,{width:"300vmax",height:"300vmax"}).fromTo(t.value,{autoAlpha:1},{autoAlpha:0})}),(n,i)=>(St(),It(xn,null,[ue("div",{ref_key:"activator",ref:e},null,512),ue("div",{ref_key:"expandBall",ref:t,class:"expandBall"},null,512)],64))}});const $v=or(qv,[["__scopeId","data-v-aa2dd008"]]);var Ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ig={exports:{}};(function(r){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(n){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,o={},a={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function b(_){return _ instanceof u?new u(_.type,b(_.content),_.alias):Array.isArray(_)?_.map(b):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++s}),b.__id},clone:function b(_,y){y=y||{};var M,E;switch(a.util.type(_)){case"Object":if(E=a.util.objId(_),y[E])return y[E];M={},y[E]=M;for(var T in _)_.hasOwnProperty(T)&&(M[T]=b(_[T],y));return M;case"Array":return E=a.util.objId(_),y[E]?y[E]:(M=[],y[E]=M,_.forEach(function(v,w){M[w]=b(v,y)}),M);default:return _}},getLanguage:function(b){for(;b;){var _=i.exec(b.className);if(_)return _[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,_){b.className=b.className.replace(RegExp(i,"gi"),""),b.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(M){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(M.stack)||[])[1];if(b){var _=document.getElementsByTagName("script");for(var y in _)if(_[y].src==b)return _[y]}return null}},isActive:function(b,_,y){for(var M="no-"+_;b;){var E=b.classList;if(E.contains(_))return!0;if(E.contains(M))return!1;b=b.parentElement}return!!y}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(b,_){var y=a.util.clone(a.languages[b]);for(var M in _)y[M]=_[M];return y},insertBefore:function(b,_,y,M){M=M||a.languages;var E=M[b],T={};for(var v in E)if(E.hasOwnProperty(v)){if(v==_)for(var w in y)y.hasOwnProperty(w)&&(T[w]=y[w]);y.hasOwnProperty(v)||(T[v]=E[v])}var F=M[b];return M[b]=T,a.languages.DFS(a.languages,function(O,Z){Z===F&&O!=b&&(this[O]=T)}),T},DFS:function b(_,y,M,E){E=E||{};var T=a.util.objId;for(var v in _)if(_.hasOwnProperty(v)){y.call(_,v,_[v],M||v);var w=_[v],F=a.util.type(w);F==="Object"&&!E[T(w)]?(E[T(w)]=!0,b(w,y,null,E)):F==="Array"&&!E[T(w)]&&(E[T(w)]=!0,b(w,y,v,E))}}},plugins:{},highlightAll:function(b,_){a.highlightAllUnder(document,b,_)},highlightAllUnder:function(b,_,y){var M={callback:y,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",M),M.elements=Array.prototype.slice.apply(M.container.querySelectorAll(M.selector)),a.hooks.run("before-all-elements-highlight",M);for(var E=0,T;T=M.elements[E++];)a.highlightElement(T,_===!0,M.callback)},highlightElement:function(b,_,y){var M=a.util.getLanguage(b),E=a.languages[M];a.util.setLanguage(b,M);var T=b.parentElement;T&&T.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(T,M);var v=b.textContent,w={element:b,language:M,grammar:E,code:v};function F(Z){w.highlightedCode=Z,a.hooks.run("before-insert",w),w.element.innerHTML=w.highlightedCode,a.hooks.run("after-highlight",w),a.hooks.run("complete",w),y&&y.call(w.element)}if(a.hooks.run("before-sanity-check",w),T=w.element.parentElement,T&&T.nodeName.toLowerCase()==="pre"&&!T.hasAttribute("tabindex")&&T.setAttribute("tabindex","0"),!w.code){a.hooks.run("complete",w),y&&y.call(w.element);return}if(a.hooks.run("before-highlight",w),!w.grammar){F(a.util.encode(w.code));return}if(_&&n.Worker){var O=new Worker(a.filename);O.onmessage=function(Z){F(Z.data)},O.postMessage(JSON.stringify({language:w.language,code:w.code,immediateClose:!0}))}else F(a.highlight(w.code,w.grammar,w.language))},highlight:function(b,_,y){var M={code:b,grammar:_,language:y};if(a.hooks.run("before-tokenize",M),!M.grammar)throw new Error('The language "'+M.language+'" has no grammar.');return M.tokens=a.tokenize(M.code,M.grammar),a.hooks.run("after-tokenize",M),u.stringify(a.util.encode(M.tokens),M.language)},tokenize:function(b,_){var y=_.rest;if(y){for(var M in y)_[M]=y[M];delete _.rest}var E=new h;return f(E,E.head,b),c(b,E,_,E.head,0),g(E)},hooks:{all:{},add:function(b,_){var y=a.hooks.all;y[b]=y[b]||[],y[b].push(_)},run:function(b,_){var y=a.hooks.all[b];if(!(!y||!y.length))for(var M=0,E;E=y[M++];)E(_)}},Token:u};n.Prism=a;function u(b,_,y,M){this.type=b,this.content=_,this.alias=y,this.length=(M||"").length|0}u.stringify=function b(_,y){if(typeof _=="string")return _;if(Array.isArray(_)){var M="";return _.forEach(function(F){M+=b(F,y)}),M}var E={type:_.type,content:b(_.content,y),tag:"span",classes:["token",_.type],attributes:{},language:y},T=_.alias;T&&(Array.isArray(T)?Array.prototype.push.apply(E.classes,T):E.classes.push(T)),a.hooks.run("wrap",E);var v="";for(var w in E.attributes)v+=" "+w+'="'+(E.attributes[w]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+v+">"+E.content+"</"+E.tag+">"};function l(b,_,y,M){b.lastIndex=_;var E=b.exec(y);if(E&&M&&E[1]){var T=E[1].length;E.index+=T,E[0]=E[0].slice(T)}return E}function c(b,_,y,M,E,T){for(var v in y)if(!(!y.hasOwnProperty(v)||!y[v])){var w=y[v];w=Array.isArray(w)?w:[w];for(var F=0;F<w.length;++F){if(T&&T.cause==v+","+F)return;var O=w[F],Z=O.inside,z=!!O.lookbehind,I=!!O.greedy,q=O.alias;if(I&&!O.pattern.global){var V=O.pattern.toString().match(/[imsuy]*$/)[0];O.pattern=RegExp(O.pattern.source,V+"g")}for(var Y=O.pattern||O,B=M.next,se=E;B!==_.tail&&!(T&&se>=T.reach);se+=B.value.length,B=B.next){var L=B.value;if(_.length>b.length)return;if(!(L instanceof u)){var X=1,G;if(I){if(G=l(Y,se,b,z),!G||G.index>=b.length)break;var H=G.index,he=G.index+G[0].length,ce=se;for(ce+=B.value.length;H>=ce;)B=B.next,ce+=B.value.length;if(ce-=B.value.length,se=ce,B.value instanceof u)continue;for(var ge=B;ge!==_.tail&&(ce<he||typeof ge.value=="string");ge=ge.next)X++,ce+=ge.value.length;X--,L=b.slice(se,ce),G.index-=se}else if(G=l(Y,0,L,z),!G)continue;var H=G.index,Re=G[0],ye=L.slice(0,H),Be=L.slice(H+Re.length),ve=se+L.length;T&&ve>T.reach&&(T.reach=ve);var Ge=B.prev;ye&&(Ge=f(_,Ge,ye),se+=ye.length),m(_,Ge,X);var D=new u(v,Z?a.tokenize(Re,Z):Re,q,Re);if(B=f(_,Ge,D),Be&&f(_,B,Be),X>1){var P={cause:v+","+F,reach:ve};c(b,_,y,B.prev,se,P),T&&P.reach>T.reach&&(T.reach=P.reach)}}}}}}function h(){var b={value:null,prev:null,next:null},_={value:null,prev:b,next:null};b.next=_,this.head=b,this.tail=_,this.length=0}function f(b,_,y){var M=_.next,E={value:y,prev:_,next:M};return _.next=E,M.prev=E,b.length++,E}function m(b,_,y){for(var M=_.next,E=0;E<y&&M!==b.tail;E++)M=M.next;_.next=M,M.prev=_,b.length-=E}function g(b){for(var _=[],y=b.head.next;y!==b.tail;)_.push(y.value),y=y.next;return _}if(!n.document)return n.addEventListener&&(a.disableWorkerMessageHandler||n.addEventListener("message",function(b){var _=JSON.parse(b.data),y=_.language,M=_.code,E=_.immediateClose;n.postMessage(a.highlight(M,a.languages[y],y)),E&&n.close()},!1)),a;var d=a.util.currentScript();d&&(a.filename=d.src,d.hasAttribute("data-manual")&&(a.manual=!0));function p(){a.manual||a.highlightAll()}if(!a.manual){var x=document.readyState;x==="loading"||x==="interactive"&&d&&d.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return a}(e);r.exports&&(r.exports=t),typeof Ad<"u"&&(Ad.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(i,s){var o={};o["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[s]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+s]={pattern:/[\s\S]+/,inside:t.languages[s]};var u={};u[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:a},t.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,i){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:t.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(n){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var s=n.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",i=function(d,p){return"\u2716 Error "+d+" while fetching file: "+p},s="\u2716 Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",u="loading",l="loaded",c="failed",h="pre[data-src]:not(["+a+'="'+l+'"]):not(['+a+'="'+u+'"])';function f(d,p,x){var b=new XMLHttpRequest;b.open("GET",d,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?p(b.responseText):b.status>=400?x(i(b.status,b.statusText)):x(s))},b.send(null)}function m(d){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(d||"");if(p){var x=Number(p[1]),b=p[2],_=p[3];return b?_?[x,Number(_)]:[x,void 0]:[x,x]}}t.hooks.add("before-highlightall",function(d){d.selector+=", "+h}),t.hooks.add("before-sanity-check",function(d){var p=d.element;if(p.matches(h)){d.code="",p.setAttribute(a,u);var x=p.appendChild(document.createElement("CODE"));x.textContent=n;var b=p.getAttribute("data-src"),_=d.language;if(_==="none"){var y=(/\.(\w+)$/.exec(b)||[,"none"])[1];_=o[y]||y}t.util.setLanguage(x,_),t.util.setLanguage(p,_);var M=t.plugins.autoloader;M&&M.loadLanguages(_),f(b,function(E){p.setAttribute(a,l);var T=m(p.getAttribute("data-range"));if(T){var v=E.split(/\r\n?|\n/g),w=T[0],F=T[1]==null?v.length:T[1];w<0&&(w+=v.length),w=Math.max(0,Math.min(w-1,v.length)),F<0&&(F+=v.length),F=Math.max(0,Math.min(F,v.length)),E=v.slice(w,F).join(`
`),p.hasAttribute("data-start")||p.setAttribute("data-start",String(w+1))}x.textContent=E,t.highlightElement(x)},function(E){p.setAttribute(a,c),x.textContent=E})}}),t.plugins.fileHighlight={highlight:function(p){for(var x=(p||document).querySelectorAll(h),b=0,_;_=x[b++];)t.highlightElement(_)}};var g=!1;t.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ig);const Yv=ig.exports;var jv={exports:{}};(function(r){(function(){if(typeof Prism>"u")return;var e=Object.assign||function(o,a){for(var u in a)a.hasOwnProperty(u)&&(o[u]=a[u]);return o};function t(o){this.defaults=e({},o)}function n(o){return o.replace(/-(\w)/g,function(a,u){return u.toUpperCase()})}function i(o){for(var a=0,u=0;u<o.length;++u)o.charCodeAt(u)=="	".charCodeAt(0)&&(a+=3);return o.length+a}var s={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};t.prototype={setDefaults:function(o){this.defaults=e(this.defaults,o)},normalize:function(o,a){a=e(this.defaults,a);for(var u in a){var l=n(u);u!=="normalize"&&l!=="setDefaults"&&a[u]&&this[l]&&(o=this[l].call(this,o,a[u]))}return o},leftTrim:function(o){return o.replace(/^\s+/,"")},rightTrim:function(o){return o.replace(/\s+$/,"")},tabsToSpaces:function(o,a){return a=a|0||4,o.replace(/\t/g,new Array(++a).join(" "))},spacesToTabs:function(o,a){return a=a|0||4,o.replace(RegExp(" {"+a+"}","g"),"	")},removeTrailing:function(o){return o.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(o){return o.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(o){var a=o.match(/^[^\S\n\r]*(?=\S)/gm);return!a||!a[0].length||(a.sort(function(u,l){return u.length-l.length}),!a[0].length)?o:o.replace(RegExp("^"+a[0],"gm"),"")},indent:function(o,a){return o.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++a).join("	")+"$&")},breakLines:function(o,a){a=a===!0?80:a|0||80;for(var u=o.split(`
`),l=0;l<u.length;++l)if(!(i(u[l])<=a)){for(var c=u[l].split(/(\s+)/g),h=0,f=0;f<c.length;++f){var m=i(c[f]);h+=m,h>a&&(c[f]=`
`+c[f],h=m)}u[l]=c.join("")}return u.join(`
`)}},r.exports&&(r.exports=t),Prism.plugins.NormalizeWhitespace=new t({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(o){var a=Prism.plugins.NormalizeWhitespace;if(!(o.settings&&o.settings["whitespace-normalization"]===!1)&&!!Prism.util.isActive(o.element,"whitespace-normalization",!0)){if((!o.element||!o.element.parentNode)&&o.code){o.code=a.normalize(o.code,o.settings);return}var u=o.element.parentNode;if(!(!o.code||!u||u.nodeName.toLowerCase()!=="pre")){o.settings==null&&(o.settings={});for(var l in s)if(Object.hasOwnProperty.call(s,l)){var c=s[l];if(u.hasAttribute("data-"+l))try{var h=JSON.parse(u.getAttribute("data-"+l)||"true");typeof h===c&&(o.settings[l]=h)}catch{}}for(var f=u.childNodes,m="",g="",d=!1,p=0;p<f.length;++p){var x=f[p];x==o.element?d=!0:x.nodeName==="#text"&&(d?g+=x.nodeValue:m+=x.nodeValue,u.removeChild(x),--p)}if(!o.element.children.length||!Prism.plugins.KeepMarkup)o.code=m+o.code+g,o.code=a.normalize(o.code,o.settings);else{var b=m+o.element.innerHTML+g;o.element.innerHTML=a.normalize(b,o.settings),o.code=o.element.textContent}}}})})()})(jv);const Zv={key:0},Kv={key:0},Jv={key:1,class:"inline"},Qv=ir({__name:"SampleCode",props:{type:{type:String,default:"javascript"},caption:{type:String,default:null}},setup(r){return sr(()=>{window.Prism=window.Prism||{},window.Prism.manual=!0,window.Prism.plugins.NormalizeWhitespace.setDefaults({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Yv.highlightAll()}),(e,t)=>e.$slots.default()[0].type==="pre"?(St(),It("figure",Zv,[ue("pre",null,[ue("code",{class:la("language-"+r.type)},[pa(e.$slots,"default",{},void 0,!0)],2)]),r.caption?(St(),It("figcaption",Kv,Og(r.caption),1)):T3("",!0)])):(St(),It("figure",Jv,[ue("code",{class:la("language-"+r.type)},[pa(e.$slots,"default",{},void 0,!0)],2)]))}});const ht=or(Qv,[["__scopeId","data-v-d913821e"]]),e1={ref:"sampleCard",class:"sample-card"},t1=["src"],n1=ir({__name:"SampleCard",props:{n:{type:Number,default:"0"}},setup(r){const e=r;return(t,n)=>(St(),It("div",e1,[ue("img",{src:"https://source.unsplash.com/random?"+e.n,alt:""},null,8,t1)],512))}});const i1=or(n1,[["__scopeId","data-v-dc761f36"]]),r1={class:"card__heading",ref:"heading"},s1={class:"card__text"},o1=ir({__name:"DescriptionCard",props:{startX:{type:String,default:"0"},startY:{type:String,default:"0"}},setup(r){const e=r;Fn.registerPlugin(Qe);const t=Ui(null);return sr(()=>{Fn.set(t.value,{x:e.startX,y:e.startY,opacity:0}),Fn.to(t.value,{x:0,y:0,opacity:1,scrollTrigger:{trigger:t.value,toggleActions:"play none none reset",start:"top center+=30%",end:"top center-=30%"}})}),(n,i)=>{const s=Oc("budoux");return St(),It("div",{class:"card",ref_key:"card",ref:t},[_r((St(),It("h2",r1,[pa(n.$slots,"heading")])),[[s]]),ue("div",s1,[pa(n.$slots,"default")])],512)}}});const Kn=or(o1,[["__scopeId","data-v-9bfb2b69"]]),a1=ir({__name:"SideScroller",setup(r){Fn.registerPlugin(Qe);const e=Ui(null),t=()=>e.value?e.value.clientWidth-window.innerWidth:0;return sr(()=>{const n=Fn.to(e.value,{x:-t(),ease:"none",scrollTrigger:{trigger:e.value,scrub:!0,pin:!0,end:"+="+t(),invalidateOnRefresh:!0}});Qe.addEventListener("refreshInit",()=>{n.vars.x=-t(),n.vars.scrollTrigger={end:"+="+t()}})}),(n,i)=>(St(),It("div",{ref_key:"sideScroller",ref:e,class:"side-scroller"},[pa(n.$slots,"default",{},void 0,!0)],512))}});const u1=or(a1,[["__scopeId","data-v-c6c26b16"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dh="147",l1=0,Cd=1,c1=2,rg=1,f1=2,Yo=3,wo=0,ci=1,Tr=2,Rr=0,fo=1,mf=2,Dd=3,Fd=4,h1=5,Zs=100,d1=101,p1=102,Pd=103,Ld=104,m1=200,g1=201,_1=202,x1=203,sg=204,og=205,v1=206,y1=207,b1=208,M1=209,S1=210,w1=0,E1=1,T1=2,gf=3,A1=4,C1=5,D1=6,F1=7,ag=0,P1=1,L1=2,Qi=0,R1=1,B1=2,I1=3,U1=4,O1=5,ug=300,Eo=301,To=302,_f=303,xf=304,_l=306,vf=1e3,yi=1001,yf=1002,wn=1003,Rd=1004,Bd=1005,ni=1006,N1=1007,xl=1008,As=1009,k1=1010,z1=1011,lg=1012,W1=1013,ls=1014,cs=1015,wa=1016,G1=1017,V1=1018,ho=1020,H1=1021,X1=1022,bi=1023,q1=1024,$1=1025,vs=1026,Ao=1027,Y1=1028,j1=1029,Z1=1030,K1=1031,J1=1033,Zl=33776,Kl=33777,Jl=33778,Ql=33779,Id=35840,Ud=35841,Od=35842,Nd=35843,Q1=36196,kd=37492,zd=37496,Wd=37808,Gd=37809,Vd=37810,Hd=37811,Xd=37812,qd=37813,$d=37814,Yd=37815,jd=37816,Zd=37817,Kd=37818,Jd=37819,Qd=37820,ep=37821,tp=36492,Cs=3e3,Mt=3001,ey=3200,ty=3201,ny=0,iy=1,Di="srgb",Ea="srgb-linear",ec=7680,ry=519,np=35044,ip="300 es",bf=1035;class Lo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=Math.PI/180,rp=180/Math.PI;function Aa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function zn(r,e,t){return Math.max(e,Math.min(t,r))}function sy(r,e){return(r%e+e)%e}function nc(r,e,t){return(1-t)*r+t*e}function sp(r){return(r&r-1)===0&&r!==0}function Mf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ka(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vn{constructor(){Vn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,u,l){const c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=u,c[6]=n,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],u=n[6],l=n[1],c=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],x=i[6],b=i[1],_=i[4],y=i[7],M=i[2],E=i[5],T=i[8];return s[0]=o*d+a*b+u*M,s[3]=o*p+a*_+u*E,s[6]=o*x+a*y+u*T,s[1]=l*d+c*b+h*M,s[4]=l*p+c*_+h*E,s[7]=l*x+c*y+h*T,s[2]=f*d+m*b+g*M,s[5]=f*p+m*_+g*E,s[8]=f*x+m*y+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],c=e[8];return t*o*c-t*a*l-n*s*c+n*a*u+i*s*l-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],c=e[8],h=c*o-a*l,f=a*u-c*s,m=l*s-o*u,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*l-c*n)*d,e[2]=(a*n-i*o)*d,e[3]=f*d,e[4]=(c*t-i*u)*d,e[5]=(i*s-a*t)*d,e[6]=m*d,e[7]=(n*u-l*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const u=Math.cos(s),l=Math.sin(s);return this.set(n*u,n*l,-n*(u*o+l*a)+o+e,-i*l,i*u,-i*(-l*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ic.makeScale(e,t)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ic=new Vn;function cg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ju(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ys(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bu(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const rc={[Di]:{[Ea]:ys},[Ea]:{[Di]:Bu}},dn={legacyMode:!0,get workingColorSpace(){return Ea},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(rc[e]&&rc[e][t]!==void 0){const n=rc[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nt={r:0,g:0,b:0},di={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function sc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Qa(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class xt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dn.workingColorSpace){return this.r=e,this.g=t,this.b=n,dn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dn.workingColorSpace){if(e=sy(e,1),t=zn(t,0,1),n=zn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=sc(o,s,e+1/3),this.g=sc(o,s,e),this.b=sc(o,s,e-1/3)}return dn.toWorkingColorSpace(this,i),this}setStyle(e,t=Di){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,dn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,dn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const u=parseFloat(s[1])/360,l=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return n(s[4]),this.setHSL(u,l,c,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,dn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,dn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Di){const n=fg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=Bu(e.r),this.g=Bu(e.g),this.b=Bu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return dn.fromWorkingColorSpace(Qa(this,Nt),e),zn(Nt.r*255,0,255)<<16^zn(Nt.g*255,0,255)<<8^zn(Nt.b*255,0,255)<<0}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dn.workingColorSpace){dn.fromWorkingColorSpace(Qa(this,Nt),t);const n=Nt.r,i=Nt.g,s=Nt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let u,l;const c=(a+o)/2;if(a===o)u=0,l=0;else{const h=o-a;switch(l=c<=.5?h/(o+a):h/(2-o-a),o){case n:u=(i-s)/h+(i<s?6:0);break;case i:u=(s-n)/h+2;break;case s:u=(n-i)/h+4;break}u/=6}return e.h=u,e.s=l,e.l=c,e}getRGB(e,t=dn.workingColorSpace){return dn.fromWorkingColorSpace(Qa(this,Nt),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Di){return dn.fromWorkingColorSpace(Qa(this,Nt),e),e!==Di?`color(${e} ${Nt.r} ${Nt.g} ${Nt.b})`:`rgb(${Nt.r*255|0},${Nt.g*255|0},${Nt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(di),di.h+=e,di.s+=t,di.l+=n,this.setHSL(di.h,di.s,di.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Ja);const n=nc(di.h,Ja.h,t),i=nc(di.s,Ja.s,t),s=nc(di.l,Ja.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}xt.NAMES=fg;let Bs;class hg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=Ju("canvas")),Bs.width=e.width,Bs.height=e.height;const n=Bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ju("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ys(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ys(t[n]/255)*255):t[n]=ys(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class dg{constructor(e=null){this.isSource=!0,this.uuid=Aa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(oc(i[o].image)):s.push(oc(i[o]))}else s=oc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function oc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oy=0;class Xn extends Lo{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,n=yi,i=yi,s=ni,o=xl,a=bi,u=As,l=Xn.DEFAULT_ANISOTROPY,c=Cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Aa(),this.name="",this.source=new dg(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=u,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vf:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vf:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=ug;Xn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,t=0,n=0,i=1){tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,l=u[0],c=u[4],h=u[8],f=u[1],m=u[5],g=u[9],d=u[2],p=u[6],x=u[10];if(Math.abs(c-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,y=(m+1)/2,M=(x+1)/2,E=(c+f)/4,T=(h+d)/4,v=(g+p)/4;return _>y&&_>M?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=E/n,s=T/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=v/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=T/s,i=v/s),this.set(n,i,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-c)*(f-c));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-d)/b,this.z=(f-c)/b,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ds extends Lo{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ni,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pg extends Xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ay extends Xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ca{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let u=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3];const f=s[o+0],m=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=u,e[t+1]=l,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||u!==f||l!==m||c!==g){let p=1-a;const x=u*f+l*m+c*g+h*d,b=x>=0?1:-1,_=1-x*x;if(_>Number.EPSILON){const M=Math.sqrt(_),E=Math.atan2(M,x*b);p=Math.sin(p*E)/M,a=Math.sin(a*E)/M}const y=a*b;if(u=u*p+f*y,l=l*p+m*y,c=c*p+g*y,h=h*p+d*y,p===1-a){const M=1/Math.sqrt(u*u+l*l+c*c+h*h);u*=M,l*=M,c*=M,h*=M}}e[t]=u,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],u=n[i+1],l=n[i+2],c=n[i+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+c*h+u*m-l*f,e[t+1]=u*g+c*f+l*h-a*m,e[t+2]=l*g+c*m+a*f-u*h,e[t+3]=c*g-a*h-u*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,u=Math.sin,l=a(n/2),c=a(i/2),h=a(s/2),f=u(n/2),m=u(i/2),g=u(s/2);switch(o){case"XYZ":this._x=f*c*h+l*m*g,this._y=l*m*h-f*c*g,this._z=l*c*g+f*m*h,this._w=l*c*h-f*m*g;break;case"YXZ":this._x=f*c*h+l*m*g,this._y=l*m*h-f*c*g,this._z=l*c*g-f*m*h,this._w=l*c*h+f*m*g;break;case"ZXY":this._x=f*c*h-l*m*g,this._y=l*m*h+f*c*g,this._z=l*c*g+f*m*h,this._w=l*c*h-f*m*g;break;case"ZYX":this._x=f*c*h-l*m*g,this._y=l*m*h+f*c*g,this._z=l*c*g-f*m*h,this._w=l*c*h+f*m*g;break;case"YZX":this._x=f*c*h+l*m*g,this._y=l*m*h+f*c*g,this._z=l*c*g-f*m*h,this._w=l*c*h-f*m*g;break;case"XZY":this._x=f*c*h-l*m*g,this._y=l*m*h-f*c*g,this._z=l*c*g+f*m*h,this._w=l*c*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],u=t[9],l=t[2],c=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-u)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(c-u)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(u+c)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(u+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,u=t._y,l=t._z,c=t._w;return this._x=n*c+o*a+i*l-s*u,this._y=i*c+o*u+s*a-n*l,this._z=s*c+o*l+n*u-i*a,this._w=o*c-n*a-i*u-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const u=1-a*a;if(u<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(u),c=Math.atan2(l,a),h=Math.sin((1-t)*c)/l,f=Math.sin(t*c)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(op.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(op.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,u=e.w,l=u*t+o*i-a*n,c=u*n+a*t-s*i,h=u*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=l*u+f*-s+c*-a-h*-o,this.y=c*u+f*-o+h*-s-l*-a,this.z=h*u+f*-a+l*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,u=t.z;return this.x=i*u-s*a,this.y=s*o-n*u,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ac.copy(this).projectOnVector(e),this.sub(ac)}reflect(e){return this.sub(ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ac=new J,op=new Ca;class Da{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let u=0,l=e.length;u<l;u+=3){const c=e[u],h=e[u+1],f=e[u+2];c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>s&&(s=c),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let u=0,l=e.count;u<l;u++){const c=e.getX(u),h=e.getY(u),f=e.getZ(u);c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>s&&(s=c),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$r.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)$r.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint($r)}else n.boundingBox===null&&n.computeBoundingBox(),uc.copy(n.boundingBox),uc.applyMatrix4(e.matrixWorld),this.union(uc);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$r),$r.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),eu.subVectors(this.max,No),Is.subVectors(e.a,No),Us.subVectors(e.b,No),Os.subVectors(e.c,No),lr.subVectors(Us,Is),cr.subVectors(Os,Us),Yr.subVectors(Is,Os);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Yr.z,Yr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Yr.z,0,-Yr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Yr.y,Yr.x,0];return!lc(t,Is,Us,Os,eu)||(t=[1,0,0,0,1,0,0,0,1],!lc(t,Is,Us,Os,eu))?!1:(tu.crossVectors(lr,cr),t=[tu.x,tu.y,tu.z],lc(t,Is,Us,Os,eu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return $r.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize($r).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new J,new J,new J,new J,new J,new J,new J,new J],$r=new J,uc=new Da,Is=new J,Us=new J,Os=new J,lr=new J,cr=new J,Yr=new J,No=new J,eu=new J,tu=new J,jr=new J;function lc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){jr.fromArray(r,s);const a=i.x*Math.abs(jr.x)+i.y*Math.abs(jr.y)+i.z*Math.abs(jr.z),u=e.dot(jr),l=t.dot(jr),c=n.dot(jr);if(Math.max(-Math.max(u,l,c),Math.min(u,l,c))>a)return!1}return!0}const uy=new Da,ko=new J,cc=new J;class vl{constructor(e=new J,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uy.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const t=ko.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ko,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(cc)),this.expandByPoint(ko.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new J,fc=new J,nu=new J,fr=new J,hc=new J,iu=new J,dc=new J;class mg{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.direction).multiplyScalar(t).add(this.origin),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fc.copy(e).add(t).multiplyScalar(.5),nu.copy(t).sub(e).normalize(),fr.copy(this.origin).sub(fc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(nu),a=fr.dot(this.direction),u=-fr.dot(nu),l=fr.lengthSq(),c=Math.abs(1-o*o);let h,f,m,g;if(c>0)if(h=o*u-a,f=o*a-u,g=s*c,h>=0)if(f>=-g)if(f<=g){const d=1/c;h*=d,f*=d,m=h*(h+o*f+2*a)+f*(o*h+f+2*u)+l}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*u)+l;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*u)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-u),s),m=-h*h+f*(f+2*u)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-u),s),m=f*(f+2*u)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-u),s),m=-h*h+f*(f+2*u)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*u)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(nu).multiplyScalar(f).add(fc),m}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const n=Gi.dot(this.direction),i=Gi.dot(Gi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,u=n+o;return a<0&&u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,u;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,u=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,u=(e.min.z-f.z)*h),n>u||a>i)||((a>n||n!==n)&&(n=a),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,i,s){hc.subVectors(t,e),iu.subVectors(n,e),dc.crossVectors(hc,iu);let o=this.direction.dot(dc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fr.subVectors(this.origin,e);const u=a*this.direction.dot(iu.crossVectors(fr,iu));if(u<0)return null;const l=a*this.direction.dot(hc.cross(fr));if(l<0||u+l>o)return null;const c=-a*fr.dot(dc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,u,l,c,h,f,m,g,d,p){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=u,x[2]=l,x[6]=c,x[10]=h,x[14]=f,x[3]=m,x[7]=g,x[11]=d,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,m=o*h,g=a*c,d=a*h;t[0]=u*c,t[4]=-u*h,t[8]=l,t[1]=m+g*l,t[5]=f-d*l,t[9]=-a*u,t[2]=d-f*l,t[6]=g+m*l,t[10]=o*u}else if(e.order==="YXZ"){const f=u*c,m=u*h,g=l*c,d=l*h;t[0]=f+d*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=m*a-g,t[6]=d+f*a,t[10]=o*u}else if(e.order==="ZXY"){const f=u*c,m=u*h,g=l*c,d=l*h;t[0]=f-d*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*c,t[9]=d-f*a,t[2]=-o*l,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){const f=o*c,m=o*h,g=a*c,d=a*h;t[0]=u*c,t[4]=g*l-m,t[8]=f*l+d,t[1]=u*h,t[5]=d*l+f,t[9]=m*l-g,t[2]=-l,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){const f=o*u,m=o*l,g=a*u,d=a*l;t[0]=u*c,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-l*c,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*u,m=o*l,g=a*u,d=a*l;t[0]=u*c,t[4]=-h,t[8]=l*c,t[1]=f*h+d,t[5]=o*c,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*c,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ly,e,cy)}lookAt(e,t,n){const i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),hr.crossVectors(n,In),hr.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),hr.crossVectors(n,In)),hr.normalize(),ru.crossVectors(In,hr),i[0]=hr.x,i[4]=ru.x,i[8]=In.x,i[1]=hr.y,i[5]=ru.y,i[9]=In.y,i[2]=hr.z,i[6]=ru.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],u=n[8],l=n[12],c=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],x=n[14],b=n[3],_=n[7],y=n[11],M=n[15],E=i[0],T=i[4],v=i[8],w=i[12],F=i[1],O=i[5],Z=i[9],z=i[13],I=i[2],q=i[6],V=i[10],Y=i[14],B=i[3],se=i[7],L=i[11],X=i[15];return s[0]=o*E+a*F+u*I+l*B,s[4]=o*T+a*O+u*q+l*se,s[8]=o*v+a*Z+u*V+l*L,s[12]=o*w+a*z+u*Y+l*X,s[1]=c*E+h*F+f*I+m*B,s[5]=c*T+h*O+f*q+m*se,s[9]=c*v+h*Z+f*V+m*L,s[13]=c*w+h*z+f*Y+m*X,s[2]=g*E+d*F+p*I+x*B,s[6]=g*T+d*O+p*q+x*se,s[10]=g*v+d*Z+p*V+x*L,s[14]=g*w+d*z+p*Y+x*X,s[3]=b*E+_*F+y*I+M*B,s[7]=b*T+_*O+y*q+M*se,s[11]=b*v+_*Z+y*V+M*L,s[15]=b*w+_*z+y*Y+M*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],u=e[9],l=e[13],c=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],x=e[15];return g*(+s*u*h-i*l*h-s*a*f+n*l*f+i*a*m-n*u*m)+d*(+t*u*m-t*l*f+s*o*f-i*o*m+i*l*c-s*u*c)+p*(+t*l*h-t*a*m-s*o*h+n*o*m+s*a*c-n*l*c)+x*(-i*a*c-t*u*h+t*a*f+i*o*h-n*o*f+n*u*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],c=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],x=e[15],b=h*p*l-d*f*l+d*u*m-a*p*m-h*u*x+a*f*x,_=g*f*l-c*p*l-g*u*m+o*p*m+c*u*x-o*f*x,y=c*d*l-g*h*l+g*a*m-o*d*m-c*a*x+o*h*x,M=g*h*u-c*d*u-g*a*f+o*d*f+c*a*p-o*h*p,E=t*b+n*_+i*y+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=b*T,e[1]=(d*f*s-h*p*s-d*i*m+n*p*m+h*i*x-n*f*x)*T,e[2]=(a*p*s-d*u*s+d*i*l-n*p*l-a*i*x+n*u*x)*T,e[3]=(h*u*s-a*f*s-h*i*l+n*f*l+a*i*m-n*u*m)*T,e[4]=_*T,e[5]=(c*p*s-g*f*s+g*i*m-t*p*m-c*i*x+t*f*x)*T,e[6]=(g*u*s-o*p*s-g*i*l+t*p*l+o*i*x-t*u*x)*T,e[7]=(o*f*s-c*u*s+c*i*l-t*f*l-o*i*m+t*u*m)*T,e[8]=y*T,e[9]=(g*h*s-c*d*s-g*n*m+t*d*m+c*n*x-t*h*x)*T,e[10]=(o*d*s-g*a*s+g*n*l-t*d*l-o*n*x+t*a*x)*T,e[11]=(c*a*s-o*h*s-c*n*l+t*h*l+o*n*m-t*a*m)*T,e[12]=M*T,e[13]=(c*d*i-g*h*i+g*n*f-t*d*f-c*n*p+t*h*p)*T,e[14]=(g*a*i-o*d*i-g*n*u+t*d*u+o*n*p-t*a*p)*T,e[15]=(o*h*i-c*a*i+c*n*u-t*h*u-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,u=e.z,l=s*o,c=s*a;return this.set(l*o+n,l*a-i*u,l*u+i*a,0,l*a+i*u,c*a+n,c*u-i*o,0,l*u-i*a,c*u+i*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,u=t._w,l=s+s,c=o+o,h=a+a,f=s*l,m=s*c,g=s*h,d=o*c,p=o*h,x=a*h,b=u*l,_=u*c,y=u*h,M=n.x,E=n.y,T=n.z;return i[0]=(1-(d+x))*M,i[1]=(m+y)*M,i[2]=(g-_)*M,i[3]=0,i[4]=(m-y)*E,i[5]=(1-(f+x))*E,i[6]=(p+b)*E,i[7]=0,i[8]=(g+_)*T,i[9]=(p-b)*T,i[10]=(1-(f+d))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ns.set(i[0],i[1],i[2]).length();const o=Ns.set(i[4],i[5],i[6]).length(),a=Ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],pi.copy(this);const l=1/s,c=1/o,h=1/a;return pi.elements[0]*=l,pi.elements[1]*=l,pi.elements[2]*=l,pi.elements[4]*=c,pi.elements[5]*=c,pi.elements[6]*=c,pi.elements[8]*=h,pi.elements[9]*=h,pi.elements[10]*=h,t.setFromRotationMatrix(pi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,u=2*s/(t-e),l=2*s/(n-i),c=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=u,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,u=1/(t-e),l=1/(n-i),c=1/(o-s),h=(t+e)*u,f=(n+i)*l,m=(o+s)*c;return a[0]=2*u,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ns=new J,pi=new Yt,ly=new J(0,0,0),cy=new J(1,1,1),hr=new J,ru=new J,In=new J,ap=new Yt,up=new Ca;class Fa{constructor(e=0,t=0,n=0,i=Fa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],u=i[1],l=i[5],c=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(zn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(zn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-zn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(zn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-zn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ap,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return up.setFromEuler(this),this.setFromQuaternion(up,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Fa.DefaultOrder="XYZ";Fa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class gg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fy=0;const lp=new J,ks=new Ca,Vi=new Yt,su=new J,zo=new J,hy=new J,dy=new Ca,cp=new J(1,0,0),fp=new J(0,1,0),hp=new J(0,0,1),py={type:"added"},dp={type:"removed"};class Pn extends Lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DefaultUp.clone();const e=new J,t=new Fa,n=new Ca,i=new J(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Vn}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Pn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Pn.DefaultMatrixWorldAutoUpdate,this.layers=new gg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(cp,e)}rotateY(e){return this.rotateOnAxis(fp,e)}rotateZ(e){return this.rotateOnAxis(hp,e)}translateOnAxis(e,t){return lp.copy(e).applyQuaternion(this.quaternion),this.position.add(lp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cp,e)}translateY(e){return this.translateOnAxis(fp,e)}translateZ(e){return this.translateOnAxis(hp,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?su.copy(e):su.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(zo,su,this.up):Vi.lookAt(su,zo,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(Vi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(py)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(dp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,hy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let l=0,c=u.length;l<c;l++){const h=u[l];s(e.shapes,h)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,l=this.material.length;u<l;u++)a.push(s(e.materials,this.material[u]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];i.animations.push(s(e.animations,u))}}if(t){const a=o(e.geometries),u=o(e.materials),l=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const u=[];for(const l in a){const c=a[l];delete c.metadata,u.push(c)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Pn.DefaultUp=new J(0,1,0);Pn.DefaultMatrixAutoUpdate=!0;Pn.DefaultMatrixWorldAutoUpdate=!0;const mi=new J,Hi=new J,pc=new J,Xi=new J,zs=new J,Ws=new J,pp=new J,mc=new J,gc=new J,_c=new J;class Zi{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mi.subVectors(e,t),i.cross(mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){mi.subVectors(i,t),Hi.subVectors(n,t),pc.subVectors(e,t);const o=mi.dot(mi),a=mi.dot(Hi),u=mi.dot(pc),l=Hi.dot(Hi),c=Hi.dot(pc),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(l*u-a*c)*f,g=(o*c-a*u)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xi),Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getUV(e,t,n,i,s,o,a,u){return this.getBarycoord(e,t,n,i,Xi),u.set(0,0),u.addScaledVector(s,Xi.x),u.addScaledVector(o,Xi.y),u.addScaledVector(a,Xi.z),u}static isFrontFacing(e,t,n,i){return mi.subVectors(n,t),Hi.subVectors(e,t),mi.cross(Hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),mi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Zi.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;zs.subVectors(i,n),Ws.subVectors(s,n),mc.subVectors(e,n);const u=zs.dot(mc),l=Ws.dot(mc);if(u<=0&&l<=0)return t.copy(n);gc.subVectors(e,i);const c=zs.dot(gc),h=Ws.dot(gc);if(c>=0&&h<=c)return t.copy(i);const f=u*h-c*l;if(f<=0&&u>=0&&c<=0)return o=u/(u-c),t.copy(n).addScaledVector(zs,o);_c.subVectors(e,s);const m=zs.dot(_c),g=Ws.dot(_c);if(g>=0&&m<=g)return t.copy(s);const d=m*l-u*g;if(d<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ws,a);const p=c*g-m*h;if(p<=0&&h-c>=0&&m-g>=0)return pp.subVectors(s,i),a=(h-c)/(h-c+(m-g)),t.copy(i).addScaledVector(pp,a);const x=1/(p+d+f);return o=d*x,a=f*x,t.copy(n).addScaledVector(zs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let my=0;class Pa extends Lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Aa(),this.name="",this.type="Material",this.blending=fo,this.side=wo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=sg,this.blendDst=og,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=gf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ry,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ec,this.stencilZFail=ec,this.stencilZPass=ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(n.blending=this.blending),this.side!==wo&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _g extends Pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ag,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new J,ou=new gt;class fi{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=np,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ou.fromBufferAttribute(this,t),ou.applyMatrix3(e),this.setXY(t,ou.x,ou.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ka(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ka(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ka(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ka(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array),i=Bn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array),i=Bn(i,this.array),s=Bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==np&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class xg extends fi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vg extends fi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bs extends fi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gy=0;const Jn=new Yt,xc=new Pn,Gs=new J,Un=new Da,Wo=new Da,Xt=new J;class ar extends Lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Aa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cg(e)?vg:xg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bs(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(Un.min,Wo.min),Un.expandByPoint(Xt),Xt.addVectors(Un.max,Wo.max),Un.expandByPoint(Xt)):(Un.expandByPoint(Wo.min),Un.expandByPoint(Wo.max))}Un.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],u=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Xt.fromBufferAttribute(a,l),u&&(Gs.fromBufferAttribute(e,l),Xt.add(Gs)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,l=[],c=[];for(let F=0;F<a;F++)l[F]=new J,c[F]=new J;const h=new J,f=new J,m=new J,g=new gt,d=new gt,p=new gt,x=new J,b=new J;function _(F,O,Z){h.fromArray(i,F*3),f.fromArray(i,O*3),m.fromArray(i,Z*3),g.fromArray(o,F*2),d.fromArray(o,O*2),p.fromArray(o,Z*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const z=1/(d.x*p.y-p.x*d.y);!isFinite(z)||(x.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(z),b.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(z),l[F].add(x),l[O].add(x),l[Z].add(x),c[F].add(b),c[O].add(b),c[Z].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let F=0,O=y.length;F<O;++F){const Z=y[F],z=Z.start,I=Z.count;for(let q=z,V=z+I;q<V;q+=3)_(n[q+0],n[q+1],n[q+2])}const M=new J,E=new J,T=new J,v=new J;function w(F){T.fromArray(s,F*3),v.copy(T);const O=l[F];M.copy(O),M.sub(T.multiplyScalar(T.dot(O))).normalize(),E.crossVectors(v,O);const z=E.dot(c[F])<0?-1:1;u[F*4]=M.x,u[F*4+1]=M.y,u[F*4+2]=M.z,u[F*4+3]=z}for(let F=0,O=y.length;F<O;++F){const Z=y[F],z=Z.start,I=Z.count;for(let q=z,V=z+I;q<V;q+=3)w(n[q+0]),w(n[q+1]),w(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new J,s=new J,o=new J,a=new J,u=new J,l=new J,c=new J,h=new J;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),c.subVectors(o,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,g),u.fromBufferAttribute(n,d),l.fromBufferAttribute(n,p),a.add(c),u.add(c),l.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,u.x,u.y,u.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(i,s),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,u){const l=a.array,c=a.itemSize,h=a.normalized,f=new l.constructor(u.length*c);let m=0,g=0;for(let d=0,p=u.length;d<p;d++){a.isInterleavedBufferAttribute?m=u[d]*a.data.stride+a.offset:m=u[d]*c;for(let x=0;x<c;x++)f[g++]=l[m++]}return new fi(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ar,n=this.index.array,i=this.attributes;for(const a in i){const u=i[a],l=e(u,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const u=[],l=s[a];for(let c=0,h=l.length;c<h;c++){const f=l[c],m=e(f,n);u.push(m)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const l=n[u];e.data.attributes[u]=l.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],c=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];c.push(m.toJSON(e.data))}c.length>0&&(i[u]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(t))}const s=e.morphAttributes;for(const l in s){const c=[],h=s[l];for(let f=0,m=h.length;f<m;f++)c.push(h[f].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,c=o.length;l<c;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const mp=new Yt,Vs=new mg,vc=new vl,dr=new J,pr=new J,mr=new J,yc=new J,bc=new J,Mc=new J,au=new J,uu=new J,lu=new J,cu=new gt,fu=new gt,hu=new gt,Sc=new J,du=new J;class Ar extends Pn{constructor(e=new ar,t=new _g){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(s),e.ray.intersectsSphere(vc)===!1)||(mp.copy(s).invert(),Vs.copy(e.ray).applyMatrix4(mp),n.boundingBox!==null&&Vs.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,u=n.attributes.position,l=n.morphAttributes.position,c=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const x=m[d],b=i[x.materialIndex],_=Math.max(x.start,g.start),y=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let M=_,E=y;M<E;M+=3){const T=a.getX(M),v=a.getX(M+1),w=a.getX(M+2);o=pu(this,b,e,Vs,u,l,c,h,f,T,v,w),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let x=d,b=p;x<b;x+=3){const _=a.getX(x),y=a.getX(x+1),M=a.getX(x+2);o=pu(this,i,e,Vs,u,l,c,h,f,_,y,M),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const x=m[d],b=i[x.materialIndex],_=Math.max(x.start,g.start),y=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let M=_,E=y;M<E;M+=3){const T=M,v=M+1,w=M+2;o=pu(this,b,e,Vs,u,l,c,h,f,T,v,w),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(u.count,g.start+g.count);for(let x=d,b=p;x<b;x+=3){const _=x,y=x+1,M=x+2;o=pu(this,i,e,Vs,u,l,c,h,f,_,y,M),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function _y(r,e,t,n,i,s,o,a){let u;if(e.side===ci?u=n.intersectTriangle(o,s,i,!0,a):u=n.intersectTriangle(i,s,o,e.side!==Tr,a),u===null)return null;du.copy(a),du.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(du);return l<t.near||l>t.far?null:{distance:l,point:du.clone(),object:r}}function pu(r,e,t,n,i,s,o,a,u,l,c,h){dr.fromBufferAttribute(i,l),pr.fromBufferAttribute(i,c),mr.fromBufferAttribute(i,h);const f=r.morphTargetInfluences;if(s&&f){au.set(0,0,0),uu.set(0,0,0),lu.set(0,0,0);for(let g=0,d=s.length;g<d;g++){const p=f[g],x=s[g];p!==0&&(yc.fromBufferAttribute(x,l),bc.fromBufferAttribute(x,c),Mc.fromBufferAttribute(x,h),o?(au.addScaledVector(yc,p),uu.addScaledVector(bc,p),lu.addScaledVector(Mc,p)):(au.addScaledVector(yc.sub(dr),p),uu.addScaledVector(bc.sub(pr),p),lu.addScaledVector(Mc.sub(mr),p)))}dr.add(au),pr.add(uu),mr.add(lu)}r.isSkinnedMesh&&(r.boneTransform(l,dr),r.boneTransform(c,pr),r.boneTransform(h,mr));const m=_y(r,e,t,n,dr,pr,mr,Sc);if(m){a&&(cu.fromBufferAttribute(a,l),fu.fromBufferAttribute(a,c),hu.fromBufferAttribute(a,h),m.uv=Zi.getUV(Sc,dr,pr,mr,cu,fu,hu,new gt)),u&&(cu.fromBufferAttribute(u,l),fu.fromBufferAttribute(u,c),hu.fromBufferAttribute(u,h),m.uv2=Zi.getUV(Sc,dr,pr,mr,cu,fu,hu,new gt));const g={a:l,b:c,c:h,normal:new J,materialIndex:0};Zi.getNormal(dr,pr,mr,g.normal),m.face=g}return m}class La extends ar{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const u=[],l=[],c=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new bs(l,3)),this.setAttribute("normal",new bs(c,3)),this.setAttribute("uv",new bs(h,2));function g(d,p,x,b,_,y,M,E,T,v,w){const F=y/T,O=M/v,Z=y/2,z=M/2,I=E/2,q=T+1,V=v+1;let Y=0,B=0;const se=new J;for(let L=0;L<V;L++){const X=L*O-z;for(let G=0;G<q;G++){const he=G*F-Z;se[d]=he*b,se[p]=X*_,se[x]=I,l.push(se.x,se.y,se.z),se[d]=0,se[p]=0,se[x]=E>0?1:-1,c.push(se.x,se.y,se.z),h.push(G/T),h.push(1-L/v),Y+=1}}for(let L=0;L<v;L++)for(let X=0;X<T;X++){const G=f+X+q*L,he=f+X+q*(L+1),ce=f+(X+1)+q*(L+1),ge=f+(X+1)+q*L;u.push(G,he,ge),u.push(he,ce,ge),B+=6}a.addGroup(m,B,w),m+=B,f+=Y}}static fromJSON(e){return new La(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mn(r){const e={};for(let t=0;t<r.length;t++){const n=Co(r[t]);for(const i in n)e[i]=n[i]}return e}function xy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function yg(r){return r.getRenderTarget()===null&&r.outputEncoding===Mt?Di:Ea}const vy={clone:Co,merge:mn};var yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,by=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends Pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yy,this.fragmentShader=by,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=xy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bg extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ii extends bg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rp*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/u,t-=o.offsetY*n/l,i*=o.width/u,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Xs=1;class My extends Pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new ii(Hs,Xs,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new ii(Hs,Xs,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new ii(Hs,Xs,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new ii(Hs,Xs,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const u=new ii(Hs,Xs,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const l=new ii(Hs,Xs,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,u,l]=this.children,c=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Qi,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(c),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Mg extends Xn{constructor(e,t,n,i,s,o,a,u,l,c){e=e!==void 0?e:[],t=t!==void 0?t:Eo,super(e,t,n,i,s,o,a,u,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sy extends Ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mg(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new La(5,5,5),s=new kr({name:"CubemapFromEquirect",uniforms:Co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ci,blending:Rr});s.uniforms.tEquirect.value=t;const o=new Ar(i,s),a=t.minFilter;return t.minFilter===xl&&(t.minFilter=ni),new My(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const wc=new J,wy=new J,Ey=new Vn;class Qr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wc.subVectors(n,t).cross(wy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(wc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ey.getNormalMatrix(e),i=this.coplanarPoint(wc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new vl,mu=new J;class Sg{constructor(e=new Qr,t=new Qr,n=new Qr,i=new Qr,s=new Qr,o=new Qr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],u=n[4],l=n[5],c=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],x=n[13],b=n[14],_=n[15];return t[0].setComponents(a-i,h-u,d-f,_-p).normalize(),t[1].setComponents(a+i,h+u,d+f,_+p).normalize(),t[2].setComponents(a+s,h+l,d+m,_+x).normalize(),t[3].setComponents(a-s,h-l,d-m,_-x).normalize(),t[4].setComponents(a-o,h-c,d-g,_-b).normalize(),t[5].setComponents(a+o,h+c,d+g,_+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(mu.x=i.normal.x>0?e.max.x:e.min.x,mu.y=i.normal.y>0?e.max.y:e.min.y,mu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(mu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ty(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,c){const h=l.array,f=l.usage,m=r.createBuffer();r.bindBuffer(c,m),r.bufferData(c,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,c,h){const f=c.array,m=c.updateRange;r.bindBuffer(h,l),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=n.get(l);c&&(r.deleteBuffer(c.buffer),n.delete(l))}function u(l,c){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,c)):h.version<l.version&&(s(h.buffer,l,c),h.version=l.version)}return{get:o,remove:a,update:u}}class ph extends ar{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),u=Math.floor(i),l=a+1,c=u+1,h=e/a,f=t/u,m=[],g=[],d=[],p=[];for(let x=0;x<c;x++){const b=x*f-o;for(let _=0;_<l;_++){const y=_*h-s;g.push(y,-b,0),d.push(0,0,1),p.push(_/a),p.push(1-x/u)}}for(let x=0;x<u;x++)for(let b=0;b<a;b++){const _=b+l*x,y=b+l*(x+1),M=b+1+l*(x+1),E=b+1+l*x;m.push(_,y,E),m.push(y,M,E)}this.setIndex(m),this.setAttribute("position",new bs(g,3)),this.setAttribute("normal",new bs(d,3)),this.setAttribute("uv",new bs(p,2))}static fromJSON(e){return new ph(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Py=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ly=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ry="vec3 transformed = vec3( position );",By=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iy=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Uy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,$y=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ky=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qy="gl_FragColor = linearToOutputTexel( gl_FragColor );",eb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ib=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ub=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gb=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,_b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Mb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sb=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Tb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ab=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Db=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ub=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Nb=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Wb=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,jb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rM=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oM=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,aM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,_M=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,xM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,vM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,yM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,bM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,MM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,SM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,wM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,PM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,RM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,OM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kM=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$M=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,iS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,et={alphamap_fragment:Ay,alphamap_pars_fragment:Cy,alphatest_fragment:Dy,alphatest_pars_fragment:Fy,aomap_fragment:Py,aomap_pars_fragment:Ly,begin_vertex:Ry,beginnormal_vertex:By,bsdfs:Iy,iridescence_fragment:Uy,bumpmap_pars_fragment:Oy,clipping_planes_fragment:Ny,clipping_planes_pars_fragment:ky,clipping_planes_pars_vertex:zy,clipping_planes_vertex:Wy,color_fragment:Gy,color_pars_fragment:Vy,color_pars_vertex:Hy,color_vertex:Xy,common:qy,cube_uv_reflection_fragment:$y,defaultnormal_vertex:Yy,displacementmap_pars_vertex:jy,displacementmap_vertex:Zy,emissivemap_fragment:Ky,emissivemap_pars_fragment:Jy,encodings_fragment:Qy,encodings_pars_fragment:eb,envmap_fragment:tb,envmap_common_pars_fragment:nb,envmap_pars_fragment:ib,envmap_pars_vertex:rb,envmap_physical_pars_fragment:gb,envmap_vertex:sb,fog_vertex:ob,fog_pars_vertex:ab,fog_fragment:ub,fog_pars_fragment:lb,gradientmap_pars_fragment:cb,lightmap_fragment:fb,lightmap_pars_fragment:hb,lights_lambert_fragment:db,lights_lambert_pars_fragment:pb,lights_pars_begin:mb,lights_toon_fragment:_b,lights_toon_pars_fragment:xb,lights_phong_fragment:vb,lights_phong_pars_fragment:yb,lights_physical_fragment:bb,lights_physical_pars_fragment:Mb,lights_fragment_begin:Sb,lights_fragment_maps:wb,lights_fragment_end:Eb,logdepthbuf_fragment:Tb,logdepthbuf_pars_fragment:Ab,logdepthbuf_pars_vertex:Cb,logdepthbuf_vertex:Db,map_fragment:Fb,map_pars_fragment:Pb,map_particle_fragment:Lb,map_particle_pars_fragment:Rb,metalnessmap_fragment:Bb,metalnessmap_pars_fragment:Ib,morphcolor_vertex:Ub,morphnormal_vertex:Ob,morphtarget_pars_vertex:Nb,morphtarget_vertex:kb,normal_fragment_begin:zb,normal_fragment_maps:Wb,normal_pars_fragment:Gb,normal_pars_vertex:Vb,normal_vertex:Hb,normalmap_pars_fragment:Xb,clearcoat_normal_fragment_begin:qb,clearcoat_normal_fragment_maps:$b,clearcoat_pars_fragment:Yb,iridescence_pars_fragment:jb,output_fragment:Zb,packing:Kb,premultiplied_alpha_fragment:Jb,project_vertex:Qb,dithering_fragment:eM,dithering_pars_fragment:tM,roughnessmap_fragment:nM,roughnessmap_pars_fragment:iM,shadowmap_pars_fragment:rM,shadowmap_pars_vertex:sM,shadowmap_vertex:oM,shadowmask_pars_fragment:aM,skinbase_vertex:uM,skinning_pars_vertex:lM,skinning_vertex:cM,skinnormal_vertex:fM,specularmap_fragment:hM,specularmap_pars_fragment:dM,tonemapping_fragment:pM,tonemapping_pars_fragment:mM,transmission_fragment:gM,transmission_pars_fragment:_M,uv_pars_fragment:xM,uv_pars_vertex:vM,uv_vertex:yM,uv2_pars_fragment:bM,uv2_pars_vertex:MM,uv2_vertex:SM,worldpos_vertex:wM,background_vert:EM,background_frag:TM,backgroundCube_vert:AM,backgroundCube_frag:CM,cube_vert:DM,cube_frag:FM,depth_vert:PM,depth_frag:LM,distanceRGBA_vert:RM,distanceRGBA_frag:BM,equirect_vert:IM,equirect_frag:UM,linedashed_vert:OM,linedashed_frag:NM,meshbasic_vert:kM,meshbasic_frag:zM,meshlambert_vert:WM,meshlambert_frag:GM,meshmatcap_vert:VM,meshmatcap_frag:HM,meshnormal_vert:XM,meshnormal_frag:qM,meshphong_vert:$M,meshphong_frag:YM,meshphysical_vert:jM,meshphysical_frag:ZM,meshtoon_vert:KM,meshtoon_frag:JM,points_vert:QM,points_frag:eS,shadow_vert:tS,shadow_frag:nS,sprite_vert:iS,sprite_frag:rS},be={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Vn},uv2Transform:{value:new Vn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vn}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vn}}},Pi={basic:{uniforms:mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new xt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:mn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:mn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new xt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:mn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:mn([be.points,be.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:mn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:mn([be.common,be.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:mn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:mn([be.sprite,be.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Vn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:mn([be.common,be.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:mn([be.lights,be.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Pi.physical={uniforms:mn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new gt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const gu={r:0,b:0,g:0};function sS(r,e,t,n,i,s,o){const a=new xt(0);let u=s===!0?0:1,l,c,h=null,f=0,m=null;function g(p,x){let b=!1,_=x.isScene===!0?x.background:null;_&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_));const y=r.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(_=null),_===null?d(a,u):_&&_.isColor&&(d(_,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===_l)?(c===void 0&&(c=new Ar(new La(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:Co(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,(h!==_||f!==_.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ar(new ph(2,2),new kr({name:"BackgroundMaterial",uniforms:Co(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:wo,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,m=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function d(p,x){p.getRGB(gu,yg(r)),n.buffers.color.setClear(gu.r,gu.g,gu.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(p,x=1){a.set(p),u=x,d(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(p){u=p,d(a,u)},render:g}}function oS(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},u=p(null);let l=u,c=!1;function h(I,q,V,Y,B){let se=!1;if(o){const L=d(Y,V,q);l!==L&&(l=L,m(l.object)),se=x(I,Y,V,B),se&&b(I,Y,V,B)}else{const L=q.wireframe===!0;(l.geometry!==Y.id||l.program!==V.id||l.wireframe!==L)&&(l.geometry=Y.id,l.program=V.id,l.wireframe=L,se=!0)}B!==null&&t.update(B,34963),(se||c)&&(c=!1,v(I,q,V,Y),B!==null&&r.bindBuffer(34963,t.get(B).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function d(I,q,V){const Y=V.wireframe===!0;let B=a[I.id];B===void 0&&(B={},a[I.id]=B);let se=B[q.id];se===void 0&&(se={},B[q.id]=se);let L=se[Y];return L===void 0&&(L=p(f()),se[Y]=L),L}function p(I){const q=[],V=[],Y=[];for(let B=0;B<i;B++)q[B]=0,V[B]=0,Y[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:V,attributeDivisors:Y,object:I,attributes:{},index:null}}function x(I,q,V,Y){const B=l.attributes,se=q.attributes;let L=0;const X=V.getAttributes();for(const G in X)if(X[G].location>=0){const ce=B[G];let ge=se[G];if(ge===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor)),ce===void 0||ce.attribute!==ge||ge&&ce.data!==ge.data)return!0;L++}return l.attributesNum!==L||l.index!==Y}function b(I,q,V,Y){const B={},se=q.attributes;let L=0;const X=V.getAttributes();for(const G in X)if(X[G].location>=0){let ce=se[G];ce===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor));const ge={};ge.attribute=ce,ce&&ce.data&&(ge.data=ce.data),B[G]=ge,L++}l.attributes=B,l.attributesNum=L,l.index=Y}function _(){const I=l.newAttributes;for(let q=0,V=I.length;q<V;q++)I[q]=0}function y(I){M(I,0)}function M(I,q){const V=l.newAttributes,Y=l.enabledAttributes,B=l.attributeDivisors;V[I]=1,Y[I]===0&&(r.enableVertexAttribArray(I),Y[I]=1),B[I]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,q),B[I]=q)}function E(){const I=l.newAttributes,q=l.enabledAttributes;for(let V=0,Y=q.length;V<Y;V++)q[V]!==I[V]&&(r.disableVertexAttribArray(V),q[V]=0)}function T(I,q,V,Y,B,se){n.isWebGL2===!0&&(V===5124||V===5125)?r.vertexAttribIPointer(I,q,V,B,se):r.vertexAttribPointer(I,q,V,Y,B,se)}function v(I,q,V,Y){if(n.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const B=Y.attributes,se=V.getAttributes(),L=q.defaultAttributeValues;for(const X in se){const G=se[X];if(G.location>=0){let he=B[X];if(he===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(he=I.instanceColor)),he!==void 0){const ce=he.normalized,ge=he.itemSize,H=t.get(he);if(H===void 0)continue;const Re=H.buffer,ye=H.type,Be=H.bytesPerElement;if(he.isInterleavedBufferAttribute){const ve=he.data,Ge=ve.stride,D=he.offset;if(ve.isInstancedInterleavedBuffer){for(let P=0;P<G.locationSize;P++)M(G.location+P,ve.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let P=0;P<G.locationSize;P++)y(G.location+P);r.bindBuffer(34962,Re);for(let P=0;P<G.locationSize;P++)T(G.location+P,ge/G.locationSize,ye,ce,Ge*Be,(D+ge/G.locationSize*P)*Be)}else{if(he.isInstancedBufferAttribute){for(let ve=0;ve<G.locationSize;ve++)M(G.location+ve,he.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ve=0;ve<G.locationSize;ve++)y(G.location+ve);r.bindBuffer(34962,Re);for(let ve=0;ve<G.locationSize;ve++)T(G.location+ve,ge/G.locationSize,ye,ce,ge*Be,ge/G.locationSize*ve*Be)}}else if(L!==void 0){const ce=L[X];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(G.location,ce);break;case 3:r.vertexAttrib3fv(G.location,ce);break;case 4:r.vertexAttrib4fv(G.location,ce);break;default:r.vertexAttrib1fv(G.location,ce)}}}}E()}function w(){Z();for(const I in a){const q=a[I];for(const V in q){const Y=q[V];for(const B in Y)g(Y[B].object),delete Y[B];delete q[V]}delete a[I]}}function F(I){if(a[I.id]===void 0)return;const q=a[I.id];for(const V in q){const Y=q[V];for(const B in Y)g(Y[B].object),delete Y[B];delete q[V]}delete a[I.id]}function O(I){for(const q in a){const V=a[q];if(V[I.id]===void 0)continue;const Y=V[I.id];for(const B in Y)g(Y[B].object),delete Y[B];delete V[I.id]}}function Z(){z(),c=!0,l!==u&&(l=u,m(l.object))}function z(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:z,dispose:w,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:y,disableUnusedAttributes:E}}function aS(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,c){r.drawArrays(s,l,c),t.update(c,s,1)}function u(l,c,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,c,h),t.update(c,s,h)}this.setMode=o,this.render=a,this.renderInstances=u}function uS(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const u=s(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const l=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),d=r.getParameter(34921),p=r.getParameter(36347),x=r.getParameter(36348),b=r.getParameter(36349),_=f>0,y=o||e.has("OES_texture_float"),M=_&&y,E=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:E}}function lS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Qr,a=new Vn,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,t=c(h,m,0),n=h.length,g},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,x=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?c(null):l();else{const b=s?0:n,_=b*4;let y=x.clippingState||null;u.value=y,y=c(g,f,_,m);for(let M=0;M!==_;++M)y[M]=t[M];x.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=u.value,g!==!0||p===null){const x=m+d*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<x)&&(p=new Float32Array(x));for(let _=0,y=m;_!==d;++_,y+=4)o.copy(h[_]).applyMatrix4(b,a),o.normal.toArray(p,y),p[y+3]=o.constant}u.value=p,u.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function cS(r){let e=new WeakMap;function t(o,a){return a===_f?o.mapping=Eo:a===xf&&(o.mapping=To),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===_f||a===xf)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const l=new Sy(u.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class fS extends bg{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=c*this.view.offsetY,u=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const to=4,gp=[.125,.215,.35,.446,.526,.582],ss=20,Ec=new fS,_p=new xt;let Tc=null;const es=(1+Math.sqrt(5))/2,$s=1/es,xp=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,es,$s),new J(0,es,-$s),new J($s,0,es),new J(-$s,0,es),new J(es,$s,0),new J(-es,$s,0)];class vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Tc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc),e.scissorTest=!1,_u(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Eo||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:wa,format:bi,encoding:Cs,depthBuffer:!1},i=yp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hS(s)),this._blurMaterial=dS(s,e,t)}return i}_compileMaterial(e){const t=new Ar(this._lodPlanes[0],e);this._renderer.compile(t,Ec)}_sceneToCubeUV(e,t,n,i){const a=new ii(90,1,t,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(_p),c.toneMapping=Qi,c.autoClear=!1;const m=new _g({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1}),g=new Ar(new La,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(_p),d=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(a.up.set(0,u[x],0),a.lookAt(l[x],0,0)):b===1?(a.up.set(0,0,u[x]),a.lookAt(0,l[x],0)):(a.up.set(0,u[x],0),a.lookAt(0,0,l[x]));const _=this._cubeSize;_u(i,b*_,x>2?_:0,_,_),c.setRenderTarget(i),d&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Eo||e.mapping===To;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ar(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const u=this._cubeSize;_u(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,Ec)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=xp[(i-1)%xp.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const u=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Ar(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ss-1),d=s/g,p=isFinite(s)?1+Math.floor(c*d):ss;p>ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ss}`);const x=[];let b=0;for(let T=0;T<ss;++T){const v=T/d,w=Math.exp(-v*v/2);x.push(w),T===0?b+=w:T<p&&(b+=2*w)}for(let T=0;T<x.length;T++)x[T]=x[T]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=x,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const y=this._sizeLods[i],M=3*y*(i>_-to?i-_+to:0),E=4*(this._cubeSize-y);_u(t,M,E,3*y,2*y),u.setRenderTarget(t),u.render(h,Ec)}}function hS(r){const e=[],t=[],n=[];let i=r;const s=r-to+1+gp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let u=1/a;o>r-to?u=gp[o-r+to-1]:o===0&&(u=0),n.push(u);const l=1/(a-2),c=-l,h=1+l,f=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,g=6,d=3,p=2,x=1,b=new Float32Array(d*g*m),_=new Float32Array(p*g*m),y=new Float32Array(x*g*m);for(let E=0;E<m;E++){const T=E%3*2/3-1,v=E>2?0:-1,w=[T,v,0,T+2/3,v,0,T+2/3,v+1,0,T,v,0,T+2/3,v+1,0,T,v+1,0];b.set(w,d*g*E),_.set(f,p*g*E);const F=[E,E,E,E,E,E];y.set(F,x*g*E)}const M=new ar;M.setAttribute("position",new fi(b,d)),M.setAttribute("uv",new fi(_,p)),M.setAttribute("faceIndex",new fi(y,x)),e.push(M),i>to&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yp(r,e,t){const n=new Ds(r,e,t);return n.texture.mapping=_l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _u(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function dS(r,e,t){const n=new Float32Array(ss),i=new J(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function bp(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Mp(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,l=u===_f||u===xf,c=u===Eo||u===To;if(l||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new vp(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||c&&h&&i(h)){t===null&&(t=new vp(r));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let u=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&u++;return u===l}function s(a){const u=a.target;u.removeEventListener("dispose",s);const l=e.get(u);l!==void 0&&(e.delete(u),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gS(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function u(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,x=d.length;p<x;p++)e.update(d[p],34962)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const b=m.array;d=m.version;for(let _=0,y=b.length;_<y;_+=3){const M=b[_+0],E=b[_+1],T=b[_+2];f.push(M,E,E,T,T,M)}}else{const b=g.array;d=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){const M=_+0,E=_+1,T=_+2;f.push(M,E,E,T,T,M)}}const p=new(cg(f)?vg:xg)(f,1);p.version=d;const x=s.get(h);x&&e.remove(x),s.set(h,p)}function c(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:u,getWireframeAttribute:c}}function _S(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,u;function l(f){a=f.type,u=f.bytesPerElement}function c(f,m){r.drawElements(s,m,a,f*u),t.update(m,s,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=r,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,a,f*u,g),t.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=c,this.renderInstances=h}function xS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vS(r,e){return r[0]-e[0]}function yS(r,e){return Math.abs(e[1])-Math.abs(r[1])}function bS(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new tn,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function u(l,c,h,f){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0;let x=s.get(c);if(x===void 0||x.count!==p){let V=function(){I.dispose(),s.delete(c),c.removeEventListener("dispose",V)};var g=V;x!==void 0&&x.texture.dispose();const y=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let F=0;y===!0&&(F=1),M===!0&&(F=2),E===!0&&(F=3);let O=c.attributes.position.count*F,Z=1;O>e.maxTextureSize&&(Z=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const z=new Float32Array(O*Z*4*p),I=new pg(z,O,Z,p);I.type=cs,I.needsUpdate=!0;const q=F*4;for(let Y=0;Y<p;Y++){const B=T[Y],se=v[Y],L=w[Y],X=O*Z*4*Y;for(let G=0;G<B.count;G++){const he=G*q;y===!0&&(o.fromBufferAttribute(B,G),z[X+he+0]=o.x,z[X+he+1]=o.y,z[X+he+2]=o.z,z[X+he+3]=0),M===!0&&(o.fromBufferAttribute(se,G),z[X+he+4]=o.x,z[X+he+5]=o.y,z[X+he+6]=o.z,z[X+he+7]=0),E===!0&&(o.fromBufferAttribute(L,G),z[X+he+8]=o.x,z[X+he+9]=o.y,z[X+he+10]=o.z,z[X+he+11]=L.itemSize===4?o.w:1)}}x={count:p,texture:I,size:new gt(O,Z)},s.set(c,x),c.addEventListener("dispose",V)}let b=0;for(let y=0;y<m.length;y++)b+=m[y];const _=c.morphTargetsRelative?1:1-b;f.getUniforms().setValue(r,"morphTargetBaseInfluence",_),f.getUniforms().setValue(r,"morphTargetInfluences",m),f.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const d=m===void 0?0:m.length;let p=n[c.id];if(p===void 0||p.length!==d){p=[];for(let M=0;M<d;M++)p[M]=[M,0];n[c.id]=p}for(let M=0;M<d;M++){const E=p[M];E[0]=M,E[1]=m[M]}p.sort(yS);for(let M=0;M<8;M++)M<d&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(vS);const x=c.morphAttributes.position,b=c.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const E=a[M],T=E[0],v=E[1];T!==Number.MAX_SAFE_INTEGER&&v?(x&&c.getAttribute("morphTarget"+M)!==x[T]&&c.setAttribute("morphTarget"+M,x[T]),b&&c.getAttribute("morphNormal"+M)!==b[T]&&c.setAttribute("morphNormal"+M,b[T]),i[M]=v,_+=v):(x&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),b&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),i[M]=0)}const y=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(r,"morphTargetBaseInfluence",y),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:u}}function MS(r,e,t,n){let i=new WeakMap;function s(u){const l=n.render.frame,c=u.geometry,h=e.get(u,c);return i.get(h)!==l&&(e.update(h),i.set(h,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),h}function o(){i=new WeakMap}function a(u){const l=u.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Eg=new Xn,Tg=new pg,Ag=new ay,Cg=new Mg,Sp=[],wp=[],Ep=new Float32Array(16),Tp=new Float32Array(9),Ap=new Float32Array(4);function Ro(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Sp[i];if(s===void 0&&(s=new Float32Array(i),Sp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Gt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Vt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function yl(r,e){let t=wp[e];t===void 0&&(t=new Int32Array(e),wp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function SS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function wS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2fv(this.addr,e),Vt(t,e)}}function ES(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;r.uniform3fv(this.addr,e),Vt(t,e)}}function TS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4fv(this.addr,e),Vt(t,e)}}function AS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Ap.set(n),r.uniformMatrix2fv(this.addr,!1,Ap),Vt(t,n)}}function CS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Tp.set(n),r.uniformMatrix3fv(this.addr,!1,Tp),Vt(t,n)}}function DS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Ep.set(n),r.uniformMatrix4fv(this.addr,!1,Ep),Vt(t,n)}}function FS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function PS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2iv(this.addr,e),Vt(t,e)}}function LS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3iv(this.addr,e),Vt(t,e)}}function RS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4iv(this.addr,e),Vt(t,e)}}function BS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function IS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2uiv(this.addr,e),Vt(t,e)}}function US(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3uiv(this.addr,e),Vt(t,e)}}function OS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4uiv(this.addr,e),Vt(t,e)}}function NS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Eg,i)}function kS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ag,i)}function zS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cg,i)}function WS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tg,i)}function GS(r){switch(r){case 5126:return SS;case 35664:return wS;case 35665:return ES;case 35666:return TS;case 35674:return AS;case 35675:return CS;case 35676:return DS;case 5124:case 35670:return FS;case 35667:case 35671:return PS;case 35668:case 35672:return LS;case 35669:case 35673:return RS;case 5125:return BS;case 36294:return IS;case 36295:return US;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return NS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return zS;case 36289:case 36303:case 36311:case 36292:return WS}}function VS(r,e){r.uniform1fv(this.addr,e)}function HS(r,e){const t=Ro(e,this.size,2);r.uniform2fv(this.addr,t)}function XS(r,e){const t=Ro(e,this.size,3);r.uniform3fv(this.addr,t)}function qS(r,e){const t=Ro(e,this.size,4);r.uniform4fv(this.addr,t)}function $S(r,e){const t=Ro(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function YS(r,e){const t=Ro(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function jS(r,e){const t=Ro(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ZS(r,e){r.uniform1iv(this.addr,e)}function KS(r,e){r.uniform2iv(this.addr,e)}function JS(r,e){r.uniform3iv(this.addr,e)}function QS(r,e){r.uniform4iv(this.addr,e)}function e2(r,e){r.uniform1uiv(this.addr,e)}function t2(r,e){r.uniform2uiv(this.addr,e)}function n2(r,e){r.uniform3uiv(this.addr,e)}function i2(r,e){r.uniform4uiv(this.addr,e)}function r2(r,e,t){const n=this.cache,i=e.length,s=yl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Eg,s[o])}function s2(r,e,t){const n=this.cache,i=e.length,s=yl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ag,s[o])}function o2(r,e,t){const n=this.cache,i=e.length,s=yl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Cg,s[o])}function a2(r,e,t){const n=this.cache,i=e.length,s=yl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tg,s[o])}function u2(r){switch(r){case 5126:return VS;case 35664:return HS;case 35665:return XS;case 35666:return qS;case 35674:return $S;case 35675:return YS;case 35676:return jS;case 5124:case 35670:return ZS;case 35667:case 35671:return KS;case 35668:case 35672:return JS;case 35669:case 35673:return QS;case 5125:return e2;case 36294:return t2;case 36295:return n2;case 36296:return i2;case 35678:case 36198:case 36298:case 36306:case 35682:return r2;case 35679:case 36299:case 36307:return s2;case 35680:case 36300:case 36308:case 36293:return o2;case 36289:case 36303:case 36311:case 36292:return a2}}class l2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=GS(t.type)}}class c2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=u2(t.type)}}class f2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ac=/(\w+)(\])?(\[|\.)?/g;function Cp(r,e){r.seq.push(e),r.map[e.id]=e}function h2(r,e,t){const n=r.name,i=n.length;for(Ac.lastIndex=0;;){const s=Ac.exec(n),o=Ac.lastIndex;let a=s[1];const u=s[2]==="]",l=s[3];if(u&&(a=a|0),l===void 0||l==="["&&o+2===i){Cp(t,l===void 0?new l2(a,r,e):new c2(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new f2(a),Cp(t,h)),t=h}}}class Iu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);h2(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Dp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let d2=0;function p2(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function m2(r){switch(r){case Cs:return["Linear","( value )"];case Mt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Fp(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+p2(r.getShaderSource(e),o)}else return i}function g2(r,e){const t=m2(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _2(r,e){let t;switch(e){case R1:t="Linear";break;case B1:t="Reinhard";break;case I1:t="OptimizedCineon";break;case U1:t="ACESFilmic";break;case O1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function x2(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(jo).join(`
`)}function v2(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function y2(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function jo(r){return r!==""}function Pp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(r){return r.replace(b2,M2)}function M2(r,e){const t=et[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sf(t)}const S2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rp(r){return r.replace(S2,w2)}function w2(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bp(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E2(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===rg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===f1?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Yo&&(e="SHADOWMAP_TYPE_VSM"),e}function T2(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Eo:case To:e="ENVMAP_TYPE_CUBE";break;case _l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A2(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case To:e="ENVMAP_MODE_REFRACTION";break}return e}function C2(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ag:e="ENVMAP_BLENDING_MULTIPLY";break;case P1:e="ENVMAP_BLENDING_MIX";break;case L1:e="ENVMAP_BLENDING_ADD";break}return e}function D2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function F2(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const u=E2(t),l=T2(t),c=A2(t),h=C2(t),f=D2(t),m=t.isWebGL2?"":x2(t),g=v2(s),d=i.createProgram();let p,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(jo).join(`
`),p.length>0&&(p+=`
`),x=[m,g].filter(jo).join(`
`),x.length>0&&(x+=`
`)):(p=[Bp(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),x=[m,Bp(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?et.tonemapping_pars_fragment:"",t.toneMapping!==Qi?_2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.encodings_pars_fragment,g2("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),o=Sf(o),o=Pp(o,t),o=Lp(o,t),a=Sf(a),a=Pp(a,t),a=Lp(a,t),o=Rp(o),a=Rp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",t.glslVersion===ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=b+p+o,y=b+x+a,M=Dp(i,35633,_),E=Dp(i,35632,y);if(i.attachShader(d,M),i.attachShader(d,E),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),F=i.getShaderInfoLog(M).trim(),O=i.getShaderInfoLog(E).trim();let Z=!0,z=!0;if(i.getProgramParameter(d,35714)===!1){Z=!1;const I=Fp(i,M,"vertex"),q=Fp(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+I+`
`+q)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(F===""||O==="")&&(z=!1);z&&(this.diagnostics={runnable:Z,programLog:w,vertexShader:{log:F,prefix:p},fragmentShader:{log:O,prefix:x}})}i.deleteShader(M),i.deleteShader(E);let T;this.getUniforms=function(){return T===void 0&&(T=new Iu(i,d)),T};let v;return this.getAttributes=function(){return v===void 0&&(v=y2(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=d2++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=E,this}let P2=0;class L2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new R2(e),t.set(e,n)),n}}class R2{constructor(e){this.id=P2++,this.code=e,this.usedTimes=0}}function B2(r,e,t,n,i,s,o){const a=new gg,u=new L2,l=[],c=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,w,F,O,Z){const z=O.fog,I=Z.geometry,q=v.isMeshStandardMaterial?O.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),Y=!!V&&V.mapping===_l?V.image.height:null,B=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const se=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,L=se!==void 0?se.length:0;let X=0;I.morphAttributes.position!==void 0&&(X=1),I.morphAttributes.normal!==void 0&&(X=2),I.morphAttributes.color!==void 0&&(X=3);let G,he,ce,ge;if(B){const Ge=Pi[B];G=Ge.vertexShader,he=Ge.fragmentShader}else G=v.vertexShader,he=v.fragmentShader,u.update(v),ce=u.getVertexShaderID(v),ge=u.getFragmentShaderID(v);const H=r.getRenderTarget(),Re=v.alphaTest>0,ye=v.clearcoat>0,Be=v.iridescence>0;return{isWebGL2:c,shaderID:B,shaderName:v.type,vertexShader:G,fragmentShader:he,defines:v.defines,customVertexShaderID:ce,customFragmentShaderID:ge,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:f,outputEncoding:H===null?r.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Cs,map:!!v.map,matcap:!!v.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:Y,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===iy,tangentSpaceNormalMap:v.normalMapType===ny,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Mt,clearcoat:ye,clearcoatMap:ye&&!!v.clearcoatMap,clearcoatRoughnessMap:ye&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!v.clearcoatNormalMap,iridescence:Be,iridescenceMap:Be&&!!v.iridescenceMap,iridescenceThicknessMap:Be&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===fo,alphaMap:!!v.alphaMap,alphaTest:Re,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!I.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!z,useFog:v.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:X,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:Qi,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Tr,flipSided:v.side===ci,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)w.push(F),w.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(x(w,v),b(w,v),w.push(r.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),v.push(a.mask)}function _(v){const w=g[v.type];let F;if(w){const O=Pi[w];F=vy.clone(O.uniforms)}else F=v.uniforms;return F}function y(v,w){let F;for(let O=0,Z=l.length;O<Z;O++){const z=l[O];if(z.cacheKey===w){F=z,++F.usedTimes;break}}return F===void 0&&(F=new F2(r,w,v,s),l.push(F)),F}function M(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),v.destroy()}}function E(v){u.remove(v)}function T(){u.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:T}}function I2(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function U2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ip(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Up(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,g,d,p){let x=r[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},r[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=m,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=d,x.group=p),e++,x}function a(h,f,m,g,d,p){const x=o(h,f,m,g,d,p);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function u(h,f,m,g,d,p){const x=o(h,f,m,g,d,p);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function l(h,f){t.length>1&&t.sort(h||U2),n.length>1&&n.sort(f||Ip),i.length>1&&i.sort(f||Ip)}function c(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:u,finish:c,sort:l}}function O2(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Up,r.set(n,[o])):i>=s.length?(o=new Up,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function N2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new xt};break;case"SpotLight":t={position:new J,direction:new J,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=t,t}}}function k2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let z2=0;function W2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function G2(r,e){const t=new N2,n=k2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new J);const s=new J,o=new Yt,a=new Yt;function u(c,h){let f=0,m=0,g=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,p=0,x=0,b=0,_=0,y=0,M=0,E=0,T=0,v=0;c.sort(W2);const w=h!==!0?Math.PI:1;for(let O=0,Z=c.length;O<Z;O++){const z=c[O],I=z.color,q=z.intensity,V=z.distance,Y=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=I.r*q*w,m+=I.g*q*w,g+=I.b*q*w;else if(z.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(z.sh.coefficients[B],q);else if(z.isDirectionalLight){const B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*w),z.castShadow){const se=z.shadow,L=n.get(z);L.shadowBias=se.bias,L.shadowNormalBias=se.normalBias,L.shadowRadius=se.radius,L.shadowMapSize=se.mapSize,i.directionalShadow[d]=L,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=z.shadow.matrix,y++}i.directional[d]=B,d++}else if(z.isSpotLight){const B=t.get(z);B.position.setFromMatrixPosition(z.matrixWorld),B.color.copy(I).multiplyScalar(q*w),B.distance=V,B.coneCos=Math.cos(z.angle),B.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),B.decay=z.decay,i.spot[x]=B;const se=z.shadow;if(z.map&&(i.spotLightMap[T]=z.map,T++,se.updateMatrices(z),z.castShadow&&v++),i.spotLightMatrix[x]=se.matrix,z.castShadow){const L=n.get(z);L.shadowBias=se.bias,L.shadowNormalBias=se.normalBias,L.shadowRadius=se.radius,L.shadowMapSize=se.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=Y,E++}x++}else if(z.isRectAreaLight){const B=t.get(z);B.color.copy(I).multiplyScalar(q),B.halfWidth.set(z.width*.5,0,0),B.halfHeight.set(0,z.height*.5,0),i.rectArea[b]=B,b++}else if(z.isPointLight){const B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*w),B.distance=z.distance,B.decay=z.decay,z.castShadow){const se=z.shadow,L=n.get(z);L.shadowBias=se.bias,L.shadowNormalBias=se.normalBias,L.shadowRadius=se.radius,L.shadowMapSize=se.mapSize,L.shadowCameraNear=se.camera.near,L.shadowCameraFar=se.camera.far,i.pointShadow[p]=L,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=z.shadow.matrix,M++}i.point[p]=B,p++}else if(z.isHemisphereLight){const B=t.get(z);B.skyColor.copy(z.color).multiplyScalar(q*w),B.groundColor.copy(z.groundColor).multiplyScalar(q*w),i.hemi[_]=B,_++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==d||F.pointLength!==p||F.spotLength!==x||F.rectAreaLength!==b||F.hemiLength!==_||F.numDirectionalShadows!==y||F.numPointShadows!==M||F.numSpotShadows!==E||F.numSpotMaps!==T)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=b,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+T-v,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=v,F.directionalLength=d,F.pointLength=p,F.spotLength=x,F.rectAreaLength=b,F.hemiLength=_,F.numDirectionalShadows=y,F.numPointShadows=M,F.numSpotShadows=E,F.numSpotMaps=T,i.version=z2++)}function l(c,h){let f=0,m=0,g=0,d=0,p=0;const x=h.matrixWorldInverse;for(let b=0,_=c.length;b<_;b++){const y=c[b];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),f++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),g++}else if(y.isRectAreaLight){const M=i.rectArea[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),a.identity(),o.copy(y.matrixWorld),o.premultiply(x),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),m++}else if(y.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(x),p++}}}return{setup:u,setupView:l,state:i}}function Op(r,e){const t=new G2(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function u(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:l,pushLight:o,pushShadow:a}}function V2(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let u;return a===void 0?(u=new Op(r,e),t.set(s,[u])):o>=a.length?(u=new Op(r,e),a.push(u)):u=a[o],u}function i(){t=new WeakMap}return{get:n,dispose:i}}class H2 extends Pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class X2 extends Pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new J,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const q2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Y2(r,e,t){let n=new Sg;const i=new gt,s=new gt,o=new tn,a=new H2({depthPacking:ty}),u=new X2,l={},c=t.maxTextureSize,h={0:ci,1:wo,2:Tr},f=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:q2,fragmentShader:$2}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ar;g.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Ar(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rg,this.render=function(y,M,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const T=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Rr),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let O=0,Z=y.length;O<Z;O++){const z=y[O],I=z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const q=I.getFrameExtents();if(i.multiply(q),s.copy(I.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/q.x),i.x=s.x*q.x,I.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/q.y),i.y=s.y*q.y,I.mapSize.y=s.y)),I.map===null){const Y=this.type!==Yo?{minFilter:wn,magFilter:wn}:{};I.map=new Ds(i.x,i.y,Y),I.map.texture.name=z.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const V=I.getViewportCount();for(let Y=0;Y<V;Y++){const B=I.getViewport(Y);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),F.viewport(o),I.updateMatrices(z,Y),n=I.getFrustum(),_(M,E,I.camera,z,this.type)}I.isPointLightShadow!==!0&&this.type===Yo&&x(I,E),I.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(T,v,w)};function x(y,M){const E=e.update(d);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ds(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(M,null,E,f,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(M,null,E,m,d,null)}function b(y,M,E,T,v,w){let F=null;const O=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(O!==void 0?F=O:F=E.isPointLight===!0?u:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const Z=F.uuid,z=M.uuid;let I=l[Z];I===void 0&&(I={},l[Z]=I);let q=I[z];q===void 0&&(q=F.clone(),I[z]=q),F=q}return F.visible=M.visible,F.wireframe=M.wireframe,w===Yo?F.side=M.shadowSide!==null?M.shadowSide:M.side:F.side=M.shadowSide!==null?M.shadowSide:h[M.side],F.alphaMap=M.alphaMap,F.alphaTest=M.alphaTest,F.map=M.map,F.clipShadows=M.clipShadows,F.clippingPlanes=M.clippingPlanes,F.clipIntersection=M.clipIntersection,F.displacementMap=M.displacementMap,F.displacementScale=M.displacementScale,F.displacementBias=M.displacementBias,F.wireframeLinewidth=M.wireframeLinewidth,F.linewidth=M.linewidth,E.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(E.matrixWorld),F.nearDistance=T,F.farDistance=v),F}function _(y,M,E,T,v){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Yo)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const O=e.update(y),Z=y.material;if(Array.isArray(Z)){const z=O.groups;for(let I=0,q=z.length;I<q;I++){const V=z[I],Y=Z[V.materialIndex];if(Y&&Y.visible){const B=b(y,Y,T,E.near,E.far,v);r.renderBufferDirect(E,null,O,B,y,V)}}}else if(Z.visible){const z=b(y,Z,T,E.near,E.far,v);r.renderBufferDirect(E,null,O,z,y,null)}}const F=y.children;for(let O=0,Z=F.length;O<Z;O++)_(F[O],M,E,T,v)}}function j2(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const re=new tn;let de=null;const Se=new tn(0,0,0,0);return{setMask:function(Le){de!==Le&&!U&&(r.colorMask(Le,Le,Le,Le),de=Le)},setLocked:function(Le){U=Le},setClear:function(Le,Ke,vt,At,je){je===!0&&(Le*=At,Ke*=At,vt*=At),re.set(Le,Ke,vt,At),Se.equals(re)===!1&&(r.clearColor(Le,Ke,vt,At),Se.copy(re))},reset:function(){U=!1,de=null,Se.set(-1,0,0,0)}}}function s(){let U=!1,re=null,de=null,Se=null;return{setTest:function(Le){Le?Re(2929):ye(2929)},setMask:function(Le){re!==Le&&!U&&(r.depthMask(Le),re=Le)},setFunc:function(Le){if(de!==Le){switch(Le){case w1:r.depthFunc(512);break;case E1:r.depthFunc(519);break;case T1:r.depthFunc(513);break;case gf:r.depthFunc(515);break;case A1:r.depthFunc(514);break;case C1:r.depthFunc(518);break;case D1:r.depthFunc(516);break;case F1:r.depthFunc(517);break;default:r.depthFunc(515)}de=Le}},setLocked:function(Le){U=Le},setClear:function(Le){Se!==Le&&(r.clearDepth(Le),Se=Le)},reset:function(){U=!1,re=null,de=null,Se=null}}}function o(){let U=!1,re=null,de=null,Se=null,Le=null,Ke=null,vt=null,At=null,je=null;return{setTest:function(ie){U||(ie?Re(2960):ye(2960))},setMask:function(ie){re!==ie&&!U&&(r.stencilMask(ie),re=ie)},setFunc:function(ie,De,Ce){(de!==ie||Se!==De||Le!==Ce)&&(r.stencilFunc(ie,De,Ce),de=ie,Se=De,Le=Ce)},setOp:function(ie,De,Ce){(Ke!==ie||vt!==De||At!==Ce)&&(r.stencilOp(ie,De,Ce),Ke=ie,vt=De,At=Ce)},setLocked:function(ie){U=ie},setClear:function(ie){je!==ie&&(r.clearStencil(ie),je=ie)},reset:function(){U=!1,re=null,de=null,Se=null,Le=null,Ke=null,vt=null,At=null,je=null}}}const a=new i,u=new s,l=new o,c=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,x=!1,b=null,_=null,y=null,M=null,E=null,T=null,v=null,w=!1,F=null,O=null,Z=null,z=null,I=null;const q=r.getParameter(35661);let V=!1,Y=0;const B=r.getParameter(7938);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=Y>=2);let se=null,L={};const X=r.getParameter(3088),G=r.getParameter(2978),he=new tn().fromArray(X),ce=new tn().fromArray(G);function ge(U,re,de){const Se=new Uint8Array(4),Le=r.createTexture();r.bindTexture(U,Le),r.texParameteri(U,10241,9728),r.texParameteri(U,10240,9728);for(let Ke=0;Ke<de;Ke++)r.texImage2D(re+Ke,0,6408,1,1,0,6408,5121,Se);return Le}const H={};H[3553]=ge(3553,3553,1),H[34067]=ge(34067,34069,6),a.setClear(0,0,0,1),u.setClear(1),l.setClear(0),Re(2929),u.setFunc(gf),ne(!1),R(Cd),Re(2884),$(Rr);function Re(U){f[U]!==!0&&(r.enable(U),f[U]=!0)}function ye(U){f[U]!==!1&&(r.disable(U),f[U]=!1)}function Be(U,re){return m[U]!==re?(r.bindFramebuffer(U,re),m[U]=re,n&&(U===36009&&(m[36160]=re),U===36160&&(m[36009]=re)),!0):!1}function ve(U,re){let de=d,Se=!1;if(U)if(de=g.get(re),de===void 0&&(de=[],g.set(re,de)),U.isWebGLMultipleRenderTargets){const Le=U.texture;if(de.length!==Le.length||de[0]!==36064){for(let Ke=0,vt=Le.length;Ke<vt;Ke++)de[Ke]=36064+Ke;de.length=Le.length,Se=!0}}else de[0]!==36064&&(de[0]=36064,Se=!0);else de[0]!==1029&&(de[0]=1029,Se=!0);Se&&(t.isWebGL2?r.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function Ge(U){return p!==U?(r.useProgram(U),p=U,!0):!1}const D={[Zs]:32774,[d1]:32778,[p1]:32779};if(n)D[Pd]=32775,D[Ld]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(D[Pd]=U.MIN_EXT,D[Ld]=U.MAX_EXT)}const P={[m1]:0,[g1]:1,[_1]:768,[sg]:770,[S1]:776,[b1]:774,[v1]:772,[x1]:769,[og]:771,[M1]:775,[y1]:773};function $(U,re,de,Se,Le,Ke,vt,At){if(U===Rr){x===!0&&(ye(3042),x=!1);return}if(x===!1&&(Re(3042),x=!0),U!==h1){if(U!==b||At!==w){if((_!==Zs||E!==Zs)&&(r.blendEquation(32774),_=Zs,E=Zs),At)switch(U){case fo:r.blendFuncSeparate(1,771,1,771);break;case mf:r.blendFunc(1,1);break;case Dd:r.blendFuncSeparate(0,769,0,1);break;case Fd:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case fo:r.blendFuncSeparate(770,771,1,771);break;case mf:r.blendFunc(770,1);break;case Dd:r.blendFuncSeparate(0,769,0,1);break;case Fd:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,M=null,T=null,v=null,b=U,w=At}return}Le=Le||re,Ke=Ke||de,vt=vt||Se,(re!==_||Le!==E)&&(r.blendEquationSeparate(D[re],D[Le]),_=re,E=Le),(de!==y||Se!==M||Ke!==T||vt!==v)&&(r.blendFuncSeparate(P[de],P[Se],P[Ke],P[vt]),y=de,M=Se,T=Ke,v=vt),b=U,w=!1}function oe(U,re){U.side===Tr?ye(2884):Re(2884);let de=U.side===ci;re&&(de=!de),ne(de),U.blending===fo&&U.transparent===!1?$(Rr):$(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),u.setFunc(U.depthFunc),u.setTest(U.depthTest),u.setMask(U.depthWrite),a.setMask(U.colorWrite);const Se=U.stencilWrite;l.setTest(Se),Se&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),te(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Re(32926):ye(32926)}function ne(U){F!==U&&(U?r.frontFace(2304):r.frontFace(2305),F=U)}function R(U){U!==l1?(Re(2884),U!==O&&(U===Cd?r.cullFace(1029):U===c1?r.cullFace(1028):r.cullFace(1032))):ye(2884),O=U}function pe(U){U!==Z&&(V&&r.lineWidth(U),Z=U)}function te(U,re,de){U?(Re(32823),(z!==re||I!==de)&&(r.polygonOffset(re,de),z=re,I=de)):ye(32823)}function me(U){U?Re(3089):ye(3089)}function le(U){U===void 0&&(U=33984+q-1),se!==U&&(r.activeTexture(U),se=U)}function A(U,re,de){de===void 0&&(se===null?de=33984+q-1:de=se);let Se=L[de];Se===void 0&&(Se={type:void 0,texture:void 0},L[de]=Se),(Se.type!==U||Se.texture!==re)&&(se!==de&&(r.activeTexture(de),se=de),r.bindTexture(U,re||H[U]),Se.type=U,Se.texture=re)}function S(){const U=L[se];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function N(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){he.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),he.copy(U))}function Ee(U){ce.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ce.copy(U))}function Te(U,re){let de=h.get(re);de===void 0&&(de=new WeakMap,h.set(re,de));let Se=de.get(U);Se===void 0&&(Se=r.getUniformBlockIndex(re,U.name),de.set(U,Se))}function nt(U,re){const Se=h.get(re).get(U);c.get(U)!==Se&&(r.uniformBlockBinding(re,Se,U.__bindingPointIndex),c.set(U,Se))}function ut(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},se=null,L={},m={},g=new WeakMap,d=[],p=null,x=!1,b=null,_=null,y=null,M=null,E=null,T=null,v=null,w=!1,F=null,O=null,Z=null,z=null,I=null,he.set(0,0,r.canvas.width,r.canvas.height),ce.set(0,0,r.canvas.width,r.canvas.height),a.reset(),u.reset(),l.reset()}return{buffers:{color:a,depth:u,stencil:l},enable:Re,disable:ye,bindFramebuffer:Be,drawBuffers:ve,useProgram:Ge,setBlending:$,setMaterial:oe,setFlipSided:ne,setCullFace:R,setLineWidth:pe,setPolygonOffset:te,setScissorTest:me,activeTexture:le,bindTexture:A,unbindTexture:S,compressedTexImage2D:N,compressedTexImage3D:K,texImage2D:Ne,texImage3D:Ae,updateUBOMapping:Te,uniformBlockBinding:nt,texStorage2D:ee,texStorage3D:Fe,texSubImage2D:Q,texSubImage3D:fe,compressedTexSubImage2D:xe,compressedTexSubImage3D:_e,scissor:Ie,viewport:Ee,reset:ut}}function Z2(r,e,t,n,i,s,o){const a=i.isWebGL2,u=i.maxTextures,l=i.maxCubemapSize,c=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,S){return x?new OffscreenCanvas(A,S):Ju("canvas")}function _(A,S,N,K){let Q=1;if((A.width>K||A.height>K)&&(Q=K/Math.max(A.width,A.height)),Q<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const fe=S?Mf:Math.floor,xe=fe(Q*A.width),_e=fe(Q*A.height);d===void 0&&(d=b(xe,_e));const ee=N?b(xe,_e):d;return ee.width=xe,ee.height=_e,ee.getContext("2d").drawImage(A,0,0,xe,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xe+"x"+_e+")."),ee}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return sp(A.width)&&sp(A.height)}function M(A){return a?!1:A.wrapS!==yi||A.wrapT!==yi||A.minFilter!==wn&&A.minFilter!==ni}function E(A,S){return A.generateMipmaps&&S&&A.minFilter!==wn&&A.minFilter!==ni}function T(A){r.generateMipmap(A)}function v(A,S,N,K,Q=!1){if(a===!1)return S;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe=S;return S===6403&&(N===5126&&(fe=33326),N===5131&&(fe=33325),N===5121&&(fe=33321)),S===33319&&(N===5126&&(fe=33328),N===5131&&(fe=33327),N===5121&&(fe=33323)),S===6408&&(N===5126&&(fe=34836),N===5131&&(fe=34842),N===5121&&(fe=K===Mt&&Q===!1?35907:32856),N===32819&&(fe=32854),N===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function w(A,S,N){return E(A,N)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==ni?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function F(A){return A===wn||A===Rd||A===Bd?9728:9729}function O(A){const S=A.target;S.removeEventListener("dispose",O),z(S),S.isVideoTexture&&g.delete(S)}function Z(A){const S=A.target;S.removeEventListener("dispose",Z),q(S)}function z(A){const S=n.get(A);if(S.__webglInit===void 0)return;const N=A.source,K=p.get(N);if(K){const Q=K[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(A),Object.keys(K).length===0&&p.delete(N)}n.remove(A)}function I(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const N=A.source,K=p.get(N);delete K[S.__cacheKey],o.memory.textures--}function q(A){const S=A.texture,N=n.get(A),K=n.get(S);if(K.__webglTexture!==void 0&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)r.deleteFramebuffer(N.__webglFramebuffer[Q]),N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer[Q]);else{if(r.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&r.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Q=0;Q<N.__webglColorRenderbuffer.length;Q++)N.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(N.__webglColorRenderbuffer[Q]);N.__webglDepthRenderbuffer&&r.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,fe=S.length;Q<fe;Q++){const xe=n.get(S[Q]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(S[Q])}n.remove(S),n.remove(A)}let V=0;function Y(){V=0}function B(){const A=V;return A>=u&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+u),V+=1,A}function se(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function L(A,S){const N=n.get(A);if(A.isVideoTexture&&me(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(N,A,S);return}}t.bindTexture(3553,N.__webglTexture,33984+S)}function X(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){ye(N,A,S);return}t.bindTexture(35866,N.__webglTexture,33984+S)}function G(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){ye(N,A,S);return}t.bindTexture(32879,N.__webglTexture,33984+S)}function he(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){Be(N,A,S);return}t.bindTexture(34067,N.__webglTexture,33984+S)}const ce={[vf]:10497,[yi]:33071,[yf]:33648},ge={[wn]:9728,[Rd]:9984,[Bd]:9986,[ni]:9729,[N1]:9985,[xl]:9987};function H(A,S,N){if(N?(r.texParameteri(A,10242,ce[S.wrapS]),r.texParameteri(A,10243,ce[S.wrapT]),(A===32879||A===35866)&&r.texParameteri(A,32882,ce[S.wrapR]),r.texParameteri(A,10240,ge[S.magFilter]),r.texParameteri(A,10241,ge[S.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),(A===32879||A===35866)&&r.texParameteri(A,32882,33071),(S.wrapS!==yi||S.wrapT!==yi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,F(S.magFilter)),r.texParameteri(A,10241,F(S.minFilter)),S.minFilter!==wn&&S.minFilter!==ni&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(S.type===cs&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===wa&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(A,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Re(A,S){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",O));const K=S.source;let Q=p.get(K);Q===void 0&&(Q={},p.set(K,Q));const fe=se(S);if(fe!==A.__cacheKey){Q[fe]===void 0&&(Q[fe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Q[fe].usedTimes++;const xe=Q[A.__cacheKey];xe!==void 0&&(Q[A.__cacheKey].usedTimes--,xe.usedTimes===0&&I(S)),A.__cacheKey=fe,A.__webglTexture=Q[fe].texture}return N}function ye(A,S,N){let K=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=35866),S.isData3DTexture&&(K=32879);const Q=Re(A,S),fe=S.source;t.bindTexture(K,A.__webglTexture,33984+N);const xe=n.get(fe);if(fe.version!==xe.__version||Q===!0){t.activeTexture(33984+N),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const _e=M(S)&&y(S.image)===!1;let ee=_(S.image,_e,!1,c);ee=le(S,ee);const Fe=y(ee)||a,Ne=s.convert(S.format,S.encoding);let Ae=s.convert(S.type),Ie=v(S.internalFormat,Ne,Ae,S.encoding,S.isVideoTexture);H(K,S,Fe);let Ee;const Te=S.mipmaps,nt=a&&S.isVideoTexture!==!0,ut=xe.__version===void 0||Q===!0,U=w(S,ee,Fe);if(S.isDepthTexture)Ie=6402,a?S.type===cs?Ie=36012:S.type===ls?Ie=33190:S.type===ho?Ie=35056:Ie=33189:S.type===cs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===vs&&Ie===6402&&S.type!==lg&&S.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ls,Ae=s.convert(S.type)),S.format===Ao&&Ie===6402&&(Ie=34041,S.type!==ho&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ho,Ae=s.convert(S.type))),ut&&(nt?t.texStorage2D(3553,1,Ie,ee.width,ee.height):t.texImage2D(3553,0,Ie,ee.width,ee.height,0,Ne,Ae,null));else if(S.isDataTexture)if(Te.length>0&&Fe){nt&&ut&&t.texStorage2D(3553,U,Ie,Te[0].width,Te[0].height);for(let re=0,de=Te.length;re<de;re++)Ee=Te[re],nt?t.texSubImage2D(3553,re,0,0,Ee.width,Ee.height,Ne,Ae,Ee.data):t.texImage2D(3553,re,Ie,Ee.width,Ee.height,0,Ne,Ae,Ee.data);S.generateMipmaps=!1}else nt?(ut&&t.texStorage2D(3553,U,Ie,ee.width,ee.height),t.texSubImage2D(3553,0,0,0,ee.width,ee.height,Ne,Ae,ee.data)):t.texImage2D(3553,0,Ie,ee.width,ee.height,0,Ne,Ae,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){nt&&ut&&t.texStorage3D(35866,U,Ie,Te[0].width,Te[0].height,ee.depth);for(let re=0,de=Te.length;re<de;re++)Ee=Te[re],S.format!==bi?Ne!==null?nt?t.compressedTexSubImage3D(35866,re,0,0,0,Ee.width,Ee.height,ee.depth,Ne,Ee.data,0,0):t.compressedTexImage3D(35866,re,Ie,Ee.width,Ee.height,ee.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(35866,re,0,0,0,Ee.width,Ee.height,ee.depth,Ne,Ae,Ee.data):t.texImage3D(35866,re,Ie,Ee.width,Ee.height,ee.depth,0,Ne,Ae,Ee.data)}else{nt&&ut&&t.texStorage2D(3553,U,Ie,Te[0].width,Te[0].height);for(let re=0,de=Te.length;re<de;re++)Ee=Te[re],S.format!==bi?Ne!==null?nt?t.compressedTexSubImage2D(3553,re,0,0,Ee.width,Ee.height,Ne,Ee.data):t.compressedTexImage2D(3553,re,Ie,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(3553,re,0,0,Ee.width,Ee.height,Ne,Ae,Ee.data):t.texImage2D(3553,re,Ie,Ee.width,Ee.height,0,Ne,Ae,Ee.data)}else if(S.isDataArrayTexture)nt?(ut&&t.texStorage3D(35866,U,Ie,ee.width,ee.height,ee.depth),t.texSubImage3D(35866,0,0,0,0,ee.width,ee.height,ee.depth,Ne,Ae,ee.data)):t.texImage3D(35866,0,Ie,ee.width,ee.height,ee.depth,0,Ne,Ae,ee.data);else if(S.isData3DTexture)nt?(ut&&t.texStorage3D(32879,U,Ie,ee.width,ee.height,ee.depth),t.texSubImage3D(32879,0,0,0,0,ee.width,ee.height,ee.depth,Ne,Ae,ee.data)):t.texImage3D(32879,0,Ie,ee.width,ee.height,ee.depth,0,Ne,Ae,ee.data);else if(S.isFramebufferTexture){if(ut)if(nt)t.texStorage2D(3553,U,Ie,ee.width,ee.height);else{let re=ee.width,de=ee.height;for(let Se=0;Se<U;Se++)t.texImage2D(3553,Se,Ie,re,de,0,Ne,Ae,null),re>>=1,de>>=1}}else if(Te.length>0&&Fe){nt&&ut&&t.texStorage2D(3553,U,Ie,Te[0].width,Te[0].height);for(let re=0,de=Te.length;re<de;re++)Ee=Te[re],nt?t.texSubImage2D(3553,re,0,0,Ne,Ae,Ee):t.texImage2D(3553,re,Ie,Ne,Ae,Ee);S.generateMipmaps=!1}else nt?(ut&&t.texStorage2D(3553,U,Ie,ee.width,ee.height),t.texSubImage2D(3553,0,0,0,Ne,Ae,ee)):t.texImage2D(3553,0,Ie,Ne,Ae,ee);E(S,Fe)&&T(K),xe.__version=fe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Be(A,S,N){if(S.image.length!==6)return;const K=Re(A,S),Q=S.source;t.bindTexture(34067,A.__webglTexture,33984+N);const fe=n.get(Q);if(Q.version!==fe.__version||K===!0){t.activeTexture(33984+N),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,_e=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let re=0;re<6;re++)!xe&&!_e?ee[re]=_(S.image[re],!1,!0,l):ee[re]=_e?S.image[re].image:S.image[re],ee[re]=le(S,ee[re]);const Fe=ee[0],Ne=y(Fe)||a,Ae=s.convert(S.format,S.encoding),Ie=s.convert(S.type),Ee=v(S.internalFormat,Ae,Ie,S.encoding),Te=a&&S.isVideoTexture!==!0,nt=fe.__version===void 0||K===!0;let ut=w(S,Fe,Ne);H(34067,S,Ne);let U;if(xe){Te&&nt&&t.texStorage2D(34067,ut,Ee,Fe.width,Fe.height);for(let re=0;re<6;re++){U=ee[re].mipmaps;for(let de=0;de<U.length;de++){const Se=U[de];S.format!==bi?Ae!==null?Te?t.compressedTexSubImage2D(34069+re,de,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(34069+re,de,Ee,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(34069+re,de,0,0,Se.width,Se.height,Ae,Ie,Se.data):t.texImage2D(34069+re,de,Ee,Se.width,Se.height,0,Ae,Ie,Se.data)}}}else{U=S.mipmaps,Te&&nt&&(U.length>0&&ut++,t.texStorage2D(34067,ut,Ee,ee[0].width,ee[0].height));for(let re=0;re<6;re++)if(_e){Te?t.texSubImage2D(34069+re,0,0,0,ee[re].width,ee[re].height,Ae,Ie,ee[re].data):t.texImage2D(34069+re,0,Ee,ee[re].width,ee[re].height,0,Ae,Ie,ee[re].data);for(let de=0;de<U.length;de++){const Le=U[de].image[re].image;Te?t.texSubImage2D(34069+re,de+1,0,0,Le.width,Le.height,Ae,Ie,Le.data):t.texImage2D(34069+re,de+1,Ee,Le.width,Le.height,0,Ae,Ie,Le.data)}}else{Te?t.texSubImage2D(34069+re,0,0,0,Ae,Ie,ee[re]):t.texImage2D(34069+re,0,Ee,Ae,Ie,ee[re]);for(let de=0;de<U.length;de++){const Se=U[de];Te?t.texSubImage2D(34069+re,de+1,0,0,Ae,Ie,Se.image[re]):t.texImage2D(34069+re,de+1,Ee,Ae,Ie,Se.image[re])}}}E(S,Ne)&&T(34067),fe.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ve(A,S,N,K,Q){const fe=s.convert(N.format,N.encoding),xe=s.convert(N.type),_e=v(N.internalFormat,fe,xe,N.encoding);n.get(S).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,_e,S.width,S.height,S.depth,0,fe,xe,null):t.texImage2D(Q,0,_e,S.width,S.height,0,fe,xe,null)),t.bindFramebuffer(36160,A),te(S)?f.framebufferTexture2DMultisampleEXT(36160,K,Q,n.get(N).__webglTexture,0,pe(S)):(Q===3553||Q>=34069&&Q<=34074)&&r.framebufferTexture2D(36160,K,Q,n.get(N).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ge(A,S,N){if(r.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let K=33189;if(N||te(S)){const Q=S.depthTexture;Q&&Q.isDepthTexture&&(Q.type===cs?K=36012:Q.type===ls&&(K=33190));const fe=pe(S);te(S)?f.renderbufferStorageMultisampleEXT(36161,fe,K,S.width,S.height):r.renderbufferStorageMultisample(36161,fe,K,S.width,S.height)}else r.renderbufferStorage(36161,K,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const K=pe(S);N&&te(S)===!1?r.renderbufferStorageMultisample(36161,K,35056,S.width,S.height):te(S)?f.renderbufferStorageMultisampleEXT(36161,K,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{const K=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0;Q<K.length;Q++){const fe=K[Q],xe=s.convert(fe.format,fe.encoding),_e=s.convert(fe.type),ee=v(fe.internalFormat,xe,_e,fe.encoding),Fe=pe(S);N&&te(S)===!1?r.renderbufferStorageMultisample(36161,Fe,ee,S.width,S.height):te(S)?f.renderbufferStorageMultisampleEXT(36161,Fe,ee,S.width,S.height):r.renderbufferStorage(36161,ee,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function D(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),L(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,Q=pe(S);if(S.depthTexture.format===vs)te(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,Q):r.framebufferTexture2D(36160,36096,3553,K,0);else if(S.depthTexture.format===Ao)te(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,Q):r.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function P(A){const S=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");D(S.__webglFramebuffer,A)}else if(N){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]=r.createRenderbuffer(),Ge(S.__webglDepthbuffer[K],A,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Ge(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function $(A,S,N){const K=n.get(A);S!==void 0&&ve(K.__webglFramebuffer,A,A.texture,36064,3553),N!==void 0&&P(A)}function oe(A){const S=A.texture,N=n.get(A),K=n.get(S);A.addEventListener("dispose",Z),A.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=S.version,o.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,fe=A.isWebGLMultipleRenderTargets===!0,xe=y(A)||a;if(Q){N.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)N.__webglFramebuffer[_e]=r.createFramebuffer()}else{if(N.__webglFramebuffer=r.createFramebuffer(),fe)if(i.drawBuffers){const _e=A.texture;for(let ee=0,Fe=_e.length;ee<Fe;ee++){const Ne=n.get(_e[ee]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&te(A)===!1){const _e=fe?S:[S];N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let ee=0;ee<_e.length;ee++){const Fe=_e[ee];N.__webglColorRenderbuffer[ee]=r.createRenderbuffer(),r.bindRenderbuffer(36161,N.__webglColorRenderbuffer[ee]);const Ne=s.convert(Fe.format,Fe.encoding),Ae=s.convert(Fe.type),Ie=v(Fe.internalFormat,Ne,Ae,Fe.encoding,A.isXRRenderTarget===!0),Ee=pe(A);r.renderbufferStorageMultisample(36161,Ee,Ie,A.width,A.height),r.framebufferRenderbuffer(36160,36064+ee,36161,N.__webglColorRenderbuffer[ee])}r.bindRenderbuffer(36161,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Ge(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,K.__webglTexture),H(34067,S,xe);for(let _e=0;_e<6;_e++)ve(N.__webglFramebuffer[_e],A,S,36064,34069+_e);E(S,xe)&&T(34067),t.unbindTexture()}else if(fe){const _e=A.texture;for(let ee=0,Fe=_e.length;ee<Fe;ee++){const Ne=_e[ee],Ae=n.get(Ne);t.bindTexture(3553,Ae.__webglTexture),H(3553,Ne,xe),ve(N.__webglFramebuffer,A,Ne,36064+ee,3553),E(Ne,xe)&&T(3553)}t.unbindTexture()}else{let _e=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?_e=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,K.__webglTexture),H(_e,S,xe),ve(N.__webglFramebuffer,A,S,36064,_e),E(S,xe)&&T(_e),t.unbindTexture()}A.depthBuffer&&P(A)}function ne(A){const S=y(A)||a,N=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let K=0,Q=N.length;K<Q;K++){const fe=N[K];if(E(fe,S)){const xe=A.isWebGLCubeRenderTarget?34067:3553,_e=n.get(fe).__webglTexture;t.bindTexture(xe,_e),T(xe),t.unbindTexture()}}}function R(A){if(a&&A.samples>0&&te(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],N=A.width,K=A.height;let Q=16384;const fe=[],xe=A.stencilBuffer?33306:36096,_e=n.get(A),ee=A.isWebGLMultipleRenderTargets===!0;if(ee)for(let Fe=0;Fe<S.length;Fe++)t.bindFramebuffer(36160,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Fe,36161,null),t.bindFramebuffer(36160,_e.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Fe,3553,null,0);t.bindFramebuffer(36008,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,_e.__webglFramebuffer);for(let Fe=0;Fe<S.length;Fe++){fe.push(36064+Fe),A.depthBuffer&&fe.push(xe);const Ne=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Ne===!1&&(A.depthBuffer&&(Q|=256),A.stencilBuffer&&(Q|=1024)),ee&&r.framebufferRenderbuffer(36008,36064,36161,_e.__webglColorRenderbuffer[Fe]),Ne===!0&&(r.invalidateFramebuffer(36008,[xe]),r.invalidateFramebuffer(36009,[xe])),ee){const Ae=n.get(S[Fe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Ae,0)}r.blitFramebuffer(0,0,N,K,0,0,N,K,Q,9728),m&&r.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ee)for(let Fe=0;Fe<S.length;Fe++){t.bindFramebuffer(36160,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Fe,36161,_e.__webglColorRenderbuffer[Fe]);const Ne=n.get(S[Fe]).__webglTexture;t.bindFramebuffer(36160,_e.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Fe,3553,Ne,0)}t.bindFramebuffer(36009,_e.__webglMultisampledFramebuffer)}}function pe(A){return Math.min(h,A.samples)}function te(A){const S=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function me(A){const S=o.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function le(A,S){const N=A.encoding,K=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===bf||N!==Cs&&(N===Mt?a===!1?e.has("EXT_sRGB")===!0&&K===bi?(A.format=bf,A.minFilter=ni,A.generateMipmaps=!1):S=hg.sRGBToLinear(S):(K!==bi||Q!==As)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),S}this.allocateTextureUnit=B,this.resetTextureUnits=Y,this.setTexture2D=L,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=he,this.rebindTextures=$,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=te}function K2(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===As)return 5121;if(s===G1)return 32819;if(s===V1)return 32820;if(s===k1)return 5120;if(s===z1)return 5122;if(s===lg)return 5123;if(s===W1)return 5124;if(s===ls)return 5125;if(s===cs)return 5126;if(s===wa)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===H1)return 6406;if(s===bi)return 6408;if(s===q1)return 6409;if(s===$1)return 6410;if(s===vs)return 6402;if(s===Ao)return 34041;if(s===X1)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===bf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Y1)return 6403;if(s===j1)return 36244;if(s===Z1)return 33319;if(s===K1)return 33320;if(s===J1)return 36249;if(s===Zl||s===Kl||s===Jl||s===Ql)if(o===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Zl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Zl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ql)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Id||s===Ud||s===Od||s===Nd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Id)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ud)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Od)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Q1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kd||s===zd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===kd)return o===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===zd)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wd||s===Gd||s===Vd||s===Hd||s===Xd||s===qd||s===$d||s===Yd||s===jd||s===Zd||s===Kd||s===Jd||s===Qd||s===ep)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Wd)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gd)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vd)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hd)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xd)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qd)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$d)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yd)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jd)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zd)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kd)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jd)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qd)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ep)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===tp)return o===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ho?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class J2 extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xu extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q2={type:"move"};class Cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),x=this._getHandJoint(l,d);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=c.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q2)))}return a!==null&&(a.visible=i!==null),u!==null&&(u.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xu;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ew extends Xn{constructor(e,t,n,i,s,o,a,u,l,c){if(c=c!==void 0?c:vs,c!==vs&&c!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===vs&&(n=ls),n===void 0&&c===Ao&&(n=ho),super(null,i,s,o,a,u,c,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wn,this.minFilter=u!==void 0?u:wn,this.flipY=!1,this.generateMipmaps=!1}}class tw extends Lo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",u=null,l=null,c=null,h=null,f=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const x=[],b=[],_=new Set,y=new Map,M=new ii;M.layers.enable(1),M.viewport=new tn;const E=new ii;E.layers.enable(2),E.viewport=new tn;const T=[M,E],v=new J2;v.layers.enable(1),v.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let G=x[X];return G===void 0&&(G=new Cc,x[X]=G),G.getTargetRaySpace()},this.getControllerGrip=function(X){let G=x[X];return G===void 0&&(G=new Cc,x[X]=G),G.getGripSpace()},this.getHand=function(X){let G=x[X];return G===void 0&&(G=new Cc,x[X]=G),G.getHandSpace()};function O(X){const G=b.indexOf(X.inputSource);if(G===-1)return;const he=x[G];he!==void 0&&he.dispatchEvent({type:X.type,data:X.inputSource})}function Z(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",z);for(let X=0;X<x.length;X++){const G=b[X];G!==null&&(b[X]=null,x[X].disconnect(G))}w=null,F=null,e.setRenderTarget(d),f=null,h=null,c=null,i=null,p=null,L.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,G),i.updateRenderState({baseLayer:f}),p=new Ds(f.framebufferWidth,f.framebufferHeight,{format:bi,type:As,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let G=null,he=null,ce=null;g.depth&&(ce=g.stencil?35056:33190,G=g.stencil?Ao:vs,he=g.stencil?ho:ls);const ge={colorFormat:32856,depthFormat:ce,scaleFactor:s};c=new XRWebGLBinding(i,t),h=c.createProjectionLayer(ge),i.updateRenderState({layers:[h]}),p=new Ds(h.textureWidth,h.textureHeight,{format:bi,type:As,depthTexture:new ew(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const H=e.properties.get(p);H.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),u=null,o=await i.requestReferenceSpace(a),L.setContext(i),L.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(X){for(let G=0;G<X.removed.length;G++){const he=X.removed[G],ce=b.indexOf(he);ce>=0&&(b[ce]=null,x[ce].disconnect(he))}for(let G=0;G<X.added.length;G++){const he=X.added[G];let ce=b.indexOf(he);if(ce===-1){for(let H=0;H<x.length;H++)if(H>=b.length){b.push(he),ce=H;break}else if(b[H]===null){b[H]=he,ce=H;break}if(ce===-1)break}const ge=x[ce];ge&&ge.connect(he)}}const I=new J,q=new J;function V(X,G,he){I.setFromMatrixPosition(G.matrixWorld),q.setFromMatrixPosition(he.matrixWorld);const ce=I.distanceTo(q),ge=G.projectionMatrix.elements,H=he.projectionMatrix.elements,Re=ge[14]/(ge[10]-1),ye=ge[14]/(ge[10]+1),Be=(ge[9]+1)/ge[5],ve=(ge[9]-1)/ge[5],Ge=(ge[8]-1)/ge[0],D=(H[8]+1)/H[0],P=Re*Ge,$=Re*D,oe=ce/(-Ge+D),ne=oe*-Ge;G.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ne),X.translateZ(oe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=Re+oe,pe=ye+oe,te=P-ne,me=$+(ce-ne),le=Be*ye/pe*R,A=ve*ye/pe*R;X.projectionMatrix.makePerspective(te,me,le,A,R,pe)}function Y(X,G){G===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(G.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;v.near=E.near=M.near=X.near,v.far=E.far=M.far=X.far,(w!==v.near||F!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,F=v.far);const G=X.parent,he=v.cameras;Y(v,G);for(let ge=0;ge<he.length;ge++)Y(he[ge],G);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),X.matrix.copy(v.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale);const ce=X.children;for(let ge=0,H=ce.length;ge<H;ge++)ce[ge].updateMatrixWorld(!0);he.length===2?V(v,M,E):v.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(X){h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.getPlanes=function(){return _};let B=null;function se(X,G){if(l=G.getViewerPose(u||o),m=G,l!==null){const he=l.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ce=!1;he.length!==v.cameras.length&&(v.cameras.length=0,ce=!0);for(let ge=0;ge<he.length;ge++){const H=he[ge];let Re=null;if(f!==null)Re=f.getViewport(H);else{const Be=c.getViewSubImage(h,H);Re=Be.viewport,ge===0&&(e.setRenderTargetTextures(p,Be.colorTexture,h.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(p))}let ye=T[ge];ye===void 0&&(ye=new ii,ye.layers.enable(ge),ye.viewport=new tn,T[ge]=ye),ye.matrix.fromArray(H.transform.matrix),ye.projectionMatrix.fromArray(H.projectionMatrix),ye.viewport.set(Re.x,Re.y,Re.width,Re.height),ge===0&&v.matrix.copy(ye.matrix),ce===!0&&v.cameras.push(ye)}}for(let he=0;he<x.length;he++){const ce=b[he],ge=x[he];ce!==null&&ge!==void 0&&ge.update(ce,G,u||o)}if(B&&B(X,G),G.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:G.detectedPlanes});let he=null;for(const ce of _)G.detectedPlanes.has(ce)||(he===null&&(he=[]),he.push(ce));if(he!==null)for(const ce of he)_.delete(ce),y.delete(ce),n.dispatchEvent({type:"planeremoved",data:ce});for(const ce of G.detectedPlanes)if(!_.has(ce))_.add(ce),y.set(ce,G.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ce});else{const ge=y.get(ce);ce.lastChangedTime>ge&&(y.set(ce,ce.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ce}))}}m=null}const L=new wg;L.setAnimationLoop(se),this.setAnimationLoop=function(X){B=X},this.dispose=function(){}}}function nw(r,e){function t(d,p){p.color.getRGB(d.fogColor.value,yg(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,x,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),c(d,p)):p.isMeshPhongMaterial?(i(d,p),l(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,_)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,x,b):p.isSpriteMaterial?u(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===ci&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===ci&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const y=r.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uv2Transform.value.copy(_.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,x,b){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*x,d.scale.value=b*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function u(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function c(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,x){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ci&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function iw(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function u(b,_){const y=_.program;n.uniformBlockBinding(b,y)}function l(b,_){let y=i[b.id];y===void 0&&(g(b),y=c(b),i[b.id]=y,b.addEventListener("dispose",p));const M=_.program;n.updateUBOMapping(b,M);const E=e.render.frame;s[b.id]!==E&&(f(b),s[b.id]=E)}function c(b){const _=h();b.__bindingPointIndex=_;const y=r.createBuffer(),M=b.__size,E=b.usage;return r.bindBuffer(35345,y),r.bufferData(35345,M,E),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,y),y}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const _=i[b.id],y=b.uniforms,M=b.__cache;r.bindBuffer(35345,_);for(let E=0,T=y.length;E<T;E++){const v=y[E];if(m(v,E,M)===!0){const w=v.value,F=v.__offset;typeof w=="number"?(v.__data[0]=w,r.bufferSubData(35345,F,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):w.toArray(v.__data),r.bufferSubData(35345,F,v.__data))}}r.bindBuffer(35345,null)}function m(b,_,y){const M=b.value;if(y[_]===void 0)return typeof M=="number"?y[_]=M:y[_]=M.clone(),!0;if(typeof M=="number"){if(y[_]!==M)return y[_]=M,!0}else{const E=y[_];if(E.equals(M)===!1)return E.copy(M),!0}return!1}function g(b){const _=b.uniforms;let y=0;const M=16;let E=0;for(let T=0,v=_.length;T<v;T++){const w=_[T],F=d(w);if(w.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,T>0){E=y%M;const O=M-E;E!==0&&O-F.boundary<0&&(y+=M-E,w.__offset=y)}y+=F.storage}return E=y%M,E>0&&(y+=M-E),b.__size=y,b.__cache={},this}function d(b){const _=b.value,y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(b){const _=b.target;_.removeEventListener("dispose",p);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function x(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:u,update:l,dispose:x}}function rw(){const r=Ju("canvas");return r.style.display="block",r}function Dg(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:rw(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,u=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Cs,this.physicallyCorrectLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1;const d=this;let p=!1,x=0,b=0,_=null,y=-1,M=null;const E=new tn,T=new tn;let v=null,w=e.width,F=e.height,O=1,Z=null,z=null;const I=new tn(0,0,w,F),q=new tn(0,0,w,F);let V=!1;const Y=new Sg;let B=!1,se=!1,L=null;const X=new Yt,G=new gt,he=new J,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return _===null?O:1}let H=t;function Re(C,W){for(let j=0;j<C.length;j++){const k=C[j],ae=e.getContext(k,W);if(ae!==null)return ae}return null}try{const C={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dh}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",Te,!1),H===null){const W=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&W.shift(),H=Re(W,C),H===null)throw Re(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ye,Be,ve,Ge,D,P,$,oe,ne,R,pe,te,me,le,A,S,N,K,Q,fe,xe,_e,ee,Fe;function Ne(){ye=new mS(H),Be=new uS(H,ye,r),ye.init(Be),_e=new K2(H,ye,Be),ve=new j2(H,ye,Be),Ge=new xS,D=new I2,P=new Z2(H,ye,ve,D,Be,_e,Ge),$=new cS(d),oe=new pS(d),ne=new Ty(H,Be),ee=new oS(H,ye,ne,Be),R=new gS(H,ne,Ge,ee),pe=new MS(H,R,ne,Ge),Q=new bS(H,Be,P),S=new lS(D),te=new B2(d,$,oe,ye,Be,ee,S),me=new nw(d,D),le=new O2,A=new V2(ye,Be),K=new sS(d,$,oe,ve,pe,c,o),N=new Y2(d,pe,Be),Fe=new iw(H,Ge,Be,ve),fe=new aS(H,ye,Ge,Be),xe=new _S(H,ye,Ge,Be),Ge.programs=te.programs,d.capabilities=Be,d.extensions=ye,d.properties=D,d.renderLists=le,d.shadowMap=N,d.state=ve,d.info=Ge}Ne();const Ae=new tw(d,H);this.xr=Ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(w,F,!1))},this.getSize=function(C){return C.set(w,F)},this.setSize=function(C,W,j){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=C,F=W,e.width=Math.floor(C*O),e.height=Math.floor(W*O),j!==!1&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(w*O,F*O).floor()},this.setDrawingBufferSize=function(C,W,j){w=C,F=W,O=j,e.width=Math.floor(C*j),e.height=Math.floor(W*j),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(I)},this.setViewport=function(C,W,j,k){C.isVector4?I.set(C.x,C.y,C.z,C.w):I.set(C,W,j,k),ve.viewport(E.copy(I).multiplyScalar(O).floor())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,W,j,k){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,W,j,k),ve.scissor(T.copy(q).multiplyScalar(O).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(C){ve.setScissorTest(V=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(C=!0,W=!0,j=!0){let k=0;C&&(k|=16384),W&&(k|=256),j&&(k|=1024),H.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Te,!1),le.dispose(),A.dispose(),D.dispose(),$.dispose(),oe.dispose(),pe.dispose(),ee.dispose(),Fe.dispose(),te.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Se),Ae.removeEventListener("sessionend",Le),L&&(L.dispose(),L=null),Ke.stop()};function Ie(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const C=Ge.autoReset,W=N.enabled,j=N.autoUpdate,k=N.needsUpdate,ae=N.type;Ne(),Ge.autoReset=C,N.enabled=W,N.autoUpdate=j,N.needsUpdate=k,N.type=ae}function Te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function nt(C){const W=C.target;W.removeEventListener("dispose",nt),ut(W)}function ut(C){U(C),D.remove(C)}function U(C){const W=D.get(C).programs;W!==void 0&&(W.forEach(function(j){te.releaseProgram(j)}),C.isShaderMaterial&&te.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,j,k,ae,we){W===null&&(W=ce);const Pe=ae.isMesh&&ae.matrixWorld.determinant()<0,Ue=Pt(C,W,j,k,ae);ve.setMaterial(k,Pe);let Xe=j.index,Je=1;k.wireframe===!0&&(Xe=R.getWireframeAttribute(j),Je=2);const We=j.drawRange,Oe=j.attributes.position;let ft=We.start*Je,Zt=(We.start+We.count)*Je;we!==null&&(ft=Math.max(ft,we.start*Je),Zt=Math.min(Zt,(we.start+we.count)*Je)),Xe!==null?(ft=Math.max(ft,0),Zt=Math.min(Zt,Xe.count)):Oe!=null&&(ft=Math.max(ft,0),Zt=Math.min(Zt,Oe.count));const jn=Zt-ft;if(jn<0||jn===1/0)return;ee.setup(ae,k,Ue,j,Xe);let Ln,mt=fe;if(Xe!==null&&(Ln=ne.get(Xe),mt=xe,mt.setIndex(Ln)),ae.isMesh)k.wireframe===!0?(ve.setLineWidth(k.wireframeLinewidth*ge()),mt.setMode(1)):mt.setMode(4);else if(ae.isLine){let ot=k.linewidth;ot===void 0&&(ot=1),ve.setLineWidth(ot*ge()),ae.isLineSegments?mt.setMode(1):ae.isLineLoop?mt.setMode(2):mt.setMode(3)}else ae.isPoints?mt.setMode(0):ae.isSprite&&mt.setMode(4);if(ae.isInstancedMesh)mt.renderInstances(ft,jn,ae.count);else if(j.isInstancedBufferGeometry){const ot=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,bl=Math.min(j.instanceCount,ot);mt.renderInstances(ft,jn,bl)}else mt.render(ft,jn)},this.compile=function(C,W){function j(k,ae,we){k.transparent===!0&&k.side===Tr?(k.side=ci,k.needsUpdate=!0,Ce(k,ae,we),k.side=wo,k.needsUpdate=!0,Ce(k,ae,we),k.side=Tr):Ce(k,ae,we)}f=A.get(C),f.init(),g.push(f),C.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(d.physicallyCorrectLights),C.traverse(function(k){const ae=k.material;if(ae)if(Array.isArray(ae))for(let we=0;we<ae.length;we++){const Pe=ae[we];j(Pe,C,k)}else j(ae,C,k)}),g.pop(),f=null};let re=null;function de(C){re&&re(C)}function Se(){Ke.stop()}function Le(){Ke.start()}const Ke=new wg;Ke.setAnimationLoop(de),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(C){re=C,Ae.setAnimationLoop(C),C===null?Ke.stop():Ke.start()},Ae.addEventListener("sessionstart",Se),Ae.addEventListener("sessionend",Le),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(W),W=Ae.getCamera()),C.isScene===!0&&C.onBeforeRender(d,C,W,_),f=A.get(C,g.length),f.init(),g.push(f),X.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Y.setFromProjectionMatrix(X),se=this.localClippingEnabled,B=S.init(this.clippingPlanes,se,W),h=le.get(C,m.length),h.init(),m.push(h),vt(C,W,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(Z,z),B===!0&&S.beginShadows();const j=f.state.shadowsArray;if(N.render(j,C,W),B===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(h,C),f.setupLights(d.physicallyCorrectLights),W.isArrayCamera){const k=W.cameras;for(let ae=0,we=k.length;ae<we;ae++){const Pe=k[ae];At(h,C,Pe,Pe.viewport)}}else At(h,C,W);_!==null&&(P.updateMultisampleRenderTarget(_),P.updateRenderTargetMipmap(_)),C.isScene===!0&&C.onAfterRender(d,C,W),ee.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function vt(C,W,j,k){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){k&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(X);const Pe=pe.update(C),Ue=C.material;Ue.visible&&h.push(C,Pe,Ue,j,he.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Ge.render.frame&&(C.skeleton.update(),C.skeleton.frame=Ge.render.frame),!C.frustumCulled||Y.intersectsObject(C))){k&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(X);const Pe=pe.update(C),Ue=C.material;if(Array.isArray(Ue)){const Xe=Pe.groups;for(let Je=0,We=Xe.length;Je<We;Je++){const Oe=Xe[Je],ft=Ue[Oe.materialIndex];ft&&ft.visible&&h.push(C,Pe,ft,j,he.z,Oe)}}else Ue.visible&&h.push(C,Pe,Ue,j,he.z,null)}}const we=C.children;for(let Pe=0,Ue=we.length;Pe<Ue;Pe++)vt(we[Pe],W,j,k)}function At(C,W,j,k){const ae=C.opaque,we=C.transmissive,Pe=C.transparent;f.setupLightsView(j),we.length>0&&je(ae,W,j),k&&ve.viewport(E.copy(k)),ae.length>0&&ie(ae,W,j),we.length>0&&ie(we,W,j),Pe.length>0&&ie(Pe,W,j),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function je(C,W,j){const k=Be.isWebGL2;L===null&&(L=new Ds(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?wa:As,minFilter:xl,samples:k&&s===!0?4:0})),d.getDrawingBufferSize(G),k?L.setSize(G.x,G.y):L.setSize(Mf(G.x),Mf(G.y));const ae=d.getRenderTarget();d.setRenderTarget(L),d.clear();const we=d.toneMapping;d.toneMapping=Qi,ie(C,W,j),d.toneMapping=we,P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L),d.setRenderTarget(ae)}function ie(C,W,j){const k=W.isScene===!0?W.overrideMaterial:null;for(let ae=0,we=C.length;ae<we;ae++){const Pe=C[ae],Ue=Pe.object,Xe=Pe.geometry,Je=k===null?Pe.material:k,We=Pe.group;Ue.layers.test(j.layers)&&De(Ue,W,j,Xe,Je,We)}}function De(C,W,j,k,ae,we){C.onBeforeRender(d,W,j,k,ae,we),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ae.onBeforeRender(d,W,j,k,C,we),ae.transparent===!0&&ae.side===Tr?(ae.side=ci,ae.needsUpdate=!0,d.renderBufferDirect(j,W,k,ae,C,we),ae.side=wo,ae.needsUpdate=!0,d.renderBufferDirect(j,W,k,ae,C,we),ae.side=Tr):d.renderBufferDirect(j,W,k,ae,C,we),C.onAfterRender(d,W,j,k,ae,we)}function Ce(C,W,j){W.isScene!==!0&&(W=ce);const k=D.get(C),ae=f.state.lights,we=f.state.shadowsArray,Pe=ae.state.version,Ue=te.getParameters(C,ae.state,we,W,j),Xe=te.getProgramCacheKey(Ue);let Je=k.programs;k.environment=C.isMeshStandardMaterial?W.environment:null,k.fog=W.fog,k.envMap=(C.isMeshStandardMaterial?oe:$).get(C.envMap||k.environment),Je===void 0&&(C.addEventListener("dispose",nt),Je=new Map,k.programs=Je);let We=Je.get(Xe);if(We!==void 0){if(k.currentProgram===We&&k.lightsStateVersion===Pe)return He(C,Ue),We}else Ue.uniforms=te.getUniforms(C),C.onBuild(j,Ue,d),C.onBeforeCompile(Ue,d),We=te.acquireProgram(Ue,Xe),Je.set(Xe,We),k.uniforms=Ue.uniforms;const Oe=k.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Oe.clippingPlanes=S.uniform),He(C,Ue),k.needsLights=Ct(C),k.lightsStateVersion=Pe,k.needsLights&&(Oe.ambientLightColor.value=ae.state.ambient,Oe.lightProbe.value=ae.state.probe,Oe.directionalLights.value=ae.state.directional,Oe.directionalLightShadows.value=ae.state.directionalShadow,Oe.spotLights.value=ae.state.spot,Oe.spotLightShadows.value=ae.state.spotShadow,Oe.rectAreaLights.value=ae.state.rectArea,Oe.ltc_1.value=ae.state.rectAreaLTC1,Oe.ltc_2.value=ae.state.rectAreaLTC2,Oe.pointLights.value=ae.state.point,Oe.pointLightShadows.value=ae.state.pointShadow,Oe.hemisphereLights.value=ae.state.hemi,Oe.directionalShadowMap.value=ae.state.directionalShadowMap,Oe.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Oe.spotShadowMap.value=ae.state.spotShadowMap,Oe.spotLightMatrix.value=ae.state.spotLightMatrix,Oe.spotLightMap.value=ae.state.spotLightMap,Oe.pointShadowMap.value=ae.state.pointShadowMap,Oe.pointShadowMatrix.value=ae.state.pointShadowMatrix);const ft=We.getUniforms(),Zt=Iu.seqWithValue(ft.seq,Oe);return k.currentProgram=We,k.uniformsList=Zt,We}function He(C,W){const j=D.get(C);j.outputEncoding=W.outputEncoding,j.instancing=W.instancing,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function Pt(C,W,j,k,ae){W.isScene!==!0&&(W=ce),P.resetTextureUnits();const we=W.fog,Pe=k.isMeshStandardMaterial?W.environment:null,Ue=_===null?d.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Cs,Xe=(k.isMeshStandardMaterial?oe:$).get(k.envMap||Pe),Je=k.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,We=!!k.normalMap&&!!j.attributes.tangent,Oe=!!j.morphAttributes.position,ft=!!j.morphAttributes.normal,Zt=!!j.morphAttributes.color,jn=k.toneMapped?d.toneMapping:Qi,Ln=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,mt=Ln!==void 0?Ln.length:0,ot=D.get(k),bl=f.state.lights;if(B===!0&&(se===!0||C!==M)){const Rn=C===M&&k.id===y;S.setState(k,C,Rn)}let Ht=!1;k.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==bl.state.version||ot.outputEncoding!==Ue||ae.isInstancedMesh&&ot.instancing===!1||!ae.isInstancedMesh&&ot.instancing===!0||ae.isSkinnedMesh&&ot.skinning===!1||!ae.isSkinnedMesh&&ot.skinning===!0||ot.envMap!==Xe||k.fog===!0&&ot.fog!==we||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==S.numPlanes||ot.numIntersection!==S.numIntersection)||ot.vertexAlphas!==Je||ot.vertexTangents!==We||ot.morphTargets!==Oe||ot.morphNormals!==ft||ot.morphColors!==Zt||ot.toneMapping!==jn||Be.isWebGL2===!0&&ot.morphTargetsCount!==mt)&&(Ht=!0):(Ht=!0,ot.__version=k.version);let Wr=ot.currentProgram;Ht===!0&&(Wr=Ce(k,W,ae));let _h=!1,Bo=!1,Ml=!1;const fn=Wr.getUniforms(),Gr=ot.uniforms;if(ve.useProgram(Wr.program)&&(_h=!0,Bo=!0,Ml=!0),k.id!==y&&(y=k.id,Bo=!0),_h||M!==C){if(fn.setValue(H,"projectionMatrix",C.projectionMatrix),Be.logarithmicDepthBuffer&&fn.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,Bo=!0,Ml=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Rn=fn.map.cameraPosition;Rn!==void 0&&Rn.setValue(H,he.setFromMatrixPosition(C.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&fn.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||ae.isSkinnedMesh)&&fn.setValue(H,"viewMatrix",C.matrixWorldInverse)}if(ae.isSkinnedMesh){fn.setOptional(H,ae,"bindMatrix"),fn.setOptional(H,ae,"bindMatrixInverse");const Rn=ae.skeleton;Rn&&(Be.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),fn.setValue(H,"boneTexture",Rn.boneTexture,P),fn.setValue(H,"boneTextureSize",Rn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Sl=j.morphAttributes;if((Sl.position!==void 0||Sl.normal!==void 0||Sl.color!==void 0&&Be.isWebGL2===!0)&&Q.update(ae,j,k,Wr),(Bo||ot.receiveShadow!==ae.receiveShadow)&&(ot.receiveShadow=ae.receiveShadow,fn.setValue(H,"receiveShadow",ae.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Gr.envMap.value=Xe,Gr.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Bo&&(fn.setValue(H,"toneMappingExposure",d.toneMappingExposure),ot.needsLights&&qe(Gr,Ml),we&&k.fog===!0&&me.refreshFogUniforms(Gr,we),me.refreshMaterialUniforms(Gr,k,O,F,L),Iu.upload(H,ot.uniformsList,Gr,P)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Iu.upload(H,ot.uniformsList,Gr,P),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&fn.setValue(H,"center",ae.center),fn.setValue(H,"modelViewMatrix",ae.modelViewMatrix),fn.setValue(H,"normalMatrix",ae.normalMatrix),fn.setValue(H,"modelMatrix",ae.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Rn=k.uniformsGroups;for(let wl=0,Fg=Rn.length;wl<Fg;wl++)if(Be.isWebGL2){const xh=Rn[wl];Fe.update(xh,Wr),Fe.bind(xh,Wr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wr}function qe(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Ct(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(C,W,j){D.get(C.texture).__webglTexture=W,D.get(C.depthTexture).__webglTexture=j;const k=D.get(C);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=j===void 0,k.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){const j=D.get(C);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,j=0){_=C,x=W,b=j;let k=!0,ae=null,we=!1,Pe=!1;if(C){const Xe=D.get(C);Xe.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(36160,null),k=!1):Xe.__webglFramebuffer===void 0?P.setupRenderTarget(C):Xe.__hasExternalTextures&&P.rebindTextures(C,D.get(C.texture).__webglTexture,D.get(C.depthTexture).__webglTexture);const Je=C.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Pe=!0);const We=D.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ae=We[W],we=!0):Be.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?ae=D.get(C).__webglMultisampledFramebuffer:ae=We,E.copy(C.viewport),T.copy(C.scissor),v=C.scissorTest}else E.copy(I).multiplyScalar(O).floor(),T.copy(q).multiplyScalar(O).floor(),v=V;if(ve.bindFramebuffer(36160,ae)&&Be.drawBuffers&&k&&ve.drawBuffers(C,ae),ve.viewport(E),ve.scissor(T),ve.setScissorTest(v),we){const Xe=D.get(C.texture);H.framebufferTexture2D(36160,36064,34069+W,Xe.__webglTexture,j)}else if(Pe){const Xe=D.get(C.texture),Je=W||0;H.framebufferTextureLayer(36160,36064,Xe.__webglTexture,j||0,Je)}y=-1},this.readRenderTargetPixels=function(C,W,j,k,ae,we,Pe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){ve.bindFramebuffer(36160,Ue);try{const Xe=C.texture,Je=Xe.format,We=Xe.type;if(Je!==bi&&_e.convert(Je)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=We===wa&&(ye.has("EXT_color_buffer_half_float")||Be.isWebGL2&&ye.has("EXT_color_buffer_float"));if(We!==As&&_e.convert(We)!==H.getParameter(35738)&&!(We===cs&&(Be.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-k&&j>=0&&j<=C.height-ae&&H.readPixels(W,j,k,ae,_e.convert(Je),_e.convert(We),we)}finally{const Xe=_!==null?D.get(_).__webglFramebuffer:null;ve.bindFramebuffer(36160,Xe)}}},this.copyFramebufferToTexture=function(C,W,j=0){const k=Math.pow(2,-j),ae=Math.floor(W.image.width*k),we=Math.floor(W.image.height*k);P.setTexture2D(W,0),H.copyTexSubImage2D(3553,j,0,0,C.x,C.y,ae,we),ve.unbindTexture()},this.copyTextureToTexture=function(C,W,j,k=0){const ae=W.image.width,we=W.image.height,Pe=_e.convert(j.format),Ue=_e.convert(j.type);P.setTexture2D(j,0),H.pixelStorei(37440,j.flipY),H.pixelStorei(37441,j.premultiplyAlpha),H.pixelStorei(3317,j.unpackAlignment),W.isDataTexture?H.texSubImage2D(3553,k,C.x,C.y,ae,we,Pe,Ue,W.image.data):W.isCompressedTexture?H.compressedTexSubImage2D(3553,k,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,Pe,W.mipmaps[0].data):H.texSubImage2D(3553,k,C.x,C.y,Pe,Ue,W.image),k===0&&j.generateMipmaps&&H.generateMipmap(3553),ve.unbindTexture()},this.copyTextureToTexture3D=function(C,W,j,k,ae=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=C.max.x-C.min.x+1,Pe=C.max.y-C.min.y+1,Ue=C.max.z-C.min.z+1,Xe=_e.convert(k.format),Je=_e.convert(k.type);let We;if(k.isData3DTexture)P.setTexture3D(k,0),We=32879;else if(k.isDataArrayTexture)P.setTexture2DArray(k,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,k.flipY),H.pixelStorei(37441,k.premultiplyAlpha),H.pixelStorei(3317,k.unpackAlignment);const Oe=H.getParameter(3314),ft=H.getParameter(32878),Zt=H.getParameter(3316),jn=H.getParameter(3315),Ln=H.getParameter(32877),mt=j.isCompressedTexture?j.mipmaps[0]:j.image;H.pixelStorei(3314,mt.width),H.pixelStorei(32878,mt.height),H.pixelStorei(3316,C.min.x),H.pixelStorei(3315,C.min.y),H.pixelStorei(32877,C.min.z),j.isDataTexture||j.isData3DTexture?H.texSubImage3D(We,ae,W.x,W.y,W.z,we,Pe,Ue,Xe,Je,mt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(We,ae,W.x,W.y,W.z,we,Pe,Ue,Xe,mt.data)):H.texSubImage3D(We,ae,W.x,W.y,W.z,we,Pe,Ue,Xe,Je,mt),H.pixelStorei(3314,Oe),H.pixelStorei(32878,ft),H.pixelStorei(3316,Zt),H.pixelStorei(3315,jn),H.pixelStorei(32877,Ln),ae===0&&k.generateMipmaps&&H.generateMipmap(We),ve.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),ve.unbindTexture()},this.resetState=function(){x=0,b=0,_=null,ve.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class sw extends Dg{}sw.prototype.isWebGL1Renderer=!0;class ow extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class aw extends Pa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Np=new Yt,wf=new mg,vu=new vl,yu=new J;class uw extends Pn{constructor(e=new ar,t=new aw){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vu.copy(n.boundingSphere),vu.applyMatrix4(i),vu.radius+=s,e.ray.intersectsSphere(vu)===!1)return;Np.copy(i).invert(),wf.copy(e.ray).applyMatrix4(Np);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,d=m;g<d;g++){const p=l.getX(g);yu.fromBufferAttribute(h,p),kp(yu,p,u,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,d=m;g<d;g++)yu.fromBufferAttribute(h,g),kp(yu,g,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function kp(r,e,t,n,i,s,o){const a=wf.distanceSqToPoint(r);if(a<t){const u=new J;wf.closestPointToPoint(r,u),u.applyMatrix4(n);const l=i.ray.origin.distanceTo(u);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:u,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dh);const lw=ir({__name:"Three",setup(r){const e=Ui(),t={fovy:60,aspect:window.innerWidth/window.innerHeight,near:.1,far:30,x:0,y:5,z:7,lookAt:new J(0,0,0)},n={clearColor:0,width:window.innerWidth,height:window.innerHeight};let i=[.3,.3,.3,.6],s=8;const o=new ow,a=new ii(t.fovy,t.aspect,t.near,t.far),u=new Dg;let l=Date.now(),c;const h=new ar,f={pointSize:{value:s},time:{value:0},globalColor:{value:i},power:{value:.5}},m={beforeY:window.pageYOffset,currentY:window.pageYOffset},g=()=>{if(e.value instanceof HTMLElement){a.updateProjectionMatrix(),a.position.set(t.x,t.y,t.z),a.lookAt(t.lookAt),u.setClearColor(new xt(n.clearColor)),u.setSize(n.width,n.height),e.value.appendChild(u.domElement);const p=new kr({uniforms:f,blending:mf,depthWrite:!1,transparent:!0,vertexShader:`
        attribute vec4 randomValue;

        uniform float pointSize;
        uniform float time;

        void main(){
            float width = randomValue.x;
            float sinScale = randomValue.y * 0.1 + 0.1;
            float cosScale = randomValue.z * 0.1 + 0.1;
            float pointScale = randomValue.w * 1.2 + 0.3;
            vec3 offset = vec3(cos(time * cosScale), sin(time * sinScale), 0.0) * width;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position + offset, 1.0);
            gl_PointSize = pointSize * pointScale;
        }
      `,fragmentShader:`
        precision mediump float;

        uniform vec4 globalColor;
        uniform float power;

        void main(){
            vec2 p = gl_PointCoord.st * 2.0 - 1.0;
            float len = length(p);
            float dest = power / len;
            dest = pow(dest, 5.0);
            gl_FragColor = vec4(vec3(dest), 1.0) * globalColor;
        }
      `}),x=100,b=6,_=[],y=[];for(let T=0;T<=x;++T){const v=(Math.random()-.5)*2*b,w=(Math.random()-.5)*2*b,F=(Math.random()-.5)*2*b;_.push(v,w,F),y.push(Math.random(),Math.random(),Math.random(),Math.random())}const M=new fi(new Float32Array(_),3);h.setAttribute("position",M),h.setAttribute("randomValue",new fi(new Float32Array(y),4));const E=new uw(h,p);o.add(E),d()}},d=()=>{const p=()=>{c=(Date.now()-l)/1e3,u.render(o,a),f.time.value=c,m.currentY=window.pageYOffset,o.rotation.y+=(m.currentY-m.beforeY)/500,m.beforeY=m.currentY,requestAnimationFrame(p)};p()};return sr(()=>{g()}),(p,x)=>(St(),It("div",{ref_key:"container",ref:e,class:"three"},null,512))}});const cw=or(lw,[["__scopeId","data-v-d05b2017"]]),lt=r=>(L_("data-v-d30ce2f2"),r=r(),R_(),r),fw={ref:"sandbox"},hw={class:"lead"},dw=lt(()=>ue("ul",null,[ue("li",null,[ue("a",{href:"https://vitejs.dev/",target:"_blank"},"Vite")]),ue("li",null,"\u60F3\u50CF\u4EE5\u4E0A\u306B\u304B\u3093\u305F\u3093\u306B\u74B0\u5883\u304C\u4F5C\u308C\u3066\u3073\u3063\u304F\u308A\uFF01"),ue("li",null,"\u307B\u3093\u3068\u306BGetting started\u306E\u30B3\u30DE\u30F3\u30C93\u3064\u304F\u3089\u3044\u53E9\u3044\u305F\u3089\u3067\u304D\u305F"),ue("li",null,"\u8A73\u3057\u304F\u306F\u8ABF\u3079\u3089\u308C\u3066\u306A\u3044\u3051\u3069\u3001\u958B\u767A\u74B0\u5883\u304C\u30B5\u30AF\u30B5\u30AF\u4F5C\u308C\u308B\u306E\u306F\u3044\u3044\u306A\u30FC\u3068\u611F\u3058\u305F\uFF01")],-1)),pw=lt(()=>ue("li",null,[ue("a",{href:"https://v3.ja.vuejs.org/guide/composition-api-introduction.html#%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E3%83%95%E3%83%83%E3%82%AF%E3%82%92-setup-%E3%81%AE%E4%B8%AD%E3%81%AB%E7%99%BB%E9%8C%B2%E3%81%99%E3%82%8B",target:"_blank"},"Composition API \u306B\u3064\u3044\u3066")],-1)),mw=lt(()=>ue("li",null,"\u307E\u3060Options\u8A18\u6CD5\u306B\u6163\u308C\u3066\u3044\u308B\u306E\u3067\u3001\u9055\u548C\u611F\u304C\u3042\u308B\u2026",-1)),gw=lt(()=>ue("li",null,"TypeScript\u3068\u306E\u89AA\u548C\u6027\u304C\u3042\u308B",-1)),_w=lt(()=>ue("li",null,"TypeScript\u3082\u3061\u3083\u3093\u3068\u899A\u3048\u305F\u3044\u306E\u3067\u9811\u5F35\u308A\u305F\u3044\u3068\u3053\u2026\uFF01",-1)),xw=lt(()=>ue("pre",null,`            import { ref, onMounted } from 'vue'

            // \u3053\u3053\u3067\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u53C2\u7167\u3057\u305F\u3044\u8981\u7D20\u3092\u3064\u306A\u304E\u3053\u3080
            // (\u5909\u6570\u540D\u3068ref\u5C5E\u6027\u306E\u540D\u79F0\u3092\u3042\u308F\u305B\u308B)
            const templateRef = ref(null);
            const props = defineProps({
              // \u3053\u3053\u306Bprops\u3092\u5B9A\u7FA9
            })

            onMounted(() => {
              // \u3053\u3053\u306B\u51E6\u7406\u3092\u8A18\u8FF0
            })
          `,-1)),vw=lt(()=>ue("li",null,[ue("a",{href:"https://v3.ja.vuejs.org/guide/custom-directive.html#%E5%9F%BA%E6%9C%AC",target:"_blank"},"\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6 \u306B\u3064\u3044\u3066")],-1)),yw=lt(()=>ue("li",null,"\u3056\u3063\u304F\u308A\u3044\u3046\u3068\u3001\u8981\u7D20(element)\u306B\u597D\u304D\u306A\u6A5F\u80FD\u3092\u6301\u305F\u305B\u305F\u5C5E\u6027(attribute)\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u541B",-1)),bw=lt(()=>ue("a",{href:"https://github.com/google/budoux"},"budoux",-1)),Mw=lt(()=>ue("pre",null,`            import gsap from 'gsap'
            import ScrollTrigger from "gsap/ScrollTrigger"
            gsap.registerPlugin(ScrollTrigger)

            export const blurDirective = {
              mounted: function(el: HTMLElement) {
                gsap.to(
                  el,
                  {
                    'filter': 'blur(10px)',
                    scrollTrigger: {
                      trigger: el,
                      // markers: true,
                      scrub: true,
                      start: "bottom top+=200",
                      end: "bottom top"
                    }
                  }
                );
                gsap.fromTo(
                  el,
                  {
                    'filter': 'blur(10px)'
                  },
                  {
                    'filter': 'blur(0px)',
                    scrollTrigger: {
                      trigger: el,
                      // markers: true,
                      scrub: true,
                      start: "top bottom",
                      end: "top center"
                    }
                  }
                )
              }
            }
          `,-1)),Sw=lt(()=>ue("pre",null,`            import { loadDefaultJapaneseParser } from 'budoux';
            const parser = loadDefaultJapaneseParser();

            export const budouxDirective = {
              mounted: function(el: HTMLElement) {
                el.innerHTML = parser.translateHTMLString(el.innerHTML)
              }
            }
          `,-1)),ww=lt(()=>ue("pre",null,`            const main = createApp(App)
            main.directive('blur', blurDirective)
            main.directive('budoux', budouxDirective)
            main.mount('#app')
          `,-1)),Ew=lt(()=>ue("ul",null,[ue("li",null,[ue("a",{href:"https://greensock.com/gsap/",target:"_blank"},"GSAP(GreenSock Animation Platform)")]),ue("li",null,"GSAP\u3068\u305D\u306E\u30D7\u30E9\u30B0\u30A4\u30F3ScrollTrigger\u3092\u7528\u3044\u3066\u4F5C\u6210"),ue("li",null,"scrub\u3067\u30B9\u30AF\u30ED\u30FC\u30EB\u4F4D\u7F6E\u306B\u5408\u308F\u305B\u3066\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u52D5\u304F\u306E\u3060\u3051\u3069\u3001\u305D\u308C\u304C\u3081\u3061\u3083\u9762\u767D\u3044\uFF01"),ue("li",null,"\u57FA\u672C\u7684\u306B\u306FCSS\u306Etransition\u3068animation\u3092\u3044\u3044\u611F\u3058\u306B\u6271\u3048\u308B\u69D8\u306B\u3057\u3066\u304F\u308C\u308B\u3082\u306E\u304C\u591A\u3044\u306E\u3067\u3001CSS\u899A\u3048\u3066\u308B\u4EBA\u306B\u306F\u4F7F\u3044\u3084\u3059\u3044\u3068\u611F\u3058\u305F"),ue("li",null,[Me(" \u500B\u4EBA\u7684\u306B\u5B09\u3057\u3044\u306A\u30FC\u3068\u306A\u3063\u305F\u30DD\u30A4\u30F3\u30C8\u306F\u4EE5\u4E0B\u3002 "),ue("ul",null,[ue("li",null,"\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u624B\u7D9A\u304D\u7684\u306B\u5B9F\u884C\u3067\u304D\u308B\u70B9(timeline)"),ue("li",null,"\u30B9\u30AF\u30ED\u30FC\u30EB\u3068\u9023\u52D5\u3057\u305F\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u53EF\u80FD\u306A\u70B9(ScrollTrigger)"),ue("li",null,"IntersectionObserver\u306E\u66F8\u304D\u65B9\u3080\u305A\u3044\u3051\u3069\u3001\u3053\u306E\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u4F7F\u3046\u3068\u7D50\u69CB\u76F4\u611F\u7684\u306B\u304B\u3051\u308B\u70B9")])])],-1)),Tw=lt(()=>ue("p",null," \u4EE5\u4E0B\u306B\u6D3B\u304B\u305B\u305D\u3046\u306A\u4F8B\u3092\u4F5C\u6210\u3057\u3066\u307F\u305F\uFF01 ",-1)),Aw=lt(()=>ue("video",{src:cx,autoplay:"",loop:"",muted:"",playsinline:""},null,-1)),Cw=lt(()=>ue("ul",null,[ue("li",null,"gsap.timeline\u95A2\u6570\u3092\u4F7F\u7528\u3057\u305F"),ue("li",null,"\u3053\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6B21\u306F\u3053\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u2192\u305D\u306E\u6B21\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u2026\u3068\u624B\u7D9A\u304D\u7684\u306B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3067\u304D\u308B"),ue("li",null,"\u30DC\u30FC\u30EB\u304C\u8DF3\u306D\u308B\u2192\u6587\u5B57\u304C\u4E00\u6587\u5B57\u305A\u3064\u8DF3\u306D\u308B\u2192\u6587\u5B57\u304C\u7E2E\u5C0F\u3059\u308B\u2192(\u4E00\u500B\u524D\u3068\u540C\u6642\u306B)\u80CC\u666F\u304C\u900F\u904E\u3059\u308B"),ue("li",null,[Me(" stagger\u3068\u3044\u3046\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u3064\u3051\u308B\u3053\u3068\u3067\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5BFE\u8C61\u306E\u8981\u7D20\u305F\u3061\u3092\u6307\u5B9A\u3057\u305F\u6642\u9593\u5206\u305A\u3089\u3057\u3066\u9806\u6B21\u5B9F\u884C\u3067\u304D\u308B "),ue("ul",null,[ue("li",null,"\u4ECA\u56DE\u306F\u4E00\u6587\u5B57\u305A\u3064\u305A\u308C\u3066\u540C\u3058\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u5B9F\u884C\u3055\u308C\u308B\u3088\u3046\u306B\u3059\u308B\u3068\u3053\u308D\u306B\u9069\u7528\u3057\u3066\u3044\u308B")])])],-1)),Dw=lt(()=>ue("pre",null,`            const props = defineProps({
              startX: {
                type: String,
                default: '0'
              },
              startY: {
                type: String,
                default: '0'
              },
            })

            onMounted(() => {
              gsap.set(
                card.value,
                {
                  x: props.startX,
                  y: props.startY,
                  opacity: 0
                }
              )
              gsap.to(
                card.value,
                {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scrollTrigger: {
                    trigger: card.value,
                    // markers: true,
                    // scrub: true,
                    toggleActions: "play none none reset",
                    start: "top center+=30%",
                    end: "top center-=30%"
                  }
                }
              );
            })
          `,-1)),Fw=lt(()=>ue("li",null,"\u30B9\u30AF\u30ED\u30FC\u30EB\u306E\u969B\u3001\u7279\u5B9A\u8981\u7D20\u304C\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u7279\u5B9A\u4F4D\u7F6E\u306B\u6765\u308B\u3053\u3068\u3092\u30C8\u30EA\u30AC\u30FC\u3068\u3057\u3066\u30B9\u30E9\u30A4\u30C9\u30A4\u30F3\u3059\u308B",-1)),Pw=lt(()=>ue("pre",null,`            gsap.to(
              el,
              {
                'filter': 'blur(10px)',
                scrollTrigger: {
                  trigger: el,
                  // markers: true,
                  scrub: true,
                  start: "bottom top+=200",
                  end: "bottom top"
                }
              }
            );
            gsap.fromTo(
              el,
              {
                'filter': 'blur(10px)'
              },
              {
                'filter': 'blur(0px)',
                scrollTrigger: {
                  trigger: el,
                  // markers: true,
                  scrub: true,
                  start: "top bottom",
                  end: "top center"
                }
              }
            )
          `,-1)),Lw=lt(()=>ue("li",null,"\u30B9\u30AF\u30ED\u30FC\u30EB\u306E\u969B\u3001\u7279\u5B9A\u8981\u7D20\u304C\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u7279\u5B9A\u4F4D\u7F6E\u306B\u6765\u308B\u3053\u3068\u3092\u30C8\u30EA\u30AC\u30FC\u3068\u3057\u3066\u307C\u304B\u3057\u3092\u5165\u308C\u308B",-1)),Rw=lt(()=>ue("li",null,"\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u4E0A\u7AEF\u4E0B\u7AEF\u306B\u6301\u3063\u3066\u304F\u3068\u6319\u52D5\u304C\u78BA\u8A8D\u3067\u304D\u308B",-1)),Bw=lt(()=>ue("li",null,"\u4ECA\u56DE\u306FVue.js\u306E\u7DF4\u7FD2\u3082\u517C\u306D\u3066\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3068\u3057\u3066\u524D\u8FF0\u3057\u305Fblur\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u5B9A\u7FA9\u3057\u305F",-1)),Iw=lt(()=>ue("pre",null,`            const activator = ref();
            const expandBall = ref();

            onMounted(() => {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: activator.value,
                  scrub: true,
                  start: "top bottom",
                  end: "top center"
                }
              });
              tl.to(
                expandBall.value,
                {
                  'width': '300vmax',
                  'height': '300vmax',
                },
              ).fromTo(
                expandBall.value,
                {
                  autoAlpha: 1
                },
                {
                  autoAlpha: 0,
                },
              );
            })
          `,-1)),Uw=lt(()=>ue("li",null,"\u30B9\u30AF\u30ED\u30FC\u30EB\u306E\u969B\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u308B\u8981\u7D20\u3068\u30C8\u30EA\u30AC\u30FC\u3055\u305B\u308B\u8981\u7D20\u3092\u5225\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B",-1)),Ow=lt(()=>ue("ul",null,[ue("li",null,"\u30B9\u30AF\u30ED\u30FC\u30EB\u3092\u7528\u3044\u3066\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3067\u304D\u308B\u3068\u3044\u3046\u3053\u3068\u306F\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u5BFE\u8C61\u3092\u56FA\u5B9A\u3057\u3066\u6A2A\u306B\u79FB\u52D5\u3059\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u9069\u7528\u3057\u3066\u3042\u3052\u308C\u3070\u3001\u7E26\u30B9\u30AF\u30ED\u30FC\u30EB\u3092\u6A2A\u30B9\u30AF\u30ED\u30FC\u30EB\u306E\u69D8\u306B\u898B\u7ACB\u3066\u308B\u3088\u3046\u306A\u898B\u305B\u65B9\u3082\u3067\u304D\u308B"),ue("li",null,"\u4EE5\u4E0B\u306F\u300110\u679A\u306E\u753B\u50CF\u3092\u6A2A\u306B\u4E26\u3079\u305F\u30B5\u30F3\u30D7\u30EB\u3002\u7E26\u30B9\u30AF\u30ED\u30FC\u30EB\u306B\u5FDC\u3058\u3066\u6A2A\u306B\u79FB\u52D5\u3059\u308B(\u6A2A\u30B9\u30AF\u30ED\u30FC\u30EB\u3057\u3066\u3044\u308B\u3088\u3046\u306B\u898B\u3048\u308B)")],-1)),Nw=lt(()=>ue("ul",null,[ue("li",null,[ue("a",{href:"https://threejs.org/",target:"_blank"},"Three.js")]),ue("li",null,"javascript\u30673d\u3092\u3044\u3058\u308C\u308B\u30E9\u30A4\u30D6\u30E9\u30EA\u3002WebGL\u3092\u7D44\u307F\u5408\u308F\u305B\u3089\u308C\u308B\u306E\u3067\u3001GPU\u51E6\u7406\u3067\u304D\u3061\u3083\u3046\uFF01"),ue("li",null,"\u672C\u5F53\u306FWebGL\u76F4\u63A5\u3044\u3058\u308B\u611F\u3058\u3067\u3084\u308D\u3046\u3068\u601D\u3063\u3066\u305F\u3051\u3069\u3001\u30AB\u30B9\u30BF\u30E0\u30B7\u30A7\u30FC\u30C0\u30FC\u306E\u52C9\u5F37\u306E\u305F\u3081\u306B\u4ED6\u306E\u7B87\u6240\u306FThree.js\u306B\u304A\u307E\u304B\u305B\u3057\u305F\u611F\u3058\u306B\u306A\u3063\u305F\u3002\u3002"),ue("li",null,"\u30B7\u30A7\u30FC\u30C0\u30FC\u3092\u3069\u3046\u3057\u3066\u3082\u81EA\u5206\u3067\u4F5C\u6210\u3057\u3066\u307F\u305F\u304F\u3066\u3001\u8272\u3005\u601D\u8003\u932F\u8AA4\u3057\u305F"),ue("li",null,"GLSL\u307E\u3058\u3067\u3080\u305A\u3044\u3051\u3069\u3001\u899A\u3048\u305F\u3089\u7D76\u5BFE\u697D\u3057\u3044\u306E\u304C\u308F\u304B\u3063\u305F"),ue("li",null,"\u884C\u5217\u3068\u30D9\u30AF\u30C8\u30EB\u3092\u3061\u3083\u3093\u3068\u52C9\u5F37\u3057\u305F\u3044\u6C17\u6301\u3061\u306B\u306A\u308A\u307E\u304F\u3063\u3066\u3044\u308B\u2026\uFF01\uFF01\uFF01"),ue("li",null,[Me(" \u4ECA\u56DE\u306F\u767D\u3044\u70B9\u304C\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u306B\u5FDC\u3058\u3066\u56DE\u8EE2\u3059\u308B\u3088\u3046\u306A\u3082\u306E\u3092\u4F5C\u6210\u3057\u3066\u80CC\u666F\u306B\u8A2D\u7F6E\u3057\u305F\uFF01 "),ue("ul",null,[ue("li",null,"BufferGeometry\u3092\u52D5\u7684\u306B\u4F5C\u6210\u3057\u3066\u305D\u308C\u3092\u30B7\u30A7\u30FC\u30C0\u30FC\u306B\u6E21\u3057\u3066\u3053\u306D\u3053\u306D\u3059\u308B\u7B87\u6240\u3067\u3060\u3044\u3076\u82E6\u52B4\u3057\u305F\u3002\u3002\u3046\u307E\u304F\u52D5\u304B\u3093\uFF01\u306A\u3093\u3067\u3048\u3048\u3048\u3048\u306E\u9023\u7D9A")])])],-1)),kw=lt(()=>ue("li",null,"SVG\u306E\u30D1\u30B9\u3092\u63CF\u753B\u3059\u308B\u3088\u3046\u306A\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u305F",-1)),zw=lt(()=>ue("li",null,"\u30B9\u30AF\u30ED\u30FC\u30EB\u306B\u5FDC\u3058\u3066\u5F8C\u308D\u3067\u306B\u3087\u308D\u306B\u3087\u308D\u304C\u52D5\u3044\u3066\u3044\u308B\u306F\u305A\uFF01",-1)),Ww=lt(()=>ue("pre",null,`            const svgPath = targetLine.value as SVGGeometryElement
            const svgPathLength = Math.floor(svgPath.getTotalLength())
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: svgPath,
                // markers: true,
                scrub: true,
                start: "top+=100 top",
                end: "bottom bottom"
              }
            });
            tl.set(
              svgPath,
              {
                'stroke-width': '100px'
              }
            ).fromTo(
              svgPath,
              {
                'stroke-dasharray': svgPathLength,
                'stroke-dashoffset': svgPathLength,
              },
              {
                'stroke-dashoffset': '0'
              }
            );
          `,-1)),Gw=lt(()=>ue("ul",null,[ue("li",null,[ue("strong",null,"Vite"),Me(": \u304B\u3093\u305F\u3093\u65E9\u3044\uFF01")]),ue("li",null,[ue("strong",null,"Vue 3 Composition API"),Me(": \u899A\u3048\u305F\u3044\uFF01TypeScript\u3082\u5408\u308F\u305B\u3066\u5B66\u3076\u305E\uFF01\u3068\u3044\u3046\u6C17\u6301\u3061")]),ue("li",null,[ue("strong",null,"GSAP"),Me(": \u304A\u3082\u3057\u308D\u3044\uFF01\u5B9F\u52D9\u3067\u4F7F\u3048\u308B\u30BF\u30A4\u30DF\u30F3\u30B0\u51FA\u3066\u304D\u305F\u3089\u3044\u3044\u306A\u3042\u2026\uFF01")]),ue("li",null,[ue("strong",null,"Three.js"),Me(": \u5965\u304C\u6DF1\u3044\uFF01\u30B7\u30A7\u30FC\u30C0\u30FC\u3044\u3058\u308C\u305F\u3089\u30DB\u30F3\u30C8\u306B\u697D\u3057\u305D\u3046\uFF01")]),ue("li",null,[ue("strong",null,"SVG"),Me(": \u30D1\u30B9\u63CF\u753B\u3063\u3066\u3053\u3046\u3084\u3063\u3066\u3084\u308B\u3093\u3060\uFF01")])],-1)),Vw=lt(()=>ue("p",null," \u8272\u3005\u3054\u3063\u305F\u716E\u3067\u6C17\u304C\u5411\u3044\u305F\u6642\u306B\u3044\u3058\u3063\u3066\u307F\u3066\u305F\u3051\u3069\u3001\u307E\u3060\u307E\u3060\u77E5\u3089\u306A\u3044\u3053\u3068\u3044\u3063\u3071\u3044\u3060\u306A\u3042\u3042\u3042\u3042\u3068\u306A\u308A\u307E\u3057\u305F\u3002\u3002\u3053\u308C\u304B\u3089\u3082\u697D\u3057\u307F\u3064\u3064\u5B66\u3093\u3067\u884C\u304F\u611F\u3058\u3067\u884C\u304D\u305F\u3044\u6C17\u6301\u3061\u3067\u3059\uFF01 ",-1)),Hw=lt(()=>ue("p",null,[Me(" \u3053\u306E\u30DA\u30FC\u30B8\u306F\u3001"),ue("a",{href:"https://adventar.org/calendars/7720",target:"_blank"},"GMO\u30DA\u30D1\u30DC\u30C7\u30B6\u30A4\u30CA\u30FC Advent Calendar 2022"),Me("\u306E19\u65E5\u76EE\u306E\u6295\u7A3F\u3067\u3057\u305F\uFF01 \u4ED6\u306E\u65B9\u306E\u6295\u7A3F\u3082\u9762\u767D\u3044\u306E\u3067\u305C\u3072\u305C\u3072\u898B\u3066\u307F\u3066\u304F\u3060\u3055\u3044\uFF01\uFF01\uFF01 ")],-1)),Xw=ir({__name:"App",setup(r){return(e,t)=>{const n=Oc("budoux"),i=Oc("blur");return St(),It(xn,null,[ke(cw),ue("main",fw,[ke(Tv),ue("div",hw,[_r((St(),It("p",null,[Me(" \u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u307E\u308F\u308A\u3068\u304B\u6700\u8FD1\u306E\u3084\u308A\u304B\u305F\u8A66\u3057\u305F\u3053\u3068\u306A\u304B\u3063\u305F\u306E\u3067\u8272\u3005\u3044\u3058\u3063\u305F\u308A\u8A66\u3057\u305F\u308A\u3057\u3066\u307F\u307E\u3057\u305F\uFF01 ")])),[[n]])]),ue("article",null,[ke(Kn,null,{heading:Ve(()=>[Me(" Vite\u3092\u4F7F\u3063\u3066\u307F\u305F ")]),default:Ve(()=>[dw]),_:1}),ke(Kn,null,{heading:Ve(()=>[Me(" Vue3 Composition API \u3092\u5229\u7528\u3057\u3066\u307F\u305F ")]),default:Ve(()=>[ue("ul",null,[pw,mw,ue("li",null,[Me(" Options\u8A18\u6CD5\u306B\u6BD4\u3079\u3066\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u5229\u70B9\u304C\u3042\u308B\u3089\u3057\u3044\u3002 "),ue("ul",null,[ue("li",null,[Me("\u540C\u3058\u95A2\u5FC3\u4E8B\u306E\u8A18\u8FF0\u3092\u307E\u3068\u3081\u3089\u308C\u308B(\u78BA\u304B\u306BOptions\u3060\u3068\u3001 "),ke(ht,null,{default:Ve(()=>[Me("data")]),_:1}),Me("\u3084"),ke(ht,null,{default:Ve(()=>[Me("computed")]),_:1}),Me("\u3001"),ke(ht,null,{default:Ve(()=>[Me("methods")]),_:1}),Me("\u306E\u8A18\u8FF0\u304C\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u306E\u30B3\u30FC\u30C9\u304C\u80A5\u5927\u5316\u3059\u308B\u306B\u3064\u308C\u3066\u30D0\u30E9\u3051\u3066\u3057\u307E\u3044\u304C\u3061\u3060\u3063\u305F\u3002)")]),gw])]),_w]),ke(ht,{caption:"\u3068\u3042\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E <script setup> \u30BF\u30B0\u5185"},{default:Ve(()=>[xw]),_:1})]),_:1}),ke(Kn,null,{heading:Ve(()=>[Me(" \u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u4F5C\u6210\u3057\u305F ")]),default:Ve(()=>[ue("ul",null,[vw,yw,ue("li",null,[Me(" \u4ECA\u56DE\u306F"),ke(ht,null,{default:Ve(()=>[Me("v-blur")]),_:1}),Me("\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3068"),ke(ht,null,{default:Ve(()=>[Me("v-budoux")]),_:1}),Me("\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u4F5C\u6210\u3057\u305F\uFF01 "),ue("ul",null,[ue("li",null,[ke(ht,null,{default:Ve(()=>[Me("v-blur")]),_:1}),Me(": \u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u5165\u308B\u3068\u304D\u3068\u51FA\u308B\u6642\u306B\u307C\u304B\u3057\u3092\u5165\u308C\u308B\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3002 \u5F8C\u307B\u3069\u5B9F\u4F8B\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 ")]),ue("li",null,[ke(ht,null,{default:Ve(()=>[Me("v-budoux")]),_:1}),Me(": "),bw,Me(" \u304C\u9069\u7528\u3055\u308C\u3001 \u6587\u7AE0\u304C\u3044\u3044\u611F\u3058\u306E\u6587\u7BC0\u3067\u6298\u308A\u8FD4\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308B (\u3053\u306E\u30DA\u30FC\u30B8\u306E\u898B\u51FA\u3057\u304A\u305D\u3089\u304F\u3044\u3044\u611F\u3058\u306E\u3068\u3053\u308D\u3067\u6298\u308A\u8FD4\u3057\u3066\u308B\u304B\u3068\u601D\u3044\u307E\u3059\uFF01\u3059\u3054\u3044\uFF01) ")])])])]),ke(ht,{caption:"blur.ts"},{default:Ve(()=>[Mw]),_:1}),ke(ht,{caption:"budoux.ts"},{default:Ve(()=>[Sw]),_:1}),ke(ht,{caption:"main.ts"},{default:Ve(()=>[ww]),_:1})]),_:1})]),ue("article",null,[ke(Kn,null,{heading:Ve(()=>[Me(" GSAP\u3092\u5229\u7528\u3057\u3066\u307F\u305F ")]),default:Ve(()=>[Ew,Tw]),_:1}),ke(Kn,null,{default:Ve(()=>[_r((St(),It("h3",null,[Me("timeline\u3092\u7528\u3044\u305F\u6700\u521D\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3")])),[[n]]),Aw,Cw]),_:1}),ke(Kn,{"start-x":"-200"},{default:Ve(()=>[_r((St(),It("h3",null,[Me("\u30B9\u30E9\u30A4\u30C9\u30A4\u30F3\u3055\u305B\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3")])),[[n]]),ke(ht,{caption:"\u30B9\u30E9\u30A4\u30C9\u30A4\u30F3\u3067\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u306Egsap\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u8A18\u8FF0\u90E8\u5206"},{default:Ve(()=>[Dw]),_:1}),ue("ul",null,[Fw,ue("li",null,[Me(" \u4ECA\u56DE\u306FCompositionAPI\u306E\u7DF4\u7FD2\u3082\u517C\u306D\u3066\u3001defineProps\u7528\u3044\u3066\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306Eprops\u3068\u3057\u3066\u5B9A\u7FA9\u3057\u305F "),ue("ul",null,[ue("li",null,[ke(ht,null,{default:Ve(()=>[Me("startX")]),_:1}),Me("\u3082\u3057\u304F\u306F"),ke(ht,null,{default:Ve(()=>[Me("startY")]),_:1}),Me("\u306E\u72EC\u81EAprops\u3092\u6307\u5B9A\u3059\u308B\u3068\u305D\u306E\u4F4D\u7F6E\u304B\u3089\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u3044\u308B\u3088\u3046\u306B\u898B\u3048\u308B")]),ue("li",null,[Me("\u3053\u306E\u30AB\u30FC\u30C9\u306F "),ke(ht,null,{default:Ve(()=>[Me('start-x="-200"')]),_:1}),Me("\u3092\u6307\u5B9A\u3057\u3066\u3044\u308B")])])])])]),_:1}),_r((St(),Vf(Kn,null,{default:Ve(()=>[_r((St(),It("h3",null,[Me("\u4E0A\u7AEF\u4E0B\u7AEF\u3067\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u5165\u308B\u6642\u306B\u307C\u304B\u3059\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3")])),[[n]]),ke(ht,{caption:"\u307C\u304B\u3059\u30A8\u30D5\u30A7\u30AF\u30C8\u306E\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5185\u306Egsap\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u8A18\u8FF0\u90E8\u5206"},{default:Ve(()=>[Pw]),_:1}),ue("ul",null,[Lw,ue("li",null,[ke(ht,null,{default:Ve(()=>[Me("scrub: true;")]),_:1}),Me("\u3068\u3059\u308B\u3053\u3068\u3067\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u4F4D\u7F6E\u3068\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u9032\u884C\u91CF\u3092\u3042\u308F\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u308B(\u304A\u3082\u3057\u308D\u3044\u3044\u3044\u3044)")]),Rw,Bw])]),_:1})),[[i]]),ke(Kn,{style:{"mix-blend-mode":"exclusion"}},{default:Ve(()=>[_r((St(),It("h3",null,[Me("\u80CC\u666F\u3092\u57CB\u3081\u308B\u30A8\u30D5\u30A7\u30AF\u30C8")])),[[n]]),ke(ht,{caption:"\u80CC\u666F\u3092\u57CB\u3081\u308B\u30A8\u30D5\u30A7\u30AF\u30C8\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u306Egsap\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u8A18\u8FF0\u90E8\u5206"},{default:Ve(()=>[Iw]),_:1}),ue("ul",null,[Uw,ue("li",null,[Me("\u4ECA\u56DE\u306F\u3001\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u5165\u3063\u305F\u3089\u3001\u80CC\u666F\u306E"),ke(ht,null,{default:Ve(()=>[Me(".expandBall")]),_:1}),Me("\u3092\u5E83\u3052\u308B\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3066\u307F\u305F")]),ue("li",null,[Me("\u304A\u307E\u3051\u3067\u3001"),ke(ht,{type:"css"},{default:Ve(()=>[Me("mix-blend-mode")]),_:1}),Me("\u3092\u3061\u3083\u3093\u3068\u4F7F\u7528\u3057\u305F\u3053\u3068\u306A\u304B\u3063\u305F\u306E\u3067\u4F7F\u7528\u3057\u3066\u307F\u305F\uFF08\u80CC\u666F\u767D\u306B\u306A\u3063\u3066\u3082\u3061\u3083\u3093\u3068\u8AAD\u3081\u308B\u3088\u3046\u306B\u6587\u5B57\u8272\u304C\u5909\u308F\u3063\u3066\u308B\u306F\u305A\uFF01\uFF09")])])]),_:1}),ke($v),ke(Kn,null,{default:Ve(()=>[_r((St(),It("h3",null,[Me("\u7E26\u30B9\u30AF\u30ED\u30FC\u30EB\u3067\u6A2A\u30B9\u30AF\u30ED\u30FC\u30EB\u3057\u3066\u3044\u308B\u3088\u3046\u306A\u30A8\u30D5\u30A7\u30AF\u30C8")])),[[n]]),Ow]),_:1}),ke(u1,null,{default:Ve(()=>[(St(),It(xn,null,s3(10,s=>ke(i1,{n:s},null,8,["n"])),64))]),_:1})]),ue("article",null,[ke(Kn,null,{heading:Ve(()=>[Me(" Three.js\u3092\u4F7F\u3063\u3066\u80CC\u666F\u3092\u4F5C\u6210\u3057\u305F ")]),default:Ve(()=>[Nw]),_:1})]),ue("article",null,[ke(Xv),ke(Kn,null,{heading:Ve(()=>[Me(" SVG\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u305F ")]),default:Ve(()=>[ue("ul",null,[kw,zw,ue("li",null,[Me("SVG\u306E\u30D1\u30B9\u306E\u9577\u3055\u306F"),ke(ht,null,{default:Ve(()=>[Me("SVGGeometryElement.getTotalLength()")]),_:1}),Me("\u3067\u53D6\u5F97\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\uFF01")]),ue("li",null,[Me(" \u30D1\u30B9\u3092\u63CF\u753B\u3059\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306F"),ke(ht,{type:"css"},{default:Ve(()=>[Me("stroke-dasharray")]),_:1}),Me("\u3068"),ke(ht,{type:"css"},{default:Ve(()=>[Me("stroke-dashoffset")]),_:1}),Me("\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u5B66\u3093\u3060\uFF01 "),ue("ul",null,[ue("li",null,[ke(ht,{type:"css"},{default:Ve(()=>[Me("stroke-dasharray")]),_:1}),Me(": \u7834\u7DDA\u3084\u9593\u9694\u306E\u3042\u308B\u7DDA\u306E\u30D1\u30BF\u30FC\u30F3")]),ue("li",null,[ke(ht,{type:"css"},{default:Ve(()=>[Me("stroke-dashoffset")]),_:1}),Me(": \u7834\u7DDA\u3092\u63CF\u304F\u969B\u306E\u30AA\u30D5\u30BB\u30C3\u30C8\u5024(\u4F55\u30D4\u30AF\u30BB\u30EB\u305A\u3089\u3057\u3066\u30B9\u30BF\u30FC\u30C8\u3059\u308B\u304B)")])]),ue("ol",null,[ue("li",null,[ke(ht,{type:"css"},{default:Ve(()=>[Me("stroke-dasharray")]),_:1}),Me("\u3067\u7834\u7DDA\u306E\u9577\u3055=\u30D1\u30B9\u306E\u9577\u3055\u3068\u3059\u308B")]),ue("li",null,[ke(ht,{type:"css"},{default:Ve(()=>[Me("stroke-dashoffset")]),_:1}),Me("\u3067\u3001\u30D1\u30B9\u306E\u9577\u3055\u5206\u305A\u3089\u3059\u3053\u3068\u3067\u3001\u306A\u306B\u3082\u63CF\u304B\u308C\u3066\u3044\u306A\u3044\u72B6\u614B\u3092\u4F5C\u308A\u51FA\u3059")]),ue("li",null,[Me("CSS\u306A\u308AGSAP\u3067"),ke(ht,{type:"css"},{default:Ve(()=>[Me("stroke-dashoffset")]),_:1}),Me("\u30920\u306B\u8FD1\u3065\u3051\u3066\u884C\u304F\u3053\u3068\u3067\u3001\u5F90\u3005\u306B\u30D1\u30B9\u304C\u63CF\u304B\u308C\u308B\u3088\u3046\u306B\u898B\u3048\u308B")])])])]),ke(ht,null,{default:Ve(()=>[Ww]),_:1})]),_:1})]),ue("article",null,[ke(Kn,null,{heading:Ve(()=>[Me(" \u307E\u3068\u3081 ")]),default:Ve(()=>[Gw,Vw,Hw]),_:1})])],512)],64)}}});const qw=or(Xw,[["__scopeId","data-v-d30ce2f2"]]);Fn.registerPlugin(Qe);const $w={mounted:function(r){Fn.to(r,{filter:"blur(10px)",scrollTrigger:{trigger:r,scrub:!0,start:"bottom top+=200",end:"bottom top"}}),Fn.fromTo(r,{filter:"blur(10px)"},{filter:"blur(0px)",scrollTrigger:{trigger:r,scrub:!0,start:"top bottom",end:"top center"}})}},Yw=[0,128,256,384,592,688,768,880,1024,1280,1328,1424,1536,1792,1872,1920,1984,2048,2112,2144,2208,2304,2432,2560,2688,2816,2944,3072,3200,3328,3456,3584,3712,3840,4096,4256,4352,4608,4992,5024,5120,5760,5792,5888,5920,5952,5984,6016,6144,6320,6400,6480,6528,6624,6656,6688,6832,6912,7040,7104,7168,7248,7296,7312,7360,7376,7424,7552,7616,7680,7936,8192,8304,8352,8400,8448,8528,8592,8704,8960,9216,9280,9312,9472,9600,9632,9728,9984,10176,10224,10240,10496,10624,10752,11008,11264,11360,11392,11520,11568,11648,11744,11776,11904,12032,12272,12288,12352,12448,12544,12592,12688,12704,12736,12784,12800,13056,13312,19904,19968,40960,42128,42192,42240,42560,42656,42752,42784,43008,43056,43072,43136,43232,43264,43312,43360,43392,43488,43520,43616,43648,43744,43776,43824,43888,43968,44032,55216,55296,56192,56320,57344,63744,64256,64336,65024,65040,65056,65072,65104,65136,65280,65520,65536,65664,65792,65856,65936,66e3,66176,66208,66272,66304,66352,66384,66432,66464,66560,66640,66688,66736,66816,66864,67072,67584,67648,67680,67712,67808,67840,67872,67968,68e3,68096,68192,68224,68288,68352,68416,68448,68480,68608,68736,68864,69216,69248,69376,69424,69552,69600,69632,69760,69840,69888,69968,70016,70112,70144,70272,70320,70400,70656,70784,71040,71168,71264,71296,71424,71680,71840,71936,72096,72192,72272,72384,72704,72816,72960,73056,73440,73648,73664,73728,74752,74880,77824,78896,82944,92160,92736,92880,92928,93760,93952,94176,94208,100352,101120,101632,110592,110848,110896,110960,113664,113824,118784,119040,119296,119520,119552,119648,119808,120832,122880,123136,123584,124928,125184,126064,126208,126464,126976,127024,127136,127232,127488,127744,128512,128592,128640,128768,128896,129024,129280,129536,129648,129792,131072,173824,177984,178208,183984,194560,196608,917504,917760,983040,1048576],jw={"BB2:108120":1800,"UB3:107":271,"UB3:120":-857,"TB2:108108108":-417,"TB4:108108108":285,"UB3:109":-583,"UB4:120":388,"BB3:108108":828,"UB4:108":-853,"BB1:108120":-820,"BB1:108107":502,"UB4:107":-708,"TB1:120120108":358,"TB3:108109109":1341,"UB2:107":-586,"TB1:108120108":-451,"TB3:108108108":257,"BB2:109109":-1876,"UW3:\u306F":2052,"UW3:\u306B":1698,"TB3:108120108":-458,"UW3:\u304C":2048,"UW4:\u3053":1182,"UB5:107":-551,"UW3:\u3068":980,"TB4:109109109":773,"UW4:\u3066":-1453,"TB2:108108107":-152,"UW3:\u3002":3201,"UW4:\u304A":2865,"UW3:\u306E":1203,"BB3:120120":144,"BB3:108120":-369,"UW3:\u304A":-2539,"UW3:\u3057":-613,"UW4:\u3001":-3574,"UW4:\u306E":-1111,"UW3:\u3092":3110,"UW4:\u3002":-3022,"UW3:\u3001":2039,"UW5:\u3067":-1091,"UW4:\u3042":1241,"BB2:108108":-560,"UW4:\u3063":-1412,"UW5:\u3063":625,"UW3:\u3082":1350,"UW5:\u3046":297,"UW3:\u300C":-2404,"UW5:\u306A":-595,"UW4:\u305D":1007,"UW4:\u308B":-1829,"UW3:\u3063":-1662,"UW4:\u300C":3213,"UW4:\u3044":270,"BB2:162162":-911,"UB4:162":178,"UW5:\u306B":-727,"BW3:\u3082\u306E":2716,"UW5:\u3057":-484,"UW6:\u3046":-344,"BW2:\u3068\u3044":929,"UW4:\u306B":-1236,"UW3:\u308B":760,"TB2:120108120":-299,"UW4:\u3067":-419,"UW5:\u304C":-728,"BB1:120120":122,"UW5:\u306F":-704,"UW4:\u306F":-605,"UW4:\u308C":-1507,"UW5:\u304D":545,"BB2:120108":-68,"BB2:120120":-320,"UW3:\u30FB":1498,"BB2:120162":953,"BB2:107108":-323,"TB1:108107108":-575,"UW3:\u308C":-673,"BB2:162108":520,"TB2:162162162":-450,"UW4:\u3089":-1767,"TB1:120120120":-247,"UB2:120":56,"TB1:108108162":231,"UW5:\u3059":-764,"UW5:\u3093":536,"UW3:\u3067":794,"UW4:\u304C":-703,"UW3:\u3053":-566,"TB4:120108108":51,"UW3:\u3089":390,"UW6:\u306B":52,"UW6:\u3002":-182,"UW3:\u305F":466,"TB1:107120120":133,"UW5:\u304F":354,"UB1:109":107,"UW1:\u305D":492,"UW3:\u3046":488,"BW3:\u3068\u3044":-1194,"BW3:\u3068\u3053":1145,"UW3:\u307E":-847,"BW3:\u3053\u3068":812,"UW2:\u3063":151,"UW5:\u30FB":-517,"TB3:108108107":-314,"UW3:\u304D":-553,"UW4:\u3093":-783,"UB3:108":-117,"UW3:\u304F":736,"UW3:\u300D":-88,"UW5:\u3042":-598,"BB2:108162":569,"BW3:\u3044\u3046":606,"UW5:\u308C":287,"UW2:\u4E00":744,"UW3:\uFF0C":1739,"UW1:\u306B":-217,"UW2:\u3068":-219,"TB2:120120108":-144,"TB2:120120120":234,"UW5:\u3092":-649,"UW4:\u308A":-757,"BW1:\u304B\u3089":834,"UW3:\u3061":-819,"BW3:\u3044\u3044":869,"UW2:\u306F":-275,"UW6:\u305F":-267,"TB1:109109108":154,"UW4:\uFF11":653,"UW4:\u3084":594,"UW2:\u3093":255,"UW3:\uFF3D":1018,"UW4:\u307B":1124,"TB3:108162162":284,"BW2:\u3067\u3042":-1624,"UW4:\u3060":-372,"BB3:120108":440,"TB1:162162162":-184,"BW3:\u30FB\u30FB":-1936,"BW3:\u3068\u304D":1318,"UW4:\u3092":-1124,"UW3:\u3066":453,"UW4:\u304B":-92,"UW2:\u305D":-343,"TB4:120120108":175,"TB2:108107120":182,"UW2:\u3092":-886,"UW4:\u3054":930,"UW2:\u3067":-223,"TB3:120120120":-57,"BB1:162162":-113,"UW2:\u3057":103,"UW4:\u51FA":-200,"UW2:\u307E":510,"UW4:\uFF0C":-2099,"UW5:\u3068":-498,"UW4:\u3069":385,"BW3:\u3057\u3066":80,"UW1:\u3067":-156,"BB2:107120":360,"BW3:\u305F\u3081":1289,"BW2:\u3068\u3057":771,"BW2:\u306A\u3044":-1114,"BW2:\u3066\u3044":-399,"UW3:\u9593":870,"UW3:\uFF01":1230,"UW5:\u30FC":79,"UW4:\u3059":472,"UW4:\uFF01":-1596,"BW1:\u3068\u304C":-1092,"UW5:\u306E":-572,"TB4:108108120":55,"TB2:107120120":-151,"UW6:\u30FB":-124,"UW3:\uFF0E":1316,"UW2:\u3066":-248,"UW3:\u7B11":1280,"UW2:\u3053":-125,"UW5:\u3082":-284,"BW3:\u3088\u3046":-1023,"UW3:\u4EBA":862,"UW2:\u306E":84,"UW3:\u304B":417,"UW3:\u65E5":568,"UW1:\u3044":-88,"BW2:\u3068\u3053":-528,"UW4:\u79C1":910,"UW3:\u2026":674,"UW2:\u306B":-212,"UW3:\u4ECA":894,"BB3:162108":-121,"UB3:087":1108,"UW4:\uFF08":762,"BB1:162120":260,"UW1:\u306A":-197,"BB3:109109":91,"UW5:\u6765":-53,"UW3:\uFF1F":1117,"TW3:\u3066\u3044\u308B":-645,"UW4:\u300D":-868,"UW4:\u524D":-611,"BW1:\u3044\u3046":220,"UW4:\u3064":422,"UW3:\uFF09":1431,"BW1:\u3067\u306F":-532,"UW2:\u308B":-157,"UW5:\u305D":-476,"UW4:\u30FC":-846,"TW2:\u6C17\u306B\u5165":-1309,"UW4:\u7B11":-1614,"UW4:\u3072":1225,"TB4:162162162":302,"UW4:\u3051":-738,"UW2:\u3082":-260,"BW3:\u3061\u3087":892,"BW3:\u51FA\u6765":-778,"TB2:108120108":-193,"UW4:\u300E":1221,"UW3:\uFF3B":-779,"UW4:\uFF12":489,"UW5:\u3064":420,"TB1:107120108":-85,"UW3:\uFF11":-525,"BW3:\u304B\u3089":-830,"UB5:120":26,"UW4:\u307E":270,"UW3:\u3070":439,"UW3:\u308A":-120,"BW3:\u305D\u306E":1263,"UW3:\u3054":-795,"UW4:\u308F":291,"BW2:\u3066\u304A":-1310,"TB2:120108108":-23,"BW1:\u306A\u3044":347,"UW2:\u3088":312,"UB2:162":-107,"UW6:\u306E":-114,"UW2:\u6BCE":701,"UW2:\u7D50":830,"TW4:\u306E\u4EAC\u90FD":1309,"UW3:\u3055":-451,"UW2:\u6700":260,"BW2:\u3067\u3059":-1080,"UW2:\u300D":536,"UW5:\u3048":188,"UW3:\u3060":-60,"TW4:\u3068\u3053\u308D":643,"UW4:\uFF0E":-1184,"UB1:108":31,"UW6:\u3066":-194,"UW1:\u304C":-51,"BW2:\u3001\u3068":-514,"UW3:\uFF10":-442,"UW3:\u3093":-120,"UW3:\u4E2D":649,"UW4:\u3088":410,"BW3:\u3053\u306E":882,"UW2:\u304C":-75,"UW3:\u307F":-341,"TW2:\u3067\u306F\u306A":-718,"UW6:\u3068":-128,"UW4:\uFF3B":340,"TW3:\u3001\u3042\u308B":-1245,"BW3:\u3053\u308D":-164,"UW4:\uFF1F":-1052,"UW6:\u3001":70,"UW4:\u96FB":-256,"BB1:108072":279,"UW3:\u5F8C":786,"UW5:\u3044":40,"UW2:\u3001":-177,"UW5:\u3066":97,"BB2:108072":-411,"UW3:\u771F":222,"UW3:\u305D":-89,"UW5:\u3055":-277,"UB5:162":-146,"TW3:\u3068\u3044\u3046":414,"UW3:\u5206":483,"UB6:120":21,"BW3:\u306A\u3063":-339,"UW4:\u308D":-406,"BB2:107107":-360,"TW3:\u3068\u3053\u308D":-450,"UB1:120":-14,"UW1:\u3001":-36,"BW1:\u3068\u304B":513,"UW3:\u306A":252,"UW6:\u308A":54,"UW4:\u9593":-501,"UW3:\u3079":-478,"UW5:\u3079":450,"TB4:108120108":-36,"UW4:\uFF3D":-644,"BW2:\u306B\u306F":-392,"UW5:\u3005":714,"BW1:\u3002\u30FB":643,"BW1:\u305D\u306E":-341,"UW1:\u3059":91,"UW4:\uFF09":-1018,"UW6:\u3063":34,"TB3:109109109":-177,"TB3:108120120":123,"UB5:109":80,"BW1:\u304B\u3082":-695,"UW6:\u308B":-44,"TB4:108109109":-357,"UW3:\u3069":253,"TW3:\u3067\u3042\u308B":-389,"TW4:\u304F\u3089\u3044":613,"BW1:\u6700\u8FD1":515,"BW1:\u3057\u3044":418,"BW1:\u3068\u3082":-396,"BW2:\u3068\u540C":-553,"TW1:\u3068\u3044\u3046":193,"UW2:\u3055":298,"BW2:\u5E2F\u96FB":-334,"TB1:120108108":-57,"BW3:\u305D\u3057":-315,"UW2:\u3002":-77,"UW5:\u304B":33,"UW5:\u3053":88,"BW3:\u306A\u3044":137,"BW1:\u3093\u306A":280,"BW2:\u3067\u304D":-448,"UW4:\uFF13":196,"UW3:\u3051":-136,"TW4:\u3053\u3068\u304C":-295,"BW1:\u3053\u3068":-329,"UB3:162":-92,"UW3:\u96FB":-360,"UW3:\u3088":-132,"BW1:\u305F\u3068":-288,"UW5:\u307E":-45,"UW5:\u305F":-43,"UW5:\u3061":174,"UW2:\u3051":75,"UW5:\u3060":-60,"UW3:\u5EA6":330,"BW1:\u305F\u3044":360,"UW4:\u4F7F":217,"UW2:\u304D":130,"TW4:\u304B\u306A\u308A":473,"UB6:109":-41,"BB1:108108":-23,"UW4:\u8FBC":-340,"TW3:\u3068\u8A00\u3063":-530,"UW6:\u3060":-69,"UW5:\u308A":-71,"UW5:\u3088":-115,"BW3:\u3069\u3046":297,"UW4:\u2026":-240,"UW3:\u3084":229,"BW1:\u304B\u3057":507,"BW3:\u304B\u3063":-348,"UW4:\u4ECA":171,"UW3:\u300E":-320,"UW4:\u601D":239,"UB2:109":16,"UW4:\u304F":-195,"UW3:\u4EAC":-277,"UW6:\u30FC":-41,"UW1:\u3093":69,"BW1:\u3046\u306A":280,"TB2:108107107":-264,"UW1:\u3068":30,"TB4:108109108":249,"TB2:107108108":-97,"BW1:\u3053\u306E":-163,"BW2:\u306E\u3067":-221,"UW4:\u307F":96,"UW5:\u308F":83,"UW6:\u3084":82,"BW1:\u308C\u3066":-218,"UW2:\u3084":-93,"UW6:\u3053":-53,"UW4:\u306A":40,"UW5:\u3081":28,"BW1:\u3082\u3046":285,"TB4:120108120":27,"BW1:\u3088\u308A":283,"UW4:\u5408":-211,"UW6:\u3051":-92,"BW1:\u5C11\u3057":214,"BW2:\u3067\u3057":-225,"UW4:\u3068":-54,"TB1:109109109":53,"UW3:\u30FC":105,"BW2:\u304F\u306A":-198,"UW2:\u304F":-53,"UW2:\u6211":-277,"BW2:\u3044\u3082":198,"BW3:\u308F\u304B":184,"TB2:120109120":-264,"UW4:\u3082":-106,"UW1:\u3042":14,"UW4:\u6700":185,"BW1:\u308B\u306E":-155,"UW2:\u5168":185,"UW6:\uFF10":106,"UW4:\u653E":-119,"UW4:\u4EAC":53,"BW3:\u304B\u3051":208,"UW2:\u5C11":92,"BW3:\u3082\u3046":262,"UW2:\u591A":106,"UW2:\u3046":-52,"TB1:108108072":105,"UW1:\u3092":-25,"UW3:\u5149":-79,"BW1:\uFF01\uFF01":104,"UW2:\u30E3":141,"BW3:\u3059\u3050":129,"UW4:\u5E2F":-114,"UW6:\u3057":26,"BW3:\u3067\u3082":64,"BW2:\u3001\u305D":-113,"TB3:120162162":26,"TB2:109108120":77,"UW3:\u308F":-64,"UB4:109":13,"TB4:120120120":13,"UW5:\u90FD":26,"UW5:\u305A":89,"UW2:\u30D0":115,"UW2:\u4EAC":-49,"UW3:\u3083":89,"BW1:\u3044\u3001":-114,"BW3:\u3088\u304F":51,"BW1:\u305F\u3089":64,"BW2:\u306E\u3088":-64,"UW2:\u601D":-51,"BW1:\u3046\u306B":-38,"BW1:\u306E\u9593":89,"UW6:\u3093":13,"UW6:\u305A":-64,"BW1:\u3063\u305F":13,"TW3:\u308B\u3053\u3068":-48,"BW3:\u3068\u3066":76,"TW1:\u3088\u3046\u306A":63,"UW6:\u3071":62,"TB3:109120108":13,"TW4:\u3063\u3066\u3001":112,"TW4:\u306A\u3093\u3066":-76,"TW2:\u305D\u306E\u5F8C":-50,"UW6:\u3089":-13,"TW4:\u3053\u3068\u306B":-49,"UW3:\uFF1E":63,"TW3:\u3066\u3057\u307E":-50,"UW3:\u3044":13,"TB4:120108107":13,"UW2:\u3072":-50,"UW6:\u3081":24,"UW6:\u3067":-12,"BW3:\u306A\u308B":24,"UW5:\u3054":12,"BW2:\u308A\u3057":24,"UW6:\u96FB":12,"UW1:\u306F":-12,"BW1:\u3044\u3082":-24,"BW3:\u3059\u3054":12,"UW4:\u901A":-12,"BW3:\u304A\u308A":-12,"BW3:\u304B\u304B":12,"BW1:\u601D\u3044":-12};/**
 * @license
 * Copyright 2021 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=r=>new DOMParser().parseFromString(r,"text/html");/**
 * @license
 * Copyright 2021 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=console.assert,Kw="\u200B",Dc={ELEMENT_NODE:1,TEXT_NODE:3},$e={Inline:0,Block:1,Skip:2,Break:3},Jw={AREA:$e.Skip,BASE:$e.Skip,BASEFONT:$e.Skip,DATALIST:$e.Skip,HEAD:$e.Skip,LINK:$e.Skip,META:$e.Skip,NOEMBED:$e.Skip,NOFRAMES:$e.Skip,PARAM:$e.Skip,RP:$e.Skip,SCRIPT:$e.Skip,STYLE:$e.Skip,TEMPLATE:$e.Skip,TITLE:$e.Skip,NOSCRIPT:$e.Skip,HR:$e.Break,LISTING:$e.Skip,PLAINTEXT:$e.Skip,PRE:$e.Skip,XMP:$e.Skip,BR:$e.Break,RT:$e.Skip,INPUT:$e.Skip,SELECT:$e.Skip,BUTTON:$e.Skip,TEXTAREA:$e.Skip,ABBR:$e.Skip,CODE:$e.Skip,IFRAME:$e.Skip,TIME:$e.Skip,VAR:$e.Skip},Qw=new Set(["HTML","BODY","ADDRESS","BLOCKQUOTE","CENTER","DIALOG","DIV","FIGURE","FIGCAPTION","FOOTER","FORM","HEADER","LEGEND","LISTING","MAIN","P","ARTICLE","ASIDE","H1","H2","H3","H4","H5","H6","HGROUP","NAV","SECTION","DIR","DD","DL","DT","MENU","OL","UL","LI","TABLE","CAPTION","COL","TR","TD","TH","FIELDSET","DETAILS","SUMMARY","MARQUEE"]);function eE(r){const e=r.nodeName,t=Jw[e];if(t!==void 0)return t;if(typeof getComputedStyle=="function"){const n=getComputedStyle(r);switch(n.whiteSpace){case"nowrap":case"pre":return $e.Skip}const i=n.display;if(i)return i==="inline"?$e.Inline:$e.Block}return Qw.has(e)?$e.Block:$e.Inline}class tE{constructor(e){this.textNodes=[],this.element=e}hasText(){return this.textNodes.length>0}}class nE{constructor(e,t){this.separator=Kw,this.parser_=e,t!==void 0&&(t.className!==void 0&&(this.className=t.className),t.separator!==void 0&&(this.separator=t.separator))}applyToElement(e){for(const t of this.getBlocks(e))yt(t.hasText()),this.applyToParagraph(t)}*getBlocks(e,t){if(yt(e.nodeType===Dc.ELEMENT_NODE),this.className&&e.classList.contains(this.className))return;const n=eE(e);if(n===$e.Skip)return;if(n===$e.Break){t&&t.hasText()&&(yield t,t.textNodes=[]),yt(!e.firstChild);return}yt(n===$e.Block||n===$e.Inline);const i=!t||n===$e.Block,s=i?new tE(e):t;yt(s);for(const o of e.childNodes)switch(o.nodeType){case Dc.ELEMENT_NODE:for(const a of this.getBlocks(o,s))yield a;break;case Dc.TEXT_NODE:s.textNodes.push(o);break}i&&s.hasText()&&(yield s)}applyToParagraph(e){const t=e.textNodes;yt(t.length>0);const i=t.map(u=>u.nodeValue).join("");if(/^\s*$/.test(i))return;const s=this.parser_.parse(i);if(yt(s.length>0),yt(s.reduce((u,l)=>u+l.length,0)===i.length),s.length<=1)return;const o=[];let a=0;for(const u of s)yt(u.length>0),a+=u.length,o.push(a);yt(o[0]>0),yt(o[o.length-1]===i.length),++o[o.length-1],yt(o.length>1),this.splitTextNodes(t,o),this.applyBlockStyle(e.element)}splitTextNodes(e,t){yt(t.length>0);const n=e.reduce((a,u)=>a+(u.nodeValue?u.nodeValue.length:0),0);yt(t[t.length-1]>n);let i=0,s=t[0];yt(s>0);let o=0;for(const a of e){const u=a.nodeValue;if(!u)continue;const l=o+u.length;if(s>=l){o=l;continue}const c=[];let h=0;for(;s<l;){const f=s-o;yt(f>=h),c.push(u.substring(h,f)),h=f,++i,yt(t[i]>s),s=t[i]}yt(c.length>0),h<u.length&&c.push(u.substring(h)),this.splitTextNode(a,c),o=l}yt(o===n),yt(i<t.length),yt(t[i]>=n)}splitTextNode(e,t){yt(t.length>1),yt(e.nodeValue===t.join(""));const n=this.separator;if(typeof n=="string"){e.nodeValue=t.join(n);return}const i=e.ownerDocument;let s=[];for(const o of t)o&&s.push(i.createTextNode(o)),s.push(null);s.pop(),s=s.map(o=>o||n.cloneNode(!0)),e.replaceWith(...s)}applyBlockStyle(e){if(this.className){e.classList.add(this.className);return}const t=e.style;t.wordBreak="keep-all",t.overflowWrap="break-word"}static defineClassAs(e,t){const n=e.createElement("style");n.textContent=`.${t} { word-break: keep-all; overflow-wrap: break-word; }`,e.head.appendChild(n)}}/**
 * @license
 * Copyright 2021 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=(r,e)=>{const t=Math.floor(r.length/2);return e===r[t]?t+1:e<r[t]?r.length===1?0:Ef(r.slice(0,t),e):r.length===1?1:t+Ef(r.slice(t),e)},zp=r=>r.reduce((e,t)=>e+t,0),gr="\u2594";/**
 * @license
 * Copyright 2021 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE={ELEMENT:1,TEXT:3};class Ai{constructor(e){this.model=e}static getUnicodeBlockFeature(e){if(!e||e===gr)return gr;const t=e.codePointAt(0);return t===void 0?gr:`${Ef(Yw,t)}`.padStart(3,"0")}static getFeature(e,t,n,i,s,o){const a=Ai.getUnicodeBlockFeature(e),u=Ai.getUnicodeBlockFeature(t),l=Ai.getUnicodeBlockFeature(n),c=Ai.getUnicodeBlockFeature(i),h=Ai.getUnicodeBlockFeature(s),f=Ai.getUnicodeBlockFeature(o),m={UW1:e,UW2:t,UW3:n,UW4:i,UW5:s,UW6:o,BW1:t+n,BW2:n+i,BW3:i+s,TW1:e+t+n,TW2:t+n+i,TW3:n+i+s,TW4:i+s+o,UB1:a,UB2:u,UB3:l,UB4:c,UB5:h,UB6:f,BB1:u+l,BB2:l+c,BB3:c+h,TB1:a+u+l,TB2:u+l+c,TB3:l+c+h,TB4:c+h+f};return Object.entries(m).filter(g=>!g[1].includes(gr)).map(([g,d])=>`${g}:${d}`)}static hasChildTextNode(e){for(const t of e.childNodes)if(t.nodeType===iE.TEXT)return!0;return!1}parse(e){if(e==="")return[];const t=[e[0]],n=-zp([...this.model.values()]);for(let i=1;i<e.length;i++){const s=Ai.getFeature(e[i-3]||gr,e[i-2]||gr,e[i-1],e[i],e[i+1]||gr,e[i+2]||gr);n+2*zp(s.map(a=>this.model.get(a)||0))>0&&t.push(""),t[t.length-1]+=e[i]}return t}applyElement(e){new nE(this,{separator:e.ownerDocument.createElement("wbr")}).applyToElement(e)}translateHTMLString(e){if(e==="")return e;const t=Zw(e);if(Ai.hasChildTextNode(t.body)){const n=t.createElement("span");n.append(...t.body.childNodes),t.body.append(n)}return this.applyElement(t.body.childNodes[0]),t.body.innerHTML}}const rE=()=>new Ai(new Map(Object.entries(jw))),sE=rE(),oE={mounted:function(r){r.innerHTML=sE.translateHTMLString(r.innerHTML)}},gh=ux(qw);gh.directive("blur",$w);gh.directive("budoux",oE);gh.mount("#app");
