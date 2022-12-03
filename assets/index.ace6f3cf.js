(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Ef(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function Kl(r){if(Ze(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=Zt(n)?Lg(n):Kl(n);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Zt(r))return r;if(Rt(r))return r}}const Cg=/;(?![^(]*\))/g,Dg=/:([^]+)/,Pg=/\/\*.*?\*\//gs;function Lg(r){const e={};return r.replace(Pg,"").split(Cg).forEach(t=>{if(t){const n=t.split(Dg);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Jl(r){let e="";if(Zt(r))e=r;else if(Ze(r))for(let t=0;t<r.length;t++){const n=Jl(r[t]);n&&(e+=n+" ")}else if(Rt(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const Rg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fg=Ef(Rg);function Vp(r){return!!r||r===""}const pt={},to=[],vi=()=>{},Ig=()=>!1,Bg=/^on[^a-z]/,Ql=r=>Bg.test(r),Af=r=>r.startsWith("onUpdate:"),on=Object.assign,Cf=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},Ug=Object.prototype.hasOwnProperty,rt=(r,e)=>Ug.call(r,e),Ze=Array.isArray,Yo=r=>eu(r)==="[object Map]",Og=r=>eu(r)==="[object Set]",Ye=r=>typeof r=="function",Zt=r=>typeof r=="string",Df=r=>typeof r=="symbol",Rt=r=>r!==null&&typeof r=="object",Gp=r=>Rt(r)&&Ye(r.then)&&Ye(r.catch),Ng=Object.prototype.toString,eu=r=>Ng.call(r),zg=r=>eu(r).slice(8,-1),kg=r=>eu(r)==="[object Object]",Pf=r=>Zt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,xl=Ef(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tu=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},Wg=/-(\w)/g,Ui=tu(r=>r.replace(Wg,(e,t)=>t?t.toUpperCase():"")),Vg=/\B([A-Z])/g,Ao=tu(r=>r.replace(Vg,"-$1").toLowerCase()),nu=tu(r=>r.charAt(0).toUpperCase()+r.slice(1)),wu=tu(r=>r?`on${nu(r)}`:""),la=(r,e)=>!Object.is(r,e),Tu=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},Fl=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},Hp=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let vh;const Gg=()=>vh||(vh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Si;class Hg{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Si,!e&&Si&&(this.index=(Si.scopes||(Si.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Si;try{return Si=this,e()}finally{Si=t}}}on(){Si=this}off(){Si=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function Xg(r,e=Si){e&&e.active&&e.effects.push(r)}const Lf=r=>{const e=new Set(r);return e.w=0,e.n=0,e},Xp=r=>(r.w&Dr)>0,qp=r=>(r.n&Dr)>0,qg=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=Dr},$g=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];Xp(i)&&!qp(i)?i.delete(r):e[t++]=i,i.w&=~Dr,i.n&=~Dr}e.length=t}},Pc=new WeakMap;let ko=0,Dr=1;const Lc=30;let mi;const as=Symbol(""),Rc=Symbol("");class Rf{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Xg(this,n)}run(){if(!this.active)return this.fn();let e=mi,t=Sr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mi,mi=this,Sr=!0,Dr=1<<++ko,ko<=Lc?qg(this):yh(this),this.fn()}finally{ko<=Lc&&$g(this),Dr=1<<--ko,mi=this.parent,Sr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mi===this?this.deferStop=!0:this.active&&(yh(this),this.onStop&&this.onStop(),this.active=!1)}}function yh(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let Sr=!0;const $p=[];function Co(){$p.push(Sr),Sr=!1}function Do(){const r=$p.pop();Sr=r===void 0?!0:r}function Wn(r,e,t){if(Sr&&mi){let n=Pc.get(r);n||Pc.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=Lf()),Yp(i)}}function Yp(r,e){let t=!1;ko<=Lc?qp(r)||(r.n|=Dr,t=!Xp(r)):t=!r.has(mi),t&&(r.add(mi),mi.deps.push(r))}function Ki(r,e,t,n,i,s){const a=Pc.get(r);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Ze(r)){const l=Hp(n);a.forEach((u,c)=>{(c==="length"||c>=l)&&o.push(u)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Ze(r)?Pf(t)&&o.push(a.get("length")):(o.push(a.get(as)),Yo(r)&&o.push(a.get(Rc)));break;case"delete":Ze(r)||(o.push(a.get(as)),Yo(r)&&o.push(a.get(Rc)));break;case"set":Yo(r)&&o.push(a.get(as));break}if(o.length===1)o[0]&&Fc(o[0]);else{const l=[];for(const u of o)u&&l.push(...u);Fc(Lf(l))}}function Fc(r,e){const t=Ze(r)?r:[...r];for(const n of t)n.computed&&bh(n);for(const n of t)n.computed||bh(n)}function bh(r,e){(r!==mi||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const Yg=Ef("__proto__,__v_isRef,__isVue"),jp=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(Df)),jg=Ff(),Zg=Ff(!1,!0),Kg=Ff(!0),Mh=Jg();function Jg(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=ot(this);for(let s=0,a=this.length;s<a;s++)Wn(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(ot)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){Co();const n=ot(this)[e].apply(this,t);return Do(),n}}),r}function Ff(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(r?e?p_:em:e?Qp:Jp).get(n))return n;const a=Ze(n);if(!r&&a&&rt(Mh,i))return Reflect.get(Mh,i,s);const o=Reflect.get(n,i,s);return(Df(i)?jp.has(i):Yg(i))||(r||Wn(n,"get",i),e)?o:nn(o)?a&&Pf(i)?o:o.value:Rt(o)?r?tm(o):Uf(o):o}}const Qg=Zp(),e_=Zp(!0);function Zp(r=!1){return function(t,n,i,s){let a=t[n];if(fo(a)&&nn(a)&&!nn(i))return!1;if(!r&&(!Il(i)&&!fo(i)&&(a=ot(a),i=ot(i)),!Ze(t)&&nn(a)&&!nn(i)))return a.value=i,!0;const o=Ze(t)&&Pf(n)?Number(n)<t.length:rt(t,n),l=Reflect.set(t,n,i,s);return t===ot(s)&&(o?la(i,a)&&Ki(t,"set",n,i):Ki(t,"add",n,i)),l}}function t_(r,e){const t=rt(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&Ki(r,"delete",e,void 0),n}function n_(r,e){const t=Reflect.has(r,e);return(!Df(e)||!jp.has(e))&&Wn(r,"has",e),t}function i_(r){return Wn(r,"iterate",Ze(r)?"length":as),Reflect.ownKeys(r)}const Kp={get:jg,set:Qg,deleteProperty:t_,has:n_,ownKeys:i_},r_={get:Kg,set(r,e){return!0},deleteProperty(r,e){return!0}},s_=on({},Kp,{get:Zg,set:e_}),If=r=>r,iu=r=>Reflect.getPrototypeOf(r);function Pa(r,e,t=!1,n=!1){r=r.__v_raw;const i=ot(r),s=ot(e);t||(e!==s&&Wn(i,"get",e),Wn(i,"get",s));const{has:a}=iu(i),o=n?If:t?Nf:ua;if(a.call(i,e))return o(r.get(e));if(a.call(i,s))return o(r.get(s));r!==i&&r.get(e)}function La(r,e=!1){const t=this.__v_raw,n=ot(t),i=ot(r);return e||(r!==i&&Wn(n,"has",r),Wn(n,"has",i)),r===i?t.has(r):t.has(r)||t.has(i)}function Ra(r,e=!1){return r=r.__v_raw,!e&&Wn(ot(r),"iterate",as),Reflect.get(r,"size",r)}function Sh(r){r=ot(r);const e=ot(this);return iu(e).has.call(e,r)||(e.add(r),Ki(e,"add",r,r)),this}function wh(r,e){e=ot(e);const t=ot(this),{has:n,get:i}=iu(t);let s=n.call(t,r);s||(r=ot(r),s=n.call(t,r));const a=i.call(t,r);return t.set(r,e),s?la(e,a)&&Ki(t,"set",r,e):Ki(t,"add",r,e),this}function Th(r){const e=ot(this),{has:t,get:n}=iu(e);let i=t.call(e,r);i||(r=ot(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&Ki(e,"delete",r,void 0),s}function Eh(){const r=ot(this),e=r.size!==0,t=r.clear();return e&&Ki(r,"clear",void 0,void 0),t}function Fa(r,e){return function(n,i){const s=this,a=s.__v_raw,o=ot(a),l=e?If:r?Nf:ua;return!r&&Wn(o,"iterate",as),a.forEach((u,c)=>n.call(i,l(u),l(c),s))}}function Ia(r,e,t){return function(...n){const i=this.__v_raw,s=ot(i),a=Yo(s),o=r==="entries"||r===Symbol.iterator&&a,l=r==="keys"&&a,u=i[r](...n),c=t?If:e?Nf:ua;return!e&&Wn(s,"iterate",l?Rc:as),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:o?[c(h[0]),c(h[1])]:c(h),done:f}},[Symbol.iterator](){return this}}}}function ir(r){return function(...e){return r==="delete"?!1:this}}function o_(){const r={get(s){return Pa(this,s)},get size(){return Ra(this)},has:La,add:Sh,set:wh,delete:Th,clear:Eh,forEach:Fa(!1,!1)},e={get(s){return Pa(this,s,!1,!0)},get size(){return Ra(this)},has:La,add:Sh,set:wh,delete:Th,clear:Eh,forEach:Fa(!1,!0)},t={get(s){return Pa(this,s,!0)},get size(){return Ra(this,!0)},has(s){return La.call(this,s,!0)},add:ir("add"),set:ir("set"),delete:ir("delete"),clear:ir("clear"),forEach:Fa(!0,!1)},n={get(s){return Pa(this,s,!0,!0)},get size(){return Ra(this,!0)},has(s){return La.call(this,s,!0)},add:ir("add"),set:ir("set"),delete:ir("delete"),clear:ir("clear"),forEach:Fa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=Ia(s,!1,!1),t[s]=Ia(s,!0,!1),e[s]=Ia(s,!1,!0),n[s]=Ia(s,!0,!0)}),[r,t,e,n]}const[a_,l_,u_,c_]=o_();function Bf(r,e){const t=e?r?c_:u_:r?l_:a_;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(rt(t,i)&&i in n?t:n,i,s)}const f_={get:Bf(!1,!1)},h_={get:Bf(!1,!0)},d_={get:Bf(!0,!1)},Jp=new WeakMap,Qp=new WeakMap,em=new WeakMap,p_=new WeakMap;function m_(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function g_(r){return r.__v_skip||!Object.isExtensible(r)?0:m_(zg(r))}function Uf(r){return fo(r)?r:Of(r,!1,Kp,f_,Jp)}function __(r){return Of(r,!1,s_,h_,Qp)}function tm(r){return Of(r,!0,r_,d_,em)}function Of(r,e,t,n,i){if(!Rt(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const a=g_(r);if(a===0)return r;const o=new Proxy(r,a===2?n:t);return i.set(r,o),o}function no(r){return fo(r)?no(r.__v_raw):!!(r&&r.__v_isReactive)}function fo(r){return!!(r&&r.__v_isReadonly)}function Il(r){return!!(r&&r.__v_isShallow)}function nm(r){return no(r)||fo(r)}function ot(r){const e=r&&r.__v_raw;return e?ot(e):r}function im(r){return Fl(r,"__v_skip",!0),r}const ua=r=>Rt(r)?Uf(r):r,Nf=r=>Rt(r)?tm(r):r;function rm(r){Sr&&mi&&(r=ot(r),Yp(r.dep||(r.dep=Lf())))}function sm(r,e){r=ot(r),r.dep&&Fc(r.dep)}function nn(r){return!!(r&&r.__v_isRef===!0)}function pr(r){return x_(r,!1)}function x_(r,e){return nn(r)?r:new v_(r,e)}class v_{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ot(e),this._value=t?e:ua(e)}get value(){return rm(this),this._value}set value(e){const t=this.__v_isShallow||Il(e)||fo(e);e=t?e:ot(e),la(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ua(e),sm(this))}}function y_(r){return nn(r)?r.value:r}const b_={get:(r,e,t)=>y_(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return nn(i)&&!nn(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function om(r){return no(r)?r:new Proxy(r,b_)}var am;class M_{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[am]=!1,this._dirty=!0,this.effect=new Rf(e,()=>{this._dirty||(this._dirty=!0,sm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=ot(this);return rm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}am="__v_isReadonly";function S_(r,e,t=!1){let n,i;const s=Ye(r);return s?(n=r,i=vi):(n=r.get,i=r.set),new M_(n,i,s||!i,t)}function wr(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){ru(s,e,t)}return i}function ii(r,e,t,n){if(Ye(r)){const s=wr(r,e,t,n);return s&&Gp(s)&&s.catch(a=>{ru(a,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(ii(r[s],e,t,n));return i}function ru(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const u=s.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](r,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){wr(l,null,10,[r,a,o]);return}}w_(r,t,i,n)}function w_(r,e,t,n=!0){console.error(r)}let ca=!1,Ic=!1;const en=[];let Di=0;const io=[];let Gi=null,Kr=0;const lm=Promise.resolve();let zf=null;function T_(r){const e=zf||lm;return r?e.then(this?r.bind(this):r):e}function E_(r){let e=Di+1,t=en.length;for(;e<t;){const n=e+t>>>1;fa(en[n])<r?e=n+1:t=n}return e}function kf(r){(!en.length||!en.includes(r,ca&&r.allowRecurse?Di+1:Di))&&(r.id==null?en.push(r):en.splice(E_(r.id),0,r),um())}function um(){!ca&&!Ic&&(Ic=!0,zf=lm.then(fm))}function A_(r){const e=en.indexOf(r);e>Di&&en.splice(e,1)}function C_(r){Ze(r)?io.push(...r):(!Gi||!Gi.includes(r,r.allowRecurse?Kr+1:Kr))&&io.push(r),um()}function Ah(r,e=ca?Di+1:0){for(;e<en.length;e++){const t=en[e];t&&t.pre&&(en.splice(e,1),e--,t())}}function cm(r){if(io.length){const e=[...new Set(io)];if(io.length=0,Gi){Gi.push(...e);return}for(Gi=e,Gi.sort((t,n)=>fa(t)-fa(n)),Kr=0;Kr<Gi.length;Kr++)Gi[Kr]();Gi=null,Kr=0}}const fa=r=>r.id==null?1/0:r.id,D_=(r,e)=>{const t=fa(r)-fa(e);if(t===0){if(r.pre&&!e.pre)return-1;if(e.pre&&!r.pre)return 1}return t};function fm(r){Ic=!1,ca=!0,en.sort(D_);const e=vi;try{for(Di=0;Di<en.length;Di++){const t=en[Di];t&&t.active!==!1&&wr(t,null,14)}}finally{Di=0,en.length=0,cm(),ca=!1,zf=null,(en.length||io.length)&&fm()}}function P_(r,e,...t){if(r.isUnmounted)return;const n=r.vnode.props||pt;let i=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in n){const c=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:f}=n[c]||pt;f&&(i=t.map(m=>Zt(m)?m.trim():m)),h&&(i=t.map(Hp))}let o,l=n[o=wu(e)]||n[o=wu(Ui(e))];!l&&s&&(l=n[o=wu(Ao(e))]),l&&ii(l,r,6,i);const u=n[o+"Once"];if(u){if(!r.emitted)r.emitted={};else if(r.emitted[o])return;r.emitted[o]=!0,ii(u,r,6,i)}}function hm(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let a={},o=!1;if(!Ye(r)){const l=u=>{const c=hm(u,e,!0);c&&(o=!0,on(a,c))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!o?(Rt(r)&&n.set(r,null),null):(Ze(s)?s.forEach(l=>a[l]=null):on(a,s),Rt(r)&&n.set(r,a),a)}function su(r,e){return!r||!Ql(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(r,e[0].toLowerCase()+e.slice(1))||rt(r,Ao(e))||rt(r,e))}let Yt=null,ou=null;function Bl(r){const e=Yt;return Yt=r,ou=r&&r.type.__scopeId||null,e}function L_(r){ou=r}function R_(){ou=null}function dt(r,e=Yt,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&Nh(-1);const s=Bl(e);let a;try{a=r(...i)}finally{Bl(s),n._d&&Nh(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function Eu(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:l,emit:u,render:c,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:d}=r;let p,x;const b=Bl(r);try{if(t.shapeFlag&4){const y=i||n;p=Ai(c.call(y,y,h,s,m,f,g)),x=l}else{const y=e;p=Ai(y.length>1?y(s,{attrs:l,slots:o,emit:u}):y(s,null)),x=e.props?l:F_(l)}}catch(y){Ko.length=0,ru(y,r,1),p=ut(Fi)}let _=p;if(x&&d!==!1){const y=Object.keys(x),{shapeFlag:M}=_;y.length&&M&7&&(a&&y.some(Af)&&(x=I_(x,a)),_=Pr(_,x))}return t.dirs&&(_=Pr(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),p=_,Bl(b),p}const F_=r=>{let e;for(const t in r)(t==="class"||t==="style"||Ql(t))&&((e||(e={}))[t]=r[t]);return e},I_=(r,e)=>{const t={};for(const n in r)(!Af(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function B_(r,e,t){const{props:n,children:i,component:s}=r,{props:a,children:o,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Ch(n,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const f=c[h];if(a[f]!==n[f]&&!su(u,f))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Ch(n,a,u):!0:!!a;return!1}function Ch(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!su(t,s))return!0}return!1}function U_({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const O_=r=>r.__isSuspense;function N_(r,e){e&&e.pendingBranch?Ze(r)?e.effects.push(...r):e.effects.push(r):C_(r)}function z_(r,e){if(Wt){let t=Wt.provides;const n=Wt.parent&&Wt.parent.provides;n===t&&(t=Wt.provides=Object.create(n)),t[r]=e}}function vl(r,e,t=!1){const n=Wt||Yt;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&Ye(e)?e.call(n.proxy):e}}const Ba={};function Au(r,e,t){return dm(r,e,t)}function dm(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:a}=pt){const o=Wt;let l,u=!1,c=!1;if(nn(r)?(l=()=>r.value,u=Il(r)):no(r)?(l=()=>r,n=!0):Ze(r)?(c=!0,u=r.some(_=>no(_)||Il(_)),l=()=>r.map(_=>{if(nn(_))return _.value;if(no(_))return ns(_);if(Ye(_))return wr(_,o,2)})):Ye(r)?e?l=()=>wr(r,o,2):l=()=>{if(!(o&&o.isUnmounted))return h&&h(),ii(r,o,3,[f])}:l=vi,e&&n){const _=l;l=()=>ns(_())}let h,f=_=>{h=x.onStop=()=>{wr(_,o,4)}},m;if(da)if(f=vi,e?t&&ii(e,o,3,[l(),c?[]:void 0,f]):l(),i==="sync"){const _=Ox();m=_.__watcherHandles||(_.__watcherHandles=[])}else return vi;let g=c?new Array(r.length).fill(Ba):Ba;const d=()=>{if(!!x.active)if(e){const _=x.run();(n||u||(c?_.some((y,M)=>la(y,g[M])):la(_,g)))&&(h&&h(),ii(e,o,3,[_,g===Ba?void 0:c&&g[0]===Ba?[]:g,f]),g=_)}else x.run()};d.allowRecurse=!!e;let p;i==="sync"?p=d:i==="post"?p=()=>_n(d,o&&o.suspense):(d.pre=!0,o&&(d.id=o.uid),p=()=>kf(d));const x=new Rf(l,p);e?t?d():g=x.run():i==="post"?_n(x.run.bind(x),o&&o.suspense):x.run();const b=()=>{x.stop(),o&&o.scope&&Cf(o.scope.effects,x)};return m&&m.push(b),b}function k_(r,e,t){const n=this.proxy,i=Zt(r)?r.includes(".")?pm(n,r):()=>n[r]:r.bind(n,n);let s;Ye(e)?s=e:(s=e.handler,t=e);const a=Wt;ho(this);const o=dm(i,s.bind(n),t);return a?ho(a):ls(),o}function pm(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function ns(r,e){if(!Rt(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),nn(r))ns(r.value,e);else if(Ze(r))for(let t=0;t<r.length;t++)ns(r[t],e);else if(Og(r)||Yo(r))r.forEach(t=>{ns(t,e)});else if(kg(r))for(const t in r)ns(r[t],e);return r}function W_(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Br(()=>{r.isMounted=!0}),xm(()=>{r.isUnmounting=!0}),r}const Xn=[Function,Array],V_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xn,onEnter:Xn,onAfterEnter:Xn,onEnterCancelled:Xn,onBeforeLeave:Xn,onLeave:Xn,onAfterLeave:Xn,onLeaveCancelled:Xn,onBeforeAppear:Xn,onAppear:Xn,onAfterAppear:Xn,onAppearCancelled:Xn},setup(r,{slots:e}){const t=Cx(),n=W_();let i;return()=>{const s=e.default&&gm(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const d of s)if(d.type!==Fi){a=d;break}}const o=ot(r),{mode:l}=o;if(n.isLeaving)return Cu(a);const u=Dh(a);if(!u)return Cu(a);const c=Bc(u,o,n,t);Uc(u,c);const h=t.subTree,f=h&&Dh(h);let m=!1;const{getTransitionKey:g}=u.type;if(g){const d=g();i===void 0?i=d:d!==i&&(i=d,m=!0)}if(f&&f.type!==Fi&&(!Jr(u,f)||m)){const d=Bc(f,o,n,t);if(Uc(f,d),l==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},Cu(a);l==="in-out"&&u.type!==Fi&&(d.delayLeave=(p,x,b)=>{const _=mm(n,f);_[String(f.key)]=f,p._leaveCb=()=>{x(),p._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=b})}return a}}},G_=V_;function mm(r,e){const{leavingVNodes:t}=r;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Bc(r,e,t,n){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:d,onAppear:p,onAfterAppear:x,onAppearCancelled:b}=e,_=String(r.key),y=mm(t,r),M=(v,w)=>{v&&ii(v,n,9,w)},T=(v,w)=>{const P=w[1];M(v,w),Ze(v)?v.every(O=>O.length<=1)&&P():v.length<=1&&P()},E={mode:s,persisted:a,beforeEnter(v){let w=o;if(!t.isMounted)if(i)w=d||o;else return;v._leaveCb&&v._leaveCb(!0);const P=y[_];P&&Jr(r,P)&&P.el._leaveCb&&P.el._leaveCb(),M(w,[v])},enter(v){let w=l,P=u,O=c;if(!t.isMounted)if(i)w=p||l,P=x||u,O=b||c;else return;let Z=!1;const k=v._enterCb=B=>{Z||(Z=!0,B?M(O,[v]):M(P,[v]),E.delayedLeave&&E.delayedLeave(),v._enterCb=void 0)};w?T(w,[v,k]):k()},leave(v,w){const P=String(r.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return w();M(h,[v]);let O=!1;const Z=v._leaveCb=k=>{O||(O=!0,w(),k?M(g,[v]):M(m,[v]),v._leaveCb=void 0,y[P]===r&&delete y[P])};y[P]=r,f?T(f,[v,Z]):Z()},clone(v){return Bc(v,e,t,n)}};return E}function Cu(r){if(au(r))return r=Pr(r),r.children=null,r}function Dh(r){return au(r)?r.children?r.children[0]:void 0:r}function Uc(r,e){r.shapeFlag&6&&r.component?Uc(r.component.subTree,e):r.shapeFlag&128?(r.ssContent.transition=e.clone(r.ssContent),r.ssFallback.transition=e.clone(r.ssFallback)):r.transition=e}function gm(r,e=!1,t){let n=[],i=0;for(let s=0;s<r.length;s++){let a=r[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===In?(a.patchFlag&128&&i++,n=n.concat(gm(a.children,e,o))):(e||a.type!==Fi)&&n.push(o!=null?Pr(a,{key:o}):a)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Es(r){return Ye(r)?{setup:r,name:r.name}:r}const jo=r=>!!r.type.__asyncLoader,au=r=>r.type.__isKeepAlive;function H_(r,e){_m(r,"a",e)}function X_(r,e){_m(r,"da",e)}function _m(r,e,t=Wt){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(lu(e,n,t),t){let i=t.parent;for(;i&&i.parent;)au(i.parent.vnode)&&q_(n,e,t,i),i=i.parent}}function q_(r,e,t,n){const i=lu(e,r,n,!0);vm(()=>{Cf(n[e],i)},t)}function lu(r,e,t=Wt,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Co(),ho(t);const o=ii(e,t,r,a);return ls(),Do(),o});return n?i.unshift(s):i.push(s),s}}const tr=r=>(e,t=Wt)=>(!da||r==="sp")&&lu(r,(...n)=>e(...n),t),$_=tr("bm"),Br=tr("m"),Y_=tr("bu"),j_=tr("u"),xm=tr("bum"),vm=tr("um"),Z_=tr("sp"),K_=tr("rtg"),J_=tr("rtc");function Q_(r,e=Wt){lu("ec",r,e)}function Du(r,e){const t=Yt;if(t===null)return r;const n=fu(t)||t.proxy,i=r.dirs||(r.dirs=[]);for(let s=0;s<e.length;s++){let[a,o,l,u=pt]=e[s];a&&(Ye(a)&&(a={mounted:a,updated:a}),a.deep&&ns(o),i.push({dir:a,instance:n,value:o,oldValue:void 0,arg:l,modifiers:u}))}return r}function zr(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(Co(),ii(l,t,8,[r.el,o,r,e]),Do())}}const ex="components",tx="directives",nx=Symbol();function Ph(r){return ix(tx,r)}function ix(r,e,t=!0,n=!1){const i=Yt||Wt;if(i){const s=i.type;if(r===ex){const o=Fx(s,!1);if(o&&(o===e||o===Ui(e)||o===nu(Ui(e))))return s}const a=Lh(i[r]||s[r],e)||Lh(i.appContext[r],e);return!a&&n?s:a}}function Lh(r,e){return r&&(r[e]||r[Ui(e)]||r[nu(Ui(e))])}function Ul(r,e,t={},n,i){if(Yt.isCE||Yt.parent&&jo(Yt.parent)&&Yt.parent.isCE)return e!=="default"&&(t.name=e),ut("slot",t,n&&n());let s=r[e];s&&s._c&&(s._d=!1),Qn();const a=s&&ym(s(t)),o=Vc(In,{key:t.key||a&&a.key||`_${e}`},a||(n?n():[]),a&&r._===1?64:-2);return!i&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),s&&s._c&&(s._d=!0),o}function ym(r){return r.some(e=>Pm(e)?!(e.type===Fi||e.type===In&&!ym(e.children)):!0)?r:null}const Oc=r=>r?Rm(r)?fu(r)||r.proxy:Oc(r.parent):null,Zo=on(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Oc(r.parent),$root:r=>Oc(r.root),$emit:r=>r.emit,$options:r=>Wf(r),$forceUpdate:r=>r.f||(r.f=()=>kf(r.update)),$nextTick:r=>r.n||(r.n=T_.bind(r.proxy)),$watch:r=>k_.bind(r)}),Pu=(r,e)=>r!==pt&&!r.__isScriptSetup&&rt(r,e),rx={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:a,type:o,appContext:l}=r;let u;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Pu(n,e))return a[e]=1,n[e];if(i!==pt&&rt(i,e))return a[e]=2,i[e];if((u=r.propsOptions[0])&&rt(u,e))return a[e]=3,s[e];if(t!==pt&&rt(t,e))return a[e]=4,t[e];Nc&&(a[e]=0)}}const c=Zo[e];let h,f;if(c)return e==="$attrs"&&Wn(r,"get",e),c(r);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==pt&&rt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,rt(f,e))return f[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;return Pu(i,e)?(i[e]=t,!0):n!==pt&&rt(n,e)?(n[e]=t,!0):rt(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},a){let o;return!!t[a]||r!==pt&&rt(r,a)||Pu(e,a)||(o=s[0])&&rt(o,a)||rt(n,a)||rt(Zo,a)||rt(i.config.globalProperties,a)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:rt(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};let Nc=!0;function sx(r){const e=Wf(r),t=r.proxy,n=r.ctx;Nc=!1,e.beforeCreate&&Rh(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:d,deactivated:p,beforeDestroy:x,beforeUnmount:b,destroyed:_,unmounted:y,render:M,renderTracked:T,renderTriggered:E,errorCaptured:v,serverPrefetch:w,expose:P,inheritAttrs:O,components:Z,directives:k,filters:B}=e;if(u&&ox(u,n,null,r.appContext.config.unwrapInjectedRef),a)for(const Y in a){const I=a[Y];Ye(I)&&(n[Y]=I.bind(t))}if(i){const Y=i.call(t,t);Rt(Y)&&(r.data=Uf(Y))}if(Nc=!0,s)for(const Y in s){const I=s[Y],se=Ye(I)?I.bind(t,t):Ye(I.get)?I.get.bind(t,t):vi,R=!Ye(I)&&Ye(I.set)?I.set.bind(t):vi,X=Bx({get:se,set:R});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>X.value,set:V=>X.value=V})}if(o)for(const Y in o)bm(o[Y],n,t,Y);if(l){const Y=Ye(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(I=>{z_(I,Y[I])})}c&&Rh(c,r,"c");function G(Y,I){Ze(I)?I.forEach(se=>Y(se.bind(t))):I&&Y(I.bind(t))}if(G($_,h),G(Br,f),G(Y_,m),G(j_,g),G(H_,d),G(X_,p),G(Q_,v),G(J_,T),G(K_,E),G(xm,b),G(vm,y),G(Z_,w),Ze(P))if(P.length){const Y=r.exposed||(r.exposed={});P.forEach(I=>{Object.defineProperty(Y,I,{get:()=>t[I],set:se=>t[I]=se})})}else r.exposed||(r.exposed={});M&&r.render===vi&&(r.render=M),O!=null&&(r.inheritAttrs=O),Z&&(r.components=Z),k&&(r.directives=k)}function ox(r,e,t=vi,n=!1){Ze(r)&&(r=zc(r));for(const i in r){const s=r[i];let a;Rt(s)?"default"in s?a=vl(s.from||i,s.default,!0):a=vl(s.from||i):a=vl(s),nn(a)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[i]=a}}function Rh(r,e,t){ii(Ze(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function bm(r,e,t,n){const i=n.includes(".")?pm(t,n):()=>t[n];if(Zt(r)){const s=e[r];Ye(s)&&Au(i,s)}else if(Ye(r))Au(i,r.bind(t));else if(Rt(r))if(Ze(r))r.forEach(s=>bm(s,e,t,n));else{const s=Ye(r.handler)?r.handler.bind(t):e[r.handler];Ye(s)&&Au(i,s,r)}}function Wf(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=r.appContext,o=s.get(e);let l;return o?l=o:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(u=>Ol(l,u,a,!0)),Ol(l,e,a)),Rt(e)&&s.set(e,l),l}function Ol(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&Ol(r,s,t,!0),i&&i.forEach(a=>Ol(r,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=ax[a]||t&&t[a];r[a]=o?o(r[a],e[a]):e[a]}return r}const ax={data:Fh,props:qr,emits:qr,methods:qr,computed:qr,beforeCreate:cn,created:cn,beforeMount:cn,mounted:cn,beforeUpdate:cn,updated:cn,beforeDestroy:cn,beforeUnmount:cn,destroyed:cn,unmounted:cn,activated:cn,deactivated:cn,errorCaptured:cn,serverPrefetch:cn,components:qr,directives:qr,watch:ux,provide:Fh,inject:lx};function Fh(r,e){return e?r?function(){return on(Ye(r)?r.call(this,this):r,Ye(e)?e.call(this,this):e)}:e:r}function lx(r,e){return qr(zc(r),zc(e))}function zc(r){if(Ze(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function cn(r,e){return r?[...new Set([].concat(r,e))]:e}function qr(r,e){return r?on(on(Object.create(null),r),e):e}function ux(r,e){if(!r)return e;if(!e)return r;const t=on(Object.create(null),r);for(const n in e)t[n]=cn(r[n],e[n]);return t}function cx(r,e,t,n=!1){const i={},s={};Fl(s,cu,1),r.propsDefaults=Object.create(null),Mm(r,e,i,s);for(const a in r.propsOptions[0])a in i||(i[a]=void 0);t?r.props=n?i:__(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function fx(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:a}}=r,o=ot(i),[l]=r.propsOptions;let u=!1;if((n||a>0)&&!(a&16)){if(a&8){const c=r.vnode.dynamicProps;for(let h=0;h<c.length;h++){let f=c[h];if(su(r.emitsOptions,f))continue;const m=e[f];if(l)if(rt(s,f))m!==s[f]&&(s[f]=m,u=!0);else{const g=Ui(f);i[g]=kc(l,o,g,m,r,!1)}else m!==s[f]&&(s[f]=m,u=!0)}}}else{Mm(r,e,i,s)&&(u=!0);let c;for(const h in o)(!e||!rt(e,h)&&((c=Ao(h))===h||!rt(e,c)))&&(l?t&&(t[h]!==void 0||t[c]!==void 0)&&(i[h]=kc(l,o,h,void 0,r,!0)):delete i[h]);if(s!==o)for(const h in s)(!e||!rt(e,h)&&!0)&&(delete s[h],u=!0)}u&&Ki(r,"set","$attrs")}function Mm(r,e,t,n){const[i,s]=r.propsOptions;let a=!1,o;if(e)for(let l in e){if(xl(l))continue;const u=e[l];let c;i&&rt(i,c=Ui(l))?!s||!s.includes(c)?t[c]=u:(o||(o={}))[c]=u:su(r.emitsOptions,l)||(!(l in n)||u!==n[l])&&(n[l]=u,a=!0)}if(s){const l=ot(t),u=o||pt;for(let c=0;c<s.length;c++){const h=s[c];t[h]=kc(i,l,h,u[h],r,!rt(u,h))}}return a}function kc(r,e,t,n,i,s){const a=r[t];if(a!=null){const o=rt(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&Ye(l)){const{propsDefaults:u}=i;t in u?n=u[t]:(ho(i),n=u[t]=l.call(null,e),ls())}else n=l}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===Ao(t))&&(n=!0))}return n}function Sm(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,a={},o=[];let l=!1;if(!Ye(r)){const c=h=>{l=!0;const[f,m]=Sm(h,e,!0);on(a,f),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),r.extends&&c(r.extends),r.mixins&&r.mixins.forEach(c)}if(!s&&!l)return Rt(r)&&n.set(r,to),to;if(Ze(s))for(let c=0;c<s.length;c++){const h=Ui(s[c]);Ih(h)&&(a[h]=pt)}else if(s)for(const c in s){const h=Ui(c);if(Ih(h)){const f=s[c],m=a[h]=Ze(f)||Ye(f)?{type:f}:Object.assign({},f);if(m){const g=Oh(Boolean,m.type),d=Oh(String,m.type);m[0]=g>-1,m[1]=d<0||g<d,(g>-1||rt(m,"default"))&&o.push(h)}}}const u=[a,o];return Rt(r)&&n.set(r,u),u}function Ih(r){return r[0]!=="$"}function Bh(r){const e=r&&r.toString().match(/^\s*function (\w+)/);return e?e[1]:r===null?"null":""}function Uh(r,e){return Bh(r)===Bh(e)}function Oh(r,e){return Ze(e)?e.findIndex(t=>Uh(t,r)):Ye(e)&&Uh(e,r)?0:-1}const wm=r=>r[0]==="_"||r==="$stable",Vf=r=>Ze(r)?r.map(Ai):[Ai(r)],hx=(r,e,t)=>{if(e._n)return e;const n=dt((...i)=>Vf(e(...i)),t);return n._c=!1,n},Tm=(r,e,t)=>{const n=r._ctx;for(const i in r){if(wm(i))continue;const s=r[i];if(Ye(s))e[i]=hx(i,s,n);else if(s!=null){const a=Vf(s);e[i]=()=>a}}},Em=(r,e)=>{const t=Vf(e);r.slots.default=()=>t},dx=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=ot(e),Fl(e,"_",t)):Tm(e,r.slots={})}else r.slots={},e&&Em(r,e);Fl(r.slots,cu,1)},px=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,a=pt;if(n.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(on(i,e),!t&&o===1&&delete i._):(s=!e.$stable,Tm(e,i)),a=e}else e&&(Em(r,e),a={default:1});if(s)for(const o in i)!wm(o)&&!(o in a)&&delete i[o]};function Am(){return{app:null,config:{isNativeTag:Ig,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mx=0;function gx(r,e){return function(n,i=null){Ye(n)||(n=Object.assign({},n)),i!=null&&!Rt(i)&&(i=null);const s=Am(),a=new Set;let o=!1;const l=s.app={_uid:mx++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Nx,get config(){return s.config},set config(u){},use(u,...c){return a.has(u)||(u&&Ye(u.install)?(a.add(u),u.install(l,...c)):Ye(u)&&(a.add(u),u(l,...c))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,c){return c?(s.components[u]=c,l):s.components[u]},directive(u,c){return c?(s.directives[u]=c,l):s.directives[u]},mount(u,c,h){if(!o){const f=ut(n,i);return f.appContext=s,c&&e?e(f,u):r(f,u,h),o=!0,l._container=u,u.__vue_app__=l,fu(f.component)||f.component.proxy}},unmount(){o&&(r(null,l._container),delete l._container.__vue_app__)},provide(u,c){return s.provides[u]=c,l}};return l}}function Wc(r,e,t,n,i=!1){if(Ze(r)){r.forEach((f,m)=>Wc(f,e&&(Ze(e)?e[m]:e),t,n,i));return}if(jo(n)&&!i)return;const s=n.shapeFlag&4?fu(n.component)||n.component.proxy:n.el,a=i?null:s,{i:o,r:l}=r,u=e&&e.r,c=o.refs===pt?o.refs={}:o.refs,h=o.setupState;if(u!=null&&u!==l&&(Zt(u)?(c[u]=null,rt(h,u)&&(h[u]=null)):nn(u)&&(u.value=null)),Ye(l))wr(l,o,12,[a,c]);else{const f=Zt(l),m=nn(l);if(f||m){const g=()=>{if(r.f){const d=f?rt(h,l)?h[l]:c[l]:l.value;i?Ze(d)&&Cf(d,s):Ze(d)?d.includes(s)||d.push(s):f?(c[l]=[s],rt(h,l)&&(h[l]=c[l])):(l.value=[s],r.k&&(c[r.k]=l.value))}else f?(c[l]=a,rt(h,l)&&(h[l]=a)):m&&(l.value=a,r.k&&(c[r.k]=a))};a?(g.id=-1,_n(g,t)):g()}}}const _n=N_;function _x(r){return xx(r)}function xx(r,e){const t=Gg();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:f,setScopeId:m=vi,insertStaticContent:g}=r,d=(D,L,$,oe=null,ne=null,F=null,de=!1,te=null,pe=!!L.dynamicChildren)=>{if(D===L)return;D&&!Jr(D,L)&&(oe=Le(D),V(D,ne,F,!0),D=null),L.patchFlag===-2&&(pe=!1,L.dynamicChildren=null);const{type:le,ref:A,shapeFlag:S}=L;switch(le){case uu:p(D,L,$,oe);break;case Fi:x(D,L,$,oe);break;case Lu:D==null&&b(L,$,oe,de);break;case In:Z(D,L,$,oe,ne,F,de,te,pe);break;default:S&1?M(D,L,$,oe,ne,F,de,te,pe):S&6?k(D,L,$,oe,ne,F,de,te,pe):(S&64||S&128)&&le.process(D,L,$,oe,ne,F,de,te,pe,Re)}A!=null&&ne&&Wc(A,D&&D.ref,F,L||D,!L)},p=(D,L,$,oe)=>{if(D==null)n(L.el=o(L.children),$,oe);else{const ne=L.el=D.el;L.children!==D.children&&u(ne,L.children)}},x=(D,L,$,oe)=>{D==null?n(L.el=l(L.children||""),$,oe):L.el=D.el},b=(D,L,$,oe)=>{[D.el,D.anchor]=g(D.children,L,$,oe,D.el,D.anchor)},_=({el:D,anchor:L},$,oe)=>{let ne;for(;D&&D!==L;)ne=f(D),n(D,$,oe),D=ne;n(L,$,oe)},y=({el:D,anchor:L})=>{let $;for(;D&&D!==L;)$=f(D),i(D),D=$;i(L)},M=(D,L,$,oe,ne,F,de,te,pe)=>{de=de||L.type==="svg",D==null?T(L,$,oe,ne,F,de,te,pe):w(D,L,ne,F,de,te,pe)},T=(D,L,$,oe,ne,F,de,te)=>{let pe,le;const{type:A,props:S,shapeFlag:N,transition:K,dirs:Q}=D;if(pe=D.el=a(D.type,F,S&&S.is,S),N&8?c(pe,D.children):N&16&&v(D.children,pe,null,oe,ne,F&&A!=="foreignObject",de,te),Q&&zr(D,null,oe,"created"),S){for(const _e in S)_e!=="value"&&!xl(_e)&&s(pe,_e,null,S[_e],F,D.children,oe,ne,H);"value"in S&&s(pe,"value",null,S.value),(le=S.onVnodeBeforeMount)&&bi(le,oe,D)}E(pe,D,D.scopeId,de,oe),Q&&zr(D,null,oe,"beforeMount");const ce=(!ne||ne&&!ne.pendingBranch)&&K&&!K.persisted;ce&&K.beforeEnter(pe),n(pe,L,$),((le=S&&S.onVnodeMounted)||ce||Q)&&_n(()=>{le&&bi(le,oe,D),ce&&K.enter(pe),Q&&zr(D,null,oe,"mounted")},ne)},E=(D,L,$,oe,ne)=>{if($&&m(D,$),oe)for(let F=0;F<oe.length;F++)m(D,oe[F]);if(ne){let F=ne.subTree;if(L===F){const de=ne.vnode;E(D,de,de.scopeId,de.slotScopeIds,ne.parent)}}},v=(D,L,$,oe,ne,F,de,te,pe=0)=>{for(let le=pe;le<D.length;le++){const A=D[le]=te?dr(D[le]):Ai(D[le]);d(null,A,L,$,oe,ne,F,de,te)}},w=(D,L,$,oe,ne,F,de)=>{const te=L.el=D.el;let{patchFlag:pe,dynamicChildren:le,dirs:A}=L;pe|=D.patchFlag&16;const S=D.props||pt,N=L.props||pt;let K;$&&kr($,!1),(K=N.onVnodeBeforeUpdate)&&bi(K,$,L,D),A&&zr(L,D,$,"beforeUpdate"),$&&kr($,!0);const Q=ne&&L.type!=="foreignObject";if(le?P(D.dynamicChildren,le,te,$,oe,Q,F):de||I(D,L,te,null,$,oe,Q,F,!1),pe>0){if(pe&16)O(te,L,S,N,$,oe,ne);else if(pe&2&&S.class!==N.class&&s(te,"class",null,N.class,ne),pe&4&&s(te,"style",S.style,N.style,ne),pe&8){const ce=L.dynamicProps;for(let _e=0;_e<ce.length;_e++){const ge=ce[_e],ee=S[ge],Ce=N[ge];(Ce!==ee||ge==="value")&&s(te,ge,ee,Ce,ne,D.children,$,oe,H)}}pe&1&&D.children!==L.children&&c(te,L.children)}else!de&&le==null&&O(te,L,S,N,$,oe,ne);((K=N.onVnodeUpdated)||A)&&_n(()=>{K&&bi(K,$,L,D),A&&zr(L,D,$,"updated")},oe)},P=(D,L,$,oe,ne,F,de)=>{for(let te=0;te<L.length;te++){const pe=D[te],le=L[te],A=pe.el&&(pe.type===In||!Jr(pe,le)||pe.shapeFlag&70)?h(pe.el):$;d(pe,le,A,null,oe,ne,F,de,!0)}},O=(D,L,$,oe,ne,F,de)=>{if($!==oe){if($!==pt)for(const te in $)!xl(te)&&!(te in oe)&&s(D,te,$[te],null,de,L.children,ne,F,H);for(const te in oe){if(xl(te))continue;const pe=oe[te],le=$[te];pe!==le&&te!=="value"&&s(D,te,le,pe,de,L.children,ne,F,H)}"value"in oe&&s(D,"value",$.value,oe.value)}},Z=(D,L,$,oe,ne,F,de,te,pe)=>{const le=L.el=D?D.el:o(""),A=L.anchor=D?D.anchor:o("");let{patchFlag:S,dynamicChildren:N,slotScopeIds:K}=L;K&&(te=te?te.concat(K):K),D==null?(n(le,$,oe),n(A,$,oe),v(L.children,$,A,ne,F,de,te,pe)):S>0&&S&64&&N&&D.dynamicChildren?(P(D.dynamicChildren,N,$,ne,F,de,te),(L.key!=null||ne&&L===ne.subTree)&&Cm(D,L,!0)):I(D,L,$,A,ne,F,de,te,pe)},k=(D,L,$,oe,ne,F,de,te,pe)=>{L.slotScopeIds=te,D==null?L.shapeFlag&512?ne.ctx.activate(L,$,oe,de,pe):B(L,$,oe,ne,F,de,pe):q(D,L,pe)},B=(D,L,$,oe,ne,F,de)=>{const te=D.component=Ax(D,oe,ne);if(au(D)&&(te.ctx.renderer=Re),Dx(te),te.asyncDep){if(ne&&ne.registerDep(te,G),!D.el){const pe=te.subTree=ut(Fi);x(null,pe,L,$)}return}G(te,D,L,$,ne,F,de)},q=(D,L,$)=>{const oe=L.component=D.component;if(B_(D,L,$))if(oe.asyncDep&&!oe.asyncResolved){Y(oe,L,$);return}else oe.next=L,A_(oe.update),oe.update();else L.el=D.el,oe.vnode=L},G=(D,L,$,oe,ne,F,de)=>{const te=()=>{if(D.isMounted){let{next:A,bu:S,u:N,parent:K,vnode:Q}=D,ce=A,_e;kr(D,!1),A?(A.el=Q.el,Y(D,A,de)):A=Q,S&&Tu(S),(_e=A.props&&A.props.onVnodeBeforeUpdate)&&bi(_e,K,A,Q),kr(D,!0);const ge=Eu(D),ee=D.subTree;D.subTree=ge,d(ee,ge,h(ee.el),Le(ee),D,ne,F),A.el=ge.el,ce===null&&U_(D,ge.el),N&&_n(N,ne),(_e=A.props&&A.props.onVnodeUpdated)&&_n(()=>bi(_e,K,A,Q),ne)}else{let A;const{el:S,props:N}=L,{bm:K,m:Q,parent:ce}=D,_e=jo(L);if(kr(D,!1),K&&Tu(K),!_e&&(A=N&&N.onVnodeBeforeMount)&&bi(A,ce,L),kr(D,!0),S&&ze){const ge=()=>{D.subTree=Eu(D),ze(S,D.subTree,D,ne,null)};_e?L.type.__asyncLoader().then(()=>!D.isUnmounted&&ge()):ge()}else{const ge=D.subTree=Eu(D);d(null,ge,$,oe,D,ne,F),L.el=ge.el}if(Q&&_n(Q,ne),!_e&&(A=N&&N.onVnodeMounted)){const ge=L;_n(()=>bi(A,ce,ge),ne)}(L.shapeFlag&256||ce&&jo(ce.vnode)&&ce.vnode.shapeFlag&256)&&D.a&&_n(D.a,ne),D.isMounted=!0,L=$=oe=null}},pe=D.effect=new Rf(te,()=>kf(le),D.scope),le=D.update=()=>pe.run();le.id=D.uid,kr(D,!0),le()},Y=(D,L,$)=>{L.component=D;const oe=D.vnode.props;D.vnode=L,D.next=null,fx(D,L.props,oe,$),px(D,L.children,$),Co(),Ah(),Do()},I=(D,L,$,oe,ne,F,de,te,pe=!1)=>{const le=D&&D.children,A=D?D.shapeFlag:0,S=L.children,{patchFlag:N,shapeFlag:K}=L;if(N>0){if(N&128){R(le,S,$,oe,ne,F,de,te,pe);return}else if(N&256){se(le,S,$,oe,ne,F,de,te,pe);return}}K&8?(A&16&&H(le,ne,F),S!==le&&c($,S)):A&16?K&16?R(le,S,$,oe,ne,F,de,te,pe):H(le,ne,F,!0):(A&8&&c($,""),K&16&&v(S,$,oe,ne,F,de,te,pe))},se=(D,L,$,oe,ne,F,de,te,pe)=>{D=D||to,L=L||to;const le=D.length,A=L.length,S=Math.min(le,A);let N;for(N=0;N<S;N++){const K=L[N]=pe?dr(L[N]):Ai(L[N]);d(D[N],K,$,null,ne,F,de,te,pe)}le>A?H(D,ne,F,!0,!1,S):v(L,$,oe,ne,F,de,te,pe,S)},R=(D,L,$,oe,ne,F,de,te,pe)=>{let le=0;const A=L.length;let S=D.length-1,N=A-1;for(;le<=S&&le<=N;){const K=D[le],Q=L[le]=pe?dr(L[le]):Ai(L[le]);if(Jr(K,Q))d(K,Q,$,null,ne,F,de,te,pe);else break;le++}for(;le<=S&&le<=N;){const K=D[S],Q=L[N]=pe?dr(L[N]):Ai(L[N]);if(Jr(K,Q))d(K,Q,$,null,ne,F,de,te,pe);else break;S--,N--}if(le>S){if(le<=N){const K=N+1,Q=K<A?L[K].el:oe;for(;le<=N;)d(null,L[le]=pe?dr(L[le]):Ai(L[le]),$,Q,ne,F,de,te,pe),le++}}else if(le>N)for(;le<=S;)V(D[le],ne,F,!0),le++;else{const K=le,Q=le,ce=new Map;for(le=Q;le<=N;le++){const Se=L[le]=pe?dr(L[le]):Ai(L[le]);Se.key!=null&&ce.set(Se.key,le)}let _e,ge=0;const ee=N-Q+1;let Ce=!1,Ue=0;const Te=new Array(ee);for(le=0;le<ee;le++)Te[le]=0;for(le=K;le<=S;le++){const Se=D[le];if(ge>=ee){V(Se,ne,F,!0);continue}let we;if(Se.key!=null)we=ce.get(Se.key);else for(_e=Q;_e<=N;_e++)if(Te[_e-Q]===0&&Jr(Se,L[_e])){we=_e;break}we===void 0?V(Se,ne,F,!0):(Te[we-Q]=le+1,we>=Ue?Ue=we:Ce=!0,d(Se,L[we],$,null,ne,F,de,te,pe),ge++)}const Fe=Ce?vx(Te):to;for(_e=Fe.length-1,le=ee-1;le>=0;le--){const Se=Q+le,we=L[Se],Qe=Se+1<A?L[Se+1].el:oe;Te[le]===0?d(null,we,$,Qe,ne,F,de,te,pe):Ce&&(_e<0||le!==Fe[_e]?X(we,$,Qe,2):_e--)}}},X=(D,L,$,oe,ne=null)=>{const{el:F,type:de,transition:te,children:pe,shapeFlag:le}=D;if(le&6){X(D.component.subTree,L,$,oe);return}if(le&128){D.suspense.move(L,$,oe);return}if(le&64){de.move(D,L,$,Re);return}if(de===In){n(F,L,$);for(let S=0;S<pe.length;S++)X(pe[S],L,$,oe);n(D.anchor,L,$);return}if(de===Lu){_(D,L,$);return}if(oe!==2&&le&1&&te)if(oe===0)te.beforeEnter(F),n(F,L,$),_n(()=>te.enter(F),ne);else{const{leave:S,delayLeave:N,afterLeave:K}=te,Q=()=>n(F,L,$),ce=()=>{S(F,()=>{Q(),K&&K()})};N?N(F,Q,ce):ce()}else n(F,L,$)},V=(D,L,$,oe=!1,ne=!1)=>{const{type:F,props:de,ref:te,children:pe,dynamicChildren:le,shapeFlag:A,patchFlag:S,dirs:N}=D;if(te!=null&&Wc(te,null,$,D,!0),A&256){L.ctx.deactivate(D);return}const K=A&1&&N,Q=!jo(D);let ce;if(Q&&(ce=de&&de.onVnodeBeforeUnmount)&&bi(ce,L,D),A&6)me(D.component,$,oe);else{if(A&128){D.suspense.unmount($,oe);return}K&&zr(D,null,L,"beforeUnmount"),A&64?D.type.remove(D,L,$,ne,Re,oe):le&&(F!==In||S>0&&S&64)?H(le,L,$,!1,!0):(F===In&&S&384||!ne&&A&16)&&H(pe,L,$),oe&&fe(D)}(Q&&(ce=de&&de.onVnodeUnmounted)||K)&&_n(()=>{ce&&bi(ce,L,D),K&&zr(D,null,L,"unmounted")},$)},fe=D=>{const{type:L,el:$,anchor:oe,transition:ne}=D;if(L===In){ue($,oe);return}if(L===Lu){y(D);return}const F=()=>{i($),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(D.shapeFlag&1&&ne&&!ne.persisted){const{leave:de,delayLeave:te}=ne,pe=()=>de($,F);te?te(D.el,F,pe):pe()}else F()},ue=(D,L)=>{let $;for(;D!==L;)$=f(D),i(D),D=$;i(L)},me=(D,L,$)=>{const{bum:oe,scope:ne,update:F,subTree:de,um:te}=D;oe&&Tu(oe),ne.stop(),F&&(F.active=!1,V(de,D,L,$)),te&&_n(te,L),_n(()=>{D.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},H=(D,L,$,oe=!1,ne=!1,F=0)=>{for(let de=F;de<D.length;de++)V(D[de],L,$,oe,ne)},Le=D=>D.shapeFlag&6?Le(D.component.subTree):D.shapeFlag&128?D.suspense.next():f(D.anchor||D.el),ve=(D,L,$)=>{D==null?L._vnode&&V(L._vnode,null,null,!0):d(L._vnode||null,D,L,null,null,null,$),Ah(),cm(),L._vnode=D},Re={p:d,um:V,m:X,r:fe,mt:B,mc:v,pc:I,pbc:P,n:Le,o:r};let xe,ze;return e&&([xe,ze]=e(Re)),{render:ve,hydrate:xe,createApp:gx(ve,xe)}}function kr({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function Cm(r,e,t=!1){const n=r.children,i=e.children;if(Ze(n)&&Ze(i))for(let s=0;s<n.length;s++){const a=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=dr(i[s]),o.el=a.el),t||Cm(a,o)),o.type===uu&&(o.el=a.el)}}function vx(r){const e=r.slice(),t=[0];let n,i,s,a,o;const l=r.length;for(n=0;n<l;n++){const u=r[n];if(u!==0){if(i=t[t.length-1],r[i]<u){e[n]=i,t.push(n);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,r[t[o]]<u?s=o+1:a=o;u<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const yx=r=>r.__isTeleport,In=Symbol(void 0),uu=Symbol(void 0),Fi=Symbol(void 0),Lu=Symbol(void 0),Ko=[];let xi=null;function Qn(r=!1){Ko.push(xi=r?null:[])}function bx(){Ko.pop(),xi=Ko[Ko.length-1]||null}let ha=1;function Nh(r){ha+=r}function Dm(r){return r.dynamicChildren=ha>0?xi||to:null,bx(),ha>0&&xi&&xi.push(r),r}function Ji(r,e,t,n,i,s){return Dm(We(r,e,t,n,i,s,!0))}function Vc(r,e,t,n,i){return Dm(ut(r,e,t,n,i,!0))}function Pm(r){return r?r.__v_isVNode===!0:!1}function Jr(r,e){return r.type===e.type&&r.key===e.key}const cu="__vInternal",Lm=({key:r})=>r!=null?r:null,yl=({ref:r,ref_key:e,ref_for:t})=>r!=null?Zt(r)||nn(r)||Ye(r)?{i:Yt,r,k:e,f:!!t}:r:null;function We(r,e=null,t=null,n=0,i=null,s=r===In?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&Lm(e),ref:e&&yl(e),scopeId:ou,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Yt};return o?(Gf(l,t),s&128&&r.normalize(l)):t&&(l.shapeFlag|=Zt(t)?8:16),ha>0&&!a&&xi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&xi.push(l),l}const ut=Mx;function Mx(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===nx)&&(r=Fi),Pm(r)){const o=Pr(r,e,!0);return t&&Gf(o,t),ha>0&&!s&&xi&&(o.shapeFlag&6?xi[xi.indexOf(r)]=o:xi.push(o)),o.patchFlag|=-2,o}if(Ix(r)&&(r=r.__vccOpts),e){e=Sx(e);let{class:o,style:l}=e;o&&!Zt(o)&&(e.class=Jl(o)),Rt(l)&&(nm(l)&&!Ze(l)&&(l=on({},l)),e.style=Kl(l))}const a=Zt(r)?1:O_(r)?128:yx(r)?64:Rt(r)?4:Ye(r)?2:0;return We(r,e,t,n,i,a,s,!0)}function Sx(r){return r?nm(r)||cu in r?on({},r):r:null}function Pr(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:a}=r,o=e?wx(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:o,key:o&&Lm(o),ref:e&&e.ref?t&&i?Ze(i)?i.concat(yl(e)):[i,yl(e)]:yl(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:a,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==In?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Pr(r.ssContent),ssFallback:r.ssFallback&&Pr(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx}}function $n(r=" ",e=0){return ut(uu,null,r,e)}function Ai(r){return r==null||typeof r=="boolean"?ut(Fi):Ze(r)?ut(In,null,r.slice()):typeof r=="object"?dr(r):ut(uu,null,String(r))}function dr(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:Pr(r)}function Gf(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(Ze(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Gf(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(cu in e)?e._ctx=Yt:i===3&&Yt&&(Yt.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:Yt},t=32):(e=String(e),n&64?(t=16,e=[$n(e)]):t=8);r.children=e,r.shapeFlag|=t}function wx(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=Jl([e.class,n.class]));else if(i==="style")e.style=Kl([e.style,n.style]);else if(Ql(i)){const s=e[i],a=n[i];a&&s!==a&&!(Ze(s)&&s.includes(a))&&(e[i]=s?[].concat(s,a):a)}else i!==""&&(e[i]=n[i])}return e}function bi(r,e,t,n=null){ii(r,e,7,[t,n])}const Tx=Am();let Ex=0;function Ax(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||Tx,s={uid:Ex++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sm(n,i),emitsOptions:hm(n,i),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:n.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=P_.bind(null,s),r.ce&&r.ce(s),s}let Wt=null;const Cx=()=>Wt||Yt,ho=r=>{Wt=r,r.scope.on()},ls=()=>{Wt&&Wt.scope.off(),Wt=null};function Rm(r){return r.vnode.shapeFlag&4}let da=!1;function Dx(r,e=!1){da=e;const{props:t,children:n}=r.vnode,i=Rm(r);cx(r,t,i,e),dx(r,n);const s=i?Px(r,e):void 0;return da=!1,s}function Px(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=im(new Proxy(r.ctx,rx));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?Rx(r):null;ho(r),Co();const s=wr(n,r,0,[r.props,i]);if(Do(),ls(),Gp(s)){if(s.then(ls,ls),e)return s.then(a=>{zh(r,a,e)}).catch(a=>{ru(a,r,0)});r.asyncDep=s}else zh(r,s,e)}else Fm(r,e)}function zh(r,e,t){Ye(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:Rt(e)&&(r.setupState=om(e)),Fm(r,t)}let kh;function Fm(r,e,t){const n=r.type;if(!r.render){if(!e&&kh&&!n.render){const i=n.template||Wf(r).template;if(i){const{isCustomElement:s,compilerOptions:a}=r.appContext.config,{delimiters:o,compilerOptions:l}=n,u=on(on({isCustomElement:s,delimiters:o},a),l);n.render=kh(i,u)}}r.render=n.render||vi}ho(r),Co(),sx(r),Do(),ls()}function Lx(r){return new Proxy(r.attrs,{get(e,t){return Wn(r,"get","$attrs"),e[t]}})}function Rx(r){const e=n=>{r.exposed=n||{}};let t;return{get attrs(){return t||(t=Lx(r))},slots:r.slots,emit:r.emit,expose:e}}function fu(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(om(im(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in Zo)return Zo[t](r)},has(e,t){return t in e||t in Zo}}))}function Fx(r,e=!0){return Ye(r)?r.displayName||r.name:r.name||e&&r.__name}function Ix(r){return Ye(r)&&"__vccOpts"in r}const Bx=(r,e)=>S_(r,e,da),Ux=Symbol(""),Ox=()=>vl(Ux),Nx="3.2.45",zx="http://www.w3.org/2000/svg",Qr=typeof document<"u"?document:null,Wh=Qr&&Qr.createElement("template"),kx={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?Qr.createElementNS(zx,r):Qr.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>Qr.createTextNode(r),createComment:r=>Qr.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>Qr.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,n,i,s){const a=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Wh.innerHTML=n?`<svg>${r}</svg>`:r;const o=Wh.content;if(n){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Wx(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function Vx(r,e,t){const n=r.style,i=Zt(t);if(t&&!i){for(const s in t)Gc(n,s,t[s]);if(e&&!Zt(e))for(const s in e)t[s]==null&&Gc(n,s,"")}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const Vh=/\s*!important$/;function Gc(r,e,t){if(Ze(t))t.forEach(n=>Gc(r,e,n));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const n=Gx(r,e);Vh.test(t)?r.setProperty(Ao(n),t.replace(Vh,""),"important"):r[n]=t}}const Gh=["Webkit","Moz","ms"],Ru={};function Gx(r,e){const t=Ru[e];if(t)return t;let n=Ui(e);if(n!=="filter"&&n in r)return Ru[e]=n;n=nu(n);for(let i=0;i<Gh.length;i++){const s=Gh[i]+n;if(s in r)return Ru[e]=s}return e}const Hh="http://www.w3.org/1999/xlink";function Hx(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(Hh,e.slice(6,e.length)):r.setAttributeNS(Hh,e,t);else{const s=Fg(e);t==null||s&&!Vp(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function Xx(r,e,t,n,i,s,a){if(e==="innerHTML"||e==="textContent"){n&&a(n,i,s),r[e]=t==null?"":t;return}if(e==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=t;const l=t==null?"":t;(r.value!==l||r.tagName==="OPTION")&&(r.value=l),t==null&&r.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof r[e];l==="boolean"?t=Vp(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{r[e]=t}catch{}o&&r.removeAttribute(e)}function qx(r,e,t,n){r.addEventListener(e,t,n)}function $x(r,e,t,n){r.removeEventListener(e,t,n)}function Yx(r,e,t,n,i=null){const s=r._vei||(r._vei={}),a=s[e];if(n&&a)a.value=n;else{const[o,l]=jx(e);if(n){const u=s[e]=Jx(n,i);qx(r,o,u,l)}else a&&($x(r,o,a,l),s[e]=void 0)}}const Xh=/(?:Once|Passive|Capture)$/;function jx(r){let e;if(Xh.test(r)){e={};let n;for(;n=r.match(Xh);)r=r.slice(0,r.length-n[0].length),e[n[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):Ao(r.slice(2)),e]}let Fu=0;const Zx=Promise.resolve(),Kx=()=>Fu||(Zx.then(()=>Fu=0),Fu=Date.now());function Jx(r,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;ii(Qx(n,t.value),e,5,[n])};return t.value=r,t.attached=Kx(),t}function Qx(r,e){if(Ze(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const qh=/^on[a-z]/,ev=(r,e,t,n,i=!1,s,a,o,l)=>{e==="class"?Wx(r,n,i):e==="style"?Vx(r,t,n):Ql(e)?Af(e)||Yx(r,e,t,n,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tv(r,e,n,i))?Xx(r,e,n,s,a,o,l):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),Hx(r,e,n,i))};function tv(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&qh.test(e)&&Ye(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||qh.test(e)&&Zt(t)?!1:e in r}const nv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};G_.props;const iv=on({patchProp:ev},kx);let $h;function rv(){return $h||($h=_x(iv))}const sv=(...r)=>{const e=rv().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=ov(n);if(!i)return;const s=e._component;!Ye(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function ov(r){return Zt(r)?document.querySelector(r):r}const Hf="/sandbox-vite/assets/first-view.96e5939b.mov";function Hi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Im(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},po={duration:.5,overwrite:!1,delay:0},Xf,bn,Pt,ei=1e8,lt=1/ei,Hc=Math.PI*2,av=Hc/4,lv=0,Bm=Math.sqrt,uv=Math.cos,cv=Math.sin,Gt=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},Qi=function(e){return typeof e=="number"},qf=function(e){return typeof e>"u"},Oi=function(e){return typeof e=="object"},Mn=function(e){return e!==!1},Um=function(){return typeof window<"u"},Ua=function(e){return Tt(e)||Gt(e)},Om=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sn=Array.isArray,Xc=/(?:-?\.?\d|\.)+/gi,Nm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Iu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zm=/[+-]=-?[.\d]+/,km=/[^,'"\[\]\s]+/gi,fv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,jn,qc,$f,Vn={},Nl={},Wm,Vm=function(e){return(Nl=xs(e,Vn))&&Gn},Yf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},zl=function(e,t){return!t&&console.warn(e)},Gm=function(e,t){return e&&(Vn[e]=t)&&Nl&&(Nl[e]=t)||Vn},pa=function(){return 0},hv={suppressEvents:!0,isStart:!0,kill:!1},bl={suppressEvents:!0,kill:!1},dv={suppressEvents:!0},jf={},Tr=[],$c={},Hm,Fn={},Bu={},Yh=30,Ml=[],Zf="",Kf=function(e){var t=e[0],n,i;if(Oi(t)||Tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ml.length;i--&&!Ml[i].targetTest(t););n=Ml[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new h0(e[i],n)))||e.splice(i,1);return e},us=function(e){return e._gsap||Kf(ti(e))[0]._gsap},Xm=function(e,t,n){return(n=e[t])&&Tt(n)?e[t]():qf(n)&&e.getAttribute&&e.getAttribute(t)||n},Sn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ct=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},ro=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},pv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},kl=function(){var e=Tr.length,t=Tr.slice(0),n,i;for($c={},Tr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qm=function(e,t,n,i){Tr.length&&kl(),e.render(t,n,i||bn&&t<0&&(e._initted||e._startAt)),Tr.length&&kl()},$m=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(km).length<2?t:Gt(e)?e.trim():e},Ym=function(e){return e},li=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},mv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},xs=function(e,t){for(var n in t)e[n]=t[n];return e},jh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Oi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Wl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Jo=function(e){var t=e.parent||yt,n=e.keyframes?mv(sn(e.keyframes)):li;if(Mn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},gv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},jm=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},hu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Lr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},cs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},_v=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Yc=function(e,t,n,i){return e._startAt&&(bn?e._startAt.revert(bl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},xv=function r(e){return!e||e._ts&&r(e.parent)},Zh=function(e){return e._repeat?mo(e._tTime,e=e.duration()+e._rDelay)*e:0},mo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Vl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},du=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||lt)||0))},pu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=$t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),du(e),n._dirty||cs(n,e)),e},Zm=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Vl(e.rawTime(),t),(!t._dur||Sa(0,t.totalDuration(),n)-t._tTime>lt)&&t.render(n,!0)),cs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-lt}},Pi=function(e,t,n,i){return t.parent&&Lr(t),t._start=$t((Qi(n)?n:n||e!==yt?Yn(e,n,t):e._time)+t._delay),t._end=$t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jm(e,t,"_first","_last",e._sort?"_start":0),jc(t)||(e._recent=t),i||Zm(e,t),e._ts<0&&pu(e,e._tTime),e},Km=function(e,t){return(Vn.ScrollTrigger||Yf("scrollTrigger",t))&&Vn.ScrollTrigger.create(t,e)},Jm=function(e,t,n,i,s){if(Qf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!bn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Hm!==Un.frame)return Tr.push(e),e._lazy=[s,i],1},vv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},jc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},yv=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&vv(e)&&!(!e._initted&&jc(e))||(e._ts<0||e._dp._ts<0)&&!jc(e))?0:1,o=e._rDelay,l=0,u,c,h;if(o&&e._repeat&&(l=Sa(0,e._tDur,t),c=mo(l,o),e._yoyo&&c&1&&(a=1-a),c!==mo(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||bn||i||e._zTime===lt||!t&&e._zTime){if(!e._initted&&Jm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?lt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&Yc(e,t,n,!0),e._onUpdate&&!n&&ni(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ni(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Lr(e,1),!n&&!bn&&(ni(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},bv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},go=function(e,t,n,i){var s=e._repeat,a=$t(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:$t(a*(s+1)+e._rDelay*s):a,o>0&&!i&&pu(e,e._tTime=e._tDur*o),e.parent&&du(e),n||cs(e.parent,e),e},Kh=function(e){return e instanceof yn?cs(e):go(e,e._dur)},Mv={_start:0,endTime:pa,totalDuration:pa},Yn=function r(e,t,n){var i=e.labels,s=e._recent||Mv,a=e.duration()>=ei?s.endTime(!1):e._dur,o,l,u;return Gt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&n&&(l=l/100*(sn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Qo=function(e,t,n){var i=Qi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;a.immediateRender=Mn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new It(t[0],a,t[s+1])},Ur=function(e,t){return e||e===0?t(e):t},Sa=function(e,t,n){return n<e?e:n>t?t:n},tn=function(e,t){return!Gt(e)||!(t=fv.exec(e))?"":t[1]},Sv=function(e,t,n){return Ur(n,function(i){return Sa(e,t,i)})},Zc=[].slice,Qm=function(e,t){return e&&Oi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Oi(e[0]))&&!e.nodeType&&e!==jn},wv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Gt(i)&&!t||Qm(i,1)?(s=n).push.apply(s,ti(i)):n.push(i)})||n},ti=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):Gt(e)&&!n&&(qc||!_o())?Zc.call((t||$f).querySelectorAll(e),0):sn(e)?wv(e,n):Qm(e)?Zc.call(e,0):e?[e]:[]},Kc=function(e){return e=ti(e)[0]||zl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ti(t,n.querySelectorAll?n:n===e?zl("Invalid scope")||$f.createElement("div"):e)}},e0=function(e){return e.sort(function(){return .5-Math.random()})},t0=function(e){if(Tt(e))return e;var t=Oi(e)?e:{each:e},n=fs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,u=t.axis,c=i,h=i;return Gt(i)?c=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(c=i[0],h=i[1]),function(f,m,g){var d=(g||t).length,p=a[d],x,b,_,y,M,T,E,v,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,ei])[1],!w){for(E=-ei;E<(E=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(p=a[d]=[],x=l?Math.min(w,d)*c-.5:i%w,b=w===ei?0:l?d*h/w-.5:i/w|0,E=0,v=ei,T=0;T<d;T++)_=T%w-x,y=b-(T/w|0),p[T]=M=u?Math.abs(u==="y"?y:_):Bm(_*_+y*y),M>E&&(E=M),M<v&&(v=M);i==="random"&&e0(p),p.max=E-v,p.min=v,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:u?u==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),p.b=d<0?s-d:s,p.u=tn(t.amount||t.each)||0,n=n&&d<0?u0(n):n}return d=(p[f]-p.min)/p.max||0,$t(p.b+(n?n(d):d)*p.v)+p.u}},Jc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=$t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Qi(n)?0:tn(n))}},n0=function(e,t){var n=sn(e),i,s;return!n&&Oi(e)&&(i=n=e.radius||ei,e.values?(e=ti(e.values),(s=!Qi(e[0]))&&(i*=i)):e=Jc(e.increment)),Ur(t,n?Tt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),u=ei,c=0,h=e.length,f,m;h--;)s?(f=e[h].x-o,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-o),f<u&&(u=f,c=h);return c=!i||u<=i?e[c]:a,s||c===a||Qi(a)?c:c+tn(a)}:Jc(e))},i0=function(e,t,n,i){return Ur(sn(e)?!t:n===!0?!!(n=0):!i,function(){return sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Tv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Ev=function(e,t){return function(n){return e(parseFloat(n))+(t||tn(n))}},Av=function(e,t,n){return s0(e,t,0,1,n)},r0=function(e,t,n){return Ur(n,function(i){return e[~~t(i)]})},Cv=function r(e,t,n){var i=t-e;return sn(e)?r0(e,r(0,e.length),t):Ur(n,function(s){return(i+(s-e)%i)%i+e})},Dv=function r(e,t,n){var i=t-e,s=i*2;return sn(e)?r0(e,r(0,e.length-1),t):Ur(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ma=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?km:Xc),n+=e.substr(t,i-t)+i0(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},s0=function(e,t,n,i,s){var a=t-e,o=i-n;return Ur(s,function(l){return n+((l-e)/a*o||0)})},Pv=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var a=Gt(e),o={},l,u,c,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(sn(e)&&!sn(t)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(r(e[u-1],e[u]));h--,s=function(g){g*=h;var d=Math.min(f,~~g);return c[d](g-d)},n=t}else i||(e=xs(sn(e)?[]:{},e));if(!c){for(l in t)Jf.call(o,e,l,"get",t[l]);s=function(g){return nh(g,o)||(a?e.p:e)}}}return Ur(n,s)},Jh=function(e,t,n){var i=e.labels,s=ei,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ni=function(e,t,n){var i=e.vars,s=i[t],a=Pt,o=e._ctx,l,u,c;if(!!s)return l=i[t+"Params"],u=i.callbackScope||e,n&&Tr.length&&kl(),o&&(Pt=o),c=l?s.apply(u,l):s.call(u),Pt=a,c},Wo=function(e){return Lr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bn),e.progress()<1&&ni(e,"onInterrupt"),e},Ks,Lv=function(e){e=!e.name&&e.default||e;var t=e.name,n=Tt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:pa,render:nh,add:Jf,kill:$v,modifier:qv,rawVars:0},a={targetTest:0,get:0,getSetter:th,aliases:{},register:0};if(_o(),e!==i){if(Fn[t])return;li(i,li(Wl(e,s),a)),xs(i.prototype,xs(s,Wl(e,a))),Fn[i.prop=t]=i,e.targetTest&&(Ml.push(i),jf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Gm(t,i),e.register&&e.register(Gn,i,wn)},ct=255,Vo={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},Uu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ct+.5|0},o0=function(e,t,n){var i=e?Qi(e)?[e>>16,e>>8&ct,e&ct]:0:Vo.black,s,a,o,l,u,c,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Vo[e])i=Vo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ct,i&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Xc),!t)l=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,a=c<=.5?c*(u+1):c+u-c*u,s=c*2-a,i.length>3&&(i[3]*=1),i[0]=Uu(l+1/3,s,a),i[1]=Uu(l,s,a),i[2]=Uu(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Nm),n&&i.length<4&&(i[3]=1),i}else i=e.match(Xc)||Vo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/ct,a=i[1]/ct,o=i[2]/ct,h=Math.max(s,a,o),f=Math.min(s,a,o),c=(h+f)/2,h===f?l=u=0:(m=h-f,u=c>.5?m/(2-h-f):m/(h+f),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},a0=function(e){var t=[],n=[],i=-1;return e.split(Er).forEach(function(s){var a=s.match(Zs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Qh=function(e,t,n){var i="",s=(e+i).match(Er),a=t?"hsla(":"rgba(",o=0,l,u,c,h;if(!s)return e;if(s=s.map(function(f){return(f=o0(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(c=a0(e),l=n.c,l.join(i)!==c.c.join(i)))for(u=e.replace(Er,"1").split(Zs),h=u.length-1;o<h;o++)i+=u[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:n).shift());if(!u)for(u=e.split(Er),h=u.length-1;o<h;o++)i+=u[o]+s[o];return i+u[h]},Er=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Vo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Rv=/hsl[a]?\(/,l0=function(e){var t=e.join(" "),n;if(Er.lastIndex=0,Er.test(t))return n=Rv.test(t),e[1]=Qh(e[1],n),e[0]=Qh(e[0],n,a0(e[1])),!0},ga,Un=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,u,c,h,f,m,g=function d(p){var x=r()-i,b=p===!0,_,y,M,T;if(x>e&&(n+=x-t),i+=x,M=i-n,_=M-a,(_>0||b)&&(T=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,a+=_+(_>=s?4:s-_),y=1),b||(l=u(d)),y)for(m=0;m<o.length;m++)o[m](M,f,T,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Wm&&(!qc&&Um()&&(jn=qc=window,$f=jn.document||{},Vn.gsap=Gn,(jn.gsapVersions||(jn.gsapVersions=[])).push(Gn.version),Vm(Nl||jn.GreenSockGlobals||!jn.gsap&&jn||{}),c=jn.requestAnimationFrame),l&&h.sleep(),u=c||function(p){return setTimeout(p,a-h.time*1e3+1|0)},ga=1,g(2))},sleep:function(){(c?jn.cancelAnimationFrame:clearTimeout)(l),ga=0,u=pa},lagSmoothing:function(p,x){e=p||1/lt,t=Math.min(x,e,0)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,x,b){var _=x?function(y,M,T,E){p(y,M,T,E),h.remove(_)}:p;return h.remove(p),o[b?"unshift":"push"](_),_o(),_},remove:function(p,x){~(x=o.indexOf(p))&&o.splice(x,1)&&m>=x&&m--},_listeners:o},h}(),_o=function(){return!ga&&Un.wake()},nt={},Fv=/^[\d.\-M][\d.\-,\s]/,Iv=/["']/g,Bv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,u;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),t[i]=isNaN(u)?u.replace(Iv,"").trim():+u,i=l.substr(o+1).trim();return t},Uv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Ov=function(e){var t=(e+"").split("("),n=nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Bv(t[1])]:Uv(e).split(",").map($m)):nt._CE&&Fv.test(e)?nt._CE("",e):n},u0=function(e){return function(t){return 1-e(1-t)}},c0=function r(e,t){for(var n=e._first,i;n;)n instanceof yn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},fs=function(e,t){return e&&(Tt(e)?e:nt[e]||Ov(e))||t},As=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Sn(e,function(o){nt[o]=Vn[o]=s,nt[a=o.toLowerCase()]=n;for(var l in s)nt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=nt[o+"."+l]=s[l]}),s},f0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ou=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Hc*(Math.asin(1/i)||0),o=function(c){return c===1?1:i*Math.pow(2,-10*c)*cv((c-a)*s)+1},l=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:f0(o);return s=Hc/s,l.config=function(u,c){return r(e,u,c)},l},Nu=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:f0(n);return i.config=function(s){return r(e,s)},i};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;As(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});nt.Linear.easeNone=nt.none=nt.Linear.easeIn;As("Elastic",Ou("in"),Ou("out"),Ou());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};As("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);As("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});As("Circ",function(r){return-(Bm(1-r*r)-1)});As("Sine",function(r){return r===1?1:-uv(r*av)+1});As("Back",Nu("in"),Nu("out"),Nu());nt.SteppedEase=nt.steps=Vn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-lt;return function(o){return((i*Sa(0,a,o)|0)+s)*n}}};po.ease=nt["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zf+=r+","+r+"Params,"});var h0=function(e,t){this.id=lv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xm,this.set=t?t.getSetter:th},xo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,go(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),ga||Un.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,go(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(_o(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(pu(this,n),!s._dp||s.parent||Zm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===lt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Zh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Zh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?mo(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Vl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-lt?0:this._rts,this.totalTime(Sa(-this._delay,this._tDur,i),!0),du(this),_v(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_o(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=dv);var i=bn;return bn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Kh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Kh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Yn(this,n),Mn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Mn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-lt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-lt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Tt(n)?n:Ym,o=function(){var u=i.then;i.then=null,Tt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),s(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Wo(this)},r}();li(xo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1});var yn=function(r){Im(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Mn(n.sortChildren),yt&&Pi(n.parent||yt,Hi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Km(Hi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Qo(0,arguments,this),this},t.from=function(i,s,a){return Qo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Qo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Jo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new It(i,s,Yn(this,a),1),this},t.call=function(i,s,a){return Pi(this,It.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,u,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new It(i,a,Yn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,u,c){return a.runBackwards=1,Jo(a).immediateRender=Mn(a.immediateRender),this.staggerTo(i,s,a,o,l,u,c)},t.staggerFromTo=function(i,s,a,o,l,u,c,h){return o.startAt=a,Jo(o).immediateRender=Mn(o.immediateRender),this.staggerTo(i,s,o,l,u,c,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:$t(i),h=this._zTime<0!=i<0&&(this._initted||!u),f,m,g,d,p,x,b,_,y,M,T,E;if(this!==yt&&c>l&&i>=0&&(c=l),c!==this._tTime||a||h){if(o!==this._time&&u&&(c+=this._time-o,i+=this._time-o),f=c,y=this._start,_=this._ts,x=!_,h&&(u||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=$t(c%p),c===l?(d=this._repeat,f=u):(d=~~(c/p),d&&d===c/p&&(f=u,d--),f>u&&(f=u)),M=mo(this._tTime,p),!o&&this._tTime&&M!==d&&(M=d),T&&d&1&&(f=u-f,E=1),d!==M&&!this._lock){var v=T&&M&1,w=v===(T&&d&1);if(d<M&&(v=!v),o=v?0:u,this._lock=1,this.render(o||(E?0:$t(d*p)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,w&&(this._lock=2,o=v?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;c0(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=bv(this,$t(o),$t(f)),b&&(c-=f-(f=b._start))),this._tTime=c,this._time=f,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&(ni(this,"onStart"),this._tTime!==c))return this;if(f>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,a),f!==this._time||!this._ts&&!x){b=0,g&&(c+=this._zTime=-lt);break}}m=g}else{m=this._last;for(var P=i<0?i:f;m;){if(g=m._prev,(m._act||P<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,s,a||bn&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!x){b=0,g&&(c+=this._zTime=P?-lt:lt);break}}m=g}}if(b&&!s&&(this.pause(),b.render(f>=o?0:-lt)._zTime=f>=o?1:-1,this._ts))return this._start=y,du(this),this.render(i,s,a);this._onUpdate&&!s&&ni(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(y===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Lr(this,1),!s&&!(i<0&&!o)&&(c||o||!l)&&(ni(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Qi(s)||(s=Yn(this,s,i)),!(i instanceof xo)){if(sn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Gt(i))return this.addLabel(i,s);if(Tt(i))i=It.delayedCall(0,i);else return this}return this!==i?Pi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ei);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof It?s&&l.push(u):(a&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,s,a)))),u=u._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Gt(i)?this.removeLabel(i):Tt(i)?this.killTweensOf(i):(hu(this,i),i===this._recent&&(this._recent=this._last),cs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(Un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Yn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=It.delayedCall(0,s||pa,a);return o.data="isPause",this._hasPause=1,Pi(this,o,Yn(this,i))},t.removePause=function(i){var s=this._first;for(i=Yn(this,i);s;)s._start===i&&s.data==="isPause"&&Lr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)mr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ti(i),l=this._first,u=Qi(s),c;l;)l instanceof It?pv(l._targets,o)&&(u?(!mr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(c=l.getTweensOf(o,s)).length&&a.push.apply(a,c),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Yn(a,i),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=It.to(a,li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||lt,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());g._dur!==p&&go(g,p,0,1).render(g._time,!0,!0),m=1}c&&c.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,li({startAt:{time:Yn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Jh(this,Yn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Jh(this,Yn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+lt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,u;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(u in l)l[u]>=a&&(l[u]+=i);return cs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),cs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=ei,u,c,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Pi(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(s-=c,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=c/a._ts,a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=u;go(a,a===yt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(yt._ts&&(qm(yt,Vl(i,yt)),Hm=Un.frame),Un.frame>=Yh){Yh+=zn.autoSleep||120;var s=yt._first;if((!s||!s._ts)&&zn.autoSleep&&Un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Un.sleep()}}},e}(xo);li(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Nv=function(e,t,n,i,s,a,o){var l=new wn(this._pt,e,t,0,1,x0,null,s),u=0,c=0,h,f,m,g,d,p,x,b;for(l.b=n,l.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=ma(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),f=n.match(Iu)||[];h=Iu.exec(i);)g=h[0],d=i.substring(u,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[c++]&&(p=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:d||c===1?d:",",s:p,c:g.charAt(1)==="="?ro(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},u=Iu.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=o,(zm.test(i)||x)&&(l.e=0),this._pt=l,l},Jf=function(e,t,n,i,s,a,o,l,u,c){Tt(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:Tt(h)?u?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,m=Tt(h)?u?Gv:g0:eh,g;if(Gt(i)&&(~i.indexOf("random(")&&(i=ma(i)),i.charAt(1)==="="&&(g=ro(f,i)+(tn(f)||0),(g||g===0)&&(i=g))),!c||f!==i||Qc)return!isNaN(f*i)&&i!==""?(g=new wn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Xv:_0,0,m),u&&(g.fp=u),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Yf(t,i),Nv.call(this,e,t,f,i,m,l||zn.stringFilter,u))},zv=function(e,t,n,i,s){if(Tt(e)&&(e=ea(e,s,t,n,i)),!Oi(e)||e.style&&e.nodeType||sn(e)||Om(e))return Gt(e)?ea(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=ea(e[o],s,t,n,i);return a},d0=function(e,t,n,i,s,a){var o,l,u,c;if(Fn[e]&&(o=new Fn[e]).init(s,o.rawVars?t[e]:zv(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new wn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ks))for(u=n._ptLookup[n._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=l;return o},mr,Qc,Qf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,u=i.onUpdate,c=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=e._dur,x=e._startAt,b=e._targets,_=e.parent,y=_&&_.data==="nested"?_.vars.targets:b,M=e._overwrite==="auto"&&!Xf,T=e.timeline,E,v,w,P,O,Z,k,B,q,G,Y,I,se;if(T&&(!g||!s)&&(s="none"),e._ease=fs(s,po.ease),e._yEase=m?u0(fs(m===!0?s:m,po.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!T&&!!i.runBackwards,!T||g&&!i.stagger){if(B=b[0]?us(b[0]).harness:0,I=B&&i[B.prop],E=Wl(i,jf),x&&(x._zTime<0&&x.progress(1),t<0&&f&&o&&!d?x.render(-1,!0):x.revert(f&&p?bl:hv),x._lazy=0),a){if(Lr(e._startAt=It.set(b,li({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:Mn(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:h,stagger:0},a))),e._startAt._dp=0,t<0&&(bn||!o&&!d)&&e._startAt.revert(bl),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!x){if(t&&(o=!1),w=li({overwrite:!1,data:"isFromStart",lazy:o&&Mn(l),immediateRender:o,stagger:0,parent:_},E),I&&(w[B.prop]=I),Lr(e._startAt=It.set(b,w)),e._startAt._dp=0,t<0&&(bn?e._startAt.revert(bl):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,lt,lt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Mn(l)||l&&!p,v=0;v<b.length;v++){if(O=b[v],k=O._gsap||Kf(b)[v]._gsap,e._ptLookup[v]=G={},$c[k.id]&&Tr.length&&kl(),Y=y===b?v:y.indexOf(O),B&&(q=new B).init(O,I||E,e,Y,y)!==!1&&(e._pt=P=new wn(e._pt,O,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(R){G[R]=P}),q.priority&&(Z=1)),!B||I)for(w in E)Fn[w]&&(q=d0(w,E,e,Y,O,y))?q.priority&&(Z=1):G[w]=P=Jf.call(e,O,w,"get",E[w],Y,y,0,i.stringFilter);e._op&&e._op[v]&&e.kill(O,e._op[v]),M&&e._pt&&(mr=e,yt.killTweensOf(O,G,e.globalTime(t)),se=!e.parent,mr=0),e._pt&&l&&($c[k.id]=1)}Z&&v0(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!se,g&&t<=0&&T.render(ei,!0,!0)},kv=function(e,t,n,i,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,c,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Qc=1,e.vars[t]="+=0",Qf(e,o),Qc=0,1;l.push(u)}for(f=l.length;f--;)c=l[f],u=c._pt||c,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,c.e&&(c.e=Ct(n)+tn(c.e)),c.b&&(c.b=u.s+tn(c.b))},Wv=function(e,t){var n=e[0]?us(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=xs({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Vv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(sn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,u){return o.push({t:u/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ea=function(e,t,n,i,s){return Tt(e)?e.call(t,n,i,s):Gt(e)&&~e.indexOf("random(")?ma(e):e},p0=Zf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",m0={};Sn(p0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return m0[r]=1});var It=function(r){Im(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Jo(i))||this;var l=o.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,x=l.yoyoEase,b=i.parent||yt,_=(sn(n)||Om(n)?Qi(n[0]):"length"in i)?[n]:ti(n),y,M,T,E,v,w,P,O;if(o._targets=_.length?Kf(_):zl("GSAP target "+n+" not found. https://greensock.com",!zn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||f||Ua(u)||Ua(c)){if(i=o.vars,y=o.timeline=new yn({data:"nested",defaults:d||{},targets:b&&b.data==="nested"?b.vars.targets:_}),y.kill(),y.parent=y._dp=Hi(o),y._start=0,f||Ua(u)||Ua(c)){if(E=_.length,P=f&&t0(f),Oi(f))for(v in f)~p0.indexOf(v)&&(O||(O={}),O[v]=f[v]);for(M=0;M<E;M++)T=Wl(i,m0),T.stagger=0,x&&(T.yoyoEase=x),O&&xs(T,O),w=_[M],T.duration=+ea(u,Hi(o),M,w,_),T.delay=(+ea(c,Hi(o),M,w,_)||0)-o._delay,!f&&E===1&&T.delay&&(o._delay=c=T.delay,o._start+=c,T.delay=0),y.to(w,T,P?P(M,w,_):0),y._ease=nt.none;y.duration()?u=c=0:o.timeline=0}else if(g){Jo(li(y.vars.defaults,{ease:"none"})),y._ease=fs(g.ease||i.ease||"none");var Z=0,k,B,q;if(sn(g))g.forEach(function(G){return y.to(_,G,">")}),y.duration();else{T={};for(v in g)v==="ease"||v==="easeEach"||Vv(v,g[v],T,g.easeEach);for(v in T)for(k=T[v].sort(function(G,Y){return G.t-Y.t}),Z=0,M=0;M<k.length;M++)B=k[M],q={ease:B.e,duration:(B.t-(M?k[M-1].t:0))/100*u},q[v]=B.v,y.to(_,q,Z),Z+=q.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||o.duration(u=y.duration())}else o.timeline=0;return m===!0&&!Xf&&(mr=Hi(o),yt.killTweensOf(_),mr=0),Pi(b,Hi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!u&&!g&&o._start===$t(b._time)&&Mn(h)&&xv(Hi(o))&&b.data!=="nested")&&(o._tTime=-lt,o.render(Math.max(0,-c)||0)),p&&Km(Hi(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,u=this._dur,c=i<0,h=i>l-lt&&!c?l:i<lt?0:i,f,m,g,d,p,x,b,_,y;if(!u)yv(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(f=h,_=this.timeline,this._repeat){if(d=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(d*100+i,s,a);if(f=$t(h%d),h===l?(g=this._repeat,f=u):(g=~~(h/d),g&&g===h/d&&(f=u,g--),f>u&&(f=u)),x=this._yoyo&&g&1,x&&(y=this._yEase,f=u-f),p=mo(this._tTime,d),f===o&&!a&&this._initted)return this._tTime=h,this;g!==p&&(_&&this._yEase&&c0(_,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=a=1,this.render($t(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Jm(this,c?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time)return this;if(u!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(f/u),this._from&&(this.ratio=b=1-b),f&&!o&&!s&&(ni(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;_&&_.render(i<0?i:!f&&x?-lt:_._dur*_._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(c&&Yc(this,i,s,a),ni(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&ni(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&Yc(this,i,!0,!0),(i||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Lr(this,1),!s&&!(c&&!o)&&(h||o||x)&&(ni(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o){ga||Un.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Qf(this,l),u=this._ease(l/this._dur),kv(this,i,s,a,o,u,l)?this.resetTo(i,s,a,o):(pu(this,0),this.parent||jm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Wo(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,mr&&mr.vars.overwrite!==!0)._first||Wo(this),this.parent&&a!==this.timeline.totalDuration()&&go(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ti(i):o,u=this._ptLookup,c=this._pt,h,f,m,g,d,p,x;if((!s||s==="all")&&gv(o,l))return s==="all"&&(this._pt=0),Wo(this);for(h=this._op=this._op||[],s!=="all"&&(Gt(s)&&(d={},Sn(s,function(b){return d[b]=1}),s=d),s=Wv(o,s)),x=o.length;x--;)if(~l.indexOf(o[x])){f=u[x],s==="all"?(h[x]=s,g=f,m={}):(m=h[x]=h[x]||{},g=s);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&hu(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&c&&Wo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Qo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Qo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return yt.killTweensOf(i,s,a)},e}(xo);li(It.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(r){It[r]=function(){var e=new yn,t=Zc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var eh=function(e,t,n){return e[t]=n},g0=function(e,t,n){return e[t](n)},Gv=function(e,t,n,i){return e[t](i.fp,n)},Hv=function(e,t,n){return e.setAttribute(t,n)},th=function(e,t){return Tt(e[t])?g0:qf(e[t])&&e.setAttribute?Hv:eh},_0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Xv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},x0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},nh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},qv=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},$v=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?hu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Yv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},v0=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},wn=function(){function r(t,n,i,s,a,o,l,u,c){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||_0,this.d=l||this,this.set=u||eh,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Yv,this.m=n,this.mt=s,this.tween=i},r}();Sn(Zf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return jf[r]=1});Vn.TweenMax=Vn.TweenLite=It;Vn.TimelineLite=Vn.TimelineMax=yn;yt=new yn({sortChildren:!1,defaults:po,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=l0;var vo=[],Sl={},jv=[],ed=0,zu=function(e){return(Sl[e]||jv).map(function(t){return t()})},ef=function(){var e=Date.now(),t=[];e-ed>2&&(zu("matchMediaInit"),vo.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,u;for(o in i)a=jn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,u=1);u&&(n.revert(),l&&t.push(n))}),zu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),ed=e,zu("matchMedia"))},y0=function(){function r(t,n){this.selector=n&&Kc(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Tt(n)&&(s=i,i=n,n=Tt);var a=this,o=function(){var u=Pt,c=a.selector,h;return u&&u!==a&&u.data.push(a),s&&(a.selector=Kc(s)),Pt=a,h=i.apply(a,arguments),Tt(h)&&a._r.push(h),Pt=u,a.selector=c,a.isReverted=!1,h};return a.last=o,n===Tt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=Pt;Pt=null,n(this),Pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof It&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof xo)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=vo.indexOf(this);~o&&vo.splice(o,1)}},e.revert=function(n){this.kill(n||{})},r}(),Zv=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Oi(n)||(n={matches:n});var a=new y0(0,s||this.scope),o=a.conditions={},l,u,c;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(u in n)u==="all"?c=1:(l=jn.matchMedia(n[u]),l&&(vo.indexOf(a)<0&&vo.push(a),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(ef):l.addEventListener("change",ef)));return c&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Gl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Lv(i)})},timeline:function(e){return new yn(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Gt(e)&&(e=ti(e)[0]);var s=us(e||{}).get,a=n?Ym:$m;return n==="native"&&(n=""),e&&(t?a((Fn[t]&&Fn[t].get||s)(e,t,n,i)):function(o,l,u){return a((Fn[o]&&Fn[o].get||s)(e,o,l,u))})},quickSetter:function(e,t,n){if(e=ti(e),e.length>1){var i=e.map(function(c){return Gn.quickSetter(c,t,n)}),s=i.length;return function(c){for(var h=s;h--;)i[h](c)}}e=e[0]||{};var a=Fn[t],o=us(e),l=o.harness&&(o.harness.aliases||{})[t]||t,u=a?function(c){var h=new a;Ks._pt=0,h.init(e,n?c+n:c,Ks,0,[e]),h.render(1,h),Ks._pt&&nh(1,Ks)}:o.set(e,l);return a?u:function(c){return u(e,l,n?c+n:c,o,1)}},quickTo:function(e,t,n){var i,s=Gn.to(e,xs((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,u,c){return s.resetTo(t,l,u,c)};return a.tween=s,a},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=fs(e.ease,po.ease)),jh(po,e||{})},config:function(e){return jh(zn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Fn[o]&&!Vn[o]&&zl(t+" effect requires "+o+" plugin.")}),Bu[t]=function(o,l,u){return n(ti(o),li(l||{},s),u)},a&&(yn.prototype[t]=function(o,l,u){return this.add(Bu[t](o,Oi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){nt[e]=fs(t)},parseEase:function(e,t){return arguments.length?fs(e,t):nt},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new yn(e),i,s;for(n.smoothChildTiming=Mn(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,i=yt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof It&&i.vars.onComplete===i._targets[0]))&&Pi(n,i,i._start-i._delay),i=s;return Pi(yt,n,0),n},context:function(e,t){return e?new y0(e,t):Pt},matchMedia:function(e){return new Zv(e)},matchMediaRefresh:function(){return vo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ef()},addEventListener:function(e,t){var n=Sl[e]||(Sl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Sl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Cv,wrapYoyo:Dv,distribute:t0,random:i0,snap:n0,normalize:Av,getUnit:tn,clamp:Sv,splitColor:o0,toArray:ti,selector:Kc,mapRange:s0,pipe:Tv,unitize:Ev,interpolate:Pv,shuffle:e0},install:Vm,effects:Bu,ticker:Un,updateRoot:yn.updateRoot,plugins:Fn,globalTimeline:yt,core:{PropTween:wn,globals:Gm,Tween:It,Timeline:yn,Animation:xo,getCache:us,_removeLinkedListItem:hu,reverting:function(){return bn},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return Xf=e}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Gl[r]=It[r]});Un.add(yn.updateRoot);Ks=Gl.to({},{duration:0});var Kv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Jv=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Kv(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},ku=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,u;if(Gt(s)&&(l={},Sn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}Jv(o,s)}}}},Gn=Gl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)bn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ku("roundProps",Jc),ku("modifiers"),ku("snap",n0))||Gl;It.version=yn.version=Gn.version="3.11.3";Wm=1;Um()&&_o();nt.Power0;nt.Power1;nt.Power2;nt.Power3;nt.Power4;nt.Linear;nt.Quad;nt.Cubic;nt.Quart;nt.Quint;nt.Strong;nt.Elastic;nt.Back;nt.SteppedEase;nt.Bounce;nt.Sine;nt.Expo;nt.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var td,gr,so,ih,is,nd,rh,Qv=function(){return typeof window<"u"},er={},$r=180/Math.PI,oo=Math.PI/180,Ds=Math.atan2,id=1e8,sh=/([A-Z])/g,e3=/(left|right|width|margin|padding|x)/i,t3=/[\s,\(]\S/,Yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},n3=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},i3=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},r3=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},b0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},M0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},s3=function(e,t,n){return e.style[t]=n},o3=function(e,t,n){return e.style.setProperty(t,n)},a3=function(e,t,n){return e._gsap[t]=n},l3=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},u3=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},c3=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},bt="transform",yi=bt+"Origin",f3=function(e,t){var n=this,i=this.target,s=i.style;if(e in er){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Yi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Xi(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Xi(i,e)),this.props.indexOf(bt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(yi,t,"")),e=bt}(s||t)&&this.props.push(e,t,s[e])},S0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},h3=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(sh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=rh(),s&&!s.isStart&&!n[bt]&&(S0(n),i.uncache=1)}},w0=function(e,t){var n={target:e,props:[],revert:h3,save:f3};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},T0,nf=function(e,t){var n=gr.createElementNS?gr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gr.createElement(e);return n.style?n:gr.createElement(e)},Ii=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(sh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,yo(t)||t,1)||""},rd="O,Moz,ms,Ms,Webkit".split(","),yo=function(e,t,n){var i=t||is,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(rd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?rd[a]:"")+e},rf=function(){Qv()&&window.document&&(td=window,gr=td.document,so=gr.documentElement,is=nf("div")||{style:{}},nf("div"),bt=yo(bt),yi=bt+"Origin",is.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",T0=!!yo("perspective"),rh=Gn.core.reverting,ih=1)},Wu=function r(e){var t=nf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(so.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),so.removeChild(t),this.style.cssText=s,a},sd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},E0=function(e){var t;try{t=e.getBBox()}catch{t=Wu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Wu||(t=Wu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+sd(e,["x","cx","x1"])||0,y:+sd(e,["y","cy","y1"])||0,width:0,height:0}:t},A0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&E0(e))},_a=function(e,t){if(t){var n=e.style;t in er&&t!==yi&&(t=bt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(sh,"-$1").toLowerCase())):n.removeAttribute(t)}},_r=function(e,t,n,i,s,a){var o=new wn(e._pt,t,n,0,1,a?M0:b0);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},od={deg:1,rad:1,turn:1},d3={grid:1,flex:1},Rr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=is.style,l=e3.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,x;return i===a||!s||od[i]||od[a]?s:(a!=="px"&&!f&&(s=r(e,t,n,"px")),x=e.getCTM&&A0(e),(m||a==="%")&&(er[t]||~t.indexOf("adius"))?(g=x?e.getBBox()[l?"width":"height"]:e[c],Ct(m?s/g*h:s/100*g)):(o[l?"width":"height"]=h+(f?a:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,x&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===gr||!d.appendChild)&&(d=gr.body),p=d._gsap,p&&m&&p.width&&l&&p.time===Un.time&&!p.uncache?Ct(s/p.width*h):((m||a==="%")&&!d3[Ii(d,"display")]&&(o.position=Ii(e,"position")),d===e&&(o.position="static"),d.appendChild(is),g=is[c],d.removeChild(is),o.position="absolute",l&&m&&(p=us(d),p.time=Un.time,p.width=d[c]),Ct(f?g*s/h:g&&s?h/g*s:0))))},Xi=function(e,t,n,i){var s;return ih||rf(),t in Yi&&t!=="transform"&&(t=Yi[t],~t.indexOf(",")&&(t=t.split(",")[0])),er[t]&&t!=="transform"?(s=va(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Xl(Ii(e,yi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Hl[t]&&Hl[t](e,t,n)||Ii(e,t)||Xm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Rr(e,t,s,n)+n:s},p3=function(e,t,n,i){if(!n||n==="none"){var s=yo(t,e,1),a=s&&Ii(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Ii(e,"borderTopColor"))}var o=new wn(this._pt,e.style,t,0,1,x0),l=0,u=0,c,h,f,m,g,d,p,x,b,_,y,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Ii(e,t)||i,e.style[t]=n),c=[n,i],l0(c),n=c[0],i=c[1],f=n.match(Zs)||[],M=i.match(Zs)||[],M.length){for(;h=Zs.exec(i);)p=h[0],b=i.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(d=f[u++]||"")&&(m=parseFloat(d)||0,y=d.substr((m+"").length),p.charAt(1)==="="&&(p=ro(m,p)+y),x=parseFloat(p),_=p.substr((x+"").length),l=Zs.lastIndex-_.length,_||(_=_||zn.units[t]||y,l===i.length&&(i+=_,o.e+=_)),y!==_&&(m=Rr(e,t,d,_)||0),o._pt={_next:o._pt,p:b||u===1?b:",",s:m,c:x-m,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?M0:b0;return zm.test(i)&&(o.e=0),this._pt=o,o},ad={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},m3=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ad[n]||n,t[1]=ad[i]||i,t.join(" ")},g3=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,u;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],er[o]&&(l=1,o=o==="transformOrigin"?yi:bt),_a(n,o);l&&(_a(n,bt),a&&(a.svg&&n.removeAttribute("transform"),va(n,1),a.uncache=1,S0(i)))}},Hl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new wn(e._pt,t,n,0,0,g3);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},xa=[1,0,0,1,0,0],C0={},D0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ld=function(e){var t=Ii(e,bt);return D0(t)?xa:t.substr(7).match(Nm).map(Ct)},oh=function(e,t){var n=e._gsap||us(e),i=e.style,s=ld(e),a,o,l,u;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?xa:s):(s===xa&&!e.offsetParent&&e!==so&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(u=1,o=e.nextElementSibling,so.appendChild(e)),s=ld(e),l?i.display=l:_a(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):so.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},sf=function(e,t,n,i,s,a){var o=e._gsap,l=s||oh(e,!0),u=o.xOrigin||0,c=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],x=l[4],b=l[5],_=t.split(" "),y=parseFloat(_[0])||0,M=parseFloat(_[1])||0,T,E,v,w;n?l!==xa&&(E=m*p-g*d)&&(v=y*(p/E)+M*(-d/E)+(d*b-p*x)/E,w=y*(-g/E)+M*(m/E)-(m*b-g*x)/E,y=v,M=w):(T=E0(e),y=T.x+(~_[0].indexOf("%")?y/100*T.width:y),M=T.y+(~(_[1]||_[0]).indexOf("%")?M/100*T.height:M)),i||i!==!1&&o.smooth?(x=y-u,b=M-c,o.xOffset=h+(x*m+b*d)-x,o.yOffset=f+(x*g+b*p)-b):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[yi]="0px 0px",a&&(_r(a,o,"xOrigin",u,y),_r(a,o,"yOrigin",c,M),_r(a,o,"xOffset",h,o.xOffset),_r(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},va=function(e,t){var n=e._gsap||new h0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),u=Ii(e,yi)||"0",c,h,f,m,g,d,p,x,b,_,y,M,T,E,v,w,P,O,Z,k,B,q,G,Y,I,se,R,X,V,fe,ue,me;return c=h=f=d=p=x=b=_=y=0,m=g=1,n.svg=!!(e.getCTM&&A0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[bt]!=="none"?l[bt]:"")),i.scale=i.rotate=i.translate="none"),E=oh(e,n.svg),n.svg&&(n.uncache?(I=e.getBBox(),u=n.xOrigin-I.x+"px "+(n.yOrigin-I.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),sf(e,Y||u,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),M=n.xOrigin||0,T=n.yOrigin||0,E!==xa&&(O=E[0],Z=E[1],k=E[2],B=E[3],c=q=E[4],h=G=E[5],E.length===6?(m=Math.sqrt(O*O+Z*Z),g=Math.sqrt(B*B+k*k),d=O||Z?Ds(Z,O)*$r:0,b=k||B?Ds(k,B)*$r+d:0,b&&(g*=Math.abs(Math.cos(b*oo))),n.svg&&(c-=M-(M*O+T*k),h-=T-(M*Z+T*B))):(me=E[6],fe=E[7],R=E[8],X=E[9],V=E[10],ue=E[11],c=E[12],h=E[13],f=E[14],v=Ds(me,V),p=v*$r,v&&(w=Math.cos(-v),P=Math.sin(-v),Y=q*w+R*P,I=G*w+X*P,se=me*w+V*P,R=q*-P+R*w,X=G*-P+X*w,V=me*-P+V*w,ue=fe*-P+ue*w,q=Y,G=I,me=se),v=Ds(-k,V),x=v*$r,v&&(w=Math.cos(-v),P=Math.sin(-v),Y=O*w-R*P,I=Z*w-X*P,se=k*w-V*P,ue=B*P+ue*w,O=Y,Z=I,k=se),v=Ds(Z,O),d=v*$r,v&&(w=Math.cos(v),P=Math.sin(v),Y=O*w+Z*P,I=q*w+G*P,Z=Z*w-O*P,G=G*w-q*P,O=Y,q=I),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,x=180-x),m=Ct(Math.sqrt(O*O+Z*Z+k*k)),g=Ct(Math.sqrt(G*G+me*me)),v=Ds(q,G),b=Math.abs(v)>2e-4?v*$r:0,y=ue?1/(ue<0?-ue:ue):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!D0(Ii(e,bt)),Y&&e.setAttribute("transform",Y))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(m*=-1,b+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Ct(m),n.scaleY=Ct(g),n.rotation=Ct(d)+o,n.rotationX=Ct(p)+o,n.rotationY=Ct(x)+o,n.skewX=b+o,n.skewY=_+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(u.split(" ")[2])||0)&&(i[yi]=Xl(u)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?x3:T0?P0:_3,n.uncache=0,n},Xl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vu=function(e,t,n){var i=tn(t);return Ct(parseFloat(t)+parseFloat(Rr(e,"x",n+"px",i)))+i},_3=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,P0(e,t)},Wr="0deg",Fo="0px",Vr=") ",P0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,u=n.rotation,c=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,x=n.force3D,b=n.target,_=n.zOrigin,y="",M=x==="auto"&&e&&e!==1||x===!0;if(_&&(h!==Wr||c!==Wr)){var T=parseFloat(c)*oo,E=Math.sin(T),v=Math.cos(T),w;T=parseFloat(h)*oo,w=Math.cos(T),a=Vu(b,a,E*w*-_),o=Vu(b,o,-Math.sin(T)*-_),l=Vu(b,l,v*w*-_+_)}p!==Fo&&(y+="perspective("+p+Vr),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(M||a!==Fo||o!==Fo||l!==Fo)&&(y+=l!==Fo||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Vr),u!==Wr&&(y+="rotate("+u+Vr),c!==Wr&&(y+="rotateY("+c+Vr),h!==Wr&&(y+="rotateX("+h+Vr),(f!==Wr||m!==Wr)&&(y+="skew("+f+", "+m+Vr),(g!==1||d!==1)&&(y+="scale("+g+", "+d+Vr),b.style[bt]=y||"translate(0, 0)"},x3=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,u=n.skewX,c=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,x=n.yOffset,b=n.forceCSS,_=parseFloat(a),y=parseFloat(o),M,T,E,v,w;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=oo,u*=oo,M=Math.cos(l)*h,T=Math.sin(l)*h,E=Math.sin(l-u)*-f,v=Math.cos(l-u)*f,u&&(c*=oo,w=Math.tan(u-c),w=Math.sqrt(1+w*w),E*=w,v*=w,c&&(w=Math.tan(c),w=Math.sqrt(1+w*w),M*=w,T*=w)),M=Ct(M),T=Ct(T),E=Ct(E),v=Ct(v)):(M=h,v=f,T=E=0),(_&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(_=Rr(m,"x",a,"px"),y=Rr(m,"y",o,"px")),(g||d||p||x)&&(_=Ct(_+g-(g*M+d*E)+p),y=Ct(y+d-(g*T+d*v)+x)),(i||s)&&(w=m.getBBox(),_=Ct(_+i/100*w.width),y=Ct(y+s/100*w.height)),w="matrix("+M+","+T+","+E+","+v+","+_+","+y+")",m.setAttribute("transform",w),b&&(m.style[bt]=w)},v3=function(e,t,n,i,s){var a=360,o=Gt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?$r:1),u=l-i,c=i+u+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),h==="cw"&&u<0?u=(u+a*id)%a-~~(u/a)*a:h==="ccw"&&u>0&&(u=(u-a*id)%a-~~(u/a)*a)),e._pt=f=new wn(e._pt,t,n,i,u,n3),f.e=c,f.u="deg",e._props.push(n),f},ud=function(e,t){for(var n in t)e[n]=t[n];return e},y3=function(e,t,n){var i=ud({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,u,c,h,f,m,g;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),a[bt]=t,o=va(n,1),_a(n,bt),n.setAttribute("transform",u)):(u=getComputedStyle(n)[bt],a[bt]=t,o=va(n,1),a[bt]=u);for(l in er)u=i[l],c=o[l],u!==c&&s.indexOf(l)<0&&(m=tn(u),g=tn(c),h=m!==g?Rr(n,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new wn(e._pt,o,l,h,f-h,tf),e._pt.u=g||0,e._props.push(l));ud(o,i)};Sn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Hl[e>1?"border"+r:r]=function(o,l,u,c,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return Xi(o,g,u)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(c+"").split(" "),m={},a.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),o.init(l,m,h)}});var L0={name:"css",register:rf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,u,c,h,f,m,g,d,p,x,b,_,y,M,T,E,v;ih||rf(),this.styles=this.styles||w0(e),v=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(c=t[d],!(Fn[d]&&d0(d,t,n,i,e,s)))){if(m=typeof c,g=Hl[d],m==="function"&&(c=c.call(n,i,e,s),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=ma(c)),g)g(this,e,d,c,n)&&(E=1);else if(d.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(d)+"").trim(),c+="",Er.lastIndex=0,Er.test(u)||(p=tn(u),x=tn(c)),x?p!==x&&(u=Rr(e,d,u,x)+x):p&&(c+=p),this.add(o,"setProperty",u,c,i,s,0,0,d),a.push(d),v.push(d,0,o[d]);else if(m!=="undefined"){if(l&&d in l?(u=typeof l[d]=="function"?l[d].call(n,i,e,s):l[d],Gt(u)&&~u.indexOf("random(")&&(u=ma(u)),tn(u+"")||(u+=zn.units[d]||tn(Xi(e,d))||""),(u+"").charAt(1)==="="&&(u=Xi(e,d))):u=Xi(e,d),f=parseFloat(u),b=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),b&&(c=c.substr(2)),h=parseFloat(c),d in Yi&&(d==="autoAlpha"&&(f===1&&Xi(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,o.visibility),_r(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Yi[d],~d.indexOf(",")&&(d=d.split(",")[0]))),_=d in er,_){if(this.styles.save(d),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||va(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new wn(this._pt,o,bt,0,1,M.renderTransform,M,0,-1),y.dep=1),d==="scale")this._pt=new wn(this._pt,M,"scaleY",f,(b?ro(f,b+h):h)-f||0,tf),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(yi,0,o[yi]),c=m3(c),M.svg?sf(e,c,0,T,0,this):(x=parseFloat(c.split(" ")[2])||0,x!==M.zOrigin&&_r(this,M,"zOrigin",M.zOrigin,x),_r(this,o,d,Xl(u),Xl(c)));continue}else if(d==="svgOrigin"){sf(e,c,1,T,0,this);continue}else if(d in C0){v3(this,M,d,f,b?ro(f,b+c):c);continue}else if(d==="smoothOrigin"){_r(this,M,"smooth",M.smooth,c);continue}else if(d==="force3D"){M[d]=c;continue}else if(d==="transform"){y3(this,c,e);continue}}else d in o||(d=yo(d)||d);if(_||(h||h===0)&&(f||f===0)&&!t3.test(c)&&d in o)p=(u+"").substr((f+"").length),h||(h=0),x=tn(c)||(d in zn.units?zn.units[d]:p),p!==x&&(f=Rr(e,d,u,x)),this._pt=new wn(this._pt,_?M:o,d,f,(b?ro(f,b+h):h)-f,!_&&(x==="px"||d==="zIndex")&&t.autoRound!==!1?r3:tf),this._pt.u=x||0,p!==x&&x!=="%"&&(this._pt.b=u,this._pt.r=i3);else if(d in o)p3.call(this,e,d,u,b?b+c:c);else if(d in e)this.add(e,d,u||e[d],b?b+c:c,i,s);else{Yf(d,c);continue}_||(d in o?v.push(d,0,o[d]):v.push(d,1,u||e[d])),a.push(d)}}E&&v0(this)},render:function(e,t){if(t.tween._time||!rh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xi,aliases:Yi,getSetter:function(e,t,n){var i=Yi[t];return i&&i.indexOf(",")<0&&(t=i),t in er&&t!==yi&&(e._gsap.x||Xi(e,"x"))?n&&nd===n?t==="scale"?l3:a3:(nd=n||{})&&(t==="scale"?u3:c3):e.style&&!qf(e.style[t])?s3:~t.indexOf("-")?o3:th(e,t)},core:{_removeProperty:_a,_getMatrix:oh}};Gn.utils.checkPrefix=yo;Gn.core.getStyleSaver=w0;(function(r,e,t,n){var i=Sn(r+","+e+","+t,function(s){er[s]=1});Sn(e,function(s){zn.units[s]="deg",C0[s]=1}),Yi[i[13]]=r+","+e,Sn(n,function(s){var a=s.split(":");Yi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){zn.units[r]="px"});Gn.registerPlugin(L0);var ri=Gn.registerPlugin(L0)||Gn;ri.core.Tween;const b3=Es({__name:"FirstView",setup(r){const e=pr(),t=pr(),n=pr(),i=pr(window.innerHeight);return Br(()=>{if(t.value){const a=t.value.textContent.split("").map(l=>'<span style="display:inline-block">'+l+"</span>");t.value.innerHTML=a.join(""),ri.timeline().set(n.value,{x:"-50vw",y:"-20vh"}).to(n.value,{y:0,duration:1,ease:"Bounce.easeOut"}).to(n.value,{x:"54vw",duration:3,delay:-1,ease:"Power.easeOut"}).fromTo(".first-view span",{opacity:0,y:-10},{opacity:1,y:0,duration:1,delay:-2.6,stagger:{each:.09},ease:"Bounce.easeOut"}).to(e.value,{autoAlpha:0,scale:1.2,duration:.6,ease:"Power.easeOut"})}}),(s,a)=>(Qn(),Ji("div",{class:"first-view",ref_key:"base",ref:e,style:Kl(`height:${i.value}px`)},[We("div",{ref_key:"ball",ref:n,class:"ball"},null,512),We("h1",{ref_key:"headingText",ref:t},"Frontend\u7802\u904A\u3073\u3057\u3066\u307F\u305F",512)],4))}});const Cs=(r,e)=>{const t=r.__vccOpts||r;for(const[n,i]of e)t[n]=i;return t},M3=Cs(b3,[["__scopeId","data-v-45231e9f"]]);function cd(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function S3(r,e,t){return e&&cd(r.prototype,e),t&&cd(r,t),r}/*!
 * Observer 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn,of,On,xr,vr,ao,R0,Yr,ta,F0,ji,hi,I0=function(){return rn||typeof window<"u"&&(rn=window.gsap)&&rn.registerPlugin&&rn},B0=1,Js=[],tt=[],Bi=[],na=Date.now,af=function(e,t){return t},w3=function(){var e=ta.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,tt),i.push.apply(i,Bi),tt=n,Bi=i,af=function(a,o){return t[a](o)}},Ar=function(e,t){return~Bi.indexOf(e)&&Bi[Bi.indexOf(e)+1][t]},ia=function(e){return!!~F0.indexOf(e)},gn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Oa="scrollLeft",Na="scrollTop",lf=function(){return ji&&ji.isPressed||tt.cache++},ql=function(e,t){var n=function i(s){if(s||s===0){B0&&(On.history.scrollRestoration="manual");var a=ji&&ji.isPressed;s=i.v=Math.round(s)||(ji&&ji.iOS?1:0),e(s),i.cacheID=tt.cache,a&&af("ss",s)}else(t||tt.cache!==i.cacheID||af("ref"))&&(i.cacheID=tt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},pn={s:Oa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ql(function(r){return arguments.length?On.scrollTo(r,Bt.sc()):On.pageXOffset||xr[Oa]||vr[Oa]||ao[Oa]||0})},Bt={s:Na,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:pn,sc:ql(function(r){return arguments.length?On.scrollTo(pn.sc(),r):On.pageYOffset||xr[Na]||vr[Na]||ao[Na]||0})},xn=function(e){return rn.utils.toArray(e)[0]||(typeof e=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Fr=function(e,t){var n=t.s,i=t.sc;ia(e)&&(e=xr.scrollingElement||vr);var s=tt.indexOf(e),a=i===Bt.sc?1:2;!~s&&(s=tt.push(e)-1),tt[s+a]||e.addEventListener("scroll",lf);var o=tt[s+a],l=o||(tt[s+a]=ql(Ar(e,n),!0)||(ia(e)?i:ql(function(u){return arguments.length?e[n]=u:e[n]})));return l.target=e,o||(l.smooth=rn.getProperty(e,"scrollBehavior")==="smooth"),l},uf=function(e,t,n){var i=e,s=e,a=na(),o=a,l=t||50,u=Math.max(500,l*3),c=function(g,d){var p=na();d||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(g){var d=o,p=s,x=na();return(g||g===0)&&g!==i&&c(g),a===o||x-o>u?0:(i+(n?p:-p))/((n?x:a)-d)*1e3};return{update:c,reset:h,getVelocity:f}},Io=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},fd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},U0=function(){ta=rn.core.globals().ScrollTrigger,ta&&ta.core&&w3()},O0=function(e){return rn=e||I0(),rn&&typeof document<"u"&&document.body&&(On=window,xr=document,vr=xr.documentElement,ao=xr.body,F0=[On,xr,vr,ao],rn.utils.clamp,Yr="onpointerenter"in ao?"pointer":"mouse",R0=Lt.isTouch=On.matchMedia&&On.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in On||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,hi=Lt.eventTypes=("ontouchstart"in vr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in vr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return B0=0},500),U0(),of=1),of};pn.op=Bt;tt.cache=0;var Lt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){of||O0(rn)||console.warn("Please gsap.registerPlugin(Observer)"),ta||U0();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,u=n.debounce,c=n.preventDefault,h=n.onStop,f=n.onStopDelay,m=n.ignore,g=n.wheelSpeed,d=n.event,p=n.onDragStart,x=n.onDragEnd,b=n.onDrag,_=n.onPress,y=n.onRelease,M=n.onRight,T=n.onLeft,E=n.onUp,v=n.onDown,w=n.onChangeX,P=n.onChangeY,O=n.onChange,Z=n.onToggleX,k=n.onToggleY,B=n.onHover,q=n.onHoverEnd,G=n.onMove,Y=n.ignoreCheck,I=n.isNormalizer,se=n.onGestureStart,R=n.onGestureEnd,X=n.onWheel,V=n.onEnable,fe=n.onDisable,ue=n.onClick,me=n.scrollSpeed,H=n.capture,Le=n.allowClicks,ve=n.lockAxis,Re=n.onLockAxis;this.target=o=xn(o)||vr,this.vars=n,m&&(m=rn.utils.toArray(m)),i=i||1e-9,s=s||0,g=g||1,me=me||1,a=a||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(On.getComputedStyle(ao).lineHeight)||22);var xe,ze,D,L,$,oe,ne,F=this,de=0,te=0,pe=Fr(o,pn),le=Fr(o,Bt),A=pe(),S=le(),N=~a.indexOf("touch")&&!~a.indexOf("pointer")&&hi[0]==="pointerdown",K=ia(o),Q=o.ownerDocument||xr,ce=[0,0,0],_e=[0,0,0],ge=0,ee=function(){return ge=na()},Ce=function(ie,Ae){return(F.event=ie)&&m&&~m.indexOf(ie.target)||Ae&&N&&ie.pointerType!=="touch"||Y&&Y(ie,Ae)},Ue=function(){F._vx.reset(),F._vy.reset(),ze.pause(),h&&h(F)},Te=function(){var ie=F.deltaX=fd(ce),Ae=F.deltaY=fd(_e),Ee=Math.abs(ie)>=i,ke=Math.abs(Ae)>=i;O&&(Ee||ke)&&O(F,ie,Ae,ce,_e),Ee&&(M&&F.deltaX>0&&M(F),T&&F.deltaX<0&&T(F),w&&w(F),Z&&F.deltaX<0!=de<0&&Z(F),de=F.deltaX,ce[0]=ce[1]=ce[2]=0),ke&&(v&&F.deltaY>0&&v(F),E&&F.deltaY<0&&E(F),P&&P(F),k&&F.deltaY<0!=te<0&&k(F),te=F.deltaY,_e[0]=_e[1]=_e[2]=0),(L||D)&&(G&&G(F),D&&(b(F),D=!1),L=!1),oe&&!(oe=!1)&&Re&&Re(F),$&&(X(F),$=!1),xe=0},Fe=function(ie,Ae,Ee){ce[Ee]+=ie,_e[Ee]+=Ae,F._vx.update(ie),F._vy.update(Ae),u?xe||(xe=requestAnimationFrame(Te)):Te()},Se=function(ie,Ae){ve&&!ne&&(F.axis=ne=Math.abs(ie)>Math.abs(Ae)?"x":"y",oe=!0),ne!=="y"&&(ce[2]+=ie,F._vx.update(ie,!0)),ne!=="x"&&(_e[2]+=Ae,F._vy.update(Ae,!0)),u?xe||(xe=requestAnimationFrame(Te)):Te()},we=function(ie){if(!Ce(ie,1)){ie=Io(ie,c);var Ae=ie.clientX,Ee=ie.clientY,ke=Ae-F.x,Et=Ee-F.y,Ge=F.isDragging;F.x=Ae,F.y=Ee,(Ge||Math.abs(F.startX-Ae)>=s||Math.abs(F.startY-Ee)>=s)&&(b&&(D=!0),Ge||(F.isDragging=!0),Se(ke,Et),Ge||p&&p(F))}},Qe=F.onPress=function(Xe){Ce(Xe,1)||(F.axis=ne=null,ze.pause(),F.isPressed=!0,Xe=Io(Xe),de=te=0,F.startX=F.x=Xe.clientX,F.startY=F.y=Xe.clientY,F._vx.reset(),F._vy.reset(),gn(I?o:Q,hi[1],we,c,!0),F.deltaX=F.deltaY=0,_&&_(F))},st=function(ie){if(!Ce(ie,1)){ln(I?o:Q,hi[1],we,!0);var Ae=F.isDragging&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Ee=Io(ie);Ae||(F._vx.reset(),F._vy.reset(),c&&Le&&rn.delayedCall(.08,function(){if(na()-ge>300&&!ie.defaultPrevented){if(ie.target.click)ie.target.click();else if(Q.createEvent){var ke=Q.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,On,1,Ee.screenX,Ee.screenY,Ee.clientX,Ee.clientY,!1,!1,!1,!1,0,null),ie.target.dispatchEvent(ke)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,h&&!I&&ze.restart(!0),x&&Ae&&x(F),y&&y(F,Ae)}},U=function(ie){return ie.touches&&ie.touches.length>1&&(F.isGesturing=!0)&&se(ie,F.isDragging)},re=function(){return(F.isGesturing=!1)||R(F)},he=function(ie){if(!Ce(ie)){var Ae=pe(),Ee=le();Fe((Ae-A)*me,(Ee-S)*me,1),A=Ae,S=Ee,h&&ze.restart(!0)}},be=function(ie){if(!Ce(ie)){ie=Io(ie,c),X&&($=!0);var Ae=(ie.deltaMode===1?l:ie.deltaMode===2?On.innerHeight:1)*g;Fe(ie.deltaX*Ae,ie.deltaY*Ae,0),h&&!I&&ze.restart(!0)}},Pe=function(ie){if(!Ce(ie)){var Ae=ie.clientX,Ee=ie.clientY,ke=Ae-F.x,Et=Ee-F.y;F.x=Ae,F.y=Ee,L=!0,(ke||Et)&&Se(ke,Et)}},qe=function(ie){F.event=ie,B(F)},gt=function(ie){F.event=ie,q(F)},Mt=function(ie){return Ce(ie)||Io(ie,c)&&ue(F)};ze=F._dc=rn.delayedCall(f||.25,Ue).pause(),F.deltaX=F.deltaY=0,F._vx=uf(0,50,!0),F._vy=uf(0,50,!0),F.scrollX=pe,F.scrollY=le,F.isDragging=F.isGesturing=F.isPressed=!1,F.enable=function(Xe){return F.isEnabled||(gn(K?Q:o,"scroll",lf),a.indexOf("scroll")>=0&&gn(K?Q:o,"scroll",he,c,H),a.indexOf("wheel")>=0&&gn(o,"wheel",be,c,H),(a.indexOf("touch")>=0&&R0||a.indexOf("pointer")>=0)&&(gn(o,hi[0],Qe,c,H),gn(Q,hi[2],st),gn(Q,hi[3],st),Le&&gn(o,"click",ee,!1,!0),ue&&gn(o,"click",Mt),se&&gn(Q,"gesturestart",U),R&&gn(Q,"gestureend",re),B&&gn(o,Yr+"enter",qe),q&&gn(o,Yr+"leave",gt),G&&gn(o,Yr+"move",Pe)),F.isEnabled=!0,Xe&&Xe.type&&Qe(Xe),V&&V(F)),F},F.disable=function(){F.isEnabled&&(Js.filter(function(Xe){return Xe!==F&&ia(Xe.target)}).length||ln(K?Q:o,"scroll",lf),F.isPressed&&(F._vx.reset(),F._vy.reset(),ln(I?o:Q,hi[1],we,!0)),ln(K?Q:o,"scroll",he,H),ln(o,"wheel",be,H),ln(o,hi[0],Qe,H),ln(Q,hi[2],st),ln(Q,hi[3],st),ln(o,"click",ee,!0),ln(o,"click",Mt),ln(Q,"gesturestart",U),ln(Q,"gestureend",re),ln(o,Yr+"enter",qe),ln(o,Yr+"leave",gt),ln(o,Yr+"move",Pe),F.isEnabled=F.isPressed=F.isDragging=!1,fe&&fe(F))},F.kill=function(){F.disable();var Xe=Js.indexOf(F);Xe>=0&&Js.splice(Xe,1),ji===F&&(ji=0)},Js.push(F),I&&ia(o)&&(ji=F),F.enable(d)},S3(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Lt.version="3.11.3";Lt.create=function(r){return new Lt(r)};Lt.register=O0;Lt.getAll=function(){return Js.slice()};Lt.getById=function(r){return Js.filter(function(e){return e.vars.id===r})[0]};I0()&&rn.registerPlugin(Lt);/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Oe,$s,et,xt,Li,wt,N0,$l,Yl,Qs,wl,za,Qt,mu,cf,hn,hd,dd,Ys,z0,Gu,k0,Ln,W0,V0,G0,hr,ff,ah,Hu,ka=1,dn=Date.now,Xu=dn(),si=0,Wa=0,pd=function(){return mu=1},md=function(){return mu=0},Ti=function(e){return e},Go=function(e){return Math.round(e*1e5)/1e5||0},H0=function(){return typeof window<"u"},X0=function(){return Oe||H0()&&(Oe=window.gsap)&&Oe.registerPlugin&&Oe},vs=function(e){return!!~N0.indexOf(e)},q0=function(e){return Ar(e,"getBoundingClientRect")||(vs(e)?function(){return Pl.width=et.innerWidth,Pl.height=et.innerHeight,Pl}:function(){return qi(e)})},T3=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Ar(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?et["inner"+s]:e["client"+s])||0}},E3=function(e,t){return!t||~Bi.indexOf(e)?q0(e):function(){return Pl}},yr=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return(n="scroll"+i)&&(a=Ar(e,n))?a()-q0(e)()[s]:vs(e)?(Li[n]||wt[n])-(et["inner"+i]||Li["client"+i]||wt["client"+i]):e[n]-e["offset"+i]},Va=function(e,t){for(var n=0;n<Ys.length;n+=3)(!t||~t.indexOf(Ys[n+1]))&&e(Ys[n],Ys[n+1],Ys[n+2])},di=function(e){return typeof e=="string"},mn=function(e){return typeof e=="function"},Ho=function(e){return typeof e=="number"},Tl=function(e){return typeof e=="object"},Bo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},qu=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ps=Math.abs,$0="left",Y0="top",lh="right",uh="bottom",hs="width",ds="height",ra="Right",sa="Left",oa="Top",aa="Bottom",At="padding",Zn="margin",bo="Width",ch="Height",Xt="px",Ri=function(e){return et.getComputedStyle(e)},A3=function(e){var t=Ri(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},gd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qi=function(e,t){var n=t&&Ri(e)[cf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Oe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},hf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},j0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},C3=function(e){return function(t){return Oe.utils.snap(j0(e),t)}},fh=function(e){var t=Oe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},D3=function(e){return function(t,n){return fh(j0(e))(t,n.direction)}},Ga=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},qt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},kt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ha=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},_d={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Xa={toggleActions:"play",anticipatePin:0},jl={top:0,left:0,center:.5,bottom:1,right:1},El=function(e,t){if(di(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in jl?jl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},qa=function(e,t,n,i,s,a,o,l){var u=s.startColor,c=s.endColor,h=s.fontSize,f=s.indent,m=s.fontWeight,g=xt.createElement("div"),d=vs(n)||Ar(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,x=d?wt:n,b=e.indexOf("start")!==-1,_=b?u:c,y="border-color:"+_+";font-size:"+h+";color:"+_+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&d?"fixed;":"absolute;"),(p||l||!d)&&(y+=(i===Bt?lh:uh)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,x.children[0]?x.insertBefore(g,x.children[0]):x.appendChild(g),g._offset=g["offset"+i.op.d2],Al(g,0,i,b),g},Al=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+bo]=1,s["border"+o+bo]=0,s[n.p]=t+"px",Oe.set(e,s)},Ke=[],df={},ya,xd=function(){return dn()-si>34&&(ya||(ya=requestAnimationFrame(Ms)))},Ls=function(){(!Ln||!Ln.isPressed||Ln.startX>wt.clientWidth)&&(tt.cache++,Ln?ya||(ya=requestAnimationFrame(Ms)):Ms(),si||bs("scrollStart"),si=dn())},$u=function(){G0=et.innerWidth,V0=et.innerHeight},Xo=function(){tt.cache++,!Qt&&!k0&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!W0||G0!==et.innerWidth||Math.abs(et.innerHeight-V0)>et.innerHeight*.25)&&$l.restart(!0)},ys={},P3=[],Z0=function r(){return kt(Je,"scrollEnd",r)||rs(!0)},bs=function(e){return ys[e]&&ys[e].map(function(t){return t()})||P3},Rn=[],K0=function(e){for(var t=0;t<Rn.length;t+=5)(!e||Rn[t+4]&&Rn[t+4].query===e)&&(Rn[t].style.cssText=Rn[t+1],Rn[t].getBBox&&Rn[t].setAttribute("transform",Rn[t+2]||""),Rn[t+3].uncache=1)},hh=function(e,t){var n;for(hn=0;hn<Ke.length;hn++)n=Ke[hn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&K0(t),t||bs("revert")},J0=function(e,t){tt.cache++,(t||!pi)&&tt.forEach(function(n){return mn(n)&&n.cacheID++&&(n.rec=0)}),di(e)&&(et.history.scrollRestoration=ah=e)},pi,ps=0,vd,L3=function(){if(vd!==ps){var e=vd=ps;requestAnimationFrame(function(){return e===ps&&rs(!0)})}},rs=function(e,t){if(si&&!e){qt(Je,"scrollEnd",Z0);return}pi=Je.isRefreshing=!0,tt.forEach(function(i){return mn(i)&&i.cacheID++&&(i.rec=i())});var n=bs("refreshInit");z0&&Je.sort(),t||hh(),tt.forEach(function(i){mn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ke.slice(0).forEach(function(i){return i.refresh()}),Ke.forEach(function(i,s){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-o),i.revert(!1,1)}}),Ke.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,yr(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),tt.forEach(function(i){mn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),J0(ah,1),$l.pause(),ps++,Ms(2),Ke.forEach(function(i){return mn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),pi=Je.isRefreshing=!1,bs("refresh")},yd=0,Cl=1,es,Ms=function(e){if(!pi||e===2){Je.isUpdating=!0,es&&es.update(0);var t=Ke.length,n=dn(),i=n-Xu>=50,s=t&&Ke[0].scroll();if(Cl=yd>s?-1:1,yd=s,i&&(si&&!mu&&n-si>200&&(si=0,bs("scrollEnd")),wl=Xu,Xu=n),Cl<0){for(hn=t;hn-- >0;)Ke[hn]&&Ke[hn].update(0,i);Cl=1}else for(hn=0;hn<t;hn++)Ke[hn]&&Ke[hn].update(0,i);Je.isUpdating=!1}ya=0},pf=[$0,Y0,uh,lh,Zn+aa,Zn+ra,Zn+oa,Zn+sa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Dl=pf.concat([hs,ds,"boxSizing","max"+bo,"max"+ch,"position",Zn,At,At+oa,At+ra,At+aa,At+sa]),R3=function(e,t,n){lo(n);var i=e._gsap;if(i.spacerIsNative)lo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Yu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=pf.length,a=t.style,o=e.style,l;s--;)l=pf[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[uh]=o[lh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[hs]=hf(e,pn)+Xt,a[ds]=hf(e,Bt)+Xt,a[At]=o[Zn]=o[Y0]=o[$0]="0",lo(i),o[hs]=o["max"+bo]=n[hs],o[ds]=o["max"+ch]=n[ds],o[At]=n[At],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},F3=/([A-Z])/g,lo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Oe.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(F3,"-$1").toLowerCase())}},$a=function(e){for(var t=Dl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Dl[s],n[Dl[s]]);return i.t=e,i},I3=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Pl={left:0,top:0},bd=function(e,t,n,i,s,a,o,l,u,c,h,f,m){mn(e)&&(e=e(l)),di(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?El("0"+e.substr(3),n):0));var g=m?m.time():0,d,p,x;if(m&&m.seek(0),Ho(e))o&&Al(o,n,i,!0);else{mn(t)&&(t=t(l));var b=(e||"0").split(" "),_,y,M,T;x=xn(t)||wt,_=qi(x)||{},(!_||!_.left&&!_.top)&&Ri(x).display==="none"&&(T=x.style.display,x.style.display="block",_=qi(x),T?x.style.display=T:x.style.removeProperty("display")),y=El(b[0],_[i.d]),M=El(b[1]||"0",n),e=_[i.p]-u[i.p]-c+y+s-M,o&&Al(o,M,i,n-M<20||o._isStart&&M>20),n-=n-M}if(a){var E=e+n,v=a._isStart;d="scroll"+i.d2,Al(a,E,i,v&&E>20||!v&&(h?Math.max(wt[d],Li[d]):a.parentNode[d])<=E+1),h&&(u=qi(o),h&&(a.style[i.op.p]=u[i.op.p]-i.op.m-a._offset+Xt))}return m&&x&&(d=qi(x),m.seek(f),p=qi(x),m._caScrollDist=d[i.p]-p[i.p],e=e/m._caScrollDist*f),m&&m.seek(g),m?e:Math.round(e)},B3=/(webkit|moz|length|cssText|inset)/i,Md=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===wt){e._stOrig=s.cssText,o=Ri(e);for(a in o)!+a&&!B3.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Oe.core.getCache(e).uncache=1,t.appendChild(e)}},Sd=function(e,t){var n=Fr(e,t),i="_scroll"+t.p2,s,a,o=function l(u,c,h,f,m){var g=l.tween,d=c.onComplete,p={};return h=h||n(),m=f&&m||0,f=f||u-h,g&&g.kill(),s=Math.round(h),c[i]=u,c.modifiers=p,p[i]=function(x){return x=Math.round(n()),x!==s&&x!==a&&Math.abs(x-s)>3&&Math.abs(x-a)>3?(g.kill(),l.tween=0):x=h+f*g.ratio+m*g.ratio*g.ratio,a=s,s=Math.round(x)},c.onComplete=function(){l.tween=0,d&&d.call(g)},g=l.tween=Oe.to(e,c),g};return e[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},qt(e,"wheel",n.wheelHandler),o},Je=function(){function r(t,n){$s||r.register(Oe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Wa){this.update=this.refresh=this.kill=Ti;return}n=gd(di(n)||Ho(n)||n.nodeType?{trigger:n}:n,Xa);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,h=s.scrub,f=s.trigger,m=s.pin,g=s.pinSpacing,d=s.invalidateOnRefresh,p=s.anticipatePin,x=s.onScrubComplete,b=s.onSnapComplete,_=s.once,y=s.snap,M=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,v=s.fastScrollEnd,w=s.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?pn:Bt,O=!h&&h!==0,Z=xn(n.scroller||et),k=Oe.core.getCache(Z),B=vs(Z),q=("pinType"in n?n.pinType:Ar(Z,"pinType")||B&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=O&&n.toggleActions.split(" "),I="markers"in n?n.markers:Xa.markers,se=B?0:parseFloat(Ri(Z)["border"+P.p2+bo])||0,R=this,X=n.onRefreshInit&&function(){return n.onRefreshInit(R)},V=T3(Z,B,P),fe=E3(Z,B),ue=0,me=0,H=Fr(Z,P),Le,ve,Re,xe,ze,D,L,$,oe,ne,F,de,te,pe,le,A,S,N,K,Q,ce,_e,ge,ee,Ce,Ue,Te,Fe,Se,we,Qe,st,U,re,he,be,Pe,qe;if(ff(R),R._dir=P,p*=45,R.scroller=Z,R.scroll=E?E.time.bind(E):H,xe=H(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(z0=1,n.refreshPriority===-9999&&(es=R)),k.tweenScroll=k.tweenScroll||{top:Sd(Z,Bt),left:Sd(Z,pn)},R.tweenTo=Le=k.tweenScroll[P.p],R.scrubDuration=function(ie){Qe=Ho(ie)&&ie,Qe?we?we.duration(ie):we=Oe.to(i,{ease:"expo",totalProgress:"+=0.001",duration:Qe,paused:!0,onComplete:function(){return x&&x(R)}}):(we&&we.progress(1).kill(),we=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(h),Fe=0,l||(l=i.vars.id)),Ke.push(R),y&&((!Tl(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in wt.style&&Oe.set(B?[wt,Li]:Z,{scrollBehavior:"auto"}),tt.forEach(function(ie){return mn(ie)&&ie.target===(B?xt.scrollingElement||Li:Z)&&(ie.smooth=!1)}),Re=mn(y.snapTo)?y.snapTo:y.snapTo==="labels"?C3(i):y.snapTo==="labelsDirectional"?D3(i):y.directional!==!1?function(ie,Ae){return fh(y.snapTo)(ie,dn()-me<500?0:Ae.direction)}:Oe.utils.snap(y.snapTo),st=y.duration||{min:.1,max:2},st=Tl(st)?Qs(st.min,st.max):Qs(st,st),U=Oe.delayedCall(y.delay||Qe/2||.1,function(){var ie=H(),Ae=dn()-me<500,Ee=Le.tween;if((Ae||Math.abs(R.getVelocity())<10)&&!Ee&&!mu&&ue!==ie){var ke=(ie-D)/te,Et=i&&!O?i.totalProgress():ke,Ge=Ae?0:(Et-Se)/(dn()-wl)*1e3||0,St=Oe.utils.clamp(-ke,1-ke,Ps(Ge/2)*Ge/.185),C=ke+(y.inertia===!1?0:St),W=Qs(0,1,Re(C,R)),j=Math.round(D+W*te),z=y,ae=z.onStart,Me=z.onInterrupt,De=z.onComplete;if(ie<=L&&ie>=D&&j!==ie){if(Ee&&!Ee._initted&&Ee.data<=Ps(j-ie))return;y.inertia===!1&&(St=W-ke),Le(j,{duration:st(Ps(Math.max(Ps(C-Et),Ps(W-Et))*.185/Ge/.05||0)),ease:y.ease||"power3",data:Ps(j-ie),onInterrupt:function(){return U.restart(!0)&&Me&&Me(R)},onComplete:function(){R.update(),ue=H(),Fe=Se=i&&!O?i.totalProgress():R.progress,b&&b(R),De&&De(R)}},ie,St*te,j-ie-St*te),ae&&ae(R,Le.tween)}}else R.isActive&&ue!==ie&&U.restart(!0)}).pause()),l&&(df[l]=R),f=R.trigger=xn(f||m),qe=f&&f._gsap&&f._gsap.stRevert,qe&&(qe=qe(R)),m=m===!0?f:xn(m),di(o)&&(o={targets:f,className:o}),m&&(g===!1||g===Zn||(g=!g&&m.parentNode&&m.parentNode.style&&Ri(m.parentNode).display==="flex"?!1:At),R.pin=m,ve=Oe.core.getCache(m),ve.spacer?pe=ve.pinState:(T&&(T=xn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),ve.spacerIsNative=!!T,T&&(ve.spacerState=$a(T))),ve.spacer=S=T||xt.createElement("div"),S.classList.add("pin-spacer"),l&&S.classList.add("pin-spacer-"+l),ve.pinState=pe=$a(m)),n.force3D!==!1&&Oe.set(m,{force3D:!0}),R.spacer=S=ve.spacer,Te=Ri(m),ge=Te[g+P.os2],K=Oe.getProperty(m),Q=Oe.quickSetter(m,P.a,Xt),Yu(m,S,Te),A=$a(m)),I){de=Tl(I)?gd(I,_d):_d,ne=qa("scroller-start",l,Z,P,de,0),F=qa("scroller-end",l,Z,P,de,0,ne),N=ne["offset"+P.op.d2];var gt=xn(Ar(Z,"content")||Z);$=this.markerStart=qa("start",l,gt,P,de,N,0,E),oe=this.markerEnd=qa("end",l,gt,P,de,N,0,E),E&&(Pe=Oe.quickSetter([$,oe],P.a,Xt)),!q&&!(Bi.length&&Ar(Z,"fixedMarkers")===!0)&&(A3(B?wt:Z),Oe.set([ne,F],{force3D:!0}),Ce=Oe.quickSetter(ne,P.a,Xt),Ue=Oe.quickSetter(F,P.a,Xt))}if(E){var Mt=E.vars.onUpdate,Xe=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),Mt&&Mt.apply(Xe||[])})}R.previous=function(){return Ke[Ke.indexOf(R)-1]},R.next=function(){return Ke[Ke.indexOf(R)+1]},R.revert=function(ie,Ae){if(!Ae)return R.kill(!0);var Ee=ie!==!1||!R.enabled,ke=Qt;Ee!==R.isReverted&&(Ee&&(he=Math.max(H(),R.scroll.rec||0),re=R.progress,be=i&&i.progress()),$&&[$,oe,ne,F].forEach(function(Et){return Et.style.display=Ee?"none":"block"}),Ee&&(Qt=1,R.update(Ee)),m&&(Ee?R3(m,S,pe):(!M||!R.isActive)&&Yu(m,S,Ri(m),ee)),Ee||R.update(Ee),Qt=ke,R.isReverted=Ee)},R.refresh=function(ie,Ae){if(!((Qt||!R.enabled)&&!Ae)){if(m&&ie&&si){qt(r,"scrollEnd",Z0);return}!pi&&X&&X(R),Qt=1,me=dn(),Le.tween&&(Le.tween.kill(),Le.tween=0),we&&we.pause(),d&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;for(var Ee=V(),ke=fe(),Et=E?E.duration():yr(Z,P),Ge=0,St=0,C=n.end,W=n.endTrigger||f,j=n.start||(n.start===0||!f?0:m?"0 0":"0 100%"),z=R.pinnedContainer=n.pinnedContainer&&xn(n.pinnedContainer),ae=f&&Math.max(0,Ke.indexOf(R))||0,Me=ae,De,Ie,Ve,$e,Ne,Be,at,Ht,Hn,En;Me--;)Be=Ke[Me],Be.end||Be.refresh(0,1)||(Qt=1),at=Be.pin,at&&(at===f||at===m)&&!Be.isReverted&&(En||(En=[]),En.unshift(Be),Be.revert(!0,!0)),Be!==Ke[Me]&&(ae--,Me--);for(mn(j)&&(j=j(R)),D=bd(j,f,Ee,P,H(),$,ne,R,ke,se,q,Et,E)||(m?-.001:0),mn(C)&&(C=C(R)),di(C)&&!C.indexOf("+=")&&(~C.indexOf(" ")?C=(di(j)?j.split(" ")[0]:"")+C:(Ge=El(C.substr(2),Ee),C=di(j)?j:D+Ge,W=f)),L=Math.max(D,bd(C||(W?"100% 0":Et),W,Ee,P,H()+Ge,oe,F,R,ke,se,q,Et,E))||-.001,te=L-D||(D-=.01)&&.001,Ge=0,Me=ae;Me--;)Be=Ke[Me],at=Be.pin,at&&Be.start-Be._pinPush<=D&&!E&&Be.end>0&&(De=Be.end-Be.start,(at===f&&Be.start-Be._pinPush<D||at===z)&&!Ho(j)&&(Ge+=De*(1-Be.progress)),at===m&&(St+=De));if(D+=Ge,L+=Ge,R._pinPush=St,$&&Ge&&(De={},De[P.a]="+="+Ge,z&&(De[P.p]="-="+H()),Oe.set([$,oe],De)),m)De=Ri(m),$e=P===Bt,Ve=H(),ce=parseFloat(K(P.a))+St,!Et&&L>1&&((B?wt:Z).style["overflow-"+P.a]="scroll"),Yu(m,S,De),A=$a(m),Ie=qi(m,!0),Ht=q&&Fr(Z,$e?pn:Bt)(),g&&(ee=[g+P.os2,te+St+Xt],ee.t=S,Me=g===At?hf(m,P)+te+St:0,Me&&ee.push(P.d,Me+Xt),lo(ee),z&&Ke.forEach(function(ft){ft.pin===z&&ft.vars.pinSpacing!==!1&&(ft._subPinOffset=!0)}),q&&H(he)),q&&(Ne={top:Ie.top+($e?Ve-D:Ht)+Xt,left:Ie.left+($e?Ht:Ve-D)+Xt,boxSizing:"border-box",position:"fixed"},Ne[hs]=Ne["max"+bo]=Math.ceil(Ie.width)+Xt,Ne[ds]=Ne["max"+ch]=Math.ceil(Ie.height)+Xt,Ne[Zn]=Ne[Zn+oa]=Ne[Zn+ra]=Ne[Zn+aa]=Ne[Zn+sa]="0",Ne[At]=De[At],Ne[At+oa]=De[At+oa],Ne[At+ra]=De[At+ra],Ne[At+aa]=De[At+aa],Ne[At+sa]=De[At+sa],le=I3(pe,Ne,M),pi&&H(0)),i?(Hn=i._initted,Gu(1),i.render(i.duration(),!0,!0),_e=K(P.a)-ce+te+St,te!==_e&&q&&le.splice(le.length-2,2),i.render(0,!0,!0),Hn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Gu(0)):_e=te;else if(f&&H()&&!E)for(Ie=f.parentNode;Ie&&Ie!==wt;)Ie._pinOffset&&(D-=Ie._pinOffset,L-=Ie._pinOffset),Ie=Ie.parentNode;En&&En.forEach(function(ft){return ft.revert(!1,!0)}),R.start=D,R.end=L,xe=ze=pi?he:H(),!E&&!pi&&(xe<he&&H(he),R.scroll.rec=0),R.revert(!1,!0),U&&(ue=-1,R.isActive&&H(D+te*re),U.restart(!0)),Qt=0,i&&O&&(i._initted||be)&&i.progress()!==be&&i.progress(be,!0).render(i.time(),!0,!0),(re!==R.progress||E)&&(i&&!O&&i.totalProgress(re,!0),R.progress=(xe-D)/te===re?0:re),m&&g&&(S._pinOffset=Math.round(R.progress*_e)),c&&!pi&&c(R)}},R.getVelocity=function(){return(H()-ze)/(dn()-wl)*1e3||0},R.endAnimation=function(){Bo(R.callbackAnimation),i&&(we?we.progress(1):i.paused()?O||Bo(i,R.direction<0,1):Bo(i,i.reversed()))},R.labelToScroll=function(ie){return i&&i.labels&&(D||R.refresh()||D)+i.labels[ie]/i.duration()*te||0},R.getTrailing=function(ie){var Ae=Ke.indexOf(R),Ee=R.direction>0?Ke.slice(0,Ae).reverse():Ke.slice(Ae+1);return(di(ie)?Ee.filter(function(ke){return ke.vars.preventOverlaps===ie}):Ee).filter(function(ke){return R.direction>0?ke.end<=D:ke.start>=L})},R.update=function(ie,Ae,Ee){if(!(E&&!Ee&&!ie)){var ke=pi?he:R.scroll(),Et=ie?0:(ke-D)/te,Ge=Et<0?0:Et>1?1:Et||0,St=R.progress,C,W,j,z,ae,Me,De,Ie;if(Ae&&(ze=xe,xe=E?H():ke,y&&(Se=Fe,Fe=i&&!O?i.totalProgress():Ge)),p&&!Ge&&m&&!Qt&&!ka&&si&&D<ke+(ke-ze)/(dn()-wl)*p&&(Ge=1e-4),Ge!==St&&R.enabled){if(C=R.isActive=!!Ge&&Ge<1,W=!!St&&St<1,Me=C!==W,ae=Me||!!Ge!=!!St,R.direction=Ge>St?1:-1,R.progress=Ge,ae&&!Qt&&(j=Ge&&!St?0:Ge===1?1:St===1?2:3,O&&(z=!Me&&Y[j+1]!=="none"&&Y[j+1]||Y[j],Ie=i&&(z==="complete"||z==="reset"||z in i))),w&&(Me||Ie)&&(Ie||h||!i)&&(mn(w)?w(R):R.getTrailing(w).forEach(function(Be){return Be.endAnimation()})),O||(we&&!Qt&&!ka?((E||es&&es!==R)&&we.render(we._dp._time-we._start),we.resetTo?we.resetTo("totalProgress",Ge,i._tTime/i._tDur):(we.vars.totalProgress=Ge,we.invalidate().restart())):i&&i.totalProgress(Ge,!!Qt)),m){if(ie&&g&&(S.style[g+P.os2]=ge),!q)Q(Go(ce+_e*Ge));else if(ae){if(De=!ie&&Ge>St&&L+1>ke&&ke+1>=yr(Z,P),M)if(!ie&&(C||De)){var Ve=qi(m,!0),$e=ke-D;Md(m,wt,Ve.top+(P===Bt?$e:0)+Xt,Ve.left+(P===Bt?0:$e)+Xt)}else Md(m,S);lo(C||De?le:A),_e!==te&&Ge<1&&C||Q(ce+(Ge===1&&!De?_e:0))}}y&&!Le.tween&&!Qt&&!ka&&U.restart(!0),o&&(Me||_&&Ge&&(Ge<1||!Hu))&&Yl(o.targets).forEach(function(Be){return Be.classList[C||_?"add":"remove"](o.className)}),a&&!O&&!ie&&a(R),ae&&!Qt?(O&&(Ie&&(z==="complete"?i.pause().totalProgress(1):z==="reset"?i.restart(!0).pause():z==="restart"?i.restart(!0):i[z]()),a&&a(R)),(Me||!Hu)&&(u&&Me&&qu(R,u),G[j]&&qu(R,G[j]),_&&(Ge===1?R.kill(!1,1):G[j]=0),Me||(j=Ge===1?1:3,G[j]&&qu(R,G[j]))),v&&!C&&Math.abs(R.getVelocity())>(Ho(v)?v:2500)&&(Bo(R.callbackAnimation),we?we.progress(1):Bo(i,z==="reverse"?1:!Ge,1))):O&&a&&!Qt&&a(R)}if(Ue){var Ne=E?ke/E.duration()*(E._caScrollDist||0):ke;Ce(Ne+(ne._isFlipped?1:0)),Ue(Ne)}Pe&&Pe(-ke/E.duration()*(E._caScrollDist||0))}},R.enable=function(ie,Ae){R.enabled||(R.enabled=!0,qt(Z,"resize",Xo),qt(B?xt:Z,"scroll",Ls),X&&qt(r,"refreshInit",X),ie!==!1&&(R.progress=re=0,xe=ze=ue=H()),Ae!==!1&&R.refresh())},R.getTween=function(ie){return ie&&Le?Le.tween:we},R.setPositions=function(ie,Ae){m&&(ce+=ie-D,_e+=Ae-ie-te,g===At&&R.adjustPinSpacing(Ae-ie-te)),R.start=D=ie,R.end=L=Ae,te=Ae-ie,R.update()},R.adjustPinSpacing=function(ie){if(ee){var Ae=ee.indexOf(P.d)+1;ee[Ae]=parseFloat(ee[Ae])+ie+Xt,ee[1]=parseFloat(ee[1])+ie+Xt,lo(ee)}},R.disable=function(ie,Ae){if(R.enabled&&(ie!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Ae||we&&we.pause(),he=0,ve&&(ve.uncache=1),X&&kt(r,"refreshInit",X),U&&(U.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!B)){for(var Ee=Ke.length;Ee--;)if(Ke[Ee].scroller===Z&&Ke[Ee]!==R)return;kt(Z,"resize",Xo),kt(Z,"scroll",Ls)}},R.kill=function(ie,Ae){R.disable(ie,Ae),we&&!Ae&&we.kill(),l&&delete df[l];var Ee=Ke.indexOf(R);Ee>=0&&Ke.splice(Ee,1),Ee===hn&&Cl>0&&hn--,Ee=0,Ke.forEach(function(ke){return ke.scroller===R.scroller&&(Ee=1)}),Ee||pi||(R.scroll.rec=0),i&&(i.scrollTrigger=null,ie&&i.revert({kill:!1}),Ae||i.kill()),$&&[$,oe,ne,F].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),es===R&&(es=0),m&&(ve&&(ve.uncache=1),Ee=0,Ke.forEach(function(ke){return ke.pin===m&&Ee++}),Ee||(ve.spacer=0)),n.onKill&&n.onKill(R)},R.enable(!1,!1),qe&&qe(R),!i||!i.add||te?R.refresh():Oe.delayedCall(.01,function(){return D||L||R.refresh()})&&(te=.01)&&(D=L=0),m&&L3()},r.register=function(n){return $s||(Oe=n||X0(),H0()&&window.document&&r.enable(),$s=Wa),$s},r.defaults=function(n){if(n)for(var i in n)Xa[i]=n[i];return Xa},r.disable=function(n,i){Wa=0,Ke.forEach(function(a){return a[i?"kill":"disable"](n)}),kt(et,"wheel",Ls),kt(xt,"scroll",Ls),clearInterval(za),kt(xt,"touchcancel",Ti),kt(wt,"touchstart",Ti),Ga(kt,xt,"pointerdown,touchstart,mousedown",pd),Ga(kt,xt,"pointerup,touchend,mouseup",md),$l.kill(),Va(kt);for(var s=0;s<tt.length;s+=3)Ha(kt,tt[s],tt[s+1]),Ha(kt,tt[s],tt[s+2])},r.enable=function(){if(et=window,xt=document,Li=xt.documentElement,wt=xt.body,Oe&&(Yl=Oe.utils.toArray,Qs=Oe.utils.clamp,ff=Oe.core.context||Ti,Gu=Oe.core.suppressOverwrites||Ti,ah=et.history.scrollRestoration||"auto",Oe.core.globals("ScrollTrigger",r),wt)){Wa=1,Lt.register(Oe),r.isTouch=Lt.isTouch,hr=Lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),qt(et,"wheel",Ls),N0=[et,xt,Li,wt],Oe.matchMedia?(r.matchMedia=function(l){var u=Oe.matchMedia(),c;for(c in l)u.add(c,l[c]);return u},Oe.addEventListener("matchMediaInit",function(){return hh()}),Oe.addEventListener("matchMediaRevert",function(){return K0()}),Oe.addEventListener("matchMedia",function(){rs(0,1),bs("matchMedia")}),Oe.matchMedia("(orientation: portrait)",function(){return $u(),$u})):console.warn("Requires GSAP 3.11.0 or later"),$u(),qt(xt,"scroll",Ls);var n=wt.style,i=n.borderTopStyle,s=Oe.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=qi(wt),Bt.m=Math.round(a.top+Bt.sc())||0,pn.m=Math.round(a.left+pn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),za=setInterval(xd,250),Oe.delayedCall(.5,function(){return ka=0}),qt(xt,"touchcancel",Ti),qt(wt,"touchstart",Ti),Ga(qt,xt,"pointerdown,touchstart,mousedown",pd),Ga(qt,xt,"pointerup,touchend,mouseup",md),cf=Oe.utils.checkPrefix("transform"),Dl.push(cf),$s=dn(),$l=Oe.delayedCall(.2,rs).pause(),Ys=[xt,"visibilitychange",function(){var l=et.innerWidth,u=et.innerHeight;xt.hidden?(hd=l,dd=u):(hd!==l||dd!==u)&&Xo()},xt,"DOMContentLoaded",rs,et,"load",rs,et,"resize",Xo],Va(qt),Ke.forEach(function(l){return l.enable(0,1)}),o=0;o<tt.length;o+=3)Ha(kt,tt[o],tt[o+1]),Ha(kt,tt[o],tt[o+2])}},r.config=function(n){"limitCallbacks"in n&&(Hu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(za)||(za=i)&&setInterval(xd,i),"ignoreMobileResize"in n&&(W0=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Va(kt)||Va(qt,n.autoRefreshEvents||"none"),k0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=xn(n),a=tt.indexOf(s),o=vs(s);~a&&tt.splice(a,o?6:2),i&&(o?Bi.unshift(et,i,wt,i,Li,i):Bi.unshift(s,i))},r.clearMatchMedia=function(n){Ke.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(di(n)?xn(n):n).getBoundingClientRect(),o=a[s?hs:ds]*i||0;return s?a.right-o>0&&a.left+o<et.innerWidth:a.bottom-o>0&&a.top+o<et.innerHeight},r.positionInViewport=function(n,i,s){di(n)&&(n=xn(n));var a=n.getBoundingClientRect(),o=a[s?hs:ds],l=i==null?o/2:i in jl?jl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/et.innerWidth:(a.top+l)/et.innerHeight},r.killAll=function(n){if(Ke.forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ys.killAll||[];ys={},i.forEach(function(s){return s()})}},r}();Je.version="3.11.3";Je.saveStyles=function(r){return r?Yl(r).forEach(function(e){if(e&&e.style){var t=Rn.indexOf(e);t>=0&&Rn.splice(t,5),Rn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Oe.core.getCache(e),ff())}}):Rn};Je.revert=function(r,e){return hh(!r,e)};Je.create=function(r,e){return new Je(r,e)};Je.refresh=function(r){return r?Xo():($s||Je.register())&&rs(!0)};Je.update=Ms;Je.clearScrollMemory=J0;Je.maxScroll=function(r,e){return yr(r,e?pn:Bt)};Je.getScrollFunc=function(r,e){return Fr(xn(r),e?pn:Bt)};Je.getById=function(r){return df[r]};Je.getAll=function(){return Ke.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!si};Je.snapDirectional=fh;Je.addEventListener=function(r,e){var t=ys[r]||(ys[r]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(r,e){var t=ys[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(u,c){var h=[],f=[],m=Oe.delayedCall(i,function(){c(h,f),h=[],f=[]}).pause();return function(g){h.length||m.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&m.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&mn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return mn(s)&&(s=s(),qt(Je,"refresh",function(){return s=e.batchMax()})),Yl(r).forEach(function(l){var u={};for(o in n)u[o]=n[o];u.trigger=l,t.push(Je.create(u))}),t};var wd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},ju=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Lt.isTouch?" pinch-zoom":""):"none",e===Li&&r(wt,t)},Td={auto:1,scroll:1},U3=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Oe.core.getCache(s),o=dn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s.scrollHeight<=s.clientHeight;)s=s.parentNode;a._isScroll=s&&!vs(s)&&s!==n&&(Td[(l=Ri(s)).overflowY]||Td[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Q0=function(e,t,n,i){return Lt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&U3,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&qt(xt,Lt.eventTypes[0],Ad,!1,!0)},onDisable:function(){return kt(xt,Lt.eventTypes[0],Ad,!0)}})},O3=/(input|label|select|textarea)/i,Ed,Ad=function(e){var t=O3.test(e.target.tagName);(t||Ed)&&(e._gsapAllow=!0,Ed=t)},N3=function(e){Tl(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a,o,l=xn(e.target)||Li,u=Oe.core.globals().ScrollSmoother,c=u&&u.get(),h=hr&&(e.content&&xn(e.content)||c&&e.content!==!1&&!c.smooth()&&c.content()),f=Fr(l,Bt),m=Fr(l,pn),g=1,d=(Lt.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,p=0,x=mn(i)?function(){return i(a)}:function(){return i||2.8},b,_,y=Q0(l,e.type,!0,s),M=function(){return _=!1},T=Ti,E=Ti,v=function(){o=yr(l,Bt),E=Qs(hr?1:0,o),n&&(T=Qs(0,yr(l,pn))),b=ps},w=function(){h._gsap.y=Go(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(_){requestAnimationFrame(M);var Y=Go(a.deltaY/2),I=E(f.v-Y);if(h&&I!==f.v+f.offset){f.offset=I-f.v;var se=Go((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+se+", 0, 1)",h._gsap.y=se+"px",f.cacheID=tt.cache,Ms()}return!0}f.offset&&w(),_=!0},O,Z,k,B,q=function(){v(),O.isActive()&&O.vars.scrollY>o&&(f()>o?O.progress(1)&&f(o):O.resetTo("scrollY",o))};return h&&Oe.set(h,{y:"+=0"}),e.ignoreCheck=function(G){return hr&&G.type==="touchmove"&&P()||g>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){var G=g;g=Go((et.visualViewport&&et.visualViewport.scale||1)/d),O.pause(),G!==g&&ju(l,g>1.01?!0:n?!1:"x"),Z=m(),k=f(),v(),b=ps},e.onRelease=e.onGestureStart=function(G,Y){if(f.offset&&w(),!Y)B.restart(!0);else{tt.cache++;var I=x(),se,R;n&&(se=m(),R=se+I*.05*-G.velocityX/.227,I*=wd(m,se,R,yr(l,pn)),O.vars.scrollX=T(R)),se=f(),R=se+I*.05*-G.velocityY/.227,I*=wd(f,se,R,yr(l,Bt)),O.vars.scrollY=E(R),O.invalidate().duration(I).play(.01),(hr&&O.vars.scrollY>=o||se>=o-1)&&Oe.to({},{onUpdate:q,duration:I})}},e.onWheel=function(){O._ts&&O.pause(),dn()-p>1e3&&(b=0,p=dn())},e.onChange=function(G,Y,I,se,R){if(ps!==b&&v(),Y&&n&&m(T(se[2]===Y?Z+(G.startX-G.x):m()+Y-se[1])),I){f.offset&&w();var X=R[2]===I,V=X?k+G.startY-G.y:f()+I-R[1],fe=E(V);X&&V!==fe&&(k+=fe-V),f(fe)}(I||Y)&&Ms()},e.onEnable=function(){ju(l,n?!1:"x"),Je.addEventListener("refresh",q),qt(et,"resize",q),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),y.enable()},e.onDisable=function(){ju(l,!0),kt(et,"resize",q),Je.removeEventListener("refresh",q),y.kill()},e.lockAxis=e.lockAxis!==!1,a=new Lt(e),a.iOS=hr,hr&&!f()&&f(1),hr&&Oe.ticker.add(Ti),B=a._dc,O=Oe.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:B.vars.onComplete}),a};Je.sort=function(r){return Ke.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Je.observe=function(r){return new Lt(r)};Je.normalizeScroll=function(r){if(typeof r>"u")return Ln;if(r===!0&&Ln)return Ln.enable();if(r===!1)return Ln&&Ln.kill();var e=r instanceof Lt?r:N3(r);return Ln&&Ln.target===e.target&&Ln.kill(),vs(e.target)&&(Ln=e),e};Je.core={_getVelocityProp:uf,_inputObserver:Q0,_scrollers:tt,_proxies:Bi,bridge:{ss:function(){si||bs("scrollStart"),si=dn()},ref:function(){return Qt}}};X0()&&Oe.registerPlugin(Je);const z3={preserveAspectRatio:"xMidYMin",class:"line",width:"942",height:"3187",viewBox:"0 0 942 3187",fill:"none",xmlns:"http://www.w3.org/2000/svg"},k3=Es({__name:"SvgAnim",setup(r){ri.registerPlugin(Je);const e=pr();return Br(()=>{setTimeout(()=>{const t=e.value,n=Math.floor(t.getTotalLength());ri.timeline({scrollTrigger:{trigger:t,scrub:!0,start:"top+=100 top",end:"bottom bottom"}}).set(t,{"stroke-width":"100px"}).fromTo(t,{"stroke-dasharray":n,"stroke-dashoffset":n},{"stroke-dashoffset":"0"})},300)}),(t,n)=>(Qn(),Ji("div",null,[(Qn(),Ji("svg",z3,[We("path",{ref_key:"targetLine",ref:e,d:"M358.612 51C230.278 77 2.51186 231 118.112 639C262.612 1149 154.112 1269.5 70.1118 1521.5C-13.8882 1773.5 192.029 1959.5 345 1959.5C518.388 1959.5 687.753 1770.39 832.612 1937C979.112 2105.5 746.5 2233 784 2446.5C822.531 2665.87 958.612 2662 850.612 3136",stroke:"#D7D7D7","stroke-width":"100","stroke-linecap":"round"},null,512)]))]))}});const W3=Cs(k3,[["__scopeId","data-v-31e2835c"]]);var Cd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},eg={exports:{}};(function(r){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(n){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,a={},o={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function b(_){return _ instanceof l?new l(_.type,b(_.content),_.alias):Array.isArray(_)?_.map(b):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++s}),b.__id},clone:function b(_,y){y=y||{};var M,T;switch(o.util.type(_)){case"Object":if(T=o.util.objId(_),y[T])return y[T];M={},y[T]=M;for(var E in _)_.hasOwnProperty(E)&&(M[E]=b(_[E],y));return M;case"Array":return T=o.util.objId(_),y[T]?y[T]:(M=[],y[T]=M,_.forEach(function(v,w){M[w]=b(v,y)}),M);default:return _}},getLanguage:function(b){for(;b;){var _=i.exec(b.className);if(_)return _[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,_){b.className=b.className.replace(RegExp(i,"gi"),""),b.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(M){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(M.stack)||[])[1];if(b){var _=document.getElementsByTagName("script");for(var y in _)if(_[y].src==b)return _[y]}return null}},isActive:function(b,_,y){for(var M="no-"+_;b;){var T=b.classList;if(T.contains(_))return!0;if(T.contains(M))return!1;b=b.parentElement}return!!y}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(b,_){var y=o.util.clone(o.languages[b]);for(var M in _)y[M]=_[M];return y},insertBefore:function(b,_,y,M){M=M||o.languages;var T=M[b],E={};for(var v in T)if(T.hasOwnProperty(v)){if(v==_)for(var w in y)y.hasOwnProperty(w)&&(E[w]=y[w]);y.hasOwnProperty(v)||(E[v]=T[v])}var P=M[b];return M[b]=E,o.languages.DFS(o.languages,function(O,Z){Z===P&&O!=b&&(this[O]=E)}),E},DFS:function b(_,y,M,T){T=T||{};var E=o.util.objId;for(var v in _)if(_.hasOwnProperty(v)){y.call(_,v,_[v],M||v);var w=_[v],P=o.util.type(w);P==="Object"&&!T[E(w)]?(T[E(w)]=!0,b(w,y,null,T)):P==="Array"&&!T[E(w)]&&(T[E(w)]=!0,b(w,y,v,T))}}},plugins:{},highlightAll:function(b,_){o.highlightAllUnder(document,b,_)},highlightAllUnder:function(b,_,y){var M={callback:y,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",M),M.elements=Array.prototype.slice.apply(M.container.querySelectorAll(M.selector)),o.hooks.run("before-all-elements-highlight",M);for(var T=0,E;E=M.elements[T++];)o.highlightElement(E,_===!0,M.callback)},highlightElement:function(b,_,y){var M=o.util.getLanguage(b),T=o.languages[M];o.util.setLanguage(b,M);var E=b.parentElement;E&&E.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(E,M);var v=b.textContent,w={element:b,language:M,grammar:T,code:v};function P(Z){w.highlightedCode=Z,o.hooks.run("before-insert",w),w.element.innerHTML=w.highlightedCode,o.hooks.run("after-highlight",w),o.hooks.run("complete",w),y&&y.call(w.element)}if(o.hooks.run("before-sanity-check",w),E=w.element.parentElement,E&&E.nodeName.toLowerCase()==="pre"&&!E.hasAttribute("tabindex")&&E.setAttribute("tabindex","0"),!w.code){o.hooks.run("complete",w),y&&y.call(w.element);return}if(o.hooks.run("before-highlight",w),!w.grammar){P(o.util.encode(w.code));return}if(_&&n.Worker){var O=new Worker(o.filename);O.onmessage=function(Z){P(Z.data)},O.postMessage(JSON.stringify({language:w.language,code:w.code,immediateClose:!0}))}else P(o.highlight(w.code,w.grammar,w.language))},highlight:function(b,_,y){var M={code:b,grammar:_,language:y};if(o.hooks.run("before-tokenize",M),!M.grammar)throw new Error('The language "'+M.language+'" has no grammar.');return M.tokens=o.tokenize(M.code,M.grammar),o.hooks.run("after-tokenize",M),l.stringify(o.util.encode(M.tokens),M.language)},tokenize:function(b,_){var y=_.rest;if(y){for(var M in y)_[M]=y[M];delete _.rest}var T=new h;return f(T,T.head,b),c(b,T,_,T.head,0),g(T)},hooks:{all:{},add:function(b,_){var y=o.hooks.all;y[b]=y[b]||[],y[b].push(_)},run:function(b,_){var y=o.hooks.all[b];if(!(!y||!y.length))for(var M=0,T;T=y[M++];)T(_)}},Token:l};n.Prism=o;function l(b,_,y,M){this.type=b,this.content=_,this.alias=y,this.length=(M||"").length|0}l.stringify=function b(_,y){if(typeof _=="string")return _;if(Array.isArray(_)){var M="";return _.forEach(function(P){M+=b(P,y)}),M}var T={type:_.type,content:b(_.content,y),tag:"span",classes:["token",_.type],attributes:{},language:y},E=_.alias;E&&(Array.isArray(E)?Array.prototype.push.apply(T.classes,E):T.classes.push(E)),o.hooks.run("wrap",T);var v="";for(var w in T.attributes)v+=" "+w+'="'+(T.attributes[w]||"").replace(/"/g,"&quot;")+'"';return"<"+T.tag+' class="'+T.classes.join(" ")+'"'+v+">"+T.content+"</"+T.tag+">"};function u(b,_,y,M){b.lastIndex=_;var T=b.exec(y);if(T&&M&&T[1]){var E=T[1].length;T.index+=E,T[0]=T[0].slice(E)}return T}function c(b,_,y,M,T,E){for(var v in y)if(!(!y.hasOwnProperty(v)||!y[v])){var w=y[v];w=Array.isArray(w)?w:[w];for(var P=0;P<w.length;++P){if(E&&E.cause==v+","+P)return;var O=w[P],Z=O.inside,k=!!O.lookbehind,B=!!O.greedy,q=O.alias;if(B&&!O.pattern.global){var G=O.pattern.toString().match(/[imsuy]*$/)[0];O.pattern=RegExp(O.pattern.source,G+"g")}for(var Y=O.pattern||O,I=M.next,se=T;I!==_.tail&&!(E&&se>=E.reach);se+=I.value.length,I=I.next){var R=I.value;if(_.length>b.length)return;if(!(R instanceof l)){var X=1,V;if(B){if(V=u(Y,se,b,k),!V||V.index>=b.length)break;var H=V.index,fe=V.index+V[0].length,ue=se;for(ue+=I.value.length;H>=ue;)I=I.next,ue+=I.value.length;if(ue-=I.value.length,se=ue,I.value instanceof l)continue;for(var me=I;me!==_.tail&&(ue<fe||typeof me.value=="string");me=me.next)X++,ue+=me.value.length;X--,R=b.slice(se,ue),V.index-=se}else if(V=u(Y,0,R,k),!V)continue;var H=V.index,Le=V[0],ve=R.slice(0,H),Re=R.slice(H+Le.length),xe=se+R.length;E&&xe>E.reach&&(E.reach=xe);var ze=I.prev;ve&&(ze=f(_,ze,ve),se+=ve.length),m(_,ze,X);var D=new l(v,Z?o.tokenize(Le,Z):Le,q,Le);if(I=f(_,ze,D),Re&&f(_,I,Re),X>1){var L={cause:v+","+P,reach:xe};c(b,_,y,I.prev,se,L),E&&L.reach>E.reach&&(E.reach=L.reach)}}}}}}function h(){var b={value:null,prev:null,next:null},_={value:null,prev:b,next:null};b.next=_,this.head=b,this.tail=_,this.length=0}function f(b,_,y){var M=_.next,T={value:y,prev:_,next:M};return _.next=T,M.prev=T,b.length++,T}function m(b,_,y){for(var M=_.next,T=0;T<y&&M!==b.tail;T++)M=M.next;_.next=M,M.prev=_,b.length-=T}function g(b){for(var _=[],y=b.head.next;y!==b.tail;)_.push(y.value),y=y.next;return _}if(!n.document)return n.addEventListener&&(o.disableWorkerMessageHandler||n.addEventListener("message",function(b){var _=JSON.parse(b.data),y=_.language,M=_.code,T=_.immediateClose;n.postMessage(o.highlight(M,o.languages[y],y)),T&&n.close()},!1)),o;var d=o.util.currentScript();d&&(o.filename=d.src,d.hasAttribute("data-manual")&&(o.manual=!0));function p(){o.manual||o.highlightAll()}if(!o.manual){var x=document.readyState;x==="loading"||x==="interactive"&&d&&d.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return o}(e);r.exports&&(r.exports=t),typeof Cd<"u"&&(Cd.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(i,s){var a={};a["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[s]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+s]={pattern:/[\s\S]+/,inside:t.languages[s]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:o},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,i){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:t.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(n){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var s=n.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",i=function(d,p){return"\u2716 Error "+d+" while fetching file: "+p},s="\u2716 Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",l="loading",u="loaded",c="failed",h="pre[data-src]:not(["+o+'="'+u+'"]):not(['+o+'="'+l+'"])';function f(d,p,x){var b=new XMLHttpRequest;b.open("GET",d,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?p(b.responseText):b.status>=400?x(i(b.status,b.statusText)):x(s))},b.send(null)}function m(d){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(d||"");if(p){var x=Number(p[1]),b=p[2],_=p[3];return b?_?[x,Number(_)]:[x,void 0]:[x,x]}}t.hooks.add("before-highlightall",function(d){d.selector+=", "+h}),t.hooks.add("before-sanity-check",function(d){var p=d.element;if(p.matches(h)){d.code="",p.setAttribute(o,l);var x=p.appendChild(document.createElement("CODE"));x.textContent=n;var b=p.getAttribute("data-src"),_=d.language;if(_==="none"){var y=(/\.(\w+)$/.exec(b)||[,"none"])[1];_=a[y]||y}t.util.setLanguage(x,_),t.util.setLanguage(p,_);var M=t.plugins.autoloader;M&&M.loadLanguages(_),f(b,function(T){p.setAttribute(o,u);var E=m(p.getAttribute("data-range"));if(E){var v=T.split(/\r\n?|\n/g),w=E[0],P=E[1]==null?v.length:E[1];w<0&&(w+=v.length),w=Math.max(0,Math.min(w-1,v.length)),P<0&&(P+=v.length),P=Math.max(0,Math.min(P,v.length)),T=v.slice(w,P).join(`
`),p.hasAttribute("data-start")||p.setAttribute("data-start",String(w+1))}x.textContent=T,t.highlightElement(x)},function(T){p.setAttribute(o,c),x.textContent=T})}}),t.plugins.fileHighlight={highlight:function(p){for(var x=(p||document).querySelectorAll(h),b=0,_;_=x[b++];)t.highlightElement(_)}};var g=!1;t.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(eg);const V3=eg.exports;var G3={exports:{}};(function(r){(function(){if(typeof Prism>"u")return;var e=Object.assign||function(a,o){for(var l in o)o.hasOwnProperty(l)&&(a[l]=o[l]);return a};function t(a){this.defaults=e({},a)}function n(a){return a.replace(/-(\w)/g,function(o,l){return l.toUpperCase()})}function i(a){for(var o=0,l=0;l<a.length;++l)a.charCodeAt(l)=="	".charCodeAt(0)&&(o+=3);return a.length+o}var s={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};t.prototype={setDefaults:function(a){this.defaults=e(this.defaults,a)},normalize:function(a,o){o=e(this.defaults,o);for(var l in o){var u=n(l);l!=="normalize"&&u!=="setDefaults"&&o[l]&&this[u]&&(a=this[u].call(this,a,o[l]))}return a},leftTrim:function(a){return a.replace(/^\s+/,"")},rightTrim:function(a){return a.replace(/\s+$/,"")},tabsToSpaces:function(a,o){return o=o|0||4,a.replace(/\t/g,new Array(++o).join(" "))},spacesToTabs:function(a,o){return o=o|0||4,a.replace(RegExp(" {"+o+"}","g"),"	")},removeTrailing:function(a){return a.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(a){return a.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(a){var o=a.match(/^[^\S\n\r]*(?=\S)/gm);return!o||!o[0].length||(o.sort(function(l,u){return l.length-u.length}),!o[0].length)?a:a.replace(RegExp("^"+o[0],"gm"),"")},indent:function(a,o){return a.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++o).join("	")+"$&")},breakLines:function(a,o){o=o===!0?80:o|0||80;for(var l=a.split(`
`),u=0;u<l.length;++u)if(!(i(l[u])<=o)){for(var c=l[u].split(/(\s+)/g),h=0,f=0;f<c.length;++f){var m=i(c[f]);h+=m,h>o&&(c[f]=`
`+c[f],h=m)}l[u]=c.join("")}return l.join(`
`)}},r.exports&&(r.exports=t),Prism.plugins.NormalizeWhitespace=new t({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(a){var o=Prism.plugins.NormalizeWhitespace;if(!(a.settings&&a.settings["whitespace-normalization"]===!1)&&!!Prism.util.isActive(a.element,"whitespace-normalization",!0)){if((!a.element||!a.element.parentNode)&&a.code){a.code=o.normalize(a.code,a.settings);return}var l=a.element.parentNode;if(!(!a.code||!l||l.nodeName.toLowerCase()!=="pre")){a.settings==null&&(a.settings={});for(var u in s)if(Object.hasOwnProperty.call(s,u)){var c=s[u];if(l.hasAttribute("data-"+u))try{var h=JSON.parse(l.getAttribute("data-"+u)||"true");typeof h===c&&(a.settings[u]=h)}catch{}}for(var f=l.childNodes,m="",g="",d=!1,p=0;p<f.length;++p){var x=f[p];x==a.element?d=!0:x.nodeName==="#text"&&(d?g+=x.nodeValue:m+=x.nodeValue,l.removeChild(x),--p)}if(!a.element.children.length||!Prism.plugins.KeepMarkup)a.code=m+a.code+g,a.code=o.normalize(a.code,a.settings);else{var b=m+a.element.innerHTML+g;a.element.innerHTML=o.normalize(b,a.settings),a.code=a.element.textContent}}}})})()})(G3);const H3=Es({__name:"SampleCode",props:{type:{type:String,default:"css"}},setup(r){return Br(()=>{window.Prism=window.Prism||{},window.Prism.manual=!0,window.Prism.plugins.NormalizeWhitespace.setDefaults({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),V3.highlightAll()}),(e,t)=>(Qn(),Ji("pre",null,[We("code",{class:Jl("language-"+r.type)},[Ul(e.$slots,"default",{},void 0,!0)],2)]))}});const Rs=Cs(H3,[["__scopeId","data-v-a7f3cd34"]]),X3={class:"card__heading",ref:"heading"},q3={class:"card__text"},$3=Es({__name:"DescriptionCard",props:{startX:{type:String,default:"0"},startY:{type:String,default:"0"}},setup(r){const e=r;ri.registerPlugin(Je);const t=pr(null);return Br(()=>{ri.set(t.value,{x:e.startX,y:e.startY,opacity:0}),ri.to(t.value,{x:0,y:0,opacity:1,scrollTrigger:{trigger:t.value,toggleActions:"play none none reset",start:"top center+=40%",end:"top center-=40%"}})}),(n,i)=>(Qn(),Ji("div",{class:"card",ref_key:"card",ref:t},[We("h2",X3,[Ul(n.$slots,"heading",{},void 0,!0)],512),We("div",q3,[Ul(n.$slots,"default",{},void 0,!0)])],512))}});const Mi=Cs($3,[["__scopeId","data-v-7e715687"]]),Y3=Es({__name:"SideScroller",setup(r){ri.registerPlugin(Je);const e=pr(null);return Br(()=>{setTimeout(()=>{ri.to(e.value,{x:(e.value.clientWidth-window.innerWidth)*-1,scrollTrigger:{trigger:e.value,scrub:!0,pin:!0,end:()=>"+="+(e.value.clientWidth-window.innerWidth)}})},300)}),(t,n)=>(Qn(),Ji("section",{ref_key:"sideScroller",ref:e,class:"side-scroller"},[Ul(t.$slots,"default",{},void 0,!0)],512))}});const j3=Cs(Y3,[["__scopeId","data-v-a886c619"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dh="147",Z3=0,Dd=1,K3=2,tg=1,J3=2,qo=3,Mo=0,oi=1,br=2,Cr=0,uo=1,mf=2,Pd=3,Ld=4,Q3=5,js=100,e1=101,t1=102,Rd=103,Fd=104,n1=200,i1=201,r1=202,s1=203,ng=204,ig=205,o1=206,a1=207,l1=208,u1=209,c1=210,f1=0,h1=1,d1=2,gf=3,p1=4,m1=5,g1=6,_1=7,rg=0,x1=1,v1=2,Zi=0,y1=1,b1=2,M1=3,S1=4,w1=5,sg=300,So=301,wo=302,_f=303,xf=304,gu=306,vf=1e3,gi=1001,yf=1002,vn=1003,Id=1004,Bd=1005,Kn=1006,T1=1007,_u=1008,Ss=1009,E1=1010,A1=1011,og=1012,C1=1013,ss=1014,os=1015,ba=1016,D1=1017,P1=1018,co=1020,L1=1021,R1=1022,_i=1023,F1=1024,I1=1025,ms=1026,To=1027,B1=1028,U1=1029,O1=1030,N1=1031,z1=1033,Zu=33776,Ku=33777,Ju=33778,Qu=33779,Ud=35840,Od=35841,Nd=35842,zd=35843,k1=36196,kd=37492,Wd=37496,Vd=37808,Gd=37809,Hd=37810,Xd=37811,qd=37812,$d=37813,Yd=37814,jd=37815,Zd=37816,Kd=37817,Jd=37818,Qd=37819,ep=37820,tp=37821,np=36492,ws=3e3,vt=3001,W1=3200,V1=3201,G1=0,H1=1,Ei="srgb",Ma="srgb-linear",ec=7680,X1=519,ip=35044,rp="300 es",bf=1035;class Po{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=Math.PI/180,sp=180/Math.PI;function wa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[r&255]+Jt[r>>8&255]+Jt[r>>16&255]+Jt[r>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Bn(r,e,t){return Math.max(e,Math.min(t,r))}function q1(r,e){return(r%e+e)%e}function nc(r,e,t){return(1-t)*r+t*e}function op(r){return(r&r-1)===0&&r!==0}function Mf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ya(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Cn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nn{constructor(){Nn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],c=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],x=i[6],b=i[1],_=i[4],y=i[7],M=i[2],T=i[5],E=i[8];return s[0]=a*d+o*b+l*M,s[3]=a*p+o*_+l*T,s[6]=a*x+o*y+l*E,s[1]=u*d+c*b+h*M,s[4]=u*p+c*_+h*T,s[7]=u*x+c*y+h*E,s[2]=f*d+m*b+g*M,s[5]=f*p+m*_+g*T,s[8]=f*x+m*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-n*s*c+n*o*l+i*s*u-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=c*a-o*u,f=o*l-c*s,m=u*s-a*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*u-c*n)*d,e[2]=(o*n-i*a)*d,e[3]=f*d,e[4]=(c*t-i*l)*d,e[5]=(i*s-o*t)*d,e[6]=m*d,e[7]=(n*l-u*t)*d,e[8]=(a*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-i*u,i*l,-i*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ic.makeScale(e,t)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ic=new Nn;function ag(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Zl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ll(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const rc={[Ei]:{[Ma]:gs},[Ma]:{[Ei]:Ll}},un={legacyMode:!0,get workingColorSpace(){return Ma},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(rc[e]&&rc[e][t]!==void 0){const n=rc[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ft={r:0,g:0,b:0},ui={h:0,s:0,l:0},ja={h:0,s:0,l:0};function sc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Za(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,un.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=un.workingColorSpace){return this.r=e,this.g=t,this.b=n,un.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=un.workingColorSpace){if(e=q1(e,1),t=Bn(t,0,1),n=Bn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=sc(a,s,e+1/3),this.g=sc(a,s,e),this.b=sc(a,s,e-1/3)}return un.toWorkingColorSpace(this,i),this}setStyle(e,t=Ei){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,un.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,un.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,u,c,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,un.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,un.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ei){const n=lg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=Ll(e.r),this.g=Ll(e.g),this.b=Ll(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return un.fromWorkingColorSpace(Za(this,Ft),e),Bn(Ft.r*255,0,255)<<16^Bn(Ft.g*255,0,255)<<8^Bn(Ft.b*255,0,255)<<0}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=un.workingColorSpace){un.fromWorkingColorSpace(Za(this,Ft),t);const n=Ft.r,i=Ft.g,s=Ft.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=c<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=un.workingColorSpace){return un.fromWorkingColorSpace(Za(this,Ft),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Ei){return un.fromWorkingColorSpace(Za(this,Ft),e),e!==Ei?`color(${e} ${Ft.r} ${Ft.g} ${Ft.b})`:`rgb(${Ft.r*255|0},${Ft.g*255|0},${Ft.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(ui),ui.h+=e,ui.s+=t,ui.l+=n,this.setHSL(ui.h,ui.s,ui.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(ja);const n=nc(ui.h,ja.h,t),i=nc(ui.s,ja.s,t),s=nc(ui.l,ja.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}mt.NAMES=lg;let Fs;class ug{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=Zl("canvas")),Fs.width=e.width,Fs.height=e.height;const n=Fs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=gs(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gs(t[n]/255)*255):t[n]=gs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class cg{constructor(e=null){this.isSource=!0,this.uuid=wa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(oc(i[a].image)):s.push(oc(i[a]))}else s=oc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function oc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ug.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $1=0;class kn extends Po{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,n=gi,i=gi,s=Kn,a=_u,o=_i,l=Ss,u=kn.DEFAULT_ANISOTROPY,c=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=wa(),this.name="",this.source=new cg(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vf:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vf:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=sg;kn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,n=0,i=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],x=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,y=(m+1)/2,M=(x+1)/2,T=(c+f)/4,E=(h+d)/4,v=(g+p)/4;return _>y&&_>M?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=T/n,s=E/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=v/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=E/s,i=v/s),this.set(n,i,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-c)*(f-c));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-d)/b,this.z=(f-c)/b,this.w=Math.acos((u+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ts extends Po{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new kn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fg extends kn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Y1 extends kn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ta{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],u=n[i+1],c=n[i+2],h=n[i+3];const f=s[a+0],m=s[a+1],g=s[a+2],d=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||u!==m||c!==g){let p=1-o;const x=l*f+u*m+c*g+h*d,b=x>=0?1:-1,_=1-x*x;if(_>Number.EPSILON){const M=Math.sqrt(_),T=Math.atan2(M,x*b);p=Math.sin(p*T)/M,o=Math.sin(o*T)/M}const y=o*b;if(l=l*p+f*y,u=u*p+m*y,c=c*p+g*y,h=h*p+d*y,p===1-o){const M=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=M,u*=M,c*=M,h*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],u=n[i+2],c=n[i+3],h=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+c*h+l*m-u*f,e[t+1]=l*g+c*f+u*h-o*m,e[t+2]=u*g+c*m+o*f-l*h,e[t+3]=c*g-o*h-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),c=o(i/2),h=o(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*c*h+u*m*g,this._y=u*m*h-f*c*g,this._z=u*c*g+f*m*h,this._w=u*c*h-f*m*g;break;case"YXZ":this._x=f*c*h+u*m*g,this._y=u*m*h-f*c*g,this._z=u*c*g-f*m*h,this._w=u*c*h+f*m*g;break;case"ZXY":this._x=f*c*h-u*m*g,this._y=u*m*h+f*c*g,this._z=u*c*g+f*m*h,this._w=u*c*h-f*m*g;break;case"ZYX":this._x=f*c*h-u*m*g,this._y=u*m*h+f*c*g,this._z=u*c*g-f*m*h,this._w=u*c*h+f*m*g;break;case"YZX":this._x=f*c*h+u*m*g,this._y=u*m*h+f*c*g,this._z=u*c*g-f*m*h,this._w=u*c*h-f*m*g;break;case"XZY":this._x=f*c*h-u*m*g,this._y=u*m*h-f*c*g,this._z=u*c*g+f*m*h,this._w=u*c*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(c-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+u)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-u)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+a*o+i*u-s*l,this._y=i*c+a*l+s*o-n*u,this._z=s*c+a*u+n*l-i*o,this._w=a*c-n*o-i*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ap.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ap.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=l*t+a*i-o*n,c=l*n+o*t-s*i,h=l*i+s*n-a*t,f=-s*t-a*n-o*i;return this.x=u*l+f*-s+c*-o-h*-a,this.y=c*l+f*-a+h*-s-u*-o,this.z=h*l+f*-o+u*-a-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ac.copy(this).projectOnVector(e),this.sub(ac)}reflect(e){return this.sub(ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ac=new J,ap=new Ta;class Ea{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],h=e[l+1],f=e[l+2];c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>s&&(s=c),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),h=e.getY(l),f=e.getZ(l);c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>s&&(s=c),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Gr.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Gr)}else n.boundingBox===null&&n.computeBoundingBox(),lc.copy(n.boundingBox),lc.applyMatrix4(e.matrixWorld),this.union(lc);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gr),Gr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),Ka.subVectors(this.max,Uo),Is.subVectors(e.a,Uo),Bs.subVectors(e.b,Uo),Us.subVectors(e.c,Uo),rr.subVectors(Bs,Is),sr.subVectors(Us,Bs),Hr.subVectors(Is,Us);let t=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Hr.z,Hr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Hr.z,0,-Hr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Hr.y,Hr.x,0];return!uc(t,Is,Bs,Us,Ka)||(t=[1,0,0,0,1,0,0,0,1],!uc(t,Is,Bs,Us,Ka))?!1:(Ja.crossVectors(rr,sr),t=[Ja.x,Ja.y,Ja.z],uc(t,Is,Bs,Us,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Gr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Gr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new J,new J,new J,new J,new J,new J,new J,new J],Gr=new J,lc=new Ea,Is=new J,Bs=new J,Us=new J,rr=new J,sr=new J,Hr=new J,Uo=new J,Ka=new J,Ja=new J,Xr=new J;function uc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Xr.fromArray(r,s);const o=i.x*Math.abs(Xr.x)+i.y*Math.abs(Xr.y)+i.z*Math.abs(Xr.z),l=e.dot(Xr),u=t.dot(Xr),c=n.dot(Xr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const j1=new Ea,Oo=new J,cc=new J;class xu{constructor(e=new J,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):j1.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const t=Oo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Oo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(cc)),this.expandByPoint(Oo.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new J,fc=new J,Qa=new J,or=new J,hc=new J,el=new J,dc=new J;class hg{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.direction).multiplyScalar(t).add(this.origin),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fc.copy(e).add(t).multiplyScalar(.5),Qa.copy(t).sub(e).normalize(),or.copy(this.origin).sub(fc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qa),o=or.dot(this.direction),l=-or.dot(Qa),u=or.lengthSq(),c=Math.abs(1-a*a);let h,f,m,g;if(c>0)if(h=a*l-o,f=a*o-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const d=1/c;h*=d,f*=d,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+u}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+u;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Qa).multiplyScalar(f).add(fc),m}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const n=zi.dot(this.direction),i=zi.dot(zi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,i,s){hc.subVectors(t,e),el.subVectors(n,e),dc.crossVectors(hc,el);let a=this.direction.dot(dc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;or.subVectors(this.origin,e);const l=o*this.direction.dot(el.crossVectors(or,el));if(l<0)return null;const u=o*this.direction.dot(hc.cross(or));if(u<0||l+u>a)return null;const c=-o*or.dot(dc);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,u,c,h,f,m,g,d,p){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=u,x[6]=c,x[10]=h,x[14]=f,x[3]=m,x[7]=g,x[11]=d,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Os.setFromMatrixColumn(e,0).length(),s=1/Os.setFromMatrixColumn(e,1).length(),a=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*c,m=a*h,g=o*c,d=o*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=m+g*u,t[5]=f-d*u,t[9]=-o*l,t[2]=d-f*u,t[6]=g+m*u,t[10]=a*l}else if(e.order==="YXZ"){const f=l*c,m=l*h,g=u*c,d=u*h;t[0]=f+d*o,t[4]=g*o-m,t[8]=a*u,t[1]=a*h,t[5]=a*c,t[9]=-o,t[2]=m*o-g,t[6]=d+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*c,m=l*h,g=u*c,d=u*h;t[0]=f-d*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*c,t[9]=d-f*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*c,m=a*h,g=o*c,d=o*h;t[0]=l*c,t[4]=g*u-m,t[8]=f*u+d,t[1]=l*h,t[5]=d*u+f,t[9]=m*u-g,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*u,g=o*l,d=o*u;t[0]=l*c,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=a*l,m=a*u,g=o*l,d=o*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+d,t[5]=a*c,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*c,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z1,e,K1)}lookAt(e,t,n){const i=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),ar.crossVectors(n,Dn),ar.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),ar.crossVectors(n,Dn)),ar.normalize(),tl.crossVectors(Dn,ar),i[0]=ar.x,i[4]=tl.x,i[8]=Dn.x,i[1]=ar.y,i[5]=tl.y,i[9]=Dn.y,i[2]=ar.z,i[6]=tl.z,i[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],c=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],x=n[14],b=n[3],_=n[7],y=n[11],M=n[15],T=i[0],E=i[4],v=i[8],w=i[12],P=i[1],O=i[5],Z=i[9],k=i[13],B=i[2],q=i[6],G=i[10],Y=i[14],I=i[3],se=i[7],R=i[11],X=i[15];return s[0]=a*T+o*P+l*B+u*I,s[4]=a*E+o*O+l*q+u*se,s[8]=a*v+o*Z+l*G+u*R,s[12]=a*w+o*k+l*Y+u*X,s[1]=c*T+h*P+f*B+m*I,s[5]=c*E+h*O+f*q+m*se,s[9]=c*v+h*Z+f*G+m*R,s[13]=c*w+h*k+f*Y+m*X,s[2]=g*T+d*P+p*B+x*I,s[6]=g*E+d*O+p*q+x*se,s[10]=g*v+d*Z+p*G+x*R,s[14]=g*w+d*k+p*Y+x*X,s[3]=b*T+_*P+y*B+M*I,s[7]=b*E+_*O+y*q+M*se,s[11]=b*v+_*Z+y*G+M*R,s[15]=b*w+_*k+y*Y+M*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],x=e[15];return g*(+s*l*h-i*u*h-s*o*f+n*u*f+i*o*m-n*l*m)+d*(+t*l*m-t*u*f+s*a*f-i*a*m+i*u*c-s*l*c)+p*(+t*u*h-t*o*m-s*a*h+n*a*m+s*o*c-n*u*c)+x*(-i*o*c-t*l*h+t*o*f+i*a*h-n*a*f+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],x=e[15],b=h*p*u-d*f*u+d*l*m-o*p*m-h*l*x+o*f*x,_=g*f*u-c*p*u-g*l*m+a*p*m+c*l*x-a*f*x,y=c*d*u-g*h*u+g*o*m-a*d*m-c*o*x+a*h*x,M=g*h*l-c*d*l-g*o*f+a*d*f+c*o*p-a*h*p,T=t*b+n*_+i*y+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=b*E,e[1]=(d*f*s-h*p*s-d*i*m+n*p*m+h*i*x-n*f*x)*E,e[2]=(o*p*s-d*l*s+d*i*u-n*p*u-o*i*x+n*l*x)*E,e[3]=(h*l*s-o*f*s-h*i*u+n*f*u+o*i*m-n*l*m)*E,e[4]=_*E,e[5]=(c*p*s-g*f*s+g*i*m-t*p*m-c*i*x+t*f*x)*E,e[6]=(g*l*s-a*p*s-g*i*u+t*p*u+a*i*x-t*l*x)*E,e[7]=(a*f*s-c*l*s+c*i*u-t*f*u-a*i*m+t*l*m)*E,e[8]=y*E,e[9]=(g*h*s-c*d*s-g*n*m+t*d*m+c*n*x-t*h*x)*E,e[10]=(a*d*s-g*o*s+g*n*u-t*d*u-a*n*x+t*o*x)*E,e[11]=(c*o*s-a*h*s-c*n*u+t*h*u+a*n*m-t*o*m)*E,e[12]=M*E,e[13]=(c*d*i-g*h*i+g*n*f-t*d*f-c*n*p+t*h*p)*E,e[14]=(g*o*i-a*d*i-g*n*l+t*d*l+a*n*p-t*o*p)*E,e[15]=(a*h*i-c*o*i+c*n*l-t*h*l-a*n*f+t*o*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+n,u*o-i*l,u*l+i*o,0,u*o+i*l,c*o+n,c*l-i*a,0,u*l-i*o,c*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,h=o+o,f=s*u,m=s*c,g=s*h,d=a*c,p=a*h,x=o*h,b=l*u,_=l*c,y=l*h,M=n.x,T=n.y,E=n.z;return i[0]=(1-(d+x))*M,i[1]=(m+y)*M,i[2]=(g-_)*M,i[3]=0,i[4]=(m-y)*T,i[5]=(1-(f+x))*T,i[6]=(p+b)*T,i[7]=0,i[8]=(g+_)*E,i[9]=(p-b)*E,i[10]=(1-(f+d))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Os.set(i[0],i[1],i[2]).length();const a=Os.set(i[4],i[5],i[6]).length(),o=Os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ci.copy(this);const u=1/s,c=1/a,h=1/o;return ci.elements[0]*=u,ci.elements[1]*=u,ci.elements[2]*=u,ci.elements[4]*=c,ci.elements[5]*=c,ci.elements[6]*=c,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,t.setFromRotationMatrix(ci),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),u=2*s/(n-i),c=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=u,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),u=1/(n-i),c=1/(a-s),h=(t+e)*l,f=(n+i)*u,m=(a+s)*c;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*u,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Os=new J,ci=new Vt,Z1=new J(0,0,0),K1=new J(1,1,1),ar=new J,tl=new J,Dn=new J,lp=new Vt,up=new Ta;class Aa{constructor(e=0,t=0,n=0,i=Aa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],u=i[5],c=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Bn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Bn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return up.setFromEuler(this),this.setFromQuaternion(up,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Aa.DefaultOrder="XYZ";Aa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class dg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J1=0;const cp=new J,Ns=new Ta,ki=new Vt,nl=new J,No=new J,Q1=new J,ey=new Ta,fp=new J(1,0,0),hp=new J(0,1,0),dp=new J(0,0,1),ty={type:"added"},pp={type:"removed"};class Tn extends Po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DefaultUp.clone();const e=new J,t=new Aa,n=new Ta,i=new J(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Nn}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Tn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tn.DefaultMatrixWorldAutoUpdate,this.layers=new dg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(fp,e)}rotateY(e){return this.rotateOnAxis(hp,e)}rotateZ(e){return this.rotateOnAxis(dp,e)}translateOnAxis(e,t){return cp.copy(e).applyQuaternion(this.quaternion),this.position.add(cp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fp,e)}translateY(e){return this.translateOnAxis(hp,e)}translateZ(e){return this.translateOnAxis(dp,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nl.copy(e):nl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(No,nl,this.up):ki.lookAt(nl,No,this.up),this.quaternion.setFromRotationMatrix(ki),i&&(ki.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(ki),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ty)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(pp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,Q1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,ey,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tn.DefaultUp=new J(0,1,0);Tn.DefaultMatrixAutoUpdate=!0;Tn.DefaultMatrixWorldAutoUpdate=!0;const fi=new J,Wi=new J,pc=new J,Vi=new J,zs=new J,ks=new J,mp=new J,mc=new J,gc=new J,_c=new J;class $i{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fi.subVectors(e,t),i.cross(fi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){fi.subVectors(i,t),Wi.subVectors(n,t),pc.subVectors(e,t);const a=fi.dot(fi),o=fi.dot(Wi),l=fi.dot(pc),u=Wi.dot(Wi),c=Wi.dot(pc),h=a*u-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(u*l-o*c)*f,g=(a*c-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vi),Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Vi),l.set(0,0),l.addScaledVector(s,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l}static isFrontFacing(e,t,n,i){return fi.subVectors(n,t),Wi.subVectors(e,t),fi.cross(Wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),fi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return $i.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return $i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;zs.subVectors(i,n),ks.subVectors(s,n),mc.subVectors(e,n);const l=zs.dot(mc),u=ks.dot(mc);if(l<=0&&u<=0)return t.copy(n);gc.subVectors(e,i);const c=zs.dot(gc),h=ks.dot(gc);if(c>=0&&h<=c)return t.copy(i);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(n).addScaledVector(zs,a);_c.subVectors(e,s);const m=zs.dot(_c),g=ks.dot(_c);if(g>=0&&m<=g)return t.copy(s);const d=m*u-l*g;if(d<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(ks,o);const p=c*g-m*h;if(p<=0&&h-c>=0&&m-g>=0)return mp.subVectors(s,i),o=(h-c)/(h-c+(m-g)),t.copy(i).addScaledVector(mp,o);const x=1/(p+d+f);return a=d*x,o=f*x,t.copy(n).addScaledVector(zs,a).addScaledVector(ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ny=0;class Ca extends Po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=wa(),this.name="",this.type="Material",this.blending=uo,this.side=Mo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ng,this.blendDst=ig,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=gf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ec,this.stencilZFail=ec,this.stencilZPass=ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(n.blending=this.blending),this.side!==Mo&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pg extends Ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new J,il=new ht;class ai{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ip,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)il.fromBufferAttribute(this,t),il.applyMatrix3(e),this.setXY(t,il.x,il.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ya(t,this.array)),t}setX(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ya(t,this.array)),t}setY(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ya(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ya(t,this.array)),t}setW(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array),i=Cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),n=Cn(n,this.array),i=Cn(i,this.array),s=Cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ip&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class mg extends ai{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gg extends ai{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _s extends ai{constructor(e,t,n){super(new Float32Array(e),t,n)}}let iy=0;const qn=new Vt,xc=new Tn,Ws=new J,Pn=new Ea,zo=new Ea,zt=new J;class nr extends Po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ag(e)?gg:mg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _s(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];zo.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(Pn.min,zo.min),Pn.expandByPoint(zt),zt.addVectors(Pn.max,zo.max),Pn.expandByPoint(zt)):(Pn.expandByPoint(zo.min),Pn.expandByPoint(zo.max))}Pn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)zt.fromBufferAttribute(o,u),l&&(Ws.fromBufferAttribute(e,u),zt.add(Ws)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let P=0;P<o;P++)u[P]=new J,c[P]=new J;const h=new J,f=new J,m=new J,g=new ht,d=new ht,p=new ht,x=new J,b=new J;function _(P,O,Z){h.fromArray(i,P*3),f.fromArray(i,O*3),m.fromArray(i,Z*3),g.fromArray(a,P*2),d.fromArray(a,O*2),p.fromArray(a,Z*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const k=1/(d.x*p.y-p.x*d.y);!isFinite(k)||(x.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(k),b.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(k),u[P].add(x),u[O].add(x),u[Z].add(x),c[P].add(b),c[O].add(b),c[Z].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,O=y.length;P<O;++P){const Z=y[P],k=Z.start,B=Z.count;for(let q=k,G=k+B;q<G;q+=3)_(n[q+0],n[q+1],n[q+2])}const M=new J,T=new J,E=new J,v=new J;function w(P){E.fromArray(s,P*3),v.copy(E);const O=u[P];M.copy(O),M.sub(E.multiplyScalar(E.dot(O))).normalize(),T.crossVectors(v,O);const k=T.dot(c[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=k}for(let P=0,O=y.length;P<O;++P){const Z=y[P],k=Z.start,B=Z.count;for(let q=k,G=k+B;q<G;q+=3)w(n[q+0]),w(n[q+1]),w(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new J,s=new J,a=new J,o=new J,l=new J,u=new J,c=new J,h=new J;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),c.subVectors(a,s),h.subVectors(i,s),c.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),u.fromBufferAttribute(n,p),o.add(c),l.add(c),u.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,s),h.subVectors(i,s),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,h=o.normalized,f=new u.constructor(l.length*c);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){o.isInterleavedBufferAttribute?m=l[d]*o.data.stride+o.offset:m=l[d]*c;for(let x=0;x<c;x++)f[g++]=u[m++]}return new ai(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],u=e(l,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,h=u.length;c<h;c++){const f=u[c],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const m=u[h];c.push(m.toJSON(e.data))}c.length>0&&(i[l]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,m=h.length;f<m;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const gp=new Vt,Vs=new hg,vc=new xu,lr=new J,ur=new J,cr=new J,yc=new J,bc=new J,Mc=new J,rl=new J,sl=new J,ol=new J,al=new ht,ll=new ht,ul=new ht,Sc=new J,cl=new J;class Mr extends Tn{constructor(e=new nr,t=new pg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(s),e.ray.intersectsSphere(vc)===!1)||(gp.copy(s).invert(),Vs.copy(e.ray).applyMatrix4(gp),n.boundingBox!==null&&Vs.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,u=n.morphAttributes.position,c=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const x=m[d],b=i[x.materialIndex],_=Math.max(x.start,g.start),y=Math.min(o.count,Math.min(x.start+x.count,g.start+g.count));for(let M=_,T=y;M<T;M+=3){const E=o.getX(M),v=o.getX(M+1),w=o.getX(M+2);a=fl(this,b,e,Vs,l,u,c,h,f,E,v,w),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(o.count,g.start+g.count);for(let x=d,b=p;x<b;x+=3){const _=o.getX(x),y=o.getX(x+1),M=o.getX(x+2);a=fl(this,i,e,Vs,l,u,c,h,f,_,y,M),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const x=m[d],b=i[x.materialIndex],_=Math.max(x.start,g.start),y=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let M=_,T=y;M<T;M+=3){const E=M,v=M+1,w=M+2;a=fl(this,b,e,Vs,l,u,c,h,f,E,v,w),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let x=d,b=p;x<b;x+=3){const _=x,y=x+1,M=x+2;a=fl(this,i,e,Vs,l,u,c,h,f,_,y,M),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function ry(r,e,t,n,i,s,a,o){let l;if(e.side===oi?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==br,o),l===null)return null;cl.copy(o),cl.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(cl);return u<t.near||u>t.far?null:{distance:u,point:cl.clone(),object:r}}function fl(r,e,t,n,i,s,a,o,l,u,c,h){lr.fromBufferAttribute(i,u),ur.fromBufferAttribute(i,c),cr.fromBufferAttribute(i,h);const f=r.morphTargetInfluences;if(s&&f){rl.set(0,0,0),sl.set(0,0,0),ol.set(0,0,0);for(let g=0,d=s.length;g<d;g++){const p=f[g],x=s[g];p!==0&&(yc.fromBufferAttribute(x,u),bc.fromBufferAttribute(x,c),Mc.fromBufferAttribute(x,h),a?(rl.addScaledVector(yc,p),sl.addScaledVector(bc,p),ol.addScaledVector(Mc,p)):(rl.addScaledVector(yc.sub(lr),p),sl.addScaledVector(bc.sub(ur),p),ol.addScaledVector(Mc.sub(cr),p)))}lr.add(rl),ur.add(sl),cr.add(ol)}r.isSkinnedMesh&&(r.boneTransform(u,lr),r.boneTransform(c,ur),r.boneTransform(h,cr));const m=ry(r,e,t,n,lr,ur,cr,Sc);if(m){o&&(al.fromBufferAttribute(o,u),ll.fromBufferAttribute(o,c),ul.fromBufferAttribute(o,h),m.uv=$i.getUV(Sc,lr,ur,cr,al,ll,ul,new ht)),l&&(al.fromBufferAttribute(l,u),ll.fromBufferAttribute(l,c),ul.fromBufferAttribute(l,h),m.uv2=$i.getUV(Sc,lr,ur,cr,al,ll,ul,new ht));const g={a:u,b:c,c:h,normal:new J,materialIndex:0};$i.getNormal(lr,ur,cr,g.normal),m.face=g}return m}class Da extends nr{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new _s(u,3)),this.setAttribute("normal",new _s(c,3)),this.setAttribute("uv",new _s(h,2));function g(d,p,x,b,_,y,M,T,E,v,w){const P=y/E,O=M/v,Z=y/2,k=M/2,B=T/2,q=E+1,G=v+1;let Y=0,I=0;const se=new J;for(let R=0;R<G;R++){const X=R*O-k;for(let V=0;V<q;V++){const fe=V*P-Z;se[d]=fe*b,se[p]=X*_,se[x]=B,u.push(se.x,se.y,se.z),se[d]=0,se[p]=0,se[x]=T>0?1:-1,c.push(se.x,se.y,se.z),h.push(V/E),h.push(1-R/v),Y+=1}}for(let R=0;R<v;R++)for(let X=0;X<E;X++){const V=f+X+q*R,fe=f+X+q*(R+1),ue=f+(X+1)+q*(R+1),me=f+(X+1)+q*R;l.push(V,fe,me),l.push(fe,ue,me),I+=6}o.addGroup(m,I,w),m+=I,f+=Y}}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Eo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function fn(r){const e={};for(let t=0;t<r.length;t++){const n=Eo(r[t]);for(const i in n)e[i]=n[i]}return e}function sy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _g(r){return r.getRenderTarget()===null&&r.outputEncoding===vt?Ei:Ma}const oy={clone:Eo,merge:fn};var ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ly=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ir extends Ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ay,this.fragmentShader=ly,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xg extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jn extends xg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sp*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/u,i*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gs=-90,Hs=1;class uy extends Tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Jn(Gs,Hs,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Jn(Gs,Hs,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Jn(Gs,Hs,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Jn(Gs,Hs,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Jn(Gs,Hs,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new Jn(Gs,Hs,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,u]=this.children,c=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Zi,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class vg extends kn{constructor(e,t,n,i,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:So,super(e,t,n,i,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cy extends Ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vg(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Da(5,5,5),s=new Ir({name:"CubemapFromEquirect",uniforms:Eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:oi,blending:Cr});s.uniforms.tEquirect.value=t;const a=new Mr(i,s),o=t.minFilter;return t.minFilter===_u&&(t.minFilter=Kn),new uy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const wc=new J,fy=new J,hy=new Nn;class jr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wc.subVectors(n,t).cross(fy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(wc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hy.getNormalMatrix(e),i=this.coplanarPoint(wc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new xu,hl=new J;class yg{constructor(e=new jr,t=new jr,n=new jr,i=new jr,s=new jr,a=new jr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],u=n[5],c=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],x=n[13],b=n[14],_=n[15];return t[0].setComponents(o-i,h-l,d-f,_-p).normalize(),t[1].setComponents(o+i,h+l,d+f,_+p).normalize(),t[2].setComponents(o+s,h+u,d+m,_+x).normalize(),t[3].setComponents(o-s,h-u,d-m,_-x).normalize(),t[4].setComponents(o-a,h-c,d-g,_-b).normalize(),t[5].setComponents(o+a,h+c,d+g,_+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSprite(e){return Xs.center.set(0,0,0),Xs.radius=.7071067811865476,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(hl.x=i.normal.x>0?e.max.x:e.min.x,hl.y=i.normal.y>0?e.max.y:e.min.y,hl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bg(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function dy(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,c){const h=u.array,f=u.usage,m=r.createBuffer();r.bindBuffer(c,m),r.bufferData(c,h,f),u.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,h){const f=c.array,m=c.updateRange;r.bindBuffer(h,u),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(r.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h===void 0?n.set(u,i(u,c)):h.version<u.version&&(s(h.buffer,u,c),h.version=u.version)}return{get:a,remove:o,update:l}}class ph extends nr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),u=o+1,c=l+1,h=e/o,f=t/l,m=[],g=[],d=[],p=[];for(let x=0;x<c;x++){const b=x*f-a;for(let _=0;_<u;_++){const y=_*h-s;g.push(y,-b,0),d.push(0,0,1),p.push(_/o),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let b=0;b<o;b++){const _=b+u*x,y=b+u*(x+1),M=b+1+u*(x+1),T=b+1+u*x;m.push(_,y,T),m.push(y,M,T)}this.setIndex(m),this.setAttribute("position",new _s(g,3)),this.setAttribute("normal",new _s(d,3)),this.setAttribute("uv",new _s(p,2))}static fromJSON(e){return new ph(e.width,e.height,e.widthSegments,e.heightSegments)}}var py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,my=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yy="vec3 transformed = vec3( position );",by=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,My=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Sy=`#ifdef USE_IRIDESCENCE
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
#endif`,wy=`#ifdef USE_BUMPMAP
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
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fy=`#define PI 3.141592653589793
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
}`,Iy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,By=`vec3 transformedNormal = objectNormal;
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
#endif`,Uy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,$y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ky=`#ifdef USE_GRADIENTMAP
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
}`,Jy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nb=`uniform bool receiveShadow;
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
#endif`,ib=`#if defined( USE_ENVMAP )
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
#endif`,rb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ob=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lb=`PhysicalMaterial material;
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
#endif`,ub=`struct PhysicalMaterial {
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
}`,cb=`
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
#endif`,fb=`#if defined( RE_IndirectDiffuse )
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
#endif`,hb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,db=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wb=`#ifdef USE_MORPHNORMALS
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
#endif`,Tb=`#ifdef USE_MORPHTARGETS
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
#endif`,Eb=`#ifdef USE_MORPHTARGETS
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
#endif`,Ab=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Cb=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rb=`#ifdef USE_NORMALMAP
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
#endif`,Fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ob=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$b=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yb=`float getShadowMask() {
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
}`,jb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zb=`#ifdef USE_SKINNING
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
#endif`,Kb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jb=`#ifdef USE_SKINNING
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
#endif`,Qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iM=`#ifdef USE_TRANSMISSION
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
#endif`,rM=`#ifdef USE_TRANSMISSION
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
#endif`,sM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,oM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,aM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,lM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,cM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,fM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dM=`uniform sampler2D t2D;
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xM=`#include <common>
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
}`,vM=`#if DEPTH_PACKING == 3200
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
}`,yM=`#define DISTANCE
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
}`,bM=`#define DISTANCE
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
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wM=`uniform float scale;
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
}`,TM=`uniform vec3 diffuse;
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
}`,EM=`#include <common>
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
}`,AM=`uniform vec3 diffuse;
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
}`,CM=`#define LAMBERT
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
}`,DM=`#define LAMBERT
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
}`,PM=`#define MATCAP
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
}`,LM=`#define MATCAP
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
}`,RM=`#define NORMAL
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
}`,FM=`#define NORMAL
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
}`,IM=`#define PHONG
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
}`,BM=`#define PHONG
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
}`,UM=`#define STANDARD
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
}`,OM=`#define STANDARD
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
}`,NM=`#define TOON
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
}`,zM=`#define TOON
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
}`,kM=`uniform float size;
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
}`,WM=`uniform vec3 diffuse;
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
}`,VM=`#include <common>
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
}`,GM=`uniform vec3 color;
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
}`,HM=`uniform float rotation;
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
}`,XM=`uniform vec3 diffuse;
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
}`,je={alphamap_fragment:py,alphamap_pars_fragment:my,alphatest_fragment:gy,alphatest_pars_fragment:_y,aomap_fragment:xy,aomap_pars_fragment:vy,begin_vertex:yy,beginnormal_vertex:by,bsdfs:My,iridescence_fragment:Sy,bumpmap_pars_fragment:wy,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:Ay,clipping_planes_vertex:Cy,color_fragment:Dy,color_pars_fragment:Py,color_pars_vertex:Ly,color_vertex:Ry,common:Fy,cube_uv_reflection_fragment:Iy,defaultnormal_vertex:By,displacementmap_pars_vertex:Uy,displacementmap_vertex:Oy,emissivemap_fragment:Ny,emissivemap_pars_fragment:zy,encodings_fragment:ky,encodings_pars_fragment:Wy,envmap_fragment:Vy,envmap_common_pars_fragment:Gy,envmap_pars_fragment:Hy,envmap_pars_vertex:Xy,envmap_physical_pars_fragment:ib,envmap_vertex:qy,fog_vertex:$y,fog_pars_vertex:Yy,fog_fragment:jy,fog_pars_fragment:Zy,gradientmap_pars_fragment:Ky,lightmap_fragment:Jy,lightmap_pars_fragment:Qy,lights_lambert_fragment:eb,lights_lambert_pars_fragment:tb,lights_pars_begin:nb,lights_toon_fragment:rb,lights_toon_pars_fragment:sb,lights_phong_fragment:ob,lights_phong_pars_fragment:ab,lights_physical_fragment:lb,lights_physical_pars_fragment:ub,lights_fragment_begin:cb,lights_fragment_maps:fb,lights_fragment_end:hb,logdepthbuf_fragment:db,logdepthbuf_pars_fragment:pb,logdepthbuf_pars_vertex:mb,logdepthbuf_vertex:gb,map_fragment:_b,map_pars_fragment:xb,map_particle_fragment:vb,map_particle_pars_fragment:yb,metalnessmap_fragment:bb,metalnessmap_pars_fragment:Mb,morphcolor_vertex:Sb,morphnormal_vertex:wb,morphtarget_pars_vertex:Tb,morphtarget_vertex:Eb,normal_fragment_begin:Ab,normal_fragment_maps:Cb,normal_pars_fragment:Db,normal_pars_vertex:Pb,normal_vertex:Lb,normalmap_pars_fragment:Rb,clearcoat_normal_fragment_begin:Fb,clearcoat_normal_fragment_maps:Ib,clearcoat_pars_fragment:Bb,iridescence_pars_fragment:Ub,output_fragment:Ob,packing:Nb,premultiplied_alpha_fragment:zb,project_vertex:kb,dithering_fragment:Wb,dithering_pars_fragment:Vb,roughnessmap_fragment:Gb,roughnessmap_pars_fragment:Hb,shadowmap_pars_fragment:Xb,shadowmap_pars_vertex:qb,shadowmap_vertex:$b,shadowmask_pars_fragment:Yb,skinbase_vertex:jb,skinning_pars_vertex:Zb,skinning_vertex:Kb,skinnormal_vertex:Jb,specularmap_fragment:Qb,specularmap_pars_fragment:eM,tonemapping_fragment:tM,tonemapping_pars_fragment:nM,transmission_fragment:iM,transmission_pars_fragment:rM,uv_pars_fragment:sM,uv_pars_vertex:oM,uv_vertex:aM,uv2_pars_fragment:lM,uv2_pars_vertex:uM,uv2_vertex:cM,worldpos_vertex:fM,background_vert:hM,background_frag:dM,backgroundCube_vert:pM,backgroundCube_frag:mM,cube_vert:gM,cube_frag:_M,depth_vert:xM,depth_frag:vM,distanceRGBA_vert:yM,distanceRGBA_frag:bM,equirect_vert:MM,equirect_frag:SM,linedashed_vert:wM,linedashed_frag:TM,meshbasic_vert:EM,meshbasic_frag:AM,meshlambert_vert:CM,meshlambert_frag:DM,meshmatcap_vert:PM,meshmatcap_frag:LM,meshnormal_vert:RM,meshnormal_frag:FM,meshphong_vert:IM,meshphong_frag:BM,meshphysical_vert:UM,meshphysical_frag:OM,meshtoon_vert:NM,meshtoon_frag:zM,points_vert:kM,points_frag:WM,shadow_vert:VM,shadow_frag:GM,sprite_vert:HM,sprite_frag:XM},ye={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Nn},uv2Transform:{value:new Nn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nn}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nn}}},Ci={basic:{uniforms:fn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:fn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new mt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:fn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:fn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:fn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new mt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:fn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:fn([ye.points,ye.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:fn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:fn([ye.common,ye.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:fn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:fn([ye.sprite,ye.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Nn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:fn([ye.common,ye.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:fn([ye.lights,ye.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Ci.physical={uniforms:fn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ht(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const dl={r:0,b:0,g:0};function qM(r,e,t,n,i,s,a){const o=new mt(0);let l=s===!0?0:1,u,c,h=null,f=0,m=null;function g(p,x){let b=!1,_=x.isScene===!0?x.background:null;_&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_));const y=r.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(_=null),_===null?d(o,l):_&&_.isColor&&(d(_,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===gu)?(c===void 0&&(c=new Mr(new Da(1,1,1),new Ir({name:"BackgroundCubeMaterial",uniforms:Eo(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,(h!==_||f!==_.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Mr(new ph(2,2),new Ir({name:"BackgroundMaterial",uniforms:Eo(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Mo,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function d(p,x){p.getRGB(dl,_g(r)),n.buffers.color.setClear(dl.r,dl.g,dl.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(p,x=1){o.set(p),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(o,l)},render:g}}function $M(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let u=l,c=!1;function h(B,q,G,Y,I){let se=!1;if(a){const R=d(Y,G,q);u!==R&&(u=R,m(u.object)),se=x(B,Y,G,I),se&&b(B,Y,G,I)}else{const R=q.wireframe===!0;(u.geometry!==Y.id||u.program!==G.id||u.wireframe!==R)&&(u.geometry=Y.id,u.program=G.id,u.wireframe=R,se=!0)}I!==null&&t.update(I,34963),(se||c)&&(c=!1,v(B,q,G,Y),I!==null&&r.bindBuffer(34963,t.get(I).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(B){return n.isWebGL2?r.bindVertexArray(B):s.bindVertexArrayOES(B)}function g(B){return n.isWebGL2?r.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function d(B,q,G){const Y=G.wireframe===!0;let I=o[B.id];I===void 0&&(I={},o[B.id]=I);let se=I[q.id];se===void 0&&(se={},I[q.id]=se);let R=se[Y];return R===void 0&&(R=p(f()),se[Y]=R),R}function p(B){const q=[],G=[],Y=[];for(let I=0;I<i;I++)q[I]=0,G[I]=0,Y[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:G,attributeDivisors:Y,object:B,attributes:{},index:null}}function x(B,q,G,Y){const I=u.attributes,se=q.attributes;let R=0;const X=G.getAttributes();for(const V in X)if(X[V].location>=0){const ue=I[V];let me=se[V];if(me===void 0&&(V==="instanceMatrix"&&B.instanceMatrix&&(me=B.instanceMatrix),V==="instanceColor"&&B.instanceColor&&(me=B.instanceColor)),ue===void 0||ue.attribute!==me||me&&ue.data!==me.data)return!0;R++}return u.attributesNum!==R||u.index!==Y}function b(B,q,G,Y){const I={},se=q.attributes;let R=0;const X=G.getAttributes();for(const V in X)if(X[V].location>=0){let ue=se[V];ue===void 0&&(V==="instanceMatrix"&&B.instanceMatrix&&(ue=B.instanceMatrix),V==="instanceColor"&&B.instanceColor&&(ue=B.instanceColor));const me={};me.attribute=ue,ue&&ue.data&&(me.data=ue.data),I[V]=me,R++}u.attributes=I,u.attributesNum=R,u.index=Y}function _(){const B=u.newAttributes;for(let q=0,G=B.length;q<G;q++)B[q]=0}function y(B){M(B,0)}function M(B,q){const G=u.newAttributes,Y=u.enabledAttributes,I=u.attributeDivisors;G[B]=1,Y[B]===0&&(r.enableVertexAttribArray(B),Y[B]=1),I[B]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,q),I[B]=q)}function T(){const B=u.newAttributes,q=u.enabledAttributes;for(let G=0,Y=q.length;G<Y;G++)q[G]!==B[G]&&(r.disableVertexAttribArray(G),q[G]=0)}function E(B,q,G,Y,I,se){n.isWebGL2===!0&&(G===5124||G===5125)?r.vertexAttribIPointer(B,q,G,I,se):r.vertexAttribPointer(B,q,G,Y,I,se)}function v(B,q,G,Y){if(n.isWebGL2===!1&&(B.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const I=Y.attributes,se=G.getAttributes(),R=q.defaultAttributeValues;for(const X in se){const V=se[X];if(V.location>=0){let fe=I[X];if(fe===void 0&&(X==="instanceMatrix"&&B.instanceMatrix&&(fe=B.instanceMatrix),X==="instanceColor"&&B.instanceColor&&(fe=B.instanceColor)),fe!==void 0){const ue=fe.normalized,me=fe.itemSize,H=t.get(fe);if(H===void 0)continue;const Le=H.buffer,ve=H.type,Re=H.bytesPerElement;if(fe.isInterleavedBufferAttribute){const xe=fe.data,ze=xe.stride,D=fe.offset;if(xe.isInstancedInterleavedBuffer){for(let L=0;L<V.locationSize;L++)M(V.location+L,xe.meshPerAttribute);B.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let L=0;L<V.locationSize;L++)y(V.location+L);r.bindBuffer(34962,Le);for(let L=0;L<V.locationSize;L++)E(V.location+L,me/V.locationSize,ve,ue,ze*Re,(D+me/V.locationSize*L)*Re)}else{if(fe.isInstancedBufferAttribute){for(let xe=0;xe<V.locationSize;xe++)M(V.location+xe,fe.meshPerAttribute);B.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let xe=0;xe<V.locationSize;xe++)y(V.location+xe);r.bindBuffer(34962,Le);for(let xe=0;xe<V.locationSize;xe++)E(V.location+xe,me/V.locationSize,ve,ue,me*Re,me/V.locationSize*xe*Re)}}else if(R!==void 0){const ue=R[X];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(V.location,ue);break;case 3:r.vertexAttrib3fv(V.location,ue);break;case 4:r.vertexAttrib4fv(V.location,ue);break;default:r.vertexAttrib1fv(V.location,ue)}}}}T()}function w(){Z();for(const B in o){const q=o[B];for(const G in q){const Y=q[G];for(const I in Y)g(Y[I].object),delete Y[I];delete q[G]}delete o[B]}}function P(B){if(o[B.id]===void 0)return;const q=o[B.id];for(const G in q){const Y=q[G];for(const I in Y)g(Y[I].object),delete Y[I];delete q[G]}delete o[B.id]}function O(B){for(const q in o){const G=o[q];if(G[B.id]===void 0)continue;const Y=G[B.id];for(const I in Y)g(Y[I].object),delete Y[I];delete G[B.id]}}function Z(){k(),c=!0,u!==l&&(u=l,m(u.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:k,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:y,disableUnusedAttributes:T}}function YM(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}function o(u,c){r.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,c,h),t.update(c,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function jM(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),d=r.getParameter(34921),p=r.getParameter(36347),x=r.getParameter(36348),b=r.getParameter(36349),_=f>0,y=a||e.has("OES_texture_float"),M=_&&y,T=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:T}}function ZM(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new jr,o=new Nn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,t=c(h,m,0),n=h.length,g},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,x=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?c(null):u();else{const b=s?0:n,_=b*4;let y=x.clippingState||null;l.value=y,y=c(g,f,_,m);for(let M=0;M!==_;++M)y[M]=t[M];x.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const x=m+d*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<x)&&(p=new Float32Array(x));for(let _=0,y=m;_!==d;++_,y+=4)a.copy(h[_]).applyMatrix4(b,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function KM(r){let e=new WeakMap;function t(a,o){return o===_f?a.mapping=So:o===xf&&(a.mapping=wo),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===_f||o===xf)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new cy(l.height/2);return u.fromEquirectangularTexture(r,a),e.set(a,u),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class JM extends xg{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const eo=4,_p=[.125,.215,.35,.446,.526,.582],ts=20,Tc=new JM,xp=new mt;let Ec=null;const Zr=(1+Math.sqrt(5))/2,qs=1/Zr,vp=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,Zr,qs),new J(0,Zr,-qs),new J(qs,0,Zr),new J(-qs,0,Zr),new J(Zr,qs,0),new J(-Zr,qs,0)];class yp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ec=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec),e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===So||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:ba,format:_i,encoding:ws,depthBuffer:!1},i=bp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QM(s)),this._blurMaterial=eS(s,e,t)}return i}_compileMaterial(e){const t=new Mr(this._lodPlanes[0],e);this._renderer.compile(t,Tc)}_sceneToCubeUV(e,t,n,i){const o=new Jn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(xp),c.toneMapping=Zi,c.autoClear=!1;const m=new pg({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),g=new Mr(new Da,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(xp),d=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(o.up.set(0,l[x],0),o.lookAt(u[x],0,0)):b===1?(o.up.set(0,0,l[x]),o.lookAt(0,u[x],0)):(o.up.set(0,l[x],0),o.lookAt(0,0,u[x]));const _=this._cubeSize;pl(i,b*_,x>2?_:0,_,_),c.setRenderTarget(i),d&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===So||e.mapping===wo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mp());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Mr(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;pl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Tc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=vp[(i-1)%vp.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Mr(this._lodPlanes[i],u),f=u.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ts-1),d=s/g,p=isFinite(s)?1+Math.floor(c*d):ts;p>ts&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ts}`);const x=[];let b=0;for(let E=0;E<ts;++E){const v=E/d,w=Math.exp(-v*v/2);x.push(w),E===0?b+=w:E<p&&(b+=2*w)}for(let E=0;E<x.length;E++)x[E]=x[E]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=x,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const y=this._sizeLods[i],M=3*y*(i>_-eo?i-_+eo:0),T=4*(this._cubeSize-y);pl(t,M,T,3*y,2*y),l.setRenderTarget(t),l.render(h,Tc)}}function QM(r){const e=[],t=[],n=[];let i=r;const s=r-eo+1+_p.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-eo?l=_p[a-r+eo-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,g=6,d=3,p=2,x=1,b=new Float32Array(d*g*m),_=new Float32Array(p*g*m),y=new Float32Array(x*g*m);for(let T=0;T<m;T++){const E=T%3*2/3-1,v=T>2?0:-1,w=[E,v,0,E+2/3,v,0,E+2/3,v+1,0,E,v,0,E+2/3,v+1,0,E,v+1,0];b.set(w,d*g*T),_.set(f,p*g*T);const P=[T,T,T,T,T,T];y.set(P,x*g*T)}const M=new nr;M.setAttribute("position",new ai(b,d)),M.setAttribute("uv",new ai(_,p)),M.setAttribute("faceIndex",new ai(y,x)),e.push(M),i>eo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bp(r,e,t){const n=new Ts(r,e,t);return n.texture.mapping=gu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function eS(r,e,t){const n=new Float32Array(ts),i=new J(0,1,0);return new Ir({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Mp(){return new Ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Sp(){return new Ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}function tS(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===_f||l===xf,c=l===So||l===wo;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new yp(r)),h=u?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(u&&h&&h.height>0||c&&h&&i(h)){t===null&&(t=new yp(r));const f=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function nS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function iS(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,x=d.length;p<x;p++)e.update(d[p],34962)}}function u(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const b=m.array;d=m.version;for(let _=0,y=b.length;_<y;_+=3){const M=b[_+0],T=b[_+1],E=b[_+2];f.push(M,T,T,E,E,M)}}else{const b=g.array;d=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){const M=_+0,T=_+1,E=_+2;f.push(M,T,T,E,E,M)}}const p=new(ag(f)?gg:mg)(f,1);p.version=d;const x=s.get(h);x&&e.remove(x),s.set(h,p)}function c(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function rS(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function u(f){o=f.type,l=f.bytesPerElement}function c(f,m){r.drawElements(s,m,o,f*l),t.update(m,s,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=r,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,o,f*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=h}function sS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function oS(r,e){return r[0]-e[0]}function aS(r,e){return Math.abs(e[1])-Math.abs(r[1])}function lS(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new jt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,h,f){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0;let x=s.get(c);if(x===void 0||x.count!==p){let G=function(){B.dispose(),s.delete(c),c.removeEventListener("dispose",G)};var g=G;x!==void 0&&x.texture.dispose();const y=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let P=0;y===!0&&(P=1),M===!0&&(P=2),T===!0&&(P=3);let O=c.attributes.position.count*P,Z=1;O>e.maxTextureSize&&(Z=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const k=new Float32Array(O*Z*4*p),B=new fg(k,O,Z,p);B.type=os,B.needsUpdate=!0;const q=P*4;for(let Y=0;Y<p;Y++){const I=E[Y],se=v[Y],R=w[Y],X=O*Z*4*Y;for(let V=0;V<I.count;V++){const fe=V*q;y===!0&&(a.fromBufferAttribute(I,V),k[X+fe+0]=a.x,k[X+fe+1]=a.y,k[X+fe+2]=a.z,k[X+fe+3]=0),M===!0&&(a.fromBufferAttribute(se,V),k[X+fe+4]=a.x,k[X+fe+5]=a.y,k[X+fe+6]=a.z,k[X+fe+7]=0),T===!0&&(a.fromBufferAttribute(R,V),k[X+fe+8]=a.x,k[X+fe+9]=a.y,k[X+fe+10]=a.z,k[X+fe+11]=R.itemSize===4?a.w:1)}}x={count:p,texture:B,size:new ht(O,Z)},s.set(c,x),c.addEventListener("dispose",G)}let b=0;for(let y=0;y<m.length;y++)b+=m[y];const _=c.morphTargetsRelative?1:1-b;f.getUniforms().setValue(r,"morphTargetBaseInfluence",_),f.getUniforms().setValue(r,"morphTargetInfluences",m),f.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const d=m===void 0?0:m.length;let p=n[c.id];if(p===void 0||p.length!==d){p=[];for(let M=0;M<d;M++)p[M]=[M,0];n[c.id]=p}for(let M=0;M<d;M++){const T=p[M];T[0]=M,T[1]=m[M]}p.sort(aS);for(let M=0;M<8;M++)M<d&&p[M][1]?(o[M][0]=p[M][0],o[M][1]=p[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(oS);const x=c.morphAttributes.position,b=c.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const T=o[M],E=T[0],v=T[1];E!==Number.MAX_SAFE_INTEGER&&v?(x&&c.getAttribute("morphTarget"+M)!==x[E]&&c.setAttribute("morphTarget"+M,x[E]),b&&c.getAttribute("morphNormal"+M)!==b[E]&&c.setAttribute("morphNormal"+M,b[E]),i[M]=v,_+=v):(x&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),b&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),i[M]=0)}const y=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(r,"morphTargetBaseInfluence",y),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function uS(r,e,t,n){let i=new WeakMap;function s(l){const u=n.render.frame,c=l.geometry,h=e.get(l,c);return i.get(h)!==u&&(e.update(h),i.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const Mg=new kn,Sg=new fg,wg=new Y1,Tg=new vg,wp=[],Tp=[],Ep=new Float32Array(16),Ap=new Float32Array(9),Cp=new Float32Array(4);function Lo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=wp[i];if(s===void 0&&(s=new Float32Array(i),wp[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ut(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ot(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function vu(r,e){let t=Tp[e];t===void 0&&(t=new Int32Array(e),Tp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function cS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function fS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2fv(this.addr,e),Ot(t,e)}}function hS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;r.uniform3fv(this.addr,e),Ot(t,e)}}function dS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4fv(this.addr,e),Ot(t,e)}}function pS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Cp.set(n),r.uniformMatrix2fv(this.addr,!1,Cp),Ot(t,n)}}function mS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Ap.set(n),r.uniformMatrix3fv(this.addr,!1,Ap),Ot(t,n)}}function gS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Ep.set(n),r.uniformMatrix4fv(this.addr,!1,Ep),Ot(t,n)}}function _S(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function xS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2iv(this.addr,e),Ot(t,e)}}function vS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3iv(this.addr,e),Ot(t,e)}}function yS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4iv(this.addr,e),Ot(t,e)}}function bS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function MS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2uiv(this.addr,e),Ot(t,e)}}function SS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3uiv(this.addr,e),Ot(t,e)}}function wS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4uiv(this.addr,e),Ot(t,e)}}function TS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Mg,i)}function ES(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wg,i)}function AS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Tg,i)}function CS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sg,i)}function DS(r){switch(r){case 5126:return cS;case 35664:return fS;case 35665:return hS;case 35666:return dS;case 35674:return pS;case 35675:return mS;case 35676:return gS;case 5124:case 35670:return _S;case 35667:case 35671:return xS;case 35668:case 35672:return vS;case 35669:case 35673:return yS;case 5125:return bS;case 36294:return MS;case 36295:return SS;case 36296:return wS;case 35678:case 36198:case 36298:case 36306:case 35682:return TS;case 35679:case 36299:case 36307:return ES;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return CS}}function PS(r,e){r.uniform1fv(this.addr,e)}function LS(r,e){const t=Lo(e,this.size,2);r.uniform2fv(this.addr,t)}function RS(r,e){const t=Lo(e,this.size,3);r.uniform3fv(this.addr,t)}function FS(r,e){const t=Lo(e,this.size,4);r.uniform4fv(this.addr,t)}function IS(r,e){const t=Lo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function BS(r,e){const t=Lo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function US(r,e){const t=Lo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function OS(r,e){r.uniform1iv(this.addr,e)}function NS(r,e){r.uniform2iv(this.addr,e)}function zS(r,e){r.uniform3iv(this.addr,e)}function kS(r,e){r.uniform4iv(this.addr,e)}function WS(r,e){r.uniform1uiv(this.addr,e)}function VS(r,e){r.uniform2uiv(this.addr,e)}function GS(r,e){r.uniform3uiv(this.addr,e)}function HS(r,e){r.uniform4uiv(this.addr,e)}function XS(r,e,t){const n=this.cache,i=e.length,s=vu(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Mg,s[a])}function qS(r,e,t){const n=this.cache,i=e.length,s=vu(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||wg,s[a])}function $S(r,e,t){const n=this.cache,i=e.length,s=vu(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Tg,s[a])}function YS(r,e,t){const n=this.cache,i=e.length,s=vu(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Sg,s[a])}function jS(r){switch(r){case 5126:return PS;case 35664:return LS;case 35665:return RS;case 35666:return FS;case 35674:return IS;case 35675:return BS;case 35676:return US;case 5124:case 35670:return OS;case 35667:case 35671:return NS;case 35668:case 35672:return zS;case 35669:case 35673:return kS;case 5125:return WS;case 36294:return VS;case 36295:return GS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return XS;case 35679:case 36299:case 36307:return qS;case 35680:case 36300:case 36308:case 36293:return $S;case 36289:case 36303:case 36311:case 36292:return YS}}class ZS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=DS(t.type)}}class KS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=jS(t.type)}}class JS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ac=/(\w+)(\])?(\[|\.)?/g;function Dp(r,e){r.seq.push(e),r.map[e.id]=e}function QS(r,e,t){const n=r.name,i=n.length;for(Ac.lastIndex=0;;){const s=Ac.exec(n),a=Ac.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===i){Dp(t,u===void 0?new ZS(o,r,e):new KS(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new JS(o),Dp(t,h)),t=h}}}class Rl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);QS(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Pp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let ew=0;function tw(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function nw(r){switch(r){case ws:return["Linear","( value )"];case vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Lp(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+tw(r.getShaderSource(e),a)}else return i}function iw(r,e){const t=nw(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function rw(r,e){let t;switch(e){case y1:t="Linear";break;case b1:t="Reinhard";break;case M1:t="OptimizedCineon";break;case S1:t="ACESFilmic";break;case w1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sw(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($o).join(`
`)}function ow(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function aw(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function $o(r){return r!==""}function Rp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(r){return r.replace(lw,uw)}function uw(r,e){const t=je[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sf(t)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ip(r){return r.replace(cw,fw)}function fw(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bp(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===tg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===J3?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qo&&(e="SHADOWMAP_TYPE_VSM"),e}function dw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case So:case wo:e="ENVMAP_TYPE_CUBE";break;case gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wo:e="ENVMAP_MODE_REFRACTION";break}return e}function mw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case rg:e="ENVMAP_BLENDING_MULTIPLY";break;case x1:e="ENVMAP_BLENDING_MIX";break;case v1:e="ENVMAP_BLENDING_ADD";break}return e}function gw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _w(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=hw(t),u=dw(t),c=pw(t),h=mw(t),f=gw(t),m=t.isWebGL2?"":sw(t),g=ow(s),d=i.createProgram();let p,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter($o).join(`
`),p.length>0&&(p+=`
`),x=[m,g].filter($o).join(`
`),x.length>0&&(x+=`
`)):(p=[Bp(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),x=[m,Bp(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?je.tonemapping_pars_fragment:"",t.toneMapping!==Zi?rw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.encodings_pars_fragment,iw("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($o).join(`
`)),a=Sf(a),a=Rp(a,t),a=Fp(a,t),o=Sf(o),o=Rp(o,t),o=Fp(o,t),a=Ip(a),o=Ip(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",t.glslVersion===rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=b+p+a,y=b+x+o,M=Pp(i,35633,_),T=Pp(i,35632,y);if(i.attachShader(d,M),i.attachShader(d,T),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),P=i.getShaderInfoLog(M).trim(),O=i.getShaderInfoLog(T).trim();let Z=!0,k=!0;if(i.getProgramParameter(d,35714)===!1){Z=!1;const B=Lp(i,M,"vertex"),q=Lp(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+B+`
`+q)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(P===""||O==="")&&(k=!1);k&&(this.diagnostics={runnable:Z,programLog:w,vertexShader:{log:P,prefix:p},fragmentShader:{log:O,prefix:x}})}i.deleteShader(M),i.deleteShader(T);let E;this.getUniforms=function(){return E===void 0&&(E=new Rl(i,d)),E};let v;return this.getAttributes=function(){return v===void 0&&(v=aw(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=ew++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=T,this}let xw=0;class vw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yw(e),t.set(e,n)),n}}class yw{constructor(e){this.id=xw++,this.code=e,this.usedTimes=0}}function bw(r,e,t,n,i,s,a){const o=new dg,l=new vw,u=[],c=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,w,P,O,Z){const k=O.fog,B=Z.geometry,q=v.isMeshStandardMaterial?O.environment:null,G=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),Y=!!G&&G.mapping===gu?G.image.height:null,I=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const se=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,R=se!==void 0?se.length:0;let X=0;B.morphAttributes.position!==void 0&&(X=1),B.morphAttributes.normal!==void 0&&(X=2),B.morphAttributes.color!==void 0&&(X=3);let V,fe,ue,me;if(I){const ze=Ci[I];V=ze.vertexShader,fe=ze.fragmentShader}else V=v.vertexShader,fe=v.fragmentShader,l.update(v),ue=l.getVertexShaderID(v),me=l.getFragmentShaderID(v);const H=r.getRenderTarget(),Le=v.alphaTest>0,ve=v.clearcoat>0,Re=v.iridescence>0;return{isWebGL2:c,shaderID:I,shaderName:v.type,vertexShader:V,fragmentShader:fe,defines:v.defines,customVertexShaderID:ue,customFragmentShaderID:me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:f,outputEncoding:H===null?r.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:ws,map:!!v.map,matcap:!!v.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:Y,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===H1,tangentSpaceNormalMap:v.normalMapType===G1,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===vt,clearcoat:ve,clearcoatMap:ve&&!!v.clearcoatMap,clearcoatRoughnessMap:ve&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!v.clearcoatNormalMap,iridescence:Re,iridescenceMap:Re&&!!v.iridescenceMap,iridescenceThicknessMap:Re&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===uo,alphaMap:!!v.alphaMap,alphaTest:Le,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!B.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!k,useFog:v.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:X,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:Zi,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===br,flipSided:v.side===oi,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)w.push(P),w.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(x(w,v),b(w,v),w.push(r.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.lightMap&&o.enable(7),w.aoMap&&o.enable(8),w.emissiveMap&&o.enable(9),w.bumpMap&&o.enable(10),w.normalMap&&o.enable(11),w.objectSpaceNormalMap&&o.enable(12),w.tangentSpaceNormalMap&&o.enable(13),w.clearcoat&&o.enable(14),w.clearcoatMap&&o.enable(15),w.clearcoatRoughnessMap&&o.enable(16),w.clearcoatNormalMap&&o.enable(17),w.iridescence&&o.enable(18),w.iridescenceMap&&o.enable(19),w.iridescenceThicknessMap&&o.enable(20),w.displacementMap&&o.enable(21),w.specularMap&&o.enable(22),w.roughnessMap&&o.enable(23),w.metalnessMap&&o.enable(24),w.gradientMap&&o.enable(25),w.alphaMap&&o.enable(26),w.alphaTest&&o.enable(27),w.vertexColors&&o.enable(28),w.vertexAlphas&&o.enable(29),w.vertexUvs&&o.enable(30),w.vertexTangents&&o.enable(31),w.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.physicallyCorrectLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.specularIntensityMap&&o.enable(15),w.specularColorMap&&o.enable(16),w.transmission&&o.enable(17),w.transmissionMap&&o.enable(18),w.thicknessMap&&o.enable(19),w.sheen&&o.enable(20),w.sheenColorMap&&o.enable(21),w.sheenRoughnessMap&&o.enable(22),w.decodeVideoTexture&&o.enable(23),w.opaque&&o.enable(24),v.push(o.mask)}function _(v){const w=g[v.type];let P;if(w){const O=Ci[w];P=oy.clone(O.uniforms)}else P=v.uniforms;return P}function y(v,w){let P;for(let O=0,Z=u.length;O<Z;O++){const k=u[O];if(k.cacheKey===w){P=k,++P.usedTimes;break}}return P===void 0&&(P=new _w(r,w,v,s),u.push(P)),P}function M(v){if(--v.usedTimes===0){const w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),v.destroy()}}function T(v){l.remove(v)}function E(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:E}}function Mw(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Sw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Up(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Op(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,m,g,d,p){let x=r[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},r[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=m,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=d,x.group=p),e++,x}function o(h,f,m,g,d,p){const x=a(h,f,m,g,d,p);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function l(h,f,m,g,d,p){const x=a(h,f,m,g,d,p);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function u(h,f){t.length>1&&t.sort(h||Sw),n.length>1&&n.sort(f||Up),i.length>1&&i.sort(f||Up)}function c(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:c,sort:u}}function ww(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Op,r.set(n,[a])):i>=s.length?(a=new Op,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Tw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new mt};break;case"SpotLight":t={position:new J,direction:new J,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=t,t}}}function Ew(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Aw=0;function Cw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Dw(r,e){const t=new Tw,n=Ew(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new J);const s=new J,a=new Vt,o=new Vt;function l(c,h){let f=0,m=0,g=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,p=0,x=0,b=0,_=0,y=0,M=0,T=0,E=0,v=0;c.sort(Cw);const w=h!==!0?Math.PI:1;for(let O=0,Z=c.length;O<Z;O++){const k=c[O],B=k.color,q=k.intensity,G=k.distance,Y=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=B.r*q*w,m+=B.g*q*w,g+=B.b*q*w;else if(k.isLightProbe)for(let I=0;I<9;I++)i.probe[I].addScaledVector(k.sh.coefficients[I],q);else if(k.isDirectionalLight){const I=t.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity*w),k.castShadow){const se=k.shadow,R=n.get(k);R.shadowBias=se.bias,R.shadowNormalBias=se.normalBias,R.shadowRadius=se.radius,R.shadowMapSize=se.mapSize,i.directionalShadow[d]=R,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=k.shadow.matrix,y++}i.directional[d]=I,d++}else if(k.isSpotLight){const I=t.get(k);I.position.setFromMatrixPosition(k.matrixWorld),I.color.copy(B).multiplyScalar(q*w),I.distance=G,I.coneCos=Math.cos(k.angle),I.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),I.decay=k.decay,i.spot[x]=I;const se=k.shadow;if(k.map&&(i.spotLightMap[E]=k.map,E++,se.updateMatrices(k),k.castShadow&&v++),i.spotLightMatrix[x]=se.matrix,k.castShadow){const R=n.get(k);R.shadowBias=se.bias,R.shadowNormalBias=se.normalBias,R.shadowRadius=se.radius,R.shadowMapSize=se.mapSize,i.spotShadow[x]=R,i.spotShadowMap[x]=Y,T++}x++}else if(k.isRectAreaLight){const I=t.get(k);I.color.copy(B).multiplyScalar(q),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),i.rectArea[b]=I,b++}else if(k.isPointLight){const I=t.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity*w),I.distance=k.distance,I.decay=k.decay,k.castShadow){const se=k.shadow,R=n.get(k);R.shadowBias=se.bias,R.shadowNormalBias=se.normalBias,R.shadowRadius=se.radius,R.shadowMapSize=se.mapSize,R.shadowCameraNear=se.camera.near,R.shadowCameraFar=se.camera.far,i.pointShadow[p]=R,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=k.shadow.matrix,M++}i.point[p]=I,p++}else if(k.isHemisphereLight){const I=t.get(k);I.skyColor.copy(k.color).multiplyScalar(q*w),I.groundColor.copy(k.groundColor).multiplyScalar(q*w),i.hemi[_]=I,_++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==d||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==b||P.hemiLength!==_||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==T||P.numSpotMaps!==E)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=b,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=T+E-v,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=v,P.directionalLength=d,P.pointLength=p,P.spotLength=x,P.rectAreaLength=b,P.hemiLength=_,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=T,P.numSpotMaps=E,i.version=Aw++)}function u(c,h){let f=0,m=0,g=0,d=0,p=0;const x=h.matrixWorldInverse;for(let b=0,_=c.length;b<_;b++){const y=c[b];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),f++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),g++}else if(y.isRectAreaLight){const M=i.rectArea[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),o.identity(),a.copy(y.matrixWorld),a.premultiply(x),o.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),d++}else if(y.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),m++}else if(y.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(x),p++}}}return{setup:l,setupView:u,state:i}}function Np(r,e){const t=new Dw(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function u(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function Pw(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Np(r,e),t.set(s,[l])):a>=o.length?(l=new Np(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Lw extends Ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rw extends Ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new J,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iw=`uniform sampler2D shadow_pass;
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
}`;function Bw(r,e,t){let n=new yg;const i=new ht,s=new ht,a=new jt,o=new Lw({depthPacking:V1}),l=new Rw,u={},c=t.maxTextureSize,h={0:oi,1:Mo,2:br},f=new Ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Fw,fragmentShader:Iw}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new nr;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Mr(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tg,this.render=function(y,M,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const E=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Cr),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let O=0,Z=y.length;O<Z;O++){const k=y[O],B=k.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const q=B.getFrameExtents();if(i.multiply(q),s.copy(B.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/q.x),i.x=s.x*q.x,B.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/q.y),i.y=s.y*q.y,B.mapSize.y=s.y)),B.map===null){const Y=this.type!==qo?{minFilter:vn,magFilter:vn}:{};B.map=new Ts(i.x,i.y,Y),B.map.texture.name=k.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const G=B.getViewportCount();for(let Y=0;Y<G;Y++){const I=B.getViewport(Y);a.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),P.viewport(a),B.updateMatrices(k,Y),n=B.getFrustum(),_(M,T,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===qo&&x(B,T),B.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(E,v,w)};function x(y,M){const T=e.update(d);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ts(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(M,null,T,f,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(M,null,T,m,d,null)}function b(y,M,T,E,v,w){let P=null;const O=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(O!==void 0?P=O:P=T.isPointLight===!0?l:o,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const Z=P.uuid,k=M.uuid;let B=u[Z];B===void 0&&(B={},u[Z]=B);let q=B[k];q===void 0&&(q=P.clone(),B[k]=q),P=q}return P.visible=M.visible,P.wireframe=M.wireframe,w===qo?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:h[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(T.matrixWorld),P.nearDistance=E,P.farDistance=v),P}function _(y,M,T,E,v){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===qo)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const O=e.update(y),Z=y.material;if(Array.isArray(Z)){const k=O.groups;for(let B=0,q=k.length;B<q;B++){const G=k[B],Y=Z[G.materialIndex];if(Y&&Y.visible){const I=b(y,Y,E,T.near,T.far,v);r.renderBufferDirect(T,null,O,I,y,G)}}}else if(Z.visible){const k=b(y,Z,E,T.near,T.far,v);r.renderBufferDirect(T,null,O,k,y,null)}}const P=y.children;for(let O=0,Z=P.length;O<Z;O++)_(P[O],M,T,E,v)}}function Uw(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const re=new jt;let he=null;const be=new jt(0,0,0,0);return{setMask:function(Pe){he!==Pe&&!U&&(r.colorMask(Pe,Pe,Pe,Pe),he=Pe)},setLocked:function(Pe){U=Pe},setClear:function(Pe,qe,gt,Mt,Xe){Xe===!0&&(Pe*=Mt,qe*=Mt,gt*=Mt),re.set(Pe,qe,gt,Mt),be.equals(re)===!1&&(r.clearColor(Pe,qe,gt,Mt),be.copy(re))},reset:function(){U=!1,he=null,be.set(-1,0,0,0)}}}function s(){let U=!1,re=null,he=null,be=null;return{setTest:function(Pe){Pe?Le(2929):ve(2929)},setMask:function(Pe){re!==Pe&&!U&&(r.depthMask(Pe),re=Pe)},setFunc:function(Pe){if(he!==Pe){switch(Pe){case f1:r.depthFunc(512);break;case h1:r.depthFunc(519);break;case d1:r.depthFunc(513);break;case gf:r.depthFunc(515);break;case p1:r.depthFunc(514);break;case m1:r.depthFunc(518);break;case g1:r.depthFunc(516);break;case _1:r.depthFunc(517);break;default:r.depthFunc(515)}he=Pe}},setLocked:function(Pe){U=Pe},setClear:function(Pe){be!==Pe&&(r.clearDepth(Pe),be=Pe)},reset:function(){U=!1,re=null,he=null,be=null}}}function a(){let U=!1,re=null,he=null,be=null,Pe=null,qe=null,gt=null,Mt=null,Xe=null;return{setTest:function(ie){U||(ie?Le(2960):ve(2960))},setMask:function(ie){re!==ie&&!U&&(r.stencilMask(ie),re=ie)},setFunc:function(ie,Ae,Ee){(he!==ie||be!==Ae||Pe!==Ee)&&(r.stencilFunc(ie,Ae,Ee),he=ie,be=Ae,Pe=Ee)},setOp:function(ie,Ae,Ee){(qe!==ie||gt!==Ae||Mt!==Ee)&&(r.stencilOp(ie,Ae,Ee),qe=ie,gt=Ae,Mt=Ee)},setLocked:function(ie){U=ie},setClear:function(ie){Xe!==ie&&(r.clearStencil(ie),Xe=ie)},reset:function(){U=!1,re=null,he=null,be=null,Pe=null,qe=null,gt=null,Mt=null,Xe=null}}}const o=new i,l=new s,u=new a,c=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,x=!1,b=null,_=null,y=null,M=null,T=null,E=null,v=null,w=!1,P=null,O=null,Z=null,k=null,B=null;const q=r.getParameter(35661);let G=!1,Y=0;const I=r.getParameter(7938);I.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(I)[1]),G=Y>=1):I.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),G=Y>=2);let se=null,R={};const X=r.getParameter(3088),V=r.getParameter(2978),fe=new jt().fromArray(X),ue=new jt().fromArray(V);function me(U,re,he){const be=new Uint8Array(4),Pe=r.createTexture();r.bindTexture(U,Pe),r.texParameteri(U,10241,9728),r.texParameteri(U,10240,9728);for(let qe=0;qe<he;qe++)r.texImage2D(re+qe,0,6408,1,1,0,6408,5121,be);return Pe}const H={};H[3553]=me(3553,3553,1),H[34067]=me(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Le(2929),l.setFunc(gf),ne(!1),F(Dd),Le(2884),$(Cr);function Le(U){f[U]!==!0&&(r.enable(U),f[U]=!0)}function ve(U){f[U]!==!1&&(r.disable(U),f[U]=!1)}function Re(U,re){return m[U]!==re?(r.bindFramebuffer(U,re),m[U]=re,n&&(U===36009&&(m[36160]=re),U===36160&&(m[36009]=re)),!0):!1}function xe(U,re){let he=d,be=!1;if(U)if(he=g.get(re),he===void 0&&(he=[],g.set(re,he)),U.isWebGLMultipleRenderTargets){const Pe=U.texture;if(he.length!==Pe.length||he[0]!==36064){for(let qe=0,gt=Pe.length;qe<gt;qe++)he[qe]=36064+qe;he.length=Pe.length,be=!0}}else he[0]!==36064&&(he[0]=36064,be=!0);else he[0]!==1029&&(he[0]=1029,be=!0);be&&(t.isWebGL2?r.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function ze(U){return p!==U?(r.useProgram(U),p=U,!0):!1}const D={[js]:32774,[e1]:32778,[t1]:32779};if(n)D[Rd]=32775,D[Fd]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(D[Rd]=U.MIN_EXT,D[Fd]=U.MAX_EXT)}const L={[n1]:0,[i1]:1,[r1]:768,[ng]:770,[c1]:776,[l1]:774,[o1]:772,[s1]:769,[ig]:771,[u1]:775,[a1]:773};function $(U,re,he,be,Pe,qe,gt,Mt){if(U===Cr){x===!0&&(ve(3042),x=!1);return}if(x===!1&&(Le(3042),x=!0),U!==Q3){if(U!==b||Mt!==w){if((_!==js||T!==js)&&(r.blendEquation(32774),_=js,T=js),Mt)switch(U){case uo:r.blendFuncSeparate(1,771,1,771);break;case mf:r.blendFunc(1,1);break;case Pd:r.blendFuncSeparate(0,769,0,1);break;case Ld:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case uo:r.blendFuncSeparate(770,771,1,771);break;case mf:r.blendFunc(770,1);break;case Pd:r.blendFuncSeparate(0,769,0,1);break;case Ld:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,M=null,E=null,v=null,b=U,w=Mt}return}Pe=Pe||re,qe=qe||he,gt=gt||be,(re!==_||Pe!==T)&&(r.blendEquationSeparate(D[re],D[Pe]),_=re,T=Pe),(he!==y||be!==M||qe!==E||gt!==v)&&(r.blendFuncSeparate(L[he],L[be],L[qe],L[gt]),y=he,M=be,E=qe,v=gt),b=U,w=!1}function oe(U,re){U.side===br?ve(2884):Le(2884);let he=U.side===oi;re&&(he=!he),ne(he),U.blending===uo&&U.transparent===!1?$(Cr):$(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const be=U.stencilWrite;u.setTest(be),be&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),te(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Le(32926):ve(32926)}function ne(U){P!==U&&(U?r.frontFace(2304):r.frontFace(2305),P=U)}function F(U){U!==Z3?(Le(2884),U!==O&&(U===Dd?r.cullFace(1029):U===K3?r.cullFace(1028):r.cullFace(1032))):ve(2884),O=U}function de(U){U!==Z&&(G&&r.lineWidth(U),Z=U)}function te(U,re,he){U?(Le(32823),(k!==re||B!==he)&&(r.polygonOffset(re,he),k=re,B=he)):ve(32823)}function pe(U){U?Le(3089):ve(3089)}function le(U){U===void 0&&(U=33984+q-1),se!==U&&(r.activeTexture(U),se=U)}function A(U,re,he){he===void 0&&(se===null?he=33984+q-1:he=se);let be=R[he];be===void 0&&(be={type:void 0,texture:void 0},R[he]=be),(be.type!==U||be.texture!==re)&&(se!==he&&(r.activeTexture(he),se=he),r.bindTexture(U,re||H[U]),be.type=U,be.texture=re)}function S(){const U=R[se];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function N(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(U){fe.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),fe.copy(U))}function Se(U){ue.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ue.copy(U))}function we(U,re){let he=h.get(re);he===void 0&&(he=new WeakMap,h.set(re,he));let be=he.get(U);be===void 0&&(be=r.getUniformBlockIndex(re,U.name),he.set(U,be))}function Qe(U,re){const be=h.get(re).get(U);c.get(U)!==be&&(r.uniformBlockBinding(re,be,U.__bindingPointIndex),c.set(U,be))}function st(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},se=null,R={},m={},g=new WeakMap,d=[],p=null,x=!1,b=null,_=null,y=null,M=null,T=null,E=null,v=null,w=!1,P=null,O=null,Z=null,k=null,B=null,fe.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Le,disable:ve,bindFramebuffer:Re,drawBuffers:xe,useProgram:ze,setBlending:$,setMaterial:oe,setFlipSided:ne,setCullFace:F,setLineWidth:de,setPolygonOffset:te,setScissorTest:pe,activeTexture:le,bindTexture:A,unbindTexture:S,compressedTexImage2D:N,compressedTexImage3D:K,texImage2D:Ue,texImage3D:Te,updateUBOMapping:we,uniformBlockBinding:Qe,texStorage2D:ee,texStorage3D:Ce,texSubImage2D:Q,texSubImage3D:ce,compressedTexSubImage2D:_e,compressedTexSubImage3D:ge,scissor:Fe,viewport:Se,reset:st}}function Ow(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,c=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,S){return x?new OffscreenCanvas(A,S):Zl("canvas")}function _(A,S,N,K){let Q=1;if((A.width>K||A.height>K)&&(Q=K/Math.max(A.width,A.height)),Q<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ce=S?Mf:Math.floor,_e=ce(Q*A.width),ge=ce(Q*A.height);d===void 0&&(d=b(_e,ge));const ee=N?b(_e,ge):d;return ee.width=_e,ee.height=ge,ee.getContext("2d").drawImage(A,0,0,_e,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_e+"x"+ge+")."),ee}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return op(A.width)&&op(A.height)}function M(A){return o?!1:A.wrapS!==gi||A.wrapT!==gi||A.minFilter!==vn&&A.minFilter!==Kn}function T(A,S){return A.generateMipmaps&&S&&A.minFilter!==vn&&A.minFilter!==Kn}function E(A){r.generateMipmap(A)}function v(A,S,N,K,Q=!1){if(o===!1)return S;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce=S;return S===6403&&(N===5126&&(ce=33326),N===5131&&(ce=33325),N===5121&&(ce=33321)),S===33319&&(N===5126&&(ce=33328),N===5131&&(ce=33327),N===5121&&(ce=33323)),S===6408&&(N===5126&&(ce=34836),N===5131&&(ce=34842),N===5121&&(ce=K===vt&&Q===!1?35907:32856),N===32819&&(ce=32854),N===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function w(A,S,N){return T(A,N)===!0||A.isFramebufferTexture&&A.minFilter!==vn&&A.minFilter!==Kn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){return A===vn||A===Id||A===Bd?9728:9729}function O(A){const S=A.target;S.removeEventListener("dispose",O),k(S),S.isVideoTexture&&g.delete(S)}function Z(A){const S=A.target;S.removeEventListener("dispose",Z),q(S)}function k(A){const S=n.get(A);if(S.__webglInit===void 0)return;const N=A.source,K=p.get(N);if(K){const Q=K[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&B(A),Object.keys(K).length===0&&p.delete(N)}n.remove(A)}function B(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const N=A.source,K=p.get(N);delete K[S.__cacheKey],a.memory.textures--}function q(A){const S=A.texture,N=n.get(A),K=n.get(S);if(K.__webglTexture!==void 0&&(r.deleteTexture(K.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)r.deleteFramebuffer(N.__webglFramebuffer[Q]),N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer[Q]);else{if(r.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&r.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Q=0;Q<N.__webglColorRenderbuffer.length;Q++)N.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(N.__webglColorRenderbuffer[Q]);N.__webglDepthRenderbuffer&&r.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,ce=S.length;Q<ce;Q++){const _e=n.get(S[Q]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(S[Q])}n.remove(S),n.remove(A)}let G=0;function Y(){G=0}function I(){const A=G;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),G+=1,A}function se(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function R(A,S){const N=n.get(A);if(A.isVideoTexture&&pe(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(N,A,S);return}}t.bindTexture(3553,N.__webglTexture,33984+S)}function X(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){ve(N,A,S);return}t.bindTexture(35866,N.__webglTexture,33984+S)}function V(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){ve(N,A,S);return}t.bindTexture(32879,N.__webglTexture,33984+S)}function fe(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){Re(N,A,S);return}t.bindTexture(34067,N.__webglTexture,33984+S)}const ue={[vf]:10497,[gi]:33071,[yf]:33648},me={[vn]:9728,[Id]:9984,[Bd]:9986,[Kn]:9729,[T1]:9985,[_u]:9987};function H(A,S,N){if(N?(r.texParameteri(A,10242,ue[S.wrapS]),r.texParameteri(A,10243,ue[S.wrapT]),(A===32879||A===35866)&&r.texParameteri(A,32882,ue[S.wrapR]),r.texParameteri(A,10240,me[S.magFilter]),r.texParameteri(A,10241,me[S.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),(A===32879||A===35866)&&r.texParameteri(A,32882,33071),(S.wrapS!==gi||S.wrapT!==gi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,P(S.magFilter)),r.texParameteri(A,10241,P(S.minFilter)),S.minFilter!==vn&&S.minFilter!==Kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(S.type===os&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===ba&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(A,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Le(A,S){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",O));const K=S.source;let Q=p.get(K);Q===void 0&&(Q={},p.set(K,Q));const ce=se(S);if(ce!==A.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Q[ce].usedTimes++;const _e=Q[A.__cacheKey];_e!==void 0&&(Q[A.__cacheKey].usedTimes--,_e.usedTimes===0&&B(S)),A.__cacheKey=ce,A.__webglTexture=Q[ce].texture}return N}function ve(A,S,N){let K=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=35866),S.isData3DTexture&&(K=32879);const Q=Le(A,S),ce=S.source;t.bindTexture(K,A.__webglTexture,33984+N);const _e=n.get(ce);if(ce.version!==_e.__version||Q===!0){t.activeTexture(33984+N),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const ge=M(S)&&y(S.image)===!1;let ee=_(S.image,ge,!1,c);ee=le(S,ee);const Ce=y(ee)||o,Ue=s.convert(S.format,S.encoding);let Te=s.convert(S.type),Fe=v(S.internalFormat,Ue,Te,S.encoding,S.isVideoTexture);H(K,S,Ce);let Se;const we=S.mipmaps,Qe=o&&S.isVideoTexture!==!0,st=_e.__version===void 0||Q===!0,U=w(S,ee,Ce);if(S.isDepthTexture)Fe=6402,o?S.type===os?Fe=36012:S.type===ss?Fe=33190:S.type===co?Fe=35056:Fe=33189:S.type===os&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ms&&Fe===6402&&S.type!==og&&S.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ss,Te=s.convert(S.type)),S.format===To&&Fe===6402&&(Fe=34041,S.type!==co&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=co,Te=s.convert(S.type))),st&&(Qe?t.texStorage2D(3553,1,Fe,ee.width,ee.height):t.texImage2D(3553,0,Fe,ee.width,ee.height,0,Ue,Te,null));else if(S.isDataTexture)if(we.length>0&&Ce){Qe&&st&&t.texStorage2D(3553,U,Fe,we[0].width,we[0].height);for(let re=0,he=we.length;re<he;re++)Se=we[re],Qe?t.texSubImage2D(3553,re,0,0,Se.width,Se.height,Ue,Te,Se.data):t.texImage2D(3553,re,Fe,Se.width,Se.height,0,Ue,Te,Se.data);S.generateMipmaps=!1}else Qe?(st&&t.texStorage2D(3553,U,Fe,ee.width,ee.height),t.texSubImage2D(3553,0,0,0,ee.width,ee.height,Ue,Te,ee.data)):t.texImage2D(3553,0,Fe,ee.width,ee.height,0,Ue,Te,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Qe&&st&&t.texStorage3D(35866,U,Fe,we[0].width,we[0].height,ee.depth);for(let re=0,he=we.length;re<he;re++)Se=we[re],S.format!==_i?Ue!==null?Qe?t.compressedTexSubImage3D(35866,re,0,0,0,Se.width,Se.height,ee.depth,Ue,Se.data,0,0):t.compressedTexImage3D(35866,re,Fe,Se.width,Se.height,ee.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage3D(35866,re,0,0,0,Se.width,Se.height,ee.depth,Ue,Te,Se.data):t.texImage3D(35866,re,Fe,Se.width,Se.height,ee.depth,0,Ue,Te,Se.data)}else{Qe&&st&&t.texStorage2D(3553,U,Fe,we[0].width,we[0].height);for(let re=0,he=we.length;re<he;re++)Se=we[re],S.format!==_i?Ue!==null?Qe?t.compressedTexSubImage2D(3553,re,0,0,Se.width,Se.height,Ue,Se.data):t.compressedTexImage2D(3553,re,Fe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage2D(3553,re,0,0,Se.width,Se.height,Ue,Te,Se.data):t.texImage2D(3553,re,Fe,Se.width,Se.height,0,Ue,Te,Se.data)}else if(S.isDataArrayTexture)Qe?(st&&t.texStorage3D(35866,U,Fe,ee.width,ee.height,ee.depth),t.texSubImage3D(35866,0,0,0,0,ee.width,ee.height,ee.depth,Ue,Te,ee.data)):t.texImage3D(35866,0,Fe,ee.width,ee.height,ee.depth,0,Ue,Te,ee.data);else if(S.isData3DTexture)Qe?(st&&t.texStorage3D(32879,U,Fe,ee.width,ee.height,ee.depth),t.texSubImage3D(32879,0,0,0,0,ee.width,ee.height,ee.depth,Ue,Te,ee.data)):t.texImage3D(32879,0,Fe,ee.width,ee.height,ee.depth,0,Ue,Te,ee.data);else if(S.isFramebufferTexture){if(st)if(Qe)t.texStorage2D(3553,U,Fe,ee.width,ee.height);else{let re=ee.width,he=ee.height;for(let be=0;be<U;be++)t.texImage2D(3553,be,Fe,re,he,0,Ue,Te,null),re>>=1,he>>=1}}else if(we.length>0&&Ce){Qe&&st&&t.texStorage2D(3553,U,Fe,we[0].width,we[0].height);for(let re=0,he=we.length;re<he;re++)Se=we[re],Qe?t.texSubImage2D(3553,re,0,0,Ue,Te,Se):t.texImage2D(3553,re,Fe,Ue,Te,Se);S.generateMipmaps=!1}else Qe?(st&&t.texStorage2D(3553,U,Fe,ee.width,ee.height),t.texSubImage2D(3553,0,0,0,Ue,Te,ee)):t.texImage2D(3553,0,Fe,Ue,Te,ee);T(S,Ce)&&E(K),_e.__version=ce.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Re(A,S,N){if(S.image.length!==6)return;const K=Le(A,S),Q=S.source;t.bindTexture(34067,A.__webglTexture,33984+N);const ce=n.get(Q);if(Q.version!==ce.__version||K===!0){t.activeTexture(33984+N),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const _e=S.isCompressedTexture||S.image[0].isCompressedTexture,ge=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let re=0;re<6;re++)!_e&&!ge?ee[re]=_(S.image[re],!1,!0,u):ee[re]=ge?S.image[re].image:S.image[re],ee[re]=le(S,ee[re]);const Ce=ee[0],Ue=y(Ce)||o,Te=s.convert(S.format,S.encoding),Fe=s.convert(S.type),Se=v(S.internalFormat,Te,Fe,S.encoding),we=o&&S.isVideoTexture!==!0,Qe=ce.__version===void 0||K===!0;let st=w(S,Ce,Ue);H(34067,S,Ue);let U;if(_e){we&&Qe&&t.texStorage2D(34067,st,Se,Ce.width,Ce.height);for(let re=0;re<6;re++){U=ee[re].mipmaps;for(let he=0;he<U.length;he++){const be=U[he];S.format!==_i?Te!==null?we?t.compressedTexSubImage2D(34069+re,he,0,0,be.width,be.height,Te,be.data):t.compressedTexImage2D(34069+re,he,Se,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(34069+re,he,0,0,be.width,be.height,Te,Fe,be.data):t.texImage2D(34069+re,he,Se,be.width,be.height,0,Te,Fe,be.data)}}}else{U=S.mipmaps,we&&Qe&&(U.length>0&&st++,t.texStorage2D(34067,st,Se,ee[0].width,ee[0].height));for(let re=0;re<6;re++)if(ge){we?t.texSubImage2D(34069+re,0,0,0,ee[re].width,ee[re].height,Te,Fe,ee[re].data):t.texImage2D(34069+re,0,Se,ee[re].width,ee[re].height,0,Te,Fe,ee[re].data);for(let he=0;he<U.length;he++){const Pe=U[he].image[re].image;we?t.texSubImage2D(34069+re,he+1,0,0,Pe.width,Pe.height,Te,Fe,Pe.data):t.texImage2D(34069+re,he+1,Se,Pe.width,Pe.height,0,Te,Fe,Pe.data)}}else{we?t.texSubImage2D(34069+re,0,0,0,Te,Fe,ee[re]):t.texImage2D(34069+re,0,Se,Te,Fe,ee[re]);for(let he=0;he<U.length;he++){const be=U[he];we?t.texSubImage2D(34069+re,he+1,0,0,Te,Fe,be.image[re]):t.texImage2D(34069+re,he+1,Se,Te,Fe,be.image[re])}}}T(S,Ue)&&E(34067),ce.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function xe(A,S,N,K,Q){const ce=s.convert(N.format,N.encoding),_e=s.convert(N.type),ge=v(N.internalFormat,ce,_e,N.encoding);n.get(S).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,ge,S.width,S.height,S.depth,0,ce,_e,null):t.texImage2D(Q,0,ge,S.width,S.height,0,ce,_e,null)),t.bindFramebuffer(36160,A),te(S)?f.framebufferTexture2DMultisampleEXT(36160,K,Q,n.get(N).__webglTexture,0,de(S)):(Q===3553||Q>=34069&&Q<=34074)&&r.framebufferTexture2D(36160,K,Q,n.get(N).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(A,S,N){if(r.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let K=33189;if(N||te(S)){const Q=S.depthTexture;Q&&Q.isDepthTexture&&(Q.type===os?K=36012:Q.type===ss&&(K=33190));const ce=de(S);te(S)?f.renderbufferStorageMultisampleEXT(36161,ce,K,S.width,S.height):r.renderbufferStorageMultisample(36161,ce,K,S.width,S.height)}else r.renderbufferStorage(36161,K,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const K=de(S);N&&te(S)===!1?r.renderbufferStorageMultisample(36161,K,35056,S.width,S.height):te(S)?f.renderbufferStorageMultisampleEXT(36161,K,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{const K=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0;Q<K.length;Q++){const ce=K[Q],_e=s.convert(ce.format,ce.encoding),ge=s.convert(ce.type),ee=v(ce.internalFormat,_e,ge,ce.encoding),Ce=de(S);N&&te(S)===!1?r.renderbufferStorageMultisample(36161,Ce,ee,S.width,S.height):te(S)?f.renderbufferStorageMultisampleEXT(36161,Ce,ee,S.width,S.height):r.renderbufferStorage(36161,ee,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function D(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),R(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,Q=de(S);if(S.depthTexture.format===ms)te(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,Q):r.framebufferTexture2D(36160,36096,3553,K,0);else if(S.depthTexture.format===To)te(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,Q):r.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function L(A){const S=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");D(S.__webglFramebuffer,A)}else if(N){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]=r.createRenderbuffer(),ze(S.__webglDepthbuffer[K],A,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),ze(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function $(A,S,N){const K=n.get(A);S!==void 0&&xe(K.__webglFramebuffer,A,A.texture,36064,3553),N!==void 0&&L(A)}function oe(A){const S=A.texture,N=n.get(A),K=n.get(S);A.addEventListener("dispose",Z),A.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=S.version,a.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,ce=A.isWebGLMultipleRenderTargets===!0,_e=y(A)||o;if(Q){N.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)N.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(N.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const ge=A.texture;for(let ee=0,Ce=ge.length;ee<Ce;ee++){const Ue=n.get(ge[ee]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&te(A)===!1){const ge=ce?S:[S];N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let ee=0;ee<ge.length;ee++){const Ce=ge[ee];N.__webglColorRenderbuffer[ee]=r.createRenderbuffer(),r.bindRenderbuffer(36161,N.__webglColorRenderbuffer[ee]);const Ue=s.convert(Ce.format,Ce.encoding),Te=s.convert(Ce.type),Fe=v(Ce.internalFormat,Ue,Te,Ce.encoding,A.isXRRenderTarget===!0),Se=de(A);r.renderbufferStorageMultisample(36161,Se,Fe,A.width,A.height),r.framebufferRenderbuffer(36160,36064+ee,36161,N.__webglColorRenderbuffer[ee])}r.bindRenderbuffer(36161,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,K.__webglTexture),H(34067,S,_e);for(let ge=0;ge<6;ge++)xe(N.__webglFramebuffer[ge],A,S,36064,34069+ge);T(S,_e)&&E(34067),t.unbindTexture()}else if(ce){const ge=A.texture;for(let ee=0,Ce=ge.length;ee<Ce;ee++){const Ue=ge[ee],Te=n.get(Ue);t.bindTexture(3553,Te.__webglTexture),H(3553,Ue,_e),xe(N.__webglFramebuffer,A,Ue,36064+ee,3553),T(Ue,_e)&&E(3553)}t.unbindTexture()}else{let ge=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ge=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,K.__webglTexture),H(ge,S,_e),xe(N.__webglFramebuffer,A,S,36064,ge),T(S,_e)&&E(ge),t.unbindTexture()}A.depthBuffer&&L(A)}function ne(A){const S=y(A)||o,N=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let K=0,Q=N.length;K<Q;K++){const ce=N[K];if(T(ce,S)){const _e=A.isWebGLCubeRenderTarget?34067:3553,ge=n.get(ce).__webglTexture;t.bindTexture(_e,ge),E(_e),t.unbindTexture()}}}function F(A){if(o&&A.samples>0&&te(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],N=A.width,K=A.height;let Q=16384;const ce=[],_e=A.stencilBuffer?33306:36096,ge=n.get(A),ee=A.isWebGLMultipleRenderTargets===!0;if(ee)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(36160,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Ce,36161,null),t.bindFramebuffer(36160,ge.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Ce,3553,null,0);t.bindFramebuffer(36008,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ge.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){ce.push(36064+Ce),A.depthBuffer&&ce.push(_e);const Ue=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Ue===!1&&(A.depthBuffer&&(Q|=256),A.stencilBuffer&&(Q|=1024)),ee&&r.framebufferRenderbuffer(36008,36064,36161,ge.__webglColorRenderbuffer[Ce]),Ue===!0&&(r.invalidateFramebuffer(36008,[_e]),r.invalidateFramebuffer(36009,[_e])),ee){const Te=n.get(S[Ce]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Te,0)}r.blitFramebuffer(0,0,N,K,0,0,N,K,Q,9728),m&&r.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ee)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(36160,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Ce,36161,ge.__webglColorRenderbuffer[Ce]);const Ue=n.get(S[Ce]).__webglTexture;t.bindFramebuffer(36160,ge.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Ce,3553,Ue,0)}t.bindFramebuffer(36009,ge.__webglMultisampledFramebuffer)}}function de(A){return Math.min(h,A.samples)}function te(A){const S=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(A){const S=a.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function le(A,S){const N=A.encoding,K=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===bf||N!==ws&&(N===vt?o===!1?e.has("EXT_sRGB")===!0&&K===_i?(A.format=bf,A.minFilter=Kn,A.generateMipmaps=!1):S=ug.sRGBToLinear(S):(K!==_i||Q!==Ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),S}this.allocateTextureUnit=I,this.resetTextureUnits=Y,this.setTexture2D=R,this.setTexture2DArray=X,this.setTexture3D=V,this.setTextureCube=fe,this.rebindTextures=$,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=te}function Nw(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===Ss)return 5121;if(s===D1)return 32819;if(s===P1)return 32820;if(s===E1)return 5120;if(s===A1)return 5122;if(s===og)return 5123;if(s===C1)return 5124;if(s===ss)return 5125;if(s===os)return 5126;if(s===ba)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===L1)return 6406;if(s===_i)return 6408;if(s===F1)return 6409;if(s===I1)return 6410;if(s===ms)return 6402;if(s===To)return 34041;if(s===R1)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===bf)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===B1)return 6403;if(s===U1)return 36244;if(s===O1)return 33319;if(s===N1)return 33320;if(s===z1)return 36249;if(s===Zu||s===Ku||s===Ju||s===Qu)if(a===vt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Zu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ku)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ju)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Zu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ku)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ju)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ud||s===Od||s===Nd||s===zd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ud)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Od)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===k1)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kd||s===Wd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===kd)return a===vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Wd)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vd||s===Gd||s===Hd||s===Xd||s===qd||s===$d||s===Yd||s===jd||s===Zd||s===Kd||s===Jd||s===Qd||s===ep||s===tp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Vd)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gd)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Hd)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xd)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qd)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$d)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yd)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jd)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zd)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kd)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jd)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qd)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ep)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tp)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===np)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===np)return a===vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===co?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class zw extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ml extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kw={type:"move"};class Cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),x=this._getHandJoint(u,d);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),m=.02,g=.005;u.inputState.pinching&&f>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kw)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ml;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ww extends kn{constructor(e,t,n,i,s,a,o,l,u,c){if(c=c!==void 0?c:ms,c!==ms&&c!==To)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ms&&(n=ss),n===void 0&&c===To&&(n=co),super(null,i,s,a,o,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1}}class Vw extends Po{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=null,u=null,c=null,h=null,f=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const x=[],b=[],_=new Set,y=new Map,M=new Jn;M.layers.enable(1),M.viewport=new jt;const T=new Jn;T.layers.enable(2),T.viewport=new jt;const E=[M,T],v=new zw;v.layers.enable(1),v.layers.enable(2);let w=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let V=x[X];return V===void 0&&(V=new Cc,x[X]=V),V.getTargetRaySpace()},this.getControllerGrip=function(X){let V=x[X];return V===void 0&&(V=new Cc,x[X]=V),V.getGripSpace()},this.getHand=function(X){let V=x[X];return V===void 0&&(V=new Cc,x[X]=V),V.getHandSpace()};function O(X){const V=b.indexOf(X.inputSource);if(V===-1)return;const fe=x[V];fe!==void 0&&fe.dispatchEvent({type:X.type,data:X.inputSource})}function Z(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",k);for(let X=0;X<x.length;X++){const V=b[X];V!==null&&(b[X]=null,x[X].disconnect(V))}w=null,P=null,e.setRenderTarget(d),f=null,h=null,c=null,i=null,p=null,R.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:f}),p=new Ts(f.framebufferWidth,f.framebufferHeight,{format:_i,type:Ss,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let V=null,fe=null,ue=null;g.depth&&(ue=g.stencil?35056:33190,V=g.stencil?To:ms,fe=g.stencil?co:ss);const me={colorFormat:32856,depthFormat:ue,scaleFactor:s};c=new XRWebGLBinding(i,t),h=c.createProjectionLayer(me),i.updateRenderState({layers:[h]}),p=new Ts(h.textureWidth,h.textureHeight,{format:_i,type:Ss,depthTexture:new Ww(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const H=e.properties.get(p);H.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),R.setContext(i),R.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function k(X){for(let V=0;V<X.removed.length;V++){const fe=X.removed[V],ue=b.indexOf(fe);ue>=0&&(b[ue]=null,x[ue].disconnect(fe))}for(let V=0;V<X.added.length;V++){const fe=X.added[V];let ue=b.indexOf(fe);if(ue===-1){for(let H=0;H<x.length;H++)if(H>=b.length){b.push(fe),ue=H;break}else if(b[H]===null){b[H]=fe,ue=H;break}if(ue===-1)break}const me=x[ue];me&&me.connect(fe)}}const B=new J,q=new J;function G(X,V,fe){B.setFromMatrixPosition(V.matrixWorld),q.setFromMatrixPosition(fe.matrixWorld);const ue=B.distanceTo(q),me=V.projectionMatrix.elements,H=fe.projectionMatrix.elements,Le=me[14]/(me[10]-1),ve=me[14]/(me[10]+1),Re=(me[9]+1)/me[5],xe=(me[9]-1)/me[5],ze=(me[8]-1)/me[0],D=(H[8]+1)/H[0],L=Le*ze,$=Le*D,oe=ue/(-ze+D),ne=oe*-ze;V.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ne),X.translateZ(oe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const F=Le+oe,de=ve+oe,te=L-ne,pe=$+(ue-ne),le=Re*ve/de*F,A=xe*ve/de*F;X.projectionMatrix.makePerspective(te,pe,le,A,F,de)}function Y(X,V){V===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(V.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;v.near=T.near=M.near=X.near,v.far=T.far=M.far=X.far,(w!==v.near||P!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,P=v.far);const V=X.parent,fe=v.cameras;Y(v,V);for(let me=0;me<fe.length;me++)Y(fe[me],V);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),X.matrix.copy(v.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale);const ue=X.children;for(let me=0,H=ue.length;me<H;me++)ue[me].updateMatrixWorld(!0);fe.length===2?G(v,M,T):v.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(X){h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.getPlanes=function(){return _};let I=null;function se(X,V){if(u=V.getViewerPose(l||a),m=V,u!==null){const fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ue=!1;fe.length!==v.cameras.length&&(v.cameras.length=0,ue=!0);for(let me=0;me<fe.length;me++){const H=fe[me];let Le=null;if(f!==null)Le=f.getViewport(H);else{const Re=c.getViewSubImage(h,H);Le=Re.viewport,me===0&&(e.setRenderTargetTextures(p,Re.colorTexture,h.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(p))}let ve=E[me];ve===void 0&&(ve=new Jn,ve.layers.enable(me),ve.viewport=new jt,E[me]=ve),ve.matrix.fromArray(H.transform.matrix),ve.projectionMatrix.fromArray(H.projectionMatrix),ve.viewport.set(Le.x,Le.y,Le.width,Le.height),me===0&&v.matrix.copy(ve.matrix),ue===!0&&v.cameras.push(ve)}}for(let fe=0;fe<x.length;fe++){const ue=b[fe],me=x[fe];ue!==null&&me!==void 0&&me.update(ue,V,l||a)}if(I&&I(X,V),V.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let fe=null;for(const ue of _)V.detectedPlanes.has(ue)||(fe===null&&(fe=[]),fe.push(ue));if(fe!==null)for(const ue of fe)_.delete(ue),y.delete(ue),n.dispatchEvent({type:"planeremoved",data:ue});for(const ue of V.detectedPlanes)if(!_.has(ue))_.add(ue),y.set(ue,V.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ue});else{const me=y.get(ue);ue.lastChangedTime>me&&(y.set(ue,ue.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ue}))}}m=null}const R=new bg;R.setAnimationLoop(se),this.setAnimationLoop=function(X){I=X},this.dispose=function(){}}}function Gw(r,e){function t(d,p){p.color.getRGB(d.fogColor.value,_g(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,x,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),c(d,p)):p.isMeshPhongMaterial?(i(d,p),u(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,_)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?o(d,p,x,b):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===oi&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===oi&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const y=r.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uv2Transform.value.copy(_.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function o(d,p,x,b){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*x,d.scale.value=b*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function c(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,x){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===oi&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Hw(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(b,_){const y=_.program;n.uniformBlockBinding(b,y)}function u(b,_){let y=i[b.id];y===void 0&&(g(b),y=c(b),i[b.id]=y,b.addEventListener("dispose",p));const M=_.program;n.updateUBOMapping(b,M);const T=e.render.frame;s[b.id]!==T&&(f(b),s[b.id]=T)}function c(b){const _=h();b.__bindingPointIndex=_;const y=r.createBuffer(),M=b.__size,T=b.usage;return r.bindBuffer(35345,y),r.bufferData(35345,M,T),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,y),y}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const _=i[b.id],y=b.uniforms,M=b.__cache;r.bindBuffer(35345,_);for(let T=0,E=y.length;T<E;T++){const v=y[T];if(m(v,T,M)===!0){const w=v.value,P=v.__offset;typeof w=="number"?(v.__data[0]=w,r.bufferSubData(35345,P,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):w.toArray(v.__data),r.bufferSubData(35345,P,v.__data))}}r.bindBuffer(35345,null)}function m(b,_,y){const M=b.value;if(y[_]===void 0)return typeof M=="number"?y[_]=M:y[_]=M.clone(),!0;if(typeof M=="number"){if(y[_]!==M)return y[_]=M,!0}else{const T=y[_];if(T.equals(M)===!1)return T.copy(M),!0}return!1}function g(b){const _=b.uniforms;let y=0;const M=16;let T=0;for(let E=0,v=_.length;E<v;E++){const w=_[E],P=d(w);if(w.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,E>0){T=y%M;const O=M-T;T!==0&&O-P.boundary<0&&(y+=M-T,w.__offset=y)}y+=P.storage}return T=y%M,T>0&&(y+=M-T),b.__size=y,b.__cache={},this}function d(b){const _=b.value,y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(b){const _=b.target;_.removeEventListener("dispose",p);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function x(){for(const b in i)r.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:l,update:u,dispose:x}}function Xw(){const r=Zl("canvas");return r.style.display="block",r}function Eg(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Xw(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ws,this.physicallyCorrectLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const d=this;let p=!1,x=0,b=0,_=null,y=-1,M=null;const T=new jt,E=new jt;let v=null,w=e.width,P=e.height,O=1,Z=null,k=null;const B=new jt(0,0,w,P),q=new jt(0,0,w,P);let G=!1;const Y=new yg;let I=!1,se=!1,R=null;const X=new Vt,V=new ht,fe=new J,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return _===null?O:1}let H=t;function Le(C,W){for(let j=0;j<C.length;j++){const z=C[j],ae=e.getContext(z,W);if(ae!==null)return ae}return null}try{const C={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dh}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",we,!1),H===null){const W=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&W.shift(),H=Le(W,C),H===null)throw Le(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ve,Re,xe,ze,D,L,$,oe,ne,F,de,te,pe,le,A,S,N,K,Q,ce,_e,ge,ee,Ce;function Ue(){ve=new nS(H),Re=new jM(H,ve,r),ve.init(Re),ge=new Nw(H,ve,Re),xe=new Uw(H,ve,Re),ze=new sS,D=new Mw,L=new Ow(H,ve,xe,D,Re,ge,ze),$=new KM(d),oe=new tS(d),ne=new dy(H,Re),ee=new $M(H,ve,ne,Re),F=new iS(H,ne,ze,ee),de=new uS(H,F,ne,ze),Q=new lS(H,Re,L),S=new ZM(D),te=new bw(d,$,oe,ve,Re,ee,S),pe=new Gw(d,D),le=new ww,A=new Pw(ve,Re),K=new qM(d,$,oe,xe,de,c,a),N=new Bw(d,de,Re),Ce=new Hw(H,ze,Re,xe),ce=new YM(H,ve,ze,Re),_e=new rS(H,ve,ze,Re),ze.programs=te.programs,d.capabilities=Re,d.extensions=ve,d.properties=D,d.renderLists=le,d.shadowMap=N,d.state=xe,d.info=ze}Ue();const Te=new Vw(d,H);this.xr=Te,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(w,P,!1))},this.getSize=function(C){return C.set(w,P)},this.setSize=function(C,W,j){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=C,P=W,e.width=Math.floor(C*O),e.height=Math.floor(W*O),j!==!1&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(w*O,P*O).floor()},this.setDrawingBufferSize=function(C,W,j){w=C,P=W,O=j,e.width=Math.floor(C*j),e.height=Math.floor(W*j),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(B)},this.setViewport=function(C,W,j,z){C.isVector4?B.set(C.x,C.y,C.z,C.w):B.set(C,W,j,z),xe.viewport(T.copy(B).multiplyScalar(O).floor())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,W,j,z){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,W,j,z),xe.scissor(E.copy(q).multiplyScalar(O).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(C){xe.setScissorTest(G=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(C=!0,W=!0,j=!0){let z=0;C&&(z|=16384),W&&(z|=256),j&&(z|=1024),H.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",we,!1),le.dispose(),A.dispose(),D.dispose(),$.dispose(),oe.dispose(),de.dispose(),ee.dispose(),Ce.dispose(),te.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",be),Te.removeEventListener("sessionend",Pe),R&&(R.dispose(),R=null),qe.stop()};function Fe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const C=ze.autoReset,W=N.enabled,j=N.autoUpdate,z=N.needsUpdate,ae=N.type;Ue(),ze.autoReset=C,N.enabled=W,N.autoUpdate=j,N.needsUpdate=z,N.type=ae}function we(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Qe(C){const W=C.target;W.removeEventListener("dispose",Qe),st(W)}function st(C){U(C),D.remove(C)}function U(C){const W=D.get(C).programs;W!==void 0&&(W.forEach(function(j){te.releaseProgram(j)}),C.isShaderMaterial&&te.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,j,z,ae,Me){W===null&&(W=ue);const De=ae.isMesh&&ae.matrixWorld.determinant()<0,Ie=Et(C,W,j,z,ae);xe.setMaterial(z,De);let Ve=j.index,$e=1;z.wireframe===!0&&(Ve=F.getWireframeAttribute(j),$e=2);const Ne=j.drawRange,Be=j.attributes.position;let at=Ne.start*$e,Ht=(Ne.start+Ne.count)*$e;Me!==null&&(at=Math.max(at,Me.start*$e),Ht=Math.min(Ht,(Me.start+Me.count)*$e)),Ve!==null?(at=Math.max(at,0),Ht=Math.min(Ht,Ve.count)):Be!=null&&(at=Math.max(at,0),Ht=Math.min(Ht,Be.count));const Hn=Ht-at;if(Hn<0||Hn===1/0)return;ee.setup(ae,z,Ie,j,Ve);let En,ft=ce;if(Ve!==null&&(En=ne.get(Ve),ft=_e,ft.setIndex(En)),ae.isMesh)z.wireframe===!0?(xe.setLineWidth(z.wireframeLinewidth*me()),ft.setMode(1)):ft.setMode(4);else if(ae.isLine){let it=z.linewidth;it===void 0&&(it=1),xe.setLineWidth(it*me()),ae.isLineSegments?ft.setMode(1):ae.isLineLoop?ft.setMode(2):ft.setMode(3)}else ae.isPoints?ft.setMode(0):ae.isSprite&&ft.setMode(4);if(ae.isInstancedMesh)ft.renderInstances(at,Hn,ae.count);else if(j.isInstancedBufferGeometry){const it=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,yu=Math.min(j.instanceCount,it);ft.renderInstances(at,Hn,yu)}else ft.render(at,Hn)},this.compile=function(C,W){function j(z,ae,Me){z.transparent===!0&&z.side===br?(z.side=oi,z.needsUpdate=!0,Ee(z,ae,Me),z.side=Mo,z.needsUpdate=!0,Ee(z,ae,Me),z.side=br):Ee(z,ae,Me)}f=A.get(C),f.init(),g.push(f),C.traverseVisible(function(z){z.isLight&&z.layers.test(W.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(d.physicallyCorrectLights),C.traverse(function(z){const ae=z.material;if(ae)if(Array.isArray(ae))for(let Me=0;Me<ae.length;Me++){const De=ae[Me];j(De,C,z)}else j(ae,C,z)}),g.pop(),f=null};let re=null;function he(C){re&&re(C)}function be(){qe.stop()}function Pe(){qe.start()}const qe=new bg;qe.setAnimationLoop(he),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(C){re=C,Te.setAnimationLoop(C),C===null?qe.stop():qe.start()},Te.addEventListener("sessionstart",be),Te.addEventListener("sessionend",Pe),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(W),W=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(d,C,W,_),f=A.get(C,g.length),f.init(),g.push(f),X.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Y.setFromProjectionMatrix(X),se=this.localClippingEnabled,I=S.init(this.clippingPlanes,se,W),h=le.get(C,m.length),h.init(),m.push(h),gt(C,W,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(Z,k),I===!0&&S.beginShadows();const j=f.state.shadowsArray;if(N.render(j,C,W),I===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(h,C),f.setupLights(d.physicallyCorrectLights),W.isArrayCamera){const z=W.cameras;for(let ae=0,Me=z.length;ae<Me;ae++){const De=z[ae];Mt(h,C,De,De.viewport)}}else Mt(h,C,W);_!==null&&(L.updateMultisampleRenderTarget(_),L.updateRenderTargetMipmap(_)),C.isScene===!0&&C.onAfterRender(d,C,W),ee.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function gt(C,W,j,z){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){z&&fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(X);const De=de.update(C),Ie=C.material;Ie.visible&&h.push(C,De,Ie,j,fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==ze.render.frame&&(C.skeleton.update(),C.skeleton.frame=ze.render.frame),!C.frustumCulled||Y.intersectsObject(C))){z&&fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(X);const De=de.update(C),Ie=C.material;if(Array.isArray(Ie)){const Ve=De.groups;for(let $e=0,Ne=Ve.length;$e<Ne;$e++){const Be=Ve[$e],at=Ie[Be.materialIndex];at&&at.visible&&h.push(C,De,at,j,fe.z,Be)}}else Ie.visible&&h.push(C,De,Ie,j,fe.z,null)}}const Me=C.children;for(let De=0,Ie=Me.length;De<Ie;De++)gt(Me[De],W,j,z)}function Mt(C,W,j,z){const ae=C.opaque,Me=C.transmissive,De=C.transparent;f.setupLightsView(j),Me.length>0&&Xe(ae,W,j),z&&xe.viewport(T.copy(z)),ae.length>0&&ie(ae,W,j),Me.length>0&&ie(Me,W,j),De.length>0&&ie(De,W,j),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Xe(C,W,j){const z=Re.isWebGL2;R===null&&(R=new Ts(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?ba:Ss,minFilter:_u,samples:z&&s===!0?4:0})),d.getDrawingBufferSize(V),z?R.setSize(V.x,V.y):R.setSize(Mf(V.x),Mf(V.y));const ae=d.getRenderTarget();d.setRenderTarget(R),d.clear();const Me=d.toneMapping;d.toneMapping=Zi,ie(C,W,j),d.toneMapping=Me,L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R),d.setRenderTarget(ae)}function ie(C,W,j){const z=W.isScene===!0?W.overrideMaterial:null;for(let ae=0,Me=C.length;ae<Me;ae++){const De=C[ae],Ie=De.object,Ve=De.geometry,$e=z===null?De.material:z,Ne=De.group;Ie.layers.test(j.layers)&&Ae(Ie,W,j,Ve,$e,Ne)}}function Ae(C,W,j,z,ae,Me){C.onBeforeRender(d,W,j,z,ae,Me),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ae.onBeforeRender(d,W,j,z,C,Me),ae.transparent===!0&&ae.side===br?(ae.side=oi,ae.needsUpdate=!0,d.renderBufferDirect(j,W,z,ae,C,Me),ae.side=Mo,ae.needsUpdate=!0,d.renderBufferDirect(j,W,z,ae,C,Me),ae.side=br):d.renderBufferDirect(j,W,z,ae,C,Me),C.onAfterRender(d,W,j,z,ae,Me)}function Ee(C,W,j){W.isScene!==!0&&(W=ue);const z=D.get(C),ae=f.state.lights,Me=f.state.shadowsArray,De=ae.state.version,Ie=te.getParameters(C,ae.state,Me,W,j),Ve=te.getProgramCacheKey(Ie);let $e=z.programs;z.environment=C.isMeshStandardMaterial?W.environment:null,z.fog=W.fog,z.envMap=(C.isMeshStandardMaterial?oe:$).get(C.envMap||z.environment),$e===void 0&&(C.addEventListener("dispose",Qe),$e=new Map,z.programs=$e);let Ne=$e.get(Ve);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===De)return ke(C,Ie),Ne}else Ie.uniforms=te.getUniforms(C),C.onBuild(j,Ie,d),C.onBeforeCompile(Ie,d),Ne=te.acquireProgram(Ie,Ve),$e.set(Ve,Ne),z.uniforms=Ie.uniforms;const Be=z.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=S.uniform),ke(C,Ie),z.needsLights=St(C),z.lightsStateVersion=De,z.needsLights&&(Be.ambientLightColor.value=ae.state.ambient,Be.lightProbe.value=ae.state.probe,Be.directionalLights.value=ae.state.directional,Be.directionalLightShadows.value=ae.state.directionalShadow,Be.spotLights.value=ae.state.spot,Be.spotLightShadows.value=ae.state.spotShadow,Be.rectAreaLights.value=ae.state.rectArea,Be.ltc_1.value=ae.state.rectAreaLTC1,Be.ltc_2.value=ae.state.rectAreaLTC2,Be.pointLights.value=ae.state.point,Be.pointLightShadows.value=ae.state.pointShadow,Be.hemisphereLights.value=ae.state.hemi,Be.directionalShadowMap.value=ae.state.directionalShadowMap,Be.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Be.spotShadowMap.value=ae.state.spotShadowMap,Be.spotLightMatrix.value=ae.state.spotLightMatrix,Be.spotLightMap.value=ae.state.spotLightMap,Be.pointShadowMap.value=ae.state.pointShadowMap,Be.pointShadowMatrix.value=ae.state.pointShadowMatrix);const at=Ne.getUniforms(),Ht=Rl.seqWithValue(at.seq,Be);return z.currentProgram=Ne,z.uniformsList=Ht,Ne}function ke(C,W){const j=D.get(C);j.outputEncoding=W.outputEncoding,j.instancing=W.instancing,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function Et(C,W,j,z,ae){W.isScene!==!0&&(W=ue),L.resetTextureUnits();const Me=W.fog,De=z.isMeshStandardMaterial?W.environment:null,Ie=_===null?d.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:ws,Ve=(z.isMeshStandardMaterial?oe:$).get(z.envMap||De),$e=z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!z.normalMap&&!!j.attributes.tangent,Be=!!j.morphAttributes.position,at=!!j.morphAttributes.normal,Ht=!!j.morphAttributes.color,Hn=z.toneMapped?d.toneMapping:Zi,En=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ft=En!==void 0?En.length:0,it=D.get(z),yu=f.state.lights;if(I===!0&&(se===!0||C!==M)){const An=C===M&&z.id===y;S.setState(z,C,An)}let Nt=!1;z.version===it.__version?(it.needsLights&&it.lightsStateVersion!==yu.state.version||it.outputEncoding!==Ie||ae.isInstancedMesh&&it.instancing===!1||!ae.isInstancedMesh&&it.instancing===!0||ae.isSkinnedMesh&&it.skinning===!1||!ae.isSkinnedMesh&&it.skinning===!0||it.envMap!==Ve||z.fog===!0&&it.fog!==Me||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==S.numPlanes||it.numIntersection!==S.numIntersection)||it.vertexAlphas!==$e||it.vertexTangents!==Ne||it.morphTargets!==Be||it.morphNormals!==at||it.morphColors!==Ht||it.toneMapping!==Hn||Re.isWebGL2===!0&&it.morphTargetsCount!==ft)&&(Nt=!0):(Nt=!0,it.__version=z.version);let Or=it.currentProgram;Nt===!0&&(Or=Ee(z,W,ae));let _h=!1,Ro=!1,bu=!1;const an=Or.getUniforms(),Nr=it.uniforms;if(xe.useProgram(Or.program)&&(_h=!0,Ro=!0,bu=!0),z.id!==y&&(y=z.id,Ro=!0),_h||M!==C){if(an.setValue(H,"projectionMatrix",C.projectionMatrix),Re.logarithmicDepthBuffer&&an.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,Ro=!0,bu=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const An=an.map.cameraPosition;An!==void 0&&An.setValue(H,fe.setFromMatrixPosition(C.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&an.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||ae.isSkinnedMesh)&&an.setValue(H,"viewMatrix",C.matrixWorldInverse)}if(ae.isSkinnedMesh){an.setOptional(H,ae,"bindMatrix"),an.setOptional(H,ae,"bindMatrixInverse");const An=ae.skeleton;An&&(Re.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),an.setValue(H,"boneTexture",An.boneTexture,L),an.setValue(H,"boneTextureSize",An.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Mu=j.morphAttributes;if((Mu.position!==void 0||Mu.normal!==void 0||Mu.color!==void 0&&Re.isWebGL2===!0)&&Q.update(ae,j,z,Or),(Ro||it.receiveShadow!==ae.receiveShadow)&&(it.receiveShadow=ae.receiveShadow,an.setValue(H,"receiveShadow",ae.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Nr.envMap.value=Ve,Nr.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Ro&&(an.setValue(H,"toneMappingExposure",d.toneMappingExposure),it.needsLights&&Ge(Nr,bu),Me&&z.fog===!0&&pe.refreshFogUniforms(Nr,Me),pe.refreshMaterialUniforms(Nr,z,O,P,R),Rl.upload(H,it.uniformsList,Nr,L)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Rl.upload(H,it.uniformsList,Nr,L),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&an.setValue(H,"center",ae.center),an.setValue(H,"modelViewMatrix",ae.modelViewMatrix),an.setValue(H,"normalMatrix",ae.normalMatrix),an.setValue(H,"modelMatrix",ae.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const An=z.uniformsGroups;for(let Su=0,Ag=An.length;Su<Ag;Su++)if(Re.isWebGL2){const xh=An[Su];Ce.update(xh,Or),Ce.bind(xh,Or)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Or}function Ge(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function St(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(C,W,j){D.get(C.texture).__webglTexture=W,D.get(C.depthTexture).__webglTexture=j;const z=D.get(C);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=j===void 0,z.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){const j=D.get(C);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,j=0){_=C,x=W,b=j;let z=!0,ae=null,Me=!1,De=!1;if(C){const Ve=D.get(C);Ve.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),z=!1):Ve.__webglFramebuffer===void 0?L.setupRenderTarget(C):Ve.__hasExternalTextures&&L.rebindTextures(C,D.get(C.texture).__webglTexture,D.get(C.depthTexture).__webglTexture);const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);const Ne=D.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ae=Ne[W],Me=!0):Re.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?ae=D.get(C).__webglMultisampledFramebuffer:ae=Ne,T.copy(C.viewport),E.copy(C.scissor),v=C.scissorTest}else T.copy(B).multiplyScalar(O).floor(),E.copy(q).multiplyScalar(O).floor(),v=G;if(xe.bindFramebuffer(36160,ae)&&Re.drawBuffers&&z&&xe.drawBuffers(C,ae),xe.viewport(T),xe.scissor(E),xe.setScissorTest(v),Me){const Ve=D.get(C.texture);H.framebufferTexture2D(36160,36064,34069+W,Ve.__webglTexture,j)}else if(De){const Ve=D.get(C.texture),$e=W||0;H.framebufferTextureLayer(36160,36064,Ve.__webglTexture,j||0,$e)}y=-1},this.readRenderTargetPixels=function(C,W,j,z,ae,Me,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De]),Ie){xe.bindFramebuffer(36160,Ie);try{const Ve=C.texture,$e=Ve.format,Ne=Ve.type;if($e!==_i&&ge.convert($e)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ne===ba&&(ve.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ne!==Ss&&ge.convert(Ne)!==H.getParameter(35738)&&!(Ne===os&&(Re.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-z&&j>=0&&j<=C.height-ae&&H.readPixels(W,j,z,ae,ge.convert($e),ge.convert(Ne),Me)}finally{const Ve=_!==null?D.get(_).__webglFramebuffer:null;xe.bindFramebuffer(36160,Ve)}}},this.copyFramebufferToTexture=function(C,W,j=0){const z=Math.pow(2,-j),ae=Math.floor(W.image.width*z),Me=Math.floor(W.image.height*z);L.setTexture2D(W,0),H.copyTexSubImage2D(3553,j,0,0,C.x,C.y,ae,Me),xe.unbindTexture()},this.copyTextureToTexture=function(C,W,j,z=0){const ae=W.image.width,Me=W.image.height,De=ge.convert(j.format),Ie=ge.convert(j.type);L.setTexture2D(j,0),H.pixelStorei(37440,j.flipY),H.pixelStorei(37441,j.premultiplyAlpha),H.pixelStorei(3317,j.unpackAlignment),W.isDataTexture?H.texSubImage2D(3553,z,C.x,C.y,ae,Me,De,Ie,W.image.data):W.isCompressedTexture?H.compressedTexSubImage2D(3553,z,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,De,W.mipmaps[0].data):H.texSubImage2D(3553,z,C.x,C.y,De,Ie,W.image),z===0&&j.generateMipmaps&&H.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(C,W,j,z,ae=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=C.max.x-C.min.x+1,De=C.max.y-C.min.y+1,Ie=C.max.z-C.min.z+1,Ve=ge.convert(z.format),$e=ge.convert(z.type);let Ne;if(z.isData3DTexture)L.setTexture3D(z,0),Ne=32879;else if(z.isDataArrayTexture)L.setTexture2DArray(z,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,z.flipY),H.pixelStorei(37441,z.premultiplyAlpha),H.pixelStorei(3317,z.unpackAlignment);const Be=H.getParameter(3314),at=H.getParameter(32878),Ht=H.getParameter(3316),Hn=H.getParameter(3315),En=H.getParameter(32877),ft=j.isCompressedTexture?j.mipmaps[0]:j.image;H.pixelStorei(3314,ft.width),H.pixelStorei(32878,ft.height),H.pixelStorei(3316,C.min.x),H.pixelStorei(3315,C.min.y),H.pixelStorei(32877,C.min.z),j.isDataTexture||j.isData3DTexture?H.texSubImage3D(Ne,ae,W.x,W.y,W.z,Me,De,Ie,Ve,$e,ft.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ne,ae,W.x,W.y,W.z,Me,De,Ie,Ve,ft.data)):H.texSubImage3D(Ne,ae,W.x,W.y,W.z,Me,De,Ie,Ve,$e,ft),H.pixelStorei(3314,Be),H.pixelStorei(32878,at),H.pixelStorei(3316,Ht),H.pixelStorei(3315,Hn),H.pixelStorei(32877,En),ae===0&&z.generateMipmaps&&H.generateMipmap(Ne),xe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),xe.unbindTexture()},this.resetState=function(){x=0,b=0,_=null,xe.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class qw extends Eg{}qw.prototype.isWebGL1Renderer=!0;class $w extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Yw extends Ca{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zp=new Vt,wf=new hg,gl=new xu,_l=new J;class jw extends Tn{constructor(e=new nr,t=new Yw){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gl.copy(n.boundingSphere),gl.applyMatrix4(i),gl.radius+=s,e.ray.intersectsSphere(gl)===!1)return;zp.copy(i).invert(),wf.copy(e.ray).applyMatrix4(zp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=f,d=m;g<d;g++){const p=u.getX(g);_l.fromBufferAttribute(h,p),kp(_l,p,l,i,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,d=m;g<d;g++)_l.fromBufferAttribute(h,g),kp(_l,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kp(r,e,t,n,i,s,a){const o=wf.distanceSqToPoint(r);if(o<t){const l=new J;wf.closestPointToPoint(r,l),l.applyMatrix4(n);const u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dh);const Zw=Es({__name:"Three",setup(r){const e=pr(),t={fovy:60,aspect:window.innerWidth/window.innerHeight,near:.1,far:30,x:0,y:5,z:7,lookAt:new J(0,0,0)},n={clearColor:0,width:window.innerWidth,height:window.innerHeight};let i=[.3,.3,.3,.6],s=16;const a=new $w,o=new Jn(t.fovy,t.aspect,t.near,t.far),l=new Eg;let u=Date.now(),c;const h=new nr,f={pointSize:{value:s},time:{value:0},globalColor:{value:i},power:{value:.5}},m={beforeY:window.pageYOffset,currentY:window.pageYOffset},g=()=>{if(e.value instanceof HTMLElement){o.updateProjectionMatrix(),o.position.set(t.x,t.y,t.z),o.lookAt(t.lookAt),l.setClearColor(new mt(n.clearColor)),l.setSize(n.width,n.height),e.value.appendChild(l.domElement);const p=new Ir({uniforms:f,blending:mf,depthWrite:!1,transparent:!0,vertexShader:`
        attribute vec4 randomValue;

        uniform float pointSize;
        uniform float time;

        void main(){
            // \u9802\u70B9\u5C5E\u6027\u3068\u3057\u3066\u5165\u3063\u3066\u304D\u305F\u4E71\u6570\u5024\u3092\u9802\u70B9\u306E\u52D5\u304D\u306A\u3069\u306B\u6D3B\u7528\u3059\u308B
            float width = randomValue.x;
            float sinScale = randomValue.y * 0.9 + 0.1;
            float cosScale = randomValue.z * 0.9 + 0.1;
            float pointScale = randomValue.w * 0.7 + 0.3;
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
      `}),x=1e3,b=6,_=[],y=[];for(let E=0;E<=x;++E){const v=(Math.random()-.5)*2*b,w=(Math.random()-.5)*2*b,P=(Math.random()-.5)*2*b;_.push(v,w,P),y.push(Math.random(),Math.random(),Math.random(),Math.random())}const M=new ai(new Float32Array(_),3);h.setAttribute("position",M),h.setAttribute("randomValue",new ai(new Float32Array(y),4));const T=new jw(h,p);a.add(T),d()}},d=()=>{const p=()=>{c=(Date.now()-u)/1e3,l.render(a,o),f.time.value=c,m.currentY=window.pageYOffset,a.rotation.y+=(m.currentY-m.beforeY)/500,m.beforeY=m.currentY,requestAnimationFrame(p)};p()};return Br(()=>{g()}),(p,x)=>(Qn(),Ji("div",{ref_key:"container",ref:e,class:"three"},null,512))}});const Kw=Cs(Zw,[["__scopeId","data-v-d6c5ac76"]]),Kt=r=>(L_("data-v-85abbcf0"),r=r(),R_(),r),Jw={ref:"sandbox"},Qw={class:"lead"},e2=Kt(()=>We("ul",null,[We("li",null,"\u60F3\u50CF\u4EE5\u4E0A\u306B\u304B\u3093\u305F\u3093\u306B\u74B0\u5883\u304C\u4F5C\u308C\u3066\u3073\u3063\u304F\u308A\uFF01"),We("li",null,"\u307B\u3093\u3068\u306BGetting started\u306E\u30B3\u30DE\u30F3\u30C93\u3064\u304F\u3089\u3044\u53E9\u3044\u305F\u3089\u3067\u304D\u305F")],-1)),t2=Kt(()=>We("ul",null,[We("li",null,"\u307E\u3060option\u306E\u8A18\u6CD5\u306B\u6163\u308C\u3066\u3044\u308B\u306E\u3067\u3001\u9055\u548C\u611F\u304C\u3042\u308B\u2026"),We("li",null,"\u3053\u308C\u306B\u6163\u308C\u3066\u304D\u305F\u3089React\u3068\u304B\u306E\u30B3\u30FC\u30C9\u8AAD\u307F\u89E3\u304D\u3082\u30E9\u30AF\u306B\u306A\u308B\u4E88\u611F\u304C\u3059\u308B\u306E\u3067\u9811\u5F35\u308A\u305F\u3044\u3068\u3053")],-1)),n2=Kt(()=>We("pre",null,`          import { ref, onMounted } from 'vue'

          // \u3053\u3053\u3067\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u53C2\u7167\u3057\u305F\u3044\u8981\u7D20\u3092\u3064\u306A\u304E\u3053\u3080
          // (\u5909\u6570\u540D\u3068ref\u5C5E\u6027\u306E\u540D\u79F0\u3092\u3042\u308F\u305B\u308B)
          const templateRef = ref(null);
          const props = defineProps({
            // \u3053\u3053\u306Bprops\u3092\u5B9A\u7FA9
          })

          onMounted(() => {
            // \u3053\u3053\u306B\u51E6\u7406\u3092\u8A18\u8FF0
          })
        `,-1)),i2=Kt(()=>We("ul",null,[We("li",null,"gsap\u3068\u305D\u306E\u30D7\u30E9\u30B0\u30A4\u30F3ScrollTrigger\u3092\u7528\u3044\u3066\u4F5C\u6210"),We("li",null,"scrub\u3067\u30B9\u30AF\u30ED\u30FC\u30EB\u4F4D\u7F6E\u306B\u5408\u308F\u305B\u3066\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u52D5\u304F\u306E\u3060\u3051\u3069\u3001\u305D\u308C\u304C\u3081\u3061\u3083\u9762\u767D\u3044\uFF01")],-1)),r2=Kt(()=>We("pre",null,`          const tl = gsap.timeline({
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
        `,-1)),s2=Kt(()=>We("pre",null,`          const tl = gsap.timeline({
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
        `,-1)),o2=Kt(()=>We("pre",null,`          const tl = gsap.timeline({
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
        `,-1)),a2=Kt(()=>We("video",{autoplay:"",loop:"",muted:""},[We("source",{src:Hf})],-1)),l2=Kt(()=>We("ul",null,[We("li",null,"gsap.timeline\u95A2\u6570\u3092\u4F7F\u7528\u3057\u305F"),We("li",null,"stagger\u3068\u3044\u3046\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u3064\u3051\u308B\u3053\u3068\u3067\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5BFE\u8C61\u306E\u8981\u7D20\u305F\u3061\u3092\u6307\u5B9A\u3057\u305F\u6642\u9593\u5206\u305A\u3089\u3057\u3066\u9806\u6B21\u5B9F\u884C\u3067\u304D\u308B")],-1)),u2=Kt(()=>We("ul",null,[We("li",null,"\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u5B9A\u7FA9\u3059\u308B\u7DF4\u7FD2"),We("li",null,"scroll\u306Estart\u3068end\u307E\u308F\u308A\u306E\u5B9A\u7FA9\u306E\u4ED5\u65B9\u3001fromTo()\u3068\u306E\u304B\u3051\u5408\u308F\u305B\u65B9\u304C\u6DF7\u4E71\u3057\u3066\u3057\u307E\u3063\u305F\u304C\u3001\u4F55\u3068\u304B\u3067\u304D\u305F\uFF01"),We("li",null,"\u3053\u306E\u30AB\u30B9\u30BF\u30E0\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u306F\u4F5C\u6210\u3057\u305F `v-blur` \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u6307\u5B9A\u3057\u3066\u3044\u308B\u306E\u3067\u3001\u4E0A\u7AEF\u4E0B\u7AEF\u3067\u307C\u304B\u3055\u308C\u308B\u306F\u305A")],-1)),c2=Kt(()=>We("pre",null,`          const blurDirective = {
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
        `,-1)),f2=Kt(()=>We("video",{autoplay:"",loop:"",muted:""},[We("source",{src:Hf})],-1)),h2=Kt(()=>We("ul",null,[We("li",null,"gsap.timeline\u95A2\u6570\u3092\u4F7F\u7528\u3057\u305F"),We("li",null,"stagger\u3068\u3044\u3046\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u3064\u3051\u308B\u3053\u3068\u3067\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5BFE\u8C61\u306E\u8981\u7D20\u305F\u3061\u3092\u6307\u5B9A\u3057\u305F\u6642\u9593\u5206\u305A\u3089\u3057\u3066\u9806\u6B21\u5B9F\u884C\u3067\u304D\u308B")],-1)),d2=Kt(()=>We("video",{autoplay:"",loop:"",muted:""},[We("source",{src:Hf})],-1)),p2=Kt(()=>We("ul",null,[We("li",null,"gsap.timeline\u95A2\u6570\u3092\u4F7F\u7528\u3057\u305F"),We("li",null,"stagger\u3068\u3044\u3046\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u3064\u3051\u308B\u3053\u3068\u3067\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5BFE\u8C61\u306E\u8981\u7D20\u305F\u3061\u3092\u6307\u5B9A\u3057\u305F\u6642\u9593\u5206\u305A\u3089\u3057\u3066\u9806\u6B21\u5B9F\u884C\u3067\u304D\u308B")],-1)),m2=Kt(()=>We("pre",null,`          const blurDirective = {
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
        `,-1)),g2=Kt(()=>We("p",{style:{color:"white",width:"240px"}}," \u3042\u306E\u30A4\u30FC\u30CF\u30C8\u30FC\u30F4\u30A9\u306E\u3059\u304D\u3068\u304A\u3063\u305F\u98A8\u3001\u590F\u3067\u3082\u5E95\u306B\u51B7\u305F\u3055\u3092\u3082\u3064\u9752\u3044\u305D\u3089\u3001\u3046\u3064\u304F\u3057\u3044\u68EE\u3067\u98FE\u3089\u308C\u305F\u30E2\u30EA\u30FC\u30AA\u5E02\u3001\u90CA\u5916\u306E\u304E\u3089\u304E\u3089\u3072\u304B\u308B\u8349\u306E\u6CE2\u3002 \u307E\u305F\u305D\u306E\u306A\u304B\u3067\u3044\u3063\u3057\u3087\u306B\u306A\u3063\u305F\u305F\u304F\u3055\u3093\u306E\u3072\u3068\u305F\u3061\u3001\u30D5\u30A1\u30BC\u30FC\u30ED\u3068\u30ED\u30B6\u30FC\u30ED\u3001\u7F8A\u98FC\u306E\u30DF\u30FC\u30ED\u3084\u3001\u9854\u306E\u8D64\u3044\u3053\u3069\u3082\u305F\u3061\u3001\u5730\u4E3B\u306E\u30C6\u30FC\u30E2\u3001\u5C71\u732B\u535A\u58EB\u306E\u30DC\u30FC\u30AC\u30F3\u30C8\u30FB\u30C7\u30B9\u30C8\u30A5\u30D1\u30FC\u30B4\u306A\u3069\u3001\u3044\u307E\u3053\u306E\u6697\u3044\u5DE8\u304D\u306A\u77F3\u306E\u5EFA\u7269\u306E\u306A\u304B\u3067\u8003\u3048\u3066\u3044\u308B\u3068\u3001\u307F\u3093\u306A\u3080\u304B\u3057\u98A8\u306E\u306A\u3064\u304B\u3057\u3044\u9752\u3044\u5E7B\u71C8\u306E\u3088\u3046\u306B\u601D\u308F\u308C\u307E\u3059\u3002\u3067\u306F\u3001\u308F\u305F\u304F\u3057\u306F\u3044\u3064\u304B\u306E\u5C0F\u3055\u306A\u307F\u3060\u3057\u3092\u3064\u3051\u306A\u304C\u3089\u3001\u3057\u305A\u304B\u306B\u3042\u306E\u5E74\u306E\u30A4\u30FC\u30CF\u30C8\u30FC\u30F4\u30A9\u306E\u4E94\u6708\u304B\u3089\u5341\u6708\u307E\u3067\u3092\u66F8\u304D\u3064\u3051\u307E\u3057\u3087\u3046\u3002 ",-1)),_2=Es({__name:"App",setup(r){return(e,t)=>{const n=Ph("budoux"),i=Ph("blur");return Qn(),Ji(In,null,[ut(Kw),We("main",Jw,[ut(M3),We("div",Qw,[Du((Qn(),Ji("p",null,[$n(" \u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u307E\u308F\u308A\u3068\u304B\u6700\u8FD1\u306E\u3084\u308A\u304B\u305F\u8A66\u3057\u305F\u3053\u3068\u306A\u304B\u3063\u305F\u306E\u3067\u72EC\u7FD2\u3057\u3066\u307F\u307E\u3057\u305F\uFF01 \u30B3\u30C6\u30B3\u30C6\u306B\u306A\u3063\u3066\u3057\u307E\u3063\u3066\u3044\u307E\u3059\u304C\u3001\u7DF4\u7FD2\u3068\u3044\u3046\u3053\u3068\u3067\u2026\uFF01 ")])),[[n]])]),ut(Mi,null,{heading:dt(()=>[$n(" Vite\u3092\u4F7F\u3063\u3066\u307F\u305F ")]),default:dt(()=>[e2]),_:1}),ut(Mi,null,{heading:dt(()=>[$n(" Vue3 Composition API \u3092\u5229\u7528\u3057\u3066\u307F\u305F ")]),default:dt(()=>[t2,ut(Rs,{type:"javascript"},{default:dt(()=>[n2]),_:1})]),_:1}),ut(Mi,null,{heading:dt(()=>[$n(" Gsap\u3092\u5229\u7528\u3057\u3066\u307F\u305F ")]),default:dt(()=>[i2]),_:1}),ut(Mi,null,{default:dt(()=>[$n(" \u80CC\u666F\u3092\u57CB\u3081\u3066\u307F\u305F\u308A "),ut(Rs,{type:"javascript"},{default:dt(()=>[r2]),_:1})]),_:1}),ut(Mi,{"start-x":"-200"},{default:dt(()=>[$n(" \u30B9\u30E9\u30A4\u30C9\u30A4\u30F3\u3055\u305B\u3066\u307F\u305F\u308A "),ut(Rs,{type:"javascript"},{default:dt(()=>[s2]),_:1})]),_:1}),Du((Qn(),Vc(Mi,null,{default:dt(()=>[$n(" \u4E0A\u7AEF\u4E0B\u7AEF\u3067\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u5165\u308B\u6642\u306B\u307C\u304B\u3057\u3066\u307F\u305F\u308A "),ut(Rs,{type:"javascript"},{default:dt(()=>[o2]),_:1})]),_:1})),[[i]]),ut(Mi,null,{heading:dt(()=>[$n(" \u6700\u521D\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3 ")]),default:dt(()=>[a2,l2]),_:1}),Du((Qn(),Vc(Mi,null,{heading:dt(()=>[$n(" viewport\u306E\u4E0A\u7AEF\u4E0B\u7AEF\u3067\u307C\u304B\u3059\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u4F5C\u6210\u3057\u305F ")]),default:dt(()=>[u2,ut(Rs,{type:"javascript"},{default:dt(()=>[c2]),_:1})]),_:1})),[[i]]),ut(j3,null,{default:dt(()=>[ut(Mi,null,{heading:dt(()=>[$n(" \u6700\u521D\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3 ")]),default:dt(()=>[f2,h2]),_:1}),ut(Mi,null,{heading:dt(()=>[$n(" \u6700\u521D\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3 ")]),default:dt(()=>[d2,p2]),_:1}),ut(Rs,{type:"javascript"},{default:dt(()=>[m2]),_:1}),g2]),_:1}),ut(W3)],512)],64)}}});const x2=Cs(_2,[["__scopeId","data-v-85abbcf0"]]);ri.registerPlugin(Je);const v2={mounted:function(r){ri.to(r,{filter:"blur(10px)",scrollTrigger:{trigger:r,scrub:!0,start:"bottom top+=200",end:"bottom top"}}),ri.fromTo(r,{filter:"blur(10px)"},{filter:"blur(0px)",scrollTrigger:{trigger:r,scrub:!0,start:"top bottom",end:"top bottom-=300"}})}},y2=[0,128,256,384,592,688,768,880,1024,1280,1328,1424,1536,1792,1872,1920,1984,2048,2112,2144,2208,2304,2432,2560,2688,2816,2944,3072,3200,3328,3456,3584,3712,3840,4096,4256,4352,4608,4992,5024,5120,5760,5792,5888,5920,5952,5984,6016,6144,6320,6400,6480,6528,6624,6656,6688,6832,6912,7040,7104,7168,7248,7296,7312,7360,7376,7424,7552,7616,7680,7936,8192,8304,8352,8400,8448,8528,8592,8704,8960,9216,9280,9312,9472,9600,9632,9728,9984,10176,10224,10240,10496,10624,10752,11008,11264,11360,11392,11520,11568,11648,11744,11776,11904,12032,12272,12288,12352,12448,12544,12592,12688,12704,12736,12784,12800,13056,13312,19904,19968,40960,42128,42192,42240,42560,42656,42752,42784,43008,43056,43072,43136,43232,43264,43312,43360,43392,43488,43520,43616,43648,43744,43776,43824,43888,43968,44032,55216,55296,56192,56320,57344,63744,64256,64336,65024,65040,65056,65072,65104,65136,65280,65520,65536,65664,65792,65856,65936,66e3,66176,66208,66272,66304,66352,66384,66432,66464,66560,66640,66688,66736,66816,66864,67072,67584,67648,67680,67712,67808,67840,67872,67968,68e3,68096,68192,68224,68288,68352,68416,68448,68480,68608,68736,68864,69216,69248,69376,69424,69552,69600,69632,69760,69840,69888,69968,70016,70112,70144,70272,70320,70400,70656,70784,71040,71168,71264,71296,71424,71680,71840,71936,72096,72192,72272,72384,72704,72816,72960,73056,73440,73648,73664,73728,74752,74880,77824,78896,82944,92160,92736,92880,92928,93760,93952,94176,94208,100352,101120,101632,110592,110848,110896,110960,113664,113824,118784,119040,119296,119520,119552,119648,119808,120832,122880,123136,123584,124928,125184,126064,126208,126464,126976,127024,127136,127232,127488,127744,128512,128592,128640,128768,128896,129024,129280,129536,129648,129792,131072,173824,177984,178208,183984,194560,196608,917504,917760,983040,1048576],b2={"BB2:108120":1800,"UB3:107":271,"UB3:120":-857,"TB2:108108108":-417,"TB4:108108108":285,"UB3:109":-583,"UB4:120":388,"BB3:108108":828,"UB4:108":-853,"BB1:108120":-820,"BB1:108107":502,"UB4:107":-708,"TB1:120120108":358,"TB3:108109109":1341,"UB2:107":-586,"TB1:108120108":-451,"TB3:108108108":257,"BB2:109109":-1876,"UW3:\u306F":2052,"UW3:\u306B":1698,"TB3:108120108":-458,"UW3:\u304C":2048,"UW4:\u3053":1182,"UB5:107":-551,"UW3:\u3068":980,"TB4:109109109":773,"UW4:\u3066":-1453,"TB2:108108107":-152,"UW3:\u3002":3201,"UW4:\u304A":2865,"UW3:\u306E":1203,"BB3:120120":144,"BB3:108120":-369,"UW3:\u304A":-2539,"UW3:\u3057":-613,"UW4:\u3001":-3574,"UW4:\u306E":-1111,"UW3:\u3092":3110,"UW4:\u3002":-3022,"UW3:\u3001":2039,"UW5:\u3067":-1091,"UW4:\u3042":1241,"BB2:108108":-560,"UW4:\u3063":-1412,"UW5:\u3063":625,"UW3:\u3082":1350,"UW5:\u3046":297,"UW3:\u300C":-2404,"UW5:\u306A":-595,"UW4:\u305D":1007,"UW4:\u308B":-1829,"UW3:\u3063":-1662,"UW4:\u300C":3213,"UW4:\u3044":270,"BB2:162162":-911,"UB4:162":178,"UW5:\u306B":-727,"BW3:\u3082\u306E":2716,"UW5:\u3057":-484,"UW6:\u3046":-344,"BW2:\u3068\u3044":929,"UW4:\u306B":-1236,"UW3:\u308B":760,"TB2:120108120":-299,"UW4:\u3067":-419,"UW5:\u304C":-728,"BB1:120120":122,"UW5:\u306F":-704,"UW4:\u306F":-605,"UW4:\u308C":-1507,"UW5:\u304D":545,"BB2:120108":-68,"BB2:120120":-320,"UW3:\u30FB":1498,"BB2:120162":953,"BB2:107108":-323,"TB1:108107108":-575,"UW3:\u308C":-673,"BB2:162108":520,"TB2:162162162":-450,"UW4:\u3089":-1767,"TB1:120120120":-247,"UB2:120":56,"TB1:108108162":231,"UW5:\u3059":-764,"UW5:\u3093":536,"UW3:\u3067":794,"UW4:\u304C":-703,"UW3:\u3053":-566,"TB4:120108108":51,"UW3:\u3089":390,"UW6:\u306B":52,"UW6:\u3002":-182,"UW3:\u305F":466,"TB1:107120120":133,"UW5:\u304F":354,"UB1:109":107,"UW1:\u305D":492,"UW3:\u3046":488,"BW3:\u3068\u3044":-1194,"BW3:\u3068\u3053":1145,"UW3:\u307E":-847,"BW3:\u3053\u3068":812,"UW2:\u3063":151,"UW5:\u30FB":-517,"TB3:108108107":-314,"UW3:\u304D":-553,"UW4:\u3093":-783,"UB3:108":-117,"UW3:\u304F":736,"UW3:\u300D":-88,"UW5:\u3042":-598,"BB2:108162":569,"BW3:\u3044\u3046":606,"UW5:\u308C":287,"UW2:\u4E00":744,"UW3:\uFF0C":1739,"UW1:\u306B":-217,"UW2:\u3068":-219,"TB2:120120108":-144,"TB2:120120120":234,"UW5:\u3092":-649,"UW4:\u308A":-757,"BW1:\u304B\u3089":834,"UW3:\u3061":-819,"BW3:\u3044\u3044":869,"UW2:\u306F":-275,"UW6:\u305F":-267,"TB1:109109108":154,"UW4:\uFF11":653,"UW4:\u3084":594,"UW2:\u3093":255,"UW3:\uFF3D":1018,"UW4:\u307B":1124,"TB3:108162162":284,"BW2:\u3067\u3042":-1624,"UW4:\u3060":-372,"BB3:120108":440,"TB1:162162162":-184,"BW3:\u30FB\u30FB":-1936,"BW3:\u3068\u304D":1318,"UW4:\u3092":-1124,"UW3:\u3066":453,"UW4:\u304B":-92,"UW2:\u305D":-343,"TB4:120120108":175,"TB2:108107120":182,"UW2:\u3092":-886,"UW4:\u3054":930,"UW2:\u3067":-223,"TB3:120120120":-57,"BB1:162162":-113,"UW2:\u3057":103,"UW4:\u51FA":-200,"UW2:\u307E":510,"UW4:\uFF0C":-2099,"UW5:\u3068":-498,"UW4:\u3069":385,"BW3:\u3057\u3066":80,"UW1:\u3067":-156,"BB2:107120":360,"BW3:\u305F\u3081":1289,"BW2:\u3068\u3057":771,"BW2:\u306A\u3044":-1114,"BW2:\u3066\u3044":-399,"UW3:\u9593":870,"UW3:\uFF01":1230,"UW5:\u30FC":79,"UW4:\u3059":472,"UW4:\uFF01":-1596,"BW1:\u3068\u304C":-1092,"UW5:\u306E":-572,"TB4:108108120":55,"TB2:107120120":-151,"UW6:\u30FB":-124,"UW3:\uFF0E":1316,"UW2:\u3066":-248,"UW3:\u7B11":1280,"UW2:\u3053":-125,"UW5:\u3082":-284,"BW3:\u3088\u3046":-1023,"UW3:\u4EBA":862,"UW2:\u306E":84,"UW3:\u304B":417,"UW3:\u65E5":568,"UW1:\u3044":-88,"BW2:\u3068\u3053":-528,"UW4:\u79C1":910,"UW3:\u2026":674,"UW2:\u306B":-212,"UW3:\u4ECA":894,"BB3:162108":-121,"UB3:087":1108,"UW4:\uFF08":762,"BB1:162120":260,"UW1:\u306A":-197,"BB3:109109":91,"UW5:\u6765":-53,"UW3:\uFF1F":1117,"TW3:\u3066\u3044\u308B":-645,"UW4:\u300D":-868,"UW4:\u524D":-611,"BW1:\u3044\u3046":220,"UW4:\u3064":422,"UW3:\uFF09":1431,"BW1:\u3067\u306F":-532,"UW2:\u308B":-157,"UW5:\u305D":-476,"UW4:\u30FC":-846,"TW2:\u6C17\u306B\u5165":-1309,"UW4:\u7B11":-1614,"UW4:\u3072":1225,"TB4:162162162":302,"UW4:\u3051":-738,"UW2:\u3082":-260,"BW3:\u3061\u3087":892,"BW3:\u51FA\u6765":-778,"TB2:108120108":-193,"UW4:\u300E":1221,"UW3:\uFF3B":-779,"UW4:\uFF12":489,"UW5:\u3064":420,"TB1:107120108":-85,"UW3:\uFF11":-525,"BW3:\u304B\u3089":-830,"UB5:120":26,"UW4:\u307E":270,"UW3:\u3070":439,"UW3:\u308A":-120,"BW3:\u305D\u306E":1263,"UW3:\u3054":-795,"UW4:\u308F":291,"BW2:\u3066\u304A":-1310,"TB2:120108108":-23,"BW1:\u306A\u3044":347,"UW2:\u3088":312,"UB2:162":-107,"UW6:\u306E":-114,"UW2:\u6BCE":701,"UW2:\u7D50":830,"TW4:\u306E\u4EAC\u90FD":1309,"UW3:\u3055":-451,"UW2:\u6700":260,"BW2:\u3067\u3059":-1080,"UW2:\u300D":536,"UW5:\u3048":188,"UW3:\u3060":-60,"TW4:\u3068\u3053\u308D":643,"UW4:\uFF0E":-1184,"UB1:108":31,"UW6:\u3066":-194,"UW1:\u304C":-51,"BW2:\u3001\u3068":-514,"UW3:\uFF10":-442,"UW3:\u3093":-120,"UW3:\u4E2D":649,"UW4:\u3088":410,"BW3:\u3053\u306E":882,"UW2:\u304C":-75,"UW3:\u307F":-341,"TW2:\u3067\u306F\u306A":-718,"UW6:\u3068":-128,"UW4:\uFF3B":340,"TW3:\u3001\u3042\u308B":-1245,"BW3:\u3053\u308D":-164,"UW4:\uFF1F":-1052,"UW6:\u3001":70,"UW4:\u96FB":-256,"BB1:108072":279,"UW3:\u5F8C":786,"UW5:\u3044":40,"UW2:\u3001":-177,"UW5:\u3066":97,"BB2:108072":-411,"UW3:\u771F":222,"UW3:\u305D":-89,"UW5:\u3055":-277,"UB5:162":-146,"TW3:\u3068\u3044\u3046":414,"UW3:\u5206":483,"UB6:120":21,"BW3:\u306A\u3063":-339,"UW4:\u308D":-406,"BB2:107107":-360,"TW3:\u3068\u3053\u308D":-450,"UB1:120":-14,"UW1:\u3001":-36,"BW1:\u3068\u304B":513,"UW3:\u306A":252,"UW6:\u308A":54,"UW4:\u9593":-501,"UW3:\u3079":-478,"UW5:\u3079":450,"TB4:108120108":-36,"UW4:\uFF3D":-644,"BW2:\u306B\u306F":-392,"UW5:\u3005":714,"BW1:\u3002\u30FB":643,"BW1:\u305D\u306E":-341,"UW1:\u3059":91,"UW4:\uFF09":-1018,"UW6:\u3063":34,"TB3:109109109":-177,"TB3:108120120":123,"UB5:109":80,"BW1:\u304B\u3082":-695,"UW6:\u308B":-44,"TB4:108109109":-357,"UW3:\u3069":253,"TW3:\u3067\u3042\u308B":-389,"TW4:\u304F\u3089\u3044":613,"BW1:\u6700\u8FD1":515,"BW1:\u3057\u3044":418,"BW1:\u3068\u3082":-396,"BW2:\u3068\u540C":-553,"TW1:\u3068\u3044\u3046":193,"UW2:\u3055":298,"BW2:\u5E2F\u96FB":-334,"TB1:120108108":-57,"BW3:\u305D\u3057":-315,"UW2:\u3002":-77,"UW5:\u304B":33,"UW5:\u3053":88,"BW3:\u306A\u3044":137,"BW1:\u3093\u306A":280,"BW2:\u3067\u304D":-448,"UW4:\uFF13":196,"UW3:\u3051":-136,"TW4:\u3053\u3068\u304C":-295,"BW1:\u3053\u3068":-329,"UB3:162":-92,"UW3:\u96FB":-360,"UW3:\u3088":-132,"BW1:\u305F\u3068":-288,"UW5:\u307E":-45,"UW5:\u305F":-43,"UW5:\u3061":174,"UW2:\u3051":75,"UW5:\u3060":-60,"UW3:\u5EA6":330,"BW1:\u305F\u3044":360,"UW4:\u4F7F":217,"UW2:\u304D":130,"TW4:\u304B\u306A\u308A":473,"UB6:109":-41,"BB1:108108":-23,"UW4:\u8FBC":-340,"TW3:\u3068\u8A00\u3063":-530,"UW6:\u3060":-69,"UW5:\u308A":-71,"UW5:\u3088":-115,"BW3:\u3069\u3046":297,"UW4:\u2026":-240,"UW3:\u3084":229,"BW1:\u304B\u3057":507,"BW3:\u304B\u3063":-348,"UW4:\u4ECA":171,"UW3:\u300E":-320,"UW4:\u601D":239,"UB2:109":16,"UW4:\u304F":-195,"UW3:\u4EAC":-277,"UW6:\u30FC":-41,"UW1:\u3093":69,"BW1:\u3046\u306A":280,"TB2:108107107":-264,"UW1:\u3068":30,"TB4:108109108":249,"TB2:107108108":-97,"BW1:\u3053\u306E":-163,"BW2:\u306E\u3067":-221,"UW4:\u307F":96,"UW5:\u308F":83,"UW6:\u3084":82,"BW1:\u308C\u3066":-218,"UW2:\u3084":-93,"UW6:\u3053":-53,"UW4:\u306A":40,"UW5:\u3081":28,"BW1:\u3082\u3046":285,"TB4:120108120":27,"BW1:\u3088\u308A":283,"UW4:\u5408":-211,"UW6:\u3051":-92,"BW1:\u5C11\u3057":214,"BW2:\u3067\u3057":-225,"UW4:\u3068":-54,"TB1:109109109":53,"UW3:\u30FC":105,"BW2:\u304F\u306A":-198,"UW2:\u304F":-53,"UW2:\u6211":-277,"BW2:\u3044\u3082":198,"BW3:\u308F\u304B":184,"TB2:120109120":-264,"UW4:\u3082":-106,"UW1:\u3042":14,"UW4:\u6700":185,"BW1:\u308B\u306E":-155,"UW2:\u5168":185,"UW6:\uFF10":106,"UW4:\u653E":-119,"UW4:\u4EAC":53,"BW3:\u304B\u3051":208,"UW2:\u5C11":92,"BW3:\u3082\u3046":262,"UW2:\u591A":106,"UW2:\u3046":-52,"TB1:108108072":105,"UW1:\u3092":-25,"UW3:\u5149":-79,"BW1:\uFF01\uFF01":104,"UW2:\u30E3":141,"BW3:\u3059\u3050":129,"UW4:\u5E2F":-114,"UW6:\u3057":26,"BW3:\u3067\u3082":64,"BW2:\u3001\u305D":-113,"TB3:120162162":26,"TB2:109108120":77,"UW3:\u308F":-64,"UB4:109":13,"TB4:120120120":13,"UW5:\u90FD":26,"UW5:\u305A":89,"UW2:\u30D0":115,"UW2:\u4EAC":-49,"UW3:\u3083":89,"BW1:\u3044\u3001":-114,"BW3:\u3088\u304F":51,"BW1:\u305F\u3089":64,"BW2:\u306E\u3088":-64,"UW2:\u601D":-51,"BW1:\u3046\u306B":-38,"BW1:\u306E\u9593":89,"UW6:\u3093":13,"UW6:\u305A":-64,"BW1:\u3063\u305F":13,"TW3:\u308B\u3053\u3068":-48,"BW3:\u3068\u3066":76,"TW1:\u3088\u3046\u306A":63,"UW6:\u3071":62,"TB3:109120108":13,"TW4:\u3063\u3066\u3001":112,"TW4:\u306A\u3093\u3066":-76,"TW2:\u305D\u306E\u5F8C":-50,"UW6:\u3089":-13,"TW4:\u3053\u3068\u306B":-49,"UW3:\uFF1E":63,"TW3:\u3066\u3057\u307E":-50,"UW3:\u3044":13,"TB4:120108107":13,"UW2:\u3072":-50,"UW6:\u3081":24,"UW6:\u3067":-12,"BW3:\u306A\u308B":24,"UW5:\u3054":12,"BW2:\u308A\u3057":24,"UW6:\u96FB":12,"UW1:\u306F":-12,"BW1:\u3044\u3082":-24,"BW3:\u3059\u3054":12,"UW4:\u901A":-12,"BW3:\u304A\u308A":-12,"BW3:\u304B\u304B":12,"BW1:\u601D\u3044":-12};/**
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
 */const M2=r=>new DOMParser().parseFromString(r,"text/html");/**
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
 */const _t=console.assert,S2="\u200B",Dc={ELEMENT_NODE:1,TEXT_NODE:3},He={Inline:0,Block:1,Skip:2,Break:3},w2={AREA:He.Skip,BASE:He.Skip,BASEFONT:He.Skip,DATALIST:He.Skip,HEAD:He.Skip,LINK:He.Skip,META:He.Skip,NOEMBED:He.Skip,NOFRAMES:He.Skip,PARAM:He.Skip,RP:He.Skip,SCRIPT:He.Skip,STYLE:He.Skip,TEMPLATE:He.Skip,TITLE:He.Skip,NOSCRIPT:He.Skip,HR:He.Break,LISTING:He.Skip,PLAINTEXT:He.Skip,PRE:He.Skip,XMP:He.Skip,BR:He.Break,RT:He.Skip,INPUT:He.Skip,SELECT:He.Skip,BUTTON:He.Skip,TEXTAREA:He.Skip,ABBR:He.Skip,CODE:He.Skip,IFRAME:He.Skip,TIME:He.Skip,VAR:He.Skip},T2=new Set(["HTML","BODY","ADDRESS","BLOCKQUOTE","CENTER","DIALOG","DIV","FIGURE","FIGCAPTION","FOOTER","FORM","HEADER","LEGEND","LISTING","MAIN","P","ARTICLE","ASIDE","H1","H2","H3","H4","H5","H6","HGROUP","NAV","SECTION","DIR","DD","DL","DT","MENU","OL","UL","LI","TABLE","CAPTION","COL","TR","TD","TH","FIELDSET","DETAILS","SUMMARY","MARQUEE"]);function E2(r){const e=r.nodeName,t=w2[e];if(t!==void 0)return t;if(typeof getComputedStyle=="function"){const n=getComputedStyle(r);switch(n.whiteSpace){case"nowrap":case"pre":return He.Skip}const i=n.display;if(i)return i==="inline"?He.Inline:He.Block}return T2.has(e)?He.Block:He.Inline}class A2{constructor(e){this.textNodes=[],this.element=e}hasText(){return this.textNodes.length>0}}class C2{constructor(e,t){this.separator=S2,this.parser_=e,t!==void 0&&(t.className!==void 0&&(this.className=t.className),t.separator!==void 0&&(this.separator=t.separator))}applyToElement(e){for(const t of this.getBlocks(e))_t(t.hasText()),this.applyToParagraph(t)}*getBlocks(e,t){if(_t(e.nodeType===Dc.ELEMENT_NODE),this.className&&e.classList.contains(this.className))return;const n=E2(e);if(n===He.Skip)return;if(n===He.Break){t&&t.hasText()&&(yield t,t.textNodes=[]),_t(!e.firstChild);return}_t(n===He.Block||n===He.Inline);const i=!t||n===He.Block,s=i?new A2(e):t;_t(s);for(const a of e.childNodes)switch(a.nodeType){case Dc.ELEMENT_NODE:for(const o of this.getBlocks(a,s))yield o;break;case Dc.TEXT_NODE:s.textNodes.push(a);break}i&&s.hasText()&&(yield s)}applyToParagraph(e){const t=e.textNodes;_t(t.length>0);const i=t.map(l=>l.nodeValue).join("");if(/^\s*$/.test(i))return;const s=this.parser_.parse(i);if(_t(s.length>0),_t(s.reduce((l,u)=>l+u.length,0)===i.length),s.length<=1)return;const a=[];let o=0;for(const l of s)_t(l.length>0),o+=l.length,a.push(o);_t(a[0]>0),_t(a[a.length-1]===i.length),++a[a.length-1],_t(a.length>1),this.splitTextNodes(t,a),this.applyBlockStyle(e.element)}splitTextNodes(e,t){_t(t.length>0);const n=e.reduce((o,l)=>o+(l.nodeValue?l.nodeValue.length:0),0);_t(t[t.length-1]>n);let i=0,s=t[0];_t(s>0);let a=0;for(const o of e){const l=o.nodeValue;if(!l)continue;const u=a+l.length;if(s>=u){a=u;continue}const c=[];let h=0;for(;s<u;){const f=s-a;_t(f>=h),c.push(l.substring(h,f)),h=f,++i,_t(t[i]>s),s=t[i]}_t(c.length>0),h<l.length&&c.push(l.substring(h)),this.splitTextNode(o,c),a=u}_t(a===n),_t(i<t.length),_t(t[i]>=n)}splitTextNode(e,t){_t(t.length>1),_t(e.nodeValue===t.join(""));const n=this.separator;if(typeof n=="string"){e.nodeValue=t.join(n);return}const i=e.ownerDocument;let s=[];for(const a of t)a&&s.push(i.createTextNode(a)),s.push(null);s.pop(),s=s.map(a=>a||n.cloneNode(!0)),e.replaceWith(...s)}applyBlockStyle(e){if(this.className){e.classList.add(this.className);return}const t=e.style;t.wordBreak="keep-all",t.overflowWrap="break-word"}static defineClassAs(e,t){const n=e.createElement("style");n.textContent=`.${t} { word-break: keep-all; overflow-wrap: break-word; }`,e.head.appendChild(n)}}/**
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
 */const Tf=(r,e)=>{const t=Math.floor(r.length/2);return e===r[t]?t+1:e<r[t]?r.length===1?0:Tf(r.slice(0,t),e):r.length===1?1:t+Tf(r.slice(t),e)},Wp=r=>r.reduce((e,t)=>e+t,0),fr="\u2594";/**
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
 */const D2={ELEMENT:1,TEXT:3};class wi{constructor(e){this.model=e}static getUnicodeBlockFeature(e){if(!e||e===fr)return fr;const t=e.codePointAt(0);return t===void 0?fr:`${Tf(y2,t)}`.padStart(3,"0")}static getFeature(e,t,n,i,s,a){const o=wi.getUnicodeBlockFeature(e),l=wi.getUnicodeBlockFeature(t),u=wi.getUnicodeBlockFeature(n),c=wi.getUnicodeBlockFeature(i),h=wi.getUnicodeBlockFeature(s),f=wi.getUnicodeBlockFeature(a),m={UW1:e,UW2:t,UW3:n,UW4:i,UW5:s,UW6:a,BW1:t+n,BW2:n+i,BW3:i+s,TW1:e+t+n,TW2:t+n+i,TW3:n+i+s,TW4:i+s+a,UB1:o,UB2:l,UB3:u,UB4:c,UB5:h,UB6:f,BB1:l+u,BB2:u+c,BB3:c+h,TB1:o+l+u,TB2:l+u+c,TB3:u+c+h,TB4:c+h+f};return Object.entries(m).filter(g=>!g[1].includes(fr)).map(([g,d])=>`${g}:${d}`)}static hasChildTextNode(e){for(const t of e.childNodes)if(t.nodeType===D2.TEXT)return!0;return!1}parse(e){if(e==="")return[];const t=[e[0]],n=-Wp([...this.model.values()]);for(let i=1;i<e.length;i++){const s=wi.getFeature(e[i-3]||fr,e[i-2]||fr,e[i-1],e[i],e[i+1]||fr,e[i+2]||fr);n+2*Wp(s.map(o=>this.model.get(o)||0))>0&&t.push(""),t[t.length-1]+=e[i]}return t}applyElement(e){new C2(this,{separator:e.ownerDocument.createElement("wbr")}).applyToElement(e)}translateHTMLString(e){if(e==="")return e;const t=M2(e);if(wi.hasChildTextNode(t.body)){const n=t.createElement("span");n.append(...t.body.childNodes),t.body.append(n)}return this.applyElement(t.body.childNodes[0]),t.body.innerHTML}}const P2=()=>new wi(new Map(Object.entries(b2))),L2=P2(),R2={mounted:function(r){r.innerHTML=L2.translateHTMLString(r.innerHTML)}},gh=sv(x2);gh.directive("blur",v2);gh.directive("budoux",R2);gh.mount("#app");
