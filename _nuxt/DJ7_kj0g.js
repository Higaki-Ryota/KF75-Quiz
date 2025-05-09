const Ag=()=>{};var Kc={};/**
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
 */const xh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},bg=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],a=r[t++],u=r[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[t++],a=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Nh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,u=a?r[s+1]:0,c=s+2<r.length,h=c?r[s+2]:0,f=i>>2,g=(i&3)<<4|u>>4;let _=(u&15)<<2|h>>6,R=h&63;c||(R=64,a||(_=64)),n.push(t[f],t[g],t[_],t[R])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(xh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):bg(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],u=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const g=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||u==null||h==null||g==null)throw new Rg;const _=i<<2|u>>4;if(n.push(_),h!==64){const R=u<<4&240|h>>2;if(n.push(R),g!==64){const V=h<<6&192|g;n.push(V)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Rg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sg=function(r){const e=xh(r);return Nh.encodeByteArray(e,!0)},gi=function(r){return Sg(r).replace(/\./g,"")},kh=function(r){try{return Nh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function pi(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Pg(t)||(r[t]=pi(r[t],e[t]));return r}function Pg(r){return r!=="__proto__"}/**
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
 */function Va(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vg=()=>Va().__FIREBASE_DEFAULTS__,Cg=()=>{if(typeof process>"u"||typeof Kc>"u")return;const r=Kc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Dg=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&kh(r[1]);return e&&JSON.parse(e)},Oh=()=>{try{return Ag()||Vg()||Cg()||Dg()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Mh=()=>{var r;return(r=Oh())===null||r===void 0?void 0:r.config};/**
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
 */class xg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Ng(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[gi(JSON.stringify(t)),gi(JSON.stringify(a)),""].join(".")}/**
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
 */function _i(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kg(){var r;const e=(r=Oh())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function Og(){return typeof window<"u"||Fh()}function Fh(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Lh(){return!kg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bh(){try{return typeof indexedDB=="object"}catch{return!1}}function Mg(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Fg="FirebaseError";class vn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Fg,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Lg(i,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new vn(s,u,n)}}function Lg(r,e){return r.replace(Bg,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Bg=/\{\$([^}]+)}/g;/**
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
 */function Qc(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function jn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],a=e[s];if(Wc(i)&&Wc(a)){if(!jn(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Wc(r){return r!==null&&typeof r=="object"}function Ug(r,e){const t=new qg(r,e);return t.subscribe.bind(t)}class qg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");zg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Fo),s.error===void 0&&(s.error=Fo),s.complete===void 0&&(s.complete=Fo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zg(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Fo(){}/**
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
 */function _e(r){return r&&r._delegate?r._delegate:r}/**
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
 */function Uh(r){return r.endsWith(".cloudworkstations.dev")}async function $g(r){return(await fetch(r,{credentials:"include"})).ok}class dn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class jg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new xg;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kg(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&a.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Gg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gg(r){return r===Zt?void 0:r}function Kg(r){return r.instantiationMode==="EAGER"}/**
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
 */class qh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Ca=[];var Q;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Q||(Q={}));const zh={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Qg=Q.INFO,Wg={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Hg=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Wg[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Da{constructor(e){this.name=e,this._logLevel=Qg,this._logHandler=Hg,this._userLogHandler=null,Ca.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}function Yg(r){Ca.forEach(e=>{e.setLogLevel(r)})}function Jg(r,e){for(const t of Ca){let n=null;e&&e.level&&(n=zh[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(s,i,...a)=>{const u=a.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(n??s.logLevel)&&r({level:Q[i].toLowerCase(),message:u,args:a,type:s.name})}}}const Xg=(r,e)=>e.some(t=>r instanceof t);let Hc,Yc;function Zg(){return Hc||(Hc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ep(){return Yc||(Yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $h=new WeakMap,Yo=new WeakMap,jh=new WeakMap,Lo=new WeakMap,xa=new WeakMap;function tp(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{t(Pt(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&$h.set(t,r)}).catch(()=>{}),xa.set(e,r),e}function np(r){if(Yo.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});Yo.set(r,e)}let Jo={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Yo.get(r);if(e==="objectStoreNames")return r.objectStoreNames||jh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function rp(r){Jo=r(Jo)}function sp(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Bo(this),e,...t);return jh.set(n,e.sort?e.sort():[e]),Pt(n)}:ep().includes(r)?function(...e){return r.apply(Bo(this),e),Pt($h.get(this))}:function(...e){return Pt(r.apply(Bo(this),e))}}function ip(r){return typeof r=="function"?sp(r):(r instanceof IDBTransaction&&np(r),Xg(r,Zg())?new Proxy(r,Jo):r)}function Pt(r){if(r instanceof IDBRequest)return tp(r);if(Lo.has(r))return Lo.get(r);const e=ip(r);return e!==r&&(Lo.set(r,e),xa.set(e,r)),e}const Bo=r=>xa.get(r);function op(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,e),u=Pt(a);return n&&a.addEventListener("upgradeneeded",c=>{n(Pt(a.result),c.oldVersion,c.newVersion,Pt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),u.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const ap=["get","getKey","getAll","getAllKeys","count"],up=["put","add","delete","clear"],Uo=new Map;function Jc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Uo.get(e))return Uo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=up.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||ap.includes(t)))return;const i=async function(a,...u){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(u.shift())),(await Promise.all([h[t](...u),s&&c.done]))[0]};return Uo.set(e,i),i}rp(r=>({...r,get:(e,t,n)=>Jc(e,t)||r.get(e,t,n),has:(e,t)=>!!Jc(e,t)||r.has(e,t)}));/**
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
 */class cp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lp(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function lp(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yi="@firebase/app",Xo="0.12.1";/**
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
 */const ct=new Da("@firebase/app"),hp="@firebase/app-compat",dp="@firebase/analytics-compat",fp="@firebase/analytics",mp="@firebase/app-check-compat",gp="@firebase/app-check",pp="@firebase/auth",_p="@firebase/auth-compat",yp="@firebase/database",Ip="@firebase/data-connect",Ep="@firebase/database-compat",Tp="@firebase/functions",vp="@firebase/functions-compat",wp="@firebase/installations",Ap="@firebase/installations-compat",bp="@firebase/messaging",Rp="@firebase/messaging-compat",Sp="@firebase/performance",Pp="@firebase/performance-compat",Vp="@firebase/remote-config",Cp="@firebase/remote-config-compat",Dp="@firebase/storage",xp="@firebase/storage-compat",Np="@firebase/firestore",kp="@firebase/vertexai",Op="@firebase/firestore-compat",Mp="firebase",Fp="11.7.1";/**
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
 */const xt="[DEFAULT]",Lp={[yi]:"fire-core",[hp]:"fire-core-compat",[fp]:"fire-analytics",[dp]:"fire-analytics-compat",[gp]:"fire-app-check",[mp]:"fire-app-check-compat",[pp]:"fire-auth",[_p]:"fire-auth-compat",[yp]:"fire-rtdb",[Ip]:"fire-data-connect",[Ep]:"fire-rtdb-compat",[Tp]:"fire-fn",[vp]:"fire-fn-compat",[wp]:"fire-iid",[Ap]:"fire-iid-compat",[bp]:"fire-fcm",[Rp]:"fire-fcm-compat",[Sp]:"fire-perf",[Pp]:"fire-perf-compat",[Vp]:"fire-rc",[Cp]:"fire-rc-compat",[Dp]:"fire-gcs",[xp]:"fire-gcs-compat",[Np]:"fire-fst",[Op]:"fire-fst-compat",[kp]:"fire-vertex","fire-js":"fire-js",[Mp]:"fire-js-all"};/**
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
 */const Nt=new Map,Gn=new Map,Kn=new Map;function es(r,e){try{r.container.addComponent(e)}catch(t){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Gh(r,e){r.container.addOrOverwriteComponent(e)}function Qn(r){const e=r.name;if(Kn.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;Kn.set(e,r);for(const t of Nt.values())es(t,r);for(const t of Gn.values())es(t,r);return!0}function Kh(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Bp(r,e,t=xt){Kh(r,e).clearInstance(t)}function Qh(r){return r.options!==void 0}function Wh(r){return r==null?!1:r.settings!==void 0}function Up(){Kn.clear()}/**
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
 */const qp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ke=new Li("app","Firebase",qp);/**
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
 */let Hh=class{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}};/**
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
 */function Xc(r,e){const t=kh(r.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const s=JSON.parse(t).exp*1e3,i=new Date().getTime();s-i<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class zp extends Hh{constructor(e,t,n,s){const i=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,a={name:n,automaticDataCollectionEnabled:i};if(e.apiKey!==void 0)super(e,a,s);else{const u=e;super(u.options,a,s)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:i},t),this._serverConfig.authIdToken&&Xc(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Xc(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Ze(yi,Xo,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Oa(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Ke.create("server-app-deleted")}}/**
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
 */const Na=Fp;function ka(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:xt,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Ke.create("bad-app-name",{appName:String(s)});if(t||(t=Mh()),!t)throw Ke.create("no-options");const i=Nt.get(s);if(i){if(jn(t,i.options)&&jn(n,i.config))return i;throw Ke.create("duplicate-app",{appName:s})}const a=new qh(s);for(const c of Kn.values())a.addComponent(c);const u=new Hh(t,n,a);return Nt.set(s,u),u}function $p(r,e){if(Og()&&!Fh())throw Ke.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;Qh(r)?t=r.options:t=r;const n=Object.assign(Object.assign({},e),t);n.releaseOnDeref!==void 0&&delete n.releaseOnDeref;const s=h=>[...h].reduce((f,g)=>Math.imul(31,f)+g.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Ke.create("finalization-registry-not-supported",{});const i=""+s(JSON.stringify(n)),a=Gn.get(i);if(a)return a.incRefCount(e.releaseOnDeref),a;const u=new qh(i);for(const h of Kn.values())u.addComponent(h);const c=new zp(t,e,i,u);return Gn.set(i,c),c}function jp(r=xt){const e=Nt.get(r);if(!e&&r===xt&&Mh())return ka();if(!e)throw Ke.create("no-app",{appName:r});return e}function Gp(){return Array.from(Nt.values())}async function Oa(r){let e=!1;const t=r.name;Nt.has(t)?(e=!0,Nt.delete(t)):Gn.has(t)&&r.decRefCount()<=0&&(Gn.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function Ze(r,e,t){var n;let s=(n=Lp[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${e}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(u.join(" "));return}Qn(new dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function Yh(r,e){if(r!==null&&typeof r!="function")throw Ke.create("invalid-log-argument");Jg(r,e)}function Jh(r){Yg(r)}/**
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
 */const Kp="firebase-heartbeat-database",Qp=1,ts="firebase-heartbeat-store";let qo=null;function Xh(){return qo||(qo=op(Kp,Qp,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ts)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ke.create("idb-open",{originalErrorMessage:r.message})})),qo}async function Wp(r){try{const t=(await Xh()).transaction(ts),n=await t.objectStore(ts).get(Zh(r));return await t.done,n}catch(e){if(e instanceof vn)ct.warn(e.message);else{const t=Ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(t.message)}}}async function Zc(r,e){try{const n=(await Xh()).transaction(ts,"readwrite");await n.objectStore(ts).put(e,Zh(r)),await n.done}catch(t){if(t instanceof vn)ct.warn(t.message);else{const n=Ke.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ct.warn(n.message)}}}function Zh(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Hp=1024,Yp=30;class Jp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zp(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=el();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Yp){const a=e_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ct.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=el(),{heartbeatsToSend:n,unsentEntries:s}=Xp(this._heartbeatsCache.heartbeats),i=gi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ct.warn(t),""}}}function el(){return new Date().toISOString().substring(0,10)}function Xp(r,e=Hp){const t=[];let n=r.slice();for(const s of r){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),tl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),tl(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Zp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bh()?Mg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Wp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tl(r){return gi(JSON.stringify({version:2,heartbeats:r})).length}function e_(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function t_(r){Qn(new dn("platform-logger",e=>new cp(e),"PRIVATE")),Qn(new dn("heartbeat",e=>new Jp(e),"PRIVATE")),Ze(yi,Xo,r),Ze(yi,Xo,"esm2017"),Ze("fire-js","")}t_("");const n_=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:vn,SDK_VERSION:Na,_DEFAULT_ENTRY_NAME:xt,_addComponent:es,_addOrOverwriteComponent:Gh,_apps:Nt,_clearComponents:Up,_components:Kn,_getProvider:Kh,_isFirebaseApp:Qh,_isFirebaseServerApp:Wh,_registerComponent:Qn,_removeServiceInstance:Bp,_serverApps:Gn,deleteApp:Oa,getApp:jp,getApps:Gp,initializeApp:ka,initializeServerApp:$p,onLog:Yh,registerVersion:Ze,setLogLevel:Jh},Symbol.toStringTag,{value:"Module"}));var r_="firebase",s_="11.7.1";/**
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
 */Ze(r_,s_,"app");/**
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
 */class i_{constructor(e,t){this._delegate=e,this.firebase=t,es(e,new dn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Oa(this._delegate)))}_getService(e,t=xt){var n;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((n=s.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=xt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){es(this._delegate,e)}_addOrOverwriteComponent(e){Gh(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const o_={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},nl=new Li("app-compat","Firebase",o_);/**
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
 */function a_(r){const e={},t={__esModule:!0,initializeApp:i,app:s,registerVersion:Ze,setLogLevel:Jh,onLog:Yh,apps:null,SDK_VERSION:Na,INTERNAL:{registerComponent:u,removeApp:n,useAsService:c,modularAPIs:n_}};t.default=t,Object.defineProperty(t,"apps",{get:a});function n(h){delete e[h]}function s(h){if(h=h||xt,!Qc(e,h))throw nl.create("no-app",{appName:h});return e[h]}s.App=r;function i(h,f={}){const g=ka(h,f);if(Qc(e,g.name))return e[g.name];const _=new r(g,t);return e[g.name]=_,_}function a(){return Object.keys(e).map(h=>e[h])}function u(h){const f=h.name,g=f.replace("-compat","");if(Qn(h)&&h.type==="PUBLIC"){const _=(R=s())=>{if(typeof R[g]!="function")throw nl.create("invalid-app-argument",{appName:f});return R[g]()};h.serviceProps!==void 0&&pi(_,h.serviceProps),t[g]=_,r.prototype[g]=function(...R){return this._getService.bind(this,f).apply(this,h.multipleInstances?R:[])}}return h.type==="PUBLIC"?t[g]:null}function c(h,f){return f==="serverAuth"?null:f}return t}/**
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
 */function ed(){const r=a_(i_);r.INTERNAL=Object.assign(Object.assign({},r.INTERNAL),{createFirebaseNamespace:ed,extendNamespace:e,createSubscribe:Ug,ErrorFactory:Li,deepExtend:pi});function e(t){pi(r,t)}return r}const u_=ed();/**
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
 */const rl=new Da("@firebase/app-compat"),c_="@firebase/app-compat",l_="0.3.1";/**
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
 */function h_(r){Ze(c_,l_,r)}/**
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
 */try{const r=Va();if(r.firebase!==void 0){rl.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=r.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&rl.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const td=u_;h_();var d_="firebase",f_="11.7.1";/**
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
 */td.registerVersion(d_,f_,"app-compat");var sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vt,nd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,p){function I(){}I.prototype=p.prototype,E.D=p.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(T,v,b){for(var y=Array(arguments.length-2),it=2;it<arguments.length;it++)y[it-2]=arguments[it];return p.prototype[v].apply(T,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,p,I){I||(I=0);var T=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)T[v]=p.charCodeAt(I++)|p.charCodeAt(I++)<<8|p.charCodeAt(I++)<<16|p.charCodeAt(I++)<<24;else for(v=0;16>v;++v)T[v]=p[I++]|p[I++]<<8|p[I++]<<16|p[I++]<<24;p=E.g[0],I=E.g[1],v=E.g[2];var b=E.g[3],y=p+(b^I&(v^b))+T[0]+3614090360&4294967295;p=I+(y<<7&4294967295|y>>>25),y=b+(v^p&(I^v))+T[1]+3905402710&4294967295,b=p+(y<<12&4294967295|y>>>20),y=v+(I^b&(p^I))+T[2]+606105819&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(p^v&(b^p))+T[3]+3250441966&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(b^I&(v^b))+T[4]+4118548399&4294967295,p=I+(y<<7&4294967295|y>>>25),y=b+(v^p&(I^v))+T[5]+1200080426&4294967295,b=p+(y<<12&4294967295|y>>>20),y=v+(I^b&(p^I))+T[6]+2821735955&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(p^v&(b^p))+T[7]+4249261313&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(b^I&(v^b))+T[8]+1770035416&4294967295,p=I+(y<<7&4294967295|y>>>25),y=b+(v^p&(I^v))+T[9]+2336552879&4294967295,b=p+(y<<12&4294967295|y>>>20),y=v+(I^b&(p^I))+T[10]+4294925233&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(p^v&(b^p))+T[11]+2304563134&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(b^I&(v^b))+T[12]+1804603682&4294967295,p=I+(y<<7&4294967295|y>>>25),y=b+(v^p&(I^v))+T[13]+4254626195&4294967295,b=p+(y<<12&4294967295|y>>>20),y=v+(I^b&(p^I))+T[14]+2792965006&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(p^v&(b^p))+T[15]+1236535329&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(v^b&(I^v))+T[1]+4129170786&4294967295,p=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(p^I))+T[6]+3225465664&4294967295,b=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(b^p))+T[11]+643717713&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^p&(v^b))+T[0]+3921069994&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(v^b&(I^v))+T[5]+3593408605&4294967295,p=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(p^I))+T[10]+38016083&4294967295,b=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(b^p))+T[15]+3634488961&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^p&(v^b))+T[4]+3889429448&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(v^b&(I^v))+T[9]+568446438&4294967295,p=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(p^I))+T[14]+3275163606&4294967295,b=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(b^p))+T[3]+4107603335&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^p&(v^b))+T[8]+1163531501&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(v^b&(I^v))+T[13]+2850285829&4294967295,p=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(p^I))+T[2]+4243563512&4294967295,b=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(b^p))+T[7]+1735328473&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^p&(v^b))+T[12]+2368359562&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(I^v^b)+T[5]+4294588738&4294967295,p=I+(y<<4&4294967295|y>>>28),y=b+(p^I^v)+T[8]+2272392833&4294967295,b=p+(y<<11&4294967295|y>>>21),y=v+(b^p^I)+T[11]+1839030562&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^p)+T[14]+4259657740&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(I^v^b)+T[1]+2763975236&4294967295,p=I+(y<<4&4294967295|y>>>28),y=b+(p^I^v)+T[4]+1272893353&4294967295,b=p+(y<<11&4294967295|y>>>21),y=v+(b^p^I)+T[7]+4139469664&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^p)+T[10]+3200236656&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(I^v^b)+T[13]+681279174&4294967295,p=I+(y<<4&4294967295|y>>>28),y=b+(p^I^v)+T[0]+3936430074&4294967295,b=p+(y<<11&4294967295|y>>>21),y=v+(b^p^I)+T[3]+3572445317&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^p)+T[6]+76029189&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(I^v^b)+T[9]+3654602809&4294967295,p=I+(y<<4&4294967295|y>>>28),y=b+(p^I^v)+T[12]+3873151461&4294967295,b=p+(y<<11&4294967295|y>>>21),y=v+(b^p^I)+T[15]+530742520&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^p)+T[2]+3299628645&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(v^(I|~b))+T[0]+4096336452&4294967295,p=I+(y<<6&4294967295|y>>>26),y=b+(I^(p|~v))+T[7]+1126891415&4294967295,b=p+(y<<10&4294967295|y>>>22),y=v+(p^(b|~I))+T[14]+2878612391&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~p))+T[5]+4237533241&4294967295,I=v+(y<<21&4294967295|y>>>11),y=p+(v^(I|~b))+T[12]+1700485571&4294967295,p=I+(y<<6&4294967295|y>>>26),y=b+(I^(p|~v))+T[3]+2399980690&4294967295,b=p+(y<<10&4294967295|y>>>22),y=v+(p^(b|~I))+T[10]+4293915773&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~p))+T[1]+2240044497&4294967295,I=v+(y<<21&4294967295|y>>>11),y=p+(v^(I|~b))+T[8]+1873313359&4294967295,p=I+(y<<6&4294967295|y>>>26),y=b+(I^(p|~v))+T[15]+4264355552&4294967295,b=p+(y<<10&4294967295|y>>>22),y=v+(p^(b|~I))+T[6]+2734768916&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~p))+T[13]+1309151649&4294967295,I=v+(y<<21&4294967295|y>>>11),y=p+(v^(I|~b))+T[4]+4149444226&4294967295,p=I+(y<<6&4294967295|y>>>26),y=b+(I^(p|~v))+T[11]+3174756917&4294967295,b=p+(y<<10&4294967295|y>>>22),y=v+(p^(b|~I))+T[2]+718787259&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~p))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+b&4294967295}n.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var I=p-this.blockSize,T=this.B,v=this.h,b=0;b<p;){if(v==0)for(;b<=I;)s(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<p;)if(T[v++]=E.charCodeAt(b++),v==this.blockSize){s(this,T),v=0;break}}else for(;b<p;)if(T[v++]=E[b++],v==this.blockSize){s(this,T),v=0;break}}this.h=v,this.o+=p},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var I=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=I&255,I/=256;for(this.u(E),E=Array(16),p=I=0;4>p;++p)for(var T=0;32>T;T+=8)E[I++]=this.g[p]>>>T&255;return E};function i(E,p){var I=u;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=p(E)}function a(E,p){this.h=p;for(var I=[],T=!0,v=E.length-1;0<=v;v--){var b=E[v]|0;T&&b==p||(I[v]=b,T=!1)}this.g=I}var u={};function c(E){return-128<=E&&128>E?i(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return x(h(-E));for(var p=[],I=1,T=0;E>=I;T++)p[T]=E/I|0,I*=4294967296;return new a(p,0)}function f(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return x(f(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(p,8)),T=g,v=0;v<E.length;v+=8){var b=Math.min(8,E.length-v),y=parseInt(E.substring(v,v+b),p);8>b?(b=h(Math.pow(p,b)),T=T.j(b).add(h(y))):(T=T.j(I),T=T.add(h(y)))}return T}var g=c(0),_=c(1),R=c(16777216);r=a.prototype,r.m=function(){if(N(this))return-x(this).m();for(var E=0,p=1,I=0;I<this.g.length;I++){var T=this.i(I);E+=(0<=T?T:4294967296+T)*p,p*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(N(this))return"-"+x(this).toString(E);for(var p=h(Math.pow(E,6)),I=this,T="";;){var v=X(I,p).g;I=$(I,v.j(p));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=v,V(I))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function N(E){return E.h==-1}r.l=function(E){return E=$(this,E),N(E)?-1:V(E)?0:1};function x(E){for(var p=E.g.length,I=[],T=0;T<p;T++)I[T]=~E.g[T];return new a(I,~E.h).add(_)}r.abs=function(){return N(this)?x(this):this},r.add=function(E){for(var p=Math.max(this.g.length,E.g.length),I=[],T=0,v=0;v<=p;v++){var b=T+(this.i(v)&65535)+(E.i(v)&65535),y=(b>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);T=y>>>16,b&=65535,y&=65535,I[v]=y<<16|b}return new a(I,I[I.length-1]&-2147483648?-1:0)};function $(E,p){return E.add(x(p))}r.j=function(E){if(V(this)||V(E))return g;if(N(this))return N(E)?x(this).j(x(E)):x(x(this).j(E));if(N(E))return x(this.j(x(E)));if(0>this.l(R)&&0>E.l(R))return h(this.m()*E.m());for(var p=this.g.length+E.g.length,I=[],T=0;T<2*p;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var v=0;v<E.g.length;v++){var b=this.i(T)>>>16,y=this.i(T)&65535,it=E.i(v)>>>16,Tr=E.i(v)&65535;I[2*T+2*v]+=y*Tr,z(I,2*T+2*v),I[2*T+2*v+1]+=b*Tr,z(I,2*T+2*v+1),I[2*T+2*v+1]+=y*it,z(I,2*T+2*v+1),I[2*T+2*v+2]+=b*it,z(I,2*T+2*v+2)}for(T=0;T<p;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=p;T<2*p;T++)I[T]=0;return new a(I,0)};function z(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function U(E,p){this.g=E,this.h=p}function X(E,p){if(V(p))throw Error("division by zero");if(V(E))return new U(g,g);if(N(E))return p=X(x(E),p),new U(x(p.g),x(p.h));if(N(p))return p=X(E,x(p)),new U(x(p.g),p.h);if(30<E.g.length){if(N(E)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var I=_,T=p;0>=T.l(E);)I=ne(I),T=ne(T);var v=H(I,1),b=H(T,1);for(T=H(T,2),I=H(I,2);!V(T);){var y=b.add(T);0>=y.l(E)&&(v=v.add(I),b=y),T=H(T,1),I=H(I,1)}return p=$(E,v.j(p)),new U(v,p)}for(v=g;0<=E.l(p);){for(I=Math.max(1,Math.floor(E.m()/p.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(I),y=b.j(p);N(y)||0<y.l(E);)I-=T,b=h(I),y=b.j(p);V(b)&&(b=_),v=v.add(b),E=$(E,y)}return new U(v,E)}r.A=function(E){return X(this,E).h},r.and=function(E){for(var p=Math.max(this.g.length,E.g.length),I=[],T=0;T<p;T++)I[T]=this.i(T)&E.i(T);return new a(I,this.h&E.h)},r.or=function(E){for(var p=Math.max(this.g.length,E.g.length),I=[],T=0;T<p;T++)I[T]=this.i(T)|E.i(T);return new a(I,this.h|E.h)},r.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),I=[],T=0;T<p;T++)I[T]=this.i(T)^E.i(T);return new a(I,this.h^E.h)};function ne(E){for(var p=E.g.length+1,I=[],T=0;T<p;T++)I[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(I,E.h)}function H(E,p){var I=p>>5;p%=32;for(var T=E.g.length-I,v=[],b=0;b<T;b++)v[b]=0<p?E.i(b+I)>>>p|E.i(b+I+1)<<32-p:E.i(b+I);return new a(v,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,nd=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Vt=a}).apply(typeof sl<"u"?sl:typeof self<"u"?self:typeof window<"u"?window:{});var Xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rd,$r,sd,ii,Zo,id,od,ad;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xs=="object"&&Xs];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(o,l){if(l)e:{var d=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in d))break e;d=d[A]}o=o[o.length-1],m=d[o],l=l(m),l!=m&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,m=!1,A={next:function(){if(!m&&d<o.length){var P=d++;return{value:l(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function g(o,l,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function _(o,l,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function R(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function V(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,A,P){for(var k=Array(arguments.length-2),te=2;te<arguments.length;te++)k[te-2]=arguments[te];return l.prototype[A].apply(m,k)}}function N(o){const l=o.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=o[m];return d}return[]}function x(o,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const A=o.length||0,P=m.length||0;o.length=A+P;for(let k=0;k<P;k++)o[A+k]=m[k]}else o.push(m)}}class ${constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function z(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function X(o){return X[" "](o),o}X[" "]=function(){};var ne=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function H(o,l,d){for(const m in o)l.call(d,o[m],m,o)}function E(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function p(o){const l={};for(const d in o)l[d]=o[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)o[d]=m[d];for(let P=0;P<I.length;P++)d=I[P],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function v(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function b(o){u.setTimeout(()=>{throw o},0)}function y(){var o=fo;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class it{constructor(){this.h=this.g=null}add(l,d){const m=Tr.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Tr=new $(()=>new $m,o=>o.reset());class $m{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let vr,wr=!1,fo=new it,Ku=()=>{const o=u.Promise.resolve(void 0);vr=()=>{o.then(jm)}};var jm=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){b(d)}var l=Tr;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}wr=!1};function _t(){this.s=this.s,this.C=this.C}_t.prototype.s=!1,_t.prototype.ma=function(){this.s||(this.s=!0,this.N())},_t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var Gm=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,l),u.removeEventListener("test",d,l)}catch{}return o}();function Ar(o,l){if(be.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ne){e:{try{X(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Km[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ar.aa.h.call(this)}}V(Ar,be);var Km={2:"touch",3:"pen",4:"mouse"};Ar.prototype.h=function(){Ar.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ns="closure_listenable_"+(1e6*Math.random()|0),Qm=0;function Wm(o,l,d,m,A){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=A,this.key=++Qm,this.da=this.fa=!1}function ks(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Os(o){this.src=o,this.g={},this.h=0}Os.prototype.add=function(o,l,d,m,A){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var k=go(o,l,m,A);return-1<k?(l=o[k],d||(l.fa=!1)):(l=new Wm(l,this.src,P,!!m,A),l.fa=d,o.push(l)),l};function mo(o,l){var d=l.type;if(d in o.g){var m=o.g[d],A=Array.prototype.indexOf.call(m,l,void 0),P;(P=0<=A)&&Array.prototype.splice.call(m,A,1),P&&(ks(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function go(o,l,d,m){for(var A=0;A<o.length;++A){var P=o[A];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==m)return A}return-1}var po="closure_lm_"+(1e6*Math.random()|0),_o={};function Qu(o,l,d,m,A){if(Array.isArray(l)){for(var P=0;P<l.length;P++)Qu(o,l[P],d,m,A);return null}return d=Yu(d),o&&o[Ns]?o.K(l,d,h(m)?!!m.capture:!1,A):Hm(o,l,d,!1,m,A)}function Hm(o,l,d,m,A,P){if(!l)throw Error("Invalid event type");var k=h(A)?!!A.capture:!!A,te=Io(o);if(te||(o[po]=te=new Os(o)),d=te.add(l,d,m,k,P),d.proxy)return d;if(m=Ym(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Gm||(A=k),A===void 0&&(A=!1),o.addEventListener(l.toString(),m,A);else if(o.attachEvent)o.attachEvent(Hu(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ym(){function o(d){return l.call(o.src,o.listener,d)}const l=Jm;return o}function Wu(o,l,d,m,A){if(Array.isArray(l))for(var P=0;P<l.length;P++)Wu(o,l[P],d,m,A);else m=h(m)?!!m.capture:!!m,d=Yu(d),o&&o[Ns]?(o=o.i,l=String(l).toString(),l in o.g&&(P=o.g[l],d=go(P,d,m,A),-1<d&&(ks(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[l],o.h--)))):o&&(o=Io(o))&&(l=o.g[l.toString()],o=-1,l&&(o=go(l,d,m,A)),(d=-1<o?l[o]:null)&&yo(d))}function yo(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Ns])mo(l.i,o);else{var d=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(d,m,o.capture):l.detachEvent?l.detachEvent(Hu(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=Io(l))?(mo(d,o),d.h==0&&(d.src=null,l[po]=null)):ks(o)}}}function Hu(o){return o in _o?_o[o]:_o[o]="on"+o}function Jm(o,l){if(o.da)o=!0;else{l=new Ar(l,this);var d=o.listener,m=o.ha||o.src;o.fa&&yo(o),o=d.call(m,l)}return o}function Io(o){return o=o[po],o instanceof Os?o:null}var Eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yu(o){return typeof o=="function"?o:(o[Eo]||(o[Eo]=function(l){return o.handleEvent(l)}),o[Eo])}function Re(){_t.call(this),this.i=new Os(this),this.M=this,this.F=null}V(Re,_t),Re.prototype[Ns]=!0,Re.prototype.removeEventListener=function(o,l,d,m){Wu(this,o,l,d,m)};function Ne(o,l){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new be(l,o);else if(l instanceof be)l.target=l.target||o;else{var A=l;l=new be(m,o),T(l,A)}if(A=!0,d)for(var P=d.length-1;0<=P;P--){var k=l.g=d[P];A=Ms(k,m,!0,l)&&A}if(k=l.g=o,A=Ms(k,m,!0,l)&&A,A=Ms(k,m,!1,l)&&A,d)for(P=0;P<d.length;P++)k=l.g=d[P],A=Ms(k,m,!1,l)&&A}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],m=0;m<d.length;m++)ks(d[m]);delete o.g[l],o.h--}}this.F=null},Re.prototype.K=function(o,l,d,m){return this.i.add(String(o),l,!1,d,m)},Re.prototype.L=function(o,l,d,m){return this.i.add(String(o),l,!0,d,m)};function Ms(o,l,d,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,P=0;P<l.length;++P){var k=l[P];if(k&&!k.da&&k.capture==d){var te=k.listener,Te=k.ha||k.src;k.fa&&mo(o.i,k),A=te.call(Te,m)!==!1&&A}}return A&&!m.defaultPrevented}function Ju(o,l,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function Xu(o){o.g=Ju(()=>{o.g=null,o.i&&(o.i=!1,Xu(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Xm extends _t{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Xu(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function br(o){_t.call(this),this.h=o,this.g={}}V(br,_t);var Zu=[];function ec(o){H(o.g,function(l,d){this.g.hasOwnProperty(d)&&yo(l)},o),o.g={}}br.prototype.N=function(){br.aa.N.call(this),ec(this)},br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var To=u.JSON.stringify,Zm=u.JSON.parse,eg=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function vo(){}vo.prototype.h=null;function tc(o){return o.h||(o.h=o.i())}function nc(){}var Rr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wo(){be.call(this,"d")}V(wo,be);function Ao(){be.call(this,"c")}V(Ao,be);var Wt={},rc=null;function Fs(){return rc=rc||new Re}Wt.La="serverreachability";function sc(o){be.call(this,Wt.La,o)}V(sc,be);function Sr(o){const l=Fs();Ne(l,new sc(l))}Wt.STAT_EVENT="statevent";function ic(o,l){be.call(this,Wt.STAT_EVENT,o),this.stat=l}V(ic,be);function ke(o){const l=Fs();Ne(l,new ic(l,o))}Wt.Ma="timingevent";function oc(o,l){be.call(this,Wt.Ma,o),this.size=l}V(oc,be);function Pr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function Vr(){this.g=!0}Vr.prototype.xa=function(){this.g=!1};function tg(o,l,d,m,A,P){o.info(function(){if(o.g)if(P)for(var k="",te=P.split("&"),Te=0;Te<te.length;Te++){var Y=te[Te].split("=");if(1<Y.length){var Se=Y[0];Y=Y[1];var Pe=Se.split("_");k=2<=Pe.length&&Pe[1]=="type"?k+(Se+"="+Y+"&"):k+(Se+"=redacted&")}}else k=null;else k=P;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+l+`
`+d+`
`+k})}function ng(o,l,d,m,A,P,k){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+l+`
`+d+`
`+P+" "+k})}function Sn(o,l,d,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+sg(o,d)+(m?" "+m:"")})}function rg(o,l){o.info(function(){return"TIMEOUT: "+l})}Vr.prototype.info=function(){};function sg(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return To(d)}catch{return l}}var Ls={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ac={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},bo;function Bs(){}V(Bs,vo),Bs.prototype.g=function(){return new XMLHttpRequest},Bs.prototype.i=function(){return{}},bo=new Bs;function yt(o,l,d,m){this.j=o,this.i=l,this.l=d,this.R=m||1,this.U=new br(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new uc}function uc(){this.i=null,this.g="",this.h=!1}var cc={},Ro={};function So(o,l,d){o.L=1,o.v=$s(ot(l)),o.m=d,o.P=!0,lc(o,null)}function lc(o,l){o.F=Date.now(),Us(o),o.A=ot(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Ac(d.i,"t",m),o.C=0,d=o.j.J,o.h=new uc,o.g=zc(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Xm(_(o.Y,o,o.g),o.O)),l=o.U,d=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Zu[0]=A.toString()),A=Zu);for(var P=0;P<A.length;P++){var k=Qu(d,A[P],m||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Sr(),tg(o.i,o.u,o.A,o.l,o.R,o.m)}yt.prototype.ca=function(o){o=o.target;const l=this.M;l&&at(o)==3?l.j():this.Y(o)},yt.prototype.Y=function(o){try{if(o==this.g)e:{const Pe=at(this.g);var l=this.g.Ba();const Cn=this.g.Z();if(!(3>Pe)&&(Pe!=3||this.g&&(this.h.h||this.g.oa()||Dc(this.g)))){this.J||Pe!=4||l==7||(l==8||0>=Cn?Sr(3):Sr(2)),Po(this);var d=this.g.Z();this.X=d;t:if(hc(this)){var m=Dc(this.g);o="";var A=m.length,P=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),Cr(this);var k="";break t}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(P&&l==A-1)});m.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=d==200,ng(this.i,this.u,this.A,this.l,this.R,Pe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var te,Te=this.g;if((te=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(te)){var Y=te;break t}}Y=null}if(d=Y)Sn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vo(this,d);else{this.o=!1,this.s=3,ke(12),Ht(this),Cr(this);break e}}if(this.P){d=!0;let Qe;for(;!this.J&&this.C<k.length;)if(Qe=ig(this,k),Qe==Ro){Pe==4&&(this.s=4,ke(14),d=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==cc){this.s=4,ke(15),Sn(this.i,this.l,k,"[Invalid Chunk]"),d=!1;break}else Sn(this.i,this.l,Qe,null),Vo(this,Qe);if(hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||k.length!=0||this.h.h||(this.s=1,ke(16),d=!1),this.o=this.o&&d,!d)Sn(this.i,this.l,k,"[Invalid Chunked Response]"),Ht(this),Cr(this);else if(0<k.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Oo(Se),Se.M=!0,ke(11))}}else Sn(this.i,this.l,k,null),Vo(this,k);Pe==4&&Ht(this),this.o&&!this.J&&(Pe==4?Lc(this.j,this):(this.o=!1,Us(this)))}else vg(this.g),d==400&&0<k.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Ht(this),Cr(this)}}}catch{}finally{}};function hc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ig(o,l){var d=o.C,m=l.indexOf(`
`,d);return m==-1?Ro:(d=Number(l.substring(d,m)),isNaN(d)?cc:(m+=1,m+d>l.length?Ro:(l=l.slice(m,m+d),o.C=m+d,l)))}yt.prototype.cancel=function(){this.J=!0,Ht(this)};function Us(o){o.S=Date.now()+o.I,dc(o,o.I)}function dc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Pr(_(o.ba,o),l)}function Po(o){o.B&&(u.clearTimeout(o.B),o.B=null)}yt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(rg(this.i,this.A),this.L!=2&&(Sr(),ke(17)),Ht(this),this.s=2,Cr(this)):dc(this,this.S-o)};function Cr(o){o.j.G==0||o.J||Lc(o.j,o)}function Ht(o){Po(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,ec(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Vo(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Co(d.h,o))){if(!o.K&&Co(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Hs(d),Qs(d);else break e;ko(d),ke(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Pr(_(d.Za,d),6e3));if(1>=gc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Jt(d,11)}else if((o.K||d.g==o)&&Hs(d),!z(l))for(A=d.Da.g.parse(l),l=0;l<A.length;l++){let Y=A[l];if(d.T=Y[0],Y=Y[1],d.G==2)if(Y[0]=="c"){d.K=Y[1],d.ia=Y[2];const Se=Y[3];Se!=null&&(d.la=Se,d.j.info("VER="+d.la));const Pe=Y[4];Pe!=null&&(d.Aa=Pe,d.j.info("SVER="+d.Aa));const Cn=Y[5];Cn!=null&&typeof Cn=="number"&&0<Cn&&(m=1.5*Cn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Qe=o.g;if(Qe){const Js=Qe.g?Qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Js){var P=m.h;P.g||Js.indexOf("spdy")==-1&&Js.indexOf("quic")==-1&&Js.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Do(P,P.h),P.h=null))}if(m.D){const Mo=Qe.g?Qe.g.getResponseHeader("X-HTTP-Session-Id"):null;Mo&&(m.ya=Mo,se(m.I,m.D,Mo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var k=o;if(m.qa=qc(m,m.J?m.ia:null,m.W),k.K){pc(m.h,k);var te=k,Te=m.L;Te&&(te.I=Te),te.B&&(Po(te),Us(te)),m.g=k}else Mc(m);0<d.i.length&&Ws(d)}else Y[0]!="stop"&&Y[0]!="close"||Jt(d,7);else d.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Jt(d,7):No(d):Y[0]!="noop"&&d.l&&d.l.ta(Y),d.v=0)}}Sr(4)}catch{}}var og=class{constructor(o,l){this.g=o,this.map=l}};function fc(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function gc(o){return o.h?1:o.g?o.g.size:0}function Co(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Do(o,l){o.g?o.g.add(l):o.h=l}function pc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}fc.prototype.cancel=function(){if(this.i=_c(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function _c(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return N(o.i)}function ag(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],d=o.length,m=0;m<d;m++)l.push(o[m]);return l}l=[],d=0;for(m in o)l[d++]=o[m];return l}function ug(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const m in o)l[d++]=m;return l}}}function yc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=ug(o),m=ag(o),A=m.length,P=0;P<A;P++)l.call(void 0,m[P],d&&d[P],o)}var Ic=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cg(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),A=null;if(0<=m){var P=o[d].substring(0,m);A=o[d].substring(m+1)}else P=o[d];l(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Yt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Yt){this.h=o.h,qs(this,o.j),this.o=o.o,this.g=o.g,zs(this,o.s),this.l=o.l;var l=o.i,d=new Nr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Ec(this,d),this.m=o.m}else o&&(l=String(o).match(Ic))?(this.h=!1,qs(this,l[1]||"",!0),this.o=Dr(l[2]||""),this.g=Dr(l[3]||"",!0),zs(this,l[4]),this.l=Dr(l[5]||"",!0),Ec(this,l[6]||"",!0),this.m=Dr(l[7]||"")):(this.h=!1,this.i=new Nr(null,this.h))}Yt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(xr(l,Tc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(xr(l,Tc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(xr(d,d.charAt(0)=="/"?dg:hg,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",xr(d,mg)),o.join("")};function ot(o){return new Yt(o)}function qs(o,l,d){o.j=d?Dr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function zs(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Ec(o,l,d){l instanceof Nr?(o.i=l,gg(o.i,o.h)):(d||(l=xr(l,fg)),o.i=new Nr(l,o.h))}function se(o,l,d){o.i.set(l,d)}function $s(o){return se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Dr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function xr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,lg),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function lg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Tc=/[#\/\?@]/g,hg=/[#\?:]/g,dg=/[#\?]/g,fg=/[#\?@]/g,mg=/#/g;function Nr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function It(o){o.g||(o.g=new Map,o.h=0,o.i&&cg(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=Nr.prototype,r.add=function(o,l){It(this),this.i=null,o=Pn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function vc(o,l){It(o),l=Pn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function wc(o,l){return It(o),l=Pn(o,l),o.g.has(l)}r.forEach=function(o,l){It(this),this.g.forEach(function(d,m){d.forEach(function(A){o.call(l,A,m,this)},this)},this)},r.na=function(){It(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const A=o[m];for(let P=0;P<A.length;P++)d.push(l[m])}return d},r.V=function(o){It(this);let l=[];if(typeof o=="string")wc(this,o)&&(l=l.concat(this.g.get(Pn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},r.set=function(o,l){return It(this),this.i=null,o=Pn(this,o),wc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Ac(o,l,d){vc(o,l),0<d.length&&(o.i=null,o.g.set(Pn(o,l),N(d)),o.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const P=encodeURIComponent(String(m)),k=this.V(m);for(m=0;m<k.length;m++){var A=P;k[m]!==""&&(A+="="+encodeURIComponent(String(k[m]))),o.push(A)}}return this.i=o.join("&")};function Pn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function gg(o,l){l&&!o.j&&(It(o),o.i=null,o.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(vc(this,m),Ac(this,A,d))},o)),o.j=l}function pg(o,l){const d=new Vr;if(u.Image){const m=new Image;m.onload=R(Et,d,"TestLoadImage: loaded",!0,l,m),m.onerror=R(Et,d,"TestLoadImage: error",!1,l,m),m.onabort=R(Et,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=R(Et,d,"TestLoadImage: timeout",!1,l,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function _g(o,l){const d=new Vr,m=new AbortController,A=setTimeout(()=>{m.abort(),Et(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(A),P.ok?Et(d,"TestPingServer: ok",!0,l):Et(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Et(d,"TestPingServer: error",!1,l)})}function Et(o,l,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function yg(){this.g=new eg}function Ig(o,l,d){const m=d||"";try{yc(o,function(A,P){let k=A;h(A)&&(k=To(A)),l.push(m+P+"="+encodeURIComponent(k))})}catch(A){throw l.push(m+"type="+encodeURIComponent("_badmap")),A}}function js(o){this.l=o.Ub||null,this.j=o.eb||!1}V(js,vo),js.prototype.g=function(){return new Gs(this.l,this.j)},js.prototype.i=function(o){return function(){return o}}({});function Gs(o,l){Re.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Gs,Re),r=Gs.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Or(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Or(this)),this.g&&(this.readyState=3,Or(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function bc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?kr(this):Or(this),this.readyState==3&&bc(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,kr(this))},r.Qa=function(o){this.g&&(this.response=o,kr(this))},r.ga=function(){this.g&&kr(this)};function kr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Or(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Or(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Rc(o){let l="";return H(o,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function xo(o,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Rc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):se(o,l,d))}function he(o){Re.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(he,Re);var Eg=/^https?$/i,Tg=["POST","PUT"];r=he.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bo.g(),this.v=this.o?tc(this.o):tc(bo),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){Sc(this,P);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Tg,l,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,k]of d)this.g.setRequestHeader(P,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cc(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Sc(this,P)}};function Sc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Pc(o),Ks(o)}function Pc(o){o.A||(o.A=!0,Ne(o,"complete"),Ne(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ne(this,"complete"),Ne(this,"abort"),Ks(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ks(this,!0)),he.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Vc(this):this.bb())},r.bb=function(){Vc(this)};function Vc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||at(o)!=4||o.Z()!=2)){if(o.u&&at(o)==4)Ju(o.Ea,0,o);else if(Ne(o,"readystatechange"),at(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=k===0){var A=String(o.D).match(Ic)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),m=!Eg.test(A?A.toLowerCase():"")}d=m}if(d)Ne(o,"complete"),Ne(o,"success");else{o.m=6;try{var P=2<at(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Pc(o)}}finally{Ks(o)}}}}function Ks(o,l){if(o.g){Cc(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ne(o,"ready");try{d.onreadystatechange=m}catch{}}}function Cc(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function at(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Zm(l)}};function Dc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function vg(o){const l={};o=(o.g&&2<=at(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(z(o[m]))continue;var d=v(o[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[A]||[];l[A]=P,P.push(d)}E(l,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function xc(o){this.Aa=0,this.i=[],this.j=new Vr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mr("baseRetryDelayMs",5e3,o),this.cb=Mr("retryDelaySeedMs",1e4,o),this.Wa=Mr("forwardChannelMaxRetries",2,o),this.wa=Mr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new fc(o&&o.concurrentRequestLimit),this.Da=new yg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=xc.prototype,r.la=8,r.G=1,r.connect=function(o,l,d,m){ke(0),this.W=o,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=qc(this,null,this.W),Ws(this)};function No(o){if(Nc(o),o.G==3){var l=o.U++,d=ot(o.I);if(se(d,"SID",o.K),se(d,"RID",l),se(d,"TYPE","terminate"),Fr(o,d),l=new yt(o,o.j,l),l.L=2,l.v=$s(ot(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=l.v,d=!0),d||(l.g=zc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Us(l)}Uc(o)}function Qs(o){o.g&&(Oo(o),o.g.cancel(),o.g=null)}function Nc(o){Qs(o),o.u&&(u.clearTimeout(o.u),o.u=null),Hs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Ws(o){if(!mc(o.h)&&!o.s){o.s=!0;var l=o.Ga;vr||Ku(),wr||(vr(),wr=!0),fo.add(l,o),o.B=0}}function wg(o,l){return gc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Pr(_(o.Ga,o,l),Bc(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new yt(this,this.j,o);let P=this.o;if(this.S&&(P?(P=p(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Oc(this,A,l),d=ot(this.I),se(d,"RID",o),se(d,"CVER",22),this.D&&se(d,"X-HTTP-Session-Id",this.D),Fr(this,d),P&&(this.O?l="headers="+encodeURIComponent(String(Rc(P)))+"&"+l:this.m&&xo(d,this.m,P)),Do(this.h,A),this.Ua&&se(d,"TYPE","init"),this.P?(se(d,"$req",l),se(d,"SID","null"),A.T=!0,So(A,d,null)):So(A,d,l),this.G=2}}else this.G==3&&(o?kc(this,o):this.i.length==0||mc(this.h)||kc(this))};function kc(o,l){var d;l?d=l.l:d=o.U++;const m=ot(o.I);se(m,"SID",o.K),se(m,"RID",d),se(m,"AID",o.T),Fr(o,m),o.m&&o.o&&xo(m,o.m,o.o),d=new yt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Oc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Do(o.h,d),So(d,m,l)}function Fr(o,l){o.H&&H(o.H,function(d,m){se(l,m,d)}),o.l&&yc({},function(d,m){se(l,m,d)})}function Oc(o,l,d){d=Math.min(o.i.length,d);var m=o.l?_(o.l.Na,o.l,o):null;e:{var A=o.i;let P=-1;for(;;){const k=["count="+d];P==-1?0<d?(P=A[0].g,k.push("ofs="+P)):P=0:k.push("ofs="+P);let te=!0;for(let Te=0;Te<d;Te++){let Y=A[Te].g;const Se=A[Te].map;if(Y-=P,0>Y)P=Math.max(0,A[Te].g-100),te=!1;else try{Ig(Se,k,"req"+Y+"_")}catch{m&&m(Se)}}if(te){m=k.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,m}function Mc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;vr||Ku(),wr||(vr(),wr=!0),fo.add(l,o),o.v=0}}function ko(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Pr(_(o.Fa,o),Bc(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Fc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Pr(_(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Qs(this),Fc(this))};function Oo(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Fc(o){o.g=new yt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ot(o.qa);se(l,"RID","rpc"),se(l,"SID",o.K),se(l,"AID",o.T),se(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&se(l,"TO",o.ja),se(l,"TYPE","xmlhttp"),Fr(o,l),o.m&&o.o&&xo(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=$s(ot(l)),d.m=null,d.P=!0,lc(d,o)}r.Za=function(){this.C!=null&&(this.C=null,Qs(this),ko(this),ke(19))};function Hs(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Lc(o,l){var d=null;if(o.g==l){Hs(o),Oo(o),o.g=null;var m=2}else if(Co(o.h,l))d=l.D,pc(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;m=Fs(),Ne(m,new oc(m,d)),Ws(o)}else Mc(o);else if(A=l.s,A==3||A==0&&0<l.X||!(m==1&&wg(o,l)||m==2&&ko(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),A){case 1:Jt(o,5);break;case 4:Jt(o,10);break;case 3:Jt(o,6);break;default:Jt(o,2)}}}function Bc(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Jt(o,l){if(o.j.info("Error code "+l),l==2){var d=_(o.fb,o),m=o.Xa;const A=!m;m=new Yt(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||qs(m,"https"),$s(m),A?pg(m.toString(),d):_g(m.toString(),d)}else ke(2);o.G=0,o.l&&o.l.sa(l),Uc(o),Nc(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function Uc(o){if(o.G=0,o.ka=[],o.l){const l=_c(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ka,l),x(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function qc(o,l,d){var m=d instanceof Yt?ot(d):new Yt(d);if(m.g!="")l&&(m.g=l+"."+m.g),zs(m,m.s);else{var A=u.location;m=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var P=new Yt(null);m&&qs(P,m),l&&(P.g=l),A&&zs(P,A),d&&(P.l=d),m=P}return d=o.D,l=o.ya,d&&l&&se(m,d,l),se(m,"VER",o.la),Fr(o,m),m}function zc(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new he(new js({eb:d})):new he(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function $c(){}r=$c.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ys(){}Ys.prototype.g=function(o,l){return new ze(o,l)};function ze(o,l){Re.call(this),this.g=new xc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!z(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!z(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Vn(this)}V(ze,Re),ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){No(this.g)},ze.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=To(o),o=d);l.i.push(new og(l.Ya++,o)),l.G==3&&Ws(l)},ze.prototype.N=function(){this.g.l=null,delete this.j,No(this.g),delete this.g,ze.aa.N.call(this)};function jc(o){wo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}V(jc,wo);function Gc(){Ao.call(this),this.status=1}V(Gc,Ao);function Vn(o){this.g=o}V(Vn,$c),Vn.prototype.ua=function(){Ne(this.g,"a")},Vn.prototype.ta=function(o){Ne(this.g,new jc(o))},Vn.prototype.sa=function(o){Ne(this.g,new Gc)},Vn.prototype.ra=function(){Ne(this.g,"b")},Ys.prototype.createWebChannel=Ys.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,ad=function(){return new Ys},od=function(){return Fs()},id=Wt,Zo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ls.NO_ERROR=0,Ls.TIMEOUT=8,Ls.HTTP_ERROR=6,ii=Ls,ac.COMPLETE="complete",sd=ac,nc.EventType=Rr,Rr.OPEN="a",Rr.CLOSE="b",Rr.ERROR="c",Rr.MESSAGE="d",Re.prototype.listen=Re.prototype.K,$r=nc,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,rd=he}).apply(typeof Xs<"u"?Xs:typeof self<"u"?self:typeof window<"u"?window:{});const il="@firebase/firestore",ol="4.7.12";/**
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
 */let fr="11.7.0";/**
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
 */const kt=new Da("@firebase/firestore");function Fn(){return kt.logLevel}function m_(r){kt.setLogLevel(r)}function D(r,...e){if(kt.logLevel<=Q.DEBUG){const t=e.map(Ma);kt.debug(`Firestore (${fr}): ${r}`,...t)}}function fe(r,...e){if(kt.logLevel<=Q.ERROR){const t=e.map(Ma);kt.error(`Firestore (${fr}): ${r}`,...t)}}function nt(r,...e){if(kt.logLevel<=Q.WARN){const t=e.map(Ma);kt.warn(`Firestore (${fr}): ${r}`,...t)}}function Ma(r){if(typeof r=="string")return r;try{/**
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
 */function F(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,ud(r,n,t)}function ud(r,e,t){let n=`FIRESTORE (${fr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw fe(n),new Error(n)}function L(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||ud(e,s,n)}function g_(r,e){r||F(57014,e)}function M(r,e){return r}/**
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
 */class cd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class p_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ee.UNAUTHENTICATED))}shutdown(){}}class __{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class y_{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){L(this.o===void 0,42304);let n=this.i;const s=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let i=new Ae;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ae,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},u=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ae)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string",31837,{l:n}),new cd(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return L(e===null||typeof e=="string",2055,{h:e}),new Ee(e)}}class I_{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class E_{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new I_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class al{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class T_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wh(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){L(this.o===void 0,3512);const n=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new al(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(L(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new al(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function v_(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */function Fa(){return new TextEncoder}/**
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
 */class ld{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=v_(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function q(r,e){return r<e?-1:r>e?1:0}function ea(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),s=e.codePointAt(t);if(n!==s){if(n<128&&s<128)return q(n,s);{const i=Fa(),a=w_(i.encode(ul(r,t)),i.encode(ul(e,t)));return a!==0?a:q(n,s)}}t+=n>65535?2:1}return q(r.length,e.length)}function ul(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function w_(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return q(r[t],e[t]);return q(r.length,e.length)}function Wn(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function hd(r){return r+"\0"}/**
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
 */const cl=-62135596800,ll=1e6;class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*ll);return new ce(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<cl)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ll}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-cl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const hl="__name__";class He{constructor(e,t,n){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&F(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return He.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof He?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=He.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return q(e.length,t.length)}static compareSegments(e,t){const n=He.isNumericId(e),s=He.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?He.extractNumericId(e).compare(He.extractNumericId(t)):ea(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vt.fromString(e.substring(4,e.length-2))}}class G extends He{construct(e,t,n){return new G(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new G(t)}static emptyPath(){return new G([])}}const A_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends He{construct(e,t,n){return new ae(e,t,n)}static isValidIdentifier(e){return A_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hl}static keyField(){return new ae([hl])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new C(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new C(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(t)}static emptyPath(){return new ae([])}}/**
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
 */const Hn=-1;class Ii{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function ta(r){return r.fields.find(e=>e.kind===2)}function en(r){return r.fields.filter(e=>e.kind!==2)}Ii.UNKNOWN_ID=-1;class oi{constructor(e,t){this.fieldPath=e,this.kind=t}}class ns{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ns(0,je.min())}}function dd(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=B.fromTimestamp(n===1e9?new ce(t+1,0):new ce(t,n));return new je(s,O.empty(),e)}function fd(r){return new je(r.readTime,r.key,Hn)}class je{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new je(B.min(),O.empty(),Hn)}static max(){return new je(B.max(),O.empty(),Hn)}}function La(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(r.documentKey,e.documentKey),t!==0?t:q(r.largestBatchId,e.largestBatchId))}/**
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
 */const md="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $t(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==md)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */const $e="SimpleDb";class Bi{static open(e,t,n,s){try{return new Bi(t,e.transaction(s,n))}catch(i){throw new Qr(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Ae,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Qr(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=Ba(n.target.error);this.S.reject(new Qr(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(D($e,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new R_(t)}}class et{static delete(e){return D($e,"Removing database:",e),nn(Va().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Bh())return!1;if(et.F())return!0;const e=_i(),t=et.M(e),n=0<t&&t<10,s=pd(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,et.M(_i())===12.2&&fe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(D($e,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;t(a)},s.onblocked=()=>{n(new Qr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new C(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new C(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new Qr(e,a))},s.onupgradeneeded=i=>{D($e,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${a.version}`);this.B.q(a,s.transaction,i.oldVersion,this.version).next(()=>{D($e,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const n=t.target;this.L=n.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let a=0;for(;;){++a;try{this.db=await this.k(e);const u=Bi.open(this.db,e,i?"readonly":"readwrite",n),c=s(u).next(h=>(u.v(),h)).catch(h=>(u.abort(h),w.reject(h))).toPromise();return c.catch(()=>{}),await u.D,c}catch(u){const c=u,h=c.name!=="FirebaseError"&&a<3;if(D($e,"Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function pd(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class b_{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return nn(this.K.delete())}}class Qr extends C{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function jt(r){return r.name==="IndexedDbTransactionError"}class R_{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(D($e,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(D($e,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),nn(n)}add(e){return D($e,"ADD",this.store.name,e,e),nn(this.store.add(e))}get(e){return nn(this.store.get(e)).next(t=>(t===void 0&&(t=null),D($e,"GET",this.store.name,e,t),t))}delete(e){return D($e,"DELETE",this.store.name,e),nn(this.store.delete(e))}count(){return D($e,"COUNT",this.store.name),nn(this.store.count())}J(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new w((a,u)=>{i.onerror=c=>{u(c.target.error)},i.onsuccess=c=>{a(c.target.result)}})}{const i=this.cursor(n),a=[];return this.Y(i,(u,c)=>{a.push(c)}).next(()=>a)}}Z(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new w((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}X(e,t){D($e,"DELETE ALL",this.store.name);const n=this.options(e,t);n.ee=!1;const s=this.cursor(n);return this.Y(s,(i,a,u)=>u.delete())}te(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.Y(s,t)}ne(e){const t=this.cursor({});return new w((n,s)=>{t.onerror=i=>{const a=Ba(i.target.error);s(a)},t.onsuccess=i=>{const a=i.target.result;a?e(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}Y(e,t){const n=[];return new w((s,i)=>{e.onerror=a=>{i(a.target.error)},e.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const c=new b_(u),h=t(u.primaryKey,u.value,c);if(h instanceof w){const f=h.catch(g=>(c.done(),w.reject(g)));n.push(f)}c.isDone?s():c.j===null?u.continue():u.continue(c.j)}}).next(()=>w.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.ee?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function nn(r){return new w((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=Ba(n.target.error);t(s)}})}let dl=!1;function Ba(r){const e=et.M(_i());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return dl||(dl=!0,setTimeout(()=>{throw n},0)),n}}return r}const Wr="IndexBackfiller";class S_{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){D(Wr,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();D(Wr,`Documents written: ${t}`)}catch(t){jt(t)?D(Wr,"Ignoring IndexedDB error during index backfill: ",t):await $t(t)}await this.ie(6e4)})}}class P_{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const n=new Set;let s=t,i=!0;return w.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!n.has(a))return D(Wr,`Processing collection: ${a}`),this._e(e,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>t-s)}_e(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.ae(s,i)).next(u=>(D(Wr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(e,t,u))).next(()=>a.size)}))}ae(e,t){let n=e;return t.changes.forEach((s,i)=>{const a=fd(i);La(a,n)>0&&(n=a)}),new je(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */const Ct=-1;function Is(r){return r==null}function rs(r){return r===0&&1/r==-1/0}function _d(r){return typeof r=="number"&&Number.isInteger(r)&&!rs(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ei="";function De(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=fl(e)),e=V_(r.get(t),e);return fl(e)}function V_(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case Ei:t+="";break;default:t+=i}}return t}function fl(r){return r+Ei+""}function Je(r){const e=r.length;if(L(e>=2,64408,{path:r}),e===2)return L(r.charAt(0)===Ei&&r.charAt(1)==="",56145,{path:r}),G.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const a=r.indexOf(Ei,i);switch((a<0||a>t)&&F(50515,{path:r}),r.charAt(a+1)){case"":const u=r.substring(i,a);let c;s.length===0?c=u:(s+=u,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:F(61167,{path:r})}i=a+2}return new G(n)}/**
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
 */const tn="remoteDocuments",Es="owner",Dn="owner",ss="mutationQueues",C_="userId",We="mutations",ml="batchId",un="userMutationsIndex",gl=["userId","batchId"];/**
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
 */function ai(r,e){return[r,De(e)]}function yd(r,e,t){return[r,De(e),t]}const D_={},Yn="documentMutations",Ti="remoteDocumentsV14",x_=["prefixPath","collectionGroup","readTime","documentId"],ui="documentKeyIndex",N_=["prefixPath","collectionGroup","documentId"],Id="collectionGroupIndex",k_=["collectionGroup","readTime","prefixPath","documentId"],is="remoteDocumentGlobal",na="remoteDocumentGlobalKey",Jn="targets",Ed="queryTargetsIndex",O_=["canonicalId","targetId"],Xn="targetDocuments",M_=["targetId","path"],Ua="documentTargetsIndex",F_=["path","targetId"],vi="targetGlobalKey",hn="targetGlobal",os="collectionParents",L_=["collectionId","parent"],Zn="clientMetadata",B_="clientId",Ui="bundles",U_="bundleId",qi="namedQueries",q_="name",qa="indexConfiguration",z_="indexId",ra="collectionGroupIndex",$_="collectionGroup",wi="indexState",j_=["indexId","uid"],Td="sequenceNumberIndex",G_=["uid","sequenceNumber"],Ai="indexEntries",K_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],vd="documentKeyIndex",Q_=["indexId","uid","orderedDocumentKey"],zi="documentOverlays",W_=["userId","collectionPath","documentId"],sa="collectionPathOverlayIndex",H_=["userId","collectionPath","largestBatchId"],wd="collectionGroupOverlayIndex",Y_=["userId","collectionGroup","largestBatchId"],za="globals",J_="name",Ad=[ss,We,Yn,tn,Jn,Es,hn,Xn,Zn,is,os,Ui,qi],X_=[...Ad,zi],bd=[ss,We,Yn,Ti,Jn,Es,hn,Xn,Zn,is,os,Ui,qi,zi],Rd=bd,$a=[...Rd,qa,wi,Ai],Z_=$a,ey=[...$a,za];/**
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
 */class ia extends gd{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function ye(r,e){const t=M(r);return et.N(t.he,e)}/**
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
 */function pl(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Gt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Sd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class re{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zs(this.root,e,this.comparator,!0)}}class Zs{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??ve.RED,this.left=s??ve.EMPTY,this.right=i??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new ve(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ve.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ee{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _l(this.data.getIterator())}getIteratorFrom(e){return new _l(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ee(this.comparator);return t.data=e,t}}class _l{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function xn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Pd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function ty(){return typeof atob<"u"}/**
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
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Pd("Invalid base64 string: "+i):i}}(e);return new de(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const ny=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lt(r){if(L(!!r,39018),typeof r=="string"){let e=0;const t=ny.exec(r);if(L(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:oe(r.seconds),nanos:oe(r.nanos)}}function oe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ht(r){return typeof r=="string"?de.fromBase64String(r):de.fromUint8Array(r)}/**
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
 */const Vd="server_timestamp",Cd="__type__",Dd="__previous_value__",xd="__local_write_time__";function $i(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Cd])===null||t===void 0?void 0:t.stringValue)===Vd}function ji(r){const e=r.mapValue.fields[Dd];return $i(e)?ji(e):e}function as(r){const e=lt(r.mapValue.fields[xd].timestampValue);return new ce(e.seconds,e.nanos)}/**
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
 */class ry{constructor(e,t,n,s,i,a,u,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const oa="(default)";class Ot{constructor(e,t){this.projectId=e,this.database=t||oa}static empty(){return new Ot("","")}get isDefaultDatabase(){return this.database===oa}isEqual(e){return e instanceof Ot&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ja="__type__",Nd="__max__",Rt={mapValue:{fields:{__type__:{stringValue:Nd}}}},Ga="__vector__",er="value",ci={nullValue:"NULL_VALUE"};function Mt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?$i(r)?4:kd(r)?9007199254740991:Gi(r)?10:11:F(28295,{value:r})}function rt(r,e){if(r===e)return!0;const t=Mt(r);if(t!==Mt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return as(r).isEqual(as(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=lt(s.timestampValue),u=lt(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return ht(s.bytesValue).isEqual(ht(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return oe(s.geoPointValue.latitude)===oe(i.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return oe(s.integerValue)===oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=oe(s.doubleValue),u=oe(i.doubleValue);return a===u?rs(a)===rs(u):isNaN(a)&&isNaN(u)}return!1}(r,e);case 9:return Wn(r.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(pl(a)!==pl(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!rt(a[c],u[c])))return!1;return!0}(r,e);default:return F(52216,{left:r})}}function us(r,e){return(r.values||[]).find(t=>rt(t,e))!==void 0}function Ft(r,e){if(r===e)return 0;const t=Mt(r),n=Mt(e);if(t!==n)return q(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,e.booleanValue);case 2:return function(i,a){const u=oe(i.integerValue||i.doubleValue),c=oe(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,e);case 3:return yl(r.timestampValue,e.timestampValue);case 4:return yl(as(r),as(e));case 5:return ea(r.stringValue,e.stringValue);case 6:return function(i,a){const u=ht(i),c=ht(a);return u.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(i,a){const u=i.split("/"),c=a.split("/");for(let h=0;h<u.length&&h<c.length;h++){const f=q(u[h],c[h]);if(f!==0)return f}return q(u.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,a){const u=q(oe(i.latitude),oe(a.latitude));return u!==0?u:q(oe(i.longitude),oe(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Il(r.arrayValue,e.arrayValue);case 10:return function(i,a){var u,c,h,f;const g=i.fields||{},_=a.fields||{},R=(u=g[er])===null||u===void 0?void 0:u.arrayValue,V=(c=_[er])===null||c===void 0?void 0:c.arrayValue,N=q(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Il(R,V)}(r.mapValue,e.mapValue);case 11:return function(i,a){if(i===Rt.mapValue&&a===Rt.mapValue)return 0;if(i===Rt.mapValue)return 1;if(a===Rt.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const _=ea(c[g],f[g]);if(_!==0)return _;const R=Ft(u[c[g]],h[f[g]]);if(R!==0)return R}return q(c.length,f.length)}(r.mapValue,e.mapValue);default:throw F(23264,{Pe:t})}}function yl(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return q(r,e);const t=lt(r),n=lt(e),s=q(t.seconds,n.seconds);return s!==0?s:q(t.nanos,n.nanos)}function Il(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Ft(t[s],n[s]);if(i)return i}return q(t.length,n.length)}function tr(r){return aa(r)}function aa(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=lt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return ht(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return O.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=aa(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${aa(t.fields[a])}`;return s+"}"}(r.mapValue):F(61005,{value:r})}function li(r){switch(Mt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ji(r);return e?16+li(e):16;case 5:return 2*r.stringValue.length;case 6:return ht(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+li(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Gt(n.fields,(i,a)=>{s+=i.length+li(a)}),s}(r.mapValue);default:throw F(13486,{value:r})}}function fn(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ua(r){return!!r&&"integerValue"in r}function cs(r){return!!r&&"arrayValue"in r}function El(r){return!!r&&"nullValue"in r}function Tl(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function hi(r){return!!r&&"mapValue"in r}function Gi(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[ja])===null||t===void 0?void 0:t.stringValue)===Ga}function Hr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Gt(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Hr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Hr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function kd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Nd}const Od={mapValue:{fields:{[ja]:{stringValue:Ga},[er]:{arrayValue:{}}}}};function sy(r){return"nullValue"in r?ci:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?fn(Ot.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Gi(r)?Od:{mapValue:{}}:F(35942,{value:r})}function iy(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?fn(Ot.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Od:"mapValue"in r?Gi(r)?{mapValue:{}}:Rt:F(61959,{value:r})}function vl(r,e){const t=Ft(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function wl(r,e){const t=Ft(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class we{constructor(e){this.value=e}static empty(){return new we({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!hi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hr(t)}setAll(e){let t=ae.emptyPath(),n={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const c=this.getFieldsMap(t);this.applyChanges(c,n,s),n={},s=[],t=u.popLast()}a?n[u.lastSegment()]=Hr(a):s.push(u.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());hi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];hi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Gt(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new we(Hr(this.value))}}function Md(r){const e=[];return Gt(r.fields,(t,n)=>{const s=new ae([t]);if(hi(n)){const i=Md(n.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ue(e)}/**
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
 */class Lt{constructor(e,t){this.position=e,this.inclusive=t}}function Al(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],a=r.position[s];if(i.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),t.key):n=Ft(a,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function bl(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!rt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ls{constructor(e,t="asc"){this.field=e,this.dir=t}}function oy(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Fd{}class K extends Fd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new ay(e,t,n):t==="array-contains"?new ly(e,n):t==="in"?new $d(e,n):t==="not-in"?new hy(e,n):t==="array-contains-any"?new dy(e,n):new K(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new uy(e,n):new cy(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ft(t,this.value)):t!==null&&Mt(this.value)===Mt(t)&&this.matchesComparison(Ft(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Z extends Fd{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Z(e,t)}matches(e){return nr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function nr(r){return r.op==="and"}function ca(r){return r.op==="or"}function Ka(r){return Ld(r)&&nr(r)}function Ld(r){for(const e of r.filters)if(e instanceof Z)return!1;return!0}function la(r){if(r instanceof K)return r.field.canonicalString()+r.op.toString()+tr(r.value);if(Ka(r))return r.filters.map(e=>la(e)).join(",");{const e=r.filters.map(t=>la(t)).join(",");return`${r.op}(${e})`}}function Bd(r,e){return r instanceof K?function(n,s){return s instanceof K&&n.op===s.op&&n.field.isEqual(s.field)&&rt(n.value,s.value)}(r,e):r instanceof Z?function(n,s){return s instanceof Z&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&Bd(a,s.filters[u]),!0):!1}(r,e):void F(19439)}function Ud(r,e){const t=r.filters.concat(e);return Z.create(t,r.op)}function qd(r){return r instanceof K?function(t){return`${t.field.canonicalString()} ${t.op} ${tr(t.value)}`}(r):r instanceof Z?function(t){return t.op.toString()+" {"+t.getFilters().map(qd).join(" ,")+"}"}(r):"Filter"}class ay extends K{constructor(e,t,n){super(e,t,n),this.key=O.fromName(n.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class uy extends K{constructor(e,t){super(e,"in",t),this.keys=zd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class cy extends K{constructor(e,t){super(e,"not-in",t),this.keys=zd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function zd(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>O.fromName(n.referenceValue))}class ly extends K{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cs(t)&&us(t.arrayValue,this.value)}}class $d extends K{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&us(this.value.arrayValue,t)}}class hy extends K{constructor(e,t){super(e,"not-in",t)}matches(e){if(us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!us(this.value.arrayValue,t)}}class dy extends K{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>us(this.value.arrayValue,n))}}/**
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
 */class fy{constructor(e,t=null,n=[],s=[],i=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Ie=null}}function ha(r,e=null,t=[],n=[],s=null,i=null,a=null){return new fy(r,e,t,n,s,i,a)}function mn(r){const e=M(r);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>la(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Is(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>tr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>tr(n)).join(",")),e.Ie=t}return e.Ie}function Ts(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!oy(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Bd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!bl(r.startAt,e.startAt)&&bl(r.endAt,e.endAt)}function bi(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ri(r,e){return r.filters.filter(t=>t instanceof K&&t.field.isEqual(e))}function Rl(r,e,t){let n=ci,s=!0;for(const i of Ri(r,e)){let a=ci,u=!0;switch(i.op){case"<":case"<=":a=sy(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=ci}vl({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const a=t.position[i];vl({value:n,inclusive:s},{value:a,inclusive:t.inclusive})<0&&(n=a,s=t.inclusive);break}}return{value:n,inclusive:s}}function Sl(r,e,t){let n=Rt,s=!0;for(const i of Ri(r,e)){let a=Rt,u=!0;switch(i.op){case">=":case">":a=iy(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=Rt}wl({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const a=t.position[i];wl({value:n,inclusive:s},{value:a,inclusive:t.inclusive})>0&&(n=a,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class ft{constructor(e,t=null,n=[],s=[],i=null,a="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function jd(r,e,t,n,s,i,a,u){return new ft(r,e,t,n,s,i,a,u)}function mr(r){return new ft(r)}function Pl(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Qa(r){return r.collectionGroup!==null}function zn(r){const e=M(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ee(ae.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(u=u.add(h.field))})}),u})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ls(i,n))}),t.has(ae.keyField().canonicalString())||e.Ee.push(new ls(ae.keyField(),n))}return e.Ee}function Fe(r){const e=M(r);return e.de||(e.de=my(e,zn(r))),e.de}function my(r,e){if(r.limitType==="F")return ha(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ls(s.field,i)});const t=r.endAt?new Lt(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Lt(r.startAt.position,r.startAt.inclusive):null;return ha(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function da(r,e){const t=r.filters.concat([e]);return new ft(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Si(r,e,t){return new ft(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function vs(r,e){return Ts(Fe(r),Fe(e))&&r.limitType===e.limitType}function Gd(r){return`${mn(Fe(r))}|lt:${r.limitType}`}function Ln(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>qd(s)).join(", ")}]`),Is(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>tr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>tr(s)).join(",")),`Target(${n})`}(Fe(r))}; limitType=${r.limitType})`}function ws(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of zn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(a,u,c){const h=Al(a,u,c);return a.inclusive?h<=0:h<0}(n.startAt,zn(n),s)||n.endAt&&!function(a,u,c){const h=Al(a,u,c);return a.inclusive?h>=0:h>0}(n.endAt,zn(n),s))}(r,e)}function Kd(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Qd(r){return(e,t)=>{let n=!1;for(const s of zn(r)){const i=gy(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function gy(r,e,t){const n=r.field.isKeyField()?O.comparator(e.key,t.key):function(i,a,u){const c=a.data.field(i),h=u.data.field(i);return c!==null&&h!==null?Ft(c,h):F(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F(19790,{direction:r.dir})}}/**
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
 */class mt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gt(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return Sd(this.inner)}size(){return this.innerSize}}/**
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
 */const py=new re(O.comparator);function qe(){return py}const Wd=new re(O.comparator);function jr(...r){let e=Wd;for(const t of r)e=e.insert(t.key,t);return e}function Hd(r){let e=Wd;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Xe(){return Yr()}function Yd(){return Yr()}function Yr(){return new mt(r=>r.toString(),(r,e)=>r.isEqual(e))}const _y=new re(O.comparator),yy=new ee(O.comparator);function j(...r){let e=yy;for(const t of r)e=e.add(t);return e}const Iy=new ee(q);function Wa(){return Iy}/**
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
 */function Ha(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rs(e)?"-0":e}}function Jd(r){return{integerValue:""+r}}function Xd(r,e){return _d(e)?Jd(e):Ha(r,e)}/**
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
 */class Ki{constructor(){this._=void 0}}function Ey(r,e,t){return r instanceof rr?function(s,i){const a={fields:{[Cd]:{stringValue:Vd},[xd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$i(i)&&(i=ji(i)),i&&(a.fields[Dd]=i),{mapValue:a}}(t,e):r instanceof gn?ef(r,e):r instanceof pn?tf(r,e):function(s,i){const a=Zd(s,i),u=Vl(a)+Vl(s.Re);return ua(a)&&ua(s.Re)?Jd(u):Ha(s.serializer,u)}(r,e)}function Ty(r,e,t){return r instanceof gn?ef(r,e):r instanceof pn?tf(r,e):t}function Zd(r,e){return r instanceof sr?function(n){return ua(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class rr extends Ki{}class gn extends Ki{constructor(e){super(),this.elements=e}}function ef(r,e){const t=nf(e);for(const n of r.elements)t.some(s=>rt(s,n))||t.push(n);return{arrayValue:{values:t}}}class pn extends Ki{constructor(e){super(),this.elements=e}}function tf(r,e){let t=nf(e);for(const n of r.elements)t=t.filter(s=>!rt(s,n));return{arrayValue:{values:t}}}class sr extends Ki{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Vl(r){return oe(r.integerValue||r.doubleValue)}function nf(r){return cs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class As{constructor(e,t){this.field=e,this.transform=t}}function vy(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof gn&&s instanceof gn||n instanceof pn&&s instanceof pn?Wn(n.elements,s.elements,rt):n instanceof sr&&s instanceof sr?rt(n.Re,s.Re):n instanceof rr&&s instanceof rr}(r.transform,e.transform)}class wy{constructor(e,t){this.version=e,this.transformResults=t}}class ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ue}static exists(e){return new ue(void 0,e)}static updateTime(e){return new ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function di(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Qi{}function rf(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new pr(r.key,ue.none()):new gr(r.key,r.data,ue.none());{const t=r.data,n=we.empty();let s=new ee(ae.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new gt(r.key,n,new Ue(s.toArray()),ue.none())}}function Ay(r,e,t){r instanceof gr?function(s,i,a){const u=s.value.clone(),c=Dl(s.fieldTransforms,i,a.transformResults);u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):r instanceof gt?function(s,i,a){if(!di(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Dl(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(sf(s)),c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Jr(r,e,t,n){return r instanceof gr?function(i,a,u,c){if(!di(i.precondition,a))return u;const h=i.value.clone(),f=xl(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof gt?function(i,a,u,c){if(!di(i.precondition,a))return u;const h=xl(i.fieldTransforms,c,a),f=a.data;return f.setAll(sf(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,e,t,n):function(i,a,u){return di(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,e,t)}function by(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Zd(n.transform,s||null);i!=null&&(t===null&&(t=we.empty()),t.set(n.field,i))}return t||null}function Cl(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Wn(n,s,(i,a)=>vy(i,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class gr extends Qi{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class gt extends Qi{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sf(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Dl(r,e,t){const n=new Map;L(r.length===t.length,32656,{Ve:t.length,me:r.length});for(let s=0;s<t.length;s++){const i=r[s],a=i.transform,u=e.data.field(i.field);n.set(i.field,Ty(a,u,t[s]))}return n}function xl(r,e,t){const n=new Map;for(const s of r){const i=s.transform,a=t.data.field(s.field);n.set(s.field,Ey(i,a,e))}return n}class pr extends Qi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ya extends Qi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ja{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Ay(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Jr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Jr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Yd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=t.has(s.key)?null:u;const c=rf(a,u);c!==null&&n.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(B.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),j())}isEqual(e){return this.batchId===e.batchId&&Wn(this.mutations,e.mutations,(t,n)=>Cl(t,n))&&Wn(this.baseMutations,e.baseMutations,(t,n)=>Cl(t,n))}}class Xa{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){L(e.mutations.length===n.length,58842,{fe:e.mutations.length,ge:n.length});let s=function(){return _y}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new Xa(e,t,n,s)}}/**
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
 */class Za{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ry{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var pe,W;function of(r){switch(r){case S.OK:return F(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return F(15467,{code:r})}}function af(r){if(r===void 0)return fe("GRPC error has no .code"),S.UNKNOWN;switch(r){case pe.OK:return S.OK;case pe.CANCELLED:return S.CANCELLED;case pe.UNKNOWN:return S.UNKNOWN;case pe.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case pe.INTERNAL:return S.INTERNAL;case pe.UNAVAILABLE:return S.UNAVAILABLE;case pe.UNAUTHENTICATED:return S.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case pe.NOT_FOUND:return S.NOT_FOUND;case pe.ALREADY_EXISTS:return S.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return S.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case pe.ABORTED:return S.ABORTED;case pe.OUT_OF_RANGE:return S.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return S.UNIMPLEMENTED;case pe.DATA_LOSS:return S.DATA_LOSS;default:return F(39323,{code:r})}}(W=pe||(pe={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Sy=new Vt([4294967295,4294967295],0);function Nl(r){const e=Fa().encode(r),t=new nd;return t.update(e),new Uint8Array(t.digest())}function kl(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vt([t,n],0),new Vt([s,i],0)]}class eu{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Gr(`Invalid padding: ${t}`);if(n<0)throw new Gr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Gr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Gr(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Vt.fromNumber(this.pe)}we(e,t,n){let s=e.add(t.multiply(Vt.fromNumber(n)));return s.compare(Sy)===1&&(s=new Vt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Nl(e),[n,s]=kl(t);for(let i=0;i<this.hashCount;i++){const a=this.we(n,s,i);if(!this.be(a))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new eu(i,s,t);return n.forEach(u=>a.insert(u)),a}insert(e){if(this.pe===0)return;const t=Nl(e),[n,s]=kl(t);for(let i=0;i<this.hashCount;i++){const a=this.we(n,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Gr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class bs{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Rs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new bs(B.min(),s,new re(q),qe(),j())}}class Rs{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Rs(n,t,j(),j(),j())}}/**
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
 */class fi{constructor(e,t,n,s){this.De=e,this.removedTargetIds=t,this.key=n,this.ve=s}}class uf{constructor(e,t){this.targetId=e,this.Ce=t}}class cf{constructor(e,t,n=de.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Ol{constructor(){this.Fe=0,this.Me=Ml(),this.xe=de.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=j(),t=j(),n=j();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:F(38017,{changeType:i})}}),new Rs(this.xe,this.Oe,e,t,n)}Qe(){this.Ne=!1,this.Me=Ml()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,L(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Py{constructor(e){this.ze=e,this.je=new Map,this.He=qe(),this.Je=ei(),this.Ye=ei(),this.Ze=new re(q)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const n=this.rt(t);switch(e.state){case 0:this.it(t)&&n.ke(e.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(e.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(t);break;case 3:this.it(t)&&(n.Ge(),n.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),n.ke(e.resumeToken));break;default:F(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((n,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,n=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(bi(i))if(n===0){const a=new O(i.path);this.tt(t,a,ie.newNoDocument(a,B.min()))}else L(n===1,20013,{expectedCount:n});else{const a=this.ut(t);if(a!==n){const u=this.ct(e),c=u?this.lt(u,e,a):1;if(c!==0){this.st(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let a,u;try{a=ht(n).toUint8Array()}catch(c){if(c instanceof Pd)return nt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new eu(a,s,i)}catch(c){return nt(c instanceof Gr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.pe===0?null:u}lt(e,t,n){return t.Ce.count===n-this.Tt(e,t.targetId)?0:2}Tt(e,t){const n=this.ze.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const a=this.ze.Pt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,a)=>{const u=this._t(a);if(u){if(i.current&&bi(u.target)){const c=new O(u.target.path);this.Et(c).has(a)||this.dt(a,c)||this.tt(a,c,ie.newNoDocument(c,e))}i.Le&&(t.set(a,i.qe()),i.Qe())}});let n=j();this.Ye.forEach((i,a)=>{let u=!0;a.forEachWhile(c=>{const h=this._t(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.He.forEach((i,a)=>a.setReadTime(e));const s=new bs(e,t,this.Ze,this.He,n);return this.He=qe(),this.Je=ei(),this.Ye=ei(),this.Ze=new re(q),s}et(e,t){if(!this.it(e))return;const n=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,n),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,n){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),n&&(this.He=this.He.insert(t,n))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Ol,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new ee(q),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ee(q),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Ol),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ei(){return new re(O.comparator)}function Ml(){return new re(O.comparator)}const Vy={asc:"ASCENDING",desc:"DESCENDING"},Cy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dy={and:"AND",or:"OR"};class xy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fa(r,e){return r.useProto3Json||Is(e)?e:{value:e}}function ir(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Ny(r,e){return ir(r,e.toTimestamp())}function me(r){return L(!!r,49232),B.fromTimestamp(function(t){const n=lt(t);return new ce(n.seconds,n.nanos)}(r))}function tu(r,e){return ma(r,e).canonicalString()}function ma(r,e){const t=function(s){return new G(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function hf(r){const e=G.fromString(r);return L(Tf(e),10190,{key:e.toString()}),e}function hs(r,e){return tu(r.databaseId,e.path)}function tt(r,e){const t=hf(e);if(t.get(1)!==r.databaseId.projectId)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new O(mf(t))}function df(r,e){return tu(r.databaseId,e)}function ff(r){const e=hf(r);return e.length===4?G.emptyPath():mf(e)}function ga(r){return new G(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function mf(r){return L(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Fl(r,e,t){return{name:hs(r,e),fields:t.value.mapValue.fields}}function gf(r,e,t){const n=tt(r,e.name),s=me(e.updateTime),i=e.createTime?me(e.createTime):B.min(),a=new we({mapValue:{fields:e.fields}}),u=ie.newFoundDocument(n,s,i,a);return t&&u.setHasCommittedMutations(),t?u.setHasCommittedMutations():u}function ky(r,e){return"found"in e?function(n,s){L(!!s.found,43571),s.found.name,s.found.updateTime;const i=tt(n,s.found.name),a=me(s.found.updateTime),u=s.found.createTime?me(s.found.createTime):B.min(),c=new we({mapValue:{fields:s.found.fields}});return ie.newFoundDocument(i,a,u,c)}(r,e):"missing"in e?function(n,s){L(!!s.missing,3894),L(!!s.readTime,22933);const i=tt(n,s.missing),a=me(s.readTime);return ie.newNoDocument(i,a)}(r,e):F(7234,{result:e})}function Oy(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(L(f===void 0||typeof f=="string",58123),de.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),de.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(h){const f=h.code===void 0?S.UNKNOWN:af(h.code);return new C(f,h.message||"")}(a);t=new cf(n,s,i,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=tt(r,n.document.name),i=me(n.document.updateTime),a=n.document.createTime?me(n.document.createTime):B.min(),u=new we({mapValue:{fields:n.document.fields}}),c=ie.newFoundDocument(s,i,a,u),h=n.targetIds||[],f=n.removedTargetIds||[];t=new fi(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=tt(r,n.document),i=n.readTime?me(n.readTime):B.min(),a=ie.newNoDocument(s,i),u=n.removedTargetIds||[];t=new fi([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=tt(r,n.document),i=n.removedTargetIds||[];t=new fi([],i,s,null)}else{if(!("filter"in e))return F(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Ry(s,i),u=n.targetId;t=new uf(u,a)}}return t}function ds(r,e){let t;if(e instanceof gr)t={update:Fl(r,e.key,e.value)};else if(e instanceof pr)t={delete:hs(r,e.key)};else if(e instanceof gt)t={update:Fl(r,e.key,e.data),updateMask:qy(e.fieldMask)};else{if(!(e instanceof Ya))return F(16599,{ft:e.type});t={verify:hs(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof rr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof gn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof pn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof sr)return{fieldPath:a.field.canonicalString(),increment:u.Re};throw F(20930,{transform:a.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ny(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F(27497)}(r,e.precondition)),t}function pa(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?ue.updateTime(me(i.updateTime)):i.exists!==void 0?ue.exists(i.exists):ue.none()}(e.currentDocument):ue.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(a,u){let c=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),c=new rr;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new gn(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new pn(f)}else"increment"in u?c=new sr(a,u.increment):F(16584,{proto:u});const h=ae.fromServerFormat(u.fieldPath);return new As(h,c)}(r,s)):[];if(e.update){e.update.name;const s=tt(r,e.update.name),i=new we({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(c){const h=c.fieldPaths||[];return new Ue(h.map(f=>ae.fromServerFormat(f)))}(e.updateMask);return new gt(s,i,a,t,n)}return new gr(s,i,t,n)}if(e.delete){const s=tt(r,e.delete);return new pr(s,t)}if(e.verify){const s=tt(r,e.verify);return new Ya(s,t)}return F(1463,{proto:e})}function My(r,e){return r&&r.length>0?(L(e!==void 0,14353),r.map(t=>function(s,i){let a=s.updateTime?me(s.updateTime):me(i);return a.isEqual(B.min())&&(a=me(i)),new wy(a,s.transformResults||[])}(t,e))):[]}function pf(r,e){return{documents:[df(r,e.path)]}}function _f(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=df(r,s);const i=function(h){if(h.length!==0)return Ef(Z.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Bn(_.field),direction:Ly(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=fa(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:t,parent:s}}function yf(r){let e=ff(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){L(n===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const _=If(g);return _ instanceof Z&&Ka(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(_=>function(V){return new ls(Un(V.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(_))}(t.orderBy));let u=null;t.limit&&(u=function(g){let _;return _=typeof g=="object"?g.value:g,Is(_)?null:_}(t.limit));let c=null;t.startAt&&(c=function(g){const _=!!g.before,R=g.values||[];return new Lt(R,_)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const _=!g.before,R=g.values||[];return new Lt(R,_)}(t.endAt)),jd(e,s,a,i,u,"F",c,h)}function Fy(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function If(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Un(t.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Un(t.unaryFilter.field);return K.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Un(t.unaryFilter.field);return K.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Un(t.unaryFilter.field);return K.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(r):r.fieldFilter!==void 0?function(t){return K.create(Un(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Z.create(t.compositeFilter.filters.map(n=>If(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(t.compositeFilter.op))}(r):F(30097,{filter:r})}function Ly(r){return Vy[r]}function By(r){return Cy[r]}function Uy(r){return Dy[r]}function Bn(r){return{fieldPath:r.canonicalString()}}function Un(r){return ae.fromServerFormat(r.fieldPath)}function Ef(r){return r instanceof K?function(t){if(t.op==="=="){if(Tl(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NAN"}};if(El(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tl(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NAN"}};if(El(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(t.field),op:By(t.op),value:t.value}}}(r):r instanceof Z?function(t){const n=t.getFilters().map(s=>Ef(s));return n.length===1?n[0]:{compositeFilter:{op:Uy(t.op),filters:n}}}(r):F(54877,{filter:r})}function qy(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Tf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class vf{constructor(e){this.wt=e}}function zy(r,e){let t;if(e.document)t=gf(r.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=O.fromSegments(e.noDocument.path),s=yn(e.noDocument.readTime);t=ie.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F(56709);{const n=O.fromSegments(e.unknownDocument.path),s=yn(e.unknownDocument.version);t=ie.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new ce(s[0],s[1]);return B.fromTimestamp(i)}(e.readTime)),t}function Ll(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Pi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,a){return{name:hs(i,a.key),fields:a.data.value.mapValue.fields,updateTime:ir(i,a.version.toTimestamp()),createTime:ir(i,a.createTime.toTimestamp())}}(r.wt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:_n(e.version)};else{if(!e.isUnknownDocument())return F(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:_n(e.version)}}return n}function Pi(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function _n(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function yn(r){const e=new ce(r.seconds,r.nanoseconds);return B.fromTimestamp(e)}function rn(r,e){const t=(e.baseMutations||[]).map(i=>pa(r.wt,i));for(let i=0;i<e.mutations.length-1;++i){const a=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const u=e.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>pa(r.wt,i)),s=ce.fromMillis(e.localWriteTimeMs);return new Ja(e.batchId,s,t,n)}function Kr(r){const e=yn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?yn(r.lastLimboFreeSnapshotVersion):B.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const a=i.documents.length;return L(a===1,1966,{count:a}),Fe(mr(ff(i.documents[0])))}(r.query):function(i){return Fe(yf(i))}(r.query),new ut(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,de.fromBase64String(r.resumeToken))}function wf(r,e){const t=_n(e.snapshotVersion),n=_n(e.lastLimboFreeSnapshotVersion);let s;s=bi(e.target)?pf(r.wt,e.target):_f(r.wt,e.target).gt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:mn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function nu(r){const e=yf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Si(e,e.limit,"L"):e}function zo(r,e){return new Za(e.largestBatchId,pa(r.wt,e.overlayMutation))}function Bl(r,e){const t=e.path.lastSegment();return[r,De(e.path.popLast()),t]}function Ul(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:_n(n.readTime),documentKey:De(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class $y{getBundleMetadata(e,t){return ql(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:yn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return ql(e).put(function(s){return{bundleId:s.id,createTime:_n(me(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return zl(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:nu(i.bundledQuery),readTime:yn(i.readTime)}}(n)})}saveNamedQuery(e,t){return zl(e).put(function(s){return{name:s.name,readTime:_n(me(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function ql(r){return ye(r,Ui)}function zl(r){return ye(r,qi)}/**
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
 */class Wi{constructor(e,t){this.serializer=e,this.userId=t}static bt(e,t){const n=t.uid||"";return new Wi(e,n)}getOverlay(e,t){return Lr(e).get(Bl(this.userId,t)).next(n=>n?zo(this.serializer,n):null)}getOverlays(e,t){const n=Xe();return w.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,a)=>{const u=new Za(t,a);s.push(this.St(e,u))}),w.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(a=>s.add(De(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(Lr(e).X(sa,u))}),w.waitFor(i)}getOverlaysForCollection(e,t,n){const s=Xe(),i=De(t),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Lr(e).J(sa,a).next(u=>{for(const c of u){const h=zo(this.serializer,c);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=Xe();let a;const u=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Lr(e).te({index:wd,range:u},(c,h,f)=>{const g=zo(this.serializer,h);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):f.done()}).next(()=>i)}St(e,t){return Lr(e).put(function(s,i,a){const[u,c,h]=Bl(i,a.mutation.key);return{userId:i,collectionPath:c,documentId:h,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:ds(s.wt,a.mutation)}}(this.serializer,this.userId,t))}}function Lr(r){return ye(r,zi)}/**
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
 */class jy{Dt(e){return ye(e,za)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?de.fromUint8Array(n):de.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class sn{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(oe(e.integerValue));else if("doubleValue"in e){const n=oe(e.doubleValue);isNaN(n)?this.Mt(t,13):(this.Mt(t,15),rs(n)?t.xt(0):t.xt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Mt(t,20),typeof n=="string"&&(n=lt(n)),t.Ot(`${n.seconds||""}`),t.xt(n.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(ht(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Mt(t,45),t.xt(n.latitude||0),t.xt(n.longitude||0)}else"mapValue"in e?kd(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):Gi(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):F(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const n=e.fields||{};this.Mt(t,55);for(const s of Object.keys(n))this.Nt(s,t),this.Ct(n[s],t)}qt(e,t){var n,s;const i=e.fields||{};this.Mt(t,53);const a=er,u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Mt(t,15),t.xt(oe(u)),this.Nt(a,t),this.Ct(i[a],t)}$t(e,t){const n=e.values||[];this.Mt(t,50);for(const s of n)this.Ct(s,t)}kt(e,t){this.Mt(t,37),O.fromName(e).path.forEach(n=>{this.Mt(t,60),this.Kt(n,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}sn.Wt=new sn;/**
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
 */const Nn=255;function Gy(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function $l(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const a=Gy(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(e/8)}class Ky{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.zt(n.value),n=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Yt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.zt(n);else if(n<2048)this.zt(960|n>>>6),this.zt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|n>>>12),this.zt(128|63&n>>>6),this.zt(128|63&n);else{const s=t.codePointAt(0);this.zt(240|s>>>18),this.zt(128|63&s>>>12),this.zt(128|63&s>>>6),this.zt(128|63&s)}}this.jt()}Xt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Yt()}en(e){const t=this.tn(e),n=$l(t);this.nn(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}rn(e){const t=this.tn(e),n=$l(t);this.nn(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}sn(){this._n(Nn),this._n(255)}an(){this.un(Nn),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Nn?(this._n(Nn),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===Nn?(this.un(Nn),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Qy{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class Wy{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class Br{constructor(){this.ln=new Ky,this.hn=new Qy(this.ln),this.Pn=new Wy(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
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
 */class on{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}In(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new on(this.indexId,this.documentKey,this.arrayValue,n)}}function Tt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=jl(r.arrayValue,e.arrayValue),t!==0?t:(t=jl(r.directionalValue,e.directionalValue),t!==0?t:O.comparator(r.documentKey,e.documentKey)))}function jl(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class Gl{constructor(e){this.En=new ee((t,n)=>ae.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.An=[];for(const t of e.filters){const n=t;n.isInequality()?this.En=this.En.add(n):this.An.push(n)}}get Rn(){return this.En.size>1}Vn(e){if(L(e.collectionGroup===this.collectionId,49279),this.Rn)return!1;const t=ta(e);if(t!==void 0&&!this.mn(t))return!1;const n=en(e);let s=new Set,i=0,a=0;for(;i<n.length&&this.mn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.En.size>0){const u=this.En.getIterator().getNext();if(!s.has(u.field.canonicalString())){const c=n[i];if(!this.fn(u,c)||!this.gn(this.dn[a++],c))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.dn.length||!this.gn(this.dn[a++],u))return!1}return!0}pn(){if(this.Rn)return null;let e=new ee(ae.comparator);const t=[];for(const n of this.An)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new oi(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new oi(n.field,0))}for(const n of this.dn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new oi(n.field,n.dir==="asc"?0:1)));return new Ii(Ii.UNKNOWN_ID,this.collectionId,t,ns.empty())}mn(e){for(const t of this.An)if(this.fn(t,e))return!0;return!1}fn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}gn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Af(r){var e,t;if(L(r instanceof K||r instanceof Z,20012),r instanceof K){if(r instanceof $d){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>K.create(r.field,"==",i)))||[];return Z.create(s,"or")}return r}const n=r.filters.map(s=>Af(s));return Z.create(n,r.op)}function Hy(r){if(r.getFilters().length===0)return[];const e=Ia(Af(r));return L(bf(e),7391),_a(e)||ya(e)?[e]:e.getFilters()}function _a(r){return r instanceof K}function ya(r){return r instanceof Z&&Ka(r)}function bf(r){return _a(r)||ya(r)||function(t){if(t instanceof Z&&ca(t)){for(const n of t.getFilters())if(!_a(n)&&!ya(n))return!1;return!0}return!1}(r)}function Ia(r){if(L(r instanceof K||r instanceof Z,34018),r instanceof K)return r;if(r.filters.length===1)return Ia(r.filters[0]);const e=r.filters.map(n=>Ia(n));let t=Z.create(e,r.op);return t=Vi(t),bf(t)?t:(L(t instanceof Z,64498),L(nr(t),40251),L(t.filters.length>1,57927),t.filters.reduce((n,s)=>ru(n,s)))}function ru(r,e){let t;return L(r instanceof K||r instanceof Z,38388),L(e instanceof K||e instanceof Z,25473),t=r instanceof K?e instanceof K?function(s,i){return Z.create([s,i],"and")}(r,e):Kl(r,e):e instanceof K?Kl(e,r):function(s,i){if(L(s.filters.length>0&&i.filters.length>0,48005),nr(s)&&nr(i))return Ud(s,i.getFilters());const a=ca(s)?s:i,u=ca(s)?i:s,c=a.filters.map(h=>ru(h,u));return Z.create(c,"or")}(r,e),Vi(t)}function Kl(r,e){if(nr(e))return Ud(e,r.getFilters());{const t=e.filters.map(n=>ru(r,n));return Z.create(t,"or")}}function Vi(r){if(L(r instanceof K||r instanceof Z,11850),r instanceof K)return r;const e=r.getFilters();if(e.length===1)return Vi(e[0]);if(Ld(r))return r;const t=e.map(s=>Vi(s)),n=[];return t.forEach(s=>{s instanceof K?n.push(s):s instanceof Z&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:Z.create(n,r.op)}/**
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
 */class Yy{constructor(){this.yn=new su}addToCollectionParentIndex(e,t){return this.yn.add(t),w.resolve()}getCollectionParents(e,t){return w.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return w.resolve()}deleteFieldIndex(e,t){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,t){return w.resolve()}getDocumentsMatchingTarget(e,t){return w.resolve(null)}getIndexType(e,t){return w.resolve(0)}getFieldIndexes(e,t){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,t){return w.resolve(je.min())}getMinOffsetFromCollectionGroup(e,t){return w.resolve(je.min())}updateCollectionGroup(e,t,n){return w.resolve()}updateIndexEntries(e,t){return w.resolve()}}class su{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ee(G.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ee(G.comparator)).toArray()}}/**
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
 */const Ql="IndexedDbIndexManager",ti=new Uint8Array(0);class Jy{constructor(e,t){this.databaseId=t,this.wn=new su,this.bn=new mt(n=>mn(n),(n,s)=>Ts(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.wn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.wn.add(t)});const i={collectionId:n,parent:De(s)};return Wl(e).put(i)}return w.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[hd(t),""],!1,!0);return Wl(e).J(s).next(i=>{for(const a of i){if(a.collectionId!==t)break;n.push(Je(a.parent))}return n})}addFieldIndex(e,t){const n=Ur(e),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const a=On(e);return i.next(u=>{a.put(Ul(u,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Ur(e),s=On(e),i=kn(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ur(e),n=kn(e),s=On(e);return t.X().next(()=>n.X()).next(()=>s.X())}createTargetIndexes(e,t){return w.forEach(this.Sn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new Gl(n).pn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=kn(e);let s=!0;const i=new Map;return w.forEach(this.Sn(t),a=>this.Dn(e,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=j();const u=[];return w.forEach(i,(c,h)=>{D(Ql,`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(X=>`${X.fieldPath}:${X.kind}`).join(",")}`}(c)} to execute ${mn(t)}`);const f=function(U,X){const ne=ta(X);if(ne===void 0)return null;for(const H of Ri(U,ne.fieldPath))switch(H.op){case"array-contains-any":return H.value.arrayValue.values||[];case"array-contains":return[H.value]}return null}(h,c),g=function(U,X){const ne=new Map;for(const H of en(X))for(const E of Ri(U,H.fieldPath))switch(E.op){case"==":case"in":ne.set(H.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return ne.set(H.fieldPath.canonicalString(),E.value),Array.from(ne.values())}return null}(h,c),_=function(U,X){const ne=[];let H=!0;for(const E of en(X)){const p=E.kind===0?Rl(U,E.fieldPath,U.startAt):Sl(U,E.fieldPath,U.startAt);ne.push(p.value),H&&(H=p.inclusive)}return new Lt(ne,H)}(h,c),R=function(U,X){const ne=[];let H=!0;for(const E of en(X)){const p=E.kind===0?Sl(U,E.fieldPath,U.endAt):Rl(U,E.fieldPath,U.endAt);ne.push(p.value),H&&(H=p.inclusive)}return new Lt(ne,H)}(h,c),V=this.vn(c,h,_),N=this.vn(c,h,R),x=this.Cn(c,h,g),$=this.Fn(c.indexId,f,V,_.inclusive,N,R.inclusive,x);return w.forEach($,z=>n.Z(z,t.limit).next(U=>{U.forEach(X=>{const ne=O.fromSegments(X.documentKey);a.has(ne)||(a=a.add(ne),u.push(ne))})}))}).next(()=>u)}return w.resolve(null)})}Sn(e){let t=this.bn.get(e);return t||(e.filters.length===0?t=[e]:t=Hy(Z.create(e.filters,"and")).map(n=>ha(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.bn.set(e,t),t)}Fn(e,t,n,s,i,a,u){const c=(t!=null?t.length:1)*Math.max(n.length,i.length),h=c/(t!=null?t.length:1),f=[];for(let g=0;g<c;++g){const _=t?this.Mn(t[g/h]):ti,R=this.xn(e,_,n[g%h],s),V=this.On(e,_,i[g%h],a),N=u.map(x=>this.xn(e,_,x,!0));f.push(...this.createRange(R,V,N))}return f}xn(e,t,n,s){const i=new on(e,O.empty(),t,n);return s?i:i.In()}On(e,t,n,s){const i=new on(e,O.empty(),t,n);return s?i.In():i}Dn(e,t){const n=new Gl(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let a=null;for(const u of i)n.Vn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(e,t){let n=2;const s=this.Sn(t);return w.forEach(s,i=>this.Dn(e,i).next(a=>{a?n!==0&&a.fields.length<function(c){let h=new ee(ae.comparator),f=!1;for(const g of c.filters)for(const _ of g.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const g of c.orderBy)g.field.isKeyField()||(h=h.add(g.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(t)&&s.length>1&&n===2?1:n)}Nn(e,t){const n=new Br;for(const s of en(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const a=n.Tn(s.kind);sn.Wt.vt(i,a)}return n.cn()}Mn(e){const t=new Br;return sn.Wt.vt(e,t.Tn(0)),t.cn()}Bn(e,t){const n=new Br;return sn.Wt.vt(fn(this.databaseId,t),n.Tn(function(i){const a=en(i);return a.length===0?0:a[a.length-1].kind}(e))),n.cn()}Cn(e,t,n){if(n===null)return[];let s=[];s.push(new Br);let i=0;for(const a of en(e)){const u=n[i++];for(const c of s)if(this.Ln(t,a.fieldPath)&&cs(u))s=this.kn(s,a,u);else{const h=c.Tn(a.kind);sn.Wt.vt(u,h)}}return this.qn(s)}vn(e,t,n){return this.Cn(e,t,n.position)}qn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].cn();return t}kn(e,t,n){const s=[...e],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const c=new Br;c.seed(u.cn()),sn.Wt.vt(a,c.Tn(t.kind)),i.push(c)}return i}Ln(e,t){return!!e.filters.find(n=>n instanceof K&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Ur(e),s=On(e);return(t?n.J(ra,IDBKeyRange.bound(t,t)):n.J()).next(i=>{const a=[];return w.forEach(i,u=>s.get([u.indexId,this.uid]).next(c=>{a.push(function(f,g){const _=g?new ns(g.sequenceNumber,new je(yn(g.readTime),new O(Je(g.documentKey)),g.largestBatchId)):ns.empty(),R=f.fields.map(([V,N])=>new oi(ae.fromServerFormat(V),N));return new Ii(f.indexId,f.collectionGroup,R,_)}(u,c))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:q(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=Ur(e),i=On(e);return this.Qn(e).next(a=>s.J(ra,IDBKeyRange.bound(t,t)).next(u=>w.forEach(u,c=>i.put(Ul(c.indexId,this.uid,a,n)))))}updateIndexEntries(e,t){const n=new Map;return w.forEach(t,(s,i)=>{const a=n.get(s.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(e,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),w.forEach(u,c=>this.$n(e,s,c).next(h=>{const f=this.Un(i,c);return h.isEqual(f)?w.resolve():this.Kn(e,i,c,h,f)}))))})}Wn(e,t,n,s){return kn(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.Bn(n,t.key),documentKey:t.key.path.toArray()})}Gn(e,t,n,s){return kn(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.Bn(n,t.key),t.key.path.toArray()])}$n(e,t,n){const s=kn(e);let i=new ee(Tt);return s.te({index:vd,range:IDBKeyRange.only([n.indexId,this.uid,this.Bn(n,t)])},(a,u)=>{i=i.add(new on(n.indexId,t,u.arrayValue,u.directionalValue))}).next(()=>i)}Un(e,t){let n=new ee(Tt);const s=this.Nn(t,e);if(s==null)return n;const i=ta(t);if(i!=null){const a=e.data.field(i.fieldPath);if(cs(a))for(const u of a.arrayValue.values||[])n=n.add(new on(t.indexId,e.key,this.Mn(u),s))}else n=n.add(new on(t.indexId,e.key,ti,s));return n}Kn(e,t,n,s,i){D(Ql,"Updating index entries for document '%s'",t.key);const a=[];return function(c,h,f,g,_){const R=c.getIterator(),V=h.getIterator();let N=xn(R),x=xn(V);for(;N||x;){let $=!1,z=!1;if(N&&x){const U=f(N,x);U<0?z=!0:U>0&&($=!0)}else N!=null?z=!0:$=!0;$?(g(x),x=xn(V)):z?(_(N),N=xn(R)):(N=xn(R),x=xn(V))}}(s,i,Tt,u=>{a.push(this.Wn(e,t,n,u))},u=>{a.push(this.Gn(e,t,n,u))}),w.waitFor(a)}Qn(e){let t=1;return On(e).te({index:Td,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((a,u)=>Tt(a,u)).filter((a,u,c)=>!u||Tt(a,c[u-1])!==0);const s=[];s.push(e);for(const a of n){const u=Tt(a,e),c=Tt(a,t);if(u===0)s[0]=e.In();else if(u>0&&c<0)s.push(a),s.push(a.In());else if(c>0)break}s.push(t);const i=[];for(let a=0;a<s.length;a+=2){if(this.zn(s[a],s[a+1]))return[];const u=[s[a].indexId,this.uid,s[a].arrayValue,s[a].directionalValue,ti,[]],c=[s[a+1].indexId,this.uid,s[a+1].arrayValue,s[a+1].directionalValue,ti,[]];i.push(IDBKeyRange.bound(u,c))}return i}zn(e,t){return Tt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Hl)}getMinOffset(e,t){return w.mapArray(this.Sn(t),n=>this.Dn(e,n).next(s=>s||F(44426))).next(Hl)}}function Wl(r){return ye(r,os)}function kn(r){return ye(r,Ai)}function Ur(r){return ye(r,qa)}function On(r){return ye(r,wi)}function Hl(r){L(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;La(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new je(e.readTime,e.documentKey,t)}/**
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
 */const Yl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rf=41943040;class Ce{static withCacheSize(e){return new Ce(e,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function Sf(r,e,t){const n=r.store(We),s=r.store(Yn),i=[],a=IDBKeyRange.only(t.batchId);let u=0;const c=n.te({range:a},(f,g,_)=>(u++,_.delete()));i.push(c.next(()=>{L(u===1,47070,{batchId:t.batchId})}));const h=[];for(const f of t.mutations){const g=yd(e,f.key.path,t.batchId);i.push(s.delete(g)),h.push(f.key)}return w.waitFor(i).next(()=>h)}function Ci(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw F(14731);e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Ce.DEFAULT_COLLECTION_PERCENTILE=10,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ce.DEFAULT=new Ce(Rf,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ce.DISABLED=new Ce(-1,0,0);class Hi{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.jn={}}static bt(e,t,n,s){L(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new Hi(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return vt(e).te({index:un,range:n},(s,i,a)=>{t=!1,a.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=qn(e),a=vt(e);return a.add({}).next(u=>{L(typeof u=="number",49019);const c=new Ja(u,t,n,s),h=function(R,V,N){const x=N.baseMutations.map(z=>ds(R.wt,z)),$=N.mutations.map(z=>ds(R.wt,z));return{userId:V,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:x,mutations:$}}(this.serializer,this.userId,c),f=[];let g=new ee((_,R)=>q(_.canonicalString(),R.canonicalString()));for(const _ of s){const R=yd(this.userId,_.key.path,u);g=g.add(_.key.path.popLast()),f.push(a.put(h)),f.push(i.put(R,D_))}return g.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.jn[u]=c.keys()}),w.waitFor(f).next(()=>c)})}lookupMutationBatch(e,t){return vt(e).get(t).next(n=>n?(L(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),rn(this.serializer,n)):null)}Hn(e,t){return this.jn[t]?w.resolve(this.jn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.jn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return vt(e).te({index:un,range:s},(a,u,c)=>{u.userId===this.userId&&(L(u.batchId>=n,47524,{Jn:n}),i=rn(this.serializer,u)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Ct;return vt(e).te({index:un,range:t,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Ct],[this.userId,Number.POSITIVE_INFINITY]);return vt(e).J(un,t).next(n=>n.map(s=>rn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ai(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return qn(e).te({range:s},(a,u,c)=>{const[h,f,g]=a,_=Je(f);if(h===this.userId&&t.path.isEqual(_))return vt(e).get(g).next(R=>{if(!R)throw F(61480,{Yn:a,batchId:g});L(R.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:R.userId,batchId:g}),i.push(rn(this.serializer,R))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ee(q);const s=[];return t.forEach(i=>{const a=ai(this.userId,i.path),u=IDBKeyRange.lowerBound(a),c=qn(e).te({range:u},(h,f,g)=>{const[_,R,V]=h,N=Je(R);_===this.userId&&i.path.isEqual(N)?n=n.add(V):g.done()});s.push(c)}),w.waitFor(s).next(()=>this.Zn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=ai(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new ee(q);return qn(e).te({range:a},(c,h,f)=>{const[g,_,R]=c,V=Je(_);g===this.userId&&n.isPrefixOf(V)?V.length===s&&(u=u.add(R)):f.done()}).next(()=>this.Zn(e,u))}Zn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(vt(e).get(i).next(a=>{if(a===null)throw F(35274,{batchId:i});L(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push(rn(this.serializer,a))}))}),w.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return Sf(e.he,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Xn(t.batchId)}),w.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Xn(e){delete this.jn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return w.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return qn(e).te({range:n},(i,a,u)=>{if(i[0]===this.userId){const c=Je(i[1]);s.push(c)}else u.done()}).next(()=>{L(s.length===0,56720,{er:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return Pf(e,this.userId,t)}tr(e){return Vf(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Ct,lastStreamToken:""})}}function Pf(r,e,t){const n=ai(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return qn(r).te({range:i,ee:!0},(u,c,h)=>{const[f,g,_]=u;f===e&&g===s&&(a=!0),h.done()}).next(()=>a)}function vt(r){return ye(r,We)}function qn(r){return ye(r,Yn)}function Vf(r){return ye(r,ss)}/**
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
 */class In{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new In(0)}static ir(){return new In(-1)}}/**
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
 */class Xy{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.sr(e).next(t=>{const n=new In(t.highestTargetId);return t.highestTargetId=n.next(),this._r(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.sr(e).next(t=>B.fromTimestamp(new ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.sr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.sr(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this._r(e,s)))}addTargetData(e,t){return this.ar(e,t).next(()=>this.sr(e).next(n=>(n.targetCount+=1,this.ur(t,n),this._r(e,n))))}updateTargetData(e,t){return this.ar(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Mn(e).delete(t.targetId)).next(()=>this.sr(e)).next(n=>(L(n.targetCount>0,8065),n.targetCount-=1,this._r(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return Mn(e).te((a,u)=>{const c=Kr(u);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>w.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Mn(e).te((n,s)=>{const i=Kr(s);t(i)})}sr(e){return Jl(e).get(vi).next(t=>(L(t!==null,2888),t))}_r(e,t){return Jl(e).put(vi,t)}ar(e,t){return Mn(e).put(wf(this.serializer,t))}ur(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.sr(e).next(t=>t.targetCount)}getTargetData(e,t){const n=mn(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Mn(e).te({range:s,index:Ed},(a,u,c)=>{const h=Kr(u);Ts(t,h.target)&&(i=h,c.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=bt(e);return t.forEach(a=>{const u=De(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(e,n,a))}),w.waitFor(s)}removeMatchingKeys(e,t,n){const s=bt(e);return w.forEach(t,i=>{const a=De(i.path);return w.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=bt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=bt(e);let i=j();return s.te({range:n,ee:!0},(a,u,c)=>{const h=Je(a[1]),f=new O(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=De(t.path),s=IDBKeyRange.bound([n],[hd(n)],!1,!0);let i=0;return bt(e).te({index:Ua,ee:!0,range:s},([a,u],c,h)=>{a!==0&&(i++,h.done())}).next(()=>i>0)}Rt(e,t){return Mn(e).get(t).next(n=>n?Kr(n):null)}}function Mn(r){return ye(r,Jn)}function Jl(r){return ye(r,hn)}function bt(r){return ye(r,Xn)}/**
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
 */const Xl="LruGarbageCollector",Zy=1048576;function Zl([r,e],[t,n]){const s=q(r,t);return s===0?q(e,n):s}class eI{constructor(e){this.cr=e,this.buffer=new ee(Zl),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Zl(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Cf{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){D(Xl,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jt(t)?D(Xl,"Ignoring IndexedDB error during garbage collection: ",t):await $t(t)}await this.Ir(3e5)})}}class tI{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return w.resolve(Be.le);const n=new eI(t);return this.Er.forEachTarget(e,s=>n.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>n.Pr(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Er.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Yl)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yl):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let n,s,i,a,u,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(n=g,u=Date.now(),this.removeTargets(e,n,t))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(g=>(h=Date.now(),Fn()<=Q.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function Df(r,e){return new tI(r,e)}/**
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
 */class nI{constructor(e,t){this.db=e,this.garbageCollector=Df(this,t)}dr(e){const t=this.Vr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Vr(e){let t=0;return this.Ar(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ar(e,t){return this.mr(e,(n,s)=>t(s))}addReference(e,t,n){return ni(e,n)}removeReference(e,t,n){return ni(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ni(e,t)}gr(e,t){return function(s,i){let a=!1;return Vf(s).ne(u=>Pf(s,u,i).next(c=>(c&&(a=!0),w.resolve(!c)))).next(()=>a)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.mr(e,(a,u)=>{if(u<=t){const c=this.gr(e,a).next(h=>{if(!h)return i++,n.getEntry(e,a).next(()=>(n.removeEntry(a,B.min()),bt(e).delete(function(g){return[0,De(g.path)]}(a))))});s.push(c)}}).next(()=>w.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ni(e,t)}mr(e,t){const n=bt(e);let s,i=Be.le;return n.te({index:Ua},([a,u],{path:c,sequenceNumber:h})=>{a===0?(i!==Be.le&&t(new O(Je(s)),i),i=h,s=c):i=Be.le}).next(()=>{i!==Be.le&&t(new O(Je(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ni(r,e){return bt(r).put(function(n,s){return{targetId:0,path:De(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
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
 */class xf{constructor(){this.changes=new mt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?w.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class rI{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Xt(e).put(n)}removeEntry(e,t,n){return Xt(e).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Pi(a),u[u.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.pr(e,n)))}getEntry(e,t){let n=ie.newInvalidDocument(t);return Xt(e).te({index:ui,range:IDBKeyRange.only(qr(t))},(s,i)=>{n=this.yr(t,i)}).next(()=>n)}wr(e,t){let n={size:0,document:ie.newInvalidDocument(t)};return Xt(e).te({index:ui,range:IDBKeyRange.only(qr(t))},(s,i)=>{n={document:this.yr(t,i),size:Ci(i)}}).next(()=>n)}getEntries(e,t){let n=qe();return this.br(e,t,(s,i)=>{const a=this.yr(s,i);n=n.insert(s,a)}).next(()=>n)}Sr(e,t){let n=qe(),s=new re(O.comparator);return this.br(e,t,(i,a)=>{const u=this.yr(i,a);n=n.insert(i,u),s=s.insert(i,Ci(a))}).next(()=>({documents:n,Dr:s}))}br(e,t,n){if(t.isEmpty())return w.resolve();let s=new ee(nh);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(qr(s.first()),qr(s.last())),a=s.getIterator();let u=a.getNext();return Xt(e).te({index:ui,range:i},(c,h,f)=>{const g=O.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;u&&nh(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,h),u=a.hasNext()?a.getNext():null),u?f.H(qr(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const a=t.path,u=[a.popLast().toArray(),a.lastSegment(),Pi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Xt(e).J(IDBKeyRange.bound(u,c,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=qe();for(const g of h){const _=this.yr(O.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);_.isFoundDocument()&&(ws(t,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,n,s){let i=qe();const a=th(t,n),u=th(t,je.max());return Xt(e).te({index:Id,range:IDBKeyRange.bound(a,u,!0)},(c,h,f)=>{const g=this.yr(O.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(g.key,g),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new sI(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return eh(e).get(na).next(t=>(L(!!t,20021),t))}pr(e,t){return eh(e).put(na,t)}yr(e,t){if(t){const n=zy(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(B.min())))return n}return ie.newInvalidDocument(e)}}function Nf(r){return new rI(r)}class sI extends xf{constructor(e,t){super(),this.vr=e,this.trackRemovals=t,this.Cr=new mt(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new ee((i,a)=>q(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.Cr.get(i);if(t.push(this.vr.removeEntry(e,i,u.readTime)),a.isValidDocument()){const c=Ll(this.vr.serializer,a);s=s.add(i.path.popLast());const h=Ci(c);n+=h-u.size,t.push(this.vr.addEntry(e,i,c))}else if(n-=u.size,this.trackRemovals){const c=Ll(this.vr.serializer,a.convertToNoDocument(B.min()));t.push(this.vr.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.vr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.vr.updateMetadata(e,n)),w.waitFor(t)}getFromCache(e,t){return this.vr.wr(e,t).next(n=>(this.Cr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.vr.Sr(e,t).next(({documents:n,Dr:s})=>(s.forEach((i,a)=>{this.Cr.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function eh(r){return ye(r,is)}function Xt(r){return ye(r,Ti)}function qr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function th(r,e){const t=e.documentKey.path.toArray();return[r,Pi(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function nh(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=q(t[i],n[i]),s)return s;return s=q(t.length,n.length),s||(s=q(t[t.length-2],n[n.length-2]),s||q(t[t.length-1],n[n.length-1]))}/**
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
 */class iI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class kf{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Jr(n.mutation,s,Ue.empty(),ce.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,j()).next(()=>n))}getLocalViewOfDocuments(e,t,n=j()){const s=Xe();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let a=jr();return i.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=Xe();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,j()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,n,s){let i=qe();const a=Yr(),u=function(){return Yr()}();return t.forEach((c,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof gt)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Jr(f.mutation,h,f.mutation.getFieldMask(),ce.now())):a.set(h.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var g;return u.set(h,new iI(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(e,t){const n=Yr();let s=new re((a,u)=>a-u),i=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=n.get(c)||Ue.empty();f=u.applyToLocalView(h,f),n.set(c,f);const g=(s.get(u.batchId)||j()).add(c);s=s.insert(u.batchId,g)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),h=c.key,f=c.value,g=Yd();f.forEach(_=>{if(!i.has(_)){const R=rf(t.get(_),n.get(_));R!==null&&g.set(_,R),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return w.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Qa(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):w.resolve(Xe());let u=Hn,c=i;return a.next(h=>w.forEach(h,(f,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(f)?w.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,j())).next(f=>({batchId:u,changes:Hd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(n=>{let s=jr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let a=jr();return this.indexManager.getCollectionParents(e,i).next(u=>w.forEach(u,c=>{const h=function(g,_){return new ft(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next(f=>{f.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ie.newInvalidDocument(f)))});let u=jr();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Jr(f.mutation,h,Ue.empty(),ce.now()),ws(t,h)&&(u=u.insert(c,h))}),u})}}/**
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
 */class oI{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return w.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:me(s.createTime)}}(t)),w.resolve()}getNamedQuery(e,t){return w.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(s){return{name:s.name,query:nu(s.bundledQuery),readTime:me(s.readTime)}}(t)),w.resolve()}}/**
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
 */class aI{constructor(){this.overlays=new re(O.comparator),this.Or=new Map}getOverlay(e,t){return w.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Xe();return w.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.St(e,t,i)}),w.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Or.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(n)),w.resolve()}getOverlaysForCollection(e,t,n){const s=Xe(),i=t.length+1,a=new O(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return w.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new re((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=Xe(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const u=Xe(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>u.set(h,f)),!(u.size()>=s)););return w.resolve(u)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Or.get(s.largestBatchId).delete(n.key);this.Or.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Za(t,n));let i=this.Or.get(t);i===void 0&&(i=j(),this.Or.set(t,i)),this.Or.set(t,i.add(n.key))}}/**
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
 */class uI{constructor(){this.sessionToken=de.EMPTY_BYTE_STRING}getSessionToken(e){return w.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,w.resolve()}}/**
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
 */class iu{constructor(){this.Nr=new ee(Ie.Br),this.Lr=new ee(Ie.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const n=new Ie(e,t);this.Nr=this.Nr.add(n),this.Lr=this.Lr.add(n)}qr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Qr(new Ie(e,t))}$r(e,t){e.forEach(n=>this.removeReference(n,t))}Ur(e){const t=new O(new G([])),n=new Ie(t,e),s=new Ie(t,e+1),i=[];return this.Lr.forEachInRange([n,s],a=>{this.Qr(a),i.push(a.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new O(new G([])),n=new Ie(t,e),s=new Ie(t,e+1);let i=j();return this.Lr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ie(e,0),n=this.Nr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ie{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return O.comparator(e.key,t.key)||q(e.Gr,t.Gr)}static kr(e,t){return q(e.Gr,t.Gr)||O.comparator(e.key,t.key)}}/**
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
 */class cI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new ee(Ie.Br)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ja(i,t,n,s);this.mutationQueue.push(a);for(const u of s)this.zr=this.zr.add(new Ie(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(e,t){return w.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Hr(n),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?Ct:this.Jn-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ie(t,0),s=new Ie(t,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([n,s],a=>{const u=this.jr(a.Gr);i.push(u)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ee(q);return t.forEach(s=>{const i=new Ie(s,0),a=new Ie(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,a],u=>{n=n.add(u.Gr)})}),w.resolve(this.Jr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;O.isDocumentKey(i)||(i=i.child(""));const a=new Ie(new O(i),0);let u=new ee(q);return this.zr.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(u=u.add(c.Gr)),!0)},a),w.resolve(this.Jr(u))}Jr(e){const t=[];return e.forEach(n=>{const s=this.jr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){L(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.zr;return w.forEach(t.mutations,s=>{const i=new Ie(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=n})}Xn(e){}containsKey(e,t){const n=new Ie(t,0),s=this.zr.firstAfterOrEqual(n);return w.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class lI{constructor(e){this.Zr=e,this.docs=function(){return new re(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,a=this.Zr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return w.resolve(n?n.document.mutableCopy():ie.newInvalidDocument(t))}getEntries(e,t){let n=qe();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ie.newInvalidDocument(s))}),w.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=qe();const a=t.path,u=new O(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||La(fd(f),n)<=0||(s.has(f.key)||ws(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,t,n,s){F(9500)}Xr(e,t){return w.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new hI(this)}getSize(e){return w.resolve(this.size)}}class hI extends xf{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.vr.addEntry(e,s)):this.vr.removeEntry(n)}),w.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
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
 */class dI{constructor(e){this.persistence=e,this.ei=new mt(t=>mn(t),Ts),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.ti=0,this.ni=new iu,this.targetCount=0,this.ri=In.rr()}forEachTarget(e,t){return this.ei.forEach((n,s)=>t(s)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ti&&(this.ti=t),w.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new In(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,w.resolve()}updateTargetData(e,t){return this.ar(t),w.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.ei.forEach((a,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.ei.delete(a),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),w.waitFor(i).next(()=>s)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,t){const n=this.ei.get(t)||null;return w.resolve(n)}addMatchingKeys(e,t,n){return this.ni.qr(t,n),w.resolve()}removeMatchingKeys(e,t,n){this.ni.$r(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),w.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),w.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ni.Wr(t);return w.resolve(n)}containsKey(e,t){return w.resolve(this.ni.containsKey(t))}}/**
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
 */class ou{constructor(e,t){this.ii={},this.overlays={},this.si=new Be(0),this.oi=!1,this.oi=!0,this._i=new uI,this.referenceDelegate=e(this),this.ai=new dI(this),this.indexManager=new Yy,this.remoteDocumentCache=function(s){return new lI(s)}(n=>this.referenceDelegate.ui(n)),this.serializer=new vf(t),this.ci=new oI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ii[e.toKey()];return n||(n=new cI(t,this.referenceDelegate),this.ii[e.toKey()]=n),n}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,n){D("MemoryPersistence","Starting transaction:",e);const s=new fI(this.si.next());return this.referenceDelegate.li(),n(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,t){return w.or(Object.values(this.ii).map(n=>()=>n.containsKey(e,t)))}}class fI extends gd{constructor(e){super(),this.currentSequenceNumber=e}}class Yi{constructor(e){this.persistence=e,this.Ti=new iu,this.Ii=null}static Ei(e){return new Yi(e)}get di(){if(this.Ii)return this.Ii;throw F(60996)}addReference(e,t,n){return this.Ti.addReference(n,t),this.di.delete(n.toString()),w.resolve()}removeReference(e,t,n){return this.Ti.removeReference(n,t),this.di.add(n.toString()),w.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),w.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(s=>this.di.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.di,n=>{const s=O.fromPath(n);return this.Ai(e,s).next(i=>{i||t.removeEntry(s,B.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(n=>{n?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return w.or([()=>w.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class Di{constructor(e,t){this.persistence=e,this.Ri=new mt(n=>De(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Df(this,t)}static Ei(e,t){return new Di(e,t)}li(){}hi(e){return w.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}Vr(e){let t=0;return this.Ar(e,n=>{t++}).next(()=>t)}Ar(e,t){return w.forEach(this.Ri,(n,s)=>this.gr(e,n,s).next(i=>i?w.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,a=>this.gr(e,a,t).next(u=>{u||(n++,i.removeEntry(a,B.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),w.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.Ri.set(n,e.currentSequenceNumber),w.resolve()}removeReference(e,t,n){return this.Ri.set(n,e.currentSequenceNumber),w.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),w.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=li(e.data.value)),t}gr(e,t,n){return w.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.Ri.get(t);return w.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class mI{constructor(e){this.serializer=e}q(e,t,n,s){const i=new Bi("createOrUpgrade",t);n<1&&s>=1&&(function(c){c.createObjectStore(Es)}(e),function(c){c.createObjectStore(ss,{keyPath:C_}),c.createObjectStore(We,{keyPath:ml,autoIncrement:!0}).createIndex(un,gl,{unique:!0}),c.createObjectStore(Yn)}(e),rh(e),function(c){c.createObjectStore(tn)}(e));let a=w.resolve();return n<3&&s>=3&&(n!==0&&(function(c){c.deleteObjectStore(Xn),c.deleteObjectStore(Jn),c.deleteObjectStore(hn)}(e),rh(e)),a=a.next(()=>function(c){const h=c.store(hn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return h.put(vi,f)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(c,h){return h.store(We).J().next(g=>{c.deleteObjectStore(We),c.createObjectStore(We,{keyPath:ml,autoIncrement:!0}).createIndex(un,gl,{unique:!0});const _=h.store(We),R=g.map(V=>_.put(V));return w.waitFor(R)})}(e,i))),a=a.next(()=>{(function(c){c.createObjectStore(Zn,{keyPath:B_})})(e)})),n<5&&s>=5&&(a=a.next(()=>this.Vi(i))),n<6&&s>=6&&(a=a.next(()=>(function(c){c.createObjectStore(is)}(e),this.mi(i)))),n<7&&s>=7&&(a=a.next(()=>this.fi(i))),n<8&&s>=8&&(a=a.next(()=>this.gi(e,i))),n<9&&s>=9&&(a=a.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(a=a.next(()=>this.pi(i))),n<11&&s>=11&&(a=a.next(()=>{(function(c){c.createObjectStore(Ui,{keyPath:U_})})(e),function(c){c.createObjectStore(qi,{keyPath:q_})}(e)})),n<12&&s>=12&&(a=a.next(()=>{(function(c){const h=c.createObjectStore(zi,{keyPath:W_});h.createIndex(sa,H_,{unique:!1}),h.createIndex(wd,Y_,{unique:!1})})(e)})),n<13&&s>=13&&(a=a.next(()=>function(c){const h=c.createObjectStore(Ti,{keyPath:x_});h.createIndex(ui,N_),h.createIndex(Id,k_)}(e)).next(()=>this.yi(e,i)).next(()=>e.deleteObjectStore(tn))),n<14&&s>=14&&(a=a.next(()=>this.wi(e,i))),n<15&&s>=15&&(a=a.next(()=>function(c){c.createObjectStore(qa,{keyPath:z_,autoIncrement:!0}).createIndex(ra,$_,{unique:!1}),c.createObjectStore(wi,{keyPath:j_}).createIndex(Td,G_,{unique:!1}),c.createObjectStore(Ai,{keyPath:K_}).createIndex(vd,Q_,{unique:!1})}(e))),n<16&&s>=16&&(a=a.next(()=>{t.objectStore(wi).clear()}).next(()=>{t.objectStore(Ai).clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(c){c.createObjectStore(za,{keyPath:J_})})(e)})),a}mi(e){let t=0;return e.store(tn).te((n,s)=>{t+=Ci(s)}).next(()=>{const n={byteSize:t};return e.store(is).put(na,n)})}Vi(e){const t=e.store(ss),n=e.store(We);return t.J().next(s=>w.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,Ct],[i.userId,i.lastAcknowledgedBatchId]);return n.J(un,a).next(u=>w.forEach(u,c=>{L(c.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const h=rn(this.serializer,c);return Sf(e,i.userId,h).next(()=>{})}))}))}fi(e){const t=e.store(Xn),n=e.store(tn);return e.store(hn).get(vi).next(s=>{const i=[];return n.te((a,u)=>{const c=new G(a),h=function(g){return[0,De(g)]}(c);i.push(t.get(h).next(f=>f?w.resolve():(g=>t.put({targetId:0,path:De(g),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>w.waitFor(i))})}gi(e,t){e.createObjectStore(os,{keyPath:L_});const n=t.store(os),s=new su,i=a=>{if(s.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:De(c)})}};return t.store(tn).te({ee:!0},(a,u)=>{const c=new G(a);return i(c.popLast())}).next(()=>t.store(Yn).te({ee:!0},([a,u,c],h)=>{const f=Je(u);return i(f.popLast())}))}pi(e){const t=e.store(Jn);return t.te((n,s)=>{const i=Kr(s),a=wf(this.serializer,i);return t.put(a)})}yi(e,t){const n=t.store(tn),s=[];return n.te((i,a)=>{const u=t.store(Ti),c=function(g){return g.document?new O(G.fromString(g.document.name).popFirst(5)):g.noDocument?O.fromSegments(g.noDocument.path):g.unknownDocument?O.fromSegments(g.unknownDocument.path):F(36783)}(a).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(h))}).next(()=>w.waitFor(s))}wi(e,t){const n=t.store(We),s=Nf(this.serializer),i=new ou(Yi.Ei,this.serializer.wt);return n.J().next(a=>{const u=new Map;return a.forEach(c=>{var h;let f=(h=u.get(c.userId))!==null&&h!==void 0?h:j();rn(this.serializer,c).keys().forEach(g=>f=f.add(g)),u.set(c.userId,f)}),w.forEach(u,(c,h)=>{const f=new Ee(h),g=Wi.bt(this.serializer,f),_=i.getIndexManager(f),R=Hi.bt(f,this.serializer,_,i.referenceDelegate);return new kf(s,R,g,_).recalculateAndSaveOverlaysForDocumentKeys(new ia(t,Be.le),c).next()})})}}function rh(r){r.createObjectStore(Xn,{keyPath:M_}).createIndex(Ua,F_,{unique:!0}),r.createObjectStore(Jn,{keyPath:"targetId"}).createIndex(Ed,O_,{unique:!0}),r.createObjectStore(hn)}const wt="IndexedDbPersistence",$o=18e5,jo=5e3,Go="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Of="main";class au{constructor(e,t,n,s,i,a,u,c,h,f,g=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.bi=i,this.window=a,this.document=u,this.Si=h,this.Di=f,this.Ci=g,this.si=null,this.oi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Fi=null,this.inForeground=!1,this.Mi=null,this.xi=null,this.Oi=Number.NEGATIVE_INFINITY,this.Ni=_=>Promise.resolve(),!au.C())throw new C(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new nI(this,s),this.Bi=t+Of,this.serializer=new vf(c),this.Li=new et(this.Bi,this.Ci,new mI(this.serializer)),this._i=new jy,this.ai=new Xy(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Nf(this.serializer),this.ci=new $y,this.window&&this.window.localStorage?this.ki=this.window.localStorage:(this.ki=null,f===!1&&fe(wt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.qi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(S.FAILED_PRECONDITION,Go);return this.Qi(),this.$i(),this.Ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ai.getHighestSequenceNumber(e))}).then(e=>{this.si=new Be(e,this.Si)}).then(()=>{this.oi=!0}).catch(e=>(this.Li&&this.Li.close(),Promise.reject(e)))}Ki(e){return this.Ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Li.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.bi.enqueueAndForget(async()=>{this.started&&await this.qi()}))}qi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ri(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Wi(e).next(t=>{t||(this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)))})}).next(()=>this.Gi(e)).next(t=>this.isPrimary&&!t?this.zi(e).next(()=>!1):!!t&&this.ji(e).next(()=>!0))).catch(e=>{if(jt(e))return D(wt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D(wt,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.bi.enqueueRetryable(()=>this.Ni(e)),this.isPrimary=e})}Wi(e){return zr(e).get(Dn).next(t=>w.resolve(this.Hi(t)))}Ji(e){return ri(e).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.Zi(this.Oi,$o)){this.Oi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=ye(t,Zn);return n.J().next(s=>{const i=this.Xi(s,$o),a=s.filter(u=>i.indexOf(u)===-1);return w.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.ki)for(const t of e)this.ki.removeItem(this.es(t.clientId))}}Ui(){this.xi=this.bi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.qi().then(()=>this.Yi()).then(()=>this.Ui()))}Hi(e){return!!e&&e.ownerId===this.clientId}Gi(e){return this.Di?w.resolve(!0):zr(e).get(Dn).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,jo)&&!this.ts(t.ownerId)){if(this.Hi(t)&&this.networkEnabled)return!0;if(!this.Hi(t)){if(!t.allowTabSynchronization)throw new C(S.FAILED_PRECONDITION,Go);return!1}}return!(!this.networkEnabled||!this.inForeground)||ri(e).J().next(n=>this.Xi(n,jo).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&D(wt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.oi=!1,this.ns(),this.xi&&(this.xi.cancel(),this.xi=null),this.rs(),this.ss(),await this.Li.runTransaction("shutdown","readwrite",[Es,Zn],e=>{const t=new ia(e,Be.le);return this.zi(t).next(()=>this.Ji(t))}),this.Li.close(),this._s()}Xi(e,t){return e.filter(n=>this.Zi(n.updateTimeMs,t)&&!this.ts(n.clientId))}us(){return this.runTransaction("getActiveClients","readonly",e=>ri(e).J().next(t=>this.Xi(t,$o).map(n=>n.clientId)))}get started(){return this.oi}getGlobalsCache(){return this._i}getMutationQueue(e,t){return Hi.bt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Jy(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return Wi.bt(this.serializer,e)}getBundleCache(){return this.ci}runTransaction(e,t,n){D(wt,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(c){return c===17?ey:c===16?Z_:c===15?$a:c===14?Rd:c===13?bd:c===12?X_:c===11?Ad:void F(60245)}(this.Ci);let a;return this.Li.runTransaction(e,s,i,u=>(a=new ia(u,this.si?this.si.next():Be.le),t==="readwrite-primary"?this.Wi(a).next(c=>!!c||this.Gi(a)).next(c=>{if(!c)throw fe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)),new C(S.FAILED_PRECONDITION,md);return n(a)}).next(c=>this.ji(a).next(()=>c)):this.cs(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}cs(e){return zr(e).get(Dn).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,jo)&&!this.ts(t.ownerId)&&!this.Hi(t)&&!(this.Di||this.allowTabSynchronization&&t.allowTabSynchronization))throw new C(S.FAILED_PRECONDITION,Go)})}ji(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return zr(e).put(Dn,t)}static C(){return et.C()}zi(e){const t=zr(e);return t.get(Dn).next(n=>this.Hi(n)?(D(wt,"Releasing primary lease."),t.delete(Dn)):w.resolve())}Zi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(fe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Qi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Mi=()=>{this.bi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.qi()))},this.document.addEventListener("visibilitychange",this.Mi),this.inForeground=this.document.visibilityState==="visible")}rs(){this.Mi&&(this.document.removeEventListener("visibilitychange",this.Mi),this.Mi=null)}$i(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Fi=()=>{this.ns();const t=/(?:Version|Mobile)\/1[456]/;Lh()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.bi.enterRestrictedMode(!0),this.bi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Fi))}ss(){this.Fi&&(this.window.removeEventListener("pagehide",this.Fi),this.Fi=null)}ts(e){var t;try{const n=((t=this.ki)===null||t===void 0?void 0:t.getItem(this.es(e)))!==null;return D(wt,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return fe(wt,"Failed to get zombied client id.",n),!1}}ns(){if(this.ki)try{this.ki.setItem(this.es(this.clientId),String(Date.now()))}catch(e){fe("Failed to set zombie client id.",e)}}_s(){if(this.ki)try{this.ki.removeItem(this.es(this.clientId))}catch{}}es(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function zr(r){return ye(r,Es)}function ri(r){return ye(r,Zn)}function uu(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class cu{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.ls=n,this.hs=s}static Ps(e,t){let n=j(),s=j();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new cu(e,t.fromCache,n,s)}}/**
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
 */class gI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Mf{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return Lh()?8:pd(_i())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Rs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Vs(e,t,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new gI;return this.fs(e,t,a).next(u=>{if(i.result=u,this.Is)return this.gs(e,t,a,u.size)})}).next(()=>i.result)}gs(e,t,n,s){return n.documentReadCount<this.Es?(Fn()<=Q.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Ln(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),w.resolve()):(Fn()<=Q.DEBUG&&D("QueryEngine","Query:",Ln(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(Fn()<=Q.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Ln(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fe(t))):w.resolve())}Rs(e,t){if(Pl(t))return w.resolve(null);let n=Fe(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Si(t,null,"F"),n=Fe(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const a=j(...i);return this.As.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,n).next(c=>{const h=this.ps(t,u);return this.ys(t,h,a,c.readTime)?this.Rs(e,Si(t,null,"F")):this.ws(e,h,t,c)}))})))}Vs(e,t,n,s){return Pl(t)||s.isEqual(B.min())?w.resolve(null):this.As.getDocuments(e,n).next(i=>{const a=this.ps(t,i);return this.ys(t,a,n,s)?w.resolve(null):(Fn()<=Q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ln(t)),this.ws(e,a,t,dd(s,Hn)).next(u=>u))})}ps(e,t){let n=new ee(Qd(e));return t.forEach((s,i)=>{ws(e,i)&&(n=n.add(i))}),n}ys(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,t,n){return Fn()<=Q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ln(t)),this.As.getDocumentsMatchingQuery(e,t,je.min(),n)}ws(e,t,n,s){return this.As.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const lu="LocalStore",pI=3e8;class _I{constructor(e,t,n,s){this.persistence=e,this.bs=t,this.serializer=s,this.Ss=new re(q),this.Ds=new mt(i=>mn(i),Ts),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(n)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kf(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function Ff(r,e,t,n){return new _I(r,e,t,n)}async function Lf(r,e){const t=M(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.Fs(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let c=j();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){u.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next(h=>({Ms:h,removedBatchIds:a,addedBatchIds:u}))})})}function yI(r,e){const t=M(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.Cs.newChangeBuffer({trackRemovals:!0});return function(u,c,h,f){const g=h.batch,_=g.keys();let R=w.resolve();return _.forEach(V=>{R=R.next(()=>f.getEntry(c,V)).next(N=>{const x=h.docVersions.get(V);L(x!==null,48541),N.version.compareTo(x)<0&&(g.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(c,g))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=j();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(c=c.add(u.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Bf(r){const e=M(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function II(r,e){const t=M(r),n=e.snapshotVersion;let s=t.Ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Cs.newChangeBuffer({trackRemovals:!0});s=t.Ss;const u=[];e.targetChanges.forEach((f,g)=>{const _=s.get(g);if(!_)return;u.push(t.ai.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.ai.addMatchingKeys(i,f.addedDocuments,g)));let R=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(de.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,n)),s=s.insert(g,R),function(N,x,$){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=pI?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(_,R,f)&&u.push(t.ai.updateTargetData(i,R))});let c=qe(),h=j();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),u.push(Uf(i,a,e.documentUpdates).next(f=>{c=f.xs,h=f.Os})),!n.isEqual(B.min())){const f=t.ai.getLastRemoteSnapshotVersion(i).next(g=>t.ai.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(f)}return w.waitFor(u).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.Ss=s,i))}function Uf(r,e,t){let n=j(),s=j();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let a=qe();return t.forEach((u,c)=>{const h=i.get(u);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(B.min())?(e.removeEntry(u,c.readTime),a=a.insert(u,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(u,c)):D(lu,"Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version)}),{xs:a,Os:s}})}function EI(r,e){const t=M(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Ct),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function or(r,e){const t=M(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.ai.getTargetData(n,e).next(i=>i?(s=i,w.resolve(s)):t.ai.allocateTargetId(n).next(a=>(s=new ut(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.ai.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Ss.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ss=t.Ss.insert(n.targetId,n),t.Ds.set(e,n.targetId)),n})}async function ar(r,e,t){const n=M(r),s=n.Ss.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!jt(a))throw a;D(lu,`Failed to update sequence numbers for target ${e}: ${a}`)}n.Ss=n.Ss.remove(e),n.Ds.delete(s.target)}function xi(r,e,t){const n=M(r);let s=B.min(),i=j();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const g=M(c),_=g.Ds.get(f);return _!==void 0?w.resolve(g.Ss.get(_)):g.ai.getTargetData(h,f)}(n,a,Fe(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.ai.getMatchingKeysForTargetId(a,u.targetId).next(c=>{i=c})}).next(()=>n.bs.getDocumentsMatchingQuery(a,e,t?s:B.min(),t?i:j())).next(u=>($f(n,Kd(e),u),{documents:u,Ns:i})))}function qf(r,e){const t=M(r),n=M(t.ai),s=t.Ss.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.Rt(i,e).next(a=>a?a.target:null))}function zf(r,e){const t=M(r),n=t.vs.get(e)||B.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.Cs.getAllFromCollectionGroup(s,e,dd(n,Hn),Number.MAX_SAFE_INTEGER)).then(s=>($f(t,e,s),s))}function $f(r,e,t){let n=r.vs.get(e)||B.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.vs.set(e,n)}async function TI(r,e,t,n){const s=M(r);let i=j(),a=qe();for(const h of t){const f=e.Bs(h.metadata.name);h.document&&(i=i.add(f));const g=e.Ls(h);g.setReadTime(e.ks(h.metadata.readTime)),a=a.insert(f,g)}const u=s.Cs.newChangeBuffer({trackRemovals:!0}),c=await or(s,function(f){return Fe(mr(G.fromString(`__bundle__/docs/${f}`)))}(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",h=>Uf(h,u,a).next(f=>(u.apply(h),f)).next(f=>s.ai.removeMatchingKeysForTargetId(h,c.targetId).next(()=>s.ai.addMatchingKeys(h,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(h,f.xs,f.Os)).next(()=>f.xs)))}async function vI(r,e,t=j()){const n=await or(r,Fe(nu(e.bundledQuery))),s=M(r);return s.persistence.runTransaction("Save named query","readwrite",i=>{const a=me(e.readTime);if(n.snapshotVersion.compareTo(a)>=0)return s.ci.saveNamedQuery(i,e);const u=n.withResumeToken(de.EMPTY_BYTE_STRING,a);return s.Ss=s.Ss.insert(u.targetId,u),s.ai.updateTargetData(i,u).next(()=>s.ai.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>s.ai.addMatchingKeys(i,t,n.targetId)).next(()=>s.ci.saveNamedQuery(i,e))})}/**
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
 */const jf="firestore_clients";function sh(r,e){return`${jf}_${r}_${e}`}const Gf="firestore_mutations";function ih(r,e,t){let n=`${Gf}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const Kf="firestore_targets";function Ko(r,e){return`${Kf}_${r}_${e}`}/**
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
 */const Ye="SharedClientState";class Ni{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static qs(e,t,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new C(s.error.code,s.error.message))),a?new Ni(e,t,s.state,i):(fe(Ye,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Xr{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static qs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new C(n.error.code,n.error.message))),i?new Xr(e,n.state,s):(fe(Ye,`Failed to parse target state for ID '${e}': ${t}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ki{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static qs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Wa();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=_d(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new ki(e,i):(fe(Ye,`Failed to parse client data for instance '${e}': ${t}`),null)}}class hu{constructor(e,t){this.clientId=e,this.onlineState=t}static qs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new hu(t.clientId,t.onlineState):(fe(Ye,`Failed to parse online state: ${e}`),null)}}class Ea{constructor(){this.activeTargetIds=Wa()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qo{constructor(e,t,n,s,i){this.window=e,this.bi=t,this.persistenceKey=n,this.Ks=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ws=this.Gs.bind(this),this.zs=new re(q),this.started=!1,this.js=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Hs=sh(this.persistenceKey,this.Ks),this.Js=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.zs=this.zs.insert(this.Ks,new Ea),this.Ys=new RegExp(`^${jf}_${a}_([^_]*)$`),this.Zs=new RegExp(`^${Gf}_${a}_(\\d+)(?:_(.*))?$`),this.Xs=new RegExp(`^${Kf}_${a}_(\\d+)$`),this.eo=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.no=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ws)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.us();for(const n of e){if(n===this.Ks)continue;const s=this.getItem(sh(this.persistenceKey,n));if(s){const i=ki.qs(n,s);i&&(this.zs=this.zs.insert(i.clientId,i))}}this.ro();const t=this.storage.getItem(this.eo);if(t){const n=this.io(t);n&&this.so(n)}for(const n of this.js)this.Gs(n);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Js,JSON.stringify(e))}getAllActiveQueryTargets(){return this.oo(this.zs)}isActiveQueryTarget(e){let t=!1;return this.zs.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this._o(e,"pending")}updateMutationState(e,t,n){this._o(e,t,n),this.ao(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Ko(this.persistenceKey,e));if(s){const i=Xr.qs(e,s);i&&(n=i.state)}}return t&&this.uo.$s(e),this.ro(),n}removeLocalQueryTarget(e){this.uo.Us(e),this.ro()}isLocalQueryTarget(e){return this.uo.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ko(this.persistenceKey,e))}updateQueryState(e,t,n){this.co(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.ao(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.lo(e)}notifyBundleLoaded(e){this.ho(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ws),this.removeItem(this.Hs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return D(Ye,"READ",e,t),t}setItem(e,t){D(Ye,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){D(Ye,"REMOVE",e),this.storage.removeItem(e)}Gs(e){const t=e;if(t.storageArea===this.storage){if(D(Ye,"EVENT",t.key,t.newValue),t.key===this.Hs)return void fe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.bi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ys.test(t.key)){if(t.newValue==null){const n=this.Po(t.key);return this.To(n,null)}{const n=this.Io(t.key,t.newValue);if(n)return this.To(n.clientId,n)}}else if(this.Zs.test(t.key)){if(t.newValue!==null){const n=this.Eo(t.key,t.newValue);if(n)return this.Ao(n)}}else if(this.Xs.test(t.key)){if(t.newValue!==null){const n=this.Ro(t.key,t.newValue);if(n)return this.Vo(n)}}else if(t.key===this.eo){if(t.newValue!==null){const n=this.io(t.newValue);if(n)return this.so(n)}}else if(t.key===this.Js){const n=function(i){let a=Be.le;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number",30636,{mo:i}),a=u}catch(u){fe(Ye,"Failed to read sequence number from WebStorage",u)}return a}(t.newValue);n!==Be.le&&this.sequenceNumberHandler(n)}else if(t.key===this.no){const n=this.fo(t.newValue);await Promise.all(n.map(s=>this.syncEngine.po(s)))}}}else this.js.push(t)})}}get uo(){return this.zs.get(this.Ks)}ro(){this.setItem(this.Hs,this.uo.Qs())}_o(e,t,n){const s=new Ni(this.currentUser,e,t,n),i=ih(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Qs())}ao(e){const t=ih(this.persistenceKey,this.currentUser,e);this.removeItem(t)}lo(e){const t={clientId:this.Ks,onlineState:e};this.storage.setItem(this.eo,JSON.stringify(t))}co(e,t,n){const s=Ko(this.persistenceKey,e),i=new Xr(e,t,n);this.setItem(s,i.Qs())}ho(e){const t=JSON.stringify(Array.from(e));this.setItem(this.no,t)}Po(e){const t=this.Ys.exec(e);return t?t[1]:null}Io(e,t){const n=this.Po(e);return ki.qs(n,t)}Eo(e,t){const n=this.Zs.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Ni.qs(new Ee(i),s,t)}Ro(e,t){const n=this.Xs.exec(e),s=Number(n[1]);return Xr.qs(s,t)}io(e){return hu.qs(e)}fo(e){return JSON.parse(e)}async Ao(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.yo(e.batchId,e.state,e.error);D(Ye,`Ignoring mutation for non-active user ${e.user.uid}`)}Vo(e){return this.syncEngine.wo(e.targetId,e.state,e.error)}To(e,t){const n=t?this.zs.insert(e,t):this.zs.remove(e),s=this.oo(this.zs),i=this.oo(n),a=[],u=[];return i.forEach(c=>{s.has(c)||a.push(c)}),s.forEach(c=>{i.has(c)||u.push(c)}),this.syncEngine.bo(a,u).then(()=>{this.zs=n})}so(e){this.zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}oo(e){let t=Wa();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Qf{constructor(){this.So=new Ea,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,n){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new Ea,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wI{vo(e){}shutdown(){}}/**
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
 */const oh="ConnectivityMonitor";class ah{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){D(oh,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){D(oh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let si=null;function Ta(){return si===null?si=function(){return 268435456+Math.round(2147483648*Math.random())}():si++,"0x"+si.toString(16)}/**
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
 */const Wo="RestConnection",AI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bI{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${n}/databases/${s}`,this.qo=this.databaseId.database===oa?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Qo(e,t,n,s,i){const a=Ta(),u=this.$o(e,t.toUriEncodedString());D(Wo,`Sending RPC '${e}' ${a}:`,u,n);const c={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(c,s,i);const{host:h}=new URL(u),f=Uh(h);return this.Ko(e,u,c,n,f).then(g=>(D(Wo,`Received RPC '${e}' ${a}: `,g),g),g=>{throw nt(Wo,`RPC '${e}' ${a} failed with error: `,g,"url: ",u,"request:",n),g})}Wo(e,t,n,s,i,a){return this.Qo(e,t,n,s,i)}Uo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s)}$o(e,t){const n=AI[e];return`${this.Lo}/v1/${t}:${n}`}terminate(){}}/**
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
 */class RI{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
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
 */const Ve="WebChannelConnection";class SI extends bI{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,n,s,i){const a=Ta();return new Promise((u,c)=>{const h=new rd;h.setWithCredentials(!0),h.listenOnce(sd.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ii.NO_ERROR:const g=h.getResponseJson();D(Ve,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),u(g);break;case ii.TIMEOUT:D(Ve,`RPC '${e}' ${a} timed out`),c(new C(S.DEADLINE_EXCEEDED,"Request time out"));break;case ii.HTTP_ERROR:const _=h.getStatus();if(D(Ve,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const N=function($){const z=$.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(z)>=0?z:S.UNKNOWN}(V.status);c(new C(N,V.message))}else c(new C(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new C(S.UNAVAILABLE,"Connection failed."));break;default:F(9055,{s_:e,streamId:a,o_:h.getLastErrorCode(),__:h.getLastError()})}}finally{D(Ve,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);D(Ve,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,n,15)})}a_(e,t,n){const s=Ta(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ad(),u=od(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Uo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const f=i.join("");D(Ve,`Creating RPC '${e}' stream ${s}: ${f}`,c);const g=a.createWebChannel(f,c);let _=!1,R=!1;const V=new RI({Go:x=>{R?D(Ve,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(_||(D(Ve,`Opening RPC '${e}' stream ${s} transport.`),g.open(),_=!0),D(Ve,`RPC '${e}' stream ${s} sending:`,x),g.send(x))},zo:()=>g.close()}),N=(x,$,z)=>{x.listen($,U=>{try{z(U)}catch(X){setTimeout(()=>{throw X},0)}})};return N(g,$r.EventType.OPEN,()=>{R||(D(Ve,`RPC '${e}' stream ${s} transport opened.`),V.t_())}),N(g,$r.EventType.CLOSE,()=>{R||(R=!0,D(Ve,`RPC '${e}' stream ${s} transport closed`),V.r_())}),N(g,$r.EventType.ERROR,x=>{R||(R=!0,nt(Ve,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),V.r_(new C(S.UNAVAILABLE,"The operation could not be completed")))}),N(g,$r.EventType.MESSAGE,x=>{var $;if(!R){const z=x.data[0];L(!!z,16349);const U=z,X=(U==null?void 0:U.error)||(($=U[0])===null||$===void 0?void 0:$.error);if(X){D(Ve,`RPC '${e}' stream ${s} received error:`,X);const ne=X.status;let H=function(I){const T=pe[I];if(T!==void 0)return af(T)}(ne),E=X.message;H===void 0&&(H=S.INTERNAL,E="Unknown error status: "+ne+" with message "+X.message),R=!0,V.r_(new C(H,E)),g.close()}else D(Ve,`RPC '${e}' stream ${s} received:`,z),V.i_(z)}}),N(u,id.STAT_EVENT,x=>{x.stat===Zo.PROXY?D(Ve,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Zo.NOPROXY&&D(Ve,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.n_()},0),V}}/**
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
 */function Wf(){return typeof window<"u"?window:null}function mi(){return typeof document<"u"?document:null}/**
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
 */function Ss(r){return new xy(r,!0)}/**
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
 */class du{constructor(e,t,n=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=t,this.u_=n,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),n=Math.max(0,Date.now()-this.T_),s=Math.max(0,t-n);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const uh="PersistentStream";class Hf{constructor(e,t,n,s,i,a,u,c){this.bi=e,this.R_=n,this.V_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new du(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(fe(t.toString()),fe("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.m_===t&&this.B_(n,s)},n=>{e(()=>{const s=new C(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.L_(s)})})}B_(e,t){const n=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{n(()=>this.listener.jo())}),this.stream.Jo(()=>{n(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{n(()=>this.L_(s))}),this.stream.onMessage(s=>{n(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return D(uh,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(D(uh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PI extends Hf{constructor(e,t,n,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}k_(e,t){return this.connection.a_("Listen",e,t)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const t=Oy(this.serializer,e),n=function(i){if(!("targetChange"in i))return B.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?me(a.readTime):B.min()}(e);return this.listener.Q_(t,n)}U_(e){const t={};t.database=ga(this.serializer),t.addTarget=function(i,a){let u;const c=a.target;if(u=bi(c)?{documents:pf(i,c)}:{query:_f(i,c).gt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=lf(i,a.resumeToken);const h=fa(i,a.expectedCount);h!==null&&(u.expectedCount=h)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=ir(i,a.snapshotVersion.toTimestamp());const h=fa(i,a.expectedCount);h!==null&&(u.expectedCount=h)}return u}(this.serializer,e);const n=Fy(this.serializer,e);n&&(t.labels=n),this.F_(t)}K_(e){const t={};t.database=ga(this.serializer),t.removeTarget=e,this.F_(t)}}class VI extends Hf{constructor(e,t,n,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,t){return this.connection.a_("Write",e,t)}q_(e){return L(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,L(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){L(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const t=My(e.writeResults,e.commitTime),n=me(e.commitTime);return this.listener.j_(n,t)}H_(){const e={};e.database=ga(this.serializer),this.F_(e)}G_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>ds(this.serializer,n))};this.F_(t)}}/**
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
 */class CI{}class DI extends CI{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,n,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Qo(e,ma(t,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(S.UNKNOWN,i.toString())})}Wo(e,t,n,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Wo(e,ma(t,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new C(S.UNKNOWN,a.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class xI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(fe(t),this.ea=!1):D("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
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
 */const En="RemoteStore";class NI{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(a=>{n.enqueueAndForget(async()=>{Kt(this)&&(D(En,"Restarting streams for network reachability change."),await async function(c){const h=M(c);h.aa.add(4),await _r(h),h.la.set("Unknown"),h.aa.delete(4),await Ps(h)}(this))})}),this.la=new xI(n,s)}}async function Ps(r){if(Kt(r))for(const e of r.ua)await e(!0)}async function _r(r){for(const e of r.ua)await e(!1)}function Ji(r,e){const t=M(r);t._a.has(e.targetId)||(t._a.set(e.targetId,e),gu(t)?mu(t):Ir(t).b_()&&fu(t,e))}function ur(r,e){const t=M(r),n=Ir(t);t._a.delete(e),n.b_()&&Yf(t,e),t._a.size===0&&(n.b_()?n.v_():Kt(t)&&t.la.set("Unknown"))}function fu(r,e){if(r.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ir(r).U_(e)}function Yf(r,e){r.ha.Ke(e),Ir(r).K_(e)}function mu(r){r.ha=new Py({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>r._a.get(e)||null,Pt:()=>r.datastore.serializer.databaseId}),Ir(r).start(),r.la.ta()}function gu(r){return Kt(r)&&!Ir(r).w_()&&r._a.size>0}function Kt(r){return M(r).aa.size===0}function Jf(r){r.ha=void 0}async function kI(r){r.la.set("Online")}async function OI(r){r._a.forEach((e,t)=>{fu(r,e)})}async function MI(r,e){Jf(r),gu(r)?(r.la.ia(e),mu(r)):r.la.set("Unknown")}async function FI(r,e,t){if(r.la.set("Online"),e instanceof cf&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s._a.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s._a.delete(u),s.ha.removeTarget(u))}(r,e)}catch(n){D(En,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Oi(r,n)}else if(e instanceof fi?r.ha.Xe(e):e instanceof uf?r.ha.ot(e):r.ha.nt(e),!t.isEqual(B.min()))try{const n=await Bf(r.localStore);t.compareTo(n)>=0&&await function(i,a){const u=i.ha.It(a);return u.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i._a.get(h);f&&i._a.set(h,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,h)=>{const f=i._a.get(c);if(!f)return;i._a.set(c,f.withResumeToken(de.EMPTY_BYTE_STRING,f.snapshotVersion)),Yf(i,c);const g=new ut(f.target,c,h,f.sequenceNumber);fu(i,g)}),i.remoteSyncer.applyRemoteEvent(u)}(r,t)}catch(n){D(En,"Failed to raise snapshot:",n),await Oi(r,n)}}async function Oi(r,e,t){if(!jt(e))throw e;r.aa.add(1),await _r(r),r.la.set("Offline"),t||(t=()=>Bf(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{D(En,"Retrying IndexedDB access"),await t(),r.aa.delete(1),await Ps(r)})}function Xf(r,e){return e().catch(t=>Oi(r,t,e))}async function yr(r){const e=M(r),t=Bt(e);let n=e.oa.length>0?e.oa[e.oa.length-1].batchId:Ct;for(;LI(e);)try{const s=await EI(e.localStore,n);if(s===null){e.oa.length===0&&t.v_();break}n=s.batchId,BI(e,s)}catch(s){await Oi(e,s)}Zf(e)&&em(e)}function LI(r){return Kt(r)&&r.oa.length<10}function BI(r,e){r.oa.push(e);const t=Bt(r);t.b_()&&t.W_&&t.G_(e.mutations)}function Zf(r){return Kt(r)&&!Bt(r).w_()&&r.oa.length>0}function em(r){Bt(r).start()}async function UI(r){Bt(r).H_()}async function qI(r){const e=Bt(r);for(const t of r.oa)e.G_(t.mutations)}async function zI(r,e,t){const n=r.oa.shift(),s=Xa.from(n,e,t);await Xf(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await yr(r)}async function $I(r,e){e&&Bt(r).W_&&await async function(n,s){if(function(a){return of(a)&&a!==S.ABORTED}(s.code)){const i=n.oa.shift();Bt(n).D_(),await Xf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yr(n)}}(r,e),Zf(r)&&em(r)}async function ch(r,e){const t=M(r);t.asyncQueue.verifyOperationInProgress(),D(En,"RemoteStore received new credentials");const n=Kt(t);t.aa.add(3),await _r(t),n&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await Ps(t)}async function va(r,e){const t=M(r);e?(t.aa.delete(2),await Ps(t)):e||(t.aa.add(2),await _r(t),t.la.set("Unknown"))}function Ir(r){return r.Pa||(r.Pa=function(t,n,s){const i=M(t);return i.Y_(),new PI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{jo:kI.bind(null,r),Jo:OI.bind(null,r),Zo:MI.bind(null,r),Q_:FI.bind(null,r)}),r.ua.push(async e=>{e?(r.Pa.D_(),gu(r)?mu(r):r.la.set("Unknown")):(await r.Pa.stop(),Jf(r))})),r.Pa}function Bt(r){return r.Ta||(r.Ta=function(t,n,s){const i=M(t);return i.Y_(),new VI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{jo:()=>Promise.resolve(),Jo:UI.bind(null,r),Zo:$I.bind(null,r),z_:qI.bind(null,r),j_:zI.bind(null,r)}),r.ua.push(async e=>{e?(r.Ta.D_(),await yr(r)):(await r.Ta.stop(),r.oa.length>0&&(D(En,`Stopping write stream with ${r.oa.length} pending writes`),r.oa=[]))})),r.Ta}/**
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
 */class pu{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const a=Date.now()+n,u=new pu(e,t,a,s,i);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Er(r,e){if(fe("AsyncQueue",`${e}: ${r}`),jt(r))return new C(S.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class $n{static emptySet(e){return new $n(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||O.comparator(t.key,n.key):(t,n)=>O.comparator(t.key,n.key),this.keyedMap=jr(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $n)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new $n;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class lh{constructor(){this.Ia=new re(O.comparator)}track(e){const t=e.doc.key,n=this.Ia.get(t);n?e.type!==0&&n.type===3?this.Ia=this.Ia.insert(t,e):e.type===3&&n.type!==1?this.Ia=this.Ia.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Ia=this.Ia.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Ia=this.Ia.remove(t):e.type===1&&n.type===2?this.Ia=this.Ia.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):F(63341,{Vt:e,Ea:n}):this.Ia=this.Ia.insert(t,e)}da(){const e=[];return this.Ia.inorderTraversal((t,n)=>{e.push(n)}),e}}class cr{constructor(e,t,n,s,i,a,u,c,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new cr(e,t,$n.emptySet(t),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class jI{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class GI{constructor(){this.queries=hh(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,n){const s=M(t),i=s.queries;s.queries=hh(),i.forEach((a,u)=>{for(const c of u.Ra)c.onError(n)})})(this,new C(S.ABORTED,"Firestore shutting down"))}}function hh(){return new mt(r=>Gd(r),vs)}async function _u(r,e){const t=M(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Va()&&e.ma()&&(n=2):(i=new jI,n=e.ma()?0:1);try{switch(n){case 0:i.Aa=await t.onListen(s,!0);break;case 1:i.Aa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=Er(a,`Initialization of query '${Ln(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.Ra.push(e),e.ga(t.onlineState),i.Aa&&e.pa(i.Aa)&&Iu(t)}async function yu(r,e){const t=M(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const a=i.Ra.indexOf(e);a>=0&&(i.Ra.splice(a,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function KI(r,e){const t=M(r);let n=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const u of a.Ra)u.pa(s)&&(n=!0);a.Aa=s}}n&&Iu(t)}function QI(r,e,t){const n=M(r),s=n.queries.get(e);if(s)for(const i of s.Ra)i.onError(t);n.queries.delete(e)}function Iu(r){r.fa.forEach(e=>{e.next()})}var wa,dh;(dh=wa||(wa={})).ya="default",dh.Cache="cache";class Eu{constructor(e,t,n){this.query=e,this.wa=t,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=n||{}}pa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new cr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ba?this.Da(e)&&(this.wa.next(e),t=!0):this.va(e,this.onlineState)&&(this.Ca(e),t=!0),this.Sa=e,t}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let t=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),t=!0),t}va(e,t){if(!e.fromCache||!this.ma())return!0;const n=t!=="Offline";return(!this.options.Fa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const t=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ca(e){e=cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==wa.Cache}}/**
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
 */class WI{constructor(e,t){this.Ma=e,this.byteLength=t}xa(){return"metadata"in this.Ma}}/**
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
 */class fh{constructor(e){this.serializer=e}Bs(e){return tt(this.serializer,e)}Ls(e){return e.metadata.exists?gf(this.serializer,e.document,!1):ie.newNoDocument(this.Bs(e.metadata.name),this.ks(e.metadata.readTime))}ks(e){return me(e)}}class HI{constructor(e,t,n){this.Oa=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=tm(e)}Na(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ma.namedQuery)this.queries.push(e.Ma.namedQuery);else if(e.Ma.documentMetadata){this.documents.push({metadata:e.Ma.documentMetadata}),e.Ma.documentMetadata.exists||++t;const n=G.fromString(e.Ma.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Ma.document&&(this.documents[this.documents.length-1].document=e.Ma.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ba(e){const t=new Map,n=new fh(this.serializer);for(const s of e)if(s.metadata.queries){const i=n.Bs(s.metadata.name);for(const a of s.metadata.queries){const u=(t.get(a)||j()).add(i);t.set(a,u)}}return t}async complete(){const e=await TI(this.localStore,new fh(this.serializer),this.documents,this.Oa.id),t=this.Ba(this.documents);for(const n of this.queries)await vI(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,La:this.collectionGroups,ka:e}}}function tm(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class nm{constructor(e){this.key=e}}class rm{constructor(e){this.key=e}}class sm{constructor(e,t){this.query=e,this.qa=t,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=j(),this.mutatedKeys=j(),this.Ua=Qd(e),this.Ka=new $n(this.Ua)}get Wa(){return this.qa}Ga(e,t){const n=t?t.za:new lh,s=t?t.Ka:this.Ka;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const _=s.get(f),R=ws(this.query,g)?g:null,V=!!_&&this.mutatedKeys.has(_.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let x=!1;_&&R?_.data.isEqual(R.data)?V!==N&&(n.track({type:3,doc:R}),x=!0):this.ja(_,R)||(n.track({type:2,doc:R}),x=!0,(c&&this.Ua(R,c)>0||h&&this.Ua(R,h)<0)&&(u=!0)):!_&&R?(n.track({type:0,doc:R}),x=!0):_&&!R&&(n.track({type:1,doc:_}),x=!0,(c||h)&&(u=!0)),x&&(R?(a=a.add(R),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ka:a,za:n,ys:u,mutatedKeys:i}}ja(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const a=e.za.da();a.sort((f,g)=>function(R,V){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Vt:x})}};return N(R)-N(V)}(f.type,g.type)||this.Ua(f.doc,g.doc)),this.Ha(n),s=s!=null&&s;const u=t&&!s?this.Ja():[],c=this.$a.size===0&&this.current&&!s?1:0,h=c!==this.Qa;return this.Qa=c,a.length!==0||h?{snapshot:new cr(this.query,e.Ka,i,a,e.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ya:u}:{Ya:u}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new lh,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(t=>this.qa=this.qa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qa=this.qa.delete(t)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=j(),this.Ka.forEach(n=>{this.Za(n.key)&&(this.$a=this.$a.add(n.key))});const t=[];return e.forEach(n=>{this.$a.has(n)||t.push(new rm(n))}),this.$a.forEach(n=>{e.has(n)||t.push(new nm(n))}),t}Xa(e){this.qa=e.Ns,this.$a=j();const t=this.Ga(e.documents);return this.applyChanges(t,!0)}eu(){return cr.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Qt="SyncEngine";class YI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class JI{constructor(e){this.key=e,this.tu=!1}}class XI{constructor(e,t,n,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.nu={},this.ru=new mt(u=>Gd(u),vs),this.iu=new Map,this.su=new Set,this.ou=new re(O.comparator),this._u=new Map,this.au=new iu,this.uu={},this.cu=new Map,this.lu=In.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function ZI(r,e,t=!0){const n=Xi(r);let s;const i=n.ru.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await im(n,e,t,!0),s}async function eE(r,e){const t=Xi(r);await im(t,e,!0,!1)}async function im(r,e,t,n){const s=await or(r.localStore,Fe(e)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,t);let u;return n&&(u=await Tu(r,e,i,a==="current",s.resumeToken)),r.isPrimaryClient&&t&&Ji(r.remoteStore,s),u}async function Tu(r,e,t,n,s){r.Pu=(g,_,R)=>async function(N,x,$,z){let U=x.view.Ga($);U.ys&&(U=await xi(N.localStore,x.query,!1).then(({documents:E})=>x.view.Ga(E,U)));const X=z&&z.targetChanges.get(x.targetId),ne=z&&z.targetMismatches.get(x.targetId)!=null,H=x.view.applyChanges(U,N.isPrimaryClient,X,ne);return Aa(N,x.targetId,H.Ya),H.snapshot}(r,g,_,R);const i=await xi(r.localStore,e,!0),a=new sm(e,i.Ns),u=a.Ga(i.documents),c=Rs.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=a.applyChanges(u,r.isPrimaryClient,c);Aa(r,t,h.Ya);const f=new YI(e,t,a);return r.ru.set(e,f),r.iu.has(t)?r.iu.get(t).push(e):r.iu.set(t,[e]),h.snapshot}async function tE(r,e,t){const n=M(r),s=n.ru.get(e),i=n.iu.get(s.targetId);if(i.length>1)return n.iu.set(s.targetId,i.filter(a=>!vs(a,e))),void n.ru.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ar(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&ur(n.remoteStore,s.targetId),lr(n,s.targetId)}).catch($t)):(lr(n,s.targetId),await ar(n.localStore,s.targetId,!0))}async function nE(r,e){const t=M(r),n=t.ru.get(e),s=t.iu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ur(t.remoteStore,n.targetId))}async function rE(r,e,t){const n=bu(r);try{const s=await function(a,u){const c=M(a),h=ce.now(),f=u.reduce((R,V)=>R.add(V.key),j());let g,_;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let V=qe(),N=j();return c.Cs.getEntries(R,f).next(x=>{V=x,V.forEach(($,z)=>{z.isValidDocument()||(N=N.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,V)).next(x=>{g=x;const $=[];for(const z of u){const U=by(z,g.get(z.key).overlayedDocument);U!=null&&$.push(new gt(z.key,U,Md(U.value.mapValue),ue.exists(!0)))}return c.mutationQueue.addMutationBatch(R,h,$,u)}).next(x=>{_=x;const $=x.applyToLocalDocumentSet(g,N);return c.documentOverlayCache.saveOverlays(R,x.batchId,$)})}).then(()=>({batchId:_.batchId,changes:Hd(g)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,c){let h=a.uu[a.currentUser.toKey()];h||(h=new re(q)),h=h.insert(u,c),a.uu[a.currentUser.toKey()]=h}(n,s.batchId,t),await pt(n,s.changes),await yr(n.remoteStore)}catch(s){const i=Er(s,"Failed to persist write");t.reject(i)}}async function om(r,e){const t=M(r);try{const n=await II(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t._u.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.tu=!0:s.modifiedDocuments.size>0?L(a.tu,14607):s.removedDocuments.size>0&&(L(a.tu,42227),a.tu=!1))}),await pt(t,n,e)}catch(n){await $t(n)}}function mh(r,e,t){const n=M(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.ru.forEach((i,a)=>{const u=a.view.ga(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const c=M(a);c.onlineState=u;let h=!1;c.queries.forEach((f,g)=>{for(const _ of g.Ra)_.ga(u)&&(h=!0)}),h&&Iu(c)}(n.eventManager,e),s.length&&n.nu.Q_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function sE(r,e,t){const n=M(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n._u.get(e),i=s&&s.key;if(i){let a=new re(O.comparator);a=a.insert(i,ie.newNoDocument(i,B.min()));const u=j().add(i),c=new bs(B.min(),new Map,new re(q),a,u);await om(n,c),n.ou=n.ou.remove(i),n._u.delete(e),Au(n)}else await ar(n.localStore,e,!1).then(()=>lr(n,e,t)).catch($t)}async function iE(r,e){const t=M(r),n=e.batch.batchId;try{const s=await yI(t.localStore,e);wu(t,n,null),vu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await pt(t,s)}catch(s){await $t(s)}}async function oE(r,e,t){const n=M(r);try{const s=await function(a,u){const c=M(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,u).next(g=>(L(g!==null,37113),f=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(n.localStore,e);wu(n,e,t),vu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await pt(n,s)}catch(s){await $t(s)}}async function aE(r,e){const t=M(r);Kt(t.remoteStore)||D(Qt,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(a){const u=M(a);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(n===Ct)return void e.resolve();const s=t.cu.get(n)||[];s.push(e),t.cu.set(n,s)}catch(n){const s=Er(n,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function vu(r,e){(r.cu.get(e)||[]).forEach(t=>{t.resolve()}),r.cu.delete(e)}function wu(r,e,t){const n=M(r);let s=n.uu[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.uu[n.currentUser.toKey()]=s}}function lr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.iu.get(e))r.ru.delete(n),t&&r.nu.Tu(n,t);r.iu.delete(e),r.isPrimaryClient&&r.au.Ur(e).forEach(n=>{r.au.containsKey(n)||am(r,n)})}function am(r,e){r.su.delete(e.path.canonicalString());const t=r.ou.get(e);t!==null&&(ur(r.remoteStore,t),r.ou=r.ou.remove(e),r._u.delete(t),Au(r))}function Aa(r,e,t){for(const n of t)n instanceof nm?(r.au.addReference(n.key,e),uE(r,n)):n instanceof rm?(D(Qt,"Document no longer in limbo: "+n.key),r.au.removeReference(n.key,e),r.au.containsKey(n.key)||am(r,n.key)):F(19791,{Iu:n})}function uE(r,e){const t=e.key,n=t.path.canonicalString();r.ou.get(t)||r.su.has(n)||(D(Qt,"New document in limbo: "+t),r.su.add(n),Au(r))}function Au(r){for(;r.su.size>0&&r.ou.size<r.maxConcurrentLimboResolutions;){const e=r.su.values().next().value;r.su.delete(e);const t=new O(G.fromString(e)),n=r.lu.next();r._u.set(n,new JI(t)),r.ou=r.ou.insert(t,n),Ji(r.remoteStore,new ut(Fe(mr(t.path)),n,"TargetPurposeLimboResolution",Be.le))}}async function pt(r,e,t){const n=M(r),s=[],i=[],a=[];n.ru.isEmpty()||(n.ru.forEach((u,c)=>{a.push(n.Pu(c,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const g=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=cu.Ps(c.targetId,h);i.push(g)}}))}),await Promise.all(a),n.nu.Q_(s),await async function(c,h){const f=M(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>w.forEach(h,_=>w.forEach(_.ls,R=>f.persistence.referenceDelegate.addReference(g,_.targetId,R)).next(()=>w.forEach(_.hs,R=>f.persistence.referenceDelegate.removeReference(g,_.targetId,R)))))}catch(g){if(!jt(g))throw g;D(lu,"Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const R=f.Ss.get(_),V=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(V);f.Ss=f.Ss.insert(_,N)}}}(n.localStore,i))}async function cE(r,e){const t=M(r);if(!t.currentUser.isEqual(e)){D(Qt,"User change. New user:",e.toKey());const n=await Lf(t.localStore,e);t.currentUser=e,function(i,a){i.cu.forEach(u=>{u.forEach(c=>{c.reject(new C(S.CANCELLED,a))})}),i.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await pt(t,n.Ms)}}function lE(r,e){const t=M(r),n=t._u.get(e);if(n&&n.tu)return j().add(n.key);{let s=j();const i=t.iu.get(e);if(!i)return s;for(const a of i){const u=t.ru.get(a);s=s.unionWith(u.view.Wa)}return s}}async function hE(r,e){const t=M(r),n=await xi(t.localStore,e.query,!0),s=e.view.Xa(n);return t.isPrimaryClient&&Aa(t,e.targetId,s.Ya),s}async function dE(r,e){const t=M(r);return zf(t.localStore,e).then(n=>pt(t,n))}async function fE(r,e,t,n){const s=M(r),i=await function(u,c){const h=M(u),f=M(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",g=>f.Hn(g,c).next(_=>_?h.localDocuments.getDocuments(g,_):w.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await yr(s.remoteStore):t==="acknowledged"||t==="rejected"?(wu(s,e,n||null),vu(s,e),function(u,c){M(M(u).mutationQueue).Xn(c)}(s.localStore,e)):F(6720,"Unknown batchState",{Eu:t}),await pt(s,i)):D(Qt,"Cannot apply mutation batch with id: "+e)}async function mE(r,e){const t=M(r);if(Xi(t),bu(t),e===!0&&t.hu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await gh(t,n.toArray());t.hu=!0,await va(t.remoteStore,!0);for(const i of s)Ji(t.remoteStore,i)}else if(e===!1&&t.hu!==!1){const n=[];let s=Promise.resolve();t.iu.forEach((i,a)=>{t.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then(()=>(lr(t,a),ar(t.localStore,a,!0))),ur(t.remoteStore,a)}),await s,await gh(t,n),function(a){const u=M(a);u._u.forEach((c,h)=>{ur(u.remoteStore,h)}),u.au.Kr(),u._u=new Map,u.ou=new re(O.comparator)}(t),t.hu=!1,await va(t.remoteStore,!1)}}async function gh(r,e,t){const n=M(r),s=[],i=[];for(const a of e){let u;const c=n.iu.get(a);if(c&&c.length!==0){u=await or(n.localStore,Fe(c[0]));for(const h of c){const f=n.ru.get(h),g=await hE(n,f);g.snapshot&&i.push(g.snapshot)}}else{const h=await qf(n.localStore,a);u=await or(n.localStore,h),await Tu(n,um(h),a,!1,u.resumeToken)}s.push(u)}return n.nu.Q_(i),s}function um(r){return jd(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function gE(r){return function(t){return M(M(t).persistence).us()}(M(r).localStore)}async function pE(r,e,t,n){const s=M(r);if(s.hu)return void D(Qt,"Ignoring unexpected query state notification.");const i=s.iu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const a=await zf(s.localStore,Kd(i[0])),u=bs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",de.EMPTY_BYTE_STRING);await pt(s,a,u);break}case"rejected":await ar(s.localStore,e,!0),lr(s,e,n);break;default:F(64155,t)}}async function _E(r,e,t){const n=Xi(r);if(n.hu){for(const s of e){if(n.iu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){D(Qt,"Adding an already active target "+s);continue}const i=await qf(n.localStore,s),a=await or(n.localStore,i);await Tu(n,um(i),a.targetId,!1,a.resumeToken),Ji(n.remoteStore,a)}for(const s of t)n.iu.has(s)&&await ar(n.localStore,s,!1).then(()=>{ur(n.remoteStore,s),lr(n,s)}).catch($t)}}function Xi(r){const e=M(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=om.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sE.bind(null,e),e.nu.Q_=KI.bind(null,e.eventManager),e.nu.Tu=QI.bind(null,e.eventManager),e}function bu(r){const e=M(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oE.bind(null,e),e}function yE(r,e,t){const n=M(r);(async function(i,a,u){try{const c=await a.getMetadata();if(await function(R,V){const N=M(R),x=me(V.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",$=>N.ci.getBundleMetadata($,V.id)).then($=>!!$&&$.createTime.compareTo(x)>=0)}(i.localStore,c))return await a.close(),u._completeWith(function(R){return{taskState:"Success",documentsLoaded:R.totalDocuments,bytesLoaded:R.totalBytes,totalDocuments:R.totalDocuments,totalBytes:R.totalBytes}}(c)),Promise.resolve(new Set);u._updateProgress(tm(c));const h=new HI(c,i.localStore,a.serializer);let f=await a.du();for(;f;){const _=await h.Na(f);_&&u._updateProgress(_),f=await a.du()}const g=await h.complete();return await pt(i,g.ka,void 0),await function(R,V){const N=M(R);return N.persistence.runTransaction("Save bundle","readwrite",x=>N.ci.saveBundleMetadata(x,V))}(i.localStore,c),u._completeWith(g.progress),Promise.resolve(g.La)}catch(c){return nt(Qt,`Loading bundle failed with ${c}`),u._failWith(c),Promise.resolve(new Set)}})(n,e,t).then(s=>{n.sharedClientState.notifyBundleLoaded(s)})}class fs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ss(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return Ff(this.persistence,new Mf,e.initialUser,this.serializer)}Ru(e){return new ou(Yi.Ei,this.serializer)}Au(e){return new Qf}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fs.provider={build:()=>new fs};class IE extends fs{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){L(this.persistence.referenceDelegate instanceof Di,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Cf(n,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new ou(n=>Di.Ei(n,t),this.serializer)}}class cm extends fs{constructor(e,t,n){super(),this.gu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.gu.initialize(this,e),await bu(this.gu.syncEngine),await yr(this.gu.remoteStore),await this.persistence.Ki(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Vu(e){return Ff(this.persistence,new Mf,e.initialUser,this.serializer)}mu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Cf(n,e.asyncQueue,t)}fu(e,t){const n=new P_(t,this.persistence);return new S_(e.asyncQueue,n)}Ru(e){const t=uu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new au(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Wf(),mi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Au(e){return new Qf}}class EE extends cm{constructor(e,t){super(e,t,!1),this.gu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.gu.syncEngine;this.sharedClientState instanceof Qo&&(this.sharedClientState.syncEngine={yo:fE.bind(null,t),wo:pE.bind(null,t),bo:_E.bind(null,t),us:gE.bind(null,t),po:dE.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ki(async n=>{await mE(this.gu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Au(e){const t=Wf();if(!Qo.C(t))throw new C(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=uu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Qo(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ms{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>mh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=cE.bind(null,this.syncEngine),await va(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new GI}()}createDatastore(e){const t=Ss(e.databaseInfo.databaseId),n=function(i){return new SI(i)}(e.databaseInfo);return function(i,a,u,c){return new DI(i,a,u,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,a,u){return new NI(n,s,i,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>mh(this.syncEngine,t,0),function(){return ah.C()?new ah:new wI}())}createSyncEngine(e,t){return function(s,i,a,u,c,h,f){const g=new XI(s,i,a,u,c,h);return f&&(g.hu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=M(s);D(En,"RemoteStore shutting down."),i.aa.add(5),await _r(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ms.provider={build:()=>new ms};function ph(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Zi{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):fe("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class TE{constructor(e,t){this.wu=e,this.serializer=t,this.metadata=new Ae,this.buffer=new Uint8Array,this.bu=function(){return new TextDecoder("utf-8")}(),this.Su().then(n=>{n&&n.xa()?this.metadata.resolve(n.Ma.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.Ma)}`))},n=>this.metadata.reject(n))}close(){return this.wu.cancel()}async getMetadata(){return this.metadata.promise}async du(){return await this.getMetadata(),this.Su()}async Su(){const e=await this.Du();if(e===null)return null;const t=this.bu.decode(e),n=Number(t);isNaN(n)&&this.vu(`length string (${t}) is not valid number`);const s=await this.Cu(n);return new WI(JSON.parse(s),e.length+n)}Fu(){return this.buffer.findIndex(e=>e===123)}async Du(){for(;this.Fu()<0&&!await this.Mu(););if(this.buffer.length===0)return null;const e=this.Fu();e<0&&this.vu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cu(e){for(;this.buffer.length<e;)await this.Mu()&&this.vu("Reached the end of bundle when more is expected.");const t=this.bu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}vu(e){throw this.wu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Mu(){const e=await this.wu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class vE{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new C(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(s,i){const a=M(s),u={documents:i.map(g=>hs(a.serializer,g))},c=await a.Wo("BatchGetDocuments",a.serializer.databaseId,G.emptyPath(),u,i.length),h=new Map;c.forEach(g=>{const _=ky(a.serializer,g);h.set(_.key.toString(),_)});const f=[];return i.forEach(g=>{const _=h.get(g.toString());L(!!_,55234,{key:g}),f.push(_)}),f}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new pr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const s=O.fromPath(n);this.mutations.push(new Ya(s,this.precondition(s)))}),await async function(n,s){const i=M(n),a={writes:s.map(u=>ds(i.serializer,u))};await i.Qo("Commit",i.serializer.databaseId,G.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw F(50498,{xu:e.constructor.name});t=B.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new C(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(B.min())?ue.exists(!1):ue.updateTime(t):ue.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(B.min()))throw new C(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ue.updateTime(t)}return ue.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class wE{constructor(e,t,n,s,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=s,this.deferred=i,this.Ou=n.maxAttempts,this.y_=new du(this.asyncQueue,"transaction_retry")}Nu(){this.Ou-=1,this.Bu()}Bu(){this.y_.E_(async()=>{const e=new vE(this.datastore),t=this.Lu(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.ku(s)}))}).catch(n=>{this.ku(n)})})}Lu(e){try{const t=this.updateFunction(e);return!Is(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ku(e){this.Ou>0&&this.qu(e)?(this.Ou-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bu(),Promise.resolve()))):this.deferred.reject(e)}qu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!of(t)}return!1}}/**
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
 */const Ut="FirestoreClient";class AE{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Ee.UNAUTHENTICATED,this.clientId=ld.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{D(Ut,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(D(Ut,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Er(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Ho(r,e){r.asyncQueue.verifyOperationInProgress(),D(Ut,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Lf(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function _h(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Ru(r);D(Ut,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>ch(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>ch(e.remoteStore,s)),r._onlineComponents=e}async function Ru(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D(Ut,"Using user provided OfflineComponentProvider");try{await Ho(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;nt("Error using user provided cache. Falling back to memory cache: "+t),await Ho(r,new fs)}}else D(Ut,"Using default OfflineComponentProvider"),await Ho(r,new IE(void 0));return r._offlineComponents}async function eo(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D(Ut,"Using user provided OnlineComponentProvider"),await _h(r,r._uninitializedComponentsProvider._online)):(D(Ut,"Using default OnlineComponentProvider"),await _h(r,new ms))),r._onlineComponents}function lm(r){return Ru(r).then(e=>e.persistence)}function Su(r){return Ru(r).then(e=>e.localStore)}function hm(r){return eo(r).then(e=>e.remoteStore)}function Pu(r){return eo(r).then(e=>e.syncEngine)}function bE(r){return eo(r).then(e=>e.datastore)}async function hr(r){const e=await eo(r),t=e.eventManager;return t.onListen=ZI.bind(null,e.syncEngine),t.onUnlisten=tE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=eE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nE.bind(null,e.syncEngine),t}function RE(r){return r.asyncQueue.enqueue(async()=>{const e=await lm(r),t=await hm(r);return e.setNetworkEnabled(!0),function(s){const i=M(s);return i.aa.delete(0),Ps(i)}(t)})}function SE(r){return r.asyncQueue.enqueue(async()=>{const e=await lm(r),t=await hm(r);return e.setNetworkEnabled(!1),async function(s){const i=M(s);i.aa.add(0),await _r(i),i.la.set("Offline")}(t)})}function PE(r,e){const t=new Ae;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await function(h,f){const g=M(h);return g.persistence.runTransaction("read document","readonly",_=>g.localDocuments.getDocument(_,f))}(s,i);u.isFoundDocument()?a.resolve(u):u.isNoDocument()?a.resolve(null):a.reject(new C(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const c=Er(u,`Failed to get document '${i} from cache`);a.reject(c)}}(await Su(r),e,t)),t.promise}function dm(r,e,t={}){const n=new Ae;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,h){const f=new Zi({next:_=>{f.yu(),a.enqueueAndForget(()=>yu(i,g));const R=_.docs.has(u);!R&&_.fromCache?h.reject(new C(S.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&_.fromCache&&c&&c.source==="server"?h.reject(new C(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Eu(mr(u.path),f,{includeMetadataChanges:!0,Fa:!0});return _u(i,g)}(await hr(r),r.asyncQueue,e,t,n)),n.promise}function VE(r,e){const t=new Ae;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await xi(s,i,!0),c=new sm(i,u.Ns),h=c.Ga(u.documents),f=c.applyChanges(h,!1);a.resolve(f.snapshot)}catch(u){const c=Er(u,`Failed to execute query '${i} against cache`);a.reject(c)}}(await Su(r),e,t)),t.promise}function fm(r,e,t={}){const n=new Ae;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,h){const f=new Zi({next:_=>{f.yu(),a.enqueueAndForget(()=>yu(i,g)),_.fromCache&&c.source==="server"?h.reject(new C(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Eu(u,f,{includeMetadataChanges:!0,Fa:!0});return _u(i,g)}(await hr(r),r.asyncQueue,e,t,n)),n.promise}function CE(r,e){const t=new Zi(e);return r.asyncQueue.enqueueAndForget(async()=>function(s,i){M(s).fa.add(i),i.next()}(await hr(r),t)),()=>{t.yu(),r.asyncQueue.enqueueAndForget(async()=>function(s,i){M(s).fa.delete(i)}(await hr(r),t))}}function DE(r,e,t,n){const s=function(a,u){let c;return c=typeof a=="string"?Fa().encode(a):a,function(f,g){return new TE(f,g)}(function(f,g){if(f instanceof Uint8Array)return ph(f,g);if(f instanceof ArrayBuffer)return ph(new Uint8Array(f),g);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),u)}(t,Ss(e));r.asyncQueue.enqueueAndForget(async()=>{yE(await Pu(r),s,n)})}function xE(r,e){return r.asyncQueue.enqueue(async()=>function(n,s){const i=M(n);return i.persistence.runTransaction("Get named query","readonly",a=>i.ci.getNamedQuery(a,s))}(await Su(r),e))}/**
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
 */function mm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const yh=new Map;/**
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
 */function Vu(r,e,t){if(!t)throw new C(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function gm(r,e,t,n){if(e===!0&&n===!0)throw new C(S.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ih(r){if(!O.isDocumentKey(r))throw new C(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Eh(r){if(O.isDocumentKey(r))throw new C(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function to(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":F(12329,{type:typeof r})}function J(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new C(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=to(r);throw new C(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function pm(r,e){if(e<=0)throw new C(S.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */const _m="firestore.googleapis.com",Th=!0;class vh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_m,this.ssl=Th}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Th;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Zy)throw new C(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mm((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vs{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new p_;switch(n.type){case"firstParty":return new E_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=yh.get(t);n&&(D("ComponentProvider","Removing Datastore"),yh.delete(t),n.terminate())}(this),Promise.resolve()}}function NE(r,e,t,n={}){var s;r=J(r,Vs);const i=Uh(e),a=r._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:r._getEmulatorOptions()}),c=`${e}:${t}`;i&&$g(`https://${c}`),a.host!==_m&&a.host!==c&&nt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:n});if(!jn(h,u)&&(r._setSettings(h),n.mockUserToken)){let f,g;if(typeof n.mockUserToken=="string")f=n.mockUserToken,g=Ee.MOCK_USER;else{f=Ng(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const _=n.mockUserToken.sub||n.mockUserToken.user_id;if(!_)throw new C(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ee(_)}r._authCredentials=new __(new cd(f,g))}}/**
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
 */let Le=class ym{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ym(this.firestore,e,this._query)}},le=class Im{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Im(this.firestore,e,this._key)}},Dt=class Em extends Le{constructor(e,t,n){super(e,t,mr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new O(e))}withConverter(e){return new Em(this.firestore,e,this._path)}};function Tm(r,e,...t){if(r=_e(r),Vu("collection","path",e),r instanceof Vs){const n=G.fromString(e,...t);return Eh(n),new Dt(r,null,n)}{if(!(r instanceof le||r instanceof Dt))throw new C(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(G.fromString(e,...t));return Eh(n),new Dt(r.firestore,null,n)}}function kE(r,e){if(r=J(r,Vs),Vu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Le(r,null,function(n){return new ft(G.emptyPath(),n)}(e))}function Mi(r,e,...t){if(r=_e(r),arguments.length===1&&(e=ld.newId()),Vu("doc","path",e),r instanceof Vs){const n=G.fromString(e,...t);return Ih(n),new le(r,null,new O(n))}{if(!(r instanceof le||r instanceof Dt))throw new C(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(G.fromString(e,...t));return Ih(n),new le(r.firestore,r instanceof Dt?r.converter:null,new O(n))}}function vm(r,e){return r=_e(r),e=_e(e),(r instanceof le||r instanceof Dt)&&(e instanceof le||e instanceof Dt)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function wm(r,e){return r=_e(r),e=_e(e),r instanceof Le&&e instanceof Le&&r.firestore===e.firestore&&vs(r._query,e._query)&&r.converter===e.converter}/**
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
 */const wh="AsyncQueue";class Ah{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new du(this,"async_queue_retry"),this.ju=()=>{const n=mi();n&&D(wh,"Visibility state changed to "+n.visibilityState),this.y_.A_()},this.Hu=e;const t=mi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=mi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new Ae;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!jt(e))throw e;D(wh,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(n=>{throw this.Ku=n,this.Wu=!1,fe("INTERNAL UNHANDLED ERROR: ",bh(n)),n}).then(n=>(this.Wu=!1,n))));return this.Hu=t,t}enqueueAfterDelay(e,t,n){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const s=pu.createAndSchedule(this,e,t,n,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&F(47125,{ec:bh(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function bh(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function ba(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class OE{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ae,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const ME=-1;let ge=class extends Vs{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Ah,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ah(e),this._firestoreClient=void 0,await e}}};function xe(r){if(r._terminated)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Am(r),r._firestoreClient}function Am(r){var e,t,n;const s=r._freezeSettings(),i=function(u,c,h,f){return new ry(u,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,mm(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new AE(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}function FE(r,e){nt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return bm(r,ms.provider,{build:n=>new cm(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function LE(r){nt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();bm(r,ms.provider,{build:t=>new EE(t,e.cacheSizeBytes)})}function bm(r,e,t){if((r=J(r,ge))._firestoreClient||r._terminated)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new C(S.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},Am(r)}function BE(r){if(r._initialized&&!r._terminated)throw new C(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ae;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!et.C())return Promise.resolve();const s=n+Of;await et.delete(s)}(uu(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function UE(r){return function(t){const n=new Ae;return t.asyncQueue.enqueueAndForget(async()=>aE(await Pu(t),n)),n.promise}(xe(r=J(r,ge)))}function qE(r){return RE(xe(r=J(r,ge)))}function zE(r){return SE(xe(r=J(r,ge)))}function $E(r,e){const t=xe(r=J(r,ge)),n=new OE;return DE(t,r._databaseId,e,n),n}function jE(r,e){return xE(xe(r=J(r,ge)),e).then(t=>t?new Le(r,null,t.query):null)}/**
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
 */class no{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new C(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new C(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
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
 */class Cu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const GE=/^__.*__$/;class KE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new gt(e,this.data,this.fieldMask,t,this.fieldTransforms):new gr(e,this.data,t,this.fieldTransforms)}}class Rm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new gt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Sm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{oc:r})}}class ro{constructor(e,t,n,s,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new ro(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ac({path:n,cc:!1});return s.lc(e),s}hc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ac({path:n,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return Fi(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(Sm(this.oc)&&GE.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class QE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ss(e)}dc(e,t,n,s=!1){return new ro({oc:e,methodName:t,Ec:n,path:ae.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function An(r){const e=r._freezeSettings(),t=Ss(r._databaseId);return new QE(r._databaseId,!!e.ignoreUndefinedProperties,t)}function so(r,e,t,n,s,i={}){const a=r.dc(i.merge||i.mergeFields?2:0,e,t,s);Fu("Data must be an object, but it was:",a,n);const u=Cm(n,a);let c,h;if(i.merge)c=new Ue(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const _=Ra(e,g,t);if(!a.contains(_))throw new C(S.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);xm(f,_)||f.push(_)}c=new Ue(f),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new KE(new we(u),c,h)}class Cs extends wn{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cs}}function Pm(r,e,t){return new ro({oc:3,Ec:e.settings.Ec,methodName:r._methodName,cc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Du extends wn{_toFieldTransform(e){return new As(e.path,new rr)}isEqual(e){return e instanceof Du}}class xu extends wn{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=Pm(this,e,!0),n=this.Ac.map(i=>bn(i,t)),s=new gn(n);return new As(e.path,s)}isEqual(e){return e instanceof xu&&jn(this.Ac,e.Ac)}}class Nu extends wn{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=Pm(this,e,!0),n=this.Ac.map(i=>bn(i,t)),s=new pn(n);return new As(e.path,s)}isEqual(e){return e instanceof Nu&&jn(this.Ac,e.Ac)}}class ku extends wn{constructor(e,t){super(e),this.Rc=t}_toFieldTransform(e){const t=new sr(e.serializer,Xd(e.serializer,this.Rc));return new As(e.path,t)}isEqual(e){return e instanceof ku&&this.Rc===e.Rc}}function Ou(r,e,t,n){const s=r.dc(1,e,t);Fu("Data must be an object, but it was:",s,n);const i=[],a=we.empty();Gt(n,(c,h)=>{const f=Lu(e,c,t);h=_e(h);const g=s.hc(f);if(h instanceof Cs)i.push(f);else{const _=bn(h,g);_!=null&&(i.push(f),a.set(f,_))}});const u=new Ue(i);return new Rm(a,u,s.fieldTransforms)}function Mu(r,e,t,n,s,i){const a=r.dc(1,e,t),u=[Ra(e,n,t)],c=[s];if(i.length%2!=0)throw new C(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)u.push(Ra(e,i[_])),c.push(i[_+1]);const h=[],f=we.empty();for(let _=u.length-1;_>=0;--_)if(!xm(h,u[_])){const R=u[_];let V=c[_];V=_e(V);const N=a.hc(R);if(V instanceof Cs)h.push(R);else{const x=bn(V,N);x!=null&&(h.push(R),f.set(R,x))}}const g=new Ue(h);return new Rm(f,g,a.fieldTransforms)}function Vm(r,e,t,n=!1){return bn(t,r.dc(n?4:3,e))}function bn(r,e){if(Dm(r=_e(r)))return Fu("Unsupported field value:",e,r),Cm(r,e);if(r instanceof wn)return function(n,s){if(!Sm(s.oc))throw s.Tc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let c=bn(u,s.Pc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=_e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Xd(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ce.fromDate(n);return{timestampValue:ir(s.serializer,i)}}if(n instanceof ce){const i=new ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ir(s.serializer,i)}}if(n instanceof no)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof st)return{bytesValue:lf(s.serializer,n._byteString)};if(n instanceof le){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Tc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tu(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Cu)return function(a,u){return{mapValue:{fields:{[ja]:{stringValue:Ga},[er]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Tc("VectorValues must only contain numeric values.");return Ha(u.serializer,h)})}}}}}}(n,s);throw s.Tc(`Unsupported field value: ${to(n)}`)}(r,e)}function Cm(r,e){const t={};return Sd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gt(r,(n,s)=>{const i=bn(s,e.uc(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function Dm(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ce||r instanceof no||r instanceof st||r instanceof le||r instanceof wn||r instanceof Cu)}function Fu(r,e,t){if(!Dm(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=to(t);throw n==="an object"?e.Tc(r+" a custom object"):e.Tc(r+" "+n)}}function Ra(r,e,t){if((e=_e(e))instanceof qt)return e._internalPath;if(typeof e=="string")return Lu(r,e);throw Fi("Field path arguments must be of type string or ",r,!1,void 0,t)}const WE=new RegExp("[~\\*/\\[\\]]");function Lu(r,e,t){if(e.search(WE)>=0)throw Fi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new qt(...e.split("."))._internalPath}catch{throw Fi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Fi(r,e,t,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${n}`),a&&(c+=` in document ${s}`),c+=")"),new C(S.INVALID_ARGUMENT,u+r+c)}function xm(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class gs{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(io("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class HE extends gs{data(){return super.data()}}function io(r,e){return typeof e=="string"?Lu(r,e):e instanceof qt?e._internalPath:e._delegate._internalPath}/**
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
 */function Nm(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new C(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bu{}class Ds extends Bu{}function At(r,e,...t){let n=[];e instanceof Bu&&n.push(e),n=n.concat(t),function(i){const a=i.filter(c=>c instanceof Uu).length,u=i.filter(c=>c instanceof oo).length;if(a>1||a>0&&u>0)throw new C(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class oo extends Ds{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new oo(e,t,n)}_apply(e){const t=this._parse(e);return Om(e._query,t),new Le(e.firestore,e.converter,da(e._query,t))}_parse(e){const t=An(e.firestore);return function(i,a,u,c,h,f,g){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new C(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Sh(g,f);const V=[];for(const N of g)V.push(Rh(c,i,N));_={arrayValue:{values:V}}}else _=Rh(c,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Sh(g,f),_=Vm(u,a,g,f==="in"||f==="not-in");return K.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function YE(r,e,t){const n=e,s=io("where",r);return oo._create(s,n,t)}class Uu extends Bu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Uu(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Z.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const c of u)Om(a,c),a=da(a,c)}(e._query,t),new Le(e.firestore,e.converter,da(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qu extends Ds{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new qu(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new C(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new C(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ls(i,a)}(e._query,this._field,this._direction);return new Le(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new ft(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function JE(r,e="asc"){const t=e,n=io("orderBy",r);return qu._create(n,t)}class ao extends Ds{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new ao(e,t,n)}_apply(e){return new Le(e.firestore,e.converter,Si(e._query,this._limit,this._limitType))}}function XE(r){return pm("limit",r),ao._create("limit",r,"F")}function ZE(r){return pm("limitToLast",r),ao._create("limitToLast",r,"L")}class uo extends Ds{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new uo(e,t,n)}_apply(e){const t=km(e,this.type,this._docOrFields,this._inclusive);return new Le(e.firestore,e.converter,function(s,i){return new ft(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function eT(...r){return uo._create("startAt",r,!0)}function tT(...r){return uo._create("startAfter",r,!1)}class co extends Ds{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new co(e,t,n)}_apply(e){const t=km(e,this.type,this._docOrFields,this._inclusive);return new Le(e.firestore,e.converter,function(s,i){return new ft(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,t))}}function nT(...r){return co._create("endBefore",r,!1)}function rT(...r){return co._create("endAt",r,!0)}function km(r,e,t,n){if(t[0]=_e(t[0]),t[0]instanceof gs)return function(i,a,u,c,h){if(!c)throw new C(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const g of zn(i))if(g.field.isKeyField())f.push(fn(a,c.key));else{const _=c.data.field(g.field);if($i(_))throw new C(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const R=g.field.canonicalString();throw new C(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${R}' (used as the orderBy) does not exist.`)}f.push(_)}return new Lt(f,h)}(r._query,r.firestore._databaseId,e,t[0]._document,n);{const s=An(r.firestore);return function(a,u,c,h,f,g){const _=a.explicitOrderBy;if(f.length>_.length)throw new C(S.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const R=[];for(let V=0;V<f.length;V++){const N=f[V];if(_[V].field.isKeyField()){if(typeof N!="string")throw new C(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof N}`);if(!Qa(a)&&N.indexOf("/")!==-1)throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${N}' contains a slash.`);const x=a.path.child(G.fromString(N));if(!O.isDocumentKey(x))throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const $=new O(x);R.push(fn(u,$))}else{const x=Vm(c,h,N);R.push(x)}}return new Lt(R,g)}(r._query,r.firestore._databaseId,s,e,t,n)}}function Rh(r,e,t){if(typeof(t=_e(t))=="string"){if(t==="")throw new C(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qa(e)&&t.indexOf("/")!==-1)throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(G.fromString(t));if(!O.isDocumentKey(n))throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return fn(r,new O(n))}if(t instanceof le)return fn(r,t._key);throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${to(t)}.`)}function Sh(r,e){if(!Array.isArray(r)||r.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Om(r,e){const t=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new C(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class zu{convertValue(e,t="none"){switch(Mt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Gt(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t[er].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>oe(a.doubleValue));return new Cu(i)}convertGeoPoint(e){return new no(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ji(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(as(e));default:return null}}convertTimestamp(e){const t=lt(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=G.fromString(e);L(Tf(n),9688,{name:e});const s=new Ot(n.get(1),n.get(3)),i=new O(n.popFirst(5));return s.isEqual(t)||fe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function lo(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class sT extends zu{constructor(e){super(),this.firestore=e}convertBytes(e){return new st(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}/**
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
 */class cn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let dt=class extends gs{constructor(e,t,n,s,i,a){super(e,t,n,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(io("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}},Zr=class extends dt{data(e={}){return super.data(e)}},zt=class{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new cn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Zr(this._firestore,this._userDataWriter,n.key,n,new cn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new C(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const c=new Zr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new cn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const c=new Zr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new cn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return u.type!==0&&(h=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:iT(u.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function iT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:r})}}function Mm(r,e){return r instanceof dt&&e instanceof dt?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof zt&&e instanceof zt&&r._firestore===e._firestore&&wm(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
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
 */function oT(r){r=J(r,le);const e=J(r.firestore,ge);return dm(xe(e),r._key).then(t=>$u(e,r,t))}class Rn extends zu{constructor(e){super(),this.firestore=e}convertBytes(e){return new st(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function aT(r){r=J(r,le);const e=J(r.firestore,ge),t=xe(e),n=new Rn(e);return PE(t,r._key).then(s=>new dt(e,n,r._key,s,new cn(s!==null&&s.hasLocalMutations,!0),r.converter))}function uT(r){r=J(r,le);const e=J(r.firestore,ge);return dm(xe(e),r._key,{source:"server"}).then(t=>$u(e,r,t))}function cT(r){r=J(r,Le);const e=J(r.firestore,ge),t=xe(e),n=new Rn(e);return Nm(r._query),fm(t,r._query).then(s=>new zt(e,n,r,s))}function lT(r){r=J(r,Le);const e=J(r.firestore,ge),t=xe(e),n=new Rn(e);return VE(t,r._query).then(s=>new zt(e,n,r,s))}function hT(r){r=J(r,Le);const e=J(r.firestore,ge),t=xe(e),n=new Rn(e);return fm(t,r._query,{source:"server"}).then(s=>new zt(e,n,r,s))}function Ph(r,e,t){r=J(r,le);const n=J(r.firestore,ge),s=lo(r.converter,e,t);return xs(n,[so(An(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,ue.none())])}function Vh(r,e,t,...n){r=J(r,le);const s=J(r.firestore,ge),i=An(s);let a;return a=typeof(e=_e(e))=="string"||e instanceof qt?Mu(i,"updateDoc",r._key,e,t,n):Ou(i,"updateDoc",r._key,e),xs(s,[a.toMutation(r._key,ue.exists(!0))])}function dT(r){return xs(J(r.firestore,ge),[new pr(r._key,ue.none())])}function fT(r,e){const t=J(r.firestore,ge),n=Mi(r),s=lo(r.converter,e);return xs(t,[so(An(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,ue.exists(!1))]).then(()=>n)}function Fm(r,...e){var t,n,s;r=_e(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||ba(e[a])||(i=e[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(ba(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(n=g.error)===null||n===void 0?void 0:n.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,h,f;if(r instanceof le)h=J(r.firestore,ge),f=mr(r._key.path),c={next:g=>{e[a]&&e[a]($u(h,r,g))},error:e[a+1],complete:e[a+2]};else{const g=J(r,Le);h=J(g.firestore,ge),f=g._query;const _=new Rn(h);c={next:R=>{e[a]&&e[a](new zt(h,_,g,R))},error:e[a+1],complete:e[a+2]},Nm(r._query)}return function(_,R,V,N){const x=new Zi(N),$=new Eu(R,x,V);return _.asyncQueue.enqueueAndForget(async()=>_u(await hr(_),$)),()=>{x.yu(),_.asyncQueue.enqueueAndForget(async()=>yu(await hr(_),$))}}(xe(h),f,u,c)}function mT(r,e){return CE(xe(r=J(r,ge)),ba(e)?e:{next:e})}function xs(r,e){return function(n,s){const i=new Ae;return n.asyncQueue.enqueueAndForget(async()=>rE(await Pu(n),s,i)),i.promise}(xe(r),e)}function $u(r,e,t){const n=t.docs.get(e._key),s=new Rn(r);return new dt(r,s,e._key,n,new cn(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const gT={maxAttempts:5};/**
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
 */let pT=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=An(e)}set(e,t,n){this._verifyNotCommitted();const s=St(e,this._firestore),i=lo(s.converter,t,n),a=so(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,ue.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=St(e,this._firestore);let a;return a=typeof(t=_e(t))=="string"||t instanceof qt?Mu(this._dataReader,"WriteBatch.update",i._key,t,n,s):Ou(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,ue.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=St(e,this._firestore);return this._mutations=this._mutations.concat(new pr(t._key,ue.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function St(r,e){if((r=_e(r)).firestore!==e)throw new C(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */class _T{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=An(e)}get(e){const t=St(e,this._firestore),n=new sT(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return F(24041);const i=s[0];if(i.isFoundDocument())return new gs(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new gs(this._firestore,n,t._key,null,t.converter);throw F(18433,{doc:i})})}set(e,t,n){const s=St(e,this._firestore),i=lo(s.converter,t,n),a=so(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,a),this}update(e,t,n,...s){const i=St(e,this._firestore);let a;return a=typeof(t=_e(t))=="string"||t instanceof qt?Mu(this._dataReader,"Transaction.update",i._key,t,n,s):Ou(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,a),this}delete(e){const t=St(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */let yT=class extends _T{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=St(e,this._firestore),n=new Rn(this._firestore);return super.get(e).then(s=>new dt(this._firestore,n,t._key,s._document,new cn(!1,!1),t.converter))}};function IT(r,e,t){r=J(r,ge);const n=Object.assign(Object.assign({},gT),t);return function(i){if(i.maxAttempts<1)throw new C(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(i,a,u){const c=new Ae;return i.asyncQueue.enqueueAndForget(async()=>{const h=await bE(i);new wE(i.asyncQueue,h,u,a,c).Nu()}),c.promise}(xe(r),s=>e(new yT(r,s)),n)}/**
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
 */function ET(){return new Cs("deleteField")}function TT(){return new Du("serverTimestamp")}function vT(...r){return new xu("arrayUnion",r)}function wT(...r){return new Nu("arrayRemove",r)}function AT(r){return new ku("increment",r)}(function(e,t=!0){(function(s){fr=s})(Na),Qn(new dn("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new ge(new y_(n.getProvider("auth-internal")),new T_(a,n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new C(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ot(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),Ze(il,ol,e),Ze(il,ol,"esm2017")})();const bT="@firebase/firestore-compat",RT="0.3.47";/**
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
 */function ju(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Ch(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function Dh(){if(!ty())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ps{constructor(e){this._delegate=e}static fromBase64String(e){return Dh(),new ps(st.fromBase64String(e))}static fromUint8Array(e){return Ch(),new ps(st.fromUint8Array(e))}toBase64(){return Dh(),this._delegate.toBase64()}toUint8Array(){return Ch(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Sa(r){return ST(r,["next","error","complete"])}function ST(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}/**
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
 */class PT{enableIndexedDbPersistence(e,t){return FE(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return LE(e._delegate)}clearIndexedDbPersistence(e){return BE(e._delegate)}}class Lm{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ot||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&nt("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){NE(this._delegate,e,t,n)}enableNetwork(){return qE(this._delegate)}disableNetwork(){return zE(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,gm("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return UE(this._delegate)}onSnapshotsInSync(e){return mT(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new dr(this,Tm(this._delegate,e))}catch(t){throw Me(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ge(this,Mi(this._delegate,e))}catch(t){throw Me(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Oe(this,kE(this._delegate,e))}catch(t){throw Me(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return IT(this._delegate,t=>e(new Bm(this,t)))}batch(){return xe(this._delegate),new Um(new pT(this._delegate,e=>xs(this._delegate,e)))}loadBundle(e){return $E(this._delegate,e)}namedQuery(e){return jE(this._delegate,e).then(t=>t?new Oe(this,t):null)}}class ho extends zu{constructor(e){super(),this.firestore=e}convertBytes(e){return new ps(new st(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ge.forKey(t,this.firestore,null)}}function VT(r){m_(r)}class Bm{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ho(e)}get(e){const t=ln(e);return this._delegate.get(t).then(n=>new _s(this._firestore,new dt(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const s=ln(e);return n?(ju("Transaction.set",n),this._delegate.set(s,t,n)):this._delegate.set(s,t),this}update(e,t,n,...s){const i=ln(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,n,...s),this}delete(e){const t=ln(e);return this._delegate.delete(t),this}}class Um{constructor(e){this._delegate=e}set(e,t,n){const s=ln(e);return n?(ju("WriteBatch.set",n),this._delegate.set(s,t,n)):this._delegate.set(s,t),this}update(e,t,n,...s){const i=ln(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,n,...s),this}delete(e){const t=ln(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Tn{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Zr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ys(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Tn.INSTANCES;let s=n.get(e);s||(s=new WeakMap,n.set(e,s));let i=s.get(t);return i||(i=new Tn(e,new ho(e),t),s.set(t,i)),i}}Tn.INSTANCES=new WeakMap;class Ge{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ho(e)}static forPath(e,t,n){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ge(t,new le(t._delegate,n,new O(e)))}static forKey(e,t,n){return new Ge(t,new le(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new dr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new dr(this.firestore,Tm(this._delegate,e))}catch(t){throw Me(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=_e(e),e instanceof le?vm(this._delegate,e):!1}set(e,t){t=ju("DocumentReference.set",t);try{return t?Ph(this._delegate,e,t):Ph(this._delegate,e)}catch(n){throw Me(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?Vh(this._delegate,e):Vh(this._delegate,e,t,...n)}catch(s){throw Me(s,"updateDoc()","DocumentReference.update()")}}delete(){return dT(this._delegate)}onSnapshot(...e){const t=qm(e),n=zm(e,s=>new _s(this.firestore,new dt(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return Fm(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=aT(this._delegate):(e==null?void 0:e.source)==="server"?t=uT(this._delegate):t=oT(this._delegate),t.then(n=>new _s(this.firestore,new dt(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new Ge(this.firestore,e?this._delegate.withConverter(Tn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Me(r,e,t){return r.message=r.message.replace(e,t),r}function qm(r){for(const e of r)if(typeof e=="object"&&!Sa(e))return e;return{}}function zm(r,e){var t,n;let s;return Sa(r[0])?s=r[0]:Sa(r[1])?s=r[1]:typeof r[0]=="function"?s={next:r[0],error:r[1],complete:r[2]}:s={next:r[1],error:r[2],complete:r[3]},{next:i=>{s.next&&s.next(e(i))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(n=s.complete)===null||n===void 0?void 0:n.bind(s)}}class _s{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ge(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Mm(this._delegate,e._delegate)}}class ys extends _s{data(e){const t=this._delegate.data(e);return this._delegate._converter||g_(t!==void 0,"Document in a QueryDocumentSnapshot should exist"),t}}class Oe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ho(e)}where(e,t,n){try{return new Oe(this.firestore,At(this._delegate,YE(e,t,n)))}catch(s){throw Me(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Oe(this.firestore,At(this._delegate,JE(e,t)))}catch(n){throw Me(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Oe(this.firestore,At(this._delegate,XE(e)))}catch(t){throw Me(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Oe(this.firestore,At(this._delegate,ZE(e)))}catch(t){throw Me(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Oe(this.firestore,At(this._delegate,eT(...e)))}catch(t){throw Me(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Oe(this.firestore,At(this._delegate,tT(...e)))}catch(t){throw Me(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Oe(this.firestore,At(this._delegate,nT(...e)))}catch(t){throw Me(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Oe(this.firestore,At(this._delegate,rT(...e)))}catch(t){throw Me(t,"endAt()","Query.endAt()")}}isEqual(e){return wm(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=lT(this._delegate):(e==null?void 0:e.source)==="server"?t=hT(this._delegate):t=cT(this._delegate),t.then(n=>new Pa(this.firestore,new zt(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=qm(e),n=zm(e,s=>new Pa(this.firestore,new zt(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return Fm(this._delegate,t,n)}withConverter(e){return new Oe(this.firestore,e?this._delegate.withConverter(Tn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class CT{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ys(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Pa{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Oe(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ys(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new CT(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new ys(this._firestore,n))})}isEqual(e){return Mm(this._delegate,e._delegate)}}class dr extends Oe{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ge(this.firestore,e):null}doc(e){try{return e===void 0?new Ge(this.firestore,Mi(this._delegate)):new Ge(this.firestore,Mi(this._delegate,e))}catch(t){throw Me(t,"doc()","CollectionReference.doc()")}}add(e){return fT(this._delegate,e).then(t=>new Ge(this.firestore,t))}isEqual(e){return vm(this._delegate,e._delegate)}withConverter(e){return new dr(this.firestore,e?this._delegate.withConverter(Tn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ln(r){return J(r,le)}/**
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
 */class Gu{constructor(...e){this._delegate=new qt(...e)}static documentId(){return new Gu(ae.keyField().canonicalString())}isEqual(e){return e=_e(e),e instanceof qt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class an{static serverTimestamp(){const e=TT();return e._methodName="FieldValue.serverTimestamp",new an(e)}static delete(){const e=ET();return e._methodName="FieldValue.delete",new an(e)}static arrayUnion(...e){const t=vT(...e);return t._methodName="FieldValue.arrayUnion",new an(t)}static arrayRemove(...e){const t=wT(...e);return t._methodName="FieldValue.arrayRemove",new an(t)}static increment(e){const t=AT(e);return t._methodName="FieldValue.increment",new an(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const DT={Firestore:Lm,GeoPoint:no,Timestamp:ce,Blob:ps,Transaction:Bm,WriteBatch:Um,DocumentReference:Ge,DocumentSnapshot:_s,Query:Oe,QueryDocumentSnapshot:ys,QuerySnapshot:Pa,CollectionReference:dr,FieldPath:Gu,FieldValue:an,setLogLevel:VT,CACHE_SIZE_UNLIMITED:ME};function xT(r,e){r.INTERNAL.registerComponent(new dn("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(n,s)},"PUBLIC").setServiceProps(Object.assign({},DT)))}/**
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
 */function NT(r){xT(r,(e,t)=>new Lm(e,t,new PT)),r.registerVersion(bT,RT)}NT(td);export{td as f};
