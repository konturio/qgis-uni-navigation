var ae=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var le=(n,e,t)=>(ae(n,e,"read from private field"),t?t.call(n):e.get(n)),ce=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},Z=(n,e,t,i)=>(ae(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,re=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ne=Symbol(),he=new WeakMap;let we=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(re&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=he.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&he.set(t,e))}return e}toString(){return this.cssText}};const Me=n=>new we(typeof n=="string"?n:n+"",void 0,ne),Oe=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,r,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[s+1],n[0]);return new we(t,n,ne)},Ue=(n,e)=>{if(re)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=F.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,n.appendChild(i)}},de=re?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Me(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ne,defineProperty:He,getOwnPropertyDescriptor:Le,getOwnPropertyNames:ze,getOwnPropertySymbols:Ie,getPrototypeOf:De}=Object,A=globalThis,ue=A.trustedTypes,qe=ue?ue.emptyScript:"",X=A.reactiveElementPolyfillSupport,z=(n,e)=>n,K={toAttribute(n,e){switch(e){case Boolean:n=n?qe:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},se=(n,e)=>!Ne(n,e),pe={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:se};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);class k extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&He(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=Le(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const l=r==null?void 0:r.call(this);s.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pe}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;const e=De(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){const t=this.properties,i=[...ze(t),...Ie(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(de(r))}else e!==void 0&&t.push(de(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ue(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:K).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var s;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:K;this._$Em=r,this[r]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i,r=!1,s){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??se)(r?s:this[e],t))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,o]of r)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$E_)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(t)):this._$ET()}catch(r){throw e=!1,this._$ET(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(e){}firstUpdated(e){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[z("elementProperties")]=new Map,k[z("finalized")]=new Map,X==null||X({ReactiveElement:k}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,Y=I.trustedTypes,fe=Y?Y.createPolicy("lit-html",{createHTML:n=>n}):void 0,xe="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,Ee="?"+y,Be=`<${Ee}>`,P=document,q=()=>P.createComment(""),B=n=>n===null||typeof n!="object"&&typeof n!="function",Se=Array.isArray,je=n=>Se(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ee=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ge=/-->/g,me=/>/g,S=RegExp(`>|${ee}(?:([^\\s"'>=/]+)(${ee}*=${ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,$e=/"/g,Ce=/^(?:script|style|textarea|title)$/i,We=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),b=We(1),T=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),_e=new WeakMap,C=P.createTreeWalker(P,129);function Pe(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return fe!==void 0?fe.createHTML(e):e}const Ve=(n,e)=>{const t=n.length-1,i=[];let r,s=e===2?"<svg>":"",o=L;for(let l=0;l<t;l++){const a=n[l];let h,c,d=-1,f=0;for(;f<a.length&&(o.lastIndex=f,c=o.exec(a),c!==null);)f=o.lastIndex,o===L?c[1]==="!--"?o=ge:c[1]!==void 0?o=me:c[2]!==void 0?(Ce.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=S):c[3]!==void 0&&(o=S):o===S?c[0]===">"?(o=r??L,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,h=c[1],o=c[3]===void 0?S:c[3]==='"'?$e:ve):o===$e||o===ve?o=S:o===ge||o===me?o=L:(o=S,r=void 0);const p=o===S&&n[l+1].startsWith("/>")?" ":"";s+=o===L?a+Be:d>=0?(i.push(h),a.slice(0,d)+xe+a.slice(d)+y+p):a+y+(d===-2?l:p)}return[Pe(n,s+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};class j{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,o=0;const l=e.length-1,a=this.parts,[h,c]=Ve(e,t);if(this.el=j.createElement(h,i),C.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=C.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(xe)){const f=c[o++],p=r.getAttribute(d).split(y),$=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:$[2],strings:p,ctor:$[1]==="."?Ke:$[1]==="?"?Ye:$[1]==="@"?Je:J}),r.removeAttribute(d)}else d.startsWith(y)&&(a.push({type:6,index:s}),r.removeAttribute(d));if(Ce.test(r.tagName)){const d=r.textContent.split(y),f=d.length-1;if(f>0){r.textContent=Y?Y.emptyScript:"";for(let p=0;p<f;p++)r.append(d[p],q()),C.nextNode(),a.push({type:2,index:++s});r.append(d[f],q())}}}else if(r.nodeType===8)if(r.data===Ee)a.push({type:2,index:s});else{let d=-1;for(;(d=r.data.indexOf(y,d+1))!==-1;)a.push({type:7,index:s}),d+=y.length-1}s++}}static createElement(e,t){const i=P.createElement("template");return i.innerHTML=e,i}}function U(n,e,t=n,i){var o,l;if(e===T)return e;let r=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const s=B(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(n),r._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=U(n,r._$AS(n,e.values),r,i)),e}class Fe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??P).importNode(t,!0);C.currentNode=r;let s=C.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new V(s,s.nextSibling,this,e):a.type===1?h=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(h=new Ge(s,this,e)),this._$AV.push(h),a=i[++l]}o!==(a==null?void 0:a.index)&&(s=C.nextNode(),o++)}return C.currentNode=P,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class V{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=U(this,e,t),B(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==T&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):je(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&B(this._$AH)?this._$AA.nextSibling.data=e:this.$(P.createTextNode(e)),this._$AH=e}g(e){var s;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=j.createElement(Pe(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(t);else{const o=new Fe(r,this),l=o.u(this.options);o.p(t),this.$(l),this._$AH=o}}_$AC(e){let t=_e.get(e.strings);return t===void 0&&_e.set(e.strings,t=new j(e)),t}T(e){Se(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new V(this.k(q()),this.k(q()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(e,t=this,i,r){const s=this.strings;let o=!1;if(s===void 0)e=U(this,e,t,0),o=!B(e)||e!==this._$AH&&e!==T,o&&(this._$AH=e);else{const l=e;let a,h;for(e=s[0],a=0;a<s.length-1;a++)h=U(this,l[i+a],t,a),h===T&&(h=this._$AH[a]),o||(o=!B(h)||h!==this._$AH[a]),h===g?e=g:e!==g&&(e+=(h??"")+s[a+1]),this._$AH[a]=h}o&&!r&&this.O(e)}O(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ke extends J{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===g?void 0:e}}class Ye extends J{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Je extends J{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=U(this,e,t,0)??g)===T)return;const i=this._$AH,r=e===g&&i!==g||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==g&&(i===g||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ge{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){U(this,e)}}const te=I.litHtmlPolyfillSupport;te==null||te(j,V),(I.litHtmlVersions??(I.litHtmlVersions=[])).push("3.1.0");const Qe=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new V(e.insertBefore(q(),s),s,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class D extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return T}}var ye;D._$litElement$=!0,D.finalized=!0,(ye=globalThis.litElementHydrateSupport)==null||ye.call(globalThis,{LitElement:D});const ie=globalThis.litElementPolyfillSupport;ie==null||ie({LitElement:D});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:se},et=(n=Xe,e,t)=>{const{kind:i,metadata:r}=t;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(t.name,n),i==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,n)},init(l){return l!==void 0&&this.C(o,void 0,n),l}}}if(i==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,n)}}throw Error("Unsupported decorator location: "+i)};function Te(n){return(e,t)=>typeof t=="object"?et(n,e,t):((i,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,s):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tt(n){return Te({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},rt=n=>(...e)=>({_$litDirective$:n,values:e});class nt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=rt(class extends nt{constructor(n){var e;if(super(n),n.type!==it.ATTRIBUTE||n.name!=="class"||((e=n.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,[e]){var i,r;if(this.it===void 0){this.it=new Set,n.strings!==void 0&&(this.st=new Set(n.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((i=this.st)!=null&&i.has(s))&&this.it.add(s);return this.render(e)}const t=n.element.classList;for(const s of this.it)s in e||(t.remove(s),this.it.delete(s));for(const s in e){const o=!!e[s];o===this.it.has(s)||(r=this.st)!=null&&r.has(s)||(o?(t.add(s),this.it.add(s)):(t.remove(s),this.it.delete(s)))}return T}});function st(n){for(var e=[],t=0;t<n.length;){var i=n[t];if(i==="*"||i==="+"||i==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(i==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(i==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(i==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(i===":"){for(var r="",s=t+1;s<n.length;){var o=n.charCodeAt(s);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){r+=n[s++];continue}break}if(!r)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:r}),t=s;continue}if(i==="("){var l=1,a="",s=t+1;if(n[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<n.length;){if(n[s]==="\\"){a+=n[s++]+n[s++];continue}if(n[s]===")"){if(l--,l===0){s++;break}}else if(n[s]==="("&&(l++,n[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));a+=n[s++]}if(l)throw new TypeError("Unbalanced pattern at ".concat(t));if(!a)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:a}),t=s;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function ot(n,e){e===void 0&&(e={});for(var t=st(n),i=e.prefixes,r=i===void 0?"./":i,s="[^".concat(M(e.delimiter||"/#?"),"]+?"),o=[],l=0,a=0,h="",c=function(v){if(a<t.length&&t[a].type===v)return t[a++].value},d=function(v){var x=c(v);if(x!==void 0)return x;var E=t[a],G=E.type,Q=E.index;throw new TypeError("Unexpected ".concat(G," at ").concat(Q,", expected ").concat(v))},f=function(){for(var v="",x;x=c("CHAR")||c("ESCAPED_CHAR");)v+=x;return v};a<t.length;){var p=c("CHAR"),$=c("NAME"),R=c("PATTERN");if($||R){var _=p||"";r.indexOf(_)===-1&&(h+=_,_=""),h&&(o.push(h),h=""),o.push({name:$||l++,prefix:_,suffix:"",pattern:R||s,modifier:c("MODIFIER")||""});continue}var m=p||c("ESCAPED_CHAR");if(m){h+=m;continue}h&&(o.push(h),h="");var N=c("OPEN");if(N){var _=f(),H=c("NAME")||"",u=c("PATTERN")||"",w=f();d("CLOSE"),o.push({name:H||(u?l++:""),pattern:H&&!u?s:u,prefix:_,suffix:w,modifier:c("MODIFIER")||""});continue}d("END")}return o}function at(n,e){var t=[],i=ke(n,t,e);return lt(i,t,e)}function lt(n,e,t){t===void 0&&(t={});var i=t.decode,r=i===void 0?function(s){return s}:i;return function(s){var o=n.exec(s);if(!o)return!1;for(var l=o[0],a=o.index,h=Object.create(null),c=function(f){if(o[f]===void 0)return"continue";var p=e[f-1];p.modifier==="*"||p.modifier==="+"?h[p.name]=o[f].split(p.prefix+p.suffix).map(function($){return r($,p)}):h[p.name]=r(o[f],p)},d=1;d<o.length;d++)c(d);return{path:l,index:a,params:h}}}function M(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Re(n){return n&&n.sensitive?"":"i"}function ct(n,e){if(!e)return n;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,r=t.exec(n.source);r;)e.push({name:r[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),r=t.exec(n.source);return n}function ht(n,e,t){var i=n.map(function(r){return ke(r,e,t).source});return new RegExp("(?:".concat(i.join("|"),")"),Re(t))}function dt(n,e,t){return ut(ot(n,t),e,t)}function ut(n,e,t){t===void 0&&(t={});for(var i=t.strict,r=i===void 0?!1:i,s=t.start,o=s===void 0?!0:s,l=t.end,a=l===void 0?!0:l,h=t.encode,c=h===void 0?function(Q){return Q}:h,d=t.delimiter,f=d===void 0?"/#?":d,p=t.endsWith,$=p===void 0?"":p,R="[".concat(M($),"]|$"),_="[".concat(M(f),"]"),m=o?"^":"",N=0,H=n;N<H.length;N++){var u=H[N];if(typeof u=="string")m+=M(c(u));else{var w=M(c(u.prefix)),v=M(c(u.suffix));if(u.pattern)if(e&&e.push(u),w||v)if(u.modifier==="+"||u.modifier==="*"){var x=u.modifier==="*"?"?":"";m+="(?:".concat(w,"((?:").concat(u.pattern,")(?:").concat(v).concat(w,"(?:").concat(u.pattern,"))*)").concat(v,")").concat(x)}else m+="(?:".concat(w,"(").concat(u.pattern,")").concat(v,")").concat(u.modifier);else u.modifier==="+"||u.modifier==="*"?m+="((?:".concat(u.pattern,")").concat(u.modifier,")"):m+="(".concat(u.pattern,")").concat(u.modifier);else m+="(?:".concat(w).concat(v,")").concat(u.modifier)}}if(a)r||(m+="".concat(_,"?")),m+=t.endsWith?"(?=".concat(R,")"):"$";else{var E=n[n.length-1],G=typeof E=="string"?_.indexOf(E[E.length-1])>-1:E===void 0;r||(m+="(?:".concat(_,"(?=").concat(R,"))?")),G||(m+="(?=".concat(_,"|").concat(R,")"))}return new RegExp(m,Re(t))}function ke(n,e,t){return n instanceof RegExp?ct(n,e):Array.isArray(n)?ht(n,e,t):dt(n,e,t)}var pt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,oe=(n,e,t,i)=>{for(var r=i>1?void 0:i?ft(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&pt(e,t,r),r};async function gt(n){return fetch(n).then(e=>e.json())}var O,Ae;let W=(Ae=class extends D{constructor(){super(...arguments);ce(this,O,void 0);Z(this,O,"https://konturio.github.io/qgis-uni-navigation/nav-config.json"),this.config=null,this.logo=null}get src(){return le(this,O)}set src(e){Z(this,O,e)}async connectedCallback(){super.connectedCallback();const e=await gt(this.src);this.config=e,this.getAttribute("data-screen")!=="mobile"&&(this.handleWindowResize(),window.addEventListener("resize",this.handleWindowResize.bind(this)))}disconnectedCallback(){window.removeEventListener("resize",this.handleWindowResize.bind(this)),super.disconnectedCallback()}handleWindowResize(){const{breakpoint:e}=this.config??{};if(!e)return;window.innerWidth<e?this.setAttribute("data-screen","mobile"):(this.removeAttribute("data-screen"),this._handleCloseMobileMenu(),this._handleCloseMobileSubMenus())}drawLogo(){var i;const e=((i=this.config)==null?void 0:i.logo)??null,t=e?`https://konturio.github.io/qgis-uni-navigation/${e.icon}`:"";return e?b`<a class="link logo" style="--logo-img:url('${t}')" href="${e.link}"><div></div></a>`:""}checkActive(e){return e?!!at(e,{decode:decodeURIComponent})(window.location.pathname):!1}drawMenu(e=[],t=!0){return e?b`${e.map(i=>{switch(i.type){case"link":const r=i.settings.href.startsWith("https"),s=be({link:!0,active:this.checkActive(i.settings.activeTest),external:r});return r?b`<a href="${i.settings.href}" class="${s}" target="_blank" noopener noreferrer>${i.settings.name}</a>`:b`<a href="${i.settings.href}" class="${s}">${i.settings.name}</a>`;case"menu":const o=be({menu:!0,"top-level":t});return b`<div class="${o}" @click="${this._handleClickMobileSubMenu}"><a class="link">${i.settings.name}</a><div class="dropdown">${this.drawMenu(i.settings.children,!1)}</div></div>`;case"button":return b`<a href="${i.settings.href}" class="link button">${i.settings.name}</a>`;default:return""}})}`:b``}_handleBurgerClick(e){var s;const t=e.currentTarget,i=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",(!i).toString()),t.classList.toggle("active");const r=(s=this.shadowRoot)==null?void 0:s.querySelector("#mobile-menu");r&&r.classList.toggle("active")}_handleCloseMobileMenu(){var i,r;const e=(i=this.shadowRoot)==null?void 0:i.querySelector("#mobile-menu");if(!e)return;e.classList.remove("active");const t=(r=this.shadowRoot)==null?void 0:r.querySelector("#burger");t&&(t.classList.remove("active"),t.setAttribute("aria-expanded","false"))}_handleClickMobileSubMenu(e){e.stopPropagation();const t=e.currentTarget,i=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",(!i).toString());const r=t.querySelector(".dropdown");if(!r)return;const s=r.getAttribute("data-expanded")==="true";r.setAttribute("data-expanded",(!s).toString())}_handleCloseMobileSubMenus(){var i,r;const e=(i=this.shadowRoot)==null?void 0:i.querySelectorAll(".mobile .menu");e==null||e.forEach(s=>s.setAttribute("aria-expanded","false"));const t=(r=this.shadowRoot)==null?void 0:r.querySelectorAll(".mobile .dropdown");t==null||t.forEach(s=>s.setAttribute("data-expanded","false"))}drawBurger(){return b`<a id="burger" @click="${this._handleBurgerClick}" role="button" class="burger" aria-label="mobile burger menu" aria-expanded="false" data-target="mobile-menu"><span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span></a>`}drawMobileMenu(){var t;const e=(t=this.config)==null?void 0:t.navigation;return b`<div id="mobile-menu" class="mobile">${this.drawMenu(e,!1)}</div>`}drawHeader(){var t;const e=(t=this.config)==null?void 0:t.navigation;return e?b`<nav class="navigation" role="navigation" aria-label="main navigation">${this.drawLogo()}<div class="desktop">${this.drawMenu(e)}</div>${this.drawBurger()}</nav>`:""}render(){return b`<header class="header">${this.drawHeader()} ${this.drawMobileMenu()}</header>`}},O=new WeakMap,Ae);W.styles=Oe`:host{display:flex;flex-flow:column nowrap;width:100%;font-family:Trueno,sans-serif;user-select:none}.header{padding:0 .5rem;background-color:#fff;color:#000;box-shadow:5px 5px 5px 0 #00000020;position:relative}.logo>div{height:2rem;width:6.25rem;display:inline-block;background-image:var(--logo-img);background-size:contain;background-position:center;background-repeat:no-repeat;box-sizing:border-box}.navigation{display:flex;flex-flow:row nowrap;align-items:stretch;width:100%;margin:0 auto;max-width:var(--qg-nav-max-width,auto);min-height:var(--qg-nav-min-height,4rem);font-size:var(--qg-nav-font-size, 14px)}.desktop{display:flex;flex-flow:row nowrap;align-items:stretch;gap:3rem}.link.active,.link:focus,.link:hover{color:var(--qg-nav-active-color,#93b023)}.link.logo{margin-right:auto}.link{color:inherit;text-decoration:none;display:flex;align-items:center;white-space:nowrap}.desktop .link{font-weight:700;padding:0 1.75rem}.link.button{background-color:var(--qg-nav-active-color,#93b023);color:#fff;border-radius:.5rem;padding:.75rem 1rem;align-self:center;font-style:normal;font-weight:600;line-height:16px;letter-spacing:.022px}.link.external::after{content:'';mask:url('/external.svg') no-repeat 50% 50%;mask-size:cover;width:1rem;height:1rem;background-color:#000;display:inline-block;margin-left:.625rem}.link.external:focus::after,.link.external:hover::after{background-color:currentColor}.menu>.link::after{content:'';mask:url('/arrow.svg') no-repeat 50% 50%;mask-size:cover;width:1rem;height:1rem;background-color:#939393;display:inline-block}.link::after{margin-left:.5rem;transition:.4s ease-in-out}.menu.top-level>.link::after{margin-top:-.1rem}.desktop .menu:not(.top-level)>.link::after{margin-left:auto;transform:rotate(-90deg)}.mobile{display:flex;position:absolute;top:100%;right:-100%;background-color:#fff;box-shadow:0 4px 10px 0 rgba(0,0,0,.1);border-top:.25rem solid #000;padding:1rem 2rem;flex-flow:column nowrap;gap:2rem;transition:.4s ease-in-out}.mobile.active{right:0}.menu{position:relative}.menu:focus .link,.menu:hover .link{cursor:pointer}.desktop .dropdown{display:none;position:absolute;top:100%;left:0;background-color:#fff;box-shadow:0 4px 10px 0 rgba(0,0,0,.1);min-width:100%;padding:1rem 0}.desktop .dropdown .link{padding:0 2rem}.desktop .dropdown .link:not(:last-child){padding-bottom:2rem}.desktop .menu:hover .dropdown{display:block}.menu.top-level{display:flex;align-items:stretch}.menu.top-level>.dropdown{border-top:.25rem solid #000}.menu:not(.top-level)>.dropdown{left:100%;top:-.5rem}.desktop .menu:hover .menu:not(:hover) .dropdown{display:none}.burger{display:none;flex-flow:column nowrap;justify-content:space-between;width:45px;height:30px;cursor:pointer}.burger span{display:block;width:100%;height:4px;background-color:#000;border-radius:2px;transition:.4s;transform-origin:center}.burger.active span:first-child{transform:translateY(13px) rotate(45deg)}.burger.active span:nth-child(2){opacity:0}.burger.active span:nth-child(3){transform:translateY(-13px) rotate(-45deg)}:host([data-screen=mobile]) .desktop{display:none}:host([data-screen=mobile]) .header{padding:0 1rem}:host([data-screen=mobile]) .burger{display:flex}:host([data-screen=mobile]) .navigation{min-height:var(--qg-nav-min-height,3rem);align-items:center}.mobile .dropdown,.mobile .menu{display:flex;flex-flow:column nowrap}.mobile .dropdown{gap:2rem}.mobile .dropdown{max-height:0;overflow:hidden;transition:max-height .4s ease-in-out}.mobile .dropdown>:first-child{margin-top:2rem}.mobile .link.button{align-self:flex-start}.mobile .menu>.link,.mobile>.link{font-weight:700}.mobile .menu[aria-expanded=true]>.link::after{transform:rotate(180deg)}.mobile .dropdown[data-expanded=true]{max-height:100vh}`;oe([Te({type:String})],W.prototype,"src",1);oe([tt()],W.prototype,"config",2);W=oe([Ze("qg-top-nav")],W);
