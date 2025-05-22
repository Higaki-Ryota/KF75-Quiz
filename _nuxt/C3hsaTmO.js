const Dp=()=>{};var Hc={};/**
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
 */const Fh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},xp=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],a=r[t++],u=r[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[t++],a=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,u=a?r[s+1]:0,c=s+2<r.length,h=c?r[s+2]:0,f=i>>2,p=(i&3)<<4|u>>4;let g=(u&15)<<2|h>>6,b=h&63;c||(b=64,a||(g=64)),n.push(t[f],t[p],t[g],t[b])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Fh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):xp(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],u=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||u==null||h==null||p==null)throw new Np;const g=i<<2|u>>4;if(n.push(g),h!==64){const b=u<<4&240|h>>2;if(n.push(b),p!==64){const V=h<<6&192|p;n.push(V)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Np extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kp=function(r){const e=Fh(r);return Lh.encodeByteArray(e,!0)},Ii=function(r){return kp(r).replace(/\./g,"")},Bh=function(r){try{return Lh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ei(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Op(t)||(r[t]=Ei(r[t],e[t]));return r}function Op(r){return r!=="__proto__"}/**
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
 */function Da(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mp=()=>Da().__FIREBASE_DEFAULTS__,Fp=()=>{if(typeof process>"u"||typeof Hc>"u")return;const r=Hc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Lp=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Bh(r[1]);return e&&JSON.parse(e)},Uh=()=>{try{return Dp()||Mp()||Fp()||Lp()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},qh=()=>{var r;return(r=Uh())===null||r===void 0?void 0:r.config};/**
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
 */class Bp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function xa(r){return r.endsWith(".cloudworkstations.dev")}async function Up(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function qp(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ii(JSON.stringify(t)),Ii(JSON.stringify(a)),""].join(".")}const Qr={};function $p(){const r={prod:[],emulator:[]};for(const e of Object.keys(Qr))Qr[e]?r.emulator.push(e):r.prod.push(e);return r}function zp(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Jc=!1;function jp(r,e){if(typeof window>"u"||typeof document>"u"||!xa(window.location.host)||Qr[r]===e||Qr[r]||Jc)return;Qr[r]=e;function t(g){return`__firebase__banner__${g}`}const n="__firebase__banner",i=$p().prod.length>0;function a(){const g=document.getElementById(n);g&&g.remove()}function u(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,b){g.setAttribute("width","24"),g.setAttribute("id",b),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Jc=!0,a()},g}function f(g,b){g.setAttribute("id",b),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=zp(n),b=t("text"),V=document.getElementById(b)||document.createElement("span"),N=t("learnmore"),x=document.getElementById(N)||document.createElement("a"),z=t("preprendIcon"),q=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const U=g.element;u(U),f(x,N);const H=h();c(q,z),U.append(q,V,x,H),document.body.appendChild(U)}i?(V.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Ti(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $h(){var r;const e=(r=Uh())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gp(){return typeof window<"u"||zh()}function zh(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function jh(){return!$h()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gh(){return!$h()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Kh(){try{return typeof indexedDB=="object"}catch{return!1}}function Kp(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Qp="FirebaseError";class vn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Qp,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Wp(i,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new vn(s,u,n)}}function Wp(r,e){return r.replace(Hp,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Hp=/\{\$([^}]+)}/g;/**
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
 */function Yc(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function jn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],a=e[s];if(Xc(i)&&Xc(a)){if(!jn(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Xc(r){return r!==null&&typeof r=="object"}function Jp(r,e){const t=new Yp(r,e);return t.subscribe.bind(t)}class Yp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Xp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Bo),s.error===void 0&&(s.error=Bo),s.complete===void 0&&(s.complete=Bo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xp(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Bo(){}/**
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
 */function _e(r){return r&&r._delegate?r._delegate:r}class dn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class Zp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Bp;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tg(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&a.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:eg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eg(r){return r===Zt?void 0:r}function tg(r){return r.instantiationMode==="EAGER"}/**
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
 */class Qh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Na=[];var Q;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Q||(Q={}));const Wh={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},ng=Q.INFO,rg={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},sg=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=rg[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ka{constructor(e){this.name=e,this._logLevel=ng,this._logHandler=sg,this._userLogHandler=null,Na.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}function ig(r){Na.forEach(e=>{e.setLogLevel(r)})}function og(r,e){for(const t of Na){let n=null;e&&e.level&&(n=Wh[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(s,i,...a)=>{const u=a.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(n??s.logLevel)&&r({level:Q[i].toLowerCase(),message:u,args:a,type:s.name})}}}const ag=(r,e)=>e.some(t=>r instanceof t);let Zc,el;function ug(){return Zc||(Zc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cg(){return el||(el=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hh=new WeakMap,Xo=new WeakMap,Jh=new WeakMap,Uo=new WeakMap,Oa=new WeakMap;function lg(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{t(Pt(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Hh.set(t,r)}).catch(()=>{}),Oa.set(e,r),e}function hg(r){if(Xo.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});Xo.set(r,e)}let Zo={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Xo.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Jh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function dg(r){Zo=r(Zo)}function fg(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(qo(this),e,...t);return Jh.set(n,e.sort?e.sort():[e]),Pt(n)}:cg().includes(r)?function(...e){return r.apply(qo(this),e),Pt(Hh.get(this))}:function(...e){return Pt(r.apply(qo(this),e))}}function mg(r){return typeof r=="function"?fg(r):(r instanceof IDBTransaction&&hg(r),ag(r,ug())?new Proxy(r,Zo):r)}function Pt(r){if(r instanceof IDBRequest)return lg(r);if(Uo.has(r))return Uo.get(r);const e=mg(r);return e!==r&&(Uo.set(r,e),Oa.set(e,r)),e}const qo=r=>Oa.get(r);function pg(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,e),u=Pt(a);return n&&a.addEventListener("upgradeneeded",c=>{n(Pt(a.result),c.oldVersion,c.newVersion,Pt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),u.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const gg=["get","getKey","getAll","getAllKeys","count"],_g=["put","add","delete","clear"],$o=new Map;function tl(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if($o.get(e))return $o.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=_g.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||gg.includes(t)))return;const i=async function(a,...u){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(u.shift())),(await Promise.all([h[t](...u),s&&c.done]))[0]};return $o.set(e,i),i}dg(r=>({...r,get:(e,t,n)=>tl(e,t)||r.get(e,t,n),has:(e,t)=>!!tl(e,t)||r.has(e,t)}));/**
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
 */class yg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ig(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Ig(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vi="@firebase/app",ea="0.13.0";/**
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
 */const ct=new ka("@firebase/app"),Eg="@firebase/app-compat",Tg="@firebase/analytics-compat",vg="@firebase/analytics",wg="@firebase/app-check-compat",Ag="@firebase/app-check",bg="@firebase/auth",Rg="@firebase/auth-compat",Sg="@firebase/database",Pg="@firebase/data-connect",Vg="@firebase/database-compat",Cg="@firebase/functions",Dg="@firebase/functions-compat",xg="@firebase/installations",Ng="@firebase/installations-compat",kg="@firebase/messaging",Og="@firebase/messaging-compat",Mg="@firebase/performance",Fg="@firebase/performance-compat",Lg="@firebase/remote-config",Bg="@firebase/remote-config-compat",Ug="@firebase/storage",qg="@firebase/storage-compat",$g="@firebase/firestore",zg="@firebase/ai",jg="@firebase/firestore-compat",Gg="firebase",Kg="11.8.0";/**
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
 */const xt="[DEFAULT]",Qg={[vi]:"fire-core",[Eg]:"fire-core-compat",[vg]:"fire-analytics",[Tg]:"fire-analytics-compat",[Ag]:"fire-app-check",[wg]:"fire-app-check-compat",[bg]:"fire-auth",[Rg]:"fire-auth-compat",[Sg]:"fire-rtdb",[Pg]:"fire-data-connect",[Vg]:"fire-rtdb-compat",[Cg]:"fire-fn",[Dg]:"fire-fn-compat",[xg]:"fire-iid",[Ng]:"fire-iid-compat",[kg]:"fire-fcm",[Og]:"fire-fcm-compat",[Mg]:"fire-perf",[Fg]:"fire-perf-compat",[Lg]:"fire-rc",[Bg]:"fire-rc-compat",[Ug]:"fire-gcs",[qg]:"fire-gcs-compat",[$g]:"fire-fst",[jg]:"fire-fst-compat",[zg]:"fire-vertex","fire-js":"fire-js",[Gg]:"fire-js-all"};/**
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
 */const Nt=new Map,Gn=new Map,Kn=new Map;function rs(r,e){try{r.container.addComponent(e)}catch(t){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Yh(r,e){r.container.addOrOverwriteComponent(e)}function Qn(r){const e=r.name;if(Kn.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;Kn.set(e,r);for(const t of Nt.values())rs(t,r);for(const t of Gn.values())rs(t,r);return!0}function Xh(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Wg(r,e,t=xt){Xh(r,e).clearInstance(t)}function Zh(r){return r.options!==void 0}function ed(r){return r==null?!1:r.settings!==void 0}function Hg(){Kn.clear()}/**
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
 */const Jg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ke=new Ui("app","Firebase",Jg);/**
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
 */let td=class{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
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
 */function nl(r,e){const t=Bh(r.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const s=JSON.parse(t).exp*1e3,i=new Date().getTime();s-i<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class Yg extends td{constructor(e,t,n,s){const i=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,a={name:n,automaticDataCollectionEnabled:i};if(e.apiKey!==void 0)super(e,a,s);else{const u=e;super(u.options,a,s)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:i},t),this._serverConfig.authIdToken&&nl(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&nl(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Ze(vi,ea,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){La(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Ke.create("server-app-deleted")}}/**
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
 */const Ma=Kg;function Fa(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:xt,automaticDataCollectionEnabled:!0},e),s=n.name;if(typeof s!="string"||!s)throw Ke.create("bad-app-name",{appName:String(s)});if(t||(t=qh()),!t)throw Ke.create("no-options");const i=Nt.get(s);if(i){if(jn(t,i.options)&&jn(n,i.config))return i;throw Ke.create("duplicate-app",{appName:s})}const a=new Qh(s);for(const c of Kn.values())a.addComponent(c);const u=new td(t,n,a);return Nt.set(s,u),u}function Xg(r,e){if(Gp()&&!zh())throw Ke.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!0);let t;Zh(r)?t=r.options:t=r;const n=Object.assign(Object.assign({},e),t);n.releaseOnDeref!==void 0&&delete n.releaseOnDeref;const s=h=>[...h].reduce((f,p)=>Math.imul(31,f)+p.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Ke.create("finalization-registry-not-supported",{});const i=""+s(JSON.stringify(n)),a=Gn.get(i);if(a)return a.incRefCount(e.releaseOnDeref),a;const u=new Qh(i);for(const h of Kn.values())u.addComponent(h);const c=new Yg(t,e,i,u);return Gn.set(i,c),c}function Zg(r=xt){const e=Nt.get(r);if(!e&&r===xt&&qh())return Fa();if(!e)throw Ke.create("no-app",{appName:r});return e}function e_(){return Array.from(Nt.values())}async function La(r){let e=!1;const t=r.name;Nt.has(t)?(e=!0,Nt.delete(t)):Gn.has(t)&&r.decRefCount()<=0&&(Gn.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function Ze(r,e,t){var n;let s=(n=Qg[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${e}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(u.join(" "));return}Qn(new dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function nd(r,e){if(r!==null&&typeof r!="function")throw Ke.create("invalid-log-argument");og(r,e)}function rd(r){ig(r)}/**
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
 */const t_="firebase-heartbeat-database",n_=1,ss="firebase-heartbeat-store";let zo=null;function sd(){return zo||(zo=pg(t_,n_,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ss)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ke.create("idb-open",{originalErrorMessage:r.message})})),zo}async function r_(r){try{const t=(await sd()).transaction(ss),n=await t.objectStore(ss).get(id(r));return await t.done,n}catch(e){if(e instanceof vn)ct.warn(e.message);else{const t=Ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(t.message)}}}async function rl(r,e){try{const n=(await sd()).transaction(ss,"readwrite");await n.objectStore(ss).put(e,id(r)),await n.done}catch(t){if(t instanceof vn)ct.warn(t.message);else{const n=Ke.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ct.warn(n.message)}}}function id(r){return`${r.name}!${r.options.appId}`}/**
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
 */const s_=1024,i_=30;class o_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new u_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>i_){const a=c_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ct.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sl(),{heartbeatsToSend:n,unsentEntries:s}=a_(this._heartbeatsCache.heartbeats),i=Ii(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ct.warn(t),""}}}function sl(){return new Date().toISOString().substring(0,10)}function a_(r,e=s_){const t=[];let n=r.slice();for(const s of r){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),il(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),il(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class u_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kh()?Kp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await r_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function il(r){return Ii(JSON.stringify({version:2,heartbeats:r})).length}function c_(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function l_(r){Qn(new dn("platform-logger",e=>new yg(e),"PRIVATE")),Qn(new dn("heartbeat",e=>new o_(e),"PRIVATE")),Ze(vi,ea,r),Ze(vi,ea,"esm2017"),Ze("fire-js","")}l_("");const h_=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:vn,SDK_VERSION:Ma,_DEFAULT_ENTRY_NAME:xt,_addComponent:rs,_addOrOverwriteComponent:Yh,_apps:Nt,_clearComponents:Hg,_components:Kn,_getProvider:Xh,_isFirebaseApp:Zh,_isFirebaseServerApp:ed,_registerComponent:Qn,_removeServiceInstance:Wg,_serverApps:Gn,deleteApp:La,getApp:Zg,getApps:e_,initializeApp:Fa,initializeServerApp:Xg,onLog:nd,registerVersion:Ze,setLogLevel:rd},Symbol.toStringTag,{value:"Module"}));var d_="firebase",f_="11.8.1";/**
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
 */Ze(d_,f_,"app");/**
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
 */class m_{constructor(e,t){this._delegate=e,this.firebase=t,rs(e,new dn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),La(this._delegate)))}_getService(e,t=xt){var n;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((n=s.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=xt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){rs(this._delegate,e)}_addOrOverwriteComponent(e){Yh(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const p_={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},ol=new Ui("app-compat","Firebase",p_);/**
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
 */function g_(r){const e={},t={__esModule:!0,initializeApp:i,app:s,registerVersion:Ze,setLogLevel:rd,onLog:nd,apps:null,SDK_VERSION:Ma,INTERNAL:{registerComponent:u,removeApp:n,useAsService:c,modularAPIs:h_}};t.default=t,Object.defineProperty(t,"apps",{get:a});function n(h){delete e[h]}function s(h){if(h=h||xt,!Yc(e,h))throw ol.create("no-app",{appName:h});return e[h]}s.App=r;function i(h,f={}){const p=Fa(h,f);if(Yc(e,p.name))return e[p.name];const g=new r(p,t);return e[p.name]=g,g}function a(){return Object.keys(e).map(h=>e[h])}function u(h){const f=h.name,p=f.replace("-compat","");if(Qn(h)&&h.type==="PUBLIC"){const g=(b=s())=>{if(typeof b[p]!="function")throw ol.create("invalid-app-argument",{appName:f});return b[p]()};h.serviceProps!==void 0&&Ei(g,h.serviceProps),t[p]=g,r.prototype[p]=function(...b){return this._getService.bind(this,f).apply(this,h.multipleInstances?b:[])}}return h.type==="PUBLIC"?t[p]:null}function c(h,f){return f==="serverAuth"?null:f}return t}/**
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
 */function od(){const r=g_(m_);r.INTERNAL=Object.assign(Object.assign({},r.INTERNAL),{createFirebaseNamespace:od,extendNamespace:e,createSubscribe:Jp,ErrorFactory:Ui,deepExtend:Ei});function e(t){Ei(r,t)}return r}const __=od();/**
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
 */const al=new ka("@firebase/app-compat"),y_="@firebase/app-compat",I_="0.4.0";/**
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
 */function E_(r){Ze(y_,I_,r)}/**
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
 */try{const r=Da();if(r.firebase!==void 0){al.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=r.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&al.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const ad=__;E_();var T_="firebase",v_="11.8.1";/**
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
 */ad.registerVersion(T_,v_,"app-compat");var ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vt,ud;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function I(){}I.prototype=_.prototype,E.D=_.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(T,v,R){for(var y=Array(arguments.length-2),it=2;it<arguments.length;it++)y[it-2]=arguments[it];return _.prototype[v].apply(T,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,I){I||(I=0);var T=Array(16);if(typeof _=="string")for(var v=0;16>v;++v)T[v]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(v=0;16>v;++v)T[v]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=E.g[0],I=E.g[1],v=E.g[2];var R=E.g[3],y=_+(R^I&(v^R))+T[0]+3614090360&4294967295;_=I+(y<<7&4294967295|y>>>25),y=R+(v^_&(I^v))+T[1]+3905402710&4294967295,R=_+(y<<12&4294967295|y>>>20),y=v+(I^R&(_^I))+T[2]+606105819&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(_^v&(R^_))+T[3]+3250441966&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(R^I&(v^R))+T[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(v^_&(I^v))+T[5]+1200080426&4294967295,R=_+(y<<12&4294967295|y>>>20),y=v+(I^R&(_^I))+T[6]+2821735955&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(_^v&(R^_))+T[7]+4249261313&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(R^I&(v^R))+T[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(v^_&(I^v))+T[9]+2336552879&4294967295,R=_+(y<<12&4294967295|y>>>20),y=v+(I^R&(_^I))+T[10]+4294925233&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(_^v&(R^_))+T[11]+2304563134&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(R^I&(v^R))+T[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(v^_&(I^v))+T[13]+4254626195&4294967295,R=_+(y<<12&4294967295|y>>>20),y=v+(I^R&(_^I))+T[14]+2792965006&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(_^v&(R^_))+T[15]+1236535329&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(v^R&(I^v))+T[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(_^I))+T[6]+3225465664&4294967295,R=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(R^_))+T[11]+643717713&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(v^R))+T[0]+3921069994&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^R&(I^v))+T[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(_^I))+T[10]+38016083&4294967295,R=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(R^_))+T[15]+3634488961&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(v^R))+T[4]+3889429448&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^R&(I^v))+T[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(_^I))+T[14]+3275163606&4294967295,R=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(R^_))+T[3]+4107603335&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(v^R))+T[8]+1163531501&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^R&(I^v))+T[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(_^I))+T[2]+4243563512&4294967295,R=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(R^_))+T[7]+1735328473&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(v^R))+T[12]+2368359562&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(I^v^R)+T[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^v)+T[8]+2272392833&4294967295,R=_+(y<<11&4294967295|y>>>21),y=v+(R^_^I)+T[11]+1839030562&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^_)+T[14]+4259657740&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^R)+T[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^v)+T[4]+1272893353&4294967295,R=_+(y<<11&4294967295|y>>>21),y=v+(R^_^I)+T[7]+4139469664&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^_)+T[10]+3200236656&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^R)+T[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^v)+T[0]+3936430074&4294967295,R=_+(y<<11&4294967295|y>>>21),y=v+(R^_^I)+T[3]+3572445317&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^_)+T[6]+76029189&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^R)+T[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^v)+T[12]+3873151461&4294967295,R=_+(y<<11&4294967295|y>>>21),y=v+(R^_^I)+T[15]+530742520&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^_)+T[2]+3299628645&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(v^(I|~R))+T[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~v))+T[7]+1126891415&4294967295,R=_+(y<<10&4294967295|y>>>22),y=v+(_^(R|~I))+T[14]+2878612391&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~_))+T[5]+4237533241&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~R))+T[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~v))+T[3]+2399980690&4294967295,R=_+(y<<10&4294967295|y>>>22),y=v+(_^(R|~I))+T[10]+4293915773&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~_))+T[1]+2240044497&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~R))+T[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~v))+T[15]+4264355552&4294967295,R=_+(y<<10&4294967295|y>>>22),y=v+(_^(R|~I))+T[6]+2734768916&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~_))+T[13]+1309151649&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~R))+T[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~v))+T[11]+3174756917&4294967295,R=_+(y<<10&4294967295|y>>>22),y=v+(_^(R|~I))+T[2]+718787259&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~_))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+R&4294967295}n.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var I=_-this.blockSize,T=this.B,v=this.h,R=0;R<_;){if(v==0)for(;R<=I;)s(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<_;)if(T[v++]=E.charCodeAt(R++),v==this.blockSize){s(this,T),v=0;break}}else for(;R<_;)if(T[v++]=E[R++],v==this.blockSize){s(this,T),v=0;break}}this.h=v,this.o+=_},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var I=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=I&255,I/=256;for(this.u(E),E=Array(16),_=I=0;4>_;++_)for(var T=0;32>T;T+=8)E[I++]=this.g[_]>>>T&255;return E};function i(E,_){var I=u;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=_(E)}function a(E,_){this.h=_;for(var I=[],T=!0,v=E.length-1;0<=v;v--){var R=E[v]|0;T&&R==_||(I[v]=R,T=!1)}this.g=I}var u={};function c(E){return-128<=E&&128>E?i(E,function(_){return new a([_|0],0>_?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return x(h(-E));for(var _=[],I=1,T=0;E>=I;T++)_[T]=E/I|0,I*=4294967296;return new a(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return x(f(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),T=p,v=0;v<E.length;v+=8){var R=Math.min(8,E.length-v),y=parseInt(E.substring(v,v+R),_);8>R?(R=h(Math.pow(_,R)),T=T.j(R).add(h(y))):(T=T.j(I),T=T.add(h(y)))}return T}var p=c(0),g=c(1),b=c(16777216);r=a.prototype,r.m=function(){if(N(this))return-x(this).m();for(var E=0,_=1,I=0;I<this.g.length;I++){var T=this.i(I);E+=(0<=T?T:4294967296+T)*_,_*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(N(this))return"-"+x(this).toString(E);for(var _=h(Math.pow(E,6)),I=this,T="";;){var v=H(I,_).g;I=z(I,v.j(_));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=v,V(I))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function N(E){return E.h==-1}r.l=function(E){return E=z(this,E),N(E)?-1:V(E)?0:1};function x(E){for(var _=E.g.length,I=[],T=0;T<_;T++)I[T]=~E.g[T];return new a(I,~E.h).add(g)}r.abs=function(){return N(this)?x(this):this},r.add=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0,v=0;v<=_;v++){var R=T+(this.i(v)&65535)+(E.i(v)&65535),y=(R>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);T=y>>>16,R&=65535,y&=65535,I[v]=y<<16|R}return new a(I,I[I.length-1]&-2147483648?-1:0)};function z(E,_){return E.add(x(_))}r.j=function(E){if(V(this)||V(E))return p;if(N(this))return N(E)?x(this).j(x(E)):x(x(this).j(E));if(N(E))return x(this.j(x(E)));if(0>this.l(b)&&0>E.l(b))return h(this.m()*E.m());for(var _=this.g.length+E.g.length,I=[],T=0;T<2*_;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var v=0;v<E.g.length;v++){var R=this.i(T)>>>16,y=this.i(T)&65535,it=E.i(v)>>>16,Tr=E.i(v)&65535;I[2*T+2*v]+=y*Tr,q(I,2*T+2*v),I[2*T+2*v+1]+=R*Tr,q(I,2*T+2*v+1),I[2*T+2*v+1]+=y*it,q(I,2*T+2*v+1),I[2*T+2*v+2]+=R*it,q(I,2*T+2*v+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new a(I,0)};function q(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function U(E,_){this.g=E,this.h=_}function H(E,_){if(V(_))throw Error("division by zero");if(V(E))return new U(p,p);if(N(E))return _=H(x(E),_),new U(x(_.g),x(_.h));if(N(_))return _=H(E,x(_)),new U(x(_.g),_.h);if(30<E.g.length){if(N(E)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,T=_;0>=T.l(E);)I=ne(I),T=ne(T);var v=J(I,1),R=J(T,1);for(T=J(T,2),I=J(I,2);!V(T);){var y=R.add(T);0>=y.l(E)&&(v=v.add(I),R=y),T=J(T,1),I=J(I,1)}return _=z(E,v.j(_)),new U(v,_)}for(v=p;0<=E.l(_);){for(I=Math.max(1,Math.floor(E.m()/_.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(I),y=R.j(_);N(y)||0<y.l(E);)I-=T,R=h(I),y=R.j(_);V(R)&&(R=g),v=v.add(R),E=z(E,y)}return new U(v,E)}r.A=function(E){return H(this,E).h},r.and=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)&E.i(T);return new a(I,this.h&E.h)},r.or=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)|E.i(T);return new a(I,this.h|E.h)},r.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)^E.i(T);return new a(I,this.h^E.h)};function ne(E){for(var _=E.g.length+1,I=[],T=0;T<_;T++)I[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(I,E.h)}function J(E,_){var I=_>>5;_%=32;for(var T=E.g.length-I,v=[],R=0;R<T;R++)v[R]=0<_?E.i(R+I)>>>_|E.i(R+I+1)<<32-_:E.i(R+I);return new a(v,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,ud=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Vt=a}).apply(typeof ul<"u"?ul:typeof self<"u"?self:typeof window<"u"?window:{});var ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cd,zr,ld,ui,ta,hd,dd,fd;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ti=="object"&&ti];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(o,l){if(l)e:{var d=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in d))break e;d=d[A]}o=o[o.length-1],m=d[o],l=l(m),l!=m&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,m=!1,A={next:function(){if(!m&&d<o.length){var P=d++;return{value:l(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function p(o,l,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function g(o,l,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function b(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function V(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,A,P){for(var k=Array(arguments.length-2),te=2;te<arguments.length;te++)k[te-2]=arguments[te];return l.prototype[A].apply(m,k)}}function N(o){const l=o.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=o[m];return d}return[]}function x(o,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const A=o.length||0,P=m.length||0;o.length=A+P;for(let k=0;k<P;k++)o[A+k]=m[k]}else o.push(m)}}class z{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function q(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var ne=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function J(o,l,d){for(const m in o)l.call(d,o[m],m,o)}function E(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function _(o){const l={};for(const d in o)l[d]=o[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)o[d]=m[d];for(let P=0;P<I.length;P++)d=I[P],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function v(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function R(o){u.setTimeout(()=>{throw o},0)}function y(){var o=po;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class it{constructor(){this.h=this.g=null}add(l,d){const m=Tr.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Tr=new z(()=>new Jm,o=>o.reset());class Jm{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let vr,wr=!1,po=new it,Hu=()=>{const o=u.Promise.resolve(void 0);vr=()=>{o.then(Ym)}};var Ym=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){R(d)}var l=Tr;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}wr=!1};function _t(){this.s=this.s,this.C=this.C}_t.prototype.s=!1,_t.prototype.ma=function(){this.s||(this.s=!0,this.N())},_t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var Xm=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,l),u.removeEventListener("test",d,l)}catch{}return o}();function Ar(o,l){if(be.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ne){e:{try{H(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Zm[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ar.aa.h.call(this)}}V(Ar,be);var Zm={2:"touch",3:"pen",4:"mouse"};Ar.prototype.h=function(){Ar.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ms="closure_listenable_"+(1e6*Math.random()|0),ep=0;function tp(o,l,d,m,A){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=A,this.key=++ep,this.da=this.fa=!1}function Fs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ls(o){this.src=o,this.g={},this.h=0}Ls.prototype.add=function(o,l,d,m,A){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var k=_o(o,l,m,A);return-1<k?(l=o[k],d||(l.fa=!1)):(l=new tp(l,this.src,P,!!m,A),l.fa=d,o.push(l)),l};function go(o,l){var d=l.type;if(d in o.g){var m=o.g[d],A=Array.prototype.indexOf.call(m,l,void 0),P;(P=0<=A)&&Array.prototype.splice.call(m,A,1),P&&(Fs(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function _o(o,l,d,m){for(var A=0;A<o.length;++A){var P=o[A];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==m)return A}return-1}var yo="closure_lm_"+(1e6*Math.random()|0),Io={};function Ju(o,l,d,m,A){if(Array.isArray(l)){for(var P=0;P<l.length;P++)Ju(o,l[P],d,m,A);return null}return d=Zu(d),o&&o[Ms]?o.K(l,d,h(m)?!!m.capture:!1,A):np(o,l,d,!1,m,A)}function np(o,l,d,m,A,P){if(!l)throw Error("Invalid event type");var k=h(A)?!!A.capture:!!A,te=To(o);if(te||(o[yo]=te=new Ls(o)),d=te.add(l,d,m,k,P),d.proxy)return d;if(m=rp(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Xm||(A=k),A===void 0&&(A=!1),o.addEventListener(l.toString(),m,A);else if(o.attachEvent)o.attachEvent(Xu(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function rp(){function o(d){return l.call(o.src,o.listener,d)}const l=sp;return o}function Yu(o,l,d,m,A){if(Array.isArray(l))for(var P=0;P<l.length;P++)Yu(o,l[P],d,m,A);else m=h(m)?!!m.capture:!!m,d=Zu(d),o&&o[Ms]?(o=o.i,l=String(l).toString(),l in o.g&&(P=o.g[l],d=_o(P,d,m,A),-1<d&&(Fs(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[l],o.h--)))):o&&(o=To(o))&&(l=o.g[l.toString()],o=-1,l&&(o=_o(l,d,m,A)),(d=-1<o?l[o]:null)&&Eo(d))}function Eo(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Ms])go(l.i,o);else{var d=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(d,m,o.capture):l.detachEvent?l.detachEvent(Xu(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=To(l))?(go(d,o),d.h==0&&(d.src=null,l[yo]=null)):Fs(o)}}}function Xu(o){return o in Io?Io[o]:Io[o]="on"+o}function sp(o,l){if(o.da)o=!0;else{l=new Ar(l,this);var d=o.listener,m=o.ha||o.src;o.fa&&Eo(o),o=d.call(m,l)}return o}function To(o){return o=o[yo],o instanceof Ls?o:null}var vo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zu(o){return typeof o=="function"?o:(o[vo]||(o[vo]=function(l){return o.handleEvent(l)}),o[vo])}function Re(){_t.call(this),this.i=new Ls(this),this.M=this,this.F=null}V(Re,_t),Re.prototype[Ms]=!0,Re.prototype.removeEventListener=function(o,l,d,m){Yu(this,o,l,d,m)};function Ne(o,l){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new be(l,o);else if(l instanceof be)l.target=l.target||o;else{var A=l;l=new be(m,o),T(l,A)}if(A=!0,d)for(var P=d.length-1;0<=P;P--){var k=l.g=d[P];A=Bs(k,m,!0,l)&&A}if(k=l.g=o,A=Bs(k,m,!0,l)&&A,A=Bs(k,m,!1,l)&&A,d)for(P=0;P<d.length;P++)k=l.g=d[P],A=Bs(k,m,!1,l)&&A}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],m=0;m<d.length;m++)Fs(d[m]);delete o.g[l],o.h--}}this.F=null},Re.prototype.K=function(o,l,d,m){return this.i.add(String(o),l,!1,d,m)},Re.prototype.L=function(o,l,d,m){return this.i.add(String(o),l,!0,d,m)};function Bs(o,l,d,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,P=0;P<l.length;++P){var k=l[P];if(k&&!k.da&&k.capture==d){var te=k.listener,Te=k.ha||k.src;k.fa&&go(o.i,k),A=te.call(Te,m)!==!1&&A}}return A&&!m.defaultPrevented}function ec(o,l,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function tc(o){o.g=ec(()=>{o.g=null,o.i&&(o.i=!1,tc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class ip extends _t{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:tc(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function br(o){_t.call(this),this.h=o,this.g={}}V(br,_t);var nc=[];function rc(o){J(o.g,function(l,d){this.g.hasOwnProperty(d)&&Eo(l)},o),o.g={}}br.prototype.N=function(){br.aa.N.call(this),rc(this)},br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wo=u.JSON.stringify,op=u.JSON.parse,ap=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Ao(){}Ao.prototype.h=null;function sc(o){return o.h||(o.h=o.i())}function ic(){}var Rr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bo(){be.call(this,"d")}V(bo,be);function Ro(){be.call(this,"c")}V(Ro,be);var Wt={},oc=null;function Us(){return oc=oc||new Re}Wt.La="serverreachability";function ac(o){be.call(this,Wt.La,o)}V(ac,be);function Sr(o){const l=Us();Ne(l,new ac(l))}Wt.STAT_EVENT="statevent";function uc(o,l){be.call(this,Wt.STAT_EVENT,o),this.stat=l}V(uc,be);function ke(o){const l=Us();Ne(l,new uc(l,o))}Wt.Ma="timingevent";function cc(o,l){be.call(this,Wt.Ma,o),this.size=l}V(cc,be);function Pr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function Vr(){this.g=!0}Vr.prototype.xa=function(){this.g=!1};function up(o,l,d,m,A,P){o.info(function(){if(o.g)if(P)for(var k="",te=P.split("&"),Te=0;Te<te.length;Te++){var Y=te[Te].split("=");if(1<Y.length){var Se=Y[0];Y=Y[1];var Pe=Se.split("_");k=2<=Pe.length&&Pe[1]=="type"?k+(Se+"="+Y+"&"):k+(Se+"=redacted&")}}else k=null;else k=P;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+l+`
`+d+`
`+k})}function cp(o,l,d,m,A,P,k){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+l+`
`+d+`
`+P+" "+k})}function Sn(o,l,d,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+hp(o,d)+(m?" "+m:"")})}function lp(o,l){o.info(function(){return"TIMEOUT: "+l})}Vr.prototype.info=function(){};function hp(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return wo(d)}catch{return l}}var qs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},lc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},So;function $s(){}V($s,Ao),$s.prototype.g=function(){return new XMLHttpRequest},$s.prototype.i=function(){return{}},So=new $s;function yt(o,l,d,m){this.j=o,this.i=l,this.l=d,this.R=m||1,this.U=new br(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hc}function hc(){this.i=null,this.g="",this.h=!1}var dc={},Po={};function Vo(o,l,d){o.L=1,o.v=Ks(ot(l)),o.m=d,o.P=!0,fc(o,null)}function fc(o,l){o.F=Date.now(),zs(o),o.A=ot(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Sc(d.i,"t",m),o.C=0,d=o.j.J,o.h=new hc,o.g=Gc(o.j,d?l:null,!o.m),0<o.O&&(o.M=new ip(g(o.Y,o,o.g),o.O)),l=o.U,d=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(nc[0]=A.toString()),A=nc);for(var P=0;P<A.length;P++){var k=Ju(d,A[P],m||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Sr(),up(o.i,o.u,o.A,o.l,o.R,o.m)}yt.prototype.ca=function(o){o=o.target;const l=this.M;l&&at(o)==3?l.j():this.Y(o)},yt.prototype.Y=function(o){try{if(o==this.g)e:{const Pe=at(this.g);var l=this.g.Ba();const Cn=this.g.Z();if(!(3>Pe)&&(Pe!=3||this.g&&(this.h.h||this.g.oa()||kc(this.g)))){this.J||Pe!=4||l==7||(l==8||0>=Cn?Sr(3):Sr(2)),Co(this);var d=this.g.Z();this.X=d;t:if(mc(this)){var m=kc(this.g);o="";var A=m.length,P=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),Cr(this);var k="";break t}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(P&&l==A-1)});m.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=d==200,cp(this.i,this.u,this.A,this.l,this.R,Pe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var te,Te=this.g;if((te=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(te)){var Y=te;break t}}Y=null}if(d=Y)Sn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Do(this,d);else{this.o=!1,this.s=3,ke(12),Ht(this),Cr(this);break e}}if(this.P){d=!0;let Qe;for(;!this.J&&this.C<k.length;)if(Qe=dp(this,k),Qe==Po){Pe==4&&(this.s=4,ke(14),d=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==dc){this.s=4,ke(15),Sn(this.i,this.l,k,"[Invalid Chunk]"),d=!1;break}else Sn(this.i,this.l,Qe,null),Do(this,Qe);if(mc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||k.length!=0||this.h.h||(this.s=1,ke(16),d=!1),this.o=this.o&&d,!d)Sn(this.i,this.l,k,"[Invalid Chunked Response]"),Ht(this),Cr(this);else if(0<k.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Fo(Se),Se.M=!0,ke(11))}}else Sn(this.i,this.l,k,null),Do(this,k);Pe==4&&Ht(this),this.o&&!this.J&&(Pe==4?qc(this.j,this):(this.o=!1,zs(this)))}else Vp(this.g),d==400&&0<k.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Ht(this),Cr(this)}}}catch{}finally{}};function mc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function dp(o,l){var d=o.C,m=l.indexOf(`
`,d);return m==-1?Po:(d=Number(l.substring(d,m)),isNaN(d)?dc:(m+=1,m+d>l.length?Po:(l=l.slice(m,m+d),o.C=m+d,l)))}yt.prototype.cancel=function(){this.J=!0,Ht(this)};function zs(o){o.S=Date.now()+o.I,pc(o,o.I)}function pc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Pr(g(o.ba,o),l)}function Co(o){o.B&&(u.clearTimeout(o.B),o.B=null)}yt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(lp(this.i,this.A),this.L!=2&&(Sr(),ke(17)),Ht(this),this.s=2,Cr(this)):pc(this,this.S-o)};function Cr(o){o.j.G==0||o.J||qc(o.j,o)}function Ht(o){Co(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,rc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Do(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||xo(d.h,o))){if(!o.K&&xo(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Xs(d),Js(d);else break e;Mo(d),ke(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Pr(g(d.Za,d),6e3));if(1>=yc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Yt(d,11)}else if((o.K||d.g==o)&&Xs(d),!q(l))for(A=d.Da.g.parse(l),l=0;l<A.length;l++){let Y=A[l];if(d.T=Y[0],Y=Y[1],d.G==2)if(Y[0]=="c"){d.K=Y[1],d.ia=Y[2];const Se=Y[3];Se!=null&&(d.la=Se,d.j.info("VER="+d.la));const Pe=Y[4];Pe!=null&&(d.Aa=Pe,d.j.info("SVER="+d.Aa));const Cn=Y[5];Cn!=null&&typeof Cn=="number"&&0<Cn&&(m=1.5*Cn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Qe=o.g;if(Qe){const ei=Qe.g?Qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ei){var P=m.h;P.g||ei.indexOf("spdy")==-1&&ei.indexOf("quic")==-1&&ei.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(No(P,P.h),P.h=null))}if(m.D){const Lo=Qe.g?Qe.g.getResponseHeader("X-HTTP-Session-Id"):null;Lo&&(m.ya=Lo,se(m.I,m.D,Lo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var k=o;if(m.qa=jc(m,m.J?m.ia:null,m.W),k.K){Ic(m.h,k);var te=k,Te=m.L;Te&&(te.I=Te),te.B&&(Co(te),zs(te)),m.g=k}else Bc(m);0<d.i.length&&Ys(d)}else Y[0]!="stop"&&Y[0]!="close"||Yt(d,7);else d.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Yt(d,7):Oo(d):Y[0]!="noop"&&d.l&&d.l.ta(Y),d.v=0)}}Sr(4)}catch{}}var fp=class{constructor(o,l){this.g=o,this.map=l}};function gc(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _c(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function yc(o){return o.h?1:o.g?o.g.size:0}function xo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function No(o,l){o.g?o.g.add(l):o.h=l}function Ic(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}gc.prototype.cancel=function(){if(this.i=Ec(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ec(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return N(o.i)}function mp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],d=o.length,m=0;m<d;m++)l.push(o[m]);return l}l=[],d=0;for(m in o)l[d++]=o[m];return l}function pp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const m in o)l[d++]=m;return l}}}function Tc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=pp(o),m=mp(o),A=m.length,P=0;P<A;P++)l.call(void 0,m[P],d&&d[P],o)}var vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gp(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),A=null;if(0<=m){var P=o[d].substring(0,m);A=o[d].substring(m+1)}else P=o[d];l(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Jt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Jt){this.h=o.h,js(this,o.j),this.o=o.o,this.g=o.g,Gs(this,o.s),this.l=o.l;var l=o.i,d=new Nr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),wc(this,d),this.m=o.m}else o&&(l=String(o).match(vc))?(this.h=!1,js(this,l[1]||"",!0),this.o=Dr(l[2]||""),this.g=Dr(l[3]||"",!0),Gs(this,l[4]),this.l=Dr(l[5]||"",!0),wc(this,l[6]||"",!0),this.m=Dr(l[7]||"")):(this.h=!1,this.i=new Nr(null,this.h))}Jt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(xr(l,Ac,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(xr(l,Ac,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(xr(d,d.charAt(0)=="/"?Ip:yp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",xr(d,Tp)),o.join("")};function ot(o){return new Jt(o)}function js(o,l,d){o.j=d?Dr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Gs(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function wc(o,l,d){l instanceof Nr?(o.i=l,vp(o.i,o.h)):(d||(l=xr(l,Ep)),o.i=new Nr(l,o.h))}function se(o,l,d){o.i.set(l,d)}function Ks(o){return se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Dr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function xr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,_p),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function _p(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ac=/[#\/\?@]/g,yp=/[#\?:]/g,Ip=/[#\?]/g,Ep=/[#\?@]/g,Tp=/#/g;function Nr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function It(o){o.g||(o.g=new Map,o.h=0,o.i&&gp(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=Nr.prototype,r.add=function(o,l){It(this),this.i=null,o=Pn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function bc(o,l){It(o),l=Pn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Rc(o,l){return It(o),l=Pn(o,l),o.g.has(l)}r.forEach=function(o,l){It(this),this.g.forEach(function(d,m){d.forEach(function(A){o.call(l,A,m,this)},this)},this)},r.na=function(){It(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const A=o[m];for(let P=0;P<A.length;P++)d.push(l[m])}return d},r.V=function(o){It(this);let l=[];if(typeof o=="string")Rc(this,o)&&(l=l.concat(this.g.get(Pn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},r.set=function(o,l){return It(this),this.i=null,o=Pn(this,o),Rc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Sc(o,l,d){bc(o,l),0<d.length&&(o.i=null,o.g.set(Pn(o,l),N(d)),o.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const P=encodeURIComponent(String(m)),k=this.V(m);for(m=0;m<k.length;m++){var A=P;k[m]!==""&&(A+="="+encodeURIComponent(String(k[m]))),o.push(A)}}return this.i=o.join("&")};function Pn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function vp(o,l){l&&!o.j&&(It(o),o.i=null,o.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(bc(this,m),Sc(this,A,d))},o)),o.j=l}function wp(o,l){const d=new Vr;if(u.Image){const m=new Image;m.onload=b(Et,d,"TestLoadImage: loaded",!0,l,m),m.onerror=b(Et,d,"TestLoadImage: error",!1,l,m),m.onabort=b(Et,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=b(Et,d,"TestLoadImage: timeout",!1,l,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Ap(o,l){const d=new Vr,m=new AbortController,A=setTimeout(()=>{m.abort(),Et(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(A),P.ok?Et(d,"TestPingServer: ok",!0,l):Et(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Et(d,"TestPingServer: error",!1,l)})}function Et(o,l,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function bp(){this.g=new ap}function Rp(o,l,d){const m=d||"";try{Tc(o,function(A,P){let k=A;h(A)&&(k=wo(A)),l.push(m+P+"="+encodeURIComponent(k))})}catch(A){throw l.push(m+"type="+encodeURIComponent("_badmap")),A}}function Qs(o){this.l=o.Ub||null,this.j=o.eb||!1}V(Qs,Ao),Qs.prototype.g=function(){return new Ws(this.l,this.j)},Qs.prototype.i=function(o){return function(){return o}}({});function Ws(o,l){Re.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Ws,Re),r=Ws.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Or(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Or(this)),this.g&&(this.readyState=3,Or(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?kr(this):Or(this),this.readyState==3&&Pc(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,kr(this))},r.Qa=function(o){this.g&&(this.response=o,kr(this))},r.ga=function(){this.g&&kr(this)};function kr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Or(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Or(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Vc(o){let l="";return J(o,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function ko(o,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Vc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):se(o,l,d))}function he(o){Re.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(he,Re);var Sp=/^https?$/i,Pp=["POST","PUT"];r=he.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():So.g(),this.v=this.o?sc(this.o):sc(So),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){Cc(this,P);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Pp,l,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,k]of d)this.g.setRequestHeader(P,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nc(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Cc(this,P)}};function Cc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Dc(o),Hs(o)}function Dc(o){o.A||(o.A=!0,Ne(o,"complete"),Ne(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ne(this,"complete"),Ne(this,"abort"),Hs(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hs(this,!0)),he.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?xc(this):this.bb())},r.bb=function(){xc(this)};function xc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||at(o)!=4||o.Z()!=2)){if(o.u&&at(o)==4)ec(o.Ea,0,o);else if(Ne(o,"readystatechange"),at(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=k===0){var A=String(o.D).match(vc)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),m=!Sp.test(A?A.toLowerCase():"")}d=m}if(d)Ne(o,"complete"),Ne(o,"success");else{o.m=6;try{var P=2<at(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Dc(o)}}finally{Hs(o)}}}}function Hs(o,l){if(o.g){Nc(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ne(o,"ready");try{d.onreadystatechange=m}catch{}}}function Nc(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function at(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),op(l)}};function kc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Vp(o){const l={};o=(o.g&&2<=at(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(q(o[m]))continue;var d=v(o[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[A]||[];l[A]=P,P.push(d)}E(l,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Oc(o){this.Aa=0,this.i=[],this.j=new Vr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mr("baseRetryDelayMs",5e3,o),this.cb=Mr("retryDelaySeedMs",1e4,o),this.Wa=Mr("forwardChannelMaxRetries",2,o),this.wa=Mr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new gc(o&&o.concurrentRequestLimit),this.Da=new bp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Oc.prototype,r.la=8,r.G=1,r.connect=function(o,l,d,m){ke(0),this.W=o,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=jc(this,null,this.W),Ys(this)};function Oo(o){if(Mc(o),o.G==3){var l=o.U++,d=ot(o.I);if(se(d,"SID",o.K),se(d,"RID",l),se(d,"TYPE","terminate"),Fr(o,d),l=new yt(o,o.j,l),l.L=2,l.v=Ks(ot(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=l.v,d=!0),d||(l.g=Gc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),zs(l)}zc(o)}function Js(o){o.g&&(Fo(o),o.g.cancel(),o.g=null)}function Mc(o){Js(o),o.u&&(u.clearTimeout(o.u),o.u=null),Xs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Ys(o){if(!_c(o.h)&&!o.s){o.s=!0;var l=o.Ga;vr||Hu(),wr||(vr(),wr=!0),po.add(l,o),o.B=0}}function Cp(o,l){return yc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Pr(g(o.Ga,o,l),$c(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new yt(this,this.j,o);let P=this.o;if(this.S&&(P?(P=_(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Lc(this,A,l),d=ot(this.I),se(d,"RID",o),se(d,"CVER",22),this.D&&se(d,"X-HTTP-Session-Id",this.D),Fr(this,d),P&&(this.O?l="headers="+encodeURIComponent(String(Vc(P)))+"&"+l:this.m&&ko(d,this.m,P)),No(this.h,A),this.Ua&&se(d,"TYPE","init"),this.P?(se(d,"$req",l),se(d,"SID","null"),A.T=!0,Vo(A,d,null)):Vo(A,d,l),this.G=2}}else this.G==3&&(o?Fc(this,o):this.i.length==0||_c(this.h)||Fc(this))};function Fc(o,l){var d;l?d=l.l:d=o.U++;const m=ot(o.I);se(m,"SID",o.K),se(m,"RID",d),se(m,"AID",o.T),Fr(o,m),o.m&&o.o&&ko(m,o.m,o.o),d=new yt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Lc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),No(o.h,d),Vo(d,m,l)}function Fr(o,l){o.H&&J(o.H,function(d,m){se(l,m,d)}),o.l&&Tc({},function(d,m){se(l,m,d)})}function Lc(o,l,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var A=o.i;let P=-1;for(;;){const k=["count="+d];P==-1?0<d?(P=A[0].g,k.push("ofs="+P)):P=0:k.push("ofs="+P);let te=!0;for(let Te=0;Te<d;Te++){let Y=A[Te].g;const Se=A[Te].map;if(Y-=P,0>Y)P=Math.max(0,A[Te].g-100),te=!1;else try{Rp(Se,k,"req"+Y+"_")}catch{m&&m(Se)}}if(te){m=k.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,m}function Bc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;vr||Hu(),wr||(vr(),wr=!0),po.add(l,o),o.v=0}}function Mo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Pr(g(o.Fa,o),$c(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Uc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Pr(g(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Js(this),Uc(this))};function Fo(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Uc(o){o.g=new yt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ot(o.qa);se(l,"RID","rpc"),se(l,"SID",o.K),se(l,"AID",o.T),se(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&se(l,"TO",o.ja),se(l,"TYPE","xmlhttp"),Fr(o,l),o.m&&o.o&&ko(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ks(ot(l)),d.m=null,d.P=!0,fc(d,o)}r.Za=function(){this.C!=null&&(this.C=null,Js(this),Mo(this),ke(19))};function Xs(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function qc(o,l){var d=null;if(o.g==l){Xs(o),Fo(o),o.g=null;var m=2}else if(xo(o.h,l))d=l.D,Ic(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;m=Us(),Ne(m,new cc(m,d)),Ys(o)}else Bc(o);else if(A=l.s,A==3||A==0&&0<l.X||!(m==1&&Cp(o,l)||m==2&&Mo(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),A){case 1:Yt(o,5);break;case 4:Yt(o,10);break;case 3:Yt(o,6);break;default:Yt(o,2)}}}function $c(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Yt(o,l){if(o.j.info("Error code "+l),l==2){var d=g(o.fb,o),m=o.Xa;const A=!m;m=new Jt(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||js(m,"https"),Ks(m),A?wp(m.toString(),d):Ap(m.toString(),d)}else ke(2);o.G=0,o.l&&o.l.sa(l),zc(o),Mc(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function zc(o){if(o.G=0,o.ka=[],o.l){const l=Ec(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ka,l),x(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function jc(o,l,d){var m=d instanceof Jt?ot(d):new Jt(d);if(m.g!="")l&&(m.g=l+"."+m.g),Gs(m,m.s);else{var A=u.location;m=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var P=new Jt(null);m&&js(P,m),l&&(P.g=l),A&&Gs(P,A),d&&(P.l=d),m=P}return d=o.D,l=o.ya,d&&l&&se(m,d,l),se(m,"VER",o.la),Fr(o,m),m}function Gc(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new he(new Qs({eb:d})):new he(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kc(){}r=Kc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Zs(){}Zs.prototype.g=function(o,l){return new $e(o,l)};function $e(o,l){Re.call(this),this.g=new Oc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!q(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!q(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Vn(this)}V($e,Re),$e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){Oo(this.g)},$e.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=wo(o),o=d);l.i.push(new fp(l.Ya++,o)),l.G==3&&Ys(l)},$e.prototype.N=function(){this.g.l=null,delete this.j,Oo(this.g),delete this.g,$e.aa.N.call(this)};function Qc(o){bo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}V(Qc,bo);function Wc(){Ro.call(this),this.status=1}V(Wc,Ro);function Vn(o){this.g=o}V(Vn,Kc),Vn.prototype.ua=function(){Ne(this.g,"a")},Vn.prototype.ta=function(o){Ne(this.g,new Qc(o))},Vn.prototype.sa=function(o){Ne(this.g,new Wc)},Vn.prototype.ra=function(){Ne(this.g,"b")},Zs.prototype.createWebChannel=Zs.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,fd=function(){return new Zs},dd=function(){return Us()},hd=Wt,ta={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,ui=qs,lc.COMPLETE="complete",ld=lc,ic.EventType=Rr,Rr.OPEN="a",Rr.CLOSE="b",Rr.ERROR="c",Rr.MESSAGE="d",Re.prototype.listen=Re.prototype.K,zr=ic,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,cd=he}).apply(typeof ti<"u"?ti:typeof self<"u"?self:typeof window<"u"?window:{});const cl="@firebase/firestore",ll="4.7.16";/**
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
 */class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
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
 */let fr="11.8.1";/**
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
 */const kt=new ka("@firebase/firestore");function Fn(){return kt.logLevel}function w_(r){kt.setLogLevel(r)}function D(r,...e){if(kt.logLevel<=Q.DEBUG){const t=e.map(Ba);kt.debug(`Firestore (${fr}): ${r}`,...t)}}function fe(r,...e){if(kt.logLevel<=Q.ERROR){const t=e.map(Ba);kt.error(`Firestore (${fr}): ${r}`,...t)}}function nt(r,...e){if(kt.logLevel<=Q.WARN){const t=e.map(Ba);kt.warn(`Firestore (${fr}): ${r}`,...t)}}function Ba(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function F(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,md(r,n,t)}function md(r,e,t){let n=`FIRESTORE (${fr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw fe(n),new Error(n)}function L(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||md(e,s,n)}function A_(r,e){r||F(57014,e)}function M(r,e){return r}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends vn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ae{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class pd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class b_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ee.UNAUTHENTICATED))}shutdown(){}}class R_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class S_{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){L(this.o===void 0,42304);let n=this.i;const s=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let i=new Ae;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ae,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},u=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ae)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string",31837,{l:n}),new pd(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return L(e===null||typeof e=="string",2055,{h:e}),new Ee(e)}}class P_{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class V_{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new P_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ed(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){L(this.o===void 0,3512);const n=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new hl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(L(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new hl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function D_(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Ua(){return new TextEncoder}/**
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
 */class gd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=D_(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function $(r,e){return r<e?-1:r>e?1:0}function na(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),s=e.codePointAt(t);if(n!==s){if(n<128&&s<128)return $(n,s);{const i=Ua(),a=x_(i.encode(dl(r,t)),i.encode(dl(e,t)));return a!==0?a:$(n,s)}}t+=n>65535?2:1}return $(r.length,e.length)}function dl(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function x_(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return $(r[t],e[t]);return $(r.length,e.length)}function Wn(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function _d(r){return r+"\0"}/**
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
 */const fl=-62135596800,ml=1e6;class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*ml);return new ce(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<fl)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ml}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-fl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new ce(0,0))}static max(){return new B(new ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pl="__name__";class He{constructor(e,t,n){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&F(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return He.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof He?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=He.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return $(e.length,t.length)}static compareSegments(e,t){const n=He.isNumericId(e),s=He.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?He.extractNumericId(e).compare(He.extractNumericId(t)):na(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vt.fromString(e.substring(4,e.length-2))}}class G extends He{construct(e,t,n){return new G(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new G(t)}static emptyPath(){return new G([])}}const N_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends He{construct(e,t,n){return new ae(e,t,n)}static isValidIdentifier(e){return N_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pl}static keyField(){return new ae([pl])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new C(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new C(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(t)}static emptyPath(){return new ae([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(G.fromString(e))}static fromName(e){return new O(G.fromString(e).popFirst(5))}static empty(){return new O(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&G.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return G.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new G(e.slice()))}}/**
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
 */const Hn=-1;class wi{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function ra(r){return r.fields.find(e=>e.kind===2)}function en(r){return r.fields.filter(e=>e.kind!==2)}wi.UNKNOWN_ID=-1;class ci{constructor(e,t){this.fieldPath=e,this.kind=t}}class is{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new is(0,je.min())}}function yd(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=B.fromTimestamp(n===1e9?new ce(t+1,0):new ce(t,n));return new je(s,O.empty(),e)}function Id(r){return new je(r.readTime,r.key,Hn)}class je{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new je(B.min(),O.empty(),Hn)}static max(){return new je(B.max(),O.empty(),Hn)}}function qa(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(r.documentKey,e.documentKey),t!==0?t:$(r.largestBatchId,e.largestBatchId))}/**
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
 */const Ed="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Td{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zt(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==Ed)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new w((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof w?t:w.resolve(t)}catch(t){return w.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):w.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):w.reject(t)}static resolve(e){return new w((t,n)=>{t(e)})}static reject(e){return new w((t,n)=>{n(e)})}static waitFor(e){return new w((t,n)=>{let s=0,i=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&t()},c=>n(c))}),a=!0,i===s&&t()})}static or(e){let t=w.resolve(!1);for(const n of e)t=t.next(s=>s?w.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new w((n,s)=>{const i=e.length,a=new Array(i);let u=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++u,u===i&&n(a)},f=>s(f))}})}static doWhile(e,t){return new w((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
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
 */const ze="SimpleDb";class qi{static open(e,t,n,s){try{return new qi(t,e.transaction(s,n))}catch(i){throw new Wr(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Ae,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Wr(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=$a(n.target.error);this.S.reject(new Wr(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(D(ze,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new O_(t)}}class et{static delete(e){return D(ze,"Removing database:",e),nn(Da().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Kh())return!1;if(et.F())return!0;const e=Ti(),t=et.M(e),n=0<t&&t<10,s=vd(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,et.M(Ti())===12.2&&fe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(D(ze,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;t(a)},s.onblocked=()=>{n(new Wr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new C(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new C(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new Wr(e,a))},s.onupgradeneeded=i=>{D(ze,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${a.version}`);this.B.q(a,s.transaction,i.oldVersion,this.version).next(()=>{D(ze,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const n=t.target;this.L=n.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let a=0;for(;;){++a;try{this.db=await this.k(e);const u=qi.open(this.db,e,i?"readonly":"readwrite",n),c=s(u).next(h=>(u.v(),h)).catch(h=>(u.abort(h),w.reject(h))).toPromise();return c.catch(()=>{}),await u.D,c}catch(u){const c=u,h=c.name!=="FirebaseError"&&a<3;if(D(ze,"Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function vd(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class k_{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return nn(this.K.delete())}}class Wr extends C{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function jt(r){return r.name==="IndexedDbTransactionError"}class O_{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(D(ze,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(D(ze,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),nn(n)}add(e){return D(ze,"ADD",this.store.name,e,e),nn(this.store.add(e))}get(e){return nn(this.store.get(e)).next(t=>(t===void 0&&(t=null),D(ze,"GET",this.store.name,e,t),t))}delete(e){return D(ze,"DELETE",this.store.name,e),nn(this.store.delete(e))}count(){return D(ze,"COUNT",this.store.name),nn(this.store.count())}J(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new w((a,u)=>{i.onerror=c=>{u(c.target.error)},i.onsuccess=c=>{a(c.target.result)}})}{const i=this.cursor(n),a=[];return this.Y(i,(u,c)=>{a.push(c)}).next(()=>a)}}Z(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new w((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}X(e,t){D(ze,"DELETE ALL",this.store.name);const n=this.options(e,t);n.ee=!1;const s=this.cursor(n);return this.Y(s,(i,a,u)=>u.delete())}te(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.Y(s,t)}ne(e){const t=this.cursor({});return new w((n,s)=>{t.onerror=i=>{const a=$a(i.target.error);s(a)},t.onsuccess=i=>{const a=i.target.result;a?e(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}Y(e,t){const n=[];return new w((s,i)=>{e.onerror=a=>{i(a.target.error)},e.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const c=new k_(u),h=t(u.primaryKey,u.value,c);if(h instanceof w){const f=h.catch(p=>(c.done(),w.reject(p)));n.push(f)}c.isDone?s():c.j===null?u.continue():u.continue(c.j)}}).next(()=>w.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.ee?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function nn(r){return new w((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=$a(n.target.error);t(s)}})}let gl=!1;function $a(r){const e=et.M(Ti());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return gl||(gl=!0,setTimeout(()=>{throw n},0)),n}}return r}const Hr="IndexBackfiller";class M_{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){D(Hr,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();D(Hr,`Documents written: ${t}`)}catch(t){jt(t)?D(Hr,"Ignoring IndexedDB error during index backfill: ",t):await zt(t)}await this.ie(6e4)})}}class F_{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const n=new Set;let s=t,i=!0;return w.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!n.has(a))return D(Hr,`Processing collection: ${a}`),this._e(e,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>t-s)}_e(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.ae(s,i)).next(u=>(D(Hr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(e,t,u))).next(()=>a.size)}))}ae(e,t){let n=e;return t.changes.forEach((s,i)=>{const a=Id(i);qa(a,n)>0&&(n=a)}),new je(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Be{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>t.writeSequenceNumber(n))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Be.le=-1;/**
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
 */const Ct=-1;function vs(r){return r==null}function os(r){return r===0&&1/r==-1/0}function wd(r){return typeof r=="number"&&Number.isInteger(r)&&!os(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ai="";function De(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=_l(e)),e=L_(r.get(t),e);return _l(e)}function L_(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case Ai:t+="";break;default:t+=i}}return t}function _l(r){return r+Ai+""}function Ye(r){const e=r.length;if(L(e>=2,64408,{path:r}),e===2)return L(r.charAt(0)===Ai&&r.charAt(1)==="",56145,{path:r}),G.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const a=r.indexOf(Ai,i);switch((a<0||a>t)&&F(50515,{path:r}),r.charAt(a+1)){case"":const u=r.substring(i,a);let c;s.length===0?c=u:(s+=u,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:F(61167,{path:r})}i=a+2}return new G(n)}/**
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
 */const tn="remoteDocuments",ws="owner",Dn="owner",as="mutationQueues",B_="userId",We="mutations",yl="batchId",un="userMutationsIndex",Il=["userId","batchId"];/**
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
 */function li(r,e){return[r,De(e)]}function Ad(r,e,t){return[r,De(e),t]}const U_={},Jn="documentMutations",bi="remoteDocumentsV14",q_=["prefixPath","collectionGroup","readTime","documentId"],hi="documentKeyIndex",$_=["prefixPath","collectionGroup","documentId"],bd="collectionGroupIndex",z_=["collectionGroup","readTime","prefixPath","documentId"],us="remoteDocumentGlobal",sa="remoteDocumentGlobalKey",Yn="targets",Rd="queryTargetsIndex",j_=["canonicalId","targetId"],Xn="targetDocuments",G_=["targetId","path"],za="documentTargetsIndex",K_=["path","targetId"],Ri="targetGlobalKey",hn="targetGlobal",cs="collectionParents",Q_=["collectionId","parent"],Zn="clientMetadata",W_="clientId",$i="bundles",H_="bundleId",zi="namedQueries",J_="name",ja="indexConfiguration",Y_="indexId",ia="collectionGroupIndex",X_="collectionGroup",Jr="indexState",Z_=["indexId","uid"],Sd="sequenceNumberIndex",ey=["uid","sequenceNumber"],Yr="indexEntries",ty=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Pd="documentKeyIndex",ny=["indexId","uid","orderedDocumentKey"],ji="documentOverlays",ry=["userId","collectionPath","documentId"],oa="collectionPathOverlayIndex",sy=["userId","collectionPath","largestBatchId"],Vd="collectionGroupOverlayIndex",iy=["userId","collectionGroup","largestBatchId"],Ga="globals",oy="name",Cd=[as,We,Jn,tn,Yn,ws,hn,Xn,Zn,us,cs,$i,zi],ay=[...Cd,ji],Dd=[as,We,Jn,bi,Yn,ws,hn,Xn,Zn,us,cs,$i,zi,ji],xd=Dd,Ka=[...xd,ja,Jr,Yr],uy=Ka,Nd=[...Ka,Ga],cy=Nd;/**
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
 */class aa extends Td{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function ye(r,e){const t=M(r);return et.N(t.he,e)}/**
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
 */function El(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Gt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function kd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class re{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ni(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ni(this.root,e,this.comparator,!1)}getReverseIterator(){return new ni(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ni(this.root,e,this.comparator,!0)}}class ni{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??ve.RED,this.left=s??ve.EMPTY,this.right=i??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new ve(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ve.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ee{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Tl(this.data.getIterator())}getIteratorFrom(e){return new Tl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ee(this.comparator);return t.data=e,t}}class Tl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function xn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Ue{constructor(e){this.fields=e,e.sort(ae.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new ee(ae.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Od extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function ly(){return typeof atob<"u"}/**
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
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Od("Invalid base64 string: "+i):i}}(e);return new de(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const hy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lt(r){if(L(!!r,39018),typeof r=="string"){let e=0;const t=hy.exec(r);if(L(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:oe(r.seconds),nanos:oe(r.nanos)}}function oe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ht(r){return typeof r=="string"?de.fromBase64String(r):de.fromUint8Array(r)}/**
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
 */const Md="server_timestamp",Fd="__type__",Ld="__previous_value__",Bd="__local_write_time__";function Gi(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fd])===null||t===void 0?void 0:t.stringValue)===Md}function Ki(r){const e=r.mapValue.fields[Ld];return Gi(e)?Ki(e):e}function ls(r){const e=lt(r.mapValue.fields[Bd].timestampValue);return new ce(e.seconds,e.nanos)}/**
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
 */class dy{constructor(e,t,n,s,i,a,u,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const ua="(default)";class Ot{constructor(e,t){this.projectId=e,this.database=t||ua}static empty(){return new Ot("","")}get isDefaultDatabase(){return this.database===ua}isEqual(e){return e instanceof Ot&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Qa="__type__",Ud="__max__",Rt={mapValue:{fields:{__type__:{stringValue:Ud}}}},Wa="__vector__",er="value",di={nullValue:"NULL_VALUE"};function Mt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Gi(r)?4:qd(r)?9007199254740991:Qi(r)?10:11:F(28295,{value:r})}function rt(r,e){if(r===e)return!0;const t=Mt(r);if(t!==Mt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ls(r).isEqual(ls(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=lt(s.timestampValue),u=lt(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return ht(s.bytesValue).isEqual(ht(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return oe(s.geoPointValue.latitude)===oe(i.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return oe(s.integerValue)===oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=oe(s.doubleValue),u=oe(i.doubleValue);return a===u?os(a)===os(u):isNaN(a)&&isNaN(u)}return!1}(r,e);case 9:return Wn(r.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(El(a)!==El(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!rt(a[c],u[c])))return!1;return!0}(r,e);default:return F(52216,{left:r})}}function hs(r,e){return(r.values||[]).find(t=>rt(t,e))!==void 0}function Ft(r,e){if(r===e)return 0;const t=Mt(r),n=Mt(e);if(t!==n)return $(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(r.booleanValue,e.booleanValue);case 2:return function(i,a){const u=oe(i.integerValue||i.doubleValue),c=oe(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,e);case 3:return vl(r.timestampValue,e.timestampValue);case 4:return vl(ls(r),ls(e));case 5:return na(r.stringValue,e.stringValue);case 6:return function(i,a){const u=ht(i),c=ht(a);return u.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(i,a){const u=i.split("/"),c=a.split("/");for(let h=0;h<u.length&&h<c.length;h++){const f=$(u[h],c[h]);if(f!==0)return f}return $(u.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,a){const u=$(oe(i.latitude),oe(a.latitude));return u!==0?u:$(oe(i.longitude),oe(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return wl(r.arrayValue,e.arrayValue);case 10:return function(i,a){var u,c,h,f;const p=i.fields||{},g=a.fields||{},b=(u=p[er])===null||u===void 0?void 0:u.arrayValue,V=(c=g[er])===null||c===void 0?void 0:c.arrayValue,N=$(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:wl(b,V)}(r.mapValue,e.mapValue);case 11:return function(i,a){if(i===Rt.mapValue&&a===Rt.mapValue)return 0;if(i===Rt.mapValue)return 1;if(a===Rt.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=na(c[p],f[p]);if(g!==0)return g;const b=Ft(u[c[p]],h[f[p]]);if(b!==0)return b}return $(c.length,f.length)}(r.mapValue,e.mapValue);default:throw F(23264,{Pe:t})}}function vl(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return $(r,e);const t=lt(r),n=lt(e),s=$(t.seconds,n.seconds);return s!==0?s:$(t.nanos,n.nanos)}function wl(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Ft(t[s],n[s]);if(i)return i}return $(t.length,n.length)}function tr(r){return ca(r)}function ca(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=lt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return ht(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return O.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=ca(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${ca(t.fields[a])}`;return s+"}"}(r.mapValue):F(61005,{value:r})}function fi(r){switch(Mt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ki(r);return e?16+fi(e):16;case 5:return 2*r.stringValue.length;case 6:return ht(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+fi(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Gt(n.fields,(i,a)=>{s+=i.length+fi(a)}),s}(r.mapValue);default:throw F(13486,{value:r})}}function fn(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function la(r){return!!r&&"integerValue"in r}function ds(r){return!!r&&"arrayValue"in r}function Al(r){return!!r&&"nullValue"in r}function bl(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function mi(r){return!!r&&"mapValue"in r}function Qi(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Qa])===null||t===void 0?void 0:t.stringValue)===Wa}function Xr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Gt(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Xr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function qd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Ud}const $d={mapValue:{fields:{[Qa]:{stringValue:Wa},[er]:{arrayValue:{}}}}};function fy(r){return"nullValue"in r?di:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?fn(Ot.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Qi(r)?$d:{mapValue:{}}:F(35942,{value:r})}function my(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?fn(Ot.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?$d:"mapValue"in r?Qi(r)?{mapValue:{}}:Rt:F(61959,{value:r})}function Rl(r,e){const t=Ft(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Sl(r,e){const t=Ft(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class we{constructor(e){this.value=e}static empty(){return new we({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!mi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xr(t)}setAll(e){let t=ae.emptyPath(),n={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const c=this.getFieldsMap(t);this.applyChanges(c,n,s),n={},s=[],t=u.popLast()}a?n[u.lastSegment()]=Xr(a):s.push(u.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());mi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];mi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Gt(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new we(Xr(this.value))}}function zd(r){const e=[];return Gt(r.fields,(t,n)=>{const s=new ae([t]);if(mi(n)){const i=zd(n.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ue(e)}/**
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
 */class ie{constructor(e,t,n,s,i,a,u){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(e){return new ie(e,0,B.min(),B.min(),B.min(),we.empty(),0)}static newFoundDocument(e,t,n,s){return new ie(e,1,t,B.min(),n,s,0)}static newNoDocument(e,t){return new ie(e,2,t,B.min(),B.min(),we.empty(),0)}static newUnknownDocument(e,t){return new ie(e,3,t,B.min(),B.min(),we.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lt{constructor(e,t){this.position=e,this.inclusive=t}}function Pl(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],a=r.position[s];if(i.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),t.key):n=Ft(a,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Vl(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!rt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class fs{constructor(e,t="asc"){this.field=e,this.dir=t}}function py(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class jd{}class K extends jd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new gy(e,t,n):t==="array-contains"?new Iy(e,n):t==="in"?new Jd(e,n):t==="not-in"?new Ey(e,n):t==="array-contains-any"?new Ty(e,n):new K(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new _y(e,n):new yy(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ft(t,this.value)):t!==null&&Mt(this.value)===Mt(t)&&this.matchesComparison(Ft(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Z extends jd{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Z(e,t)}matches(e){return nr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function nr(r){return r.op==="and"}function ha(r){return r.op==="or"}function Ha(r){return Gd(r)&&nr(r)}function Gd(r){for(const e of r.filters)if(e instanceof Z)return!1;return!0}function da(r){if(r instanceof K)return r.field.canonicalString()+r.op.toString()+tr(r.value);if(Ha(r))return r.filters.map(e=>da(e)).join(",");{const e=r.filters.map(t=>da(t)).join(",");return`${r.op}(${e})`}}function Kd(r,e){return r instanceof K?function(n,s){return s instanceof K&&n.op===s.op&&n.field.isEqual(s.field)&&rt(n.value,s.value)}(r,e):r instanceof Z?function(n,s){return s instanceof Z&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&Kd(a,s.filters[u]),!0):!1}(r,e):void F(19439)}function Qd(r,e){const t=r.filters.concat(e);return Z.create(t,r.op)}function Wd(r){return r instanceof K?function(t){return`${t.field.canonicalString()} ${t.op} ${tr(t.value)}`}(r):r instanceof Z?function(t){return t.op.toString()+" {"+t.getFilters().map(Wd).join(" ,")+"}"}(r):"Filter"}class gy extends K{constructor(e,t,n){super(e,t,n),this.key=O.fromName(n.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class _y extends K{constructor(e,t){super(e,"in",t),this.keys=Hd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class yy extends K{constructor(e,t){super(e,"not-in",t),this.keys=Hd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Hd(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>O.fromName(n.referenceValue))}class Iy extends K{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ds(t)&&hs(t.arrayValue,this.value)}}class Jd extends K{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hs(this.value.arrayValue,t)}}class Ey extends K{constructor(e,t){super(e,"not-in",t)}matches(e){if(hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!hs(this.value.arrayValue,t)}}class Ty extends K{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ds(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>hs(this.value.arrayValue,n))}}/**
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
 */class vy{constructor(e,t=null,n=[],s=[],i=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Ie=null}}function fa(r,e=null,t=[],n=[],s=null,i=null,a=null){return new vy(r,e,t,n,s,i,a)}function mn(r){const e=M(r);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>da(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),vs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>tr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>tr(n)).join(",")),e.Ie=t}return e.Ie}function As(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!py(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Kd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Vl(r.startAt,e.startAt)&&Vl(r.endAt,e.endAt)}function Si(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Pi(r,e){return r.filters.filter(t=>t instanceof K&&t.field.isEqual(e))}function Cl(r,e,t){let n=di,s=!0;for(const i of Pi(r,e)){let a=di,u=!0;switch(i.op){case"<":case"<=":a=fy(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=di}Rl({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const a=t.position[i];Rl({value:n,inclusive:s},{value:a,inclusive:t.inclusive})<0&&(n=a,s=t.inclusive);break}}return{value:n,inclusive:s}}function Dl(r,e,t){let n=Rt,s=!0;for(const i of Pi(r,e)){let a=Rt,u=!0;switch(i.op){case">=":case">":a=my(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=Rt}Sl({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const a=t.position[i];Sl({value:n,inclusive:s},{value:a,inclusive:t.inclusive})>0&&(n=a,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class ft{constructor(e,t=null,n=[],s=[],i=null,a="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Yd(r,e,t,n,s,i,a,u){return new ft(r,e,t,n,s,i,a,u)}function mr(r){return new ft(r)}function xl(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Ja(r){return r.collectionGroup!==null}function $n(r){const e=M(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ee(ae.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(u=u.add(h.field))})}),u})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new fs(i,n))}),t.has(ae.keyField().canonicalString())||e.Ee.push(new fs(ae.keyField(),n))}return e.Ee}function Fe(r){const e=M(r);return e.de||(e.de=wy(e,$n(r))),e.de}function wy(r,e){if(r.limitType==="F")return fa(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new fs(s.field,i)});const t=r.endAt?new Lt(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Lt(r.startAt.position,r.startAt.inclusive):null;return fa(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function ma(r,e){const t=r.filters.concat([e]);return new ft(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Vi(r,e,t){return new ft(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function bs(r,e){return As(Fe(r),Fe(e))&&r.limitType===e.limitType}function Xd(r){return`${mn(Fe(r))}|lt:${r.limitType}`}function Ln(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Wd(s)).join(", ")}]`),vs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>tr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>tr(s)).join(",")),`Target(${n})`}(Fe(r))}; limitType=${r.limitType})`}function Rs(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of $n(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(a,u,c){const h=Pl(a,u,c);return a.inclusive?h<=0:h<0}(n.startAt,$n(n),s)||n.endAt&&!function(a,u,c){const h=Pl(a,u,c);return a.inclusive?h>=0:h>0}(n.endAt,$n(n),s))}(r,e)}function Zd(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ef(r){return(e,t)=>{let n=!1;for(const s of $n(r)){const i=Ay(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Ay(r,e,t){const n=r.field.isKeyField()?O.comparator(e.key,t.key):function(i,a,u){const c=a.data.field(i),h=u.data.field(i);return c!==null&&h!==null?Ft(c,h):F(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F(19790,{direction:r.dir})}}/**
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
 */class mt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gt(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return kd(this.inner)}size(){return this.innerSize}}/**
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
 */const by=new re(O.comparator);function qe(){return by}const tf=new re(O.comparator);function jr(...r){let e=tf;for(const t of r)e=e.insert(t.key,t);return e}function nf(r){let e=tf;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Xe(){return Zr()}function rf(){return Zr()}function Zr(){return new mt(r=>r.toString(),(r,e)=>r.isEqual(e))}const Ry=new re(O.comparator),Sy=new ee(O.comparator);function j(...r){let e=Sy;for(const t of r)e=e.add(t);return e}const Py=new ee($);function Ya(){return Py}/**
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
 */function Xa(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:os(e)?"-0":e}}function sf(r){return{integerValue:""+r}}function of(r,e){return wd(e)?sf(e):Xa(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Wi{constructor(){this._=void 0}}function Vy(r,e,t){return r instanceof rr?function(s,i){const a={fields:{[Fd]:{stringValue:Md},[Bd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Gi(i)&&(i=Ki(i)),i&&(a.fields[Ld]=i),{mapValue:a}}(t,e):r instanceof pn?uf(r,e):r instanceof gn?cf(r,e):function(s,i){const a=af(s,i),u=Nl(a)+Nl(s.Re);return la(a)&&la(s.Re)?sf(u):Xa(s.serializer,u)}(r,e)}function Cy(r,e,t){return r instanceof pn?uf(r,e):r instanceof gn?cf(r,e):t}function af(r,e){return r instanceof sr?function(n){return la(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class rr extends Wi{}class pn extends Wi{constructor(e){super(),this.elements=e}}function uf(r,e){const t=lf(e);for(const n of r.elements)t.some(s=>rt(s,n))||t.push(n);return{arrayValue:{values:t}}}class gn extends Wi{constructor(e){super(),this.elements=e}}function cf(r,e){let t=lf(e);for(const n of r.elements)t=t.filter(s=>!rt(s,n));return{arrayValue:{values:t}}}class sr extends Wi{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Nl(r){return oe(r.integerValue||r.doubleValue)}function lf(r){return ds(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Ss{constructor(e,t){this.field=e,this.transform=t}}function Dy(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof pn&&s instanceof pn||n instanceof gn&&s instanceof gn?Wn(n.elements,s.elements,rt):n instanceof sr&&s instanceof sr?rt(n.Re,s.Re):n instanceof rr&&s instanceof rr}(r.transform,e.transform)}class xy{constructor(e,t){this.version=e,this.transformResults=t}}class ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ue}static exists(e){return new ue(void 0,e)}static updateTime(e){return new ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pi(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Hi{}function hf(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new gr(r.key,ue.none()):new pr(r.key,r.data,ue.none());{const t=r.data,n=we.empty();let s=new ee(ae.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new pt(r.key,n,new Ue(s.toArray()),ue.none())}}function Ny(r,e,t){r instanceof pr?function(s,i,a){const u=s.value.clone(),c=Ol(s.fieldTransforms,i,a.transformResults);u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):r instanceof pt?function(s,i,a){if(!pi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Ol(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(df(s)),c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function es(r,e,t,n){return r instanceof pr?function(i,a,u,c){if(!pi(i.precondition,a))return u;const h=i.value.clone(),f=Ml(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof pt?function(i,a,u,c){if(!pi(i.precondition,a))return u;const h=Ml(i.fieldTransforms,c,a),f=a.data;return f.setAll(df(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,a,u){return pi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,e,t)}function ky(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=af(n.transform,s||null);i!=null&&(t===null&&(t=we.empty()),t.set(n.field,i))}return t||null}function kl(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Wn(n,s,(i,a)=>Dy(i,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class pr extends Hi{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pt extends Hi{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function df(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Ol(r,e,t){const n=new Map;L(r.length===t.length,32656,{Ve:t.length,me:r.length});for(let s=0;s<t.length;s++){const i=r[s],a=i.transform,u=e.data.field(i.field);n.set(i.field,Cy(a,u,t[s]))}return n}function Ml(r,e,t){const n=new Map;for(const s of r){const i=s.transform,a=t.data.field(s.field);n.set(s.field,Vy(i,a,e))}return n}class gr extends Hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Za extends Hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eu{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Ny(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=es(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=es(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=rf();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=t.has(s.key)?null:u;const c=hf(a,u);c!==null&&n.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(B.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),j())}isEqual(e){return this.batchId===e.batchId&&Wn(this.mutations,e.mutations,(t,n)=>kl(t,n))&&Wn(this.baseMutations,e.baseMutations,(t,n)=>kl(t,n))}}class tu{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){L(e.mutations.length===n.length,58842,{fe:e.mutations.length,ge:n.length});let s=function(){return Ry}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new tu(e,t,n,s)}}/**
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
 */class nu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Oy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ge,W;function ff(r){switch(r){case S.OK:return F(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return F(15467,{code:r})}}function mf(r){if(r===void 0)return fe("GRPC error has no .code"),S.UNKNOWN;switch(r){case ge.OK:return S.OK;case ge.CANCELLED:return S.CANCELLED;case ge.UNKNOWN:return S.UNKNOWN;case ge.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ge.INTERNAL:return S.INTERNAL;case ge.UNAVAILABLE:return S.UNAVAILABLE;case ge.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ge.NOT_FOUND:return S.NOT_FOUND;case ge.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ge.ABORTED:return S.ABORTED;case ge.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ge.DATA_LOSS:return S.DATA_LOSS;default:return F(39323,{code:r})}}(W=ge||(ge={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const My=new Vt([4294967295,4294967295],0);function Fl(r){const e=Ua().encode(r),t=new ud;return t.update(e),new Uint8Array(t.digest())}function Ll(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vt([t,n],0),new Vt([s,i],0)]}class ru{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Gr(`Invalid padding: ${t}`);if(n<0)throw new Gr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Gr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Gr(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Vt.fromNumber(this.pe)}we(e,t,n){let s=e.add(t.multiply(Vt.fromNumber(n)));return s.compare(My)===1&&(s=new Vt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Fl(e),[n,s]=Ll(t);for(let i=0;i<this.hashCount;i++){const a=this.we(n,s,i);if(!this.Se(a))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ru(i,s,t);return n.forEach(u=>a.insert(u)),a}insert(e){if(this.pe===0)return;const t=Fl(e),[n,s]=Ll(t);for(let i=0;i<this.hashCount;i++){const a=this.we(n,s,i);this.be(a)}}be(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Gr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ps{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Vs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ps(B.min(),s,new re($),qe(),j())}}class Vs{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Vs(n,t,j(),j(),j())}}/**
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
 */class gi{constructor(e,t,n,s){this.De=e,this.removedTargetIds=t,this.key=n,this.ve=s}}class pf{constructor(e,t){this.targetId=e,this.Ce=t}}class gf{constructor(e,t,n=de.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Bl{constructor(){this.Fe=0,this.Me=Ul(),this.xe=de.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=j(),t=j(),n=j();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:F(38017,{changeType:i})}}),new Vs(this.xe,this.Oe,e,t,n)}Qe(){this.Ne=!1,this.Me=Ul()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,L(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Fy{constructor(e){this.ze=e,this.je=new Map,this.He=qe(),this.Je=ri(),this.Ye=ri(),this.Ze=new re($)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const n=this.rt(t);switch(e.state){case 0:this.it(t)&&n.ke(e.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(e.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(t);break;case 3:this.it(t)&&(n.Ge(),n.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),n.ke(e.resumeToken));break;default:F(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((n,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,n=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(Si(i))if(n===0){const a=new O(i.path);this.tt(t,a,ie.newNoDocument(a,B.min()))}else L(n===1,20013,{expectedCount:n});else{const a=this.ut(t);if(a!==n){const u=this.ct(e),c=u?this.lt(u,e,a):1;if(c!==0){this.st(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let a,u;try{a=ht(n).toUint8Array()}catch(c){if(c instanceof Od)return nt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new ru(a,s,i)}catch(c){return nt(c instanceof Gr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.pe===0?null:u}lt(e,t,n){return t.Ce.count===n-this.Tt(e,t.targetId)?0:2}Tt(e,t){const n=this.ze.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const a=this.ze.Pt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,a)=>{const u=this._t(a);if(u){if(i.current&&Si(u.target)){const c=new O(u.target.path);this.Et(c).has(a)||this.dt(a,c)||this.tt(a,c,ie.newNoDocument(c,e))}i.Le&&(t.set(a,i.qe()),i.Qe())}});let n=j();this.Ye.forEach((i,a)=>{let u=!0;a.forEachWhile(c=>{const h=this._t(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.He.forEach((i,a)=>a.setReadTime(e));const s=new Ps(e,t,this.Ze,this.He,n);return this.He=qe(),this.Je=ri(),this.Ye=ri(),this.Ze=new re($),s}et(e,t){if(!this.it(e))return;const n=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,n),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,n){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),n&&(this.He=this.He.insert(t,n))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Bl,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new ee($),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ee($),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Bl),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ri(){return new re(O.comparator)}function Ul(){return new re(O.comparator)}const Ly={asc:"ASCENDING",desc:"DESCENDING"},By={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Uy={and:"AND",or:"OR"};class qy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function pa(r,e){return r.useProto3Json||vs(e)?e:{value:e}}function ir(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _f(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function $y(r,e){return ir(r,e.toTimestamp())}function me(r){return L(!!r,49232),B.fromTimestamp(function(t){const n=lt(t);return new ce(n.seconds,n.nanos)}(r))}function su(r,e){return ga(r,e).canonicalString()}function ga(r,e){const t=function(s){return new G(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function yf(r){const e=G.fromString(r);return L(Pf(e),10190,{key:e.toString()}),e}function ms(r,e){return su(r.databaseId,e.path)}function tt(r,e){const t=yf(e);if(t.get(1)!==r.databaseId.projectId)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new O(Tf(t))}function If(r,e){return su(r.databaseId,e)}function Ef(r){const e=yf(r);return e.length===4?G.emptyPath():Tf(e)}function _a(r){return new G(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Tf(r){return L(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function ql(r,e,t){return{name:ms(r,e),fields:t.value.mapValue.fields}}function vf(r,e,t){const n=tt(r,e.name),s=me(e.updateTime),i=e.createTime?me(e.createTime):B.min(),a=new we({mapValue:{fields:e.fields}}),u=ie.newFoundDocument(n,s,i,a);return t&&u.setHasCommittedMutations(),t?u.setHasCommittedMutations():u}function zy(r,e){return"found"in e?function(n,s){L(!!s.found,43571),s.found.name,s.found.updateTime;const i=tt(n,s.found.name),a=me(s.found.updateTime),u=s.found.createTime?me(s.found.createTime):B.min(),c=new we({mapValue:{fields:s.found.fields}});return ie.newFoundDocument(i,a,u,c)}(r,e):"missing"in e?function(n,s){L(!!s.missing,3894),L(!!s.readTime,22933);const i=tt(n,s.missing),a=me(s.readTime);return ie.newNoDocument(i,a)}(r,e):F(7234,{result:e})}function jy(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(L(f===void 0||typeof f=="string",58123),de.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),de.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(h){const f=h.code===void 0?S.UNKNOWN:mf(h.code);return new C(f,h.message||"")}(a);t=new gf(n,s,i,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=tt(r,n.document.name),i=me(n.document.updateTime),a=n.document.createTime?me(n.document.createTime):B.min(),u=new we({mapValue:{fields:n.document.fields}}),c=ie.newFoundDocument(s,i,a,u),h=n.targetIds||[],f=n.removedTargetIds||[];t=new gi(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=tt(r,n.document),i=n.readTime?me(n.readTime):B.min(),a=ie.newNoDocument(s,i),u=n.removedTargetIds||[];t=new gi([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=tt(r,n.document),i=n.removedTargetIds||[];t=new gi([],i,s,null)}else{if(!("filter"in e))return F(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Oy(s,i),u=n.targetId;t=new pf(u,a)}}return t}function ps(r,e){let t;if(e instanceof pr)t={update:ql(r,e.key,e.value)};else if(e instanceof gr)t={delete:ms(r,e.key)};else if(e instanceof pt)t={update:ql(r,e.key,e.data),updateMask:Jy(e.fieldMask)};else{if(!(e instanceof Za))return F(16599,{ft:e.type});t={verify:ms(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof rr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof pn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof gn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof sr)return{fieldPath:a.field.canonicalString(),increment:u.Re};throw F(20930,{transform:a.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$y(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F(27497)}(r,e.precondition)),t}function ya(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?ue.updateTime(me(i.updateTime)):i.exists!==void 0?ue.exists(i.exists):ue.none()}(e.currentDocument):ue.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(a,u){let c=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),c=new rr;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new pn(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new gn(f)}else"increment"in u?c=new sr(a,u.increment):F(16584,{proto:u});const h=ae.fromServerFormat(u.fieldPath);return new Ss(h,c)}(r,s)):[];if(e.update){e.update.name;const s=tt(r,e.update.name),i=new we({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(c){const h=c.fieldPaths||[];return new Ue(h.map(f=>ae.fromServerFormat(f)))}(e.updateMask);return new pt(s,i,a,t,n)}return new pr(s,i,t,n)}if(e.delete){const s=tt(r,e.delete);return new gr(s,t)}if(e.verify){const s=tt(r,e.verify);return new Za(s,t)}return F(1463,{proto:e})}function Gy(r,e){return r&&r.length>0?(L(e!==void 0,14353),r.map(t=>function(s,i){let a=s.updateTime?me(s.updateTime):me(i);return a.isEqual(B.min())&&(a=me(i)),new xy(a,s.transformResults||[])}(t,e))):[]}function wf(r,e){return{documents:[If(r,e.path)]}}function Af(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=If(r,s);const i=function(h){if(h.length!==0)return Sf(Z.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Bn(g.field),direction:Qy(g.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=pa(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:t,parent:s}}function bf(r){let e=Ef(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){L(n===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const g=Rf(p);return g instanceof Z&&Ha(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(g=>function(V){return new fs(Un(V.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(g))}(t.orderBy));let u=null;t.limit&&(u=function(p){let g;return g=typeof p=="object"?p.value:p,vs(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(p){const g=!!p.before,b=p.values||[];return new Lt(b,g)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const g=!p.before,b=p.values||[];return new Lt(b,g)}(t.endAt)),Yd(e,s,a,i,u,"F",c,h)}function Ky(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Rf(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Un(t.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Un(t.unaryFilter.field);return K.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Un(t.unaryFilter.field);return K.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Un(t.unaryFilter.field);return K.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(r):r.fieldFilter!==void 0?function(t){return K.create(Un(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Z.create(t.compositeFilter.filters.map(n=>Rf(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(t.compositeFilter.op))}(r):F(30097,{filter:r})}function Qy(r){return Ly[r]}function Wy(r){return By[r]}function Hy(r){return Uy[r]}function Bn(r){return{fieldPath:r.canonicalString()}}function Un(r){return ae.fromServerFormat(r.fieldPath)}function Sf(r){return r instanceof K?function(t){if(t.op==="=="){if(bl(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NAN"}};if(Al(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bl(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NAN"}};if(Al(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(t.field),op:Wy(t.op),value:t.value}}}(r):r instanceof Z?function(t){const n=t.getFilters().map(s=>Sf(s));return n.length===1?n[0]:{compositeFilter:{op:Hy(t.op),filters:n}}}(r):F(54877,{filter:r})}function Jy(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Pf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ut{constructor(e,t,n,s,i=B.min(),a=B.min(),u=de.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Vf{constructor(e){this.wt=e}}function Yy(r,e){let t;if(e.document)t=vf(r.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=O.fromSegments(e.noDocument.path),s=yn(e.noDocument.readTime);t=ie.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F(56709);{const n=O.fromSegments(e.unknownDocument.path),s=yn(e.unknownDocument.version);t=ie.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new ce(s[0],s[1]);return B.fromTimestamp(i)}(e.readTime)),t}function $l(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ci(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,a){return{name:ms(i,a.key),fields:a.data.value.mapValue.fields,updateTime:ir(i,a.version.toTimestamp()),createTime:ir(i,a.createTime.toTimestamp())}}(r.wt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:_n(e.version)};else{if(!e.isUnknownDocument())return F(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:_n(e.version)}}return n}function Ci(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function _n(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function yn(r){const e=new ce(r.seconds,r.nanoseconds);return B.fromTimestamp(e)}function rn(r,e){const t=(e.baseMutations||[]).map(i=>ya(r.wt,i));for(let i=0;i<e.mutations.length-1;++i){const a=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const u=e.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>ya(r.wt,i)),s=ce.fromMillis(e.localWriteTimeMs);return new eu(e.batchId,s,t,n)}function Kr(r){const e=yn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?yn(r.lastLimboFreeSnapshotVersion):B.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const a=i.documents.length;return L(a===1,1966,{count:a}),Fe(mr(Ef(i.documents[0])))}(r.query):function(i){return Fe(bf(i))}(r.query),new ut(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,de.fromBase64String(r.resumeToken))}function Cf(r,e){const t=_n(e.snapshotVersion),n=_n(e.lastLimboFreeSnapshotVersion);let s;s=Si(e.target)?wf(r.wt,e.target):Af(r.wt,e.target).gt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:mn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function iu(r){const e=bf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Vi(e,e.limit,"L"):e}function jo(r,e){return new nu(e.largestBatchId,ya(r.wt,e.overlayMutation))}function zl(r,e){const t=e.path.lastSegment();return[r,De(e.path.popLast()),t]}function jl(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:_n(n.readTime),documentKey:De(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class Xy{getBundleMetadata(e,t){return Gl(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:yn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return Gl(e).put(function(s){return{bundleId:s.id,createTime:_n(me(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Kl(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:iu(i.bundledQuery),readTime:yn(i.readTime)}}(n)})}saveNamedQuery(e,t){return Kl(e).put(function(s){return{name:s.name,readTime:_n(me(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Gl(r){return ye(r,$i)}function Kl(r){return ye(r,zi)}/**
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
 */class Ji{constructor(e,t){this.serializer=e,this.userId=t}static St(e,t){const n=t.uid||"";return new Ji(e,n)}getOverlay(e,t){return Lr(e).get(zl(this.userId,t)).next(n=>n?jo(this.serializer,n):null)}getOverlays(e,t){const n=Xe();return w.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,a)=>{const u=new nu(t,a);s.push(this.bt(e,u))}),w.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(a=>s.add(De(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(Lr(e).X(oa,u))}),w.waitFor(i)}getOverlaysForCollection(e,t,n){const s=Xe(),i=De(t),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Lr(e).J(oa,a).next(u=>{for(const c of u){const h=jo(this.serializer,c);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=Xe();let a;const u=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Lr(e).te({index:Vd,range:u},(c,h,f)=>{const p=jo(this.serializer,h);i.size()<s||p.largestBatchId===a?(i.set(p.getKey(),p),a=p.largestBatchId):f.done()}).next(()=>i)}bt(e,t){return Lr(e).put(function(s,i,a){const[u,c,h]=zl(i,a.mutation.key);return{userId:i,collectionPath:c,documentId:h,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:ps(s.wt,a.mutation)}}(this.serializer,this.userId,t))}}function Lr(r){return ye(r,ji)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Zy{Dt(e){return ye(e,Ga)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?de.fromUint8Array(n):de.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class sn{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(oe(e.integerValue));else if("doubleValue"in e){const n=oe(e.doubleValue);isNaN(n)?this.Mt(t,13):(this.Mt(t,15),os(n)?t.xt(0):t.xt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Mt(t,20),typeof n=="string"&&(n=lt(n)),t.Ot(`${n.seconds||""}`),t.xt(n.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(ht(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Mt(t,45),t.xt(n.latitude||0),t.xt(n.longitude||0)}else"mapValue"in e?qd(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):Qi(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):F(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const n=e.fields||{};this.Mt(t,55);for(const s of Object.keys(n))this.Nt(s,t),this.Ct(n[s],t)}qt(e,t){var n,s;const i=e.fields||{};this.Mt(t,53);const a=er,u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Mt(t,15),t.xt(oe(u)),this.Nt(a,t),this.Ct(i[a],t)}$t(e,t){const n=e.values||[];this.Mt(t,50);for(const s of n)this.Ct(s,t)}kt(e,t){this.Mt(t,37),O.fromName(e).path.forEach(n=>{this.Mt(t,60),this.Kt(n,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}sn.Wt=new sn;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=255;function eI(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function Ql(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const a=eI(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(e/8)}class tI{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.zt(n.value),n=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Yt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.zt(n);else if(n<2048)this.zt(960|n>>>6),this.zt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|n>>>12),this.zt(128|63&n>>>6),this.zt(128|63&n);else{const s=t.codePointAt(0);this.zt(240|s>>>18),this.zt(128|63&s>>>12),this.zt(128|63&s>>>6),this.zt(128|63&s)}}this.jt()}Xt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Yt()}en(e){const t=this.tn(e),n=Ql(t);this.nn(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}rn(e){const t=this.tn(e),n=Ql(t);this.nn(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}sn(){this._n(Nn),this._n(255)}an(){this.un(Nn),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Nn?(this._n(Nn),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===Nn?(this.un(Nn),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class nI{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class rI{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class Br{constructor(){this.ln=new tI,this.hn=new nI(this.ln),this.Pn=new rI(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
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
 */class on{constructor(e,t,n,s){this.In=e,this.En=t,this.dn=n,this.An=s}Rn(){const e=this.An.length,t=e===0||this.An[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.An,0),t!==e?n.set([0],this.An.length):++n[n.length-1],new on(this.In,this.En,this.dn,n)}Vn(e,t,n){return{indexId:this.In,uid:e,arrayValue:_i(this.dn),directionalValue:_i(this.An),orderedDocumentKey:_i(t),documentKey:n.path.toArray()}}mn(e,t,n){const s=this.Vn(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function Tt(r,e){let t=r.In-e.In;return t!==0?t:(t=Wl(r.dn,e.dn),t!==0?t:(t=Wl(r.An,e.An),t!==0?t:O.comparator(r.En,e.En)))}function Wl(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function _i(r){return Gh()?function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n}(r):r}function Hl(r){return typeof r!="string"?r:function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(r)}class Jl{constructor(e){this.fn=new ee((t,n)=>ae.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.gn=e.orderBy,this.pn=[];for(const t of e.filters){const n=t;n.isInequality()?this.fn=this.fn.add(n):this.pn.push(n)}}get yn(){return this.fn.size>1}wn(e){if(L(e.collectionGroup===this.collectionId,49279),this.yn)return!1;const t=ra(e);if(t!==void 0&&!this.Sn(t))return!1;const n=en(e);let s=new Set,i=0,a=0;for(;i<n.length&&this.Sn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.fn.size>0){const u=this.fn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const c=n[i];if(!this.bn(u,c)||!this.Dn(this.gn[a++],c))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.gn.length||!this.Dn(this.gn[a++],u))return!1}return!0}vn(){if(this.yn)return null;let e=new ee(ae.comparator);const t=[];for(const n of this.pn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new ci(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ci(n.field,0))}for(const n of this.gn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ci(n.field,n.dir==="asc"?0:1)));return new wi(wi.UNKNOWN_ID,this.collectionId,t,is.empty())}Sn(e){for(const t of this.pn)if(this.bn(t,e))return!0;return!1}bn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}Dn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Df(r){var e,t;if(L(r instanceof K||r instanceof Z,20012),r instanceof K){if(r instanceof Jd){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>K.create(r.field,"==",i)))||[];return Z.create(s,"or")}return r}const n=r.filters.map(s=>Df(s));return Z.create(n,r.op)}function sI(r){if(r.getFilters().length===0)return[];const e=Ta(Df(r));return L(xf(e),7391),Ia(e)||Ea(e)?[e]:e.getFilters()}function Ia(r){return r instanceof K}function Ea(r){return r instanceof Z&&Ha(r)}function xf(r){return Ia(r)||Ea(r)||function(t){if(t instanceof Z&&ha(t)){for(const n of t.getFilters())if(!Ia(n)&&!Ea(n))return!1;return!0}return!1}(r)}function Ta(r){if(L(r instanceof K||r instanceof Z,34018),r instanceof K)return r;if(r.filters.length===1)return Ta(r.filters[0]);const e=r.filters.map(n=>Ta(n));let t=Z.create(e,r.op);return t=Di(t),xf(t)?t:(L(t instanceof Z,64498),L(nr(t),40251),L(t.filters.length>1,57927),t.filters.reduce((n,s)=>ou(n,s)))}function ou(r,e){let t;return L(r instanceof K||r instanceof Z,38388),L(e instanceof K||e instanceof Z,25473),t=r instanceof K?e instanceof K?function(s,i){return Z.create([s,i],"and")}(r,e):Yl(r,e):e instanceof K?Yl(e,r):function(s,i){if(L(s.filters.length>0&&i.filters.length>0,48005),nr(s)&&nr(i))return Qd(s,i.getFilters());const a=ha(s)?s:i,u=ha(s)?i:s,c=a.filters.map(h=>ou(h,u));return Z.create(c,"or")}(r,e),Di(t)}function Yl(r,e){if(nr(e))return Qd(e,r.getFilters());{const t=e.filters.map(n=>ou(r,n));return Z.create(t,"or")}}function Di(r){if(L(r instanceof K||r instanceof Z,11850),r instanceof K)return r;const e=r.getFilters();if(e.length===1)return Di(e[0]);if(Gd(r))return r;const t=e.map(s=>Di(s)),n=[];return t.forEach(s=>{s instanceof K?n.push(s):s instanceof Z&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:Z.create(n,r.op)}/**
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
 */class iI{constructor(){this.Cn=new au}addToCollectionParentIndex(e,t){return this.Cn.add(t),w.resolve()}getCollectionParents(e,t){return w.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return w.resolve()}deleteFieldIndex(e,t){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,t){return w.resolve()}getDocumentsMatchingTarget(e,t){return w.resolve(null)}getIndexType(e,t){return w.resolve(0)}getFieldIndexes(e,t){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,t){return w.resolve(je.min())}getMinOffsetFromCollectionGroup(e,t){return w.resolve(je.min())}updateCollectionGroup(e,t,n){return w.resolve()}updateIndexEntries(e,t){return w.resolve()}}class au{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ee(G.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ee(G.comparator)).toArray()}}/**
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
 */const Xl="IndexedDbIndexManager",si=new Uint8Array(0);class oI{constructor(e,t){this.databaseId=t,this.Fn=new au,this.Mn=new mt(n=>mn(n),(n,s)=>As(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Fn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.Fn.add(t)});const i={collectionId:n,parent:De(s)};return Zl(e).put(i)}return w.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[_d(t),""],!1,!0);return Zl(e).J(s).next(i=>{for(const a of i){if(a.collectionId!==t)break;n.push(Ye(a.parent))}return n})}addFieldIndex(e,t){const n=Ur(e),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const a=On(e);return i.next(u=>{a.put(jl(u,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Ur(e),s=On(e),i=kn(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ur(e),n=kn(e),s=On(e);return t.X().next(()=>n.X()).next(()=>s.X())}createTargetIndexes(e,t){return w.forEach(this.xn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new Jl(n).vn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=kn(e);let s=!0;const i=new Map;return w.forEach(this.xn(t),a=>this.On(e,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=j();const u=[];return w.forEach(i,(c,h)=>{D(Xl,`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(H=>`${H.fieldPath}:${H.kind}`).join(",")}`}(c)} to execute ${mn(t)}`);const f=function(U,H){const ne=ra(H);if(ne===void 0)return null;for(const J of Pi(U,ne.fieldPath))switch(J.op){case"array-contains-any":return J.value.arrayValue.values||[];case"array-contains":return[J.value]}return null}(h,c),p=function(U,H){const ne=new Map;for(const J of en(H))for(const E of Pi(U,J.fieldPath))switch(E.op){case"==":case"in":ne.set(J.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return ne.set(J.fieldPath.canonicalString(),E.value),Array.from(ne.values())}return null}(h,c),g=function(U,H){const ne=[];let J=!0;for(const E of en(H)){const _=E.kind===0?Cl(U,E.fieldPath,U.startAt):Dl(U,E.fieldPath,U.startAt);ne.push(_.value),J&&(J=_.inclusive)}return new Lt(ne,J)}(h,c),b=function(U,H){const ne=[];let J=!0;for(const E of en(H)){const _=E.kind===0?Dl(U,E.fieldPath,U.endAt):Cl(U,E.fieldPath,U.endAt);ne.push(_.value),J&&(J=_.inclusive)}return new Lt(ne,J)}(h,c),V=this.Nn(c,h,g),N=this.Nn(c,h,b),x=this.Bn(c,h,p),z=this.Ln(c.indexId,f,V,g.inclusive,N,b.inclusive,x);return w.forEach(z,q=>n.Z(q,t.limit).next(U=>{U.forEach(H=>{const ne=O.fromSegments(H.documentKey);a.has(ne)||(a=a.add(ne),u.push(ne))})}))}).next(()=>u)}return w.resolve(null)})}xn(e){let t=this.Mn.get(e);return t||(e.filters.length===0?t=[e]:t=sI(Z.create(e.filters,"and")).map(n=>fa(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.Mn.set(e,t),t)}Ln(e,t,n,s,i,a,u){const c=(t!=null?t.length:1)*Math.max(n.length,i.length),h=c/(t!=null?t.length:1),f=[];for(let p=0;p<c;++p){const g=t?this.kn(t[p/h]):si,b=this.qn(e,g,n[p%h],s),V=this.Qn(e,g,i[p%h],a),N=u.map(x=>this.qn(e,g,x,!0));f.push(...this.createRange(b,V,N))}return f}qn(e,t,n,s){const i=new on(e,O.empty(),t,n);return s?i:i.Rn()}Qn(e,t,n,s){const i=new on(e,O.empty(),t,n);return s?i.Rn():i}On(e,t){const n=new Jl(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let a=null;for(const u of i)n.wn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(e,t){let n=2;const s=this.xn(t);return w.forEach(s,i=>this.On(e,i).next(a=>{a?n!==0&&a.fields.length<function(c){let h=new ee(ae.comparator),f=!1;for(const p of c.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:h=h.add(g.field));for(const p of c.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(t)&&s.length>1&&n===2?1:n)}$n(e,t){const n=new Br;for(const s of en(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const a=n.Tn(s.kind);sn.Wt.vt(i,a)}return n.cn()}kn(e){const t=new Br;return sn.Wt.vt(e,t.Tn(0)),t.cn()}Un(e,t){const n=new Br;return sn.Wt.vt(fn(this.databaseId,t),n.Tn(function(i){const a=en(i);return a.length===0?0:a[a.length-1].kind}(e))),n.cn()}Bn(e,t,n){if(n===null)return[];let s=[];s.push(new Br);let i=0;for(const a of en(e)){const u=n[i++];for(const c of s)if(this.Kn(t,a.fieldPath)&&ds(u))s=this.Wn(s,a,u);else{const h=c.Tn(a.kind);sn.Wt.vt(u,h)}}return this.Gn(s)}Nn(e,t,n){return this.Bn(e,t,n.position)}Gn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].cn();return t}Wn(e,t,n){const s=[...e],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const c=new Br;c.seed(u.cn()),sn.Wt.vt(a,c.Tn(t.kind)),i.push(c)}return i}Kn(e,t){return!!e.filters.find(n=>n instanceof K&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Ur(e),s=On(e);return(t?n.J(ia,IDBKeyRange.bound(t,t)):n.J()).next(i=>{const a=[];return w.forEach(i,u=>s.get([u.indexId,this.uid]).next(c=>{a.push(function(f,p){const g=p?new is(p.sequenceNumber,new je(yn(p.readTime),new O(Ye(p.documentKey)),p.largestBatchId)):is.empty(),b=f.fields.map(([V,N])=>new ci(ae.fromServerFormat(V),N));return new wi(f.indexId,f.collectionGroup,b,g)}(u,c))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:$(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=Ur(e),i=On(e);return this.zn(e).next(a=>s.J(ia,IDBKeyRange.bound(t,t)).next(u=>w.forEach(u,c=>i.put(jl(c.indexId,this.uid,a,n)))))}updateIndexEntries(e,t){const n=new Map;return w.forEach(t,(s,i)=>{const a=n.get(s.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(e,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),w.forEach(u,c=>this.jn(e,s,c).next(h=>{const f=this.Hn(i,c);return h.isEqual(f)?w.resolve():this.Jn(e,i,c,h,f)}))))})}Yn(e,t,n,s){return kn(e).put(s.Vn(this.uid,this.Un(n,t.key),t.key))}Zn(e,t,n,s){return kn(e).delete(s.mn(this.uid,this.Un(n,t.key),t.key))}jn(e,t,n){const s=kn(e);let i=new ee(Tt);return s.te({index:Pd,range:IDBKeyRange.only([n.indexId,this.uid,_i(this.Un(n,t))])},(a,u)=>{i=i.add(new on(n.indexId,t,Hl(u.arrayValue),Hl(u.directionalValue)))}).next(()=>i)}Hn(e,t){let n=new ee(Tt);const s=this.$n(t,e);if(s==null)return n;const i=ra(t);if(i!=null){const a=e.data.field(i.fieldPath);if(ds(a))for(const u of a.arrayValue.values||[])n=n.add(new on(t.indexId,e.key,this.kn(u),s))}else n=n.add(new on(t.indexId,e.key,si,s));return n}Jn(e,t,n,s,i){D(Xl,"Updating index entries for document '%s'",t.key);const a=[];return function(c,h,f,p,g){const b=c.getIterator(),V=h.getIterator();let N=xn(b),x=xn(V);for(;N||x;){let z=!1,q=!1;if(N&&x){const U=f(N,x);U<0?q=!0:U>0&&(z=!0)}else N!=null?q=!0:z=!0;z?(p(x),x=xn(V)):q?(g(N),N=xn(b)):(N=xn(b),x=xn(V))}}(s,i,Tt,u=>{a.push(this.Yn(e,t,n,u))},u=>{a.push(this.Zn(e,t,n,u))}),w.waitFor(a)}zn(e){let t=1;return On(e).te({index:Sd,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((a,u)=>Tt(a,u)).filter((a,u,c)=>!u||Tt(a,c[u-1])!==0);const s=[];s.push(e);for(const a of n){const u=Tt(a,e),c=Tt(a,t);if(u===0)s[0]=e.Rn();else if(u>0&&c<0)s.push(a),s.push(a.Rn());else if(c>0)break}s.push(t);const i=[];for(let a=0;a<s.length;a+=2){if(this.Xn(s[a],s[a+1]))return[];const u=s[a].mn(this.uid,si,O.empty()),c=s[a+1].mn(this.uid,si,O.empty());i.push(IDBKeyRange.bound(u,c))}return i}Xn(e,t){return Tt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(eh)}getMinOffset(e,t){return w.mapArray(this.xn(t),n=>this.On(e,n).next(s=>s||F(44426))).next(eh)}}function Zl(r){return ye(r,cs)}function kn(r){return ye(r,Yr)}function Ur(r){return ye(r,ja)}function On(r){return ye(r,Jr)}function eh(r){L(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;qa(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new je(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const th={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nf=41943040;class Ce{static withCacheSize(e){return new Ce(e,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function kf(r,e,t){const n=r.store(We),s=r.store(Jn),i=[],a=IDBKeyRange.only(t.batchId);let u=0;const c=n.te({range:a},(f,p,g)=>(u++,g.delete()));i.push(c.next(()=>{L(u===1,47070,{batchId:t.batchId})}));const h=[];for(const f of t.mutations){const p=Ad(e,f.key.path,t.batchId);i.push(s.delete(p)),h.push(f.key)}return w.waitFor(i).next(()=>h)}function xi(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw F(14731);e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Ce.DEFAULT_COLLECTION_PERCENTILE=10,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ce.DEFAULT=new Ce(Nf,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ce.DISABLED=new Ce(-1,0,0);class Yi{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.er={}}static St(e,t,n,s){L(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new Yi(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return vt(e).te({index:un,range:n},(s,i,a)=>{t=!1,a.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=qn(e),a=vt(e);return a.add({}).next(u=>{L(typeof u=="number",49019);const c=new eu(u,t,n,s),h=function(b,V,N){const x=N.baseMutations.map(q=>ps(b.wt,q)),z=N.mutations.map(q=>ps(b.wt,q));return{userId:V,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:x,mutations:z}}(this.serializer,this.userId,c),f=[];let p=new ee((g,b)=>$(g.canonicalString(),b.canonicalString()));for(const g of s){const b=Ad(this.userId,g.key.path,u);p=p.add(g.key.path.popLast()),f.push(a.put(h)),f.push(i.put(b,U_))}return p.forEach(g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.er[u]=c.keys()}),w.waitFor(f).next(()=>c)})}lookupMutationBatch(e,t){return vt(e).get(t).next(n=>n?(L(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),rn(this.serializer,n)):null)}tr(e,t){return this.er[t]?w.resolve(this.er[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.er[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return vt(e).te({index:un,range:s},(a,u,c)=>{u.userId===this.userId&&(L(u.batchId>=n,47524,{nr:n}),i=rn(this.serializer,u)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Ct;return vt(e).te({index:un,range:t,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Ct],[this.userId,Number.POSITIVE_INFINITY]);return vt(e).J(un,t).next(n=>n.map(s=>rn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=li(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return qn(e).te({range:s},(a,u,c)=>{const[h,f,p]=a,g=Ye(f);if(h===this.userId&&t.path.isEqual(g))return vt(e).get(p).next(b=>{if(!b)throw F(61480,{rr:a,batchId:p});L(b.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:b.userId,batchId:p}),i.push(rn(this.serializer,b))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ee($);const s=[];return t.forEach(i=>{const a=li(this.userId,i.path),u=IDBKeyRange.lowerBound(a),c=qn(e).te({range:u},(h,f,p)=>{const[g,b,V]=h,N=Ye(b);g===this.userId&&i.path.isEqual(N)?n=n.add(V):p.done()});s.push(c)}),w.waitFor(s).next(()=>this.ir(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=li(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new ee($);return qn(e).te({range:a},(c,h,f)=>{const[p,g,b]=c,V=Ye(g);p===this.userId&&n.isPrefixOf(V)?V.length===s&&(u=u.add(b)):f.done()}).next(()=>this.ir(e,u))}ir(e,t){const n=[],s=[];return t.forEach(i=>{s.push(vt(e).get(i).next(a=>{if(a===null)throw F(35274,{batchId:i});L(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push(rn(this.serializer,a))}))}),w.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return kf(e.he,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.sr(t.batchId)}),w.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}sr(e){delete this.er[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return w.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return qn(e).te({range:n},(i,a,u)=>{if(i[0]===this.userId){const c=Ye(i[1]);s.push(c)}else u.done()}).next(()=>{L(s.length===0,56720,{_r:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return Of(e,this.userId,t)}ar(e){return Mf(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Ct,lastStreamToken:""})}}function Of(r,e,t){const n=li(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return qn(r).te({range:i,ee:!0},(u,c,h)=>{const[f,p,g]=u;f===e&&p===s&&(a=!0),h.done()}).next(()=>a)}function vt(r){return ye(r,We)}function qn(r){return ye(r,Jn)}function Mf(r){return ye(r,as)}/**
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
 */class In{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new In(0)}static lr(){return new In(-1)}}/**
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
 */class aI{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.hr(e).next(t=>{const n=new In(t.highestTargetId);return t.highestTargetId=n.next(),this.Pr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.hr(e).next(t=>B.fromTimestamp(new ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.hr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.hr(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Pr(e,s)))}addTargetData(e,t){return this.Tr(e,t).next(()=>this.hr(e).next(n=>(n.targetCount+=1,this.Ir(t,n),this.Pr(e,n))))}updateTargetData(e,t){return this.Tr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Mn(e).delete(t.targetId)).next(()=>this.hr(e)).next(n=>(L(n.targetCount>0,8065),n.targetCount-=1,this.Pr(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return Mn(e).te((a,u)=>{const c=Kr(u);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>w.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Mn(e).te((n,s)=>{const i=Kr(s);t(i)})}hr(e){return nh(e).get(Ri).next(t=>(L(t!==null,2888),t))}Pr(e,t){return nh(e).put(Ri,t)}Tr(e,t){return Mn(e).put(Cf(this.serializer,t))}Ir(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.hr(e).next(t=>t.targetCount)}getTargetData(e,t){const n=mn(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Mn(e).te({range:s,index:Rd},(a,u,c)=>{const h=Kr(u);As(t,h.target)&&(i=h,c.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=bt(e);return t.forEach(a=>{const u=De(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(e,n,a))}),w.waitFor(s)}removeMatchingKeys(e,t,n){const s=bt(e);return w.forEach(t,i=>{const a=De(i.path);return w.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=bt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=bt(e);let i=j();return s.te({range:n,ee:!0},(a,u,c)=>{const h=Ye(a[1]),f=new O(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=De(t.path),s=IDBKeyRange.bound([n],[_d(n)],!1,!0);let i=0;return bt(e).te({index:za,ee:!0,range:s},([a,u],c,h)=>{a!==0&&(i++,h.done())}).next(()=>i>0)}Rt(e,t){return Mn(e).get(t).next(n=>n?Kr(n):null)}}function Mn(r){return ye(r,Yn)}function nh(r){return ye(r,hn)}function bt(r){return ye(r,Xn)}/**
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
 */const rh="LruGarbageCollector",uI=1048576;function sh([r,e],[t,n]){const s=$(r,t);return s===0?$(e,n):s}class cI{constructor(e){this.Er=e,this.buffer=new ee(sh),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();sh(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ff{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){D(rh,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jt(t)?D(rh,"Ignoring IndexedDB error during garbage collection: ",t):await zt(t)}await this.mr(3e5)})}}class lI{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return w.resolve(Be.le);const n=new cI(t);return this.gr.forEachTarget(e,s=>n.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>n.Rr(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.gr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(th)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),th):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let n,s,i,a,u,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,u=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),Fn()<=Q.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Lf(r,e){return new lI(r,e)}/**
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
 */class hI{constructor(e,t){this.db=e,this.garbageCollector=Lf(this,t)}pr(e){const t=this.Sr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Sr(e){let t=0;return this.yr(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}yr(e,t){return this.br(e,(n,s)=>t(s))}addReference(e,t,n){return ii(e,n)}removeReference(e,t,n){return ii(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ii(e,t)}Dr(e,t){return function(s,i){let a=!1;return Mf(s).ne(u=>Of(s,u,i).next(c=>(c&&(a=!0),w.resolve(!c)))).next(()=>a)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.br(e,(a,u)=>{if(u<=t){const c=this.Dr(e,a).next(h=>{if(!h)return i++,n.getEntry(e,a).next(()=>(n.removeEntry(a,B.min()),bt(e).delete(function(p){return[0,De(p.path)]}(a))))});s.push(c)}}).next(()=>w.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ii(e,t)}br(e,t){const n=bt(e);let s,i=Be.le;return n.te({index:za},([a,u],{path:c,sequenceNumber:h})=>{a===0?(i!==Be.le&&t(new O(Ye(s)),i),i=h,s=c):i=Be.le}).next(()=>{i!==Be.le&&t(new O(Ye(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ii(r,e){return bt(r).put(function(n,s){return{targetId:0,path:De(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
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
 */class Bf{constructor(){this.changes=new mt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?w.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class dI{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Xt(e).put(n)}removeEntry(e,t,n){return Xt(e).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Ci(a),u[u.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.vr(e,n)))}getEntry(e,t){let n=ie.newInvalidDocument(t);return Xt(e).te({index:hi,range:IDBKeyRange.only(qr(t))},(s,i)=>{n=this.Cr(t,i)}).next(()=>n)}Fr(e,t){let n={size:0,document:ie.newInvalidDocument(t)};return Xt(e).te({index:hi,range:IDBKeyRange.only(qr(t))},(s,i)=>{n={document:this.Cr(t,i),size:xi(i)}}).next(()=>n)}getEntries(e,t){let n=qe();return this.Mr(e,t,(s,i)=>{const a=this.Cr(s,i);n=n.insert(s,a)}).next(()=>n)}Or(e,t){let n=qe(),s=new re(O.comparator);return this.Mr(e,t,(i,a)=>{const u=this.Cr(i,a);n=n.insert(i,u),s=s.insert(i,xi(a))}).next(()=>({documents:n,Nr:s}))}Mr(e,t,n){if(t.isEmpty())return w.resolve();let s=new ee(ah);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(qr(s.first()),qr(s.last())),a=s.getIterator();let u=a.getNext();return Xt(e).te({index:hi,range:i},(c,h,f)=>{const p=O.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;u&&ah(u,p)<0;)n(u,null),u=a.getNext();u&&u.isEqual(p)&&(n(u,h),u=a.hasNext()?a.getNext():null),u?f.H(qr(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const a=t.path,u=[a.popLast().toArray(),a.lastSegment(),Ci(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Xt(e).J(IDBKeyRange.bound(u,c,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=qe();for(const p of h){const g=this.Cr(O.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(Rs(t,g)||s.has(g.key))&&(f=f.insert(g.key,g))}return f})}getAllFromCollectionGroup(e,t,n,s){let i=qe();const a=oh(t,n),u=oh(t,je.max());return Xt(e).te({index:bd,range:IDBKeyRange.bound(a,u,!0)},(c,h,f)=>{const p=this.Cr(O.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new fI(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return ih(e).get(sa).next(t=>(L(!!t,20021),t))}vr(e,t){return ih(e).put(sa,t)}Cr(e,t){if(t){const n=Yy(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(B.min())))return n}return ie.newInvalidDocument(e)}}function Uf(r){return new dI(r)}class fI extends Bf{constructor(e,t){super(),this.Br=e,this.trackRemovals=t,this.Lr=new mt(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new ee((i,a)=>$(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.Lr.get(i);if(t.push(this.Br.removeEntry(e,i,u.readTime)),a.isValidDocument()){const c=$l(this.Br.serializer,a);s=s.add(i.path.popLast());const h=xi(c);n+=h-u.size,t.push(this.Br.addEntry(e,i,c))}else if(n-=u.size,this.trackRemovals){const c=$l(this.Br.serializer,a.convertToNoDocument(B.min()));t.push(this.Br.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.Br.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Br.updateMetadata(e,n)),w.waitFor(t)}getFromCache(e,t){return this.Br.Fr(e,t).next(n=>(this.Lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.Br.Or(e,t).next(({documents:n,Nr:s})=>(s.forEach((i,a)=>{this.Lr.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function ih(r){return ye(r,us)}function Xt(r){return ye(r,bi)}function qr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function oh(r,e){const t=e.documentKey.path.toArray();return[r,Ci(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function ah(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=$(t[i],n[i]),s)return s;return s=$(t.length,n.length),s||(s=$(t[t.length-2],n[n.length-2]),s||$(t[t.length-1],n[n.length-1]))}/**
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
 */class mI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class qf{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&es(n.mutation,s,Ue.empty(),ce.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,j()).next(()=>n))}getLocalViewOfDocuments(e,t,n=j()){const s=Xe();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let a=jr();return i.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=Xe();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,j()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,n,s){let i=qe();const a=Zr(),u=function(){return Zr()}();return t.forEach((c,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof pt)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),es(f.mutation,h,f.mutation.getFieldMask(),ce.now())):a.set(h.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var p;return u.set(h,new mI(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),u))}recalculateAndSaveOverlays(e,t){const n=Zr();let s=new re((a,u)=>a-u),i=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=n.get(c)||Ue.empty();f=u.applyToLocalView(h,f),n.set(c,f);const p=(s.get(u.batchId)||j()).add(c);s=s.insert(u.batchId,p)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),h=c.key,f=c.value,p=rf();f.forEach(g=>{if(!i.has(g)){const b=hf(t.get(g),n.get(g));b!==null&&p.set(g,b),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return w.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ja(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):w.resolve(Xe());let u=Hn,c=i;return a.next(h=>w.forEach(h,(f,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),i.get(f)?w.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,j())).next(f=>({batchId:u,changes:nf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(n=>{let s=jr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let a=jr();return this.indexManager.getCollectionParents(e,i).next(u=>w.forEach(u,c=>{const h=function(p,g){return new ft(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ie.newInvalidDocument(f)))});let u=jr();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&es(f.mutation,h,Ue.empty(),ce.now()),Rs(t,h)&&(u=u.insert(c,h))}),u})}}/**
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
 */class pI{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return w.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:me(s.createTime)}}(t)),w.resolve()}getNamedQuery(e,t){return w.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(s){return{name:s.name,query:iu(s.bundledQuery),readTime:me(s.readTime)}}(t)),w.resolve()}}/**
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
 */class gI{constructor(){this.overlays=new re(O.comparator),this.Qr=new Map}getOverlay(e,t){return w.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Xe();return w.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.bt(e,t,i)}),w.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Qr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(n)),w.resolve()}getOverlaysForCollection(e,t,n){const s=Xe(),i=t.length+1,a=new O(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return w.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new re((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=Xe(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const u=Xe(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>u.set(h,f)),!(u.size()>=s)););return w.resolve(u)}bt(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(n.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new nu(t,n));let i=this.Qr.get(t);i===void 0&&(i=j(),this.Qr.set(t,i)),this.Qr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class _I{constructor(){this.sessionToken=de.EMPTY_BYTE_STRING}getSessionToken(e){return w.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,w.resolve()}}/**
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
 */class uu{constructor(){this.$r=new ee(Ie.Ur),this.Kr=new ee(Ie.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const n=new Ie(e,t);this.$r=this.$r.add(n),this.Kr=this.Kr.add(n)}Gr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.zr(new Ie(e,t))}jr(e,t){e.forEach(n=>this.removeReference(n,t))}Hr(e){const t=new O(new G([])),n=new Ie(t,e),s=new Ie(t,e+1),i=[];return this.Kr.forEachInRange([n,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new O(new G([])),n=new Ie(t,e),s=new Ie(t,e+1);let i=j();return this.Kr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ie(e,0),n=this.$r.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ie{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return O.comparator(e.key,t.key)||$(e.Zr,t.Zr)}static Wr(e,t){return $(e.Zr,t.Zr)||O.comparator(e.key,t.key)}}/**
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
 */class yI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new ee(Ie.Ur)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new eu(i,t,n,s);this.mutationQueue.push(a);for(const u of s)this.Xr=this.Xr.add(new Ie(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(e,t){return w.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.ti(n),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?Ct:this.nr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ie(t,0),s=new Ie(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([n,s],a=>{const u=this.ei(a.Zr);i.push(u)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ee($);return t.forEach(s=>{const i=new Ie(s,0),a=new Ie(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],u=>{n=n.add(u.Zr)})}),w.resolve(this.ni(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;O.isDocumentKey(i)||(i=i.child(""));const a=new Ie(new O(i),0);let u=new ee($);return this.Xr.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(u=u.add(c.Zr)),!0)},a),w.resolve(this.ni(u))}ni(e){const t=[];return e.forEach(n=>{const s=this.ei(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){L(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Xr;return w.forEach(t.mutations,s=>{const i=new Ie(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=n})}sr(e){}containsKey(e,t){const n=new Ie(t,0),s=this.Xr.firstAfterOrEqual(n);return w.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class II{constructor(e){this.ii=e,this.docs=function(){return new re(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,a=this.ii(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return w.resolve(n?n.document.mutableCopy():ie.newInvalidDocument(t))}getEntries(e,t){let n=qe();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ie.newInvalidDocument(s))}),w.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=qe();const a=t.path,u=new O(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||qa(Id(f),n)<=0||(s.has(f.key)||Rs(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,t,n,s){F(9500)}si(e,t){return w.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new EI(this)}getSize(e){return w.resolve(this.size)}}class EI extends Bf{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.Br.addEntry(e,s)):this.Br.removeEntry(n)}),w.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class TI{constructor(e){this.persistence=e,this.oi=new mt(t=>mn(t),As),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this._i=0,this.ai=new uu,this.targetCount=0,this.ui=In.cr()}forEachTarget(e,t){return this.oi.forEach((n,s)=>t(s)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this._i&&(this._i=t),w.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new In(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,w.resolve()}updateTargetData(e,t){return this.Tr(t),w.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.oi.forEach((a,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),w.waitFor(i).next(()=>s)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,t){const n=this.oi.get(t)||null;return w.resolve(n)}addMatchingKeys(e,t,n){return this.ai.Gr(t,n),w.resolve()}removeMatchingKeys(e,t,n){this.ai.jr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),w.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),w.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ai.Yr(t);return w.resolve(n)}containsKey(e,t){return w.resolve(this.ai.containsKey(t))}}/**
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
 */class cu{constructor(e,t){this.ci={},this.overlays={},this.li=new Be(0),this.hi=!1,this.hi=!0,this.Pi=new _I,this.referenceDelegate=e(this),this.Ti=new TI(this),this.indexManager=new iI,this.remoteDocumentCache=function(s){return new II(s)}(n=>this.referenceDelegate.Ii(n)),this.serializer=new Vf(t),this.Ei=new pI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ci[e.toKey()];return n||(n=new yI(t,this.referenceDelegate),this.ci[e.toKey()]=n),n}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,n){D("MemoryPersistence","Starting transaction:",e);const s=new vI(this.li.next());return this.referenceDelegate.di(),n(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,t){return w.or(Object.values(this.ci).map(n=>()=>n.containsKey(e,t)))}}class vI extends Td{constructor(e){super(),this.currentSequenceNumber=e}}class Xi{constructor(e){this.persistence=e,this.Vi=new uu,this.mi=null}static fi(e){return new Xi(e)}get gi(){if(this.mi)return this.mi;throw F(60996)}addReference(e,t,n){return this.Vi.addReference(n,t),this.gi.delete(n.toString()),w.resolve()}removeReference(e,t,n){return this.Vi.removeReference(n,t),this.gi.add(n.toString()),w.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),w.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(s=>this.gi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.gi,n=>{const s=O.fromPath(n);return this.pi(e,s).next(i=>{i||t.removeEntry(s,B.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(n=>{n?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return w.or([()=>w.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Ni{constructor(e,t){this.persistence=e,this.yi=new mt(n=>De(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Lf(this,t)}static fi(e,t){return new Ni(e,t)}di(){}Ai(e){return w.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Sr(e){let t=0;return this.yr(e,n=>{t++}).next(()=>t)}yr(e,t){return w.forEach(this.yi,(n,s)=>this.Dr(e,n,s).next(i=>i?w.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,a=>this.Dr(e,a,t).next(u=>{u||(n++,i.removeEntry(a,B.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),w.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.yi.set(n,e.currentSequenceNumber),w.resolve()}removeReference(e,t,n){return this.yi.set(n,e.currentSequenceNumber),w.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),w.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fi(e.data.value)),t}Dr(e,t,n){return w.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.yi.get(t);return w.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class wI{constructor(e){this.serializer=e}q(e,t,n,s){const i=new qi("createOrUpgrade",t);n<1&&s>=1&&(function(c){c.createObjectStore(ws)}(e),function(c){c.createObjectStore(as,{keyPath:B_}),c.createObjectStore(We,{keyPath:yl,autoIncrement:!0}).createIndex(un,Il,{unique:!0}),c.createObjectStore(Jn)}(e),uh(e),function(c){c.createObjectStore(tn)}(e));let a=w.resolve();return n<3&&s>=3&&(n!==0&&(function(c){c.deleteObjectStore(Xn),c.deleteObjectStore(Yn),c.deleteObjectStore(hn)}(e),uh(e)),a=a.next(()=>function(c){const h=c.store(hn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return h.put(Ri,f)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(c,h){return h.store(We).J().next(p=>{c.deleteObjectStore(We),c.createObjectStore(We,{keyPath:yl,autoIncrement:!0}).createIndex(un,Il,{unique:!0});const g=h.store(We),b=p.map(V=>g.put(V));return w.waitFor(b)})}(e,i))),a=a.next(()=>{(function(c){c.createObjectStore(Zn,{keyPath:W_})})(e)})),n<5&&s>=5&&(a=a.next(()=>this.wi(i))),n<6&&s>=6&&(a=a.next(()=>(function(c){c.createObjectStore(us)}(e),this.Si(i)))),n<7&&s>=7&&(a=a.next(()=>this.bi(i))),n<8&&s>=8&&(a=a.next(()=>this.Di(e,i))),n<9&&s>=9&&(a=a.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(a=a.next(()=>this.Ci(i))),n<11&&s>=11&&(a=a.next(()=>{(function(c){c.createObjectStore($i,{keyPath:H_})})(e),function(c){c.createObjectStore(zi,{keyPath:J_})}(e)})),n<12&&s>=12&&(a=a.next(()=>{(function(c){const h=c.createObjectStore(ji,{keyPath:ry});h.createIndex(oa,sy,{unique:!1}),h.createIndex(Vd,iy,{unique:!1})})(e)})),n<13&&s>=13&&(a=a.next(()=>function(c){const h=c.createObjectStore(bi,{keyPath:q_});h.createIndex(hi,$_),h.createIndex(bd,z_)}(e)).next(()=>this.Fi(e,i)).next(()=>e.deleteObjectStore(tn))),n<14&&s>=14&&(a=a.next(()=>this.Mi(e,i))),n<15&&s>=15&&(a=a.next(()=>function(c){c.createObjectStore(ja,{keyPath:Y_,autoIncrement:!0}).createIndex(ia,X_,{unique:!1}),c.createObjectStore(Jr,{keyPath:Z_}).createIndex(Sd,ey,{unique:!1}),c.createObjectStore(Yr,{keyPath:ty}).createIndex(Pd,ny,{unique:!1})}(e))),n<16&&s>=16&&(a=a.next(()=>{t.objectStore(Jr).clear()}).next(()=>{t.objectStore(Yr).clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(c){c.createObjectStore(Ga,{keyPath:oy})})(e)})),n<18&&s>=18&&Gh()&&(a=a.next(()=>{t.objectStore(Jr).clear()}).next(()=>{t.objectStore(Yr).clear()})),a}Si(e){let t=0;return e.store(tn).te((n,s)=>{t+=xi(s)}).next(()=>{const n={byteSize:t};return e.store(us).put(sa,n)})}wi(e){const t=e.store(as),n=e.store(We);return t.J().next(s=>w.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,Ct],[i.userId,i.lastAcknowledgedBatchId]);return n.J(un,a).next(u=>w.forEach(u,c=>{L(c.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const h=rn(this.serializer,c);return kf(e,i.userId,h).next(()=>{})}))}))}bi(e){const t=e.store(Xn),n=e.store(tn);return e.store(hn).get(Ri).next(s=>{const i=[];return n.te((a,u)=>{const c=new G(a),h=function(p){return[0,De(p)]}(c);i.push(t.get(h).next(f=>f?w.resolve():(p=>t.put({targetId:0,path:De(p),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>w.waitFor(i))})}Di(e,t){e.createObjectStore(cs,{keyPath:Q_});const n=t.store(cs),s=new au,i=a=>{if(s.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:De(c)})}};return t.store(tn).te({ee:!0},(a,u)=>{const c=new G(a);return i(c.popLast())}).next(()=>t.store(Jn).te({ee:!0},([a,u,c],h)=>{const f=Ye(u);return i(f.popLast())}))}Ci(e){const t=e.store(Yn);return t.te((n,s)=>{const i=Kr(s),a=Cf(this.serializer,i);return t.put(a)})}Fi(e,t){const n=t.store(tn),s=[];return n.te((i,a)=>{const u=t.store(bi),c=function(p){return p.document?new O(G.fromString(p.document.name).popFirst(5)):p.noDocument?O.fromSegments(p.noDocument.path):p.unknownDocument?O.fromSegments(p.unknownDocument.path):F(36783)}(a).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(h))}).next(()=>w.waitFor(s))}Mi(e,t){const n=t.store(We),s=Uf(this.serializer),i=new cu(Xi.fi,this.serializer.wt);return n.J().next(a=>{const u=new Map;return a.forEach(c=>{var h;let f=(h=u.get(c.userId))!==null&&h!==void 0?h:j();rn(this.serializer,c).keys().forEach(p=>f=f.add(p)),u.set(c.userId,f)}),w.forEach(u,(c,h)=>{const f=new Ee(h),p=Ji.St(this.serializer,f),g=i.getIndexManager(f),b=Yi.St(f,this.serializer,g,i.referenceDelegate);return new qf(s,b,p,g).recalculateAndSaveOverlaysForDocumentKeys(new aa(t,Be.le),c).next()})})}}function uh(r){r.createObjectStore(Xn,{keyPath:G_}).createIndex(za,K_,{unique:!0}),r.createObjectStore(Yn,{keyPath:"targetId"}).createIndex(Rd,j_,{unique:!0}),r.createObjectStore(hn)}const wt="IndexedDbPersistence",Go=18e5,Ko=5e3,Qo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",$f="main";class lu{constructor(e,t,n,s,i,a,u,c,h,f,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.xi=i,this.window=a,this.document=u,this.Oi=h,this.Ni=f,this.Bi=p,this.li=null,this.hi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Li=null,this.inForeground=!1,this.ki=null,this.qi=null,this.Qi=Number.NEGATIVE_INFINITY,this.$i=g=>Promise.resolve(),!lu.C())throw new C(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new hI(this,s),this.Ui=t+$f,this.serializer=new Vf(c),this.Ki=new et(this.Ui,this.Bi,new wI(this.serializer)),this.Pi=new Zy,this.Ti=new aI(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Uf(this.serializer),this.Ei=new Xy,this.window&&this.window.localStorage?this.Wi=this.window.localStorage:(this.Wi=null,f===!1&&fe(wt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(S.FAILED_PRECONDITION,Qo);return this.zi(),this.ji(),this.Hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ti.getHighestSequenceNumber(e))}).then(e=>{this.li=new Be(e,this.Oi)}).then(()=>{this.hi=!0}).catch(e=>(this.Ki&&this.Ki.close(),Promise.reject(e)))}Ji(e){return this.$i=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.xi.enqueueAndForget(async()=>{this.started&&await this.Gi()}))}Gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>oi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Yi(e).next(t=>{t||(this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)))})}).next(()=>this.Zi(e)).next(t=>this.isPrimary&&!t?this.Xi(e).next(()=>!1):!!t&&this.es(e).next(()=>!0))).catch(e=>{if(jt(e))return D(wt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D(wt,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.xi.enqueueRetryable(()=>this.$i(e)),this.isPrimary=e})}Yi(e){return $r(e).get(Dn).next(t=>w.resolve(this.ts(t)))}ns(e){return oi(e).delete(this.clientId)}async rs(){if(this.isPrimary&&!this.ss(this.Qi,Go)){this.Qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=ye(t,Zn);return n.J().next(s=>{const i=this._s(s,Go),a=s.filter(u=>i.indexOf(u)===-1);return w.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Wi)for(const t of e)this.Wi.removeItem(this.us(t.clientId))}}Hi(){this.qi=this.xi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Gi().then(()=>this.rs()).then(()=>this.Hi()))}ts(e){return!!e&&e.ownerId===this.clientId}Zi(e){return this.Ni?w.resolve(!0):$r(e).get(Dn).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,Ko)&&!this.cs(t.ownerId)){if(this.ts(t)&&this.networkEnabled)return!0;if(!this.ts(t)){if(!t.allowTabSynchronization)throw new C(S.FAILED_PRECONDITION,Qo);return!1}}return!(!this.networkEnabled||!this.inForeground)||oi(e).J().next(n=>this._s(n,Ko).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&D(wt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.hi=!1,this.ls(),this.qi&&(this.qi.cancel(),this.qi=null),this.hs(),this.Ps(),await this.Ki.runTransaction("shutdown","readwrite",[ws,Zn],e=>{const t=new aa(e,Be.le);return this.Xi(t).next(()=>this.ns(t))}),this.Ki.close(),this.Ts()}_s(e,t){return e.filter(n=>this.ss(n.updateTimeMs,t)&&!this.cs(n.clientId))}Is(){return this.runTransaction("getActiveClients","readonly",e=>oi(e).J().next(t=>this._s(t,Go).map(n=>n.clientId)))}get started(){return this.hi}getGlobalsCache(){return this.Pi}getMutationQueue(e,t){return Yi.St(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new oI(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return Ji.St(this.serializer,e)}getBundleCache(){return this.Ei}runTransaction(e,t,n){D(wt,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(c){return c===18?cy:c===17?Nd:c===16?uy:c===15?Ka:c===14?xd:c===13?Dd:c===12?ay:c===11?Cd:void F(60245)}(this.Bi);let a;return this.Ki.runTransaction(e,s,i,u=>(a=new aa(u,this.li?this.li.next():Be.le),t==="readwrite-primary"?this.Yi(a).next(c=>!!c||this.Zi(a)).next(c=>{if(!c)throw fe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)),new C(S.FAILED_PRECONDITION,Ed);return n(a)}).next(c=>this.es(a).next(()=>c)):this.Es(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Es(e){return $r(e).get(Dn).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,Ko)&&!this.cs(t.ownerId)&&!this.ts(t)&&!(this.Ni||this.allowTabSynchronization&&t.allowTabSynchronization))throw new C(S.FAILED_PRECONDITION,Qo)})}es(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return $r(e).put(Dn,t)}static C(){return et.C()}Xi(e){const t=$r(e);return t.get(Dn).next(n=>this.ts(n)?(D(wt,"Releasing primary lease."),t.delete(Dn)):w.resolve())}ss(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(fe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}zi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ki=()=>{this.xi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Gi()))},this.document.addEventListener("visibilitychange",this.ki),this.inForeground=this.document.visibilityState==="visible")}hs(){this.ki&&(this.document.removeEventListener("visibilitychange",this.ki),this.ki=null)}ji(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Li=()=>{this.ls();const t=/(?:Version|Mobile)\/1[456]/;jh()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.xi.enterRestrictedMode(!0),this.xi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Li))}Ps(){this.Li&&(this.window.removeEventListener("pagehide",this.Li),this.Li=null)}cs(e){var t;try{const n=((t=this.Wi)===null||t===void 0?void 0:t.getItem(this.us(e)))!==null;return D(wt,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return fe(wt,"Failed to get zombied client id.",n),!1}}ls(){if(this.Wi)try{this.Wi.setItem(this.us(this.clientId),String(Date.now()))}catch(e){fe("Failed to set zombie client id.",e)}}Ts(){if(this.Wi)try{this.Wi.removeItem(this.us(this.clientId))}catch{}}us(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function $r(r){return ye(r,ws)}function oi(r){return ye(r,Zn)}function hu(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class du{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.ds=n,this.As=s}static Rs(e,t){let n=j(),s=j();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new du(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class AI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zf{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return jh()?8:vd(Ti())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.ws(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Ss(e,t,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new AI;return this.bs(e,t,a).next(u=>{if(i.result=u,this.fs)return this.Ds(e,t,a,u.size)})}).next(()=>i.result)}Ds(e,t,n,s){return n.documentReadCount<this.gs?(Fn()<=Q.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Ln(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),w.resolve()):(Fn()<=Q.DEBUG&&D("QueryEngine","Query:",Ln(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ps*s?(Fn()<=Q.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Ln(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fe(t))):w.resolve())}ws(e,t){if(xl(t))return w.resolve(null);let n=Fe(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Vi(t,null,"F"),n=Fe(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const a=j(...i);return this.ys.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,n).next(c=>{const h=this.vs(t,u);return this.Cs(t,h,a,c.readTime)?this.ws(e,Vi(t,null,"F")):this.Fs(e,h,t,c)}))})))}Ss(e,t,n,s){return xl(t)||s.isEqual(B.min())?w.resolve(null):this.ys.getDocuments(e,n).next(i=>{const a=this.vs(t,i);return this.Cs(t,a,n,s)?w.resolve(null):(Fn()<=Q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ln(t)),this.Fs(e,a,t,yd(s,Hn)).next(u=>u))})}vs(e,t){let n=new ee(ef(e));return t.forEach((s,i)=>{Rs(e,i)&&(n=n.add(i))}),n}Cs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,t,n){return Fn()<=Q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ln(t)),this.ys.getDocumentsMatchingQuery(e,t,je.min(),n)}Fs(e,t,n,s){return this.ys.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const fu="LocalStore",bI=3e8;class RI{constructor(e,t,n,s){this.persistence=e,this.Ms=t,this.serializer=s,this.xs=new re($),this.Os=new mt(i=>mn(i),As),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(n)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qf(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function jf(r,e,t,n){return new RI(r,e,t,n)}async function Gf(r,e){const t=M(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.Ls(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let c=j();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){u.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next(h=>({ks:h,removedBatchIds:a,addedBatchIds:u}))})})}function SI(r,e){const t=M(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(u,c,h,f){const p=h.batch,g=p.keys();let b=w.resolve();return g.forEach(V=>{b=b.next(()=>f.getEntry(c,V)).next(N=>{const x=h.docVersions.get(V);L(x!==null,48541),N.version.compareTo(x)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),b.next(()=>u.mutationQueue.removeMutationBatch(c,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=j();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(c=c.add(u.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Kf(r){const e=M(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function PI(r,e){const t=M(r),n=e.snapshotVersion;let s=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});s=t.xs;const u=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;u.push(t.Ti.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ti.addMatchingKeys(i,f.addedDocuments,p)));let b=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(de.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,n)),s=s.insert(p,b),function(N,x,z){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=bI?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(g,b,f)&&u.push(t.Ti.updateTargetData(i,b))});let c=qe(),h=j();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),u.push(Qf(i,a,e.documentUpdates).next(f=>{c=f.qs,h=f.Qs})),!n.isEqual(B.min())){const f=t.Ti.getLastRemoteSnapshotVersion(i).next(p=>t.Ti.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(f)}return w.waitFor(u).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.xs=s,i))}function Qf(r,e,t){let n=j(),s=j();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let a=qe();return t.forEach((u,c)=>{const h=i.get(u);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(B.min())?(e.removeEntry(u,c.readTime),a=a.insert(u,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(u,c)):D(fu,"Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version)}),{qs:a,Qs:s}})}function VI(r,e){const t=M(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Ct),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function or(r,e){const t=M(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Ti.getTargetData(n,e).next(i=>i?(s=i,w.resolve(s)):t.Ti.allocateTargetId(n).next(a=>(s=new ut(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Ti.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.xs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.xs=t.xs.insert(n.targetId,n),t.Os.set(e,n.targetId)),n})}async function ar(r,e,t){const n=M(r),s=n.xs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!jt(a))throw a;D(fu,`Failed to update sequence numbers for target ${e}: ${a}`)}n.xs=n.xs.remove(e),n.Os.delete(s.target)}function ki(r,e,t){const n=M(r);let s=B.min(),i=j();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const p=M(c),g=p.Os.get(f);return g!==void 0?w.resolve(p.xs.get(g)):p.Ti.getTargetData(h,f)}(n,a,Fe(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Ti.getMatchingKeysForTargetId(a,u.targetId).next(c=>{i=c})}).next(()=>n.Ms.getDocumentsMatchingQuery(a,e,t?s:B.min(),t?i:j())).next(u=>(Jf(n,Zd(e),u),{documents:u,$s:i})))}function Wf(r,e){const t=M(r),n=M(t.Ti),s=t.xs.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.Rt(i,e).next(a=>a?a.target:null))}function Hf(r,e){const t=M(r),n=t.Ns.get(e)||B.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.Bs.getAllFromCollectionGroup(s,e,yd(n,Hn),Number.MAX_SAFE_INTEGER)).then(s=>(Jf(t,e,s),s))}function Jf(r,e,t){let n=r.Ns.get(e)||B.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Ns.set(e,n)}async function CI(r,e,t,n){const s=M(r);let i=j(),a=qe();for(const h of t){const f=e.Us(h.metadata.name);h.document&&(i=i.add(f));const p=e.Ks(h);p.setReadTime(e.Ws(h.metadata.readTime)),a=a.insert(f,p)}const u=s.Bs.newChangeBuffer({trackRemovals:!0}),c=await or(s,function(f){return Fe(mr(G.fromString(`__bundle__/docs/${f}`)))}(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",h=>Qf(h,u,a).next(f=>(u.apply(h),f)).next(f=>s.Ti.removeMatchingKeysForTargetId(h,c.targetId).next(()=>s.Ti.addMatchingKeys(h,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(h,f.qs,f.Qs)).next(()=>f.qs)))}async function DI(r,e,t=j()){const n=await or(r,Fe(iu(e.bundledQuery))),s=M(r);return s.persistence.runTransaction("Save named query","readwrite",i=>{const a=me(e.readTime);if(n.snapshotVersion.compareTo(a)>=0)return s.Ei.saveNamedQuery(i,e);const u=n.withResumeToken(de.EMPTY_BYTE_STRING,a);return s.xs=s.xs.insert(u.targetId,u),s.Ti.updateTargetData(i,u).next(()=>s.Ti.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>s.Ti.addMatchingKeys(i,t,n.targetId)).next(()=>s.Ei.saveNamedQuery(i,e))})}/**
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
 */const Yf="firestore_clients";function ch(r,e){return`${Yf}_${r}_${e}`}const Xf="firestore_mutations";function lh(r,e,t){let n=`${Xf}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const Zf="firestore_targets";function Wo(r,e){return`${Zf}_${r}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Je="SharedClientState";class Oi{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Gs(e,t,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new C(s.error.code,s.error.message))),a?new Oi(e,t,s.state,i):(fe(Je,`Failed to parse mutation state for ID '${t}': ${n}`),null)}zs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ts{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Gs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new C(n.error.code,n.error.message))),i?new ts(e,n.state,s):(fe(Je,`Failed to parse target state for ID '${e}': ${t}`),null)}zs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Mi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Gs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Ya();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=wd(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new Mi(e,i):(fe(Je,`Failed to parse client data for instance '${e}': ${t}`),null)}}class mu{constructor(e,t){this.clientId=e,this.onlineState=t}static Gs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new mu(t.clientId,t.onlineState):(fe(Je,`Failed to parse online state: ${e}`),null)}}class va{constructor(){this.activeTargetIds=Ya()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ho{constructor(e,t,n,s,i){this.window=e,this.xi=t,this.persistenceKey=n,this.Js=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ys=this.Zs.bind(this),this.Xs=new re($),this.started=!1,this.eo=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.no=ch(this.persistenceKey,this.Js),this.ro=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Xs=this.Xs.insert(this.Js,new va),this.io=new RegExp(`^${Yf}_${a}_([^_]*)$`),this.so=new RegExp(`^${Xf}_${a}_(\\d+)(?:_(.*))?$`),this.oo=new RegExp(`^${Zf}_${a}_(\\d+)$`),this._o=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.ao=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ys)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Is();for(const n of e){if(n===this.Js)continue;const s=this.getItem(ch(this.persistenceKey,n));if(s){const i=Mi.Gs(n,s);i&&(this.Xs=this.Xs.insert(i.clientId,i))}}this.uo();const t=this.storage.getItem(this._o);if(t){const n=this.co(t);n&&this.lo(n)}for(const n of this.eo)this.Zs(n);this.eo=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ro,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ho(this.Xs)}isActiveQueryTarget(e){let t=!1;return this.Xs.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Po(e,"pending")}updateMutationState(e,t,n){this.Po(e,t,n),this.To(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Wo(this.persistenceKey,e));if(s){const i=ts.Gs(e,s);i&&(n=i.state)}}return t&&this.Io.js(e),this.uo(),n}removeLocalQueryTarget(e){this.Io.Hs(e),this.uo()}isLocalQueryTarget(e){return this.Io.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Wo(this.persistenceKey,e))}updateQueryState(e,t,n){this.Eo(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.To(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Ao(e)}notifyBundleLoaded(e){this.Ro(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ys),this.removeItem(this.no),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return D(Je,"READ",e,t),t}setItem(e,t){D(Je,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){D(Je,"REMOVE",e),this.storage.removeItem(e)}Zs(e){const t=e;if(t.storageArea===this.storage){if(D(Je,"EVENT",t.key,t.newValue),t.key===this.no)return void fe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.xi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.io.test(t.key)){if(t.newValue==null){const n=this.Vo(t.key);return this.mo(n,null)}{const n=this.fo(t.key,t.newValue);if(n)return this.mo(n.clientId,n)}}else if(this.so.test(t.key)){if(t.newValue!==null){const n=this.po(t.key,t.newValue);if(n)return this.yo(n)}}else if(this.oo.test(t.key)){if(t.newValue!==null){const n=this.wo(t.key,t.newValue);if(n)return this.So(n)}}else if(t.key===this._o){if(t.newValue!==null){const n=this.co(t.newValue);if(n)return this.lo(n)}}else if(t.key===this.ro){const n=function(i){let a=Be.le;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number",30636,{bo:i}),a=u}catch(u){fe(Je,"Failed to read sequence number from WebStorage",u)}return a}(t.newValue);n!==Be.le&&this.sequenceNumberHandler(n)}else if(t.key===this.ao){const n=this.Do(t.newValue);await Promise.all(n.map(s=>this.syncEngine.vo(s)))}}}else this.eo.push(t)})}}get Io(){return this.Xs.get(this.Js)}uo(){this.setItem(this.no,this.Io.zs())}Po(e,t,n){const s=new Oi(this.currentUser,e,t,n),i=lh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.zs())}To(e){const t=lh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ao(e){const t={clientId:this.Js,onlineState:e};this.storage.setItem(this._o,JSON.stringify(t))}Eo(e,t,n){const s=Wo(this.persistenceKey,e),i=new ts(e,t,n);this.setItem(s,i.zs())}Ro(e){const t=JSON.stringify(Array.from(e));this.setItem(this.ao,t)}Vo(e){const t=this.io.exec(e);return t?t[1]:null}fo(e,t){const n=this.Vo(e);return Mi.Gs(n,t)}po(e,t){const n=this.so.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Oi.Gs(new Ee(i),s,t)}wo(e,t){const n=this.oo.exec(e),s=Number(n[1]);return ts.Gs(s,t)}co(e){return mu.Gs(e)}Do(e){return JSON.parse(e)}async yo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error);D(Je,`Ignoring mutation for non-active user ${e.user.uid}`)}So(e){return this.syncEngine.Fo(e.targetId,e.state,e.error)}mo(e,t){const n=t?this.Xs.insert(e,t):this.Xs.remove(e),s=this.ho(this.Xs),i=this.ho(n),a=[],u=[];return i.forEach(c=>{s.has(c)||a.push(c)}),s.forEach(c=>{i.has(c)||u.push(c)}),this.syncEngine.Mo(a,u).then(()=>{this.Xs=n})}lo(e){this.Xs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ho(e){let t=Ya();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class em{constructor(){this.xo=new va,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,n){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new va,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xI{No(e){}shutdown(){}}/**
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
 */const hh="ConnectivityMonitor";class dh{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){D(hh,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){D(hh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let ai=null;function wa(){return ai===null?ai=function(){return 268435456+Math.round(2147483648*Math.random())}():ai++,"0x"+ai.toString(16)}/**
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
 */const Jo="RestConnection",NI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kI{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${n}/databases/${s}`,this.Go=this.databaseId.database===ua?`project_id=${n}`:`project_id=${n}&database_id=${s}`}zo(e,t,n,s,i){const a=wa(),u=this.jo(e,t.toUriEncodedString());D(Jo,`Sending RPC '${e}' ${a}:`,u,n);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:h}=new URL(u),f=xa(h);return this.Jo(e,u,c,n,f).then(p=>(D(Jo,`Received RPC '${e}' ${a}: `,p),p),p=>{throw nt(Jo,`RPC '${e}' ${a} failed with error: `,p,"url: ",u,"request:",n),p})}Yo(e,t,n,s,i,a){return this.zo(e,t,n,s,i)}Ho(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s)}jo(e,t){const n=NI[e];return`${this.Ko}/v1/${t}:${n}`}terminate(){}}/**
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
 */class OI{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Ve="WebChannelConnection";class MI extends kI{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,s,i){const a=wa();return new Promise((u,c)=>{const h=new cd;h.setWithCredentials(!0),h.listenOnce(ld.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ui.NO_ERROR:const p=h.getResponseJson();D(Ve,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),u(p);break;case ui.TIMEOUT:D(Ve,`RPC '${e}' ${a} timed out`),c(new C(S.DEADLINE_EXCEEDED,"Request time out"));break;case ui.HTTP_ERROR:const g=h.getStatus();if(D(Ve,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const N=function(z){const q=z.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(q)>=0?q:S.UNKNOWN}(V.status);c(new C(N,V.message))}else c(new C(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new C(S.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{D(Ve,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);D(Ve,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,n,15)})}T_(e,t,n){const s=wa(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=fd(),u=dd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const f=i.join("");D(Ve,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);let g=!1,b=!1;const V=new OI({Zo:x=>{b?D(Ve,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(g||(D(Ve,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),D(Ve,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},Xo:()=>p.close()}),N=(x,z,q)=>{x.listen(z,U=>{try{q(U)}catch(H){setTimeout(()=>{throw H},0)}})};return N(p,zr.EventType.OPEN,()=>{b||(D(Ve,`RPC '${e}' stream ${s} transport opened.`),V.__())}),N(p,zr.EventType.CLOSE,()=>{b||(b=!0,D(Ve,`RPC '${e}' stream ${s} transport closed`),V.u_())}),N(p,zr.EventType.ERROR,x=>{b||(b=!0,nt(Ve,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),V.u_(new C(S.UNAVAILABLE,"The operation could not be completed")))}),N(p,zr.EventType.MESSAGE,x=>{var z;if(!b){const q=x.data[0];L(!!q,16349);const U=q,H=(U==null?void 0:U.error)||((z=U[0])===null||z===void 0?void 0:z.error);if(H){D(Ve,`RPC '${e}' stream ${s} received error:`,H);const ne=H.status;let J=function(I){const T=ge[I];if(T!==void 0)return mf(T)}(ne),E=H.message;J===void 0&&(J=S.INTERNAL,E="Unknown error status: "+ne+" with message "+H.message),b=!0,V.u_(new C(J,E)),p.close()}else D(Ve,`RPC '${e}' stream ${s} received:`,q),V.c_(q)}}),N(u,hd.STAT_EVENT,x=>{x.stat===ta.PROXY?D(Ve,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===ta.NOPROXY&&D(Ve,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.a_()},0),V}}/**
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
 *//**
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
 */function tm(){return typeof window<"u"?window:null}function yi(){return typeof document<"u"?document:null}/**
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
 */function Cs(r){return new qy(r,!0)}/**
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
 */class pu{constructor(e,t,n=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=t,this.I_=n,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),n=Math.max(0,Date.now()-this.V_),s=Math.max(0,t-n);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const fh="PersistentStream";class nm{constructor(e,t,n,s,i,a,u,c){this.xi=e,this.y_=n,this.w_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new pu(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(fe(t.toString()),fe("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.S_===t&&this.K_(n,s)},n=>{e(()=>{const s=new C(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.W_(s)})})}K_(e,t){const n=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{n(()=>this.listener.e_())}),this.stream.n_(()=>{n(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{n(()=>this.W_(s))}),this.stream.onMessage(s=>{n(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return D(fh,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(D(fh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FI extends nm{constructor(e,t,n,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=jy(this.serializer,e),n=function(i){if(!("targetChange"in i))return B.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?me(a.readTime):B.min()}(e);return this.listener.j_(t,n)}H_(e){const t={};t.database=_a(this.serializer),t.addTarget=function(i,a){let u;const c=a.target;if(u=Si(c)?{documents:wf(i,c)}:{query:Af(i,c).gt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=_f(i,a.resumeToken);const h=pa(i,a.expectedCount);h!==null&&(u.expectedCount=h)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=ir(i,a.snapshotVersion.toTimestamp());const h=pa(i,a.expectedCount);h!==null&&(u.expectedCount=h)}return u}(this.serializer,e);const n=Ky(this.serializer,e);n&&(t.labels=n),this.L_(t)}J_(e){const t={};t.database=_a(this.serializer),t.removeTarget=e,this.L_(t)}}class LI extends nm{constructor(e,t,n,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return L(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,L(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){L(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=Gy(e.writeResults,e.commitTime),n=me(e.commitTime);return this.listener.ea(n,t)}ta(){const e={};e.database=_a(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>ps(this.serializer,n))};this.L_(t)}}/**
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
 */class BI{}class UI extends BI{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.na=!1}ra(){if(this.na)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,n,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(e,ga(t,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(S.UNKNOWN,i.toString())})}Yo(e,t,n,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Yo(e,ga(t,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new C(S.UNKNOWN,a.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class qI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(fe(t),this.oa=!1):D("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const En="RemoteStore";class $I{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(a=>{n.enqueueAndForget(async()=>{Kt(this)&&(D(En,"Restarting streams for network reachability change."),await async function(c){const h=M(c);h.Ta.add(4),await _r(h),h.da.set("Unknown"),h.Ta.delete(4),await Ds(h)}(this))})}),this.da=new qI(n,s)}}async function Ds(r){if(Kt(r))for(const e of r.Ia)await e(!0)}async function _r(r){for(const e of r.Ia)await e(!1)}function Zi(r,e){const t=M(r);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),yu(t)?_u(t):Ir(t).M_()&&gu(t,e))}function ur(r,e){const t=M(r),n=Ir(t);t.Pa.delete(e),n.M_()&&rm(t,e),t.Pa.size===0&&(n.M_()?n.N_():Kt(t)&&t.da.set("Unknown"))}function gu(r,e){if(r.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ir(r).H_(e)}function rm(r,e){r.Aa.Ke(e),Ir(r).J_(e)}function _u(r){r.Aa=new Fy({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>r.Pa.get(e)||null,Pt:()=>r.datastore.serializer.databaseId}),Ir(r).start(),r.da._a()}function yu(r){return Kt(r)&&!Ir(r).F_()&&r.Pa.size>0}function Kt(r){return M(r).Ta.size===0}function sm(r){r.Aa=void 0}async function zI(r){r.da.set("Online")}async function jI(r){r.Pa.forEach((e,t)=>{gu(r,e)})}async function GI(r,e){sm(r),yu(r)?(r.da.ca(e),_u(r)):r.da.set("Unknown")}async function KI(r,e,t){if(r.da.set("Online"),e instanceof gf&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.Pa.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Pa.delete(u),s.Aa.removeTarget(u))}(r,e)}catch(n){D(En,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Fi(r,n)}else if(e instanceof gi?r.Aa.Xe(e):e instanceof pf?r.Aa.ot(e):r.Aa.nt(e),!t.isEqual(B.min()))try{const n=await Kf(r.localStore);t.compareTo(n)>=0&&await function(i,a){const u=i.Aa.It(a);return u.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Pa.get(h);f&&i.Pa.set(h,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,h)=>{const f=i.Pa.get(c);if(!f)return;i.Pa.set(c,f.withResumeToken(de.EMPTY_BYTE_STRING,f.snapshotVersion)),rm(i,c);const p=new ut(f.target,c,h,f.sequenceNumber);gu(i,p)}),i.remoteSyncer.applyRemoteEvent(u)}(r,t)}catch(n){D(En,"Failed to raise snapshot:",n),await Fi(r,n)}}async function Fi(r,e,t){if(!jt(e))throw e;r.Ta.add(1),await _r(r),r.da.set("Offline"),t||(t=()=>Kf(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{D(En,"Retrying IndexedDB access"),await t(),r.Ta.delete(1),await Ds(r)})}function im(r,e){return e().catch(t=>Fi(r,t,e))}async function yr(r){const e=M(r),t=Bt(e);let n=e.ha.length>0?e.ha[e.ha.length-1].batchId:Ct;for(;QI(e);)try{const s=await VI(e.localStore,n);if(s===null){e.ha.length===0&&t.N_();break}n=s.batchId,WI(e,s)}catch(s){await Fi(e,s)}om(e)&&am(e)}function QI(r){return Kt(r)&&r.ha.length<10}function WI(r,e){r.ha.push(e);const t=Bt(r);t.M_()&&t.Y_&&t.Z_(e.mutations)}function om(r){return Kt(r)&&!Bt(r).F_()&&r.ha.length>0}function am(r){Bt(r).start()}async function HI(r){Bt(r).ta()}async function JI(r){const e=Bt(r);for(const t of r.ha)e.Z_(t.mutations)}async function YI(r,e,t){const n=r.ha.shift(),s=tu.from(n,e,t);await im(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await yr(r)}async function XI(r,e){e&&Bt(r).Y_&&await async function(n,s){if(function(a){return ff(a)&&a!==S.ABORTED}(s.code)){const i=n.ha.shift();Bt(n).O_(),await im(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yr(n)}}(r,e),om(r)&&am(r)}async function mh(r,e){const t=M(r);t.asyncQueue.verifyOperationInProgress(),D(En,"RemoteStore received new credentials");const n=Kt(t);t.Ta.add(3),await _r(t),n&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await Ds(t)}async function Aa(r,e){const t=M(r);e?(t.Ta.delete(2),await Ds(t)):e||(t.Ta.add(2),await _r(t),t.da.set("Unknown"))}function Ir(r){return r.Ra||(r.Ra=function(t,n,s){const i=M(t);return i.ra(),new FI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{e_:zI.bind(null,r),n_:jI.bind(null,r),i_:GI.bind(null,r),j_:KI.bind(null,r)}),r.Ia.push(async e=>{e?(r.Ra.O_(),yu(r)?_u(r):r.da.set("Unknown")):(await r.Ra.stop(),sm(r))})),r.Ra}function Bt(r){return r.Va||(r.Va=function(t,n,s){const i=M(t);return i.ra(),new LI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{e_:()=>Promise.resolve(),n_:HI.bind(null,r),i_:XI.bind(null,r),X_:JI.bind(null,r),ea:YI.bind(null,r)}),r.Ia.push(async e=>{e?(r.Va.O_(),await yr(r)):(await r.Va.stop(),r.ha.length>0&&(D(En,`Stopping write stream with ${r.ha.length} pending writes`),r.ha=[]))})),r.Va}/**
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
 */class Iu{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const a=Date.now()+n,u=new Iu(e,t,a,s,i);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Er(r,e){if(fe("AsyncQueue",`${e}: ${r}`),jt(r))return new C(S.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class zn{static emptySet(e){return new zn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||O.comparator(t.key,n.key):(t,n)=>O.comparator(t.key,n.key),this.keyedMap=jr(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new zn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class ph{constructor(){this.ma=new re(O.comparator)}track(e){const t=e.doc.key,n=this.ma.get(t);n?e.type!==0&&n.type===3?this.ma=this.ma.insert(t,e):e.type===3&&n.type!==1?this.ma=this.ma.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ma=this.ma.remove(t):e.type===1&&n.type===2?this.ma=this.ma.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):F(63341,{Vt:e,fa:n}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,n)=>{e.push(n)}),e}}class cr{constructor(e,t,n,s,i,a,u,c,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new cr(e,t,zn.emptySet(t),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class ZI{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class eE{constructor(){this.queries=gh(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,n){const s=M(t),i=s.queries;s.queries=gh(),i.forEach((a,u)=>{for(const c of u.ya)c.onError(n)})})(this,new C(S.ABORTED,"Firestore shutting down"))}}function gh(){return new mt(r=>Xd(r),bs)}async function Eu(r,e){const t=M(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.wa()&&e.Sa()&&(n=2):(i=new ZI,n=e.Sa()?0:1);try{switch(n){case 0:i.pa=await t.onListen(s,!0);break;case 1:i.pa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=Er(a,`Initialization of query '${Ln(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.ya.push(e),e.Da(t.onlineState),i.pa&&e.va(i.pa)&&vu(t)}async function Tu(r,e){const t=M(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const a=i.ya.indexOf(e);a>=0&&(i.ya.splice(a,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function tE(r,e){const t=M(r);let n=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const u of a.ya)u.va(s)&&(n=!0);a.pa=s}}n&&vu(t)}function nE(r,e,t){const n=M(r),s=n.queries.get(e);if(s)for(const i of s.ya)i.onError(t);n.queries.delete(e)}function vu(r){r.ba.forEach(e=>{e.next()})}var ba,_h;(_h=ba||(ba={})).Ca="default",_h.Cache="cache";class wu{constructor(e,t,n){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=n||{}}va(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new cr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const n=t!=="Offline";return(!this.options.La||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==ba.Cache}}/**
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
 */class rE{constructor(e,t){this.ka=e,this.byteLength=t}qa(){return"metadata"in this.ka}}/**
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
 */class yh{constructor(e){this.serializer=e}Us(e){return tt(this.serializer,e)}Ks(e){return e.metadata.exists?vf(this.serializer,e.document,!1):ie.newNoDocument(this.Us(e.metadata.name),this.Ws(e.metadata.readTime))}Ws(e){return me(e)}}class sE{constructor(e,t,n){this.Qa=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=um(e)}$a(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ka.namedQuery)this.queries.push(e.ka.namedQuery);else if(e.ka.documentMetadata){this.documents.push({metadata:e.ka.documentMetadata}),e.ka.documentMetadata.exists||++t;const n=G.fromString(e.ka.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.ka.document&&(this.documents[this.documents.length-1].document=e.ka.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ua(e){const t=new Map,n=new yh(this.serializer);for(const s of e)if(s.metadata.queries){const i=n.Us(s.metadata.name);for(const a of s.metadata.queries){const u=(t.get(a)||j()).add(i);t.set(a,u)}}return t}async complete(){const e=await CI(this.localStore,new yh(this.serializer),this.documents,this.Qa.id),t=this.Ua(this.documents);for(const n of this.queries)await DI(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Ka:this.collectionGroups,Wa:e}}}function um(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class cm{constructor(e){this.key=e}}class lm{constructor(e){this.key=e}}class hm{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=j(),this.mutatedKeys=j(),this.Ha=ef(e),this.Ja=new zn(this.Ha)}get Ya(){return this.Ga}Za(e,t){const n=t?t.Xa:new ph,s=t?t.Ja:this.Ja;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),b=Rs(this.query,p)?p:null,V=!!g&&this.mutatedKeys.has(g.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let x=!1;g&&b?g.data.isEqual(b.data)?V!==N&&(n.track({type:3,doc:b}),x=!0):this.eu(g,b)||(n.track({type:2,doc:b}),x=!0,(c&&this.Ha(b,c)>0||h&&this.Ha(b,h)<0)&&(u=!0)):!g&&b?(n.track({type:0,doc:b}),x=!0):g&&!b&&(n.track({type:1,doc:g}),x=!0,(c||h)&&(u=!0)),x&&(b?(a=a.add(b),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ja:a,Xa:n,Cs:u,mutatedKeys:i}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const a=e.Xa.ga();a.sort((f,p)=>function(b,V){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Vt:x})}};return N(b)-N(V)}(f.type,p.type)||this.Ha(f.doc,p.doc)),this.tu(n),s=s!=null&&s;const u=t&&!s?this.nu():[],c=this.ja.size===0&&this.current&&!s?1:0,h=c!==this.za;return this.za=c,a.length!==0||h?{snapshot:new cr(this.query,e.Ja,i,a,e.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),ru:u}:{ru:u}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new ph,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=j(),this.Ja.forEach(n=>{this.iu(n.key)&&(this.ja=this.ja.add(n.key))});const t=[];return e.forEach(n=>{this.ja.has(n)||t.push(new lm(n))}),this.ja.forEach(n=>{e.has(n)||t.push(new cm(n))}),t}su(e){this.Ga=e.$s,this.ja=j();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return cr.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Qt="SyncEngine";class iE{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class oE{constructor(e){this.key=e,this._u=!1}}class aE{constructor(e,t,n,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.au={},this.uu=new mt(u=>Xd(u),bs),this.cu=new Map,this.lu=new Set,this.hu=new re(O.comparator),this.Pu=new Map,this.Tu=new uu,this.Iu={},this.Eu=new Map,this.du=In.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function uE(r,e,t=!0){const n=eo(r);let s;const i=n.uu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await dm(n,e,t,!0),s}async function cE(r,e){const t=eo(r);await dm(t,e,!0,!1)}async function dm(r,e,t,n){const s=await or(r.localStore,Fe(e)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,t);let u;return n&&(u=await Au(r,e,i,a==="current",s.resumeToken)),r.isPrimaryClient&&t&&Zi(r.remoteStore,s),u}async function Au(r,e,t,n,s){r.Ru=(p,g,b)=>async function(N,x,z,q){let U=x.view.Za(z);U.Cs&&(U=await ki(N.localStore,x.query,!1).then(({documents:E})=>x.view.Za(E,U)));const H=q&&q.targetChanges.get(x.targetId),ne=q&&q.targetMismatches.get(x.targetId)!=null,J=x.view.applyChanges(U,N.isPrimaryClient,H,ne);return Ra(N,x.targetId,J.ru),J.snapshot}(r,p,g,b);const i=await ki(r.localStore,e,!0),a=new hm(e,i.$s),u=a.Za(i.documents),c=Vs.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=a.applyChanges(u,r.isPrimaryClient,c);Ra(r,t,h.ru);const f=new iE(e,t,a);return r.uu.set(e,f),r.cu.has(t)?r.cu.get(t).push(e):r.cu.set(t,[e]),h.snapshot}async function lE(r,e,t){const n=M(r),s=n.uu.get(e),i=n.cu.get(s.targetId);if(i.length>1)return n.cu.set(s.targetId,i.filter(a=>!bs(a,e))),void n.uu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ar(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&ur(n.remoteStore,s.targetId),lr(n,s.targetId)}).catch(zt)):(lr(n,s.targetId),await ar(n.localStore,s.targetId,!0))}async function hE(r,e){const t=M(r),n=t.uu.get(e),s=t.cu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ur(t.remoteStore,n.targetId))}async function dE(r,e,t){const n=Pu(r);try{const s=await function(a,u){const c=M(a),h=ce.now(),f=u.reduce((b,V)=>b.add(V.key),j());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=qe(),N=j();return c.Bs.getEntries(b,f).next(x=>{V=x,V.forEach((z,q)=>{q.isValidDocument()||(N=N.add(z))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,V)).next(x=>{p=x;const z=[];for(const q of u){const U=ky(q,p.get(q.key).overlayedDocument);U!=null&&z.push(new pt(q.key,U,zd(U.value.mapValue),ue.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,z,u)}).next(x=>{g=x;const z=x.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(b,x.batchId,z)})}).then(()=>({batchId:g.batchId,changes:nf(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,c){let h=a.Iu[a.currentUser.toKey()];h||(h=new re($)),h=h.insert(u,c),a.Iu[a.currentUser.toKey()]=h}(n,s.batchId,t),await gt(n,s.changes),await yr(n.remoteStore)}catch(s){const i=Er(s,"Failed to persist write");t.reject(i)}}async function fm(r,e){const t=M(r);try{const n=await PI(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Pu.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a._u=!0:s.modifiedDocuments.size>0?L(a._u,14607):s.removedDocuments.size>0&&(L(a._u,42227),a._u=!1))}),await gt(t,n,e)}catch(n){await zt(n)}}function Ih(r,e,t){const n=M(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.uu.forEach((i,a)=>{const u=a.view.Da(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const c=M(a);c.onlineState=u;let h=!1;c.queries.forEach((f,p)=>{for(const g of p.ya)g.Da(u)&&(h=!0)}),h&&vu(c)}(n.eventManager,e),s.length&&n.au.j_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function fE(r,e,t){const n=M(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Pu.get(e),i=s&&s.key;if(i){let a=new re(O.comparator);a=a.insert(i,ie.newNoDocument(i,B.min()));const u=j().add(i),c=new Ps(B.min(),new Map,new re($),a,u);await fm(n,c),n.hu=n.hu.remove(i),n.Pu.delete(e),Su(n)}else await ar(n.localStore,e,!1).then(()=>lr(n,e,t)).catch(zt)}async function mE(r,e){const t=M(r),n=e.batch.batchId;try{const s=await SI(t.localStore,e);Ru(t,n,null),bu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await gt(t,s)}catch(s){await zt(s)}}async function pE(r,e,t){const n=M(r);try{const s=await function(a,u){const c=M(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,u).next(p=>(L(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(n.localStore,e);Ru(n,e,t),bu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await gt(n,s)}catch(s){await zt(s)}}async function gE(r,e){const t=M(r);Kt(t.remoteStore)||D(Qt,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(a){const u=M(a);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(n===Ct)return void e.resolve();const s=t.Eu.get(n)||[];s.push(e),t.Eu.set(n,s)}catch(n){const s=Er(n,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function bu(r,e){(r.Eu.get(e)||[]).forEach(t=>{t.resolve()}),r.Eu.delete(e)}function Ru(r,e,t){const n=M(r);let s=n.Iu[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Iu[n.currentUser.toKey()]=s}}function lr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.cu.get(e))r.uu.delete(n),t&&r.au.Vu(n,t);r.cu.delete(e),r.isPrimaryClient&&r.Tu.Hr(e).forEach(n=>{r.Tu.containsKey(n)||mm(r,n)})}function mm(r,e){r.lu.delete(e.path.canonicalString());const t=r.hu.get(e);t!==null&&(ur(r.remoteStore,t),r.hu=r.hu.remove(e),r.Pu.delete(t),Su(r))}function Ra(r,e,t){for(const n of t)n instanceof cm?(r.Tu.addReference(n.key,e),_E(r,n)):n instanceof lm?(D(Qt,"Document no longer in limbo: "+n.key),r.Tu.removeReference(n.key,e),r.Tu.containsKey(n.key)||mm(r,n.key)):F(19791,{mu:n})}function _E(r,e){const t=e.key,n=t.path.canonicalString();r.hu.get(t)||r.lu.has(n)||(D(Qt,"New document in limbo: "+t),r.lu.add(n),Su(r))}function Su(r){for(;r.lu.size>0&&r.hu.size<r.maxConcurrentLimboResolutions;){const e=r.lu.values().next().value;r.lu.delete(e);const t=new O(G.fromString(e)),n=r.du.next();r.Pu.set(n,new oE(t)),r.hu=r.hu.insert(t,n),Zi(r.remoteStore,new ut(Fe(mr(t.path)),n,"TargetPurposeLimboResolution",Be.le))}}async function gt(r,e,t){const n=M(r),s=[],i=[],a=[];n.uu.isEmpty()||(n.uu.forEach((u,c)=>{a.push(n.Ru(c,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=du.Rs(c.targetId,h);i.push(p)}}))}),await Promise.all(a),n.au.j_(s),await async function(c,h){const f=M(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>w.forEach(h,g=>w.forEach(g.ds,b=>f.persistence.referenceDelegate.addReference(p,g.targetId,b)).next(()=>w.forEach(g.As,b=>f.persistence.referenceDelegate.removeReference(p,g.targetId,b)))))}catch(p){if(!jt(p))throw p;D(fu,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const b=f.xs.get(g),V=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(V);f.xs=f.xs.insert(g,N)}}}(n.localStore,i))}async function yE(r,e){const t=M(r);if(!t.currentUser.isEqual(e)){D(Qt,"User change. New user:",e.toKey());const n=await Gf(t.localStore,e);t.currentUser=e,function(i,a){i.Eu.forEach(u=>{u.forEach(c=>{c.reject(new C(S.CANCELLED,a))})}),i.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await gt(t,n.ks)}}function IE(r,e){const t=M(r),n=t.Pu.get(e);if(n&&n._u)return j().add(n.key);{let s=j();const i=t.cu.get(e);if(!i)return s;for(const a of i){const u=t.uu.get(a);s=s.unionWith(u.view.Ya)}return s}}async function EE(r,e){const t=M(r),n=await ki(t.localStore,e.query,!0),s=e.view.su(n);return t.isPrimaryClient&&Ra(t,e.targetId,s.ru),s}async function TE(r,e){const t=M(r);return Hf(t.localStore,e).then(n=>gt(t,n))}async function vE(r,e,t,n){const s=M(r),i=await function(u,c){const h=M(u),f=M(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.tr(p,c).next(g=>g?h.localDocuments.getDocuments(p,g):w.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await yr(s.remoteStore):t==="acknowledged"||t==="rejected"?(Ru(s,e,n||null),bu(s,e),function(u,c){M(M(u).mutationQueue).sr(c)}(s.localStore,e)):F(6720,"Unknown batchState",{fu:t}),await gt(s,i)):D(Qt,"Cannot apply mutation batch with id: "+e)}async function wE(r,e){const t=M(r);if(eo(t),Pu(t),e===!0&&t.Au!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await Eh(t,n.toArray());t.Au=!0,await Aa(t.remoteStore,!0);for(const i of s)Zi(t.remoteStore,i)}else if(e===!1&&t.Au!==!1){const n=[];let s=Promise.resolve();t.cu.forEach((i,a)=>{t.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then(()=>(lr(t,a),ar(t.localStore,a,!0))),ur(t.remoteStore,a)}),await s,await Eh(t,n),function(a){const u=M(a);u.Pu.forEach((c,h)=>{ur(u.remoteStore,h)}),u.Tu.Jr(),u.Pu=new Map,u.hu=new re(O.comparator)}(t),t.Au=!1,await Aa(t.remoteStore,!1)}}async function Eh(r,e,t){const n=M(r),s=[],i=[];for(const a of e){let u;const c=n.cu.get(a);if(c&&c.length!==0){u=await or(n.localStore,Fe(c[0]));for(const h of c){const f=n.uu.get(h),p=await EE(n,f);p.snapshot&&i.push(p.snapshot)}}else{const h=await Wf(n.localStore,a);u=await or(n.localStore,h),await Au(n,pm(h),a,!1,u.resumeToken)}s.push(u)}return n.au.j_(i),s}function pm(r){return Yd(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function AE(r){return function(t){return M(M(t).persistence).Is()}(M(r).localStore)}async function bE(r,e,t,n){const s=M(r);if(s.Au)return void D(Qt,"Ignoring unexpected query state notification.");const i=s.cu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const a=await Hf(s.localStore,Zd(i[0])),u=Ps.createSynthesizedRemoteEventForCurrentChange(e,t==="current",de.EMPTY_BYTE_STRING);await gt(s,a,u);break}case"rejected":await ar(s.localStore,e,!0),lr(s,e,n);break;default:F(64155,t)}}async function RE(r,e,t){const n=eo(r);if(n.Au){for(const s of e){if(n.cu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){D(Qt,"Adding an already active target "+s);continue}const i=await Wf(n.localStore,s),a=await or(n.localStore,i);await Au(n,pm(i),a.targetId,!1,a.resumeToken),Zi(n.remoteStore,a)}for(const s of t)n.cu.has(s)&&await ar(n.localStore,s,!1).then(()=>{ur(n.remoteStore,s),lr(n,s)}).catch(zt)}}function eo(r){const e=M(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=fm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fE.bind(null,e),e.au.j_=tE.bind(null,e.eventManager),e.au.Vu=nE.bind(null,e.eventManager),e}function Pu(r){const e=M(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pE.bind(null,e),e}function SE(r,e,t){const n=M(r);(async function(i,a,u){try{const c=await a.getMetadata();if(await function(b,V){const N=M(b),x=me(V.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",z=>N.Ei.getBundleMetadata(z,V.id)).then(z=>!!z&&z.createTime.compareTo(x)>=0)}(i.localStore,c))return await a.close(),u._completeWith(function(b){return{taskState:"Success",documentsLoaded:b.totalDocuments,bytesLoaded:b.totalBytes,totalDocuments:b.totalDocuments,totalBytes:b.totalBytes}}(c)),Promise.resolve(new Set);u._updateProgress(um(c));const h=new sE(c,i.localStore,a.serializer);let f=await a.gu();for(;f;){const g=await h.$a(f);g&&u._updateProgress(g),f=await a.gu()}const p=await h.complete();return await gt(i,p.Wa,void 0),await function(b,V){const N=M(b);return N.persistence.runTransaction("Save bundle","readwrite",x=>N.Ei.saveBundleMetadata(x,V))}(i.localStore,c),u._completeWith(p.progress),Promise.resolve(p.Ka)}catch(c){return nt(Qt,`Loading bundle failed with ${c}`),u._failWith(c),Promise.resolve(new Set)}})(n,e,t).then(s=>{n.sharedClientState.notifyBundleLoaded(s)})}class gs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cs(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return jf(this.persistence,new zf,e.initialUser,this.serializer)}yu(e){return new cu(Xi.fi,this.serializer)}pu(e){return new em}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gs.provider={build:()=>new gs};class PE extends gs{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){L(this.persistence.referenceDelegate instanceof Ni,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Ff(n,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new cu(n=>Ni.fi(n,t),this.serializer)}}class gm extends gs{constructor(e,t,n){super(),this.Du=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Du.initialize(this,e),await Pu(this.Du.syncEngine),await yr(this.Du.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}wu(e){return jf(this.persistence,new zf,e.initialUser,this.serializer)}Su(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Ff(n,e.asyncQueue,t)}bu(e,t){const n=new F_(t,this.persistence);return new M_(e.asyncQueue,n)}yu(e){const t=hu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new lu(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,tm(),yi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}pu(e){return new em}}class VE extends gm{constructor(e,t){super(e,t,!1),this.Du=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Du.syncEngine;this.sharedClientState instanceof Ho&&(this.sharedClientState.syncEngine={Co:vE.bind(null,t),Fo:bE.bind(null,t),Mo:RE.bind(null,t),Is:AE.bind(null,t),vo:TE.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ji(async n=>{await wE(this.Du.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}pu(e){const t=tm();if(!Ho.C(t))throw new C(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=hu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ho(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class _s{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ih(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=yE.bind(null,this.syncEngine),await Aa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eE}()}createDatastore(e){const t=Cs(e.databaseInfo.databaseId),n=function(i){return new MI(i)}(e.databaseInfo);return function(i,a,u,c){return new UI(i,a,u,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,a,u){return new $I(n,s,i,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Ih(this.syncEngine,t,0),function(){return dh.C()?new dh:new xI}())}createSyncEngine(e,t){return function(s,i,a,u,c,h,f){const p=new aE(s,i,a,u,c,h);return f&&(p.Au=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=M(s);D(En,"RemoteStore shutting down."),i.Ta.add(5),await _r(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}_s.provider={build:()=>new _s};function Th(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class to{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):fe("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class CE{constructor(e,t){this.Fu=e,this.serializer=t,this.metadata=new Ae,this.buffer=new Uint8Array,this.Mu=function(){return new TextDecoder("utf-8")}(),this.xu().then(n=>{n&&n.qa()?this.metadata.resolve(n.ka.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.ka)}`))},n=>this.metadata.reject(n))}close(){return this.Fu.cancel()}async getMetadata(){return this.metadata.promise}async gu(){return await this.getMetadata(),this.xu()}async xu(){const e=await this.Ou();if(e===null)return null;const t=this.Mu.decode(e),n=Number(t);isNaN(n)&&this.Nu(`length string (${t}) is not valid number`);const s=await this.Bu(n);return new rE(JSON.parse(s),e.length+n)}Lu(){return this.buffer.findIndex(e=>e===123)}async Ou(){for(;this.Lu()<0&&!await this.ku(););if(this.buffer.length===0)return null;const e=this.Lu();e<0&&this.Nu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Bu(e){for(;this.buffer.length<e;)await this.ku()&&this.Nu("Reached the end of bundle when more is expected.");const t=this.Mu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Nu(e){throw this.Fu.cancel(),new Error(`Invalid bundle format: ${e}`)}async ku(){const e=await this.Fu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class DE{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new C(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(s,i){const a=M(s),u={documents:i.map(p=>ms(a.serializer,p))},c=await a.Yo("BatchGetDocuments",a.serializer.databaseId,G.emptyPath(),u,i.length),h=new Map;c.forEach(p=>{const g=zy(a.serializer,p);h.set(g.key.toString(),g)});const f=[];return i.forEach(p=>{const g=h.get(p.toString());L(!!g,55234,{key:p}),f.push(g)}),f}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new gr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const s=O.fromPath(n);this.mutations.push(new Za(s,this.precondition(s)))}),await async function(n,s){const i=M(n),a={writes:s.map(u=>ps(i.serializer,u))};await i.zo("Commit",i.serializer.databaseId,G.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw F(50498,{qu:e.constructor.name});t=B.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new C(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(B.min())?ue.exists(!1):ue.updateTime(t):ue.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(B.min()))throw new C(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ue.updateTime(t)}return ue.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class xE{constructor(e,t,n,s,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=s,this.deferred=i,this.Qu=n.maxAttempts,this.C_=new pu(this.asyncQueue,"transaction_retry")}$u(){this.Qu-=1,this.Uu()}Uu(){this.C_.f_(async()=>{const e=new DE(this.datastore),t=this.Ku(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.Wu(s)}))}).catch(n=>{this.Wu(n)})})}Ku(e){try{const t=this.updateFunction(e);return!vs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Wu(e){this.Qu>0&&this.Gu(e)?(this.Qu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Uu(),Promise.resolve()))):this.deferred.reject(e)}Gu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!ff(t)}return!1}}/**
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
 */const Ut="FirestoreClient";class NE{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Ee.UNAUTHENTICATED,this.clientId=gd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{D(Ut,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(D(Ut,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Er(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Yo(r,e){r.asyncQueue.verifyOperationInProgress(),D(Ut,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Gf(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function vh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Vu(r);D(Ut,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>mh(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>mh(e.remoteStore,s)),r._onlineComponents=e}async function Vu(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D(Ut,"Using user provided OfflineComponentProvider");try{await Yo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;nt("Error using user provided cache. Falling back to memory cache: "+t),await Yo(r,new gs)}}else D(Ut,"Using default OfflineComponentProvider"),await Yo(r,new PE(void 0));return r._offlineComponents}async function no(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D(Ut,"Using user provided OnlineComponentProvider"),await vh(r,r._uninitializedComponentsProvider._online)):(D(Ut,"Using default OnlineComponentProvider"),await vh(r,new _s))),r._onlineComponents}function _m(r){return Vu(r).then(e=>e.persistence)}function Cu(r){return Vu(r).then(e=>e.localStore)}function ym(r){return no(r).then(e=>e.remoteStore)}function Du(r){return no(r).then(e=>e.syncEngine)}function kE(r){return no(r).then(e=>e.datastore)}async function hr(r){const e=await no(r),t=e.eventManager;return t.onListen=uE.bind(null,e.syncEngine),t.onUnlisten=lE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=cE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=hE.bind(null,e.syncEngine),t}function OE(r){return r.asyncQueue.enqueue(async()=>{const e=await _m(r),t=await ym(r);return e.setNetworkEnabled(!0),function(s){const i=M(s);return i.Ta.delete(0),Ds(i)}(t)})}function ME(r){return r.asyncQueue.enqueue(async()=>{const e=await _m(r),t=await ym(r);return e.setNetworkEnabled(!1),async function(s){const i=M(s);i.Ta.add(0),await _r(i),i.da.set("Offline")}(t)})}function FE(r,e){const t=new Ae;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await function(h,f){const p=M(h);return p.persistence.runTransaction("read document","readonly",g=>p.localDocuments.getDocument(g,f))}(s,i);u.isFoundDocument()?a.resolve(u):u.isNoDocument()?a.resolve(null):a.reject(new C(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const c=Er(u,`Failed to get document '${i} from cache`);a.reject(c)}}(await Cu(r),e,t)),t.promise}function Im(r,e,t={}){const n=new Ae;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,h){const f=new to({next:g=>{f.Cu(),a.enqueueAndForget(()=>Tu(i,p));const b=g.docs.has(u);!b&&g.fromCache?h.reject(new C(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&g.fromCache&&c&&c.source==="server"?h.reject(new C(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new wu(mr(u.path),f,{includeMetadataChanges:!0,La:!0});return Eu(i,p)}(await hr(r),r.asyncQueue,e,t,n)),n.promise}function LE(r,e){const t=new Ae;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await ki(s,i,!0),c=new hm(i,u.$s),h=c.Za(u.documents),f=c.applyChanges(h,!1);a.resolve(f.snapshot)}catch(u){const c=Er(u,`Failed to execute query '${i} against cache`);a.reject(c)}}(await Cu(r),e,t)),t.promise}function Em(r,e,t={}){const n=new Ae;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,h){const f=new to({next:g=>{f.Cu(),a.enqueueAndForget(()=>Tu(i,p)),g.fromCache&&c.source==="server"?h.reject(new C(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new wu(u,f,{includeMetadataChanges:!0,La:!0});return Eu(i,p)}(await hr(r),r.asyncQueue,e,t,n)),n.promise}function BE(r,e){const t=new to(e);return r.asyncQueue.enqueueAndForget(async()=>function(s,i){M(s).ba.add(i),i.next()}(await hr(r),t)),()=>{t.Cu(),r.asyncQueue.enqueueAndForget(async()=>function(s,i){M(s).ba.delete(i)}(await hr(r),t))}}function UE(r,e,t,n){const s=function(a,u){let c;return c=typeof a=="string"?Ua().encode(a):a,function(f,p){return new CE(f,p)}(function(f,p){if(f instanceof Uint8Array)return Th(f,p);if(f instanceof ArrayBuffer)return Th(new Uint8Array(f),p);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),u)}(t,Cs(e));r.asyncQueue.enqueueAndForget(async()=>{SE(await Du(r),s,n)})}function qE(r,e){return r.asyncQueue.enqueue(async()=>function(n,s){const i=M(n);return i.persistence.runTransaction("Get named query","readonly",a=>i.Ei.getNamedQuery(a,s))}(await Cu(r),e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Tm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const wh=new Map;/**
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
 */function xu(r,e,t){if(!t)throw new C(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function vm(r,e,t,n){if(e===!0&&n===!0)throw new C(S.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ah(r){if(!O.isDocumentKey(r))throw new C(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function bh(r){if(O.isDocumentKey(r))throw new C(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ro(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":F(12329,{type:typeof r})}function X(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new C(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ro(r);throw new C(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function wm(r,e){if(e<=0)throw new C(S.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */const Am="firestore.googleapis.com",Rh=!0;class Sh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Am,this.ssl=Rh}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Rh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uI)throw new C(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tm((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xs{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new b_;switch(n.type){case"firstParty":return new V_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=wh.get(t);n&&(D("ComponentProvider","Removing Datastore"),wh.delete(t),n.terminate())}(this),Promise.resolve()}}function $E(r,e,t,n={}){var s;r=X(r,xs);const i=xa(e),a=r._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:r._getEmulatorOptions()}),c=`${e}:${t}`;i&&(Up(`https://${c}`),jp("Firestore",!0)),a.host!==Am&&a.host!==c&&nt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:n});if(!jn(h,u)&&(r._setSettings(h),n.mockUserToken)){let f,p;if(typeof n.mockUserToken=="string")f=n.mockUserToken,p=Ee.MOCK_USER;else{f=qp(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const g=n.mockUserToken.sub||n.mockUserToken.user_id;if(!g)throw new C(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ee(g)}r._authCredentials=new R_(new pd(f,p))}}/**
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
 */let Le=class bm{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new bm(this.firestore,e,this._query)}},le=class Rm{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rm(this.firestore,e,this._key)}},Dt=class Sm extends Le{constructor(e,t,n){super(e,t,mr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new O(e))}withConverter(e){return new Sm(this.firestore,e,this._path)}};function Pm(r,e,...t){if(r=_e(r),xu("collection","path",e),r instanceof xs){const n=G.fromString(e,...t);return bh(n),new Dt(r,null,n)}{if(!(r instanceof le||r instanceof Dt))throw new C(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(G.fromString(e,...t));return bh(n),new Dt(r.firestore,null,n)}}function zE(r,e){if(r=X(r,xs),xu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Le(r,null,function(n){return new ft(G.emptyPath(),n)}(e))}function Li(r,e,...t){if(r=_e(r),arguments.length===1&&(e=gd.newId()),xu("doc","path",e),r instanceof xs){const n=G.fromString(e,...t);return Ah(n),new le(r,null,new O(n))}{if(!(r instanceof le||r instanceof Dt))throw new C(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(G.fromString(e,...t));return Ah(n),new le(r.firestore,r instanceof Dt?r.converter:null,new O(n))}}function Vm(r,e){return r=_e(r),e=_e(e),(r instanceof le||r instanceof Dt)&&(e instanceof le||e instanceof Dt)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function Cm(r,e){return r=_e(r),e=_e(e),r instanceof Le&&e instanceof Le&&r.firestore===e.firestore&&bs(r._query,e._query)&&r.converter===e.converter}/**
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
 */const Ph="AsyncQueue";class Vh{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new pu(this,"async_queue_retry"),this.ec=()=>{const n=yi();n&&D(Ph,"Visibility state changed to "+n.visibilityState),this.C_.p_()},this.tc=e;const t=yi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=yi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new Ae;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!jt(e))throw e;D(Ph,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(n=>{throw this.Ju=n,this.Yu=!1,fe("INTERNAL UNHANDLED ERROR: ",Ch(n)),n}).then(n=>(this.Yu=!1,n))));return this.tc=t,t}enqueueAfterDelay(e,t,n){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const s=Iu.createAndSchedule(this,e,t,n,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&F(47125,{_c:Ch(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function Ch(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function Sa(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class jE{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ae,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const GE=-1;let pe=class extends xs{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Vh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vh(e),this._firestoreClient=void 0,await e}}};function xe(r){if(r._terminated)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Dm(r),r._firestoreClient}function Dm(r){var e,t,n;const s=r._freezeSettings(),i=function(u,c,h,f){return new dy(u,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Tm(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new NE(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}function KE(r,e){nt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return xm(r,_s.provider,{build:n=>new gm(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function QE(r){nt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();xm(r,_s.provider,{build:t=>new VE(t,e.cacheSizeBytes)})}function xm(r,e,t){if((r=X(r,pe))._firestoreClient||r._terminated)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new C(S.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},Dm(r)}function WE(r){if(r._initialized&&!r._terminated)throw new C(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ae;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!et.C())return Promise.resolve();const s=n+$f;await et.delete(s)}(hu(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function HE(r){return function(t){const n=new Ae;return t.asyncQueue.enqueueAndForget(async()=>gE(await Du(t),n)),n.promise}(xe(r=X(r,pe)))}function JE(r){return OE(xe(r=X(r,pe)))}function YE(r){return ME(xe(r=X(r,pe)))}function XE(r,e){const t=xe(r=X(r,pe)),n=new jE;return UE(t,r._databaseId,e,n),n}function ZE(r,e){return qE(xe(r=X(r,pe)),e).then(t=>t?new Le(r,null,t.query):null)}/**
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
 */class st{constructor(e){this._byteString=e}static fromBase64String(e){try{return new st(de.fromBase64String(e))}catch(t){throw new C(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new st(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let qt=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new C(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let wn=class{constructor(e){this._methodName=e}};/**
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
 */class so{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new C(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new C(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Nu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const eT=/^__.*__$/;class tT{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new pt(e,this.data,this.fieldMask,t,this.fieldTransforms):new pr(e,this.data,t,this.fieldTransforms)}}class Nm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new pt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function km(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{hc:r})}}class io{constructor(e,t,n,s,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new io(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:n,Ec:!1});return s.dc(e),s}Ac(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:n,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Bi(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(km(this.hc)&&eT.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class nT{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Cs(e)}gc(e,t,n,s=!1){return new io({hc:e,methodName:t,fc:n,path:ae.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function An(r){const e=r._freezeSettings(),t=Cs(r._databaseId);return new nT(r._databaseId,!!e.ignoreUndefinedProperties,t)}function oo(r,e,t,n,s,i={}){const a=r.gc(i.merge||i.mergeFields?2:0,e,t,s);Uu("Data must be an object, but it was:",a,n);const u=Fm(n,a);let c,h;if(i.merge)c=new Ue(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Pa(e,p,t);if(!a.contains(g))throw new C(S.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Bm(f,g)||f.push(g)}c=new Ue(f),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new tT(new we(u),c,h)}class Ns extends wn{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ns}}function Om(r,e,t){return new io({hc:3,fc:e.settings.fc,methodName:r._methodName,Ec:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ku extends wn{_toFieldTransform(e){return new Ss(e.path,new rr)}isEqual(e){return e instanceof ku}}class Ou extends wn{constructor(e,t){super(e),this.yc=t}_toFieldTransform(e){const t=Om(this,e,!0),n=this.yc.map(i=>bn(i,t)),s=new pn(n);return new Ss(e.path,s)}isEqual(e){return e instanceof Ou&&jn(this.yc,e.yc)}}class Mu extends wn{constructor(e,t){super(e),this.yc=t}_toFieldTransform(e){const t=Om(this,e,!0),n=this.yc.map(i=>bn(i,t)),s=new gn(n);return new Ss(e.path,s)}isEqual(e){return e instanceof Mu&&jn(this.yc,e.yc)}}class Fu extends wn{constructor(e,t){super(e),this.wc=t}_toFieldTransform(e){const t=new sr(e.serializer,of(e.serializer,this.wc));return new Ss(e.path,t)}isEqual(e){return e instanceof Fu&&this.wc===e.wc}}function Lu(r,e,t,n){const s=r.gc(1,e,t);Uu("Data must be an object, but it was:",s,n);const i=[],a=we.empty();Gt(n,(c,h)=>{const f=qu(e,c,t);h=_e(h);const p=s.Ac(f);if(h instanceof Ns)i.push(f);else{const g=bn(h,p);g!=null&&(i.push(f),a.set(f,g))}});const u=new Ue(i);return new Nm(a,u,s.fieldTransforms)}function Bu(r,e,t,n,s,i){const a=r.gc(1,e,t),u=[Pa(e,n,t)],c=[s];if(i.length%2!=0)throw new C(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)u.push(Pa(e,i[g])),c.push(i[g+1]);const h=[],f=we.empty();for(let g=u.length-1;g>=0;--g)if(!Bm(h,u[g])){const b=u[g];let V=c[g];V=_e(V);const N=a.Ac(b);if(V instanceof Ns)h.push(b);else{const x=bn(V,N);x!=null&&(h.push(b),f.set(b,x))}}const p=new Ue(h);return new Nm(f,p,a.fieldTransforms)}function Mm(r,e,t,n=!1){return bn(t,r.gc(n?4:3,e))}function bn(r,e){if(Lm(r=_e(r)))return Uu("Unsupported field value:",e,r),Fm(r,e);if(r instanceof wn)return function(n,s){if(!km(s.hc))throw s.Vc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let c=bn(u,s.Rc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=_e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return of(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ce.fromDate(n);return{timestampValue:ir(s.serializer,i)}}if(n instanceof ce){const i=new ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ir(s.serializer,i)}}if(n instanceof so)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof st)return{bytesValue:_f(s.serializer,n._byteString)};if(n instanceof le){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Vc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:su(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Nu)return function(a,u){return{mapValue:{fields:{[Qa]:{stringValue:Wa},[er]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Vc("VectorValues must only contain numeric values.");return Xa(u.serializer,h)})}}}}}}(n,s);throw s.Vc(`Unsupported field value: ${ro(n)}`)}(r,e)}function Fm(r,e){const t={};return kd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gt(r,(n,s)=>{const i=bn(s,e.Ic(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function Lm(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ce||r instanceof so||r instanceof st||r instanceof le||r instanceof wn||r instanceof Nu)}function Uu(r,e,t){if(!Lm(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=ro(t);throw n==="an object"?e.Vc(r+" a custom object"):e.Vc(r+" "+n)}}function Pa(r,e,t){if((e=_e(e))instanceof qt)return e._internalPath;if(typeof e=="string")return qu(r,e);throw Bi("Field path arguments must be of type string or ",r,!1,void 0,t)}const rT=new RegExp("[~\\*/\\[\\]]");function qu(r,e,t){if(e.search(rT)>=0)throw Bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new qt(...e.split("."))._internalPath}catch{throw Bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Bi(r,e,t,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${n}`),a&&(c+=` in document ${s}`),c+=")"),new C(S.INVALID_ARGUMENT,u+r+c)}function Bm(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class ys{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ao("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sT extends ys{data(){return super.data()}}function ao(r,e){return typeof e=="string"?qu(r,e):e instanceof qt?e._internalPath:e._delegate._internalPath}/**
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
 */function Um(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new C(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $u{}class ks extends $u{}function At(r,e,...t){let n=[];e instanceof $u&&n.push(e),n=n.concat(t),function(i){const a=i.filter(c=>c instanceof zu).length,u=i.filter(c=>c instanceof uo).length;if(a>1||a>0&&u>0)throw new C(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class uo extends ks{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new uo(e,t,n)}_apply(e){const t=this._parse(e);return $m(e._query,t),new Le(e.firestore,e.converter,ma(e._query,t))}_parse(e){const t=An(e.firestore);return function(i,a,u,c,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new C(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){xh(p,f);const V=[];for(const N of p)V.push(Dh(c,i,N));g={arrayValue:{values:V}}}else g=Dh(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||xh(p,f),g=Mm(u,a,p,f==="in"||f==="not-in");return K.create(h,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function iT(r,e,t){const n=e,s=ao("where",r);return uo._create(s,n,t)}class zu extends $u{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new zu(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Z.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const c of u)$m(a,c),a=ma(a,c)}(e._query,t),new Le(e.firestore,e.converter,ma(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ju extends ks{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ju(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new C(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new C(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fs(i,a)}(e._query,this._field,this._direction);return new Le(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new ft(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function oT(r,e="asc"){const t=e,n=ao("orderBy",r);return ju._create(n,t)}class co extends ks{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new co(e,t,n)}_apply(e){return new Le(e.firestore,e.converter,Vi(e._query,this._limit,this._limitType))}}function aT(r){return wm("limit",r),co._create("limit",r,"F")}function uT(r){return wm("limitToLast",r),co._create("limitToLast",r,"L")}class lo extends ks{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new lo(e,t,n)}_apply(e){const t=qm(e,this.type,this._docOrFields,this._inclusive);return new Le(e.firestore,e.converter,function(s,i){return new ft(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function cT(...r){return lo._create("startAt",r,!0)}function lT(...r){return lo._create("startAfter",r,!1)}class ho extends ks{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new ho(e,t,n)}_apply(e){const t=qm(e,this.type,this._docOrFields,this._inclusive);return new Le(e.firestore,e.converter,function(s,i){return new ft(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,t))}}function hT(...r){return ho._create("endBefore",r,!1)}function dT(...r){return ho._create("endAt",r,!0)}function qm(r,e,t,n){if(t[0]=_e(t[0]),t[0]instanceof ys)return function(i,a,u,c,h){if(!c)throw new C(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const p of $n(i))if(p.field.isKeyField())f.push(fn(a,c.key));else{const g=c.data.field(p.field);if(Gi(g))throw new C(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const b=p.field.canonicalString();throw new C(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${b}' (used as the orderBy) does not exist.`)}f.push(g)}return new Lt(f,h)}(r._query,r.firestore._databaseId,e,t[0]._document,n);{const s=An(r.firestore);return function(a,u,c,h,f,p){const g=a.explicitOrderBy;if(f.length>g.length)throw new C(S.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const b=[];for(let V=0;V<f.length;V++){const N=f[V];if(g[V].field.isKeyField()){if(typeof N!="string")throw new C(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof N}`);if(!Ja(a)&&N.indexOf("/")!==-1)throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${N}' contains a slash.`);const x=a.path.child(G.fromString(N));if(!O.isDocumentKey(x))throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const z=new O(x);b.push(fn(u,z))}else{const x=Mm(c,h,N);b.push(x)}}return new Lt(b,p)}(r._query,r.firestore._databaseId,s,e,t,n)}}function Dh(r,e,t){if(typeof(t=_e(t))=="string"){if(t==="")throw new C(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ja(e)&&t.indexOf("/")!==-1)throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(G.fromString(t));if(!O.isDocumentKey(n))throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return fn(r,new O(n))}if(t instanceof le)return fn(r,t._key);throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ro(t)}.`)}function xh(r,e){if(!Array.isArray(r)||r.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $m(r,e){const t=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new C(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Gu{convertValue(e,t="none"){switch(Mt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Gt(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t[er].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>oe(a.doubleValue));return new Nu(i)}convertGeoPoint(e){return new so(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ki(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ls(e));default:return null}}convertTimestamp(e){const t=lt(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=G.fromString(e);L(Pf(n),9688,{name:e});const s=new Ot(n.get(1),n.get(3)),i=new O(n.popFirst(5));return s.isEqual(t)||fe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function fo(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class fT extends Gu{constructor(e){super(),this.firestore=e}convertBytes(e){return new st(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}/**
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
 */class cn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let dt=class extends ys{constructor(e,t,n,s,i,a){super(e,t,n,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ns(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ao("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}},ns=class extends dt{data(e={}){return super.data(e)}},$t=class{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new cn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ns(this._firestore,this._userDataWriter,n.key,n,new cn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new C(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const c=new ns(s._firestore,s._userDataWriter,u.doc.key,u.doc,new cn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const c=new ns(s._firestore,s._userDataWriter,u.doc.key,u.doc,new cn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return u.type!==0&&(h=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:mT(u.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function mT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:r})}}function zm(r,e){return r instanceof dt&&e instanceof dt?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof $t&&e instanceof $t&&r._firestore===e._firestore&&Cm(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
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
 */function pT(r){r=X(r,le);const e=X(r.firestore,pe);return Im(xe(e),r._key).then(t=>Ku(e,r,t))}class Rn extends Gu{constructor(e){super(),this.firestore=e}convertBytes(e){return new st(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function gT(r){r=X(r,le);const e=X(r.firestore,pe),t=xe(e),n=new Rn(e);return FE(t,r._key).then(s=>new dt(e,n,r._key,s,new cn(s!==null&&s.hasLocalMutations,!0),r.converter))}function _T(r){r=X(r,le);const e=X(r.firestore,pe);return Im(xe(e),r._key,{source:"server"}).then(t=>Ku(e,r,t))}function yT(r){r=X(r,Le);const e=X(r.firestore,pe),t=xe(e),n=new Rn(e);return Um(r._query),Em(t,r._query).then(s=>new $t(e,n,r,s))}function IT(r){r=X(r,Le);const e=X(r.firestore,pe),t=xe(e),n=new Rn(e);return LE(t,r._query).then(s=>new $t(e,n,r,s))}function ET(r){r=X(r,Le);const e=X(r.firestore,pe),t=xe(e),n=new Rn(e);return Em(t,r._query,{source:"server"}).then(s=>new $t(e,n,r,s))}function Nh(r,e,t){r=X(r,le);const n=X(r.firestore,pe),s=fo(r.converter,e,t);return Os(n,[oo(An(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,ue.none())])}function kh(r,e,t,...n){r=X(r,le);const s=X(r.firestore,pe),i=An(s);let a;return a=typeof(e=_e(e))=="string"||e instanceof qt?Bu(i,"updateDoc",r._key,e,t,n):Lu(i,"updateDoc",r._key,e),Os(s,[a.toMutation(r._key,ue.exists(!0))])}function TT(r){return Os(X(r.firestore,pe),[new gr(r._key,ue.none())])}function vT(r,e){const t=X(r.firestore,pe),n=Li(r),s=fo(r.converter,e);return Os(t,[oo(An(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,ue.exists(!1))]).then(()=>n)}function jm(r,...e){var t,n,s;r=_e(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Sa(e[a])||(i=e[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Sa(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,f;if(r instanceof le)h=X(r.firestore,pe),f=mr(r._key.path),c={next:p=>{e[a]&&e[a](Ku(h,r,p))},error:e[a+1],complete:e[a+2]};else{const p=X(r,Le);h=X(p.firestore,pe),f=p._query;const g=new Rn(h);c={next:b=>{e[a]&&e[a](new $t(h,g,p,b))},error:e[a+1],complete:e[a+2]},Um(r._query)}return function(g,b,V,N){const x=new to(N),z=new wu(b,x,V);return g.asyncQueue.enqueueAndForget(async()=>Eu(await hr(g),z)),()=>{x.Cu(),g.asyncQueue.enqueueAndForget(async()=>Tu(await hr(g),z))}}(xe(h),f,u,c)}function wT(r,e){return BE(xe(r=X(r,pe)),Sa(e)?e:{next:e})}function Os(r,e){return function(n,s){const i=new Ae;return n.asyncQueue.enqueueAndForget(async()=>dE(await Du(n),s,i)),i.promise}(xe(r),e)}function Ku(r,e,t){const n=t.docs.get(e._key),s=new Rn(r);return new dt(r,s,e._key,n,new cn(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const AT={maxAttempts:5};/**
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
 */let bT=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=An(e)}set(e,t,n){this._verifyNotCommitted();const s=St(e,this._firestore),i=fo(s.converter,t,n),a=oo(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,ue.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=St(e,this._firestore);let a;return a=typeof(t=_e(t))=="string"||t instanceof qt?Bu(this._dataReader,"WriteBatch.update",i._key,t,n,s):Lu(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,ue.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=St(e,this._firestore);return this._mutations=this._mutations.concat(new gr(t._key,ue.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function St(r,e){if((r=_e(r)).firestore!==e)throw new C(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */class RT{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=An(e)}get(e){const t=St(e,this._firestore),n=new fT(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return F(24041);const i=s[0];if(i.isFoundDocument())return new ys(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new ys(this._firestore,n,t._key,null,t.converter);throw F(18433,{doc:i})})}set(e,t,n){const s=St(e,this._firestore),i=fo(s.converter,t,n),a=oo(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,a),this}update(e,t,n,...s){const i=St(e,this._firestore);let a;return a=typeof(t=_e(t))=="string"||t instanceof qt?Bu(this._dataReader,"Transaction.update",i._key,t,n,s):Lu(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,a),this}delete(e){const t=St(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */let ST=class extends RT{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=St(e,this._firestore),n=new Rn(this._firestore);return super.get(e).then(s=>new dt(this._firestore,n,t._key,s._document,new cn(!1,!1),t.converter))}};function PT(r,e,t){r=X(r,pe);const n=Object.assign(Object.assign({},AT),t);return function(i){if(i.maxAttempts<1)throw new C(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(i,a,u){const c=new Ae;return i.asyncQueue.enqueueAndForget(async()=>{const h=await kE(i);new xE(i.asyncQueue,h,u,a,c).$u()}),c.promise}(xe(r),s=>e(new ST(r,s)),n)}/**
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
 */function VT(){return new Ns("deleteField")}function CT(){return new ku("serverTimestamp")}function DT(...r){return new Ou("arrayUnion",r)}function xT(...r){return new Mu("arrayRemove",r)}function NT(r){return new Fu("increment",r)}(function(e,t=!0){(function(s){fr=s})(Ma),Qn(new dn("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new pe(new S_(n.getProvider("auth-internal")),new C_(a,n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new C(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ot(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),Ze(cl,ll,e),Ze(cl,ll,"esm2017")})();const kT="@firebase/firestore-compat",OT="0.3.51";/**
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
 */function Qu(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Oh(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function Mh(){if(!ly())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Is{constructor(e){this._delegate=e}static fromBase64String(e){return Mh(),new Is(st.fromBase64String(e))}static fromUint8Array(e){return Oh(),new Is(st.fromUint8Array(e))}toBase64(){return Mh(),this._delegate.toBase64()}toUint8Array(){return Oh(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Va(r){return MT(r,["next","error","complete"])}function MT(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}/**
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
 */class FT{enableIndexedDbPersistence(e,t){return KE(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return QE(e._delegate)}clearIndexedDbPersistence(e){return WE(e._delegate)}}class Gm{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ot||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&nt("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){$E(this._delegate,e,t,n)}enableNetwork(){return JE(this._delegate)}disableNetwork(){return YE(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,vm("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return HE(this._delegate)}onSnapshotsInSync(e){return wT(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new dr(this,Pm(this._delegate,e))}catch(t){throw Me(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ge(this,Li(this._delegate,e))}catch(t){throw Me(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Oe(this,zE(this._delegate,e))}catch(t){throw Me(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return PT(this._delegate,t=>e(new Km(this,t)))}batch(){return xe(this._delegate),new Qm(new bT(this._delegate,e=>Os(this._delegate,e)))}loadBundle(e){return XE(this._delegate,e)}namedQuery(e){return ZE(this._delegate,e).then(t=>t?new Oe(this,t):null)}}class mo extends Gu{constructor(e){super(),this.firestore=e}convertBytes(e){return new Is(new st(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ge.forKey(t,this.firestore,null)}}function LT(r){w_(r)}class Km{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new mo(e)}get(e){const t=ln(e);return this._delegate.get(t).then(n=>new Es(this._firestore,new dt(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const s=ln(e);return n?(Qu("Transaction.set",n),this._delegate.set(s,t,n)):this._delegate.set(s,t),this}update(e,t,n,...s){const i=ln(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,n,...s),this}delete(e){const t=ln(e);return this._delegate.delete(t),this}}class Qm{constructor(e){this._delegate=e}set(e,t,n){const s=ln(e);return n?(Qu("WriteBatch.set",n),this._delegate.set(s,t,n)):this._delegate.set(s,t),this}update(e,t,n,...s){const i=ln(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,n,...s),this}delete(e){const t=ln(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Tn{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new ns(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ts(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Tn.INSTANCES;let s=n.get(e);s||(s=new WeakMap,n.set(e,s));let i=s.get(t);return i||(i=new Tn(e,new mo(e),t),s.set(t,i)),i}}Tn.INSTANCES=new WeakMap;class Ge{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new mo(e)}static forPath(e,t,n){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ge(t,new le(t._delegate,n,new O(e)))}static forKey(e,t,n){return new Ge(t,new le(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new dr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new dr(this.firestore,Pm(this._delegate,e))}catch(t){throw Me(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=_e(e),e instanceof le?Vm(this._delegate,e):!1}set(e,t){t=Qu("DocumentReference.set",t);try{return t?Nh(this._delegate,e,t):Nh(this._delegate,e)}catch(n){throw Me(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?kh(this._delegate,e):kh(this._delegate,e,t,...n)}catch(s){throw Me(s,"updateDoc()","DocumentReference.update()")}}delete(){return TT(this._delegate)}onSnapshot(...e){const t=Wm(e),n=Hm(e,s=>new Es(this.firestore,new dt(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return jm(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=gT(this._delegate):(e==null?void 0:e.source)==="server"?t=_T(this._delegate):t=pT(this._delegate),t.then(n=>new Es(this.firestore,new dt(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new Ge(this.firestore,e?this._delegate.withConverter(Tn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Me(r,e,t){return r.message=r.message.replace(e,t),r}function Wm(r){for(const e of r)if(typeof e=="object"&&!Va(e))return e;return{}}function Hm(r,e){var t,n;let s;return Va(r[0])?s=r[0]:Va(r[1])?s=r[1]:typeof r[0]=="function"?s={next:r[0],error:r[1],complete:r[2]}:s={next:r[1],error:r[2],complete:r[3]},{next:i=>{s.next&&s.next(e(i))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(n=s.complete)===null||n===void 0?void 0:n.bind(s)}}class Es{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ge(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return zm(this._delegate,e._delegate)}}class Ts extends Es{data(e){const t=this._delegate.data(e);return this._delegate._converter||A_(t!==void 0,"Document in a QueryDocumentSnapshot should exist"),t}}class Oe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new mo(e)}where(e,t,n){try{return new Oe(this.firestore,At(this._delegate,iT(e,t,n)))}catch(s){throw Me(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Oe(this.firestore,At(this._delegate,oT(e,t)))}catch(n){throw Me(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Oe(this.firestore,At(this._delegate,aT(e)))}catch(t){throw Me(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Oe(this.firestore,At(this._delegate,uT(e)))}catch(t){throw Me(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Oe(this.firestore,At(this._delegate,cT(...e)))}catch(t){throw Me(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Oe(this.firestore,At(this._delegate,lT(...e)))}catch(t){throw Me(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Oe(this.firestore,At(this._delegate,hT(...e)))}catch(t){throw Me(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Oe(this.firestore,At(this._delegate,dT(...e)))}catch(t){throw Me(t,"endAt()","Query.endAt()")}}isEqual(e){return Cm(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=IT(this._delegate):(e==null?void 0:e.source)==="server"?t=ET(this._delegate):t=yT(this._delegate),t.then(n=>new Ca(this.firestore,new $t(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=Wm(e),n=Hm(e,s=>new Ca(this.firestore,new $t(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return jm(this._delegate,t,n)}withConverter(e){return new Oe(this.firestore,e?this._delegate.withConverter(Tn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class BT{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ts(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ca{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Oe(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ts(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new BT(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new Ts(this._firestore,n))})}isEqual(e){return zm(this._delegate,e._delegate)}}class dr extends Oe{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ge(this.firestore,e):null}doc(e){try{return e===void 0?new Ge(this.firestore,Li(this._delegate)):new Ge(this.firestore,Li(this._delegate,e))}catch(t){throw Me(t,"doc()","CollectionReference.doc()")}}add(e){return vT(this._delegate,e).then(t=>new Ge(this.firestore,t))}isEqual(e){return Vm(this._delegate,e._delegate)}withConverter(e){return new dr(this.firestore,e?this._delegate.withConverter(Tn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ln(r){return X(r,le)}/**
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
 */class Wu{constructor(...e){this._delegate=new qt(...e)}static documentId(){return new Wu(ae.keyField().canonicalString())}isEqual(e){return e=_e(e),e instanceof qt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class an{static serverTimestamp(){const e=CT();return e._methodName="FieldValue.serverTimestamp",new an(e)}static delete(){const e=VT();return e._methodName="FieldValue.delete",new an(e)}static arrayUnion(...e){const t=DT(...e);return t._methodName="FieldValue.arrayUnion",new an(t)}static arrayRemove(...e){const t=xT(...e);return t._methodName="FieldValue.arrayRemove",new an(t)}static increment(e){const t=NT(e);return t._methodName="FieldValue.increment",new an(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const UT={Firestore:Gm,GeoPoint:so,Timestamp:ce,Blob:Is,Transaction:Km,WriteBatch:Qm,DocumentReference:Ge,DocumentSnapshot:Es,Query:Oe,QueryDocumentSnapshot:Ts,QuerySnapshot:Ca,CollectionReference:dr,FieldPath:Wu,FieldValue:an,setLogLevel:LT,CACHE_SIZE_UNLIMITED:GE};function qT(r,e){r.INTERNAL.registerComponent(new dn("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(n,s)},"PUBLIC").setServiceProps(Object.assign({},UT)))}/**
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
 */function $T(r){qT(r,(e,t)=>new Gm(e,t,new FT)),r.registerVersion(kT,OT)}$T(ad);export{ad as f};
