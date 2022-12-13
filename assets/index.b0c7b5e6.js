(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Tf(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function Ql(r){if(Ye(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=zt(n)?Bg(n):Ql(n);if(i)for(const s in i)e[s]=i[s]}return e}else{if(zt(r))return r;if(Et(r))return r}}const Lg=/;(?![^(]*\))/g,Fg=/:([^]+)/,Rg=/\/\*.*?\*\//gs;function Bg(r){const e={};return r.replace(Rg,"").split(Lg).forEach(t=>{if(t){const n=t.split(Fg);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function ua(r){let e="";if(zt(r))e=r;else if(Ye(r))for(let t=0;t<r.length;t++){const n=ua(r[t]);n&&(e+=n+" ")}else if(Et(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const Ig="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ug=Tf(Ig);function Wp(r){return!!r||r===""}const Og=r=>zt(r)?r:r==null?"":Ye(r)||Et(r)&&(r.toString===Xp||!Ze(r.toString))?JSON.stringify(r,Vp,2):String(r),Vp=(r,e)=>e&&e.__v_isRef?Vp(r,e.value):io(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,i])=>(t[`${n} =>`]=i,t),{})}:Gp(e)?{[`Set(${e.size})`]:[...e.values()]}:Et(e)&&!Ye(e)&&!qp(e)?String(e):e,xt={},no=[],Si=()=>{},Ng=()=>!1,kg=/^on[^a-z]/,eu=r=>kg.test(r),Ef=r=>r.startsWith("onUpdate:"),un=Object.assign,Af=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},zg=Object.prototype.hasOwnProperty,lt=(r,e)=>zg.call(r,e),Ye=Array.isArray,io=r=>tu(r)==="[object Map]",Gp=r=>tu(r)==="[object Set]",Ze=r=>typeof r=="function",zt=r=>typeof r=="string",Cf=r=>typeof r=="symbol",Et=r=>r!==null&&typeof r=="object",Hp=r=>Et(r)&&Ze(r.then)&&Ze(r.catch),Xp=Object.prototype.toString,tu=r=>Xp.call(r),Wg=r=>tu(r).slice(8,-1),qp=r=>tu(r)==="[object Object]",Df=r=>zt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,bl=Tf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nu=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},Vg=/-(\w)/g,zi=nu(r=>r.replace(Vg,(e,t)=>t?t.toUpperCase():"")),Gg=/\B([A-Z])/g,Do=nu(r=>r.replace(Gg,"-$1").toLowerCase()),iu=nu(r=>r.charAt(0).toUpperCase()+r.slice(1)),Tu=nu(r=>r?`on${iu(r)}`:""),ca=(r,e)=>!Object.is(r,e),Eu=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},Ul=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},$p=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let xh;const Hg=()=>xh||(xh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ai;class Xg{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ai,!e&&Ai&&(this.index=(Ai.scopes||(Ai.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Ai;try{return Ai=this,e()}finally{Ai=t}}}on(){Ai=this}off(){Ai=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function qg(r,e=Ai){e&&e.active&&e.effects.push(r)}const Pf=r=>{const e=new Set(r);return e.w=0,e.n=0,e},Yp=r=>(r.w&Br)>0,jp=r=>(r.n&Br)>0,$g=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=Br},Yg=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];Yp(i)&&!jp(i)?i.delete(r):e[t++]=i,i.w&=~Br,i.n&=~Br}e.length=t}},Pc=new WeakMap;let Vo=0,Br=1;const Lc=30;let vi;const fs=Symbol(""),Fc=Symbol("");class Lf{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,qg(this,n)}run(){if(!this.active)return this.fn();let e=vi,t=Cr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=vi,vi=this,Cr=!0,Br=1<<++Vo,Vo<=Lc?$g(this):vh(this),this.fn()}finally{Vo<=Lc&&Yg(this),Br=1<<--Vo,vi=this.parent,Cr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){vi===this?this.deferStop=!0:this.active&&(vh(this),this.onStop&&this.onStop(),this.active=!1)}}function vh(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let Cr=!0;const Zp=[];function Po(){Zp.push(Cr),Cr=!1}function Lo(){const r=Zp.pop();Cr=r===void 0?!0:r}function qn(r,e,t){if(Cr&&vi){let n=Pc.get(r);n||Pc.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=Pf()),Kp(i)}}function Kp(r,e){let t=!1;Vo<=Lc?jp(r)||(r.n|=Br,t=!Yp(r)):t=!r.has(vi),t&&(r.add(vi),vi.deps.push(r))}function tr(r,e,t,n,i,s){const o=Pc.get(r);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ye(r)){const l=$p(n);o.forEach((u,c)=>{(c==="length"||c>=l)&&a.push(u)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ye(r)?Df(t)&&a.push(o.get("length")):(a.push(o.get(fs)),io(r)&&a.push(o.get(Fc)));break;case"delete":Ye(r)||(a.push(o.get(fs)),io(r)&&a.push(o.get(Fc)));break;case"set":io(r)&&a.push(o.get(fs));break}if(a.length===1)a[0]&&Rc(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);Rc(Pf(l))}}function Rc(r,e){const t=Ye(r)?r:[...r];for(const n of t)n.computed&&yh(n);for(const n of t)n.computed||yh(n)}function yh(r,e){(r!==vi||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const jg=Tf("__proto__,__v_isRef,__isVue"),Jp=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(Cf)),Zg=Ff(),Kg=Ff(!1,!0),Jg=Ff(!0),bh=Qg();function Qg(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=ft(this);for(let s=0,o=this.length;s<o;s++)qn(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(ft)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){Po();const n=ft(this)[e].apply(this,t);return Lo(),n}}),r}function Ff(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(r?e?m_:i0:e?n0:t0).get(n))return n;const o=Ye(n);if(!r&&o&&lt(bh,i))return Reflect.get(bh,i,s);const a=Reflect.get(n,i,s);return(Cf(i)?Jp.has(i):jg(i))||(r||qn(n,"get",i),e)?a:on(a)?o&&Df(i)?a:a.value:Et(a)?r?r0(a):If(a):a}}const e_=Qp(),t_=Qp(!0);function Qp(r=!1){return function(t,n,i,s){let o=t[n];if(po(o)&&on(o)&&!on(i))return!1;if(!r&&(!Ol(i)&&!po(i)&&(o=ft(o),i=ft(i)),!Ye(t)&&on(o)&&!on(i)))return o.value=i,!0;const a=Ye(t)&&Df(n)?Number(n)<t.length:lt(t,n),l=Reflect.set(t,n,i,s);return t===ft(s)&&(a?ca(i,o)&&tr(t,"set",n,i):tr(t,"add",n,i)),l}}function n_(r,e){const t=lt(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&tr(r,"delete",e,void 0),n}function i_(r,e){const t=Reflect.has(r,e);return(!Cf(e)||!Jp.has(e))&&qn(r,"has",e),t}function r_(r){return qn(r,"iterate",Ye(r)?"length":fs),Reflect.ownKeys(r)}const e0={get:Zg,set:e_,deleteProperty:n_,has:i_,ownKeys:r_},s_={get:Jg,set(r,e){return!0},deleteProperty(r,e){return!0}},o_=un({},e0,{get:Kg,set:t_}),Rf=r=>r,ru=r=>Reflect.getPrototypeOf(r);function Ra(r,e,t=!1,n=!1){r=r.__v_raw;const i=ft(r),s=ft(e);t||(e!==s&&qn(i,"get",e),qn(i,"get",s));const{has:o}=ru(i),a=n?Rf:t?Of:fa;if(o.call(i,e))return a(r.get(e));if(o.call(i,s))return a(r.get(s));r!==i&&r.get(e)}function Ba(r,e=!1){const t=this.__v_raw,n=ft(t),i=ft(r);return e||(r!==i&&qn(n,"has",r),qn(n,"has",i)),r===i?t.has(r):t.has(r)||t.has(i)}function Ia(r,e=!1){return r=r.__v_raw,!e&&qn(ft(r),"iterate",fs),Reflect.get(r,"size",r)}function Mh(r){r=ft(r);const e=ft(this);return ru(e).has.call(e,r)||(e.add(r),tr(e,"add",r,r)),this}function Sh(r,e){e=ft(e);const t=ft(this),{has:n,get:i}=ru(t);let s=n.call(t,r);s||(r=ft(r),s=n.call(t,r));const o=i.call(t,r);return t.set(r,e),s?ca(e,o)&&tr(t,"set",r,e):tr(t,"add",r,e),this}function wh(r){const e=ft(this),{has:t,get:n}=ru(e);let i=t.call(e,r);i||(r=ft(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&tr(e,"delete",r,void 0),s}function Th(){const r=ft(this),e=r.size!==0,t=r.clear();return e&&tr(r,"clear",void 0,void 0),t}function Ua(r,e){return function(n,i){const s=this,o=s.__v_raw,a=ft(o),l=e?Rf:r?Of:fa;return!r&&qn(a,"iterate",fs),o.forEach((u,c)=>n.call(i,l(u),l(c),s))}}function Oa(r,e,t){return function(...n){const i=this.__v_raw,s=ft(i),o=io(s),a=r==="entries"||r===Symbol.iterator&&o,l=r==="keys"&&o,u=i[r](...n),c=t?Rf:e?Of:fa;return!e&&qn(s,"iterate",l?Fc:fs),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[c(h[0]),c(h[1])]:c(h),done:f}},[Symbol.iterator](){return this}}}}function ur(r){return function(...e){return r==="delete"?!1:this}}function a_(){const r={get(s){return Ra(this,s)},get size(){return Ia(this)},has:Ba,add:Mh,set:Sh,delete:wh,clear:Th,forEach:Ua(!1,!1)},e={get(s){return Ra(this,s,!1,!0)},get size(){return Ia(this)},has:Ba,add:Mh,set:Sh,delete:wh,clear:Th,forEach:Ua(!1,!0)},t={get(s){return Ra(this,s,!0)},get size(){return Ia(this,!0)},has(s){return Ba.call(this,s,!0)},add:ur("add"),set:ur("set"),delete:ur("delete"),clear:ur("clear"),forEach:Ua(!0,!1)},n={get(s){return Ra(this,s,!0,!0)},get size(){return Ia(this,!0)},has(s){return Ba.call(this,s,!0)},add:ur("add"),set:ur("set"),delete:ur("delete"),clear:ur("clear"),forEach:Ua(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=Oa(s,!1,!1),t[s]=Oa(s,!0,!1),e[s]=Oa(s,!1,!0),n[s]=Oa(s,!0,!0)}),[r,t,e,n]}const[l_,u_,c_,f_]=a_();function Bf(r,e){const t=e?r?f_:c_:r?u_:l_;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(lt(t,i)&&i in n?t:n,i,s)}const h_={get:Bf(!1,!1)},d_={get:Bf(!1,!0)},p_={get:Bf(!0,!1)},t0=new WeakMap,n0=new WeakMap,i0=new WeakMap,m_=new WeakMap;function g_(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function __(r){return r.__v_skip||!Object.isExtensible(r)?0:g_(Wg(r))}function If(r){return po(r)?r:Uf(r,!1,e0,h_,t0)}function x_(r){return Uf(r,!1,o_,d_,n0)}function r0(r){return Uf(r,!0,s_,p_,i0)}function Uf(r,e,t,n,i){if(!Et(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const o=__(r);if(o===0)return r;const a=new Proxy(r,o===2?n:t);return i.set(r,a),a}function ro(r){return po(r)?ro(r.__v_raw):!!(r&&r.__v_isReactive)}function po(r){return!!(r&&r.__v_isReadonly)}function Ol(r){return!!(r&&r.__v_isShallow)}function s0(r){return ro(r)||po(r)}function ft(r){const e=r&&r.__v_raw;return e?ft(e):r}function o0(r){return Ul(r,"__v_skip",!0),r}const fa=r=>Et(r)?If(r):r,Of=r=>Et(r)?r0(r):r;function a0(r){Cr&&vi&&(r=ft(r),Kp(r.dep||(r.dep=Pf())))}function l0(r,e){r=ft(r),r.dep&&Rc(r.dep)}function on(r){return!!(r&&r.__v_isRef===!0)}function Oi(r){return v_(r,!1)}function v_(r,e){return on(r)?r:new y_(r,e)}class y_{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ft(e),this._value=t?e:fa(e)}get value(){return a0(this),this._value}set value(e){const t=this.__v_isShallow||Ol(e)||po(e);e=t?e:ft(e),ca(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:fa(e),l0(this))}}function b_(r){return on(r)?r.value:r}const M_={get:(r,e,t)=>b_(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return on(i)&&!on(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function u0(r){return ro(r)?r:new Proxy(r,M_)}var c0;class S_{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[c0]=!1,this._dirty=!0,this.effect=new Lf(e,()=>{this._dirty||(this._dirty=!0,l0(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=ft(this);return a0(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}c0="__v_isReadonly";function w_(r,e,t=!1){let n,i;const s=Ze(r);return s?(n=r,i=Si):(n=r.get,i=r.set),new S_(n,i,s||!i,t)}function Dr(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){su(s,e,t)}return i}function oi(r,e,t,n){if(Ze(r)){const s=Dr(r,e,t,n);return s&&Hp(s)&&s.catch(o=>{su(o,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(oi(r[s],e,t,n));return i}function su(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const u=s.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](r,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Dr(l,null,10,[r,o,a]);return}}T_(r,t,i,n)}function T_(r,e,t,n=!0){console.error(r)}let ha=!1,Bc=!1;const rn=[];let Ri=0;const so=[];let $i=null,ts=0;const f0=Promise.resolve();let Nf=null;function E_(r){const e=Nf||f0;return r?e.then(this?r.bind(this):r):e}function A_(r){let e=Ri+1,t=rn.length;for(;e<t;){const n=e+t>>>1;da(rn[n])<r?e=n+1:t=n}return e}function kf(r){(!rn.length||!rn.includes(r,ha&&r.allowRecurse?Ri+1:Ri))&&(r.id==null?rn.push(r):rn.splice(A_(r.id),0,r),h0())}function h0(){!ha&&!Bc&&(Bc=!0,Nf=f0.then(p0))}function C_(r){const e=rn.indexOf(r);e>Ri&&rn.splice(e,1)}function D_(r){Ye(r)?so.push(...r):(!$i||!$i.includes(r,r.allowRecurse?ts+1:ts))&&so.push(r),h0()}function Eh(r,e=ha?Ri+1:0){for(;e<rn.length;e++){const t=rn[e];t&&t.pre&&(rn.splice(e,1),e--,t())}}function d0(r){if(so.length){const e=[...new Set(so)];if(so.length=0,$i){$i.push(...e);return}for($i=e,$i.sort((t,n)=>da(t)-da(n)),ts=0;ts<$i.length;ts++)$i[ts]();$i=null,ts=0}}const da=r=>r.id==null?1/0:r.id,P_=(r,e)=>{const t=da(r)-da(e);if(t===0){if(r.pre&&!e.pre)return-1;if(e.pre&&!r.pre)return 1}return t};function p0(r){Bc=!1,ha=!0,rn.sort(P_);const e=Si;try{for(Ri=0;Ri<rn.length;Ri++){const t=rn[Ri];t&&t.active!==!1&&Dr(t,null,14)}}finally{Ri=0,rn.length=0,d0(),ha=!1,Nf=null,(rn.length||so.length)&&p0()}}function L_(r,e,...t){if(r.isUnmounted)return;const n=r.vnode.props||xt;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[c]||xt;f&&(i=t.map(m=>zt(m)?m.trim():m)),h&&(i=t.map($p))}let a,l=n[a=Tu(e)]||n[a=Tu(zi(e))];!l&&s&&(l=n[a=Tu(Do(e))]),l&&oi(l,r,6,i);const u=n[a+"Once"];if(u){if(!r.emitted)r.emitted={};else if(r.emitted[a])return;r.emitted[a]=!0,oi(u,r,6,i)}}function m0(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let o={},a=!1;if(!Ze(r)){const l=u=>{const c=m0(u,e,!0);c&&(a=!0,un(o,c))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!a?(Et(r)&&n.set(r,null),null):(Ye(s)?s.forEach(l=>o[l]=null):un(o,s),Et(r)&&n.set(r,o),o)}function ou(r,e){return!r||!eu(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(r,e[0].toLowerCase()+e.slice(1))||lt(r,Do(e))||lt(r,e))}let Qt=null,au=null;function Nl(r){const e=Qt;return Qt=r,au=r&&r.type.__scopeId||null,e}function F_(r){au=r}function R_(){au=null}function dt(r,e=Qt,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&Oh(-1);const s=Nl(e);let o;try{o=r(...i)}finally{Nl(s),n._d&&Oh(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Au(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:u,render:c,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:d}=r;let p,x;const b=Nl(r);try{if(t.shapeFlag&4){const y=i||n;p=Li(c.call(y,y,h,s,m,f,g)),x=l}else{const y=e;p=Li(y.length>1?y(s,{attrs:l,slots:a,emit:u}):y(s,null)),x=e.props?l:B_(l)}}catch(y){Jo.length=0,su(y,r,1),p=it(ai)}let _=p;if(x&&d!==!1){const y=Object.keys(x),{shapeFlag:M}=_;y.length&&M&7&&(o&&y.some(Ef)&&(x=I_(x,o)),_=Ir(_,x))}return t.dirs&&(_=Ir(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),p=_,Nl(b),p}const B_=r=>{let e;for(const t in r)(t==="class"||t==="style"||eu(t))&&((e||(e={}))[t]=r[t]);return e},I_=(r,e)=>{const t={};for(const n in r)(!Ef(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function U_(r,e,t){const{props:n,children:i,component:s}=r,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Ah(n,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const f=c[h];if(o[f]!==n[f]&&!ou(u,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Ah(n,o,u):!0:!!o;return!1}function Ah(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!ou(t,s))return!0}return!1}function O_({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const N_=r=>r.__isSuspense;function k_(r,e){e&&e.pendingBranch?Ye(r)?e.effects.push(...r):e.effects.push(r):D_(r)}function z_(r,e){if(qt){let t=qt.provides;const n=qt.parent&&qt.parent.provides;n===t&&(t=qt.provides=Object.create(n)),t[r]=e}}function Ml(r,e,t=!1){const n=qt||Qt;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&Ze(e)?e.call(n.proxy):e}}const Na={};function Cu(r,e,t){return g0(r,e,t)}function g0(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:o}=xt){const a=qt;let l,u=!1,c=!1;if(on(r)?(l=()=>r.value,u=Ol(r)):ro(r)?(l=()=>r,n=!0):Ye(r)?(c=!0,u=r.some(_=>ro(_)||Ol(_)),l=()=>r.map(_=>{if(on(_))return _.value;if(ro(_))return os(_);if(Ze(_))return Dr(_,a,2)})):Ze(r)?e?l=()=>Dr(r,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),oi(r,a,3,[f])}:l=Si,e&&n){const _=l;l=()=>os(_())}let h,f=_=>{h=x.onStop=()=>{Dr(_,a,4)}},m;if(ga)if(f=Si,e?t&&oi(e,a,3,[l(),c?[]:void 0,f]):l(),i==="sync"){const _=zx();m=_.__watcherHandles||(_.__watcherHandles=[])}else return Si;let g=c?new Array(r.length).fill(Na):Na;const d=()=>{if(!!x.active)if(e){const _=x.run();(n||u||(c?_.some((y,M)=>ca(y,g[M])):ca(_,g)))&&(h&&h(),oi(e,a,3,[_,g===Na?void 0:c&&g[0]===Na?[]:g,f]),g=_)}else x.run()};d.allowRecurse=!!e;let p;i==="sync"?p=d:i==="post"?p=()=>bn(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),p=()=>kf(d));const x=new Lf(l,p);e?t?d():g=x.run():i==="post"?bn(x.run.bind(x),a&&a.suspense):x.run();const b=()=>{x.stop(),a&&a.scope&&Af(a.scope.effects,x)};return m&&m.push(b),b}function W_(r,e,t){const n=this.proxy,i=zt(r)?r.includes(".")?_0(n,r):()=>n[r]:r.bind(n,n);let s;Ze(e)?s=e:(s=e.handler,t=e);const o=qt;mo(this);const a=g0(i,s.bind(n),t);return o?mo(o):hs(),a}function _0(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function os(r,e){if(!Et(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),on(r))os(r.value,e);else if(Ye(r))for(let t=0;t<r.length;t++)os(r[t],e);else if(Gp(r)||io(r))r.forEach(t=>{os(t,e)});else if(qp(r))for(const t in r)os(r[t],e);return r}function V_(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return or(()=>{r.isMounted=!0}),b0(()=>{r.isUnmounting=!0}),r}const Zn=[Function,Array],G_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zn,onEnter:Zn,onAfterEnter:Zn,onEnterCancelled:Zn,onBeforeLeave:Zn,onLeave:Zn,onAfterLeave:Zn,onLeaveCancelled:Zn,onBeforeAppear:Zn,onAppear:Zn,onAfterAppear:Zn,onAppearCancelled:Zn},setup(r,{slots:e}){const t=Lx(),n=V_();let i;return()=>{const s=e.default&&v0(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const d of s)if(d.type!==ai){o=d;break}}const a=ft(r),{mode:l}=a;if(n.isLeaving)return Du(o);const u=Ch(o);if(!u)return Du(o);const c=Ic(u,a,n,t);Uc(u,c);const h=t.subTree,f=h&&Ch(h);let m=!1;const{getTransitionKey:g}=u.type;if(g){const d=g();i===void 0?i=d:d!==i&&(i=d,m=!0)}if(f&&f.type!==ai&&(!ns(u,f)||m)){const d=Ic(f,a,n,t);if(Uc(f,d),l==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},Du(o);l==="in-out"&&u.type!==ai&&(d.delayLeave=(p,x,b)=>{const _=x0(n,f);_[String(f.key)]=f,p._leaveCb=()=>{x(),p._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=b})}return o}}},H_=G_;function x0(r,e){const{leavingVNodes:t}=r;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Ic(r,e,t,n){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:d,onAppear:p,onAfterAppear:x,onAppearCancelled:b}=e,_=String(r.key),y=x0(t,r),M=(v,w)=>{v&&oi(v,n,9,w)},T=(v,w)=>{const P=w[1];M(v,w),Ye(v)?v.every(O=>O.length<=1)&&P():v.length<=1&&P()},E={mode:s,persisted:o,beforeEnter(v){let w=a;if(!t.isMounted)if(i)w=d||a;else return;v._leaveCb&&v._leaveCb(!0);const P=y[_];P&&ns(r,P)&&P.el._leaveCb&&P.el._leaveCb(),M(w,[v])},enter(v){let w=l,P=u,O=c;if(!t.isMounted)if(i)w=p||l,P=x||u,O=b||c;else return;let Z=!1;const z=v._enterCb=I=>{Z||(Z=!0,I?M(O,[v]):M(P,[v]),E.delayedLeave&&E.delayedLeave(),v._enterCb=void 0)};w?T(w,[v,z]):z()},leave(v,w){const P=String(r.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return w();M(h,[v]);let O=!1;const Z=v._leaveCb=z=>{O||(O=!0,w(),z?M(g,[v]):M(m,[v]),v._leaveCb=void 0,y[P]===r&&delete y[P])};y[P]=r,f?T(f,[v,Z]):Z()},clone(v){return Ic(v,e,t,n)}};return E}function Du(r){if(lu(r))return r=Ir(r),r.children=null,r}function Ch(r){return lu(r)?r.children?r.children[0]:void 0:r}function Uc(r,e){r.shapeFlag&6&&r.component?Uc(r.component.subTree,e):r.shapeFlag&128?(r.ssContent.transition=e.clone(r.ssContent),r.ssFallback.transition=e.clone(r.ssFallback)):r.transition=e}function v0(r,e=!1,t){let n=[],i=0;for(let s=0;s<r.length;s++){let o=r[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===_n?(o.patchFlag&128&&i++,n=n.concat(v0(o.children,e,a))):(e||o.type!==ai)&&n.push(a!=null?Ir(o,{key:a}):o)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function rr(r){return Ze(r)?{setup:r,name:r.name}:r}const Zo=r=>!!r.type.__asyncLoader,lu=r=>r.type.__isKeepAlive;function X_(r,e){y0(r,"a",e)}function q_(r,e){y0(r,"da",e)}function y0(r,e,t=qt){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(uu(e,n,t),t){let i=t.parent;for(;i&&i.parent;)lu(i.parent.vnode)&&$_(n,e,t,i),i=i.parent}}function $_(r,e,t,n){const i=uu(e,r,n,!0);M0(()=>{Af(n[e],i)},t)}function uu(r,e,t=qt,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Po(),mo(t);const a=oi(e,t,r,o);return hs(),Lo(),a});return n?i.unshift(s):i.push(s),s}}const sr=r=>(e,t=qt)=>(!ga||r==="sp")&&uu(r,(...n)=>e(...n),t),Y_=sr("bm"),or=sr("m"),j_=sr("bu"),Z_=sr("u"),b0=sr("bum"),M0=sr("um"),K_=sr("sp"),J_=sr("rtg"),Q_=sr("rtc");function ex(r,e=qt){uu("ec",r,e)}function ct(r,e){const t=Qt;if(t===null)return r;const n=hu(t)||t.proxy,i=r.dirs||(r.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,u=xt]=e[s];o&&(Ze(o)&&(o={mounted:o,updated:o}),o.deep&&os(a),i.push({dir:o,instance:n,value:a,oldValue:void 0,arg:l,modifiers:u}))}return r}function Gr(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Po(),oi(l,t,8,[r.el,a,r,e]),Lo())}}const tx="components",nx="directives",ix=Symbol();function Dh(r){return rx(nx,r)}function rx(r,e,t=!0,n=!1){const i=Qt||qt;if(i){const s=i.type;if(r===tx){const a=Ux(s,!1);if(a&&(a===e||a===zi(e)||a===iu(zi(e))))return s}const o=Ph(i[r]||s[r],e)||Ph(i.appContext[r],e);return!o&&n?s:o}}function Ph(r,e){return r&&(r[e]||r[zi(e)]||r[iu(zi(e))])}function sx(r,e,t,n){let i;const s=t&&t[n];if(Ye(r)||zt(r)){i=new Array(r.length);for(let o=0,a=r.length;o<a;o++)i[o]=e(r[o],o,void 0,s&&s[o])}else if(typeof r=="number"){i=new Array(r);for(let o=0;o<r;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Et(r))if(r[Symbol.iterator])i=Array.from(r,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(r);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];i[a]=e(r[u],u,a,s&&s[a])}}else i=[];return t&&(t[n]=i),i}function pa(r,e,t={},n,i){if(Qt.isCE||Qt.parent&&Zo(Qt.parent)&&Qt.parent.isCE)return e!=="default"&&(t.name=e),it("slot",t,n&&n());let s=r[e];s&&s._c&&(s._d=!1),Ge();const o=s&&S0(s(t)),a=Vf(_n,{key:t.key||o&&o.key||`_${e}`},o||(n?n():[]),o&&r._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function S0(r){return r.some(e=>R0(e)?!(e.type===ai||e.type===_n&&!S0(e.children)):!0)?r:null}const Oc=r=>r?I0(r)?hu(r)||r.proxy:Oc(r.parent):null,Ko=un(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Oc(r.parent),$root:r=>Oc(r.root),$emit:r=>r.emit,$options:r=>zf(r),$forceUpdate:r=>r.f||(r.f=()=>kf(r.update)),$nextTick:r=>r.n||(r.n=E_.bind(r.proxy)),$watch:r=>W_.bind(r)}),Pu=(r,e)=>r!==xt&&!r.__isScriptSetup&&lt(r,e),ox={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:o,type:a,appContext:l}=r;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Pu(n,e))return o[e]=1,n[e];if(i!==xt&&lt(i,e))return o[e]=2,i[e];if((u=r.propsOptions[0])&&lt(u,e))return o[e]=3,s[e];if(t!==xt&&lt(t,e))return o[e]=4,t[e];Nc&&(o[e]=0)}}const c=Ko[e];let h,f;if(c)return e==="$attrs"&&qn(r,"get",e),c(r);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==xt&&lt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,lt(f,e))return f[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;return Pu(i,e)?(i[e]=t,!0):n!==xt&&lt(n,e)?(n[e]=t,!0):lt(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},o){let a;return!!t[o]||r!==xt&&lt(r,o)||Pu(e,o)||(a=s[0])&&lt(a,o)||lt(n,o)||lt(Ko,o)||lt(i.config.globalProperties,o)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:lt(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};let Nc=!0;function ax(r){const e=zf(r),t=r.proxy,n=r.ctx;Nc=!1,e.beforeCreate&&Lh(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:d,deactivated:p,beforeDestroy:x,beforeUnmount:b,destroyed:_,unmounted:y,render:M,renderTracked:T,renderTriggered:E,errorCaptured:v,serverPrefetch:w,expose:P,inheritAttrs:O,components:Z,directives:z,filters:I}=e;if(u&&lx(u,n,null,r.appContext.config.unwrapInjectedRef),o)for(const Y in o){const B=o[Y];Ze(B)&&(n[Y]=B.bind(t))}if(i){const Y=i.call(t,t);Et(Y)&&(r.data=If(Y))}if(Nc=!0,s)for(const Y in s){const B=s[Y],se=Ze(B)?B.bind(t,t):Ze(B.get)?B.get.bind(t,t):Si,F=!Ze(B)&&Ze(B.set)?B.set.bind(t):Si,X=Nx({get:se,set:F});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>X.value,set:V=>X.value=V})}if(a)for(const Y in a)w0(a[Y],n,t,Y);if(l){const Y=Ze(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(B=>{z_(B,Y[B])})}c&&Lh(c,r,"c");function G(Y,B){Ye(B)?B.forEach(se=>Y(se.bind(t))):B&&Y(B.bind(t))}if(G(Y_,h),G(or,f),G(j_,m),G(Z_,g),G(X_,d),G(q_,p),G(ex,v),G(Q_,T),G(J_,E),G(b0,b),G(M0,y),G(K_,w),Ye(P))if(P.length){const Y=r.exposed||(r.exposed={});P.forEach(B=>{Object.defineProperty(Y,B,{get:()=>t[B],set:se=>t[B]=se})})}else r.exposed||(r.exposed={});M&&r.render===Si&&(r.render=M),O!=null&&(r.inheritAttrs=O),Z&&(r.components=Z),z&&(r.directives=z)}function lx(r,e,t=Si,n=!1){Ye(r)&&(r=kc(r));for(const i in r){const s=r[i];let o;Et(s)?"default"in s?o=Ml(s.from||i,s.default,!0):o=Ml(s.from||i):o=Ml(s),on(o)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Lh(r,e,t){oi(Ye(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function w0(r,e,t,n){const i=n.includes(".")?_0(t,n):()=>t[n];if(zt(r)){const s=e[r];Ze(s)&&Cu(i,s)}else if(Ze(r))Cu(i,r.bind(t));else if(Et(r))if(Ye(r))r.forEach(s=>w0(s,e,t,n));else{const s=Ze(r.handler)?r.handler.bind(t):e[r.handler];Ze(s)&&Cu(i,s,r)}}function zf(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=r.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(u=>kl(l,u,o,!0)),kl(l,e,o)),Et(e)&&s.set(e,l),l}function kl(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&kl(r,s,t,!0),i&&i.forEach(o=>kl(r,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=ux[o]||t&&t[o];r[o]=a?a(r[o],e[o]):e[o]}return r}const ux={data:Fh,props:Zr,emits:Zr,methods:Zr,computed:Zr,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:Zr,directives:Zr,watch:fx,provide:Fh,inject:cx};function Fh(r,e){return e?r?function(){return un(Ze(r)?r.call(this,this):r,Ze(e)?e.call(this,this):e)}:e:r}function cx(r,e){return Zr(kc(r),kc(e))}function kc(r){if(Ye(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function dn(r,e){return r?[...new Set([].concat(r,e))]:e}function Zr(r,e){return r?un(un(Object.create(null),r),e):e}function fx(r,e){if(!r)return e;if(!e)return r;const t=un(Object.create(null),r);for(const n in e)t[n]=dn(r[n],e[n]);return t}function hx(r,e,t,n=!1){const i={},s={};Ul(s,fu,1),r.propsDefaults=Object.create(null),T0(r,e,i,s);for(const o in r.propsOptions[0])o in i||(i[o]=void 0);t?r.props=n?i:x_(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function dx(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:o}}=r,a=ft(i),[l]=r.propsOptions;let u=!1;if((n||o>0)&&!(o&16)){if(o&8){const c=r.vnode.dynamicProps;for(let h=0;h<c.length;h++){let f=c[h];if(ou(r.emitsOptions,f))continue;const m=e[f];if(l)if(lt(s,f))m!==s[f]&&(s[f]=m,u=!0);else{const g=zi(f);i[g]=zc(l,a,g,m,r,!1)}else m!==s[f]&&(s[f]=m,u=!0)}}}else{T0(r,e,i,s)&&(u=!0);let c;for(const h in a)(!e||!lt(e,h)&&((c=Do(h))===h||!lt(e,c)))&&(l?t&&(t[h]!==void 0||t[c]!==void 0)&&(i[h]=zc(l,a,h,void 0,r,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!lt(e,h)&&!0)&&(delete s[h],u=!0)}u&&tr(r,"set","$attrs")}function T0(r,e,t,n){const[i,s]=r.propsOptions;let o=!1,a;if(e)for(let l in e){if(bl(l))continue;const u=e[l];let c;i&&lt(i,c=zi(l))?!s||!s.includes(c)?t[c]=u:(a||(a={}))[c]=u:ou(r.emitsOptions,l)||(!(l in n)||u!==n[l])&&(n[l]=u,o=!0)}if(s){const l=ft(t),u=a||xt;for(let c=0;c<s.length;c++){const h=s[c];t[h]=zc(i,l,h,u[h],r,!lt(u,h))}}return o}function zc(r,e,t,n,i,s){const o=r[t];if(o!=null){const a=lt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ze(l)){const{propsDefaults:u}=i;t in u?n=u[t]:(mo(i),n=u[t]=l.call(null,e),hs())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Do(t))&&(n=!0))}return n}function E0(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,o={},a=[];let l=!1;if(!Ze(r)){const c=h=>{l=!0;const[f,m]=E0(h,e,!0);un(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),r.extends&&c(r.extends),r.mixins&&r.mixins.forEach(c)}if(!s&&!l)return Et(r)&&n.set(r,no),no;if(Ye(s))for(let c=0;c<s.length;c++){const h=zi(s[c]);Rh(h)&&(o[h]=xt)}else if(s)for(const c in s){const h=zi(c);if(Rh(h)){const f=s[c],m=o[h]=Ye(f)||Ze(f)?{type:f}:Object.assign({},f);if(m){const g=Uh(Boolean,m.type),d=Uh(String,m.type);m[0]=g>-1,m[1]=d<0||g<d,(g>-1||lt(m,"default"))&&a.push(h)}}}const u=[o,a];return Et(r)&&n.set(r,u),u}function Rh(r){return r[0]!=="$"}function Bh(r){const e=r&&r.toString().match(/^\s*function (\w+)/);return e?e[1]:r===null?"null":""}function Ih(r,e){return Bh(r)===Bh(e)}function Uh(r,e){return Ye(e)?e.findIndex(t=>Ih(t,r)):Ze(e)&&Ih(e,r)?0:-1}const A0=r=>r[0]==="_"||r==="$stable",Wf=r=>Ye(r)?r.map(Li):[Li(r)],px=(r,e,t)=>{if(e._n)return e;const n=dt((...i)=>Wf(e(...i)),t);return n._c=!1,n},C0=(r,e,t)=>{const n=r._ctx;for(const i in r){if(A0(i))continue;const s=r[i];if(Ze(s))e[i]=px(i,s,n);else if(s!=null){const o=Wf(s);e[i]=()=>o}}},D0=(r,e)=>{const t=Wf(e);r.slots.default=()=>t},mx=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=ft(e),Ul(e,"_",t)):C0(e,r.slots={})}else r.slots={},e&&D0(r,e);Ul(r.slots,fu,1)},gx=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,o=xt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(un(i,e),!t&&a===1&&delete i._):(s=!e.$stable,C0(e,i)),o=e}else e&&(D0(r,e),o={default:1});if(s)for(const a in i)!A0(a)&&!(a in o)&&delete i[a]};function P0(){return{app:null,config:{isNativeTag:Ng,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _x=0;function xx(r,e){return function(n,i=null){Ze(n)||(n=Object.assign({},n)),i!=null&&!Et(i)&&(i=null);const s=P0(),o=new Set;let a=!1;const l=s.app={_uid:_x++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Wx,get config(){return s.config},set config(u){},use(u,...c){return o.has(u)||(u&&Ze(u.install)?(o.add(u),u.install(l,...c)):Ze(u)&&(o.add(u),u(l,...c))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,c){return c?(s.components[u]=c,l):s.components[u]},directive(u,c){return c?(s.directives[u]=c,l):s.directives[u]},mount(u,c,h){if(!a){const f=it(n,i);return f.appContext=s,c&&e?e(f,u):r(f,u,h),a=!0,l._container=u,u.__vue_app__=l,hu(f.component)||f.component.proxy}},unmount(){a&&(r(null,l._container),delete l._container.__vue_app__)},provide(u,c){return s.provides[u]=c,l}};return l}}function Wc(r,e,t,n,i=!1){if(Ye(r)){r.forEach((f,m)=>Wc(f,e&&(Ye(e)?e[m]:e),t,n,i));return}if(Zo(n)&&!i)return;const s=n.shapeFlag&4?hu(n.component)||n.component.proxy:n.el,o=i?null:s,{i:a,r:l}=r,u=e&&e.r,c=a.refs===xt?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==l&&(zt(u)?(c[u]=null,lt(h,u)&&(h[u]=null)):on(u)&&(u.value=null)),Ze(l))Dr(l,a,12,[o,c]);else{const f=zt(l),m=on(l);if(f||m){const g=()=>{if(r.f){const d=f?lt(h,l)?h[l]:c[l]:l.value;i?Ye(d)&&Af(d,s):Ye(d)?d.includes(s)||d.push(s):f?(c[l]=[s],lt(h,l)&&(h[l]=c[l])):(l.value=[s],r.k&&(c[r.k]=l.value))}else f?(c[l]=o,lt(h,l)&&(h[l]=o)):m&&(l.value=o,r.k&&(c[r.k]=o))};o?(g.id=-1,bn(g,t)):g()}}}const bn=k_;function vx(r){return yx(r)}function yx(r,e){const t=Hg();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:f,setScopeId:m=Si,insertStaticContent:g}=r,d=(D,L,$,oe=null,ne=null,R=null,de=!1,te=null,pe=!!L.dynamicChildren)=>{if(D===L)return;D&&!ns(D,L)&&(oe=Le(D),V(D,ne,R,!0),D=null),L.patchFlag===-2&&(pe=!1,L.dynamicChildren=null);const{type:le,ref:A,shapeFlag:S}=L;switch(le){case cu:p(D,L,$,oe);break;case ai:x(D,L,$,oe);break;case Lu:D==null&&b(L,$,oe,de);break;case _n:Z(D,L,$,oe,ne,R,de,te,pe);break;default:S&1?M(D,L,$,oe,ne,R,de,te,pe):S&6?z(D,L,$,oe,ne,R,de,te,pe):(S&64||S&128)&&le.process(D,L,$,oe,ne,R,de,te,pe,Fe)}A!=null&&ne&&Wc(A,D&&D.ref,R,L||D,!L)},p=(D,L,$,oe)=>{if(D==null)n(L.el=a(L.children),$,oe);else{const ne=L.el=D.el;L.children!==D.children&&u(ne,L.children)}},x=(D,L,$,oe)=>{D==null?n(L.el=l(L.children||""),$,oe):L.el=D.el},b=(D,L,$,oe)=>{[D.el,D.anchor]=g(D.children,L,$,oe,D.el,D.anchor)},_=({el:D,anchor:L},$,oe)=>{let ne;for(;D&&D!==L;)ne=f(D),n(D,$,oe),D=ne;n(L,$,oe)},y=({el:D,anchor:L})=>{let $;for(;D&&D!==L;)$=f(D),i(D),D=$;i(L)},M=(D,L,$,oe,ne,R,de,te,pe)=>{de=de||L.type==="svg",D==null?T(L,$,oe,ne,R,de,te,pe):w(D,L,ne,R,de,te,pe)},T=(D,L,$,oe,ne,R,de,te)=>{let pe,le;const{type:A,props:S,shapeFlag:N,transition:K,dirs:Q}=D;if(pe=D.el=o(D.type,R,S&&S.is,S),N&8?c(pe,D.children):N&16&&v(D.children,pe,null,oe,ne,R&&A!=="foreignObject",de,te),Q&&Gr(D,null,oe,"created"),S){for(const _e in S)_e!=="value"&&!bl(_e)&&s(pe,_e,null,S[_e],R,D.children,oe,ne,H);"value"in S&&s(pe,"value",null,S.value),(le=S.onVnodeBeforeMount)&&Ti(le,oe,D)}E(pe,D,D.scopeId,de,oe),Q&&Gr(D,null,oe,"beforeMount");const ce=(!ne||ne&&!ne.pendingBranch)&&K&&!K.persisted;ce&&K.beforeEnter(pe),n(pe,L,$),((le=S&&S.onVnodeMounted)||ce||Q)&&bn(()=>{le&&Ti(le,oe,D),ce&&K.enter(pe),Q&&Gr(D,null,oe,"mounted")},ne)},E=(D,L,$,oe,ne)=>{if($&&m(D,$),oe)for(let R=0;R<oe.length;R++)m(D,oe[R]);if(ne){let R=ne.subTree;if(L===R){const de=ne.vnode;E(D,de,de.scopeId,de.slotScopeIds,ne.parent)}}},v=(D,L,$,oe,ne,R,de,te,pe=0)=>{for(let le=pe;le<D.length;le++){const A=D[le]=te?vr(D[le]):Li(D[le]);d(null,A,L,$,oe,ne,R,de,te)}},w=(D,L,$,oe,ne,R,de)=>{const te=L.el=D.el;let{patchFlag:pe,dynamicChildren:le,dirs:A}=L;pe|=D.patchFlag&16;const S=D.props||xt,N=L.props||xt;let K;$&&Hr($,!1),(K=N.onVnodeBeforeUpdate)&&Ti(K,$,L,D),A&&Gr(L,D,$,"beforeUpdate"),$&&Hr($,!0);const Q=ne&&L.type!=="foreignObject";if(le?P(D.dynamicChildren,le,te,$,oe,Q,R):de||B(D,L,te,null,$,oe,Q,R,!1),pe>0){if(pe&16)O(te,L,S,N,$,oe,ne);else if(pe&2&&S.class!==N.class&&s(te,"class",null,N.class,ne),pe&4&&s(te,"style",S.style,N.style,ne),pe&8){const ce=L.dynamicProps;for(let _e=0;_e<ce.length;_e++){const ge=ce[_e],ee=S[ge],Ce=N[ge];(Ce!==ee||ge==="value")&&s(te,ge,ee,Ce,ne,D.children,$,oe,H)}}pe&1&&D.children!==L.children&&c(te,L.children)}else!de&&le==null&&O(te,L,S,N,$,oe,ne);((K=N.onVnodeUpdated)||A)&&bn(()=>{K&&Ti(K,$,L,D),A&&Gr(L,D,$,"updated")},oe)},P=(D,L,$,oe,ne,R,de)=>{for(let te=0;te<L.length;te++){const pe=D[te],le=L[te],A=pe.el&&(pe.type===_n||!ns(pe,le)||pe.shapeFlag&70)?h(pe.el):$;d(pe,le,A,null,oe,ne,R,de,!0)}},O=(D,L,$,oe,ne,R,de)=>{if($!==oe){if($!==xt)for(const te in $)!bl(te)&&!(te in oe)&&s(D,te,$[te],null,de,L.children,ne,R,H);for(const te in oe){if(bl(te))continue;const pe=oe[te],le=$[te];pe!==le&&te!=="value"&&s(D,te,le,pe,de,L.children,ne,R,H)}"value"in oe&&s(D,"value",$.value,oe.value)}},Z=(D,L,$,oe,ne,R,de,te,pe)=>{const le=L.el=D?D.el:a(""),A=L.anchor=D?D.anchor:a("");let{patchFlag:S,dynamicChildren:N,slotScopeIds:K}=L;K&&(te=te?te.concat(K):K),D==null?(n(le,$,oe),n(A,$,oe),v(L.children,$,A,ne,R,de,te,pe)):S>0&&S&64&&N&&D.dynamicChildren?(P(D.dynamicChildren,N,$,ne,R,de,te),(L.key!=null||ne&&L===ne.subTree)&&L0(D,L,!0)):B(D,L,$,A,ne,R,de,te,pe)},z=(D,L,$,oe,ne,R,de,te,pe)=>{L.slotScopeIds=te,D==null?L.shapeFlag&512?ne.ctx.activate(L,$,oe,de,pe):I(L,$,oe,ne,R,de,pe):q(D,L,pe)},I=(D,L,$,oe,ne,R,de)=>{const te=D.component=Px(D,oe,ne);if(lu(D)&&(te.ctx.renderer=Fe),Fx(te),te.asyncDep){if(ne&&ne.registerDep(te,G),!D.el){const pe=te.subTree=it(ai);x(null,pe,L,$)}return}G(te,D,L,$,ne,R,de)},q=(D,L,$)=>{const oe=L.component=D.component;if(U_(D,L,$))if(oe.asyncDep&&!oe.asyncResolved){Y(oe,L,$);return}else oe.next=L,C_(oe.update),oe.update();else L.el=D.el,oe.vnode=L},G=(D,L,$,oe,ne,R,de)=>{const te=()=>{if(D.isMounted){let{next:A,bu:S,u:N,parent:K,vnode:Q}=D,ce=A,_e;Hr(D,!1),A?(A.el=Q.el,Y(D,A,de)):A=Q,S&&Eu(S),(_e=A.props&&A.props.onVnodeBeforeUpdate)&&Ti(_e,K,A,Q),Hr(D,!0);const ge=Au(D),ee=D.subTree;D.subTree=ge,d(ee,ge,h(ee.el),Le(ee),D,ne,R),A.el=ge.el,ce===null&&O_(D,ge.el),N&&bn(N,ne),(_e=A.props&&A.props.onVnodeUpdated)&&bn(()=>Ti(_e,K,A,Q),ne)}else{let A;const{el:S,props:N}=L,{bm:K,m:Q,parent:ce}=D,_e=Zo(L);if(Hr(D,!1),K&&Eu(K),!_e&&(A=N&&N.onVnodeBeforeMount)&&Ti(A,ce,L),Hr(D,!0),S&&ke){const ge=()=>{D.subTree=Au(D),ke(S,D.subTree,D,ne,null)};_e?L.type.__asyncLoader().then(()=>!D.isUnmounted&&ge()):ge()}else{const ge=D.subTree=Au(D);d(null,ge,$,oe,D,ne,R),L.el=ge.el}if(Q&&bn(Q,ne),!_e&&(A=N&&N.onVnodeMounted)){const ge=L;bn(()=>Ti(A,ce,ge),ne)}(L.shapeFlag&256||ce&&Zo(ce.vnode)&&ce.vnode.shapeFlag&256)&&D.a&&bn(D.a,ne),D.isMounted=!0,L=$=oe=null}},pe=D.effect=new Lf(te,()=>kf(le),D.scope),le=D.update=()=>pe.run();le.id=D.uid,Hr(D,!0),le()},Y=(D,L,$)=>{L.component=D;const oe=D.vnode.props;D.vnode=L,D.next=null,dx(D,L.props,oe,$),gx(D,L.children,$),Po(),Eh(),Lo()},B=(D,L,$,oe,ne,R,de,te,pe=!1)=>{const le=D&&D.children,A=D?D.shapeFlag:0,S=L.children,{patchFlag:N,shapeFlag:K}=L;if(N>0){if(N&128){F(le,S,$,oe,ne,R,de,te,pe);return}else if(N&256){se(le,S,$,oe,ne,R,de,te,pe);return}}K&8?(A&16&&H(le,ne,R),S!==le&&c($,S)):A&16?K&16?F(le,S,$,oe,ne,R,de,te,pe):H(le,ne,R,!0):(A&8&&c($,""),K&16&&v(S,$,oe,ne,R,de,te,pe))},se=(D,L,$,oe,ne,R,de,te,pe)=>{D=D||no,L=L||no;const le=D.length,A=L.length,S=Math.min(le,A);let N;for(N=0;N<S;N++){const K=L[N]=pe?vr(L[N]):Li(L[N]);d(D[N],K,$,null,ne,R,de,te,pe)}le>A?H(D,ne,R,!0,!1,S):v(L,$,oe,ne,R,de,te,pe,S)},F=(D,L,$,oe,ne,R,de,te,pe)=>{let le=0;const A=L.length;let S=D.length-1,N=A-1;for(;le<=S&&le<=N;){const K=D[le],Q=L[le]=pe?vr(L[le]):Li(L[le]);if(ns(K,Q))d(K,Q,$,null,ne,R,de,te,pe);else break;le++}for(;le<=S&&le<=N;){const K=D[S],Q=L[N]=pe?vr(L[N]):Li(L[N]);if(ns(K,Q))d(K,Q,$,null,ne,R,de,te,pe);else break;S--,N--}if(le>S){if(le<=N){const K=N+1,Q=K<A?L[K].el:oe;for(;le<=N;)d(null,L[le]=pe?vr(L[le]):Li(L[le]),$,Q,ne,R,de,te,pe),le++}}else if(le>N)for(;le<=S;)V(D[le],ne,R,!0),le++;else{const K=le,Q=le,ce=new Map;for(le=Q;le<=N;le++){const Se=L[le]=pe?vr(L[le]):Li(L[le]);Se.key!=null&&ce.set(Se.key,le)}let _e,ge=0;const ee=N-Q+1;let Ce=!1,Ue=0;const Te=new Array(ee);for(le=0;le<ee;le++)Te[le]=0;for(le=K;le<=S;le++){const Se=D[le];if(ge>=ee){V(Se,ne,R,!0);continue}let we;if(Se.key!=null)we=ce.get(Se.key);else for(_e=Q;_e<=N;_e++)if(Te[_e-Q]===0&&ns(Se,L[_e])){we=_e;break}we===void 0?V(Se,ne,R,!0):(Te[we-Q]=le+1,we>=Ue?Ue=we:Ce=!0,d(Se,L[we],$,null,ne,R,de,te,pe),ge++)}const Re=Ce?bx(Te):no;for(_e=Re.length-1,le=ee-1;le>=0;le--){const Se=Q+le,we=L[Se],nt=Se+1<A?L[Se+1].el:oe;Te[le]===0?d(null,we,$,nt,ne,R,de,te,pe):Ce&&(_e<0||le!==Re[_e]?X(we,$,nt,2):_e--)}}},X=(D,L,$,oe,ne=null)=>{const{el:R,type:de,transition:te,children:pe,shapeFlag:le}=D;if(le&6){X(D.component.subTree,L,$,oe);return}if(le&128){D.suspense.move(L,$,oe);return}if(le&64){de.move(D,L,$,Fe);return}if(de===_n){n(R,L,$);for(let S=0;S<pe.length;S++)X(pe[S],L,$,oe);n(D.anchor,L,$);return}if(de===Lu){_(D,L,$);return}if(oe!==2&&le&1&&te)if(oe===0)te.beforeEnter(R),n(R,L,$),bn(()=>te.enter(R),ne);else{const{leave:S,delayLeave:N,afterLeave:K}=te,Q=()=>n(R,L,$),ce=()=>{S(R,()=>{Q(),K&&K()})};N?N(R,Q,ce):ce()}else n(R,L,$)},V=(D,L,$,oe=!1,ne=!1)=>{const{type:R,props:de,ref:te,children:pe,dynamicChildren:le,shapeFlag:A,patchFlag:S,dirs:N}=D;if(te!=null&&Wc(te,null,$,D,!0),A&256){L.ctx.deactivate(D);return}const K=A&1&&N,Q=!Zo(D);let ce;if(Q&&(ce=de&&de.onVnodeBeforeUnmount)&&Ti(ce,L,D),A&6)me(D.component,$,oe);else{if(A&128){D.suspense.unmount($,oe);return}K&&Gr(D,null,L,"beforeUnmount"),A&64?D.type.remove(D,L,$,ne,Fe,oe):le&&(R!==_n||S>0&&S&64)?H(le,L,$,!1,!0):(R===_n&&S&384||!ne&&A&16)&&H(pe,L,$),oe&&fe(D)}(Q&&(ce=de&&de.onVnodeUnmounted)||K)&&bn(()=>{ce&&Ti(ce,L,D),K&&Gr(D,null,L,"unmounted")},$)},fe=D=>{const{type:L,el:$,anchor:oe,transition:ne}=D;if(L===_n){ue($,oe);return}if(L===Lu){y(D);return}const R=()=>{i($),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(D.shapeFlag&1&&ne&&!ne.persisted){const{leave:de,delayLeave:te}=ne,pe=()=>de($,R);te?te(D.el,R,pe):pe()}else R()},ue=(D,L)=>{let $;for(;D!==L;)$=f(D),i(D),D=$;i(L)},me=(D,L,$)=>{const{bum:oe,scope:ne,update:R,subTree:de,um:te}=D;oe&&Eu(oe),ne.stop(),R&&(R.active=!1,V(de,D,L,$)),te&&bn(te,L),bn(()=>{D.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},H=(D,L,$,oe=!1,ne=!1,R=0)=>{for(let de=R;de<D.length;de++)V(D[de],L,$,oe,ne)},Le=D=>D.shapeFlag&6?Le(D.component.subTree):D.shapeFlag&128?D.suspense.next():f(D.anchor||D.el),ve=(D,L,$)=>{D==null?L._vnode&&V(L._vnode,null,null,!0):d(L._vnode||null,D,L,null,null,null,$),Eh(),d0(),L._vnode=D},Fe={p:d,um:V,m:X,r:fe,mt:I,mc:v,pc:B,pbc:P,n:Le,o:r};let xe,ke;return e&&([xe,ke]=e(Fe)),{render:ve,hydrate:xe,createApp:xx(ve,xe)}}function Hr({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function L0(r,e,t=!1){const n=r.children,i=e.children;if(Ye(n)&&Ye(i))for(let s=0;s<n.length;s++){const o=n[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=vr(i[s]),a.el=o.el),t||L0(o,a)),a.type===cu&&(a.el=o.el)}}function bx(r){const e=r.slice(),t=[0];let n,i,s,o,a;const l=r.length;for(n=0;n<l;n++){const u=r[n];if(u!==0){if(i=t[t.length-1],r[i]<u){e[n]=i,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,r[t[a]]<u?s=a+1:o=a;u<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Mx=r=>r.__isTeleport,_n=Symbol(void 0),cu=Symbol(void 0),ai=Symbol(void 0),Lu=Symbol(void 0),Jo=[];let Mi=null;function Ge(r=!1){Jo.push(Mi=r?null:[])}function Sx(){Jo.pop(),Mi=Jo[Jo.length-1]||null}let ma=1;function Oh(r){ma+=r}function F0(r){return r.dynamicChildren=ma>0?Mi||no:null,Sx(),ma>0&&Mi&&Mi.push(r),r}function qe(r,e,t,n,i,s){return F0(We(r,e,t,n,i,s,!0))}function Vf(r,e,t,n,i){return F0(it(r,e,t,n,i,!0))}function R0(r){return r?r.__v_isVNode===!0:!1}function ns(r,e){return r.type===e.type&&r.key===e.key}const fu="__vInternal",B0=({key:r})=>r!=null?r:null,Sl=({ref:r,ref_key:e,ref_for:t})=>r!=null?zt(r)||on(r)||Ze(r)?{i:Qt,r,k:e,f:!!t}:r:null;function We(r,e=null,t=null,n=0,i=null,s=r===_n?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&B0(e),ref:e&&Sl(e),scopeId:au,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qt};return a?(Gf(l,t),s&128&&r.normalize(l)):t&&(l.shapeFlag|=zt(t)?8:16),ma>0&&!o&&Mi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Mi.push(l),l}const it=wx;function wx(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===ix)&&(r=ai),R0(r)){const a=Ir(r,e,!0);return t&&Gf(a,t),ma>0&&!s&&Mi&&(a.shapeFlag&6?Mi[Mi.indexOf(r)]=a:Mi.push(a)),a.patchFlag|=-2,a}if(Ox(r)&&(r=r.__vccOpts),e){e=Tx(e);let{class:a,style:l}=e;a&&!zt(a)&&(e.class=ua(a)),Et(l)&&(s0(l)&&!Ye(l)&&(l=un({},l)),e.style=Ql(l))}const o=zt(r)?1:N_(r)?128:Mx(r)?64:Et(r)?4:Ze(r)?2:0;return We(r,e,t,n,i,o,s,!0)}function Tx(r){return r?s0(r)||fu in r?un({},r):r:null}function Ir(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:o}=r,a=e?Ax(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:a,key:a&&B0(a),ref:e&&e.ref?t&&i?Ye(i)?i.concat(Sl(e)):[i,Sl(e)]:Sl(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:o,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==_n?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Ir(r.ssContent),ssFallback:r.ssFallback&&Ir(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx}}function Ve(r=" ",e=0){return it(cu,null,r,e)}function Ex(r="",e=!1){return e?(Ge(),Vf(ai,null,r)):it(ai,null,r)}function Li(r){return r==null||typeof r=="boolean"?it(ai):Ye(r)?it(_n,null,r.slice()):typeof r=="object"?vr(r):it(cu,null,String(r))}function vr(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:Ir(r)}function Gf(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(Ye(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Gf(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(fu in e)?e._ctx=Qt:i===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:Qt},t=32):(e=String(e),n&64?(t=16,e=[Ve(e)]):t=8);r.children=e,r.shapeFlag|=t}function Ax(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=ua([e.class,n.class]));else if(i==="style")e.style=Ql([e.style,n.style]);else if(eu(i)){const s=e[i],o=n[i];o&&s!==o&&!(Ye(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=n[i])}return e}function Ti(r,e,t,n=null){oi(r,e,7,[t,n])}const Cx=P0();let Dx=0;function Px(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||Cx,s={uid:Dx++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:E0(n,i),emitsOptions:m0(n,i),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:n.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=L_.bind(null,s),r.ce&&r.ce(s),s}let qt=null;const Lx=()=>qt||Qt,mo=r=>{qt=r,r.scope.on()},hs=()=>{qt&&qt.scope.off(),qt=null};function I0(r){return r.vnode.shapeFlag&4}let ga=!1;function Fx(r,e=!1){ga=e;const{props:t,children:n}=r.vnode,i=I0(r);hx(r,t,i,e),mx(r,n);const s=i?Rx(r,e):void 0;return ga=!1,s}function Rx(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=o0(new Proxy(r.ctx,ox));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?Ix(r):null;mo(r),Po();const s=Dr(n,r,0,[r.props,i]);if(Lo(),hs(),Hp(s)){if(s.then(hs,hs),e)return s.then(o=>{Nh(r,o,e)}).catch(o=>{su(o,r,0)});r.asyncDep=s}else Nh(r,s,e)}else U0(r,e)}function Nh(r,e,t){Ze(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:Et(e)&&(r.setupState=u0(e)),U0(r,t)}let kh;function U0(r,e,t){const n=r.type;if(!r.render){if(!e&&kh&&!n.render){const i=n.template||zf(r).template;if(i){const{isCustomElement:s,compilerOptions:o}=r.appContext.config,{delimiters:a,compilerOptions:l}=n,u=un(un({isCustomElement:s,delimiters:a},o),l);n.render=kh(i,u)}}r.render=n.render||Si}mo(r),Po(),ax(r),Lo(),hs()}function Bx(r){return new Proxy(r.attrs,{get(e,t){return qn(r,"get","$attrs"),e[t]}})}function Ix(r){const e=n=>{r.exposed=n||{}};let t;return{get attrs(){return t||(t=Bx(r))},slots:r.slots,emit:r.emit,expose:e}}function hu(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(u0(o0(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ko)return Ko[t](r)},has(e,t){return t in e||t in Ko}}))}function Ux(r,e=!0){return Ze(r)?r.displayName||r.name:r.name||e&&r.__name}function Ox(r){return Ze(r)&&"__vccOpts"in r}const Nx=(r,e)=>w_(r,e,ga),kx=Symbol(""),zx=()=>Ml(kx),Wx="3.2.45",Vx="http://www.w3.org/2000/svg",is=typeof document<"u"?document:null,zh=is&&is.createElement("template"),Gx={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?is.createElementNS(Vx,r):is.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>is.createTextNode(r),createComment:r=>is.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>is.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,n,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{zh.innerHTML=n?`<svg>${r}</svg>`:r;const a=zh.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Hx(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function Xx(r,e,t){const n=r.style,i=zt(t);if(t&&!i){for(const s in t)Vc(n,s,t[s]);if(e&&!zt(e))for(const s in e)t[s]==null&&Vc(n,s,"")}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const Wh=/\s*!important$/;function Vc(r,e,t){if(Ye(t))t.forEach(n=>Vc(r,e,n));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const n=qx(r,e);Wh.test(t)?r.setProperty(Do(n),t.replace(Wh,""),"important"):r[n]=t}}const Vh=["Webkit","Moz","ms"],Fu={};function qx(r,e){const t=Fu[e];if(t)return t;let n=zi(e);if(n!=="filter"&&n in r)return Fu[e]=n;n=iu(n);for(let i=0;i<Vh.length;i++){const s=Vh[i]+n;if(s in r)return Fu[e]=s}return e}const Gh="http://www.w3.org/1999/xlink";function $x(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(Gh,e.slice(6,e.length)):r.setAttributeNS(Gh,e,t);else{const s=Ug(e);t==null||s&&!Wp(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function Yx(r,e,t,n,i,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,i,s),r[e]=t==null?"":t;return}if(e==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=t;const l=t==null?"":t;(r.value!==l||r.tagName==="OPTION")&&(r.value=l),t==null&&r.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof r[e];l==="boolean"?t=Wp(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{r[e]=t}catch{}a&&r.removeAttribute(e)}function jx(r,e,t,n){r.addEventListener(e,t,n)}function Zx(r,e,t,n){r.removeEventListener(e,t,n)}function Kx(r,e,t,n,i=null){const s=r._vei||(r._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Jx(e);if(n){const u=s[e]=t3(n,i);jx(r,a,u,l)}else o&&(Zx(r,a,o,l),s[e]=void 0)}}const Hh=/(?:Once|Passive|Capture)$/;function Jx(r){let e;if(Hh.test(r)){e={};let n;for(;n=r.match(Hh);)r=r.slice(0,r.length-n[0].length),e[n[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):Do(r.slice(2)),e]}let Ru=0;const Qx=Promise.resolve(),e3=()=>Ru||(Qx.then(()=>Ru=0),Ru=Date.now());function t3(r,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;oi(n3(n,t.value),e,5,[n])};return t.value=r,t.attached=e3(),t}function n3(r,e){if(Ye(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const Xh=/^on[a-z]/,i3=(r,e,t,n,i=!1,s,o,a,l)=>{e==="class"?Hx(r,n,i):e==="style"?Xx(r,t,n):eu(e)?Ef(e)||Kx(r,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):r3(r,e,n,i))?Yx(r,e,n,s,o,a,l):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),$x(r,e,n,i))};function r3(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&Xh.test(e)&&Ze(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||Xh.test(e)&&zt(t)?!1:e in r}const s3={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};H_.props;const o3=un({patchProp:i3},Gx);let qh;function a3(){return qh||(qh=vx(o3))}const l3=(...r)=>{const e=a3().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=u3(n);if(!i)return;const s=e._component;!Ze(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function u3(r){return zt(r)?document.querySelector(r):r}const c3="/sandbox-vite/assets/first-view.1f715004.mov";function Yi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function O0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},go={duration:.5,overwrite:!1,delay:0},Hf,Tn,It,ii=1e8,pt=1/ii,Gc=Math.PI*2,f3=Gc/4,h3=0,N0=Math.sqrt,d3=Math.cos,p3=Math.sin,Yt=function(e){return typeof e=="string"},Pt=function(e){return typeof e=="function"},nr=function(e){return typeof e=="number"},Xf=function(e){return typeof e>"u"},Wi=function(e){return typeof e=="object"},En=function(e){return e!==!1},k0=function(){return typeof window<"u"},ka=function(e){return Pt(e)||Yt(e)},z0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,Hc=/(?:-?\.?\d|\.)+/gi,W0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,V0=/[+-]=-?[.\d]+/,G0=/[^,'"\[\]\s]+/gi,m3=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,Qn,Xc,qf,$n={},zl={},H0,X0=function(e){return(zl=Ms(e,$n))&&Yn},$f=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wl=function(e,t){return!t&&console.warn(e)},q0=function(e,t){return e&&($n[e]=t)&&zl&&(zl[e]=t)||$n},_a=function(){return 0},g3={suppressEvents:!0,isStart:!0,kill:!1},wl={suppressEvents:!0,kill:!1},_3={suppressEvents:!0},Yf={},Pr=[],qc={},$0,kn={},Iu={},$h=30,Tl=[],jf="",Zf=function(e){var t=e[0],n,i;if(Wi(t)||Pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Tl.length;i--&&!Tl[i].targetTest(t););n=Tl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new mm(e[i],n)))||e.splice(i,1);return e},ds=function(e){return e._gsap||Zf(ri(e))[0]._gsap},Y0=function(e,t,n){return(n=e[t])&&Pt(n)?e[t]():Xf(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},Jt=function(e){return Math.round(e*1e7)/1e7||0},oo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},x3=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Vl=function(){var e=Pr.length,t=Pr.slice(0),n,i;for(qc={},Pr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},j0=function(e,t,n,i){Pr.length&&Vl(),e.render(t,n,i||Tn&&t<0&&(e._initted||e._startAt)),Pr.length&&Vl()},Z0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(G0).length<2?t:Yt(e)?e.trim():e},K0=function(e){return e},fi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},v3=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ms=function(e,t){for(var n in t)e[n]=t[n];return e},Yh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Gl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Qo=function(e){var t=e.parent||wt,n=e.keyframes?v3(ln(e.keyframes)):fi;if(En(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},y3=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},J0=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},du=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ur=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},b3=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$c=function(e,t,n,i){return e._startAt&&(Tn?e._startAt.revert(wl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},M3=function r(e){return!e||e._ts&&r(e.parent)},jh=function(e){return e._repeat?_o(e._tTime,e=e.duration()+e._rDelay)*e:0},_o=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Hl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},pu=function(e){return e._end=Jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||pt)||0))},mu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Jt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),pu(e),n._dirty||ps(n,e)),e},Q0=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Hl(e.rawTime(),t),(!t._dur||Ea(0,t.totalDuration(),n)-t._tTime>pt)&&t.render(n,!0)),ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-pt}},Bi=function(e,t,n,i){return t.parent&&Ur(t),t._start=Jt((nr(n)?n:n||e!==wt?Jn(e,n,t):e._time)+t._delay),t._end=Jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),J0(e,t,"_first","_last",e._sort?"_start":0),Yc(t)||(e._recent=t),i||Q0(e,t),e._ts<0&&mu(e,e._tTime),e},em=function(e,t){return($n.ScrollTrigger||$f("scrollTrigger",t))&&$n.ScrollTrigger.create(t,e)},tm=function(e,t,n,i,s){if(Jf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$0!==Wn.frame)return Pr.push(e),e._lazy=[s,i],1},S3=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Yc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},w3=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&S3(e)&&!(!e._initted&&Yc(e))||(e._ts<0||e._dp._ts<0)&&!Yc(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=Ea(0,e._tDur,t),c=_o(l,a),e._yoyo&&c&1&&(o=1-o),c!==_o(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Tn||i||e._zTime===pt||!t&&e._zTime){if(!e._initted&&tm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?pt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&$c(e,t,n,!0),e._onUpdate&&!n&&si(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ur(e,1),!n&&!Tn&&(si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},T3=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},xo=function(e,t,n,i){var s=e._repeat,o=Jt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Jt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&mu(e,e._tTime=e._tDur*a),e.parent&&pu(e),n||ps(e.parent,e),e},Zh=function(e){return e instanceof wn?ps(e):xo(e,e._dur)},E3={_start:0,endTime:_a,totalDuration:_a},Jn=function r(e,t,n){var i=e.labels,s=e._recent||E3,o=e.duration()>=ii?s.endTime(!1):e._dur,a,l,u;return Yt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&n&&(l=l/100*(ln(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ea=function(e,t,n){var i=nr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;o.immediateRender=En(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Nt(t[0],o,t[s+1])},zr=function(e,t){return e||e===0?t(e):t},Ea=function(e,t,n){return n<e?e:n>t?t:n},sn=function(e,t){return!Yt(e)||!(t=m3.exec(e))?"":t[1]},A3=function(e,t,n){return zr(n,function(i){return Ea(e,t,i)})},jc=[].slice,nm=function(e,t){return e&&Wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wi(e[0]))&&!e.nodeType&&e!==Qn},C3=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Yt(i)&&!t||nm(i,1)?(s=n).push.apply(s,ri(i)):n.push(i)})||n},ri=function(e,t,n){return It&&!t&&It.selector?It.selector(e):Yt(e)&&!n&&(Xc||!vo())?jc.call((t||qf).querySelectorAll(e),0):ln(e)?C3(e,n):nm(e)?jc.call(e,0):e?[e]:[]},Zc=function(e){return e=ri(e)[0]||Wl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ri(t,n.querySelectorAll?n:n===e?Wl("Invalid scope")||qf.createElement("div"):e)}},im=function(e){return e.sort(function(){return .5-Math.random()})},rm=function(e){if(Pt(e))return e;var t=Wi(e)?e:{each:e},n=ms(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,u=t.axis,c=i,h=i;return Yt(i)?c=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(c=i[0],h=i[1]),function(f,m,g){var d=(g||t).length,p=o[d],x,b,_,y,M,T,E,v,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,ii])[1],!w){for(E=-ii;E<(E=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(p=o[d]=[],x=l?Math.min(w,d)*c-.5:i%w,b=w===ii?0:l?d*h/w-.5:i/w|0,E=0,v=ii,T=0;T<d;T++)_=T%w-x,y=b-(T/w|0),p[T]=M=u?Math.abs(u==="y"?y:_):N0(_*_+y*y),M>E&&(E=M),M<v&&(v=M);i==="random"&&im(p),p.max=E-v,p.min=v,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:u?u==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),p.b=d<0?s-d:s,p.u=sn(t.amount||t.each)||0,n=n&&d<0?hm(n):n}return d=(p[f]-p.min)/p.max||0,Jt(p.b+(n?n(d):d)*p.v)+p.u}},Kc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Jt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(nr(n)?0:sn(n))}},sm=function(e,t){var n=ln(e),i,s;return!n&&Wi(e)&&(i=n=e.radius||ii,e.values?(e=ri(e.values),(s=!nr(e[0]))&&(i*=i)):e=Kc(e.increment)),zr(t,n?Pt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=ii,c=0,h=e.length,f,m;h--;)s?(f=e[h].x-a,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-a),f<u&&(u=f,c=h);return c=!i||u<=i?e[c]:o,s||c===o||nr(o)?c:c+sn(o)}:Kc(e))},om=function(e,t,n,i){return zr(ln(e)?!t:n===!0?!!(n=0):!i,function(){return ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},D3=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},P3=function(e,t){return function(n){return e(parseFloat(n))+(t||sn(n))}},L3=function(e,t,n){return lm(e,t,0,1,n)},am=function(e,t,n){return zr(n,function(i){return e[~~t(i)]})},F3=function r(e,t,n){var i=t-e;return ln(e)?am(e,r(0,e.length),t):zr(n,function(s){return(i+(s-e)%i)%i+e})},R3=function r(e,t,n){var i=t-e,s=i*2;return ln(e)?am(e,r(0,e.length-1),t):zr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},xa=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?G0:Hc),n+=e.substr(t,i-t)+om(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},lm=function(e,t,n,i,s){var o=t-e,a=i-n;return zr(s,function(l){return n+((l-e)/o*a||0)})},B3=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=Yt(e),a={},l,u,c,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(ln(e)&&!ln(t)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(r(e[u-1],e[u]));h--,s=function(g){g*=h;var d=Math.min(f,~~g);return c[d](g-d)},n=t}else i||(e=Ms(ln(e)?[]:{},e));if(!c){for(l in t)Kf.call(a,e,l,"get",t[l]);s=function(g){return th(g,a)||(o?e.p:e)}}}return zr(n,s)},Kh=function(e,t,n){var i=e.labels,s=ii,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},si=function(e,t,n){var i=e.vars,s=i[t],o=It,a=e._ctx,l,u,c;if(!!s)return l=i[t+"Params"],u=i.callbackScope||e,n&&Pr.length&&Vl(),a&&(It=a),c=l?s.apply(u,l):s.call(u),It=o,c},Go=function(e){return Ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Tn),e.progress()<1&&si(e,"onInterrupt"),e},Js,I3=function(e){e=!e.name&&e.default||e;var t=e.name,n=Pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:_a,render:th,add:Kf,kill:K3,modifier:Z3,rawVars:0},o={targetTest:0,get:0,getSetter:eh,aliases:{},register:0};if(vo(),e!==i){if(kn[t])return;fi(i,fi(Gl(e,s),o)),Ms(i.prototype,Ms(s,Gl(e,o))),kn[i.prop=t]=i,e.targetTest&&(Tl.push(i),Yf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}q0(t,i),e.register&&e.register(Yn,i,Cn)},mt=255,Ho={aqua:[0,mt,mt],lime:[0,mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,mt],navy:[0,0,128],white:[mt,mt,mt],olive:[128,128,0],yellow:[mt,mt,0],orange:[mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[mt,0,0],pink:[mt,192,203],cyan:[0,mt,mt],transparent:[mt,mt,mt,0]},Uu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*mt+.5|0},um=function(e,t,n){var i=e?nr(e)?[e>>16,e>>8&mt,e&mt]:0:Ho.black,s,o,a,l,u,c,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ho[e])i=Ho[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&mt,i&mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&mt,e&mt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Hc),!t)l=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,i.length>3&&(i[3]*=1),i[0]=Uu(l+1/3,s,o),i[1]=Uu(l,s,o),i[2]=Uu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(W0),n&&i.length<4&&(i[3]=1),i}else i=e.match(Hc)||Ho.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/mt,o=i[1]/mt,a=i[2]/mt,h=Math.max(s,o,a),f=Math.min(s,o,a),c=(h+f)/2,h===f?l=u=0:(m=h-f,u=c>.5?m/(2-h-f):m/(h+f),l=h===s?(o-a)/m+(o<a?6:0):h===o?(a-s)/m+2:(s-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},cm=function(e){var t=[],n=[],i=-1;return e.split(Lr).forEach(function(s){var o=s.match(Ks)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Jh=function(e,t,n){var i="",s=(e+i).match(Lr),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!s)return e;if(s=s.map(function(f){return(f=um(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(c=cm(e),l=n.c,l.join(i)!==c.c.join(i)))for(u=e.replace(Lr,"1").split(Ks),h=u.length-1;a<h;a++)i+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:n).shift());if(!u)for(u=e.split(Lr),h=u.length-1;a<h;a++)i+=u[a]+s[a];return i+u[h]},Lr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ho)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),U3=/hsl[a]?\(/,fm=function(e){var t=e.join(" "),n;if(Lr.lastIndex=0,Lr.test(t))return n=U3.test(t),e[1]=Jh(e[1],n),e[0]=Jh(e[0],n,cm(e[1])),!0},va,Wn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,u,c,h,f,m,g=function d(p){var x=r()-i,b=p===!0,_,y,M,T;if(x>e&&(n+=x-t),i+=x,M=i-n,_=M-o,(_>0||b)&&(T=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=_+(_>=s?4:s-_),y=1),b||(l=u(d)),y)for(m=0;m<a.length;m++)a[m](M,f,T,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){H0&&(!Xc&&k0()&&(Qn=Xc=window,qf=Qn.document||{},$n.gsap=Yn,(Qn.gsapVersions||(Qn.gsapVersions=[])).push(Yn.version),X0(zl||Qn.GreenSockGlobals||!Qn.gsap&&Qn||{}),c=Qn.requestAnimationFrame),l&&h.sleep(),u=c||function(p){return setTimeout(p,o-h.time*1e3+1|0)},va=1,g(2))},sleep:function(){(c?Qn.cancelAnimationFrame:clearTimeout)(l),va=0,u=_a},lagSmoothing:function(p,x){e=p||1/pt,t=Math.min(x,e,0)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,x,b){var _=x?function(y,M,T,E){p(y,M,T,E),h.remove(_)}:p;return h.remove(p),a[b?"unshift":"push"](_),vo(),_},remove:function(p,x){~(x=a.indexOf(p))&&a.splice(x,1)&&m>=x&&m--},_listeners:a},h}(),vo=function(){return!va&&Wn.wake()},ot={},O3=/^[\d.\-M][\d.\-,\s]/,N3=/["']/g,k3=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,u;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[i]=isNaN(u)?u.replace(N3,"").trim():+u,i=l.substr(a+1).trim();return t},z3=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},W3=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[k3(t[1])]:z3(e).split(",").map(Z0)):ot._CE&&O3.test(e)?ot._CE("",e):n},hm=function(e){return function(t){return 1-e(1-t)}},dm=function r(e,t){for(var n=e._first,i;n;)n instanceof wn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ms=function(e,t){return e&&(Pt(e)?e:ot[e]||W3(e))||t},Ps=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return An(e,function(a){ot[a]=$n[a]=s,ot[o=a.toLowerCase()]=n;for(var l in s)ot[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[a+"."+l]=s[l]}),s},pm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ou=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Gc*(Math.asin(1/i)||0),a=function(c){return c===1?1:i*Math.pow(2,-10*c)*p3((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:pm(a);return s=Gc/s,l.config=function(u,c){return r(e,u,c)},l},Nu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:pm(n);return i.config=function(s){return r(e,s)},i};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ps(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Ps("Elastic",Ou("in"),Ou("out"),Ou());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ps("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ps("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Ps("Circ",function(r){return-(N0(1-r*r)-1)});Ps("Sine",function(r){return r===1?1:-d3(r*f3)+1});Ps("Back",Nu("in"),Nu("out"),Nu());ot.SteppedEase=ot.steps=$n.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-pt;return function(a){return((i*Ea(0,o,a)|0)+s)*n}}};go.ease=ot["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return jf+=r+","+r+"Params,"});var mm=function(e,t){this.id=h3++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Y0,this.set=t?t.getSetter:eh},yo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,xo(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),va||Wn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,xo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(vo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(mu(this,n),!s._dp||s.parent||Q0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===pt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),j0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?_o(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Hl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-pt?0:this._rts,this.totalTime(Ea(-this._delay,this._tDur,i),!0),pu(this),b3(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(vo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(En(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Hl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=_3);var i=Tn;return Tn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Tn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Zh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Jn(this,n),En(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,En(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-pt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Pt(n)?n:K0,a=function(){var u=i.then;i.then=null,Pt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),s(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Go(this)},r}();fi(yo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var wn=function(r){O0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=En(n.sortChildren),wt&&Bi(n.parent||wt,Yi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&em(Yi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ea(0,arguments,this),this},t.from=function(i,s,o){return ea(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ea(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Qo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Nt(i,s,Jn(this,o),1),this},t.call=function(i,s,o){return Bi(this,Nt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Nt(i,o,Jn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,u,c){return o.runBackwards=1,Qo(o).immediateRender=En(o.immediateRender),this.staggerTo(i,s,o,a,l,u,c)},t.staggerFromTo=function(i,s,o,a,l,u,c,h){return a.startAt=o,Qo(a).immediateRender=En(a.immediateRender),this.staggerTo(i,s,a,l,u,c,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:Jt(i),h=this._zTime<0!=i<0&&(this._initted||!u),f,m,g,d,p,x,b,_,y,M,T,E;if(this!==wt&&c>l&&i>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,i+=this._time-a),f=c,y=this._start,_=this._ts,x=!_,h&&(u||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Jt(c%p),c===l?(d=this._repeat,f=u):(d=~~(c/p),d&&d===c/p&&(f=u,d--),f>u&&(f=u)),M=_o(this._tTime,p),!a&&this._tTime&&M!==d&&(M=d),T&&d&1&&(f=u-f,E=1),d!==M&&!this._lock){var v=T&&M&1,w=v===(T&&d&1);if(d<M&&(v=!v),a=v?0:u,this._lock=1,this.render(a||(E?0:Jt(d*p)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,w&&(this._lock=2,a=v?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;dm(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=T3(this,Jt(a),Jt(f)),b&&(c-=f-(f=b._start))),this._tTime=c,this._time=f,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&(si(this,"onStart"),this._tTime!==c))return this;if(f>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,o),f!==this._time||!this._ts&&!x){b=0,g&&(c+=this._zTime=-pt);break}}m=g}else{m=this._last;for(var P=i<0?i:f;m;){if(g=m._prev,(m._act||P<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,s,o||Tn&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!x){b=0,g&&(c+=this._zTime=P?-pt:pt);break}}m=g}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-pt)._zTime=f>=a?1:-1,this._ts))return this._start=y,pu(this),this.render(i,s,o);this._onUpdate&&!s&&si(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ur(this,1),!s&&!(i<0&&!a)&&(c||a||!l)&&(si(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(nr(s)||(s=Jn(this,s,i)),!(i instanceof yo)){if(ln(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Yt(i))return this.addLabel(i,s);if(Pt(i))i=Nt.delayedCall(0,i);else return this}return this!==i?Bi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ii);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Nt?s&&l.push(u):(o&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Yt(i)?this.removeLabel(i):Pt(i)?this.killTweensOf(i):(du(this,i),i===this._recent&&(this._recent=this._last),ps(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Jt(Wn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Jn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Nt.delayedCall(0,s||_a,o);return a.data="isPause",this._hasPause=1,Bi(this,a,Jn(this,i))},t.removePause=function(i){var s=this._first;for(i=Jn(this,i);s;)s._start===i&&s.data==="isPause"&&Ur(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)yr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ri(i),l=this._first,u=nr(s),c;l;)l instanceof Nt?x3(l._targets,a)&&(u?(!yr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Jn(o,i),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=Nt.to(o,fi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||pt,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==p&&xo(g,p,0,1).render(g._time,!0,!0),m=1}c&&c.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,fi({startAt:{time:Jn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Kh(this,Jn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Kh(this,Jn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+pt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=i);return ps(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ps(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ii,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Bi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;xo(o,o===wt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(wt._ts&&(j0(wt,Hl(i,wt)),$0=Wn.frame),Wn.frame>=$h){$h+=Hn.autoSleep||120;var s=wt._first;if((!s||!s._ts)&&Hn.autoSleep&&Wn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Wn.sleep()}}},e}(yo);fi(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var V3=function(e,t,n,i,s,o,a){var l=new Cn(this._pt,e,t,0,1,bm,null,s),u=0,c=0,h,f,m,g,d,p,x,b;for(l.b=n,l.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=xa(i)),o&&(b=[n,i],o(b,e,t),n=b[0],i=b[1]),f=n.match(Bu)||[];h=Bu.exec(i);)g=h[0],d=i.substring(u,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[c++]&&(p=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:d||c===1?d:",",s:p,c:g.charAt(1)==="="?oo(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},u=Bu.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=a,(V0.test(i)||x)&&(l.e=0),this._pt=l,l},Kf=function(e,t,n,i,s,o,a,l,u,c){Pt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Pt(h)?u?e[t.indexOf("set")||!Pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,m=Pt(h)?u?$3:vm:Qf,g;if(Yt(i)&&(~i.indexOf("random(")&&(i=xa(i)),i.charAt(1)==="="&&(g=oo(f,i)+(sn(f)||0),(g||g===0)&&(i=g))),!c||f!==i||Jc)return!isNaN(f*i)&&i!==""?(g=new Cn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?j3:ym,0,m),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&$f(t,i),V3.call(this,e,t,f,i,m,l||Hn.stringFilter,u))},G3=function(e,t,n,i,s){if(Pt(e)&&(e=ta(e,s,t,n,i)),!Wi(e)||e.style&&e.nodeType||ln(e)||z0(e))return Yt(e)?ta(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ta(e[a],s,t,n,i);return o},gm=function(e,t,n,i,s,o){var a,l,u,c;if(kn[e]&&(a=new kn[e]).init(s,a.rawVars?t[e]:G3(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Cn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Js))for(u=n._ptLookup[n._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},yr,Jc,Jf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,u=i.onUpdate,c=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=e._dur,x=e._startAt,b=e._targets,_=e.parent,y=_&&_.data==="nested"?_.vars.targets:b,M=e._overwrite==="auto"&&!Hf,T=e.timeline,E,v,w,P,O,Z,z,I,q,G,Y,B,se;if(T&&(!g||!s)&&(s="none"),e._ease=ms(s,go.ease),e._yEase=m?hm(ms(m===!0?s:m,go.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!T&&!!i.runBackwards,!T||g&&!i.stagger){if(I=b[0]?ds(b[0]).harness:0,B=I&&i[I.prop],E=Gl(i,Yf),x&&(x._zTime<0&&x.progress(1),t<0&&f&&a&&!d?x.render(-1,!0):x.revert(f&&p?wl:g3),x._lazy=0),o){if(Ur(e._startAt=Nt.set(b,fi({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:En(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:h,stagger:0},o))),e._startAt._dp=0,t<0&&(Tn||!a&&!d)&&e._startAt.revert(wl),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!x){if(t&&(a=!1),w=fi({overwrite:!1,data:"isFromStart",lazy:a&&En(l),immediateRender:a,stagger:0,parent:_},E),B&&(w[I.prop]=B),Ur(e._startAt=Nt.set(b,w)),e._startAt._dp=0,t<0&&(Tn?e._startAt.revert(wl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,pt,pt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&En(l)||l&&!p,v=0;v<b.length;v++){if(O=b[v],z=O._gsap||Zf(b)[v]._gsap,e._ptLookup[v]=G={},qc[z.id]&&Pr.length&&Vl(),Y=y===b?v:y.indexOf(O),I&&(q=new I).init(O,B||E,e,Y,y)!==!1&&(e._pt=P=new Cn(e._pt,O,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(F){G[F]=P}),q.priority&&(Z=1)),!I||B)for(w in E)kn[w]&&(q=gm(w,E,e,Y,O,y))?q.priority&&(Z=1):G[w]=P=Kf.call(e,O,w,"get",E[w],Y,y,0,i.stringFilter);e._op&&e._op[v]&&e.kill(O,e._op[v]),M&&e._pt&&(yr=e,wt.killTweensOf(O,G,e.globalTime(t)),se=!e.parent,yr=0),e._pt&&l&&(qc[z.id]=1)}Z&&Mm(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!se,g&&t<=0&&T.render(ii,!0,!0)},H3=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,c,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Jc=1,e.vars[t]="+=0",Jf(e,a),Jc=0,1;l.push(u)}for(f=l.length;f--;)c=l[f],u=c._pt||c,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,c.e&&(c.e=Rt(n)+sn(c.e)),c.b&&(c.b=u.s+sn(c.b))},X3=function(e,t){var n=e[0]?ds(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ms({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},q3=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(ln(t))a=n[e]||(n[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ta=function(e,t,n,i,s){return Pt(e)?e.call(t,n,i,s):Yt(e)&&~e.indexOf("random(")?xa(e):e},_m=jf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",xm={};An(_m+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return xm[r]=1});var Nt=function(r){O0(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Qo(i))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,x=l.yoyoEase,b=i.parent||wt,_=(ln(n)||z0(n)?nr(n[0]):"length"in i)?[n]:ri(n),y,M,T,E,v,w,P,O;if(a._targets=_.length?Zf(_):Wl("GSAP target "+n+" not found. https://greensock.com",!Hn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||f||ka(u)||ka(c)){if(i=a.vars,y=a.timeline=new wn({data:"nested",defaults:d||{},targets:b&&b.data==="nested"?b.vars.targets:_}),y.kill(),y.parent=y._dp=Yi(a),y._start=0,f||ka(u)||ka(c)){if(E=_.length,P=f&&rm(f),Wi(f))for(v in f)~_m.indexOf(v)&&(O||(O={}),O[v]=f[v]);for(M=0;M<E;M++)T=Gl(i,xm),T.stagger=0,x&&(T.yoyoEase=x),O&&Ms(T,O),w=_[M],T.duration=+ta(u,Yi(a),M,w,_),T.delay=(+ta(c,Yi(a),M,w,_)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),y.to(w,T,P?P(M,w,_):0),y._ease=ot.none;y.duration()?u=c=0:a.timeline=0}else if(g){Qo(fi(y.vars.defaults,{ease:"none"})),y._ease=ms(g.ease||i.ease||"none");var Z=0,z,I,q;if(ln(g))g.forEach(function(G){return y.to(_,G,">")}),y.duration();else{T={};for(v in g)v==="ease"||v==="easeEach"||q3(v,g[v],T,g.easeEach);for(v in T)for(z=T[v].sort(function(G,Y){return G.t-Y.t}),Z=0,M=0;M<z.length;M++)I=z[M],q={ease:I.e,duration:(I.t-(M?z[M-1].t:0))/100*u},q[v]=I.v,y.to(_,q,Z),Z+=q.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return m===!0&&!Hf&&(yr=Yi(a),wt.killTweensOf(_),yr=0),Bi(b,Yi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!u&&!g&&a._start===Jt(b._time)&&En(h)&&M3(Yi(a))&&b.data!=="nested")&&(a._tTime=-pt,a.render(Math.max(0,-c)||0)),p&&em(Yi(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,u=this._dur,c=i<0,h=i>l-pt&&!c?l:i<pt?0:i,f,m,g,d,p,x,b,_,y;if(!u)w3(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(f=h,_=this.timeline,this._repeat){if(d=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(d*100+i,s,o);if(f=Jt(h%d),h===l?(g=this._repeat,f=u):(g=~~(h/d),g&&g===h/d&&(f=u,g--),f>u&&(f=u)),x=this._yoyo&&g&1,x&&(y=this._yEase,f=u-f),p=_o(this._tTime,d),f===a&&!o&&this._initted)return this._tTime=h,this;g!==p&&(_&&this._yEase&&dm(_,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=o=1,this.render(Jt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(tm(this,c?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(f/u),this._from&&(this.ratio=b=1-b),f&&!a&&!s&&(si(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;_&&_.render(i<0?i:!f&&x?-pt:_._dur*_._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(c&&$c(this,i,s,o),si(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&si(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&$c(this,i,!0,!0),(i||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ur(this,1),!s&&!(c&&!a)&&(h||a||x)&&(si(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){va||Wn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Jf(this,l),u=this._ease(l/this._dur),H3(this,i,s,o,a,u,l)?this.resetTo(i,s,o,a):(mu(this,0),this.parent||J0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Go(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,yr&&yr.vars.overwrite!==!0)._first||Go(this),this.parent&&o!==this.timeline.totalDuration()&&xo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ri(i):a,u=this._ptLookup,c=this._pt,h,f,m,g,d,p,x;if((!s||s==="all")&&y3(a,l))return s==="all"&&(this._pt=0),Go(this);for(h=this._op=this._op||[],s!=="all"&&(Yt(s)&&(d={},An(s,function(b){return d[b]=1}),s=d),s=X3(a,s)),x=a.length;x--;)if(~l.indexOf(a[x])){f=u[x],s==="all"?(h[x]=s,g=f,m={}):(m=h[x]=h[x]||{},g=s);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&du(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&c&&Go(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ea(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ea(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return wt.killTweensOf(i,s,o)},e}(yo);fi(Nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(r){Nt[r]=function(){var e=new wn,t=jc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Qf=function(e,t,n){return e[t]=n},vm=function(e,t,n){return e[t](n)},$3=function(e,t,n,i){return e[t](i.fp,n)},Y3=function(e,t,n){return e.setAttribute(t,n)},eh=function(e,t){return Pt(e[t])?vm:Xf(e[t])&&e.setAttribute?Y3:Qf},ym=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},j3=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},bm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},th=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Z3=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},K3=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?du(this,t,"_pt"):t.dep||(n=1),t=i;return!n},J3=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Mm=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Cn=function(){function r(t,n,i,s,o,a,l,u,c){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||ym,this.d=l||this,this.set=u||Qf,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=J3,this.m=n,this.mt=s,this.tween=i},r}();An(jf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Yf[r]=1});$n.TweenMax=$n.TweenLite=Nt;$n.TimelineLite=$n.TimelineMax=wn;wt=new wn({sortChildren:!1,defaults:go,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Hn.stringFilter=fm;var bo=[],El={},Q3=[],Qh=0,ku=function(e){return(El[e]||Q3).map(function(t){return t()})},Qc=function(){var e=Date.now(),t=[];e-Qh>2&&(ku("matchMediaInit"),bo.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,u;for(a in i)o=Qn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(n.revert(),l&&t.push(n))}),ku("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Qh=e,ku("matchMedia"))},Sm=function(){function r(t,n){this.selector=n&&Zc(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Pt(n)&&(s=i,i=n,n=Pt);var o=this,a=function(){var u=It,c=o.selector,h;return u&&u!==o&&u.data.push(o),s&&(o.selector=Zc(s)),It=o,h=i.apply(o,arguments),Pt(h)&&o._r.push(h),It=u,o.selector=c,o.isReverted=!1,h};return o.last=a,n===Pt?a(o):n?o[n]=a:a},e.ignore=function(n){var i=It;It=null,n(this),It=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Nt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof yo)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=bo.indexOf(this);~a&&bo.splice(a,1)}},e.revert=function(n){this.kill(n||{})},r}(),ev=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Wi(n)||(n={matches:n});var o=new Sm(0,s||this.scope),a=o.conditions={},l,u,c;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(u in n)u==="all"?c=1:(l=Qn.matchMedia(n[u]),l&&(bo.indexOf(o)<0&&bo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Qc):l.addEventListener("change",Qc)));return c&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Xl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return I3(i)})},timeline:function(e){return new wn(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Yt(e)&&(e=ri(e)[0]);var s=ds(e||{}).get,o=n?K0:Z0;return n==="native"&&(n=""),e&&(t?o((kn[t]&&kn[t].get||s)(e,t,n,i)):function(a,l,u){return o((kn[a]&&kn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,n){if(e=ri(e),e.length>1){var i=e.map(function(c){return Yn.quickSetter(c,t,n)}),s=i.length;return function(c){for(var h=s;h--;)i[h](c)}}e=e[0]||{};var o=kn[t],a=ds(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;Js._pt=0,h.init(e,n?c+n:c,Js,0,[e]),h.render(1,h),Js._pt&&th(1,Js)}:a.set(e,l);return o?u:function(c){return u(e,l,n?c+n:c,a,1)}},quickTo:function(e,t,n){var i,s=Yn.to(e,Ms((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ms(e.ease,go.ease)),Yh(go,e||{})},config:function(e){return Yh(Hn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!kn[a]&&!$n[a]&&Wl(t+" effect requires "+a+" plugin.")}),Iu[t]=function(a,l,u){return n(ri(a),fi(l||{},s),u)},o&&(wn.prototype[t]=function(a,l,u){return this.add(Iu[t](a,Wi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ot[e]=ms(t)},parseEase:function(e,t){return arguments.length?ms(e,t):ot},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new wn(e),i,s;for(n.smoothChildTiming=En(e.smoothChildTiming),wt.remove(n),n._dp=0,n._time=n._tTime=wt._time,i=wt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Nt&&i.vars.onComplete===i._targets[0]))&&Bi(n,i,i._start-i._delay),i=s;return Bi(wt,n,0),n},context:function(e,t){return e?new Sm(e,t):It},matchMedia:function(e){return new ev(e)},matchMediaRefresh:function(){return bo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Qc()},addEventListener:function(e,t){var n=El[e]||(El[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=El[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:F3,wrapYoyo:R3,distribute:rm,random:om,snap:sm,normalize:L3,getUnit:sn,clamp:A3,splitColor:um,toArray:ri,selector:Zc,mapRange:lm,pipe:D3,unitize:P3,interpolate:B3,shuffle:im},install:X0,effects:Iu,ticker:Wn,updateRoot:wn.updateRoot,plugins:kn,globalTimeline:wt,core:{PropTween:Cn,globals:q0,Tween:Nt,Timeline:wn,Animation:yo,getCache:ds,_removeLinkedListItem:du,reverting:function(){return Tn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return Hf=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Xl[r]=Nt[r]});Wn.add(wn.updateRoot);Js=Xl.to({},{duration:0});var tv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},nv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=tv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},zu=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,u;if(Yt(s)&&(l={},An(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}nv(a,s)}}}},Yn=Xl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Tn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},zu("roundProps",Kc),zu("modifiers"),zu("snap",sm))||Xl;Nt.version=wn.version=Yn.version="3.11.3";H0=1;k0()&&vo();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ed,br,ao,nh,as,td,ih,iv=function(){return typeof window<"u"},ir={},Kr=180/Math.PI,lo=Math.PI/180,Ls=Math.atan2,nd=1e8,rh=/([A-Z])/g,rv=/(left|right|width|margin|padding|x)/i,sv=/[\s,\(]\S/,Ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ef=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ov=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},av=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},lv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},wm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Tm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},uv=function(e,t,n){return e.style[t]=n},cv=function(e,t,n){return e.style.setProperty(t,n)},fv=function(e,t,n){return e._gsap[t]=n},hv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},dv=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},pv=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Tt="transform",wi=Tt+"Origin",mv=function(e,t){var n=this,i=this.target,s=i.style;if(e in ir){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Ji[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ji(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:ji(i,e)),this.props.indexOf(Tt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wi,t,"")),e=Tt}(s||t)&&this.props.push(e,t,s[e])},Em=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(rh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ih(),s&&!s.isStart&&!n[Tt]&&(Em(n),i.uncache=1)}},Am=function(e,t){var n={target:e,props:[],revert:gv,save:mv};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Cm,tf=function(e,t){var n=br.createElementNS?br.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):br.createElement(e);return n.style?n:br.createElement(e)},Ni=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(rh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Mo(t)||t,1)||""},id="O,Moz,ms,Ms,Webkit".split(","),Mo=function(e,t,n){var i=t||as,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(id[o]+e in s););return o<0?null:(o===3?"ms":o>=0?id[o]:"")+e},nf=function(){iv()&&window.document&&(ed=window,br=ed.document,ao=br.documentElement,as=tf("div")||{style:{}},tf("div"),Tt=Mo(Tt),wi=Tt+"Origin",as.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cm=!!Mo("perspective"),ih=Yn.core.reverting,nh=1)},Wu=function r(e){var t=tf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(ao.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ao.removeChild(t),this.style.cssText=s,o},rd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Dm=function(e){var t;try{t=e.getBBox()}catch{t=Wu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Wu||(t=Wu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+rd(e,["x","cx","x1"])||0,y:+rd(e,["y","cy","y1"])||0,width:0,height:0}:t},Pm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dm(e))},ya=function(e,t){if(t){var n=e.style;t in ir&&t!==wi&&(t=Tt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(rh,"-$1").toLowerCase())):n.removeAttribute(t)}},Mr=function(e,t,n,i,s,o){var a=new Cn(e._pt,t,n,0,1,o?Tm:wm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},sd={deg:1,rad:1,turn:1},_v={grid:1,flex:1},Or=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=as.style,l=rv.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,x;return i===o||!s||sd[i]||sd[o]?s:(o!=="px"&&!f&&(s=r(e,t,n,"px")),x=e.getCTM&&Pm(e),(m||o==="%")&&(ir[t]||~t.indexOf("adius"))?(g=x?e.getBBox()[l?"width":"height"]:e[c],Rt(m?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(f?o:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,x&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===br||!d.appendChild)&&(d=br.body),p=d._gsap,p&&m&&p.width&&l&&p.time===Wn.time&&!p.uncache?Rt(s/p.width*h):((m||o==="%")&&!_v[Ni(d,"display")]&&(a.position=Ni(e,"position")),d===e&&(a.position="static"),d.appendChild(as),g=as[c],d.removeChild(as),a.position="absolute",l&&m&&(p=ds(d),p.time=Wn.time,p.width=d[c]),Rt(f?g*s/h:g&&s?h/g*s:0))))},ji=function(e,t,n,i){var s;return nh||nf(),t in Ji&&t!=="transform"&&(t=Ji[t],~t.indexOf(",")&&(t=t.split(",")[0])),ir[t]&&t!=="transform"?(s=Ma(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:$l(Ni(e,wi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ql[t]&&ql[t](e,t,n)||Ni(e,t)||Y0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Or(e,t,s,n)+n:s},xv=function(e,t,n,i){if(!n||n==="none"){var s=Mo(t,e,1),o=s&&Ni(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ni(e,"borderTopColor"))}var a=new Cn(this._pt,e.style,t,0,1,bm),l=0,u=0,c,h,f,m,g,d,p,x,b,_,y,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Ni(e,t)||i,e.style[t]=n),c=[n,i],fm(c),n=c[0],i=c[1],f=n.match(Ks)||[],M=i.match(Ks)||[],M.length){for(;h=Ks.exec(i);)p=h[0],b=i.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(d=f[u++]||"")&&(m=parseFloat(d)||0,y=d.substr((m+"").length),p.charAt(1)==="="&&(p=oo(m,p)+y),x=parseFloat(p),_=p.substr((x+"").length),l=Ks.lastIndex-_.length,_||(_=_||Hn.units[t]||y,l===i.length&&(i+=_,a.e+=_)),y!==_&&(m=Or(e,t,d,_)||0),a._pt={_next:a._pt,p:b||u===1?b:",",s:m,c:x-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Tm:wm;return V0.test(i)&&(a.e=0),this._pt=a,a},od={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=od[n]||n,t[1]=od[i]||i,t.join(" ")},yv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,u;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],ir[a]&&(l=1,a=a==="transformOrigin"?wi:Tt),ya(n,a);l&&(ya(n,Tt),o&&(o.svg&&n.removeAttribute("transform"),Ma(n,1),o.uncache=1,Em(i)))}},ql={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Cn(e._pt,t,n,0,0,yv);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ba=[1,0,0,1,0,0],Lm={},Fm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ad=function(e){var t=Ni(e,Tt);return Fm(t)?ba:t.substr(7).match(W0).map(Rt)},sh=function(e,t){var n=e._gsap||ds(e),i=e.style,s=ad(e),o,a,l,u;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ba:s):(s===ba&&!e.offsetParent&&e!==ao&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,ao.appendChild(e)),s=ad(e),l?i.display=l:ya(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):ao.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},rf=function(e,t,n,i,s,o){var a=e._gsap,l=s||sh(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],x=l[4],b=l[5],_=t.split(" "),y=parseFloat(_[0])||0,M=parseFloat(_[1])||0,T,E,v,w;n?l!==ba&&(E=m*p-g*d)&&(v=y*(p/E)+M*(-d/E)+(d*b-p*x)/E,w=y*(-g/E)+M*(m/E)-(m*b-g*x)/E,y=v,M=w):(T=Dm(e),y=T.x+(~_[0].indexOf("%")?y/100*T.width:y),M=T.y+(~(_[1]||_[0]).indexOf("%")?M/100*T.height:M)),i||i!==!1&&a.smooth?(x=y-u,b=M-c,a.xOffset=h+(x*m+b*d)-x,a.yOffset=f+(x*g+b*p)-b):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[wi]="0px 0px",o&&(Mr(o,a,"xOrigin",u,y),Mr(o,a,"yOrigin",c,M),Mr(o,a,"xOffset",h,a.xOffset),Mr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Ma=function(e,t){var n=e._gsap||new mm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ni(e,wi)||"0",c,h,f,m,g,d,p,x,b,_,y,M,T,E,v,w,P,O,Z,z,I,q,G,Y,B,se,F,X,V,fe,ue,me;return c=h=f=d=p=x=b=_=y=0,m=g=1,n.svg=!!(e.getCTM&&Pm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Tt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Tt]!=="none"?l[Tt]:"")),i.scale=i.rotate=i.translate="none"),E=sh(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),u=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),rf(e,Y||u,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),M=n.xOrigin||0,T=n.yOrigin||0,E!==ba&&(O=E[0],Z=E[1],z=E[2],I=E[3],c=q=E[4],h=G=E[5],E.length===6?(m=Math.sqrt(O*O+Z*Z),g=Math.sqrt(I*I+z*z),d=O||Z?Ls(Z,O)*Kr:0,b=z||I?Ls(z,I)*Kr+d:0,b&&(g*=Math.abs(Math.cos(b*lo))),n.svg&&(c-=M-(M*O+T*z),h-=T-(M*Z+T*I))):(me=E[6],fe=E[7],F=E[8],X=E[9],V=E[10],ue=E[11],c=E[12],h=E[13],f=E[14],v=Ls(me,V),p=v*Kr,v&&(w=Math.cos(-v),P=Math.sin(-v),Y=q*w+F*P,B=G*w+X*P,se=me*w+V*P,F=q*-P+F*w,X=G*-P+X*w,V=me*-P+V*w,ue=fe*-P+ue*w,q=Y,G=B,me=se),v=Ls(-z,V),x=v*Kr,v&&(w=Math.cos(-v),P=Math.sin(-v),Y=O*w-F*P,B=Z*w-X*P,se=z*w-V*P,ue=I*P+ue*w,O=Y,Z=B,z=se),v=Ls(Z,O),d=v*Kr,v&&(w=Math.cos(v),P=Math.sin(v),Y=O*w+Z*P,B=q*w+G*P,Z=Z*w-O*P,G=G*w-q*P,O=Y,q=B),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,x=180-x),m=Rt(Math.sqrt(O*O+Z*Z+z*z)),g=Rt(Math.sqrt(G*G+me*me)),v=Ls(q,G),b=Math.abs(v)>2e-4?v*Kr:0,y=ue?1/(ue<0?-ue:ue):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Fm(Ni(e,Tt)),Y&&e.setAttribute("transform",Y))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(m*=-1,b+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Rt(m),n.scaleY=Rt(g),n.rotation=Rt(d)+a,n.rotationX=Rt(p)+a,n.rotationY=Rt(x)+a,n.skewX=b+a,n.skewY=_+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(u.split(" ")[2])||0)&&(i[wi]=$l(u)),n.xOffset=n.yOffset=0,n.force3D=Hn.force3D,n.renderTransform=n.svg?Mv:Cm?Rm:bv,n.uncache=0,n},$l=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vu=function(e,t,n){var i=sn(t);return Rt(parseFloat(t)+parseFloat(Or(e,"x",n+"px",i)))+i},bv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Rm(e,t)},Xr="0deg",Io="0px",qr=") ",Rm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,u=n.rotation,c=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,x=n.force3D,b=n.target,_=n.zOrigin,y="",M=x==="auto"&&e&&e!==1||x===!0;if(_&&(h!==Xr||c!==Xr)){var T=parseFloat(c)*lo,E=Math.sin(T),v=Math.cos(T),w;T=parseFloat(h)*lo,w=Math.cos(T),o=Vu(b,o,E*w*-_),a=Vu(b,a,-Math.sin(T)*-_),l=Vu(b,l,v*w*-_+_)}p!==Io&&(y+="perspective("+p+qr),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(M||o!==Io||a!==Io||l!==Io)&&(y+=l!==Io||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+qr),u!==Xr&&(y+="rotate("+u+qr),c!==Xr&&(y+="rotateY("+c+qr),h!==Xr&&(y+="rotateX("+h+qr),(f!==Xr||m!==Xr)&&(y+="skew("+f+", "+m+qr),(g!==1||d!==1)&&(y+="scale("+g+", "+d+qr),b.style[Tt]=y||"translate(0, 0)"},Mv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,u=n.skewX,c=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,x=n.yOffset,b=n.forceCSS,_=parseFloat(o),y=parseFloat(a),M,T,E,v,w;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=lo,u*=lo,M=Math.cos(l)*h,T=Math.sin(l)*h,E=Math.sin(l-u)*-f,v=Math.cos(l-u)*f,u&&(c*=lo,w=Math.tan(u-c),w=Math.sqrt(1+w*w),E*=w,v*=w,c&&(w=Math.tan(c),w=Math.sqrt(1+w*w),M*=w,T*=w)),M=Rt(M),T=Rt(T),E=Rt(E),v=Rt(v)):(M=h,v=f,T=E=0),(_&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(_=Or(m,"x",o,"px"),y=Or(m,"y",a,"px")),(g||d||p||x)&&(_=Rt(_+g-(g*M+d*E)+p),y=Rt(y+d-(g*T+d*v)+x)),(i||s)&&(w=m.getBBox(),_=Rt(_+i/100*w.width),y=Rt(y+s/100*w.height)),w="matrix("+M+","+T+","+E+","+v+","+_+","+y+")",m.setAttribute("transform",w),b&&(m.style[Tt]=w)},Sv=function(e,t,n,i,s){var o=360,a=Yt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Kr:1),u=l-i,c=i+u+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*nd)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*nd)%o-~~(u/o)*o)),e._pt=f=new Cn(e._pt,t,n,i,u,ov),f.e=c,f.u="deg",e._props.push(n),f},ld=function(e,t){for(var n in t)e[n]=t[n];return e},wv=function(e,t,n){var i=ld({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,u,c,h,f,m,g;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),o[Tt]=t,a=Ma(n,1),ya(n,Tt),n.setAttribute("transform",u)):(u=getComputedStyle(n)[Tt],o[Tt]=t,a=Ma(n,1),o[Tt]=u);for(l in ir)u=i[l],c=a[l],u!==c&&s.indexOf(l)<0&&(m=sn(u),g=sn(c),h=m!==g?Or(n,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new Cn(e._pt,a,l,h,f-h,ef),e._pt.u=g||0,e._props.push(l));ld(a,i)};An("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});ql[e>1?"border"+r:r]=function(a,l,u,c,h){var f,m;if(arguments.length<4)return f=o.map(function(g){return ji(a,g,u)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(c+"").split(" "),m={},o.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),a.init(l,m,h)}});var Bm={name:"css",register:nf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,u,c,h,f,m,g,d,p,x,b,_,y,M,T,E,v;nh||nf(),this.styles=this.styles||Am(e),v=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(c=t[d],!(kn[d]&&gm(d,t,n,i,e,s)))){if(m=typeof c,g=ql[d],m==="function"&&(c=c.call(n,i,e,s),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=xa(c)),g)g(this,e,d,c,n)&&(E=1);else if(d.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(d)+"").trim(),c+="",Lr.lastIndex=0,Lr.test(u)||(p=sn(u),x=sn(c)),x?p!==x&&(u=Or(e,d,u,x)+x):p&&(c+=p),this.add(a,"setProperty",u,c,i,s,0,0,d),o.push(d),v.push(d,0,a[d]);else if(m!=="undefined"){if(l&&d in l?(u=typeof l[d]=="function"?l[d].call(n,i,e,s):l[d],Yt(u)&&~u.indexOf("random(")&&(u=xa(u)),sn(u+"")||(u+=Hn.units[d]||sn(ji(e,d))||""),(u+"").charAt(1)==="="&&(u=ji(e,d))):u=ji(e,d),f=parseFloat(u),b=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),b&&(c=c.substr(2)),h=parseFloat(c),d in Ji&&(d==="autoAlpha"&&(f===1&&ji(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,a.visibility),Mr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Ji[d],~d.indexOf(",")&&(d=d.split(",")[0]))),_=d in ir,_){if(this.styles.save(d),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ma(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new Cn(this._pt,a,Tt,0,1,M.renderTransform,M,0,-1),y.dep=1),d==="scale")this._pt=new Cn(this._pt,M,"scaleY",f,(b?oo(f,b+h):h)-f||0,ef),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(wi,0,a[wi]),c=vv(c),M.svg?rf(e,c,0,T,0,this):(x=parseFloat(c.split(" ")[2])||0,x!==M.zOrigin&&Mr(this,M,"zOrigin",M.zOrigin,x),Mr(this,a,d,$l(u),$l(c)));continue}else if(d==="svgOrigin"){rf(e,c,1,T,0,this);continue}else if(d in Lm){Sv(this,M,d,f,b?oo(f,b+c):c);continue}else if(d==="smoothOrigin"){Mr(this,M,"smooth",M.smooth,c);continue}else if(d==="force3D"){M[d]=c;continue}else if(d==="transform"){wv(this,c,e);continue}}else d in a||(d=Mo(d)||d);if(_||(h||h===0)&&(f||f===0)&&!sv.test(c)&&d in a)p=(u+"").substr((f+"").length),h||(h=0),x=sn(c)||(d in Hn.units?Hn.units[d]:p),p!==x&&(f=Or(e,d,u,x)),this._pt=new Cn(this._pt,_?M:a,d,f,(b?oo(f,b+h):h)-f,!_&&(x==="px"||d==="zIndex")&&t.autoRound!==!1?lv:ef),this._pt.u=x||0,p!==x&&x!=="%"&&(this._pt.b=u,this._pt.r=av);else if(d in a)xv.call(this,e,d,u,b?b+c:c);else if(d in e)this.add(e,d,u||e[d],b?b+c:c,i,s);else{$f(d,c);continue}_||(d in a?v.push(d,0,a[d]):v.push(d,1,u||e[d])),o.push(d)}}E&&Mm(this)},render:function(e,t){if(t.tween._time||!ih())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ji,aliases:Ji,getSetter:function(e,t,n){var i=Ji[t];return i&&i.indexOf(",")<0&&(t=i),t in ir&&t!==wi&&(e._gsap.x||ji(e,"x"))?n&&td===n?t==="scale"?hv:fv:(td=n||{})&&(t==="scale"?dv:pv):e.style&&!Xf(e.style[t])?uv:~t.indexOf("-")?cv:eh(e,t)},core:{_removeProperty:ya,_getMatrix:sh}};Yn.utils.checkPrefix=Mo;Yn.core.getStyleSaver=Am;(function(r,e,t,n){var i=An(r+","+e+","+t,function(s){ir[s]=1});An(e,function(s){Hn.units[s]="deg",Lm[s]=1}),Ji[i[13]]=r+","+e,An(n,function(s){var o=s.split(":");Ji[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Hn.units[r]="px"});Yn.registerPlugin(Bm);var Dn=Yn.registerPlugin(Bm)||Yn;Dn.core.Tween;const Tv=rr({__name:"FirstView",setup(r){const e=Oi(),t=Oi(),n=Oi(),i=Oi(window.innerHeight);return or(()=>{if(t.value){const o=t.value.textContent.split("").map(l=>'<span style="display:inline-block">'+l+"</span>");t.value.innerHTML=o.join(""),Dn.timeline().set(n.value,{x:"-50vw",y:"-20vh"}).set("body",{overflow:"hidden"}).to(n.value,{y:0,duration:1,ease:"Bounce.easeOut"}).to(n.value,{x:"54vw",duration:3,delay:-1,ease:"Power.easeOut"}).fromTo(".first-view span",{opacity:0,y:-10},{opacity:1,y:0,duration:1,delay:-2.6,stagger:{each:.09},ease:"Bounce.easeOut"}).to(e.value,{background:"rgba(0,0,0,0)",scale:.8,duration:1,ease:"Power2.easeOut"}).to("body",{overflow:"auto"},"-=1")}}),(s,o)=>(Ge(),qe("div",{class:"first-view",ref_key:"base",ref:e,style:Ql(`height:${i.value}px`)},[We("div",{ref_key:"ball",ref:n,class:"ball"},null,512),We("h1",{ref_key:"headingText",ref:t},"Frontend\u7802\u904A\u3073\u3057\u3066\u307F\u305F",512)],4))}});const ar=(r,e)=>{const t=r.__vccOpts||r;for(const[n,i]of e)t[n]=i;return t},Ev=ar(Tv,[["__scopeId","data-v-d805a4a4"]]);function ud(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Av(r,e,t){return e&&ud(r.prototype,e),t&&ud(r,t),r}/*!
 * Observer 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var an,sf,Vn,Sr,wr,uo,Im,Jr,na,Um,Qi,gi,Om=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},Nm=1,Qs=[],st=[],ki=[],ia=Date.now,of=function(e,t){return t},Cv=function(){var e=na.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,ki),st=n,ki=i,of=function(o,a){return t[o](a)}},Fr=function(e,t){return~ki.indexOf(e)&&ki[ki.indexOf(e)+1][t]},ra=function(e){return!!~Um.indexOf(e)},yn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},fn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},za="scrollLeft",Wa="scrollTop",af=function(){return Qi&&Qi.isPressed||st.cache++},Yl=function(e,t){var n=function i(s){if(s||s===0){Nm&&(Vn.history.scrollRestoration="manual");var o=Qi&&Qi.isPressed;s=i.v=Math.round(s)||(Qi&&Qi.iOS?1:0),e(s),i.cacheID=st.cache,o&&of("ss",s)}else(t||st.cache!==i.cacheID||of("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},xn={s:za,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yl(function(r){return arguments.length?Vn.scrollTo(r,kt.sc()):Vn.pageXOffset||Sr[za]||wr[za]||uo[za]||0})},kt={s:Wa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:xn,sc:Yl(function(r){return arguments.length?Vn.scrollTo(xn.sc(),r):Vn.pageYOffset||Sr[Wa]||wr[Wa]||uo[Wa]||0})},Mn=function(e){return an.utils.toArray(e)[0]||(typeof e=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Nr=function(e,t){var n=t.s,i=t.sc;ra(e)&&(e=Sr.scrollingElement||wr);var s=st.indexOf(e),o=i===kt.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||e.addEventListener("scroll",af);var a=st[s+o],l=a||(st[s+o]=Yl(Fr(e,n),!0)||(ra(e)?i:Yl(function(u){return arguments.length?e[n]=u:e[n]})));return l.target=e,a||(l.smooth=an.getProperty(e,"scrollBehavior")==="smooth"),l},lf=function(e,t,n){var i=e,s=e,o=ia(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,d){var p=ia();d||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var d=a,p=s,x=ia();return(g||g===0)&&g!==i&&c(g),o===a||x-a>u?0:(i+(n?p:-p))/((n?x:o)-d)*1e3};return{update:c,reset:h,getVelocity:f}},Uo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},cd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},km=function(){na=an.core.globals().ScrollTrigger,na&&na.core&&Cv()},zm=function(e){return an=e||Om(),an&&typeof document<"u"&&document.body&&(Vn=window,Sr=document,wr=Sr.documentElement,uo=Sr.body,Um=[Vn,Sr,wr,uo],an.utils.clamp,Jr="onpointerenter"in uo?"pointer":"mouse",Im=Ut.isTouch=Vn.matchMedia&&Vn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Vn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,gi=Ut.eventTypes=("ontouchstart"in wr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in wr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Nm=0},500),km(),sf=1),sf};xn.op=kt;st.cache=0;var Ut=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){sf||zm(an)||console.warn("Please gsap.registerPlugin(Observer)"),na||km();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,u=n.debounce,c=n.preventDefault,h=n.onStop,f=n.onStopDelay,m=n.ignore,g=n.wheelSpeed,d=n.event,p=n.onDragStart,x=n.onDragEnd,b=n.onDrag,_=n.onPress,y=n.onRelease,M=n.onRight,T=n.onLeft,E=n.onUp,v=n.onDown,w=n.onChangeX,P=n.onChangeY,O=n.onChange,Z=n.onToggleX,z=n.onToggleY,I=n.onHover,q=n.onHoverEnd,G=n.onMove,Y=n.ignoreCheck,B=n.isNormalizer,se=n.onGestureStart,F=n.onGestureEnd,X=n.onWheel,V=n.onEnable,fe=n.onDisable,ue=n.onClick,me=n.scrollSpeed,H=n.capture,Le=n.allowClicks,ve=n.lockAxis,Fe=n.onLockAxis;this.target=a=Mn(a)||wr,this.vars=n,m&&(m=an.utils.toArray(m)),i=i||1e-9,s=s||0,g=g||1,me=me||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Vn.getComputedStyle(uo).lineHeight)||22);var xe,ke,D,L,$,oe,ne,R=this,de=0,te=0,pe=Nr(a,xn),le=Nr(a,kt),A=pe(),S=le(),N=~o.indexOf("touch")&&!~o.indexOf("pointer")&&gi[0]==="pointerdown",K=ra(a),Q=a.ownerDocument||Sr,ce=[0,0,0],_e=[0,0,0],ge=0,ee=function(){return ge=ia()},Ce=function(ie,Ae){return(R.event=ie)&&m&&~m.indexOf(ie.target)||Ae&&N&&ie.pointerType!=="touch"||Y&&Y(ie,Ae)},Ue=function(){R._vx.reset(),R._vy.reset(),ke.pause(),h&&h(R)},Te=function(){var ie=R.deltaX=cd(ce),Ae=R.deltaY=cd(_e),Ee=Math.abs(ie)>=i,ze=Math.abs(Ae)>=i;O&&(Ee||ze)&&O(R,ie,Ae,ce,_e),Ee&&(M&&R.deltaX>0&&M(R),T&&R.deltaX<0&&T(R),w&&w(R),Z&&R.deltaX<0!=de<0&&Z(R),de=R.deltaX,ce[0]=ce[1]=ce[2]=0),ze&&(v&&R.deltaY>0&&v(R),E&&R.deltaY<0&&E(R),P&&P(R),z&&R.deltaY<0!=te<0&&z(R),te=R.deltaY,_e[0]=_e[1]=_e[2]=0),(L||D)&&(G&&G(R),D&&(b(R),D=!1),L=!1),oe&&!(oe=!1)&&Fe&&Fe(R),$&&(X(R),$=!1),xe=0},Re=function(ie,Ae,Ee){ce[Ee]+=ie,_e[Ee]+=Ae,R._vx.update(ie),R._vy.update(Ae),u?xe||(xe=requestAnimationFrame(Te)):Te()},Se=function(ie,Ae){ve&&!ne&&(R.axis=ne=Math.abs(ie)>Math.abs(Ae)?"x":"y",oe=!0),ne!=="y"&&(ce[2]+=ie,R._vx.update(ie,!0)),ne!=="x"&&(_e[2]+=Ae,R._vy.update(Ae,!0)),u?xe||(xe=requestAnimationFrame(Te)):Te()},we=function(ie){if(!Ce(ie,1)){ie=Uo(ie,c);var Ae=ie.clientX,Ee=ie.clientY,ze=Ae-R.x,Lt=Ee-R.y,Xe=R.isDragging;R.x=Ae,R.y=Ee,(Xe||Math.abs(R.startX-Ae)>=s||Math.abs(R.startY-Ee)>=s)&&(b&&(D=!0),Xe||(R.isDragging=!0),Se(ze,Lt),Xe||p&&p(R))}},nt=R.onPress=function(je){Ce(je,1)||(R.axis=ne=null,ke.pause(),R.isPressed=!0,je=Uo(je),de=te=0,R.startX=R.x=je.clientX,R.startY=R.y=je.clientY,R._vx.reset(),R._vy.reset(),yn(B?a:Q,gi[1],we,c,!0),R.deltaX=R.deltaY=0,_&&_(R))},ut=function(ie){if(!Ce(ie,1)){fn(B?a:Q,gi[1],we,!0);var Ae=R.isDragging&&(Math.abs(R.x-R.startX)>3||Math.abs(R.y-R.startY)>3),Ee=Uo(ie);Ae||(R._vx.reset(),R._vy.reset(),c&&Le&&an.delayedCall(.08,function(){if(ia()-ge>300&&!ie.defaultPrevented){if(ie.target.click)ie.target.click();else if(Q.createEvent){var ze=Q.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,Vn,1,Ee.screenX,Ee.screenY,Ee.clientX,Ee.clientY,!1,!1,!1,!1,0,null),ie.target.dispatchEvent(ze)}}})),R.isDragging=R.isGesturing=R.isPressed=!1,h&&!B&&ke.restart(!0),x&&Ae&&x(R),y&&y(R,Ae)}},U=function(ie){return ie.touches&&ie.touches.length>1&&(R.isGesturing=!0)&&se(ie,R.isDragging)},re=function(){return(R.isGesturing=!1)||F(R)},he=function(ie){if(!Ce(ie)){var Ae=pe(),Ee=le();Re((Ae-A)*me,(Ee-S)*me,1),A=Ae,S=Ee,h&&ke.restart(!0)}},be=function(ie){if(!Ce(ie)){ie=Uo(ie,c),X&&($=!0);var Ae=(ie.deltaMode===1?l:ie.deltaMode===2?Vn.innerHeight:1)*g;Re(ie.deltaX*Ae,ie.deltaY*Ae,0),h&&!B&&ke.restart(!0)}},Pe=function(ie){if(!Ce(ie)){var Ae=ie.clientX,Ee=ie.clientY,ze=Ae-R.x,Lt=Ee-R.y;R.x=Ae,R.y=Ee,L=!0,(ze||Lt)&&Se(ze,Lt)}},Ke=function(ie){R.event=ie,I(R)},yt=function(ie){R.event=ie,q(R)},At=function(ie){return Ce(ie)||Uo(ie,c)&&ue(R)};ke=R._dc=an.delayedCall(f||.25,Ue).pause(),R.deltaX=R.deltaY=0,R._vx=lf(0,50,!0),R._vy=lf(0,50,!0),R.scrollX=pe,R.scrollY=le,R.isDragging=R.isGesturing=R.isPressed=!1,R.enable=function(je){return R.isEnabled||(yn(K?Q:a,"scroll",af),o.indexOf("scroll")>=0&&yn(K?Q:a,"scroll",he,c,H),o.indexOf("wheel")>=0&&yn(a,"wheel",be,c,H),(o.indexOf("touch")>=0&&Im||o.indexOf("pointer")>=0)&&(yn(a,gi[0],nt,c,H),yn(Q,gi[2],ut),yn(Q,gi[3],ut),Le&&yn(a,"click",ee,!1,!0),ue&&yn(a,"click",At),se&&yn(Q,"gesturestart",U),F&&yn(Q,"gestureend",re),I&&yn(a,Jr+"enter",Ke),q&&yn(a,Jr+"leave",yt),G&&yn(a,Jr+"move",Pe)),R.isEnabled=!0,je&&je.type&&nt(je),V&&V(R)),R},R.disable=function(){R.isEnabled&&(Qs.filter(function(je){return je!==R&&ra(je.target)}).length||fn(K?Q:a,"scroll",af),R.isPressed&&(R._vx.reset(),R._vy.reset(),fn(B?a:Q,gi[1],we,!0)),fn(K?Q:a,"scroll",he,H),fn(a,"wheel",be,H),fn(a,gi[0],nt,H),fn(Q,gi[2],ut),fn(Q,gi[3],ut),fn(a,"click",ee,!0),fn(a,"click",At),fn(Q,"gesturestart",U),fn(Q,"gestureend",re),fn(a,Jr+"enter",Ke),fn(a,Jr+"leave",yt),fn(a,Jr+"move",Pe),R.isEnabled=R.isPressed=R.isDragging=!1,fe&&fe(R))},R.kill=function(){R.disable();var je=Qs.indexOf(R);je>=0&&Qs.splice(je,1),Qi===R&&(Qi=0)},Qs.push(R),B&&ra(a)&&(Qi=R),R.enable(d)},Av(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ut.version="3.11.3";Ut.create=function(r){return new Ut(r)};Ut.register=zm;Ut.getAll=function(){return Qs.slice()};Ut.getById=function(r){return Qs.filter(function(e){return e.vars.id===r})[0]};Om()&&an.registerPlugin(Ut);/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Oe,Ys,rt,Mt,Ii,Dt,Wm,jl,Zl,eo,Al,Va,nn,gu,uf,mn,fd,hd,js,Vm,Gu,Gm,On,Hm,Xm,qm,xr,cf,oh,Hu,Ga=1,gn=Date.now,Xu=gn(),li=0,Ha=0,dd=function(){return gu=1},pd=function(){return gu=0},Di=function(e){return e},Xo=function(e){return Math.round(e*1e5)/1e5||0},$m=function(){return typeof window<"u"},Ym=function(){return Oe||$m()&&(Oe=window.gsap)&&Oe.registerPlugin&&Oe},Ss=function(e){return!!~Wm.indexOf(e)},jm=function(e){return Fr(e,"getBoundingClientRect")||(Ss(e)?function(){return Rl.width=rt.innerWidth,Rl.height=rt.innerHeight,Rl}:function(){return Zi(e)})},Dv=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Fr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?rt["inner"+s]:e["client"+s])||0}},Pv=function(e,t){return!t||~ki.indexOf(e)?jm(e):function(){return Rl}},Tr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return(n="scroll"+i)&&(o=Fr(e,n))?o()-jm(e)()[s]:Ss(e)?(Ii[n]||Dt[n])-(rt["inner"+i]||Ii["client"+i]||Dt["client"+i]):e[n]-e["offset"+i]},Xa=function(e,t){for(var n=0;n<js.length;n+=3)(!t||~t.indexOf(js[n+1]))&&e(js[n],js[n+1],js[n+2])},_i=function(e){return typeof e=="string"},vn=function(e){return typeof e=="function"},qo=function(e){return typeof e=="number"},Cl=function(e){return typeof e=="object"},Oo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},qu=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Fs=Math.abs,Zm="left",Km="top",ah="right",lh="bottom",gs="width",_s="height",sa="Right",oa="Left",aa="Top",la="Bottom",Ft="padding",ei="margin",So="Width",uh="Height",Zt="px",Ui=function(e){return rt.getComputedStyle(e)},Lv=function(e){var t=Ui(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},md=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zi=function(e,t){var n=t&&Ui(e)[uf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Oe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ff=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Jm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Fv=function(e){return function(t){return Oe.utils.snap(Jm(e),t)}},ch=function(e){var t=Oe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Rv=function(e){return function(t,n){return ch(Jm(e))(t,n.direction)}},qa=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Kt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Xt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},$a=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},gd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ya={toggleActions:"play",anticipatePin:0},Kl={top:0,left:0,center:.5,bottom:1,right:1},Dl=function(e,t){if(_i(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Kl?Kl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ja=function(e,t,n,i,s,o,a,l){var u=s.startColor,c=s.endColor,h=s.fontSize,f=s.indent,m=s.fontWeight,g=Mt.createElement("div"),d=Ss(n)||Fr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,x=d?Dt:n,b=e.indexOf("start")!==-1,_=b?u:c,y="border-color:"+_+";font-size:"+h+";color:"+_+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&d?"fixed;":"absolute;"),(p||l||!d)&&(y+=(i===kt?ah:lh)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,x.children[0]?x.insertBefore(g,x.children[0]):x.appendChild(g),g._offset=g["offset"+i.op.d2],Pl(g,0,i,b),g},Pl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+So]=1,s["border"+a+So]=0,s[n.p]=t+"px",Oe.set(e,s)},tt=[],hf={},Sa,_d=function(){return gn()-li>34&&(Sa||(Sa=requestAnimationFrame(Es)))},Rs=function(){(!On||!On.isPressed||On.startX>Dt.clientWidth)&&(st.cache++,On?Sa||(Sa=requestAnimationFrame(Es)):Es(),li||Ts("scrollStart"),li=gn())},$u=function(){qm=rt.innerWidth,Xm=rt.innerHeight},$o=function(){st.cache++,!nn&&!Gm&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!Hm||qm!==rt.innerWidth||Math.abs(rt.innerHeight-Xm)>rt.innerHeight*.25)&&jl.restart(!0)},ws={},Bv=[],Qm=function r(){return Xt(Qe,"scrollEnd",r)||ls(!0)},Ts=function(e){return ws[e]&&ws[e].map(function(t){return t()})||Bv},Nn=[],eg=function(e){for(var t=0;t<Nn.length;t+=5)(!e||Nn[t+4]&&Nn[t+4].query===e)&&(Nn[t].style.cssText=Nn[t+1],Nn[t].getBBox&&Nn[t].setAttribute("transform",Nn[t+2]||""),Nn[t+3].uncache=1)},fh=function(e,t){var n;for(mn=0;mn<tt.length;mn++)n=tt[mn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&eg(t),t||Ts("revert")},tg=function(e,t){st.cache++,(t||!xi)&&st.forEach(function(n){return vn(n)&&n.cacheID++&&(n.rec=0)}),_i(e)&&(rt.history.scrollRestoration=oh=e)},xi,xs=0,xd,Iv=function(){if(xd!==xs){var e=xd=xs;requestAnimationFrame(function(){return e===xs&&ls(!0)})}},ls=function(e,t){if(li&&!e){Kt(Qe,"scrollEnd",Qm);return}xi=Qe.isRefreshing=!0,st.forEach(function(i){return vn(i)&&i.cacheID++&&(i.rec=i())});var n=Ts("refreshInit");Vm&&Qe.sort(),t||fh(),st.forEach(function(i){vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),tt.forEach(function(i,s){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-a),i.revert(!1,1)}}),tt.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,Tr(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),tg(oh,1),jl.pause(),xs++,Es(2),tt.forEach(function(i){return vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),xi=Qe.isRefreshing=!1,Ts("refresh")},vd=0,Ll=1,rs,Es=function(e){if(!xi||e===2){Qe.isUpdating=!0,rs&&rs.update(0);var t=tt.length,n=gn(),i=n-Xu>=50,s=t&&tt[0].scroll();if(Ll=vd>s?-1:1,vd=s,i&&(li&&!gu&&n-li>200&&(li=0,Ts("scrollEnd")),Al=Xu,Xu=n),Ll<0){for(mn=t;mn-- >0;)tt[mn]&&tt[mn].update(0,i);Ll=1}else for(mn=0;mn<t;mn++)tt[mn]&&tt[mn].update(0,i);Qe.isUpdating=!1}Sa=0},df=[Zm,Km,lh,ah,ei+la,ei+sa,ei+aa,ei+oa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Fl=df.concat([gs,_s,"boxSizing","max"+So,"max"+uh,"position",ei,Ft,Ft+aa,Ft+sa,Ft+la,Ft+oa]),Uv=function(e,t,n){co(n);var i=e._gsap;if(i.spacerIsNative)co(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Yu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=df.length,o=t.style,a=e.style,l;s--;)l=df[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[lh]=a[ah]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[gs]=ff(e,xn)+Zt,o[_s]=ff(e,kt)+Zt,o[Ft]=a[ei]=a[Km]=a[Zm]="0",co(i),a[gs]=a["max"+So]=n[gs],a[_s]=a["max"+uh]=n[_s],a[Ft]=n[Ft],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Ov=/([A-Z])/g,co=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Oe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Ov,"-$1").toLowerCase())}},Za=function(e){for(var t=Fl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Fl[s],n[Fl[s]]);return i.t=e,i},Nv=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Rl={left:0,top:0},yd=function(e,t,n,i,s,o,a,l,u,c,h,f,m){vn(e)&&(e=e(l)),_i(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Dl("0"+e.substr(3),n):0));var g=m?m.time():0,d,p,x;if(m&&m.seek(0),qo(e))a&&Pl(a,n,i,!0);else{vn(t)&&(t=t(l));var b=(e||"0").split(" "),_,y,M,T;x=Mn(t)||Dt,_=Zi(x)||{},(!_||!_.left&&!_.top)&&Ui(x).display==="none"&&(T=x.style.display,x.style.display="block",_=Zi(x),T?x.style.display=T:x.style.removeProperty("display")),y=Dl(b[0],_[i.d]),M=Dl(b[1]||"0",n),e=_[i.p]-u[i.p]-c+y+s-M,a&&Pl(a,M,i,n-M<20||a._isStart&&M>20),n-=n-M}if(o){var E=e+n,v=o._isStart;d="scroll"+i.d2,Pl(o,E,i,v&&E>20||!v&&(h?Math.max(Dt[d],Ii[d]):o.parentNode[d])<=E+1),h&&(u=Zi(a),h&&(o.style[i.op.p]=u[i.op.p]-i.op.m-o._offset+Zt))}return m&&x&&(d=Zi(x),m.seek(f),p=Zi(x),m._caScrollDist=d[i.p]-p[i.p],e=e/m._caScrollDist*f),m&&m.seek(g),m?e:Math.round(e)},kv=/(webkit|moz|length|cssText|inset)/i,bd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Dt){e._stOrig=s.cssText,a=Ui(e);for(o in a)!+o&&!kv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Oe.core.getCache(e).uncache=1,t.appendChild(e)}},Md=function(e,t){var n=Nr(e,t),i="_scroll"+t.p2,s,o,a=function l(u,c,h,f,m){var g=l.tween,d=c.onComplete,p={};return h=h||n(),m=f&&m||0,f=f||u-h,g&&g.kill(),s=Math.round(h),c[i]=u,c.modifiers=p,p[i]=function(x){return x=Math.round(n()),x!==s&&x!==o&&Math.abs(x-s)>3&&Math.abs(x-o)>3?(g.kill(),l.tween=0):x=h+f*g.ratio+m*g.ratio*g.ratio,o=s,s=Math.round(x)},c.onComplete=function(){l.tween=0,d&&d.call(g)},g=l.tween=Oe.to(e,c),g};return e[i]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Kt(e,"wheel",n.wheelHandler),a},Qe=function(){function r(t,n){Ys||r.register(Oe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ha){this.update=this.refresh=this.kill=Di;return}n=md(_i(n)||qo(n)||n.nodeType?{trigger:n}:n,Ya);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,h=s.scrub,f=s.trigger,m=s.pin,g=s.pinSpacing,d=s.invalidateOnRefresh,p=s.anticipatePin,x=s.onScrubComplete,b=s.onSnapComplete,_=s.once,y=s.snap,M=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,v=s.fastScrollEnd,w=s.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?xn:kt,O=!h&&h!==0,Z=Mn(n.scroller||rt),z=Oe.core.getCache(Z),I=Ss(Z),q=("pinType"in n?n.pinType:Fr(Z,"pinType")||I&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=O&&n.toggleActions.split(" "),B="markers"in n?n.markers:Ya.markers,se=I?0:parseFloat(Ui(Z)["border"+P.p2+So])||0,F=this,X=n.onRefreshInit&&function(){return n.onRefreshInit(F)},V=Dv(Z,I,P),fe=Pv(Z,I),ue=0,me=0,H=Nr(Z,P),Le,ve,Fe,xe,ke,D,L,$,oe,ne,R,de,te,pe,le,A,S,N,K,Q,ce,_e,ge,ee,Ce,Ue,Te,Re,Se,we,nt,ut,U,re,he,be,Pe,Ke;if(cf(F),F._dir=P,p*=45,F.scroller=Z,F.scroll=E?E.time.bind(E):H,xe=H(),F.vars=n,i=i||n.animation,"refreshPriority"in n&&(Vm=1,n.refreshPriority===-9999&&(rs=F)),z.tweenScroll=z.tweenScroll||{top:Md(Z,kt),left:Md(Z,xn)},F.tweenTo=Le=z.tweenScroll[P.p],F.scrubDuration=function(ie){nt=qo(ie)&&ie,nt?we?we.duration(ie):we=Oe.to(i,{ease:"expo",totalProgress:"+=0.001",duration:nt,paused:!0,onComplete:function(){return x&&x(F)}}):(we&&we.progress(1).kill(),we=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),F.animation=i.pause(),i.scrollTrigger=F,F.scrubDuration(h),Re=0,l||(l=i.vars.id)),tt.push(F),y&&((!Cl(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Dt.style&&Oe.set(I?[Dt,Ii]:Z,{scrollBehavior:"auto"}),st.forEach(function(ie){return vn(ie)&&ie.target===(I?Mt.scrollingElement||Ii:Z)&&(ie.smooth=!1)}),Fe=vn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Fv(i):y.snapTo==="labelsDirectional"?Rv(i):y.directional!==!1?function(ie,Ae){return ch(y.snapTo)(ie,gn()-me<500?0:Ae.direction)}:Oe.utils.snap(y.snapTo),ut=y.duration||{min:.1,max:2},ut=Cl(ut)?eo(ut.min,ut.max):eo(ut,ut),U=Oe.delayedCall(y.delay||nt/2||.1,function(){var ie=H(),Ae=gn()-me<500,Ee=Le.tween;if((Ae||Math.abs(F.getVelocity())<10)&&!Ee&&!gu&&ue!==ie){var ze=(ie-D)/te,Lt=i&&!O?i.totalProgress():ze,Xe=Ae?0:(Lt-Se)/(gn()-Al)*1e3||0,Ct=Oe.utils.clamp(-ze,1-ze,Fs(Xe/2)*Xe/.185),C=ze+(y.inertia===!1?0:Ct),W=eo(0,1,Fe(C,F)),j=Math.round(D+W*te),k=y,ae=k.onStart,Me=k.onInterrupt,De=k.onComplete;if(ie<=L&&ie>=D&&j!==ie){if(Ee&&!Ee._initted&&Ee.data<=Fs(j-ie))return;y.inertia===!1&&(Ct=W-ze),Le(j,{duration:ut(Fs(Math.max(Fs(C-Lt),Fs(W-Lt))*.185/Xe/.05||0)),ease:y.ease||"power3",data:Fs(j-ie),onInterrupt:function(){return U.restart(!0)&&Me&&Me(F)},onComplete:function(){F.update(),ue=H(),Re=Se=i&&!O?i.totalProgress():F.progress,b&&b(F),De&&De(F)}},ie,Ct*te,j-ie-Ct*te),ae&&ae(F,Le.tween)}}else F.isActive&&ue!==ie&&U.restart(!0)}).pause()),l&&(hf[l]=F),f=F.trigger=Mn(f||m),Ke=f&&f._gsap&&f._gsap.stRevert,Ke&&(Ke=Ke(F)),m=m===!0?f:Mn(m),_i(a)&&(a={targets:f,className:a}),m&&(g===!1||g===ei||(g=!g&&m.parentNode&&m.parentNode.style&&Ui(m.parentNode).display==="flex"?!1:Ft),F.pin=m,ve=Oe.core.getCache(m),ve.spacer?pe=ve.pinState:(T&&(T=Mn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),ve.spacerIsNative=!!T,T&&(ve.spacerState=Za(T))),ve.spacer=S=T||Mt.createElement("div"),S.classList.add("pin-spacer"),l&&S.classList.add("pin-spacer-"+l),ve.pinState=pe=Za(m)),n.force3D!==!1&&Oe.set(m,{force3D:!0}),F.spacer=S=ve.spacer,Te=Ui(m),ge=Te[g+P.os2],K=Oe.getProperty(m),Q=Oe.quickSetter(m,P.a,Zt),Yu(m,S,Te),A=Za(m)),B){de=Cl(B)?md(B,gd):gd,ne=ja("scroller-start",l,Z,P,de,0),R=ja("scroller-end",l,Z,P,de,0,ne),N=ne["offset"+P.op.d2];var yt=Mn(Fr(Z,"content")||Z);$=this.markerStart=ja("start",l,yt,P,de,N,0,E),oe=this.markerEnd=ja("end",l,yt,P,de,N,0,E),E&&(Pe=Oe.quickSetter([$,oe],P.a,Zt)),!q&&!(ki.length&&Fr(Z,"fixedMarkers")===!0)&&(Lv(I?Dt:Z),Oe.set([ne,R],{force3D:!0}),Ce=Oe.quickSetter(ne,P.a,Zt),Ue=Oe.quickSetter(R,P.a,Zt))}if(E){var At=E.vars.onUpdate,je=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){F.update(0,0,1),At&&At.apply(je||[])})}F.previous=function(){return tt[tt.indexOf(F)-1]},F.next=function(){return tt[tt.indexOf(F)+1]},F.revert=function(ie,Ae){if(!Ae)return F.kill(!0);var Ee=ie!==!1||!F.enabled,ze=nn;Ee!==F.isReverted&&(Ee&&(he=Math.max(H(),F.scroll.rec||0),re=F.progress,be=i&&i.progress()),$&&[$,oe,ne,R].forEach(function(Lt){return Lt.style.display=Ee?"none":"block"}),Ee&&(nn=1,F.update(Ee)),m&&(Ee?Uv(m,S,pe):(!M||!F.isActive)&&Yu(m,S,Ui(m),ee)),Ee||F.update(Ee),nn=ze,F.isReverted=Ee)},F.refresh=function(ie,Ae){if(!((nn||!F.enabled)&&!Ae)){if(m&&ie&&li){Kt(r,"scrollEnd",Qm);return}!xi&&X&&X(F),nn=1,me=gn(),Le.tween&&(Le.tween.kill(),Le.tween=0),we&&we.pause(),d&&i&&i.revert({kill:!1}).invalidate(),F.isReverted||F.revert(!0,!0),F._subPinOffset=!1;for(var Ee=V(),ze=fe(),Lt=E?E.duration():Tr(Z,P),Xe=0,Ct=0,C=n.end,W=n.endTrigger||f,j=n.start||(n.start===0||!f?0:m?"0 0":"0 100%"),k=F.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer),ae=f&&Math.max(0,tt.indexOf(F))||0,Me=ae,De,Be,He,Je,Ne,Ie,ht,jt,jn,Fn;Me--;)Ie=tt[Me],Ie.end||Ie.refresh(0,1)||(nn=1),ht=Ie.pin,ht&&(ht===f||ht===m)&&!Ie.isReverted&&(Fn||(Fn=[]),Fn.unshift(Ie),Ie.revert(!0,!0)),Ie!==tt[Me]&&(ae--,Me--);for(vn(j)&&(j=j(F)),D=yd(j,f,Ee,P,H(),$,ne,F,ze,se,q,Lt,E)||(m?-.001:0),vn(C)&&(C=C(F)),_i(C)&&!C.indexOf("+=")&&(~C.indexOf(" ")?C=(_i(j)?j.split(" ")[0]:"")+C:(Xe=Dl(C.substr(2),Ee),C=_i(j)?j:D+Xe,W=f)),L=Math.max(D,yd(C||(W?"100% 0":Lt),W,Ee,P,H()+Xe,oe,R,F,ze,se,q,Lt,E))||-.001,te=L-D||(D-=.01)&&.001,Xe=0,Me=ae;Me--;)Ie=tt[Me],ht=Ie.pin,ht&&Ie.start-Ie._pinPush<=D&&!E&&Ie.end>0&&(De=Ie.end-Ie.start,(ht===f&&Ie.start-Ie._pinPush<D||ht===k)&&!qo(j)&&(Xe+=De*(1-Ie.progress)),ht===m&&(Ct+=De));if(D+=Xe,L+=Xe,F._pinPush=Ct,$&&Xe&&(De={},De[P.a]="+="+Xe,k&&(De[P.p]="-="+H()),Oe.set([$,oe],De)),m)De=Ui(m),Je=P===kt,He=H(),ce=parseFloat(K(P.a))+Ct,!Lt&&L>1&&((I?Dt:Z).style["overflow-"+P.a]="scroll"),Yu(m,S,De),A=Za(m),Be=Zi(m,!0),jt=q&&Nr(Z,Je?xn:kt)(),g&&(ee=[g+P.os2,te+Ct+Zt],ee.t=S,Me=g===Ft?ff(m,P)+te+Ct:0,Me&&ee.push(P.d,Me+Zt),co(ee),k&&tt.forEach(function(gt){gt.pin===k&&gt.vars.pinSpacing!==!1&&(gt._subPinOffset=!0)}),q&&H(he)),q&&(Ne={top:Be.top+(Je?He-D:jt)+Zt,left:Be.left+(Je?jt:He-D)+Zt,boxSizing:"border-box",position:"fixed"},Ne[gs]=Ne["max"+So]=Math.ceil(Be.width)+Zt,Ne[_s]=Ne["max"+uh]=Math.ceil(Be.height)+Zt,Ne[ei]=Ne[ei+aa]=Ne[ei+sa]=Ne[ei+la]=Ne[ei+oa]="0",Ne[Ft]=De[Ft],Ne[Ft+aa]=De[Ft+aa],Ne[Ft+sa]=De[Ft+sa],Ne[Ft+la]=De[Ft+la],Ne[Ft+oa]=De[Ft+oa],le=Nv(pe,Ne,M),xi&&H(0)),i?(jn=i._initted,Gu(1),i.render(i.duration(),!0,!0),_e=K(P.a)-ce+te+Ct,te!==_e&&q&&le.splice(le.length-2,2),i.render(0,!0,!0),jn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Gu(0)):_e=te;else if(f&&H()&&!E)for(Be=f.parentNode;Be&&Be!==Dt;)Be._pinOffset&&(D-=Be._pinOffset,L-=Be._pinOffset),Be=Be.parentNode;Fn&&Fn.forEach(function(gt){return gt.revert(!1,!0)}),F.start=D,F.end=L,xe=ke=xi?he:H(),!E&&!xi&&(xe<he&&H(he),F.scroll.rec=0),F.revert(!1,!0),U&&(ue=-1,F.isActive&&H(D+te*re),U.restart(!0)),nn=0,i&&O&&(i._initted||be)&&i.progress()!==be&&i.progress(be,!0).render(i.time(),!0,!0),(re!==F.progress||E)&&(i&&!O&&i.totalProgress(re,!0),F.progress=(xe-D)/te===re?0:re),m&&g&&(S._pinOffset=Math.round(F.progress*_e)),c&&!xi&&c(F)}},F.getVelocity=function(){return(H()-ke)/(gn()-Al)*1e3||0},F.endAnimation=function(){Oo(F.callbackAnimation),i&&(we?we.progress(1):i.paused()?O||Oo(i,F.direction<0,1):Oo(i,i.reversed()))},F.labelToScroll=function(ie){return i&&i.labels&&(D||F.refresh()||D)+i.labels[ie]/i.duration()*te||0},F.getTrailing=function(ie){var Ae=tt.indexOf(F),Ee=F.direction>0?tt.slice(0,Ae).reverse():tt.slice(Ae+1);return(_i(ie)?Ee.filter(function(ze){return ze.vars.preventOverlaps===ie}):Ee).filter(function(ze){return F.direction>0?ze.end<=D:ze.start>=L})},F.update=function(ie,Ae,Ee){if(!(E&&!Ee&&!ie)){var ze=xi?he:F.scroll(),Lt=ie?0:(ze-D)/te,Xe=Lt<0?0:Lt>1?1:Lt||0,Ct=F.progress,C,W,j,k,ae,Me,De,Be;if(Ae&&(ke=xe,xe=E?H():ze,y&&(Se=Re,Re=i&&!O?i.totalProgress():Xe)),p&&!Xe&&m&&!nn&&!Ga&&li&&D<ze+(ze-ke)/(gn()-Al)*p&&(Xe=1e-4),Xe!==Ct&&F.enabled){if(C=F.isActive=!!Xe&&Xe<1,W=!!Ct&&Ct<1,Me=C!==W,ae=Me||!!Xe!=!!Ct,F.direction=Xe>Ct?1:-1,F.progress=Xe,ae&&!nn&&(j=Xe&&!Ct?0:Xe===1?1:Ct===1?2:3,O&&(k=!Me&&Y[j+1]!=="none"&&Y[j+1]||Y[j],Be=i&&(k==="complete"||k==="reset"||k in i))),w&&(Me||Be)&&(Be||h||!i)&&(vn(w)?w(F):F.getTrailing(w).forEach(function(Ie){return Ie.endAnimation()})),O||(we&&!nn&&!Ga?((E||rs&&rs!==F)&&we.render(we._dp._time-we._start),we.resetTo?we.resetTo("totalProgress",Xe,i._tTime/i._tDur):(we.vars.totalProgress=Xe,we.invalidate().restart())):i&&i.totalProgress(Xe,!!nn)),m){if(ie&&g&&(S.style[g+P.os2]=ge),!q)Q(Xo(ce+_e*Xe));else if(ae){if(De=!ie&&Xe>Ct&&L+1>ze&&ze+1>=Tr(Z,P),M)if(!ie&&(C||De)){var He=Zi(m,!0),Je=ze-D;bd(m,Dt,He.top+(P===kt?Je:0)+Zt,He.left+(P===kt?0:Je)+Zt)}else bd(m,S);co(C||De?le:A),_e!==te&&Xe<1&&C||Q(ce+(Xe===1&&!De?_e:0))}}y&&!Le.tween&&!nn&&!Ga&&U.restart(!0),a&&(Me||_&&Xe&&(Xe<1||!Hu))&&Zl(a.targets).forEach(function(Ie){return Ie.classList[C||_?"add":"remove"](a.className)}),o&&!O&&!ie&&o(F),ae&&!nn?(O&&(Be&&(k==="complete"?i.pause().totalProgress(1):k==="reset"?i.restart(!0).pause():k==="restart"?i.restart(!0):i[k]()),o&&o(F)),(Me||!Hu)&&(u&&Me&&qu(F,u),G[j]&&qu(F,G[j]),_&&(Xe===1?F.kill(!1,1):G[j]=0),Me||(j=Xe===1?1:3,G[j]&&qu(F,G[j]))),v&&!C&&Math.abs(F.getVelocity())>(qo(v)?v:2500)&&(Oo(F.callbackAnimation),we?we.progress(1):Oo(i,k==="reverse"?1:!Xe,1))):O&&o&&!nn&&o(F)}if(Ue){var Ne=E?ze/E.duration()*(E._caScrollDist||0):ze;Ce(Ne+(ne._isFlipped?1:0)),Ue(Ne)}Pe&&Pe(-ze/E.duration()*(E._caScrollDist||0))}},F.enable=function(ie,Ae){F.enabled||(F.enabled=!0,Kt(Z,"resize",$o),Kt(I?Mt:Z,"scroll",Rs),X&&Kt(r,"refreshInit",X),ie!==!1&&(F.progress=re=0,xe=ke=ue=H()),Ae!==!1&&F.refresh())},F.getTween=function(ie){return ie&&Le?Le.tween:we},F.setPositions=function(ie,Ae){m&&(ce+=ie-D,_e+=Ae-ie-te,g===Ft&&F.adjustPinSpacing(Ae-ie-te)),F.start=D=ie,F.end=L=Ae,te=Ae-ie,F.update()},F.adjustPinSpacing=function(ie){if(ee){var Ae=ee.indexOf(P.d)+1;ee[Ae]=parseFloat(ee[Ae])+ie+Zt,ee[1]=parseFloat(ee[1])+ie+Zt,co(ee)}},F.disable=function(ie,Ae){if(F.enabled&&(ie!==!1&&F.revert(!0,!0),F.enabled=F.isActive=!1,Ae||we&&we.pause(),he=0,ve&&(ve.uncache=1),X&&Xt(r,"refreshInit",X),U&&(U.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!I)){for(var Ee=tt.length;Ee--;)if(tt[Ee].scroller===Z&&tt[Ee]!==F)return;Xt(Z,"resize",$o),Xt(Z,"scroll",Rs)}},F.kill=function(ie,Ae){F.disable(ie,Ae),we&&!Ae&&we.kill(),l&&delete hf[l];var Ee=tt.indexOf(F);Ee>=0&&tt.splice(Ee,1),Ee===mn&&Ll>0&&mn--,Ee=0,tt.forEach(function(ze){return ze.scroller===F.scroller&&(Ee=1)}),Ee||xi||(F.scroll.rec=0),i&&(i.scrollTrigger=null,ie&&i.revert({kill:!1}),Ae||i.kill()),$&&[$,oe,ne,R].forEach(function(ze){return ze.parentNode&&ze.parentNode.removeChild(ze)}),rs===F&&(rs=0),m&&(ve&&(ve.uncache=1),Ee=0,tt.forEach(function(ze){return ze.pin===m&&Ee++}),Ee||(ve.spacer=0)),n.onKill&&n.onKill(F)},F.enable(!1,!1),Ke&&Ke(F),!i||!i.add||te?F.refresh():Oe.delayedCall(.01,function(){return D||L||F.refresh()})&&(te=.01)&&(D=L=0),m&&Iv()},r.register=function(n){return Ys||(Oe=n||Ym(),$m()&&window.document&&r.enable(),Ys=Ha),Ys},r.defaults=function(n){if(n)for(var i in n)Ya[i]=n[i];return Ya},r.disable=function(n,i){Ha=0,tt.forEach(function(o){return o[i?"kill":"disable"](n)}),Xt(rt,"wheel",Rs),Xt(Mt,"scroll",Rs),clearInterval(Va),Xt(Mt,"touchcancel",Di),Xt(Dt,"touchstart",Di),qa(Xt,Mt,"pointerdown,touchstart,mousedown",dd),qa(Xt,Mt,"pointerup,touchend,mouseup",pd),jl.kill(),Xa(Xt);for(var s=0;s<st.length;s+=3)$a(Xt,st[s],st[s+1]),$a(Xt,st[s],st[s+2])},r.enable=function(){if(rt=window,Mt=document,Ii=Mt.documentElement,Dt=Mt.body,Oe&&(Zl=Oe.utils.toArray,eo=Oe.utils.clamp,cf=Oe.core.context||Di,Gu=Oe.core.suppressOverwrites||Di,oh=rt.history.scrollRestoration||"auto",Oe.core.globals("ScrollTrigger",r),Dt)){Ha=1,Ut.register(Oe),r.isTouch=Ut.isTouch,xr=Ut.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Kt(rt,"wheel",Rs),Wm=[rt,Mt,Ii,Dt],Oe.matchMedia?(r.matchMedia=function(l){var u=Oe.matchMedia(),c;for(c in l)u.add(c,l[c]);return u},Oe.addEventListener("matchMediaInit",function(){return fh()}),Oe.addEventListener("matchMediaRevert",function(){return eg()}),Oe.addEventListener("matchMedia",function(){ls(0,1),Ts("matchMedia")}),Oe.matchMedia("(orientation: portrait)",function(){return $u(),$u})):console.warn("Requires GSAP 3.11.0 or later"),$u(),Kt(Mt,"scroll",Rs);var n=Dt.style,i=n.borderTopStyle,s=Oe.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Zi(Dt),kt.m=Math.round(o.top+kt.sc())||0,xn.m=Math.round(o.left+xn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Va=setInterval(_d,250),Oe.delayedCall(.5,function(){return Ga=0}),Kt(Mt,"touchcancel",Di),Kt(Dt,"touchstart",Di),qa(Kt,Mt,"pointerdown,touchstart,mousedown",dd),qa(Kt,Mt,"pointerup,touchend,mouseup",pd),uf=Oe.utils.checkPrefix("transform"),Fl.push(uf),Ys=gn(),jl=Oe.delayedCall(.2,ls).pause(),js=[Mt,"visibilitychange",function(){var l=rt.innerWidth,u=rt.innerHeight;Mt.hidden?(fd=l,hd=u):(fd!==l||hd!==u)&&$o()},Mt,"DOMContentLoaded",ls,rt,"load",ls,rt,"resize",$o],Xa(Kt),tt.forEach(function(l){return l.enable(0,1)}),a=0;a<st.length;a+=3)$a(Xt,st[a],st[a+1]),$a(Xt,st[a],st[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Hu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Va)||(Va=i)&&setInterval(_d,i),"ignoreMobileResize"in n&&(Hm=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Xa(Xt)||Xa(Kt,n.autoRefreshEvents||"none"),Gm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Mn(n),o=st.indexOf(s),a=Ss(s);~o&&st.splice(o,a?6:2),i&&(a?ki.unshift(rt,i,Dt,i,Ii,i):ki.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(_i(n)?Mn(n):n).getBoundingClientRect(),a=o[s?gs:_s]*i||0;return s?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},r.positionInViewport=function(n,i,s){_i(n)&&(n=Mn(n));var o=n.getBoundingClientRect(),a=o[s?gs:_s],l=i==null?a/2:i in Kl?Kl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},r.killAll=function(n){if(tt.forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ws.killAll||[];ws={},i.forEach(function(s){return s()})}},r}();Qe.version="3.11.3";Qe.saveStyles=function(r){return r?Zl(r).forEach(function(e){if(e&&e.style){var t=Nn.indexOf(e);t>=0&&Nn.splice(t,5),Nn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Oe.core.getCache(e),cf())}}):Nn};Qe.revert=function(r,e){return fh(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?$o():(Ys||Qe.register())&&ls(!0)};Qe.update=Es;Qe.clearScrollMemory=tg;Qe.maxScroll=function(r,e){return Tr(r,e?xn:kt)};Qe.getScrollFunc=function(r,e){return Nr(Mn(r),e?xn:kt)};Qe.getById=function(r){return hf[r]};Qe.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!li};Qe.snapDirectional=ch;Qe.addEventListener=function(r,e){var t=ws[r]||(ws[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=ws[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var h=[],f=[],m=Oe.delayedCall(i,function(){c(h,f),h=[],f=[]}).pause();return function(g){h.length||m.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&m.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&vn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return vn(s)&&(s=s(),Kt(Qe,"refresh",function(){return s=e.batchMax()})),Zl(r).forEach(function(l){var u={};for(a in n)u[a]=n[a];u.trigger=l,t.push(Qe.create(u))}),t};var Sd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},ju=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ut.isTouch?" pinch-zoom":""):"none",e===Ii&&r(Dt,t)},wd={auto:1,scroll:1},zv=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Oe.core.getCache(s),a=gn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s.scrollHeight<=s.clientHeight;)s=s.parentNode;o._isScroll=s&&!Ss(s)&&s!==n&&(wd[(l=Ui(s)).overflowY]||wd[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ng=function(e,t,n,i){return Ut.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&zv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Kt(Mt,Ut.eventTypes[0],Ed,!1,!0)},onDisable:function(){return Xt(Mt,Ut.eventTypes[0],Ed,!0)}})},Wv=/(input|label|select|textarea)/i,Td,Ed=function(e){var t=Wv.test(e.target.tagName);(t||Td)&&(e._gsapAllow=!0,Td=t)},Vv=function(e){Cl(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o,a,l=Mn(e.target)||Ii,u=Oe.core.globals().ScrollSmoother,c=u&&u.get(),h=xr&&(e.content&&Mn(e.content)||c&&e.content!==!1&&!c.smooth()&&c.content()),f=Nr(l,kt),m=Nr(l,xn),g=1,d=(Ut.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,p=0,x=vn(i)?function(){return i(o)}:function(){return i||2.8},b,_,y=ng(l,e.type,!0,s),M=function(){return _=!1},T=Di,E=Di,v=function(){a=Tr(l,kt),E=eo(xr?1:0,a),n&&(T=eo(0,Tr(l,xn))),b=xs},w=function(){h._gsap.y=Xo(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(_){requestAnimationFrame(M);var Y=Xo(o.deltaY/2),B=E(f.v-Y);if(h&&B!==f.v+f.offset){f.offset=B-f.v;var se=Xo((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+se+", 0, 1)",h._gsap.y=se+"px",f.cacheID=st.cache,Es()}return!0}f.offset&&w(),_=!0},O,Z,z,I,q=function(){v(),O.isActive()&&O.vars.scrollY>a&&(f()>a?O.progress(1)&&f(a):O.resetTo("scrollY",a))};return h&&Oe.set(h,{y:"+=0"}),e.ignoreCheck=function(G){return xr&&G.type==="touchmove"&&P()||g>1.05&&G.type!=="touchstart"||o.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){var G=g;g=Xo((rt.visualViewport&&rt.visualViewport.scale||1)/d),O.pause(),G!==g&&ju(l,g>1.01?!0:n?!1:"x"),Z=m(),z=f(),v(),b=xs},e.onRelease=e.onGestureStart=function(G,Y){if(f.offset&&w(),!Y)I.restart(!0);else{st.cache++;var B=x(),se,F;n&&(se=m(),F=se+B*.05*-G.velocityX/.227,B*=Sd(m,se,F,Tr(l,xn)),O.vars.scrollX=T(F)),se=f(),F=se+B*.05*-G.velocityY/.227,B*=Sd(f,se,F,Tr(l,kt)),O.vars.scrollY=E(F),O.invalidate().duration(B).play(.01),(xr&&O.vars.scrollY>=a||se>=a-1)&&Oe.to({},{onUpdate:q,duration:B})}},e.onWheel=function(){O._ts&&O.pause(),gn()-p>1e3&&(b=0,p=gn())},e.onChange=function(G,Y,B,se,F){if(xs!==b&&v(),Y&&n&&m(T(se[2]===Y?Z+(G.startX-G.x):m()+Y-se[1])),B){f.offset&&w();var X=F[2]===B,V=X?z+G.startY-G.y:f()+B-F[1],fe=E(V);X&&V!==fe&&(z+=fe-V),f(fe)}(B||Y)&&Es()},e.onEnable=function(){ju(l,n?!1:"x"),Qe.addEventListener("refresh",q),Kt(rt,"resize",q),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),y.enable()},e.onDisable=function(){ju(l,!0),Xt(rt,"resize",q),Qe.removeEventListener("refresh",q),y.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ut(e),o.iOS=xr,xr&&!f()&&f(1),xr&&Oe.ticker.add(Di),I=o._dc,O=Oe.to(o,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:I.vars.onComplete}),o};Qe.sort=function(r){return tt.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new Ut(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return On;if(r===!0&&On)return On.enable();if(r===!1)return On&&On.kill();var e=r instanceof Ut?r:Vv(r);return On&&On.target===e.target&&On.kill(),Ss(e.target)&&(On=e),e};Qe.core={_getVelocityProp:lf,_inputObserver:ng,_scrollers:st,_proxies:ki,bridge:{ss:function(){li||Ts("scrollStart"),li=gn()},ref:function(){return nn}}};Ym()&&Oe.registerPlugin(Qe);const Gv={preserveAspectRatio:"xMidYMin",class:"line",width:"942",height:"3187",viewBox:"0 0 942 3187",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Hv=rr({__name:"SvgAnim",setup(r){Dn.registerPlugin(Qe);const e=Oi();return or(()=>{setTimeout(()=>{const t=e.value,n=Math.floor(t.getTotalLength());Dn.timeline({scrollTrigger:{trigger:t,scrub:!0,start:"top+=100 top",end:"bottom bottom"}}).set(t,{"stroke-width":"100px"}).fromTo(t,{"stroke-dasharray":n,"stroke-dashoffset":n},{"stroke-dashoffset":"0"})},300)}),(t,n)=>(Ge(),qe("div",null,[(Ge(),qe("svg",Gv,[We("path",{ref_key:"targetLine",ref:e,d:"M358.612 51C230.278 77 2.51186 231 118.112 639C262.612 1149 154.112 1269.5 70.1118 1521.5C-13.8882 1773.5 192.029 1959.5 345 1959.5C518.388 1959.5 687.753 1770.39 832.612 1937C979.112 2105.5 746.5 2233 784 2446.5C822.531 2665.87 958.612 2662 850.612 3136",stroke:"#D7D7D7","stroke-width":"100","stroke-linecap":"round"},null,512)]))]))}});const Xv=ar(Hv,[["__scopeId","data-v-31e2835c"]]),qv=rr({__name:"Background",setup(r){Dn.registerPlugin(Qe);const e=Oi(),t=Oi();return or(()=>{Dn.timeline({scrollTrigger:{trigger:e.value,scrub:!0,start:"top-=200 bottom",end:"top center"}}).to(t.value,{width:"300vmax",height:"300vmax"}).fromTo(t.value,{autoAlpha:1},{autoAlpha:0})}),(n,i)=>(Ge(),qe(_n,null,[We("div",{ref_key:"activator",ref:e},null,512),We("div",{ref_key:"expandBall",ref:t,class:"expandBall"},null,512)],64))}});const $v=ar(qv,[["__scopeId","data-v-aa2dd008"]]);var Ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ig={exports:{}};(function(r){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(n){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,o={},a={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function b(_){return _ instanceof l?new l(_.type,b(_.content),_.alias):Array.isArray(_)?_.map(b):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++s}),b.__id},clone:function b(_,y){y=y||{};var M,T;switch(a.util.type(_)){case"Object":if(T=a.util.objId(_),y[T])return y[T];M={},y[T]=M;for(var E in _)_.hasOwnProperty(E)&&(M[E]=b(_[E],y));return M;case"Array":return T=a.util.objId(_),y[T]?y[T]:(M=[],y[T]=M,_.forEach(function(v,w){M[w]=b(v,y)}),M);default:return _}},getLanguage:function(b){for(;b;){var _=i.exec(b.className);if(_)return _[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,_){b.className=b.className.replace(RegExp(i,"gi"),""),b.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(M){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(M.stack)||[])[1];if(b){var _=document.getElementsByTagName("script");for(var y in _)if(_[y].src==b)return _[y]}return null}},isActive:function(b,_,y){for(var M="no-"+_;b;){var T=b.classList;if(T.contains(_))return!0;if(T.contains(M))return!1;b=b.parentElement}return!!y}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(b,_){var y=a.util.clone(a.languages[b]);for(var M in _)y[M]=_[M];return y},insertBefore:function(b,_,y,M){M=M||a.languages;var T=M[b],E={};for(var v in T)if(T.hasOwnProperty(v)){if(v==_)for(var w in y)y.hasOwnProperty(w)&&(E[w]=y[w]);y.hasOwnProperty(v)||(E[v]=T[v])}var P=M[b];return M[b]=E,a.languages.DFS(a.languages,function(O,Z){Z===P&&O!=b&&(this[O]=E)}),E},DFS:function b(_,y,M,T){T=T||{};var E=a.util.objId;for(var v in _)if(_.hasOwnProperty(v)){y.call(_,v,_[v],M||v);var w=_[v],P=a.util.type(w);P==="Object"&&!T[E(w)]?(T[E(w)]=!0,b(w,y,null,T)):P==="Array"&&!T[E(w)]&&(T[E(w)]=!0,b(w,y,v,T))}}},plugins:{},highlightAll:function(b,_){a.highlightAllUnder(document,b,_)},highlightAllUnder:function(b,_,y){var M={callback:y,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",M),M.elements=Array.prototype.slice.apply(M.container.querySelectorAll(M.selector)),a.hooks.run("before-all-elements-highlight",M);for(var T=0,E;E=M.elements[T++];)a.highlightElement(E,_===!0,M.callback)},highlightElement:function(b,_,y){var M=a.util.getLanguage(b),T=a.languages[M];a.util.setLanguage(b,M);var E=b.parentElement;E&&E.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(E,M);var v=b.textContent,w={element:b,language:M,grammar:T,code:v};function P(Z){w.highlightedCode=Z,a.hooks.run("before-insert",w),w.element.innerHTML=w.highlightedCode,a.hooks.run("after-highlight",w),a.hooks.run("complete",w),y&&y.call(w.element)}if(a.hooks.run("before-sanity-check",w),E=w.element.parentElement,E&&E.nodeName.toLowerCase()==="pre"&&!E.hasAttribute("tabindex")&&E.setAttribute("tabindex","0"),!w.code){a.hooks.run("complete",w),y&&y.call(w.element);return}if(a.hooks.run("before-highlight",w),!w.grammar){P(a.util.encode(w.code));return}if(_&&n.Worker){var O=new Worker(a.filename);O.onmessage=function(Z){P(Z.data)},O.postMessage(JSON.stringify({language:w.language,code:w.code,immediateClose:!0}))}else P(a.highlight(w.code,w.grammar,w.language))},highlight:function(b,_,y){var M={code:b,grammar:_,language:y};if(a.hooks.run("before-tokenize",M),!M.grammar)throw new Error('The language "'+M.language+'" has no grammar.');return M.tokens=a.tokenize(M.code,M.grammar),a.hooks.run("after-tokenize",M),l.stringify(a.util.encode(M.tokens),M.language)},tokenize:function(b,_){var y=_.rest;if(y){for(var M in y)_[M]=y[M];delete _.rest}var T=new h;return f(T,T.head,b),c(b,T,_,T.head,0),g(T)},hooks:{all:{},add:function(b,_){var y=a.hooks.all;y[b]=y[b]||[],y[b].push(_)},run:function(b,_){var y=a.hooks.all[b];if(!(!y||!y.length))for(var M=0,T;T=y[M++];)T(_)}},Token:l};n.Prism=a;function l(b,_,y,M){this.type=b,this.content=_,this.alias=y,this.length=(M||"").length|0}l.stringify=function b(_,y){if(typeof _=="string")return _;if(Array.isArray(_)){var M="";return _.forEach(function(P){M+=b(P,y)}),M}var T={type:_.type,content:b(_.content,y),tag:"span",classes:["token",_.type],attributes:{},language:y},E=_.alias;E&&(Array.isArray(E)?Array.prototype.push.apply(T.classes,E):T.classes.push(E)),a.hooks.run("wrap",T);var v="";for(var w in T.attributes)v+=" "+w+'="'+(T.attributes[w]||"").replace(/"/g,"&quot;")+'"';return"<"+T.tag+' class="'+T.classes.join(" ")+'"'+v+">"+T.content+"</"+T.tag+">"};function u(b,_,y,M){b.lastIndex=_;var T=b.exec(y);if(T&&M&&T[1]){var E=T[1].length;T.index+=E,T[0]=T[0].slice(E)}return T}function c(b,_,y,M,T,E){for(var v in y)if(!(!y.hasOwnProperty(v)||!y[v])){var w=y[v];w=Array.isArray(w)?w:[w];for(var P=0;P<w.length;++P){if(E&&E.cause==v+","+P)return;var O=w[P],Z=O.inside,z=!!O.lookbehind,I=!!O.greedy,q=O.alias;if(I&&!O.pattern.global){var G=O.pattern.toString().match(/[imsuy]*$/)[0];O.pattern=RegExp(O.pattern.source,G+"g")}for(var Y=O.pattern||O,B=M.next,se=T;B!==_.tail&&!(E&&se>=E.reach);se+=B.value.length,B=B.next){var F=B.value;if(_.length>b.length)return;if(!(F instanceof l)){var X=1,V;if(I){if(V=u(Y,se,b,z),!V||V.index>=b.length)break;var H=V.index,fe=V.index+V[0].length,ue=se;for(ue+=B.value.length;H>=ue;)B=B.next,ue+=B.value.length;if(ue-=B.value.length,se=ue,B.value instanceof l)continue;for(var me=B;me!==_.tail&&(ue<fe||typeof me.value=="string");me=me.next)X++,ue+=me.value.length;X--,F=b.slice(se,ue),V.index-=se}else if(V=u(Y,0,F,z),!V)continue;var H=V.index,Le=V[0],ve=F.slice(0,H),Fe=F.slice(H+Le.length),xe=se+F.length;E&&xe>E.reach&&(E.reach=xe);var ke=B.prev;ve&&(ke=f(_,ke,ve),se+=ve.length),m(_,ke,X);var D=new l(v,Z?a.tokenize(Le,Z):Le,q,Le);if(B=f(_,ke,D),Fe&&f(_,B,Fe),X>1){var L={cause:v+","+P,reach:xe};c(b,_,y,B.prev,se,L),E&&L.reach>E.reach&&(E.reach=L.reach)}}}}}}function h(){var b={value:null,prev:null,next:null},_={value:null,prev:b,next:null};b.next=_,this.head=b,this.tail=_,this.length=0}function f(b,_,y){var M=_.next,T={value:y,prev:_,next:M};return _.next=T,M.prev=T,b.length++,T}function m(b,_,y){for(var M=_.next,T=0;T<y&&M!==b.tail;T++)M=M.next;_.next=M,M.prev=_,b.length-=T}function g(b){for(var _=[],y=b.head.next;y!==b.tail;)_.push(y.value),y=y.next;return _}if(!n.document)return n.addEventListener&&(a.disableWorkerMessageHandler||n.addEventListener("message",function(b){var _=JSON.parse(b.data),y=_.language,M=_.code,T=_.immediateClose;n.postMessage(a.highlight(M,a.languages[y],y)),T&&n.close()},!1)),a;var d=a.util.currentScript();d&&(a.filename=d.src,d.hasAttribute("data-manual")&&(a.manual=!0));function p(){a.manual||a.highlightAll()}if(!a.manual){var x=document.readyState;x==="loading"||x==="interactive"&&d&&d.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return a}(e);r.exports&&(r.exports=t),typeof Ad<"u"&&(Ad.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(i,s){var o={};o["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[s]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+s]={pattern:/[\s\S]+/,inside:t.languages[s]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:a},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,i){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:t.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(n){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var s=n.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",i=function(d,p){return"\u2716 Error "+d+" while fetching file: "+p},s="\u2716 Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",u="loaded",c="failed",h="pre[data-src]:not(["+a+'="'+u+'"]):not(['+a+'="'+l+'"])';function f(d,p,x){var b=new XMLHttpRequest;b.open("GET",d,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?p(b.responseText):b.status>=400?x(i(b.status,b.statusText)):x(s))},b.send(null)}function m(d){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(d||"");if(p){var x=Number(p[1]),b=p[2],_=p[3];return b?_?[x,Number(_)]:[x,void 0]:[x,x]}}t.hooks.add("before-highlightall",function(d){d.selector+=", "+h}),t.hooks.add("before-sanity-check",function(d){var p=d.element;if(p.matches(h)){d.code="",p.setAttribute(a,l);var x=p.appendChild(document.createElement("CODE"));x.textContent=n;var b=p.getAttribute("data-src"),_=d.language;if(_==="none"){var y=(/\.(\w+)$/.exec(b)||[,"none"])[1];_=o[y]||y}t.util.setLanguage(x,_),t.util.setLanguage(p,_);var M=t.plugins.autoloader;M&&M.loadLanguages(_),f(b,function(T){p.setAttribute(a,u);var E=m(p.getAttribute("data-range"));if(E){var v=T.split(/\r\n?|\n/g),w=E[0],P=E[1]==null?v.length:E[1];w<0&&(w+=v.length),w=Math.max(0,Math.min(w-1,v.length)),P<0&&(P+=v.length),P=Math.max(0,Math.min(P,v.length)),T=v.slice(w,P).join(`
`),p.hasAttribute("data-start")||p.setAttribute("data-start",String(w+1))}x.textContent=T,t.highlightElement(x)},function(T){p.setAttribute(a,c),x.textContent=T})}}),t.plugins.fileHighlight={highlight:function(p){for(var x=(p||document).querySelectorAll(h),b=0,_;_=x[b++];)t.highlightElement(_)}};var g=!1;t.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ig);const Yv=ig.exports;var jv={exports:{}};(function(r){(function(){if(typeof Prism>"u")return;var e=Object.assign||function(o,a){for(var l in a)a.hasOwnProperty(l)&&(o[l]=a[l]);return o};function t(o){this.defaults=e({},o)}function n(o){return o.replace(/-(\w)/g,function(a,l){return l.toUpperCase()})}function i(o){for(var a=0,l=0;l<o.length;++l)o.charCodeAt(l)=="	".charCodeAt(0)&&(a+=3);return o.length+a}var s={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};t.prototype={setDefaults:function(o){this.defaults=e(this.defaults,o)},normalize:function(o,a){a=e(this.defaults,a);for(var l in a){var u=n(l);l!=="normalize"&&u!=="setDefaults"&&a[l]&&this[u]&&(o=this[u].call(this,o,a[l]))}return o},leftTrim:function(o){return o.replace(/^\s+/,"")},rightTrim:function(o){return o.replace(/\s+$/,"")},tabsToSpaces:function(o,a){return a=a|0||4,o.replace(/\t/g,new Array(++a).join(" "))},spacesToTabs:function(o,a){return a=a|0||4,o.replace(RegExp(" {"+a+"}","g"),"	")},removeTrailing:function(o){return o.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(o){return o.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(o){var a=o.match(/^[^\S\n\r]*(?=\S)/gm);return!a||!a[0].length||(a.sort(function(l,u){return l.length-u.length}),!a[0].length)?o:o.replace(RegExp("^"+a[0],"gm"),"")},indent:function(o,a){return o.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++a).join("	")+"$&")},breakLines:function(o,a){a=a===!0?80:a|0||80;for(var l=o.split(`
`),u=0;u<l.length;++u)if(!(i(l[u])<=a)){for(var c=l[u].split(/(\s+)/g),h=0,f=0;f<c.length;++f){var m=i(c[f]);h+=m,h>a&&(c[f]=`
`+c[f],h=m)}l[u]=c.join("")}return l.join(`
`)}},r.exports&&(r.exports=t),Prism.plugins.NormalizeWhitespace=new t({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(o){var a=Prism.plugins.NormalizeWhitespace;if(!(o.settings&&o.settings["whitespace-normalization"]===!1)&&!!Prism.util.isActive(o.element,"whitespace-normalization",!0)){if((!o.element||!o.element.parentNode)&&o.code){o.code=a.normalize(o.code,o.settings);return}var l=o.element.parentNode;if(!(!o.code||!l||l.nodeName.toLowerCase()!=="pre")){o.settings==null&&(o.settings={});for(var u in s)if(Object.hasOwnProperty.call(s,u)){var c=s[u];if(l.hasAttribute("data-"+u))try{var h=JSON.parse(l.getAttribute("data-"+u)||"true");typeof h===c&&(o.settings[u]=h)}catch{}}for(var f=l.childNodes,m="",g="",d=!1,p=0;p<f.length;++p){var x=f[p];x==o.element?d=!0:x.nodeName==="#text"&&(d?g+=x.nodeValue:m+=x.nodeValue,l.removeChild(x),--p)}if(!o.element.children.length||!Prism.plugins.KeepMarkup)o.code=m+o.code+g,o.code=a.normalize(o.code,o.settings);else{var b=m+o.element.innerHTML+g;o.element.innerHTML=a.normalize(b,o.settings),o.code=o.element.textContent}}}})})()})(jv);const Zv={key:0},Kv={key:0},Jv={key:1,class:"inline"},Qv=rr({__name:"SampleCode",props:{type:{type:String,default:"css"},caption:{type:String,default:null}},setup(r){return or(()=>{window.Prism=window.Prism||{},window.Prism.manual=!0,window.Prism.plugins.NormalizeWhitespace.setDefaults({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Yv.highlightAll()}),(e,t)=>e.$slots.default()[0].type==="pre"?(Ge(),qe("figure",Zv,[We("pre",null,[We("code",{class:ua("language-"+r.type)},[pa(e.$slots,"default",{},void 0,!0)],2)]),r.caption?(Ge(),qe("figcaption",Kv,Og(r.caption),1)):Ex("",!0)])):(Ge(),qe("figure",Jv,[We("code",{class:ua("language-"+r.type)},[pa(e.$slots,"default",{},void 0,!0)],2)]))}});const hi=ar(Qv,[["__scopeId","data-v-e9852318"]]),e1={ref:"sampleCard",class:"sample-card"},t1=["src"],n1=rr({__name:"SampleCard",props:{n:{type:Number,default:"0"}},setup(r){const e=r;return(t,n)=>(Ge(),qe("div",e1,[We("img",{src:"https://source.unsplash.com/random?"+e.n,alt:""},null,8,t1)],512))}});const i1=ar(n1,[["__scopeId","data-v-dc761f36"]]),r1={class:"card__heading",ref:"heading"},s1={class:"card__text"},o1=rr({__name:"DescriptionCard",props:{startX:{type:String,default:"0"},startY:{type:String,default:"0"}},setup(r){const e=r;Dn.registerPlugin(Qe);const t=Oi(null);return or(()=>{Dn.set(t.value,{x:e.startX,y:e.startY,opacity:0}),Dn.to(t.value,{x:0,y:0,opacity:1,scrollTrigger:{trigger:t.value,toggleActions:"play none none reset",start:"top center+=30%",end:"top center-=30%"}})}),(n,i)=>(Ge(),qe("div",{class:"card",ref_key:"card",ref:t},[We("h2",r1,[pa(n.$slots,"heading")],512),We("div",s1,[pa(n.$slots,"default")])],512))}});const Ei=ar(o1,[["__scopeId","data-v-95df4f4a"]]),a1=rr({__name:"SideScroller",setup(r){Dn.registerPlugin(Qe);const e=Oi(null),t=()=>e.value?e.value.clientWidth-window.innerWidth:0;return or(()=>{const n=Dn.to(e.value,{x:-t(),ease:"none",scrollTrigger:{trigger:e.value,scrub:!0,pin:!0,end:"+="+t(),invalidateOnRefresh:!0}});Qe.addEventListener("refreshInit",()=>{n.vars.x=-t(),n.vars.scrollTrigger={end:"+="+t()}})}),(n,i)=>(Ge(),qe("div",{ref_key:"sideScroller",ref:e,class:"side-scroller"},[pa(n.$slots,"default",{},void 0,!0)],512))}});const l1=ar(a1,[["__scopeId","data-v-c6c26b16"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="147",u1=0,Cd=1,c1=2,rg=1,f1=2,Yo=3,wo=0,ui=1,Er=2,Rr=0,fo=1,pf=2,Dd=3,Pd=4,h1=5,Zs=100,d1=101,p1=102,Ld=103,Fd=104,m1=200,g1=201,_1=202,x1=203,sg=204,og=205,v1=206,y1=207,b1=208,M1=209,S1=210,w1=0,T1=1,E1=2,mf=3,A1=4,C1=5,D1=6,P1=7,ag=0,L1=1,F1=2,er=0,R1=1,B1=2,I1=3,U1=4,O1=5,lg=300,To=301,Eo=302,gf=303,_f=304,_u=306,xf=1e3,yi=1001,vf=1002,Sn=1003,Rd=1004,Bd=1005,ti=1006,N1=1007,xu=1008,As=1009,k1=1010,z1=1011,ug=1012,W1=1013,us=1014,cs=1015,wa=1016,V1=1017,G1=1018,ho=1020,H1=1021,X1=1022,bi=1023,q1=1024,$1=1025,vs=1026,Ao=1027,Y1=1028,j1=1029,Z1=1030,K1=1031,J1=1033,Zu=33776,Ku=33777,Ju=33778,Qu=33779,Id=35840,Ud=35841,Od=35842,Nd=35843,Q1=36196,kd=37492,zd=37496,Wd=37808,Vd=37809,Gd=37810,Hd=37811,Xd=37812,qd=37813,$d=37814,Yd=37815,jd=37816,Zd=37817,Kd=37818,Jd=37819,Qd=37820,ep=37821,tp=36492,Cs=3e3,St=3001,ey=3200,ty=3201,ny=0,iy=1,Pi="srgb",Ta="srgb-linear",ec=7680,ry=519,np=35044,ip="300 es",yf=1035;class Fo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=Math.PI/180,rp=180/Math.PI;function Aa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function zn(r,e,t){return Math.max(e,Math.min(t,r))}function sy(r,e){return(r%e+e)%e}function nc(r,e,t){return(1-t)*r+t*e}function sp(r){return(r&r-1)===0&&r!==0}function bf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ka(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gn{constructor(){Gn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],x=i[6],b=i[1],_=i[4],y=i[7],M=i[2],T=i[5],E=i[8];return s[0]=o*d+a*b+l*M,s[3]=o*p+a*_+l*T,s[6]=o*x+a*y+l*E,s[1]=u*d+c*b+h*M,s[4]=u*p+c*_+h*T,s[7]=u*x+c*y+h*E,s[2]=f*d+m*b+g*M,s[5]=f*p+m*_+g*T,s[8]=f*x+m*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-n*s*c+n*a*l+i*s*u-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,m=u*s-o*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*u-c*n)*d,e[2]=(a*n-i*o)*d,e[3]=f*d,e[4]=(c*t-i*l)*d,e[5]=(i*s-a*t)*d,e[6]=m*d,e[7]=(n*l-u*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-i*u,i*l,-i*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ic.makeScale(e,t)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ic=new Gn;function cg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Jl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ys(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const rc={[Pi]:{[Ta]:ys},[Ta]:{[Pi]:Bl}},hn={legacyMode:!0,get workingColorSpace(){return Ta},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(rc[e]&&rc[e][t]!==void 0){const n=rc[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ot={r:0,g:0,b:0},di={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function sc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Qa(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class vt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,hn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=hn.workingColorSpace){return this.r=e,this.g=t,this.b=n,hn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=hn.workingColorSpace){if(e=sy(e,1),t=zn(t,0,1),n=zn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=sc(o,s,e+1/3),this.g=sc(o,s,e),this.b=sc(o,s,e-1/3)}return hn.toWorkingColorSpace(this,i),this}setStyle(e,t=Pi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,hn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,hn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,u,c,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,hn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,hn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Pi){const n=fg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=Bl(e.r),this.g=Bl(e.g),this.b=Bl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return hn.fromWorkingColorSpace(Qa(this,Ot),e),zn(Ot.r*255,0,255)<<16^zn(Ot.g*255,0,255)<<8^zn(Ot.b*255,0,255)<<0}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=hn.workingColorSpace){hn.fromWorkingColorSpace(Qa(this,Ot),t);const n=Ot.r,i=Ot.g,s=Ot.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=hn.workingColorSpace){return hn.fromWorkingColorSpace(Qa(this,Ot),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Pi){return hn.fromWorkingColorSpace(Qa(this,Ot),e),e!==Pi?`color(${e} ${Ot.r} ${Ot.g} ${Ot.b})`:`rgb(${Ot.r*255|0},${Ot.g*255|0},${Ot.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(di),di.h+=e,di.s+=t,di.l+=n,this.setHSL(di.h,di.s,di.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Ja);const n=nc(di.h,Ja.h,t),i=nc(di.s,Ja.s,t),s=nc(di.l,Ja.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}vt.NAMES=fg;let Bs;class hg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=Jl("canvas")),Bs.width=e.width,Bs.height=e.height;const n=Bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ys(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ys(t[n]/255)*255):t[n]=ys(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class dg{constructor(e=null){this.isSource=!0,this.uuid=Aa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(oc(i[o].image)):s.push(oc(i[o]))}else s=oc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function oc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oy=0;class Xn extends Fo{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,n=yi,i=yi,s=ti,o=xu,a=bi,l=As,u=Xn.DEFAULT_ANISOTROPY,c=Cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Aa(),this.name="",this.source=new dg(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xf:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xf:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=lg;Xn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,t=0,n=0,i=1){en.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],x=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,y=(m+1)/2,M=(x+1)/2,T=(c+f)/4,E=(h+d)/4,v=(g+p)/4;return _>y&&_>M?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=T/n,s=E/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=v/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=E/s,i=v/s),this.set(n,i,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-c)*(f-c));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-d)/b,this.z=(f-c)/b,this.w=Math.acos((u+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ds extends Fo{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ti,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pg extends Xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ay extends Xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ca{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],u=n[i+1],c=n[i+2],h=n[i+3];const f=s[o+0],m=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||u!==m||c!==g){let p=1-a;const x=l*f+u*m+c*g+h*d,b=x>=0?1:-1,_=1-x*x;if(_>Number.EPSILON){const M=Math.sqrt(_),T=Math.atan2(M,x*b);p=Math.sin(p*T)/M,a=Math.sin(a*T)/M}const y=a*b;if(l=l*p+f*y,u=u*p+m*y,c=c*p+g*y,h=h*p+d*y,p===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=M,u*=M,c*=M,h*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],u=n[i+2],c=n[i+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+c*h+l*m-u*f,e[t+1]=l*g+c*f+u*h-a*m,e[t+2]=u*g+c*m+a*f-l*h,e[t+3]=c*g-a*h-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(i/2),h=a(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*m*g,this._y=u*m*h-f*c*g,this._z=u*c*g+f*m*h,this._w=u*c*h-f*m*g;break;case"YXZ":this._x=f*c*h+u*m*g,this._y=u*m*h-f*c*g,this._z=u*c*g-f*m*h,this._w=u*c*h+f*m*g;break;case"ZXY":this._x=f*c*h-u*m*g,this._y=u*m*h+f*c*g,this._z=u*c*g+f*m*h,this._w=u*c*h-f*m*g;break;case"ZYX":this._x=f*c*h-u*m*g,this._y=u*m*h+f*c*g,this._z=u*c*g-f*m*h,this._w=u*c*h+f*m*g;break;case"YZX":this._x=f*c*h+u*m*g,this._y=u*m*h+f*c*g,this._z=u*c*g-f*m*h,this._w=u*c*h-f*m*g;break;case"XZY":this._x=f*c*h-u*m*g,this._y=u*m*h-f*c*g,this._z=u*c*g+f*m*h,this._w=u*c*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(c-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-u)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*a+i*u-s*l,this._y=i*c+o*l+s*a-n*u,this._z=s*c+o*u+n*l-i*a,this._w=o*c-n*a-i*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(op.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(op.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*i-a*n,c=l*n+a*t-s*i,h=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=u*l+f*-s+c*-a-h*-o,this.y=c*l+f*-o+h*-s-u*-a,this.z=h*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ac.copy(this).projectOnVector(e),this.sub(ac)}reflect(e){return this.sub(ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ac=new J,op=new Ca;class Da{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],h=e[l+1],f=e[l+2];c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>s&&(s=c),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),h=e.getY(l),f=e.getZ(l);c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>s&&(s=c),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$r.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)$r.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint($r)}else n.boundingBox===null&&n.computeBoundingBox(),lc.copy(n.boundingBox),lc.applyMatrix4(e.matrixWorld),this.union(lc);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$r),$r.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),el.subVectors(this.max,No),Is.subVectors(e.a,No),Us.subVectors(e.b,No),Os.subVectors(e.c,No),cr.subVectors(Us,Is),fr.subVectors(Os,Us),Yr.subVectors(Is,Os);let t=[0,-cr.z,cr.y,0,-fr.z,fr.y,0,-Yr.z,Yr.y,cr.z,0,-cr.x,fr.z,0,-fr.x,Yr.z,0,-Yr.x,-cr.y,cr.x,0,-fr.y,fr.x,0,-Yr.y,Yr.x,0];return!uc(t,Is,Us,Os,el)||(t=[1,0,0,0,1,0,0,0,1],!uc(t,Is,Us,Os,el))?!1:(tl.crossVectors(cr,fr),t=[tl.x,tl.y,tl.z],uc(t,Is,Us,Os,el))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return $r.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize($r).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new J,new J,new J,new J,new J,new J,new J,new J],$r=new J,lc=new Da,Is=new J,Us=new J,Os=new J,cr=new J,fr=new J,Yr=new J,No=new J,el=new J,tl=new J,jr=new J;function uc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){jr.fromArray(r,s);const a=i.x*Math.abs(jr.x)+i.y*Math.abs(jr.y)+i.z*Math.abs(jr.z),l=e.dot(jr),u=t.dot(jr),c=n.dot(jr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const ly=new Da,ko=new J,cc=new J;class vu{constructor(e=new J,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ly.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const t=ko.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ko,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(cc)),this.expandByPoint(ko.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new J,fc=new J,nl=new J,hr=new J,hc=new J,il=new J,dc=new J;class mg{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.direction).multiplyScalar(t).add(this.origin),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fc.copy(e).add(t).multiplyScalar(.5),nl.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(fc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(nl),a=hr.dot(this.direction),l=-hr.dot(nl),u=hr.lengthSq(),c=Math.abs(1-o*o);let h,f,m,g;if(c>0)if(h=o*l-a,f=o*a-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const d=1/c;h*=d,f*=d,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+u;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(nl).multiplyScalar(f).add(fc),m}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const n=Gi.dot(this.direction),i=Gi.dot(Gi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,i,s){hc.subVectors(t,e),il.subVectors(n,e),dc.crossVectors(hc,il);let o=this.direction.dot(dc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hr.subVectors(this.origin,e);const l=a*this.direction.dot(il.crossVectors(hr,il));if(l<0)return null;const u=a*this.direction.dot(hc.cross(hr));if(u<0||l+u>o)return null;const c=-a*hr.dot(dc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,u,c,h,f,m,g,d,p){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=u,x[6]=c,x[10]=h,x[14]=f,x[3]=m,x[7]=g,x[11]=d,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,m=o*h,g=a*c,d=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=m+g*u,t[5]=f-d*u,t[9]=-a*l,t[2]=d-f*u,t[6]=g+m*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,m=l*h,g=u*c,d=u*h;t[0]=f+d*a,t[4]=g*a-m,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=m*a-g,t[6]=d+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,m=l*h,g=u*c,d=u*h;t[0]=f-d*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*c,t[9]=d-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,m=o*h,g=a*c,d=a*h;t[0]=l*c,t[4]=g*u-m,t[8]=f*u+d,t[1]=l*h,t[5]=d*u+f,t[9]=m*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*u,g=a*l,d=a*u;t[0]=l*c,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*l,m=o*u,g=a*l,d=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+d,t[5]=o*c,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*c,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uy,e,cy)}lookAt(e,t,n){const i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),dr.crossVectors(n,In),dr.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),dr.crossVectors(n,In)),dr.normalize(),rl.crossVectors(In,dr),i[0]=dr.x,i[4]=rl.x,i[8]=In.x,i[1]=dr.y,i[5]=rl.y,i[9]=In.y,i[2]=dr.z,i[6]=rl.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],x=n[14],b=n[3],_=n[7],y=n[11],M=n[15],T=i[0],E=i[4],v=i[8],w=i[12],P=i[1],O=i[5],Z=i[9],z=i[13],I=i[2],q=i[6],G=i[10],Y=i[14],B=i[3],se=i[7],F=i[11],X=i[15];return s[0]=o*T+a*P+l*I+u*B,s[4]=o*E+a*O+l*q+u*se,s[8]=o*v+a*Z+l*G+u*F,s[12]=o*w+a*z+l*Y+u*X,s[1]=c*T+h*P+f*I+m*B,s[5]=c*E+h*O+f*q+m*se,s[9]=c*v+h*Z+f*G+m*F,s[13]=c*w+h*z+f*Y+m*X,s[2]=g*T+d*P+p*I+x*B,s[6]=g*E+d*O+p*q+x*se,s[10]=g*v+d*Z+p*G+x*F,s[14]=g*w+d*z+p*Y+x*X,s[3]=b*T+_*P+y*I+M*B,s[7]=b*E+_*O+y*q+M*se,s[11]=b*v+_*Z+y*G+M*F,s[15]=b*w+_*z+y*Y+M*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],x=e[15];return g*(+s*l*h-i*u*h-s*a*f+n*u*f+i*a*m-n*l*m)+d*(+t*l*m-t*u*f+s*o*f-i*o*m+i*u*c-s*l*c)+p*(+t*u*h-t*a*m-s*o*h+n*o*m+s*a*c-n*u*c)+x*(-i*a*c-t*l*h+t*a*f+i*o*h-n*o*f+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],x=e[15],b=h*p*u-d*f*u+d*l*m-a*p*m-h*l*x+a*f*x,_=g*f*u-c*p*u-g*l*m+o*p*m+c*l*x-o*f*x,y=c*d*u-g*h*u+g*a*m-o*d*m-c*a*x+o*h*x,M=g*h*l-c*d*l-g*a*f+o*d*f+c*a*p-o*h*p,T=t*b+n*_+i*y+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=b*E,e[1]=(d*f*s-h*p*s-d*i*m+n*p*m+h*i*x-n*f*x)*E,e[2]=(a*p*s-d*l*s+d*i*u-n*p*u-a*i*x+n*l*x)*E,e[3]=(h*l*s-a*f*s-h*i*u+n*f*u+a*i*m-n*l*m)*E,e[4]=_*E,e[5]=(c*p*s-g*f*s+g*i*m-t*p*m-c*i*x+t*f*x)*E,e[6]=(g*l*s-o*p*s-g*i*u+t*p*u+o*i*x-t*l*x)*E,e[7]=(o*f*s-c*l*s+c*i*u-t*f*u-o*i*m+t*l*m)*E,e[8]=y*E,e[9]=(g*h*s-c*d*s-g*n*m+t*d*m+c*n*x-t*h*x)*E,e[10]=(o*d*s-g*a*s+g*n*u-t*d*u-o*n*x+t*a*x)*E,e[11]=(c*a*s-o*h*s-c*n*u+t*h*u+o*n*m-t*a*m)*E,e[12]=M*E,e[13]=(c*d*i-g*h*i+g*n*f-t*d*f-c*n*p+t*h*p)*E,e[14]=(g*a*i-o*d*i-g*n*l+t*d*l+o*n*p-t*a*p)*E,e[15]=(o*h*i-c*a*i+c*n*l-t*h*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,c*a+n,c*l-i*o,0,u*l-i*a,c*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,f=s*u,m=s*c,g=s*h,d=o*c,p=o*h,x=a*h,b=l*u,_=l*c,y=l*h,M=n.x,T=n.y,E=n.z;return i[0]=(1-(d+x))*M,i[1]=(m+y)*M,i[2]=(g-_)*M,i[3]=0,i[4]=(m-y)*T,i[5]=(1-(f+x))*T,i[6]=(p+b)*T,i[7]=0,i[8]=(g+_)*E,i[9]=(p-b)*E,i[10]=(1-(f+d))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ns.set(i[0],i[1],i[2]).length();const o=Ns.set(i[4],i[5],i[6]).length(),a=Ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],pi.copy(this);const u=1/s,c=1/o,h=1/a;return pi.elements[0]*=u,pi.elements[1]*=u,pi.elements[2]*=u,pi.elements[4]*=c,pi.elements[5]*=c,pi.elements[6]*=c,pi.elements[8]*=h,pi.elements[9]*=h,pi.elements[10]*=h,t.setFromRotationMatrix(pi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(n-i),c=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),u=1/(n-i),c=1/(o-s),h=(t+e)*l,f=(n+i)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ns=new J,pi=new $t,uy=new J(0,0,0),cy=new J(1,1,1),dr=new J,rl=new J,In=new J,ap=new $t,lp=new Ca;class Pa{constructor(e=0,t=0,n=0,i=Pa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],u=i[5],c=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(zn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-zn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(zn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(zn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-zn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ap,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lp.setFromEuler(this),this.setFromQuaternion(lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Pa.DefaultOrder="XYZ";Pa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class gg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fy=0;const up=new J,ks=new Ca,Hi=new $t,sl=new J,zo=new J,hy=new J,dy=new Ca,cp=new J(1,0,0),fp=new J(0,1,0),hp=new J(0,0,1),py={type:"added"},dp={type:"removed"};class Pn extends Fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DefaultUp.clone();const e=new J,t=new Pa,n=new Ca,i=new J(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new Gn}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Pn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Pn.DefaultMatrixWorldAutoUpdate,this.layers=new gg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(cp,e)}rotateY(e){return this.rotateOnAxis(fp,e)}rotateZ(e){return this.rotateOnAxis(hp,e)}translateOnAxis(e,t){return up.copy(e).applyQuaternion(this.quaternion),this.position.add(up.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cp,e)}translateY(e){return this.translateOnAxis(fp,e)}translateZ(e){return this.translateOnAxis(hp,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sl.copy(e):sl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(zo,sl,this.up):Hi.lookAt(sl,zo,this.up),this.quaternion.setFromRotationMatrix(Hi),i&&(Hi.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(Hi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(py)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(dp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,hy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Pn.DefaultUp=new J(0,1,0);Pn.DefaultMatrixAutoUpdate=!0;Pn.DefaultMatrixWorldAutoUpdate=!0;const mi=new J,Xi=new J,pc=new J,qi=new J,zs=new J,Ws=new J,pp=new J,mc=new J,gc=new J,_c=new J;class Ki{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mi.subVectors(e,t),i.cross(mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){mi.subVectors(i,t),Xi.subVectors(n,t),pc.subVectors(e,t);const o=mi.dot(mi),a=mi.dot(Xi),l=mi.dot(pc),u=Xi.dot(Xi),c=Xi.dot(pc),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qi),qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,qi),l.set(0,0),l.addScaledVector(s,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l}static isFrontFacing(e,t,n,i){return mi.subVectors(n,t),Xi.subVectors(e,t),mi.cross(Xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),mi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ki.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ki.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;zs.subVectors(i,n),Ws.subVectors(s,n),mc.subVectors(e,n);const l=zs.dot(mc),u=Ws.dot(mc);if(l<=0&&u<=0)return t.copy(n);gc.subVectors(e,i);const c=zs.dot(gc),h=Ws.dot(gc);if(c>=0&&h<=c)return t.copy(i);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(zs,o);_c.subVectors(e,s);const m=zs.dot(_c),g=Ws.dot(_c);if(g>=0&&m<=g)return t.copy(s);const d=m*u-l*g;if(d<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(n).addScaledVector(Ws,a);const p=c*g-m*h;if(p<=0&&h-c>=0&&m-g>=0)return pp.subVectors(s,i),a=(h-c)/(h-c+(m-g)),t.copy(i).addScaledVector(pp,a);const x=1/(p+d+f);return o=d*x,a=f*x,t.copy(n).addScaledVector(zs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let my=0;class La extends Fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Aa(),this.name="",this.type="Material",this.blending=fo,this.side=wo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=sg,this.blendDst=og,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=mf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ry,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ec,this.stencilZFail=ec,this.stencilZPass=ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(n.blending=this.blending),this.side!==wo&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _g extends La{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ag,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new J,ol=new _t;class ci{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=np,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ol.fromBufferAttribute(this,t),ol.applyMatrix3(e),this.setXY(t,ol.x,ol.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ka(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ka(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ka(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ka(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array),i=Bn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array),i=Bn(i,this.array),s=Bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==np&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class xg extends ci{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vg extends ci{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bs extends ci{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gy=0;const Kn=new $t,xc=new Pn,Vs=new J,Un=new Da,Wo=new Da,Ht=new J;class lr extends Fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Aa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cg(e)?vg:xg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Gn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bs(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Un.min,Wo.min),Un.expandByPoint(Ht),Ht.addVectors(Un.max,Wo.max),Un.expandByPoint(Ht)):(Un.expandByPoint(Wo.min),Un.expandByPoint(Wo.max))}Un.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ht.fromBufferAttribute(a,u),l&&(Vs.fromBufferAttribute(e,u),Ht.add(Vs)),i=Math.max(i,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let P=0;P<a;P++)u[P]=new J,c[P]=new J;const h=new J,f=new J,m=new J,g=new _t,d=new _t,p=new _t,x=new J,b=new J;function _(P,O,Z){h.fromArray(i,P*3),f.fromArray(i,O*3),m.fromArray(i,Z*3),g.fromArray(o,P*2),d.fromArray(o,O*2),p.fromArray(o,Z*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const z=1/(d.x*p.y-p.x*d.y);!isFinite(z)||(x.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(z),b.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(z),u[P].add(x),u[O].add(x),u[Z].add(x),c[P].add(b),c[O].add(b),c[Z].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,O=y.length;P<O;++P){const Z=y[P],z=Z.start,I=Z.count;for(let q=z,G=z+I;q<G;q+=3)_(n[q+0],n[q+1],n[q+2])}const M=new J,T=new J,E=new J,v=new J;function w(P){E.fromArray(s,P*3),v.copy(E);const O=u[P];M.copy(O),M.sub(E.multiplyScalar(E.dot(O))).normalize(),T.crossVectors(v,O);const z=T.dot(c[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=z}for(let P=0,O=y.length;P<O;++P){const Z=y[P],z=Z.start,I=Z.count;for(let q=z,G=z+I;q<G;q+=3)w(n[q+0]),w(n[q+1]),w(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new J,s=new J,o=new J,a=new J,l=new J,u=new J,c=new J,h=new J;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),c.subVectors(o,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),u.fromBufferAttribute(n,p),a.add(c),l.add(c),u.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(i,s),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*c;for(let x=0;x<c;x++)f[g++]=u[m++]}return new ci(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=e(l,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const m=u[h];c.push(m.toJSON(e.data))}c.length>0&&(i[l]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,m=h.length;f<m;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const mp=new $t,Gs=new mg,vc=new vu,pr=new J,mr=new J,gr=new J,yc=new J,bc=new J,Mc=new J,al=new J,ll=new J,ul=new J,cl=new _t,fl=new _t,hl=new _t,Sc=new J,dl=new J;class Ar extends Pn{constructor(e=new lr,t=new _g){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(s),e.ray.intersectsSphere(vc)===!1)||(mp.copy(s).invert(),Gs.copy(e.ray).applyMatrix4(mp),n.boundingBox!==null&&Gs.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,u=n.morphAttributes.position,c=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const x=m[d],b=i[x.materialIndex],_=Math.max(x.start,g.start),y=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let M=_,T=y;M<T;M+=3){const E=a.getX(M),v=a.getX(M+1),w=a.getX(M+2);o=pl(this,b,e,Gs,l,u,c,h,f,E,v,w),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let x=d,b=p;x<b;x+=3){const _=a.getX(x),y=a.getX(x+1),M=a.getX(x+2);o=pl(this,i,e,Gs,l,u,c,h,f,_,y,M),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const x=m[d],b=i[x.materialIndex],_=Math.max(x.start,g.start),y=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let M=_,T=y;M<T;M+=3){const E=M,v=M+1,w=M+2;o=pl(this,b,e,Gs,l,u,c,h,f,E,v,w),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let x=d,b=p;x<b;x+=3){const _=x,y=x+1,M=x+2;o=pl(this,i,e,Gs,l,u,c,h,f,_,y,M),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function _y(r,e,t,n,i,s,o,a){let l;if(e.side===ui?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==Er,a),l===null)return null;dl.copy(a),dl.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(dl);return u<t.near||u>t.far?null:{distance:u,point:dl.clone(),object:r}}function pl(r,e,t,n,i,s,o,a,l,u,c,h){pr.fromBufferAttribute(i,u),mr.fromBufferAttribute(i,c),gr.fromBufferAttribute(i,h);const f=r.morphTargetInfluences;if(s&&f){al.set(0,0,0),ll.set(0,0,0),ul.set(0,0,0);for(let g=0,d=s.length;g<d;g++){const p=f[g],x=s[g];p!==0&&(yc.fromBufferAttribute(x,u),bc.fromBufferAttribute(x,c),Mc.fromBufferAttribute(x,h),o?(al.addScaledVector(yc,p),ll.addScaledVector(bc,p),ul.addScaledVector(Mc,p)):(al.addScaledVector(yc.sub(pr),p),ll.addScaledVector(bc.sub(mr),p),ul.addScaledVector(Mc.sub(gr),p)))}pr.add(al),mr.add(ll),gr.add(ul)}r.isSkinnedMesh&&(r.boneTransform(u,pr),r.boneTransform(c,mr),r.boneTransform(h,gr));const m=_y(r,e,t,n,pr,mr,gr,Sc);if(m){a&&(cl.fromBufferAttribute(a,u),fl.fromBufferAttribute(a,c),hl.fromBufferAttribute(a,h),m.uv=Ki.getUV(Sc,pr,mr,gr,cl,fl,hl,new _t)),l&&(cl.fromBufferAttribute(l,u),fl.fromBufferAttribute(l,c),hl.fromBufferAttribute(l,h),m.uv2=Ki.getUV(Sc,pr,mr,gr,cl,fl,hl,new _t));const g={a:u,b:c,c:h,normal:new J,materialIndex:0};Ki.getNormal(pr,mr,gr,g.normal),m.face=g}return m}class Fa extends lr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new bs(u,3)),this.setAttribute("normal",new bs(c,3)),this.setAttribute("uv",new bs(h,2));function g(d,p,x,b,_,y,M,T,E,v,w){const P=y/E,O=M/v,Z=y/2,z=M/2,I=T/2,q=E+1,G=v+1;let Y=0,B=0;const se=new J;for(let F=0;F<G;F++){const X=F*O-z;for(let V=0;V<q;V++){const fe=V*P-Z;se[d]=fe*b,se[p]=X*_,se[x]=I,u.push(se.x,se.y,se.z),se[d]=0,se[p]=0,se[x]=T>0?1:-1,c.push(se.x,se.y,se.z),h.push(V/E),h.push(1-F/v),Y+=1}}for(let F=0;F<v;F++)for(let X=0;X<E;X++){const V=f+X+q*F,fe=f+X+q*(F+1),ue=f+(X+1)+q*(F+1),me=f+(X+1)+q*F;l.push(V,fe,me),l.push(fe,ue,me),B+=6}a.addGroup(m,B,w),m+=B,f+=Y}}static fromJSON(e){return new Fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pn(r){const e={};for(let t=0;t<r.length;t++){const n=Co(r[t]);for(const i in n)e[i]=n[i]}return e}function xy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function yg(r){return r.getRenderTarget()===null&&r.outputEncoding===St?Pi:Ta}const vy={clone:Co,merge:pn};var yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,by=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends La{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yy,this.fragmentShader=by,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=xy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bg extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ni extends bg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rp*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Xs=1;class My extends Pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new ni(Hs,Xs,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new ni(Hs,Xs,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new ni(Hs,Xs,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new ni(Hs,Xs,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new ni(Hs,Xs,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new ni(Hs,Xs,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,u]=this.children,c=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=er,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Mg extends Xn{constructor(e,t,n,i,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:To,super(e,t,n,i,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sy extends Ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mg(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fa(5,5,5),s=new kr({name:"CubemapFromEquirect",uniforms:Co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ui,blending:Rr});s.uniforms.tEquirect.value=t;const o=new Ar(i,s),a=t.minFilter;return t.minFilter===xu&&(t.minFilter=ti),new My(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const wc=new J,wy=new J,Ty=new Gn;class Qr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wc.subVectors(n,t).cross(wy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(wc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ty.getNormalMatrix(e),i=this.coplanarPoint(wc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new vu,ml=new J;class Sg{constructor(e=new Qr,t=new Qr,n=new Qr,i=new Qr,s=new Qr,o=new Qr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],u=n[5],c=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],x=n[13],b=n[14],_=n[15];return t[0].setComponents(a-i,h-l,d-f,_-p).normalize(),t[1].setComponents(a+i,h+l,d+f,_+p).normalize(),t[2].setComponents(a+s,h+u,d+m,_+x).normalize(),t[3].setComponents(a-s,h-u,d-m,_-x).normalize(),t[4].setComponents(a-o,h-c,d-g,_-b).normalize(),t[5].setComponents(a+o,h+c,d+g,_+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ml.x=i.normal.x>0?e.max.x:e.min.x,ml.y=i.normal.y>0?e.max.y:e.min.y,ml.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ey(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,c){const h=u.array,f=u.usage,m=r.createBuffer();r.bindBuffer(c,m),r.bufferData(c,h,f),u.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,h){const f=c.array,m=c.updateRange;r.bindBuffer(h,u),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(r.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h===void 0?n.set(u,i(u,c)):h.version<u.version&&(s(h.buffer,u,c),h.version=u.version)}return{get:o,remove:a,update:l}}class dh extends lr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),u=a+1,c=l+1,h=e/a,f=t/l,m=[],g=[],d=[],p=[];for(let x=0;x<c;x++){const b=x*f-o;for(let _=0;_<u;_++){const y=_*h-s;g.push(y,-b,0),d.push(0,0,1),p.push(_/a),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let b=0;b<a;b++){const _=b+u*x,y=b+u*(x+1),M=b+1+u*(x+1),T=b+1+u*x;m.push(_,y,T),m.push(y,M,T)}this.setIndex(m),this.setAttribute("position",new bs(g,3)),this.setAttribute("normal",new bs(d,3)),this.setAttribute("uv",new bs(p,2))}static fromJSON(e){return new dh(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Py=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ly=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fy=`#ifdef USE_AOMAP
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
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ub=`#ifdef USE_FOG
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
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Eb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
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
#endif`,Pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
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
}`,lM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uM=`#ifdef USE_SKINNING
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
#endif`;const TM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EM=`uniform sampler2D t2D;
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
}`,PM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,LM=`#include <common>
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
}`,FM=`#if DEPTH_PACKING == 3200
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
}`,VM=`#define LAMBERT
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
}`,GM=`#define MATCAP
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
}`,et={alphamap_fragment:Ay,alphamap_pars_fragment:Cy,alphatest_fragment:Dy,alphatest_pars_fragment:Py,aomap_fragment:Ly,aomap_pars_fragment:Fy,begin_vertex:Ry,beginnormal_vertex:By,bsdfs:Iy,iridescence_fragment:Uy,bumpmap_pars_fragment:Oy,clipping_planes_fragment:Ny,clipping_planes_pars_fragment:ky,clipping_planes_pars_vertex:zy,clipping_planes_vertex:Wy,color_fragment:Vy,color_pars_fragment:Gy,color_pars_vertex:Hy,color_vertex:Xy,common:qy,cube_uv_reflection_fragment:$y,defaultnormal_vertex:Yy,displacementmap_pars_vertex:jy,displacementmap_vertex:Zy,emissivemap_fragment:Ky,emissivemap_pars_fragment:Jy,encodings_fragment:Qy,encodings_pars_fragment:eb,envmap_fragment:tb,envmap_common_pars_fragment:nb,envmap_pars_fragment:ib,envmap_pars_vertex:rb,envmap_physical_pars_fragment:gb,envmap_vertex:sb,fog_vertex:ob,fog_pars_vertex:ab,fog_fragment:lb,fog_pars_fragment:ub,gradientmap_pars_fragment:cb,lightmap_fragment:fb,lightmap_pars_fragment:hb,lights_lambert_fragment:db,lights_lambert_pars_fragment:pb,lights_pars_begin:mb,lights_toon_fragment:_b,lights_toon_pars_fragment:xb,lights_phong_fragment:vb,lights_phong_pars_fragment:yb,lights_physical_fragment:bb,lights_physical_pars_fragment:Mb,lights_fragment_begin:Sb,lights_fragment_maps:wb,lights_fragment_end:Tb,logdepthbuf_fragment:Eb,logdepthbuf_pars_fragment:Ab,logdepthbuf_pars_vertex:Cb,logdepthbuf_vertex:Db,map_fragment:Pb,map_pars_fragment:Lb,map_particle_fragment:Fb,map_particle_pars_fragment:Rb,metalnessmap_fragment:Bb,metalnessmap_pars_fragment:Ib,morphcolor_vertex:Ub,morphnormal_vertex:Ob,morphtarget_pars_vertex:Nb,morphtarget_vertex:kb,normal_fragment_begin:zb,normal_fragment_maps:Wb,normal_pars_fragment:Vb,normal_pars_vertex:Gb,normal_vertex:Hb,normalmap_pars_fragment:Xb,clearcoat_normal_fragment_begin:qb,clearcoat_normal_fragment_maps:$b,clearcoat_pars_fragment:Yb,iridescence_pars_fragment:jb,output_fragment:Zb,packing:Kb,premultiplied_alpha_fragment:Jb,project_vertex:Qb,dithering_fragment:eM,dithering_pars_fragment:tM,roughnessmap_fragment:nM,roughnessmap_pars_fragment:iM,shadowmap_pars_fragment:rM,shadowmap_pars_vertex:sM,shadowmap_vertex:oM,shadowmask_pars_fragment:aM,skinbase_vertex:lM,skinning_pars_vertex:uM,skinning_vertex:cM,skinnormal_vertex:fM,specularmap_fragment:hM,specularmap_pars_fragment:dM,tonemapping_fragment:pM,tonemapping_pars_fragment:mM,transmission_fragment:gM,transmission_pars_fragment:_M,uv_pars_fragment:xM,uv_pars_vertex:vM,uv_vertex:yM,uv2_pars_fragment:bM,uv2_pars_vertex:MM,uv2_vertex:SM,worldpos_vertex:wM,background_vert:TM,background_frag:EM,backgroundCube_vert:AM,backgroundCube_frag:CM,cube_vert:DM,cube_frag:PM,depth_vert:LM,depth_frag:FM,distanceRGBA_vert:RM,distanceRGBA_frag:BM,equirect_vert:IM,equirect_frag:UM,linedashed_vert:OM,linedashed_frag:NM,meshbasic_vert:kM,meshbasic_frag:zM,meshlambert_vert:WM,meshlambert_frag:VM,meshmatcap_vert:GM,meshmatcap_frag:HM,meshnormal_vert:XM,meshnormal_frag:qM,meshphong_vert:$M,meshphong_frag:YM,meshphysical_vert:jM,meshphysical_frag:ZM,meshtoon_vert:KM,meshtoon_frag:JM,points_vert:QM,points_frag:eS,shadow_vert:tS,shadow_frag:nS,sprite_vert:iS,sprite_frag:rS},ye={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Gn},uv2Transform:{value:new Gn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gn}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gn}}},Fi={basic:{uniforms:pn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:pn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new vt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:pn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:pn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:pn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new vt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:pn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:pn([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:pn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:pn([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:pn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:pn([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Gn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:pn([ye.common,ye.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:pn([ye.lights,ye.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Fi.physical={uniforms:pn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new _t(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const gl={r:0,b:0,g:0};function sS(r,e,t,n,i,s,o){const a=new vt(0);let l=s===!0?0:1,u,c,h=null,f=0,m=null;function g(p,x){let b=!1,_=x.isScene===!0?x.background:null;_&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_));const y=r.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(_=null),_===null?d(a,l):_&&_.isColor&&(d(_,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===_u)?(c===void 0&&(c=new Ar(new Fa(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:Co(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,(h!==_||f!==_.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Ar(new dh(2,2),new kr({name:"BackgroundMaterial",uniforms:Co(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:wo,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function d(p,x){p.getRGB(gl,yg(r)),n.buffers.color.setClear(gl.r,gl.g,gl.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(p,x=1){a.set(p),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(a,l)},render:g}}function oS(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function h(I,q,G,Y,B){let se=!1;if(o){const F=d(Y,G,q);u!==F&&(u=F,m(u.object)),se=x(I,Y,G,B),se&&b(I,Y,G,B)}else{const F=q.wireframe===!0;(u.geometry!==Y.id||u.program!==G.id||u.wireframe!==F)&&(u.geometry=Y.id,u.program=G.id,u.wireframe=F,se=!0)}B!==null&&t.update(B,34963),(se||c)&&(c=!1,v(I,q,G,Y),B!==null&&r.bindBuffer(34963,t.get(B).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function d(I,q,G){const Y=G.wireframe===!0;let B=a[I.id];B===void 0&&(B={},a[I.id]=B);let se=B[q.id];se===void 0&&(se={},B[q.id]=se);let F=se[Y];return F===void 0&&(F=p(f()),se[Y]=F),F}function p(I){const q=[],G=[],Y=[];for(let B=0;B<i;B++)q[B]=0,G[B]=0,Y[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:G,attributeDivisors:Y,object:I,attributes:{},index:null}}function x(I,q,G,Y){const B=u.attributes,se=q.attributes;let F=0;const X=G.getAttributes();for(const V in X)if(X[V].location>=0){const ue=B[V];let me=se[V];if(me===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(me=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(me=I.instanceColor)),ue===void 0||ue.attribute!==me||me&&ue.data!==me.data)return!0;F++}return u.attributesNum!==F||u.index!==Y}function b(I,q,G,Y){const B={},se=q.attributes;let F=0;const X=G.getAttributes();for(const V in X)if(X[V].location>=0){let ue=se[V];ue===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor));const me={};me.attribute=ue,ue&&ue.data&&(me.data=ue.data),B[V]=me,F++}u.attributes=B,u.attributesNum=F,u.index=Y}function _(){const I=u.newAttributes;for(let q=0,G=I.length;q<G;q++)I[q]=0}function y(I){M(I,0)}function M(I,q){const G=u.newAttributes,Y=u.enabledAttributes,B=u.attributeDivisors;G[I]=1,Y[I]===0&&(r.enableVertexAttribArray(I),Y[I]=1),B[I]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,q),B[I]=q)}function T(){const I=u.newAttributes,q=u.enabledAttributes;for(let G=0,Y=q.length;G<Y;G++)q[G]!==I[G]&&(r.disableVertexAttribArray(G),q[G]=0)}function E(I,q,G,Y,B,se){n.isWebGL2===!0&&(G===5124||G===5125)?r.vertexAttribIPointer(I,q,G,B,se):r.vertexAttribPointer(I,q,G,Y,B,se)}function v(I,q,G,Y){if(n.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const B=Y.attributes,se=G.getAttributes(),F=q.defaultAttributeValues;for(const X in se){const V=se[X];if(V.location>=0){let fe=B[X];if(fe===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor)),fe!==void 0){const ue=fe.normalized,me=fe.itemSize,H=t.get(fe);if(H===void 0)continue;const Le=H.buffer,ve=H.type,Fe=H.bytesPerElement;if(fe.isInterleavedBufferAttribute){const xe=fe.data,ke=xe.stride,D=fe.offset;if(xe.isInstancedInterleavedBuffer){for(let L=0;L<V.locationSize;L++)M(V.location+L,xe.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let L=0;L<V.locationSize;L++)y(V.location+L);r.bindBuffer(34962,Le);for(let L=0;L<V.locationSize;L++)E(V.location+L,me/V.locationSize,ve,ue,ke*Fe,(D+me/V.locationSize*L)*Fe)}else{if(fe.isInstancedBufferAttribute){for(let xe=0;xe<V.locationSize;xe++)M(V.location+xe,fe.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let xe=0;xe<V.locationSize;xe++)y(V.location+xe);r.bindBuffer(34962,Le);for(let xe=0;xe<V.locationSize;xe++)E(V.location+xe,me/V.locationSize,ve,ue,me*Fe,me/V.locationSize*xe*Fe)}}else if(F!==void 0){const ue=F[X];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(V.location,ue);break;case 3:r.vertexAttrib3fv(V.location,ue);break;case 4:r.vertexAttrib4fv(V.location,ue);break;default:r.vertexAttrib1fv(V.location,ue)}}}}T()}function w(){Z();for(const I in a){const q=a[I];for(const G in q){const Y=q[G];for(const B in Y)g(Y[B].object),delete Y[B];delete q[G]}delete a[I]}}function P(I){if(a[I.id]===void 0)return;const q=a[I.id];for(const G in q){const Y=q[G];for(const B in Y)g(Y[B].object),delete Y[B];delete q[G]}delete a[I.id]}function O(I){for(const q in a){const G=a[q];if(G[I.id]===void 0)continue;const Y=G[I.id];for(const B in Y)g(Y[B].object),delete Y[B];delete G[I.id]}}function Z(){z(),c=!0,u!==l&&(u=l,m(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:z,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:y,disableUnusedAttributes:T}}function aS(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,c){r.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,c,h),t.update(c,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function lS(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),d=r.getParameter(34921),p=r.getParameter(36347),x=r.getParameter(36348),b=r.getParameter(36349),_=f>0,y=o||e.has("OES_texture_float"),M=_&&y,T=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:T}}function uS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Qr,a=new Gn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,t=c(h,m,0),n=h.length,g},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,x=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?c(null):u();else{const b=s?0:n,_=b*4;let y=x.clippingState||null;l.value=y,y=c(g,f,_,m);for(let M=0;M!==_;++M)y[M]=t[M];x.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const x=m+d*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<x)&&(p=new Float32Array(x));for(let _=0,y=m;_!==d;++_,y+=4)o.copy(h[_]).applyMatrix4(b,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function cS(r){let e=new WeakMap;function t(o,a){return a===gf?o.mapping=To:a===_f&&(o.mapping=Eo),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===gf||a===_f)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Sy(l.height/2);return u.fromEquirectangularTexture(r,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class fS extends bg{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const to=4,gp=[.125,.215,.35,.446,.526,.582],ss=20,Tc=new fS,_p=new vt;let Ec=null;const es=(1+Math.sqrt(5))/2,$s=1/es,xp=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,es,$s),new J(0,es,-$s),new J($s,0,es),new J(-$s,0,es),new J(es,$s,0),new J(-es,$s,0)];class vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ec=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec),e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===To||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:wa,format:bi,encoding:Cs,depthBuffer:!1},i=yp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hS(s)),this._blurMaterial=dS(s,e,t)}return i}_compileMaterial(e){const t=new Ar(this._lodPlanes[0],e);this._renderer.compile(t,Tc)}_sceneToCubeUV(e,t,n,i){const a=new ni(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(_p),c.toneMapping=er,c.autoClear=!1;const m=new _g({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1}),g=new Ar(new Fa,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(_p),d=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(a.up.set(0,l[x],0),a.lookAt(u[x],0,0)):b===1?(a.up.set(0,0,l[x]),a.lookAt(0,u[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,u[x]));const _=this._cubeSize;_l(i,b*_,x>2?_:0,_,_),c.setRenderTarget(i),d&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===To||e.mapping===Eo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ar(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_l(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Tc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=xp[(i-1)%xp.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Ar(this._lodPlanes[i],u),f=u.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ss-1),d=s/g,p=isFinite(s)?1+Math.floor(c*d):ss;p>ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ss}`);const x=[];let b=0;for(let E=0;E<ss;++E){const v=E/d,w=Math.exp(-v*v/2);x.push(w),E===0?b+=w:E<p&&(b+=2*w)}for(let E=0;E<x.length;E++)x[E]=x[E]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=x,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const y=this._sizeLods[i],M=3*y*(i>_-to?i-_+to:0),T=4*(this._cubeSize-y);_l(t,M,T,3*y,2*y),l.setRenderTarget(t),l.render(h,Tc)}}function hS(r){const e=[],t=[],n=[];let i=r;const s=r-to+1+gp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-to?l=gp[o-r+to-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,g=6,d=3,p=2,x=1,b=new Float32Array(d*g*m),_=new Float32Array(p*g*m),y=new Float32Array(x*g*m);for(let T=0;T<m;T++){const E=T%3*2/3-1,v=T>2?0:-1,w=[E,v,0,E+2/3,v,0,E+2/3,v+1,0,E,v,0,E+2/3,v+1,0,E,v+1,0];b.set(w,d*g*T),_.set(f,p*g*T);const P=[T,T,T,T,T,T];y.set(P,x*g*T)}const M=new lr;M.setAttribute("position",new ci(b,d)),M.setAttribute("uv",new ci(_,p)),M.setAttribute("faceIndex",new ci(y,x)),e.push(M),i>to&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yp(r,e,t){const n=new Ds(r,e,t);return n.texture.mapping=_u,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _l(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function dS(r,e,t){const n=new Float32Array(ss),i=new J(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ph(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function bp(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Mp(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function ph(){return`

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
	`}function pS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===gf||l===_f,c=l===To||l===Eo;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new vp(r)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&i(h)){t===null&&(t=new vp(r));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gS(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,x=d.length;p<x;p++)e.update(d[p],34962)}}function u(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const b=m.array;d=m.version;for(let _=0,y=b.length;_<y;_+=3){const M=b[_+0],T=b[_+1],E=b[_+2];f.push(M,T,T,E,E,M)}}else{const b=g.array;d=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){const M=_+0,T=_+1,E=_+2;f.push(M,T,T,E,E,M)}}const p=new(cg(f)?vg:xg)(f,1);p.version=d;const x=s.get(h);x&&e.remove(x),s.set(h,p)}function c(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function _S(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,m){r.drawElements(s,m,a,f*l),t.update(m,s,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=r,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,a,f*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h}function xS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vS(r,e){return r[0]-e[0]}function yS(r,e){return Math.abs(e[1])-Math.abs(r[1])}function bS(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new en,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h,f){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0;let x=s.get(c);if(x===void 0||x.count!==p){let G=function(){I.dispose(),s.delete(c),c.removeEventListener("dispose",G)};var g=G;x!==void 0&&x.texture.dispose();const y=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let P=0;y===!0&&(P=1),M===!0&&(P=2),T===!0&&(P=3);let O=c.attributes.position.count*P,Z=1;O>e.maxTextureSize&&(Z=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const z=new Float32Array(O*Z*4*p),I=new pg(z,O,Z,p);I.type=cs,I.needsUpdate=!0;const q=P*4;for(let Y=0;Y<p;Y++){const B=E[Y],se=v[Y],F=w[Y],X=O*Z*4*Y;for(let V=0;V<B.count;V++){const fe=V*q;y===!0&&(o.fromBufferAttribute(B,V),z[X+fe+0]=o.x,z[X+fe+1]=o.y,z[X+fe+2]=o.z,z[X+fe+3]=0),M===!0&&(o.fromBufferAttribute(se,V),z[X+fe+4]=o.x,z[X+fe+5]=o.y,z[X+fe+6]=o.z,z[X+fe+7]=0),T===!0&&(o.fromBufferAttribute(F,V),z[X+fe+8]=o.x,z[X+fe+9]=o.y,z[X+fe+10]=o.z,z[X+fe+11]=F.itemSize===4?o.w:1)}}x={count:p,texture:I,size:new _t(O,Z)},s.set(c,x),c.addEventListener("dispose",G)}let b=0;for(let y=0;y<m.length;y++)b+=m[y];const _=c.morphTargetsRelative?1:1-b;f.getUniforms().setValue(r,"morphTargetBaseInfluence",_),f.getUniforms().setValue(r,"morphTargetInfluences",m),f.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const d=m===void 0?0:m.length;let p=n[c.id];if(p===void 0||p.length!==d){p=[];for(let M=0;M<d;M++)p[M]=[M,0];n[c.id]=p}for(let M=0;M<d;M++){const T=p[M];T[0]=M,T[1]=m[M]}p.sort(yS);for(let M=0;M<8;M++)M<d&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(vS);const x=c.morphAttributes.position,b=c.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const T=a[M],E=T[0],v=T[1];E!==Number.MAX_SAFE_INTEGER&&v?(x&&c.getAttribute("morphTarget"+M)!==x[E]&&c.setAttribute("morphTarget"+M,x[E]),b&&c.getAttribute("morphNormal"+M)!==b[E]&&c.setAttribute("morphNormal"+M,b[E]),i[M]=v,_+=v):(x&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),b&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),i[M]=0)}const y=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(r,"morphTargetBaseInfluence",y),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function MS(r,e,t,n){let i=new WeakMap;function s(l){const u=n.render.frame,c=l.geometry,h=e.get(l,c);return i.get(h)!==u&&(e.update(h),i.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Tg=new Xn,Eg=new pg,Ag=new ay,Cg=new Mg,Sp=[],wp=[],Tp=new Float32Array(16),Ep=new Float32Array(9),Ap=new Float32Array(4);function Ro(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Sp[i];if(s===void 0&&(s=new Float32Array(i),Sp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Wt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Vt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function yu(r,e){let t=wp[e];t===void 0&&(t=new Int32Array(e),wp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function SS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function wS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2fv(this.addr,e),Vt(t,e)}}function TS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;r.uniform3fv(this.addr,e),Vt(t,e)}}function ES(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4fv(this.addr,e),Vt(t,e)}}function AS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Wt(t,n))return;Ap.set(n),r.uniformMatrix2fv(this.addr,!1,Ap),Vt(t,n)}}function CS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Wt(t,n))return;Ep.set(n),r.uniformMatrix3fv(this.addr,!1,Ep),Vt(t,n)}}function DS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Wt(t,n))return;Tp.set(n),r.uniformMatrix4fv(this.addr,!1,Tp),Vt(t,n)}}function PS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function LS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2iv(this.addr,e),Vt(t,e)}}function FS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;r.uniform3iv(this.addr,e),Vt(t,e)}}function RS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4iv(this.addr,e),Vt(t,e)}}function BS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function IS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;r.uniform2uiv(this.addr,e),Vt(t,e)}}function US(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;r.uniform3uiv(this.addr,e),Vt(t,e)}}function OS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;r.uniform4uiv(this.addr,e),Vt(t,e)}}function NS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Tg,i)}function kS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ag,i)}function zS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cg,i)}function WS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Eg,i)}function VS(r){switch(r){case 5126:return SS;case 35664:return wS;case 35665:return TS;case 35666:return ES;case 35674:return AS;case 35675:return CS;case 35676:return DS;case 5124:case 35670:return PS;case 35667:case 35671:return LS;case 35668:case 35672:return FS;case 35669:case 35673:return RS;case 5125:return BS;case 36294:return IS;case 36295:return US;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return NS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return zS;case 36289:case 36303:case 36311:case 36292:return WS}}function GS(r,e){r.uniform1fv(this.addr,e)}function HS(r,e){const t=Ro(e,this.size,2);r.uniform2fv(this.addr,t)}function XS(r,e){const t=Ro(e,this.size,3);r.uniform3fv(this.addr,t)}function qS(r,e){const t=Ro(e,this.size,4);r.uniform4fv(this.addr,t)}function $S(r,e){const t=Ro(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function YS(r,e){const t=Ro(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function jS(r,e){const t=Ro(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ZS(r,e){r.uniform1iv(this.addr,e)}function KS(r,e){r.uniform2iv(this.addr,e)}function JS(r,e){r.uniform3iv(this.addr,e)}function QS(r,e){r.uniform4iv(this.addr,e)}function ew(r,e){r.uniform1uiv(this.addr,e)}function tw(r,e){r.uniform2uiv(this.addr,e)}function nw(r,e){r.uniform3uiv(this.addr,e)}function iw(r,e){r.uniform4uiv(this.addr,e)}function rw(r,e,t){const n=this.cache,i=e.length,s=yu(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Tg,s[o])}function sw(r,e,t){const n=this.cache,i=e.length,s=yu(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ag,s[o])}function ow(r,e,t){const n=this.cache,i=e.length,s=yu(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Cg,s[o])}function aw(r,e,t){const n=this.cache,i=e.length,s=yu(t,i);Wt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Eg,s[o])}function lw(r){switch(r){case 5126:return GS;case 35664:return HS;case 35665:return XS;case 35666:return qS;case 35674:return $S;case 35675:return YS;case 35676:return jS;case 5124:case 35670:return ZS;case 35667:case 35671:return KS;case 35668:case 35672:return JS;case 35669:case 35673:return QS;case 5125:return ew;case 36294:return tw;case 36295:return nw;case 36296:return iw;case 35678:case 36198:case 36298:case 36306:case 35682:return rw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return aw}}class uw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=VS(t.type)}}class cw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=lw(t.type)}}class fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ac=/(\w+)(\])?(\[|\.)?/g;function Cp(r,e){r.seq.push(e),r.map[e.id]=e}function hw(r,e,t){const n=r.name,i=n.length;for(Ac.lastIndex=0;;){const s=Ac.exec(n),o=Ac.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){Cp(t,u===void 0?new uw(a,r,e):new cw(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new fw(a),Cp(t,h)),t=h}}}class Il{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);hw(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Dp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let dw=0;function pw(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function mw(r){switch(r){case Cs:return["Linear","( value )"];case St:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Pp(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+pw(r.getShaderSource(e),o)}else return i}function gw(r,e){const t=mw(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _w(r,e){let t;switch(e){case R1:t="Linear";break;case B1:t="Reinhard";break;case I1:t="OptimizedCineon";break;case U1:t="ACESFilmic";break;case O1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xw(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(jo).join(`
`)}function vw(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yw(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function jo(r){return r!==""}function Lp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mf(r){return r.replace(bw,Mw)}function Mw(r,e){const t=et[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Mf(t)}const Sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rp(r){return r.replace(Sw,ww)}function ww(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bp(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===rg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===f1?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Yo&&(e="SHADOWMAP_TYPE_VSM"),e}function Ew(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case To:case Eo:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Aw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Eo:e="ENVMAP_MODE_REFRACTION";break}return e}function Cw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ag:e="ENVMAP_BLENDING_MULTIPLY";break;case L1:e="ENVMAP_BLENDING_MIX";break;case F1:e="ENVMAP_BLENDING_ADD";break}return e}function Dw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pw(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Tw(t),u=Ew(t),c=Aw(t),h=Cw(t),f=Dw(t),m=t.isWebGL2?"":xw(t),g=vw(s),d=i.createProgram();let p,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(jo).join(`
`),p.length>0&&(p+=`
`),x=[m,g].filter(jo).join(`
`),x.length>0&&(x+=`
`)):(p=[Bp(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),x=[m,Bp(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?et.tonemapping_pars_fragment:"",t.toneMapping!==er?_w("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.encodings_pars_fragment,gw("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),o=Mf(o),o=Lp(o,t),o=Fp(o,t),a=Mf(a),a=Lp(a,t),a=Fp(a,t),o=Rp(o),a=Rp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",t.glslVersion===ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=b+p+o,y=b+x+a,M=Dp(i,35633,_),T=Dp(i,35632,y);if(i.attachShader(d,M),i.attachShader(d,T),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),P=i.getShaderInfoLog(M).trim(),O=i.getShaderInfoLog(T).trim();let Z=!0,z=!0;if(i.getProgramParameter(d,35714)===!1){Z=!1;const I=Pp(i,M,"vertex"),q=Pp(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+I+`
`+q)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(P===""||O==="")&&(z=!1);z&&(this.diagnostics={runnable:Z,programLog:w,vertexShader:{log:P,prefix:p},fragmentShader:{log:O,prefix:x}})}i.deleteShader(M),i.deleteShader(T);let E;this.getUniforms=function(){return E===void 0&&(E=new Il(i,d)),E};let v;return this.getAttributes=function(){return v===void 0&&(v=yw(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=dw++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=T,this}let Lw=0;class Fw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rw(e),t.set(e,n)),n}}class Rw{constructor(e){this.id=Lw++,this.code=e,this.usedTimes=0}}function Bw(r,e,t,n,i,s,o){const a=new gg,l=new Fw,u=[],c=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,w,P,O,Z){const z=O.fog,I=Z.geometry,q=v.isMeshStandardMaterial?O.environment:null,G=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),Y=!!G&&G.mapping===_u?G.image.height:null,B=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const se=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,F=se!==void 0?se.length:0;let X=0;I.morphAttributes.position!==void 0&&(X=1),I.morphAttributes.normal!==void 0&&(X=2),I.morphAttributes.color!==void 0&&(X=3);let V,fe,ue,me;if(B){const ke=Fi[B];V=ke.vertexShader,fe=ke.fragmentShader}else V=v.vertexShader,fe=v.fragmentShader,l.update(v),ue=l.getVertexShaderID(v),me=l.getFragmentShaderID(v);const H=r.getRenderTarget(),Le=v.alphaTest>0,ve=v.clearcoat>0,Fe=v.iridescence>0;return{isWebGL2:c,shaderID:B,shaderName:v.type,vertexShader:V,fragmentShader:fe,defines:v.defines,customVertexShaderID:ue,customFragmentShaderID:me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:f,outputEncoding:H===null?r.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Cs,map:!!v.map,matcap:!!v.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:Y,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===iy,tangentSpaceNormalMap:v.normalMapType===ny,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===St,clearcoat:ve,clearcoatMap:ve&&!!v.clearcoatMap,clearcoatRoughnessMap:ve&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!v.clearcoatNormalMap,iridescence:Fe,iridescenceMap:Fe&&!!v.iridescenceMap,iridescenceThicknessMap:Fe&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===fo,alphaMap:!!v.alphaMap,alphaTest:Le,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!I.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!z,useFog:v.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:X,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:er,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Er,flipSided:v.side===ui,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)w.push(P),w.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(x(w,v),b(w,v),w.push(r.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),v.push(a.mask)}function _(v){const w=g[v.type];let P;if(w){const O=Fi[w];P=vy.clone(O.uniforms)}else P=v.uniforms;return P}function y(v,w){let P;for(let O=0,Z=u.length;O<Z;O++){const z=u[O];if(z.cacheKey===w){P=z,++P.usedTimes;break}}return P===void 0&&(P=new Pw(r,w,v,s),u.push(P)),P}function M(v){if(--v.usedTimes===0){const w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),v.destroy()}}function T(v){l.remove(v)}function E(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:E}}function Iw(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Uw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ip(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Up(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,g,d,p){let x=r[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},r[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=m,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=d,x.group=p),e++,x}function a(h,f,m,g,d,p){const x=o(h,f,m,g,d,p);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function l(h,f,m,g,d,p){const x=o(h,f,m,g,d,p);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function u(h,f){t.length>1&&t.sort(h||Uw),n.length>1&&n.sort(f||Ip),i.length>1&&i.sort(f||Ip)}function c(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:c,sort:u}}function Ow(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Up,r.set(n,[o])):i>=s.length?(o=new Up,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Nw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new vt};break;case"SpotLight":t={position:new J,direction:new J,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=t,t}}}function kw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let zw=0;function Ww(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Vw(r,e){const t=new Nw,n=kw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new J);const s=new J,o=new $t,a=new $t;function l(c,h){let f=0,m=0,g=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,p=0,x=0,b=0,_=0,y=0,M=0,T=0,E=0,v=0;c.sort(Ww);const w=h!==!0?Math.PI:1;for(let O=0,Z=c.length;O<Z;O++){const z=c[O],I=z.color,q=z.intensity,G=z.distance,Y=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=I.r*q*w,m+=I.g*q*w,g+=I.b*q*w;else if(z.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(z.sh.coefficients[B],q);else if(z.isDirectionalLight){const B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*w),z.castShadow){const se=z.shadow,F=n.get(z);F.shadowBias=se.bias,F.shadowNormalBias=se.normalBias,F.shadowRadius=se.radius,F.shadowMapSize=se.mapSize,i.directionalShadow[d]=F,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=z.shadow.matrix,y++}i.directional[d]=B,d++}else if(z.isSpotLight){const B=t.get(z);B.position.setFromMatrixPosition(z.matrixWorld),B.color.copy(I).multiplyScalar(q*w),B.distance=G,B.coneCos=Math.cos(z.angle),B.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),B.decay=z.decay,i.spot[x]=B;const se=z.shadow;if(z.map&&(i.spotLightMap[E]=z.map,E++,se.updateMatrices(z),z.castShadow&&v++),i.spotLightMatrix[x]=se.matrix,z.castShadow){const F=n.get(z);F.shadowBias=se.bias,F.shadowNormalBias=se.normalBias,F.shadowRadius=se.radius,F.shadowMapSize=se.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=Y,T++}x++}else if(z.isRectAreaLight){const B=t.get(z);B.color.copy(I).multiplyScalar(q),B.halfWidth.set(z.width*.5,0,0),B.halfHeight.set(0,z.height*.5,0),i.rectArea[b]=B,b++}else if(z.isPointLight){const B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*w),B.distance=z.distance,B.decay=z.decay,z.castShadow){const se=z.shadow,F=n.get(z);F.shadowBias=se.bias,F.shadowNormalBias=se.normalBias,F.shadowRadius=se.radius,F.shadowMapSize=se.mapSize,F.shadowCameraNear=se.camera.near,F.shadowCameraFar=se.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=z.shadow.matrix,M++}i.point[p]=B,p++}else if(z.isHemisphereLight){const B=t.get(z);B.skyColor.copy(z.color).multiplyScalar(q*w),B.groundColor.copy(z.groundColor).multiplyScalar(q*w),i.hemi[_]=B,_++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==d||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==b||P.hemiLength!==_||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==T||P.numSpotMaps!==E)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=b,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=T+E-v,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=v,P.directionalLength=d,P.pointLength=p,P.spotLength=x,P.rectAreaLength=b,P.hemiLength=_,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=T,P.numSpotMaps=E,i.version=zw++)}function u(c,h){let f=0,m=0,g=0,d=0,p=0;const x=h.matrixWorldInverse;for(let b=0,_=c.length;b<_;b++){const y=c[b];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),f++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),g++}else if(y.isRectAreaLight){const M=i.rectArea[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),a.identity(),o.copy(y.matrixWorld),o.premultiply(x),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),m++}else if(y.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(x),p++}}}return{setup:l,setupView:u,state:i}}function Op(r,e){const t=new Vw(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function u(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Gw(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Op(r,e),t.set(s,[l])):o>=a.length?(l=new Op(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Hw extends La{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xw extends La{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new J,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
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
}`;function Yw(r,e,t){let n=new Sg;const i=new _t,s=new _t,o=new en,a=new Hw({depthPacking:ty}),l=new Xw,u={},c=t.maxTextureSize,h={0:ui,1:wo,2:Er},f=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:qw,fragmentShader:$w}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new lr;g.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Ar(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rg,this.render=function(y,M,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const E=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Rr),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let O=0,Z=y.length;O<Z;O++){const z=y[O],I=z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const q=I.getFrameExtents();if(i.multiply(q),s.copy(I.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/q.x),i.x=s.x*q.x,I.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/q.y),i.y=s.y*q.y,I.mapSize.y=s.y)),I.map===null){const Y=this.type!==Yo?{minFilter:Sn,magFilter:Sn}:{};I.map=new Ds(i.x,i.y,Y),I.map.texture.name=z.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const G=I.getViewportCount();for(let Y=0;Y<G;Y++){const B=I.getViewport(Y);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),P.viewport(o),I.updateMatrices(z,Y),n=I.getFrustum(),_(M,T,I.camera,z,this.type)}I.isPointLightShadow!==!0&&this.type===Yo&&x(I,T),I.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(E,v,w)};function x(y,M){const T=e.update(d);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ds(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(M,null,T,f,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(M,null,T,m,d,null)}function b(y,M,T,E,v,w){let P=null;const O=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(O!==void 0?P=O:P=T.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const Z=P.uuid,z=M.uuid;let I=u[Z];I===void 0&&(I={},u[Z]=I);let q=I[z];q===void 0&&(q=P.clone(),I[z]=q),P=q}return P.visible=M.visible,P.wireframe=M.wireframe,w===Yo?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:h[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(T.matrixWorld),P.nearDistance=E,P.farDistance=v),P}function _(y,M,T,E,v){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Yo)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const O=e.update(y),Z=y.material;if(Array.isArray(Z)){const z=O.groups;for(let I=0,q=z.length;I<q;I++){const G=z[I],Y=Z[G.materialIndex];if(Y&&Y.visible){const B=b(y,Y,E,T.near,T.far,v);r.renderBufferDirect(T,null,O,B,y,G)}}}else if(Z.visible){const z=b(y,Z,E,T.near,T.far,v);r.renderBufferDirect(T,null,O,z,y,null)}}const P=y.children;for(let O=0,Z=P.length;O<Z;O++)_(P[O],M,T,E,v)}}function jw(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const re=new en;let he=null;const be=new en(0,0,0,0);return{setMask:function(Pe){he!==Pe&&!U&&(r.colorMask(Pe,Pe,Pe,Pe),he=Pe)},setLocked:function(Pe){U=Pe},setClear:function(Pe,Ke,yt,At,je){je===!0&&(Pe*=At,Ke*=At,yt*=At),re.set(Pe,Ke,yt,At),be.equals(re)===!1&&(r.clearColor(Pe,Ke,yt,At),be.copy(re))},reset:function(){U=!1,he=null,be.set(-1,0,0,0)}}}function s(){let U=!1,re=null,he=null,be=null;return{setTest:function(Pe){Pe?Le(2929):ve(2929)},setMask:function(Pe){re!==Pe&&!U&&(r.depthMask(Pe),re=Pe)},setFunc:function(Pe){if(he!==Pe){switch(Pe){case w1:r.depthFunc(512);break;case T1:r.depthFunc(519);break;case E1:r.depthFunc(513);break;case mf:r.depthFunc(515);break;case A1:r.depthFunc(514);break;case C1:r.depthFunc(518);break;case D1:r.depthFunc(516);break;case P1:r.depthFunc(517);break;default:r.depthFunc(515)}he=Pe}},setLocked:function(Pe){U=Pe},setClear:function(Pe){be!==Pe&&(r.clearDepth(Pe),be=Pe)},reset:function(){U=!1,re=null,he=null,be=null}}}function o(){let U=!1,re=null,he=null,be=null,Pe=null,Ke=null,yt=null,At=null,je=null;return{setTest:function(ie){U||(ie?Le(2960):ve(2960))},setMask:function(ie){re!==ie&&!U&&(r.stencilMask(ie),re=ie)},setFunc:function(ie,Ae,Ee){(he!==ie||be!==Ae||Pe!==Ee)&&(r.stencilFunc(ie,Ae,Ee),he=ie,be=Ae,Pe=Ee)},setOp:function(ie,Ae,Ee){(Ke!==ie||yt!==Ae||At!==Ee)&&(r.stencilOp(ie,Ae,Ee),Ke=ie,yt=Ae,At=Ee)},setLocked:function(ie){U=ie},setClear:function(ie){je!==ie&&(r.clearStencil(ie),je=ie)},reset:function(){U=!1,re=null,he=null,be=null,Pe=null,Ke=null,yt=null,At=null,je=null}}}const a=new i,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,x=!1,b=null,_=null,y=null,M=null,T=null,E=null,v=null,w=!1,P=null,O=null,Z=null,z=null,I=null;const q=r.getParameter(35661);let G=!1,Y=0;const B=r.getParameter(7938);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=Y>=2);let se=null,F={};const X=r.getParameter(3088),V=r.getParameter(2978),fe=new en().fromArray(X),ue=new en().fromArray(V);function me(U,re,he){const be=new Uint8Array(4),Pe=r.createTexture();r.bindTexture(U,Pe),r.texParameteri(U,10241,9728),r.texParameteri(U,10240,9728);for(let Ke=0;Ke<he;Ke++)r.texImage2D(re+Ke,0,6408,1,1,0,6408,5121,be);return Pe}const H={};H[3553]=me(3553,3553,1),H[34067]=me(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Le(2929),l.setFunc(mf),ne(!1),R(Cd),Le(2884),$(Rr);function Le(U){f[U]!==!0&&(r.enable(U),f[U]=!0)}function ve(U){f[U]!==!1&&(r.disable(U),f[U]=!1)}function Fe(U,re){return m[U]!==re?(r.bindFramebuffer(U,re),m[U]=re,n&&(U===36009&&(m[36160]=re),U===36160&&(m[36009]=re)),!0):!1}function xe(U,re){let he=d,be=!1;if(U)if(he=g.get(re),he===void 0&&(he=[],g.set(re,he)),U.isWebGLMultipleRenderTargets){const Pe=U.texture;if(he.length!==Pe.length||he[0]!==36064){for(let Ke=0,yt=Pe.length;Ke<yt;Ke++)he[Ke]=36064+Ke;he.length=Pe.length,be=!0}}else he[0]!==36064&&(he[0]=36064,be=!0);else he[0]!==1029&&(he[0]=1029,be=!0);be&&(t.isWebGL2?r.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function ke(U){return p!==U?(r.useProgram(U),p=U,!0):!1}const D={[Zs]:32774,[d1]:32778,[p1]:32779};if(n)D[Ld]=32775,D[Fd]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(D[Ld]=U.MIN_EXT,D[Fd]=U.MAX_EXT)}const L={[m1]:0,[g1]:1,[_1]:768,[sg]:770,[S1]:776,[b1]:774,[v1]:772,[x1]:769,[og]:771,[M1]:775,[y1]:773};function $(U,re,he,be,Pe,Ke,yt,At){if(U===Rr){x===!0&&(ve(3042),x=!1);return}if(x===!1&&(Le(3042),x=!0),U!==h1){if(U!==b||At!==w){if((_!==Zs||T!==Zs)&&(r.blendEquation(32774),_=Zs,T=Zs),At)switch(U){case fo:r.blendFuncSeparate(1,771,1,771);break;case pf:r.blendFunc(1,1);break;case Dd:r.blendFuncSeparate(0,769,0,1);break;case Pd:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case fo:r.blendFuncSeparate(770,771,1,771);break;case pf:r.blendFunc(770,1);break;case Dd:r.blendFuncSeparate(0,769,0,1);break;case Pd:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,M=null,E=null,v=null,b=U,w=At}return}Pe=Pe||re,Ke=Ke||he,yt=yt||be,(re!==_||Pe!==T)&&(r.blendEquationSeparate(D[re],D[Pe]),_=re,T=Pe),(he!==y||be!==M||Ke!==E||yt!==v)&&(r.blendFuncSeparate(L[he],L[be],L[Ke],L[yt]),y=he,M=be,E=Ke,v=yt),b=U,w=!1}function oe(U,re){U.side===Er?ve(2884):Le(2884);let he=U.side===ui;re&&(he=!he),ne(he),U.blending===fo&&U.transparent===!1?$(Rr):$(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const be=U.stencilWrite;u.setTest(be),be&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),te(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Le(32926):ve(32926)}function ne(U){P!==U&&(U?r.frontFace(2304):r.frontFace(2305),P=U)}function R(U){U!==u1?(Le(2884),U!==O&&(U===Cd?r.cullFace(1029):U===c1?r.cullFace(1028):r.cullFace(1032))):ve(2884),O=U}function de(U){U!==Z&&(G&&r.lineWidth(U),Z=U)}function te(U,re,he){U?(Le(32823),(z!==re||I!==he)&&(r.polygonOffset(re,he),z=re,I=he)):ve(32823)}function pe(U){U?Le(3089):ve(3089)}function le(U){U===void 0&&(U=33984+q-1),se!==U&&(r.activeTexture(U),se=U)}function A(U,re,he){he===void 0&&(se===null?he=33984+q-1:he=se);let be=F[he];be===void 0&&(be={type:void 0,texture:void 0},F[he]=be),(be.type!==U||be.texture!==re)&&(se!==he&&(r.activeTexture(he),se=he),r.bindTexture(U,re||H[U]),be.type=U,be.texture=re)}function S(){const U=F[se];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function N(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(U){fe.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),fe.copy(U))}function Se(U){ue.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ue.copy(U))}function we(U,re){let he=h.get(re);he===void 0&&(he=new WeakMap,h.set(re,he));let be=he.get(U);be===void 0&&(be=r.getUniformBlockIndex(re,U.name),he.set(U,be))}function nt(U,re){const be=h.get(re).get(U);c.get(U)!==be&&(r.uniformBlockBinding(re,be,U.__bindingPointIndex),c.set(U,be))}function ut(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},se=null,F={},m={},g=new WeakMap,d=[],p=null,x=!1,b=null,_=null,y=null,M=null,T=null,E=null,v=null,w=!1,P=null,O=null,Z=null,z=null,I=null,fe.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Le,disable:ve,bindFramebuffer:Fe,drawBuffers:xe,useProgram:ke,setBlending:$,setMaterial:oe,setFlipSided:ne,setCullFace:R,setLineWidth:de,setPolygonOffset:te,setScissorTest:pe,activeTexture:le,bindTexture:A,unbindTexture:S,compressedTexImage2D:N,compressedTexImage3D:K,texImage2D:Ue,texImage3D:Te,updateUBOMapping:we,uniformBlockBinding:nt,texStorage2D:ee,texStorage3D:Ce,texSubImage2D:Q,texSubImage3D:ce,compressedTexSubImage2D:_e,compressedTexSubImage3D:ge,scissor:Re,viewport:Se,reset:ut}}function Zw(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,c=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,S){return x?new OffscreenCanvas(A,S):Jl("canvas")}function _(A,S,N,K){let Q=1;if((A.width>K||A.height>K)&&(Q=K/Math.max(A.width,A.height)),Q<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ce=S?bf:Math.floor,_e=ce(Q*A.width),ge=ce(Q*A.height);d===void 0&&(d=b(_e,ge));const ee=N?b(_e,ge):d;return ee.width=_e,ee.height=ge,ee.getContext("2d").drawImage(A,0,0,_e,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_e+"x"+ge+")."),ee}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return sp(A.width)&&sp(A.height)}function M(A){return a?!1:A.wrapS!==yi||A.wrapT!==yi||A.minFilter!==Sn&&A.minFilter!==ti}function T(A,S){return A.generateMipmaps&&S&&A.minFilter!==Sn&&A.minFilter!==ti}function E(A){r.generateMipmap(A)}function v(A,S,N,K,Q=!1){if(a===!1)return S;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce=S;return S===6403&&(N===5126&&(ce=33326),N===5131&&(ce=33325),N===5121&&(ce=33321)),S===33319&&(N===5126&&(ce=33328),N===5131&&(ce=33327),N===5121&&(ce=33323)),S===6408&&(N===5126&&(ce=34836),N===5131&&(ce=34842),N===5121&&(ce=K===St&&Q===!1?35907:32856),N===32819&&(ce=32854),N===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function w(A,S,N){return T(A,N)===!0||A.isFramebufferTexture&&A.minFilter!==Sn&&A.minFilter!==ti?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){return A===Sn||A===Rd||A===Bd?9728:9729}function O(A){const S=A.target;S.removeEventListener("dispose",O),z(S),S.isVideoTexture&&g.delete(S)}function Z(A){const S=A.target;S.removeEventListener("dispose",Z),q(S)}function z(A){const S=n.get(A);if(S.__webglInit===void 0)return;const N=A.source,K=p.get(N);if(K){const Q=K[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(A),Object.keys(K).length===0&&p.delete(N)}n.remove(A)}function I(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const N=A.source,K=p.get(N);delete K[S.__cacheKey],o.memory.textures--}function q(A){const S=A.texture,N=n.get(A),K=n.get(S);if(K.__webglTexture!==void 0&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)r.deleteFramebuffer(N.__webglFramebuffer[Q]),N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer[Q]);else{if(r.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&r.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Q=0;Q<N.__webglColorRenderbuffer.length;Q++)N.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(N.__webglColorRenderbuffer[Q]);N.__webglDepthRenderbuffer&&r.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,ce=S.length;Q<ce;Q++){const _e=n.get(S[Q]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(S[Q])}n.remove(S),n.remove(A)}let G=0;function Y(){G=0}function B(){const A=G;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),G+=1,A}function se(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function F(A,S){const N=n.get(A);if(A.isVideoTexture&&pe(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(N,A,S);return}}t.bindTexture(3553,N.__webglTexture,33984+S)}function X(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){ve(N,A,S);return}t.bindTexture(35866,N.__webglTexture,33984+S)}function V(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){ve(N,A,S);return}t.bindTexture(32879,N.__webglTexture,33984+S)}function fe(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){Fe(N,A,S);return}t.bindTexture(34067,N.__webglTexture,33984+S)}const ue={[xf]:10497,[yi]:33071,[vf]:33648},me={[Sn]:9728,[Rd]:9984,[Bd]:9986,[ti]:9729,[N1]:9985,[xu]:9987};function H(A,S,N){if(N?(r.texParameteri(A,10242,ue[S.wrapS]),r.texParameteri(A,10243,ue[S.wrapT]),(A===32879||A===35866)&&r.texParameteri(A,32882,ue[S.wrapR]),r.texParameteri(A,10240,me[S.magFilter]),r.texParameteri(A,10241,me[S.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),(A===32879||A===35866)&&r.texParameteri(A,32882,33071),(S.wrapS!==yi||S.wrapT!==yi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,P(S.magFilter)),r.texParameteri(A,10241,P(S.minFilter)),S.minFilter!==Sn&&S.minFilter!==ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(S.type===cs&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===wa&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(A,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Le(A,S){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",O));const K=S.source;let Q=p.get(K);Q===void 0&&(Q={},p.set(K,Q));const ce=se(S);if(ce!==A.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Q[ce].usedTimes++;const _e=Q[A.__cacheKey];_e!==void 0&&(Q[A.__cacheKey].usedTimes--,_e.usedTimes===0&&I(S)),A.__cacheKey=ce,A.__webglTexture=Q[ce].texture}return N}function ve(A,S,N){let K=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=35866),S.isData3DTexture&&(K=32879);const Q=Le(A,S),ce=S.source;t.bindTexture(K,A.__webglTexture,33984+N);const _e=n.get(ce);if(ce.version!==_e.__version||Q===!0){t.activeTexture(33984+N),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const ge=M(S)&&y(S.image)===!1;let ee=_(S.image,ge,!1,c);ee=le(S,ee);const Ce=y(ee)||a,Ue=s.convert(S.format,S.encoding);let Te=s.convert(S.type),Re=v(S.internalFormat,Ue,Te,S.encoding,S.isVideoTexture);H(K,S,Ce);let Se;const we=S.mipmaps,nt=a&&S.isVideoTexture!==!0,ut=_e.__version===void 0||Q===!0,U=w(S,ee,Ce);if(S.isDepthTexture)Re=6402,a?S.type===cs?Re=36012:S.type===us?Re=33190:S.type===ho?Re=35056:Re=33189:S.type===cs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===vs&&Re===6402&&S.type!==ug&&S.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=us,Te=s.convert(S.type)),S.format===Ao&&Re===6402&&(Re=34041,S.type!==ho&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ho,Te=s.convert(S.type))),ut&&(nt?t.texStorage2D(3553,1,Re,ee.width,ee.height):t.texImage2D(3553,0,Re,ee.width,ee.height,0,Ue,Te,null));else if(S.isDataTexture)if(we.length>0&&Ce){nt&&ut&&t.texStorage2D(3553,U,Re,we[0].width,we[0].height);for(let re=0,he=we.length;re<he;re++)Se=we[re],nt?t.texSubImage2D(3553,re,0,0,Se.width,Se.height,Ue,Te,Se.data):t.texImage2D(3553,re,Re,Se.width,Se.height,0,Ue,Te,Se.data);S.generateMipmaps=!1}else nt?(ut&&t.texStorage2D(3553,U,Re,ee.width,ee.height),t.texSubImage2D(3553,0,0,0,ee.width,ee.height,Ue,Te,ee.data)):t.texImage2D(3553,0,Re,ee.width,ee.height,0,Ue,Te,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){nt&&ut&&t.texStorage3D(35866,U,Re,we[0].width,we[0].height,ee.depth);for(let re=0,he=we.length;re<he;re++)Se=we[re],S.format!==bi?Ue!==null?nt?t.compressedTexSubImage3D(35866,re,0,0,0,Se.width,Se.height,ee.depth,Ue,Se.data,0,0):t.compressedTexImage3D(35866,re,Re,Se.width,Se.height,ee.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(35866,re,0,0,0,Se.width,Se.height,ee.depth,Ue,Te,Se.data):t.texImage3D(35866,re,Re,Se.width,Se.height,ee.depth,0,Ue,Te,Se.data)}else{nt&&ut&&t.texStorage2D(3553,U,Re,we[0].width,we[0].height);for(let re=0,he=we.length;re<he;re++)Se=we[re],S.format!==bi?Ue!==null?nt?t.compressedTexSubImage2D(3553,re,0,0,Se.width,Se.height,Ue,Se.data):t.compressedTexImage2D(3553,re,Re,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(3553,re,0,0,Se.width,Se.height,Ue,Te,Se.data):t.texImage2D(3553,re,Re,Se.width,Se.height,0,Ue,Te,Se.data)}else if(S.isDataArrayTexture)nt?(ut&&t.texStorage3D(35866,U,Re,ee.width,ee.height,ee.depth),t.texSubImage3D(35866,0,0,0,0,ee.width,ee.height,ee.depth,Ue,Te,ee.data)):t.texImage3D(35866,0,Re,ee.width,ee.height,ee.depth,0,Ue,Te,ee.data);else if(S.isData3DTexture)nt?(ut&&t.texStorage3D(32879,U,Re,ee.width,ee.height,ee.depth),t.texSubImage3D(32879,0,0,0,0,ee.width,ee.height,ee.depth,Ue,Te,ee.data)):t.texImage3D(32879,0,Re,ee.width,ee.height,ee.depth,0,Ue,Te,ee.data);else if(S.isFramebufferTexture){if(ut)if(nt)t.texStorage2D(3553,U,Re,ee.width,ee.height);else{let re=ee.width,he=ee.height;for(let be=0;be<U;be++)t.texImage2D(3553,be,Re,re,he,0,Ue,Te,null),re>>=1,he>>=1}}else if(we.length>0&&Ce){nt&&ut&&t.texStorage2D(3553,U,Re,we[0].width,we[0].height);for(let re=0,he=we.length;re<he;re++)Se=we[re],nt?t.texSubImage2D(3553,re,0,0,Ue,Te,Se):t.texImage2D(3553,re,Re,Ue,Te,Se);S.generateMipmaps=!1}else nt?(ut&&t.texStorage2D(3553,U,Re,ee.width,ee.height),t.texSubImage2D(3553,0,0,0,Ue,Te,ee)):t.texImage2D(3553,0,Re,Ue,Te,ee);T(S,Ce)&&E(K),_e.__version=ce.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Fe(A,S,N){if(S.image.length!==6)return;const K=Le(A,S),Q=S.source;t.bindTexture(34067,A.__webglTexture,33984+N);const ce=n.get(Q);if(Q.version!==ce.__version||K===!0){t.activeTexture(33984+N),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const _e=S.isCompressedTexture||S.image[0].isCompressedTexture,ge=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let re=0;re<6;re++)!_e&&!ge?ee[re]=_(S.image[re],!1,!0,u):ee[re]=ge?S.image[re].image:S.image[re],ee[re]=le(S,ee[re]);const Ce=ee[0],Ue=y(Ce)||a,Te=s.convert(S.format,S.encoding),Re=s.convert(S.type),Se=v(S.internalFormat,Te,Re,S.encoding),we=a&&S.isVideoTexture!==!0,nt=ce.__version===void 0||K===!0;let ut=w(S,Ce,Ue);H(34067,S,Ue);let U;if(_e){we&&nt&&t.texStorage2D(34067,ut,Se,Ce.width,Ce.height);for(let re=0;re<6;re++){U=ee[re].mipmaps;for(let he=0;he<U.length;he++){const be=U[he];S.format!==bi?Te!==null?we?t.compressedTexSubImage2D(34069+re,he,0,0,be.width,be.height,Te,be.data):t.compressedTexImage2D(34069+re,he,Se,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(34069+re,he,0,0,be.width,be.height,Te,Re,be.data):t.texImage2D(34069+re,he,Se,be.width,be.height,0,Te,Re,be.data)}}}else{U=S.mipmaps,we&&nt&&(U.length>0&&ut++,t.texStorage2D(34067,ut,Se,ee[0].width,ee[0].height));for(let re=0;re<6;re++)if(ge){we?t.texSubImage2D(34069+re,0,0,0,ee[re].width,ee[re].height,Te,Re,ee[re].data):t.texImage2D(34069+re,0,Se,ee[re].width,ee[re].height,0,Te,Re,ee[re].data);for(let he=0;he<U.length;he++){const Pe=U[he].image[re].image;we?t.texSubImage2D(34069+re,he+1,0,0,Pe.width,Pe.height,Te,Re,Pe.data):t.texImage2D(34069+re,he+1,Se,Pe.width,Pe.height,0,Te,Re,Pe.data)}}else{we?t.texSubImage2D(34069+re,0,0,0,Te,Re,ee[re]):t.texImage2D(34069+re,0,Se,Te,Re,ee[re]);for(let he=0;he<U.length;he++){const be=U[he];we?t.texSubImage2D(34069+re,he+1,0,0,Te,Re,be.image[re]):t.texImage2D(34069+re,he+1,Se,Te,Re,be.image[re])}}}T(S,Ue)&&E(34067),ce.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function xe(A,S,N,K,Q){const ce=s.convert(N.format,N.encoding),_e=s.convert(N.type),ge=v(N.internalFormat,ce,_e,N.encoding);n.get(S).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,ge,S.width,S.height,S.depth,0,ce,_e,null):t.texImage2D(Q,0,ge,S.width,S.height,0,ce,_e,null)),t.bindFramebuffer(36160,A),te(S)?f.framebufferTexture2DMultisampleEXT(36160,K,Q,n.get(N).__webglTexture,0,de(S)):(Q===3553||Q>=34069&&Q<=34074)&&r.framebufferTexture2D(36160,K,Q,n.get(N).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(A,S,N){if(r.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let K=33189;if(N||te(S)){const Q=S.depthTexture;Q&&Q.isDepthTexture&&(Q.type===cs?K=36012:Q.type===us&&(K=33190));const ce=de(S);te(S)?f.renderbufferStorageMultisampleEXT(36161,ce,K,S.width,S.height):r.renderbufferStorageMultisample(36161,ce,K,S.width,S.height)}else r.renderbufferStorage(36161,K,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const K=de(S);N&&te(S)===!1?r.renderbufferStorageMultisample(36161,K,35056,S.width,S.height):te(S)?f.renderbufferStorageMultisampleEXT(36161,K,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{const K=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0;Q<K.length;Q++){const ce=K[Q],_e=s.convert(ce.format,ce.encoding),ge=s.convert(ce.type),ee=v(ce.internalFormat,_e,ge,ce.encoding),Ce=de(S);N&&te(S)===!1?r.renderbufferStorageMultisample(36161,Ce,ee,S.width,S.height):te(S)?f.renderbufferStorageMultisampleEXT(36161,Ce,ee,S.width,S.height):r.renderbufferStorage(36161,ee,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function D(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,Q=de(S);if(S.depthTexture.format===vs)te(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,Q):r.framebufferTexture2D(36160,36096,3553,K,0);else if(S.depthTexture.format===Ao)te(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,Q):r.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function L(A){const S=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");D(S.__webglFramebuffer,A)}else if(N){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]=r.createRenderbuffer(),ke(S.__webglDepthbuffer[K],A,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),ke(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function $(A,S,N){const K=n.get(A);S!==void 0&&xe(K.__webglFramebuffer,A,A.texture,36064,3553),N!==void 0&&L(A)}function oe(A){const S=A.texture,N=n.get(A),K=n.get(S);A.addEventListener("dispose",Z),A.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=S.version,o.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,ce=A.isWebGLMultipleRenderTargets===!0,_e=y(A)||a;if(Q){N.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)N.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(N.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const ge=A.texture;for(let ee=0,Ce=ge.length;ee<Ce;ee++){const Ue=n.get(ge[ee]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&te(A)===!1){const ge=ce?S:[S];N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let ee=0;ee<ge.length;ee++){const Ce=ge[ee];N.__webglColorRenderbuffer[ee]=r.createRenderbuffer(),r.bindRenderbuffer(36161,N.__webglColorRenderbuffer[ee]);const Ue=s.convert(Ce.format,Ce.encoding),Te=s.convert(Ce.type),Re=v(Ce.internalFormat,Ue,Te,Ce.encoding,A.isXRRenderTarget===!0),Se=de(A);r.renderbufferStorageMultisample(36161,Se,Re,A.width,A.height),r.framebufferRenderbuffer(36160,36064+ee,36161,N.__webglColorRenderbuffer[ee])}r.bindRenderbuffer(36161,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,K.__webglTexture),H(34067,S,_e);for(let ge=0;ge<6;ge++)xe(N.__webglFramebuffer[ge],A,S,36064,34069+ge);T(S,_e)&&E(34067),t.unbindTexture()}else if(ce){const ge=A.texture;for(let ee=0,Ce=ge.length;ee<Ce;ee++){const Ue=ge[ee],Te=n.get(Ue);t.bindTexture(3553,Te.__webglTexture),H(3553,Ue,_e),xe(N.__webglFramebuffer,A,Ue,36064+ee,3553),T(Ue,_e)&&E(3553)}t.unbindTexture()}else{let ge=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ge=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,K.__webglTexture),H(ge,S,_e),xe(N.__webglFramebuffer,A,S,36064,ge),T(S,_e)&&E(ge),t.unbindTexture()}A.depthBuffer&&L(A)}function ne(A){const S=y(A)||a,N=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let K=0,Q=N.length;K<Q;K++){const ce=N[K];if(T(ce,S)){const _e=A.isWebGLCubeRenderTarget?34067:3553,ge=n.get(ce).__webglTexture;t.bindTexture(_e,ge),E(_e),t.unbindTexture()}}}function R(A){if(a&&A.samples>0&&te(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],N=A.width,K=A.height;let Q=16384;const ce=[],_e=A.stencilBuffer?33306:36096,ge=n.get(A),ee=A.isWebGLMultipleRenderTargets===!0;if(ee)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(36160,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Ce,36161,null),t.bindFramebuffer(36160,ge.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Ce,3553,null,0);t.bindFramebuffer(36008,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ge.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){ce.push(36064+Ce),A.depthBuffer&&ce.push(_e);const Ue=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Ue===!1&&(A.depthBuffer&&(Q|=256),A.stencilBuffer&&(Q|=1024)),ee&&r.framebufferRenderbuffer(36008,36064,36161,ge.__webglColorRenderbuffer[Ce]),Ue===!0&&(r.invalidateFramebuffer(36008,[_e]),r.invalidateFramebuffer(36009,[_e])),ee){const Te=n.get(S[Ce]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Te,0)}r.blitFramebuffer(0,0,N,K,0,0,N,K,Q,9728),m&&r.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ee)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(36160,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Ce,36161,ge.__webglColorRenderbuffer[Ce]);const Ue=n.get(S[Ce]).__webglTexture;t.bindFramebuffer(36160,ge.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Ce,3553,Ue,0)}t.bindFramebuffer(36009,ge.__webglMultisampledFramebuffer)}}function de(A){return Math.min(h,A.samples)}function te(A){const S=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(A){const S=o.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function le(A,S){const N=A.encoding,K=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===yf||N!==Cs&&(N===St?a===!1?e.has("EXT_sRGB")===!0&&K===bi?(A.format=yf,A.minFilter=ti,A.generateMipmaps=!1):S=hg.sRGBToLinear(S):(K!==bi||Q!==As)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),S}this.allocateTextureUnit=B,this.resetTextureUnits=Y,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=V,this.setTextureCube=fe,this.rebindTextures=$,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=te}function Kw(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===As)return 5121;if(s===V1)return 32819;if(s===G1)return 32820;if(s===k1)return 5120;if(s===z1)return 5122;if(s===ug)return 5123;if(s===W1)return 5124;if(s===us)return 5125;if(s===cs)return 5126;if(s===wa)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===H1)return 6406;if(s===bi)return 6408;if(s===q1)return 6409;if(s===$1)return 6410;if(s===vs)return 6402;if(s===Ao)return 34041;if(s===X1)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===yf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Y1)return 6403;if(s===j1)return 36244;if(s===Z1)return 33319;if(s===K1)return 33320;if(s===J1)return 36249;if(s===Zu||s===Ku||s===Ju||s===Qu)if(o===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Zu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ku)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Zu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ku)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ju)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Id||s===Ud||s===Od||s===Nd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Id)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ud)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Od)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Q1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kd||s===zd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===kd)return o===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===zd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wd||s===Vd||s===Gd||s===Hd||s===Xd||s===qd||s===$d||s===Yd||s===jd||s===Zd||s===Kd||s===Jd||s===Qd||s===ep)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Wd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$d)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qd)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ep)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===tp)return o===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ho?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Jw extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xl extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qw={type:"move"};class Cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),x=this._getHandJoint(u,d);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),m=.02,g=.005;u.inputState.pinching&&f>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qw)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class e2 extends Xn{constructor(e,t,n,i,s,o,a,l,u,c){if(c=c!==void 0?c:vs,c!==vs&&c!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===vs&&(n=us),n===void 0&&c===Ao&&(n=ho),super(null,i,s,o,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1}}class t2 extends Fo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,h=null,f=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const x=[],b=[],_=new Set,y=new Map,M=new ni;M.layers.enable(1),M.viewport=new en;const T=new ni;T.layers.enable(2),T.viewport=new en;const E=[M,T],v=new Jw;v.layers.enable(1),v.layers.enable(2);let w=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let V=x[X];return V===void 0&&(V=new Cc,x[X]=V),V.getTargetRaySpace()},this.getControllerGrip=function(X){let V=x[X];return V===void 0&&(V=new Cc,x[X]=V),V.getGripSpace()},this.getHand=function(X){let V=x[X];return V===void 0&&(V=new Cc,x[X]=V),V.getHandSpace()};function O(X){const V=b.indexOf(X.inputSource);if(V===-1)return;const fe=x[V];fe!==void 0&&fe.dispatchEvent({type:X.type,data:X.inputSource})}function Z(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",z);for(let X=0;X<x.length;X++){const V=b[X];V!==null&&(b[X]=null,x[X].disconnect(V))}w=null,P=null,e.setRenderTarget(d),f=null,h=null,c=null,i=null,p=null,F.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:f}),p=new Ds(f.framebufferWidth,f.framebufferHeight,{format:bi,type:As,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let V=null,fe=null,ue=null;g.depth&&(ue=g.stencil?35056:33190,V=g.stencil?Ao:vs,fe=g.stencil?ho:us);const me={colorFormat:32856,depthFormat:ue,scaleFactor:s};c=new XRWebGLBinding(i,t),h=c.createProjectionLayer(me),i.updateRenderState({layers:[h]}),p=new Ds(h.textureWidth,h.textureHeight,{format:bi,type:As,depthTexture:new e2(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const H=e.properties.get(p);H.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),F.setContext(i),F.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(X){for(let V=0;V<X.removed.length;V++){const fe=X.removed[V],ue=b.indexOf(fe);ue>=0&&(b[ue]=null,x[ue].disconnect(fe))}for(let V=0;V<X.added.length;V++){const fe=X.added[V];let ue=b.indexOf(fe);if(ue===-1){for(let H=0;H<x.length;H++)if(H>=b.length){b.push(fe),ue=H;break}else if(b[H]===null){b[H]=fe,ue=H;break}if(ue===-1)break}const me=x[ue];me&&me.connect(fe)}}const I=new J,q=new J;function G(X,V,fe){I.setFromMatrixPosition(V.matrixWorld),q.setFromMatrixPosition(fe.matrixWorld);const ue=I.distanceTo(q),me=V.projectionMatrix.elements,H=fe.projectionMatrix.elements,Le=me[14]/(me[10]-1),ve=me[14]/(me[10]+1),Fe=(me[9]+1)/me[5],xe=(me[9]-1)/me[5],ke=(me[8]-1)/me[0],D=(H[8]+1)/H[0],L=Le*ke,$=Le*D,oe=ue/(-ke+D),ne=oe*-ke;V.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ne),X.translateZ(oe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=Le+oe,de=ve+oe,te=L-ne,pe=$+(ue-ne),le=Fe*ve/de*R,A=xe*ve/de*R;X.projectionMatrix.makePerspective(te,pe,le,A,R,de)}function Y(X,V){V===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(V.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;v.near=T.near=M.near=X.near,v.far=T.far=M.far=X.far,(w!==v.near||P!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,P=v.far);const V=X.parent,fe=v.cameras;Y(v,V);for(let me=0;me<fe.length;me++)Y(fe[me],V);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),X.matrix.copy(v.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale);const ue=X.children;for(let me=0,H=ue.length;me<H;me++)ue[me].updateMatrixWorld(!0);fe.length===2?G(v,M,T):v.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(X){h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.getPlanes=function(){return _};let B=null;function se(X,V){if(u=V.getViewerPose(l||o),m=V,u!==null){const fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ue=!1;fe.length!==v.cameras.length&&(v.cameras.length=0,ue=!0);for(let me=0;me<fe.length;me++){const H=fe[me];let Le=null;if(f!==null)Le=f.getViewport(H);else{const Fe=c.getViewSubImage(h,H);Le=Fe.viewport,me===0&&(e.setRenderTargetTextures(p,Fe.colorTexture,h.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(p))}let ve=E[me];ve===void 0&&(ve=new ni,ve.layers.enable(me),ve.viewport=new en,E[me]=ve),ve.matrix.fromArray(H.transform.matrix),ve.projectionMatrix.fromArray(H.projectionMatrix),ve.viewport.set(Le.x,Le.y,Le.width,Le.height),me===0&&v.matrix.copy(ve.matrix),ue===!0&&v.cameras.push(ve)}}for(let fe=0;fe<x.length;fe++){const ue=b[fe],me=x[fe];ue!==null&&me!==void 0&&me.update(ue,V,l||o)}if(B&&B(X,V),V.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let fe=null;for(const ue of _)V.detectedPlanes.has(ue)||(fe===null&&(fe=[]),fe.push(ue));if(fe!==null)for(const ue of fe)_.delete(ue),y.delete(ue),n.dispatchEvent({type:"planeremoved",data:ue});for(const ue of V.detectedPlanes)if(!_.has(ue))_.add(ue),y.set(ue,V.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ue});else{const me=y.get(ue);ue.lastChangedTime>me&&(y.set(ue,ue.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ue}))}}m=null}const F=new wg;F.setAnimationLoop(se),this.setAnimationLoop=function(X){B=X},this.dispose=function(){}}}function n2(r,e){function t(d,p){p.color.getRGB(d.fogColor.value,yg(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,x,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),c(d,p)):p.isMeshPhongMaterial?(i(d,p),u(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,_)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,x,b):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===ui&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===ui&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const y=r.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uv2Transform.value.copy(_.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,x,b){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*x,d.scale.value=b*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function c(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,x){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ui&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function i2(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(b,_){const y=_.program;n.uniformBlockBinding(b,y)}function u(b,_){let y=i[b.id];y===void 0&&(g(b),y=c(b),i[b.id]=y,b.addEventListener("dispose",p));const M=_.program;n.updateUBOMapping(b,M);const T=e.render.frame;s[b.id]!==T&&(f(b),s[b.id]=T)}function c(b){const _=h();b.__bindingPointIndex=_;const y=r.createBuffer(),M=b.__size,T=b.usage;return r.bindBuffer(35345,y),r.bufferData(35345,M,T),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,y),y}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const _=i[b.id],y=b.uniforms,M=b.__cache;r.bindBuffer(35345,_);for(let T=0,E=y.length;T<E;T++){const v=y[T];if(m(v,T,M)===!0){const w=v.value,P=v.__offset;typeof w=="number"?(v.__data[0]=w,r.bufferSubData(35345,P,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):w.toArray(v.__data),r.bufferSubData(35345,P,v.__data))}}r.bindBuffer(35345,null)}function m(b,_,y){const M=b.value;if(y[_]===void 0)return typeof M=="number"?y[_]=M:y[_]=M.clone(),!0;if(typeof M=="number"){if(y[_]!==M)return y[_]=M,!0}else{const T=y[_];if(T.equals(M)===!1)return T.copy(M),!0}return!1}function g(b){const _=b.uniforms;let y=0;const M=16;let T=0;for(let E=0,v=_.length;E<v;E++){const w=_[E],P=d(w);if(w.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,E>0){T=y%M;const O=M-T;T!==0&&O-P.boundary<0&&(y+=M-T,w.__offset=y)}y+=P.storage}return T=y%M,T>0&&(y+=M-T),b.__size=y,b.__cache={},this}function d(b){const _=b.value,y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(b){const _=b.target;_.removeEventListener("dispose",p);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function x(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:u,dispose:x}}function r2(){const r=Jl("canvas");return r.style.display="block",r}function Dg(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:r2(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Cs,this.physicallyCorrectLights=!1,this.toneMapping=er,this.toneMappingExposure=1;const d=this;let p=!1,x=0,b=0,_=null,y=-1,M=null;const T=new en,E=new en;let v=null,w=e.width,P=e.height,O=1,Z=null,z=null;const I=new en(0,0,w,P),q=new en(0,0,w,P);let G=!1;const Y=new Sg;let B=!1,se=!1,F=null;const X=new $t,V=new _t,fe=new J,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return _===null?O:1}let H=t;function Le(C,W){for(let j=0;j<C.length;j++){const k=C[j],ae=e.getContext(k,W);if(ae!==null)return ae}return null}try{const C={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hh}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",we,!1),H===null){const W=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&W.shift(),H=Le(W,C),H===null)throw Le(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ve,Fe,xe,ke,D,L,$,oe,ne,R,de,te,pe,le,A,S,N,K,Q,ce,_e,ge,ee,Ce;function Ue(){ve=new mS(H),Fe=new lS(H,ve,r),ve.init(Fe),ge=new Kw(H,ve,Fe),xe=new jw(H,ve,Fe),ke=new xS,D=new Iw,L=new Zw(H,ve,xe,D,Fe,ge,ke),$=new cS(d),oe=new pS(d),ne=new Ey(H,Fe),ee=new oS(H,ve,ne,Fe),R=new gS(H,ne,ke,ee),de=new MS(H,R,ne,ke),Q=new bS(H,Fe,L),S=new uS(D),te=new Bw(d,$,oe,ve,Fe,ee,S),pe=new n2(d,D),le=new Ow,A=new Gw(ve,Fe),K=new sS(d,$,oe,xe,de,c,o),N=new Yw(d,de,Fe),Ce=new i2(H,ke,Fe,xe),ce=new aS(H,ve,ke,Fe),_e=new _S(H,ve,ke,Fe),ke.programs=te.programs,d.capabilities=Fe,d.extensions=ve,d.properties=D,d.renderLists=le,d.shadowMap=N,d.state=xe,d.info=ke}Ue();const Te=new t2(d,H);this.xr=Te,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(w,P,!1))},this.getSize=function(C){return C.set(w,P)},this.setSize=function(C,W,j){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=C,P=W,e.width=Math.floor(C*O),e.height=Math.floor(W*O),j!==!1&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(w*O,P*O).floor()},this.setDrawingBufferSize=function(C,W,j){w=C,P=W,O=j,e.width=Math.floor(C*j),e.height=Math.floor(W*j),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(I)},this.setViewport=function(C,W,j,k){C.isVector4?I.set(C.x,C.y,C.z,C.w):I.set(C,W,j,k),xe.viewport(T.copy(I).multiplyScalar(O).floor())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,W,j,k){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,W,j,k),xe.scissor(E.copy(q).multiplyScalar(O).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(C){xe.setScissorTest(G=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(C=!0,W=!0,j=!0){let k=0;C&&(k|=16384),W&&(k|=256),j&&(k|=1024),H.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",we,!1),le.dispose(),A.dispose(),D.dispose(),$.dispose(),oe.dispose(),de.dispose(),ee.dispose(),Ce.dispose(),te.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",be),Te.removeEventListener("sessionend",Pe),F&&(F.dispose(),F=null),Ke.stop()};function Re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const C=ke.autoReset,W=N.enabled,j=N.autoUpdate,k=N.needsUpdate,ae=N.type;Ue(),ke.autoReset=C,N.enabled=W,N.autoUpdate=j,N.needsUpdate=k,N.type=ae}function we(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function nt(C){const W=C.target;W.removeEventListener("dispose",nt),ut(W)}function ut(C){U(C),D.remove(C)}function U(C){const W=D.get(C).programs;W!==void 0&&(W.forEach(function(j){te.releaseProgram(j)}),C.isShaderMaterial&&te.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,j,k,ae,Me){W===null&&(W=ue);const De=ae.isMesh&&ae.matrixWorld.determinant()<0,Be=Lt(C,W,j,k,ae);xe.setMaterial(k,De);let He=j.index,Je=1;k.wireframe===!0&&(He=R.getWireframeAttribute(j),Je=2);const Ne=j.drawRange,Ie=j.attributes.position;let ht=Ne.start*Je,jt=(Ne.start+Ne.count)*Je;Me!==null&&(ht=Math.max(ht,Me.start*Je),jt=Math.min(jt,(Me.start+Me.count)*Je)),He!==null?(ht=Math.max(ht,0),jt=Math.min(jt,He.count)):Ie!=null&&(ht=Math.max(ht,0),jt=Math.min(jt,Ie.count));const jn=jt-ht;if(jn<0||jn===1/0)return;ee.setup(ae,k,Be,j,He);let Fn,gt=ce;if(He!==null&&(Fn=ne.get(He),gt=_e,gt.setIndex(Fn)),ae.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*me()),gt.setMode(1)):gt.setMode(4);else if(ae.isLine){let at=k.linewidth;at===void 0&&(at=1),xe.setLineWidth(at*me()),ae.isLineSegments?gt.setMode(1):ae.isLineLoop?gt.setMode(2):gt.setMode(3)}else ae.isPoints?gt.setMode(0):ae.isSprite&&gt.setMode(4);if(ae.isInstancedMesh)gt.renderInstances(ht,jn,ae.count);else if(j.isInstancedBufferGeometry){const at=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,bu=Math.min(j.instanceCount,at);gt.renderInstances(ht,jn,bu)}else gt.render(ht,jn)},this.compile=function(C,W){function j(k,ae,Me){k.transparent===!0&&k.side===Er?(k.side=ui,k.needsUpdate=!0,Ee(k,ae,Me),k.side=wo,k.needsUpdate=!0,Ee(k,ae,Me),k.side=Er):Ee(k,ae,Me)}f=A.get(C),f.init(),g.push(f),C.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(d.physicallyCorrectLights),C.traverse(function(k){const ae=k.material;if(ae)if(Array.isArray(ae))for(let Me=0;Me<ae.length;Me++){const De=ae[Me];j(De,C,k)}else j(ae,C,k)}),g.pop(),f=null};let re=null;function he(C){re&&re(C)}function be(){Ke.stop()}function Pe(){Ke.start()}const Ke=new wg;Ke.setAnimationLoop(he),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(C){re=C,Te.setAnimationLoop(C),C===null?Ke.stop():Ke.start()},Te.addEventListener("sessionstart",be),Te.addEventListener("sessionend",Pe),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(W),W=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(d,C,W,_),f=A.get(C,g.length),f.init(),g.push(f),X.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Y.setFromProjectionMatrix(X),se=this.localClippingEnabled,B=S.init(this.clippingPlanes,se,W),h=le.get(C,m.length),h.init(),m.push(h),yt(C,W,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(Z,z),B===!0&&S.beginShadows();const j=f.state.shadowsArray;if(N.render(j,C,W),B===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(h,C),f.setupLights(d.physicallyCorrectLights),W.isArrayCamera){const k=W.cameras;for(let ae=0,Me=k.length;ae<Me;ae++){const De=k[ae];At(h,C,De,De.viewport)}}else At(h,C,W);_!==null&&(L.updateMultisampleRenderTarget(_),L.updateRenderTargetMipmap(_)),C.isScene===!0&&C.onAfterRender(d,C,W),ee.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function yt(C,W,j,k){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){k&&fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(X);const De=de.update(C),Be=C.material;Be.visible&&h.push(C,De,Be,j,fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==ke.render.frame&&(C.skeleton.update(),C.skeleton.frame=ke.render.frame),!C.frustumCulled||Y.intersectsObject(C))){k&&fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(X);const De=de.update(C),Be=C.material;if(Array.isArray(Be)){const He=De.groups;for(let Je=0,Ne=He.length;Je<Ne;Je++){const Ie=He[Je],ht=Be[Ie.materialIndex];ht&&ht.visible&&h.push(C,De,ht,j,fe.z,Ie)}}else Be.visible&&h.push(C,De,Be,j,fe.z,null)}}const Me=C.children;for(let De=0,Be=Me.length;De<Be;De++)yt(Me[De],W,j,k)}function At(C,W,j,k){const ae=C.opaque,Me=C.transmissive,De=C.transparent;f.setupLightsView(j),Me.length>0&&je(ae,W,j),k&&xe.viewport(T.copy(k)),ae.length>0&&ie(ae,W,j),Me.length>0&&ie(Me,W,j),De.length>0&&ie(De,W,j),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function je(C,W,j){const k=Fe.isWebGL2;F===null&&(F=new Ds(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?wa:As,minFilter:xu,samples:k&&s===!0?4:0})),d.getDrawingBufferSize(V),k?F.setSize(V.x,V.y):F.setSize(bf(V.x),bf(V.y));const ae=d.getRenderTarget();d.setRenderTarget(F),d.clear();const Me=d.toneMapping;d.toneMapping=er,ie(C,W,j),d.toneMapping=Me,L.updateMultisampleRenderTarget(F),L.updateRenderTargetMipmap(F),d.setRenderTarget(ae)}function ie(C,W,j){const k=W.isScene===!0?W.overrideMaterial:null;for(let ae=0,Me=C.length;ae<Me;ae++){const De=C[ae],Be=De.object,He=De.geometry,Je=k===null?De.material:k,Ne=De.group;Be.layers.test(j.layers)&&Ae(Be,W,j,He,Je,Ne)}}function Ae(C,W,j,k,ae,Me){C.onBeforeRender(d,W,j,k,ae,Me),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ae.onBeforeRender(d,W,j,k,C,Me),ae.transparent===!0&&ae.side===Er?(ae.side=ui,ae.needsUpdate=!0,d.renderBufferDirect(j,W,k,ae,C,Me),ae.side=wo,ae.needsUpdate=!0,d.renderBufferDirect(j,W,k,ae,C,Me),ae.side=Er):d.renderBufferDirect(j,W,k,ae,C,Me),C.onAfterRender(d,W,j,k,ae,Me)}function Ee(C,W,j){W.isScene!==!0&&(W=ue);const k=D.get(C),ae=f.state.lights,Me=f.state.shadowsArray,De=ae.state.version,Be=te.getParameters(C,ae.state,Me,W,j),He=te.getProgramCacheKey(Be);let Je=k.programs;k.environment=C.isMeshStandardMaterial?W.environment:null,k.fog=W.fog,k.envMap=(C.isMeshStandardMaterial?oe:$).get(C.envMap||k.environment),Je===void 0&&(C.addEventListener("dispose",nt),Je=new Map,k.programs=Je);let Ne=Je.get(He);if(Ne!==void 0){if(k.currentProgram===Ne&&k.lightsStateVersion===De)return ze(C,Be),Ne}else Be.uniforms=te.getUniforms(C),C.onBuild(j,Be,d),C.onBeforeCompile(Be,d),Ne=te.acquireProgram(Be,He),Je.set(He,Ne),k.uniforms=Be.uniforms;const Ie=k.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ie.clippingPlanes=S.uniform),ze(C,Be),k.needsLights=Ct(C),k.lightsStateVersion=De,k.needsLights&&(Ie.ambientLightColor.value=ae.state.ambient,Ie.lightProbe.value=ae.state.probe,Ie.directionalLights.value=ae.state.directional,Ie.directionalLightShadows.value=ae.state.directionalShadow,Ie.spotLights.value=ae.state.spot,Ie.spotLightShadows.value=ae.state.spotShadow,Ie.rectAreaLights.value=ae.state.rectArea,Ie.ltc_1.value=ae.state.rectAreaLTC1,Ie.ltc_2.value=ae.state.rectAreaLTC2,Ie.pointLights.value=ae.state.point,Ie.pointLightShadows.value=ae.state.pointShadow,Ie.hemisphereLights.value=ae.state.hemi,Ie.directionalShadowMap.value=ae.state.directionalShadowMap,Ie.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ie.spotShadowMap.value=ae.state.spotShadowMap,Ie.spotLightMatrix.value=ae.state.spotLightMatrix,Ie.spotLightMap.value=ae.state.spotLightMap,Ie.pointShadowMap.value=ae.state.pointShadowMap,Ie.pointShadowMatrix.value=ae.state.pointShadowMatrix);const ht=Ne.getUniforms(),jt=Il.seqWithValue(ht.seq,Ie);return k.currentProgram=Ne,k.uniformsList=jt,Ne}function ze(C,W){const j=D.get(C);j.outputEncoding=W.outputEncoding,j.instancing=W.instancing,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function Lt(C,W,j,k,ae){W.isScene!==!0&&(W=ue),L.resetTextureUnits();const Me=W.fog,De=k.isMeshStandardMaterial?W.environment:null,Be=_===null?d.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Cs,He=(k.isMeshStandardMaterial?oe:$).get(k.envMap||De),Je=k.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!k.normalMap&&!!j.attributes.tangent,Ie=!!j.morphAttributes.position,ht=!!j.morphAttributes.normal,jt=!!j.morphAttributes.color,jn=k.toneMapped?d.toneMapping:er,Fn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,gt=Fn!==void 0?Fn.length:0,at=D.get(k),bu=f.state.lights;if(B===!0&&(se===!0||C!==M)){const Rn=C===M&&k.id===y;S.setState(k,C,Rn)}let Gt=!1;k.version===at.__version?(at.needsLights&&at.lightsStateVersion!==bu.state.version||at.outputEncoding!==Be||ae.isInstancedMesh&&at.instancing===!1||!ae.isInstancedMesh&&at.instancing===!0||ae.isSkinnedMesh&&at.skinning===!1||!ae.isSkinnedMesh&&at.skinning===!0||at.envMap!==He||k.fog===!0&&at.fog!==Me||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==S.numPlanes||at.numIntersection!==S.numIntersection)||at.vertexAlphas!==Je||at.vertexTangents!==Ne||at.morphTargets!==Ie||at.morphNormals!==ht||at.morphColors!==jt||at.toneMapping!==jn||Fe.isWebGL2===!0&&at.morphTargetsCount!==gt)&&(Gt=!0):(Gt=!0,at.__version=k.version);let Wr=at.currentProgram;Gt===!0&&(Wr=Ee(k,W,ae));let gh=!1,Bo=!1,Mu=!1;const cn=Wr.getUniforms(),Vr=at.uniforms;if(xe.useProgram(Wr.program)&&(gh=!0,Bo=!0,Mu=!0),k.id!==y&&(y=k.id,Bo=!0),gh||M!==C){if(cn.setValue(H,"projectionMatrix",C.projectionMatrix),Fe.logarithmicDepthBuffer&&cn.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,Bo=!0,Mu=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Rn=cn.map.cameraPosition;Rn!==void 0&&Rn.setValue(H,fe.setFromMatrixPosition(C.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&cn.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||ae.isSkinnedMesh)&&cn.setValue(H,"viewMatrix",C.matrixWorldInverse)}if(ae.isSkinnedMesh){cn.setOptional(H,ae,"bindMatrix"),cn.setOptional(H,ae,"bindMatrixInverse");const Rn=ae.skeleton;Rn&&(Fe.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),cn.setValue(H,"boneTexture",Rn.boneTexture,L),cn.setValue(H,"boneTextureSize",Rn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Su=j.morphAttributes;if((Su.position!==void 0||Su.normal!==void 0||Su.color!==void 0&&Fe.isWebGL2===!0)&&Q.update(ae,j,k,Wr),(Bo||at.receiveShadow!==ae.receiveShadow)&&(at.receiveShadow=ae.receiveShadow,cn.setValue(H,"receiveShadow",ae.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Vr.envMap.value=He,Vr.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Bo&&(cn.setValue(H,"toneMappingExposure",d.toneMappingExposure),at.needsLights&&Xe(Vr,Mu),Me&&k.fog===!0&&pe.refreshFogUniforms(Vr,Me),pe.refreshMaterialUniforms(Vr,k,O,P,F),Il.upload(H,at.uniformsList,Vr,L)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Il.upload(H,at.uniformsList,Vr,L),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&cn.setValue(H,"center",ae.center),cn.setValue(H,"modelViewMatrix",ae.modelViewMatrix),cn.setValue(H,"normalMatrix",ae.normalMatrix),cn.setValue(H,"modelMatrix",ae.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Rn=k.uniformsGroups;for(let wu=0,Pg=Rn.length;wu<Pg;wu++)if(Fe.isWebGL2){const _h=Rn[wu];Ce.update(_h,Wr),Ce.bind(_h,Wr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wr}function Xe(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Ct(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(C,W,j){D.get(C.texture).__webglTexture=W,D.get(C.depthTexture).__webglTexture=j;const k=D.get(C);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=j===void 0,k.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){const j=D.get(C);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,j=0){_=C,x=W,b=j;let k=!0,ae=null,Me=!1,De=!1;if(C){const He=D.get(C);He.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),k=!1):He.__webglFramebuffer===void 0?L.setupRenderTarget(C):He.__hasExternalTextures&&L.rebindTextures(C,D.get(C.texture).__webglTexture,D.get(C.depthTexture).__webglTexture);const Je=C.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(De=!0);const Ne=D.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ae=Ne[W],Me=!0):Fe.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?ae=D.get(C).__webglMultisampledFramebuffer:ae=Ne,T.copy(C.viewport),E.copy(C.scissor),v=C.scissorTest}else T.copy(I).multiplyScalar(O).floor(),E.copy(q).multiplyScalar(O).floor(),v=G;if(xe.bindFramebuffer(36160,ae)&&Fe.drawBuffers&&k&&xe.drawBuffers(C,ae),xe.viewport(T),xe.scissor(E),xe.setScissorTest(v),Me){const He=D.get(C.texture);H.framebufferTexture2D(36160,36064,34069+W,He.__webglTexture,j)}else if(De){const He=D.get(C.texture),Je=W||0;H.framebufferTextureLayer(36160,36064,He.__webglTexture,j||0,Je)}y=-1},this.readRenderTargetPixels=function(C,W,j,k,ae,Me,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){xe.bindFramebuffer(36160,Be);try{const He=C.texture,Je=He.format,Ne=He.type;if(Je!==bi&&ge.convert(Je)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Ne===wa&&(ve.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ne!==As&&ge.convert(Ne)!==H.getParameter(35738)&&!(Ne===cs&&(Fe.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-k&&j>=0&&j<=C.height-ae&&H.readPixels(W,j,k,ae,ge.convert(Je),ge.convert(Ne),Me)}finally{const He=_!==null?D.get(_).__webglFramebuffer:null;xe.bindFramebuffer(36160,He)}}},this.copyFramebufferToTexture=function(C,W,j=0){const k=Math.pow(2,-j),ae=Math.floor(W.image.width*k),Me=Math.floor(W.image.height*k);L.setTexture2D(W,0),H.copyTexSubImage2D(3553,j,0,0,C.x,C.y,ae,Me),xe.unbindTexture()},this.copyTextureToTexture=function(C,W,j,k=0){const ae=W.image.width,Me=W.image.height,De=ge.convert(j.format),Be=ge.convert(j.type);L.setTexture2D(j,0),H.pixelStorei(37440,j.flipY),H.pixelStorei(37441,j.premultiplyAlpha),H.pixelStorei(3317,j.unpackAlignment),W.isDataTexture?H.texSubImage2D(3553,k,C.x,C.y,ae,Me,De,Be,W.image.data):W.isCompressedTexture?H.compressedTexSubImage2D(3553,k,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,De,W.mipmaps[0].data):H.texSubImage2D(3553,k,C.x,C.y,De,Be,W.image),k===0&&j.generateMipmaps&&H.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(C,W,j,k,ae=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=C.max.x-C.min.x+1,De=C.max.y-C.min.y+1,Be=C.max.z-C.min.z+1,He=ge.convert(k.format),Je=ge.convert(k.type);let Ne;if(k.isData3DTexture)L.setTexture3D(k,0),Ne=32879;else if(k.isDataArrayTexture)L.setTexture2DArray(k,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,k.flipY),H.pixelStorei(37441,k.premultiplyAlpha),H.pixelStorei(3317,k.unpackAlignment);const Ie=H.getParameter(3314),ht=H.getParameter(32878),jt=H.getParameter(3316),jn=H.getParameter(3315),Fn=H.getParameter(32877),gt=j.isCompressedTexture?j.mipmaps[0]:j.image;H.pixelStorei(3314,gt.width),H.pixelStorei(32878,gt.height),H.pixelStorei(3316,C.min.x),H.pixelStorei(3315,C.min.y),H.pixelStorei(32877,C.min.z),j.isDataTexture||j.isData3DTexture?H.texSubImage3D(Ne,ae,W.x,W.y,W.z,Me,De,Be,He,Je,gt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ne,ae,W.x,W.y,W.z,Me,De,Be,He,gt.data)):H.texSubImage3D(Ne,ae,W.x,W.y,W.z,Me,De,Be,He,Je,gt),H.pixelStorei(3314,Ie),H.pixelStorei(32878,ht),H.pixelStorei(3316,jt),H.pixelStorei(3315,jn),H.pixelStorei(32877,Fn),ae===0&&k.generateMipmaps&&H.generateMipmap(Ne),xe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),xe.unbindTexture()},this.resetState=function(){x=0,b=0,_=null,xe.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class s2 extends Dg{}s2.prototype.isWebGL1Renderer=!0;class o2 extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class a2 extends La{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Np=new $t,Sf=new mg,vl=new vu,yl=new J;class l2 extends Pn{constructor(e=new lr,t=new a2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(i),vl.radius+=s,e.ray.intersectsSphere(vl)===!1)return;Np.copy(i).invert(),Sf.copy(e.ray).applyMatrix4(Np);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,d=m;g<d;g++){const p=u.getX(g);yl.fromBufferAttribute(h,p),kp(yl,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,d=m;g<d;g++)yl.fromBufferAttribute(h,g),kp(yl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function kp(r,e,t,n,i,s,o){const a=Sf.distanceSqToPoint(r);if(a<t){const l=new J;Sf.closestPointToPoint(r,l),l.applyMatrix4(n);const u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);const u2=rr({__name:"Three",setup(r){const e=Oi(),t={fovy:60,aspect:window.innerWidth/window.innerHeight,near:.1,far:30,x:0,y:5,z:7,lookAt:new J(0,0,0)},n={clearColor:0,width:window.innerWidth,height:window.innerHeight};let i=[.3,.3,.3,.6],s=8;const o=new o2,a=new ni(t.fovy,t.aspect,t.near,t.far),l=new Dg;let u=Date.now(),c;const h=new lr,f={pointSize:{value:s},time:{value:0},globalColor:{value:i},power:{value:.5}},m={beforeY:window.pageYOffset,currentY:window.pageYOffset},g=()=>{if(e.value instanceof HTMLElement){a.updateProjectionMatrix(),a.position.set(t.x,t.y,t.z),a.lookAt(t.lookAt),l.setClearColor(new vt(n.clearColor)),l.setSize(n.width,n.height),e.value.appendChild(l.domElement);const p=new kr({uniforms:f,blending:pf,depthWrite:!1,transparent:!0,vertexShader:`
        attribute vec4 randomValue;

        uniform float pointSize;
        uniform float time;

        void main(){
            // \u9802\u70B9\u5C5E\u6027\u3068\u3057\u3066\u5165\u3063\u3066\u304D\u305F\u4E71\u6570\u5024\u3092\u9802\u70B9\u306E\u52D5\u304D\u306A\u3069\u306B\u6D3B\u7528\u3059\u308B
            float width = randomValue.x;
            float sinScale = randomValue.y * 0.1 + 0.1;
            float cosScale = randomValue.z * 0.1 + 0.1;
            float pointScale = randomValue.w * 1.2 + 0.3;
            // \u3068\u308A\u3042\u3048\u305A\u30B5\u30A4\u30F3\u30FB\u30B3\u30B5\u30A4\u30F3\u3067\u52D5\u304B\u3057\u3066\u307F\u308B
            vec3 offset = vec3(cos(time * cosScale), sin(time * sinScale), 0.0) * width;
            // \u30AA\u30D5\u30BB\u30C3\u30C8\u91CF\u3092\u52A0\u7B97\u3057\u3066\u304B\u3089\u884C\u5217\u3067\u5909\u63DB\u3057\u3066\u51FA\u529B
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position + offset, 1.0);
            // \u30DD\u30A4\u30F3\u30C8\u30B5\u30A4\u30BA\u306B\u3082\u4E71\u6570\u5024\u304C\u5F71\u97FF\u3059\u308B\u3088\u3046\u306B
            gl_PointSize = pointSize * pointScale;
        }
      `,fragmentShader:`
        precision mediump float;

        uniform vec4 globalColor;
        uniform float power; // \u767A\u5149\u4FC2\u6570 @@@

        void main(){
            // \u30C6\u30AF\u30B9\u30C1\u30E3\u3092\u53C2\u7167\u3059\u308B\u306E\u3067\u306F\u306A\u304F\u3001\u30B7\u30A7\u30FC\u30C0\u5185\u3067\u52D5\u7684\u306B\u6A21\u69D8\u3092\u4F5C\u308B @@@
            // \uFF11\uFF0Egl_PointCoord.st \u306E\u539F\u70B9\u3092\u4E2D\u5FC3\u306B\u79FB\u52D5\u3055\u305B\u308B
            vec2 p = gl_PointCoord.st * 2.0 - 1.0;
            // \uFF12\uFF0E\u539F\u70B9\u304B\u3089\u306E\u8DDD\u96E2\u3092\u6E2C\u308B
            float len = length(p);
            // \uFF13\uFF0E\u5149\u3063\u305F\u3088\u3046\u306A\u52B9\u679C\u3092\u5F97\u305F\u3044\u306E\u3067\u30D9\u30AF\u30C8\u30EB\u306E\u9577\u3055\u3092\u9664\u6570\u3068\u3057\u3066\u4F7F\u3046
            float dest = power / len;
            // \uFF14\uFF0D\uFF11\uFF0E\u5916\u7E01\u306F\u5B8C\u5168\u306B\u900F\u660E\u306B\u306A\u3063\u3066\u307B\u3057\u3044\u306E\u3067\u539F\u70B9\u304B\u3089\u9060\u3044\u307B\u3069\u6697\u304F\u3059\u308B
            // dest *= max( len, 0.0);
            // \uFF14\uFF0D\uFF12\uFF0E\u307E\u305F\u306F\u3001\u3079\u304D\u7B97\u3092\u6D3B\u7528\u3059\u308B
            dest = pow(dest, 5.0);

            gl_FragColor = vec4(vec3(dest), 1.0) * globalColor;
        }
      `}),x=100,b=6,_=[],y=[];for(let E=0;E<=x;++E){const v=(Math.random()-.5)*2*b,w=(Math.random()-.5)*2*b,P=(Math.random()-.5)*2*b;_.push(v,w,P),y.push(Math.random(),Math.random(),Math.random(),Math.random())}const M=new ci(new Float32Array(_),3);h.setAttribute("position",M),h.setAttribute("randomValue",new ci(new Float32Array(y),4));const T=new l2(h,p);o.add(T),d()}},d=()=>{const p=()=>{c=(Date.now()-u)/1e3,l.render(o,a),f.time.value=c,m.currentY=window.pageYOffset,o.rotation.y+=(m.currentY-m.beforeY)/500,m.beforeY=m.currentY,requestAnimationFrame(p)};p()};return or(()=>{g()}),(p,x)=>(Ge(),qe("div",{ref_key:"container",ref:e,class:"three"},null,512))}});const c2=ar(u2,[["__scopeId","data-v-7af1088c"]]),Ln=r=>(F_("data-v-0b4da50a"),r=r(),R_(),r),f2={ref:"sandbox"},h2={class:"lead"},d2=Ln(()=>We("pre",null,`            import { ref, onMounted } from 'vue'

            // \u3053\u3053\u3067\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u53C2\u7167\u3057\u305F\u3044\u8981\u7D20\u3092\u3064\u306A\u304E\u3053\u3080
            // (\u5909\u6570\u540D\u3068ref\u5C5E\u6027\u306E\u540D\u79F0\u3092\u3042\u308F\u305B\u308B)
            const templateRef = ref(null);
            const props = defineProps({
              // \u3053\u3053\u306Bprops\u3092\u5B9A\u7FA9
            })

            onMounted(() => {
              // \u3053\u3053\u306B\u51E6\u7406\u3092\u8A18\u8FF0
            })
          `,-1)),p2=Ln(()=>We("pre",null,`            import gsap from 'gsap'
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
          `,-1)),m2=Ln(()=>We("pre",null,`            const main = createApp(App)
            main.directive('blur', blurDirective)
            main.mount('#app')
          `,-1)),g2=Ln(()=>We("ul",null,[We("li",null,"\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u624B\u7D9A\u304D\u7684\u306B\u5B9F\u884C\u3067\u304D\u308B\u70B9(timeline)"),We("li",null,"\u30B9\u30AF\u30ED\u30FC\u30EB\u3068\u9023\u52D5\u3057\u305F\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u53EF\u80FD\u306A\u70B9(ScrollTrigger)")],-1)),_2=Ln(()=>We("p",null," \u4EE5\u4E0B\u306B\u4ED6\u306E\u6D3B\u304B\u305B\u305D\u3046\u306A\u4F8B\u3092\u4F5C\u6210\u3057\u3066\u307F\u305F\uFF01 ",-1)),x2=Ln(()=>We("h3",null,"timeline\u3092\u7528\u3044\u305F\u6700\u521D\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3",-1)),v2=Ln(()=>We("video",{src:c3,autoplay:"",loop:"",muted:"",playsinline:""},null,-1)),y2=Ln(()=>We("h3",null,"\u30B9\u30E9\u30A4\u30C9\u30A4\u30F3\u3055\u305B\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3",-1)),b2=Ln(()=>We("pre",null,`            const props = defineProps({
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
          `,-1)),M2=Ln(()=>We("h3",null,"\u4E0A\u7AEF\u4E0B\u7AEF\u3067\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u5165\u308B\u6642\u306B\u307C\u304B\u3059\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3",-1)),S2=Ln(()=>We("pre",null,`            gsap.to(
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
          `,-1)),w2=Ln(()=>We("h3",null,"\u80CC\u666F\u3092\u57CB\u3081\u308B\u30A8\u30D5\u30A7\u30AF\u30C8",-1)),T2=Ln(()=>We("pre",null,`            const activator = ref();
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
          `,-1)),E2=Ln(()=>We("h3",null,"\u30B9\u30AF\u30ED\u30FC\u30EB\u30CF\u30C3\u30AF\u3059\u308B\u30A8\u30D5\u30A7\u30AF\u30C8",-1)),A2=rr({__name:"App",setup(r){return(e,t)=>{const n=Dh("budoux"),i=Dh("blur");return Ge(),qe(_n,null,[it(c2),We("main",f2,[it(Ev),We("div",h2,[ct((Ge(),qe("p",null,[Ve(" \u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u307E\u308F\u308A\u3068\u304B\u6700\u8FD1\u306E\u3084\u308A\u304B\u305F\u8A66\u3057\u305F\u3053\u3068\u306A\u304B\u3063\u305F\u306E\u3067\u72EC\u7FD2\u3057\u3066\u307F\u307E\u3057\u305F\uFF01 ")])),[[n]]),ct((Ge(),qe("p",null,[Ve(" \u30B3\u30C6\u30B3\u30C6\u306B\u306A\u3063\u3066\u3057\u307E\u3063\u3066\u3044\u307E\u3059\u304C\u3001\u7DF4\u7FD2\u3068\u3044\u3046\u3053\u3068\u3067\u2026\uFF01 ")])),[[n]])]),We("article",null,[it(Ei,null,{heading:dt(()=>[Ve(" Vite\u3092\u4F7F\u3063\u3066\u307F\u305F ")]),default:dt(()=>[We("ul",null,[ct((Ge(),qe("li",null,[Ve("\u60F3\u50CF\u4EE5\u4E0A\u306B\u304B\u3093\u305F\u3093\u306B\u74B0\u5883\u304C\u4F5C\u308C\u3066\u3073\u3063\u304F\u308A\uFF01")])),[[n]]),ct((Ge(),qe("li",null,[Ve("\u307B\u3093\u3068\u306BGetting started\u306E\u30B3\u30DE\u30F3\u30C93\u3064\u304F\u3089\u3044\u53E9\u3044\u305F\u3089\u3067\u304D\u305F")])),[[n]])])]),_:1}),it(Ei,null,{heading:dt(()=>[Ve(" Vue3 Composition API \u3092\u5229\u7528\u3057\u3066\u307F\u305F ")]),default:dt(()=>[We("ul",null,[ct((Ge(),qe("li",null,[Ve("\u307E\u3060option\u306E\u8A18\u6CD5\u306B\u6163\u308C\u3066\u3044\u308B\u306E\u3067\u3001\u9055\u548C\u611F\u304C\u3042\u308B\u2026")])),[[n]]),ct((Ge(),qe("li",null,[Ve("\u3053\u308C\u306B\u6163\u308C\u3066\u304D\u305F\u3089TypeScript\u3068\u304B\u306E\u30B3\u30FC\u30C9\u8AAD\u307F\u89E3\u304D\u3082\u30E9\u30AF\u306B\u306A\u308B\u4E88\u611F\u304C\u3059\u308B\u306E\u3067\u9811\u5F35\u308A\u305F\u3044\u3068\u3053")])),[[n]])]),it(hi,{type:"javascript",caption:"\u3068\u3042\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E <script setup> \u30BF\u30B0\u5185"},{default:dt(()=>[d2]),_:1})]),_:1}),it(Ei,null,{heading:dt(()=>[Ve(" \u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u4F5C\u6210\u3057\u305F ")]),default:dt(()=>[We("ul",null,[ct((Ge(),qe("li",null,[Ve("\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u5B9A\u7FA9\u3059\u308B\u7DF4\u7FD2")])),[[n]]),ct((Ge(),qe("li",null,[Ve("scroll\u306Estart\u3068end\u307E\u308F\u308A\u306E\u5B9A\u7FA9\u306E\u4ED5\u65B9\u3001fromTo()\u3068\u306E\u304B\u3051\u5408\u308F\u305B\u65B9\u304C\u6DF7\u4E71\u3057\u3066\u3057\u307E\u3063\u305F\u304C\u3001\u4F55\u3068\u304B\u3067\u304D\u305F\uFF01")])),[[n]])]),it(hi,{type:"javascript",caption:"blur.ts"},{default:dt(()=>[p2]),_:1}),it(hi,{type:"javascript",caption:"main.ts"},{default:dt(()=>[m2]),_:1})]),_:1})]),We("article",null,[it(Ei,null,{heading:dt(()=>[Ve(" gsap\u3092\u5229\u7528\u3057\u3066\u307F\u305F ")]),default:dt(()=>[We("ul",null,[ct((Ge(),qe("li",null,[Ve("gsap\u3068\u305D\u306E\u30D7\u30E9\u30B0\u30A4\u30F3ScrollTrigger\u3092\u7528\u3044\u3066\u4F5C\u6210")])),[[n]]),ct((Ge(),qe("li",null,[Ve("scrub\u3067\u30B9\u30AF\u30ED\u30FC\u30EB\u4F4D\u7F6E\u306B\u5408\u308F\u305B\u3066\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u52D5\u304F\u306E\u3060\u3051\u3069\u3001\u305D\u308C\u304C\u3081\u3061\u3083\u9762\u767D\u3044\uFF01")])),[[n]]),ct((Ge(),qe("li",null,[Ve(" \u500B\u4EBA\u7684\u306B\u5B09\u3057\u3044\u306A\u30FC\u3068\u306A\u3063\u305F\u30DD\u30A4\u30F3\u30C8\u306F\u4EE5\u4E0B\u3002 "),g2])),[[n]])]),_2]),_:1}),it(Ei,null,{default:dt(()=>[x2,v2,We("ul",null,[ct((Ge(),qe("li",null,[Ve("gsap.timeline\u95A2\u6570\u3092\u4F7F\u7528\u3057\u305F")])),[[n]]),ct((Ge(),qe("li",null,[Ve("\u3053\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6B21\u306F\u3053\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u2192\u305D\u306E\u6B21\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u2026\u3068\u624B\u7D9A\u304D\u7684\u306B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3067\u304D\u308B")])),[[n]]),ct((Ge(),qe("li",null,[Ve("\u30DC\u30FC\u30EB\u304C\u8DF3\u306D\u308B\u2192\u6587\u5B57\u304C\u4E00\u6587\u5B57\u305A\u3064\u8DF3\u306D\u308B\u2192\u6587\u5B57\u304C\u7E2E\u5C0F\u3059\u308B\u2192(\u4E00\u500B\u524D\u3068\u540C\u6642\u306B)\u80CC\u666F\u304C\u900F\u904E\u3059\u308B")])),[[n]]),ct((Ge(),qe("li",null,[Ve(" stagger\u3068\u3044\u3046\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u3064\u3051\u308B\u3053\u3068\u3067\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5BFE\u8C61\u306E\u8981\u7D20\u305F\u3061\u3092\u6307\u5B9A\u3057\u305F\u6642\u9593\u5206\u305A\u3089\u3057\u3066\u9806\u6B21\u5B9F\u884C\u3067\u304D\u308B "),We("ul",null,[ct((Ge(),qe("li",null,[Ve("\u4ECA\u56DE\u306F\u4E00\u6587\u5B57\u305A\u3064\u305A\u308C\u3066\u540C\u3058\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u5B9F\u884C\u3055\u308C\u308B\u3088\u3046\u306B\u3059\u308B\u3068\u3053\u308D\u306B\u9069\u7528\u3057\u3066\u3044\u308B")])),[[n]])])])),[[n]])])]),_:1}),it(Ei,{"start-x":"-200"},{default:dt(()=>[y2,it(hi,{type:"javascript",caption:"\u30B9\u30E9\u30A4\u30C9\u30A4\u30F3\u3067\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u306Egsap\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u8A18\u8FF0\u90E8\u5206"},{default:dt(()=>[b2]),_:1}),We("ul",null,[ct((Ge(),qe("li",null,[Ve("\u30B9\u30AF\u30ED\u30FC\u30EB\u306E\u969B\u3001\u7279\u5B9A\u8981\u7D20\u304C\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u7279\u5B9A\u4F4D\u7F6E\u306B\u6765\u308B\u3053\u3068\u3092\u30C8\u30EA\u30AC\u30FC\u3068\u3057\u3066\u30B9\u30E9\u30A4\u30C9\u30A4\u30F3\u3059\u308B")])),[[n]]),ct((Ge(),qe("li",null,[Ve(" \u4ECA\u56DE\u306F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306Eprops\u3068\u3057\u3066\u5B9A\u7FA9\u3057\u305F "),We("ul",null,[We("li",null,[it(hi,{type:"javascript"},{default:dt(()=>[Ve("startX")]),_:1}),Ve("\u3082\u3057\u304F\u306F"),it(hi,{type:"javascript"},{default:dt(()=>[Ve("startY")]),_:1}),Ve("\u306E\u72EC\u81EAprops\u3092\u6307\u5B9A\u3059\u308B\u3068\u305D\u306E\u4F4D\u7F6E\u304B\u3089\u30B9\u30E9\u30A4\u30C9\u3057\u3066\u3044\u308B\u3088\u3046\u306B\u898B\u3048\u308B")]),We("li",null,[Ve("\u3053\u306E\u30AB\u30FC\u30C9\u306F "),it(hi,{type:"javascript"},{default:dt(()=>[Ve('start-x="-200"')]),_:1}),Ve("\u3092\u6307\u5B9A\u3057\u3066\u3044\u308B")])])])),[[n]])])]),_:1}),ct((Ge(),Vf(Ei,null,{default:dt(()=>[M2,it(hi,{type:"javascript",caption:"\u307C\u304B\u3059\u30A8\u30D5\u30A7\u30AF\u30C8\u306E\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5185\u306Egsap\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u8A18\u8FF0\u90E8\u5206"},{default:dt(()=>[S2]),_:1}),We("ul",null,[ct((Ge(),qe("li",null,[Ve("\u30B9\u30AF\u30ED\u30FC\u30EB\u306E\u969B\u3001\u7279\u5B9A\u8981\u7D20\u304C\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u7279\u5B9A\u4F4D\u7F6E\u306B\u6765\u308B\u3053\u3068\u3092\u30C8\u30EA\u30AC\u30FC\u3068\u3057\u3066\u307C\u304B\u3057\u3092\u5165\u308C\u308B")])),[[n]]),ct((Ge(),qe("li",null,[it(hi,{type:"javascript"},{default:dt(()=>[Ve("scrub: true;")]),_:1}),Ve("\u3068\u3059\u308B\u3053\u3068\u3067\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u4F4D\u7F6E\u3068\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u9032\u884C\u91CF\u3092\u3042\u308F\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u308B(\u304A\u3082\u3057\u308D\u3044\u3044\u3044\u3044)")])),[[n]]),ct((Ge(),qe("li",null,[Ve("\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u4E0A\u7AEF\u4E0B\u7AEF\u306B\u6301\u3063\u3066\u304F\u3068\u6319\u52D5\u304C\u78BA\u8A8D\u3067\u304D\u308B")])),[[n]]),ct((Ge(),qe("li",null,[Ve("\u4ECA\u56DE\u306FVue.js\u306E\u7DF4\u7FD2\u3082\u517C\u306D\u3066\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3068\u3057\u3066blur\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u5B9A\u7FA9\u3057\u305F(\u8A73\u7D30\u306F\u5F8C\u8FF0)")])),[[n]])])]),_:1})),[[i]]),it(Ei,{style:{"mix-blend-mode":"exclusion"}},{default:dt(()=>[w2,it(hi,{type:"javascript",caption:"\u80CC\u666F\u3092\u57CB\u3081\u308B\u30A8\u30D5\u30A7\u30AF\u30C8\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u306Egsap\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u8A18\u8FF0\u90E8\u5206"},{default:dt(()=>[T2]),_:1}),We("ul",null,[ct((Ge(),qe("li",null,[Ve("\u30B9\u30AF\u30ED\u30FC\u30EB\u306E\u969B\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u308B\u8981\u7D20\u3068\u30C8\u30EA\u30AC\u30FC\u3055\u305B\u308B\u8981\u7D20\u3092\u5225\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B")])),[[n]]),ct((Ge(),qe("li",null,[Ve("\u4ECA\u56DE\u306F\u3001\u3053\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u5165\u3063\u305F\u3089\u3001\u80CC\u666F\u306E"),it(hi,null,{default:dt(()=>[Ve(".expandBall")]),_:1}),Ve("\u3092\u5E83\u3052\u308B\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3066\u307F\u305F")])),[[n]])])]),_:1}),it($v),it(Ei,null,{default:dt(()=>[E2,We("ul",null,[ct((Ge(),qe("li",null,[Ve("\u30B9\u30AF\u30ED\u30FC\u30EB\u3092\u7528\u3044\u3066\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3067\u304D\u308B\u3068\u3044\u3046\u3053\u3068\u306F\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u5BFE\u8C61\u3092\u56FA\u5B9A\u3057\u3066\u6A2A\u306B\u79FB\u52D5\u3059\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u9069\u7528\u3057\u3066\u3042\u3052\u308C\u3070\u3001\u7E26\u30B9\u30AF\u30ED\u30FC\u30EB\u3092\u6A2A\u30B9\u30AF\u30ED\u30FC\u30EB\u306E\u69D8\u306B\u898B\u7ACB\u3066\u308B\u3088\u3046\u306A\u898B\u305B\u65B9\u3082\u3067\u304D\u308B")])),[[n]]),ct((Ge(),qe("li",null,[Ve("\u4EE5\u4E0B\u306F\u300110\u679A\u306E\u30AB\u30FC\u30C9\u3092\u6A2A\u306B\u4E26\u3079\u305F\u30B5\u30F3\u30D7\u30EB\u3002\u7E26\u30B9\u30AF\u30ED\u30FC\u30EB\u306B\u5FDC\u3058\u3066\u6A2A\u306B\u79FB\u52D5\u3059\u308B(\u6A2A\u30B9\u30AF\u30ED\u30FC\u30EB\u3057\u3066\u3044\u308B\u3088\u3046\u306B\u898B\u3048\u308B)")])),[[n]])])]),_:1}),it(l1,null,{default:dt(()=>[(Ge(),qe(_n,null,sx(10,s=>it(i1,{n:s},null,8,["n"])),64))]),_:1})]),We("article",null,[it(Ei,null,{heading:dt(()=>[Ve(" Three.js\u3092\u4F7F\u3063\u3066\u80CC\u666F\u3092\u4F5C\u6210\u3057\u305F ")]),default:dt(()=>[We("ul",null,[ct((Ge(),qe("li",null,[Ve("\u30B7\u30A7\u30FC\u30C0\u30FC\u3092\u3069\u3046\u3057\u3066\u3082\u81EA\u5206\u3067\u4F5C\u6210\u3057\u3066\u307F\u305F\u304F\u3066\u3001\u8272\u3005\u601D\u8003\u932F\u8AA4\u3057\u305F")])),[[n]]),ct((Ge(),qe("li",null,[Ve("\u672C\u5F53\u306FWebGL\u76F4\u63A5\u3044\u3058\u308B\u611F\u3058\u3067\u3084\u308D\u3046\u3068\u601D\u3063\u3066\u305F\u3051\u3069\u3001\u30AB\u30B9\u30BF\u30E0\u30B7\u30A7\u30FC\u30C0\u30FC\u306E\u52C9\u5F37\u306E\u305F\u3081\u306B\u4ED6\u306E\u7B87\u6240\u306FThree.js\u306B\u304A\u307E\u304B\u305B\u3057\u305F\u611F\u3058\u306B\u306A\u3063\u305F\u3002")])),[[n]]),ct((Ge(),qe("li",null,[Ve("GLSL\u307E\u3058\u3067\u3080\u305A\u3044\u3051\u3069\u3001\u899A\u3048\u305F\u3089\u7D76\u5BFE\u697D\u3057\u3044\u306E\u304C\u308F\u304B\u3063\u305F")])),[[n]]),ct((Ge(),qe("li",null,[Ve("\u884C\u5217\u3068\u30D9\u30AF\u30C8\u30EB\u3092\u3061\u3083\u3093\u3068\u52C9\u5F37\u3057\u305F\u3044\u6C17\u6301\u3061\u306B\u306A\u308A\u307E\u304F\u3063\u3066\u3044\u308B\u2026\uFF01\uFF01\uFF01")])),[[n]])])]),_:1})]),it(Xv)],512)],64)}}});const C2=ar(A2,[["__scopeId","data-v-0b4da50a"]]);Dn.registerPlugin(Qe);const D2={mounted:function(r){Dn.to(r,{filter:"blur(10px)",scrollTrigger:{trigger:r,scrub:!0,start:"bottom top+=200",end:"bottom top"}}),Dn.fromTo(r,{filter:"blur(10px)"},{filter:"blur(0px)",scrollTrigger:{trigger:r,scrub:!0,start:"top bottom",end:"top center"}})}},P2=[0,128,256,384,592,688,768,880,1024,1280,1328,1424,1536,1792,1872,1920,1984,2048,2112,2144,2208,2304,2432,2560,2688,2816,2944,3072,3200,3328,3456,3584,3712,3840,4096,4256,4352,4608,4992,5024,5120,5760,5792,5888,5920,5952,5984,6016,6144,6320,6400,6480,6528,6624,6656,6688,6832,6912,7040,7104,7168,7248,7296,7312,7360,7376,7424,7552,7616,7680,7936,8192,8304,8352,8400,8448,8528,8592,8704,8960,9216,9280,9312,9472,9600,9632,9728,9984,10176,10224,10240,10496,10624,10752,11008,11264,11360,11392,11520,11568,11648,11744,11776,11904,12032,12272,12288,12352,12448,12544,12592,12688,12704,12736,12784,12800,13056,13312,19904,19968,40960,42128,42192,42240,42560,42656,42752,42784,43008,43056,43072,43136,43232,43264,43312,43360,43392,43488,43520,43616,43648,43744,43776,43824,43888,43968,44032,55216,55296,56192,56320,57344,63744,64256,64336,65024,65040,65056,65072,65104,65136,65280,65520,65536,65664,65792,65856,65936,66e3,66176,66208,66272,66304,66352,66384,66432,66464,66560,66640,66688,66736,66816,66864,67072,67584,67648,67680,67712,67808,67840,67872,67968,68e3,68096,68192,68224,68288,68352,68416,68448,68480,68608,68736,68864,69216,69248,69376,69424,69552,69600,69632,69760,69840,69888,69968,70016,70112,70144,70272,70320,70400,70656,70784,71040,71168,71264,71296,71424,71680,71840,71936,72096,72192,72272,72384,72704,72816,72960,73056,73440,73648,73664,73728,74752,74880,77824,78896,82944,92160,92736,92880,92928,93760,93952,94176,94208,100352,101120,101632,110592,110848,110896,110960,113664,113824,118784,119040,119296,119520,119552,119648,119808,120832,122880,123136,123584,124928,125184,126064,126208,126464,126976,127024,127136,127232,127488,127744,128512,128592,128640,128768,128896,129024,129280,129536,129648,129792,131072,173824,177984,178208,183984,194560,196608,917504,917760,983040,1048576],L2={"BB2:108120":1800,"UB3:107":271,"UB3:120":-857,"TB2:108108108":-417,"TB4:108108108":285,"UB3:109":-583,"UB4:120":388,"BB3:108108":828,"UB4:108":-853,"BB1:108120":-820,"BB1:108107":502,"UB4:107":-708,"TB1:120120108":358,"TB3:108109109":1341,"UB2:107":-586,"TB1:108120108":-451,"TB3:108108108":257,"BB2:109109":-1876,"UW3:\u306F":2052,"UW3:\u306B":1698,"TB3:108120108":-458,"UW3:\u304C":2048,"UW4:\u3053":1182,"UB5:107":-551,"UW3:\u3068":980,"TB4:109109109":773,"UW4:\u3066":-1453,"TB2:108108107":-152,"UW3:\u3002":3201,"UW4:\u304A":2865,"UW3:\u306E":1203,"BB3:120120":144,"BB3:108120":-369,"UW3:\u304A":-2539,"UW3:\u3057":-613,"UW4:\u3001":-3574,"UW4:\u306E":-1111,"UW3:\u3092":3110,"UW4:\u3002":-3022,"UW3:\u3001":2039,"UW5:\u3067":-1091,"UW4:\u3042":1241,"BB2:108108":-560,"UW4:\u3063":-1412,"UW5:\u3063":625,"UW3:\u3082":1350,"UW5:\u3046":297,"UW3:\u300C":-2404,"UW5:\u306A":-595,"UW4:\u305D":1007,"UW4:\u308B":-1829,"UW3:\u3063":-1662,"UW4:\u300C":3213,"UW4:\u3044":270,"BB2:162162":-911,"UB4:162":178,"UW5:\u306B":-727,"BW3:\u3082\u306E":2716,"UW5:\u3057":-484,"UW6:\u3046":-344,"BW2:\u3068\u3044":929,"UW4:\u306B":-1236,"UW3:\u308B":760,"TB2:120108120":-299,"UW4:\u3067":-419,"UW5:\u304C":-728,"BB1:120120":122,"UW5:\u306F":-704,"UW4:\u306F":-605,"UW4:\u308C":-1507,"UW5:\u304D":545,"BB2:120108":-68,"BB2:120120":-320,"UW3:\u30FB":1498,"BB2:120162":953,"BB2:107108":-323,"TB1:108107108":-575,"UW3:\u308C":-673,"BB2:162108":520,"TB2:162162162":-450,"UW4:\u3089":-1767,"TB1:120120120":-247,"UB2:120":56,"TB1:108108162":231,"UW5:\u3059":-764,"UW5:\u3093":536,"UW3:\u3067":794,"UW4:\u304C":-703,"UW3:\u3053":-566,"TB4:120108108":51,"UW3:\u3089":390,"UW6:\u306B":52,"UW6:\u3002":-182,"UW3:\u305F":466,"TB1:107120120":133,"UW5:\u304F":354,"UB1:109":107,"UW1:\u305D":492,"UW3:\u3046":488,"BW3:\u3068\u3044":-1194,"BW3:\u3068\u3053":1145,"UW3:\u307E":-847,"BW3:\u3053\u3068":812,"UW2:\u3063":151,"UW5:\u30FB":-517,"TB3:108108107":-314,"UW3:\u304D":-553,"UW4:\u3093":-783,"UB3:108":-117,"UW3:\u304F":736,"UW3:\u300D":-88,"UW5:\u3042":-598,"BB2:108162":569,"BW3:\u3044\u3046":606,"UW5:\u308C":287,"UW2:\u4E00":744,"UW3:\uFF0C":1739,"UW1:\u306B":-217,"UW2:\u3068":-219,"TB2:120120108":-144,"TB2:120120120":234,"UW5:\u3092":-649,"UW4:\u308A":-757,"BW1:\u304B\u3089":834,"UW3:\u3061":-819,"BW3:\u3044\u3044":869,"UW2:\u306F":-275,"UW6:\u305F":-267,"TB1:109109108":154,"UW4:\uFF11":653,"UW4:\u3084":594,"UW2:\u3093":255,"UW3:\uFF3D":1018,"UW4:\u307B":1124,"TB3:108162162":284,"BW2:\u3067\u3042":-1624,"UW4:\u3060":-372,"BB3:120108":440,"TB1:162162162":-184,"BW3:\u30FB\u30FB":-1936,"BW3:\u3068\u304D":1318,"UW4:\u3092":-1124,"UW3:\u3066":453,"UW4:\u304B":-92,"UW2:\u305D":-343,"TB4:120120108":175,"TB2:108107120":182,"UW2:\u3092":-886,"UW4:\u3054":930,"UW2:\u3067":-223,"TB3:120120120":-57,"BB1:162162":-113,"UW2:\u3057":103,"UW4:\u51FA":-200,"UW2:\u307E":510,"UW4:\uFF0C":-2099,"UW5:\u3068":-498,"UW4:\u3069":385,"BW3:\u3057\u3066":80,"UW1:\u3067":-156,"BB2:107120":360,"BW3:\u305F\u3081":1289,"BW2:\u3068\u3057":771,"BW2:\u306A\u3044":-1114,"BW2:\u3066\u3044":-399,"UW3:\u9593":870,"UW3:\uFF01":1230,"UW5:\u30FC":79,"UW4:\u3059":472,"UW4:\uFF01":-1596,"BW1:\u3068\u304C":-1092,"UW5:\u306E":-572,"TB4:108108120":55,"TB2:107120120":-151,"UW6:\u30FB":-124,"UW3:\uFF0E":1316,"UW2:\u3066":-248,"UW3:\u7B11":1280,"UW2:\u3053":-125,"UW5:\u3082":-284,"BW3:\u3088\u3046":-1023,"UW3:\u4EBA":862,"UW2:\u306E":84,"UW3:\u304B":417,"UW3:\u65E5":568,"UW1:\u3044":-88,"BW2:\u3068\u3053":-528,"UW4:\u79C1":910,"UW3:\u2026":674,"UW2:\u306B":-212,"UW3:\u4ECA":894,"BB3:162108":-121,"UB3:087":1108,"UW4:\uFF08":762,"BB1:162120":260,"UW1:\u306A":-197,"BB3:109109":91,"UW5:\u6765":-53,"UW3:\uFF1F":1117,"TW3:\u3066\u3044\u308B":-645,"UW4:\u300D":-868,"UW4:\u524D":-611,"BW1:\u3044\u3046":220,"UW4:\u3064":422,"UW3:\uFF09":1431,"BW1:\u3067\u306F":-532,"UW2:\u308B":-157,"UW5:\u305D":-476,"UW4:\u30FC":-846,"TW2:\u6C17\u306B\u5165":-1309,"UW4:\u7B11":-1614,"UW4:\u3072":1225,"TB4:162162162":302,"UW4:\u3051":-738,"UW2:\u3082":-260,"BW3:\u3061\u3087":892,"BW3:\u51FA\u6765":-778,"TB2:108120108":-193,"UW4:\u300E":1221,"UW3:\uFF3B":-779,"UW4:\uFF12":489,"UW5:\u3064":420,"TB1:107120108":-85,"UW3:\uFF11":-525,"BW3:\u304B\u3089":-830,"UB5:120":26,"UW4:\u307E":270,"UW3:\u3070":439,"UW3:\u308A":-120,"BW3:\u305D\u306E":1263,"UW3:\u3054":-795,"UW4:\u308F":291,"BW2:\u3066\u304A":-1310,"TB2:120108108":-23,"BW1:\u306A\u3044":347,"UW2:\u3088":312,"UB2:162":-107,"UW6:\u306E":-114,"UW2:\u6BCE":701,"UW2:\u7D50":830,"TW4:\u306E\u4EAC\u90FD":1309,"UW3:\u3055":-451,"UW2:\u6700":260,"BW2:\u3067\u3059":-1080,"UW2:\u300D":536,"UW5:\u3048":188,"UW3:\u3060":-60,"TW4:\u3068\u3053\u308D":643,"UW4:\uFF0E":-1184,"UB1:108":31,"UW6:\u3066":-194,"UW1:\u304C":-51,"BW2:\u3001\u3068":-514,"UW3:\uFF10":-442,"UW3:\u3093":-120,"UW3:\u4E2D":649,"UW4:\u3088":410,"BW3:\u3053\u306E":882,"UW2:\u304C":-75,"UW3:\u307F":-341,"TW2:\u3067\u306F\u306A":-718,"UW6:\u3068":-128,"UW4:\uFF3B":340,"TW3:\u3001\u3042\u308B":-1245,"BW3:\u3053\u308D":-164,"UW4:\uFF1F":-1052,"UW6:\u3001":70,"UW4:\u96FB":-256,"BB1:108072":279,"UW3:\u5F8C":786,"UW5:\u3044":40,"UW2:\u3001":-177,"UW5:\u3066":97,"BB2:108072":-411,"UW3:\u771F":222,"UW3:\u305D":-89,"UW5:\u3055":-277,"UB5:162":-146,"TW3:\u3068\u3044\u3046":414,"UW3:\u5206":483,"UB6:120":21,"BW3:\u306A\u3063":-339,"UW4:\u308D":-406,"BB2:107107":-360,"TW3:\u3068\u3053\u308D":-450,"UB1:120":-14,"UW1:\u3001":-36,"BW1:\u3068\u304B":513,"UW3:\u306A":252,"UW6:\u308A":54,"UW4:\u9593":-501,"UW3:\u3079":-478,"UW5:\u3079":450,"TB4:108120108":-36,"UW4:\uFF3D":-644,"BW2:\u306B\u306F":-392,"UW5:\u3005":714,"BW1:\u3002\u30FB":643,"BW1:\u305D\u306E":-341,"UW1:\u3059":91,"UW4:\uFF09":-1018,"UW6:\u3063":34,"TB3:109109109":-177,"TB3:108120120":123,"UB5:109":80,"BW1:\u304B\u3082":-695,"UW6:\u308B":-44,"TB4:108109109":-357,"UW3:\u3069":253,"TW3:\u3067\u3042\u308B":-389,"TW4:\u304F\u3089\u3044":613,"BW1:\u6700\u8FD1":515,"BW1:\u3057\u3044":418,"BW1:\u3068\u3082":-396,"BW2:\u3068\u540C":-553,"TW1:\u3068\u3044\u3046":193,"UW2:\u3055":298,"BW2:\u5E2F\u96FB":-334,"TB1:120108108":-57,"BW3:\u305D\u3057":-315,"UW2:\u3002":-77,"UW5:\u304B":33,"UW5:\u3053":88,"BW3:\u306A\u3044":137,"BW1:\u3093\u306A":280,"BW2:\u3067\u304D":-448,"UW4:\uFF13":196,"UW3:\u3051":-136,"TW4:\u3053\u3068\u304C":-295,"BW1:\u3053\u3068":-329,"UB3:162":-92,"UW3:\u96FB":-360,"UW3:\u3088":-132,"BW1:\u305F\u3068":-288,"UW5:\u307E":-45,"UW5:\u305F":-43,"UW5:\u3061":174,"UW2:\u3051":75,"UW5:\u3060":-60,"UW3:\u5EA6":330,"BW1:\u305F\u3044":360,"UW4:\u4F7F":217,"UW2:\u304D":130,"TW4:\u304B\u306A\u308A":473,"UB6:109":-41,"BB1:108108":-23,"UW4:\u8FBC":-340,"TW3:\u3068\u8A00\u3063":-530,"UW6:\u3060":-69,"UW5:\u308A":-71,"UW5:\u3088":-115,"BW3:\u3069\u3046":297,"UW4:\u2026":-240,"UW3:\u3084":229,"BW1:\u304B\u3057":507,"BW3:\u304B\u3063":-348,"UW4:\u4ECA":171,"UW3:\u300E":-320,"UW4:\u601D":239,"UB2:109":16,"UW4:\u304F":-195,"UW3:\u4EAC":-277,"UW6:\u30FC":-41,"UW1:\u3093":69,"BW1:\u3046\u306A":280,"TB2:108107107":-264,"UW1:\u3068":30,"TB4:108109108":249,"TB2:107108108":-97,"BW1:\u3053\u306E":-163,"BW2:\u306E\u3067":-221,"UW4:\u307F":96,"UW5:\u308F":83,"UW6:\u3084":82,"BW1:\u308C\u3066":-218,"UW2:\u3084":-93,"UW6:\u3053":-53,"UW4:\u306A":40,"UW5:\u3081":28,"BW1:\u3082\u3046":285,"TB4:120108120":27,"BW1:\u3088\u308A":283,"UW4:\u5408":-211,"UW6:\u3051":-92,"BW1:\u5C11\u3057":214,"BW2:\u3067\u3057":-225,"UW4:\u3068":-54,"TB1:109109109":53,"UW3:\u30FC":105,"BW2:\u304F\u306A":-198,"UW2:\u304F":-53,"UW2:\u6211":-277,"BW2:\u3044\u3082":198,"BW3:\u308F\u304B":184,"TB2:120109120":-264,"UW4:\u3082":-106,"UW1:\u3042":14,"UW4:\u6700":185,"BW1:\u308B\u306E":-155,"UW2:\u5168":185,"UW6:\uFF10":106,"UW4:\u653E":-119,"UW4:\u4EAC":53,"BW3:\u304B\u3051":208,"UW2:\u5C11":92,"BW3:\u3082\u3046":262,"UW2:\u591A":106,"UW2:\u3046":-52,"TB1:108108072":105,"UW1:\u3092":-25,"UW3:\u5149":-79,"BW1:\uFF01\uFF01":104,"UW2:\u30E3":141,"BW3:\u3059\u3050":129,"UW4:\u5E2F":-114,"UW6:\u3057":26,"BW3:\u3067\u3082":64,"BW2:\u3001\u305D":-113,"TB3:120162162":26,"TB2:109108120":77,"UW3:\u308F":-64,"UB4:109":13,"TB4:120120120":13,"UW5:\u90FD":26,"UW5:\u305A":89,"UW2:\u30D0":115,"UW2:\u4EAC":-49,"UW3:\u3083":89,"BW1:\u3044\u3001":-114,"BW3:\u3088\u304F":51,"BW1:\u305F\u3089":64,"BW2:\u306E\u3088":-64,"UW2:\u601D":-51,"BW1:\u3046\u306B":-38,"BW1:\u306E\u9593":89,"UW6:\u3093":13,"UW6:\u305A":-64,"BW1:\u3063\u305F":13,"TW3:\u308B\u3053\u3068":-48,"BW3:\u3068\u3066":76,"TW1:\u3088\u3046\u306A":63,"UW6:\u3071":62,"TB3:109120108":13,"TW4:\u3063\u3066\u3001":112,"TW4:\u306A\u3093\u3066":-76,"TW2:\u305D\u306E\u5F8C":-50,"UW6:\u3089":-13,"TW4:\u3053\u3068\u306B":-49,"UW3:\uFF1E":63,"TW3:\u3066\u3057\u307E":-50,"UW3:\u3044":13,"TB4:120108107":13,"UW2:\u3072":-50,"UW6:\u3081":24,"UW6:\u3067":-12,"BW3:\u306A\u308B":24,"UW5:\u3054":12,"BW2:\u308A\u3057":24,"UW6:\u96FB":12,"UW1:\u306F":-12,"BW1:\u3044\u3082":-24,"BW3:\u3059\u3054":12,"UW4:\u901A":-12,"BW3:\u304A\u308A":-12,"BW3:\u304B\u304B":12,"BW1:\u601D\u3044":-12};/**
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
 */const F2=r=>new DOMParser().parseFromString(r,"text/html");/**
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
 */const bt=console.assert,R2="\u200B",Dc={ELEMENT_NODE:1,TEXT_NODE:3},$e={Inline:0,Block:1,Skip:2,Break:3},B2={AREA:$e.Skip,BASE:$e.Skip,BASEFONT:$e.Skip,DATALIST:$e.Skip,HEAD:$e.Skip,LINK:$e.Skip,META:$e.Skip,NOEMBED:$e.Skip,NOFRAMES:$e.Skip,PARAM:$e.Skip,RP:$e.Skip,SCRIPT:$e.Skip,STYLE:$e.Skip,TEMPLATE:$e.Skip,TITLE:$e.Skip,NOSCRIPT:$e.Skip,HR:$e.Break,LISTING:$e.Skip,PLAINTEXT:$e.Skip,PRE:$e.Skip,XMP:$e.Skip,BR:$e.Break,RT:$e.Skip,INPUT:$e.Skip,SELECT:$e.Skip,BUTTON:$e.Skip,TEXTAREA:$e.Skip,ABBR:$e.Skip,CODE:$e.Skip,IFRAME:$e.Skip,TIME:$e.Skip,VAR:$e.Skip},I2=new Set(["HTML","BODY","ADDRESS","BLOCKQUOTE","CENTER","DIALOG","DIV","FIGURE","FIGCAPTION","FOOTER","FORM","HEADER","LEGEND","LISTING","MAIN","P","ARTICLE","ASIDE","H1","H2","H3","H4","H5","H6","HGROUP","NAV","SECTION","DIR","DD","DL","DT","MENU","OL","UL","LI","TABLE","CAPTION","COL","TR","TD","TH","FIELDSET","DETAILS","SUMMARY","MARQUEE"]);function U2(r){const e=r.nodeName,t=B2[e];if(t!==void 0)return t;if(typeof getComputedStyle=="function"){const n=getComputedStyle(r);switch(n.whiteSpace){case"nowrap":case"pre":return $e.Skip}const i=n.display;if(i)return i==="inline"?$e.Inline:$e.Block}return I2.has(e)?$e.Block:$e.Inline}class O2{constructor(e){this.textNodes=[],this.element=e}hasText(){return this.textNodes.length>0}}class N2{constructor(e,t){this.separator=R2,this.parser_=e,t!==void 0&&(t.className!==void 0&&(this.className=t.className),t.separator!==void 0&&(this.separator=t.separator))}applyToElement(e){for(const t of this.getBlocks(e))bt(t.hasText()),this.applyToParagraph(t)}*getBlocks(e,t){if(bt(e.nodeType===Dc.ELEMENT_NODE),this.className&&e.classList.contains(this.className))return;const n=U2(e);if(n===$e.Skip)return;if(n===$e.Break){t&&t.hasText()&&(yield t,t.textNodes=[]),bt(!e.firstChild);return}bt(n===$e.Block||n===$e.Inline);const i=!t||n===$e.Block,s=i?new O2(e):t;bt(s);for(const o of e.childNodes)switch(o.nodeType){case Dc.ELEMENT_NODE:for(const a of this.getBlocks(o,s))yield a;break;case Dc.TEXT_NODE:s.textNodes.push(o);break}i&&s.hasText()&&(yield s)}applyToParagraph(e){const t=e.textNodes;bt(t.length>0);const i=t.map(l=>l.nodeValue).join("");if(/^\s*$/.test(i))return;const s=this.parser_.parse(i);if(bt(s.length>0),bt(s.reduce((l,u)=>l+u.length,0)===i.length),s.length<=1)return;const o=[];let a=0;for(const l of s)bt(l.length>0),a+=l.length,o.push(a);bt(o[0]>0),bt(o[o.length-1]===i.length),++o[o.length-1],bt(o.length>1),this.splitTextNodes(t,o),this.applyBlockStyle(e.element)}splitTextNodes(e,t){bt(t.length>0);const n=e.reduce((a,l)=>a+(l.nodeValue?l.nodeValue.length:0),0);bt(t[t.length-1]>n);let i=0,s=t[0];bt(s>0);let o=0;for(const a of e){const l=a.nodeValue;if(!l)continue;const u=o+l.length;if(s>=u){o=u;continue}const c=[];let h=0;for(;s<u;){const f=s-o;bt(f>=h),c.push(l.substring(h,f)),h=f,++i,bt(t[i]>s),s=t[i]}bt(c.length>0),h<l.length&&c.push(l.substring(h)),this.splitTextNode(a,c),o=u}bt(o===n),bt(i<t.length),bt(t[i]>=n)}splitTextNode(e,t){bt(t.length>1),bt(e.nodeValue===t.join(""));const n=this.separator;if(typeof n=="string"){e.nodeValue=t.join(n);return}const i=e.ownerDocument;let s=[];for(const o of t)o&&s.push(i.createTextNode(o)),s.push(null);s.pop(),s=s.map(o=>o||n.cloneNode(!0)),e.replaceWith(...s)}applyBlockStyle(e){if(this.className){e.classList.add(this.className);return}const t=e.style;t.wordBreak="keep-all",t.overflowWrap="break-word"}static defineClassAs(e,t){const n=e.createElement("style");n.textContent=`.${t} { word-break: keep-all; overflow-wrap: break-word; }`,e.head.appendChild(n)}}/**
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
 */const wf=(r,e)=>{const t=Math.floor(r.length/2);return e===r[t]?t+1:e<r[t]?r.length===1?0:wf(r.slice(0,t),e):r.length===1?1:t+wf(r.slice(t),e)},zp=r=>r.reduce((e,t)=>e+t,0),_r="\u2594";/**
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
 */const k2={ELEMENT:1,TEXT:3};class Ci{constructor(e){this.model=e}static getUnicodeBlockFeature(e){if(!e||e===_r)return _r;const t=e.codePointAt(0);return t===void 0?_r:`${wf(P2,t)}`.padStart(3,"0")}static getFeature(e,t,n,i,s,o){const a=Ci.getUnicodeBlockFeature(e),l=Ci.getUnicodeBlockFeature(t),u=Ci.getUnicodeBlockFeature(n),c=Ci.getUnicodeBlockFeature(i),h=Ci.getUnicodeBlockFeature(s),f=Ci.getUnicodeBlockFeature(o),m={UW1:e,UW2:t,UW3:n,UW4:i,UW5:s,UW6:o,BW1:t+n,BW2:n+i,BW3:i+s,TW1:e+t+n,TW2:t+n+i,TW3:n+i+s,TW4:i+s+o,UB1:a,UB2:l,UB3:u,UB4:c,UB5:h,UB6:f,BB1:l+u,BB2:u+c,BB3:c+h,TB1:a+l+u,TB2:l+u+c,TB3:u+c+h,TB4:c+h+f};return Object.entries(m).filter(g=>!g[1].includes(_r)).map(([g,d])=>`${g}:${d}`)}static hasChildTextNode(e){for(const t of e.childNodes)if(t.nodeType===k2.TEXT)return!0;return!1}parse(e){if(e==="")return[];const t=[e[0]],n=-zp([...this.model.values()]);for(let i=1;i<e.length;i++){const s=Ci.getFeature(e[i-3]||_r,e[i-2]||_r,e[i-1],e[i],e[i+1]||_r,e[i+2]||_r);n+2*zp(s.map(a=>this.model.get(a)||0))>0&&t.push(""),t[t.length-1]+=e[i]}return t}applyElement(e){new N2(this,{separator:e.ownerDocument.createElement("wbr")}).applyToElement(e)}translateHTMLString(e){if(e==="")return e;const t=F2(e);if(Ci.hasChildTextNode(t.body)){const n=t.createElement("span");n.append(...t.body.childNodes),t.body.append(n)}return this.applyElement(t.body.childNodes[0]),t.body.innerHTML}}const z2=()=>new Ci(new Map(Object.entries(L2))),W2=z2(),V2={mounted:function(r){r.innerHTML=W2.translateHTMLString(r.innerHTML)}},mh=l3(C2);mh.directive("blur",D2);mh.directive("budoux",V2);mh.mount("#app");
