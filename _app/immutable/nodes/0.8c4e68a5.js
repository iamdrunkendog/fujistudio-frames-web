import{S as ce,i as le,s as ue,C as de,D as fe,E as he,F as pe,g as k,d as P,j as Ke,y as Ye,z as Je,A as Xe,B as Ze,G as Se,H as Q,I as $t,k as Ft,l as jt,m as xt,h as Te,J as ve,b as Ht,K as Vt}from"../chunks/index.fae5b326.js";import{c as Ut,p as zt,K as Qe}from"../chunks/KonstaStore.e1fe339b.js";const Wt="always",Gt=!0,ca=Object.freeze(Object.defineProperty({__proto__:null,prerender:Gt,trailingSlash:Wt},Symbol.toStringTag,{value:"Module"}));const qt=(t,e,n)=>{const{safeAreas:r}=t;return Ut(e==="ios"&&"k-ios",e==="material"&&"k-material","k-app w-full h-full min-h-screen",r&&"safe-areas",zt("relative",n),n)};function Kt(t){let e;const n=t[5].default,r=de(n,t,t[4],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,a){r&&r.m(s,a),e=!0},p(s,[a]){r&&r.p&&(!e||a&16)&&fe(r,n,s,s[4],e?pe(n,s[4],a,null):he(s[4]),null)},i(s){e||(k(r,s),e=!0)},o(s){P(r,s),e=!1},d(s){r&&r.d(s)}}}function Yt(t,e,n){let{$$slots:r={},$$scope:s}=e,{theme:a}=e,{dark:i=!1}=e,{touchRipple:o=!0}=e,{autoThemeDetection:c=!0}=e,l=a;const f=()=>{Qe.set({theme:l,dark:i,touchRipple:o})},p=()=>{if(c){if(a==="ios"||a==="material")l!==a&&(l=a,f());else if(l==="parent"&&typeof window<"u"&&typeof document<"u"){const u=document.documentElement;u&&(u.classList.contains("ios")?(l="ios",f()):(u.classList.contains("md")||u.classList.contains("material"))&&(l="material",f()))}}};return Ke(()=>{p()}),p(),f(),t.$$set=u=>{"theme"in u&&n(0,a=u.theme),"dark"in u&&n(1,i=u.dark),"touchRipple"in u&&n(2,o=u.touchRipple),"autoThemeDetection"in u&&n(3,c=u.autoThemeDetection),"$$scope"in u&&n(4,s=u.$$scope)},[a,i,o,c,s,r]}class Jt extends ce{constructor(e){super(),le(this,e,Yt,Kt,ue,{theme:0,dark:1,touchRipple:2,autoThemeDetection:3})}}function Xt(t){let e,n;const r=t[8].default,s=de(r,t,t[9],null);let a=[{class:t[3]},t[4]],i={};for(let o=0;o<a.length;o+=1)i=Q(i,a[o]);return{c(){e=Ft("div"),s&&s.c(),this.h()},l(o){e=jt(o,"DIV",{class:!0});var c=xt(e);s&&s.l(c),c.forEach(Te),this.h()},h(){ve(e,i)},m(o,c){Ht(o,e,c),s&&s.m(e,null),n=!0},p(o,c){s&&s.p&&(!n||c&512)&&fe(s,r,o,o[9],n?pe(r,o[9],c,null):he(o[9]),null),ve(e,i=Vt(a,[(!n||c&8)&&{class:o[3]},c&16&&o[4]]))},i(o){n||(k(s,o),n=!0)},o(o){P(s,o),n=!1},d(o){o&&Te(e),s&&s.d(o)}}}function Zt(t){let e,n;return e=new Jt({props:{theme:t[2],dark:t[0],touchRipple:t[1],autoThemeDetection:!1,$$slots:{default:[Xt]},$$scope:{ctx:t}}}),{c(){Ye(e.$$.fragment)},l(r){Je(e.$$.fragment,r)},m(r,s){Xe(e,r,s),n=!0},p(r,[s]){const a={};s&4&&(a.theme=r[2]),s&1&&(a.dark=r[0]),s&2&&(a.touchRipple=r[1]),s&536&&(a.$$scope={dirty:s,ctx:r}),e.$set(a)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){Ze(e,r)}}}function Qt(t,e,n){let r;const s=["class","theme","dark","touchRipple","safeAreas"];let a=Se(e,s),{$$slots:i={},$$scope:o}=e,{class:c=void 0}=e,{theme:l="material"}=e,{dark:f=!0}=e,{touchRipple:p=!0}=e,{safeAreas:u=!0}=e,h=l;const R=()=>{Qe.set({theme:h,dark:f,touchRipple:p})},De=()=>{if(l==="ios"||l==="material")h!==l&&(n(2,h=l),R());else if(h==="parent"&&typeof window<"u"&&typeof document<"u"){const m=document.documentElement;m&&(m.classList.contains("ios")?(n(2,h="ios"),R()):(m.classList.contains("md")||m.classList.contains("material"))&&(n(2,h="material"),R()))}};return Ke(()=>{De()}),De(),t.$$set=m=>{e=Q(Q({},e),$t(m)),n(4,a=Se(e,s)),"class"in m&&n(5,c=m.class),"theme"in m&&n(6,l=m.theme),"dark"in m&&n(0,f=m.dark),"touchRipple"in m&&n(1,p=m.touchRipple),"safeAreas"in m&&n(7,u=m.safeAreas),"$$scope"in m&&n(9,o=m.$$scope)},t.$$.update=()=>{t.$$.dirty&231&&n(3,r=qt({theme:l,dark:f,touchRipple:p,safeAreas:u},h,c))},[f,p,h,r,a,c,l,u,i,o]}class en extends ce{constructor(e){super(),le(this,e,Qt,Zt,ue,{class:5,theme:6,dark:0,touchRipple:1,safeAreas:7})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tn=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=t[n++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=t[n++],i=t[n++],o=t[n++],c=((s&7)<<18|(a&63)<<12|(i&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const a=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|i&63)}}return e.join("")},tt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const a=t[s],i=s+1<t.length,o=i?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=a>>2,p=(a&3)<<4|o>>4;let u=(o&15)<<2|l>>6,h=l&63;c||(h=64,i||(u=64)),r.push(n[f],n[p],n[u],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(et(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const a=n[t.charAt(s++)],o=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,a==null||o==null||l==null||p==null)throw new nn;const u=a<<2|o>>4;if(r.push(u),l!==64){const h=o<<4&240|l>>2;if(r.push(h),p!==64){const R=l<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rn=function(t){const e=et(t);return tt.encodeByteArray(e,!0)},nt=function(t){return rn(t).replace(/\./g,"")},sn=function(t){try{return tt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=()=>an().__FIREBASE_DEFAULTS__,cn=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ln=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sn(t[1]);return e&&JSON.parse(e)},un=()=>{try{return on()||cn()||ln()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rt=()=>{var t;return(t=un())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function st(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function me(){try{return typeof indexedDB=="object"}catch{return!1}}function ge(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}function at(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="FirebaseError";class B extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fn,Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,j.prototype.create)}}class j{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,a=this.errors[e],i=a?hn(a,r):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new B(s,o,r)}}function hn(t,e){return t.replace(pn,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const pn=/\{\$([^}]+)}/g;function L(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const a=t[s],i=e[s];if(Ce(a)&&Ce(i)){if(!L(a,i))return!1}else if(a!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ce(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=1e3,gn=2,bn=4*60*60*1e3,yn=.5;function Be(t,e=mn,n=gn){const r=e*Math.pow(n,t),s=Math.round(yn*r*(Math.random()-.5)*2);return Math.min(bn,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t&&t._delegate?t._delegate:t}class E{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_n(e))try{this.getOrInitializeService({instanceIdentifier:A})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=A){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=A){return this.instances.has(e)}getOptions(e=A){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(a);r===o&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const i=this.instances.get(s);return i&&e(i,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wn(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=A){return this.component?this.component.multipleInstances?e:A:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wn(t){return t===A?void 0:t}function _n(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new In(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var d;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(d||(d={}));const An={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},Dn=d.INFO,Sn={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},Tn=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Sn[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ot{constructor(e){this.name=e,this._logLevel=Dn,this._logHandler=Tn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in d))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?An[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...e),this._logHandler(this,d.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...e),this._logHandler(this,d.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,d.INFO,...e),this._logHandler(this,d.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,d.WARN,...e),this._logHandler(this,d.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...e),this._logHandler(this,d.ERROR,...e)}}const vn=(t,e)=>e.some(n=>t instanceof n);let Re,Oe;function Cn(){return Re||(Re=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bn(){return Oe||(Oe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ct=new WeakMap,ee=new WeakMap,lt=new WeakMap,U=new WeakMap,be=new WeakMap;function Rn(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",a),t.removeEventListener("error",i)},a=()=>{n(y(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",a),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&ct.set(n,t)}).catch(()=>{}),be.set(e,t),e}function On(t){if(ee.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",i),t.removeEventListener("abort",i)},a=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",a),t.addEventListener("error",i),t.addEventListener("abort",i)});ee.set(t,e)}let te={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ee.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return y(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Mn(t){te=t(te)}function kn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(z(this),e,...n);return lt.set(r,e.sort?e.sort():[e]),y(r)}:Bn().includes(t)?function(...e){return t.apply(z(this),e),y(ct.get(this))}:function(...e){return y(t.apply(z(this),e))}}function Pn(t){return typeof t=="function"?kn(t):(t instanceof IDBTransaction&&On(t),vn(t,Cn())?new Proxy(t,te):t)}function y(t){if(t instanceof IDBRequest)return Rn(t);if(U.has(t))return U.get(t);const e=Pn(t);return e!==t&&(U.set(t,e),be.set(e,t)),e}const z=t=>be.get(t);function Ln(t,e,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const i=indexedDB.open(t,e),o=y(i);return r&&i.addEventListener("upgradeneeded",c=>{r(y(i.result),c.oldVersion,c.newVersion,y(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{a&&c.addEventListener("close",()=>a()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const Nn=["get","getKey","getAll","getAllKeys","count"],$n=["put","add","delete","clear"],W=new Map;function Me(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(W.get(e))return W.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$n.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Nn.includes(n)))return;const a=async function(i,...o){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),s&&c.done]))[0]};return W.set(e,a),a}Mn(t=>({...t,get:(e,n,r)=>Me(e,n)||t.get(e,n,r),has:(e,n)=>!!Me(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jn(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ne="@firebase/app",ke="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new ot("@firebase/app"),xn="@firebase/app-compat",Hn="@firebase/analytics-compat",Vn="@firebase/analytics",Un="@firebase/app-check-compat",zn="@firebase/app-check",Wn="@firebase/auth",Gn="@firebase/auth-compat",qn="@firebase/database",Kn="@firebase/database-compat",Yn="@firebase/functions",Jn="@firebase/functions-compat",Xn="@firebase/installations",Zn="@firebase/installations-compat",Qn="@firebase/messaging",er="@firebase/messaging-compat",tr="@firebase/performance",nr="@firebase/performance-compat",rr="@firebase/remote-config",sr="@firebase/remote-config-compat",ar="@firebase/storage",ir="@firebase/storage-compat",or="@firebase/firestore",cr="@firebase/firestore-compat",lr="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="[DEFAULT]",ur={[ne]:"fire-core",[xn]:"fire-core-compat",[Vn]:"fire-analytics",[Hn]:"fire-analytics-compat",[zn]:"fire-app-check",[Un]:"fire-app-check-compat",[Wn]:"fire-auth",[Gn]:"fire-auth-compat",[qn]:"fire-rtdb",[Kn]:"fire-rtdb-compat",[Yn]:"fire-fn",[Jn]:"fire-fn-compat",[Xn]:"fire-iid",[Zn]:"fire-iid-compat",[Qn]:"fire-fcm",[er]:"fire-fcm-compat",[tr]:"fire-perf",[nr]:"fire-perf-compat",[rr]:"fire-rc",[sr]:"fire-rc-compat",[ar]:"fire-gcs",[ir]:"fire-gcs-compat",[or]:"fire-fst",[cr]:"fire-fst-compat","fire-js":"fire-js",[lr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=new Map,se=new Map;function dr(t,e){try{t.container.addComponent(e)}catch(n){S.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function T(t){const e=t.name;if(se.has(e))return S.debug(`There were multiple attempts to register component ${e}.`),!1;se.set(e,t);for(const n of N.values())dr(n,t);return!0}function x(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},I=new j("app","Firebase",fr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new E("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw I.create("app-deleted",{appName:this._name})}}function ut(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:re,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw I.create("bad-app-name",{appName:String(s)});if(n||(n=rt()),!n)throw I.create("no-options");const a=N.get(s);if(a){if(L(n,a.options)&&L(r,a.config))return a;throw I.create("duplicate-app",{appName:s})}const i=new En(s);for(const c of se.values())i.addComponent(c);const o=new hr(n,r,i);return N.set(s,o),o}function pr(t=re){const e=N.get(t);if(!e&&t===re&&rt())return ut();if(!e)throw I.create("no-app",{appName:t});return e}function w(t,e,n){var r;let s=(r=ur[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const a=s.match(/\s|\//),i=e.match(/\s|\//);if(a||i){const o=[`Unable to register library "${s}" with version "${e}":`];a&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),S.warn(o.join(" "));return}T(new E(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="firebase-heartbeat-database",gr=1,M="firebase-heartbeat-store";let G=null;function dt(){return G||(G=Ln(mr,gr,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(M)}}}).catch(t=>{throw I.create("idb-open",{originalErrorMessage:t.message})})),G}async function br(t){try{return await(await dt()).transaction(M).objectStore(M).get(ft(t))}catch(e){if(e instanceof B)S.warn(e.message);else{const n=I.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});S.warn(n.message)}}}async function Pe(t,e){try{const r=(await dt()).transaction(M,"readwrite");await r.objectStore(M).put(e,ft(t)),await r.done}catch(n){if(n instanceof B)S.warn(n.message);else{const r=I.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});S.warn(r.message)}}}function ft(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=1024,Ir=30*24*60*60*1e3;class wr{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Er(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Le();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=Ir}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Le(),{heartbeatsToSend:n,unsentEntries:r}=_r(this._heartbeatsCache.heartbeats),s=nt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Le(){return new Date().toISOString().substring(0,10)}function _r(t,e=yr){const n=[];let r=t.slice();for(const s of t){const a=n.find(i=>i.agent===s.agent);if(a){if(a.dates.push(s.date),Ne(n)>e){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ne(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Er{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return me()?ge().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await br(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pe(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pe(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ne(t){return nt(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){T(new E("platform-logger",e=>new Fn(e),"PRIVATE")),T(new E("heartbeat",e=>new wr(e),"PRIVATE")),w(ne,ke,t),w(ne,ke,"esm2017"),w("fire-js","")}Ar("");var Dr="firebase",Sr="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */w(Dr,Sr,"app");const Tr=(t,e)=>e.some(n=>t instanceof n);let $e,Fe;function vr(){return $e||($e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cr(){return Fe||(Fe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ht=new WeakMap,ae=new WeakMap,pt=new WeakMap,q=new WeakMap,ye=new WeakMap;function Br(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",a),t.removeEventListener("error",i)},a=()=>{n(_(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",a),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&ht.set(n,t)}).catch(()=>{}),ye.set(e,t),e}function Rr(t){if(ae.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",i),t.removeEventListener("abort",i)},a=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",a),t.addEventListener("error",i),t.addEventListener("abort",i)});ae.set(t,e)}let ie={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ae.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Or(t){ie=t(ie)}function Mr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(K(this),e,...n);return pt.set(r,e.sort?e.sort():[e]),_(r)}:Cr().includes(t)?function(...e){return t.apply(K(this),e),_(ht.get(this))}:function(...e){return _(t.apply(K(this),e))}}function kr(t){return typeof t=="function"?Mr(t):(t instanceof IDBTransaction&&Rr(t),Tr(t,vr())?new Proxy(t,ie):t)}function _(t){if(t instanceof IDBRequest)return Br(t);if(q.has(t))return q.get(t);const e=kr(t);return e!==t&&(q.set(t,e),ye.set(e,t)),e}const K=t=>ye.get(t);function Pr(t,e,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const i=indexedDB.open(t,e),o=_(i);return r&&i.addEventListener("upgradeneeded",c=>{r(_(i.result),c.oldVersion,c.newVersion,_(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),o.then(c=>{a&&c.addEventListener("close",()=>a()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),o}const Lr=["get","getKey","getAll","getAllKeys","count"],Nr=["put","add","delete","clear"],Y=new Map;function je(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Y.get(e))return Y.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Nr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Lr.includes(n)))return;const a=async function(i,...o){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),s&&c.done]))[0]};return Y.set(e,a),a}Or(t=>({...t,get:(e,n,r)=>je(e,n)||t.get(e,n,r),has:(e,n)=>!!je(e,n)||t.has(e,n)}));const mt="@firebase/installations",Ie="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=1e4,bt=`w:${Ie}`,yt="FIS_v2",$r="https://firebaseinstallations.googleapis.com/v1",Fr=60*60*1e3,jr="installations",xr="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},v=new j(jr,xr,Hr);function It(t){return t instanceof B&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt({projectId:t}){return`${$r}/projects/${t}/installations`}function _t(t){return{token:t.token,requestStatus:2,expiresIn:Ur(t.expiresIn),creationTime:Date.now()}}async function Et(t,e){const r=(await e.json()).error;return v.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function At({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Vr(t,{refreshToken:e}){const n=At(t);return n.append("Authorization",zr(e)),n}async function Dt(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ur(t){return Number(t.replace("s","000"))}function zr(t){return`${yt} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=wt(t),s=At(t),a=e.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={fid:n,authVersion:yt,appId:t.appId,sdkVersion:bt},o={method:"POST",headers:s,body:JSON.stringify(i)},c=await Dt(()=>fetch(r,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:_t(l.authToken)}}else throw await Et("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=/^[cdef][\w-]{21}$/,oe="";function Kr(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Yr(t);return qr.test(n)?n:oe}catch{return oe}}function Yr(t){return Gr(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Map;function vt(t,e){const n=H(t);Ct(n,e),Jr(n,e)}function Ct(t,e){const n=Tt.get(t);if(n)for(const r of n)r(e)}function Jr(t,e){const n=Xr();n&&n.postMessage({key:t,fid:e}),Zr()}let D=null;function Xr(){return!D&&"BroadcastChannel"in self&&(D=new BroadcastChannel("[Firebase] FID Change"),D.onmessage=t=>{Ct(t.data.key,t.data.fid)}),D}function Zr(){Tt.size===0&&D&&(D.close(),D=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="firebase-installations-database",es=1,C="firebase-installations-store";let J=null;function we(){return J||(J=Pr(Qr,es,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(C)}}})),J}async function $(t,e){const n=H(t),s=(await we()).transaction(C,"readwrite"),a=s.objectStore(C),i=await a.get(n);return await a.put(e,n),await s.done,(!i||i.fid!==e.fid)&&vt(t,e.fid),e}async function Bt(t){const e=H(t),r=(await we()).transaction(C,"readwrite");await r.objectStore(C).delete(e),await r.done}async function V(t,e){const n=H(t),s=(await we()).transaction(C,"readwrite"),a=s.objectStore(C),i=await a.get(n),o=e(i);return o===void 0?await a.delete(n):await a.put(o,n),await s.done,o&&(!i||i.fid!==o.fid)&&vt(t,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(t){let e;const n=await V(t.appConfig,r=>{const s=ts(r),a=ns(t,s);return e=a.registrationPromise,a.installationEntry});return n.fid===oe?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ts(t){const e=t||{fid:Kr(),registrationStatus:0};return Rt(e)}function ns(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(v.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rs(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ss(t)}:{installationEntry:e}}async function rs(t,e){try{const n=await Wr(t,e);return $(t.appConfig,n)}catch(n){throw It(n)&&n.customData.serverCode===409?await Bt(t.appConfig):await $(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ss(t){let e=await xe(t.appConfig);for(;e.registrationStatus===1;)await St(100),e=await xe(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _e(t);return r||n}return e}function xe(t){return V(t,e=>{if(!e)throw v.create("installation-not-found");return Rt(e)})}function Rt(t){return as(t)?{fid:t.fid,registrationStatus:0}:t}function as(t){return t.registrationStatus===1&&t.registrationTime+gt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is({appConfig:t,heartbeatServiceProvider:e},n){const r=os(t,n),s=Vr(t,n),a=e.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={installation:{sdkVersion:bt,appId:t.appId}},o={method:"POST",headers:s,body:JSON.stringify(i)},c=await Dt(()=>fetch(r,o));if(c.ok){const l=await c.json();return _t(l)}else throw await Et("Generate Auth Token",c)}function os(t,{fid:e}){return`${wt(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(t,e=!1){let n;const r=await V(t.appConfig,a=>{if(!Ot(a))throw v.create("not-registered");const i=a.authToken;if(!e&&us(i))return a;if(i.requestStatus===1)return n=cs(t,e),a;{if(!navigator.onLine)throw v.create("app-offline");const o=fs(a);return n=ls(t,o),o}});return n?await n:r.authToken}async function cs(t,e){let n=await He(t.appConfig);for(;n.authToken.requestStatus===1;)await St(100),n=await He(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ee(t,e):r}function He(t){return V(t,e=>{if(!Ot(e))throw v.create("not-registered");const n=e.authToken;return hs(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ls(t,e){try{const n=await is(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await $(t.appConfig,r),n}catch(n){if(It(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Bt(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $(t.appConfig,r)}throw n}}function Ot(t){return t!==void 0&&t.registrationStatus===2}function us(t){return t.requestStatus===2&&!ds(t)}function ds(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Fr}function fs(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function hs(t){return t.requestStatus===1&&t.requestTime+gt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t){const e=t,{installationEntry:n,registrationPromise:r}=await _e(e);return r?r.catch(console.error):Ee(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(t,e=!1){const n=t;return await gs(n),(await Ee(n,e)).token}async function gs(t){const{registrationPromise:e}=await _e(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){if(!t||!t.options)throw X("App Configuration");if(!t.name)throw X("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw X(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function X(t){return v.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="installations",ys="installations-internal",Is=t=>{const e=t.getProvider("app").getImmediate(),n=bs(e),r=x(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ws=t=>{const e=t.getProvider("app").getImmediate(),n=x(e,Mt).getImmediate();return{getId:()=>ps(n),getToken:s=>ms(n,s)}};function _s(){T(new E(Mt,Is,"PUBLIC")),T(new E(ys,ws,"PRIVATE"))}_s();w(mt,Ie);w(mt,Ie,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F="analytics",Es="firebase_id",As="origin",Ds=60*1e3,Ss="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ae="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=new ot("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},b=new j("analytics","Analytics",Ts);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){if(!t.startsWith(Ae)){const e=b.create("invalid-gtag-resource",{gtagURL:t});return g.warn(e.message),""}return t}function kt(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Cs(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Bs(t,e){const n=Cs("firebase-js-sdk-policy",{createScriptURL:vs}),r=document.createElement("script"),s=`${Ae}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Rs(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Os(t,e,n,r,s,a){const i=r[s];try{if(i)await e[i];else{const c=(await kt(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(o){g.error(o)}t("config",s,a)}async function Ms(t,e,n,r,s){try{let a=[];if(s&&s.send_to){let i=s.send_to;Array.isArray(i)||(i=[i]);const o=await kt(n);for(const c of i){const l=o.find(p=>p.measurementId===c),f=l&&e[l.appId];if(f)a.push(f);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),t("event",r,s||{})}catch(a){g.error(a)}}function ks(t,e,n,r){async function s(a,...i){try{if(a==="event"){const[o,c]=i;await Ms(t,e,n,o,c)}else if(a==="config"){const[o,c]=i;await Os(t,e,n,r,o,c)}else if(a==="consent"){const[o]=i;t("consent","update",o)}else if(a==="get"){const[o,c,l]=i;t("get",o,c,l)}else if(a==="set"){const[o]=i;t("set",o)}else t(a,...i)}catch(o){g.error(o)}}return s}function Ps(t,e,n,r,s){let a=function(...i){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(a=window[s]),window[s]=ks(a,t,e,n),{gtagCore:a,wrappedGtag:window[s]}}function Ls(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ae)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=30,$s=1e3;class Fs{constructor(e={},n=$s){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Pt=new Fs;function js(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function xs(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:js(r)},a=Ss.replace("{app-id}",n),i=await fetch(a,s);if(i.status!==200&&i.status!==304){let o="";try{const c=await i.json();!((e=c.error)===null||e===void 0)&&e.message&&(o=c.error.message)}catch{}throw b.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function Hs(t,e=Pt,n){const{appId:r,apiKey:s,measurementId:a}=t.options;if(!r)throw b.create("no-app-id");if(!s){if(a)return{measurementId:a,appId:r};throw b.create("no-api-key")}const i=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new zs;return setTimeout(async()=>{o.abort()},n!==void 0?n:Ds),Lt({appId:r,apiKey:s,measurementId:a},i,o,e)}async function Lt(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Pt){var a;const{appId:i,measurementId:o}=t;try{await Vs(r,e)}catch(c){if(o)return g.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw c}try{const c=await xs(t);return s.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!Us(l)){if(s.deleteThrottleMetadata(i),o)return g.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:o};throw c}const f=Number((a=l==null?void 0:l.customData)===null||a===void 0?void 0:a.httpStatus)===503?Be(n,s.intervalMillis,Ns):Be(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(i,p),g.debug(`Calling attemptFetch again in ${f} millis`),Lt(t,p,r,s)}}function Vs(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),a=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(a),r(b.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Us(t){if(!(t instanceof B)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class zs{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ws(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const a=await e,i=Object.assign(Object.assign({},r),{send_to:a});t("event",n,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(){if(me())try{await ge()}catch(t){return g.warn(b.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return g.warn(b.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qs(t,e,n,r,s,a,i){var o;const c=Hs(t);c.then(h=>{n[h.measurementId]=h.appId,t.options.measurementId&&h.measurementId!==t.options.measurementId&&g.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>g.error(h)),e.push(c);const l=Gs().then(h=>{if(h)return r.getId()}),[f,p]=await Promise.all([c,l]);Ls(a)||Bs(a,f.measurementId),s("js",new Date);const u=(o=i==null?void 0:i.config)!==null&&o!==void 0?o:{};return u[As]="firebase",u.update=!0,p!=null&&(u[Es]=p),s("config",f.measurementId,u),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.app=e}_delete(){return delete O[this.app.options.appId],Promise.resolve()}}let O={},Ve=[];const Ue={};let Z="dataLayer",Ys="gtag",ze,Nt,We=!1;function Js(){const t=[];if(st()&&t.push("This is a browser extension environment."),at()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=b.create("invalid-analytics-context",{errorInfo:e});g.warn(n.message)}}function Xs(t,e,n){Js();const r=t.options.appId;if(!r)throw b.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)g.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw b.create("no-api-key");if(O[r]!=null)throw b.create("already-exists",{id:r});if(!We){Rs(Z);const{wrappedGtag:a,gtagCore:i}=Ps(O,Ve,Ue,Z,Ys);Nt=a,ze=i,We=!0}return O[r]=qs(t,Ve,Ue,e,ze,Z,n),new Ks(t)}function Zs(t=pr()){t=it(t);const e=x(t,F);return e.isInitialized()?e.getImmediate():Qs(t)}function Qs(t,e={}){const n=x(t,F);if(n.isInitialized()){const s=n.getImmediate();if(L(e,n.getOptions()))return s;throw b.create("already-initialized")}return n.initialize({options:e})}async function ea(){if(st()||!at()||!me())return!1;try{return await ge()}catch{return!1}}function ta(t,e,n,r){t=it(t),Ws(Nt,O[t.app.options.appId],e,n,r).catch(s=>g.error(s))}const Ge="@firebase/analytics",qe="0.10.0";function na(){T(new E(F,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Xs(r,s,n)},"PUBLIC")),T(new E("analytics-internal",t,"PRIVATE")),w(Ge,qe),w(Ge,qe,"esm2017");function t(e){try{const n=e.getProvider(F).getImmediate();return{logEvent:(r,s,a)=>ta(n,r,s,a)}}catch(n){throw b.create("interop-component-reg-failed",{reason:n})}}}na();function ra(t){let e;const n=t[0].default,r=de(n,t,t[1],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,a){r&&r.m(s,a),e=!0},p(s,a){r&&r.p&&(!e||a&2)&&fe(r,n,s,s[1],e?pe(n,s[1],a,null):he(s[1]),null)},i(s){e||(k(r,s),e=!0)},o(s){P(r,s),e=!1},d(s){r&&r.d(s)}}}function sa(t){let e,n;return e=new en({props:{theme:"ios",$$slots:{default:[ra]},$$scope:{ctx:t}}}),{c(){Ye(e.$$.fragment)},l(r){Je(e.$$.fragment,r)},m(r,s){Xe(e,r,s),n=!0},p(r,[s]){const a={};s&2&&(a.$$scope={dirty:s,ctx:r}),e.$set(a)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){Ze(e,r)}}}function aa(t,e,n){let{$$slots:r={},$$scope:s}=e;const a={apiKey:"AIzaSyBydkj4hc3-4JDdffIRpjmFbOM0aO4axLU",authDomain:"fujistudio-frames.firebaseapp.com",projectId:"fujistudio-frames",storageBucket:"fujistudio-frames.appspot.com",messagingSenderId:"128060599458",appId:"1:128060599458:web:2baad2f8dfb25b30a63bfb",measurementId:"G-SBRW1DC7N6"};let i;return i=ut(a),ea&&Zs(i),t.$$set=o=>{"$$scope"in o&&n(1,s=o.$$scope)},[r,s]}class la extends ce{constructor(e){super(),le(this,e,aa,sa,ue,{})}}export{la as component,ca as universal};
