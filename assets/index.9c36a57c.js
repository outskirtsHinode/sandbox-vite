(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Df(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function iu(r){if(Qe(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=Zt(n)?e_(n):iu(n);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Zt(r))return r;if(Rt(r))return r}}const K0=/;(?![^(]*\))/g,J0=/:([^]+)/,Q0=/\/\*.*?\*\//gs;function e_(r){const e={};return r.replace(Q0,"").split(K0).forEach(t=>{if(t){const n=t.split(J0);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function ru(r){let e="";if(Zt(r))e=r;else if(Qe(r))for(let t=0;t<r.length;t++){const n=ru(r[t]);n&&(e+=n+" ")}else if(Rt(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const t_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",n_=Df(t_);function lm(r){return!!r||r===""}const mt={},oo=[],yi=()=>{},i_=()=>!1,r_=/^on[^a-z]/,su=r=>r_.test(r),Lf=r=>r.startsWith("onUpdate:"),ln=Object.assign,Rf=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},s_=Object.prototype.hasOwnProperty,ot=(r,e)=>s_.call(r,e),Qe=Array.isArray,ta=r=>ou(r)==="[object Map]",o_=r=>ou(r)==="[object Set]",Ke=r=>typeof r=="function",Zt=r=>typeof r=="string",Ff=r=>typeof r=="symbol",Rt=r=>r!==null&&typeof r=="object",um=r=>Rt(r)&&Ke(r.then)&&Ke(r.catch),a_=Object.prototype.toString,ou=r=>a_.call(r),l_=r=>ou(r).slice(8,-1),u_=r=>ou(r)==="[object Object]",If=r=>Zt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,Ml=Df(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),au=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},c_=/-(\w)/g,ki=au(r=>r.replace(c_,(e,t)=>t?t.toUpperCase():"")),f_=/\B([A-Z])/g,Ro=au(r=>r.replace(f_,"-$1").toLowerCase()),lu=au(r=>r.charAt(0).toUpperCase()+r.slice(1)),Du=au(r=>r?`on${lu(r)}`:""),_a=(r,e)=>!Object.is(r,e),Lu=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},Ol=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},cm=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let Lh;const h_=()=>Lh||(Lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let wi;class d_{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=wi,!e&&wi&&(this.index=(wi.scopes||(wi.scopes=[])).push(this)-1)}run(e){if(this.active){const t=wi;try{return wi=this,e()}finally{wi=t}}}on(){wi=this}off(){wi=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function p_(r,e=wi){e&&e.active&&e.effects.push(r)}const Uf=r=>{const e=new Set(r);return e.w=0,e.n=0,e},fm=r=>(r.w&Ir)>0,hm=r=>(r.n&Ir)>0,m_=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=Ir},g_=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];fm(i)&&!hm(i)?i.delete(r):e[t++]=i,i.w&=~Ir,i.n&=~Ir}e.length=t}},Bc=new WeakMap;let Xo=0,Ir=1;const Oc=30;let gi;const hs=Symbol(""),Nc=Symbol("");class Bf{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,p_(this,n)}run(){if(!this.active)return this.fn();let e=gi,t=Cr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=gi,gi=this,Cr=!0,Ir=1<<++Xo,Xo<=Oc?m_(this):Rh(this),this.fn()}finally{Xo<=Oc&&g_(this),Ir=1<<--Xo,gi=this.parent,Cr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gi===this?this.deferStop=!0:this.active&&(Rh(this),this.onStop&&this.onStop(),this.active=!1)}}function Rh(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let Cr=!0;const dm=[];function Fo(){dm.push(Cr),Cr=!1}function Io(){const r=dm.pop();Cr=r===void 0?!0:r}function Hn(r,e,t){if(Cr&&gi){let n=Bc.get(r);n||Bc.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=Uf()),pm(i)}}function pm(r,e){let t=!1;Xo<=Oc?hm(r)||(r.n|=Ir,t=!fm(r)):t=!r.has(gi),t&&(r.add(gi),gi.deps.push(r))}function rr(r,e,t,n,i,s){const a=Bc.get(r);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Qe(r)){const l=cm(n);a.forEach((u,c)=>{(c==="length"||c>=l)&&o.push(u)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Qe(r)?If(t)&&o.push(a.get("length")):(o.push(a.get(hs)),ta(r)&&o.push(a.get(Nc)));break;case"delete":Qe(r)||(o.push(a.get(hs)),ta(r)&&o.push(a.get(Nc)));break;case"set":ta(r)&&o.push(a.get(hs));break}if(o.length===1)o[0]&&kc(o[0]);else{const l=[];for(const u of o)u&&l.push(...u);kc(Uf(l))}}function kc(r,e){const t=Qe(r)?r:[...r];for(const n of t)n.computed&&Fh(n);for(const n of t)n.computed||Fh(n)}function Fh(r,e){(r!==gi||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const __=Df("__proto__,__v_isRef,__isVue"),mm=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(Ff)),x_=Of(),v_=Of(!1,!0),y_=Of(!0),Ih=b_();function b_(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=at(this);for(let s=0,a=this.length;s<a;s++)Hn(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(at)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){Fo();const n=at(this)[e].apply(this,t);return Io(),n}}),r}function Of(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(r?e?O_:ym:e?vm:xm).get(n))return n;const a=Qe(n);if(!r&&a&&ot(Ih,i))return Reflect.get(Ih,i,s);const o=Reflect.get(n,i,s);return(Ff(i)?mm.has(i):__(i))||(r||Hn(n,"get",i),e)?o:rn(o)?a&&If(i)?o:o.value:Rt(o)?r?bm(o):zf(o):o}}const M_=gm(),S_=gm(!0);function gm(r=!1){return function(t,n,i,s){let a=t[n];if(_o(a)&&rn(a)&&!rn(i))return!1;if(!r&&(!Nl(i)&&!_o(i)&&(a=at(a),i=at(i)),!Qe(t)&&rn(a)&&!rn(i)))return a.value=i,!0;const o=Qe(t)&&If(n)?Number(n)<t.length:ot(t,n),l=Reflect.set(t,n,i,s);return t===at(s)&&(o?_a(i,a)&&rr(t,"set",n,i):rr(t,"add",n,i)),l}}function w_(r,e){const t=ot(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&rr(r,"delete",e,void 0),n}function T_(r,e){const t=Reflect.has(r,e);return(!Ff(e)||!mm.has(e))&&Hn(r,"has",e),t}function E_(r){return Hn(r,"iterate",Qe(r)?"length":hs),Reflect.ownKeys(r)}const _m={get:x_,set:M_,deleteProperty:w_,has:T_,ownKeys:E_},A_={get:y_,set(r,e){return!0},deleteProperty(r,e){return!0}},C_=ln({},_m,{get:v_,set:S_}),Nf=r=>r,uu=r=>Reflect.getPrototypeOf(r);function Na(r,e,t=!1,n=!1){r=r.__v_raw;const i=at(r),s=at(e);t||(e!==s&&Hn(i,"get",e),Hn(i,"get",s));const{has:a}=uu(i),o=n?Nf:t?Gf:xa;if(a.call(i,e))return o(r.get(e));if(a.call(i,s))return o(r.get(s));r!==i&&r.get(e)}function ka(r,e=!1){const t=this.__v_raw,n=at(t),i=at(r);return e||(r!==i&&Hn(n,"has",r),Hn(n,"has",i)),r===i?t.has(r):t.has(r)||t.has(i)}function za(r,e=!1){return r=r.__v_raw,!e&&Hn(at(r),"iterate",hs),Reflect.get(r,"size",r)}function Uh(r){r=at(r);const e=at(this);return uu(e).has.call(e,r)||(e.add(r),rr(e,"add",r,r)),this}function Bh(r,e){e=at(e);const t=at(this),{has:n,get:i}=uu(t);let s=n.call(t,r);s||(r=at(r),s=n.call(t,r));const a=i.call(t,r);return t.set(r,e),s?_a(e,a)&&rr(t,"set",r,e):rr(t,"add",r,e),this}function Oh(r){const e=at(this),{has:t,get:n}=uu(e);let i=t.call(e,r);i||(r=at(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&rr(e,"delete",r,void 0),s}function Nh(){const r=at(this),e=r.size!==0,t=r.clear();return e&&rr(r,"clear",void 0,void 0),t}function Wa(r,e){return function(n,i){const s=this,a=s.__v_raw,o=at(a),l=e?Nf:r?Gf:xa;return!r&&Hn(o,"iterate",hs),a.forEach((u,c)=>n.call(i,l(u),l(c),s))}}function Ga(r,e,t){return function(...n){const i=this.__v_raw,s=at(i),a=ta(s),o=r==="entries"||r===Symbol.iterator&&a,l=r==="keys"&&a,u=i[r](...n),c=t?Nf:e?Gf:xa;return!e&&Hn(s,"iterate",l?Nc:hs),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:o?[c(h[0]),c(h[1])]:c(h),done:f}},[Symbol.iterator](){return this}}}}function ur(r){return function(...e){return r==="delete"?!1:this}}function P_(){const r={get(s){return Na(this,s)},get size(){return za(this)},has:ka,add:Uh,set:Bh,delete:Oh,clear:Nh,forEach:Wa(!1,!1)},e={get(s){return Na(this,s,!1,!0)},get size(){return za(this)},has:ka,add:Uh,set:Bh,delete:Oh,clear:Nh,forEach:Wa(!1,!0)},t={get(s){return Na(this,s,!0)},get size(){return za(this,!0)},has(s){return ka.call(this,s,!0)},add:ur("add"),set:ur("set"),delete:ur("delete"),clear:ur("clear"),forEach:Wa(!0,!1)},n={get(s){return Na(this,s,!0,!0)},get size(){return za(this,!0)},has(s){return ka.call(this,s,!0)},add:ur("add"),set:ur("set"),delete:ur("delete"),clear:ur("clear"),forEach:Wa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=Ga(s,!1,!1),t[s]=Ga(s,!0,!1),e[s]=Ga(s,!1,!0),n[s]=Ga(s,!0,!0)}),[r,t,e,n]}const[D_,L_,R_,F_]=P_();function kf(r,e){const t=e?r?F_:R_:r?L_:D_;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(ot(t,i)&&i in n?t:n,i,s)}const I_={get:kf(!1,!1)},U_={get:kf(!1,!0)},B_={get:kf(!0,!1)},xm=new WeakMap,vm=new WeakMap,ym=new WeakMap,O_=new WeakMap;function N_(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function k_(r){return r.__v_skip||!Object.isExtensible(r)?0:N_(l_(r))}function zf(r){return _o(r)?r:Wf(r,!1,_m,I_,xm)}function z_(r){return Wf(r,!1,C_,U_,vm)}function bm(r){return Wf(r,!0,A_,B_,ym)}function Wf(r,e,t,n,i){if(!Rt(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const a=k_(r);if(a===0)return r;const o=new Proxy(r,a===2?n:t);return i.set(r,o),o}function ao(r){return _o(r)?ao(r.__v_raw):!!(r&&r.__v_isReactive)}function _o(r){return!!(r&&r.__v_isReadonly)}function Nl(r){return!!(r&&r.__v_isShallow)}function Mm(r){return ao(r)||_o(r)}function at(r){const e=r&&r.__v_raw;return e?at(e):r}function Sm(r){return Ol(r,"__v_skip",!0),r}const xa=r=>Rt(r)?zf(r):r,Gf=r=>Rt(r)?bm(r):r;function wm(r){Cr&&gi&&(r=at(r),pm(r.dep||(r.dep=Uf())))}function Tm(r,e){r=at(r),r.dep&&kc(r.dep)}function rn(r){return!!(r&&r.__v_isRef===!0)}function nr(r){return W_(r,!1)}function W_(r,e){return rn(r)?r:new G_(r,e)}class G_{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:at(e),this._value=t?e:xa(e)}get value(){return wm(this),this._value}set value(e){const t=this.__v_isShallow||Nl(e)||_o(e);e=t?e:at(e),_a(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:xa(e),Tm(this))}}function V_(r){return rn(r)?r.value:r}const H_={get:(r,e,t)=>V_(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return rn(i)&&!rn(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function Em(r){return ao(r)?r:new Proxy(r,H_)}var Am;class X_{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Am]=!1,this._dirty=!0,this.effect=new Bf(e,()=>{this._dirty||(this._dirty=!0,Tm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=at(this);return wm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Am="__v_isReadonly";function q_(r,e,t=!1){let n,i;const s=Ke(r);return s?(n=r,i=yi):(n=r.get,i=r.set),new X_(n,i,s||!i,t)}function Pr(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){cu(s,e,t)}return i}function oi(r,e,t,n){if(Ke(r)){const s=Pr(r,e,t,n);return s&&um(s)&&s.catch(a=>{cu(a,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(oi(r[s],e,t,n));return i}function cu(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const u=s.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](r,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Pr(l,null,10,[r,a,o]);return}}Y_(r,t,i,n)}function Y_(r,e,t,n=!0){console.error(r)}let va=!1,zc=!1;const tn=[];let Di=0;const lo=[];let ji=null,is=0;const Cm=Promise.resolve();let Vf=null;function $_(r){const e=Vf||Cm;return r?e.then(this?r.bind(this):r):e}function j_(r){let e=Di+1,t=tn.length;for(;e<t;){const n=e+t>>>1;ya(tn[n])<r?e=n+1:t=n}return e}function Hf(r){(!tn.length||!tn.includes(r,va&&r.allowRecurse?Di+1:Di))&&(r.id==null?tn.push(r):tn.splice(j_(r.id),0,r),Pm())}function Pm(){!va&&!zc&&(zc=!0,Vf=Cm.then(Lm))}function Z_(r){const e=tn.indexOf(r);e>Di&&tn.splice(e,1)}function K_(r){Qe(r)?lo.push(...r):(!ji||!ji.includes(r,r.allowRecurse?is+1:is))&&lo.push(r),Pm()}function kh(r,e=va?Di+1:0){for(;e<tn.length;e++){const t=tn[e];t&&t.pre&&(tn.splice(e,1),e--,t())}}function Dm(r){if(lo.length){const e=[...new Set(lo)];if(lo.length=0,ji){ji.push(...e);return}for(ji=e,ji.sort((t,n)=>ya(t)-ya(n)),is=0;is<ji.length;is++)ji[is]();ji=null,is=0}}const ya=r=>r.id==null?1/0:r.id,J_=(r,e)=>{const t=ya(r)-ya(e);if(t===0){if(r.pre&&!e.pre)return-1;if(e.pre&&!r.pre)return 1}return t};function Lm(r){zc=!1,va=!0,tn.sort(J_);const e=yi;try{for(Di=0;Di<tn.length;Di++){const t=tn[Di];t&&t.active!==!1&&Pr(t,null,14)}}finally{Di=0,tn.length=0,Dm(),va=!1,Vf=null,(tn.length||lo.length)&&Lm()}}function Q_(r,e,...t){if(r.isUnmounted)return;const n=r.vnode.props||mt;let i=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in n){const c=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:f}=n[c]||mt;f&&(i=t.map(m=>Zt(m)?m.trim():m)),h&&(i=t.map(cm))}let o,l=n[o=Du(e)]||n[o=Du(ki(e))];!l&&s&&(l=n[o=Du(Ro(e))]),l&&oi(l,r,6,i);const u=n[o+"Once"];if(u){if(!r.emitted)r.emitted={};else if(r.emitted[o])return;r.emitted[o]=!0,oi(u,r,6,i)}}function Rm(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let a={},o=!1;if(!Ke(r)){const l=u=>{const c=Rm(u,e,!0);c&&(o=!0,ln(a,c))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!o?(Rt(r)&&n.set(r,null),null):(Qe(s)?s.forEach(l=>a[l]=null):ln(a,s),Rt(r)&&n.set(r,a),a)}function fu(r,e){return!r||!su(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(r,e[0].toLowerCase()+e.slice(1))||ot(r,Ro(e))||ot(r,e))}let jt=null,hu=null;function kl(r){const e=jt;return jt=r,hu=r&&r.type.__scopeId||null,e}function ex(r){hu=r}function tx(){hu=null}function pt(r,e=jt,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&Zh(-1);const s=kl(e);let a;try{a=r(...i)}finally{kl(s),n._d&&Zh(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function Ru(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:l,emit:u,render:c,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:d}=r;let p,_;const M=kl(r);try{if(t.shapeFlag&4){const b=i||n;p=Ci(c.call(b,b,h,s,m,f,g)),_=l}else{const b=e;p=Ci(b.length>1?b(s,{attrs:l,slots:o,emit:u}):b(s,null)),_=e.props?l:nx(l)}}catch(b){ra.length=0,cu(b,r,1),p=ct(Ui)}let x=p;if(_&&d!==!1){const b=Object.keys(_),{shapeFlag:v}=x;b.length&&v&7&&(a&&b.some(Lf)&&(_=ix(_,a)),x=Ur(x,_))}return t.dirs&&(x=Ur(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),p=x,kl(M),p}const nx=r=>{let e;for(const t in r)(t==="class"||t==="style"||su(t))&&((e||(e={}))[t]=r[t]);return e},ix=(r,e)=>{const t={};for(const n in r)(!Lf(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function rx(r,e,t){const{props:n,children:i,component:s}=r,{props:a,children:o,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?zh(n,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const f=c[h];if(a[f]!==n[f]&&!fu(u,f))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?zh(n,a,u):!0:!!a;return!1}function zh(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!fu(t,s))return!0}return!1}function sx({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const ox=r=>r.__isSuspense;function ax(r,e){e&&e.pendingBranch?Qe(r)?e.effects.push(...r):e.effects.push(r):K_(r)}function lx(r,e){if(Gt){let t=Gt.provides;const n=Gt.parent&&Gt.parent.provides;n===t&&(t=Gt.provides=Object.create(n)),t[r]=e}}function Sl(r,e,t=!1){const n=Gt||jt;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&Ke(e)?e.call(n.proxy):e}}const Va={};function Fu(r,e,t){return Fm(r,e,t)}function Fm(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:a}=mt){const o=Gt;let l,u=!1,c=!1;if(rn(r)?(l=()=>r.value,u=Nl(r)):ao(r)?(l=()=>r,n=!0):Qe(r)?(c=!0,u=r.some(x=>ao(x)||Nl(x)),l=()=>r.map(x=>{if(rn(x))return x.value;if(ao(x))return ls(x);if(Ke(x))return Pr(x,o,2)})):Ke(r)?e?l=()=>Pr(r,o,2):l=()=>{if(!(o&&o.isUnmounted))return h&&h(),oi(r,o,3,[f])}:l=yi,e&&n){const x=l;l=()=>ls(x())}let h,f=x=>{h=_.onStop=()=>{Pr(x,o,4)}},m;if(Ma)if(f=yi,e?t&&oi(e,o,3,[l(),c?[]:void 0,f]):l(),i==="sync"){const x=ov();m=x.__watcherHandles||(x.__watcherHandles=[])}else return yi;let g=c?new Array(r.length).fill(Va):Va;const d=()=>{if(!!_.active)if(e){const x=_.run();(n||u||(c?x.some((b,v)=>_a(b,g[v])):_a(x,g)))&&(h&&h(),oi(e,o,3,[x,g===Va?void 0:c&&g[0]===Va?[]:g,f]),g=x)}else _.run()};d.allowRecurse=!!e;let p;i==="sync"?p=d:i==="post"?p=()=>bn(d,o&&o.suspense):(d.pre=!0,o&&(d.id=o.uid),p=()=>Hf(d));const _=new Bf(l,p);e?t?d():g=_.run():i==="post"?bn(_.run.bind(_),o&&o.suspense):_.run();const M=()=>{_.stop(),o&&o.scope&&Rf(o.scope.effects,_)};return m&&m.push(M),M}function ux(r,e,t){const n=this.proxy,i=Zt(r)?r.includes(".")?Im(n,r):()=>n[r]:r.bind(n,n);let s;Ke(e)?s=e:(s=e.handler,t=e);const a=Gt;xo(this);const o=Fm(i,s.bind(n),t);return a?xo(a):ds(),o}function Im(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function ls(r,e){if(!Rt(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),rn(r))ls(r.value,e);else if(Qe(r))for(let t=0;t<r.length;t++)ls(r[t],e);else if(o_(r)||ta(r))r.forEach(t=>{ls(t,e)});else if(u_(r))for(const t in r)ls(r[t],e);return r}function cx(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lr(()=>{r.isMounted=!0}),Nm(()=>{r.isUnmounting=!0}),r}const $n=[Function,Array],fx={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$n,onEnter:$n,onAfterEnter:$n,onEnterCancelled:$n,onBeforeLeave:$n,onLeave:$n,onAfterLeave:$n,onLeaveCancelled:$n,onBeforeAppear:$n,onAppear:$n,onAfterAppear:$n,onAppearCancelled:$n},setup(r,{slots:e}){const t=Kx(),n=cx();let i;return()=>{const s=e.default&&Bm(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const d of s)if(d.type!==Ui){a=d;break}}const o=at(r),{mode:l}=o;if(n.isLeaving)return Iu(a);const u=Wh(a);if(!u)return Iu(a);const c=Wc(u,o,n,t);Gc(u,c);const h=t.subTree,f=h&&Wh(h);let m=!1;const{getTransitionKey:g}=u.type;if(g){const d=g();i===void 0?i=d:d!==i&&(i=d,m=!0)}if(f&&f.type!==Ui&&(!rs(u,f)||m)){const d=Wc(f,o,n,t);if(Gc(f,d),l==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},Iu(a);l==="in-out"&&u.type!==Ui&&(d.delayLeave=(p,_,M)=>{const x=Um(n,f);x[String(f.key)]=f,p._leaveCb=()=>{_(),p._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=M})}return a}}},hx=fx;function Um(r,e){const{leavingVNodes:t}=r;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Wc(r,e,t,n){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:d,onAppear:p,onAfterAppear:_,onAppearCancelled:M}=e,x=String(r.key),b=Um(t,r),v=(y,w)=>{y&&oi(y,n,9,w)},T=(y,w)=>{const D=w[1];v(y,w),Qe(y)?y.every(O=>O.length<=1)&&D():y.length<=1&&D()},E={mode:s,persisted:a,beforeEnter(y){let w=o;if(!t.isMounted)if(i)w=d||o;else return;y._leaveCb&&y._leaveCb(!0);const D=b[x];D&&rs(r,D)&&D.el._leaveCb&&D.el._leaveCb(),v(w,[y])},enter(y){let w=l,D=u,O=c;if(!t.isMounted)if(i)w=p||l,D=_||u,O=M||c;else return;let Q=!1;const G=y._enterCb=U=>{Q||(Q=!0,U?v(O,[y]):v(D,[y]),E.delayedLeave&&E.delayedLeave(),y._enterCb=void 0)};w?T(w,[y,G]):G()},leave(y,w){const D=String(r.key);if(y._enterCb&&y._enterCb(!0),t.isUnmounting)return w();v(h,[y]);let O=!1;const Q=y._leaveCb=G=>{O||(O=!0,w(),G?v(g,[y]):v(m,[y]),y._leaveCb=void 0,b[D]===r&&delete b[D])};b[D]=r,f?T(f,[y,Q]):Q()},clone(y){return Wc(y,e,t,n)}};return E}function Iu(r){if(du(r))return r=Ur(r),r.children=null,r}function Wh(r){return du(r)?r.children?r.children[0]:void 0:r}function Gc(r,e){r.shapeFlag&6&&r.component?Gc(r.component.subTree,e):r.shapeFlag&128?(r.ssContent.transition=e.clone(r.ssContent),r.ssFallback.transition=e.clone(r.ssFallback)):r.transition=e}function Bm(r,e=!1,t){let n=[],i=0;for(let s=0;s<r.length;s++){let a=r[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Nn?(a.patchFlag&128&&i++,n=n.concat(Bm(a.children,e,o))):(e||a.type!==Ui)&&n.push(o!=null?Ur(a,{key:o}):a)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function zr(r){return Ke(r)?{setup:r,name:r.name}:r}const na=r=>!!r.type.__asyncLoader,du=r=>r.type.__isKeepAlive;function dx(r,e){Om(r,"a",e)}function px(r,e){Om(r,"da",e)}function Om(r,e,t=Gt){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(pu(e,n,t),t){let i=t.parent;for(;i&&i.parent;)du(i.parent.vnode)&&mx(n,e,t,i),i=i.parent}}function mx(r,e,t,n){const i=pu(e,r,n,!0);km(()=>{Rf(n[e],i)},t)}function pu(r,e,t=Gt,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Fo(),xo(t);const o=oi(e,t,r,a);return ds(),Io(),o});return n?i.unshift(s):i.push(s),s}}const ar=r=>(e,t=Gt)=>(!Ma||r==="sp")&&pu(r,(...n)=>e(...n),t),gx=ar("bm"),lr=ar("m"),_x=ar("bu"),xx=ar("u"),Nm=ar("bum"),km=ar("um"),vx=ar("sp"),yx=ar("rtg"),bx=ar("rtc");function Mx(r,e=Gt){pu("ec",r,e)}function Uu(r,e){const t=jt;if(t===null)return r;const n=_u(t)||t.proxy,i=r.dirs||(r.dirs=[]);for(let s=0;s<e.length;s++){let[a,o,l,u=mt]=e[s];a&&(Ke(a)&&(a={mounted:a,updated:a}),a.deep&&ls(o),i.push({dir:a,instance:n,value:o,oldValue:void 0,arg:l,modifiers:u}))}return r}function Xr(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(Fo(),oi(l,t,8,[r.el,o,r,e]),Io())}}const Sx="components",wx="directives",Tx=Symbol();function Gh(r){return Ex(wx,r)}function Ex(r,e,t=!0,n=!1){const i=jt||Gt;if(i){const s=i.type;if(r===Sx){const o=nv(s,!1);if(o&&(o===e||o===ki(e)||o===lu(ki(e))))return s}const a=Vh(i[r]||s[r],e)||Vh(i.appContext[r],e);return!a&&n?s:a}}function Vh(r,e){return r&&(r[e]||r[ki(e)]||r[lu(ki(e))])}function zl(r,e,t={},n,i){if(jt.isCE||jt.parent&&na(jt.parent)&&jt.parent.isCE)return e!=="default"&&(t.name=e),ct("slot",t,n&&n());let s=r[e];s&&s._c&&(s._d=!1),Wn();const a=s&&zm(s(t)),o=$c(Nn,{key:t.key||a&&a.key||`_${e}`},a||(n?n():[]),a&&r._===1?64:-2);return!i&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),s&&s._c&&(s._d=!0),o}function zm(r){return r.some(e=>Zm(e)?!(e.type===Ui||e.type===Nn&&!zm(e.children)):!0)?r:null}const Vc=r=>r?Jm(r)?_u(r)||r.proxy:Vc(r.parent):null,ia=ln(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Vc(r.parent),$root:r=>Vc(r.root),$emit:r=>r.emit,$options:r=>Xf(r),$forceUpdate:r=>r.f||(r.f=()=>Hf(r.update)),$nextTick:r=>r.n||(r.n=$_.bind(r.proxy)),$watch:r=>ux.bind(r)}),Bu=(r,e)=>r!==mt&&!r.__isScriptSetup&&ot(r,e),Ax={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:a,type:o,appContext:l}=r;let u;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Bu(n,e))return a[e]=1,n[e];if(i!==mt&&ot(i,e))return a[e]=2,i[e];if((u=r.propsOptions[0])&&ot(u,e))return a[e]=3,s[e];if(t!==mt&&ot(t,e))return a[e]=4,t[e];Hc&&(a[e]=0)}}const c=ia[e];let h,f;if(c)return e==="$attrs"&&Hn(r,"get",e),c(r);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==mt&&ot(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,ot(f,e))return f[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;return Bu(i,e)?(i[e]=t,!0):n!==mt&&ot(n,e)?(n[e]=t,!0):ot(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},a){let o;return!!t[a]||r!==mt&&ot(r,a)||Bu(e,a)||(o=s[0])&&ot(o,a)||ot(n,a)||ot(ia,a)||ot(i.config.globalProperties,a)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:ot(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};let Hc=!0;function Cx(r){const e=Xf(r),t=r.proxy,n=r.ctx;Hc=!1,e.beforeCreate&&Hh(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:d,deactivated:p,beforeDestroy:_,beforeUnmount:M,destroyed:x,unmounted:b,render:v,renderTracked:T,renderTriggered:E,errorCaptured:y,serverPrefetch:w,expose:D,inheritAttrs:O,components:Q,directives:G,filters:U}=e;if(u&&Px(u,n,null,r.appContext.config.unwrapInjectedRef),a)for(const Z in a){const B=a[Z];Ke(B)&&(n[Z]=B.bind(t))}if(i){const Z=i.call(t,t);Rt(Z)&&(r.data=zf(Z))}if(Hc=!0,s)for(const Z in s){const B=s[Z],ae=Ke(B)?B.bind(t,t):Ke(B.get)?B.get.bind(t,t):yi,F=!Ke(B)&&Ke(B.set)?B.set.bind(t):yi,$=rv({get:ae,set:F});Object.defineProperty(n,Z,{enumerable:!0,configurable:!0,get:()=>$.value,set:X=>$.value=X})}if(o)for(const Z in o)Wm(o[Z],n,t,Z);if(l){const Z=Ke(l)?l.call(t):l;Reflect.ownKeys(Z).forEach(B=>{lx(B,Z[B])})}c&&Hh(c,r,"c");function H(Z,B){Qe(B)?B.forEach(ae=>Z(ae.bind(t))):B&&Z(B.bind(t))}if(H(gx,h),H(lr,f),H(_x,m),H(xx,g),H(dx,d),H(px,p),H(Mx,y),H(bx,T),H(yx,E),H(Nm,M),H(km,b),H(vx,w),Qe(D))if(D.length){const Z=r.exposed||(r.exposed={});D.forEach(B=>{Object.defineProperty(Z,B,{get:()=>t[B],set:ae=>t[B]=ae})})}else r.exposed||(r.exposed={});v&&r.render===yi&&(r.render=v),O!=null&&(r.inheritAttrs=O),Q&&(r.components=Q),G&&(r.directives=G)}function Px(r,e,t=yi,n=!1){Qe(r)&&(r=Xc(r));for(const i in r){const s=r[i];let a;Rt(s)?"default"in s?a=Sl(s.from||i,s.default,!0):a=Sl(s.from||i):a=Sl(s),rn(a)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[i]=a}}function Hh(r,e,t){oi(Qe(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function Wm(r,e,t,n){const i=n.includes(".")?Im(t,n):()=>t[n];if(Zt(r)){const s=e[r];Ke(s)&&Fu(i,s)}else if(Ke(r))Fu(i,r.bind(t));else if(Rt(r))if(Qe(r))r.forEach(s=>Wm(s,e,t,n));else{const s=Ke(r.handler)?r.handler.bind(t):e[r.handler];Ke(s)&&Fu(i,s,r)}}function Xf(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=r.appContext,o=s.get(e);let l;return o?l=o:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(u=>Wl(l,u,a,!0)),Wl(l,e,a)),Rt(e)&&s.set(e,l),l}function Wl(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&Wl(r,s,t,!0),i&&i.forEach(a=>Wl(r,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=Dx[a]||t&&t[a];r[a]=o?o(r[a],e[a]):e[a]}return r}const Dx={data:Xh,props:Jr,emits:Jr,methods:Jr,computed:Jr,beforeCreate:hn,created:hn,beforeMount:hn,mounted:hn,beforeUpdate:hn,updated:hn,beforeDestroy:hn,beforeUnmount:hn,destroyed:hn,unmounted:hn,activated:hn,deactivated:hn,errorCaptured:hn,serverPrefetch:hn,components:Jr,directives:Jr,watch:Rx,provide:Xh,inject:Lx};function Xh(r,e){return e?r?function(){return ln(Ke(r)?r.call(this,this):r,Ke(e)?e.call(this,this):e)}:e:r}function Lx(r,e){return Jr(Xc(r),Xc(e))}function Xc(r){if(Qe(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function hn(r,e){return r?[...new Set([].concat(r,e))]:e}function Jr(r,e){return r?ln(ln(Object.create(null),r),e):e}function Rx(r,e){if(!r)return e;if(!e)return r;const t=ln(Object.create(null),r);for(const n in e)t[n]=hn(r[n],e[n]);return t}function Fx(r,e,t,n=!1){const i={},s={};Ol(s,gu,1),r.propsDefaults=Object.create(null),Gm(r,e,i,s);for(const a in r.propsOptions[0])a in i||(i[a]=void 0);t?r.props=n?i:z_(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function Ix(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:a}}=r,o=at(i),[l]=r.propsOptions;let u=!1;if((n||a>0)&&!(a&16)){if(a&8){const c=r.vnode.dynamicProps;for(let h=0;h<c.length;h++){let f=c[h];if(fu(r.emitsOptions,f))continue;const m=e[f];if(l)if(ot(s,f))m!==s[f]&&(s[f]=m,u=!0);else{const g=ki(f);i[g]=qc(l,o,g,m,r,!1)}else m!==s[f]&&(s[f]=m,u=!0)}}}else{Gm(r,e,i,s)&&(u=!0);let c;for(const h in o)(!e||!ot(e,h)&&((c=Ro(h))===h||!ot(e,c)))&&(l?t&&(t[h]!==void 0||t[c]!==void 0)&&(i[h]=qc(l,o,h,void 0,r,!0)):delete i[h]);if(s!==o)for(const h in s)(!e||!ot(e,h)&&!0)&&(delete s[h],u=!0)}u&&rr(r,"set","$attrs")}function Gm(r,e,t,n){const[i,s]=r.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ml(l))continue;const u=e[l];let c;i&&ot(i,c=ki(l))?!s||!s.includes(c)?t[c]=u:(o||(o={}))[c]=u:fu(r.emitsOptions,l)||(!(l in n)||u!==n[l])&&(n[l]=u,a=!0)}if(s){const l=at(t),u=o||mt;for(let c=0;c<s.length;c++){const h=s[c];t[h]=qc(i,l,h,u[h],r,!ot(u,h))}}return a}function qc(r,e,t,n,i,s){const a=r[t];if(a!=null){const o=ot(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&Ke(l)){const{propsDefaults:u}=i;t in u?n=u[t]:(xo(i),n=u[t]=l.call(null,e),ds())}else n=l}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===Ro(t))&&(n=!0))}return n}function Vm(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,a={},o=[];let l=!1;if(!Ke(r)){const c=h=>{l=!0;const[f,m]=Vm(h,e,!0);ln(a,f),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),r.extends&&c(r.extends),r.mixins&&r.mixins.forEach(c)}if(!s&&!l)return Rt(r)&&n.set(r,oo),oo;if(Qe(s))for(let c=0;c<s.length;c++){const h=ki(s[c]);qh(h)&&(a[h]=mt)}else if(s)for(const c in s){const h=ki(c);if(qh(h)){const f=s[c],m=a[h]=Qe(f)||Ke(f)?{type:f}:Object.assign({},f);if(m){const g=jh(Boolean,m.type),d=jh(String,m.type);m[0]=g>-1,m[1]=d<0||g<d,(g>-1||ot(m,"default"))&&o.push(h)}}}const u=[a,o];return Rt(r)&&n.set(r,u),u}function qh(r){return r[0]!=="$"}function Yh(r){const e=r&&r.toString().match(/^\s*function (\w+)/);return e?e[1]:r===null?"null":""}function $h(r,e){return Yh(r)===Yh(e)}function jh(r,e){return Qe(e)?e.findIndex(t=>$h(t,r)):Ke(e)&&$h(e,r)?0:-1}const Hm=r=>r[0]==="_"||r==="$stable",qf=r=>Qe(r)?r.map(Ci):[Ci(r)],Ux=(r,e,t)=>{if(e._n)return e;const n=pt((...i)=>qf(e(...i)),t);return n._c=!1,n},Xm=(r,e,t)=>{const n=r._ctx;for(const i in r){if(Hm(i))continue;const s=r[i];if(Ke(s))e[i]=Ux(i,s,n);else if(s!=null){const a=qf(s);e[i]=()=>a}}},qm=(r,e)=>{const t=qf(e);r.slots.default=()=>t},Bx=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=at(e),Ol(e,"_",t)):Xm(e,r.slots={})}else r.slots={},e&&qm(r,e);Ol(r.slots,gu,1)},Ox=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,a=mt;if(n.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(ln(i,e),!t&&o===1&&delete i._):(s=!e.$stable,Xm(e,i)),a=e}else e&&(qm(r,e),a={default:1});if(s)for(const o in i)!Hm(o)&&!(o in a)&&delete i[o]};function Ym(){return{app:null,config:{isNativeTag:i_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nx=0;function kx(r,e){return function(n,i=null){Ke(n)||(n=Object.assign({},n)),i!=null&&!Rt(i)&&(i=null);const s=Ym(),a=new Set;let o=!1;const l=s.app={_uid:Nx++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:av,get config(){return s.config},set config(u){},use(u,...c){return a.has(u)||(u&&Ke(u.install)?(a.add(u),u.install(l,...c)):Ke(u)&&(a.add(u),u(l,...c))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,c){return c?(s.components[u]=c,l):s.components[u]},directive(u,c){return c?(s.directives[u]=c,l):s.directives[u]},mount(u,c,h){if(!o){const f=ct(n,i);return f.appContext=s,c&&e?e(f,u):r(f,u,h),o=!0,l._container=u,u.__vue_app__=l,_u(f.component)||f.component.proxy}},unmount(){o&&(r(null,l._container),delete l._container.__vue_app__)},provide(u,c){return s.provides[u]=c,l}};return l}}function Yc(r,e,t,n,i=!1){if(Qe(r)){r.forEach((f,m)=>Yc(f,e&&(Qe(e)?e[m]:e),t,n,i));return}if(na(n)&&!i)return;const s=n.shapeFlag&4?_u(n.component)||n.component.proxy:n.el,a=i?null:s,{i:o,r:l}=r,u=e&&e.r,c=o.refs===mt?o.refs={}:o.refs,h=o.setupState;if(u!=null&&u!==l&&(Zt(u)?(c[u]=null,ot(h,u)&&(h[u]=null)):rn(u)&&(u.value=null)),Ke(l))Pr(l,o,12,[a,c]);else{const f=Zt(l),m=rn(l);if(f||m){const g=()=>{if(r.f){const d=f?ot(h,l)?h[l]:c[l]:l.value;i?Qe(d)&&Rf(d,s):Qe(d)?d.includes(s)||d.push(s):f?(c[l]=[s],ot(h,l)&&(h[l]=c[l])):(l.value=[s],r.k&&(c[r.k]=l.value))}else f?(c[l]=a,ot(h,l)&&(h[l]=a)):m&&(l.value=a,r.k&&(c[r.k]=a))};a?(g.id=-1,bn(g,t)):g()}}}const bn=ax;function zx(r){return Wx(r)}function Wx(r,e){const t=h_();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:f,setScopeId:m=yi,insertStaticContent:g}=r,d=(P,R,j,se=null,ie=null,I=null,de=!1,ne=null,me=!!R.dynamicChildren)=>{if(P===R)return;P&&!rs(P,R)&&(se=Fe(P),X(P,ie,I,!0),P=null),R.patchFlag===-2&&(me=!1,R.dynamicChildren=null);const{type:ue,ref:A,shapeFlag:S}=R;switch(ue){case mu:p(P,R,j,se);break;case Ui:_(P,R,j,se);break;case Ou:P==null&&M(R,j,se,de);break;case Nn:Q(P,R,j,se,ie,I,de,ne,me);break;default:S&1?v(P,R,j,se,ie,I,de,ne,me):S&6?G(P,R,j,se,ie,I,de,ne,me):(S&64||S&128)&&ue.process(P,R,j,se,ie,I,de,ne,me,Re)}A!=null&&ie&&Yc(A,P&&P.ref,I,R||P,!R)},p=(P,R,j,se)=>{if(P==null)n(R.el=o(R.children),j,se);else{const ie=R.el=P.el;R.children!==P.children&&u(ie,R.children)}},_=(P,R,j,se)=>{P==null?n(R.el=l(R.children||""),j,se):R.el=P.el},M=(P,R,j,se)=>{[P.el,P.anchor]=g(P.children,R,j,se,P.el,P.anchor)},x=({el:P,anchor:R},j,se)=>{let ie;for(;P&&P!==R;)ie=f(P),n(P,j,se),P=ie;n(R,j,se)},b=({el:P,anchor:R})=>{let j;for(;P&&P!==R;)j=f(P),i(P),P=j;i(R)},v=(P,R,j,se,ie,I,de,ne,me)=>{de=de||R.type==="svg",P==null?T(R,j,se,ie,I,de,ne,me):w(P,R,ie,I,de,ne,me)},T=(P,R,j,se,ie,I,de,ne)=>{let me,ue;const{type:A,props:S,shapeFlag:z,transition:ee,dirs:te}=P;if(me=P.el=a(P.type,I,S&&S.is,S),z&8?c(me,P.children):z&16&&y(P.children,me,null,se,ie,I&&A!=="foreignObject",de,ne),te&&Xr(P,null,se,"created"),S){for(const _e in S)_e!=="value"&&!Ml(_e)&&s(me,_e,null,S[_e],I,P.children,se,ie,q);"value"in S&&s(me,"value",null,S.value),(ue=S.onVnodeBeforeMount)&&Mi(ue,se,P)}E(me,P,P.scopeId,de,se),te&&Xr(P,null,se,"beforeMount");const fe=(!ie||ie&&!ie.pendingBranch)&&ee&&!ee.persisted;fe&&ee.beforeEnter(me),n(me,R,j),((ue=S&&S.onVnodeMounted)||fe||te)&&bn(()=>{ue&&Mi(ue,se,P),fe&&ee.enter(me),te&&Xr(P,null,se,"mounted")},ie)},E=(P,R,j,se,ie)=>{if(j&&m(P,j),se)for(let I=0;I<se.length;I++)m(P,se[I]);if(ie){let I=ie.subTree;if(R===I){const de=ie.vnode;E(P,de,de.scopeId,de.slotScopeIds,ie.parent)}}},y=(P,R,j,se,ie,I,de,ne,me=0)=>{for(let ue=me;ue<P.length;ue++){const A=P[ue]=ne?vr(P[ue]):Ci(P[ue]);d(null,A,R,j,se,ie,I,de,ne)}},w=(P,R,j,se,ie,I,de)=>{const ne=R.el=P.el;let{patchFlag:me,dynamicChildren:ue,dirs:A}=R;me|=P.patchFlag&16;const S=P.props||mt,z=R.props||mt;let ee;j&&qr(j,!1),(ee=z.onVnodeBeforeUpdate)&&Mi(ee,j,R,P),A&&Xr(R,P,j,"beforeUpdate"),j&&qr(j,!0);const te=ie&&R.type!=="foreignObject";if(ue?D(P.dynamicChildren,ue,ne,j,se,te,I):de||B(P,R,ne,null,j,se,te,I,!1),me>0){if(me&16)O(ne,R,S,z,j,se,ie);else if(me&2&&S.class!==z.class&&s(ne,"class",null,z.class,ie),me&4&&s(ne,"style",S.style,z.style,ie),me&8){const fe=R.dynamicProps;for(let _e=0;_e<fe.length;_e++){const L=fe[_e],k=S[L],xe=z[L];(xe!==k||L==="value")&&s(ne,L,k,xe,ie,P.children,j,se,q)}}me&1&&P.children!==R.children&&c(ne,R.children)}else!de&&ue==null&&O(ne,R,S,z,j,se,ie);((ee=z.onVnodeUpdated)||A)&&bn(()=>{ee&&Mi(ee,j,R,P),A&&Xr(R,P,j,"updated")},se)},D=(P,R,j,se,ie,I,de)=>{for(let ne=0;ne<R.length;ne++){const me=P[ne],ue=R[ne],A=me.el&&(me.type===Nn||!rs(me,ue)||me.shapeFlag&70)?h(me.el):j;d(me,ue,A,null,se,ie,I,de,!0)}},O=(P,R,j,se,ie,I,de)=>{if(j!==se){if(j!==mt)for(const ne in j)!Ml(ne)&&!(ne in se)&&s(P,ne,j[ne],null,de,R.children,ie,I,q);for(const ne in se){if(Ml(ne))continue;const me=se[ne],ue=j[ne];me!==ue&&ne!=="value"&&s(P,ne,ue,me,de,R.children,ie,I,q)}"value"in se&&s(P,"value",j.value,se.value)}},Q=(P,R,j,se,ie,I,de,ne,me)=>{const ue=R.el=P?P.el:o(""),A=R.anchor=P?P.anchor:o("");let{patchFlag:S,dynamicChildren:z,slotScopeIds:ee}=R;ee&&(ne=ne?ne.concat(ee):ee),P==null?(n(ue,j,se),n(A,j,se),y(R.children,j,A,ie,I,de,ne,me)):S>0&&S&64&&z&&P.dynamicChildren?(D(P.dynamicChildren,z,j,ie,I,de,ne),(R.key!=null||ie&&R===ie.subTree)&&$m(P,R,!0)):B(P,R,j,A,ie,I,de,ne,me)},G=(P,R,j,se,ie,I,de,ne,me)=>{R.slotScopeIds=ne,P==null?R.shapeFlag&512?ie.ctx.activate(R,j,se,de,me):U(R,j,se,ie,I,de,me):Y(P,R,me)},U=(P,R,j,se,ie,I,de)=>{const ne=P.component=Zx(P,se,ie);if(du(P)&&(ne.ctx.renderer=Re),Jx(ne),ne.asyncDep){if(ie&&ie.registerDep(ne,H),!P.el){const me=ne.subTree=ct(Ui);_(null,me,R,j)}return}H(ne,P,R,j,ie,I,de)},Y=(P,R,j)=>{const se=R.component=P.component;if(rx(P,R,j))if(se.asyncDep&&!se.asyncResolved){Z(se,R,j);return}else se.next=R,Z_(se.update),se.update();else R.el=P.el,se.vnode=R},H=(P,R,j,se,ie,I,de)=>{const ne=()=>{if(P.isMounted){let{next:A,bu:S,u:z,parent:ee,vnode:te}=P,fe=A,_e;qr(P,!1),A?(A.el=te.el,Z(P,A,de)):A=te,S&&Lu(S),(_e=A.props&&A.props.onVnodeBeforeUpdate)&&Mi(_e,ee,A,te),qr(P,!0);const L=Ru(P),k=P.subTree;P.subTree=L,d(k,L,h(k.el),Fe(k),P,ie,I),A.el=L.el,fe===null&&sx(P,L.el),z&&bn(z,ie),(_e=A.props&&A.props.onVnodeUpdated)&&bn(()=>Mi(_e,ee,A,te),ie)}else{let A;const{el:S,props:z}=R,{bm:ee,m:te,parent:fe}=P,_e=na(R);if(qr(P,!1),ee&&Lu(ee),!_e&&(A=z&&z.onVnodeBeforeMount)&&Mi(A,fe,R),qr(P,!0),S&&ke){const L=()=>{P.subTree=Ru(P),ke(S,P.subTree,P,ie,null)};_e?R.type.__asyncLoader().then(()=>!P.isUnmounted&&L()):L()}else{const L=P.subTree=Ru(P);d(null,L,j,se,P,ie,I),R.el=L.el}if(te&&bn(te,ie),!_e&&(A=z&&z.onVnodeMounted)){const L=R;bn(()=>Mi(A,fe,L),ie)}(R.shapeFlag&256||fe&&na(fe.vnode)&&fe.vnode.shapeFlag&256)&&P.a&&bn(P.a,ie),P.isMounted=!0,R=j=se=null}},me=P.effect=new Bf(ne,()=>Hf(ue),P.scope),ue=P.update=()=>me.run();ue.id=P.uid,qr(P,!0),ue()},Z=(P,R,j)=>{R.component=P;const se=P.vnode.props;P.vnode=R,P.next=null,Ix(P,R.props,se,j),Ox(P,R.children,j),Fo(),kh(),Io()},B=(P,R,j,se,ie,I,de,ne,me=!1)=>{const ue=P&&P.children,A=P?P.shapeFlag:0,S=R.children,{patchFlag:z,shapeFlag:ee}=R;if(z>0){if(z&128){F(ue,S,j,se,ie,I,de,ne,me);return}else if(z&256){ae(ue,S,j,se,ie,I,de,ne,me);return}}ee&8?(A&16&&q(ue,ie,I),S!==ue&&c(j,S)):A&16?ee&16?F(ue,S,j,se,ie,I,de,ne,me):q(ue,ie,I,!0):(A&8&&c(j,""),ee&16&&y(S,j,se,ie,I,de,ne,me))},ae=(P,R,j,se,ie,I,de,ne,me)=>{P=P||oo,R=R||oo;const ue=P.length,A=R.length,S=Math.min(ue,A);let z;for(z=0;z<S;z++){const ee=R[z]=me?vr(R[z]):Ci(R[z]);d(P[z],ee,j,null,ie,I,de,ne,me)}ue>A?q(P,ie,I,!0,!1,S):y(R,j,se,ie,I,de,ne,me,S)},F=(P,R,j,se,ie,I,de,ne,me)=>{let ue=0;const A=R.length;let S=P.length-1,z=A-1;for(;ue<=S&&ue<=z;){const ee=P[ue],te=R[ue]=me?vr(R[ue]):Ci(R[ue]);if(rs(ee,te))d(ee,te,j,null,ie,I,de,ne,me);else break;ue++}for(;ue<=S&&ue<=z;){const ee=P[S],te=R[z]=me?vr(R[z]):Ci(R[z]);if(rs(ee,te))d(ee,te,j,null,ie,I,de,ne,me);else break;S--,z--}if(ue>S){if(ue<=z){const ee=z+1,te=ee<A?R[ee].el:se;for(;ue<=z;)d(null,R[ue]=me?vr(R[ue]):Ci(R[ue]),j,te,ie,I,de,ne,me),ue++}}else if(ue>z)for(;ue<=S;)X(P[ue],ie,I,!0),ue++;else{const ee=ue,te=ue,fe=new Map;for(ue=te;ue<=z;ue++){const Me=R[ue]=me?vr(R[ue]):Ci(R[ue]);Me.key!=null&&fe.set(Me.key,ue)}let _e,L=0;const k=z-te+1;let xe=!1,Te=0;const ye=new Array(k);for(ue=0;ue<k;ue++)ye[ue]=0;for(ue=ee;ue<=S;ue++){const Me=P[ue];if(L>=k){X(Me,ie,I,!0);continue}let we;if(Me.key!=null)we=fe.get(Me.key);else for(_e=te;_e<=z;_e++)if(ye[_e-te]===0&&rs(Me,R[_e])){we=_e;break}we===void 0?X(Me,ie,I,!0):(ye[we-te]=ue+1,we>=Te?Te=we:xe=!0,d(Me,R[we],j,null,ie,I,de,ne,me),L++)}const De=xe?Gx(ye):oo;for(_e=De.length-1,ue=k-1;ue>=0;ue--){const Me=te+ue,we=R[Me],We=Me+1<A?R[Me+1].el:se;ye[ue]===0?d(null,we,j,We,ie,I,de,ne,me):xe&&(_e<0||ue!==De[_e]?$(we,j,We,2):_e--)}}},$=(P,R,j,se,ie=null)=>{const{el:I,type:de,transition:ne,children:me,shapeFlag:ue}=P;if(ue&6){$(P.component.subTree,R,j,se);return}if(ue&128){P.suspense.move(R,j,se);return}if(ue&64){de.move(P,R,j,Re);return}if(de===Nn){n(I,R,j);for(let S=0;S<me.length;S++)$(me[S],R,j,se);n(P.anchor,R,j);return}if(de===Ou){x(P,R,j);return}if(se!==2&&ue&1&&ne)if(se===0)ne.beforeEnter(I),n(I,R,j),bn(()=>ne.enter(I),ie);else{const{leave:S,delayLeave:z,afterLeave:ee}=ne,te=()=>n(I,R,j),fe=()=>{S(I,()=>{te(),ee&&ee()})};z?z(I,te,fe):fe()}else n(I,R,j)},X=(P,R,j,se=!1,ie=!1)=>{const{type:I,props:de,ref:ne,children:me,dynamicChildren:ue,shapeFlag:A,patchFlag:S,dirs:z}=P;if(ne!=null&&Yc(ne,null,j,P,!0),A&256){R.ctx.deactivate(P);return}const ee=A&1&&z,te=!na(P);let fe;if(te&&(fe=de&&de.onVnodeBeforeUnmount)&&Mi(fe,R,P),A&6)ge(P.component,j,se);else{if(A&128){P.suspense.unmount(j,se);return}ee&&Xr(P,null,R,"beforeUnmount"),A&64?P.type.remove(P,R,j,ie,Re,se):ue&&(I!==Nn||S>0&&S&64)?q(ue,R,j,!1,!0):(I===Nn&&S&384||!ie&&A&16)&&q(me,R,j),se&&he(P)}(te&&(fe=de&&de.onVnodeUnmounted)||ee)&&bn(()=>{fe&&Mi(fe,R,P),ee&&Xr(P,null,R,"unmounted")},j)},he=P=>{const{type:R,el:j,anchor:se,transition:ie}=P;if(R===Nn){ce(j,se);return}if(R===Ou){b(P);return}const I=()=>{i(j),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(P.shapeFlag&1&&ie&&!ie.persisted){const{leave:de,delayLeave:ne}=ie,me=()=>de(j,I);ne?ne(P.el,I,me):me()}else I()},ce=(P,R)=>{let j;for(;P!==R;)j=f(P),i(P),P=j;i(R)},ge=(P,R,j)=>{const{bum:se,scope:ie,update:I,subTree:de,um:ne}=P;se&&Lu(se),ie.stop(),I&&(I.active=!1,X(de,P,R,j)),ne&&bn(ne,R),bn(()=>{P.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},q=(P,R,j,se=!1,ie=!1,I=0)=>{for(let de=I;de<P.length;de++)X(P[de],R,j,se,ie)},Fe=P=>P.shapeFlag&6?Fe(P.component.subTree):P.shapeFlag&128?P.suspense.next():f(P.anchor||P.el),be=(P,R,j)=>{P==null?R._vnode&&X(R._vnode,null,null,!0):d(R._vnode||null,P,R,null,null,null,j),kh(),Dm(),R._vnode=P},Re={p:d,um:X,m:$,r:he,mt:U,mc:y,pc:B,pbc:D,n:Fe,o:r};let ve,ke;return e&&([ve,ke]=e(Re)),{render:be,hydrate:ve,createApp:kx(be,ve)}}function qr({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function $m(r,e,t=!1){const n=r.children,i=e.children;if(Qe(n)&&Qe(i))for(let s=0;s<n.length;s++){const a=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=vr(i[s]),o.el=a.el),t||$m(a,o)),o.type===mu&&(o.el=a.el)}}function Gx(r){const e=r.slice(),t=[0];let n,i,s,a,o;const l=r.length;for(n=0;n<l;n++){const u=r[n];if(u!==0){if(i=t[t.length-1],r[i]<u){e[n]=i,t.push(n);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,r[t[o]]<u?s=o+1:a=o;u<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Vx=r=>r.__isTeleport,Nn=Symbol(void 0),mu=Symbol(void 0),Ui=Symbol(void 0),Ou=Symbol(void 0),ra=[];let vi=null;function Wn(r=!1){ra.push(vi=r?null:[])}function Hx(){ra.pop(),vi=ra[ra.length-1]||null}let ba=1;function Zh(r){ba+=r}function jm(r){return r.dynamicChildren=ba>0?vi||oo:null,Hx(),ba>0&&vi&&vi.push(r),r}function zi(r,e,t,n,i,s){return jm(Ge(r,e,t,n,i,s,!0))}function $c(r,e,t,n,i){return jm(ct(r,e,t,n,i,!0))}function Zm(r){return r?r.__v_isVNode===!0:!1}function rs(r,e){return r.type===e.type&&r.key===e.key}const gu="__vInternal",Km=({key:r})=>r!=null?r:null,wl=({ref:r,ref_key:e,ref_for:t})=>r!=null?Zt(r)||rn(r)||Ke(r)?{i:jt,r,k:e,f:!!t}:r:null;function Ge(r,e=null,t=null,n=0,i=null,s=r===Nn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&Km(e),ref:e&&wl(e),scopeId:hu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:jt};return o?(Yf(l,t),s&128&&r.normalize(l)):t&&(l.shapeFlag|=Zt(t)?8:16),ba>0&&!a&&vi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&vi.push(l),l}const ct=Xx;function Xx(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===Tx)&&(r=Ui),Zm(r)){const o=Ur(r,e,!0);return t&&Yf(o,t),ba>0&&!s&&vi&&(o.shapeFlag&6?vi[vi.indexOf(r)]=o:vi.push(o)),o.patchFlag|=-2,o}if(iv(r)&&(r=r.__vccOpts),e){e=qx(e);let{class:o,style:l}=e;o&&!Zt(o)&&(e.class=ru(o)),Rt(l)&&(Mm(l)&&!Qe(l)&&(l=ln({},l)),e.style=iu(l))}const a=Zt(r)?1:ox(r)?128:Vx(r)?64:Rt(r)?4:Ke(r)?2:0;return Ge(r,e,t,n,i,a,s,!0)}function qx(r){return r?Mm(r)||gu in r?ln({},r):r:null}function Ur(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:a}=r,o=e?Yx(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:o,key:o&&Km(o),ref:e&&e.ref?t&&i?Qe(i)?i.concat(wl(e)):[i,wl(e)]:wl(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:a,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==Nn?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Ur(r.ssContent),ssFallback:r.ssFallback&&Ur(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx}}function Kn(r=" ",e=0){return ct(mu,null,r,e)}function Ci(r){return r==null||typeof r=="boolean"?ct(Ui):Qe(r)?ct(Nn,null,r.slice()):typeof r=="object"?vr(r):ct(mu,null,String(r))}function vr(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:Ur(r)}function Yf(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(Qe(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Yf(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(gu in e)?e._ctx=jt:i===3&&jt&&(jt.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else Ke(e)?(e={default:e,_ctx:jt},t=32):(e=String(e),n&64?(t=16,e=[Kn(e)]):t=8);r.children=e,r.shapeFlag|=t}function Yx(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=ru([e.class,n.class]));else if(i==="style")e.style=iu([e.style,n.style]);else if(su(i)){const s=e[i],a=n[i];a&&s!==a&&!(Qe(s)&&s.includes(a))&&(e[i]=s?[].concat(s,a):a)}else i!==""&&(e[i]=n[i])}return e}function Mi(r,e,t,n=null){oi(r,e,7,[t,n])}const $x=Ym();let jx=0;function Zx(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||$x,s={uid:jx++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new d_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vm(n,i),emitsOptions:Rm(n,i),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:n.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Q_.bind(null,s),r.ce&&r.ce(s),s}let Gt=null;const Kx=()=>Gt||jt,xo=r=>{Gt=r,r.scope.on()},ds=()=>{Gt&&Gt.scope.off(),Gt=null};function Jm(r){return r.vnode.shapeFlag&4}let Ma=!1;function Jx(r,e=!1){Ma=e;const{props:t,children:n}=r.vnode,i=Jm(r);Fx(r,t,i,e),Bx(r,n);const s=i?Qx(r,e):void 0;return Ma=!1,s}function Qx(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=Sm(new Proxy(r.ctx,Ax));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?tv(r):null;xo(r),Fo();const s=Pr(n,r,0,[r.props,i]);if(Io(),ds(),um(s)){if(s.then(ds,ds),e)return s.then(a=>{Kh(r,a,e)}).catch(a=>{cu(a,r,0)});r.asyncDep=s}else Kh(r,s,e)}else Qm(r,e)}function Kh(r,e,t){Ke(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:Rt(e)&&(r.setupState=Em(e)),Qm(r,t)}let Jh;function Qm(r,e,t){const n=r.type;if(!r.render){if(!e&&Jh&&!n.render){const i=n.template||Xf(r).template;if(i){const{isCustomElement:s,compilerOptions:a}=r.appContext.config,{delimiters:o,compilerOptions:l}=n,u=ln(ln({isCustomElement:s,delimiters:o},a),l);n.render=Jh(i,u)}}r.render=n.render||yi}xo(r),Fo(),Cx(r),Io(),ds()}function ev(r){return new Proxy(r.attrs,{get(e,t){return Hn(r,"get","$attrs"),e[t]}})}function tv(r){const e=n=>{r.exposed=n||{}};let t;return{get attrs(){return t||(t=ev(r))},slots:r.slots,emit:r.emit,expose:e}}function _u(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(Em(Sm(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in ia)return ia[t](r)},has(e,t){return t in e||t in ia}}))}function nv(r,e=!0){return Ke(r)?r.displayName||r.name:r.name||e&&r.__name}function iv(r){return Ke(r)&&"__vccOpts"in r}const rv=(r,e)=>q_(r,e,Ma),sv=Symbol(""),ov=()=>Sl(sv),av="3.2.45",lv="http://www.w3.org/2000/svg",ss=typeof document<"u"?document:null,Qh=ss&&ss.createElement("template"),uv={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?ss.createElementNS(lv,r):ss.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>ss.createTextNode(r),createComment:r=>ss.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>ss.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,n,i,s){const a=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Qh.innerHTML=n?`<svg>${r}</svg>`:r;const o=Qh.content;if(n){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function cv(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function fv(r,e,t){const n=r.style,i=Zt(t);if(t&&!i){for(const s in t)jc(n,s,t[s]);if(e&&!Zt(e))for(const s in e)t[s]==null&&jc(n,s,"")}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const ed=/\s*!important$/;function jc(r,e,t){if(Qe(t))t.forEach(n=>jc(r,e,n));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const n=hv(r,e);ed.test(t)?r.setProperty(Ro(n),t.replace(ed,""),"important"):r[n]=t}}const td=["Webkit","Moz","ms"],Nu={};function hv(r,e){const t=Nu[e];if(t)return t;let n=ki(e);if(n!=="filter"&&n in r)return Nu[e]=n;n=lu(n);for(let i=0;i<td.length;i++){const s=td[i]+n;if(s in r)return Nu[e]=s}return e}const nd="http://www.w3.org/1999/xlink";function dv(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(nd,e.slice(6,e.length)):r.setAttributeNS(nd,e,t);else{const s=n_(e);t==null||s&&!lm(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function pv(r,e,t,n,i,s,a){if(e==="innerHTML"||e==="textContent"){n&&a(n,i,s),r[e]=t==null?"":t;return}if(e==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=t;const l=t==null?"":t;(r.value!==l||r.tagName==="OPTION")&&(r.value=l),t==null&&r.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof r[e];l==="boolean"?t=lm(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{r[e]=t}catch{}o&&r.removeAttribute(e)}function mv(r,e,t,n){r.addEventListener(e,t,n)}function gv(r,e,t,n){r.removeEventListener(e,t,n)}function _v(r,e,t,n,i=null){const s=r._vei||(r._vei={}),a=s[e];if(n&&a)a.value=n;else{const[o,l]=xv(e);if(n){const u=s[e]=bv(n,i);mv(r,o,u,l)}else a&&(gv(r,o,a,l),s[e]=void 0)}}const id=/(?:Once|Passive|Capture)$/;function xv(r){let e;if(id.test(r)){e={};let n;for(;n=r.match(id);)r=r.slice(0,r.length-n[0].length),e[n[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):Ro(r.slice(2)),e]}let ku=0;const vv=Promise.resolve(),yv=()=>ku||(vv.then(()=>ku=0),ku=Date.now());function bv(r,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;oi(Mv(n,t.value),e,5,[n])};return t.value=r,t.attached=yv(),t}function Mv(r,e){if(Qe(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const rd=/^on[a-z]/,Sv=(r,e,t,n,i=!1,s,a,o,l)=>{e==="class"?cv(r,n,i):e==="style"?fv(r,t,n):su(e)?Lf(e)||_v(r,e,t,n,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wv(r,e,n,i))?pv(r,e,n,s,a,o,l):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),dv(r,e,n,i))};function wv(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&rd.test(e)&&Ke(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||rd.test(e)&&Zt(t)?!1:e in r}const Tv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};hx.props;const Ev=ln({patchProp:Sv},uv);let sd;function Av(){return sd||(sd=zx(Ev))}const Cv=(...r)=>{const e=Av().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=Pv(n);if(!i)return;const s=e._component;!Ke(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function Pv(r){return Zt(r)?document.querySelector(r):r}const $f="/sandbox-vite/assets/first-view.96e5939b.mov";function Zi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function eg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vo={duration:.5,overwrite:!1,delay:0},jf,wn,Dt,ii=1e8,ft=1/ii,Zc=Math.PI*2,Dv=Zc/4,Lv=0,tg=Math.sqrt,Rv=Math.cos,Fv=Math.sin,Ht=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},sr=function(e){return typeof e=="number"},Zf=function(e){return typeof e>"u"},Wi=function(e){return typeof e=="object"},Tn=function(e){return e!==!1},ng=function(){return typeof window<"u"},Ha=function(e){return Tt(e)||Ht(e)},ig=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,Kc=/(?:-?\.?\d|\.)+/gi,rg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,to=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,zu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sg=/[+-]=-?[.\d]+/,og=/[^,'"\[\]\s]+/gi,Iv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,Qn,Jc,Kf,Xn={},Gl={},ag,lg=function(e){return(Gl=Ms(e,Xn))&&qn},Jf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Vl=function(e,t){return!t&&console.warn(e)},ug=function(e,t){return e&&(Xn[e]=t)&&Gl&&(Gl[e]=t)||Xn},Sa=function(){return 0},Uv={suppressEvents:!0,isStart:!0,kill:!1},Tl={suppressEvents:!0,kill:!1},Bv={suppressEvents:!0},Qf={},Dr=[],Qc={},cg,On={},Wu={},od=30,El=[],eh="",th=function(e){var t=e[0],n,i;if(Wi(t)||Tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=El.length;i--&&!El[i].targetTest(t););n=El[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Rg(e[i],n)))||e.splice(i,1);return e},ps=function(e){return e._gsap||th(ri(e))[0]._gsap},fg=function(e,t,n){return(n=e[t])&&Tt(n)?e[t]():Zf(n)&&e.getAttribute&&e.getAttribute(t)||n},En=function(e,t){return(e=e.split(",")).forEach(t)||e},Ct=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},uo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ov=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Hl=function(){var e=Dr.length,t=Dr.slice(0),n,i;for(Qc={},Dr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},hg=function(e,t,n,i){Dr.length&&Hl(),e.render(t,n,i||wn&&t<0&&(e._initted||e._startAt)),Dr.length&&Hl()},dg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(og).length<2?t:Ht(e)?e.trim():e},pg=function(e){return e},ui=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Nv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ms=function(e,t){for(var n in t)e[n]=t[n];return e},ad=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Xl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},sa=function(e){var t=e.parent||yt,n=e.keyframes?Nv(on(e.keyframes)):ui;if(Tn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},kv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},mg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},xu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Br=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ms=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ef=function(e,t,n,i){return e._startAt&&(wn?e._startAt.revert(Tl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Wv=function r(e){return!e||e._ts&&r(e.parent)},ld=function(e){return e._repeat?yo(e._tTime,e=e.duration()+e._rDelay)*e:0},yo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ql=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vu=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},yu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=$t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vu(e),n._dirty||ms(n,e)),e},gg=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=ql(e.rawTime(),t),(!t._dur||Ra(0,t.totalDuration(),n)-t._tTime>ft)&&t.render(n,!0)),ms(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ft}},Li=function(e,t,n,i){return t.parent&&Br(t),t._start=$t((sr(n)?n:n||e!==yt?Jn(e,n,t):e._time)+t._delay),t._end=$t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mg(e,t,"_first","_last",e._sort?"_start":0),tf(t)||(e._recent=t),i||gg(e,t),e._ts<0&&yu(e,e._tTime),e},_g=function(e,t){return(Xn.ScrollTrigger||Jf("scrollTrigger",t))&&Xn.ScrollTrigger.create(t,e)},xg=function(e,t,n,i,s){if(ih(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!wn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&cg!==kn.frame)return Dr.push(e),e._lazy=[s,i],1},Gv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},tf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Vv=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Gv(e)&&!(!e._initted&&tf(e))||(e._ts<0||e._dp._ts<0)&&!tf(e))?0:1,o=e._rDelay,l=0,u,c,h;if(o&&e._repeat&&(l=Ra(0,e._tDur,t),c=yo(l,o),e._yoyo&&c&1&&(a=1-a),c!==yo(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||wn||i||e._zTime===ft||!t&&e._zTime){if(!e._initted&&xg(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?ft:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&ef(e,t,n,!0),e._onUpdate&&!n&&si(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Br(e,1),!n&&!wn&&(si(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Hv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},bo=function(e,t,n,i){var s=e._repeat,a=$t(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:$t(a*(s+1)+e._rDelay*s):a,o>0&&!i&&yu(e,e._tTime=e._tDur*o),e.parent&&vu(e),n||ms(e.parent,e),e},ud=function(e){return e instanceof Sn?ms(e):bo(e,e._dur)},Xv={_start:0,endTime:Sa,totalDuration:Sa},Jn=function r(e,t,n){var i=e.labels,s=e._recent||Xv,a=e.duration()>=ii?s.endTime(!1):e._dur,o,l,u;return Ht(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&n&&(l=l/100*(on(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},oa=function(e,t,n){var i=sr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;a.immediateRender=Tn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new It(t[0],a,t[s+1])},Wr=function(e,t){return e||e===0?t(e):t},Ra=function(e,t,n){return n<e?e:n>t?t:n},nn=function(e,t){return!Ht(e)||!(t=Iv.exec(e))?"":t[1]},qv=function(e,t,n){return Wr(n,function(i){return Ra(e,t,i)})},nf=[].slice,vg=function(e,t){return e&&Wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wi(e[0]))&&!e.nodeType&&e!==Qn},Yv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ht(i)&&!t||vg(i,1)?(s=n).push.apply(s,ri(i)):n.push(i)})||n},ri=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):Ht(e)&&!n&&(Jc||!Mo())?nf.call((t||Kf).querySelectorAll(e),0):on(e)?Yv(e,n):vg(e)?nf.call(e,0):e?[e]:[]},rf=function(e){return e=ri(e)[0]||Vl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ri(t,n.querySelectorAll?n:n===e?Vl("Invalid scope")||Kf.createElement("div"):e)}},yg=function(e){return e.sort(function(){return .5-Math.random()})},bg=function(e){if(Tt(e))return e;var t=Wi(e)?e:{each:e},n=gs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,u=t.axis,c=i,h=i;return Ht(i)?c=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(c=i[0],h=i[1]),function(f,m,g){var d=(g||t).length,p=a[d],_,M,x,b,v,T,E,y,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,ii])[1],!w){for(E=-ii;E<(E=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(p=a[d]=[],_=l?Math.min(w,d)*c-.5:i%w,M=w===ii?0:l?d*h/w-.5:i/w|0,E=0,y=ii,T=0;T<d;T++)x=T%w-_,b=M-(T/w|0),p[T]=v=u?Math.abs(u==="y"?b:x):tg(x*x+b*b),v>E&&(E=v),v<y&&(y=v);i==="random"&&yg(p),p.max=E-y,p.min=y,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:u?u==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),p.b=d<0?s-d:s,p.u=nn(t.amount||t.each)||0,n=n&&d<0?Pg(n):n}return d=(p[f]-p.min)/p.max||0,$t(p.b+(n?n(d):d)*p.v)+p.u}},sf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=$t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(sr(n)?0:nn(n))}},Mg=function(e,t){var n=on(e),i,s;return!n&&Wi(e)&&(i=n=e.radius||ii,e.values?(e=ri(e.values),(s=!sr(e[0]))&&(i*=i)):e=sf(e.increment)),Wr(t,n?Tt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),u=ii,c=0,h=e.length,f,m;h--;)s?(f=e[h].x-o,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-o),f<u&&(u=f,c=h);return c=!i||u<=i?e[c]:a,s||c===a||sr(a)?c:c+nn(a)}:sf(e))},Sg=function(e,t,n,i){return Wr(on(e)?!t:n===!0?!!(n=0):!i,function(){return on(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},$v=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},jv=function(e,t){return function(n){return e(parseFloat(n))+(t||nn(n))}},Zv=function(e,t,n){return Tg(e,t,0,1,n)},wg=function(e,t,n){return Wr(n,function(i){return e[~~t(i)]})},Kv=function r(e,t,n){var i=t-e;return on(e)?wg(e,r(0,e.length),t):Wr(n,function(s){return(i+(s-e)%i)%i+e})},Jv=function r(e,t,n){var i=t-e,s=i*2;return on(e)?wg(e,r(0,e.length-1),t):Wr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},wa=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?og:Kc),n+=e.substr(t,i-t)+Sg(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Tg=function(e,t,n,i,s){var a=t-e,o=i-n;return Wr(s,function(l){return n+((l-e)/a*o||0)})},Qv=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var a=Ht(e),o={},l,u,c,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(on(e)&&!on(t)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(r(e[u-1],e[u]));h--,s=function(g){g*=h;var d=Math.min(f,~~g);return c[d](g-d)},n=t}else i||(e=Ms(on(e)?[]:{},e));if(!c){for(l in t)nh.call(o,e,l,"get",t[l]);s=function(g){return oh(g,o)||(a?e.p:e)}}}return Wr(n,s)},cd=function(e,t,n){var i=e.labels,s=ii,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},si=function(e,t,n){var i=e.vars,s=i[t],a=Dt,o=e._ctx,l,u,c;if(!!s)return l=i[t+"Params"],u=i.callbackScope||e,n&&Dr.length&&Hl(),o&&(Dt=o),c=l?s.apply(u,l):s.call(u),Dt=a,c},qo=function(e){return Br(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wn),e.progress()<1&&si(e,"onInterrupt"),e},no,e1=function(e){e=!e.name&&e.default||e;var t=e.name,n=Tt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Sa,render:oh,add:nh,kill:g1,modifier:m1,rawVars:0},a={targetTest:0,get:0,getSetter:sh,aliases:{},register:0};if(Mo(),e!==i){if(On[t])return;ui(i,ui(Xl(e,s),a)),Ms(i.prototype,Ms(s,Xl(e,a))),On[i.prop=t]=i,e.targetTest&&(El.push(i),Qf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ug(t,i),e.register&&e.register(qn,i,An)},ht=255,Yo={aqua:[0,ht,ht],lime:[0,ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ht],navy:[0,0,128],white:[ht,ht,ht],olive:[128,128,0],yellow:[ht,ht,0],orange:[ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ht,0,0],pink:[ht,192,203],cyan:[0,ht,ht],transparent:[ht,ht,ht,0]},Gu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ht+.5|0},Eg=function(e,t,n){var i=e?sr(e)?[e>>16,e>>8&ht,e&ht]:0:Yo.black,s,a,o,l,u,c,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Yo[e])i=Yo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ht,i&ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ht,e&ht]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Kc),!t)l=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,a=c<=.5?c*(u+1):c+u-c*u,s=c*2-a,i.length>3&&(i[3]*=1),i[0]=Gu(l+1/3,s,a),i[1]=Gu(l,s,a),i[2]=Gu(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(rg),n&&i.length<4&&(i[3]=1),i}else i=e.match(Kc)||Yo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/ht,a=i[1]/ht,o=i[2]/ht,h=Math.max(s,a,o),f=Math.min(s,a,o),c=(h+f)/2,h===f?l=u=0:(m=h-f,u=c>.5?m/(2-h-f):m/(h+f),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},Ag=function(e){var t=[],n=[],i=-1;return e.split(Lr).forEach(function(s){var a=s.match(to)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},fd=function(e,t,n){var i="",s=(e+i).match(Lr),a=t?"hsla(":"rgba(",o=0,l,u,c,h;if(!s)return e;if(s=s.map(function(f){return(f=Eg(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(c=Ag(e),l=n.c,l.join(i)!==c.c.join(i)))for(u=e.replace(Lr,"1").split(to),h=u.length-1;o<h;o++)i+=u[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:n).shift());if(!u)for(u=e.split(Lr),h=u.length-1;o<h;o++)i+=u[o]+s[o];return i+u[h]},Lr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Yo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),t1=/hsl[a]?\(/,Cg=function(e){var t=e.join(" "),n;if(Lr.lastIndex=0,Lr.test(t))return n=t1.test(t),e[1]=fd(e[1],n),e[0]=fd(e[0],n,Ag(e[1])),!0},Ta,kn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,u,c,h,f,m,g=function d(p){var _=r()-i,M=p===!0,x,b,v,T;if(_>e&&(n+=_-t),i+=_,v=i-n,x=v-a,(x>0||M)&&(T=++h.frame,f=v-h.time*1e3,h.time=v=v/1e3,a+=x+(x>=s?4:s-x),b=1),M||(l=u(d)),b)for(m=0;m<o.length;m++)o[m](v,f,T,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){ag&&(!Jc&&ng()&&(Qn=Jc=window,Kf=Qn.document||{},Xn.gsap=qn,(Qn.gsapVersions||(Qn.gsapVersions=[])).push(qn.version),lg(Gl||Qn.GreenSockGlobals||!Qn.gsap&&Qn||{}),c=Qn.requestAnimationFrame),l&&h.sleep(),u=c||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Ta=1,g(2))},sleep:function(){(c?Qn.cancelAnimationFrame:clearTimeout)(l),Ta=0,u=Sa},lagSmoothing:function(p,_){e=p||1/ft,t=Math.min(_,e,0)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,_,M){var x=_?function(b,v,T,E){p(b,v,T,E),h.remove(x)}:p;return h.remove(p),o[M?"unshift":"push"](x),Mo(),x},remove:function(p,_){~(_=o.indexOf(p))&&o.splice(_,1)&&m>=_&&m--},_listeners:o},h}(),Mo=function(){return!Ta&&kn.wake()},rt={},n1=/^[\d.\-M][\d.\-,\s]/,i1=/["']/g,r1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,u;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),t[i]=isNaN(u)?u.replace(i1,"").trim():+u,i=l.substr(o+1).trim();return t},s1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},o1=function(e){var t=(e+"").split("("),n=rt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[r1(t[1])]:s1(e).split(",").map(dg)):rt._CE&&n1.test(e)?rt._CE("",e):n},Pg=function(e){return function(t){return 1-e(1-t)}},Dg=function r(e,t){for(var n=e._first,i;n;)n instanceof Sn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},gs=function(e,t){return e&&(Tt(e)?e:rt[e]||o1(e))||t},Ds=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return En(e,function(o){rt[o]=Xn[o]=s,rt[a=o.toLowerCase()]=n;for(var l in s)rt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=rt[o+"."+l]=s[l]}),s},Lg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Vu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Zc*(Math.asin(1/i)||0),o=function(c){return c===1?1:i*Math.pow(2,-10*c)*Fv((c-a)*s)+1},l=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:Lg(o);return s=Zc/s,l.config=function(u,c){return r(e,u,c)},l},Hu=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Lg(n);return i.config=function(s){return r(e,s)},i};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ds(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;Ds("Elastic",Vu("in"),Vu("out"),Vu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Ds("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ds("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Ds("Circ",function(r){return-(tg(1-r*r)-1)});Ds("Sine",function(r){return r===1?1:-Rv(r*Dv)+1});Ds("Back",Hu("in"),Hu("out"),Hu());rt.SteppedEase=rt.steps=Xn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-ft;return function(o){return((i*Ra(0,a,o)|0)+s)*n}}};vo.ease=rt["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return eh+=r+","+r+"Params,"});var Rg=function(e,t){this.id=Lv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:fg,this.set=t?t.getSetter:sh},So=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bo(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Ta||kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,bo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Mo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yu(this,n),!s._dp||s.parent||gg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Li(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ft||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ld(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ld(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?yo(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ql(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ft?0:this._rts,this.totalTime(Ra(-this._delay,this._tDur,i),!0),vu(this),zv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Mo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Li(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ql(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Bv);var i=wn;return wn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ud(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ud(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Jn(this,n),Tn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Tn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ft)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Tt(n)?n:pg,o=function(){var u=i.then;i.then=null,Tt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),s(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){qo(this)},r}();ui(So.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var Sn=function(r){eg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Tn(n.sortChildren),yt&&Li(n.parent||yt,Zi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_g(Zi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return oa(0,arguments,this),this},t.from=function(i,s,a){return oa(1,arguments,this),this},t.fromTo=function(i,s,a,o){return oa(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,sa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new It(i,s,Jn(this,a),1),this},t.call=function(i,s,a){return Li(this,It.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,u,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new It(i,a,Jn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,u,c){return a.runBackwards=1,sa(a).immediateRender=Tn(a.immediateRender),this.staggerTo(i,s,a,o,l,u,c)},t.staggerFromTo=function(i,s,a,o,l,u,c,h){return o.startAt=a,sa(o).immediateRender=Tn(o.immediateRender),this.staggerTo(i,s,o,l,u,c,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:$t(i),h=this._zTime<0!=i<0&&(this._initted||!u),f,m,g,d,p,_,M,x,b,v,T,E;if(this!==yt&&c>l&&i>=0&&(c=l),c!==this._tTime||a||h){if(o!==this._time&&u&&(c+=this._time-o,i+=this._time-o),f=c,b=this._start,x=this._ts,_=!x,h&&(u||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=$t(c%p),c===l?(d=this._repeat,f=u):(d=~~(c/p),d&&d===c/p&&(f=u,d--),f>u&&(f=u)),v=yo(this._tTime,p),!o&&this._tTime&&v!==d&&(v=d),T&&d&1&&(f=u-f,E=1),d!==v&&!this._lock){var y=T&&v&1,w=y===(T&&d&1);if(d<v&&(y=!y),o=y?0:u,this._lock=1,this.render(o||(E?0:$t(d*p)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,w&&(this._lock=2,o=y?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Dg(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Hv(this,$t(o),$t(f)),M&&(c-=f-(f=M._start))),this._tTime=c,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&(si(this,"onStart"),this._tTime!==c))return this;if(f>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,a),f!==this._time||!this._ts&&!_){M=0,g&&(c+=this._zTime=-ft);break}}m=g}else{m=this._last;for(var D=i<0?i:f;m;){if(g=m._prev,(m._act||D<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(D-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(D-m._start)*m._ts,s,a||wn&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!_){M=0,g&&(c+=this._zTime=D?-ft:ft);break}}m=g}}if(M&&!s&&(this.pause(),M.render(f>=o?0:-ft)._zTime=f>=o?1:-1,this._ts))return this._start=b,vu(this),this.render(i,s,a);this._onUpdate&&!s&&si(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Br(this,1),!s&&!(i<0&&!o)&&(c||o||!l)&&(si(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(sr(s)||(s=Jn(this,s,i)),!(i instanceof So)){if(on(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ht(i))return this.addLabel(i,s);if(Tt(i))i=It.delayedCall(0,i);else return this}return this!==i?Li(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ii);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof It?s&&l.push(u):(a&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,s,a)))),u=u._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Ht(i)?this.removeLabel(i):Tt(i)?this.killTweensOf(i):(xu(this,i),i===this._recent&&(this._recent=this._last),ms(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Jn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=It.delayedCall(0,s||Sa,a);return o.data="isPause",this._hasPause=1,Li(this,o,Jn(this,i))},t.removePause=function(i){var s=this._first;for(i=Jn(this,i);s;)s._start===i&&s.data==="isPause"&&Br(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)yr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ri(i),l=this._first,u=sr(s),c;l;)l instanceof It?Ov(l._targets,o)&&(u?(!yr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(c=l.getTweensOf(o,s)).length&&a.push.apply(a,c),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Jn(a,i),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=It.to(a,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||ft,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());g._dur!==p&&bo(g,p,0,1).render(g._time,!0,!0),m=1}c&&c.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ui({startAt:{time:Jn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),cd(this,Jn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),cd(this,Jn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ft)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,u;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(u in l)l[u]>=a&&(l[u]+=i);return ms(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ms(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=ii,u,c,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Li(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(s-=c,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=c/a._ts,a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=u;bo(a,a===yt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(yt._ts&&(hg(yt,ql(i,yt)),cg=kn.frame),kn.frame>=od){od+=Vn.autoSleep||120;var s=yt._first;if((!s||!s._ts)&&Vn.autoSleep&&kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||kn.sleep()}}},e}(So);ui(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var a1=function(e,t,n,i,s,a,o){var l=new An(this._pt,e,t,0,1,Ng,null,s),u=0,c=0,h,f,m,g,d,p,_,M;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=wa(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),f=n.match(zu)||[];h=zu.exec(i);)g=h[0],d=i.substring(u,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[c++]&&(p=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:d||c===1?d:",",s:p,c:g.charAt(1)==="="?uo(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},u=zu.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=o,(sg.test(i)||_)&&(l.e=0),this._pt=l,l},nh=function(e,t,n,i,s,a,o,l,u,c){Tt(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:Tt(h)?u?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,m=Tt(h)?u?h1:Bg:rh,g;if(Ht(i)&&(~i.indexOf("random(")&&(i=wa(i)),i.charAt(1)==="="&&(g=uo(f,i)+(nn(f)||0),(g||g===0)&&(i=g))),!c||f!==i||of)return!isNaN(f*i)&&i!==""?(g=new An(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?p1:Og,0,m),u&&(g.fp=u),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Jf(t,i),a1.call(this,e,t,f,i,m,l||Vn.stringFilter,u))},l1=function(e,t,n,i,s){if(Tt(e)&&(e=aa(e,s,t,n,i)),!Wi(e)||e.style&&e.nodeType||on(e)||ig(e))return Ht(e)?aa(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=aa(e[o],s,t,n,i);return a},Fg=function(e,t,n,i,s,a){var o,l,u,c;if(On[e]&&(o=new On[e]).init(s,o.rawVars?t[e]:l1(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new An(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==no))for(u=n._ptLookup[n._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=l;return o},yr,of,ih=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,u=i.onUpdate,c=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,M=e._targets,x=e.parent,b=x&&x.data==="nested"?x.vars.targets:M,v=e._overwrite==="auto"&&!jf,T=e.timeline,E,y,w,D,O,Q,G,U,Y,H,Z,B,ae;if(T&&(!g||!s)&&(s="none"),e._ease=gs(s,vo.ease),e._yEase=m?Pg(gs(m===!0?s:m,vo.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!T&&!!i.runBackwards,!T||g&&!i.stagger){if(U=M[0]?ps(M[0]).harness:0,B=U&&i[U.prop],E=Xl(i,Qf),_&&(_._zTime<0&&_.progress(1),t<0&&f&&o&&!d?_.render(-1,!0):_.revert(f&&p?Tl:Uv),_._lazy=0),a){if(Br(e._startAt=It.set(M,ui({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:Tn(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:h,stagger:0},a))),e._startAt._dp=0,t<0&&(wn||!o&&!d)&&e._startAt.revert(Tl),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!_){if(t&&(o=!1),w=ui({overwrite:!1,data:"isFromStart",lazy:o&&Tn(l),immediateRender:o,stagger:0,parent:x},E),B&&(w[U.prop]=B),Br(e._startAt=It.set(M,w)),e._startAt._dp=0,t<0&&(wn?e._startAt.revert(Tl):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ft,ft);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Tn(l)||l&&!p,y=0;y<M.length;y++){if(O=M[y],G=O._gsap||th(M)[y]._gsap,e._ptLookup[y]=H={},Qc[G.id]&&Dr.length&&Hl(),Z=b===M?y:b.indexOf(O),U&&(Y=new U).init(O,B||E,e,Z,b)!==!1&&(e._pt=D=new An(e._pt,O,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(F){H[F]=D}),Y.priority&&(Q=1)),!U||B)for(w in E)On[w]&&(Y=Fg(w,E,e,Z,O,b))?Y.priority&&(Q=1):H[w]=D=nh.call(e,O,w,"get",E[w],Z,b,0,i.stringFilter);e._op&&e._op[y]&&e.kill(O,e._op[y]),v&&e._pt&&(yr=e,yt.killTweensOf(O,H,e.globalTime(t)),ae=!e.parent,yr=0),e._pt&&l&&(Qc[G.id]=1)}Q&&kg(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!ae,g&&t<=0&&T.render(ii,!0,!0)},u1=function(e,t,n,i,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,c,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return of=1,e.vars[t]="+=0",ih(e,o),of=0,1;l.push(u)}for(f=l.length;f--;)c=l[f],u=c._pt||c,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,c.e&&(c.e=Ct(n)+nn(c.e)),c.b&&(c.b=u.s+nn(c.b))},c1=function(e,t){var n=e[0]?ps(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ms({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},f1=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(on(t))o=n[e]||(n[e]=[]),t.forEach(function(l,u){return o.push({t:u/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},aa=function(e,t,n,i,s){return Tt(e)?e.call(t,n,i,s):Ht(e)&&~e.indexOf("random(")?wa(e):e},Ig=eh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ug={};En(Ig+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ug[r]=1});var It=function(r){eg(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:sa(i))||this;var l=o.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,M=i.parent||yt,x=(on(n)||ig(n)?sr(n[0]):"length"in i)?[n]:ri(n),b,v,T,E,y,w,D,O;if(o._targets=x.length?th(x):Vl("GSAP target "+n+" not found. https://greensock.com",!Vn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||f||Ha(u)||Ha(c)){if(i=o.vars,b=o.timeline=new Sn({data:"nested",defaults:d||{},targets:M&&M.data==="nested"?M.vars.targets:x}),b.kill(),b.parent=b._dp=Zi(o),b._start=0,f||Ha(u)||Ha(c)){if(E=x.length,D=f&&bg(f),Wi(f))for(y in f)~Ig.indexOf(y)&&(O||(O={}),O[y]=f[y]);for(v=0;v<E;v++)T=Xl(i,Ug),T.stagger=0,_&&(T.yoyoEase=_),O&&Ms(T,O),w=x[v],T.duration=+aa(u,Zi(o),v,w,x),T.delay=(+aa(c,Zi(o),v,w,x)||0)-o._delay,!f&&E===1&&T.delay&&(o._delay=c=T.delay,o._start+=c,T.delay=0),b.to(w,T,D?D(v,w,x):0),b._ease=rt.none;b.duration()?u=c=0:o.timeline=0}else if(g){sa(ui(b.vars.defaults,{ease:"none"})),b._ease=gs(g.ease||i.ease||"none");var Q=0,G,U,Y;if(on(g))g.forEach(function(H){return b.to(x,H,">")}),b.duration();else{T={};for(y in g)y==="ease"||y==="easeEach"||f1(y,g[y],T,g.easeEach);for(y in T)for(G=T[y].sort(function(H,Z){return H.t-Z.t}),Q=0,v=0;v<G.length;v++)U=G[v],Y={ease:U.e,duration:(U.t-(v?G[v-1].t:0))/100*u},Y[y]=U.v,b.to(x,Y,Q),Q+=Y.duration;b.duration()<u&&b.to({},{duration:u-b.duration()})}}u||o.duration(u=b.duration())}else o.timeline=0;return m===!0&&!jf&&(yr=Zi(o),yt.killTweensOf(x),yr=0),Li(M,Zi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!u&&!g&&o._start===$t(M._time)&&Tn(h)&&Wv(Zi(o))&&M.data!=="nested")&&(o._tTime=-ft,o.render(Math.max(0,-c)||0)),p&&_g(Zi(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,u=this._dur,c=i<0,h=i>l-ft&&!c?l:i<ft?0:i,f,m,g,d,p,_,M,x,b;if(!u)Vv(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(f=h,x=this.timeline,this._repeat){if(d=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(d*100+i,s,a);if(f=$t(h%d),h===l?(g=this._repeat,f=u):(g=~~(h/d),g&&g===h/d&&(f=u,g--),f>u&&(f=u)),_=this._yoyo&&g&1,_&&(b=this._yEase,f=u-f),p=yo(this._tTime,d),f===o&&!a&&this._initted)return this._tTime=h,this;g!==p&&(x&&this._yEase&&Dg(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render($t(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(xg(this,c?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time)return this;if(u!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(b||this._ease)(f/u),this._from&&(this.ratio=M=1-M),f&&!o&&!s&&(si(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;x&&x.render(i<0?i:!f&&_?-ft:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(c&&ef(this,i,s,a),si(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&si(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&ef(this,i,!0,!0),(i||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Br(this,1),!s&&!(c&&!o)&&(h||o||_)&&(si(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o){Ta||kn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ih(this,l),u=this._ease(l/this._dur),u1(this,i,s,a,o,u,l)?this.resetTo(i,s,a,o):(yu(this,0),this.parent||mg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?qo(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,yr&&yr.vars.overwrite!==!0)._first||qo(this),this.parent&&a!==this.timeline.totalDuration()&&bo(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ri(i):o,u=this._ptLookup,c=this._pt,h,f,m,g,d,p,_;if((!s||s==="all")&&kv(o,l))return s==="all"&&(this._pt=0),qo(this);for(h=this._op=this._op||[],s!=="all"&&(Ht(s)&&(d={},En(s,function(M){return d[M]=1}),s=d),s=c1(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){f=u[_],s==="all"?(h[_]=s,g=f,m={}):(m=h[_]=h[_]||{},g=s);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&xu(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&c&&qo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return oa(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return oa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return yt.killTweensOf(i,s,a)},e}(So);ui(It.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(r){It[r]=function(){var e=new Sn,t=nf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var rh=function(e,t,n){return e[t]=n},Bg=function(e,t,n){return e[t](n)},h1=function(e,t,n,i){return e[t](i.fp,n)},d1=function(e,t,n){return e.setAttribute(t,n)},sh=function(e,t){return Tt(e[t])?Bg:Zf(e[t])&&e.setAttribute?d1:rh},Og=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},p1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ng=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},oh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},m1=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},g1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?xu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},_1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},kg=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},An=function(){function r(t,n,i,s,a,o,l,u,c){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Og,this.d=l||this,this.set=u||rh,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=_1,this.m=n,this.mt=s,this.tween=i},r}();En(eh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Qf[r]=1});Xn.TweenMax=Xn.TweenLite=It;Xn.TimelineLite=Xn.TimelineMax=Sn;yt=new Sn({sortChildren:!1,defaults:vo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=Cg;var wo=[],Al={},x1=[],hd=0,Xu=function(e){return(Al[e]||x1).map(function(t){return t()})},af=function(){var e=Date.now(),t=[];e-hd>2&&(Xu("matchMediaInit"),wo.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,u;for(o in i)a=Qn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,u=1);u&&(n.revert(),l&&t.push(n))}),Xu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),hd=e,Xu("matchMedia"))},zg=function(){function r(t,n){this.selector=n&&rf(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Tt(n)&&(s=i,i=n,n=Tt);var a=this,o=function(){var u=Dt,c=a.selector,h;return u&&u!==a&&u.data.push(a),s&&(a.selector=rf(s)),Dt=a,h=i.apply(a,arguments),Tt(h)&&a._r.push(h),Dt=u,a.selector=c,a.isReverted=!1,h};return a.last=o,n===Tt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof It&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof So)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=wo.indexOf(this);~o&&wo.splice(o,1)}},e.revert=function(n){this.kill(n||{})},r}(),v1=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Wi(n)||(n={matches:n});var a=new zg(0,s||this.scope),o=a.conditions={},l,u,c;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(u in n)u==="all"?c=1:(l=Qn.matchMedia(n[u]),l&&(wo.indexOf(a)<0&&wo.push(a),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(af):l.addEventListener("change",af)));return c&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Yl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return e1(i)})},timeline:function(e){return new Sn(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ht(e)&&(e=ri(e)[0]);var s=ps(e||{}).get,a=n?pg:dg;return n==="native"&&(n=""),e&&(t?a((On[t]&&On[t].get||s)(e,t,n,i)):function(o,l,u){return a((On[o]&&On[o].get||s)(e,o,l,u))})},quickSetter:function(e,t,n){if(e=ri(e),e.length>1){var i=e.map(function(c){return qn.quickSetter(c,t,n)}),s=i.length;return function(c){for(var h=s;h--;)i[h](c)}}e=e[0]||{};var a=On[t],o=ps(e),l=o.harness&&(o.harness.aliases||{})[t]||t,u=a?function(c){var h=new a;no._pt=0,h.init(e,n?c+n:c,no,0,[e]),h.render(1,h),no._pt&&oh(1,no)}:o.set(e,l);return a?u:function(c){return u(e,l,n?c+n:c,o,1)}},quickTo:function(e,t,n){var i,s=qn.to(e,Ms((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,u,c){return s.resetTo(t,l,u,c)};return a.tween=s,a},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gs(e.ease,vo.ease)),ad(vo,e||{})},config:function(e){return ad(Vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!On[o]&&!Xn[o]&&Vl(t+" effect requires "+o+" plugin.")}),Wu[t]=function(o,l,u){return n(ri(o),ui(l||{},s),u)},a&&(Sn.prototype[t]=function(o,l,u){return this.add(Wu[t](o,Wi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){rt[e]=gs(t)},parseEase:function(e,t){return arguments.length?gs(e,t):rt},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Sn(e),i,s;for(n.smoothChildTiming=Tn(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,i=yt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof It&&i.vars.onComplete===i._targets[0]))&&Li(n,i,i._start-i._delay),i=s;return Li(yt,n,0),n},context:function(e,t){return e?new zg(e,t):Dt},matchMedia:function(e){return new v1(e)},matchMediaRefresh:function(){return wo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||af()},addEventListener:function(e,t){var n=Al[e]||(Al[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Al[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Kv,wrapYoyo:Jv,distribute:bg,random:Sg,snap:Mg,normalize:Zv,getUnit:nn,clamp:qv,splitColor:Eg,toArray:ri,selector:rf,mapRange:Tg,pipe:$v,unitize:jv,interpolate:Qv,shuffle:yg},install:lg,effects:Wu,ticker:kn,updateRoot:Sn.updateRoot,plugins:On,globalTimeline:yt,core:{PropTween:An,globals:ug,Tween:It,Timeline:Sn,Animation:So,getCache:ps,_removeLinkedListItem:xu,reverting:function(){return wn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return jf=e}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Yl[r]=It[r]});kn.add(Sn.updateRoot);no=Yl.to({},{duration:0});var y1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},b1=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=y1(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},qu=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,u;if(Ht(s)&&(l={},En(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}b1(o,s)}}}},qn=Yl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)wn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},qu("roundProps",sf),qu("modifiers"),qu("snap",Mg))||Yl;It.version=Sn.version=qn.version="3.11.3";ag=1;ng()&&Mo();rt.Power0;rt.Power1;rt.Power2;rt.Power3;rt.Power4;rt.Linear;rt.Quad;rt.Cubic;rt.Quart;rt.Quint;rt.Strong;rt.Elastic;rt.Back;rt.SteppedEase;rt.Bounce;rt.Sine;rt.Expo;rt.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dd,br,co,ah,us,pd,lh,M1=function(){return typeof window<"u"},or={},Qr=180/Math.PI,fo=Math.PI/180,Rs=Math.atan2,md=1e8,uh=/([A-Z])/g,S1=/(left|right|width|margin|padding|x)/i,w1=/[\s,\(]\S/,er={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},T1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},E1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},A1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Wg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Gg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},C1=function(e,t,n){return e.style[t]=n},P1=function(e,t,n){return e.style.setProperty(t,n)},D1=function(e,t,n){return e._gsap[t]=n},L1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},R1=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},F1=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},bt="transform",bi=bt+"Origin",I1=function(e,t){var n=this,i=this.target,s=i.style;if(e in or){if(this.tfm=this.tfm||{},e!=="transform"&&(e=er[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ki(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Ki(i,e)),this.props.indexOf(bt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(bi,t,"")),e=bt}(s||t)&&this.props.push(e,t,s[e])},Vg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},U1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(uh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=lh(),s&&!s.isStart&&!n[bt]&&(Vg(n),i.uncache=1)}},Hg=function(e,t){var n={target:e,props:[],revert:U1,save:I1};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Xg,uf=function(e,t){var n=br.createElementNS?br.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):br.createElement(e);return n.style?n:br.createElement(e)},Bi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(uh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,To(t)||t,1)||""},gd="O,Moz,ms,Ms,Webkit".split(","),To=function(e,t,n){var i=t||us,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(gd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?gd[a]:"")+e},cf=function(){M1()&&window.document&&(dd=window,br=dd.document,co=br.documentElement,us=uf("div")||{style:{}},uf("div"),bt=To(bt),bi=bt+"Origin",us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Xg=!!To("perspective"),lh=qn.core.reverting,ah=1)},Yu=function r(e){var t=uf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(co.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),co.removeChild(t),this.style.cssText=s,a},_d=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},qg=function(e){var t;try{t=e.getBBox()}catch{t=Yu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Yu||(t=Yu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+_d(e,["x","cx","x1"])||0,y:+_d(e,["y","cy","y1"])||0,width:0,height:0}:t},Yg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&qg(e))},Ea=function(e,t){if(t){var n=e.style;t in or&&t!==bi&&(t=bt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(uh,"-$1").toLowerCase())):n.removeAttribute(t)}},Mr=function(e,t,n,i,s,a){var o=new An(e._pt,t,n,0,1,a?Gg:Wg);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},xd={deg:1,rad:1,turn:1},B1={grid:1,flex:1},Or=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=us.style,l=S1.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,_;return i===a||!s||xd[i]||xd[a]?s:(a!=="px"&&!f&&(s=r(e,t,n,"px")),_=e.getCTM&&Yg(e),(m||a==="%")&&(or[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[c],Ct(m?s/g*h:s/100*g)):(o[l?"width":"height"]=h+(f?a:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===br||!d.appendChild)&&(d=br.body),p=d._gsap,p&&m&&p.width&&l&&p.time===kn.time&&!p.uncache?Ct(s/p.width*h):((m||a==="%")&&!B1[Bi(d,"display")]&&(o.position=Bi(e,"position")),d===e&&(o.position="static"),d.appendChild(us),g=us[c],d.removeChild(us),o.position="absolute",l&&m&&(p=ps(d),p.time=kn.time,p.width=d[c]),Ct(f?g*s/h:g&&s?h/g*s:0))))},Ki=function(e,t,n,i){var s;return ah||cf(),t in er&&t!=="transform"&&(t=er[t],~t.indexOf(",")&&(t=t.split(",")[0])),or[t]&&t!=="transform"?(s=Ca(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:jl(Bi(e,bi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=$l[t]&&$l[t](e,t,n)||Bi(e,t)||fg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Or(e,t,s,n)+n:s},O1=function(e,t,n,i){if(!n||n==="none"){var s=To(t,e,1),a=s&&Bi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Bi(e,"borderTopColor"))}var o=new An(this._pt,e.style,t,0,1,Ng),l=0,u=0,c,h,f,m,g,d,p,_,M,x,b,v;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Bi(e,t)||i,e.style[t]=n),c=[n,i],Cg(c),n=c[0],i=c[1],f=n.match(to)||[],v=i.match(to)||[],v.length){for(;h=to.exec(i);)p=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(d=f[u++]||"")&&(m=parseFloat(d)||0,b=d.substr((m+"").length),p.charAt(1)==="="&&(p=uo(m,p)+b),_=parseFloat(p),x=p.substr((_+"").length),l=to.lastIndex-x.length,x||(x=x||Vn.units[t]||b,l===i.length&&(i+=x,o.e+=x)),b!==x&&(m=Or(e,t,d,x)||0),o._pt={_next:o._pt,p:M||u===1?M:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Gg:Wg;return sg.test(i)&&(o.e=0),this._pt=o,o},vd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},N1=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=vd[n]||n,t[1]=vd[i]||i,t.join(" ")},k1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,u;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],or[o]&&(l=1,o=o==="transformOrigin"?bi:bt),Ea(n,o);l&&(Ea(n,bt),a&&(a.svg&&n.removeAttribute("transform"),Ca(n,1),a.uncache=1,Vg(i)))}},$l={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new An(e._pt,t,n,0,0,k1);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Aa=[1,0,0,1,0,0],$g={},jg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yd=function(e){var t=Bi(e,bt);return jg(t)?Aa:t.substr(7).match(rg).map(Ct)},ch=function(e,t){var n=e._gsap||ps(e),i=e.style,s=yd(e),a,o,l,u;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Aa:s):(s===Aa&&!e.offsetParent&&e!==co&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(u=1,o=e.nextElementSibling,co.appendChild(e)),s=yd(e),l?i.display=l:Ea(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):co.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ff=function(e,t,n,i,s,a){var o=e._gsap,l=s||ch(e,!0),u=o.xOrigin||0,c=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],M=l[5],x=t.split(" "),b=parseFloat(x[0])||0,v=parseFloat(x[1])||0,T,E,y,w;n?l!==Aa&&(E=m*p-g*d)&&(y=b*(p/E)+v*(-d/E)+(d*M-p*_)/E,w=b*(-g/E)+v*(m/E)-(m*M-g*_)/E,b=y,v=w):(T=qg(e),b=T.x+(~x[0].indexOf("%")?b/100*T.width:b),v=T.y+(~(x[1]||x[0]).indexOf("%")?v/100*T.height:v)),i||i!==!1&&o.smooth?(_=b-u,M=v-c,o.xOffset=h+(_*m+M*d)-_,o.yOffset=f+(_*g+M*p)-M):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=v,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[bi]="0px 0px",a&&(Mr(a,o,"xOrigin",u,b),Mr(a,o,"yOrigin",c,v),Mr(a,o,"xOffset",h,o.xOffset),Mr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+v)},Ca=function(e,t){var n=e._gsap||new Rg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),u=Bi(e,bi)||"0",c,h,f,m,g,d,p,_,M,x,b,v,T,E,y,w,D,O,Q,G,U,Y,H,Z,B,ae,F,$,X,he,ce,ge;return c=h=f=d=p=_=M=x=b=0,m=g=1,n.svg=!!(e.getCTM&&Yg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[bt]!=="none"?l[bt]:"")),i.scale=i.rotate=i.translate="none"),E=ch(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),u=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),ff(e,Z||u,!!Z||n.originIsAbsolute,n.smooth!==!1,E)),v=n.xOrigin||0,T=n.yOrigin||0,E!==Aa&&(O=E[0],Q=E[1],G=E[2],U=E[3],c=Y=E[4],h=H=E[5],E.length===6?(m=Math.sqrt(O*O+Q*Q),g=Math.sqrt(U*U+G*G),d=O||Q?Rs(Q,O)*Qr:0,M=G||U?Rs(G,U)*Qr+d:0,M&&(g*=Math.abs(Math.cos(M*fo))),n.svg&&(c-=v-(v*O+T*G),h-=T-(v*Q+T*U))):(ge=E[6],he=E[7],F=E[8],$=E[9],X=E[10],ce=E[11],c=E[12],h=E[13],f=E[14],y=Rs(ge,X),p=y*Qr,y&&(w=Math.cos(-y),D=Math.sin(-y),Z=Y*w+F*D,B=H*w+$*D,ae=ge*w+X*D,F=Y*-D+F*w,$=H*-D+$*w,X=ge*-D+X*w,ce=he*-D+ce*w,Y=Z,H=B,ge=ae),y=Rs(-G,X),_=y*Qr,y&&(w=Math.cos(-y),D=Math.sin(-y),Z=O*w-F*D,B=Q*w-$*D,ae=G*w-X*D,ce=U*D+ce*w,O=Z,Q=B,G=ae),y=Rs(Q,O),d=y*Qr,y&&(w=Math.cos(y),D=Math.sin(y),Z=O*w+Q*D,B=Y*w+H*D,Q=Q*w-O*D,H=H*w-Y*D,O=Z,Y=B),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=Ct(Math.sqrt(O*O+Q*Q+G*G)),g=Ct(Math.sqrt(H*H+ge*ge)),y=Rs(Y,H),M=Math.abs(y)>2e-4?y*Qr:0,b=ce?1/(ce<0?-ce:ce):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!jg(Bi(e,bt)),Z&&e.setAttribute("transform",Z))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(m*=-1,M+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Ct(m),n.scaleY=Ct(g),n.rotation=Ct(d)+o,n.rotationX=Ct(p)+o,n.rotationY=Ct(_)+o,n.skewX=M+o,n.skewY=x+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(u.split(" ")[2])||0)&&(i[bi]=jl(u)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?W1:Xg?Zg:z1,n.uncache=0,n},jl=function(e){return(e=e.split(" "))[0]+" "+e[1]},$u=function(e,t,n){var i=nn(t);return Ct(parseFloat(t)+parseFloat(Or(e,"x",n+"px",i)))+i},z1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Zg(e,t)},Yr="0deg",No="0px",$r=") ",Zg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,u=n.rotation,c=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,M=n.target,x=n.zOrigin,b="",v=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==Yr||c!==Yr)){var T=parseFloat(c)*fo,E=Math.sin(T),y=Math.cos(T),w;T=parseFloat(h)*fo,w=Math.cos(T),a=$u(M,a,E*w*-x),o=$u(M,o,-Math.sin(T)*-x),l=$u(M,l,y*w*-x+x)}p!==No&&(b+="perspective("+p+$r),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(v||a!==No||o!==No||l!==No)&&(b+=l!==No||v?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+$r),u!==Yr&&(b+="rotate("+u+$r),c!==Yr&&(b+="rotateY("+c+$r),h!==Yr&&(b+="rotateX("+h+$r),(f!==Yr||m!==Yr)&&(b+="skew("+f+", "+m+$r),(g!==1||d!==1)&&(b+="scale("+g+", "+d+$r),M.style[bt]=b||"translate(0, 0)"},W1=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,u=n.skewX,c=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,M=n.forceCSS,x=parseFloat(a),b=parseFloat(o),v,T,E,y,w;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=fo,u*=fo,v=Math.cos(l)*h,T=Math.sin(l)*h,E=Math.sin(l-u)*-f,y=Math.cos(l-u)*f,u&&(c*=fo,w=Math.tan(u-c),w=Math.sqrt(1+w*w),E*=w,y*=w,c&&(w=Math.tan(c),w=Math.sqrt(1+w*w),v*=w,T*=w)),v=Ct(v),T=Ct(T),E=Ct(E),y=Ct(y)):(v=h,y=f,T=E=0),(x&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(x=Or(m,"x",a,"px"),b=Or(m,"y",o,"px")),(g||d||p||_)&&(x=Ct(x+g-(g*v+d*E)+p),b=Ct(b+d-(g*T+d*y)+_)),(i||s)&&(w=m.getBBox(),x=Ct(x+i/100*w.width),b=Ct(b+s/100*w.height)),w="matrix("+v+","+T+","+E+","+y+","+x+","+b+")",m.setAttribute("transform",w),M&&(m.style[bt]=w)},G1=function(e,t,n,i,s){var a=360,o=Ht(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Qr:1),u=l-i,c=i+u+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),h==="cw"&&u<0?u=(u+a*md)%a-~~(u/a)*a:h==="ccw"&&u>0&&(u=(u-a*md)%a-~~(u/a)*a)),e._pt=f=new An(e._pt,t,n,i,u,T1),f.e=c,f.u="deg",e._props.push(n),f},bd=function(e,t){for(var n in t)e[n]=t[n];return e},V1=function(e,t,n){var i=bd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,u,c,h,f,m,g;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),a[bt]=t,o=Ca(n,1),Ea(n,bt),n.setAttribute("transform",u)):(u=getComputedStyle(n)[bt],a[bt]=t,o=Ca(n,1),a[bt]=u);for(l in or)u=i[l],c=o[l],u!==c&&s.indexOf(l)<0&&(m=nn(u),g=nn(c),h=m!==g?Or(n,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new An(e._pt,o,l,h,f-h,lf),e._pt.u=g||0,e._props.push(l));bd(o,i)};En("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});$l[e>1?"border"+r:r]=function(o,l,u,c,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return Ki(o,g,u)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(c+"").split(" "),m={},a.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),o.init(l,m,h)}});var Kg={name:"css",register:cf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,u,c,h,f,m,g,d,p,_,M,x,b,v,T,E,y;ah||cf(),this.styles=this.styles||Hg(e),y=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(c=t[d],!(On[d]&&Fg(d,t,n,i,e,s)))){if(m=typeof c,g=$l[d],m==="function"&&(c=c.call(n,i,e,s),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=wa(c)),g)g(this,e,d,c,n)&&(E=1);else if(d.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(d)+"").trim(),c+="",Lr.lastIndex=0,Lr.test(u)||(p=nn(u),_=nn(c)),_?p!==_&&(u=Or(e,d,u,_)+_):p&&(c+=p),this.add(o,"setProperty",u,c,i,s,0,0,d),a.push(d),y.push(d,0,o[d]);else if(m!=="undefined"){if(l&&d in l?(u=typeof l[d]=="function"?l[d].call(n,i,e,s):l[d],Ht(u)&&~u.indexOf("random(")&&(u=wa(u)),nn(u+"")||(u+=Vn.units[d]||nn(Ki(e,d))||""),(u+"").charAt(1)==="="&&(u=Ki(e,d))):u=Ki(e,d),f=parseFloat(u),M=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),M&&(c=c.substr(2)),h=parseFloat(c),d in er&&(d==="autoAlpha"&&(f===1&&Ki(e,"visibility")==="hidden"&&h&&(f=0),y.push("visibility",0,o.visibility),Mr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=er[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in or,x){if(this.styles.save(d),b||(v=e._gsap,v.renderTransform&&!t.parseTransform||Ca(e,t.parseTransform),T=t.smoothOrigin!==!1&&v.smooth,b=this._pt=new An(this._pt,o,bt,0,1,v.renderTransform,v,0,-1),b.dep=1),d==="scale")this._pt=new An(this._pt,v,"scaleY",f,(M?uo(f,M+h):h)-f||0,lf),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){y.push(bi,0,o[bi]),c=N1(c),v.svg?ff(e,c,0,T,0,this):(_=parseFloat(c.split(" ")[2])||0,_!==v.zOrigin&&Mr(this,v,"zOrigin",v.zOrigin,_),Mr(this,o,d,jl(u),jl(c)));continue}else if(d==="svgOrigin"){ff(e,c,1,T,0,this);continue}else if(d in $g){G1(this,v,d,f,M?uo(f,M+c):c);continue}else if(d==="smoothOrigin"){Mr(this,v,"smooth",v.smooth,c);continue}else if(d==="force3D"){v[d]=c;continue}else if(d==="transform"){V1(this,c,e);continue}}else d in o||(d=To(d)||d);if(x||(h||h===0)&&(f||f===0)&&!w1.test(c)&&d in o)p=(u+"").substr((f+"").length),h||(h=0),_=nn(c)||(d in Vn.units?Vn.units[d]:p),p!==_&&(f=Or(e,d,u,_)),this._pt=new An(this._pt,x?v:o,d,f,(M?uo(f,M+h):h)-f,!x&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?A1:lf),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=u,this._pt.r=E1);else if(d in o)O1.call(this,e,d,u,M?M+c:c);else if(d in e)this.add(e,d,u||e[d],M?M+c:c,i,s);else{Jf(d,c);continue}x||(d in o?y.push(d,0,o[d]):y.push(d,1,u||e[d])),a.push(d)}}E&&kg(this)},render:function(e,t){if(t.tween._time||!lh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ki,aliases:er,getSetter:function(e,t,n){var i=er[t];return i&&i.indexOf(",")<0&&(t=i),t in or&&t!==bi&&(e._gsap.x||Ki(e,"x"))?n&&pd===n?t==="scale"?L1:D1:(pd=n||{})&&(t==="scale"?R1:F1):e.style&&!Zf(e.style[t])?C1:~t.indexOf("-")?P1:sh(e,t)},core:{_removeProperty:Ea,_getMatrix:ch}};qn.utils.checkPrefix=To;qn.core.getStyleSaver=Hg;(function(r,e,t,n){var i=En(r+","+e+","+t,function(s){or[s]=1});En(e,function(s){Vn.units[s]="deg",$g[s]=1}),er[i[13]]=r+","+e,En(n,function(s){var a=s.split(":");er[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});qn.registerPlugin(Kg);var Cn=qn.registerPlugin(Kg)||qn;Cn.core.Tween;const H1=zr({__name:"FirstView",setup(r){const e=nr(),t=nr(),n=nr(window.innerHeight);return lr(()=>{if(e.value){const s=e.value.textContent.split("").map(o=>'<span style="display:inline-block">'+o+"</span>");e.value.innerHTML=s.join(""),Cn.timeline().set(t.value,{x:"-50vw",y:"-20vh"}).to(t.value,{y:0,duration:1,ease:"Bounce.easeOut"}).to(t.value,{x:"54vw",duration:3,delay:-1,ease:"Power.easeOut"}).fromTo(".first-view span",{opacity:0,y:-10},{opacity:1,y:0,duration:1,delay:-2.6,stagger:{each:.09},ease:"Bounce.easeOut"})}}),(i,s)=>(Wn(),zi("div",{class:"first-view",style:iu(`height:${n.value}px`)},[Ge("div",{ref_key:"ball",ref:t,class:"ball"},null,512),Ge("h1",{ref_key:"headingText",ref:e},"Frontend\u7802\u904A\u3073\u3057\u3066\u307F\u305F",512)],4))}});const Gr=(r,e)=>{const t=r.__vccOpts||r;for(const[n,i]of e)t[n]=i;return t},X1=Gr(H1,[["__scopeId","data-v-49d8a7d1"]]);function Md(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function q1(r,e,t){return e&&Md(r.prototype,e),t&&Md(r,t),r}/*!
 * Observer 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sn,hf,zn,Sr,wr,ho,Jg,es,la,Qg,tr,di,e0=function(){return sn||typeof window<"u"&&(sn=window.gsap)&&sn.registerPlugin&&sn},t0=1,io=[],it=[],Oi=[],ua=Date.now,df=function(e,t){return t},Y1=function(){var e=la.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,it),i.push.apply(i,Oi),it=n,Oi=i,df=function(a,o){return t[a](o)}},Rr=function(e,t){return~Oi.indexOf(e)&&Oi[Oi.indexOf(e)+1][t]},ca=function(e){return!!~Qg.indexOf(e)},vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Xa="scrollLeft",qa="scrollTop",pf=function(){return tr&&tr.isPressed||it.cache++},Zl=function(e,t){var n=function i(s){if(s||s===0){t0&&(zn.history.scrollRestoration="manual");var a=tr&&tr.isPressed;s=i.v=Math.round(s)||(tr&&tr.iOS?1:0),e(s),i.cacheID=it.cache,a&&df("ss",s)}else(t||it.cache!==i.cacheID||df("ref"))&&(i.cacheID=it.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},_n={s:Xa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Zl(function(r){return arguments.length?zn.scrollTo(r,Ut.sc()):zn.pageXOffset||Sr[Xa]||wr[Xa]||ho[Xa]||0})},Ut={s:qa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:_n,sc:Zl(function(r){return arguments.length?zn.scrollTo(_n.sc(),r):zn.pageYOffset||Sr[qa]||wr[qa]||ho[qa]||0})},Mn=function(e){return sn.utils.toArray(e)[0]||(typeof e=="string"&&sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Nr=function(e,t){var n=t.s,i=t.sc;ca(e)&&(e=Sr.scrollingElement||wr);var s=it.indexOf(e),a=i===Ut.sc?1:2;!~s&&(s=it.push(e)-1),it[s+a]||e.addEventListener("scroll",pf);var o=it[s+a],l=o||(it[s+a]=Zl(Rr(e,n),!0)||(ca(e)?i:Zl(function(u){return arguments.length?e[n]=u:e[n]})));return l.target=e,o||(l.smooth=sn.getProperty(e,"scrollBehavior")==="smooth"),l},mf=function(e,t,n){var i=e,s=e,a=ua(),o=a,l=t||50,u=Math.max(500,l*3),c=function(g,d){var p=ua();d||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(g){var d=o,p=s,_=ua();return(g||g===0)&&g!==i&&c(g),a===o||_-o>u?0:(i+(n?p:-p))/((n?_:a)-d)*1e3};return{update:c,reset:h,getVelocity:f}},ko=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Sd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},n0=function(){la=sn.core.globals().ScrollTrigger,la&&la.core&&Y1()},i0=function(e){return sn=e||e0(),sn&&typeof document<"u"&&document.body&&(zn=window,Sr=document,wr=Sr.documentElement,ho=Sr.body,Qg=[zn,Sr,wr,ho],sn.utils.clamp,es="onpointerenter"in ho?"pointer":"mouse",Jg=Lt.isTouch=zn.matchMedia&&zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,di=Lt.eventTypes=("ontouchstart"in wr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in wr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return t0=0},500),n0(),hf=1),hf};_n.op=Ut;it.cache=0;var Lt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){hf||i0(sn)||console.warn("Please gsap.registerPlugin(Observer)"),la||n0();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,u=n.debounce,c=n.preventDefault,h=n.onStop,f=n.onStopDelay,m=n.ignore,g=n.wheelSpeed,d=n.event,p=n.onDragStart,_=n.onDragEnd,M=n.onDrag,x=n.onPress,b=n.onRelease,v=n.onRight,T=n.onLeft,E=n.onUp,y=n.onDown,w=n.onChangeX,D=n.onChangeY,O=n.onChange,Q=n.onToggleX,G=n.onToggleY,U=n.onHover,Y=n.onHoverEnd,H=n.onMove,Z=n.ignoreCheck,B=n.isNormalizer,ae=n.onGestureStart,F=n.onGestureEnd,$=n.onWheel,X=n.onEnable,he=n.onDisable,ce=n.onClick,ge=n.scrollSpeed,q=n.capture,Fe=n.allowClicks,be=n.lockAxis,Re=n.onLockAxis;this.target=o=Mn(o)||wr,this.vars=n,m&&(m=sn.utils.toArray(m)),i=i||1e-9,s=s||0,g=g||1,ge=ge||1,a=a||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(zn.getComputedStyle(ho).lineHeight)||22);var ve,ke,P,R,j,se,ie,I=this,de=0,ne=0,me=Nr(o,_n),ue=Nr(o,Ut),A=me(),S=ue(),z=~a.indexOf("touch")&&!~a.indexOf("pointer")&&di[0]==="pointerdown",ee=ca(o),te=o.ownerDocument||Sr,fe=[0,0,0],_e=[0,0,0],L=0,k=function(){return L=ua()},xe=function(re,Pe){return(I.event=re)&&m&&~m.indexOf(re.target)||Pe&&z&&re.pointerType!=="touch"||Z&&Z(re,Pe)},Te=function(){I._vx.reset(),I._vy.reset(),ke.pause(),h&&h(I)},ye=function(){var re=I.deltaX=Sd(fe),Pe=I.deltaY=Sd(_e),Ce=Math.abs(re)>=i,ze=Math.abs(Pe)>=i;O&&(Ce||ze)&&O(I,re,Pe,fe,_e),Ce&&(v&&I.deltaX>0&&v(I),T&&I.deltaX<0&&T(I),w&&w(I),Q&&I.deltaX<0!=de<0&&Q(I),de=I.deltaX,fe[0]=fe[1]=fe[2]=0),ze&&(y&&I.deltaY>0&&y(I),E&&I.deltaY<0&&E(I),D&&D(I),G&&I.deltaY<0!=ne<0&&G(I),ne=I.deltaY,_e[0]=_e[1]=_e[2]=0),(R||P)&&(H&&H(I),P&&(M(I),P=!1),R=!1),se&&!(se=!1)&&Re&&Re(I),j&&($(I),j=!1),ve=0},De=function(re,Pe,Ce){fe[Ce]+=re,_e[Ce]+=Pe,I._vx.update(re),I._vy.update(Pe),u?ve||(ve=requestAnimationFrame(ye)):ye()},Me=function(re,Pe){be&&!ie&&(I.axis=ie=Math.abs(re)>Math.abs(Pe)?"x":"y",se=!0),ie!=="y"&&(fe[2]+=re,I._vx.update(re,!0)),ie!=="x"&&(_e[2]+=Pe,I._vy.update(Pe,!0)),u?ve||(ve=requestAnimationFrame(ye)):ye()},we=function(re){if(!xe(re,1)){re=ko(re,c);var Pe=re.clientX,Ce=re.clientY,ze=Pe-I.x,Et=Ce-I.y,He=I.isDragging;I.x=Pe,I.y=Ce,(He||Math.abs(I.startX-Pe)>=s||Math.abs(I.startY-Ce)>=s)&&(M&&(P=!0),He||(I.isDragging=!0),Me(ze,Et),He||p&&p(I))}},We=I.onPress=function(Ye){xe(Ye,1)||(I.axis=ie=null,ke.pause(),I.isPressed=!0,Ye=ko(Ye),de=ne=0,I.startX=I.x=Ye.clientX,I.startY=I.y=Ye.clientY,I._vx.reset(),I._vy.reset(),vn(B?o:te,di[1],we,c,!0),I.deltaX=I.deltaY=0,x&&x(I))},Xe=function(re){if(!xe(re,1)){cn(B?o:te,di[1],we,!0);var Pe=I.isDragging&&(Math.abs(I.x-I.startX)>3||Math.abs(I.y-I.startY)>3),Ce=ko(re);Pe||(I._vx.reset(),I._vy.reset(),c&&Fe&&sn.delayedCall(.08,function(){if(ua()-L>300&&!re.defaultPrevented){if(re.target.click)re.target.click();else if(te.createEvent){var ze=te.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,zn,1,Ce.screenX,Ce.screenY,Ce.clientX,Ce.clientY,!1,!1,!1,!1,0,null),re.target.dispatchEvent(ze)}}})),I.isDragging=I.isGesturing=I.isPressed=!1,h&&!B&&ke.restart(!0),_&&Pe&&_(I),b&&b(I,Pe)}},N=function(re){return re.touches&&re.touches.length>1&&(I.isGesturing=!0)&&ae(re,I.isDragging)},oe=function(){return(I.isGesturing=!1)||F(I)},pe=function(re){if(!xe(re)){var Pe=me(),Ce=ue();De((Pe-A)*ge,(Ce-S)*ge,1),A=Pe,S=Ce,h&&ke.restart(!0)}},Ee=function(re){if(!xe(re)){re=ko(re,c),$&&(j=!0);var Pe=(re.deltaMode===1?l:re.deltaMode===2?zn.innerHeight:1)*g;De(re.deltaX*Pe,re.deltaY*Pe,0),h&&!B&&ke.restart(!0)}},Ie=function(re){if(!xe(re)){var Pe=re.clientX,Ce=re.clientY,ze=Pe-I.x,Et=Ce-I.y;I.x=Pe,I.y=Ce,R=!0,(ze||Et)&&Me(ze,Et)}},je=function(re){I.event=re,U(I)},gt=function(re){I.event=re,Y(I)},Mt=function(re){return xe(re)||ko(re,c)&&ce(I)};ke=I._dc=sn.delayedCall(f||.25,Te).pause(),I.deltaX=I.deltaY=0,I._vx=mf(0,50,!0),I._vy=mf(0,50,!0),I.scrollX=me,I.scrollY=ue,I.isDragging=I.isGesturing=I.isPressed=!1,I.enable=function(Ye){return I.isEnabled||(vn(ee?te:o,"scroll",pf),a.indexOf("scroll")>=0&&vn(ee?te:o,"scroll",pe,c,q),a.indexOf("wheel")>=0&&vn(o,"wheel",Ee,c,q),(a.indexOf("touch")>=0&&Jg||a.indexOf("pointer")>=0)&&(vn(o,di[0],We,c,q),vn(te,di[2],Xe),vn(te,di[3],Xe),Fe&&vn(o,"click",k,!1,!0),ce&&vn(o,"click",Mt),ae&&vn(te,"gesturestart",N),F&&vn(te,"gestureend",oe),U&&vn(o,es+"enter",je),Y&&vn(o,es+"leave",gt),H&&vn(o,es+"move",Ie)),I.isEnabled=!0,Ye&&Ye.type&&We(Ye),X&&X(I)),I},I.disable=function(){I.isEnabled&&(io.filter(function(Ye){return Ye!==I&&ca(Ye.target)}).length||cn(ee?te:o,"scroll",pf),I.isPressed&&(I._vx.reset(),I._vy.reset(),cn(B?o:te,di[1],we,!0)),cn(ee?te:o,"scroll",pe,q),cn(o,"wheel",Ee,q),cn(o,di[0],We,q),cn(te,di[2],Xe),cn(te,di[3],Xe),cn(o,"click",k,!0),cn(o,"click",Mt),cn(te,"gesturestart",N),cn(te,"gestureend",oe),cn(o,es+"enter",je),cn(o,es+"leave",gt),cn(o,es+"move",Ie),I.isEnabled=I.isPressed=I.isDragging=!1,he&&he(I))},I.kill=function(){I.disable();var Ye=io.indexOf(I);Ye>=0&&io.splice(Ye,1),tr===I&&(tr=0)},io.push(I),B&&ca(o)&&(tr=I),I.enable(d)},q1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Lt.version="3.11.3";Lt.create=function(r){return new Lt(r)};Lt.register=i0;Lt.getAll=function(){return io.slice()};Lt.getById=function(r){return io.filter(function(e){return e.vars.id===r})[0]};e0()&&sn.registerPlugin(Lt);/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Oe,Js,nt,xt,Ri,wt,r0,Kl,Jl,ro,Cl,Ya,Qt,bu,gf,pn,wd,Td,Qs,s0,ju,o0,Un,a0,l0,u0,xr,_f,fh,Zu,$a=1,mn=Date.now,Ku=mn(),ai=0,ja=0,Ed=function(){return bu=1},Ad=function(){return bu=0},Ei=function(e){return e},$o=function(e){return Math.round(e*1e5)/1e5||0},c0=function(){return typeof window<"u"},f0=function(){return Oe||c0()&&(Oe=window.gsap)&&Oe.registerPlugin&&Oe},Ss=function(e){return!!~r0.indexOf(e)},h0=function(e){return Rr(e,"getBoundingClientRect")||(Ss(e)?function(){return Il.width=nt.innerWidth,Il.height=nt.innerHeight,Il}:function(){return Ji(e)})},$1=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Rr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?nt["inner"+s]:e["client"+s])||0}},j1=function(e,t){return!t||~Oi.indexOf(e)?h0(e):function(){return Il}},Tr=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return(n="scroll"+i)&&(a=Rr(e,n))?a()-h0(e)()[s]:Ss(e)?(Ri[n]||wt[n])-(nt["inner"+i]||Ri["client"+i]||wt["client"+i]):e[n]-e["offset"+i]},Za=function(e,t){for(var n=0;n<Qs.length;n+=3)(!t||~t.indexOf(Qs[n+1]))&&e(Qs[n],Qs[n+1],Qs[n+2])},pi=function(e){return typeof e=="string"},xn=function(e){return typeof e=="function"},jo=function(e){return typeof e=="number"},Pl=function(e){return typeof e=="object"},zo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ju=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Fs=Math.abs,d0="left",p0="top",hh="right",dh="bottom",_s="width",xs="height",fa="Right",ha="Left",da="Top",pa="Bottom",At="padding",ei="margin",Eo="Width",ph="Height",qt="px",Fi=function(e){return nt.getComputedStyle(e)},Z1=function(e){var t=Fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Cd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ji=function(e,t){var n=t&&Fi(e)[gf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Oe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},xf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},m0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},K1=function(e){return function(t){return Oe.utils.snap(m0(e),t)}},mh=function(e){var t=Oe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},J1=function(e){return function(t,n){return mh(m0(e))(t,n.direction)}},Ka=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Yt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Wt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ja=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},Pd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Qa={toggleActions:"play",anticipatePin:0},Ql={top:0,left:0,center:.5,bottom:1,right:1},Dl=function(e,t){if(pi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ql?Ql[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},el=function(e,t,n,i,s,a,o,l){var u=s.startColor,c=s.endColor,h=s.fontSize,f=s.indent,m=s.fontWeight,g=xt.createElement("div"),d=Ss(n)||Rr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,_=d?wt:n,M=e.indexOf("start")!==-1,x=M?u:c,b="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((p||l)&&d?"fixed;":"absolute;"),(p||l||!d)&&(b+=(i===Ut?hh:dh)+":"+(a+parseFloat(f))+"px;"),o&&(b+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=b,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],Ll(g,0,i,M),g},Ll=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Eo]=1,s["border"+o+Eo]=0,s[n.p]=t+"px",Oe.set(e,s)},tt=[],vf={},Pa,Dd=function(){return mn()-ai>34&&(Pa||(Pa=requestAnimationFrame(Es)))},Is=function(){(!Un||!Un.isPressed||Un.startX>wt.clientWidth)&&(it.cache++,Un?Pa||(Pa=requestAnimationFrame(Es)):Es(),ai||Ts("scrollStart"),ai=mn())},Qu=function(){u0=nt.innerWidth,l0=nt.innerHeight},Zo=function(){it.cache++,!Qt&&!o0&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!a0||u0!==nt.innerWidth||Math.abs(nt.innerHeight-l0)>nt.innerHeight*.25)&&Kl.restart(!0)},ws={},Q1=[],g0=function r(){return Wt(et,"scrollEnd",r)||cs(!0)},Ts=function(e){return ws[e]&&ws[e].map(function(t){return t()})||Q1},Bn=[],_0=function(e){for(var t=0;t<Bn.length;t+=5)(!e||Bn[t+4]&&Bn[t+4].query===e)&&(Bn[t].style.cssText=Bn[t+1],Bn[t].getBBox&&Bn[t].setAttribute("transform",Bn[t+2]||""),Bn[t+3].uncache=1)},gh=function(e,t){var n;for(pn=0;pn<tt.length;pn++)n=tt[pn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&_0(t),t||Ts("revert")},x0=function(e,t){it.cache++,(t||!mi)&&it.forEach(function(n){return xn(n)&&n.cacheID++&&(n.rec=0)}),pi(e)&&(nt.history.scrollRestoration=fh=e)},mi,vs=0,Ld,e3=function(){if(Ld!==vs){var e=Ld=vs;requestAnimationFrame(function(){return e===vs&&cs(!0)})}},cs=function(e,t){if(ai&&!e){Yt(et,"scrollEnd",g0);return}mi=et.isRefreshing=!0,it.forEach(function(i){return xn(i)&&i.cacheID++&&(i.rec=i())});var n=Ts("refreshInit");s0&&et.sort(),t||gh(),it.forEach(function(i){xn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),tt.forEach(function(i,s){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-o),i.revert(!1,1)}}),tt.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,Tr(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),it.forEach(function(i){xn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),x0(fh,1),Kl.pause(),vs++,Es(2),tt.forEach(function(i){return xn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),mi=et.isRefreshing=!1,Ts("refresh")},Rd=0,Rl=1,os,Es=function(e){if(!mi||e===2){et.isUpdating=!0,os&&os.update(0);var t=tt.length,n=mn(),i=n-Ku>=50,s=t&&tt[0].scroll();if(Rl=Rd>s?-1:1,Rd=s,i&&(ai&&!bu&&n-ai>200&&(ai=0,Ts("scrollEnd")),Cl=Ku,Ku=n),Rl<0){for(pn=t;pn-- >0;)tt[pn]&&tt[pn].update(0,i);Rl=1}else for(pn=0;pn<t;pn++)tt[pn]&&tt[pn].update(0,i);et.isUpdating=!1}Pa=0},yf=[d0,p0,dh,hh,ei+pa,ei+fa,ei+da,ei+ha,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Fl=yf.concat([_s,xs,"boxSizing","max"+Eo,"max"+ph,"position",ei,At,At+da,At+fa,At+pa,At+ha]),t3=function(e,t,n){po(n);var i=e._gsap;if(i.spacerIsNative)po(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ec=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=yf.length,a=t.style,o=e.style,l;s--;)l=yf[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[dh]=o[hh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[_s]=xf(e,_n)+qt,a[xs]=xf(e,Ut)+qt,a[At]=o[ei]=o[p0]=o[d0]="0",po(i),o[_s]=o["max"+Eo]=n[_s],o[xs]=o["max"+ph]=n[xs],o[At]=n[At],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},n3=/([A-Z])/g,po=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Oe.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(n3,"-$1").toLowerCase())}},tl=function(e){for(var t=Fl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Fl[s],n[Fl[s]]);return i.t=e,i},i3=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Il={left:0,top:0},Fd=function(e,t,n,i,s,a,o,l,u,c,h,f,m){xn(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Dl("0"+e.substr(3),n):0));var g=m?m.time():0,d,p,_;if(m&&m.seek(0),jo(e))o&&Ll(o,n,i,!0);else{xn(t)&&(t=t(l));var M=(e||"0").split(" "),x,b,v,T;_=Mn(t)||wt,x=Ji(_)||{},(!x||!x.left&&!x.top)&&Fi(_).display==="none"&&(T=_.style.display,_.style.display="block",x=Ji(_),T?_.style.display=T:_.style.removeProperty("display")),b=Dl(M[0],x[i.d]),v=Dl(M[1]||"0",n),e=x[i.p]-u[i.p]-c+b+s-v,o&&Ll(o,v,i,n-v<20||o._isStart&&v>20),n-=n-v}if(a){var E=e+n,y=a._isStart;d="scroll"+i.d2,Ll(a,E,i,y&&E>20||!y&&(h?Math.max(wt[d],Ri[d]):a.parentNode[d])<=E+1),h&&(u=Ji(o),h&&(a.style[i.op.p]=u[i.op.p]-i.op.m-a._offset+qt))}return m&&_&&(d=Ji(_),m.seek(f),p=Ji(_),m._caScrollDist=d[i.p]-p[i.p],e=e/m._caScrollDist*f),m&&m.seek(g),m?e:Math.round(e)},r3=/(webkit|moz|length|cssText|inset)/i,Id=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===wt){e._stOrig=s.cssText,o=Fi(e);for(a in o)!+a&&!r3.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Oe.core.getCache(e).uncache=1,t.appendChild(e)}},Ud=function(e,t){var n=Nr(e,t),i="_scroll"+t.p2,s,a,o=function l(u,c,h,f,m){var g=l.tween,d=c.onComplete,p={};return h=h||n(),m=f&&m||0,f=f||u-h,g&&g.kill(),s=Math.round(h),c[i]=u,c.modifiers=p,p[i]=function(_){return _=Math.round(n()),_!==s&&_!==a&&Math.abs(_-s)>3&&Math.abs(_-a)>3?(g.kill(),l.tween=0):_=h+f*g.ratio+m*g.ratio*g.ratio,a=s,s=Math.round(_)},c.onComplete=function(){l.tween=0,d&&d.call(g)},g=l.tween=Oe.to(e,c),g};return e[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},Yt(e,"wheel",n.wheelHandler),o},et=function(){function r(t,n){Js||r.register(Oe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ja){this.update=this.refresh=this.kill=Ei;return}n=Cd(pi(n)||jo(n)||n.nodeType?{trigger:n}:n,Qa);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,h=s.scrub,f=s.trigger,m=s.pin,g=s.pinSpacing,d=s.invalidateOnRefresh,p=s.anticipatePin,_=s.onScrubComplete,M=s.onSnapComplete,x=s.once,b=s.snap,v=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,y=s.fastScrollEnd,w=s.preventOverlaps,D=n.horizontal||n.containerAnimation&&n.horizontal!==!1?_n:Ut,O=!h&&h!==0,Q=Mn(n.scroller||nt),G=Oe.core.getCache(Q),U=Ss(Q),Y=("pinType"in n?n.pinType:Rr(Q,"pinType")||U&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Z=O&&n.toggleActions.split(" "),B="markers"in n?n.markers:Qa.markers,ae=U?0:parseFloat(Fi(Q)["border"+D.p2+Eo])||0,F=this,$=n.onRefreshInit&&function(){return n.onRefreshInit(F)},X=$1(Q,U,D),he=j1(Q,U),ce=0,ge=0,q=Nr(Q,D),Fe,be,Re,ve,ke,P,R,j,se,ie,I,de,ne,me,ue,A,S,z,ee,te,fe,_e,L,k,xe,Te,ye,De,Me,we,We,Xe,N,oe,pe,Ee,Ie,je;if(_f(F),F._dir=D,p*=45,F.scroller=Q,F.scroll=E?E.time.bind(E):q,ve=q(),F.vars=n,i=i||n.animation,"refreshPriority"in n&&(s0=1,n.refreshPriority===-9999&&(os=F)),G.tweenScroll=G.tweenScroll||{top:Ud(Q,Ut),left:Ud(Q,_n)},F.tweenTo=Fe=G.tweenScroll[D.p],F.scrubDuration=function(re){We=jo(re)&&re,We?we?we.duration(re):we=Oe.to(i,{ease:"expo",totalProgress:"+=0.001",duration:We,paused:!0,onComplete:function(){return _&&_(F)}}):(we&&we.progress(1).kill(),we=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),F.animation=i.pause(),i.scrollTrigger=F,F.scrubDuration(h),De=0,l||(l=i.vars.id)),tt.push(F),b&&((!Pl(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in wt.style&&Oe.set(U?[wt,Ri]:Q,{scrollBehavior:"auto"}),it.forEach(function(re){return xn(re)&&re.target===(U?xt.scrollingElement||Ri:Q)&&(re.smooth=!1)}),Re=xn(b.snapTo)?b.snapTo:b.snapTo==="labels"?K1(i):b.snapTo==="labelsDirectional"?J1(i):b.directional!==!1?function(re,Pe){return mh(b.snapTo)(re,mn()-ge<500?0:Pe.direction)}:Oe.utils.snap(b.snapTo),Xe=b.duration||{min:.1,max:2},Xe=Pl(Xe)?ro(Xe.min,Xe.max):ro(Xe,Xe),N=Oe.delayedCall(b.delay||We/2||.1,function(){var re=q(),Pe=mn()-ge<500,Ce=Fe.tween;if((Pe||Math.abs(F.getVelocity())<10)&&!Ce&&!bu&&ce!==re){var ze=(re-P)/ne,Et=i&&!O?i.totalProgress():ze,He=Pe?0:(Et-Me)/(mn()-Cl)*1e3||0,St=Oe.utils.clamp(-ze,1-ze,Fs(He/2)*He/.185),C=ze+(b.inertia===!1?0:St),V=ro(0,1,Re(C,F)),J=Math.round(P+V*ne),W=b,le=W.onStart,Ae=W.onInterrupt,Le=W.onComplete;if(re<=R&&re>=P&&J!==re){if(Ce&&!Ce._initted&&Ce.data<=Fs(J-re))return;b.inertia===!1&&(St=V-ze),Fe(J,{duration:Xe(Fs(Math.max(Fs(C-Et),Fs(V-Et))*.185/He/.05||0)),ease:b.ease||"power3",data:Fs(J-re),onInterrupt:function(){return N.restart(!0)&&Ae&&Ae(F)},onComplete:function(){F.update(),ce=q(),De=Me=i&&!O?i.totalProgress():F.progress,M&&M(F),Le&&Le(F)}},re,St*ne,J-re-St*ne),le&&le(F,Fe.tween)}}else F.isActive&&ce!==re&&N.restart(!0)}).pause()),l&&(vf[l]=F),f=F.trigger=Mn(f||m),je=f&&f._gsap&&f._gsap.stRevert,je&&(je=je(F)),m=m===!0?f:Mn(m),pi(o)&&(o={targets:f,className:o}),m&&(g===!1||g===ei||(g=!g&&m.parentNode&&m.parentNode.style&&Fi(m.parentNode).display==="flex"?!1:At),F.pin=m,be=Oe.core.getCache(m),be.spacer?me=be.pinState:(T&&(T=Mn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),be.spacerIsNative=!!T,T&&(be.spacerState=tl(T))),be.spacer=S=T||xt.createElement("div"),S.classList.add("pin-spacer"),l&&S.classList.add("pin-spacer-"+l),be.pinState=me=tl(m)),n.force3D!==!1&&Oe.set(m,{force3D:!0}),F.spacer=S=be.spacer,ye=Fi(m),L=ye[g+D.os2],ee=Oe.getProperty(m),te=Oe.quickSetter(m,D.a,qt),ec(m,S,ye),A=tl(m)),B){de=Pl(B)?Cd(B,Pd):Pd,ie=el("scroller-start",l,Q,D,de,0),I=el("scroller-end",l,Q,D,de,0,ie),z=ie["offset"+D.op.d2];var gt=Mn(Rr(Q,"content")||Q);j=this.markerStart=el("start",l,gt,D,de,z,0,E),se=this.markerEnd=el("end",l,gt,D,de,z,0,E),E&&(Ie=Oe.quickSetter([j,se],D.a,qt)),!Y&&!(Oi.length&&Rr(Q,"fixedMarkers")===!0)&&(Z1(U?wt:Q),Oe.set([ie,I],{force3D:!0}),xe=Oe.quickSetter(ie,D.a,qt),Te=Oe.quickSetter(I,D.a,qt))}if(E){var Mt=E.vars.onUpdate,Ye=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){F.update(0,0,1),Mt&&Mt.apply(Ye||[])})}F.previous=function(){return tt[tt.indexOf(F)-1]},F.next=function(){return tt[tt.indexOf(F)+1]},F.revert=function(re,Pe){if(!Pe)return F.kill(!0);var Ce=re!==!1||!F.enabled,ze=Qt;Ce!==F.isReverted&&(Ce&&(pe=Math.max(q(),F.scroll.rec||0),oe=F.progress,Ee=i&&i.progress()),j&&[j,se,ie,I].forEach(function(Et){return Et.style.display=Ce?"none":"block"}),Ce&&(Qt=1,F.update(Ce)),m&&(Ce?t3(m,S,me):(!v||!F.isActive)&&ec(m,S,Fi(m),k)),Ce||F.update(Ce),Qt=ze,F.isReverted=Ce)},F.refresh=function(re,Pe){if(!((Qt||!F.enabled)&&!Pe)){if(m&&re&&ai){Yt(r,"scrollEnd",g0);return}!mi&&$&&$(F),Qt=1,ge=mn(),Fe.tween&&(Fe.tween.kill(),Fe.tween=0),we&&we.pause(),d&&i&&i.revert({kill:!1}).invalidate(),F.isReverted||F.revert(!0,!0),F._subPinOffset=!1;for(var Ce=X(),ze=he(),Et=E?E.duration():Tr(Q,D),He=0,St=0,C=n.end,V=n.endTrigger||f,J=n.start||(n.start===0||!f?0:m?"0 0":"0 100%"),W=F.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer),le=f&&Math.max(0,tt.indexOf(F))||0,Ae=le,Le,Ue,Ve,Ze,Ne,Be,lt,Xt,Yn,Ln;Ae--;)Be=tt[Ae],Be.end||Be.refresh(0,1)||(Qt=1),lt=Be.pin,lt&&(lt===f||lt===m)&&!Be.isReverted&&(Ln||(Ln=[]),Ln.unshift(Be),Be.revert(!0,!0)),Be!==tt[Ae]&&(le--,Ae--);for(xn(J)&&(J=J(F)),P=Fd(J,f,Ce,D,q(),j,ie,F,ze,ae,Y,Et,E)||(m?-.001:0),xn(C)&&(C=C(F)),pi(C)&&!C.indexOf("+=")&&(~C.indexOf(" ")?C=(pi(J)?J.split(" ")[0]:"")+C:(He=Dl(C.substr(2),Ce),C=pi(J)?J:P+He,V=f)),R=Math.max(P,Fd(C||(V?"100% 0":Et),V,Ce,D,q()+He,se,I,F,ze,ae,Y,Et,E))||-.001,ne=R-P||(P-=.01)&&.001,He=0,Ae=le;Ae--;)Be=tt[Ae],lt=Be.pin,lt&&Be.start-Be._pinPush<=P&&!E&&Be.end>0&&(Le=Be.end-Be.start,(lt===f&&Be.start-Be._pinPush<P||lt===W)&&!jo(J)&&(He+=Le*(1-Be.progress)),lt===m&&(St+=Le));if(P+=He,R+=He,F._pinPush=St,j&&He&&(Le={},Le[D.a]="+="+He,W&&(Le[D.p]="-="+q()),Oe.set([j,se],Le)),m)Le=Fi(m),Ze=D===Ut,Ve=q(),fe=parseFloat(ee(D.a))+St,!Et&&R>1&&((U?wt:Q).style["overflow-"+D.a]="scroll"),ec(m,S,Le),A=tl(m),Ue=Ji(m,!0),Xt=Y&&Nr(Q,Ze?_n:Ut)(),g&&(k=[g+D.os2,ne+St+qt],k.t=S,Ae=g===At?xf(m,D)+ne+St:0,Ae&&k.push(D.d,Ae+qt),po(k),W&&tt.forEach(function(dt){dt.pin===W&&dt.vars.pinSpacing!==!1&&(dt._subPinOffset=!0)}),Y&&q(pe)),Y&&(Ne={top:Ue.top+(Ze?Ve-P:Xt)+qt,left:Ue.left+(Ze?Xt:Ve-P)+qt,boxSizing:"border-box",position:"fixed"},Ne[_s]=Ne["max"+Eo]=Math.ceil(Ue.width)+qt,Ne[xs]=Ne["max"+ph]=Math.ceil(Ue.height)+qt,Ne[ei]=Ne[ei+da]=Ne[ei+fa]=Ne[ei+pa]=Ne[ei+ha]="0",Ne[At]=Le[At],Ne[At+da]=Le[At+da],Ne[At+fa]=Le[At+fa],Ne[At+pa]=Le[At+pa],Ne[At+ha]=Le[At+ha],ue=i3(me,Ne,v),mi&&q(0)),i?(Yn=i._initted,ju(1),i.render(i.duration(),!0,!0),_e=ee(D.a)-fe+ne+St,ne!==_e&&Y&&ue.splice(ue.length-2,2),i.render(0,!0,!0),Yn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ju(0)):_e=ne;else if(f&&q()&&!E)for(Ue=f.parentNode;Ue&&Ue!==wt;)Ue._pinOffset&&(P-=Ue._pinOffset,R-=Ue._pinOffset),Ue=Ue.parentNode;Ln&&Ln.forEach(function(dt){return dt.revert(!1,!0)}),F.start=P,F.end=R,ve=ke=mi?pe:q(),!E&&!mi&&(ve<pe&&q(pe),F.scroll.rec=0),F.revert(!1,!0),N&&(ce=-1,F.isActive&&q(P+ne*oe),N.restart(!0)),Qt=0,i&&O&&(i._initted||Ee)&&i.progress()!==Ee&&i.progress(Ee,!0).render(i.time(),!0,!0),(oe!==F.progress||E)&&(i&&!O&&i.totalProgress(oe,!0),F.progress=(ve-P)/ne===oe?0:oe),m&&g&&(S._pinOffset=Math.round(F.progress*_e)),c&&!mi&&c(F)}},F.getVelocity=function(){return(q()-ke)/(mn()-Cl)*1e3||0},F.endAnimation=function(){zo(F.callbackAnimation),i&&(we?we.progress(1):i.paused()?O||zo(i,F.direction<0,1):zo(i,i.reversed()))},F.labelToScroll=function(re){return i&&i.labels&&(P||F.refresh()||P)+i.labels[re]/i.duration()*ne||0},F.getTrailing=function(re){var Pe=tt.indexOf(F),Ce=F.direction>0?tt.slice(0,Pe).reverse():tt.slice(Pe+1);return(pi(re)?Ce.filter(function(ze){return ze.vars.preventOverlaps===re}):Ce).filter(function(ze){return F.direction>0?ze.end<=P:ze.start>=R})},F.update=function(re,Pe,Ce){if(!(E&&!Ce&&!re)){var ze=mi?pe:F.scroll(),Et=re?0:(ze-P)/ne,He=Et<0?0:Et>1?1:Et||0,St=F.progress,C,V,J,W,le,Ae,Le,Ue;if(Pe&&(ke=ve,ve=E?q():ze,b&&(Me=De,De=i&&!O?i.totalProgress():He)),p&&!He&&m&&!Qt&&!$a&&ai&&P<ze+(ze-ke)/(mn()-Cl)*p&&(He=1e-4),He!==St&&F.enabled){if(C=F.isActive=!!He&&He<1,V=!!St&&St<1,Ae=C!==V,le=Ae||!!He!=!!St,F.direction=He>St?1:-1,F.progress=He,le&&!Qt&&(J=He&&!St?0:He===1?1:St===1?2:3,O&&(W=!Ae&&Z[J+1]!=="none"&&Z[J+1]||Z[J],Ue=i&&(W==="complete"||W==="reset"||W in i))),w&&(Ae||Ue)&&(Ue||h||!i)&&(xn(w)?w(F):F.getTrailing(w).forEach(function(Be){return Be.endAnimation()})),O||(we&&!Qt&&!$a?((E||os&&os!==F)&&we.render(we._dp._time-we._start),we.resetTo?we.resetTo("totalProgress",He,i._tTime/i._tDur):(we.vars.totalProgress=He,we.invalidate().restart())):i&&i.totalProgress(He,!!Qt)),m){if(re&&g&&(S.style[g+D.os2]=L),!Y)te($o(fe+_e*He));else if(le){if(Le=!re&&He>St&&R+1>ze&&ze+1>=Tr(Q,D),v)if(!re&&(C||Le)){var Ve=Ji(m,!0),Ze=ze-P;Id(m,wt,Ve.top+(D===Ut?Ze:0)+qt,Ve.left+(D===Ut?0:Ze)+qt)}else Id(m,S);po(C||Le?ue:A),_e!==ne&&He<1&&C||te(fe+(He===1&&!Le?_e:0))}}b&&!Fe.tween&&!Qt&&!$a&&N.restart(!0),o&&(Ae||x&&He&&(He<1||!Zu))&&Jl(o.targets).forEach(function(Be){return Be.classList[C||x?"add":"remove"](o.className)}),a&&!O&&!re&&a(F),le&&!Qt?(O&&(Ue&&(W==="complete"?i.pause().totalProgress(1):W==="reset"?i.restart(!0).pause():W==="restart"?i.restart(!0):i[W]()),a&&a(F)),(Ae||!Zu)&&(u&&Ae&&Ju(F,u),H[J]&&Ju(F,H[J]),x&&(He===1?F.kill(!1,1):H[J]=0),Ae||(J=He===1?1:3,H[J]&&Ju(F,H[J]))),y&&!C&&Math.abs(F.getVelocity())>(jo(y)?y:2500)&&(zo(F.callbackAnimation),we?we.progress(1):zo(i,W==="reverse"?1:!He,1))):O&&a&&!Qt&&a(F)}if(Te){var Ne=E?ze/E.duration()*(E._caScrollDist||0):ze;xe(Ne+(ie._isFlipped?1:0)),Te(Ne)}Ie&&Ie(-ze/E.duration()*(E._caScrollDist||0))}},F.enable=function(re,Pe){F.enabled||(F.enabled=!0,Yt(Q,"resize",Zo),Yt(U?xt:Q,"scroll",Is),$&&Yt(r,"refreshInit",$),re!==!1&&(F.progress=oe=0,ve=ke=ce=q()),Pe!==!1&&F.refresh())},F.getTween=function(re){return re&&Fe?Fe.tween:we},F.setPositions=function(re,Pe){m&&(fe+=re-P,_e+=Pe-re-ne,g===At&&F.adjustPinSpacing(Pe-re-ne)),F.start=P=re,F.end=R=Pe,ne=Pe-re,F.update()},F.adjustPinSpacing=function(re){if(k){var Pe=k.indexOf(D.d)+1;k[Pe]=parseFloat(k[Pe])+re+qt,k[1]=parseFloat(k[1])+re+qt,po(k)}},F.disable=function(re,Pe){if(F.enabled&&(re!==!1&&F.revert(!0,!0),F.enabled=F.isActive=!1,Pe||we&&we.pause(),pe=0,be&&(be.uncache=1),$&&Wt(r,"refreshInit",$),N&&(N.pause(),Fe.tween&&Fe.tween.kill()&&(Fe.tween=0)),!U)){for(var Ce=tt.length;Ce--;)if(tt[Ce].scroller===Q&&tt[Ce]!==F)return;Wt(Q,"resize",Zo),Wt(Q,"scroll",Is)}},F.kill=function(re,Pe){F.disable(re,Pe),we&&!Pe&&we.kill(),l&&delete vf[l];var Ce=tt.indexOf(F);Ce>=0&&tt.splice(Ce,1),Ce===pn&&Rl>0&&pn--,Ce=0,tt.forEach(function(ze){return ze.scroller===F.scroller&&(Ce=1)}),Ce||mi||(F.scroll.rec=0),i&&(i.scrollTrigger=null,re&&i.revert({kill:!1}),Pe||i.kill()),j&&[j,se,ie,I].forEach(function(ze){return ze.parentNode&&ze.parentNode.removeChild(ze)}),os===F&&(os=0),m&&(be&&(be.uncache=1),Ce=0,tt.forEach(function(ze){return ze.pin===m&&Ce++}),Ce||(be.spacer=0)),n.onKill&&n.onKill(F)},F.enable(!1,!1),je&&je(F),!i||!i.add||ne?F.refresh():Oe.delayedCall(.01,function(){return P||R||F.refresh()})&&(ne=.01)&&(P=R=0),m&&e3()},r.register=function(n){return Js||(Oe=n||f0(),c0()&&window.document&&r.enable(),Js=ja),Js},r.defaults=function(n){if(n)for(var i in n)Qa[i]=n[i];return Qa},r.disable=function(n,i){ja=0,tt.forEach(function(a){return a[i?"kill":"disable"](n)}),Wt(nt,"wheel",Is),Wt(xt,"scroll",Is),clearInterval(Ya),Wt(xt,"touchcancel",Ei),Wt(wt,"touchstart",Ei),Ka(Wt,xt,"pointerdown,touchstart,mousedown",Ed),Ka(Wt,xt,"pointerup,touchend,mouseup",Ad),Kl.kill(),Za(Wt);for(var s=0;s<it.length;s+=3)Ja(Wt,it[s],it[s+1]),Ja(Wt,it[s],it[s+2])},r.enable=function(){if(nt=window,xt=document,Ri=xt.documentElement,wt=xt.body,Oe&&(Jl=Oe.utils.toArray,ro=Oe.utils.clamp,_f=Oe.core.context||Ei,ju=Oe.core.suppressOverwrites||Ei,fh=nt.history.scrollRestoration||"auto",Oe.core.globals("ScrollTrigger",r),wt)){ja=1,Lt.register(Oe),r.isTouch=Lt.isTouch,xr=Lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Yt(nt,"wheel",Is),r0=[nt,xt,Ri,wt],Oe.matchMedia?(r.matchMedia=function(l){var u=Oe.matchMedia(),c;for(c in l)u.add(c,l[c]);return u},Oe.addEventListener("matchMediaInit",function(){return gh()}),Oe.addEventListener("matchMediaRevert",function(){return _0()}),Oe.addEventListener("matchMedia",function(){cs(0,1),Ts("matchMedia")}),Oe.matchMedia("(orientation: portrait)",function(){return Qu(),Qu})):console.warn("Requires GSAP 3.11.0 or later"),Qu(),Yt(xt,"scroll",Is);var n=wt.style,i=n.borderTopStyle,s=Oe.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Ji(wt),Ut.m=Math.round(a.top+Ut.sc())||0,_n.m=Math.round(a.left+_n.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ya=setInterval(Dd,250),Oe.delayedCall(.5,function(){return $a=0}),Yt(xt,"touchcancel",Ei),Yt(wt,"touchstart",Ei),Ka(Yt,xt,"pointerdown,touchstart,mousedown",Ed),Ka(Yt,xt,"pointerup,touchend,mouseup",Ad),gf=Oe.utils.checkPrefix("transform"),Fl.push(gf),Js=mn(),Kl=Oe.delayedCall(.2,cs).pause(),Qs=[xt,"visibilitychange",function(){var l=nt.innerWidth,u=nt.innerHeight;xt.hidden?(wd=l,Td=u):(wd!==l||Td!==u)&&Zo()},xt,"DOMContentLoaded",cs,nt,"load",cs,nt,"resize",Zo],Za(Yt),tt.forEach(function(l){return l.enable(0,1)}),o=0;o<it.length;o+=3)Ja(Wt,it[o],it[o+1]),Ja(Wt,it[o],it[o+2])}},r.config=function(n){"limitCallbacks"in n&&(Zu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ya)||(Ya=i)&&setInterval(Dd,i),"ignoreMobileResize"in n&&(a0=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Za(Wt)||Za(Yt,n.autoRefreshEvents||"none"),o0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Mn(n),a=it.indexOf(s),o=Ss(s);~a&&it.splice(a,o?6:2),i&&(o?Oi.unshift(nt,i,wt,i,Ri,i):Oi.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(pi(n)?Mn(n):n).getBoundingClientRect(),o=a[s?_s:xs]*i||0;return s?a.right-o>0&&a.left+o<nt.innerWidth:a.bottom-o>0&&a.top+o<nt.innerHeight},r.positionInViewport=function(n,i,s){pi(n)&&(n=Mn(n));var a=n.getBoundingClientRect(),o=a[s?_s:xs],l=i==null?o/2:i in Ql?Ql[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/nt.innerWidth:(a.top+l)/nt.innerHeight},r.killAll=function(n){if(tt.forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ws.killAll||[];ws={},i.forEach(function(s){return s()})}},r}();et.version="3.11.3";et.saveStyles=function(r){return r?Jl(r).forEach(function(e){if(e&&e.style){var t=Bn.indexOf(e);t>=0&&Bn.splice(t,5),Bn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Oe.core.getCache(e),_f())}}):Bn};et.revert=function(r,e){return gh(!r,e)};et.create=function(r,e){return new et(r,e)};et.refresh=function(r){return r?Zo():(Js||et.register())&&cs(!0)};et.update=Es;et.clearScrollMemory=x0;et.maxScroll=function(r,e){return Tr(r,e?_n:Ut)};et.getScrollFunc=function(r,e){return Nr(Mn(r),e?_n:Ut)};et.getById=function(r){return vf[r]};et.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!ai};et.snapDirectional=mh;et.addEventListener=function(r,e){var t=ws[r]||(ws[r]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(r,e){var t=ws[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};et.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(u,c){var h=[],f=[],m=Oe.delayedCall(i,function(){c(h,f),h=[],f=[]}).pause();return function(g){h.length||m.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&m.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&xn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return xn(s)&&(s=s(),Yt(et,"refresh",function(){return s=e.batchMax()})),Jl(r).forEach(function(l){var u={};for(o in n)u[o]=n[o];u.trigger=l,t.push(et.create(u))}),t};var Bd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},tc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Lt.isTouch?" pinch-zoom":""):"none",e===Ri&&r(wt,t)},Od={auto:1,scroll:1},s3=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Oe.core.getCache(s),o=mn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s.scrollHeight<=s.clientHeight;)s=s.parentNode;a._isScroll=s&&!Ss(s)&&s!==n&&(Od[(l=Fi(s)).overflowY]||Od[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},v0=function(e,t,n,i){return Lt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&s3,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Yt(xt,Lt.eventTypes[0],kd,!1,!0)},onDisable:function(){return Wt(xt,Lt.eventTypes[0],kd,!0)}})},o3=/(input|label|select|textarea)/i,Nd,kd=function(e){var t=o3.test(e.target.tagName);(t||Nd)&&(e._gsapAllow=!0,Nd=t)},a3=function(e){Pl(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a,o,l=Mn(e.target)||Ri,u=Oe.core.globals().ScrollSmoother,c=u&&u.get(),h=xr&&(e.content&&Mn(e.content)||c&&e.content!==!1&&!c.smooth()&&c.content()),f=Nr(l,Ut),m=Nr(l,_n),g=1,d=(Lt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,p=0,_=xn(i)?function(){return i(a)}:function(){return i||2.8},M,x,b=v0(l,e.type,!0,s),v=function(){return x=!1},T=Ei,E=Ei,y=function(){o=Tr(l,Ut),E=ro(xr?1:0,o),n&&(T=ro(0,Tr(l,_n))),M=vs},w=function(){h._gsap.y=$o(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(x){requestAnimationFrame(v);var Z=$o(a.deltaY/2),B=E(f.v-Z);if(h&&B!==f.v+f.offset){f.offset=B-f.v;var ae=$o((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+ae+", 0, 1)",h._gsap.y=ae+"px",f.cacheID=it.cache,Es()}return!0}f.offset&&w(),x=!0},O,Q,G,U,Y=function(){y(),O.isActive()&&O.vars.scrollY>o&&(f()>o?O.progress(1)&&f(o):O.resetTo("scrollY",o))};return h&&Oe.set(h,{y:"+=0"}),e.ignoreCheck=function(H){return xr&&H.type==="touchmove"&&D()||g>1.05&&H.type!=="touchstart"||a.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){var H=g;g=$o((nt.visualViewport&&nt.visualViewport.scale||1)/d),O.pause(),H!==g&&tc(l,g>1.01?!0:n?!1:"x"),Q=m(),G=f(),y(),M=vs},e.onRelease=e.onGestureStart=function(H,Z){if(f.offset&&w(),!Z)U.restart(!0);else{it.cache++;var B=_(),ae,F;n&&(ae=m(),F=ae+B*.05*-H.velocityX/.227,B*=Bd(m,ae,F,Tr(l,_n)),O.vars.scrollX=T(F)),ae=f(),F=ae+B*.05*-H.velocityY/.227,B*=Bd(f,ae,F,Tr(l,Ut)),O.vars.scrollY=E(F),O.invalidate().duration(B).play(.01),(xr&&O.vars.scrollY>=o||ae>=o-1)&&Oe.to({},{onUpdate:Y,duration:B})}},e.onWheel=function(){O._ts&&O.pause(),mn()-p>1e3&&(M=0,p=mn())},e.onChange=function(H,Z,B,ae,F){if(vs!==M&&y(),Z&&n&&m(T(ae[2]===Z?Q+(H.startX-H.x):m()+Z-ae[1])),B){f.offset&&w();var $=F[2]===B,X=$?G+H.startY-H.y:f()+B-F[1],he=E(X);$&&X!==he&&(G+=he-X),f(he)}(B||Z)&&Es()},e.onEnable=function(){tc(l,n?!1:"x"),et.addEventListener("refresh",Y),Yt(nt,"resize",Y),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),b.enable()},e.onDisable=function(){tc(l,!0),Wt(nt,"resize",Y),et.removeEventListener("refresh",Y),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Lt(e),a.iOS=xr,xr&&!f()&&f(1),xr&&Oe.ticker.add(Ei),U=a._dc,O=Oe.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:U.vars.onComplete}),a};et.sort=function(r){return tt.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};et.observe=function(r){return new Lt(r)};et.normalizeScroll=function(r){if(typeof r>"u")return Un;if(r===!0&&Un)return Un.enable();if(r===!1)return Un&&Un.kill();var e=r instanceof Lt?r:a3(r);return Un&&Un.target===e.target&&Un.kill(),Ss(e.target)&&(Un=e),e};et.core={_getVelocityProp:mf,_inputObserver:v0,_scrollers:it,_proxies:Oi,bridge:{ss:function(){ai||Ts("scrollStart"),ai=mn()},ref:function(){return Qt}}};f0()&&Oe.registerPlugin(et);const l3={preserveAspectRatio:"xMidYMin",class:"line",width:"942",height:"3187",viewBox:"0 0 942 3187",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u3=zr({__name:"SvgAnim",setup(r){Cn.registerPlugin(et);const e=nr();return lr(()=>{setTimeout(()=>{const t=e.value,n=Math.floor(t.getTotalLength());Cn.timeline({scrollTrigger:{trigger:t,markers:!0,scrub:!0,start:"top+=100 top",end:"bottom bottom"}}).set(t,{"stroke-width":"100px"}).fromTo(t,{"stroke-dasharray":n,"stroke-dashoffset":n},{"stroke-dashoffset":"0"})},300)}),(t,n)=>(Wn(),zi("div",null,[(Wn(),zi("svg",l3,[Ge("path",{ref_key:"targetLine",ref:e,d:"M358.612 51C230.278 77 2.51186 231 118.112 639C262.612 1149 154.112 1269.5 70.1118 1521.5C-13.8882 1773.5 192.029 1959.5 345 1959.5C518.388 1959.5 687.753 1770.39 832.612 1937C979.112 2105.5 746.5 2233 784 2446.5C822.531 2665.87 958.612 2662 850.612 3136",stroke:"#D7D7D7","stroke-width":"100","stroke-linecap":"round"},null,512)]))]))}});const c3=Gr(u3,[["__scopeId","data-v-a3dd4568"]]),f3=zr({__name:"Background",setup(r){Cn.registerPlugin(et);const e=nr(),t=nr();return lr(()=>{Cn.to(t.value,{width:"500vw",height:"500vw",scrollTrigger:{trigger:e.value,scrub:!0,start:"top center",end:"bottom top"}})}),(n,i)=>(Wn(),zi(Nn,null,[Ge("div",{ref_key:"activator",ref:e},null,512),Ge("div",{ref_key:"box",ref:t,class:"box"},null,512)],64))}});const h3=Gr(f3,[["__scopeId","data-v-648b3d5a"]]);var zd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y0={exports:{}};(function(r){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(n){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,a={},o={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function M(x){return x instanceof l?new l(x.type,M(x.content),x.alias):Array.isArray(x)?x.map(M):x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(M){return Object.prototype.toString.call(M).slice(8,-1)},objId:function(M){return M.__id||Object.defineProperty(M,"__id",{value:++s}),M.__id},clone:function M(x,b){b=b||{};var v,T;switch(o.util.type(x)){case"Object":if(T=o.util.objId(x),b[T])return b[T];v={},b[T]=v;for(var E in x)x.hasOwnProperty(E)&&(v[E]=M(x[E],b));return v;case"Array":return T=o.util.objId(x),b[T]?b[T]:(v=[],b[T]=v,x.forEach(function(y,w){v[w]=M(y,b)}),v);default:return x}},getLanguage:function(M){for(;M;){var x=i.exec(M.className);if(x)return x[1].toLowerCase();M=M.parentElement}return"none"},setLanguage:function(M,x){M.className=M.className.replace(RegExp(i,"gi"),""),M.classList.add("language-"+x)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(v){var M=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(v.stack)||[])[1];if(M){var x=document.getElementsByTagName("script");for(var b in x)if(x[b].src==M)return x[b]}return null}},isActive:function(M,x,b){for(var v="no-"+x;M;){var T=M.classList;if(T.contains(x))return!0;if(T.contains(v))return!1;M=M.parentElement}return!!b}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(M,x){var b=o.util.clone(o.languages[M]);for(var v in x)b[v]=x[v];return b},insertBefore:function(M,x,b,v){v=v||o.languages;var T=v[M],E={};for(var y in T)if(T.hasOwnProperty(y)){if(y==x)for(var w in b)b.hasOwnProperty(w)&&(E[w]=b[w]);b.hasOwnProperty(y)||(E[y]=T[y])}var D=v[M];return v[M]=E,o.languages.DFS(o.languages,function(O,Q){Q===D&&O!=M&&(this[O]=E)}),E},DFS:function M(x,b,v,T){T=T||{};var E=o.util.objId;for(var y in x)if(x.hasOwnProperty(y)){b.call(x,y,x[y],v||y);var w=x[y],D=o.util.type(w);D==="Object"&&!T[E(w)]?(T[E(w)]=!0,M(w,b,null,T)):D==="Array"&&!T[E(w)]&&(T[E(w)]=!0,M(w,b,y,T))}}},plugins:{},highlightAll:function(M,x){o.highlightAllUnder(document,M,x)},highlightAllUnder:function(M,x,b){var v={callback:b,container:M,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",v),v.elements=Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)),o.hooks.run("before-all-elements-highlight",v);for(var T=0,E;E=v.elements[T++];)o.highlightElement(E,x===!0,v.callback)},highlightElement:function(M,x,b){var v=o.util.getLanguage(M),T=o.languages[v];o.util.setLanguage(M,v);var E=M.parentElement;E&&E.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(E,v);var y=M.textContent,w={element:M,language:v,grammar:T,code:y};function D(Q){w.highlightedCode=Q,o.hooks.run("before-insert",w),w.element.innerHTML=w.highlightedCode,o.hooks.run("after-highlight",w),o.hooks.run("complete",w),b&&b.call(w.element)}if(o.hooks.run("before-sanity-check",w),E=w.element.parentElement,E&&E.nodeName.toLowerCase()==="pre"&&!E.hasAttribute("tabindex")&&E.setAttribute("tabindex","0"),!w.code){o.hooks.run("complete",w),b&&b.call(w.element);return}if(o.hooks.run("before-highlight",w),!w.grammar){D(o.util.encode(w.code));return}if(x&&n.Worker){var O=new Worker(o.filename);O.onmessage=function(Q){D(Q.data)},O.postMessage(JSON.stringify({language:w.language,code:w.code,immediateClose:!0}))}else D(o.highlight(w.code,w.grammar,w.language))},highlight:function(M,x,b){var v={code:M,grammar:x,language:b};if(o.hooks.run("before-tokenize",v),!v.grammar)throw new Error('The language "'+v.language+'" has no grammar.');return v.tokens=o.tokenize(v.code,v.grammar),o.hooks.run("after-tokenize",v),l.stringify(o.util.encode(v.tokens),v.language)},tokenize:function(M,x){var b=x.rest;if(b){for(var v in b)x[v]=b[v];delete x.rest}var T=new h;return f(T,T.head,M),c(M,T,x,T.head,0),g(T)},hooks:{all:{},add:function(M,x){var b=o.hooks.all;b[M]=b[M]||[],b[M].push(x)},run:function(M,x){var b=o.hooks.all[M];if(!(!b||!b.length))for(var v=0,T;T=b[v++];)T(x)}},Token:l};n.Prism=o;function l(M,x,b,v){this.type=M,this.content=x,this.alias=b,this.length=(v||"").length|0}l.stringify=function M(x,b){if(typeof x=="string")return x;if(Array.isArray(x)){var v="";return x.forEach(function(D){v+=M(D,b)}),v}var T={type:x.type,content:M(x.content,b),tag:"span",classes:["token",x.type],attributes:{},language:b},E=x.alias;E&&(Array.isArray(E)?Array.prototype.push.apply(T.classes,E):T.classes.push(E)),o.hooks.run("wrap",T);var y="";for(var w in T.attributes)y+=" "+w+'="'+(T.attributes[w]||"").replace(/"/g,"&quot;")+'"';return"<"+T.tag+' class="'+T.classes.join(" ")+'"'+y+">"+T.content+"</"+T.tag+">"};function u(M,x,b,v){M.lastIndex=x;var T=M.exec(b);if(T&&v&&T[1]){var E=T[1].length;T.index+=E,T[0]=T[0].slice(E)}return T}function c(M,x,b,v,T,E){for(var y in b)if(!(!b.hasOwnProperty(y)||!b[y])){var w=b[y];w=Array.isArray(w)?w:[w];for(var D=0;D<w.length;++D){if(E&&E.cause==y+","+D)return;var O=w[D],Q=O.inside,G=!!O.lookbehind,U=!!O.greedy,Y=O.alias;if(U&&!O.pattern.global){var H=O.pattern.toString().match(/[imsuy]*$/)[0];O.pattern=RegExp(O.pattern.source,H+"g")}for(var Z=O.pattern||O,B=v.next,ae=T;B!==x.tail&&!(E&&ae>=E.reach);ae+=B.value.length,B=B.next){var F=B.value;if(x.length>M.length)return;if(!(F instanceof l)){var $=1,X;if(U){if(X=u(Z,ae,M,G),!X||X.index>=M.length)break;var q=X.index,he=X.index+X[0].length,ce=ae;for(ce+=B.value.length;q>=ce;)B=B.next,ce+=B.value.length;if(ce-=B.value.length,ae=ce,B.value instanceof l)continue;for(var ge=B;ge!==x.tail&&(ce<he||typeof ge.value=="string");ge=ge.next)$++,ce+=ge.value.length;$--,F=M.slice(ae,ce),X.index-=ae}else if(X=u(Z,0,F,G),!X)continue;var q=X.index,Fe=X[0],be=F.slice(0,q),Re=F.slice(q+Fe.length),ve=ae+F.length;E&&ve>E.reach&&(E.reach=ve);var ke=B.prev;be&&(ke=f(x,ke,be),ae+=be.length),m(x,ke,$);var P=new l(y,Q?o.tokenize(Fe,Q):Fe,Y,Fe);if(B=f(x,ke,P),Re&&f(x,B,Re),$>1){var R={cause:y+","+D,reach:ve};c(M,x,b,B.prev,ae,R),E&&R.reach>E.reach&&(E.reach=R.reach)}}}}}}function h(){var M={value:null,prev:null,next:null},x={value:null,prev:M,next:null};M.next=x,this.head=M,this.tail=x,this.length=0}function f(M,x,b){var v=x.next,T={value:b,prev:x,next:v};return x.next=T,v.prev=T,M.length++,T}function m(M,x,b){for(var v=x.next,T=0;T<b&&v!==M.tail;T++)v=v.next;x.next=v,v.prev=x,M.length-=T}function g(M){for(var x=[],b=M.head.next;b!==M.tail;)x.push(b.value),b=b.next;return x}if(!n.document)return n.addEventListener&&(o.disableWorkerMessageHandler||n.addEventListener("message",function(M){var x=JSON.parse(M.data),b=x.language,v=x.code,T=x.immediateClose;n.postMessage(o.highlight(v,o.languages[b],b)),T&&n.close()},!1)),o;var d=o.util.currentScript();d&&(o.filename=d.src,d.hasAttribute("data-manual")&&(o.manual=!0));function p(){o.manual||o.highlightAll()}if(!o.manual){var _=document.readyState;_==="loading"||_==="interactive"&&d&&d.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return o}(e);r.exports&&(r.exports=t),typeof zd<"u"&&(zd.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(i,s){var a={};a["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[s]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+s]={pattern:/[\s\S]+/,inside:t.languages[s]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:o},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,i){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:t.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(n){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var s=n.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",i=function(d,p){return"\u2716 Error "+d+" while fetching file: "+p},s="\u2716 Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",l="loading",u="loaded",c="failed",h="pre[data-src]:not(["+o+'="'+u+'"]):not(['+o+'="'+l+'"])';function f(d,p,_){var M=new XMLHttpRequest;M.open("GET",d,!0),M.onreadystatechange=function(){M.readyState==4&&(M.status<400&&M.responseText?p(M.responseText):M.status>=400?_(i(M.status,M.statusText)):_(s))},M.send(null)}function m(d){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(d||"");if(p){var _=Number(p[1]),M=p[2],x=p[3];return M?x?[_,Number(x)]:[_,void 0]:[_,_]}}t.hooks.add("before-highlightall",function(d){d.selector+=", "+h}),t.hooks.add("before-sanity-check",function(d){var p=d.element;if(p.matches(h)){d.code="",p.setAttribute(o,l);var _=p.appendChild(document.createElement("CODE"));_.textContent=n;var M=p.getAttribute("data-src"),x=d.language;if(x==="none"){var b=(/\.(\w+)$/.exec(M)||[,"none"])[1];x=a[b]||b}t.util.setLanguage(_,x),t.util.setLanguage(p,x);var v=t.plugins.autoloader;v&&v.loadLanguages(x),f(M,function(T){p.setAttribute(o,u);var E=m(p.getAttribute("data-range"));if(E){var y=T.split(/\r\n?|\n/g),w=E[0],D=E[1]==null?y.length:E[1];w<0&&(w+=y.length),w=Math.max(0,Math.min(w-1,y.length)),D<0&&(D+=y.length),D=Math.max(0,Math.min(D,y.length)),T=y.slice(w,D).join(`
`),p.hasAttribute("data-start")||p.setAttribute("data-start",String(w+1))}_.textContent=T,t.highlightElement(_)},function(T){p.setAttribute(o,c),_.textContent=T})}}),t.plugins.fileHighlight={highlight:function(p){for(var _=(p||document).querySelectorAll(h),M=0,x;x=_[M++];)t.highlightElement(x)}};var g=!1;t.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(y0);const d3=y0.exports;var p3={exports:{}};(function(r){(function(){if(typeof Prism>"u")return;var e=Object.assign||function(a,o){for(var l in o)o.hasOwnProperty(l)&&(a[l]=o[l]);return a};function t(a){this.defaults=e({},a)}function n(a){return a.replace(/-(\w)/g,function(o,l){return l.toUpperCase()})}function i(a){for(var o=0,l=0;l<a.length;++l)a.charCodeAt(l)=="	".charCodeAt(0)&&(o+=3);return a.length+o}var s={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};t.prototype={setDefaults:function(a){this.defaults=e(this.defaults,a)},normalize:function(a,o){o=e(this.defaults,o);for(var l in o){var u=n(l);l!=="normalize"&&u!=="setDefaults"&&o[l]&&this[u]&&(a=this[u].call(this,a,o[l]))}return a},leftTrim:function(a){return a.replace(/^\s+/,"")},rightTrim:function(a){return a.replace(/\s+$/,"")},tabsToSpaces:function(a,o){return o=o|0||4,a.replace(/\t/g,new Array(++o).join(" "))},spacesToTabs:function(a,o){return o=o|0||4,a.replace(RegExp(" {"+o+"}","g"),"	")},removeTrailing:function(a){return a.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(a){return a.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(a){var o=a.match(/^[^\S\n\r]*(?=\S)/gm);return!o||!o[0].length||(o.sort(function(l,u){return l.length-u.length}),!o[0].length)?a:a.replace(RegExp("^"+o[0],"gm"),"")},indent:function(a,o){return a.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++o).join("	")+"$&")},breakLines:function(a,o){o=o===!0?80:o|0||80;for(var l=a.split(`
`),u=0;u<l.length;++u)if(!(i(l[u])<=o)){for(var c=l[u].split(/(\s+)/g),h=0,f=0;f<c.length;++f){var m=i(c[f]);h+=m,h>o&&(c[f]=`
`+c[f],h=m)}l[u]=c.join("")}return l.join(`
`)}},r.exports&&(r.exports=t),Prism.plugins.NormalizeWhitespace=new t({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(a){var o=Prism.plugins.NormalizeWhitespace;if(!(a.settings&&a.settings["whitespace-normalization"]===!1)&&!!Prism.util.isActive(a.element,"whitespace-normalization",!0)){if((!a.element||!a.element.parentNode)&&a.code){a.code=o.normalize(a.code,a.settings);return}var l=a.element.parentNode;if(!(!a.code||!l||l.nodeName.toLowerCase()!=="pre")){a.settings==null&&(a.settings={});for(var u in s)if(Object.hasOwnProperty.call(s,u)){var c=s[u];if(l.hasAttribute("data-"+u))try{var h=JSON.parse(l.getAttribute("data-"+u)||"true");typeof h===c&&(a.settings[u]=h)}catch{}}for(var f=l.childNodes,m="",g="",d=!1,p=0;p<f.length;++p){var _=f[p];_==a.element?d=!0:_.nodeName==="#text"&&(d?g+=_.nodeValue:m+=_.nodeValue,l.removeChild(_),--p)}if(!a.element.children.length||!Prism.plugins.KeepMarkup)a.code=m+a.code+g,a.code=o.normalize(a.code,a.settings);else{var M=m+a.element.innerHTML+g;a.element.innerHTML=o.normalize(M,a.settings),a.code=a.element.textContent}}}})})()})(p3);const m3=zr({__name:"SampleCode",props:{type:{type:String,default:"css"}},setup(r){return lr(()=>{window.Prism=window.Prism||{},window.Prism.manual=!0,window.Prism.plugins.NormalizeWhitespace.setDefaults({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),d3.highlightAll()}),(e,t)=>(Wn(),zi("pre",null,[Ge("code",{class:ru("language-"+r.type)},[zl(e.$slots,"default",{},void 0,!0)],2)]))}});const Us=Gr(m3,[["__scopeId","data-v-a7f3cd34"]]),g3={class:"card__heading",ref:"heading"},_3={class:"card__text"},x3=zr({__name:"DescriptionCard",props:{startX:{type:String,default:"0"},startY:{type:String,default:"0"}},setup(r){const e=r;Cn.registerPlugin(et);const t=nr(null);return lr(()=>{Cn.set(t.value,{x:e.startX,y:e.startY,opacity:0}),Cn.to(t.value,{x:0,y:0,opacity:1,scrollTrigger:{trigger:t.value,toggleActions:"play none none reset",start:"top center+=40%",end:"top center-=40%"}})}),(n,i)=>(Wn(),zi("div",{class:"card",ref_key:"card",ref:t},[Ge("h2",g3,[zl(n.$slots,"heading",{},void 0,!0)],512),Ge("div",_3,[zl(n.$slots,"default",{},void 0,!0)])],512))}});const Si=Gr(x3,[["__scopeId","data-v-48a78bae"]]),v3=zr({__name:"SideScroller",setup(r){Cn.registerPlugin(et);const e=nr(null);return lr(()=>{setTimeout(()=>{Cn.to(e.value,{x:(e.value.clientWidth-window.innerWidth)*-1,scrollTrigger:{trigger:e.value,scrub:!0,pin:!0,end:()=>"+="+(e.value.clientWidth-window.innerWidth)}})},300)}),(t,n)=>(Wn(),zi("section",{ref_key:"sideScroller",ref:e,class:"side-scroller"},[zl(t.$slots,"default",{},void 0,!0)],512))}});const y3=Gr(v3,[["__scopeId","data-v-a886c619"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="147",Bs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},b3=0,Wd=1,M3=2,b0=1,S3=2,Ko=3,Ao=0,li=1,Er=2,Fr=0,mo=1,Gd=2,Vd=3,Hd=4,w3=5,eo=100,T3=101,E3=102,Xd=103,qd=104,A3=200,C3=201,P3=202,D3=203,M0=204,S0=205,L3=206,R3=207,F3=208,I3=209,U3=210,B3=0,O3=1,N3=2,bf=3,k3=4,z3=5,W3=6,G3=7,xh=0,V3=1,H3=2,ir=0,X3=1,q3=2,Y3=3,$3=4,j3=5,w0=300,Co=301,Po=302,Mf=303,Sf=304,Mu=306,wf=1e3,_i=1001,Tf=1002,en=1003,Yd=1004,$d=1005,ti=1006,Z3=1007,Su=1008,As=1009,K3=1010,J3=1011,T0=1012,Q3=1013,fs=1014,Ar=1015,Da=1016,ey=1017,ty=1018,go=1020,ny=1021,iy=1022,xi=1023,E0=1024,ry=1025,ys=1026,Do=1027,A0=1028,sy=1029,oy=1030,ay=1031,ly=1033,nc=33776,ic=33777,rc=33778,sc=33779,jd=35840,Zd=35841,Kd=35842,Jd=35843,uy=36196,Qd=37492,ep=37496,tp=37808,np=37809,ip=37810,rp=37811,sp=37812,op=37813,ap=37814,lp=37815,up=37816,cp=37817,fp=37818,hp=37819,dp=37820,pp=37821,mp=36492,Cs=3e3,vt=3001,cy=3200,fy=3201,C0=0,hy=1,Ai="srgb",La="srgb-linear",oc=7680,dy=519,gp=35044,_p="300 es",Ef=1035;class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xp=1234567;const ma=Math.PI/180,eu=180/Math.PI;function Uo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[r&255]+Jt[r>>8&255]+Jt[r>>16&255]+Jt[r>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function gn(r,e,t){return Math.max(e,Math.min(t,r))}function vh(r,e){return(r%e+e)%e}function py(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function my(r,e,t){return r!==e?(t-r)/(e-r):0}function ga(r,e,t){return(1-t)*r+t*e}function gy(r,e,t,n){return ga(r,e,1-Math.exp(-t*n))}function _y(r,e=1){return e-Math.abs(vh(r,e*2)-e)}function xy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function vy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function yy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function by(r,e){return r+Math.random()*(e-r)}function My(r){return r*(.5-Math.random())}function Sy(r){r!==void 0&&(xp=r);let e=xp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wy(r){return r*ma}function Ty(r){return r*eu}function Af(r){return(r&r-1)===0&&r!==0}function Ey(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function tu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ay(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),u=s((e+n)/2),c=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*c,l*h,l*f,o*u);break;case"YZY":r.set(l*f,o*c,l*h,o*u);break;case"ZXZ":r.set(l*h,l*f,o*c,o*u);break;case"XZX":r.set(o*c,l*g,l*m,o*u);break;case"YXY":r.set(l*m,o*c,l*g,o*u);break;case"ZYZ":r.set(l*g,l*m,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jo(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var jn=Object.freeze({__proto__:null,DEG2RAD:ma,RAD2DEG:eu,generateUUID:Uo,clamp:gn,euclideanModulo:vh,mapLinear:py,inverseLerp:my,lerp:ga,damp:gy,pingpong:_y,smoothstep:xy,smootherstep:vy,randInt:yy,randFloat:by,randFloatSpread:My,seededRandom:Sy,degToRad:wy,radToDeg:Ty,isPowerOfTwo:Af,ceilPowerOfTwo:Ey,floorPowerOfTwo:tu,setQuaternionFromProperEuler:Ay,normalize:yn,denormalize:Jo});class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gn{constructor(){Gn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],c=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],M=i[1],x=i[4],b=i[7],v=i[2],T=i[5],E=i[8];return s[0]=a*d+o*M+l*v,s[3]=a*p+o*x+l*T,s[6]=a*_+o*b+l*E,s[1]=u*d+c*M+h*v,s[4]=u*p+c*x+h*T,s[7]=u*_+c*b+h*E,s[2]=f*d+m*M+g*v,s[5]=f*p+m*x+g*T,s[8]=f*_+m*b+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-n*s*c+n*o*l+i*s*u-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=c*a-o*u,f=o*l-c*s,m=u*s-a*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*u-c*n)*d,e[2]=(o*n-i*a)*d,e[3]=f*d,e[4]=(c*t-i*l)*d,e[5]=(i*s-o*t)*d,e[6]=m*d,e[7]=(n*l-u*t)*d,e[8]=(a*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-i*u,i*l,-i*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ac.makeScale(e,t)),this}rotate(e){return this.premultiply(ac.makeRotation(-e)),this}translate(e,t){return this.premultiply(ac.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ac=new Gn;function P0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function nu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ul(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const lc={[Ai]:{[La]:bs},[La]:{[Ai]:Ul}},fn={legacyMode:!0,get workingColorSpace(){return La},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(lc[e]&&lc[e][t]!==void 0){const n=lc[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ft={r:0,g:0,b:0},ci={h:0,s:0,l:0},nl={h:0,s:0,l:0};function uc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function il(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,fn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=fn.workingColorSpace){return this.r=e,this.g=t,this.b=n,fn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=fn.workingColorSpace){if(e=vh(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=uc(a,s,e+1/3),this.g=uc(a,s,e),this.b=uc(a,s,e-1/3)}return fn.toWorkingColorSpace(this,i),this}setStyle(e,t=Ai){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,fn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,fn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,u,c,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,fn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,fn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ai){const n=D0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Ul(e.r),this.g=Ul(e.g),this.b=Ul(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return fn.fromWorkingColorSpace(il(this,Ft),e),gn(Ft.r*255,0,255)<<16^gn(Ft.g*255,0,255)<<8^gn(Ft.b*255,0,255)<<0}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=fn.workingColorSpace){fn.fromWorkingColorSpace(il(this,Ft),t);const n=Ft.r,i=Ft.g,s=Ft.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=c<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=fn.workingColorSpace){return fn.fromWorkingColorSpace(il(this,Ft),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Ai){return fn.fromWorkingColorSpace(il(this,Ft),e),e!==Ai?`color(${e} ${Ft.r} ${Ft.g} ${Ft.b})`:`rgb(${Ft.r*255|0},${Ft.g*255|0},${Ft.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(ci),ci.h+=e,ci.s+=t,ci.l+=n,this.setHSL(ci.h,ci.s,ci.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(nl);const n=ga(ci.h,nl.h,t),i=ga(ci.s,nl.s,t),s=ga(ci.l,nl.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ut.NAMES=D0;let Ns;class L0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=nu("canvas")),Ns.width=e.width,Ns.height=e.height;const n=Ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nu("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=bs(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bs(t[n]/255)*255):t[n]=bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class R0{constructor(e=null){this.isSource=!0,this.uuid=Uo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(cc(i[a].image)):s.push(cc(i[a]))}else s=cc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function cc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?L0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cy=0;class Pn extends Ls{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,n=_i,i=_i,s=ti,a=Su,o=xi,l=As,u=Pn.DEFAULT_ANISOTROPY,c=Cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Uo(),this.name="",this.source=new R0(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==w0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wf:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wf:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=w0;Pn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,n=0,i=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,b=(m+1)/2,v=(_+1)/2,T=(c+f)/4,E=(h+d)/4,y=(g+p)/4;return x>b&&x>v?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=E/n):b>v?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=T/i,s=y/i):v<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(v),n=E/s,i=y/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-c)*(f-c));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-d)/M,this.z=(f-c)/M,this.w=Math.acos((u+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kr extends Ls{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ti,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new R0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class F0 extends Pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Py extends Pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],u=n[i+1],c=n[i+2],h=n[i+3];const f=s[a+0],m=s[a+1],g=s[a+2],d=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||u!==m||c!==g){let p=1-o;const _=l*f+u*m+c*g+h*d,M=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const v=Math.sqrt(x),T=Math.atan2(v,_*M);p=Math.sin(p*T)/v,o=Math.sin(o*T)/v}const b=o*M;if(l=l*p+f*b,u=u*p+m*b,c=c*p+g*b,h=h*p+d*b,p===1-o){const v=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=v,u*=v,c*=v,h*=v}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],u=n[i+2],c=n[i+3],h=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+c*h+l*m-u*f,e[t+1]=l*g+c*f+u*h-o*m,e[t+2]=u*g+c*m+o*f-l*h,e[t+3]=c*g-o*h-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),c=o(i/2),h=o(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*c*h+u*m*g,this._y=u*m*h-f*c*g,this._z=u*c*g+f*m*h,this._w=u*c*h-f*m*g;break;case"YXZ":this._x=f*c*h+u*m*g,this._y=u*m*h-f*c*g,this._z=u*c*g-f*m*h,this._w=u*c*h+f*m*g;break;case"ZXY":this._x=f*c*h-u*m*g,this._y=u*m*h+f*c*g,this._z=u*c*g+f*m*h,this._w=u*c*h-f*m*g;break;case"ZYX":this._x=f*c*h-u*m*g,this._y=u*m*h+f*c*g,this._z=u*c*g-f*m*h,this._w=u*c*h+f*m*g;break;case"YZX":this._x=f*c*h+u*m*g,this._y=u*m*h+f*c*g,this._z=u*c*g-f*m*h,this._w=u*c*h-f*m*g;break;case"XZY":this._x=f*c*h-u*m*g,this._y=u*m*h-f*c*g,this._z=u*c*g+f*m*h,this._w=u*c*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(c-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+u)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-u)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+a*o+i*u-s*l,this._y=i*c+a*l+s*o-n*u,this._z=s*c+a*u+n*l-i*o,this._w=a*c-n*o-i*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=l*t+a*i-o*n,c=l*n+o*t-s*i,h=l*i+s*n-a*t,f=-s*t-a*n-o*i;return this.x=u*l+f*-s+c*-o-h*-a,this.y=c*l+f*-a+h*-s-u*-o,this.z=h*l+f*-o+u*-a-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fc=new K,vp=new Ps;class Fa{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],h=e[l+1],f=e[l+2];c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>s&&(s=c),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),h=e.getY(l),f=e.getZ(l);c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>s&&(s=c),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)jr.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(jr)}else n.boundingBox===null&&n.computeBoundingBox(),hc.copy(n.boundingBox),hc.applyMatrix4(e.matrixWorld),this.union(hc);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jr),jr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),rl.subVectors(this.max,Wo),ks.subVectors(e.a,Wo),zs.subVectors(e.b,Wo),Ws.subVectors(e.c,Wo),cr.subVectors(zs,ks),fr.subVectors(Ws,zs),Zr.subVectors(ks,Ws);let t=[0,-cr.z,cr.y,0,-fr.z,fr.y,0,-Zr.z,Zr.y,cr.z,0,-cr.x,fr.z,0,-fr.x,Zr.z,0,-Zr.x,-cr.y,cr.x,0,-fr.y,fr.x,0,-Zr.y,Zr.x,0];return!dc(t,ks,zs,Ws,rl)||(t=[1,0,0,0,1,0,0,0,1],!dc(t,ks,zs,Ws,rl))?!1:(sl.crossVectors(cr,fr),t=[sl.x,sl.y,sl.z],dc(t,ks,zs,Ws,rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return jr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(jr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new K,new K,new K,new K,new K,new K,new K,new K],jr=new K,hc=new Fa,ks=new K,zs=new K,Ws=new K,cr=new K,fr=new K,Zr=new K,Wo=new K,rl=new K,sl=new K,Kr=new K;function dc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Kr.fromArray(r,s);const o=i.x*Math.abs(Kr.x)+i.y*Math.abs(Kr.y)+i.z*Math.abs(Kr.z),l=e.dot(Kr),u=t.dot(Kr),c=n.dot(Kr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Dy=new Fa,Go=new K,pc=new K;class yh{constructor(e=new K,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dy.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const t=Go.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Go,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(pc)),this.expandByPoint(Go.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new K,mc=new K,ol=new K,hr=new K,gc=new K,al=new K,_c=new K;class Ly{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.direction).multiplyScalar(t).add(this.origin),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){mc.copy(e).add(t).multiplyScalar(.5),ol.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(mc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ol),o=hr.dot(this.direction),l=-hr.dot(ol),u=hr.lengthSq(),c=Math.abs(1-a*a);let h,f,m,g;if(c>0)if(h=a*l-o,f=a*o-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const d=1/c;h*=d,f*=d,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+u}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+u;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(ol).multiplyScalar(f).add(mc),m}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const n=Xi.dot(this.direction),i=Xi.dot(Xi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,i,s){gc.subVectors(t,e),al.subVectors(n,e),_c.crossVectors(gc,al);let a=this.direction.dot(_c),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hr.subVectors(this.origin,e);const l=o*this.direction.dot(al.crossVectors(hr,al));if(l<0)return null;const u=o*this.direction.dot(gc.cross(hr));if(u<0||l+u>a)return null;const c=-o*hr.dot(_c);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,u,c,h,f,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=u,_[6]=c,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gs.setFromMatrixColumn(e,0).length(),s=1/Gs.setFromMatrixColumn(e,1).length(),a=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*c,m=a*h,g=o*c,d=o*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=m+g*u,t[5]=f-d*u,t[9]=-o*l,t[2]=d-f*u,t[6]=g+m*u,t[10]=a*l}else if(e.order==="YXZ"){const f=l*c,m=l*h,g=u*c,d=u*h;t[0]=f+d*o,t[4]=g*o-m,t[8]=a*u,t[1]=a*h,t[5]=a*c,t[9]=-o,t[2]=m*o-g,t[6]=d+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*c,m=l*h,g=u*c,d=u*h;t[0]=f-d*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*c,t[9]=d-f*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*c,m=a*h,g=o*c,d=o*h;t[0]=l*c,t[4]=g*u-m,t[8]=f*u+d,t[1]=l*h,t[5]=d*u+f,t[9]=m*u-g,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*u,g=o*l,d=o*u;t[0]=l*c,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=a*l,m=a*u,g=o*l,d=o*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+d,t[5]=a*c,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*c,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ry,e,Fy)}lookAt(e,t,n){const i=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),dr.crossVectors(n,Fn),dr.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),dr.crossVectors(n,Fn)),dr.normalize(),ll.crossVectors(Fn,dr),i[0]=dr.x,i[4]=ll.x,i[8]=Fn.x,i[1]=dr.y,i[5]=ll.y,i[9]=Fn.y,i[2]=dr.z,i[6]=ll.z,i[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],c=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],M=n[3],x=n[7],b=n[11],v=n[15],T=i[0],E=i[4],y=i[8],w=i[12],D=i[1],O=i[5],Q=i[9],G=i[13],U=i[2],Y=i[6],H=i[10],Z=i[14],B=i[3],ae=i[7],F=i[11],$=i[15];return s[0]=a*T+o*D+l*U+u*B,s[4]=a*E+o*O+l*Y+u*ae,s[8]=a*y+o*Q+l*H+u*F,s[12]=a*w+o*G+l*Z+u*$,s[1]=c*T+h*D+f*U+m*B,s[5]=c*E+h*O+f*Y+m*ae,s[9]=c*y+h*Q+f*H+m*F,s[13]=c*w+h*G+f*Z+m*$,s[2]=g*T+d*D+p*U+_*B,s[6]=g*E+d*O+p*Y+_*ae,s[10]=g*y+d*Q+p*H+_*F,s[14]=g*w+d*G+p*Z+_*$,s[3]=M*T+x*D+b*U+v*B,s[7]=M*E+x*O+b*Y+v*ae,s[11]=M*y+x*Q+b*H+v*F,s[15]=M*w+x*G+b*Z+v*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+s*l*h-i*u*h-s*o*f+n*u*f+i*o*m-n*l*m)+d*(+t*l*m-t*u*f+s*a*f-i*a*m+i*u*c-s*l*c)+p*(+t*u*h-t*o*m-s*a*h+n*a*m+s*o*c-n*u*c)+_*(-i*o*c-t*l*h+t*o*f+i*a*h-n*a*f+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],M=h*p*u-d*f*u+d*l*m-o*p*m-h*l*_+o*f*_,x=g*f*u-c*p*u-g*l*m+a*p*m+c*l*_-a*f*_,b=c*d*u-g*h*u+g*o*m-a*d*m-c*o*_+a*h*_,v=g*h*l-c*d*l-g*o*f+a*d*f+c*o*p-a*h*p,T=t*M+n*x+i*b+s*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=M*E,e[1]=(d*f*s-h*p*s-d*i*m+n*p*m+h*i*_-n*f*_)*E,e[2]=(o*p*s-d*l*s+d*i*u-n*p*u-o*i*_+n*l*_)*E,e[3]=(h*l*s-o*f*s-h*i*u+n*f*u+o*i*m-n*l*m)*E,e[4]=x*E,e[5]=(c*p*s-g*f*s+g*i*m-t*p*m-c*i*_+t*f*_)*E,e[6]=(g*l*s-a*p*s-g*i*u+t*p*u+a*i*_-t*l*_)*E,e[7]=(a*f*s-c*l*s+c*i*u-t*f*u-a*i*m+t*l*m)*E,e[8]=b*E,e[9]=(g*h*s-c*d*s-g*n*m+t*d*m+c*n*_-t*h*_)*E,e[10]=(a*d*s-g*o*s+g*n*u-t*d*u-a*n*_+t*o*_)*E,e[11]=(c*o*s-a*h*s-c*n*u+t*h*u+a*n*m-t*o*m)*E,e[12]=v*E,e[13]=(c*d*i-g*h*i+g*n*f-t*d*f-c*n*p+t*h*p)*E,e[14]=(g*o*i-a*d*i-g*n*l+t*d*l+a*n*p-t*o*p)*E,e[15]=(a*h*i-c*o*i+c*n*l-t*h*l-a*n*f+t*o*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+n,u*o-i*l,u*l+i*o,0,u*o+i*l,c*o+n,c*l-i*a,0,u*l-i*o,c*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,h=o+o,f=s*u,m=s*c,g=s*h,d=a*c,p=a*h,_=o*h,M=l*u,x=l*c,b=l*h,v=n.x,T=n.y,E=n.z;return i[0]=(1-(d+_))*v,i[1]=(m+b)*v,i[2]=(g-x)*v,i[3]=0,i[4]=(m-b)*T,i[5]=(1-(f+_))*T,i[6]=(p+M)*T,i[7]=0,i[8]=(g+x)*E,i[9]=(p-M)*E,i[10]=(1-(f+d))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Gs.set(i[0],i[1],i[2]).length();const a=Gs.set(i[4],i[5],i[6]).length(),o=Gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],fi.copy(this);const u=1/s,c=1/a,h=1/o;return fi.elements[0]*=u,fi.elements[1]*=u,fi.elements[2]*=u,fi.elements[4]*=c,fi.elements[5]*=c,fi.elements[6]*=c,fi.elements[8]*=h,fi.elements[9]*=h,fi.elements[10]*=h,t.setFromRotationMatrix(fi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),u=2*s/(n-i),c=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=u,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),u=1/(n-i),c=1/(a-s),h=(t+e)*l,f=(n+i)*u,m=(a+s)*c;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*u,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gs=new K,fi=new Bt,Ry=new K(0,0,0),Fy=new K(1,1,1),dr=new K,ll=new K,Fn=new K,yp=new Bt,bp=new Ps;class Ia{constructor(e=0,t=0,n=0,i=Ia.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],u=i[5],c=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bp.setFromEuler(this),this.setFromQuaternion(bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ia.DefaultOrder="XYZ";Ia.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class I0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iy=0;const Mp=new K,Vs=new Ps,qi=new Bt,ul=new K,Vo=new K,Uy=new K,By=new Ps,Sp=new K(1,0,0),wp=new K(0,1,0),Tp=new K(0,0,1),Oy={type:"added"},Ep={type:"removed"};class an extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DefaultUp.clone();const e=new K,t=new Ia,n=new Ps,i=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Gn}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=an.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=an.DefaultMatrixWorldAutoUpdate,this.layers=new I0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Sp,e)}rotateY(e){return this.rotateOnAxis(wp,e)}rotateZ(e){return this.rotateOnAxis(Tp,e)}translateOnAxis(e,t){return Mp.copy(e).applyQuaternion(this.quaternion),this.position.add(Mp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sp,e)}translateY(e){return this.translateOnAxis(wp,e)}translateZ(e){return this.translateOnAxis(Tp,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ul.copy(e):ul.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Vo,ul,this.up):qi.lookAt(ul,Vo,this.up),this.quaternion.setFromRotationMatrix(qi),i&&(qi.extractRotation(i.matrixWorld),Vs.setFromRotationMatrix(qi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Oy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ep)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ep)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,Uy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,By,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}an.DefaultUp=new K(0,1,0);an.DefaultMatrixAutoUpdate=!0;an.DefaultMatrixWorldAutoUpdate=!0;const hi=new K,Yi=new K,xc=new K,$i=new K,Hs=new K,Xs=new K,Ap=new K,vc=new K,yc=new K,bc=new K;class Qi{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hi.subVectors(e,t),i.cross(hi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hi.subVectors(i,t),Yi.subVectors(n,t),xc.subVectors(e,t);const a=hi.dot(hi),o=hi.dot(Yi),l=hi.dot(xc),u=Yi.dot(Yi),c=Yi.dot(xc),h=a*u-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(u*l-o*c)*f,g=(a*c-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$i),$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,$i),l.set(0,0),l.addScaledVector(s,$i.x),l.addScaledVector(a,$i.y),l.addScaledVector(o,$i.z),l}static isFrontFacing(e,t,n,i){return hi.subVectors(n,t),Yi.subVectors(e,t),hi.cross(Yi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),hi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Qi.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Hs.subVectors(i,n),Xs.subVectors(s,n),vc.subVectors(e,n);const l=Hs.dot(vc),u=Xs.dot(vc);if(l<=0&&u<=0)return t.copy(n);yc.subVectors(e,i);const c=Hs.dot(yc),h=Xs.dot(yc);if(c>=0&&h<=c)return t.copy(i);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(n).addScaledVector(Hs,a);bc.subVectors(e,s);const m=Hs.dot(bc),g=Xs.dot(bc);if(g>=0&&m<=g)return t.copy(s);const d=m*u-l*g;if(d<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(Xs,o);const p=c*g-m*h;if(p<=0&&h-c>=0&&m-g>=0)return Ap.subVectors(s,i),o=(h-c)/(h-c+(m-g)),t.copy(i).addScaledVector(Ap,o);const _=1/(p+d+f);return a=d*_,o=f*_,t.copy(n).addScaledVector(Hs,a).addScaledVector(Xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ny=0;class Ua extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=mo,this.side=Ao,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=M0,this.blendDst=S0,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=bf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oc,this.stencilZFail=oc,this.stencilZPass=oc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(n.blending=this.blending),this.side!==Ao&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class U0 extends Ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new K,cl=new $e;class Ni{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=gp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cl.fromBufferAttribute(this,t),cl.applyMatrix3(e),this.setXY(t,cl.x,cl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jo(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jo(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jo(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),i=yn(i,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class B0 extends Ni{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class O0 extends Ni{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dn extends Ni{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ky=0;const Zn=new Bt,Mc=new an,qs=new K,In=new Fa,Ho=new Fa,zt=new K;class Vi extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P0(e)?O0:B0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Gn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];In.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ho.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(In.min,Ho.min),In.expandByPoint(zt),zt.addVectors(In.max,Ho.max),In.expandByPoint(zt)):(In.expandByPoint(Ho.min),In.expandByPoint(Ho.max))}In.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)zt.fromBufferAttribute(o,u),l&&(qs.fromBufferAttribute(e,u),zt.add(qs)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let D=0;D<o;D++)u[D]=new K,c[D]=new K;const h=new K,f=new K,m=new K,g=new $e,d=new $e,p=new $e,_=new K,M=new K;function x(D,O,Q){h.fromArray(i,D*3),f.fromArray(i,O*3),m.fromArray(i,Q*3),g.fromArray(a,D*2),d.fromArray(a,O*2),p.fromArray(a,Q*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const G=1/(d.x*p.y-p.x*d.y);!isFinite(G)||(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(G),M.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(G),u[D].add(_),u[O].add(_),u[Q].add(_),c[D].add(M),c[O].add(M),c[Q].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let D=0,O=b.length;D<O;++D){const Q=b[D],G=Q.start,U=Q.count;for(let Y=G,H=G+U;Y<H;Y+=3)x(n[Y+0],n[Y+1],n[Y+2])}const v=new K,T=new K,E=new K,y=new K;function w(D){E.fromArray(s,D*3),y.copy(E);const O=u[D];v.copy(O),v.sub(E.multiplyScalar(E.dot(O))).normalize(),T.crossVectors(y,O);const G=T.dot(c[D])<0?-1:1;l[D*4]=v.x,l[D*4+1]=v.y,l[D*4+2]=v.z,l[D*4+3]=G}for(let D=0,O=b.length;D<O;++D){const Q=b[D],G=Q.start,U=Q.count;for(let Y=G,H=G+U;Y<H;Y+=3)w(n[Y+0]),w(n[Y+1]),w(n[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new K,s=new K,a=new K,o=new K,l=new K,u=new K,c=new K,h=new K;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),c.subVectors(a,s),h.subVectors(i,s),c.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),u.fromBufferAttribute(n,p),o.add(c),l.add(c),u.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,s),h.subVectors(i,s),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,h=o.normalized,f=new u.constructor(l.length*c);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){o.isInterleavedBufferAttribute?m=l[d]*o.data.stride+o.offset:m=l[d]*c;for(let _=0;_<c;_++)f[g++]=u[m++]}return new Ni(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],u=e(l,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,h=u.length;c<h;c++){const f=u[c],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const m=u[h];c.push(m.toJSON(e.data))}c.length>0&&(i[l]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,m=h.length;f<m;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cp=new Bt,Ys=new Ly,Sc=new yh,pr=new K,mr=new K,gr=new K,wc=new K,Tc=new K,Ec=new K,fl=new K,hl=new K,dl=new K,pl=new $e,ml=new $e,gl=new $e,Ac=new K,_l=new K;class Ii extends an{constructor(e=new Vi,t=new U0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Sc.copy(n.boundingSphere),Sc.applyMatrix4(s),e.ray.intersectsSphere(Sc)===!1)||(Cp.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(Cp),n.boundingBox!==null&&Ys.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,u=n.morphAttributes.position,c=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],M=i[_.materialIndex],x=Math.max(_.start,g.start),b=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let v=x,T=b;v<T;v+=3){const E=o.getX(v),y=o.getX(v+1),w=o.getX(v+2);a=xl(this,M,e,Ys,l,u,c,h,f,E,y,w),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(o.count,g.start+g.count);for(let _=d,M=p;_<M;_+=3){const x=o.getX(_),b=o.getX(_+1),v=o.getX(_+2);a=xl(this,i,e,Ys,l,u,c,h,f,x,b,v),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],M=i[_.materialIndex],x=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let v=x,T=b;v<T;v+=3){const E=v,y=v+1,w=v+2;a=xl(this,M,e,Ys,l,u,c,h,f,E,y,w),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=d,M=p;_<M;_+=3){const x=_,b=_+1,v=_+2;a=xl(this,i,e,Ys,l,u,c,h,f,x,b,v),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function zy(r,e,t,n,i,s,a,o){let l;if(e.side===li?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==Er,o),l===null)return null;_l.copy(o),_l.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(_l);return u<t.near||u>t.far?null:{distance:u,point:_l.clone(),object:r}}function xl(r,e,t,n,i,s,a,o,l,u,c,h){pr.fromBufferAttribute(i,u),mr.fromBufferAttribute(i,c),gr.fromBufferAttribute(i,h);const f=r.morphTargetInfluences;if(s&&f){fl.set(0,0,0),hl.set(0,0,0),dl.set(0,0,0);for(let g=0,d=s.length;g<d;g++){const p=f[g],_=s[g];p!==0&&(wc.fromBufferAttribute(_,u),Tc.fromBufferAttribute(_,c),Ec.fromBufferAttribute(_,h),a?(fl.addScaledVector(wc,p),hl.addScaledVector(Tc,p),dl.addScaledVector(Ec,p)):(fl.addScaledVector(wc.sub(pr),p),hl.addScaledVector(Tc.sub(mr),p),dl.addScaledVector(Ec.sub(gr),p)))}pr.add(fl),mr.add(hl),gr.add(dl)}r.isSkinnedMesh&&(r.boneTransform(u,pr),r.boneTransform(c,mr),r.boneTransform(h,gr));const m=zy(r,e,t,n,pr,mr,gr,Ac);if(m){o&&(pl.fromBufferAttribute(o,u),ml.fromBufferAttribute(o,c),gl.fromBufferAttribute(o,h),m.uv=Qi.getUV(Ac,pr,mr,gr,pl,ml,gl,new $e)),l&&(pl.fromBufferAttribute(l,u),ml.fromBufferAttribute(l,c),gl.fromBufferAttribute(l,h),m.uv2=Qi.getUV(Ac,pr,mr,gr,pl,ml,gl,new $e));const g={a:u,b:c,c:h,normal:new K,materialIndex:0};Qi.getNormal(pr,mr,gr,g.normal),m.face=g}return m}class Ba extends Vi{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Dn(u,3)),this.setAttribute("normal",new Dn(c,3)),this.setAttribute("uv",new Dn(h,2));function g(d,p,_,M,x,b,v,T,E,y,w){const D=b/E,O=v/y,Q=b/2,G=v/2,U=T/2,Y=E+1,H=y+1;let Z=0,B=0;const ae=new K;for(let F=0;F<H;F++){const $=F*O-G;for(let X=0;X<Y;X++){const he=X*D-Q;ae[d]=he*M,ae[p]=$*x,ae[_]=U,u.push(ae.x,ae.y,ae.z),ae[d]=0,ae[p]=0,ae[_]=T>0?1:-1,c.push(ae.x,ae.y,ae.z),h.push(X/E),h.push(1-F/y),Z+=1}}for(let F=0;F<y;F++)for(let $=0;$<E;$++){const X=f+$+Y*F,he=f+$+Y*(F+1),ce=f+($+1)+Y*(F+1),ge=f+($+1)+Y*F;l.push(X,he,ge),l.push(he,ce,ge),B+=6}o.addGroup(m,B,w),m+=B,f+=Z}}static fromJSON(e){return new Ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function dn(r){const e={};for(let t=0;t<r.length;t++){const n=Lo(r[t]);for(const i in n)e[i]=n[i]}return e}function Wy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function N0(r){return r.getRenderTarget()===null&&r.outputEncoding===vt?Ai:La}const bh={clone:Lo,merge:dn};var Gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gy,this.fragmentShader=Vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=Wy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class k0 extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ni extends k0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=eu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eu*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ma*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/u,i*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,js=1;class Hy extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new ni($s,js,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new ni($s,js,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new ni($s,js,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new ni($s,js,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new ni($s,js,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new ni($s,js,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,u]=this.children,c=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=ir,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class z0 extends Pn{constructor(e,t,n,i,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Co,super(e,t,n,i,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xy extends kr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new z0(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ba(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:Lo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:li,blending:Fr});s.uniforms.tEquirect.value=t;const a=new Ii(i,s),o=t.minFilter;return t.minFilter===Su&&(t.minFilter=ti),new Hy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Cc=new K,qy=new K,Yy=new Gn;class ts{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Cc.subVectors(n,t).cross(qy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Cc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yy.getNormalMatrix(e),i=this.coplanarPoint(Cc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zs=new yh,vl=new K;class Mh{constructor(e=new ts,t=new ts,n=new ts,i=new ts,s=new ts,a=new ts){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],u=n[5],c=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],M=n[14],x=n[15];return t[0].setComponents(o-i,h-l,d-f,x-p).normalize(),t[1].setComponents(o+i,h+l,d+f,x+p).normalize(),t[2].setComponents(o+s,h+u,d+m,x+_).normalize(),t[3].setComponents(o-s,h-u,d-m,x-_).normalize(),t[4].setComponents(o-a,h-c,d-g,x-M).normalize(),t[5].setComponents(o+a,h+c,d+g,x+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSprite(e){return Zs.center.set(0,0,0),Zs.radius=.7071067811865476,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vl.x=i.normal.x>0?e.max.x:e.min.x,vl.y=i.normal.y>0?e.max.y:e.min.y,vl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function W0(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function $y(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,c){const h=u.array,f=u.usage,m=r.createBuffer();r.bindBuffer(c,m),r.bufferData(c,h,f),u.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,h){const f=c.array,m=c.updateRange;r.bindBuffer(h,u),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(r.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h===void 0?n.set(u,i(u,c)):h.version<u.version&&(s(h.buffer,u,c),h.version=u.version)}return{get:a,remove:o,update:l}}class Sh extends Vi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),u=o+1,c=l+1,h=e/o,f=t/l,m=[],g=[],d=[],p=[];for(let _=0;_<c;_++){const M=_*f-a;for(let x=0;x<u;x++){const b=x*h-s;g.push(b,-M,0),d.push(0,0,1),p.push(x/o),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<o;M++){const x=M+u*_,b=M+u*(_+1),v=M+1+u*(_+1),T=M+1+u*_;m.push(x,b,T),m.push(b,v,T)}this.setIndex(m),this.setAttribute("position",new Dn(g,3)),this.setAttribute("normal",new Dn(d,3)),this.setAttribute("uv",new Dn(p,2))}static fromJSON(e){return new Sh(e.width,e.height,e.widthSegments,e.heightSegments)}}var jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tb="vec3 transformed = vec3( position );",nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ib=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,rb=`#ifdef USE_IRIDESCENCE
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
#endif`,sb=`#ifdef USE_BUMPMAP
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
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pb=`#define PI 3.141592653589793
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
}`,mb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gb=`vec3 transformedNormal = objectNormal;
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
#endif`,_b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Db=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rb=`#ifdef USE_GRADIENTMAP
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
}`,Fb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ob=`uniform bool receiveShadow;
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
#endif`,Nb=`#if defined( USE_ENVMAP )
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
#endif`,kb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vb=`PhysicalMaterial material;
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
#endif`,Hb=`struct PhysicalMaterial {
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
}`,Xb=`
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
#endif`,qb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$b=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sM=`#ifdef USE_MORPHNORMALS
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
#endif`,oM=`#ifdef USE_MORPHTARGETS
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
#endif`,aM=`#ifdef USE_MORPHTARGETS
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
#endif`,lM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,uM=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dM=`#ifdef USE_NORMALMAP
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
#endif`,pM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,gM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,_M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CM=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PM=`float getShadowMask() {
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
}`,DM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LM=`#ifdef USE_SKINNING
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
#endif`,RM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FM=`#ifdef USE_SKINNING
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
#endif`,IM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NM=`#ifdef USE_TRANSMISSION
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
#endif`,kM=`#ifdef USE_TRANSMISSION
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
#endif`,zM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,WM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,GM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,VM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,HM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,XM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$M=`uniform sampler2D t2D;
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
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,QM=`#include <common>
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
}`,eS=`#if DEPTH_PACKING == 3200
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
}`,tS=`#define DISTANCE
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
}`,nS=`#define DISTANCE
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sS=`uniform float scale;
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
}`,oS=`uniform vec3 diffuse;
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
}`,aS=`#include <common>
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
}`,lS=`uniform vec3 diffuse;
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
}`,uS=`#define LAMBERT
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
}`,cS=`#define LAMBERT
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
}`,fS=`#define MATCAP
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
}`,hS=`#define MATCAP
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
}`,dS=`#define NORMAL
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
}`,pS=`#define NORMAL
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
}`,mS=`#define PHONG
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
}`,gS=`#define PHONG
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
}`,_S=`#define STANDARD
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
}`,xS=`#define STANDARD
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
}`,vS=`#define TOON
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
}`,yS=`#define TOON
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
}`,bS=`uniform float size;
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
}`,MS=`uniform vec3 diffuse;
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
}`,SS=`#include <common>
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
}`,wS=`uniform vec3 color;
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
}`,TS=`uniform float rotation;
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
}`,ES=`uniform vec3 diffuse;
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
}`,Je={alphamap_fragment:jy,alphamap_pars_fragment:Zy,alphatest_fragment:Ky,alphatest_pars_fragment:Jy,aomap_fragment:Qy,aomap_pars_fragment:eb,begin_vertex:tb,beginnormal_vertex:nb,bsdfs:ib,iridescence_fragment:rb,bumpmap_pars_fragment:sb,clipping_planes_fragment:ob,clipping_planes_pars_fragment:ab,clipping_planes_pars_vertex:lb,clipping_planes_vertex:ub,color_fragment:cb,color_pars_fragment:fb,color_pars_vertex:hb,color_vertex:db,common:pb,cube_uv_reflection_fragment:mb,defaultnormal_vertex:gb,displacementmap_pars_vertex:_b,displacementmap_vertex:xb,emissivemap_fragment:vb,emissivemap_pars_fragment:yb,encodings_fragment:bb,encodings_pars_fragment:Mb,envmap_fragment:Sb,envmap_common_pars_fragment:wb,envmap_pars_fragment:Tb,envmap_pars_vertex:Eb,envmap_physical_pars_fragment:Nb,envmap_vertex:Ab,fog_vertex:Cb,fog_pars_vertex:Pb,fog_fragment:Db,fog_pars_fragment:Lb,gradientmap_pars_fragment:Rb,lightmap_fragment:Fb,lightmap_pars_fragment:Ib,lights_lambert_fragment:Ub,lights_lambert_pars_fragment:Bb,lights_pars_begin:Ob,lights_toon_fragment:kb,lights_toon_pars_fragment:zb,lights_phong_fragment:Wb,lights_phong_pars_fragment:Gb,lights_physical_fragment:Vb,lights_physical_pars_fragment:Hb,lights_fragment_begin:Xb,lights_fragment_maps:qb,lights_fragment_end:Yb,logdepthbuf_fragment:$b,logdepthbuf_pars_fragment:jb,logdepthbuf_pars_vertex:Zb,logdepthbuf_vertex:Kb,map_fragment:Jb,map_pars_fragment:Qb,map_particle_fragment:eM,map_particle_pars_fragment:tM,metalnessmap_fragment:nM,metalnessmap_pars_fragment:iM,morphcolor_vertex:rM,morphnormal_vertex:sM,morphtarget_pars_vertex:oM,morphtarget_vertex:aM,normal_fragment_begin:lM,normal_fragment_maps:uM,normal_pars_fragment:cM,normal_pars_vertex:fM,normal_vertex:hM,normalmap_pars_fragment:dM,clearcoat_normal_fragment_begin:pM,clearcoat_normal_fragment_maps:mM,clearcoat_pars_fragment:gM,iridescence_pars_fragment:_M,output_fragment:xM,packing:vM,premultiplied_alpha_fragment:yM,project_vertex:bM,dithering_fragment:MM,dithering_pars_fragment:SM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:TM,shadowmap_pars_fragment:EM,shadowmap_pars_vertex:AM,shadowmap_vertex:CM,shadowmask_pars_fragment:PM,skinbase_vertex:DM,skinning_pars_vertex:LM,skinning_vertex:RM,skinnormal_vertex:FM,specularmap_fragment:IM,specularmap_pars_fragment:UM,tonemapping_fragment:BM,tonemapping_pars_fragment:OM,transmission_fragment:NM,transmission_pars_fragment:kM,uv_pars_fragment:zM,uv_pars_vertex:WM,uv_vertex:GM,uv2_pars_fragment:VM,uv2_pars_vertex:HM,uv2_vertex:XM,worldpos_vertex:qM,background_vert:YM,background_frag:$M,backgroundCube_vert:jM,backgroundCube_frag:ZM,cube_vert:KM,cube_frag:JM,depth_vert:QM,depth_frag:eS,distanceRGBA_vert:tS,distanceRGBA_frag:nS,equirect_vert:iS,equirect_frag:rS,linedashed_vert:sS,linedashed_frag:oS,meshbasic_vert:aS,meshbasic_frag:lS,meshlambert_vert:uS,meshlambert_frag:cS,meshmatcap_vert:fS,meshmatcap_frag:hS,meshnormal_vert:dS,meshnormal_frag:pS,meshphong_vert:mS,meshphong_frag:gS,meshphysical_vert:_S,meshphysical_frag:xS,meshtoon_vert:vS,meshtoon_frag:yS,points_vert:bS,points_frag:MS,shadow_vert:SS,shadow_frag:wS,sprite_vert:TS,sprite_frag:ES},Se={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Gn},uv2Transform:{value:new Gn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gn}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gn}}},Pi={basic:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ut(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:dn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:dn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ut(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:dn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:dn([Se.points,Se.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:dn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:dn([Se.common,Se.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:dn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:dn([Se.sprite,Se.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Gn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:dn([Se.common,Se.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:dn([Se.lights,Se.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Pi.physical={uniforms:dn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $e(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const yl={r:0,b:0,g:0};function AS(r,e,t,n,i,s,a){const o=new ut(0);let l=s===!0?0:1,u,c,h=null,f=0,m=null;function g(p,_){let M=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const b=r.xr,v=b.getSession&&b.getSession();v&&v.environmentBlendMode==="additive"&&(x=null),x===null?d(o,l):x&&x.isColor&&(d(x,1),M=!0),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Mu)?(c===void 0&&(c=new Ii(new Ba(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Lo(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(h!==x||f!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Ii(new Sh(2,2),new Gi({name:"BackgroundMaterial",uniforms:Lo(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Ao,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function d(p,_){p.getRGB(yl,N0(r)),n.buffers.color.setClear(yl.r,yl.g,yl.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(o,l)},render:g}}function CS(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let u=l,c=!1;function h(U,Y,H,Z,B){let ae=!1;if(a){const F=d(Z,H,Y);u!==F&&(u=F,m(u.object)),ae=_(U,Z,H,B),ae&&M(U,Z,H,B)}else{const F=Y.wireframe===!0;(u.geometry!==Z.id||u.program!==H.id||u.wireframe!==F)&&(u.geometry=Z.id,u.program=H.id,u.wireframe=F,ae=!0)}B!==null&&t.update(B,34963),(ae||c)&&(c=!1,y(U,Y,H,Z),B!==null&&r.bindBuffer(34963,t.get(B).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(U){return n.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function d(U,Y,H){const Z=H.wireframe===!0;let B=o[U.id];B===void 0&&(B={},o[U.id]=B);let ae=B[Y.id];ae===void 0&&(ae={},B[Y.id]=ae);let F=ae[Z];return F===void 0&&(F=p(f()),ae[Z]=F),F}function p(U){const Y=[],H=[],Z=[];for(let B=0;B<i;B++)Y[B]=0,H[B]=0,Z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:H,attributeDivisors:Z,object:U,attributes:{},index:null}}function _(U,Y,H,Z){const B=u.attributes,ae=Y.attributes;let F=0;const $=H.getAttributes();for(const X in $)if($[X].location>=0){const ce=B[X];let ge=ae[X];if(ge===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(ge=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(ge=U.instanceColor)),ce===void 0||ce.attribute!==ge||ge&&ce.data!==ge.data)return!0;F++}return u.attributesNum!==F||u.index!==Z}function M(U,Y,H,Z){const B={},ae=Y.attributes;let F=0;const $=H.getAttributes();for(const X in $)if($[X].location>=0){let ce=ae[X];ce===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(ce=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(ce=U.instanceColor));const ge={};ge.attribute=ce,ce&&ce.data&&(ge.data=ce.data),B[X]=ge,F++}u.attributes=B,u.attributesNum=F,u.index=Z}function x(){const U=u.newAttributes;for(let Y=0,H=U.length;Y<H;Y++)U[Y]=0}function b(U){v(U,0)}function v(U,Y){const H=u.newAttributes,Z=u.enabledAttributes,B=u.attributeDivisors;H[U]=1,Z[U]===0&&(r.enableVertexAttribArray(U),Z[U]=1),B[U]!==Y&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,Y),B[U]=Y)}function T(){const U=u.newAttributes,Y=u.enabledAttributes;for(let H=0,Z=Y.length;H<Z;H++)Y[H]!==U[H]&&(r.disableVertexAttribArray(H),Y[H]=0)}function E(U,Y,H,Z,B,ae){n.isWebGL2===!0&&(H===5124||H===5125)?r.vertexAttribIPointer(U,Y,H,B,ae):r.vertexAttribPointer(U,Y,H,Z,B,ae)}function y(U,Y,H,Z){if(n.isWebGL2===!1&&(U.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const B=Z.attributes,ae=H.getAttributes(),F=Y.defaultAttributeValues;for(const $ in ae){const X=ae[$];if(X.location>=0){let he=B[$];if(he===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(he=U.instanceColor)),he!==void 0){const ce=he.normalized,ge=he.itemSize,q=t.get(he);if(q===void 0)continue;const Fe=q.buffer,be=q.type,Re=q.bytesPerElement;if(he.isInterleavedBufferAttribute){const ve=he.data,ke=ve.stride,P=he.offset;if(ve.isInstancedInterleavedBuffer){for(let R=0;R<X.locationSize;R++)v(X.location+R,ve.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let R=0;R<X.locationSize;R++)b(X.location+R);r.bindBuffer(34962,Fe);for(let R=0;R<X.locationSize;R++)E(X.location+R,ge/X.locationSize,be,ce,ke*Re,(P+ge/X.locationSize*R)*Re)}else{if(he.isInstancedBufferAttribute){for(let ve=0;ve<X.locationSize;ve++)v(X.location+ve,he.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ve=0;ve<X.locationSize;ve++)b(X.location+ve);r.bindBuffer(34962,Fe);for(let ve=0;ve<X.locationSize;ve++)E(X.location+ve,ge/X.locationSize,be,ce,ge*Re,ge/X.locationSize*ve*Re)}}else if(F!==void 0){const ce=F[$];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(X.location,ce);break;case 3:r.vertexAttrib3fv(X.location,ce);break;case 4:r.vertexAttrib4fv(X.location,ce);break;default:r.vertexAttrib1fv(X.location,ce)}}}}T()}function w(){Q();for(const U in o){const Y=o[U];for(const H in Y){const Z=Y[H];for(const B in Z)g(Z[B].object),delete Z[B];delete Y[H]}delete o[U]}}function D(U){if(o[U.id]===void 0)return;const Y=o[U.id];for(const H in Y){const Z=Y[H];for(const B in Z)g(Z[B].object),delete Z[B];delete Y[H]}delete o[U.id]}function O(U){for(const Y in o){const H=o[Y];if(H[U.id]===void 0)continue;const Z=H[U.id];for(const B in Z)g(Z[B].object),delete Z[B];delete H[U.id]}}function Q(){G(),c=!0,u!==l&&(u=l,m(u.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:G,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:b,disableUnusedAttributes:T}}function PS(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}function o(u,c){r.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,c,h),t.update(c,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function DS(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),d=r.getParameter(34921),p=r.getParameter(36347),_=r.getParameter(36348),M=r.getParameter(36349),x=f>0,b=a||e.has("OES_texture_float"),v=x&&b,T=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:v,maxSamples:T}}function LS(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ts,o=new Gn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,t=c(h,m,0),n=h.length,g},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?c(null):u();else{const M=s?0:n,x=M*4;let b=_.clippingState||null;l.value=b,b=c(g,f,x,m);for(let v=0;v!==x;++v)b[v]=t[v];_.clippingState=b,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,b=m;x!==d;++x,b+=4)a.copy(h[x]).applyMatrix4(M,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function RS(r){let e=new WeakMap;function t(a,o){return o===Mf?a.mapping=Co:o===Sf&&(a.mapping=Po),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Mf||o===Sf)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Xy(l.height/2);return u.fromEquirectangularTexture(r,a),e.set(a,u),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class wu extends k0{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const so=4,Pp=[.125,.215,.35,.446,.526,.582],as=20,Pc=new wu,Dp=new ut;let Dc=null;const ns=(1+Math.sqrt(5))/2,Ks=1/ns,Lp=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,ns,Ks),new K(0,ns,-Ks),new K(Ks,0,ns),new K(-Ks,0,ns),new K(ns,Ks,0),new K(-ns,Ks,0)];class Rp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Dc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc),e.scissorTest=!1,bl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Co||e.mapping===Po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Da,format:xi,encoding:Cs,depthBuffer:!1},i=Fp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FS(s)),this._blurMaterial=IS(s,e,t)}return i}_compileMaterial(e){const t=new Ii(this._lodPlanes[0],e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,n,i){const o=new ni(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Dp),c.toneMapping=ir,c.autoClear=!1;const m=new U0({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),g=new Ii(new Ba,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Dp),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(o.up.set(0,l[_],0),o.lookAt(u[_],0,0)):M===1?(o.up.set(0,0,l[_]),o.lookAt(0,u[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,u[_]));const x=this._cubeSize;bl(i,M*x,_>2?x:0,x,x),c.setRenderTarget(i),d&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Co||e.mapping===Po;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ip());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ii(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;bl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Lp[(i-1)%Lp.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Ii(this._lodPlanes[i],u),f=u.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*as-1),d=s/g,p=isFinite(s)?1+Math.floor(c*d):as;p>as&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${as}`);const _=[];let M=0;for(let E=0;E<as;++E){const y=E/d,w=Math.exp(-y*y/2);_.push(w),E===0?M+=w:E<p&&(M+=2*w)}for(let E=0;E<_.length;E++)_[E]=_[E]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const b=this._sizeLods[i],v=3*b*(i>x-so?i-x+so:0),T=4*(this._cubeSize-b);bl(t,v,T,3*b,2*b),l.setRenderTarget(t),l.render(h,Pc)}}function FS(r){const e=[],t=[],n=[];let i=r;const s=r-so+1+Pp.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-so?l=Pp[a-r+so-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,g=6,d=3,p=2,_=1,M=new Float32Array(d*g*m),x=new Float32Array(p*g*m),b=new Float32Array(_*g*m);for(let T=0;T<m;T++){const E=T%3*2/3-1,y=T>2?0:-1,w=[E,y,0,E+2/3,y,0,E+2/3,y+1,0,E,y,0,E+2/3,y+1,0,E,y+1,0];M.set(w,d*g*T),x.set(f,p*g*T);const D=[T,T,T,T,T,T];b.set(D,_*g*T)}const v=new Vi;v.setAttribute("position",new Ni(M,d)),v.setAttribute("uv",new Ni(x,p)),v.setAttribute("faceIndex",new Ni(b,_)),e.push(v),i>so&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fp(r,e,t){const n=new kr(r,e,t);return n.texture.mapping=Mu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function IS(r,e,t){const n=new Float32Array(as),i=new K(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Ip(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Up(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function wh(){return`

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
	`}function US(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===Mf||l===Sf,c=l===Co||l===Po;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Rp(r)),h=u?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(u&&h&&h.height>0||c&&h&&i(h)){t===null&&(t=new Rp(r));const f=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function BS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function OS(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function u(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const M=m.array;d=m.version;for(let x=0,b=M.length;x<b;x+=3){const v=M[x+0],T=M[x+1],E=M[x+2];f.push(v,T,T,E,E,v)}}else{const M=g.array;d=g.version;for(let x=0,b=M.length/3-1;x<b;x+=3){const v=x+0,T=x+1,E=x+2;f.push(v,T,T,E,E,v)}}const p=new(P0(f)?O0:B0)(f,1);p.version=d;const _=s.get(h);_&&e.remove(_),s.set(h,p)}function c(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function NS(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function u(f){o=f.type,l=f.bytesPerElement}function c(f,m){r.drawElements(s,m,o,f*l),t.update(m,s,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=r,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,o,f*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=h}function kS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zS(r,e){return r[0]-e[0]}function WS(r,e){return Math.abs(e[1])-Math.abs(r[1])}function GS(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Vt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,h,f){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0;let _=s.get(c);if(_===void 0||_.count!==p){let H=function(){U.dispose(),s.delete(c),c.removeEventListener("dispose",H)};var g=H;_!==void 0&&_.texture.dispose();const b=c.morphAttributes.position!==void 0,v=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let D=0;b===!0&&(D=1),v===!0&&(D=2),T===!0&&(D=3);let O=c.attributes.position.count*D,Q=1;O>e.maxTextureSize&&(Q=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const G=new Float32Array(O*Q*4*p),U=new F0(G,O,Q,p);U.type=Ar,U.needsUpdate=!0;const Y=D*4;for(let Z=0;Z<p;Z++){const B=E[Z],ae=y[Z],F=w[Z],$=O*Q*4*Z;for(let X=0;X<B.count;X++){const he=X*Y;b===!0&&(a.fromBufferAttribute(B,X),G[$+he+0]=a.x,G[$+he+1]=a.y,G[$+he+2]=a.z,G[$+he+3]=0),v===!0&&(a.fromBufferAttribute(ae,X),G[$+he+4]=a.x,G[$+he+5]=a.y,G[$+he+6]=a.z,G[$+he+7]=0),T===!0&&(a.fromBufferAttribute(F,X),G[$+he+8]=a.x,G[$+he+9]=a.y,G[$+he+10]=a.z,G[$+he+11]=F.itemSize===4?a.w:1)}}_={count:p,texture:U,size:new $e(O,Q)},s.set(c,_),c.addEventListener("dispose",H)}let M=0;for(let b=0;b<m.length;b++)M+=m[b];const x=c.morphTargetsRelative?1:1-M;f.getUniforms().setValue(r,"morphTargetBaseInfluence",x),f.getUniforms().setValue(r,"morphTargetInfluences",m),f.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[c.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[c.id]=p}for(let v=0;v<d;v++){const T=p[v];T[0]=v,T[1]=m[v]}p.sort(WS);for(let v=0;v<8;v++)v<d&&p[v][1]?(o[v][0]=p[v][0],o[v][1]=p[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(zS);const _=c.morphAttributes.position,M=c.morphAttributes.normal;let x=0;for(let v=0;v<8;v++){const T=o[v],E=T[0],y=T[1];E!==Number.MAX_SAFE_INTEGER&&y?(_&&c.getAttribute("morphTarget"+v)!==_[E]&&c.setAttribute("morphTarget"+v,_[E]),M&&c.getAttribute("morphNormal"+v)!==M[E]&&c.setAttribute("morphNormal"+v,M[E]),i[v]=y,x+=y):(_&&c.hasAttribute("morphTarget"+v)===!0&&c.deleteAttribute("morphTarget"+v),M&&c.hasAttribute("morphNormal"+v)===!0&&c.deleteAttribute("morphNormal"+v),i[v]=0)}const b=c.morphTargetsRelative?1:1-x;f.getUniforms().setValue(r,"morphTargetBaseInfluence",b),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function VS(r,e,t,n){let i=new WeakMap;function s(l){const u=n.render.frame,c=l.geometry,h=e.get(l,c);return i.get(h)!==u&&(e.update(h),i.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const G0=new Pn,V0=new F0,H0=new Py,X0=new z0,Bp=[],Op=[],Np=new Float32Array(16),kp=new Float32Array(9),zp=new Float32Array(4);function Bo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Bp[i];if(s===void 0&&(s=new Float32Array(i),Bp[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ot(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Nt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Tu(r,e){let t=Op[e];t===void 0&&(t=new Int32Array(e),Op[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function HS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function XS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2fv(this.addr,e),Nt(t,e)}}function qS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;r.uniform3fv(this.addr,e),Nt(t,e)}}function YS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4fv(this.addr,e),Nt(t,e)}}function $S(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ot(t,n))return;zp.set(n),r.uniformMatrix2fv(this.addr,!1,zp),Nt(t,n)}}function jS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ot(t,n))return;kp.set(n),r.uniformMatrix3fv(this.addr,!1,kp),Nt(t,n)}}function ZS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ot(t,n))return;Np.set(n),r.uniformMatrix4fv(this.addr,!1,Np),Nt(t,n)}}function KS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function JS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2iv(this.addr,e),Nt(t,e)}}function QS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3iv(this.addr,e),Nt(t,e)}}function ew(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4iv(this.addr,e),Nt(t,e)}}function tw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function nw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2uiv(this.addr,e),Nt(t,e)}}function iw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3uiv(this.addr,e),Nt(t,e)}}function rw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4uiv(this.addr,e),Nt(t,e)}}function sw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||G0,i)}function ow(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||H0,i)}function aw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||X0,i)}function lw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||V0,i)}function uw(r){switch(r){case 5126:return HS;case 35664:return XS;case 35665:return qS;case 35666:return YS;case 35674:return $S;case 35675:return jS;case 35676:return ZS;case 5124:case 35670:return KS;case 35667:case 35671:return JS;case 35668:case 35672:return QS;case 35669:case 35673:return ew;case 5125:return tw;case 36294:return nw;case 36295:return iw;case 36296:return rw;case 35678:case 36198:case 36298:case 36306:case 35682:return sw;case 35679:case 36299:case 36307:return ow;case 35680:case 36300:case 36308:case 36293:return aw;case 36289:case 36303:case 36311:case 36292:return lw}}function cw(r,e){r.uniform1fv(this.addr,e)}function fw(r,e){const t=Bo(e,this.size,2);r.uniform2fv(this.addr,t)}function hw(r,e){const t=Bo(e,this.size,3);r.uniform3fv(this.addr,t)}function dw(r,e){const t=Bo(e,this.size,4);r.uniform4fv(this.addr,t)}function pw(r,e){const t=Bo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function mw(r,e){const t=Bo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gw(r,e){const t=Bo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _w(r,e){r.uniform1iv(this.addr,e)}function xw(r,e){r.uniform2iv(this.addr,e)}function vw(r,e){r.uniform3iv(this.addr,e)}function yw(r,e){r.uniform4iv(this.addr,e)}function bw(r,e){r.uniform1uiv(this.addr,e)}function Mw(r,e){r.uniform2uiv(this.addr,e)}function Sw(r,e){r.uniform3uiv(this.addr,e)}function ww(r,e){r.uniform4uiv(this.addr,e)}function Tw(r,e,t){const n=this.cache,i=e.length,s=Tu(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||G0,s[a])}function Ew(r,e,t){const n=this.cache,i=e.length,s=Tu(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||H0,s[a])}function Aw(r,e,t){const n=this.cache,i=e.length,s=Tu(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||X0,s[a])}function Cw(r,e,t){const n=this.cache,i=e.length,s=Tu(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||V0,s[a])}function Pw(r){switch(r){case 5126:return cw;case 35664:return fw;case 35665:return hw;case 35666:return dw;case 35674:return pw;case 35675:return mw;case 35676:return gw;case 5124:case 35670:return _w;case 35667:case 35671:return xw;case 35668:case 35672:return vw;case 35669:case 35673:return yw;case 5125:return bw;case 36294:return Mw;case 36295:return Sw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Tw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return Cw}}class Dw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=uw(t.type)}}class Lw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Pw(t.type)}}class Rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Lc=/(\w+)(\])?(\[|\.)?/g;function Wp(r,e){r.seq.push(e),r.map[e.id]=e}function Fw(r,e,t){const n=r.name,i=n.length;for(Lc.lastIndex=0;;){const s=Lc.exec(n),a=Lc.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===i){Wp(t,u===void 0?new Dw(o,r,e):new Lw(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Rw(o),Wp(t,h)),t=h}}}class Bl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Fw(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Gp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Iw=0;function Uw(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Bw(r){switch(r){case Cs:return["Linear","( value )"];case vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Vp(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Uw(r.getShaderSource(e),a)}else return i}function Ow(r,e){const t=Bw(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Nw(r,e){let t;switch(e){case X3:t="Linear";break;case q3:t="Reinhard";break;case Y3:t="OptimizedCineon";break;case $3:t="ACESFilmic";break;case j3:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kw(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qo).join(`
`)}function zw(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ww(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Qo(r){return r!==""}function Hp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(r){return r.replace(Gw,Vw)}function Vw(r,e){const t=Je[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Cf(t)}const Hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qp(r){return r.replace(Hw,Xw)}function Xw(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yp(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===b0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===S3?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ko&&(e="SHADOWMAP_TYPE_VSM"),e}function Yw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Co:case Po:e="ENVMAP_TYPE_CUBE";break;case Mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $w(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Po:e="ENVMAP_MODE_REFRACTION";break}return e}function jw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xh:e="ENVMAP_BLENDING_MULTIPLY";break;case V3:e="ENVMAP_BLENDING_MIX";break;case H3:e="ENVMAP_BLENDING_ADD";break}return e}function Zw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Kw(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=qw(t),u=Yw(t),c=$w(t),h=jw(t),f=Zw(t),m=t.isWebGL2?"":kw(t),g=zw(s),d=i.createProgram();let p,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Qo).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Qo).join(`
`),_.length>0&&(_+=`
`)):(p=[Yp(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),_=[m,Yp(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Je.tonemapping_pars_fragment:"",t.toneMapping!==ir?Nw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.encodings_pars_fragment,Ow("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),a=Cf(a),a=Hp(a,t),a=Xp(a,t),o=Cf(o),o=Hp(o,t),o=Xp(o,t),a=qp(a),o=qp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===_p?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=M+p+a,b=M+_+o,v=Gp(i,35633,x),T=Gp(i,35632,b);if(i.attachShader(d,v),i.attachShader(d,T),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),D=i.getShaderInfoLog(v).trim(),O=i.getShaderInfoLog(T).trim();let Q=!0,G=!0;if(i.getProgramParameter(d,35714)===!1){Q=!1;const U=Vp(i,v,"vertex"),Y=Vp(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+U+`
`+Y)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||O==="")&&(G=!1);G&&(this.diagnostics={runnable:Q,programLog:w,vertexShader:{log:D,prefix:p},fragmentShader:{log:O,prefix:_}})}i.deleteShader(v),i.deleteShader(T);let E;this.getUniforms=function(){return E===void 0&&(E=new Bl(i,d)),E};let y;return this.getAttributes=function(){return y===void 0&&(y=Ww(i,d)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Iw++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=v,this.fragmentShader=T,this}let Jw=0;class Qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new e2(e),t.set(e,n)),n}}class e2{constructor(e){this.id=Jw++,this.code=e,this.usedTimes=0}}function t2(r,e,t,n,i,s,a){const o=new I0,l=new Qw,u=[],c=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y,w,D,O,Q){const G=O.fog,U=Q.geometry,Y=y.isMeshStandardMaterial?O.environment:null,H=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),Z=!!H&&H.mapping===Mu?H.image.height:null,B=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ae=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,F=ae!==void 0?ae.length:0;let $=0;U.morphAttributes.position!==void 0&&($=1),U.morphAttributes.normal!==void 0&&($=2),U.morphAttributes.color!==void 0&&($=3);let X,he,ce,ge;if(B){const ke=Pi[B];X=ke.vertexShader,he=ke.fragmentShader}else X=y.vertexShader,he=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),ge=l.getFragmentShaderID(y);const q=r.getRenderTarget(),Fe=y.alphaTest>0,be=y.clearcoat>0,Re=y.iridescence>0;return{isWebGL2:c,shaderID:B,shaderName:y.type,vertexShader:X,fragmentShader:he,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:f,outputEncoding:q===null?r.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:Cs,map:!!y.map,matcap:!!y.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:Z,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===hy,tangentSpaceNormalMap:y.normalMapType===C0,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===vt,clearcoat:be,clearcoatMap:be&&!!y.clearcoatMap,clearcoatRoughnessMap:be&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:be&&!!y.clearcoatNormalMap,iridescence:Re,iridescenceMap:Re&&!!y.iridescenceMap,iridescenceThicknessMap:Re&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===mo,alphaMap:!!y.alphaMap,alphaTest:Fe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!U.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!G,useFog:y.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:ir,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Er,flipSided:y.side===li,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)w.push(D),w.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(_(w,y),M(w,y),w.push(r.outputEncoding)),w.push(y.customProgramCacheKey),w.join()}function _(y,w){y.push(w.precision),y.push(w.outputEncoding),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.combine),y.push(w.vertexUvs),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.lightMap&&o.enable(7),w.aoMap&&o.enable(8),w.emissiveMap&&o.enable(9),w.bumpMap&&o.enable(10),w.normalMap&&o.enable(11),w.objectSpaceNormalMap&&o.enable(12),w.tangentSpaceNormalMap&&o.enable(13),w.clearcoat&&o.enable(14),w.clearcoatMap&&o.enable(15),w.clearcoatRoughnessMap&&o.enable(16),w.clearcoatNormalMap&&o.enable(17),w.iridescence&&o.enable(18),w.iridescenceMap&&o.enable(19),w.iridescenceThicknessMap&&o.enable(20),w.displacementMap&&o.enable(21),w.specularMap&&o.enable(22),w.roughnessMap&&o.enable(23),w.metalnessMap&&o.enable(24),w.gradientMap&&o.enable(25),w.alphaMap&&o.enable(26),w.alphaTest&&o.enable(27),w.vertexColors&&o.enable(28),w.vertexAlphas&&o.enable(29),w.vertexUvs&&o.enable(30),w.vertexTangents&&o.enable(31),w.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.physicallyCorrectLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.specularIntensityMap&&o.enable(15),w.specularColorMap&&o.enable(16),w.transmission&&o.enable(17),w.transmissionMap&&o.enable(18),w.thicknessMap&&o.enable(19),w.sheen&&o.enable(20),w.sheenColorMap&&o.enable(21),w.sheenRoughnessMap&&o.enable(22),w.decodeVideoTexture&&o.enable(23),w.opaque&&o.enable(24),y.push(o.mask)}function x(y){const w=g[y.type];let D;if(w){const O=Pi[w];D=bh.clone(O.uniforms)}else D=y.uniforms;return D}function b(y,w){let D;for(let O=0,Q=u.length;O<Q;O++){const G=u[O];if(G.cacheKey===w){D=G,++D.usedTimes;break}}return D===void 0&&(D=new Kw(r,w,y,s),u.push(D)),D}function v(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function E(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:v,releaseShaderCache:T,programs:u,dispose:E}}function n2(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function i2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function $p(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function jp(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,m,g,d,p){let _=r[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},r[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),e++,_}function o(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function u(h,f){t.length>1&&t.sort(h||i2),n.length>1&&n.sort(f||$p),i.length>1&&i.sort(f||$p)}function c(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:c,sort:u}}function r2(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new jp,r.set(n,[a])):i>=s.length?(a=new jp,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function s2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new ut};break;case"SpotLight":t={position:new K,direction:new K,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function o2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let a2=0;function l2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function u2(r,e){const t=new s2,n=o2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new K);const s=new K,a=new Bt,o=new Bt;function l(c,h){let f=0,m=0,g=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,p=0,_=0,M=0,x=0,b=0,v=0,T=0,E=0,y=0;c.sort(l2);const w=h!==!0?Math.PI:1;for(let O=0,Q=c.length;O<Q;O++){const G=c[O],U=G.color,Y=G.intensity,H=G.distance,Z=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)f+=U.r*Y*w,m+=U.g*Y*w,g+=U.b*Y*w;else if(G.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(G.sh.coefficients[B],Y);else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity*w),G.castShadow){const ae=G.shadow,F=n.get(G);F.shadowBias=ae.bias,F.shadowNormalBias=ae.normalBias,F.shadowRadius=ae.radius,F.shadowMapSize=ae.mapSize,i.directionalShadow[d]=F,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=G.shadow.matrix,b++}i.directional[d]=B,d++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(U).multiplyScalar(Y*w),B.distance=H,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,i.spot[_]=B;const ae=G.shadow;if(G.map&&(i.spotLightMap[E]=G.map,E++,ae.updateMatrices(G),G.castShadow&&y++),i.spotLightMatrix[_]=ae.matrix,G.castShadow){const F=n.get(G);F.shadowBias=ae.bias,F.shadowNormalBias=ae.normalBias,F.shadowRadius=ae.radius,F.shadowMapSize=ae.mapSize,i.spotShadow[_]=F,i.spotShadowMap[_]=Z,T++}_++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy(U).multiplyScalar(Y),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),i.rectArea[M]=B,M++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity*w),B.distance=G.distance,B.decay=G.decay,G.castShadow){const ae=G.shadow,F=n.get(G);F.shadowBias=ae.bias,F.shadowNormalBias=ae.normalBias,F.shadowRadius=ae.radius,F.shadowMapSize=ae.mapSize,F.shadowCameraNear=ae.camera.near,F.shadowCameraFar=ae.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=G.shadow.matrix,v++}i.point[p]=B,p++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(Y*w),B.groundColor.copy(G.groundColor).multiplyScalar(Y*w),i.hemi[x]=B,x++}}M>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==d||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==M||D.hemiLength!==x||D.numDirectionalShadows!==b||D.numPointShadows!==v||D.numSpotShadows!==T||D.numSpotMaps!==E)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=T+E-y,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=y,D.directionalLength=d,D.pointLength=p,D.spotLength=_,D.rectAreaLength=M,D.hemiLength=x,D.numDirectionalShadows=b,D.numPointShadows=v,D.numSpotShadows=T,D.numSpotMaps=E,i.version=a2++)}function u(c,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let M=0,x=c.length;M<x;M++){const b=c[M];if(b.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),f++}else if(b.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const v=i.rectArea[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),o.identity(),a.copy(b.matrixWorld),a.premultiply(_),o.extractRotation(a),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),d++}else if(b.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(_),p++}}}return{setup:l,setupView:u,state:i}}function Zp(r,e){const t=new u2(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function u(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function c2(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Zp(r,e),t.set(s,[l])):a>=o.length?(l=new Zp(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class f2 extends Ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class h2 extends Ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new K,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p2=`uniform sampler2D shadow_pass;
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
}`;function m2(r,e,t){let n=new Mh;const i=new $e,s=new $e,a=new Vt,o=new f2({depthPacking:fy}),l=new h2,u={},c=t.maxTextureSize,h={0:li,1:Ao,2:Er},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:d2,fragmentShader:p2}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Vi;g.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Ii(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b0,this.render=function(b,v,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const E=r.getRenderTarget(),y=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Fr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let O=0,Q=b.length;O<Q;O++){const G=b[O],U=G.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const Y=U.getFrameExtents();if(i.multiply(Y),s.copy(U.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/Y.x),i.x=s.x*Y.x,U.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/Y.y),i.y=s.y*Y.y,U.mapSize.y=s.y)),U.map===null){const Z=this.type!==Ko?{minFilter:en,magFilter:en}:{};U.map=new kr(i.x,i.y,Z),U.map.texture.name=G.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();const H=U.getViewportCount();for(let Z=0;Z<H;Z++){const B=U.getViewport(Z);a.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),D.viewport(a),U.updateMatrices(G,Z),n=U.getFrustum(),x(v,T,U.camera,G,this.type)}U.isPointLightShadow!==!0&&this.type===Ko&&_(U,T),U.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(E,y,w)};function _(b,v){const T=e.update(d);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new kr(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(v,null,T,f,d,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(v,null,T,m,d,null)}function M(b,v,T,E,y,w){let D=null;const O=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0?D=O:D=T.isPointLight===!0?l:o,r.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const Q=D.uuid,G=v.uuid;let U=u[Q];U===void 0&&(U={},u[Q]=U);let Y=U[G];Y===void 0&&(Y=D.clone(),U[G]=Y),D=Y}return D.visible=v.visible,D.wireframe=v.wireframe,w===Ko?D.side=v.shadowSide!==null?v.shadowSide:v.side:D.side=v.shadowSide!==null?v.shadowSide:h[v.side],D.alphaMap=v.alphaMap,D.alphaTest=v.alphaTest,D.map=v.map,D.clipShadows=v.clipShadows,D.clippingPlanes=v.clippingPlanes,D.clipIntersection=v.clipIntersection,D.displacementMap=v.displacementMap,D.displacementScale=v.displacementScale,D.displacementBias=v.displacementBias,D.wireframeLinewidth=v.wireframeLinewidth,D.linewidth=v.linewidth,T.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(T.matrixWorld),D.nearDistance=E,D.farDistance=y),D}function x(b,v,T,E,y){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Ko)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const O=e.update(b),Q=b.material;if(Array.isArray(Q)){const G=O.groups;for(let U=0,Y=G.length;U<Y;U++){const H=G[U],Z=Q[H.materialIndex];if(Z&&Z.visible){const B=M(b,Z,E,T.near,T.far,y);r.renderBufferDirect(T,null,O,B,b,H)}}}else if(Q.visible){const G=M(b,Q,E,T.near,T.far,y);r.renderBufferDirect(T,null,O,G,b,null)}}const D=b.children;for(let O=0,Q=D.length;O<Q;O++)x(D[O],v,T,E,y)}}function g2(r,e,t){const n=t.isWebGL2;function i(){let N=!1;const oe=new Vt;let pe=null;const Ee=new Vt(0,0,0,0);return{setMask:function(Ie){pe!==Ie&&!N&&(r.colorMask(Ie,Ie,Ie,Ie),pe=Ie)},setLocked:function(Ie){N=Ie},setClear:function(Ie,je,gt,Mt,Ye){Ye===!0&&(Ie*=Mt,je*=Mt,gt*=Mt),oe.set(Ie,je,gt,Mt),Ee.equals(oe)===!1&&(r.clearColor(Ie,je,gt,Mt),Ee.copy(oe))},reset:function(){N=!1,pe=null,Ee.set(-1,0,0,0)}}}function s(){let N=!1,oe=null,pe=null,Ee=null;return{setTest:function(Ie){Ie?Fe(2929):be(2929)},setMask:function(Ie){oe!==Ie&&!N&&(r.depthMask(Ie),oe=Ie)},setFunc:function(Ie){if(pe!==Ie){switch(Ie){case B3:r.depthFunc(512);break;case O3:r.depthFunc(519);break;case N3:r.depthFunc(513);break;case bf:r.depthFunc(515);break;case k3:r.depthFunc(514);break;case z3:r.depthFunc(518);break;case W3:r.depthFunc(516);break;case G3:r.depthFunc(517);break;default:r.depthFunc(515)}pe=Ie}},setLocked:function(Ie){N=Ie},setClear:function(Ie){Ee!==Ie&&(r.clearDepth(Ie),Ee=Ie)},reset:function(){N=!1,oe=null,pe=null,Ee=null}}}function a(){let N=!1,oe=null,pe=null,Ee=null,Ie=null,je=null,gt=null,Mt=null,Ye=null;return{setTest:function(re){N||(re?Fe(2960):be(2960))},setMask:function(re){oe!==re&&!N&&(r.stencilMask(re),oe=re)},setFunc:function(re,Pe,Ce){(pe!==re||Ee!==Pe||Ie!==Ce)&&(r.stencilFunc(re,Pe,Ce),pe=re,Ee=Pe,Ie=Ce)},setOp:function(re,Pe,Ce){(je!==re||gt!==Pe||Mt!==Ce)&&(r.stencilOp(re,Pe,Ce),je=re,gt=Pe,Mt=Ce)},setLocked:function(re){N=re},setClear:function(re){Ye!==re&&(r.clearStencil(re),Ye=re)},reset:function(){N=!1,oe=null,pe=null,Ee=null,Ie=null,je=null,gt=null,Mt=null,Ye=null}}}const o=new i,l=new s,u=new a,c=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,_=!1,M=null,x=null,b=null,v=null,T=null,E=null,y=null,w=!1,D=null,O=null,Q=null,G=null,U=null;const Y=r.getParameter(35661);let H=!1,Z=0;const B=r.getParameter(7938);B.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=Z>=1):B.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=Z>=2);let ae=null,F={};const $=r.getParameter(3088),X=r.getParameter(2978),he=new Vt().fromArray($),ce=new Vt().fromArray(X);function ge(N,oe,pe){const Ee=new Uint8Array(4),Ie=r.createTexture();r.bindTexture(N,Ie),r.texParameteri(N,10241,9728),r.texParameteri(N,10240,9728);for(let je=0;je<pe;je++)r.texImage2D(oe+je,0,6408,1,1,0,6408,5121,Ee);return Ie}const q={};q[3553]=ge(3553,3553,1),q[34067]=ge(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Fe(2929),l.setFunc(bf),ie(!1),I(Wd),Fe(2884),j(Fr);function Fe(N){f[N]!==!0&&(r.enable(N),f[N]=!0)}function be(N){f[N]!==!1&&(r.disable(N),f[N]=!1)}function Re(N,oe){return m[N]!==oe?(r.bindFramebuffer(N,oe),m[N]=oe,n&&(N===36009&&(m[36160]=oe),N===36160&&(m[36009]=oe)),!0):!1}function ve(N,oe){let pe=d,Ee=!1;if(N)if(pe=g.get(oe),pe===void 0&&(pe=[],g.set(oe,pe)),N.isWebGLMultipleRenderTargets){const Ie=N.texture;if(pe.length!==Ie.length||pe[0]!==36064){for(let je=0,gt=Ie.length;je<gt;je++)pe[je]=36064+je;pe.length=Ie.length,Ee=!0}}else pe[0]!==36064&&(pe[0]=36064,Ee=!0);else pe[0]!==1029&&(pe[0]=1029,Ee=!0);Ee&&(t.isWebGL2?r.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function ke(N){return p!==N?(r.useProgram(N),p=N,!0):!1}const P={[eo]:32774,[T3]:32778,[E3]:32779};if(n)P[Xd]=32775,P[qd]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(P[Xd]=N.MIN_EXT,P[qd]=N.MAX_EXT)}const R={[A3]:0,[C3]:1,[P3]:768,[M0]:770,[U3]:776,[F3]:774,[L3]:772,[D3]:769,[S0]:771,[I3]:775,[R3]:773};function j(N,oe,pe,Ee,Ie,je,gt,Mt){if(N===Fr){_===!0&&(be(3042),_=!1);return}if(_===!1&&(Fe(3042),_=!0),N!==w3){if(N!==M||Mt!==w){if((x!==eo||T!==eo)&&(r.blendEquation(32774),x=eo,T=eo),Mt)switch(N){case mo:r.blendFuncSeparate(1,771,1,771);break;case Gd:r.blendFunc(1,1);break;case Vd:r.blendFuncSeparate(0,769,0,1);break;case Hd:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case mo:r.blendFuncSeparate(770,771,1,771);break;case Gd:r.blendFunc(770,1);break;case Vd:r.blendFuncSeparate(0,769,0,1);break;case Hd:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,v=null,E=null,y=null,M=N,w=Mt}return}Ie=Ie||oe,je=je||pe,gt=gt||Ee,(oe!==x||Ie!==T)&&(r.blendEquationSeparate(P[oe],P[Ie]),x=oe,T=Ie),(pe!==b||Ee!==v||je!==E||gt!==y)&&(r.blendFuncSeparate(R[pe],R[Ee],R[je],R[gt]),b=pe,v=Ee,E=je,y=gt),M=N,w=!1}function se(N,oe){N.side===Er?be(2884):Fe(2884);let pe=N.side===li;oe&&(pe=!pe),ie(pe),N.blending===mo&&N.transparent===!1?j(Fr):j(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const Ee=N.stencilWrite;u.setTest(Ee),Ee&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Fe(32926):be(32926)}function ie(N){D!==N&&(N?r.frontFace(2304):r.frontFace(2305),D=N)}function I(N){N!==b3?(Fe(2884),N!==O&&(N===Wd?r.cullFace(1029):N===M3?r.cullFace(1028):r.cullFace(1032))):be(2884),O=N}function de(N){N!==Q&&(H&&r.lineWidth(N),Q=N)}function ne(N,oe,pe){N?(Fe(32823),(G!==oe||U!==pe)&&(r.polygonOffset(oe,pe),G=oe,U=pe)):be(32823)}function me(N){N?Fe(3089):be(3089)}function ue(N){N===void 0&&(N=33984+Y-1),ae!==N&&(r.activeTexture(N),ae=N)}function A(N,oe,pe){pe===void 0&&(ae===null?pe=33984+Y-1:pe=ae);let Ee=F[pe];Ee===void 0&&(Ee={type:void 0,texture:void 0},F[pe]=Ee),(Ee.type!==N||Ee.texture!==oe)&&(ae!==pe&&(r.activeTexture(pe),ae=pe),r.bindTexture(N,oe||q[N]),Ee.type=N,Ee.texture=oe)}function S(){const N=F[ae];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(N){he.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),he.copy(N))}function Me(N){ce.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),ce.copy(N))}function we(N,oe){let pe=h.get(oe);pe===void 0&&(pe=new WeakMap,h.set(oe,pe));let Ee=pe.get(N);Ee===void 0&&(Ee=r.getUniformBlockIndex(oe,N.name),pe.set(N,Ee))}function We(N,oe){const Ee=h.get(oe).get(N);c.get(N)!==Ee&&(r.uniformBlockBinding(oe,Ee,N.__bindingPointIndex),c.set(N,Ee))}function Xe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},ae=null,F={},m={},g=new WeakMap,d=[],p=null,_=!1,M=null,x=null,b=null,v=null,T=null,E=null,y=null,w=!1,D=null,O=null,Q=null,G=null,U=null,he.set(0,0,r.canvas.width,r.canvas.height),ce.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Fe,disable:be,bindFramebuffer:Re,drawBuffers:ve,useProgram:ke,setBlending:j,setMaterial:se,setFlipSided:ie,setCullFace:I,setLineWidth:de,setPolygonOffset:ne,setScissorTest:me,activeTexture:ue,bindTexture:A,unbindTexture:S,compressedTexImage2D:z,compressedTexImage3D:ee,texImage2D:Te,texImage3D:ye,updateUBOMapping:we,uniformBlockBinding:We,texStorage2D:k,texStorage3D:xe,texSubImage2D:te,texSubImage3D:fe,compressedTexSubImage2D:_e,compressedTexSubImage3D:L,scissor:De,viewport:Me,reset:Xe}}function _2(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,c=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,S){return _?new OffscreenCanvas(A,S):nu("canvas")}function x(A,S,z,ee){let te=1;if((A.width>ee||A.height>ee)&&(te=ee/Math.max(A.width,A.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const fe=S?tu:Math.floor,_e=fe(te*A.width),L=fe(te*A.height);d===void 0&&(d=M(_e,L));const k=z?M(_e,L):d;return k.width=_e,k.height=L,k.getContext("2d").drawImage(A,0,0,_e,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_e+"x"+L+")."),k}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function b(A){return Af(A.width)&&Af(A.height)}function v(A){return o?!1:A.wrapS!==_i||A.wrapT!==_i||A.minFilter!==en&&A.minFilter!==ti}function T(A,S){return A.generateMipmaps&&S&&A.minFilter!==en&&A.minFilter!==ti}function E(A){r.generateMipmap(A)}function y(A,S,z,ee,te=!1){if(o===!1)return S;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe=S;return S===6403&&(z===5126&&(fe=33326),z===5131&&(fe=33325),z===5121&&(fe=33321)),S===33319&&(z===5126&&(fe=33328),z===5131&&(fe=33327),z===5121&&(fe=33323)),S===6408&&(z===5126&&(fe=34836),z===5131&&(fe=34842),z===5121&&(fe=ee===vt&&te===!1?35907:32856),z===32819&&(fe=32854),z===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function w(A,S,z){return T(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==en&&A.minFilter!==ti?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function D(A){return A===en||A===Yd||A===$d?9728:9729}function O(A){const S=A.target;S.removeEventListener("dispose",O),G(S),S.isVideoTexture&&g.delete(S)}function Q(A){const S=A.target;S.removeEventListener("dispose",Q),Y(S)}function G(A){const S=n.get(A);if(S.__webglInit===void 0)return;const z=A.source,ee=p.get(z);if(ee){const te=ee[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&U(A),Object.keys(ee).length===0&&p.delete(z)}n.remove(A)}function U(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const z=A.source,ee=p.get(z);delete ee[S.__cacheKey],a.memory.textures--}function Y(A){const S=A.texture,z=n.get(A),ee=n.get(S);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(z.__webglFramebuffer[te]),z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[te]);else{if(r.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let te=0;te<z.__webglColorRenderbuffer.length;te++)z.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[te]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let te=0,fe=S.length;te<fe;te++){const _e=n.get(S[te]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(S[te])}n.remove(S),n.remove(A)}let H=0;function Z(){H=0}function B(){const A=H;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),H+=1,A}function ae(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function F(A,S){const z=n.get(A);if(A.isVideoTexture&&me(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(z,A,S);return}}t.bindTexture(3553,z.__webglTexture,33984+S)}function $(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){be(z,A,S);return}t.bindTexture(35866,z.__webglTexture,33984+S)}function X(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){be(z,A,S);return}t.bindTexture(32879,z.__webglTexture,33984+S)}function he(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Re(z,A,S);return}t.bindTexture(34067,z.__webglTexture,33984+S)}const ce={[wf]:10497,[_i]:33071,[Tf]:33648},ge={[en]:9728,[Yd]:9984,[$d]:9986,[ti]:9729,[Z3]:9985,[Su]:9987};function q(A,S,z){if(z?(r.texParameteri(A,10242,ce[S.wrapS]),r.texParameteri(A,10243,ce[S.wrapT]),(A===32879||A===35866)&&r.texParameteri(A,32882,ce[S.wrapR]),r.texParameteri(A,10240,ge[S.magFilter]),r.texParameteri(A,10241,ge[S.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),(A===32879||A===35866)&&r.texParameteri(A,32882,33071),(S.wrapS!==_i||S.wrapT!==_i)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,D(S.magFilter)),r.texParameteri(A,10241,D(S.minFilter)),S.minFilter!==en&&S.minFilter!==ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(S.type===Ar&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Da&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(A,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Fe(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",O));const ee=S.source;let te=p.get(ee);te===void 0&&(te={},p.set(ee,te));const fe=ae(S);if(fe!==A.__cacheKey){te[fe]===void 0&&(te[fe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),te[fe].usedTimes++;const _e=te[A.__cacheKey];_e!==void 0&&(te[A.__cacheKey].usedTimes--,_e.usedTimes===0&&U(S)),A.__cacheKey=fe,A.__webglTexture=te[fe].texture}return z}function be(A,S,z){let ee=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=35866),S.isData3DTexture&&(ee=32879);const te=Fe(A,S),fe=S.source;t.bindTexture(ee,A.__webglTexture,33984+z);const _e=n.get(fe);if(fe.version!==_e.__version||te===!0){t.activeTexture(33984+z),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const L=v(S)&&b(S.image)===!1;let k=x(S.image,L,!1,c);k=ue(S,k);const xe=b(k)||o,Te=s.convert(S.format,S.encoding);let ye=s.convert(S.type),De=y(S.internalFormat,Te,ye,S.encoding,S.isVideoTexture);q(ee,S,xe);let Me;const we=S.mipmaps,We=o&&S.isVideoTexture!==!0,Xe=_e.__version===void 0||te===!0,N=w(S,k,xe);if(S.isDepthTexture)De=6402,o?S.type===Ar?De=36012:S.type===fs?De=33190:S.type===go?De=35056:De=33189:S.type===Ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ys&&De===6402&&S.type!==T0&&S.type!==fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=fs,ye=s.convert(S.type)),S.format===Do&&De===6402&&(De=34041,S.type!==go&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=go,ye=s.convert(S.type))),Xe&&(We?t.texStorage2D(3553,1,De,k.width,k.height):t.texImage2D(3553,0,De,k.width,k.height,0,Te,ye,null));else if(S.isDataTexture)if(we.length>0&&xe){We&&Xe&&t.texStorage2D(3553,N,De,we[0].width,we[0].height);for(let oe=0,pe=we.length;oe<pe;oe++)Me=we[oe],We?t.texSubImage2D(3553,oe,0,0,Me.width,Me.height,Te,ye,Me.data):t.texImage2D(3553,oe,De,Me.width,Me.height,0,Te,ye,Me.data);S.generateMipmaps=!1}else We?(Xe&&t.texStorage2D(3553,N,De,k.width,k.height),t.texSubImage2D(3553,0,0,0,k.width,k.height,Te,ye,k.data)):t.texImage2D(3553,0,De,k.width,k.height,0,Te,ye,k.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&Xe&&t.texStorage3D(35866,N,De,we[0].width,we[0].height,k.depth);for(let oe=0,pe=we.length;oe<pe;oe++)Me=we[oe],S.format!==xi?Te!==null?We?t.compressedTexSubImage3D(35866,oe,0,0,0,Me.width,Me.height,k.depth,Te,Me.data,0,0):t.compressedTexImage3D(35866,oe,De,Me.width,Me.height,k.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(35866,oe,0,0,0,Me.width,Me.height,k.depth,Te,ye,Me.data):t.texImage3D(35866,oe,De,Me.width,Me.height,k.depth,0,Te,ye,Me.data)}else{We&&Xe&&t.texStorage2D(3553,N,De,we[0].width,we[0].height);for(let oe=0,pe=we.length;oe<pe;oe++)Me=we[oe],S.format!==xi?Te!==null?We?t.compressedTexSubImage2D(3553,oe,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(3553,oe,De,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(3553,oe,0,0,Me.width,Me.height,Te,ye,Me.data):t.texImage2D(3553,oe,De,Me.width,Me.height,0,Te,ye,Me.data)}else if(S.isDataArrayTexture)We?(Xe&&t.texStorage3D(35866,N,De,k.width,k.height,k.depth),t.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,Te,ye,k.data)):t.texImage3D(35866,0,De,k.width,k.height,k.depth,0,Te,ye,k.data);else if(S.isData3DTexture)We?(Xe&&t.texStorage3D(32879,N,De,k.width,k.height,k.depth),t.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,Te,ye,k.data)):t.texImage3D(32879,0,De,k.width,k.height,k.depth,0,Te,ye,k.data);else if(S.isFramebufferTexture){if(Xe)if(We)t.texStorage2D(3553,N,De,k.width,k.height);else{let oe=k.width,pe=k.height;for(let Ee=0;Ee<N;Ee++)t.texImage2D(3553,Ee,De,oe,pe,0,Te,ye,null),oe>>=1,pe>>=1}}else if(we.length>0&&xe){We&&Xe&&t.texStorage2D(3553,N,De,we[0].width,we[0].height);for(let oe=0,pe=we.length;oe<pe;oe++)Me=we[oe],We?t.texSubImage2D(3553,oe,0,0,Te,ye,Me):t.texImage2D(3553,oe,De,Te,ye,Me);S.generateMipmaps=!1}else We?(Xe&&t.texStorage2D(3553,N,De,k.width,k.height),t.texSubImage2D(3553,0,0,0,Te,ye,k)):t.texImage2D(3553,0,De,Te,ye,k);T(S,xe)&&E(ee),_e.__version=fe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Re(A,S,z){if(S.image.length!==6)return;const ee=Fe(A,S),te=S.source;t.bindTexture(34067,A.__webglTexture,33984+z);const fe=n.get(te);if(te.version!==fe.__version||ee===!0){t.activeTexture(33984+z),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const _e=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,k=[];for(let oe=0;oe<6;oe++)!_e&&!L?k[oe]=x(S.image[oe],!1,!0,u):k[oe]=L?S.image[oe].image:S.image[oe],k[oe]=ue(S,k[oe]);const xe=k[0],Te=b(xe)||o,ye=s.convert(S.format,S.encoding),De=s.convert(S.type),Me=y(S.internalFormat,ye,De,S.encoding),we=o&&S.isVideoTexture!==!0,We=fe.__version===void 0||ee===!0;let Xe=w(S,xe,Te);q(34067,S,Te);let N;if(_e){we&&We&&t.texStorage2D(34067,Xe,Me,xe.width,xe.height);for(let oe=0;oe<6;oe++){N=k[oe].mipmaps;for(let pe=0;pe<N.length;pe++){const Ee=N[pe];S.format!==xi?ye!==null?we?t.compressedTexSubImage2D(34069+oe,pe,0,0,Ee.width,Ee.height,ye,Ee.data):t.compressedTexImage2D(34069+oe,pe,Me,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(34069+oe,pe,0,0,Ee.width,Ee.height,ye,De,Ee.data):t.texImage2D(34069+oe,pe,Me,Ee.width,Ee.height,0,ye,De,Ee.data)}}}else{N=S.mipmaps,we&&We&&(N.length>0&&Xe++,t.texStorage2D(34067,Xe,Me,k[0].width,k[0].height));for(let oe=0;oe<6;oe++)if(L){we?t.texSubImage2D(34069+oe,0,0,0,k[oe].width,k[oe].height,ye,De,k[oe].data):t.texImage2D(34069+oe,0,Me,k[oe].width,k[oe].height,0,ye,De,k[oe].data);for(let pe=0;pe<N.length;pe++){const Ie=N[pe].image[oe].image;we?t.texSubImage2D(34069+oe,pe+1,0,0,Ie.width,Ie.height,ye,De,Ie.data):t.texImage2D(34069+oe,pe+1,Me,Ie.width,Ie.height,0,ye,De,Ie.data)}}else{we?t.texSubImage2D(34069+oe,0,0,0,ye,De,k[oe]):t.texImage2D(34069+oe,0,Me,ye,De,k[oe]);for(let pe=0;pe<N.length;pe++){const Ee=N[pe];we?t.texSubImage2D(34069+oe,pe+1,0,0,ye,De,Ee.image[oe]):t.texImage2D(34069+oe,pe+1,Me,ye,De,Ee.image[oe])}}}T(S,Te)&&E(34067),fe.__version=te.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ve(A,S,z,ee,te){const fe=s.convert(z.format,z.encoding),_e=s.convert(z.type),L=y(z.internalFormat,fe,_e,z.encoding);n.get(S).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,L,S.width,S.height,S.depth,0,fe,_e,null):t.texImage2D(te,0,L,S.width,S.height,0,fe,_e,null)),t.bindFramebuffer(36160,A),ne(S)?f.framebufferTexture2DMultisampleEXT(36160,ee,te,n.get(z).__webglTexture,0,de(S)):(te===3553||te>=34069&&te<=34074)&&r.framebufferTexture2D(36160,ee,te,n.get(z).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(A,S,z){if(r.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let ee=33189;if(z||ne(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===Ar?ee=36012:te.type===fs&&(ee=33190));const fe=de(S);ne(S)?f.renderbufferStorageMultisampleEXT(36161,fe,ee,S.width,S.height):r.renderbufferStorageMultisample(36161,fe,ee,S.width,S.height)}else r.renderbufferStorage(36161,ee,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const ee=de(S);z&&ne(S)===!1?r.renderbufferStorageMultisample(36161,ee,35056,S.width,S.height):ne(S)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{const ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<ee.length;te++){const fe=ee[te],_e=s.convert(fe.format,fe.encoding),L=s.convert(fe.type),k=y(fe.internalFormat,_e,L,fe.encoding),xe=de(S);z&&ne(S)===!1?r.renderbufferStorageMultisample(36161,xe,k,S.width,S.height):ne(S)?f.renderbufferStorageMultisampleEXT(36161,xe,k,S.width,S.height):r.renderbufferStorage(36161,k,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function P(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const ee=n.get(S.depthTexture).__webglTexture,te=de(S);if(S.depthTexture.format===ys)ne(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,te):r.framebufferTexture2D(36160,36096,3553,ee,0);else if(S.depthTexture.format===Do)ne(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,te):r.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function R(A){const S=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");P(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=r.createRenderbuffer(),ke(S.__webglDepthbuffer[ee],A,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),ke(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function j(A,S,z){const ee=n.get(A);S!==void 0&&ve(ee.__webglFramebuffer,A,A.texture,36064,3553),z!==void 0&&R(A)}function se(A){const S=A.texture,z=n.get(A),ee=n.get(S);A.addEventListener("dispose",Q),A.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=S.version,a.memory.textures++);const te=A.isWebGLCubeRenderTarget===!0,fe=A.isWebGLMultipleRenderTargets===!0,_e=b(A)||o;if(te){z.__webglFramebuffer=[];for(let L=0;L<6;L++)z.__webglFramebuffer[L]=r.createFramebuffer()}else{if(z.__webglFramebuffer=r.createFramebuffer(),fe)if(i.drawBuffers){const L=A.texture;for(let k=0,xe=L.length;k<xe;k++){const Te=n.get(L[k]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&ne(A)===!1){const L=fe?S:[S];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer);for(let k=0;k<L.length;k++){const xe=L[k];z.__webglColorRenderbuffer[k]=r.createRenderbuffer(),r.bindRenderbuffer(36161,z.__webglColorRenderbuffer[k]);const Te=s.convert(xe.format,xe.encoding),ye=s.convert(xe.type),De=y(xe.internalFormat,Te,ye,xe.encoding,A.isXRRenderTarget===!0),Me=de(A);r.renderbufferStorageMultisample(36161,Me,De,A.width,A.height),r.framebufferRenderbuffer(36160,36064+k,36161,z.__webglColorRenderbuffer[k])}r.bindRenderbuffer(36161,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,ee.__webglTexture),q(34067,S,_e);for(let L=0;L<6;L++)ve(z.__webglFramebuffer[L],A,S,36064,34069+L);T(S,_e)&&E(34067),t.unbindTexture()}else if(fe){const L=A.texture;for(let k=0,xe=L.length;k<xe;k++){const Te=L[k],ye=n.get(Te);t.bindTexture(3553,ye.__webglTexture),q(3553,Te,_e),ve(z.__webglFramebuffer,A,Te,36064+k,3553),T(Te,_e)&&E(3553)}t.unbindTexture()}else{let L=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?L=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,ee.__webglTexture),q(L,S,_e),ve(z.__webglFramebuffer,A,S,36064,L),T(S,_e)&&E(L),t.unbindTexture()}A.depthBuffer&&R(A)}function ie(A){const S=b(A)||o,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0,te=z.length;ee<te;ee++){const fe=z[ee];if(T(fe,S)){const _e=A.isWebGLCubeRenderTarget?34067:3553,L=n.get(fe).__webglTexture;t.bindTexture(_e,L),E(_e),t.unbindTexture()}}}function I(A){if(o&&A.samples>0&&ne(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,ee=A.height;let te=16384;const fe=[],_e=A.stencilBuffer?33306:36096,L=n.get(A),k=A.isWebGLMultipleRenderTargets===!0;if(k)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),r.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){fe.push(36064+xe),A.depthBuffer&&fe.push(_e);const Te=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(Te===!1&&(A.depthBuffer&&(te|=256),A.stencilBuffer&&(te|=1024)),k&&r.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[xe]),Te===!0&&(r.invalidateFramebuffer(36008,[_e]),r.invalidateFramebuffer(36009,[_e])),k){const ye=n.get(S[xe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ye,0)}r.blitFramebuffer(0,0,z,ee,0,0,z,ee,te,9728),m&&r.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),k)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+xe,36161,L.__webglColorRenderbuffer[xe]);const Te=n.get(S[xe]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),r.framebufferTexture2D(36009,36064+xe,3553,Te,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function de(A){return Math.min(h,A.samples)}function ne(A){const S=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function me(A){const S=a.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function ue(A,S){const z=A.encoding,ee=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ef||z!==Cs&&(z===vt?o===!1?e.has("EXT_sRGB")===!0&&ee===xi?(A.format=Ef,A.minFilter=ti,A.generateMipmaps=!1):S=L0.sRGBToLinear(S):(ee!==xi||te!==As)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",z)),S}this.allocateTextureUnit=B,this.resetTextureUnits=Z,this.setTexture2D=F,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=he,this.rebindTextures=j,this.setupRenderTarget=se,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ne}function x2(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===As)return 5121;if(s===ey)return 32819;if(s===ty)return 32820;if(s===K3)return 5120;if(s===J3)return 5122;if(s===T0)return 5123;if(s===Q3)return 5124;if(s===fs)return 5125;if(s===Ar)return 5126;if(s===Da)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ny)return 6406;if(s===xi)return 6408;if(s===E0)return 6409;if(s===ry)return 6410;if(s===ys)return 6402;if(s===Do)return 34041;if(s===iy)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Ef)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===A0)return 6403;if(s===sy)return 36244;if(s===oy)return 33319;if(s===ay)return 33320;if(s===ly)return 36249;if(s===nc||s===ic||s===rc||s===sc)if(a===vt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===nc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ic)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===rc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===sc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===nc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ic)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===rc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===sc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jd||s===Zd||s===Kd||s===Jd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===jd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===uy)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qd||s===ep)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Qd)return a===vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ep)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tp||s===np||s===ip||s===rp||s===sp||s===op||s===ap||s===lp||s===up||s===cp||s===fp||s===hp||s===dp||s===pp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===tp)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===np)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ip)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rp)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sp)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===op)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ap)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lp)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===up)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cp)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fp)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hp)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dp)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pp)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===mp)return a===vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===go?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class v2 extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ea extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y2={type:"move"};class Rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),_=this._getHandJoint(u,d);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),m=.02,g=.005;u.inputState.pinching&&f>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y2)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ea;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class b2 extends Pn{constructor(e,t,n,i,s,a,o,l,u,c){if(c=c!==void 0?c:ys,c!==ys&&c!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ys&&(n=fs),n===void 0&&c===Do&&(n=go),super(null,i,s,a,o,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1}}class M2 extends Ls{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=null,u=null,c=null,h=null,f=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const _=[],M=[],x=new Set,b=new Map,v=new ni;v.layers.enable(1),v.viewport=new Vt;const T=new ni;T.layers.enable(2),T.viewport=new Vt;const E=[v,T],y=new v2;y.layers.enable(1),y.layers.enable(2);let w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let X=_[$];return X===void 0&&(X=new Rc,_[$]=X),X.getTargetRaySpace()},this.getControllerGrip=function($){let X=_[$];return X===void 0&&(X=new Rc,_[$]=X),X.getGripSpace()},this.getHand=function($){let X=_[$];return X===void 0&&(X=new Rc,_[$]=X),X.getHandSpace()};function O($){const X=M.indexOf($.inputSource);if(X===-1)return;const he=_[X];he!==void 0&&he.dispatchEvent({type:$.type,data:$.inputSource})}function Q(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",G);for(let $=0;$<_.length;$++){const X=M[$];X!==null&&(M[$]=null,_[$].disconnect(X))}w=null,D=null,e.setRenderTarget(d),f=null,h=null,c=null,i=null,p=null,F.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:f}),p=new kr(f.framebufferWidth,f.framebufferHeight,{format:xi,type:As,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let X=null,he=null,ce=null;g.depth&&(ce=g.stencil?35056:33190,X=g.stencil?Do:ys,he=g.stencil?go:fs);const ge={colorFormat:32856,depthFormat:ce,scaleFactor:s};c=new XRWebGLBinding(i,t),h=c.createProjectionLayer(ge),i.updateRenderState({layers:[h]}),p=new kr(h.textureWidth,h.textureHeight,{format:xi,type:As,depthTexture:new b2(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const q=e.properties.get(p);q.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),F.setContext(i),F.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function G($){for(let X=0;X<$.removed.length;X++){const he=$.removed[X],ce=M.indexOf(he);ce>=0&&(M[ce]=null,_[ce].disconnect(he))}for(let X=0;X<$.added.length;X++){const he=$.added[X];let ce=M.indexOf(he);if(ce===-1){for(let q=0;q<_.length;q++)if(q>=M.length){M.push(he),ce=q;break}else if(M[q]===null){M[q]=he,ce=q;break}if(ce===-1)break}const ge=_[ce];ge&&ge.connect(he)}}const U=new K,Y=new K;function H($,X,he){U.setFromMatrixPosition(X.matrixWorld),Y.setFromMatrixPosition(he.matrixWorld);const ce=U.distanceTo(Y),ge=X.projectionMatrix.elements,q=he.projectionMatrix.elements,Fe=ge[14]/(ge[10]-1),be=ge[14]/(ge[10]+1),Re=(ge[9]+1)/ge[5],ve=(ge[9]-1)/ge[5],ke=(ge[8]-1)/ge[0],P=(q[8]+1)/q[0],R=Fe*ke,j=Fe*P,se=ce/(-ke+P),ie=se*-ke;X.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ie),$.translateZ(se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const I=Fe+se,de=be+se,ne=R-ie,me=j+(ce-ie),ue=Re*be/de*I,A=ve*be/de*I;$.projectionMatrix.makePerspective(ne,me,ue,A,I,de)}function Z($,X){X===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(X.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;y.near=T.near=v.near=$.near,y.far=T.far=v.far=$.far,(w!==y.near||D!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,D=y.far);const X=$.parent,he=y.cameras;Z(y,X);for(let ge=0;ge<he.length;ge++)Z(he[ge],X);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),$.matrix.copy(y.matrix),$.matrix.decompose($.position,$.quaternion,$.scale);const ce=$.children;for(let ge=0,q=ce.length;ge<q;ge++)ce[ge].updateMatrixWorld(!0);he.length===2?H(y,v,T):y.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function($){h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.getPlanes=function(){return x};let B=null;function ae($,X){if(u=X.getViewerPose(l||a),m=X,u!==null){const he=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ce=!1;he.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let ge=0;ge<he.length;ge++){const q=he[ge];let Fe=null;if(f!==null)Fe=f.getViewport(q);else{const Re=c.getViewSubImage(h,q);Fe=Re.viewport,ge===0&&(e.setRenderTargetTextures(p,Re.colorTexture,h.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(p))}let be=E[ge];be===void 0&&(be=new ni,be.layers.enable(ge),be.viewport=new Vt,E[ge]=be),be.matrix.fromArray(q.transform.matrix),be.projectionMatrix.fromArray(q.projectionMatrix),be.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),ge===0&&y.matrix.copy(be.matrix),ce===!0&&y.cameras.push(be)}}for(let he=0;he<_.length;he++){const ce=M[he],ge=_[he];ce!==null&&ge!==void 0&&ge.update(ce,X,l||a)}if(B&&B($,X),X.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:X.detectedPlanes});let he=null;for(const ce of x)X.detectedPlanes.has(ce)||(he===null&&(he=[]),he.push(ce));if(he!==null)for(const ce of he)x.delete(ce),b.delete(ce),n.dispatchEvent({type:"planeremoved",data:ce});for(const ce of X.detectedPlanes)if(!x.has(ce))x.add(ce),b.set(ce,X.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ce});else{const ge=b.get(ce);ce.lastChangedTime>ge&&(b.set(ce,ce.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ce}))}}m=null}const F=new W0;F.setAnimationLoop(ae),this.setAnimationLoop=function($){B=$},this.dispose=function(){}}}function S2(r,e){function t(d,p){p.color.getRGB(d.fogColor.value,N0(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),c(d,p)):p.isMeshPhongMaterial?(i(d,p),u(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,x)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?o(d,p,_,M):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===li&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===li&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const b=r.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function o(d,p,_,M){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=M*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function c(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===li&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function w2(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(M,x){const b=x.program;n.uniformBlockBinding(M,b)}function u(M,x){let b=i[M.id];b===void 0&&(g(M),b=c(M),i[M.id]=b,M.addEventListener("dispose",p));const v=x.program;n.updateUBOMapping(M,v);const T=e.render.frame;s[M.id]!==T&&(f(M),s[M.id]=T)}function c(M){const x=h();M.__bindingPointIndex=x;const b=r.createBuffer(),v=M.__size,T=M.usage;return r.bindBuffer(35345,b),r.bufferData(35345,v,T),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,b),b}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],b=M.uniforms,v=M.__cache;r.bindBuffer(35345,x);for(let T=0,E=b.length;T<E;T++){const y=b[T];if(m(y,T,v)===!0){const w=y.value,D=y.__offset;typeof w=="number"?(y.__data[0]=w,r.bufferSubData(35345,D,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):w.toArray(y.__data),r.bufferSubData(35345,D,y.__data))}}r.bindBuffer(35345,null)}function m(M,x,b){const v=M.value;if(b[x]===void 0)return typeof v=="number"?b[x]=v:b[x]=v.clone(),!0;if(typeof v=="number"){if(b[x]!==v)return b[x]=v,!0}else{const T=b[x];if(T.equals(v)===!1)return T.copy(v),!0}return!1}function g(M){const x=M.uniforms;let b=0;const v=16;let T=0;for(let E=0,y=x.length;E<y;E++){const w=x[E],D=d(w);if(w.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,E>0){T=b%v;const O=v-T;T!==0&&O-D.boundary<0&&(b+=v-T,w.__offset=b)}b+=D.storage}return T=b%v,T>0&&(b+=v-T),M.__size=b,M.__cache={},this}function d(M){const x=M.value,b={boundary:0,storage:0};return typeof x=="number"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function p(M){const x=M.target;x.removeEventListener("dispose",p);const b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:u,dispose:_}}function T2(){const r=nu("canvas");return r.style.display="block",r}function q0(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:T2(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Cs,this.physicallyCorrectLights=!1,this.toneMapping=ir,this.toneMappingExposure=1;const d=this;let p=!1,_=0,M=0,x=null,b=-1,v=null;const T=new Vt,E=new Vt;let y=null,w=e.width,D=e.height,O=1,Q=null,G=null;const U=new Vt(0,0,w,D),Y=new Vt(0,0,w,D);let H=!1;const Z=new Mh;let B=!1,ae=!1,F=null;const $=new Bt,X=new $e,he=new K,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return x===null?O:1}let q=t;function Fe(C,V){for(let J=0;J<C.length;J++){const W=C[J],le=e.getContext(W,V);if(le!==null)return le}return null}try{const C={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_h}`),e.addEventListener("webglcontextlost",De,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",we,!1),q===null){const V=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&V.shift(),q=Fe(V,C),q===null)throw Fe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let be,Re,ve,ke,P,R,j,se,ie,I,de,ne,me,ue,A,S,z,ee,te,fe,_e,L,k,xe;function Te(){be=new BS(q),Re=new DS(q,be,r),be.init(Re),L=new x2(q,be,Re),ve=new g2(q,be,Re),ke=new kS,P=new n2,R=new _2(q,be,ve,P,Re,L,ke),j=new RS(d),se=new US(d),ie=new $y(q,Re),k=new CS(q,be,ie,Re),I=new OS(q,ie,ke,k),de=new VS(q,I,ie,ke),te=new GS(q,Re,R),S=new LS(P),ne=new t2(d,j,se,be,Re,k,S),me=new S2(d,P),ue=new r2,A=new c2(be,Re),ee=new AS(d,j,se,ve,de,c,a),z=new m2(d,de,Re),xe=new w2(q,ke,Re,ve),fe=new PS(q,be,ke,Re),_e=new NS(q,be,ke,Re),ke.programs=ne.programs,d.capabilities=Re,d.extensions=be,d.properties=P,d.renderLists=ue,d.shadowMap=z,d.state=ve,d.info=ke}Te();const ye=new M2(d,q);this.xr=ye,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=be.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=be.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(w,D,!1))},this.getSize=function(C){return C.set(w,D)},this.setSize=function(C,V,J){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=C,D=V,e.width=Math.floor(C*O),e.height=Math.floor(V*O),J!==!1&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(w*O,D*O).floor()},this.setDrawingBufferSize=function(C,V,J){w=C,D=V,O=J,e.width=Math.floor(C*J),e.height=Math.floor(V*J),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,V,J,W){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,V,J,W),ve.viewport(T.copy(U).multiplyScalar(O).floor())},this.getScissor=function(C){return C.copy(Y)},this.setScissor=function(C,V,J,W){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,V,J,W),ve.scissor(E.copy(Y).multiplyScalar(O).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(C){ve.setScissorTest(H=C)},this.setOpaqueSort=function(C){Q=C},this.setTransparentSort=function(C){G=C},this.getClearColor=function(C){return C.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(C=!0,V=!0,J=!0){let W=0;C&&(W|=16384),V&&(W|=256),J&&(W|=1024),q.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",we,!1),ue.dispose(),A.dispose(),P.dispose(),j.dispose(),se.dispose(),de.dispose(),k.dispose(),xe.dispose(),ne.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Ee),ye.removeEventListener("sessionend",Ie),F&&(F.dispose(),F=null),je.stop()};function De(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const C=ke.autoReset,V=z.enabled,J=z.autoUpdate,W=z.needsUpdate,le=z.type;Te(),ke.autoReset=C,z.enabled=V,z.autoUpdate=J,z.needsUpdate=W,z.type=le}function we(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function We(C){const V=C.target;V.removeEventListener("dispose",We),Xe(V)}function Xe(C){N(C),P.remove(C)}function N(C){const V=P.get(C).programs;V!==void 0&&(V.forEach(function(J){ne.releaseProgram(J)}),C.isShaderMaterial&&ne.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,J,W,le,Ae){V===null&&(V=ce);const Le=le.isMesh&&le.matrixWorld.determinant()<0,Ue=Et(C,V,J,W,le);ve.setMaterial(W,Le);let Ve=J.index,Ze=1;W.wireframe===!0&&(Ve=I.getWireframeAttribute(J),Ze=2);const Ne=J.drawRange,Be=J.attributes.position;let lt=Ne.start*Ze,Xt=(Ne.start+Ne.count)*Ze;Ae!==null&&(lt=Math.max(lt,Ae.start*Ze),Xt=Math.min(Xt,(Ae.start+Ae.count)*Ze)),Ve!==null?(lt=Math.max(lt,0),Xt=Math.min(Xt,Ve.count)):Be!=null&&(lt=Math.max(lt,0),Xt=Math.min(Xt,Be.count));const Yn=Xt-lt;if(Yn<0||Yn===1/0)return;k.setup(le,W,Ue,J,Ve);let Ln,dt=fe;if(Ve!==null&&(Ln=ie.get(Ve),dt=_e,dt.setIndex(Ln)),le.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*ge()),dt.setMode(1)):dt.setMode(4);else if(le.isLine){let st=W.linewidth;st===void 0&&(st=1),ve.setLineWidth(st*ge()),le.isLineSegments?dt.setMode(1):le.isLineLoop?dt.setMode(2):dt.setMode(3)}else le.isPoints?dt.setMode(0):le.isSprite&&dt.setMode(4);if(le.isInstancedMesh)dt.renderInstances(lt,Yn,le.count);else if(J.isInstancedBufferGeometry){const st=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Eu=Math.min(J.instanceCount,st);dt.renderInstances(lt,Yn,Eu)}else dt.render(lt,Yn)},this.compile=function(C,V){function J(W,le,Ae){W.transparent===!0&&W.side===Er?(W.side=li,W.needsUpdate=!0,Ce(W,le,Ae),W.side=Ao,W.needsUpdate=!0,Ce(W,le,Ae),W.side=Er):Ce(W,le,Ae)}f=A.get(C),f.init(),g.push(f),C.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights(d.physicallyCorrectLights),C.traverse(function(W){const le=W.material;if(le)if(Array.isArray(le))for(let Ae=0;Ae<le.length;Ae++){const Le=le[Ae];J(Le,C,W)}else J(le,C,W)}),g.pop(),f=null};let oe=null;function pe(C){oe&&oe(C)}function Ee(){je.stop()}function Ie(){je.start()}const je=new W0;je.setAnimationLoop(pe),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(C){oe=C,ye.setAnimationLoop(C),C===null?je.stop():je.start()},ye.addEventListener("sessionstart",Ee),ye.addEventListener("sessionend",Ie),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(V),V=ye.getCamera()),C.isScene===!0&&C.onBeforeRender(d,C,V,x),f=A.get(C,g.length),f.init(),g.push(f),$.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Z.setFromProjectionMatrix($),ae=this.localClippingEnabled,B=S.init(this.clippingPlanes,ae,V),h=ue.get(C,m.length),h.init(),m.push(h),gt(C,V,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(Q,G),B===!0&&S.beginShadows();const J=f.state.shadowsArray;if(z.render(J,C,V),B===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(h,C),f.setupLights(d.physicallyCorrectLights),V.isArrayCamera){const W=V.cameras;for(let le=0,Ae=W.length;le<Ae;le++){const Le=W[le];Mt(h,C,Le,Le.viewport)}}else Mt(h,C,V);x!==null&&(R.updateMultisampleRenderTarget(x),R.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(d,C,V),k.resetDefaultState(),b=-1,v=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function gt(C,V,J,W){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){W&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4($);const Le=de.update(C),Ue=C.material;Ue.visible&&h.push(C,Le,Ue,J,he.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==ke.render.frame&&(C.skeleton.update(),C.skeleton.frame=ke.render.frame),!C.frustumCulled||Z.intersectsObject(C))){W&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4($);const Le=de.update(C),Ue=C.material;if(Array.isArray(Ue)){const Ve=Le.groups;for(let Ze=0,Ne=Ve.length;Ze<Ne;Ze++){const Be=Ve[Ze],lt=Ue[Be.materialIndex];lt&&lt.visible&&h.push(C,Le,lt,J,he.z,Be)}}else Ue.visible&&h.push(C,Le,Ue,J,he.z,null)}}const Ae=C.children;for(let Le=0,Ue=Ae.length;Le<Ue;Le++)gt(Ae[Le],V,J,W)}function Mt(C,V,J,W){const le=C.opaque,Ae=C.transmissive,Le=C.transparent;f.setupLightsView(J),Ae.length>0&&Ye(le,V,J),W&&ve.viewport(T.copy(W)),le.length>0&&re(le,V,J),Ae.length>0&&re(Ae,V,J),Le.length>0&&re(Le,V,J),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ye(C,V,J){const W=Re.isWebGL2;F===null&&(F=new kr(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Da:As,minFilter:Su,samples:W&&s===!0?4:0})),d.getDrawingBufferSize(X),W?F.setSize(X.x,X.y):F.setSize(tu(X.x),tu(X.y));const le=d.getRenderTarget();d.setRenderTarget(F),d.clear();const Ae=d.toneMapping;d.toneMapping=ir,re(C,V,J),d.toneMapping=Ae,R.updateMultisampleRenderTarget(F),R.updateRenderTargetMipmap(F),d.setRenderTarget(le)}function re(C,V,J){const W=V.isScene===!0?V.overrideMaterial:null;for(let le=0,Ae=C.length;le<Ae;le++){const Le=C[le],Ue=Le.object,Ve=Le.geometry,Ze=W===null?Le.material:W,Ne=Le.group;Ue.layers.test(J.layers)&&Pe(Ue,V,J,Ve,Ze,Ne)}}function Pe(C,V,J,W,le,Ae){C.onBeforeRender(d,V,J,W,le,Ae),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),le.onBeforeRender(d,V,J,W,C,Ae),le.transparent===!0&&le.side===Er?(le.side=li,le.needsUpdate=!0,d.renderBufferDirect(J,V,W,le,C,Ae),le.side=Ao,le.needsUpdate=!0,d.renderBufferDirect(J,V,W,le,C,Ae),le.side=Er):d.renderBufferDirect(J,V,W,le,C,Ae),C.onAfterRender(d,V,J,W,le,Ae)}function Ce(C,V,J){V.isScene!==!0&&(V=ce);const W=P.get(C),le=f.state.lights,Ae=f.state.shadowsArray,Le=le.state.version,Ue=ne.getParameters(C,le.state,Ae,V,J),Ve=ne.getProgramCacheKey(Ue);let Ze=W.programs;W.environment=C.isMeshStandardMaterial?V.environment:null,W.fog=V.fog,W.envMap=(C.isMeshStandardMaterial?se:j).get(C.envMap||W.environment),Ze===void 0&&(C.addEventListener("dispose",We),Ze=new Map,W.programs=Ze);let Ne=Ze.get(Ve);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===Le)return ze(C,Ue),Ne}else Ue.uniforms=ne.getUniforms(C),C.onBuild(J,Ue,d),C.onBeforeCompile(Ue,d),Ne=ne.acquireProgram(Ue,Ve),Ze.set(Ve,Ne),W.uniforms=Ue.uniforms;const Be=W.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=S.uniform),ze(C,Ue),W.needsLights=St(C),W.lightsStateVersion=Le,W.needsLights&&(Be.ambientLightColor.value=le.state.ambient,Be.lightProbe.value=le.state.probe,Be.directionalLights.value=le.state.directional,Be.directionalLightShadows.value=le.state.directionalShadow,Be.spotLights.value=le.state.spot,Be.spotLightShadows.value=le.state.spotShadow,Be.rectAreaLights.value=le.state.rectArea,Be.ltc_1.value=le.state.rectAreaLTC1,Be.ltc_2.value=le.state.rectAreaLTC2,Be.pointLights.value=le.state.point,Be.pointLightShadows.value=le.state.pointShadow,Be.hemisphereLights.value=le.state.hemi,Be.directionalShadowMap.value=le.state.directionalShadowMap,Be.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Be.spotShadowMap.value=le.state.spotShadowMap,Be.spotLightMatrix.value=le.state.spotLightMatrix,Be.spotLightMap.value=le.state.spotLightMap,Be.pointShadowMap.value=le.state.pointShadowMap,Be.pointShadowMatrix.value=le.state.pointShadowMatrix);const lt=Ne.getUniforms(),Xt=Bl.seqWithValue(lt.seq,Be);return W.currentProgram=Ne,W.uniformsList=Xt,Ne}function ze(C,V){const J=P.get(C);J.outputEncoding=V.outputEncoding,J.instancing=V.instancing,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Et(C,V,J,W,le){V.isScene!==!0&&(V=ce),R.resetTextureUnits();const Ae=V.fog,Le=W.isMeshStandardMaterial?V.environment:null,Ue=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Cs,Ve=(W.isMeshStandardMaterial?se:j).get(W.envMap||Le),Ze=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ne=!!W.normalMap&&!!J.attributes.tangent,Be=!!J.morphAttributes.position,lt=!!J.morphAttributes.normal,Xt=!!J.morphAttributes.color,Yn=W.toneMapped?d.toneMapping:ir,Ln=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,dt=Ln!==void 0?Ln.length:0,st=P.get(W),Eu=f.state.lights;if(B===!0&&(ae===!0||C!==v)){const Rn=C===v&&W.id===b;S.setState(W,C,Rn)}let kt=!1;W.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Eu.state.version||st.outputEncoding!==Ue||le.isInstancedMesh&&st.instancing===!1||!le.isInstancedMesh&&st.instancing===!0||le.isSkinnedMesh&&st.skinning===!1||!le.isSkinnedMesh&&st.skinning===!0||st.envMap!==Ve||W.fog===!0&&st.fog!==Ae||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==S.numPlanes||st.numIntersection!==S.numIntersection)||st.vertexAlphas!==Ze||st.vertexTangents!==Ne||st.morphTargets!==Be||st.morphNormals!==lt||st.morphColors!==Xt||st.toneMapping!==Yn||Re.isWebGL2===!0&&st.morphTargetsCount!==dt)&&(kt=!0):(kt=!0,st.__version=W.version);let Vr=st.currentProgram;kt===!0&&(Vr=Ce(W,V,le));let Ph=!1,Oo=!1,Au=!1;const un=Vr.getUniforms(),Hr=st.uniforms;if(ve.useProgram(Vr.program)&&(Ph=!0,Oo=!0,Au=!0),W.id!==b&&(b=W.id,Oo=!0),Ph||v!==C){if(un.setValue(q,"projectionMatrix",C.projectionMatrix),Re.logarithmicDepthBuffer&&un.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),v!==C&&(v=C,Oo=!0,Au=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const Rn=un.map.cameraPosition;Rn!==void 0&&Rn.setValue(q,he.setFromMatrixPosition(C.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&un.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||le.isSkinnedMesh)&&un.setValue(q,"viewMatrix",C.matrixWorldInverse)}if(le.isSkinnedMesh){un.setOptional(q,le,"bindMatrix"),un.setOptional(q,le,"bindMatrixInverse");const Rn=le.skeleton;Rn&&(Re.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),un.setValue(q,"boneTexture",Rn.boneTexture,R),un.setValue(q,"boneTextureSize",Rn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Cu=J.morphAttributes;if((Cu.position!==void 0||Cu.normal!==void 0||Cu.color!==void 0&&Re.isWebGL2===!0)&&te.update(le,J,W,Vr),(Oo||st.receiveShadow!==le.receiveShadow)&&(st.receiveShadow=le.receiveShadow,un.setValue(q,"receiveShadow",le.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Hr.envMap.value=Ve,Hr.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Oo&&(un.setValue(q,"toneMappingExposure",d.toneMappingExposure),st.needsLights&&He(Hr,Au),Ae&&W.fog===!0&&me.refreshFogUniforms(Hr,Ae),me.refreshMaterialUniforms(Hr,W,O,D,F),Bl.upload(q,st.uniformsList,Hr,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Bl.upload(q,st.uniformsList,Hr,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&un.setValue(q,"center",le.center),un.setValue(q,"modelViewMatrix",le.modelViewMatrix),un.setValue(q,"normalMatrix",le.normalMatrix),un.setValue(q,"modelMatrix",le.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Rn=W.uniformsGroups;for(let Pu=0,Z0=Rn.length;Pu<Z0;Pu++)if(Re.isWebGL2){const Dh=Rn[Pu];xe.update(Dh,Vr),xe.bind(Dh,Vr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vr}function He(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function St(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,V,J){P.get(C.texture).__webglTexture=V,P.get(C.depthTexture).__webglTexture=J;const W=P.get(C);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=J===void 0,W.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const J=P.get(C);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,J=0){x=C,_=V,M=J;let W=!0,le=null,Ae=!1,Le=!1;if(C){const Ve=P.get(C);Ve.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(36160,null),W=!1):Ve.__webglFramebuffer===void 0?R.setupRenderTarget(C):Ve.__hasExternalTextures&&R.rebindTextures(C,P.get(C.texture).__webglTexture,P.get(C.depthTexture).__webglTexture);const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Le=!0);const Ne=P.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(le=Ne[V],Ae=!0):Re.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?le=P.get(C).__webglMultisampledFramebuffer:le=Ne,T.copy(C.viewport),E.copy(C.scissor),y=C.scissorTest}else T.copy(U).multiplyScalar(O).floor(),E.copy(Y).multiplyScalar(O).floor(),y=H;if(ve.bindFramebuffer(36160,le)&&Re.drawBuffers&&W&&ve.drawBuffers(C,le),ve.viewport(T),ve.scissor(E),ve.setScissorTest(y),Ae){const Ve=P.get(C.texture);q.framebufferTexture2D(36160,36064,34069+V,Ve.__webglTexture,J)}else if(Le){const Ve=P.get(C.texture),Ze=V||0;q.framebufferTextureLayer(36160,36064,Ve.__webglTexture,J||0,Ze)}b=-1},this.readRenderTargetPixels=function(C,V,J,W,le,Ae,Le){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=P.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){ve.bindFramebuffer(36160,Ue);try{const Ve=C.texture,Ze=Ve.format,Ne=Ve.type;if(Ze!==xi&&L.convert(Ze)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ne===Da&&(be.has("EXT_color_buffer_half_float")||Re.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ne!==As&&L.convert(Ne)!==q.getParameter(35738)&&!(Ne===Ar&&(Re.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-W&&J>=0&&J<=C.height-le&&q.readPixels(V,J,W,le,L.convert(Ze),L.convert(Ne),Ae)}finally{const Ve=x!==null?P.get(x).__webglFramebuffer:null;ve.bindFramebuffer(36160,Ve)}}},this.copyFramebufferToTexture=function(C,V,J=0){const W=Math.pow(2,-J),le=Math.floor(V.image.width*W),Ae=Math.floor(V.image.height*W);R.setTexture2D(V,0),q.copyTexSubImage2D(3553,J,0,0,C.x,C.y,le,Ae),ve.unbindTexture()},this.copyTextureToTexture=function(C,V,J,W=0){const le=V.image.width,Ae=V.image.height,Le=L.convert(J.format),Ue=L.convert(J.type);R.setTexture2D(J,0),q.pixelStorei(37440,J.flipY),q.pixelStorei(37441,J.premultiplyAlpha),q.pixelStorei(3317,J.unpackAlignment),V.isDataTexture?q.texSubImage2D(3553,W,C.x,C.y,le,Ae,Le,Ue,V.image.data):V.isCompressedTexture?q.compressedTexSubImage2D(3553,W,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Le,V.mipmaps[0].data):q.texSubImage2D(3553,W,C.x,C.y,Le,Ue,V.image),W===0&&J.generateMipmaps&&q.generateMipmap(3553),ve.unbindTexture()},this.copyTextureToTexture3D=function(C,V,J,W,le=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=C.max.x-C.min.x+1,Le=C.max.y-C.min.y+1,Ue=C.max.z-C.min.z+1,Ve=L.convert(W.format),Ze=L.convert(W.type);let Ne;if(W.isData3DTexture)R.setTexture3D(W,0),Ne=32879;else if(W.isDataArrayTexture)R.setTexture2DArray(W,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,W.flipY),q.pixelStorei(37441,W.premultiplyAlpha),q.pixelStorei(3317,W.unpackAlignment);const Be=q.getParameter(3314),lt=q.getParameter(32878),Xt=q.getParameter(3316),Yn=q.getParameter(3315),Ln=q.getParameter(32877),dt=J.isCompressedTexture?J.mipmaps[0]:J.image;q.pixelStorei(3314,dt.width),q.pixelStorei(32878,dt.height),q.pixelStorei(3316,C.min.x),q.pixelStorei(3315,C.min.y),q.pixelStorei(32877,C.min.z),J.isDataTexture||J.isData3DTexture?q.texSubImage3D(Ne,le,V.x,V.y,V.z,Ae,Le,Ue,Ve,Ze,dt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ne,le,V.x,V.y,V.z,Ae,Le,Ue,Ve,dt.data)):q.texSubImage3D(Ne,le,V.x,V.y,V.z,Ae,Le,Ue,Ve,Ze,dt),q.pixelStorei(3314,Be),q.pixelStorei(32878,lt),q.pixelStorei(3316,Xt),q.pixelStorei(3315,Yn),q.pixelStorei(32877,Ln),le===0&&W.generateMipmaps&&q.generateMipmap(Ne),ve.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),ve.unbindTexture()},this.resetState=function(){_=0,M=0,x=null,ve.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class E2 extends q0{}E2.prototype.isWebGL1Renderer=!0;class Th{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ut(e),this.near=t,this.far=n}clone(){return new Th(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class A2 extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class C2 extends Pn{constructor(e=null,t=1,n=1,i,s,a,o,l,u=en,c=en,h,f){super(null,a,o,l,u,c,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eh extends Vi{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let u=0;const c=[],h=new K,f=new K,m=[],g=[],d=[],p=[];for(let _=0;_<=n;_++){const M=[],x=_/n;let b=0;_==0&&a==0?b=.5/t:_==n&&l==Math.PI&&(b=-.5/t);for(let v=0;v<=t;v++){const T=v/t;h.x=-e*Math.cos(i+T*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(i+T*s)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),p.push(T+b,1-x),M.push(u++)}c.push(M)}for(let _=0;_<n;_++)for(let M=0;M<t;M++){const x=c[_][M+1],b=c[_][M],v=c[_+1][M],T=c[_+1][M+1];(_!==0||a>0)&&m.push(x,b,T),(_!==n-1||l<Math.PI)&&m.push(b,v,T)}this.setIndex(m),this.setAttribute("position",new Dn(g,3)),this.setAttribute("normal",new Dn(d,3)),this.setAttribute("uv",new Dn(p,2))}static fromJSON(e){return new Eh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class P2 extends Ua{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ut(16777215),this.specular=new ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=C0,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Y0 extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Fc=new Bt,Kp=new K,Jp=new K;class D2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mh,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kp),Jp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jp),t.updateMatrixWorld(),Fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class L2 extends D2{constructor(){super(new wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class R2 extends Y0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DefaultUp),this.updateMatrix(),this.target=new an,this.shadow=new L2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class F2 extends Y0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class I2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Qp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qp(){return(typeof performance>"u"?Date:performance).now()}class em{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);const tm={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Oa{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const U2=new wu(-1,1,1,-1,0,1),Ah=new Vi;Ah.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3));Ah.setAttribute("uv",new Dn([0,2,0,0,2,0],2));class $0{constructor(e){this._mesh=new Ii(Ah,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,U2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class nm extends Oa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Gi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bh.clone(e.uniforms),this.material=new Gi({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new $0(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class im extends Oa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class B2 extends Oa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class O2{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new $e);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new kr(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],tm===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),nm===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new nm(tm),this.clock=new I2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}im!==void 0&&(a instanceof im?n=!0:a instanceof B2&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new wu(-1,1,1,-1,0,1);const j0=new Vi;j0.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3));j0.setAttribute("uv",new Dn([0,2,0,0,2,0],2));class N2 extends Oa{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ut}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const rm={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:`

		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		uniform int byp; //should we apply the glitch ?

		uniform sampler2D tDiffuse;
		uniform sampler2D tDisp;

		uniform float amount;
		uniform float angle;
		uniform float seed;
		uniform float seed_x;
		uniform float seed_y;
		uniform float distortion_x;
		uniform float distortion_y;
		uniform float col_s;

		varying vec2 vUv;


		float rand(vec2 co){
			return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
		}

		void main() {
			if(byp<1) {
				vec2 p = vUv;
				float xs = floor(gl_FragCoord.x / 0.5);
				float ys = floor(gl_FragCoord.y / 0.5);
				//based on staffantans glitch shader for unity https://github.com/staffantan/unityglitch
				float disp = texture2D(tDisp, p*seed*seed).r;
				if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {
					if(seed_x>0.){
						p.y = 1. - (p.y + distortion_y);
					}
					else {
						p.y = distortion_y;
					}
				}
				if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {
					if(seed_y>0.){
						p.x=distortion_x;
					}
					else {
						p.x = 1. - (p.x + distortion_x);
					}
				}
				p.x+=disp*seed_x*(seed/5.);
				p.y+=disp*seed_y*(seed/5.);
				//base from RGB shift shader
				vec2 offset = amount * vec2( cos(angle), sin(angle));
				vec4 cr = texture2D(tDiffuse, p + offset);
				vec4 cga = texture2D(tDiffuse, p);
				vec4 cb = texture2D(tDiffuse, p - offset);
				gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
				//add noise
				vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.2);
				gl_FragColor = gl_FragColor+ snow;
			}
			else {
				gl_FragColor=texture2D (tDiffuse, vUv);
			}
		}`};class k2 extends Oa{constructor(e=64){super(),rm===void 0&&console.error("THREE.GlitchPass relies on DigitalGlitch");const t=rm;this.uniforms=bh.clone(t.uniforms),this.heightMap=this.generateHeightmap(e),this.uniforms.tDisp.value=this.heightMap,this.material=new Gi({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new $0(this.material),this.goWild=!1,this.curF=0,this.generateTrigger()}render(e,t,n){e.capabilities.isWebGL2===!1&&(this.uniforms.tDisp.value.format=E0),this.uniforms.tDiffuse.value=n.texture,this.uniforms.seed.value=Math.random(),this.uniforms.byp.value=0,this.curF%this.randX==0||this.goWild==!0?(this.uniforms.amount.value=Math.random()/30,this.uniforms.angle.value=jn.randFloat(-Math.PI,Math.PI),this.uniforms.seed_x.value=jn.randFloat(-1,1),this.uniforms.seed_y.value=jn.randFloat(-1,1),this.uniforms.distortion_x.value=jn.randFloat(0,1),this.uniforms.distortion_y.value=jn.randFloat(0,1),this.curF=0,this.generateTrigger()):this.curF%this.randX<this.randX/5?(this.uniforms.amount.value=Math.random()/90,this.uniforms.angle.value=jn.randFloat(-Math.PI,Math.PI),this.uniforms.distortion_x.value=jn.randFloat(0,1),this.uniforms.distortion_y.value=jn.randFloat(0,1),this.uniforms.seed_x.value=jn.randFloat(-.3,.3),this.uniforms.seed_y.value=jn.randFloat(-.3,.3)):this.goWild==!1&&(this.uniforms.byp.value=1),this.curF++,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}generateTrigger(){this.randX=jn.randInt(120,240)}generateHeightmap(e){const t=new Float32Array(e*e),n=e*e;for(let s=0;s<n;s++){const a=jn.randFloat(0,1);t[s]=a}const i=new C2(t,e,e,A0,Ar);return i.needsUpdate=!0,i}dispose(){this.material.dispose(),this.heightMap.dispose(),this.fsQuad.dispose()}}const sm={type:"change"},Ic={type:"start"},om={type:"end"};class z2 extends Ls{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bs.ROTATE,MIDDLE:Bs.DOLLY,RIGHT:Bs.PAN},this.touches={ONE:Os.ROTATE,TWO:Os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ue),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(sm),n.update(),s=i.NONE},this.update=function(){const L=new K,k=new Ps().setFromUnitVectors(e.up,new K(0,1,0)),xe=k.clone().invert(),Te=new K,ye=new Ps,De=2*Math.PI;return function(){const we=n.object.position;L.copy(we).sub(n.target),L.applyQuaternion(k),o.setFromVector3(L),n.autoRotate&&s===i.NONE&&w(E()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let We=n.minAzimuthAngle,Xe=n.maxAzimuthAngle;return isFinite(We)&&isFinite(Xe)&&(We<-Math.PI?We+=De:We>Math.PI&&(We-=De),Xe<-Math.PI?Xe+=De:Xe>Math.PI&&(Xe-=De),We<=Xe?o.theta=Math.max(We,Math.min(Xe,o.theta)):o.theta=o.theta>(We+Xe)/2?Math.max(We,o.theta):Math.min(Xe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=u,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),L.setFromSpherical(o),L.applyQuaternion(xe),we.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,h||Te.distanceToSquared(n.object.position)>a||8*(1-ye.dot(n.object.quaternion))>a?(n.dispatchEvent(sm),Te.copy(n.object.position),ye.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",z),n.domElement.removeEventListener("pointerdown",j),n.domElement.removeEventListener("pointercancel",I),n.domElement.removeEventListener("wheel",me),n.domElement.removeEventListener("pointermove",se),n.domElement.removeEventListener("pointerup",ie),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ue)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new em,l=new em;let u=1;const c=new K;let h=!1;const f=new $e,m=new $e,g=new $e,d=new $e,p=new $e,_=new $e,M=new $e,x=new $e,b=new $e,v=[],T={};function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function w(L){l.theta-=L}function D(L){l.phi-=L}const O=function(){const L=new K;return function(xe,Te){L.setFromMatrixColumn(Te,0),L.multiplyScalar(-xe),c.add(L)}}(),Q=function(){const L=new K;return function(xe,Te){n.screenSpacePanning===!0?L.setFromMatrixColumn(Te,1):(L.setFromMatrixColumn(Te,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(xe),c.add(L)}}(),G=function(){const L=new K;return function(xe,Te){const ye=n.domElement;if(n.object.isPerspectiveCamera){const De=n.object.position;L.copy(De).sub(n.target);let Me=L.length();Me*=Math.tan(n.object.fov/2*Math.PI/180),O(2*xe*Me/ye.clientHeight,n.object.matrix),Q(2*Te*Me/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(xe*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),Q(Te*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(L){n.object.isPerspectiveCamera?u/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(L){n.object.isPerspectiveCamera?u*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(L){f.set(L.clientX,L.clientY)}function Z(L){M.set(L.clientX,L.clientY)}function B(L){d.set(L.clientX,L.clientY)}function ae(L){m.set(L.clientX,L.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;w(2*Math.PI*g.x/k.clientHeight),D(2*Math.PI*g.y/k.clientHeight),f.copy(m),n.update()}function F(L){x.set(L.clientX,L.clientY),b.subVectors(x,M),b.y>0?U(y()):b.y<0&&Y(y()),M.copy(x),n.update()}function $(L){p.set(L.clientX,L.clientY),_.subVectors(p,d).multiplyScalar(n.panSpeed),G(_.x,_.y),d.copy(p),n.update()}function X(L){L.deltaY<0?Y(y()):L.deltaY>0&&U(y()),n.update()}function he(L){let k=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),k=!0;break}k&&(L.preventDefault(),n.update())}function ce(){if(v.length===1)f.set(v[0].pageX,v[0].pageY);else{const L=.5*(v[0].pageX+v[1].pageX),k=.5*(v[0].pageY+v[1].pageY);f.set(L,k)}}function ge(){if(v.length===1)d.set(v[0].pageX,v[0].pageY);else{const L=.5*(v[0].pageX+v[1].pageX),k=.5*(v[0].pageY+v[1].pageY);d.set(L,k)}}function q(){const L=v[0].pageX-v[1].pageX,k=v[0].pageY-v[1].pageY,xe=Math.sqrt(L*L+k*k);M.set(0,xe)}function Fe(){n.enableZoom&&q(),n.enablePan&&ge()}function be(){n.enableZoom&&q(),n.enableRotate&&ce()}function Re(L){if(v.length==1)m.set(L.pageX,L.pageY);else{const xe=_e(L),Te=.5*(L.pageX+xe.x),ye=.5*(L.pageY+xe.y);m.set(Te,ye)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;w(2*Math.PI*g.x/k.clientHeight),D(2*Math.PI*g.y/k.clientHeight),f.copy(m)}function ve(L){if(v.length===1)p.set(L.pageX,L.pageY);else{const k=_e(L),xe=.5*(L.pageX+k.x),Te=.5*(L.pageY+k.y);p.set(xe,Te)}_.subVectors(p,d).multiplyScalar(n.panSpeed),G(_.x,_.y),d.copy(p)}function ke(L){const k=_e(L),xe=L.pageX-k.x,Te=L.pageY-k.y,ye=Math.sqrt(xe*xe+Te*Te);x.set(0,ye),b.set(0,Math.pow(x.y/M.y,n.zoomSpeed)),U(b.y),M.copy(x)}function P(L){n.enableZoom&&ke(L),n.enablePan&&ve(L)}function R(L){n.enableZoom&&ke(L),n.enableRotate&&Re(L)}function j(L){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",se),n.domElement.addEventListener("pointerup",ie)),ee(L),L.pointerType==="touch"?A(L):de(L))}function se(L){n.enabled!==!1&&(L.pointerType==="touch"?S(L):ne(L))}function ie(L){te(L),v.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",se),n.domElement.removeEventListener("pointerup",ie)),n.dispatchEvent(om),s=i.NONE}function I(L){te(L)}function de(L){let k;switch(L.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case Bs.DOLLY:if(n.enableZoom===!1)return;Z(L),s=i.DOLLY;break;case Bs.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;B(L),s=i.PAN}else{if(n.enableRotate===!1)return;H(L),s=i.ROTATE}break;case Bs.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;H(L),s=i.ROTATE}else{if(n.enablePan===!1)return;B(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ic)}function ne(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ae(L);break;case i.DOLLY:if(n.enableZoom===!1)return;F(L);break;case i.PAN:if(n.enablePan===!1)return;$(L);break}}function me(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(Ic),X(L),n.dispatchEvent(om))}function ue(L){n.enabled===!1||n.enablePan===!1||he(L)}function A(L){switch(fe(L),v.length){case 1:switch(n.touches.ONE){case Os.ROTATE:if(n.enableRotate===!1)return;ce(),s=i.TOUCH_ROTATE;break;case Os.PAN:if(n.enablePan===!1)return;ge(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Os.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Fe(),s=i.TOUCH_DOLLY_PAN;break;case Os.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ic)}function S(L){switch(fe(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Re(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ve(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;R(L),n.update();break;default:s=i.NONE}}function z(L){n.enabled!==!1&&L.preventDefault()}function ee(L){v.push(L)}function te(L){delete T[L.pointerId];for(let k=0;k<v.length;k++)if(v[k].pointerId==L.pointerId){v.splice(k,1);return}}function fe(L){let k=T[L.pointerId];k===void 0&&(k=new $e,T[L.pointerId]=k),k.set(L.pageX,L.pageY)}function _e(L){const k=L.pointerId===v[0].pointerId?v[1]:v[0];return T[k.pointerId]}n.domElement.addEventListener("contextmenu",z),n.domElement.addEventListener("pointerdown",j),n.domElement.addEventListener("pointercancel",I),n.domElement.addEventListener("wheel",me,{passive:!1}),this.update()}}const W2=zr({__name:"Three",setup(r){const e=nr(),t={fogColor:0,fogNear:1,fogFar:27},n={fovy:60,aspect:window.innerWidth/window.innerHeight,near:.1,far:30,x:0,y:5,z:7,lookAt:new K(0,0,0)},i={clearColor:0,width:window.innerWidth,height:window.innerHeight},s={color:16645616,specular:16777215},a={color:14326408,intensity:1,x:1,y:1,z:1},o={color:16777215,intensity:.2},l=new A2;l.fog=new Th(t.fogColor,t.fogNear,t.fogFar);const u=new ni(n.fovy,n.aspect,n.near,n.far),c=new q0,h=new O2(c),f=()=>{if(e.value instanceof HTMLElement){u.updateProjectionMatrix(),u.position.set(n.x,n.y,n.z),u.lookAt(n.lookAt),c.setClearColor(new ut(i.clearColor)),c.setSize(i.width,i.height),e.value.appendChild(c.domElement);const g=new N2(l,u);h.addPass(g);const d=new k2;h.addPass(d),d.renderToScreen=!0;const p=new ea,_=new P2(s),M=new Eh(1,16,16),x=new Ii(M,_);p.add(x),l.add(p);const b=new R2(a.color,a.intensity);b.position.x=a.x,b.position.y=a.y,b.position.z=a.z,l.add(b);const v=new F2(o.color,o.intensity);l.add(v),new z2(u,c.domElement),m()}},m=()=>{const g=()=>{h.render(),requestAnimationFrame(g)};g()};return lr(()=>{f()}),(g,d)=>(Wn(),zi("div",{ref_key:"container",ref:e,class:"three"},null,512))}});const G2=Gr(W2,[["__scopeId","data-v-69b4d35e"]]),Kt=r=>(ex("data-v-d90e3806"),r=r(),tx(),r),V2={ref:"sandbox"},H2={class:"lead"},X2=Kt(()=>Ge("ul",null,[Ge("li",null,"\u60F3\u50CF\u4EE5\u4E0A\u306B\u304B\u3093\u305F\u3093\u306B\u74B0\u5883\u304C\u4F5C\u308C\u3066\u3073\u3063\u304F\u308A\uFF01"),Ge("li",null,"\u307B\u3093\u3068\u306BGetting started\u306E\u30B3\u30DE\u30F3\u30C93\u3064\u304F\u3089\u3044\u53E9\u3044\u305F\u3089\u3067\u304D\u305F")],-1)),q2=Kt(()=>Ge("ul",null,[Ge("li",null,"\u307E\u3060option\u306E\u8A18\u6CD5\u306B\u6163\u308C\u3066\u3044\u308B\u306E\u3067\u3001\u9055\u548C\u611F\u304C\u3042\u308B\u2026"),Ge("li",null,"\u3053\u308C\u306B\u6163\u308C\u3066\u304D\u305F\u3089React\u3068\u304B\u306E\u30B3\u30FC\u30C9\u8AAD\u307F\u89E3\u304D\u3082\u30E9\u30AF\u306B\u306A\u308B\u4E88\u611F\u304C\u3059\u308B\u306E\u3067\u9811\u5F35\u308A\u305F\u3044\u3068\u3053")],-1)),Y2=Kt(()=>Ge("pre",null,`          import { ref, onMounted } from 'vue'

          // \u3053\u3053\u3067\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u53C2\u7167\u3057\u305F\u3044\u8981\u7D20\u3092\u3064\u306A\u304E\u3053\u3080
          // (\u5909\u6570\u540D\u3068ref\u5C5E\u6027\u306E\u540D\u79F0\u3092\u3042\u308F\u305B\u308B)
          const templateRef = ref(null);
          const props = defineProps({
            // \u3053\u3053\u306Bprops\u3092\u5B9A\u7FA9
          })

          onMounted(() => {
            // \u3053\u3053\u306B\u51E6\u7406\u3092\u8A18\u8FF0
          })
        `,-1)),$2=Kt(()=>Ge("ul",null,[Ge("li",null,"gsap\u3068\u305D\u306E\u30D7\u30E9\u30B0\u30A4\u30F3ScrollTrigger\u3092\u7528\u3044\u3066\u4F5C\u6210"),Ge("li",null,"scrub\u3067\u30B9\u30AF\u30ED\u30FC\u30EB\u4F4D\u7F6E\u306B\u5408\u308F\u305B\u3066\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u52D5\u304F\u306E\u3060\u3051\u3069\u3001\u305D\u308C\u304C\u3081\u3061\u3083\u9762\u767D\u3044\uFF01")],-1)),j2=Kt(()=>Ge("pre",null,`          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "body",
              // markers: true,
              scrub: true,
              start: "center center",
              end: "bottom center"
            }
          });
          tl.fromTo(
            box.value,
            {'width': '150vmax'},
            {'width': '300vmax'},
          );
        `,-1)),Z2=Kt(()=>Ge("pre",null,`          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "body",
              // markers: true,
              scrub: true,
              start: "center center",
              end: "bottom center"
            }
          });
          tl.fromTo(
            box.value,
            {'width': '150vmax'},
            {'width': '300vmax'},
          );
        `,-1)),K2=Kt(()=>Ge("pre",null,`          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "body",
              // markers: true,
              scrub: true,
              start: "center center",
              end: "bottom center"
            }
          });
          tl.fromTo(
            box.value,
            {'width': '150vmax'},
            {'width': '300vmax'},
          );
        `,-1)),J2=Kt(()=>Ge("video",{autoplay:"",loop:"",muted:""},[Ge("source",{src:$f})],-1)),Q2=Kt(()=>Ge("ul",null,[Ge("li",null,"gsap.timeline\u95A2\u6570\u3092\u4F7F\u7528\u3057\u305F"),Ge("li",null,"stagger\u3068\u3044\u3046\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u3064\u3051\u308B\u3053\u3068\u3067\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5BFE\u8C61\u306E\u8981\u7D20\u305F\u3061\u3092\u6307\u5B9A\u3057\u305F\u6642\u9593\u5206\u305A\u3089\u3057\u3066\u9806\u6B21\u5B9F\u884C\u3067\u304D\u308B")],-1)),eT=Kt(()=>Ge("ul",null,[Ge("li",null,"\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u5B9A\u7FA9\u3059\u308B\u7DF4\u7FD2"),Ge("li",null,"scroll\u306Estart\u3068end\u307E\u308F\u308A\u306E\u5B9A\u7FA9\u306E\u4ED5\u65B9\u3001fromTo()\u3068\u306E\u304B\u3051\u5408\u308F\u305B\u65B9\u304C\u6DF7\u4E71\u3057\u3066\u3057\u307E\u3063\u305F\u304C\u3001\u4F55\u3068\u304B\u3067\u304D\u305F\uFF01"),Ge("li",null,"\u3053\u306E\u30AB\u30B9\u30BF\u30E0\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u306F\u4F5C\u6210\u3057\u305F `v-blur` \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u6307\u5B9A\u3057\u3066\u3044\u308B\u306E\u3067\u3001\u4E0A\u7AEF\u4E0B\u7AEF\u3067\u307C\u304B\u3055\u308C\u308B\u306F\u305A")],-1)),tT=Kt(()=>Ge("pre",null,`          const blurDirective = {
            mounted: function(el: HTMLElement) {
              gsap.to(
                el,
                {
                  'filter': 'blur(10px)',
                  scrollTrigger: {
                    trigger: el,
                    // markers: true,
                    scrub: true,
                    start: "bottom 20%",
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
                    end: "top bottom-=40%"
                  }
                }
              )
            }
          }
          const main = createApp(App)
          main.directive('blur', blurDirective)
          main.mount('#app')
        `,-1)),nT=Kt(()=>Ge("video",{autoplay:"",loop:"",muted:""},[Ge("source",{src:$f})],-1)),iT=Kt(()=>Ge("ul",null,[Ge("li",null,"gsap.timeline\u95A2\u6570\u3092\u4F7F\u7528\u3057\u305F"),Ge("li",null,"stagger\u3068\u3044\u3046\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u3064\u3051\u308B\u3053\u3068\u3067\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5BFE\u8C61\u306E\u8981\u7D20\u305F\u3061\u3092\u6307\u5B9A\u3057\u305F\u6642\u9593\u5206\u305A\u3089\u3057\u3066\u9806\u6B21\u5B9F\u884C\u3067\u304D\u308B")],-1)),rT=Kt(()=>Ge("video",{autoplay:"",loop:"",muted:""},[Ge("source",{src:$f})],-1)),sT=Kt(()=>Ge("ul",null,[Ge("li",null,"gsap.timeline\u95A2\u6570\u3092\u4F7F\u7528\u3057\u305F"),Ge("li",null,"stagger\u3068\u3044\u3046\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u3064\u3051\u308B\u3053\u3068\u3067\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5BFE\u8C61\u306E\u8981\u7D20\u305F\u3061\u3092\u6307\u5B9A\u3057\u305F\u6642\u9593\u5206\u305A\u3089\u3057\u3066\u9806\u6B21\u5B9F\u884C\u3067\u304D\u308B")],-1)),oT=Kt(()=>Ge("pre",null,`          const blurDirective = {
            mounted: function(el: HTMLElement) {
              gsap.to(
                el,
                {
                  'filter': 'blur(10px)',
                  scrollTrigger: {
                    trigger: el,
                    // markers: true,
                    scrub: true,
                    start: "bottom 20%",
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
                    end: "top bottom-=40%"
                  }
                }
              )
            }
          }
          const main = createApp(App)
          main.directive('blur', blurDirective)
          main.mount('#app')
        `,-1)),aT=Kt(()=>Ge("p",{style:{color:"white",width:"240px"}}," \u3042\u306E\u30A4\u30FC\u30CF\u30C8\u30FC\u30F4\u30A9\u306E\u3059\u304D\u3068\u304A\u3063\u305F\u98A8\u3001\u590F\u3067\u3082\u5E95\u306B\u51B7\u305F\u3055\u3092\u3082\u3064\u9752\u3044\u305D\u3089\u3001\u3046\u3064\u304F\u3057\u3044\u68EE\u3067\u98FE\u3089\u308C\u305F\u30E2\u30EA\u30FC\u30AA\u5E02\u3001\u90CA\u5916\u306E\u304E\u3089\u304E\u3089\u3072\u304B\u308B\u8349\u306E\u6CE2\u3002 \u307E\u305F\u305D\u306E\u306A\u304B\u3067\u3044\u3063\u3057\u3087\u306B\u306A\u3063\u305F\u305F\u304F\u3055\u3093\u306E\u3072\u3068\u305F\u3061\u3001\u30D5\u30A1\u30BC\u30FC\u30ED\u3068\u30ED\u30B6\u30FC\u30ED\u3001\u7F8A\u98FC\u306E\u30DF\u30FC\u30ED\u3084\u3001\u9854\u306E\u8D64\u3044\u3053\u3069\u3082\u305F\u3061\u3001\u5730\u4E3B\u306E\u30C6\u30FC\u30E2\u3001\u5C71\u732B\u535A\u58EB\u306E\u30DC\u30FC\u30AC\u30F3\u30C8\u30FB\u30C7\u30B9\u30C8\u30A5\u30D1\u30FC\u30B4\u306A\u3069\u3001\u3044\u307E\u3053\u306E\u6697\u3044\u5DE8\u304D\u306A\u77F3\u306E\u5EFA\u7269\u306E\u306A\u304B\u3067\u8003\u3048\u3066\u3044\u308B\u3068\u3001\u307F\u3093\u306A\u3080\u304B\u3057\u98A8\u306E\u306A\u3064\u304B\u3057\u3044\u9752\u3044\u5E7B\u71C8\u306E\u3088\u3046\u306B\u601D\u308F\u308C\u307E\u3059\u3002\u3067\u306F\u3001\u308F\u305F\u304F\u3057\u306F\u3044\u3064\u304B\u306E\u5C0F\u3055\u306A\u307F\u3060\u3057\u3092\u3064\u3051\u306A\u304C\u3089\u3001\u3057\u305A\u304B\u306B\u3042\u306E\u5E74\u306E\u30A4\u30FC\u30CF\u30C8\u30FC\u30F4\u30A9\u306E\u4E94\u6708\u304B\u3089\u5341\u6708\u307E\u3067\u3092\u66F8\u304D\u3064\u3051\u307E\u3057\u3087\u3046\u3002 ",-1)),lT=zr({__name:"App",setup(r){return(e,t)=>{const n=Gh("budoux"),i=Gh("blur");return Wn(),zi("main",V2,[ct(X1),Ge("div",H2,[Uu((Wn(),zi("p",null,[Kn(" \u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u307E\u308F\u308A\u3068\u304B\u6700\u8FD1\u306E\u3084\u308A\u304B\u305F\u8A66\u3057\u305F\u3053\u3068\u306A\u304B\u3063\u305F\u306E\u3067\u72EC\u7FD2\u3057\u3066\u307F\u307E\u3057\u305F\uFF01 \u30B3\u30C6\u30B3\u30C6\u306B\u306A\u3063\u3066\u3057\u307E\u3063\u3066\u3044\u307E\u3059\u304C\u3001\u7DF4\u7FD2\u3068\u3044\u3046\u3053\u3068\u3067\u2026\uFF01 ")])),[[n]])]),ct(Si,null,{heading:pt(()=>[Kn(" Vite\u3092\u4F7F\u3063\u3066\u307F\u305F ")]),default:pt(()=>[X2]),_:1}),ct(Si,null,{heading:pt(()=>[Kn(" Vue3 Composition API \u3092\u5229\u7528\u3057\u3066\u307F\u305F ")]),default:pt(()=>[q2,ct(Us,{type:"javascript"},{default:pt(()=>[Y2]),_:1})]),_:1}),ct(Si,null,{heading:pt(()=>[Kn(" Gsap\u3092\u5229\u7528\u3057\u3066\u307F\u305F ")]),default:pt(()=>[$2]),_:1}),ct(h3),ct(Si,null,{default:pt(()=>[Kn(" \u80CC\u666F\u3092\u57CB\u3081\u3066\u307F\u305F\u308A "),ct(Us,{type:"javascript"},{default:pt(()=>[j2]),_:1})]),_:1}),ct(Si,{"start-x":"-200"},{default:pt(()=>[Kn(" \u30B9\u30E9\u30A4\u30C9\u30A4\u30F3\u3055\u305B\u3066\u307F\u305F\u308A "),ct(Us,{type:"javascript"},{default:pt(()=>[Z2]),_:1})]),_:1}),Uu((Wn(),$c(Si,null,{default:pt(()=>[Kn(" \u4E0A\u7AEF\u4E0B\u7AEF\u3067\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u5165\u308B\u6642\u306B\u307C\u304B\u3057\u3066\u307F\u305F\u308A "),ct(Us,{type:"javascript"},{default:pt(()=>[K2]),_:1})]),_:1})),[[i]]),ct(Si,null,{heading:pt(()=>[Kn(" \u6700\u521D\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3 ")]),default:pt(()=>[J2,Q2]),_:1}),Uu((Wn(),$c(Si,null,{heading:pt(()=>[Kn(" viewport\u306E\u4E0A\u7AEF\u4E0B\u7AEF\u3067\u307C\u304B\u3059\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u4F5C\u6210\u3057\u305F ")]),default:pt(()=>[eT,ct(Us,{type:"javascript"},{default:pt(()=>[tT]),_:1})]),_:1})),[[i]]),ct(y3,null,{default:pt(()=>[ct(Si,null,{heading:pt(()=>[Kn(" \u6700\u521D\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3 ")]),default:pt(()=>[nT,iT]),_:1}),ct(Si,null,{heading:pt(()=>[Kn(" \u6700\u521D\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3 ")]),default:pt(()=>[rT,sT]),_:1}),ct(Us,{type:"javascript"},{default:pt(()=>[oT]),_:1}),aT]),_:1}),ct(c3),ct(G2)],512)}}});const uT=Gr(lT,[["__scopeId","data-v-d90e3806"]]);Cn.registerPlugin(et);const cT={mounted:function(r){Cn.to(r,{filter:"blur(10px)",scrollTrigger:{trigger:r,scrub:!0,start:"bottom top+=200",end:"bottom top"}}),Cn.fromTo(r,{filter:"blur(10px)"},{filter:"blur(0px)",scrollTrigger:{trigger:r,scrub:!0,start:"top bottom",end:"top bottom-=300"}})}},fT=[0,128,256,384,592,688,768,880,1024,1280,1328,1424,1536,1792,1872,1920,1984,2048,2112,2144,2208,2304,2432,2560,2688,2816,2944,3072,3200,3328,3456,3584,3712,3840,4096,4256,4352,4608,4992,5024,5120,5760,5792,5888,5920,5952,5984,6016,6144,6320,6400,6480,6528,6624,6656,6688,6832,6912,7040,7104,7168,7248,7296,7312,7360,7376,7424,7552,7616,7680,7936,8192,8304,8352,8400,8448,8528,8592,8704,8960,9216,9280,9312,9472,9600,9632,9728,9984,10176,10224,10240,10496,10624,10752,11008,11264,11360,11392,11520,11568,11648,11744,11776,11904,12032,12272,12288,12352,12448,12544,12592,12688,12704,12736,12784,12800,13056,13312,19904,19968,40960,42128,42192,42240,42560,42656,42752,42784,43008,43056,43072,43136,43232,43264,43312,43360,43392,43488,43520,43616,43648,43744,43776,43824,43888,43968,44032,55216,55296,56192,56320,57344,63744,64256,64336,65024,65040,65056,65072,65104,65136,65280,65520,65536,65664,65792,65856,65936,66e3,66176,66208,66272,66304,66352,66384,66432,66464,66560,66640,66688,66736,66816,66864,67072,67584,67648,67680,67712,67808,67840,67872,67968,68e3,68096,68192,68224,68288,68352,68416,68448,68480,68608,68736,68864,69216,69248,69376,69424,69552,69600,69632,69760,69840,69888,69968,70016,70112,70144,70272,70320,70400,70656,70784,71040,71168,71264,71296,71424,71680,71840,71936,72096,72192,72272,72384,72704,72816,72960,73056,73440,73648,73664,73728,74752,74880,77824,78896,82944,92160,92736,92880,92928,93760,93952,94176,94208,100352,101120,101632,110592,110848,110896,110960,113664,113824,118784,119040,119296,119520,119552,119648,119808,120832,122880,123136,123584,124928,125184,126064,126208,126464,126976,127024,127136,127232,127488,127744,128512,128592,128640,128768,128896,129024,129280,129536,129648,129792,131072,173824,177984,178208,183984,194560,196608,917504,917760,983040,1048576],hT={"BB2:108120":1800,"UB3:107":271,"UB3:120":-857,"TB2:108108108":-417,"TB4:108108108":285,"UB3:109":-583,"UB4:120":388,"BB3:108108":828,"UB4:108":-853,"BB1:108120":-820,"BB1:108107":502,"UB4:107":-708,"TB1:120120108":358,"TB3:108109109":1341,"UB2:107":-586,"TB1:108120108":-451,"TB3:108108108":257,"BB2:109109":-1876,"UW3:\u306F":2052,"UW3:\u306B":1698,"TB3:108120108":-458,"UW3:\u304C":2048,"UW4:\u3053":1182,"UB5:107":-551,"UW3:\u3068":980,"TB4:109109109":773,"UW4:\u3066":-1453,"TB2:108108107":-152,"UW3:\u3002":3201,"UW4:\u304A":2865,"UW3:\u306E":1203,"BB3:120120":144,"BB3:108120":-369,"UW3:\u304A":-2539,"UW3:\u3057":-613,"UW4:\u3001":-3574,"UW4:\u306E":-1111,"UW3:\u3092":3110,"UW4:\u3002":-3022,"UW3:\u3001":2039,"UW5:\u3067":-1091,"UW4:\u3042":1241,"BB2:108108":-560,"UW4:\u3063":-1412,"UW5:\u3063":625,"UW3:\u3082":1350,"UW5:\u3046":297,"UW3:\u300C":-2404,"UW5:\u306A":-595,"UW4:\u305D":1007,"UW4:\u308B":-1829,"UW3:\u3063":-1662,"UW4:\u300C":3213,"UW4:\u3044":270,"BB2:162162":-911,"UB4:162":178,"UW5:\u306B":-727,"BW3:\u3082\u306E":2716,"UW5:\u3057":-484,"UW6:\u3046":-344,"BW2:\u3068\u3044":929,"UW4:\u306B":-1236,"UW3:\u308B":760,"TB2:120108120":-299,"UW4:\u3067":-419,"UW5:\u304C":-728,"BB1:120120":122,"UW5:\u306F":-704,"UW4:\u306F":-605,"UW4:\u308C":-1507,"UW5:\u304D":545,"BB2:120108":-68,"BB2:120120":-320,"UW3:\u30FB":1498,"BB2:120162":953,"BB2:107108":-323,"TB1:108107108":-575,"UW3:\u308C":-673,"BB2:162108":520,"TB2:162162162":-450,"UW4:\u3089":-1767,"TB1:120120120":-247,"UB2:120":56,"TB1:108108162":231,"UW5:\u3059":-764,"UW5:\u3093":536,"UW3:\u3067":794,"UW4:\u304C":-703,"UW3:\u3053":-566,"TB4:120108108":51,"UW3:\u3089":390,"UW6:\u306B":52,"UW6:\u3002":-182,"UW3:\u305F":466,"TB1:107120120":133,"UW5:\u304F":354,"UB1:109":107,"UW1:\u305D":492,"UW3:\u3046":488,"BW3:\u3068\u3044":-1194,"BW3:\u3068\u3053":1145,"UW3:\u307E":-847,"BW3:\u3053\u3068":812,"UW2:\u3063":151,"UW5:\u30FB":-517,"TB3:108108107":-314,"UW3:\u304D":-553,"UW4:\u3093":-783,"UB3:108":-117,"UW3:\u304F":736,"UW3:\u300D":-88,"UW5:\u3042":-598,"BB2:108162":569,"BW3:\u3044\u3046":606,"UW5:\u308C":287,"UW2:\u4E00":744,"UW3:\uFF0C":1739,"UW1:\u306B":-217,"UW2:\u3068":-219,"TB2:120120108":-144,"TB2:120120120":234,"UW5:\u3092":-649,"UW4:\u308A":-757,"BW1:\u304B\u3089":834,"UW3:\u3061":-819,"BW3:\u3044\u3044":869,"UW2:\u306F":-275,"UW6:\u305F":-267,"TB1:109109108":154,"UW4:\uFF11":653,"UW4:\u3084":594,"UW2:\u3093":255,"UW3:\uFF3D":1018,"UW4:\u307B":1124,"TB3:108162162":284,"BW2:\u3067\u3042":-1624,"UW4:\u3060":-372,"BB3:120108":440,"TB1:162162162":-184,"BW3:\u30FB\u30FB":-1936,"BW3:\u3068\u304D":1318,"UW4:\u3092":-1124,"UW3:\u3066":453,"UW4:\u304B":-92,"UW2:\u305D":-343,"TB4:120120108":175,"TB2:108107120":182,"UW2:\u3092":-886,"UW4:\u3054":930,"UW2:\u3067":-223,"TB3:120120120":-57,"BB1:162162":-113,"UW2:\u3057":103,"UW4:\u51FA":-200,"UW2:\u307E":510,"UW4:\uFF0C":-2099,"UW5:\u3068":-498,"UW4:\u3069":385,"BW3:\u3057\u3066":80,"UW1:\u3067":-156,"BB2:107120":360,"BW3:\u305F\u3081":1289,"BW2:\u3068\u3057":771,"BW2:\u306A\u3044":-1114,"BW2:\u3066\u3044":-399,"UW3:\u9593":870,"UW3:\uFF01":1230,"UW5:\u30FC":79,"UW4:\u3059":472,"UW4:\uFF01":-1596,"BW1:\u3068\u304C":-1092,"UW5:\u306E":-572,"TB4:108108120":55,"TB2:107120120":-151,"UW6:\u30FB":-124,"UW3:\uFF0E":1316,"UW2:\u3066":-248,"UW3:\u7B11":1280,"UW2:\u3053":-125,"UW5:\u3082":-284,"BW3:\u3088\u3046":-1023,"UW3:\u4EBA":862,"UW2:\u306E":84,"UW3:\u304B":417,"UW3:\u65E5":568,"UW1:\u3044":-88,"BW2:\u3068\u3053":-528,"UW4:\u79C1":910,"UW3:\u2026":674,"UW2:\u306B":-212,"UW3:\u4ECA":894,"BB3:162108":-121,"UB3:087":1108,"UW4:\uFF08":762,"BB1:162120":260,"UW1:\u306A":-197,"BB3:109109":91,"UW5:\u6765":-53,"UW3:\uFF1F":1117,"TW3:\u3066\u3044\u308B":-645,"UW4:\u300D":-868,"UW4:\u524D":-611,"BW1:\u3044\u3046":220,"UW4:\u3064":422,"UW3:\uFF09":1431,"BW1:\u3067\u306F":-532,"UW2:\u308B":-157,"UW5:\u305D":-476,"UW4:\u30FC":-846,"TW2:\u6C17\u306B\u5165":-1309,"UW4:\u7B11":-1614,"UW4:\u3072":1225,"TB4:162162162":302,"UW4:\u3051":-738,"UW2:\u3082":-260,"BW3:\u3061\u3087":892,"BW3:\u51FA\u6765":-778,"TB2:108120108":-193,"UW4:\u300E":1221,"UW3:\uFF3B":-779,"UW4:\uFF12":489,"UW5:\u3064":420,"TB1:107120108":-85,"UW3:\uFF11":-525,"BW3:\u304B\u3089":-830,"UB5:120":26,"UW4:\u307E":270,"UW3:\u3070":439,"UW3:\u308A":-120,"BW3:\u305D\u306E":1263,"UW3:\u3054":-795,"UW4:\u308F":291,"BW2:\u3066\u304A":-1310,"TB2:120108108":-23,"BW1:\u306A\u3044":347,"UW2:\u3088":312,"UB2:162":-107,"UW6:\u306E":-114,"UW2:\u6BCE":701,"UW2:\u7D50":830,"TW4:\u306E\u4EAC\u90FD":1309,"UW3:\u3055":-451,"UW2:\u6700":260,"BW2:\u3067\u3059":-1080,"UW2:\u300D":536,"UW5:\u3048":188,"UW3:\u3060":-60,"TW4:\u3068\u3053\u308D":643,"UW4:\uFF0E":-1184,"UB1:108":31,"UW6:\u3066":-194,"UW1:\u304C":-51,"BW2:\u3001\u3068":-514,"UW3:\uFF10":-442,"UW3:\u3093":-120,"UW3:\u4E2D":649,"UW4:\u3088":410,"BW3:\u3053\u306E":882,"UW2:\u304C":-75,"UW3:\u307F":-341,"TW2:\u3067\u306F\u306A":-718,"UW6:\u3068":-128,"UW4:\uFF3B":340,"TW3:\u3001\u3042\u308B":-1245,"BW3:\u3053\u308D":-164,"UW4:\uFF1F":-1052,"UW6:\u3001":70,"UW4:\u96FB":-256,"BB1:108072":279,"UW3:\u5F8C":786,"UW5:\u3044":40,"UW2:\u3001":-177,"UW5:\u3066":97,"BB2:108072":-411,"UW3:\u771F":222,"UW3:\u305D":-89,"UW5:\u3055":-277,"UB5:162":-146,"TW3:\u3068\u3044\u3046":414,"UW3:\u5206":483,"UB6:120":21,"BW3:\u306A\u3063":-339,"UW4:\u308D":-406,"BB2:107107":-360,"TW3:\u3068\u3053\u308D":-450,"UB1:120":-14,"UW1:\u3001":-36,"BW1:\u3068\u304B":513,"UW3:\u306A":252,"UW6:\u308A":54,"UW4:\u9593":-501,"UW3:\u3079":-478,"UW5:\u3079":450,"TB4:108120108":-36,"UW4:\uFF3D":-644,"BW2:\u306B\u306F":-392,"UW5:\u3005":714,"BW1:\u3002\u30FB":643,"BW1:\u305D\u306E":-341,"UW1:\u3059":91,"UW4:\uFF09":-1018,"UW6:\u3063":34,"TB3:109109109":-177,"TB3:108120120":123,"UB5:109":80,"BW1:\u304B\u3082":-695,"UW6:\u308B":-44,"TB4:108109109":-357,"UW3:\u3069":253,"TW3:\u3067\u3042\u308B":-389,"TW4:\u304F\u3089\u3044":613,"BW1:\u6700\u8FD1":515,"BW1:\u3057\u3044":418,"BW1:\u3068\u3082":-396,"BW2:\u3068\u540C":-553,"TW1:\u3068\u3044\u3046":193,"UW2:\u3055":298,"BW2:\u5E2F\u96FB":-334,"TB1:120108108":-57,"BW3:\u305D\u3057":-315,"UW2:\u3002":-77,"UW5:\u304B":33,"UW5:\u3053":88,"BW3:\u306A\u3044":137,"BW1:\u3093\u306A":280,"BW2:\u3067\u304D":-448,"UW4:\uFF13":196,"UW3:\u3051":-136,"TW4:\u3053\u3068\u304C":-295,"BW1:\u3053\u3068":-329,"UB3:162":-92,"UW3:\u96FB":-360,"UW3:\u3088":-132,"BW1:\u305F\u3068":-288,"UW5:\u307E":-45,"UW5:\u305F":-43,"UW5:\u3061":174,"UW2:\u3051":75,"UW5:\u3060":-60,"UW3:\u5EA6":330,"BW1:\u305F\u3044":360,"UW4:\u4F7F":217,"UW2:\u304D":130,"TW4:\u304B\u306A\u308A":473,"UB6:109":-41,"BB1:108108":-23,"UW4:\u8FBC":-340,"TW3:\u3068\u8A00\u3063":-530,"UW6:\u3060":-69,"UW5:\u308A":-71,"UW5:\u3088":-115,"BW3:\u3069\u3046":297,"UW4:\u2026":-240,"UW3:\u3084":229,"BW1:\u304B\u3057":507,"BW3:\u304B\u3063":-348,"UW4:\u4ECA":171,"UW3:\u300E":-320,"UW4:\u601D":239,"UB2:109":16,"UW4:\u304F":-195,"UW3:\u4EAC":-277,"UW6:\u30FC":-41,"UW1:\u3093":69,"BW1:\u3046\u306A":280,"TB2:108107107":-264,"UW1:\u3068":30,"TB4:108109108":249,"TB2:107108108":-97,"BW1:\u3053\u306E":-163,"BW2:\u306E\u3067":-221,"UW4:\u307F":96,"UW5:\u308F":83,"UW6:\u3084":82,"BW1:\u308C\u3066":-218,"UW2:\u3084":-93,"UW6:\u3053":-53,"UW4:\u306A":40,"UW5:\u3081":28,"BW1:\u3082\u3046":285,"TB4:120108120":27,"BW1:\u3088\u308A":283,"UW4:\u5408":-211,"UW6:\u3051":-92,"BW1:\u5C11\u3057":214,"BW2:\u3067\u3057":-225,"UW4:\u3068":-54,"TB1:109109109":53,"UW3:\u30FC":105,"BW2:\u304F\u306A":-198,"UW2:\u304F":-53,"UW2:\u6211":-277,"BW2:\u3044\u3082":198,"BW3:\u308F\u304B":184,"TB2:120109120":-264,"UW4:\u3082":-106,"UW1:\u3042":14,"UW4:\u6700":185,"BW1:\u308B\u306E":-155,"UW2:\u5168":185,"UW6:\uFF10":106,"UW4:\u653E":-119,"UW4:\u4EAC":53,"BW3:\u304B\u3051":208,"UW2:\u5C11":92,"BW3:\u3082\u3046":262,"UW2:\u591A":106,"UW2:\u3046":-52,"TB1:108108072":105,"UW1:\u3092":-25,"UW3:\u5149":-79,"BW1:\uFF01\uFF01":104,"UW2:\u30E3":141,"BW3:\u3059\u3050":129,"UW4:\u5E2F":-114,"UW6:\u3057":26,"BW3:\u3067\u3082":64,"BW2:\u3001\u305D":-113,"TB3:120162162":26,"TB2:109108120":77,"UW3:\u308F":-64,"UB4:109":13,"TB4:120120120":13,"UW5:\u90FD":26,"UW5:\u305A":89,"UW2:\u30D0":115,"UW2:\u4EAC":-49,"UW3:\u3083":89,"BW1:\u3044\u3001":-114,"BW3:\u3088\u304F":51,"BW1:\u305F\u3089":64,"BW2:\u306E\u3088":-64,"UW2:\u601D":-51,"BW1:\u3046\u306B":-38,"BW1:\u306E\u9593":89,"UW6:\u3093":13,"UW6:\u305A":-64,"BW1:\u3063\u305F":13,"TW3:\u308B\u3053\u3068":-48,"BW3:\u3068\u3066":76,"TW1:\u3088\u3046\u306A":63,"UW6:\u3071":62,"TB3:109120108":13,"TW4:\u3063\u3066\u3001":112,"TW4:\u306A\u3093\u3066":-76,"TW2:\u305D\u306E\u5F8C":-50,"UW6:\u3089":-13,"TW4:\u3053\u3068\u306B":-49,"UW3:\uFF1E":63,"TW3:\u3066\u3057\u307E":-50,"UW3:\u3044":13,"TB4:120108107":13,"UW2:\u3072":-50,"UW6:\u3081":24,"UW6:\u3067":-12,"BW3:\u306A\u308B":24,"UW5:\u3054":12,"BW2:\u308A\u3057":24,"UW6:\u96FB":12,"UW1:\u306F":-12,"BW1:\u3044\u3082":-24,"BW3:\u3059\u3054":12,"UW4:\u901A":-12,"BW3:\u304A\u308A":-12,"BW3:\u304B\u304B":12,"BW1:\u601D\u3044":-12};/**
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
 */const dT=r=>new DOMParser().parseFromString(r,"text/html");/**
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
 */const _t=console.assert,pT="\u200B",Uc={ELEMENT_NODE:1,TEXT_NODE:3},qe={Inline:0,Block:1,Skip:2,Break:3},mT={AREA:qe.Skip,BASE:qe.Skip,BASEFONT:qe.Skip,DATALIST:qe.Skip,HEAD:qe.Skip,LINK:qe.Skip,META:qe.Skip,NOEMBED:qe.Skip,NOFRAMES:qe.Skip,PARAM:qe.Skip,RP:qe.Skip,SCRIPT:qe.Skip,STYLE:qe.Skip,TEMPLATE:qe.Skip,TITLE:qe.Skip,NOSCRIPT:qe.Skip,HR:qe.Break,LISTING:qe.Skip,PLAINTEXT:qe.Skip,PRE:qe.Skip,XMP:qe.Skip,BR:qe.Break,RT:qe.Skip,INPUT:qe.Skip,SELECT:qe.Skip,BUTTON:qe.Skip,TEXTAREA:qe.Skip,ABBR:qe.Skip,CODE:qe.Skip,IFRAME:qe.Skip,TIME:qe.Skip,VAR:qe.Skip},gT=new Set(["HTML","BODY","ADDRESS","BLOCKQUOTE","CENTER","DIALOG","DIV","FIGURE","FIGCAPTION","FOOTER","FORM","HEADER","LEGEND","LISTING","MAIN","P","ARTICLE","ASIDE","H1","H2","H3","H4","H5","H6","HGROUP","NAV","SECTION","DIR","DD","DL","DT","MENU","OL","UL","LI","TABLE","CAPTION","COL","TR","TD","TH","FIELDSET","DETAILS","SUMMARY","MARQUEE"]);function _T(r){const e=r.nodeName,t=mT[e];if(t!==void 0)return t;if(typeof getComputedStyle=="function"){const n=getComputedStyle(r);switch(n.whiteSpace){case"nowrap":case"pre":return qe.Skip}const i=n.display;if(i)return i==="inline"?qe.Inline:qe.Block}return gT.has(e)?qe.Block:qe.Inline}class xT{constructor(e){this.textNodes=[],this.element=e}hasText(){return this.textNodes.length>0}}class vT{constructor(e,t){this.separator=pT,this.parser_=e,t!==void 0&&(t.className!==void 0&&(this.className=t.className),t.separator!==void 0&&(this.separator=t.separator))}applyToElement(e){for(const t of this.getBlocks(e))_t(t.hasText()),this.applyToParagraph(t)}*getBlocks(e,t){if(_t(e.nodeType===Uc.ELEMENT_NODE),this.className&&e.classList.contains(this.className))return;const n=_T(e);if(n===qe.Skip)return;if(n===qe.Break){t&&t.hasText()&&(yield t,t.textNodes=[]),_t(!e.firstChild);return}_t(n===qe.Block||n===qe.Inline);const i=!t||n===qe.Block,s=i?new xT(e):t;_t(s);for(const a of e.childNodes)switch(a.nodeType){case Uc.ELEMENT_NODE:for(const o of this.getBlocks(a,s))yield o;break;case Uc.TEXT_NODE:s.textNodes.push(a);break}i&&s.hasText()&&(yield s)}applyToParagraph(e){const t=e.textNodes;_t(t.length>0);const i=t.map(l=>l.nodeValue).join("");if(/^\s*$/.test(i))return;const s=this.parser_.parse(i);if(_t(s.length>0),_t(s.reduce((l,u)=>l+u.length,0)===i.length),s.length<=1)return;const a=[];let o=0;for(const l of s)_t(l.length>0),o+=l.length,a.push(o);_t(a[0]>0),_t(a[a.length-1]===i.length),++a[a.length-1],_t(a.length>1),this.splitTextNodes(t,a),this.applyBlockStyle(e.element)}splitTextNodes(e,t){_t(t.length>0);const n=e.reduce((o,l)=>o+(l.nodeValue?l.nodeValue.length:0),0);_t(t[t.length-1]>n);let i=0,s=t[0];_t(s>0);let a=0;for(const o of e){const l=o.nodeValue;if(!l)continue;const u=a+l.length;if(s>=u){a=u;continue}const c=[];let h=0;for(;s<u;){const f=s-a;_t(f>=h),c.push(l.substring(h,f)),h=f,++i,_t(t[i]>s),s=t[i]}_t(c.length>0),h<l.length&&c.push(l.substring(h)),this.splitTextNode(o,c),a=u}_t(a===n),_t(i<t.length),_t(t[i]>=n)}splitTextNode(e,t){_t(t.length>1),_t(e.nodeValue===t.join(""));const n=this.separator;if(typeof n=="string"){e.nodeValue=t.join(n);return}const i=e.ownerDocument;let s=[];for(const a of t)a&&s.push(i.createTextNode(a)),s.push(null);s.pop(),s=s.map(a=>a||n.cloneNode(!0)),e.replaceWith(...s)}applyBlockStyle(e){if(this.className){e.classList.add(this.className);return}const t=e.style;t.wordBreak="keep-all",t.overflowWrap="break-word"}static defineClassAs(e,t){const n=e.createElement("style");n.textContent=`.${t} { word-break: keep-all; overflow-wrap: break-word; }`,e.head.appendChild(n)}}/**
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
 */const Pf=(r,e)=>{const t=Math.floor(r.length/2);return e===r[t]?t+1:e<r[t]?r.length===1?0:Pf(r.slice(0,t),e):r.length===1?1:t+Pf(r.slice(t),e)},am=r=>r.reduce((e,t)=>e+t,0),_r="\u2594";/**
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
 */const yT={ELEMENT:1,TEXT:3};class Ti{constructor(e){this.model=e}static getUnicodeBlockFeature(e){if(!e||e===_r)return _r;const t=e.codePointAt(0);return t===void 0?_r:`${Pf(fT,t)}`.padStart(3,"0")}static getFeature(e,t,n,i,s,a){const o=Ti.getUnicodeBlockFeature(e),l=Ti.getUnicodeBlockFeature(t),u=Ti.getUnicodeBlockFeature(n),c=Ti.getUnicodeBlockFeature(i),h=Ti.getUnicodeBlockFeature(s),f=Ti.getUnicodeBlockFeature(a),m={UW1:e,UW2:t,UW3:n,UW4:i,UW5:s,UW6:a,BW1:t+n,BW2:n+i,BW3:i+s,TW1:e+t+n,TW2:t+n+i,TW3:n+i+s,TW4:i+s+a,UB1:o,UB2:l,UB3:u,UB4:c,UB5:h,UB6:f,BB1:l+u,BB2:u+c,BB3:c+h,TB1:o+l+u,TB2:l+u+c,TB3:u+c+h,TB4:c+h+f};return Object.entries(m).filter(g=>!g[1].includes(_r)).map(([g,d])=>`${g}:${d}`)}static hasChildTextNode(e){for(const t of e.childNodes)if(t.nodeType===yT.TEXT)return!0;return!1}parse(e){if(e==="")return[];const t=[e[0]],n=-am([...this.model.values()]);for(let i=1;i<e.length;i++){const s=Ti.getFeature(e[i-3]||_r,e[i-2]||_r,e[i-1],e[i],e[i+1]||_r,e[i+2]||_r);n+2*am(s.map(o=>this.model.get(o)||0))>0&&t.push(""),t[t.length-1]+=e[i]}return t}applyElement(e){new vT(this,{separator:e.ownerDocument.createElement("wbr")}).applyToElement(e)}translateHTMLString(e){if(e==="")return e;const t=dT(e);if(Ti.hasChildTextNode(t.body)){const n=t.createElement("span");n.append(...t.body.childNodes),t.body.append(n)}return this.applyElement(t.body.childNodes[0]),t.body.innerHTML}}const bT=()=>new Ti(new Map(Object.entries(hT))),MT=bT(),ST={mounted:function(r){r.innerHTML=MT.translateHTMLString(r.innerHTML)}},Ch=Cv(uT);Ch.directive("blur",cT);Ch.directive("budoux",ST);Ch.mount("#app");
