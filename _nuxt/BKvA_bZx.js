var Ju={};/**
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
 */const wl=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Jf=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],a=r[t++],u=r[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=r[t++],a=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},vl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],a=i+1<r.length,u=a?r[i+1]:0,c=i+2<r.length,h=c?r[i+2]:0,f=s>>2,g=(s&3)<<4|u>>4;let _=(u&15)<<2|h>>6,R=h&63;c||(R=64,a||(_=64)),n.push(t[f],t[g],t[_],t[R])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(wl(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Jf(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],u=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const g=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||u==null||h==null||g==null)throw new Yf;const _=s<<2|u>>4;if(n.push(_),h!==64){const R=u<<4&240|h>>2;if(n.push(R),g!==64){const C=h<<6&192|g;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Yf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xf=function(r){const e=wl(r);return vl.encodeByteArray(e,!0)},zi=function(r){return Xf(r).replace(/\./g,"")},Zf=function(r){try{return vl.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function $i(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!em(t)||(r[t]=$i(r[t],e[t]));return r}function em(r){return r!=="__proto__"}/**
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
 */function Al(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tm=()=>Al().__FIREBASE_DEFAULTS__,nm=()=>{if(typeof process>"u"||typeof Ju>"u")return;const r=Ju.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},rm=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Zf(r[1]);return e&&JSON.parse(e)},bl=()=>{try{return tm()||nm()||rm()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Rl=()=>{var r;return(r=bl())===null||r===void 0?void 0:r.config};/**
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
 */class im{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function sm(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[zi(JSON.stringify(t)),zi(JSON.stringify(a)),""].join(".")}/**
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
 */function Gi(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function om(){var r;const e=(r=bl())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function am(){return typeof window<"u"||Sl()}function Sl(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Pl(){return!om()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vl(){try{return typeof indexedDB=="object"}catch{return!1}}function um(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const cm="FirebaseError";class ln extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=cm,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?lm(s,n):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new ln(i,u,n)}}function lm(r,e){return r.replace(hm,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const hm=/\{\$([^}]+)}/g;/**
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
 */function Yu(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function xr(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],a=e[i];if(Xu(s)&&Xu(a)){if(!xr(s,a))return!1}else if(s!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Xu(r){return r!==null&&typeof r=="object"}function dm(r,e){const t=new fm(r,e);return t.subscribe.bind(t)}class fm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");mm(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=no),i.error===void 0&&(i.error=no),i.complete===void 0&&(i.complete=no);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mm(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function no(){}/**
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
 */function _e(r){return r&&r._delegate?r._delegate:r}class en{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $t="[DEFAULT]";/**
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
 */class gm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new im;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_m(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);n===u&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:pm(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pm(r){return r===$t?void 0:r}function _m(r){return r.instantiationMode==="EAGER"}/**
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
 */class Dl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const qo=[];var Q;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Q||(Q={}));const Cl={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},ym=Q.INFO,Im={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Em=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Im[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jo{constructor(e){this.name=e,this._logLevel=ym,this._logHandler=Em,this._userLogHandler=null,qo.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}function Tm(r){qo.forEach(e=>{e.setLogLevel(r)})}function wm(r,e){for(const t of qo){let n=null;e&&e.level&&(n=Cl[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(i,s,...a)=>{const u=a.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(n??i.logLevel)&&r({level:Q[s].toLowerCase(),message:u,args:a,type:i.name})}}}const vm=(r,e)=>e.some(t=>r instanceof t);let Zu,ec;function Am(){return Zu||(Zu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bm(){return ec||(ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xl=new WeakMap,mo=new WeakMap,Nl=new WeakMap,ro=new WeakMap,zo=new WeakMap;function Rm(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",a)},s=()=>{t(vt(r.result)),i()},a=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&xl.set(t,r)}).catch(()=>{}),zo.set(e,r),e}function Sm(r){if(mo.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",a),r.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",a),r.addEventListener("abort",a)});mo.set(r,e)}let go={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return mo.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Nl.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Pm(r){go=r(go)}function Vm(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(io(this),e,...t);return Nl.set(n,e.sort?e.sort():[e]),vt(n)}:bm().includes(r)?function(...e){return r.apply(io(this),e),vt(xl.get(this))}:function(...e){return vt(r.apply(io(this),e))}}function Dm(r){return typeof r=="function"?Vm(r):(r instanceof IDBTransaction&&Sm(r),vm(r,Am())?new Proxy(r,go):r)}function vt(r){if(r instanceof IDBRequest)return Rm(r);if(ro.has(r))return ro.get(r);const e=Dm(r);return e!==r&&(ro.set(r,e),zo.set(e,r)),e}const io=r=>zo.get(r);function Cm(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(r,e),u=vt(a);return n&&a.addEventListener("upgradeneeded",c=>{n(vt(a.result),c.oldVersion,c.newVersion,vt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),u.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const xm=["get","getKey","getAll","getAllKeys","count"],Nm=["put","add","delete","clear"],so=new Map;function tc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(so.get(e))return so.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Nm.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||xm.includes(t)))return;const s=async function(a,...u){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(u.shift())),(await Promise.all([h[t](...u),i&&c.done]))[0]};return so.set(e,s),s}Pm(r=>({...r,get:(e,t,n)=>tc(e,t)||r.get(e,t,n),has:(e,t)=>!!tc(e,t)||r.has(e,t)}));/**
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
 */class km{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Om(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Om(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ki="@firebase/app",po="0.10.15";/**
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
 */const st=new jo("@firebase/app"),Fm="@firebase/app-compat",Mm="@firebase/analytics-compat",Lm="@firebase/analytics",Bm="@firebase/app-check-compat",Um="@firebase/app-check",qm="@firebase/auth",jm="@firebase/auth-compat",zm="@firebase/database",$m="@firebase/data-connect",Gm="@firebase/database-compat",Km="@firebase/functions",Qm="@firebase/functions-compat",Wm="@firebase/installations",Hm="@firebase/installations-compat",Jm="@firebase/messaging",Ym="@firebase/messaging-compat",Xm="@firebase/performance",Zm="@firebase/performance-compat",eg="@firebase/remote-config",tg="@firebase/remote-config-compat",ng="@firebase/storage",rg="@firebase/storage-compat",ig="@firebase/firestore",sg="@firebase/vertexai",og="@firebase/firestore-compat",ag="firebase",ug="11.0.1";/**
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
 */const bt="[DEFAULT]",cg={[Ki]:"fire-core",[Fm]:"fire-core-compat",[Lm]:"fire-analytics",[Mm]:"fire-analytics-compat",[Um]:"fire-app-check",[Bm]:"fire-app-check-compat",[qm]:"fire-auth",[jm]:"fire-auth-compat",[zm]:"fire-rtdb",[$m]:"fire-data-connect",[Gm]:"fire-rtdb-compat",[Km]:"fire-fn",[Qm]:"fire-fn-compat",[Wm]:"fire-iid",[Hm]:"fire-iid-compat",[Jm]:"fire-fcm",[Ym]:"fire-fcm-compat",[Xm]:"fire-perf",[Zm]:"fire-perf-compat",[eg]:"fire-rc",[tg]:"fire-rc-compat",[ng]:"fire-gcs",[rg]:"fire-gcs-compat",[ig]:"fire-fst",[og]:"fire-fst-compat",[sg]:"fire-vertex","fire-js":"fire-js",[ag]:"fire-js-all"};/**
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
 */const Rt=new Map,Dn=new Map,Cn=new Map;function Nr(r,e){try{r.container.addComponent(e)}catch(t){st.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function kl(r,e){r.container.addOrOverwriteComponent(e)}function xn(r){const e=r.name;if(Cn.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;Cn.set(e,r);for(const t of Rt.values())Nr(t,r);for(const t of Dn.values())Nr(t,r);return!0}function Ol(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function lg(r,e,t=bt){Ol(r,e).clearInstance(t)}function Fl(r){return r.options!==void 0}function hg(r){return r.settings!==void 0}function dg(){Cn.clear()}/**
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
 */const fg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ge=new as("app","Firebase",fg);/**
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
 */let Ml=class{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ge.create("app-deleted",{appName:this._name})}};/**
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
 */class mg extends Ml{constructor(e,t,n,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,a={name:n,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,a,i);else{const u=e;super(u.options,a,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,it(Ki,po,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Ko(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Ge.create("server-app-deleted")}}/**
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
 */const $o=ug;function Go(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:bt,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Ge.create("bad-app-name",{appName:String(i)});if(t||(t=Rl()),!t)throw Ge.create("no-options");const s=Rt.get(i);if(s){if(xr(t,s.options)&&xr(n,s.config))return s;throw Ge.create("duplicate-app",{appName:i})}const a=new Dl(i);for(const c of Cn.values())a.addComponent(c);const u=new Ml(t,n,a);return Rt.set(i,u),u}function gg(r,e){if(am()&&!Sl())throw Ge.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;Fl(r)?t=r.options:t=r;const n=Object.assign(Object.assign({},e),t);n.releaseOnDeref!==void 0&&delete n.releaseOnDeref;const i=h=>[...h].reduce((f,g)=>Math.imul(31,f)+g.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Ge.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(n)),a=Dn.get(s);if(a)return a.incRefCount(e.releaseOnDeref),a;const u=new Dl(s);for(const h of Cn.values())u.addComponent(h);const c=new mg(t,e,s,u);return Dn.set(s,c),c}function pg(r=bt){const e=Rt.get(r);if(!e&&r===bt&&Rl())return Go();if(!e)throw Ge.create("no-app",{appName:r});return e}function _g(){return Array.from(Rt.values())}async function Ko(r){let e=!1;const t=r.name;Rt.has(t)?(e=!0,Rt.delete(t)):Dn.has(t)&&r.decRefCount()<=0&&(Dn.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function it(r,e,t){var n;let i=(n=cg[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),st.warn(u.join(" "));return}xn(new en(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Ll(r,e){if(r!==null&&typeof r!="function")throw Ge.create("invalid-log-argument");wm(r,e)}function Bl(r){Tm(r)}/**
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
 */const yg="firebase-heartbeat-database",Ig=1,kr="firebase-heartbeat-store";let oo=null;function Ul(){return oo||(oo=Cm(yg,Ig,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(kr)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ge.create("idb-open",{originalErrorMessage:r.message})})),oo}async function Eg(r){try{const t=(await Ul()).transaction(kr),n=await t.objectStore(kr).get(ql(r));return await t.done,n}catch(e){if(e instanceof ln)st.warn(e.message);else{const t=Ge.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});st.warn(t.message)}}}async function nc(r,e){try{const n=(await Ul()).transaction(kr,"readwrite");await n.objectStore(kr).put(e,ql(r)),await n.done}catch(t){if(t instanceof ln)st.warn(t.message);else{const n=Ge.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});st.warn(n.message)}}}function ql(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Tg=1024,wg=30*24*60*60*1e3;class vg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bg(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=rc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=wg}),this._storage.overwrite(this._heartbeatsCache))}catch(n){st.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=rc(),{heartbeatsToSend:n,unsentEntries:i}=Ag(this._heartbeatsCache.heartbeats),s=zi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return st.warn(t),""}}}function rc(){return new Date().toISOString().substring(0,10)}function Ag(r,e=Tg){const t=[];let n=r.slice();for(const i of r){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),ic(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ic(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class bg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vl()?um().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Eg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return nc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return nc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ic(r){return zi(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function Rg(r){xn(new en("platform-logger",e=>new km(e),"PRIVATE")),xn(new en("heartbeat",e=>new vg(e),"PRIVATE")),it(Ki,po,r),it(Ki,po,"esm2017"),it("fire-js","")}Rg("");const Sg=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ln,SDK_VERSION:$o,_DEFAULT_ENTRY_NAME:bt,_addComponent:Nr,_addOrOverwriteComponent:kl,_apps:Rt,_clearComponents:dg,_components:Cn,_getProvider:Ol,_isFirebaseApp:Fl,_isFirebaseServerApp:hg,_registerComponent:xn,_removeServiceInstance:lg,_serverApps:Dn,deleteApp:Ko,getApp:pg,getApps:_g,initializeApp:Go,initializeServerApp:gg,onLog:Ll,registerVersion:it,setLogLevel:Bl},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Pg{constructor(e,t){this._delegate=e,this.firebase=t,Nr(e,new en("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ko(this._delegate)))}_getService(e,t=bt){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((n=i.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=bt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Nr(this._delegate,e)}_addOrOverwriteComponent(e){kl(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Vg={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},sc=new as("app-compat","Firebase",Vg);/**
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
 */function Dg(r){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:it,setLogLevel:Bl,onLog:Ll,apps:null,SDK_VERSION:$o,INTERNAL:{registerComponent:u,removeApp:n,useAsService:c,modularAPIs:Sg}};t.default=t,Object.defineProperty(t,"apps",{get:a});function n(h){delete e[h]}function i(h){if(h=h||bt,!Yu(e,h))throw sc.create("no-app",{appName:h});return e[h]}i.App=r;function s(h,f={}){const g=Go(h,f);if(Yu(e,g.name))return e[g.name];const _=new r(g,t);return e[g.name]=_,_}function a(){return Object.keys(e).map(h=>e[h])}function u(h){const f=h.name,g=f.replace("-compat","");if(xn(h)&&h.type==="PUBLIC"){const _=(R=i())=>{if(typeof R[g]!="function")throw sc.create("invalid-app-argument",{appName:f});return R[g]()};h.serviceProps!==void 0&&$i(_,h.serviceProps),t[g]=_,r.prototype[g]=function(...R){return this._getService.bind(this,f).apply(this,h.multipleInstances?R:[])}}return h.type==="PUBLIC"?t[g]:null}function c(h,f){return f==="serverAuth"?null:f}return t}/**
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
 */function jl(){const r=Dg(Pg);r.INTERNAL=Object.assign(Object.assign({},r.INTERNAL),{createFirebaseNamespace:jl,extendNamespace:e,createSubscribe:dm,ErrorFactory:as,deepExtend:$i});function e(t){$i(r,t)}return r}const Cg=jl();/**
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
 */const oc=new jo("@firebase/app-compat"),xg="@firebase/app-compat",Ng="0.2.45";/**
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
 */function kg(r){it(xg,Ng,r)}/**
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
 */try{const r=Al();if(r.firebase!==void 0){oc.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=r.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&oc.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const zl=Cg;kg();var Og="firebase",Fg="11.0.1";/**
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
 */zl.registerVersion(Og,Fg,"app-compat");var ac=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zt,$l;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,p){function I(){}I.prototype=p.prototype,E.D=p.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(T,w,b){for(var y=Array(arguments.length-2),et=2;et<arguments.length;et++)y[et-2]=arguments[et];return p.prototype[w].apply(T,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,I){I||(I=0);var T=Array(16);if(typeof p=="string")for(var w=0;16>w;++w)T[w]=p.charCodeAt(I++)|p.charCodeAt(I++)<<8|p.charCodeAt(I++)<<16|p.charCodeAt(I++)<<24;else for(w=0;16>w;++w)T[w]=p[I++]|p[I++]<<8|p[I++]<<16|p[I++]<<24;p=E.g[0],I=E.g[1],w=E.g[2];var b=E.g[3],y=p+(b^I&(w^b))+T[0]+3614090360&4294967295;p=I+(y<<7&4294967295|y>>>25),y=b+(w^p&(I^w))+T[1]+3905402710&4294967295,b=p+(y<<12&4294967295|y>>>20),y=w+(I^b&(p^I))+T[2]+606105819&4294967295,w=b+(y<<17&4294967295|y>>>15),y=I+(p^w&(b^p))+T[3]+3250441966&4294967295,I=w+(y<<22&4294967295|y>>>10),y=p+(b^I&(w^b))+T[4]+4118548399&4294967295,p=I+(y<<7&4294967295|y>>>25),y=b+(w^p&(I^w))+T[5]+1200080426&4294967295,b=p+(y<<12&4294967295|y>>>20),y=w+(I^b&(p^I))+T[6]+2821735955&4294967295,w=b+(y<<17&4294967295|y>>>15),y=I+(p^w&(b^p))+T[7]+4249261313&4294967295,I=w+(y<<22&4294967295|y>>>10),y=p+(b^I&(w^b))+T[8]+1770035416&4294967295,p=I+(y<<7&4294967295|y>>>25),y=b+(w^p&(I^w))+T[9]+2336552879&4294967295,b=p+(y<<12&4294967295|y>>>20),y=w+(I^b&(p^I))+T[10]+4294925233&4294967295,w=b+(y<<17&4294967295|y>>>15),y=I+(p^w&(b^p))+T[11]+2304563134&4294967295,I=w+(y<<22&4294967295|y>>>10),y=p+(b^I&(w^b))+T[12]+1804603682&4294967295,p=I+(y<<7&4294967295|y>>>25),y=b+(w^p&(I^w))+T[13]+4254626195&4294967295,b=p+(y<<12&4294967295|y>>>20),y=w+(I^b&(p^I))+T[14]+2792965006&4294967295,w=b+(y<<17&4294967295|y>>>15),y=I+(p^w&(b^p))+T[15]+1236535329&4294967295,I=w+(y<<22&4294967295|y>>>10),y=p+(w^b&(I^w))+T[1]+4129170786&4294967295,p=I+(y<<5&4294967295|y>>>27),y=b+(I^w&(p^I))+T[6]+3225465664&4294967295,b=p+(y<<9&4294967295|y>>>23),y=w+(p^I&(b^p))+T[11]+643717713&4294967295,w=b+(y<<14&4294967295|y>>>18),y=I+(b^p&(w^b))+T[0]+3921069994&4294967295,I=w+(y<<20&4294967295|y>>>12),y=p+(w^b&(I^w))+T[5]+3593408605&4294967295,p=I+(y<<5&4294967295|y>>>27),y=b+(I^w&(p^I))+T[10]+38016083&4294967295,b=p+(y<<9&4294967295|y>>>23),y=w+(p^I&(b^p))+T[15]+3634488961&4294967295,w=b+(y<<14&4294967295|y>>>18),y=I+(b^p&(w^b))+T[4]+3889429448&4294967295,I=w+(y<<20&4294967295|y>>>12),y=p+(w^b&(I^w))+T[9]+568446438&4294967295,p=I+(y<<5&4294967295|y>>>27),y=b+(I^w&(p^I))+T[14]+3275163606&4294967295,b=p+(y<<9&4294967295|y>>>23),y=w+(p^I&(b^p))+T[3]+4107603335&4294967295,w=b+(y<<14&4294967295|y>>>18),y=I+(b^p&(w^b))+T[8]+1163531501&4294967295,I=w+(y<<20&4294967295|y>>>12),y=p+(w^b&(I^w))+T[13]+2850285829&4294967295,p=I+(y<<5&4294967295|y>>>27),y=b+(I^w&(p^I))+T[2]+4243563512&4294967295,b=p+(y<<9&4294967295|y>>>23),y=w+(p^I&(b^p))+T[7]+1735328473&4294967295,w=b+(y<<14&4294967295|y>>>18),y=I+(b^p&(w^b))+T[12]+2368359562&4294967295,I=w+(y<<20&4294967295|y>>>12),y=p+(I^w^b)+T[5]+4294588738&4294967295,p=I+(y<<4&4294967295|y>>>28),y=b+(p^I^w)+T[8]+2272392833&4294967295,b=p+(y<<11&4294967295|y>>>21),y=w+(b^p^I)+T[11]+1839030562&4294967295,w=b+(y<<16&4294967295|y>>>16),y=I+(w^b^p)+T[14]+4259657740&4294967295,I=w+(y<<23&4294967295|y>>>9),y=p+(I^w^b)+T[1]+2763975236&4294967295,p=I+(y<<4&4294967295|y>>>28),y=b+(p^I^w)+T[4]+1272893353&4294967295,b=p+(y<<11&4294967295|y>>>21),y=w+(b^p^I)+T[7]+4139469664&4294967295,w=b+(y<<16&4294967295|y>>>16),y=I+(w^b^p)+T[10]+3200236656&4294967295,I=w+(y<<23&4294967295|y>>>9),y=p+(I^w^b)+T[13]+681279174&4294967295,p=I+(y<<4&4294967295|y>>>28),y=b+(p^I^w)+T[0]+3936430074&4294967295,b=p+(y<<11&4294967295|y>>>21),y=w+(b^p^I)+T[3]+3572445317&4294967295,w=b+(y<<16&4294967295|y>>>16),y=I+(w^b^p)+T[6]+76029189&4294967295,I=w+(y<<23&4294967295|y>>>9),y=p+(I^w^b)+T[9]+3654602809&4294967295,p=I+(y<<4&4294967295|y>>>28),y=b+(p^I^w)+T[12]+3873151461&4294967295,b=p+(y<<11&4294967295|y>>>21),y=w+(b^p^I)+T[15]+530742520&4294967295,w=b+(y<<16&4294967295|y>>>16),y=I+(w^b^p)+T[2]+3299628645&4294967295,I=w+(y<<23&4294967295|y>>>9),y=p+(w^(I|~b))+T[0]+4096336452&4294967295,p=I+(y<<6&4294967295|y>>>26),y=b+(I^(p|~w))+T[7]+1126891415&4294967295,b=p+(y<<10&4294967295|y>>>22),y=w+(p^(b|~I))+T[14]+2878612391&4294967295,w=b+(y<<15&4294967295|y>>>17),y=I+(b^(w|~p))+T[5]+4237533241&4294967295,I=w+(y<<21&4294967295|y>>>11),y=p+(w^(I|~b))+T[12]+1700485571&4294967295,p=I+(y<<6&4294967295|y>>>26),y=b+(I^(p|~w))+T[3]+2399980690&4294967295,b=p+(y<<10&4294967295|y>>>22),y=w+(p^(b|~I))+T[10]+4293915773&4294967295,w=b+(y<<15&4294967295|y>>>17),y=I+(b^(w|~p))+T[1]+2240044497&4294967295,I=w+(y<<21&4294967295|y>>>11),y=p+(w^(I|~b))+T[8]+1873313359&4294967295,p=I+(y<<6&4294967295|y>>>26),y=b+(I^(p|~w))+T[15]+4264355552&4294967295,b=p+(y<<10&4294967295|y>>>22),y=w+(p^(b|~I))+T[6]+2734768916&4294967295,w=b+(y<<15&4294967295|y>>>17),y=I+(b^(w|~p))+T[13]+1309151649&4294967295,I=w+(y<<21&4294967295|y>>>11),y=p+(w^(I|~b))+T[4]+4149444226&4294967295,p=I+(y<<6&4294967295|y>>>26),y=b+(I^(p|~w))+T[11]+3174756917&4294967295,b=p+(y<<10&4294967295|y>>>22),y=w+(p^(b|~I))+T[2]+718787259&4294967295,w=b+(y<<15&4294967295|y>>>17),y=I+(b^(w|~p))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+b&4294967295}n.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var I=p-this.blockSize,T=this.B,w=this.h,b=0;b<p;){if(w==0)for(;b<=I;)i(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<p;)if(T[w++]=E.charCodeAt(b++),w==this.blockSize){i(this,T),w=0;break}}else for(;b<p;)if(T[w++]=E[b++],w==this.blockSize){i(this,T),w=0;break}}this.h=w,this.o+=p},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var I=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=I&255,I/=256;for(this.u(E),E=Array(16),p=I=0;4>p;++p)for(var T=0;32>T;T+=8)E[I++]=this.g[p]>>>T&255;return E};function s(E,p){var I=u;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=p(E)}function a(E,p){this.h=p;for(var I=[],T=!0,w=E.length-1;0<=w;w--){var b=E[w]|0;T&&b==p||(I[w]=b,T=!1)}this.g=I}var u={};function c(E){return-128<=E&&128>E?s(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return x(h(-E));for(var p=[],I=1,T=0;E>=I;T++)p[T]=E/I|0,I*=4294967296;return new a(p,0)}function f(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return x(f(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(p,8)),T=g,w=0;w<E.length;w+=8){var b=Math.min(8,E.length-w),y=parseInt(E.substring(w,w+b),p);8>b?(b=h(Math.pow(p,b)),T=T.j(b).add(h(y))):(T=T.j(I),T=T.add(h(y)))}return T}var g=c(0),_=c(1),R=c(16777216);r=a.prototype,r.m=function(){if(N(this))return-x(this).m();for(var E=0,p=1,I=0;I<this.g.length;I++){var T=this.i(I);E+=(0<=T?T:4294967296+T)*p,p*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(N(this))return"-"+x(this).toString(E);for(var p=h(Math.pow(E,6)),I=this,T="";;){var w=X(I,p).g;I=q(I,w.j(p));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=w,C(I))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function N(E){return E.h==-1}r.l=function(E){return E=q(this,E),N(E)?-1:C(E)?0:1};function x(E){for(var p=E.g.length,I=[],T=0;T<p;T++)I[T]=~E.g[T];return new a(I,~E.h).add(_)}r.abs=function(){return N(this)?x(this):this},r.add=function(E){for(var p=Math.max(this.g.length,E.g.length),I=[],T=0,w=0;w<=p;w++){var b=T+(this.i(w)&65535)+(E.i(w)&65535),y=(b>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);T=y>>>16,b&=65535,y&=65535,I[w]=y<<16|b}return new a(I,I[I.length-1]&-2147483648?-1:0)};function q(E,p){return E.add(x(p))}r.j=function(E){if(C(this)||C(E))return g;if(N(this))return N(E)?x(this).j(x(E)):x(x(this).j(E));if(N(E))return x(this.j(x(E)));if(0>this.l(R)&&0>E.l(R))return h(this.m()*E.m());for(var p=this.g.length+E.g.length,I=[],T=0;T<2*p;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<E.g.length;w++){var b=this.i(T)>>>16,y=this.i(T)&65535,et=E.i(w)>>>16,er=E.i(w)&65535;I[2*T+2*w]+=y*er,z(I,2*T+2*w),I[2*T+2*w+1]+=b*er,z(I,2*T+2*w+1),I[2*T+2*w+1]+=y*et,z(I,2*T+2*w+1),I[2*T+2*w+2]+=b*et,z(I,2*T+2*w+2)}for(T=0;T<p;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=p;T<2*p;T++)I[T]=0;return new a(I,0)};function z(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function U(E,p){this.g=E,this.h=p}function X(E,p){if(C(p))throw Error("division by zero");if(C(E))return new U(g,g);if(N(E))return p=X(x(E),p),new U(x(p.g),x(p.h));if(N(p))return p=X(E,x(p)),new U(x(p.g),p.h);if(30<E.g.length){if(N(E)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var I=_,T=p;0>=T.l(E);)I=ne(I),T=ne(T);var w=H(I,1),b=H(T,1);for(T=H(T,2),I=H(I,2);!C(T);){var y=b.add(T);0>=y.l(E)&&(w=w.add(I),b=y),T=H(T,1),I=H(I,1)}return p=q(E,w.j(p)),new U(w,p)}for(w=g;0<=E.l(p);){for(I=Math.max(1,Math.floor(E.m()/p.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(I),y=b.j(p);N(y)||0<y.l(E);)I-=T,b=h(I),y=b.j(p);C(b)&&(b=_),w=w.add(b),E=q(E,y)}return new U(w,E)}r.A=function(E){return X(this,E).h},r.and=function(E){for(var p=Math.max(this.g.length,E.g.length),I=[],T=0;T<p;T++)I[T]=this.i(T)&E.i(T);return new a(I,this.h&E.h)},r.or=function(E){for(var p=Math.max(this.g.length,E.g.length),I=[],T=0;T<p;T++)I[T]=this.i(T)|E.i(T);return new a(I,this.h|E.h)},r.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),I=[],T=0;T<p;T++)I[T]=this.i(T)^E.i(T);return new a(I,this.h^E.h)};function ne(E){for(var p=E.g.length+1,I=[],T=0;T<p;T++)I[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(I,E.h)}function H(E,p){var I=p>>5;p%=32;for(var T=E.g.length-I,w=[],b=0;b<T;b++)w[b]=0<p?E.i(b+I)>>>p|E.i(b+I+1)<<32-p:E.i(b+I);return new a(w,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,$l=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Zt=a}).apply(typeof ac<"u"?ac:typeof self<"u"?self:typeof window<"u"?window:{});var Pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gl,wr,Kl,ki,_o,Ql,Wl,Hl;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pi=="object"&&Pi];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(o,l){if(l)e:{var d=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in d))break e;d=d[A]}o=o[o.length-1],m=d[o],l=l(m),l!=m&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var d=0,m=!1,A={next:function(){if(!m&&d<o.length){var P=d++;return{value:l(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function g(o,l,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function _(o,l,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function R(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function C(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,A,P){for(var k=Array(arguments.length-2),te=2;te<arguments.length;te++)k[te-2]=arguments[te];return l.prototype[A].apply(m,k)}}function N(o){const l=o.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=o[m];return d}return[]}function x(o,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const A=o.length||0,P=m.length||0;o.length=A+P;for(let k=0;k<P;k++)o[A+k]=m[k]}else o.push(m)}}class q{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function z(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function X(o){return X[" "](o),o}X[" "]=function(){};var ne=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function H(o,l,d){for(const m in o)l.call(d,o[m],m,o)}function E(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function p(o){const l={};for(const d in o)l[d]=o[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)o[d]=m[d];for(let P=0;P<I.length;P++)d=I[P],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function w(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function b(o){u.setTimeout(()=>{throw o},0)}function y(){var o=xs;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class et{constructor(){this.h=this.g=null}add(l,d){const m=er.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var er=new q(()=>new gf,o=>o.reset());class gf{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let tr,nr=!1,xs=new et,Ja=()=>{const o=u.Promise.resolve(void 0);tr=()=>{o.then(pf)}};var pf=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){b(d)}var l=er;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}nr=!1};function ft(){this.s=this.s,this.C=this.C}ft.prototype.s=!1,ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var _f=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,l),u.removeEventListener("test",d,l)}catch{}return o}();function rr(o,l){if(be.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ne){e:{try{X(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:yf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&rr.aa.h.call(this)}}C(rr,be);var yf={2:"touch",3:"pen",4:"mouse"};rr.prototype.h=function(){rr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ci="closure_listenable_"+(1e6*Math.random()|0),If=0;function Ef(o,l,d,m,A){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=A,this.key=++If,this.da=this.fa=!1}function li(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function hi(o){this.src=o,this.g={},this.h=0}hi.prototype.add=function(o,l,d,m,A){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var k=ks(o,l,m,A);return-1<k?(l=o[k],d||(l.fa=!1)):(l=new Ef(l,this.src,P,!!m,A),l.fa=d,o.push(l)),l};function Ns(o,l){var d=l.type;if(d in o.g){var m=o.g[d],A=Array.prototype.indexOf.call(m,l,void 0),P;(P=0<=A)&&Array.prototype.splice.call(m,A,1),P&&(li(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function ks(o,l,d,m){for(var A=0;A<o.length;++A){var P=o[A];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==m)return A}return-1}var Os="closure_lm_"+(1e6*Math.random()|0),Fs={};function Ya(o,l,d,m,A){if(Array.isArray(l)){for(var P=0;P<l.length;P++)Ya(o,l[P],d,m,A);return null}return d=eu(d),o&&o[ci]?o.K(l,d,h(m)?!!m.capture:!!m,A):Tf(o,l,d,!1,m,A)}function Tf(o,l,d,m,A,P){if(!l)throw Error("Invalid event type");var k=h(A)?!!A.capture:!!A,te=Ls(o);if(te||(o[Os]=te=new hi(o)),d=te.add(l,d,m,k,P),d.proxy)return d;if(m=wf(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)_f||(A=k),A===void 0&&(A=!1),o.addEventListener(l.toString(),m,A);else if(o.attachEvent)o.attachEvent(Za(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function wf(){function o(d){return l.call(o.src,o.listener,d)}const l=vf;return o}function Xa(o,l,d,m,A){if(Array.isArray(l))for(var P=0;P<l.length;P++)Xa(o,l[P],d,m,A);else m=h(m)?!!m.capture:!!m,d=eu(d),o&&o[ci]?(o=o.i,l=String(l).toString(),l in o.g&&(P=o.g[l],d=ks(P,d,m,A),-1<d&&(li(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[l],o.h--)))):o&&(o=Ls(o))&&(l=o.g[l.toString()],o=-1,l&&(o=ks(l,d,m,A)),(d=-1<o?l[o]:null)&&Ms(d))}function Ms(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[ci])Ns(l.i,o);else{var d=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(d,m,o.capture):l.detachEvent?l.detachEvent(Za(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=Ls(l))?(Ns(d,o),d.h==0&&(d.src=null,l[Os]=null)):li(o)}}}function Za(o){return o in Fs?Fs[o]:Fs[o]="on"+o}function vf(o,l){if(o.da)o=!0;else{l=new rr(l,this);var d=o.listener,m=o.ha||o.src;o.fa&&Ms(o),o=d.call(m,l)}return o}function Ls(o){return o=o[Os],o instanceof hi?o:null}var Bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function eu(o){return typeof o=="function"?o:(o[Bs]||(o[Bs]=function(l){return o.handleEvent(l)}),o[Bs])}function Re(){ft.call(this),this.i=new hi(this),this.M=this,this.F=null}C(Re,ft),Re.prototype[ci]=!0,Re.prototype.removeEventListener=function(o,l,d,m){Xa(this,o,l,d,m)};function Ne(o,l){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new be(l,o);else if(l instanceof be)l.target=l.target||o;else{var A=l;l=new be(m,o),T(l,A)}if(A=!0,d)for(var P=d.length-1;0<=P;P--){var k=l.g=d[P];A=di(k,m,!0,l)&&A}if(k=l.g=o,A=di(k,m,!0,l)&&A,A=di(k,m,!1,l)&&A,d)for(P=0;P<d.length;P++)k=l.g=d[P],A=di(k,m,!1,l)&&A}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],m=0;m<d.length;m++)li(d[m]);delete o.g[l],o.h--}}this.F=null},Re.prototype.K=function(o,l,d,m){return this.i.add(String(o),l,!1,d,m)},Re.prototype.L=function(o,l,d,m){return this.i.add(String(o),l,!0,d,m)};function di(o,l,d,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,P=0;P<l.length;++P){var k=l[P];if(k&&!k.da&&k.capture==d){var te=k.listener,Te=k.ha||k.src;k.fa&&Ns(o.i,k),A=te.call(Te,m)!==!1&&A}}return A&&!m.defaultPrevented}function tu(o,l,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function nu(o){o.g=tu(()=>{o.g=null,o.i&&(o.i=!1,nu(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Af extends ft{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:nu(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ir(o){ft.call(this),this.h=o,this.g={}}C(ir,ft);var ru=[];function iu(o){H(o.g,function(l,d){this.g.hasOwnProperty(d)&&Ms(l)},o),o.g={}}ir.prototype.N=function(){ir.aa.N.call(this),iu(this)},ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Us=u.JSON.stringify,bf=u.JSON.parse,Rf=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function qs(){}qs.prototype.h=null;function su(o){return o.h||(o.h=o.i())}function ou(){}var sr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function js(){be.call(this,"d")}C(js,be);function zs(){be.call(this,"c")}C(zs,be);var Bt={},au=null;function fi(){return au=au||new Re}Bt.La="serverreachability";function uu(o){be.call(this,Bt.La,o)}C(uu,be);function or(o){const l=fi();Ne(l,new uu(l))}Bt.STAT_EVENT="statevent";function cu(o,l){be.call(this,Bt.STAT_EVENT,o),this.stat=l}C(cu,be);function ke(o){const l=fi();Ne(l,new cu(l,o))}Bt.Ma="timingevent";function lu(o,l){be.call(this,Bt.Ma,o),this.size=l}C(lu,be);function ar(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function ur(){this.g=!0}ur.prototype.xa=function(){this.g=!1};function Sf(o,l,d,m,A,P){o.info(function(){if(o.g)if(P)for(var k="",te=P.split("&"),Te=0;Te<te.length;Te++){var J=te[Te].split("=");if(1<J.length){var Se=J[0];J=J[1];var Pe=Se.split("_");k=2<=Pe.length&&Pe[1]=="type"?k+(Se+"="+J+"&"):k+(Se+"=redacted&")}}else k=null;else k=P;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+l+`
`+d+`
`+k})}function Pf(o,l,d,m,A,P,k){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+l+`
`+d+`
`+P+" "+k})}function gn(o,l,d,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Df(o,d)+(m?" "+m:"")})}function Vf(o,l){o.info(function(){return"TIMEOUT: "+l})}ur.prototype.info=function(){};function Df(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return Us(d)}catch{return l}}var mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$s;function gi(){}C(gi,qs),gi.prototype.g=function(){return new XMLHttpRequest},gi.prototype.i=function(){return{}},$s=new gi;function mt(o,l,d,m){this.j=o,this.i=l,this.l=d,this.R=m||1,this.U=new ir(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new du}function du(){this.i=null,this.g="",this.h=!1}var fu={},Gs={};function Ks(o,l,d){o.L=1,o.v=Ii(tt(l)),o.m=d,o.P=!0,mu(o,null)}function mu(o,l){o.F=Date.now(),pi(o),o.A=tt(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Pu(d.i,"t",m),o.C=0,d=o.j.J,o.h=new du,o.g=Ku(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Af(_(o.Y,o,o.g),o.O)),l=o.U,d=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(ru[0]=A.toString()),A=ru);for(var P=0;P<A.length;P++){var k=Ya(d,A[P],m||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),or(),Sf(o.i,o.u,o.A,o.l,o.R,o.m)}mt.prototype.ca=function(o){o=o.target;const l=this.M;l&&nt(o)==3?l.j():this.Y(o)},mt.prototype.Y=function(o){try{if(o==this.g)e:{const Pe=nt(this.g);var l=this.g.Ba();const yn=this.g.Z();if(!(3>Pe)&&(Pe!=3||this.g&&(this.h.h||this.g.oa()||Ou(this.g)))){this.J||Pe!=4||l==7||(l==8||0>=yn?or(3):or(2)),Qs(this);var d=this.g.Z();this.X=d;t:if(gu(this)){var m=Ou(this.g);o="";var A=m.length,P=nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),cr(this);var k="";break t}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(P&&l==A-1)});m.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=d==200,Pf(this.i,this.u,this.A,this.l,this.R,Pe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var te,Te=this.g;if((te=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(te)){var J=te;break t}}J=null}if(d=J)gn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ws(this,d);else{this.o=!1,this.s=3,ke(12),Ut(this),cr(this);break e}}if(this.P){d=!0;let Ke;for(;!this.J&&this.C<k.length;)if(Ke=Cf(this,k),Ke==Gs){Pe==4&&(this.s=4,ke(14),d=!1),gn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ke==fu){this.s=4,ke(15),gn(this.i,this.l,k,"[Invalid Chunk]"),d=!1;break}else gn(this.i,this.l,Ke,null),Ws(this,Ke);if(gu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||k.length!=0||this.h.h||(this.s=1,ke(16),d=!1),this.o=this.o&&d,!d)gn(this.i,this.l,k,"[Invalid Chunked Response]"),Ut(this),cr(this);else if(0<k.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),eo(Se),Se.M=!0,ke(11))}}else gn(this.i,this.l,k,null),Ws(this,k);Pe==4&&Ut(this),this.o&&!this.J&&(Pe==4?ju(this.j,this):(this.o=!1,pi(this)))}else Wf(this.g),d==400&&0<k.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Ut(this),cr(this)}}}catch{}finally{}};function gu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Cf(o,l){var d=o.C,m=l.indexOf(`
`,d);return m==-1?Gs:(d=Number(l.substring(d,m)),isNaN(d)?fu:(m+=1,m+d>l.length?Gs:(l=l.slice(m,m+d),o.C=m+d,l)))}mt.prototype.cancel=function(){this.J=!0,Ut(this)};function pi(o){o.S=Date.now()+o.I,pu(o,o.I)}function pu(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ar(_(o.ba,o),l)}function Qs(o){o.B&&(u.clearTimeout(o.B),o.B=null)}mt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Vf(this.i,this.A),this.L!=2&&(or(),ke(17)),Ut(this),this.s=2,cr(this)):pu(this,this.S-o)};function cr(o){o.j.G==0||o.J||ju(o.j,o)}function Ut(o){Qs(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,iu(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Ws(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Hs(d.h,o))){if(!o.K&&Hs(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)bi(d),vi(d);else break e;Zs(d),ke(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=ar(_(d.Za,d),6e3));if(1>=Iu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else jt(d,11)}else if((o.K||d.g==o)&&bi(d),!z(l))for(A=d.Da.g.parse(l),l=0;l<A.length;l++){let J=A[l];if(d.T=J[0],J=J[1],d.G==2)if(J[0]=="c"){d.K=J[1],d.ia=J[2];const Se=J[3];Se!=null&&(d.la=Se,d.j.info("VER="+d.la));const Pe=J[4];Pe!=null&&(d.Aa=Pe,d.j.info("SVER="+d.Aa));const yn=J[5];yn!=null&&typeof yn=="number"&&0<yn&&(m=1.5*yn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ke=o.g;if(Ke){const Si=Ke.g?Ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Si){var P=m.h;P.g||Si.indexOf("spdy")==-1&&Si.indexOf("quic")==-1&&Si.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Js(P,P.h),P.h=null))}if(m.D){const to=Ke.g?Ke.g.getResponseHeader("X-HTTP-Session-Id"):null;to&&(m.ya=to,ie(m.I,m.D,to))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var k=o;if(m.qa=Gu(m,m.J?m.ia:null,m.W),k.K){Eu(m.h,k);var te=k,Te=m.L;Te&&(te.I=Te),te.B&&(Qs(te),pi(te)),m.g=k}else Uu(m);0<d.i.length&&Ai(d)}else J[0]!="stop"&&J[0]!="close"||jt(d,7);else d.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?jt(d,7):Xs(d):J[0]!="noop"&&d.l&&d.l.ta(J),d.v=0)}}or(4)}catch{}}var xf=class{constructor(o,l){this.g=o,this.map=l}};function _u(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Iu(o){return o.h?1:o.g?o.g.size:0}function Hs(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Js(o,l){o.g?o.g.add(l):o.h=l}function Eu(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}_u.prototype.cancel=function(){if(this.i=Tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Tu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return N(o.i)}function Nf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],d=o.length,m=0;m<d;m++)l.push(o[m]);return l}l=[],d=0;for(m in o)l[d++]=o[m];return l}function kf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const m in o)l[d++]=m;return l}}}function wu(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=kf(o),m=Nf(o),A=m.length,P=0;P<A;P++)l.call(void 0,m[P],d&&d[P],o)}var vu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Of(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),A=null;if(0<=m){var P=o[d].substring(0,m);A=o[d].substring(m+1)}else P=o[d];l(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function qt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof qt){this.h=o.h,_i(this,o.j),this.o=o.o,this.g=o.g,yi(this,o.s),this.l=o.l;var l=o.i,d=new dr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Au(this,d),this.m=o.m}else o&&(l=String(o).match(vu))?(this.h=!1,_i(this,l[1]||"",!0),this.o=lr(l[2]||""),this.g=lr(l[3]||"",!0),yi(this,l[4]),this.l=lr(l[5]||"",!0),Au(this,l[6]||"",!0),this.m=lr(l[7]||"")):(this.h=!1,this.i=new dr(null,this.h))}qt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(hr(l,bu,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(hr(l,bu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(hr(d,d.charAt(0)=="/"?Lf:Mf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",hr(d,Uf)),o.join("")};function tt(o){return new qt(o)}function _i(o,l,d){o.j=d?lr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function yi(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Au(o,l,d){l instanceof dr?(o.i=l,qf(o.i,o.h)):(d||(l=hr(l,Bf)),o.i=new dr(l,o.h))}function ie(o,l,d){o.i.set(l,d)}function Ii(o){return ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function lr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function hr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Ff),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ff(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var bu=/[#\/\?@]/g,Mf=/[#\?:]/g,Lf=/[#\?]/g,Bf=/[#\?@]/g,Uf=/#/g;function dr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function gt(o){o.g||(o.g=new Map,o.h=0,o.i&&Of(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=dr.prototype,r.add=function(o,l){gt(this),this.i=null,o=pn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Ru(o,l){gt(o),l=pn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Su(o,l){return gt(o),l=pn(o,l),o.g.has(l)}r.forEach=function(o,l){gt(this),this.g.forEach(function(d,m){d.forEach(function(A){o.call(l,A,m,this)},this)},this)},r.na=function(){gt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const A=o[m];for(let P=0;P<A.length;P++)d.push(l[m])}return d},r.V=function(o){gt(this);let l=[];if(typeof o=="string")Su(this,o)&&(l=l.concat(this.g.get(pn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},r.set=function(o,l){return gt(this),this.i=null,o=pn(this,o),Su(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Pu(o,l,d){Ru(o,l),0<d.length&&(o.i=null,o.g.set(pn(o,l),N(d)),o.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const P=encodeURIComponent(String(m)),k=this.V(m);for(m=0;m<k.length;m++){var A=P;k[m]!==""&&(A+="="+encodeURIComponent(String(k[m]))),o.push(A)}}return this.i=o.join("&")};function pn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function qf(o,l){l&&!o.j&&(gt(o),o.i=null,o.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(Ru(this,m),Pu(this,A,d))},o)),o.j=l}function jf(o,l){const d=new ur;if(u.Image){const m=new Image;m.onload=R(pt,d,"TestLoadImage: loaded",!0,l,m),m.onerror=R(pt,d,"TestLoadImage: error",!1,l,m),m.onabort=R(pt,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=R(pt,d,"TestLoadImage: timeout",!1,l,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function zf(o,l){const d=new ur,m=new AbortController,A=setTimeout(()=>{m.abort(),pt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(A),P.ok?pt(d,"TestPingServer: ok",!0,l):pt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),pt(d,"TestPingServer: error",!1,l)})}function pt(o,l,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function $f(){this.g=new Rf}function Gf(o,l,d){const m=d||"";try{wu(o,function(A,P){let k=A;h(A)&&(k=Us(A)),l.push(m+P+"="+encodeURIComponent(k))})}catch(A){throw l.push(m+"type="+encodeURIComponent("_badmap")),A}}function Ei(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Ei,qs),Ei.prototype.g=function(){return new Ti(this.l,this.j)},Ei.prototype.i=function(o){return function(){return o}}({});function Ti(o,l){Re.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ti,Re),r=Ti.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,mr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,mr(this)),this.g&&(this.readyState=3,mr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?fr(this):mr(this),this.readyState==3&&Vu(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,fr(this))},r.Qa=function(o){this.g&&(this.response=o,fr(this))},r.ga=function(){this.g&&fr(this)};function fr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,mr(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function mr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Du(o){let l="";return H(o,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function Ys(o,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Du(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ie(o,l,d))}function he(o){Re.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(he,Re);var Kf=/^https?$/i,Qf=["POST","PUT"];r=he.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$s.g(),this.v=this.o?su(this.o):su($s),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){Cu(this,P);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Qf,l,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,k]of d)this.g.setRequestHeader(P,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ku(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Cu(this,P)}};function Cu(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,xu(o),wi(o)}function xu(o){o.A||(o.A=!0,Ne(o,"complete"),Ne(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ne(this,"complete"),Ne(this,"abort"),wi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wi(this,!0)),he.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Nu(this):this.bb())},r.bb=function(){Nu(this)};function Nu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||nt(o)!=4||o.Z()!=2)){if(o.u&&nt(o)==4)tu(o.Ea,0,o);else if(Ne(o,"readystatechange"),nt(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=k===0){var A=String(o.D).match(vu)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),m=!Kf.test(A?A.toLowerCase():"")}d=m}if(d)Ne(o,"complete"),Ne(o,"success");else{o.m=6;try{var P=2<nt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",xu(o)}}finally{wi(o)}}}}function wi(o,l){if(o.g){ku(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ne(o,"ready");try{d.onreadystatechange=m}catch{}}}function ku(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function nt(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<nt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),bf(l)}};function Ou(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Wf(o){const l={};o=(o.g&&2<=nt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(z(o[m]))continue;var d=w(o[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[A]||[];l[A]=P,P.push(d)}E(l,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Fu(o){this.Aa=0,this.i=[],this.j=new ur,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gr("baseRetryDelayMs",5e3,o),this.cb=gr("retryDelaySeedMs",1e4,o),this.Wa=gr("forwardChannelMaxRetries",2,o),this.wa=gr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new _u(o&&o.concurrentRequestLimit),this.Da=new $f,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Fu.prototype,r.la=8,r.G=1,r.connect=function(o,l,d,m){ke(0),this.W=o,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Gu(this,null,this.W),Ai(this)};function Xs(o){if(Mu(o),o.G==3){var l=o.U++,d=tt(o.I);if(ie(d,"SID",o.K),ie(d,"RID",l),ie(d,"TYPE","terminate"),pr(o,d),l=new mt(o,o.j,l),l.L=2,l.v=Ii(tt(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=l.v,d=!0),d||(l.g=Ku(l.j,null),l.g.ea(l.v)),l.F=Date.now(),pi(l)}$u(o)}function vi(o){o.g&&(eo(o),o.g.cancel(),o.g=null)}function Mu(o){vi(o),o.u&&(u.clearTimeout(o.u),o.u=null),bi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Ai(o){if(!yu(o.h)&&!o.s){o.s=!0;var l=o.Ga;tr||Ja(),nr||(tr(),nr=!0),xs.add(l,o),o.B=0}}function Hf(o,l){return Iu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ar(_(o.Ga,o,l),zu(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new mt(this,this.j,o);let P=this.o;if(this.S&&(P?(P=p(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Bu(this,A,l),d=tt(this.I),ie(d,"RID",o),ie(d,"CVER",22),this.D&&ie(d,"X-HTTP-Session-Id",this.D),pr(this,d),P&&(this.O?l="headers="+encodeURIComponent(String(Du(P)))+"&"+l:this.m&&Ys(d,this.m,P)),Js(this.h,A),this.Ua&&ie(d,"TYPE","init"),this.P?(ie(d,"$req",l),ie(d,"SID","null"),A.T=!0,Ks(A,d,null)):Ks(A,d,l),this.G=2}}else this.G==3&&(o?Lu(this,o):this.i.length==0||yu(this.h)||Lu(this))};function Lu(o,l){var d;l?d=l.l:d=o.U++;const m=tt(o.I);ie(m,"SID",o.K),ie(m,"RID",d),ie(m,"AID",o.T),pr(o,m),o.m&&o.o&&Ys(m,o.m,o.o),d=new mt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Bu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Js(o.h,d),Ks(d,m,l)}function pr(o,l){o.H&&H(o.H,function(d,m){ie(l,m,d)}),o.l&&wu({},function(d,m){ie(l,m,d)})}function Bu(o,l,d){d=Math.min(o.i.length,d);var m=o.l?_(o.l.Na,o.l,o):null;e:{var A=o.i;let P=-1;for(;;){const k=["count="+d];P==-1?0<d?(P=A[0].g,k.push("ofs="+P)):P=0:k.push("ofs="+P);let te=!0;for(let Te=0;Te<d;Te++){let J=A[Te].g;const Se=A[Te].map;if(J-=P,0>J)P=Math.max(0,A[Te].g-100),te=!1;else try{Gf(Se,k,"req"+J+"_")}catch{m&&m(Se)}}if(te){m=k.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,m}function Uu(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;tr||Ja(),nr||(tr(),nr=!0),xs.add(l,o),o.v=0}}function Zs(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ar(_(o.Fa,o),zu(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,qu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ar(_(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),vi(this),qu(this))};function eo(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function qu(o){o.g=new mt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=tt(o.qa);ie(l,"RID","rpc"),ie(l,"SID",o.K),ie(l,"AID",o.T),ie(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ie(l,"TO",o.ja),ie(l,"TYPE","xmlhttp"),pr(o,l),o.m&&o.o&&Ys(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ii(tt(l)),d.m=null,d.P=!0,mu(d,o)}r.Za=function(){this.C!=null&&(this.C=null,vi(this),Zs(this),ke(19))};function bi(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function ju(o,l){var d=null;if(o.g==l){bi(o),eo(o),o.g=null;var m=2}else if(Hs(o.h,l))d=l.D,Eu(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;m=fi(),Ne(m,new lu(m,d)),Ai(o)}else Uu(o);else if(A=l.s,A==3||A==0&&0<l.X||!(m==1&&Hf(o,l)||m==2&&Zs(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),A){case 1:jt(o,5);break;case 4:jt(o,10);break;case 3:jt(o,6);break;default:jt(o,2)}}}function zu(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function jt(o,l){if(o.j.info("Error code "+l),l==2){var d=_(o.fb,o),m=o.Xa;const A=!m;m=new qt(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||_i(m,"https"),Ii(m),A?jf(m.toString(),d):zf(m.toString(),d)}else ke(2);o.G=0,o.l&&o.l.sa(l),$u(o),Mu(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function $u(o){if(o.G=0,o.ka=[],o.l){const l=Tu(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ka,l),x(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Gu(o,l,d){var m=d instanceof qt?tt(d):new qt(d);if(m.g!="")l&&(m.g=l+"."+m.g),yi(m,m.s);else{var A=u.location;m=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var P=new qt(null);m&&_i(P,m),l&&(P.g=l),A&&yi(P,A),d&&(P.l=d),m=P}return d=o.D,l=o.ya,d&&l&&ie(m,d,l),ie(m,"VER",o.la),pr(o,m),m}function Ku(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new he(new Ei({eb:d})):new he(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qu(){}r=Qu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ri(){}Ri.prototype.g=function(o,l){return new je(o,l)};function je(o,l){Re.call(this),this.g=new Fu(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!z(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!z(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new _n(this)}C(je,Re),je.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},je.prototype.close=function(){Xs(this.g)},je.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Us(o),o=d);l.i.push(new xf(l.Ya++,o)),l.G==3&&Ai(l)},je.prototype.N=function(){this.g.l=null,delete this.j,Xs(this.g),delete this.g,je.aa.N.call(this)};function Wu(o){js.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(Wu,js);function Hu(){zs.call(this),this.status=1}C(Hu,zs);function _n(o){this.g=o}C(_n,Qu),_n.prototype.ua=function(){Ne(this.g,"a")},_n.prototype.ta=function(o){Ne(this.g,new Wu(o))},_n.prototype.sa=function(o){Ne(this.g,new Hu)},_n.prototype.ra=function(){Ne(this.g,"b")},Ri.prototype.createWebChannel=Ri.prototype.g,je.prototype.send=je.prototype.o,je.prototype.open=je.prototype.m,je.prototype.close=je.prototype.close,Hl=function(){return new Ri},Wl=function(){return fi()},Ql=Bt,_o={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mi.NO_ERROR=0,mi.TIMEOUT=8,mi.HTTP_ERROR=6,ki=mi,hu.COMPLETE="complete",Kl=hu,ou.EventType=sr,sr.OPEN="a",sr.CLOSE="b",sr.ERROR="c",sr.MESSAGE="d",Re.prototype.listen=Re.prototype.K,wr=ou,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,Gl=he}).apply(typeof Pi<"u"?Pi:typeof self<"u"?self:typeof window<"u"?window:{});const uc="@firebase/firestore";/**
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
 */let Kn="11.0.0";/**
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
 */const St=new jo("@firebase/firestore");function vn(){return St.logLevel}function Mg(r){St.setLogLevel(r)}function D(r,...e){if(St.logLevel<=Q.DEBUG){const t=e.map(Qo);St.debug(`Firestore (${Kn}): ${r}`,...t)}}function fe(r,...e){if(St.logLevel<=Q.ERROR){const t=e.map(Qo);St.error(`Firestore (${Kn}): ${r}`,...t)}}function Ye(r,...e){if(St.logLevel<=Q.WARN){const t=e.map(Qo);St.warn(`Firestore (${Kn}): ${r}`,...t)}}function Qo(r){if(typeof r=="string")return r;try{/**
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
 */function M(r="Unexpected state"){const e=`FIRESTORE (${Kn}) INTERNAL ASSERTION FAILED: `+r;throw fe(e),new Error(e)}function L(r,e){r||M()}function Lg(r,e){r||M()}function F(r,e){return r}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends ln{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ee.UNAUTHENTICATED))}shutdown(){}}class Ug{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qg{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){L(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let s=new Ae;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ae,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ae)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string"),new Jl(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return L(e===null||typeof e=="string"),new Ee(e)}}class jg{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zg{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new jg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $g{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){L(this.o===void 0);const n=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(L(typeof t.token=="string"),this.R=t.token,new $g(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Kg(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Yl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Kg(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function j(r,e){return r<e?-1:r>e?1:0}function Nn(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function Xl(r){return r+"\0"}/**
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
 */class ce{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ce(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new ce(0,0))}static max(){return new B(new ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Or{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(),n===void 0?n=e.length-t:n>e.length-t&&M(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Or?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class G extends Or{construct(e,t,n){return new G(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new V(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new G(t)}static emptyPath(){return new G([])}}const Qg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends Or{construct(e,t,n){return new ae(e,t,n)}static isValidIdentifier(e){return Qg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ae(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new V(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(n+=u,i++):(s(),i++)}if(s(),a)throw new V(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(t)}static emptyPath(){return new ae([])}}/**
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
 */class Qi{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function yo(r){return r.fields.find(e=>e.kind===2)}function Gt(r){return r.fields.filter(e=>e.kind!==2)}Qi.UNKNOWN_ID=-1;class Oi{constructor(e,t){this.fieldPath=e,this.kind=t}}class Fr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Fr(0,ze.min())}}function Zl(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=B.fromTimestamp(n===1e9?new ce(t+1,0):new ce(t,n));return new ze(i,O.empty(),e)}function eh(r){return new ze(r.readTime,r.key,-1)}class ze{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ze(B.min(),O.empty(),-1)}static max(){return new ze(B.max(),O.empty(),-1)}}function Wo(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(r.documentKey,e.documentKey),t!==0?t:j(r.largestBatchId,e.largestBatchId))}/**
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
 */const th="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ot(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==th)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new v((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof v?t:v.resolve(t)}catch(t){return v.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):v.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):v.reject(t)}static resolve(e){return new v((t,n)=>{t(e)})}static reject(e){return new v((t,n)=>{n(e)})}static waitFor(e){return new v((t,n)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},c=>n(c))}),a=!0,s===i&&t()})}static or(e){let t=v.resolve(!1);for(const n of e)t=t.next(i=>i?v.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new v((n,i)=>{const s=e.length,a=new Array(s);let u=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++u,u===s&&n(a)},f=>i(f))}})}static doWhile(e,t){return new v((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
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
 */class us{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Ae,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Rr(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const i=Ho(n.target.error);this.V.reject(new Rr(e,i))}}static open(e,t,n,i){try{return new us(t,e.transaction(i,n))}catch(s){throw new Rr(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(D("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Hg(t)}}class He{constructor(e,t,n){this.name=e,this.version=t,this.p=n,He.S(Gi())===12.2&&fe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return D("SimpleDb","Removing database:",e),Kt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Vl())return!1;if(He.v())return!0;const e=Gi(),t=He.S(e),n=0<t&&t<10,i=rh(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(D("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const a=s.target.result;t(a)},i.onblocked=()=>{n(new Rr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const a=s.target.error;a.name==="VersionError"?n(new V(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new V(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new Rr(e,a))},i.onupgradeneeded=s=>{D("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const a=s.target.result;this.p.O(a,i.transaction,s.oldVersion,this.version).next(()=>{D("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s=t==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(e);const u=us.open(this.db,e,s?"readonly":"readwrite",n),c=i(u).next(h=>(u.g(),h)).catch(h=>(u.abort(h),v.reject(h))).toPromise();return c.catch(()=>{}),await u.m,c}catch(u){const c=u,h=c.name!=="FirebaseError"&&a<3;if(D("SimpleDb","Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function rh(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Wg{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Kt(this.B.delete())}}class Rr extends V{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ft(r){return r.name==="IndexedDbTransactionError"}class Hg{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(D("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(D("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Kt(n)}add(e){return D("SimpleDb","ADD",this.store.name,e,e),Kt(this.store.add(e))}get(e){return Kt(this.store.get(e)).next(t=>(t===void 0&&(t=null),D("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return D("SimpleDb","DELETE",this.store.name,e),Kt(this.store.delete(e))}count(){return D("SimpleDb","COUNT",this.store.name),Kt(this.store.count())}U(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new v((a,u)=>{s.onerror=c=>{u(c.target.error)},s.onsuccess=c=>{a(c.target.result)}})}{const s=this.cursor(n),a=[];return this.W(s,(u,c)=>{a.push(c)}).next(()=>a)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new v((i,s)=>{n.onerror=a=>{s(a.target.error)},n.onsuccess=a=>{i(a.target.result)}})}j(e,t){D("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const i=this.cursor(n);return this.W(i,(s,a,u)=>u.delete())}J(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.W(i,t)}Y(e){const t=this.cursor({});return new v((n,i)=>{t.onerror=s=>{const a=Ho(s.target.error);i(a)},t.onsuccess=s=>{const a=s.target.result;a?e(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}W(e,t){const n=[];return new v((i,s)=>{e.onerror=a=>{s(a.target.error)},e.onsuccess=a=>{const u=a.target.result;if(!u)return void i();const c=new Wg(u),h=t(u.primaryKey,u.value,c);if(h instanceof v){const f=h.catch(g=>(c.done(),v.reject(g)));n.push(f)}c.isDone?i():c.K===null?u.continue():u.continue(c.K)}}).next(()=>v.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Kt(r){return new v((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=Ho(n.target.error);t(i)}})}let cc=!1;function Ho(r){const e=He.S(Gi());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return cc||(cc=!0,setTimeout(()=>{throw n},0)),n}}return r}class Jg{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){D("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{D("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Ft(t)?D("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Ot(t)}await this.X(6e4)})}}class Yg{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let i=t,s=!0;return v.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!n.has(a))return D("IndexBackfiller",`Processing collection: ${a}`),this.ne(e,a,i).next(u=>{i-=u,n.add(a)});s=!1})).next(()=>t-i)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const a=s.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.re(i,s)).next(u=>(D("IndexBackfiller",`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(e,t,u))).next(()=>a.size)}))}re(e,t){let n=e;return t.changes.forEach((i,s)=>{const a=eh(s);Wo(a,n)>0&&(n=a)}),new ze(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Be{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Be.oe=-1;function Jr(r){return r==null}function Mr(r){return r===0&&1/r==-1/0}function ih(r){return typeof r=="number"&&Number.isInteger(r)&&!Mr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ce(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=lc(e)),e=Xg(r.get(t),e);return lc(e)}function Xg(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function lc(r){return r+""}function Qe(r){const e=r.length;if(L(e>=2),e===2)return L(r.charAt(0)===""&&r.charAt(1)===""),G.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const a=r.indexOf("",s);switch((a<0||a>t)&&M(),r.charAt(a+1)){case"":const u=r.substring(s,a);let c;i.length===0?c=u:(i+=u,c=i,i=""),n.push(c);break;case"":i+=r.substring(s,a),i+="\0";break;case"":i+=r.substring(s,a+1);break;default:M()}s=a+2}return new G(n)}/**
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
 */const hc=["userId","batchId"];/**
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
 */function Fi(r,e){return[r,Ce(e)]}function sh(r,e,t){return[r,Ce(e),t]}const Zg={},ep=["prefixPath","collectionGroup","readTime","documentId"],tp=["prefixPath","collectionGroup","documentId"],np=["collectionGroup","readTime","prefixPath","documentId"],rp=["canonicalId","targetId"],ip=["targetId","path"],sp=["path","targetId"],op=["collectionId","parent"],ap=["indexId","uid"],up=["uid","sequenceNumber"],cp=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],lp=["indexId","uid","orderedDocumentKey"],hp=["userId","collectionPath","documentId"],dp=["userId","collectionPath","largestBatchId"],fp=["userId","collectionGroup","largestBatchId"],oh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],mp=[...oh,"documentOverlays"],ah=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],uh=ah,Jo=[...uh,"indexConfiguration","indexState","indexEntries"],gp=Jo,pp=[...Jo,"globals"];/**
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
 */class Io extends nh{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function ye(r,e){const t=F(r);return He.F(t._e,e)}/**
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
 */function dc(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Mt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function ch(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class re{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vi(this.root,e,this.comparator,!0)}}class Vi{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??we.RED,this.left=i??we.EMPTY,this.right=s??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new we(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return we.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,n,i,s){return this}insert(e,t,n){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ee{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fc(this.data.getIterator())}getIteratorFrom(e){return new fc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ee(this.comparator);return t.data=e,t}}class fc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function In(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Ue{constructor(e){this.fields=e,e.sort(ae.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new ee(ae.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Nn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class lh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function _p(){return typeof atob<"u"}/**
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
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lh("Invalid base64 string: "+s):s}}(e);return new de(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const yp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ot(r){if(L(!!r),typeof r=="string"){let e=0;const t=yp.exec(r);if(L(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:oe(r.seconds),nanos:oe(r.nanos)}}function oe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function at(r){return typeof r=="string"?de.fromBase64String(r):de.fromUint8Array(r)}/**
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
 */function cs(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ls(r){const e=r.mapValue.fields.__previous_value__;return cs(e)?ls(e):e}function Lr(r){const e=ot(r.mapValue.fields.__local_write_time__.timestampValue);return new ce(e.seconds,e.nanos)}/**
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
 */class Ip{constructor(e,t,n,i,s,a,u,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h}}class Pt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Pt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const wt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Mi={nullValue:"NULL_VALUE"};function Vt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?cs(r)?4:hh(r)?9007199254740991:hs(r)?10:11:M()}function Xe(r,e){if(r===e)return!0;const t=Vt(r);if(t!==Vt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Lr(r).isEqual(Lr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=ot(i.timestampValue),u=ot(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return at(i.bytesValue).isEqual(at(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return oe(i.geoPointValue.latitude)===oe(s.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return oe(i.integerValue)===oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=oe(i.doubleValue),u=oe(s.doubleValue);return a===u?Mr(a)===Mr(u):isNaN(a)&&isNaN(u)}return!1}(r,e);case 9:return Nn(r.arrayValue.values||[],e.arrayValue.values||[],Xe);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(dc(a)!==dc(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!Xe(a[c],u[c])))return!1;return!0}(r,e);default:return M()}}function Br(r,e){return(r.values||[]).find(t=>Xe(t,e))!==void 0}function Dt(r,e){if(r===e)return 0;const t=Vt(r),n=Vt(e);if(t!==n)return j(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,e.booleanValue);case 2:return function(s,a){const u=oe(s.integerValue||s.doubleValue),c=oe(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,e);case 3:return mc(r.timestampValue,e.timestampValue);case 4:return mc(Lr(r),Lr(e));case 5:return j(r.stringValue,e.stringValue);case 6:return function(s,a){const u=at(s),c=at(a);return u.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(s,a){const u=s.split("/"),c=a.split("/");for(let h=0;h<u.length&&h<c.length;h++){const f=j(u[h],c[h]);if(f!==0)return f}return j(u.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,a){const u=j(oe(s.latitude),oe(a.latitude));return u!==0?u:j(oe(s.longitude),oe(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return gc(r.arrayValue,e.arrayValue);case 10:return function(s,a){var u,c,h,f;const g=s.fields||{},_=a.fields||{},R=(u=g.value)===null||u===void 0?void 0:u.arrayValue,C=(c=_.value)===null||c===void 0?void 0:c.arrayValue,N=j(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:gc(R,C)}(r.mapValue,e.mapValue);case 11:return function(s,a){if(s===wt.mapValue&&a===wt.mapValue)return 0;if(s===wt.mapValue)return 1;if(a===wt.mapValue)return-1;const u=s.fields||{},c=Object.keys(u),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const _=j(c[g],f[g]);if(_!==0)return _;const R=Dt(u[c[g]],h[f[g]]);if(R!==0)return R}return j(c.length,f.length)}(r.mapValue,e.mapValue);default:throw M()}}function mc(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return j(r,e);const t=ot(r),n=ot(e),i=j(t.seconds,n.seconds);return i!==0?i:j(t.nanos,n.nanos)}function gc(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=Dt(t[i],n[i]);if(s)return s}return j(t.length,n.length)}function kn(r){return Eo(r)}function Eo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=ot(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return at(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return O.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=Eo(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of n)s?s=!1:i+=",",i+=`${a}:${Eo(t.fields[a])}`;return i+"}"}(r.mapValue):M()}function Li(r){switch(Vt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ls(r);return e?16+Li(e):16;case 5:return 2*r.stringValue.length;case 6:return at(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,s)=>i+Li(s),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return Mt(n.fields,(s,a)=>{i+=s.length+Li(a)}),i}(r.mapValue);default:throw M()}}function tn(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function To(r){return!!r&&"integerValue"in r}function Ur(r){return!!r&&"arrayValue"in r}function pc(r){return!!r&&"nullValue"in r}function _c(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Bi(r){return!!r&&"mapValue"in r}function hs(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Sr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Mt(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Sr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function hh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const dh={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Ep(r){return"nullValue"in r?Mi:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?tn(Pt.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?hs(r)?dh:{mapValue:{}}:M()}function Tp(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?tn(Pt.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?dh:"mapValue"in r?hs(r)?{mapValue:{}}:wt:M()}function yc(r,e){const t=Dt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Ic(r,e){const t=Dt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class ve{constructor(e){this.value=e}static empty(){return new ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Bi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sr(t)}setAll(e){let t=ae.emptyPath(),n={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const c=this.getFieldsMap(t);this.applyChanges(c,n,i),n={},i=[],t=u.popLast()}a?n[u.lastSegment()]=Sr(a):i.push(u.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Bi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Bi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Mt(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new ve(Sr(this.value))}}function fh(r){const e=[];return Mt(r.fields,(t,n)=>{const i=new ae([t]);if(Bi(n)){const s=fh(n.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Ue(e)}/**
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
 */class se{constructor(e,t,n,i,s,a,u){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new se(e,0,B.min(),B.min(),B.min(),ve.empty(),0)}static newFoundDocument(e,t,n,i){return new se(e,1,t,B.min(),n,i,0)}static newNoDocument(e,t){return new se(e,2,t,B.min(),B.min(),ve.empty(),0)}static newUnknownDocument(e,t){return new se(e,3,t,B.min(),B.min(),ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ct{constructor(e,t){this.position=e,this.inclusive=t}}function Ec(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],a=r.position[i];if(s.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),t.key):n=Dt(a,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Tc(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Xe(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class qr{constructor(e,t="asc"){this.field=e,this.dir=t}}function wp(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class mh{}class K extends mh{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new vp(e,t,n):t==="array-contains"?new Rp(e,n):t==="in"?new Eh(e,n):t==="not-in"?new Sp(e,n):t==="array-contains-any"?new Pp(e,n):new K(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Ap(e,n):new bp(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Dt(t,this.value)):t!==null&&Vt(this.value)===Vt(t)&&this.matchesComparison(Dt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Z extends mh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Z(e,t)}matches(e){return On(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function On(r){return r.op==="and"}function wo(r){return r.op==="or"}function Yo(r){return gh(r)&&On(r)}function gh(r){for(const e of r.filters)if(e instanceof Z)return!1;return!0}function vo(r){if(r instanceof K)return r.field.canonicalString()+r.op.toString()+kn(r.value);if(Yo(r))return r.filters.map(e=>vo(e)).join(",");{const e=r.filters.map(t=>vo(t)).join(",");return`${r.op}(${e})`}}function ph(r,e){return r instanceof K?function(n,i){return i instanceof K&&n.op===i.op&&n.field.isEqual(i.field)&&Xe(n.value,i.value)}(r,e):r instanceof Z?function(n,i){return i instanceof Z&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,a,u)=>s&&ph(a,i.filters[u]),!0):!1}(r,e):void M()}function _h(r,e){const t=r.filters.concat(e);return Z.create(t,r.op)}function yh(r){return r instanceof K?function(t){return`${t.field.canonicalString()} ${t.op} ${kn(t.value)}`}(r):r instanceof Z?function(t){return t.op.toString()+" {"+t.getFilters().map(yh).join(" ,")+"}"}(r):"Filter"}class vp extends K{constructor(e,t,n){super(e,t,n),this.key=O.fromName(n.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ap extends K{constructor(e,t){super(e,"in",t),this.keys=Ih("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class bp extends K{constructor(e,t){super(e,"not-in",t),this.keys=Ih("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ih(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>O.fromName(n.referenceValue))}class Rp extends K{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ur(t)&&Br(t.arrayValue,this.value)}}class Eh extends K{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Br(this.value.arrayValue,t)}}class Sp extends K{constructor(e,t){super(e,"not-in",t)}matches(e){if(Br(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Br(this.value.arrayValue,t)}}class Pp extends K{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ur(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Br(this.value.arrayValue,n))}}/**
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
 */class Vp{constructor(e,t=null,n=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.ue=null}}function Ao(r,e=null,t=[],n=[],i=null,s=null,a=null){return new Vp(r,e,t,n,i,s,a)}function nn(r){const e=F(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>vo(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Jr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>kn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>kn(n)).join(",")),e.ue=t}return e.ue}function Yr(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!wp(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!ph(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Tc(r.startAt,e.startAt)&&Tc(r.endAt,e.endAt)}function Wi(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Hi(r,e){return r.filters.filter(t=>t instanceof K&&t.field.isEqual(e))}function wc(r,e,t){let n=Mi,i=!0;for(const s of Hi(r,e)){let a=Mi,u=!0;switch(s.op){case"<":case"<=":a=Ep(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,u=!1;break;case"!=":case"not-in":a=Mi}yc({value:n,inclusive:i},{value:a,inclusive:u})<0&&(n=a,i=u)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const a=t.position[s];yc({value:n,inclusive:i},{value:a,inclusive:t.inclusive})<0&&(n=a,i=t.inclusive);break}}return{value:n,inclusive:i}}function vc(r,e,t){let n=wt,i=!0;for(const s of Hi(r,e)){let a=wt,u=!0;switch(s.op){case">=":case">":a=Tp(s.value),u=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,u=!1;break;case"!=":case"not-in":a=wt}Ic({value:n,inclusive:i},{value:a,inclusive:u})>0&&(n=a,i=u)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const a=t.position[s];Ic({value:n,inclusive:i},{value:a,inclusive:t.inclusive})>0&&(n=a,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
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
 */class ct{constructor(e,t=null,n=[],i=[],s=null,a="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Th(r,e,t,n,i,s,a,u){return new ct(r,e,t,n,i,s,a,u)}function Qn(r){return new ct(r)}function Ac(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Xo(r){return r.collectionGroup!==null}function Pn(r){const e=F(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ee(ae.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(u=u.add(h.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new qr(s,n))}),t.has(ae.keyField().canonicalString())||e.ce.push(new qr(ae.keyField(),n))}return e.ce}function Me(r){const e=F(r);return e.le||(e.le=Dp(e,Pn(r))),e.le}function Dp(r,e){if(r.limitType==="F")return Ao(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new qr(i.field,s)});const t=r.endAt?new Ct(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Ct(r.startAt.position,r.startAt.inclusive):null;return Ao(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function bo(r,e){const t=r.filters.concat([e]);return new ct(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Ji(r,e,t){return new ct(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Xr(r,e){return Yr(Me(r),Me(e))&&r.limitType===e.limitType}function wh(r){return`${nn(Me(r))}|lt:${r.limitType}`}function An(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>yh(i)).join(", ")}]`),Jr(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>kn(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>kn(i)).join(",")),`Target(${n})`}(Me(r))}; limitType=${r.limitType})`}function Zr(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):O.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of Pn(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(a,u,c){const h=Ec(a,u,c);return a.inclusive?h<=0:h<0}(n.startAt,Pn(n),i)||n.endAt&&!function(a,u,c){const h=Ec(a,u,c);return a.inclusive?h>=0:h>0}(n.endAt,Pn(n),i))}(r,e)}function vh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ah(r){return(e,t)=>{let n=!1;for(const i of Pn(r)){const s=Cp(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Cp(r,e,t){const n=r.field.isKeyField()?O.comparator(e.key,t.key):function(s,a,u){const c=a.data.field(s),h=u.data.field(s);return c!==null&&h!==null?Dt(c,h):M()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M()}}/**
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
 */class lt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Mt(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return ch(this.inner)}size(){return this.innerSize}}/**
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
 */const xp=new re(O.comparator);function qe(){return xp}const bh=new re(O.comparator);function vr(...r){let e=bh;for(const t of r)e=e.insert(t.key,t);return e}function Rh(r){let e=bh;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function We(){return Pr()}function Sh(){return Pr()}function Pr(){return new lt(r=>r.toString(),(r,e)=>r.isEqual(e))}const Np=new re(O.comparator),kp=new ee(O.comparator);function $(...r){let e=kp;for(const t of r)e=e.add(t);return e}const Op=new ee(j);function Zo(){return Op}/**
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
 */function ea(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mr(e)?"-0":e}}function Ph(r){return{integerValue:""+r}}function Vh(r,e){return ih(e)?Ph(e):ea(r,e)}/**
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
 */class ds{constructor(){this._=void 0}}function Fp(r,e,t){return r instanceof Fn?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&cs(s)&&(s=ls(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):r instanceof rn?Ch(r,e):r instanceof sn?xh(r,e):function(i,s){const a=Dh(i,s),u=bc(a)+bc(i.Pe);return To(a)&&To(i.Pe)?Ph(u):ea(i.serializer,u)}(r,e)}function Mp(r,e,t){return r instanceof rn?Ch(r,e):r instanceof sn?xh(r,e):t}function Dh(r,e){return r instanceof Mn?function(n){return To(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class Fn extends ds{}class rn extends ds{constructor(e){super(),this.elements=e}}function Ch(r,e){const t=Nh(e);for(const n of r.elements)t.some(i=>Xe(i,n))||t.push(n);return{arrayValue:{values:t}}}class sn extends ds{constructor(e){super(),this.elements=e}}function xh(r,e){let t=Nh(e);for(const n of r.elements)t=t.filter(i=>!Xe(i,n));return{arrayValue:{values:t}}}class Mn extends ds{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function bc(r){return oe(r.integerValue||r.doubleValue)}function Nh(r){return Ur(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class ei{constructor(e,t){this.field=e,this.transform=t}}function Lp(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof rn&&i instanceof rn||n instanceof sn&&i instanceof sn?Nn(n.elements,i.elements,Xe):n instanceof Mn&&i instanceof Mn?Xe(n.Pe,i.Pe):n instanceof Fn&&i instanceof Fn}(r.transform,e.transform)}class Bp{constructor(e,t){this.version=e,this.transformResults=t}}class ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ue}static exists(e){return new ue(void 0,e)}static updateTime(e){return new ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ui(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class fs{}function kh(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Hn(r.key,ue.none()):new Wn(r.key,r.data,ue.none());{const t=r.data,n=ve.empty();let i=new ee(ae.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?n.delete(s):n.set(s,a),i=i.add(s)}return new ht(r.key,n,new Ue(i.toArray()),ue.none())}}function Up(r,e,t){r instanceof Wn?function(i,s,a){const u=i.value.clone(),c=Sc(i.fieldTransforms,s,a.transformResults);u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):r instanceof ht?function(i,s,a){if(!Ui(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=Sc(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Oh(i)),c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Vr(r,e,t,n){return r instanceof Wn?function(s,a,u,c){if(!Ui(s.precondition,a))return u;const h=s.value.clone(),f=Pc(s.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof ht?function(s,a,u,c){if(!Ui(s.precondition,a))return u;const h=Pc(s.fieldTransforms,c,a),f=a.data;return f.setAll(Oh(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(r,e,t,n):function(s,a,u){return Ui(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,e,t)}function qp(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=Dh(n.transform,i||null);s!=null&&(t===null&&(t=ve.empty()),t.set(n.field,s))}return t||null}function Rc(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Nn(n,i,(s,a)=>Lp(s,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Wn extends fs{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ht extends fs{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Oh(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Sc(r,e,t){const n=new Map;L(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],a=s.transform,u=e.data.field(s.field);n.set(s.field,Mp(a,u,t[i]))}return n}function Pc(r,e,t){const n=new Map;for(const i of r){const s=i.transform,a=t.data.field(i.field);n.set(i.field,Fp(s,a,e))}return n}class Hn extends fs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ta extends fs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class na{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Up(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Vr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Vr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Sh();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;const c=kh(a,u);c!==null&&n.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(B.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$())}isEqual(e){return this.batchId===e.batchId&&Nn(this.mutations,e.mutations,(t,n)=>Rc(t,n))&&Nn(this.baseMutations,e.baseMutations,(t,n)=>Rc(t,n))}}class ra{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){L(e.mutations.length===n.length);let i=function(){return Np}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new ra(e,t,n,i)}}/**
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
 */class ia{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jp{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var pe,W;function Fh(r){switch(r){default:return M();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Mh(r){if(r===void 0)return fe("GRPC error has no .code"),S.UNKNOWN;switch(r){case pe.OK:return S.OK;case pe.CANCELLED:return S.CANCELLED;case pe.UNKNOWN:return S.UNKNOWN;case pe.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case pe.INTERNAL:return S.INTERNAL;case pe.UNAVAILABLE:return S.UNAVAILABLE;case pe.UNAUTHENTICATED:return S.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case pe.NOT_FOUND:return S.NOT_FOUND;case pe.ALREADY_EXISTS:return S.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return S.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case pe.ABORTED:return S.ABORTED;case pe.OUT_OF_RANGE:return S.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return S.UNIMPLEMENTED;case pe.DATA_LOSS:return S.DATA_LOSS;default:return M()}}(W=pe||(pe={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Lh(){return new TextEncoder}/**
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
 */const zp=new Zt([4294967295,4294967295],0);function Vc(r){const e=Lh().encode(r),t=new $l;return t.update(e),new Uint8Array(t.digest())}function Dc(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zt([t,n],0),new Zt([i,s],0)]}class sa{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ar(`Invalid padding: ${t}`);if(n<0)throw new Ar(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Ar(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Ar(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Zt.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(Zt.fromNumber(n)));return i.compare(zp)===1&&(i=new Zt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Vc(e),[n,i]=Dc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);if(!this.de(a))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new sa(s,i,t);return n.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;const t=Vc(e),[n,i]=Dc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ti{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,ni.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ti(B.min(),i,new re(j),qe(),$())}}class ni{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ni(n,t,$(),$(),$())}}/**
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
 */class qi{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class Bh{constructor(e,t){this.targetId=e,this.me=t}}class Uh{constructor(e,t,n=de.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Cc{constructor(){this.fe=0,this.ge=Nc(),this.pe=de.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=$(),t=$(),n=$();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:M()}}),new ni(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Nc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,L(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $p{constructor(e){this.Le=e,this.Be=new Map,this.ke=qe(),this.qe=xc(),this.Qe=new re(j)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Wi(s))if(n===0){const a=new O(s.path);this.Ue(t,a,se.newNoDocument(a,B.min()))}else L(n===1);else{const a=this.Ye(t);if(a!==n){const u=this.Ze(e),c=u?this.Xe(u,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let a,u;try{a=at(n).toUint8Array()}catch(c){if(c instanceof lh)return Ye("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new sa(a,i,s)}catch(c){return Ye(c instanceof Ar?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Ie===0?null:u}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const u=this.Je(a);if(u){if(s.current&&Wi(u.target)){const c=new O(u.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,se.newNoDocument(c,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let n=$();this.qe.forEach((s,a)=>{let u=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new ti(e,t,this.Qe,this.ke,n);return this.ke=qe(),this.qe=xc(),this.Qe=new re(j),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Cc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ee(j),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Cc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function xc(){return new re(O.comparator)}function Nc(){return new re(O.comparator)}const Gp={asc:"ASCENDING",desc:"DESCENDING"},Kp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qp={and:"AND",or:"OR"};class Wp{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ro(r,e){return r.useProto3Json||Jr(e)?e:{value:e}}function Ln(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qh(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Hp(r,e){return Ln(r,e.toTimestamp())}function me(r){return L(!!r),B.fromTimestamp(function(t){const n=ot(t);return new ce(n.seconds,n.nanos)}(r))}function oa(r,e){return So(r,e).canonicalString()}function So(r,e){const t=function(i){return new G(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function jh(r){const e=G.fromString(r);return L(Xh(e)),e}function jr(r,e){return oa(r.databaseId,e.path)}function Je(r,e){const t=jh(e);if(t.get(1)!==r.databaseId.projectId)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new O(Gh(t))}function zh(r,e){return oa(r.databaseId,e)}function $h(r){const e=jh(r);return e.length===4?G.emptyPath():Gh(e)}function Po(r){return new G(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Gh(r){return L(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function kc(r,e,t){return{name:jr(r,e),fields:t.value.mapValue.fields}}function Kh(r,e,t){const n=Je(r,e.name),i=me(e.updateTime),s=e.createTime?me(e.createTime):B.min(),a=new ve({mapValue:{fields:e.fields}}),u=se.newFoundDocument(n,i,s,a);return t&&u.setHasCommittedMutations(),t?u.setHasCommittedMutations():u}function Jp(r,e){return"found"in e?function(n,i){L(!!i.found),i.found.name,i.found.updateTime;const s=Je(n,i.found.name),a=me(i.found.updateTime),u=i.found.createTime?me(i.found.createTime):B.min(),c=new ve({mapValue:{fields:i.found.fields}});return se.newFoundDocument(s,a,u,c)}(r,e):"missing"in e?function(n,i){L(!!i.missing),L(!!i.readTime);const s=Je(n,i.missing),a=me(i.readTime);return se.newNoDocument(s,a)}(r,e):M()}function Yp(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(L(f===void 0||typeof f=="string"),de.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array),de.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(h){const f=h.code===void 0?S.UNKNOWN:Mh(h.code);return new V(f,h.message||"")}(a);t=new Uh(n,i,s,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=Je(r,n.document.name),s=me(n.document.updateTime),a=n.document.createTime?me(n.document.createTime):B.min(),u=new ve({mapValue:{fields:n.document.fields}}),c=se.newFoundDocument(i,s,a,u),h=n.targetIds||[],f=n.removedTargetIds||[];t=new qi(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=Je(r,n.document),s=n.readTime?me(n.readTime):B.min(),a=se.newNoDocument(i,s),u=n.removedTargetIds||[];t=new qi([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=Je(r,n.document),s=n.removedTargetIds||[];t=new qi([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,a=new jp(i,s),u=n.targetId;t=new Bh(u,a)}}return t}function zr(r,e){let t;if(e instanceof Wn)t={update:kc(r,e.key,e.value)};else if(e instanceof Hn)t={delete:jr(r,e.key)};else if(e instanceof ht)t={update:kc(r,e.key,e.data),updateMask:r_(e.fieldMask)};else{if(!(e instanceof ta))return M();t={verify:jr(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,a){const u=a.transform;if(u instanceof Fn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof rn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof sn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Mn)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw M()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Hp(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M()}(r,e.precondition)),t}function Vo(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?ue.updateTime(me(s.updateTime)):s.exists!==void 0?ue.exists(s.exists):ue.none()}(e.currentDocument):ue.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(a,u){let c=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME"),c=new Fn;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new rn(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new sn(f)}else"increment"in u?c=new Mn(a,u.increment):M();const h=ae.fromServerFormat(u.fieldPath);return new ei(h,c)}(r,i)):[];if(e.update){e.update.name;const i=Je(r,e.update.name),s=new ve({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(c){const h=c.fieldPaths||[];return new Ue(h.map(f=>ae.fromServerFormat(f)))}(e.updateMask);return new ht(i,s,a,t,n)}return new Wn(i,s,t,n)}if(e.delete){const i=Je(r,e.delete);return new Hn(i,t)}if(e.verify){const i=Je(r,e.verify);return new ta(i,t)}return M()}function Xp(r,e){return r&&r.length>0?(L(e!==void 0),r.map(t=>function(i,s){let a=i.updateTime?me(i.updateTime):me(s);return a.isEqual(B.min())&&(a=me(s)),new Bp(a,i.transformResults||[])}(t,e))):[]}function Qh(r,e){return{documents:[zh(r,e.path)]}}function Wh(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=zh(r,i);const s=function(h){if(h.length!==0)return Yh(Z.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:bn(_.field),direction:e_(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Ro(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function Hh(r){let e=$h(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){L(n===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(g){const _=Jh(g);return _ instanceof Z&&Yo(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(_=>function(C){return new qr(Rn(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(_))}(t.orderBy));let u=null;t.limit&&(u=function(g){let _;return _=typeof g=="object"?g.value:g,Jr(_)?null:_}(t.limit));let c=null;t.startAt&&(c=function(g){const _=!!g.before,R=g.values||[];return new Ct(R,_)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const _=!g.before,R=g.values||[];return new Ct(R,_)}(t.endAt)),Th(e,i,a,s,u,"F",c,h)}function Zp(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jh(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Rn(t.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Rn(t.unaryFilter.field);return K.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Rn(t.unaryFilter.field);return K.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Rn(t.unaryFilter.field);return K.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(r):r.fieldFilter!==void 0?function(t){return K.create(Rn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Z.create(t.compositeFilter.filters.map(n=>Jh(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op))}(r):M()}function e_(r){return Gp[r]}function t_(r){return Kp[r]}function n_(r){return Qp[r]}function bn(r){return{fieldPath:r.canonicalString()}}function Rn(r){return ae.fromServerFormat(r.fieldPath)}function Yh(r){return r instanceof K?function(t){if(t.op==="=="){if(_c(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NAN"}};if(pc(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_c(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NAN"}};if(pc(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bn(t.field),op:t_(t.op),value:t.value}}}(r):r instanceof Z?function(t){const n=t.getFilters().map(i=>Yh(i));return n.length===1?n[0]:{compositeFilter:{op:n_(t.op),filters:n}}}(r):M()}function r_(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xh(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class rt{constructor(e,t,n,i,s=B.min(),a=B.min(),u=de.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new rt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Zh{constructor(e){this.ct=e}}function i_(r,e){let t;if(e.document)t=Kh(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=O.fromSegments(e.noDocument.path),i=an(e.noDocument.readTime);t=se.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return M();{const n=O.fromSegments(e.unknownDocument.path),i=an(e.unknownDocument.version);t=se.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new ce(i[0],i[1]);return B.fromTimestamp(s)}(e.readTime)),t}function Oc(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Yi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,a){return{name:jr(s,a.key),fields:a.data.value.mapValue.fields,updateTime:Ln(s,a.version.toTimestamp()),createTime:Ln(s,a.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:on(e.version)};else{if(!e.isUnknownDocument())return M();n.unknownDocument={path:t.path.toArray(),version:on(e.version)}}return n}function Yi(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function on(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function an(r){const e=new ce(r.seconds,r.nanoseconds);return B.fromTimestamp(e)}function Qt(r,e){const t=(e.baseMutations||[]).map(s=>Vo(r.ct,s));for(let s=0;s<e.mutations.length-1;++s){const a=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const u=e.mutations[s+1];a.updateTransforms=u.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>Vo(r.ct,s)),i=ce.fromMillis(e.localWriteTimeMs);return new na(e.batchId,i,t,n)}function br(r){const e=an(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?an(r.lastLimboFreeSnapshotVersion):B.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){return L(s.documents.length===1),Me(Qn($h(s.documents[0])))}(r.query):function(s){return Me(Hh(s))}(r.query),new rt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,de.fromBase64String(r.resumeToken))}function ed(r,e){const t=on(e.snapshotVersion),n=on(e.lastLimboFreeSnapshotVersion);let i;i=Wi(e.target)?Qh(r.ct,e.target):Wh(r.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:nn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function aa(r){const e=Hh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ji(e,e.limit,"L"):e}function ao(r,e){return new ia(e.largestBatchId,Vo(r.ct,e.overlayMutation))}function Fc(r,e){const t=e.path.lastSegment();return[r,Ce(e.path.popLast()),t]}function Mc(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:on(n.readTime),documentKey:Ce(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class s_{getBundleMetadata(e,t){return Lc(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:an(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return Lc(e).put(function(i){return{bundleId:i.id,createTime:on(me(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Bc(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:aa(s.bundledQuery),readTime:an(s.readTime)}}(n)})}saveNamedQuery(e,t){return Bc(e).put(function(i){return{name:i.name,readTime:on(me(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Lc(r){return ye(r,"bundles")}function Bc(r){return ye(r,"namedQueries")}/**
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
 */class ms{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new ms(e,n)}getOverlay(e,t){return _r(e).get(Fc(this.userId,t)).next(n=>n?ao(this.serializer,n):null)}getOverlays(e,t){const n=We();return v.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,a)=>{const u=new ia(t,a);i.push(this.ht(e,u))}),v.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(a=>i.add(Ce(a.getCollectionPath())));const s=[];return i.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);s.push(_r(e).j("collectionPathOverlayIndex",u))}),v.waitFor(s)}getOverlaysForCollection(e,t,n){const i=We(),s=Ce(t),a=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return _r(e).U("collectionPathOverlayIndex",a).next(u=>{for(const c of u){const h=ao(this.serializer,c);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=We();let a;const u=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return _r(e).J({index:"collectionGroupOverlayIndex",range:u},(c,h,f)=>{const g=ao(this.serializer,h);s.size()<i||g.largestBatchId===a?(s.set(g.getKey(),g),a=g.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return _r(e).put(function(i,s,a){const[u,c,h]=Fc(s,a.mutation.key);return{userId:s,collectionPath:c,documentId:h,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:zr(i.ct,a.mutation)}}(this.serializer,this.userId,t))}}function _r(r){return ye(r,"documentOverlays")}/**
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
 */class o_{Pt(e){return ye(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?de.fromUint8Array(n):de.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Wt{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(oe(e.integerValue));else if("doubleValue"in e){const n=oe(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),Mr(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=ot(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(at(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?hh(e)?this.dt(t,Number.MAX_SAFE_INTEGER):hs(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):M()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const i of Object.keys(n))this.Vt(i,t),this.Tt(n[i],t)}wt(e,t){var n,i;const s=e.fields||{};this.dt(t,53);const a="value",u=((i=(n=s[a].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(oe(u)),this.Vt(a,t),this.Tt(s[a],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const i of n)this.Tt(i,t)}yt(e,t){this.dt(t,37),O.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Wt.vt=new Wt;function a_(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Uc(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const a=a_(255&n[s]);if(i+=a,a!==8)break}return i}(r);return Math.ceil(e/8)}class u_{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),n=Uc(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),n=Uc(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,s,!1),new Uint8Array(a.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class c_{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class l_{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class yr{constructor(){this.jt=new u_,this.Ht=new c_(this.jt),this.Jt=new l_(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class Ht{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Ht(this.indexId,this.documentKey,this.arrayValue,n)}}function _t(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=qc(r.arrayValue,e.arrayValue),t!==0?t:(t=qc(r.directionalValue,e.directionalValue),t!==0?t:O.comparator(r.documentKey,e.documentKey)))}function qc(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class jc{constructor(e){this.Xt=new ee((t,n)=>ae.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(L(e.collectionGroup===this.collectionId),this.nn)return!1;const t=yo(e);if(t!==void 0&&!this.sn(t))return!1;const n=Gt(e);let i=new Set,s=0,a=0;for(;s<n.length&&this.sn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Xt.size>0){const u=this.Xt.getIterator().getNext();if(!i.has(u.field.canonicalString())){const c=n[s];if(!this.on(u,c)||!this._n(this.en[a++],c))return!1}++s}for(;s<n.length;++s){const u=n[s];if(a>=this.en.length||!this._n(this.en[a++],u))return!1}return!0}an(){if(this.nn)return null;let e=new ee(ae.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Oi(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Oi(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Oi(n.field,n.dir==="asc"?0:1)));return new Qi(Qi.UNKNOWN_ID,this.collectionId,t,Fr.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function td(r){var e,t;if(L(r instanceof K||r instanceof Z),r instanceof K){if(r instanceof Eh){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>K.create(r.field,"==",s)))||[];return Z.create(i,"or")}return r}const n=r.filters.map(i=>td(i));return Z.create(n,r.op)}function h_(r){if(r.getFilters().length===0)return[];const e=xo(td(r));return L(nd(e)),Do(e)||Co(e)?[e]:e.getFilters()}function Do(r){return r instanceof K}function Co(r){return r instanceof Z&&Yo(r)}function nd(r){return Do(r)||Co(r)||function(t){if(t instanceof Z&&wo(t)){for(const n of t.getFilters())if(!Do(n)&&!Co(n))return!1;return!0}return!1}(r)}function xo(r){if(L(r instanceof K||r instanceof Z),r instanceof K)return r;if(r.filters.length===1)return xo(r.filters[0]);const e=r.filters.map(n=>xo(n));let t=Z.create(e,r.op);return t=Xi(t),nd(t)?t:(L(t instanceof Z),L(On(t)),L(t.filters.length>1),t.filters.reduce((n,i)=>ua(n,i)))}function ua(r,e){let t;return L(r instanceof K||r instanceof Z),L(e instanceof K||e instanceof Z),t=r instanceof K?e instanceof K?function(i,s){return Z.create([i,s],"and")}(r,e):zc(r,e):e instanceof K?zc(e,r):function(i,s){if(L(i.filters.length>0&&s.filters.length>0),On(i)&&On(s))return _h(i,s.getFilters());const a=wo(i)?i:s,u=wo(i)?s:i,c=a.filters.map(h=>ua(h,u));return Z.create(c,"or")}(r,e),Xi(t)}function zc(r,e){if(On(e))return _h(e,r.getFilters());{const t=e.filters.map(n=>ua(r,n));return Z.create(t,"or")}}function Xi(r){if(L(r instanceof K||r instanceof Z),r instanceof K)return r;const e=r.getFilters();if(e.length===1)return Xi(e[0]);if(gh(r))return r;const t=e.map(i=>Xi(i)),n=[];return t.forEach(i=>{i instanceof K?n.push(i):i instanceof Z&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:Z.create(n,r.op)}/**
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
 */class d_{constructor(){this.un=new ca}addToCollectionParentIndex(e,t){return this.un.add(t),v.resolve()}getCollectionParents(e,t){return v.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return v.resolve()}deleteFieldIndex(e,t){return v.resolve()}deleteAllFieldIndexes(e){return v.resolve()}createTargetIndexes(e,t){return v.resolve()}getDocumentsMatchingTarget(e,t){return v.resolve(null)}getIndexType(e,t){return v.resolve(0)}getFieldIndexes(e,t){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,t){return v.resolve(ze.min())}getMinOffsetFromCollectionGroup(e,t){return v.resolve(ze.min())}updateCollectionGroup(e,t,n){return v.resolve()}updateIndexEntries(e,t){return v.resolve()}}class ca{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ee(G.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ee(G.comparator)).toArray()}}/**
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
 */const Di=new Uint8Array(0);class f_{constructor(e,t){this.databaseId=t,this.cn=new ca,this.ln=new lt(n=>nn(n),(n,i)=>Yr(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:n,parent:Ce(i)};return $c(e).put(s)}return v.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[Xl(t),""],!1,!0);return $c(e).U(i).next(s=>{for(const a of s){if(a.collectionId!==t)break;n.push(Qe(a.parent))}return n})}addFieldIndex(e,t){const n=Ir(e),i=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const a=Tn(e);return s.next(u=>{a.put(Mc(u,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=Ir(e),i=Tn(e),s=En(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ir(e),n=En(e),i=Tn(e);return t.j().next(()=>n.j()).next(()=>i.j())}createTargetIndexes(e,t){return v.forEach(this.hn(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new jc(n).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=En(e);let i=!0;const s=new Map;return v.forEach(this.hn(t),a=>this.Pn(e,a).next(u=>{i&&(i=!!u),s.set(a,u)})).next(()=>{if(i){let a=$();const u=[];return v.forEach(s,(c,h)=>{D("IndexedDbIndexManager",`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(X=>`${X.fieldPath}:${X.kind}`).join(",")}`}(c)} to execute ${nn(t)}`);const f=function(U,X){const ne=yo(X);if(ne===void 0)return null;for(const H of Hi(U,ne.fieldPath))switch(H.op){case"array-contains-any":return H.value.arrayValue.values||[];case"array-contains":return[H.value]}return null}(h,c),g=function(U,X){const ne=new Map;for(const H of Gt(X))for(const E of Hi(U,H.fieldPath))switch(E.op){case"==":case"in":ne.set(H.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return ne.set(H.fieldPath.canonicalString(),E.value),Array.from(ne.values())}return null}(h,c),_=function(U,X){const ne=[];let H=!0;for(const E of Gt(X)){const p=E.kind===0?wc(U,E.fieldPath,U.startAt):vc(U,E.fieldPath,U.startAt);ne.push(p.value),H&&(H=p.inclusive)}return new Ct(ne,H)}(h,c),R=function(U,X){const ne=[];let H=!0;for(const E of Gt(X)){const p=E.kind===0?vc(U,E.fieldPath,U.endAt):wc(U,E.fieldPath,U.endAt);ne.push(p.value),H&&(H=p.inclusive)}return new Ct(ne,H)}(h,c),C=this.In(c,h,_),N=this.In(c,h,R),x=this.Tn(c,h,g),q=this.En(c.indexId,f,C,_.inclusive,N,R.inclusive,x);return v.forEach(q,z=>n.G(z,t.limit).next(U=>{U.forEach(X=>{const ne=O.fromSegments(X.documentKey);a.has(ne)||(a=a.add(ne),u.push(ne))})}))}).next(()=>u)}return v.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=h_(Z.create(e.filters,"and")).map(n=>Ao(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,i,s,a,u){const c=(t!=null?t.length:1)*Math.max(n.length,s.length),h=c/(t!=null?t.length:1),f=[];for(let g=0;g<c;++g){const _=t?this.dn(t[g/h]):Di,R=this.An(e,_,n[g%h],i),C=this.Rn(e,_,s[g%h],a),N=u.map(x=>this.An(e,_,x,!0));f.push(...this.createRange(R,C,N))}return f}An(e,t,n,i){const s=new Ht(e,O.empty(),t,n);return i?s:s.Zt()}Rn(e,t,n,i){const s=new Ht(e,O.empty(),t,n);return i?s.Zt():s}Pn(e,t){const n=new jc(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let a=null;for(const u of s)n.rn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(e,t){let n=2;const i=this.hn(t);return v.forEach(i,s=>this.Pn(e,s).next(a=>{a?n!==0&&a.fields.length<function(c){let h=new ee(ae.comparator),f=!1;for(const g of c.filters)for(const _ of g.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const g of c.orderBy)g.field.isKeyField()||(h=h.add(g.field));return h.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(t)&&i.length>1&&n===2?1:n)}Vn(e,t){const n=new yr;for(const i of Gt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const a=n.Yt(i.kind);Wt.vt.It(s,a)}return n.zt()}dn(e){const t=new yr;return Wt.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new yr;return Wt.vt.It(tn(this.databaseId,t),n.Yt(function(s){const a=Gt(s);return a.length===0?0:a[a.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let i=[];i.push(new yr);let s=0;for(const a of Gt(e)){const u=n[s++];for(const c of i)if(this.fn(t,a.fieldPath)&&Ur(u))i=this.gn(i,a,u);else{const h=c.Yt(a.kind);Wt.vt.It(u,h)}}return this.pn(i)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const i=[...e],s=[];for(const a of n.arrayValue.values||[])for(const u of i){const c=new yr;c.seed(u.zt()),Wt.vt.It(a,c.Yt(t.kind)),s.push(c)}return s}fn(e,t){return!!e.filters.find(n=>n instanceof K&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Ir(e),i=Tn(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(s=>{const a=[];return v.forEach(s,u=>i.get([u.indexId,this.uid]).next(c=>{a.push(function(f,g){const _=g?new Fr(g.sequenceNumber,new ze(an(g.readTime),new O(Qe(g.documentKey)),g.largestBatchId)):Fr.empty(),R=f.fields.map(([C,N])=>new Oi(ae.fromServerFormat(C),N));return new Qi(f.indexId,f.collectionGroup,R,_)}(u,c))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:j(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=Ir(e),s=Tn(e);return this.yn(e).next(a=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(u=>v.forEach(u,c=>s.put(Mc(c.indexId,this.uid,a,n)))))}updateIndexEntries(e,t){const n=new Map;return v.forEach(t,(i,s)=>{const a=n.get(i.collectionGroup);return(a?v.resolve(a):this.getFieldIndexes(e,i.collectionGroup)).next(u=>(n.set(i.collectionGroup,u),v.forEach(u,c=>this.wn(e,i,c).next(h=>{const f=this.Sn(s,c);return h.isEqual(f)?v.resolve():this.bn(e,s,c,h,f)}))))})}Dn(e,t,n,i){return En(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,i){return En(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const i=En(e);let s=new ee(_t);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(a,u)=>{s=s.add(new Ht(n.indexId,t,u.arrayValue,u.directionalValue))}).next(()=>s)}Sn(e,t){let n=new ee(_t);const i=this.Vn(t,e);if(i==null)return n;const s=yo(t);if(s!=null){const a=e.data.field(s.fieldPath);if(Ur(a))for(const u of a.arrayValue.values||[])n=n.add(new Ht(t.indexId,e.key,this.dn(u),i))}else n=n.add(new Ht(t.indexId,e.key,Di,i));return n}bn(e,t,n,i,s){D("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const a=[];return function(c,h,f,g,_){const R=c.getIterator(),C=h.getIterator();let N=In(R),x=In(C);for(;N||x;){let q=!1,z=!1;if(N&&x){const U=f(N,x);U<0?z=!0:U>0&&(q=!0)}else N!=null?z=!0:q=!0;q?(g(x),x=In(C)):z?(_(N),N=In(R)):(N=In(R),x=In(C))}}(i,s,_t,u=>{a.push(this.Dn(e,t,n,u))},u=>{a.push(this.vn(e,t,n,u))}),v.waitFor(a)}yn(e){let t=1;return Tn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((a,u)=>_t(a,u)).filter((a,u,c)=>!u||_t(a,c[u-1])!==0);const i=[];i.push(e);for(const a of n){const u=_t(a,e),c=_t(a,t);if(u===0)i[0]=e.Zt();else if(u>0&&c<0)i.push(a),i.push(a.Zt());else if(c>0)break}i.push(t);const s=[];for(let a=0;a<i.length;a+=2){if(this.Cn(i[a],i[a+1]))return[];const u=[i[a].indexId,this.uid,i[a].arrayValue,i[a].directionalValue,Di,[]],c=[i[a+1].indexId,this.uid,i[a+1].arrayValue,i[a+1].directionalValue,Di,[]];s.push(IDBKeyRange.bound(u,c))}return s}Cn(e,t){return _t(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Gc)}getMinOffset(e,t){return v.mapArray(this.hn(t),n=>this.Pn(e,n).next(i=>i||M())).next(Gc)}}function $c(r){return ye(r,"collectionParents")}function En(r){return ye(r,"indexEntries")}function Ir(r){return ye(r,"indexConfiguration")}function Tn(r){return ye(r,"indexState")}function Gc(r){L(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;Wo(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new ze(e.readTime,e.documentKey,t)}/**
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
 */const Kc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class De{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function rd(r,e,t){const n=r.store("mutations"),i=r.store("documentMutations"),s=[],a=IDBKeyRange.only(t.batchId);let u=0;const c=n.J({range:a},(f,g,_)=>(u++,_.delete()));s.push(c.next(()=>{L(u===1)}));const h=[];for(const f of t.mutations){const g=sh(e,f.key.path,t.batchId);s.push(i.delete(g)),h.push(f.key)}return v.waitFor(s).next(()=>h)}function Zi(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw M();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(41943040,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);class gs{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Fn={}}static lt(e,t,n,i){L(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new gs(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return yt(e).J({index:"userMutationsIndex",range:n},(i,s,a)=>{t=!1,a.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=Sn(e),a=yt(e);return a.add({}).next(u=>{L(typeof u=="number");const c=new na(u,t,n,i),h=function(R,C,N){const x=N.baseMutations.map(z=>zr(R.ct,z)),q=N.mutations.map(z=>zr(R.ct,z));return{userId:C,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:x,mutations:q}}(this.serializer,this.userId,c),f=[];let g=new ee((_,R)=>j(_.canonicalString(),R.canonicalString()));for(const _ of i){const R=sh(this.userId,_.key.path,u);g=g.add(_.key.path.popLast()),f.push(a.put(h)),f.push(s.put(R,Zg))}return g.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Fn[u]=c.keys()}),v.waitFor(f).next(()=>c)})}lookupMutationBatch(e,t){return yt(e).get(t).next(n=>n?(L(n.userId===this.userId),Qt(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?v.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return yt(e).J({index:"userMutationsIndex",range:i},(a,u,c)=>{u.userId===this.userId&&(L(u.batchId>=n),s=Qt(this.serializer,u)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return yt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,a)=>{n=s.batchId,a.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return yt(e).U("userMutationsIndex",t).next(n=>n.map(i=>Qt(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Fi(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return Sn(e).J({range:i},(a,u,c)=>{const[h,f,g]=a,_=Qe(f);if(h===this.userId&&t.path.isEqual(_))return yt(e).get(g).next(R=>{if(!R)throw M();L(R.userId===this.userId),s.push(Qt(this.serializer,R))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ee(j);const i=[];return t.forEach(s=>{const a=Fi(this.userId,s.path),u=IDBKeyRange.lowerBound(a),c=Sn(e).J({range:u},(h,f,g)=>{const[_,R,C]=h,N=Qe(R);_===this.userId&&s.path.isEqual(N)?n=n.add(C):g.done()});i.push(c)}),v.waitFor(i).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=Fi(this.userId,n),a=IDBKeyRange.lowerBound(s);let u=new ee(j);return Sn(e).J({range:a},(c,h,f)=>{const[g,_,R]=c,C=Qe(_);g===this.userId&&n.isPrefixOf(C)?C.length===i&&(u=u.add(R)):f.done()}).next(()=>this.xn(e,u))}xn(e,t){const n=[],i=[];return t.forEach(s=>{i.push(yt(e).get(s).next(a=>{if(a===null)throw M();L(a.userId===this.userId),n.push(Qt(this.serializer,a))}))}),v.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return rd(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),v.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return v.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return Sn(e).J({range:n},(s,a,u)=>{if(s[0]===this.userId){const c=Qe(s[1]);i.push(c)}else u.done()}).next(()=>{L(i.length===0)})})}containsKey(e,t){return id(e,this.userId,t)}Nn(e){return sd(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function id(r,e,t){const n=Fi(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let a=!1;return Sn(r).J({range:s,H:!0},(u,c,h)=>{const[f,g,_]=u;f===e&&g===i&&(a=!0),h.done()}).next(()=>a)}function yt(r){return ye(r,"mutations")}function Sn(r){return ye(r,"documentMutations")}function sd(r){return ye(r,"mutationQueues")}/**
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
 */class un{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new un(0)}static kn(){return new un(-1)}}/**
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
 */class m_{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new un(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>B.fromTimestamp(new ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>wn(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(L(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return wn(e).J((a,u)=>{const c=br(u);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>v.waitFor(s)).next(()=>i)}forEachTarget(e,t){return wn(e).J((n,i)=>{const s=br(i);t(s)})}qn(e){return Qc(e).get("targetGlobalKey").next(t=>(L(t!==null),t))}Qn(e,t){return Qc(e).put("targetGlobalKey",t)}Kn(e,t){return wn(e).put(ed(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=nn(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return wn(e).J({range:i,index:"queryTargetsIndex"},(a,u,c)=>{const h=br(u);Yr(t,h.target)&&(s=h,c.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=Et(e);return t.forEach(a=>{const u=Ce(a.path);i.push(s.put({targetId:n,path:u})),i.push(this.referenceDelegate.addReference(e,n,a))}),v.waitFor(i)}removeMatchingKeys(e,t,n){const i=Et(e);return v.forEach(t,s=>{const a=Ce(s.path);return v.waitFor([i.delete([n,a]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=Et(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=Et(e);let s=$();return i.J({range:n,H:!0},(a,u,c)=>{const h=Qe(a[1]),f=new O(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const n=Ce(t.path),i=IDBKeyRange.bound([n],[Xl(n)],!1,!0);let s=0;return Et(e).J({index:"documentTargetsIndex",H:!0,range:i},([a,u],c,h)=>{a!==0&&(s++,h.done())}).next(()=>s>0)}ot(e,t){return wn(e).get(t).next(n=>n?br(n):null)}}function wn(r){return ye(r,"targets")}function Qc(r){return ye(r,"targetGlobal")}function Et(r){return ye(r,"targetDocuments")}/**
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
 */function Wc([r,e],[t,n]){const i=j(r,t);return i===0?j(e,n):i}class g_{constructor(e){this.Un=e,this.buffer=new ee(Wc),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Wc(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class od{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){D("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ft(t)?D("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ot(t)}await this.Hn(3e5)})}}class p_{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return v.resolve(Be.oe);const n=new g_(t);return this.Jn.forEachTarget(e,i=>n.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>n.zn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(Kc)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kc):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,i,s,a,u,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(n=g,u=Date.now(),this.removeTargets(e,n,t))).next(g=>(s=g,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(g=>(h=Date.now(),vn()<=Q.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(c-u)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function ad(r,e){return new p_(r,e)}/**
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
 */class __{constructor(e,t){this.db=e,this.garbageCollector=ad(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,i)=>t(i))}addReference(e,t,n){return Ci(e,n)}removeReference(e,t,n){return Ci(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ci(e,t)}nr(e,t){return function(i,s){let a=!1;return sd(i).Y(u=>id(i,u,s).next(c=>(c&&(a=!0),v.resolve(!c)))).next(()=>a)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(a,u)=>{if(u<=t){const c=this.nr(e,a).next(h=>{if(!h)return s++,n.getEntry(e,a).next(()=>(n.removeEntry(a,B.min()),Et(e).delete(function(g){return[0,Ce(g.path)]}(a))))});i.push(c)}}).next(()=>v.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ci(e,t)}tr(e,t){const n=Et(e);let i,s=Be.oe;return n.J({index:"documentTargetsIndex"},([a,u],{path:c,sequenceNumber:h})=>{a===0?(s!==Be.oe&&t(new O(Qe(i)),s),s=h,i=c):s=Be.oe}).next(()=>{s!==Be.oe&&t(new O(Qe(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ci(r,e){return Et(r).put(function(n,i){return{targetId:0,path:Ce(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
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
 */class ud{constructor(){this.changes=new lt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,se.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?v.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class y_{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return zt(e).put(n)}removeEntry(e,t,n){return zt(e).delete(function(s,a){const u=s.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Yi(a),u[u.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=se.newInvalidDocument(t);return zt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Er(t))},(i,s)=>{n=this.ir(t,s)}).next(()=>n)}sr(e,t){let n={size:0,document:se.newInvalidDocument(t)};return zt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Er(t))},(i,s)=>{n={document:this.ir(t,s),size:Zi(s)}}).next(()=>n)}getEntries(e,t){let n=qe();return this._r(e,t,(i,s)=>{const a=this.ir(i,s);n=n.insert(i,a)}).next(()=>n)}ar(e,t){let n=qe(),i=new re(O.comparator);return this._r(e,t,(s,a)=>{const u=this.ir(s,a);n=n.insert(s,u),i=i.insert(s,Zi(a))}).next(()=>({documents:n,ur:i}))}_r(e,t,n){if(t.isEmpty())return v.resolve();let i=new ee(Yc);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Er(i.first()),Er(i.last())),a=i.getIterator();let u=a.getNext();return zt(e).J({index:"documentKeyIndex",range:s},(c,h,f)=>{const g=O.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;u&&Yc(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,h),u=a.hasNext()?a.getNext():null),u?f.$(Er(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const a=t.path,u=[a.popLast().toArray(),a.lastSegment(),Yi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return zt(e).U(IDBKeyRange.bound(u,c,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=qe();for(const g of h){const _=this.ir(O.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);_.isFoundDocument()&&(Zr(t,_)||i.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=qe();const a=Jc(t,n),u=Jc(t,ze.max());return zt(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,u,!0)},(c,h,f)=>{const g=this.ir(O.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(g.key,g),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new I_(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Hc(e).get("remoteDocumentGlobalKey").next(t=>(L(!!t),t))}rr(e,t){return Hc(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=i_(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(B.min())))return n}return se.newInvalidDocument(e)}}function cd(r){return new y_(r)}class I_ extends ud{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new lt(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new ee((s,a)=>j(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{const u=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,u.readTime)),a.isValidDocument()){const c=Oc(this.cr.serializer,a);i=i.add(s.path.popLast());const h=Zi(c);n+=h-u.size,t.push(this.cr.addEntry(e,s,c))}else if(n-=u.size,this.trackRemovals){const c=Oc(this.cr.serializer,a.convertToNoDocument(B.min()));t.push(this.cr.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,n)),v.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:i})=>(i.forEach((s,a)=>{this.lr.set(s,{size:a,readTime:n.get(s).readTime})}),n))}}function Hc(r){return ye(r,"remoteDocumentGlobal")}function zt(r){return ye(r,"remoteDocumentsV14")}function Er(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Jc(r,e){const t=e.documentKey.path.toArray();return[r,Yi(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Yc(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=j(t[s],n[s]),i)return i;return i=j(t.length,n.length),i||(i=j(t[t.length-2],n[n.length-2]),i||j(t[t.length-1],n[n.length-1]))}/**
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
 */class E_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ld{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&Vr(n.mutation,i,Ue.empty(),ce.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,$()).next(()=>n))}getLocalViewOfDocuments(e,t,n=$()){const i=We();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let a=vr();return s.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=We();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,$()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,n,i){let s=qe();const a=Pr(),u=function(){return Pr()}();return t.forEach((c,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof ht)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Vr(f.mutation,h,f.mutation.getFieldMask(),ce.now())):a.set(h.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var g;return u.set(h,new E_(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(e,t){const n=Pr();let i=new re((a,u)=>a-u),s=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=n.get(c)||Ue.empty();f=u.applyToLocalView(h,f),n.set(c,f);const g=(i.get(u.batchId)||$()).add(c);i=i.insert(u.batchId,g)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),h=c.key,f=c.value,g=Sh();f.forEach(_=>{if(!s.has(_)){const R=kh(t.get(_),n.get(_));R!==null&&g.set(_,R),s=s.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return v.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Xo(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):v.resolve(We());let u=-1,c=s;return a.next(h=>v.forEach(h,(f,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),s.get(f)?v.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,$())).next(f=>({batchId:u,changes:Rh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(n=>{let i=vr();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let a=vr();return this.indexManager.getCollectionParents(e,s).next(u=>v.forEach(u,c=>{const h=function(g,_){return new ct(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(f=>{f.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(a=>{s.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,se.newInvalidDocument(f)))});let u=vr();return a.forEach((c,h)=>{const f=s.get(c);f!==void 0&&Vr(f.mutation,h,Ue.empty(),ce.now()),Zr(t,h)&&(u=u.insert(c,h))}),u})}}/**
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
 */class T_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return v.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:me(i.createTime)}}(t)),v.resolve()}getNamedQuery(e,t){return v.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:aa(i.bundledQuery),readTime:me(i.readTime)}}(t)),v.resolve()}}/**
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
 */class w_{constructor(){this.overlays=new re(O.comparator),this.Ir=new Map}getOverlay(e,t){return v.resolve(this.overlays.get(t))}getOverlays(e,t){const n=We();return v.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.ht(e,t,s)}),v.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(n)),v.resolve()}getOverlaysForCollection(e,t,n){const i=We(),s=t.length+1,a=new O(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>n&&i.set(c.getKey(),c)}return v.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new re((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=We(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const u=We(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>u.set(h,f)),!(u.size()>=i)););return v.resolve(u)}ht(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new ia(t,n));let s=this.Ir.get(t);s===void 0&&(s=$(),this.Ir.set(t,s)),this.Ir.set(t,s.add(n.key))}}/**
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
 */class v_{constructor(){this.sessionToken=de.EMPTY_BYTE_STRING}getSessionToken(e){return v.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,v.resolve()}}/**
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
 */class la{constructor(){this.Tr=new ee(Ie.Er),this.dr=new ee(Ie.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Ie(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Ie(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new O(new G([])),n=new Ie(t,e),i=new Ie(t,e+1),s=[];return this.dr.forEachInRange([n,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new O(new G([])),n=new Ie(t,e),i=new Ie(t,e+1);let s=$();return this.dr.forEachInRange([n,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new Ie(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ie{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return O.comparator(e.key,t.key)||j(e.wr,t.wr)}static Ar(e,t){return j(e.wr,t.wr)||O.comparator(e.key,t.key)}}/**
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
 */class A_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ee(Ie.Er)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new na(s,t,n,i);this.mutationQueue.push(a);for(const u of i)this.br=this.br.add(new Ie(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return v.resolve(a)}lookupMutationBatch(e,t){return v.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.vr(n),s=i<0?0:i;return v.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ie(t,0),i=new Ie(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,i],a=>{const u=this.Dr(a.wr);s.push(u)}),v.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ee(j);return t.forEach(i=>{const s=new Ie(i,0),a=new Ie(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],u=>{n=n.add(u.wr)})}),v.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;O.isDocumentKey(s)||(s=s.child(""));const a=new Ie(new O(s),0);let u=new ee(j);return this.br.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(u=u.add(c.wr)),!0)},a),v.resolve(this.Cr(u))}Cr(e){const t=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){L(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return v.forEach(t.mutations,i=>{const s=new Ie(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Ie(t,0),i=this.br.firstAfterOrEqual(n);return v.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class b_{constructor(e){this.Mr=e,this.docs=function(){return new re(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return v.resolve(n?n.document.mutableCopy():se.newInvalidDocument(t))}getEntries(e,t){let n=qe();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():se.newInvalidDocument(i))}),v.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=qe();const a=t.path,u=new O(a.child("")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Wo(eh(f),n)<=0||(i.has(f.key)||Zr(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(e,t,n,i){M()}Or(e,t){return v.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new R_(this)}getSize(e){return v.resolve(this.size)}}class R_ extends ud{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),v.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class S_{constructor(e){this.persistence=e,this.Nr=new lt(t=>nn(t),Yr),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Lr=0,this.Br=new la,this.targetCount=0,this.kr=un.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,i)=>t(i)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),v.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new un(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,v.resolve()}updateTargetData(e,t){return this.Kn(t),v.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),v.waitFor(s).next(()=>i)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return v.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),v.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),v.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),v.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return v.resolve(n)}containsKey(e,t){return v.resolve(this.Br.containsKey(t))}}/**
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
 */class ha{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Be(0),this.Kr=!1,this.Kr=!0,this.$r=new v_,this.referenceDelegate=e(this),this.Ur=new S_(this),this.indexManager=new d_,this.remoteDocumentCache=function(i){return new b_(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Zh(t),this.Gr=new T_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new w_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new A_(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){D("MemoryPersistence","Starting transaction:",e);const i=new P_(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return v.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class P_ extends nh{constructor(e){super(),this.currentSequenceNumber=e}}class ps{constructor(e){this.persistence=e,this.Jr=new la,this.Yr=null}static Zr(e){return new ps(e)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),v.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),v.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),v.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Xr,n=>{const i=O.fromPath(n);return this.ei(e,i).next(s=>{s||t.removeEntry(i,B.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return v.or([()=>v.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}class es{constructor(e,t){this.persistence=e,this.ti=new lt(n=>Ce(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=ad(this,t)}static Zr(e,t){return new es(e,t)}zr(){}jr(e){return v.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Yn(e){const t=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}Zn(e,t){return v.forEach(this.ti,(n,i)=>this.nr(e,n,i).next(s=>s?v.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,a=>this.nr(e,a,t).next(u=>{u||(n++,s.removeEntry(a,B.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.ti.set(t,e.currentSequenceNumber),v.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ti.set(n,e.currentSequenceNumber),v.resolve()}removeReference(e,t,n){return this.ti.set(n,e.currentSequenceNumber),v.resolve()}updateLimboDocument(e,t){return this.ti.set(t,e.currentSequenceNumber),v.resolve()}Wr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Li(e.data.value)),t}nr(e,t,n){return v.or([()=>this.persistence.Hr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ti.get(t);return v.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class V_{constructor(e){this.serializer=e}O(e,t,n,i){const s=new us("createOrUpgrade",t);n<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",hc,{unique:!0}),c.createObjectStore("documentMutations")}(e),Xc(e),function(c){c.createObjectStore("remoteDocuments")}(e));let a=v.resolve();return n<3&&i>=3&&(n!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),Xc(e)),a=a.next(()=>function(c){const h=c.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(s))),n<4&&i>=4&&(n!==0&&(a=a.next(()=>function(c,h){return h.store("mutations").U().next(f=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",hc,{unique:!0});const g=h.store("mutations"),_=f.map(R=>g.put(R));return v.waitFor(_)})}(e,s))),a=a.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&i>=5&&(a=a.next(()=>this.ni(s))),n<6&&i>=6&&(a=a.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),n<7&&i>=7&&(a=a.next(()=>this.ii(s))),n<8&&i>=8&&(a=a.next(()=>this.si(e,s))),n<9&&i>=9&&(a=a.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(a=a.next(()=>this.oi(s))),n<11&&i>=11&&(a=a.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&i>=12&&(a=a.next(()=>{(function(c){const h=c.createObjectStore("documentOverlays",{keyPath:hp});h.createIndex("collectionPathOverlayIndex",dp,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",fp,{unique:!1})})(e)})),n<13&&i>=13&&(a=a.next(()=>function(c){const h=c.createObjectStore("remoteDocumentsV14",{keyPath:ep});h.createIndex("documentKeyIndex",tp),h.createIndex("collectionGroupIndex",np)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(a=a.next(()=>this.ai(e,s))),n<15&&i>=15&&(a=a.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:ap}).createIndex("sequenceNumberIndex",up,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:cp}).createIndex("documentKeyIndex",lp,{unique:!1})}(e))),n<16&&i>=16&&(a=a.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&i>=17&&(a=a.next(()=>{(function(c){c.createObjectStore("globals",{keyPath:"name"})})(e)})),a}ri(e){let t=0;return e.store("remoteDocuments").J((n,i)=>{t+=Zi(i)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(i=>v.forEach(i,s=>{const a=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",a).next(u=>v.forEach(u,c=>{L(c.userId===s.userId);const h=Qt(this.serializer,c);return rd(e,s.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return n.J((a,u)=>{const c=new G(a),h=function(g){return[0,Ce(g)]}(c);s.push(t.get(h).next(f=>f?v.resolve():(g=>t.put({targetId:0,path:Ce(g),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>v.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:op});const n=t.store("collectionParents"),i=new ca,s=a=>{if(i.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:Ce(c)})}};return t.store("remoteDocuments").J({H:!0},(a,u)=>{const c=new G(a);return s(c.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([a,u,c],h)=>{const f=Qe(u);return s(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,i)=>{const s=br(i),a=ed(this.serializer,s);return t.put(a)})}_i(e,t){const n=t.store("remoteDocuments"),i=[];return n.J((s,a)=>{const u=t.store("remoteDocumentsV14"),c=function(g){return g.document?new O(G.fromString(g.document.name).popFirst(5)):g.noDocument?O.fromSegments(g.noDocument.path):g.unknownDocument?O.fromSegments(g.unknownDocument.path):M()}(a).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(u.put(h))}).next(()=>v.waitFor(i))}ai(e,t){const n=t.store("mutations"),i=cd(this.serializer),s=new ha(ps.Zr,this.serializer.ct);return n.U().next(a=>{const u=new Map;return a.forEach(c=>{var h;let f=(h=u.get(c.userId))!==null&&h!==void 0?h:$();Qt(this.serializer,c).keys().forEach(g=>f=f.add(g)),u.set(c.userId,f)}),v.forEach(u,(c,h)=>{const f=new Ee(h),g=ms.lt(this.serializer,f),_=s.getIndexManager(f),R=gs.lt(f,this.serializer,_,s.referenceDelegate);return new ld(i,R,g,_).recalculateAndSaveOverlaysForDocumentKeys(new Io(t,Be.oe),c).next()})})}}function Xc(r){r.createObjectStore("targetDocuments",{keyPath:ip}).createIndex("documentTargetsIndex",sp,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",rp,{unique:!0}),r.createObjectStore("targetGlobal")}const uo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class da{constructor(e,t,n,i,s,a,u,c,h,f,g=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=s,this.window=a,this.document=u,this.ci=h,this.li=f,this.hi=g,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!da.D())throw new V(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new __(this,i),this.Ai=t+"main",this.serializer=new Zh(c),this.Ri=new He(this.Ai,this.hi,new V_(this.serializer)),this.$r=new o_,this.Ur=new m_(this.referenceDelegate,this.serializer),this.remoteDocumentCache=cd(this.serializer),this.Gr=new s_,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&fe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(S.FAILED_PRECONDITION,uo);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Be(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>xi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Ft(e))return D("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Tr(e).get("owner").next(t=>v.resolve(this.vi(t)))}Ci(e){return xi(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=ye(t,"clientMetadata");return n.U().next(i=>{const s=this.xi(i,18e5),a=i.filter(u=>s.indexOf(u)===-1);return v.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?v.resolve(!0):Tr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new V(S.FAILED_PRECONDITION,uo);return!1}}return!(!this.networkEnabled||!this.inForeground)||xi(e).U().next(n=>this.xi(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,u=this.networkEnabled===i.networkEnabled;if(s||a&&u)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&D("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Io(e,Be.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>xi(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return gs.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new f_(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ms.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){D("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===17?pp:c===16?gp:c===15?Jo:c===14?uh:c===13?ah:c===12?mp:c===11?oh:void M()}(this.hi);let a;return this.Ri.runTransaction(e,i,s,u=>(a=new Io(u,this.Qr?this.Qr.next():Be.oe),t==="readwrite-primary"?this.wi(a).next(c=>!!c||this.Si(a)).next(c=>{if(!c)throw fe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new V(S.FAILED_PRECONDITION,th);return n(a)}).next(c=>this.Di(a).next(()=>c)):this.Ki(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Ki(e){return Tr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new V(S.FAILED_PRECONDITION,uo)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Tr(e).put("owner",t)}static D(){return He.D()}bi(e){const t=Tr(e);return t.get("owner").next(n=>this.vi(n)?(D("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):v.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(fe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Pl()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return D("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return fe("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){fe("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Tr(r){return ye(r,"owner")}function xi(r){return ye(r,"clientMetadata")}function fa(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class ma{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=i}static Wi(e,t){let n=$(),i=$();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ma(e,t.fromCache,n,i)}}/**
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
 */class D_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class hd{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Pl()?8:rh(Gi())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,n).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new D_;return this.Xi(e,t,a).next(u=>{if(s.result=u,this.zi)return this.es(e,t,a,u.size)})}).next(()=>s.result)}es(e,t,n,i){return n.documentReadCount<this.ji?(vn()<=Q.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",An(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),v.resolve()):(vn()<=Q.DEBUG&&D("QueryEngine","Query:",An(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(vn()<=Q.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",An(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Me(t))):v.resolve())}Yi(e,t){if(Ac(t))return v.resolve(null);let n=Me(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ji(t,null,"F"),n=Me(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const a=$(...s);return this.Ji.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,n).next(c=>{const h=this.ts(t,u);return this.ns(t,h,a,c.readTime)?this.Yi(e,Ji(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,n,i){return Ac(t)||i.isEqual(B.min())?v.resolve(null):this.Ji.getDocuments(e,n).next(s=>{const a=this.ts(t,s);return this.ns(t,a,n,i)?v.resolve(null):(vn()<=Q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),An(t)),this.rs(e,a,t,Zl(i,-1)).next(u=>u))})}ts(e,t){let n=new ee(Ah(e));return t.forEach((i,s)=>{Zr(e,s)&&(n=n.add(s))}),n}ns(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,n){return vn()<=Q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",An(t)),this.Ji.getDocumentsMatchingQuery(e,t,ze.min(),n)}rs(e,t,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class C_{constructor(e,t,n,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new re(j),this._s=new lt(s=>nn(s),Yr),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ld(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function dd(r,e,t,n){return new C_(r,e,t,n)}async function fd(r,e){const t=F(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const a=[],u=[];let c=$();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){u.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:u}))})})}function x_(r,e){const t=F(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(u,c,h,f){const g=h.batch,_=g.keys();let R=v.resolve();return _.forEach(C=>{R=R.next(()=>f.getEntry(c,C)).next(N=>{const x=h.docVersions.get(C);L(x!==null),N.version.compareTo(x)<0&&(g.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(c,g))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=$();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(c=c.add(u.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function md(r){const e=F(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function N_(r,e){const t=F(r),n=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const u=[];e.targetChanges.forEach((f,g)=>{const _=i.get(g);if(!_)return;u.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,g)));let R=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(de.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,n)),i=i.insert(g,R),function(N,x,q){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(_,R,f)&&u.push(t.Ur.updateTargetData(s,R))});let c=qe(),h=$();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),u.push(gd(s,a,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!n.isEqual(B.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(g=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,n));u.push(f)}return v.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.os=i,s))}function gd(r,e,t){let n=$(),i=$();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let a=qe();return t.forEach((u,c)=>{const h=s.get(u);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(u)),c.isNoDocument()&&c.version.isEqual(B.min())?(e.removeEntry(u,c.readTime),a=a.insert(u,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(u,c)):D("LocalStore","Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:i}})}function k_(r,e){const t=F(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Bn(r,e){const t=F(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Ur.getTargetData(n,e).next(s=>s?(i=s,v.resolve(i)):t.Ur.allocateTargetId(n).next(a=>(i=new rt(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function Un(r,e,t){const n=F(r),i=n.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Ft(a))throw a;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function ts(r,e,t){const n=F(r);let i=B.min(),s=$();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const g=F(c),_=g._s.get(f);return _!==void 0?v.resolve(g.os.get(_)):g.Ur.getTargetData(h,f)}(n,a,Me(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(a,u.targetId).next(c=>{s=c})}).next(()=>n.ss.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?s:$())).next(u=>(yd(n,vh(e),u),{documents:u,Ts:s})))}function pd(r,e){const t=F(r),n=F(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>n.ot(s,e).next(a=>a?a.target:null))}function _d(r,e){const t=F(r),n=t.us.get(e)||B.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,Zl(n,-1),Number.MAX_SAFE_INTEGER)).then(i=>(yd(t,e,i),i))}function yd(r,e,t){let n=r.us.get(e)||B.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.us.set(e,n)}async function O_(r,e,t,n){const i=F(r);let s=$(),a=qe();for(const h of t){const f=e.Es(h.metadata.name);h.document&&(s=s.add(f));const g=e.ds(h);g.setReadTime(e.As(h.metadata.readTime)),a=a.insert(f,g)}const u=i.cs.newChangeBuffer({trackRemovals:!0}),c=await Bn(i,function(f){return Me(Qn(G.fromString(`__bundle__/docs/${f}`)))}(n));return i.persistence.runTransaction("Apply bundle documents","readwrite",h=>gd(h,u,a).next(f=>(u.apply(h),f)).next(f=>i.Ur.removeMatchingKeysForTargetId(h,c.targetId).next(()=>i.Ur.addMatchingKeys(h,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(h,f.Ps,f.Is)).next(()=>f.Ps)))}async function F_(r,e,t=$()){const n=await Bn(r,Me(aa(e.bundledQuery))),i=F(r);return i.persistence.runTransaction("Save named query","readwrite",s=>{const a=me(e.readTime);if(n.snapshotVersion.compareTo(a)>=0)return i.Gr.saveNamedQuery(s,e);const u=n.withResumeToken(de.EMPTY_BYTE_STRING,a);return i.os=i.os.insert(u.targetId,u),i.Ur.updateTargetData(s,u).next(()=>i.Ur.removeMatchingKeysForTargetId(s,n.targetId)).next(()=>i.Ur.addMatchingKeys(s,t,n.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function Zc(r,e){return`firestore_clients_${r}_${e}`}function el(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function co(r,e){return`firestore_targets_${r}_${e}`}class ns{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Rs(e,t,n){const i=JSON.parse(n);let s,a=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return a&&i.error&&(a=typeof i.error.message=="string"&&typeof i.error.code=="string",a&&(s=new V(i.error.code,i.error.message))),a?new ns(e,t,i.state,s):(fe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Dr{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new V(n.error.code,n.error.message))),s?new Dr(e,n.state,i):(fe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class rs{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=Zo();for(let a=0;i&&a<n.activeTargetIds.length;++a)i=ih(n.activeTargetIds[a]),s=s.add(n.activeTargetIds[a]);return i?new rs(e,s):(fe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class ga{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new ga(t.clientId,t.onlineState):(fe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class No{constructor(){this.activeTargetIds=Zo()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lo{constructor(e,t,n,i,s){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new re(j),this.started=!1,this.bs=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=Zc(this.persistenceKey,this.ps),this.vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new No),this.Cs=new RegExp(`^firestore_clients_${a}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${a}_(\\d+)$`),this.xs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Os=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const i=this.getItem(Zc(this.persistenceKey,n));if(i){const s=rs.Rs(n,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(co(this.persistenceKey,e));if(i){const s=Dr.Rs(e,i);s&&(n=s.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(co(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return D("SharedClientState","READ",e,t),t}setItem(e,t){D("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){D("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(D("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void fe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(s){let a=Be.oe;if(s!=null)try{const u=JSON.parse(s);L(typeof u=="number"),a=u}catch(u){fe("SharedClientState","Failed to read sequence number from WebStorage",u)}return a}(t.newValue);n!==Be.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const i=new ns(this.currentUser,e,t,n),s=el(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=el(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const i=co(this.persistenceKey,e),s=new Dr(e,t,n);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return rs.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return ns.Rs(new Ee(s),i,t)}Ys(e,t){const n=this.Ms.exec(e),i=Number(n[1]);return Dr.Rs(i,t)}Ls(e){return ga.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);D("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(n),a=[],u=[];return s.forEach(c=>{i.has(c)||a.push(c)}),i.forEach(c=>{s.has(c)||u.push(c)}),this.syncEngine.io(a,u).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Zo();return e.forEach((n,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class Id{constructor(){this.so=new No,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new No,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class M_{_o(e){}shutdown(){}}/**
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
 */class tl{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ni=null;function ho(){return Ni===null?Ni=function(){return 268435456+Math.round(2147483648*Math.random())}():Ni++,"0x"+Ni.toString(16)}/**
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
 */const L_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class B_{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ve="WebChannelConnection";class U_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,n,i,s,a){const u=ho(),c=this.xo(t,n.toUriEncodedString());D("RestConnection",`Sending RPC '${t}' ${u}:`,c,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(t,c,h,i).then(f=>(D("RestConnection",`Received RPC '${t}' ${u}: `,f),f),f=>{throw Ye("RestConnection",`RPC '${t}' ${u} failed with error: `,f,"url: ",c,"request:",i),f})}Lo(t,n,i,s,a,u){return this.Mo(t,n,i,s,a)}Oo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Kn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,n){const i=L_[t];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,i){const s=ho();return new Promise((a,u)=>{const c=new Gl;c.setWithCredentials(!0),c.listenOnce(Kl.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ki.NO_ERROR:const f=c.getResponseJson();D(Ve,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case ki.TIMEOUT:D(Ve,`RPC '${e}' ${s} timed out`),u(new V(S.DEADLINE_EXCEEDED,"Request time out"));break;case ki.HTTP_ERROR:const g=c.getStatus();if(D(Ve,`RPC '${e}' ${s} failed with status:`,g,"response text:",c.getResponseText()),g>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_==null?void 0:_.error;if(R&&R.status&&R.message){const C=function(x){const q=x.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(q)>=0?q:S.UNKNOWN}(R.status);u(new V(C,R.message))}else u(new V(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new V(S.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{D(Ve,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);D(Ve,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",h,n,15)})}Bo(e,t,n){const i=ho(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Hl(),u=Wl(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const f=s.join("");D(Ve,`Creating RPC '${e}' stream ${i}: ${f}`,c);const g=a.createWebChannel(f,c);let _=!1,R=!1;const C=new B_({Io:x=>{R?D(Ve,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(_||(D(Ve,`Opening RPC '${e}' stream ${i} transport.`),g.open(),_=!0),D(Ve,`RPC '${e}' stream ${i} sending:`,x),g.send(x))},To:()=>g.close()}),N=(x,q,z)=>{x.listen(q,U=>{try{z(U)}catch(X){setTimeout(()=>{throw X},0)}})};return N(g,wr.EventType.OPEN,()=>{R||(D(Ve,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),N(g,wr.EventType.CLOSE,()=>{R||(R=!0,D(Ve,`RPC '${e}' stream ${i} transport closed`),C.So())}),N(g,wr.EventType.ERROR,x=>{R||(R=!0,Ye(Ve,`RPC '${e}' stream ${i} transport errored:`,x),C.So(new V(S.UNAVAILABLE,"The operation could not be completed")))}),N(g,wr.EventType.MESSAGE,x=>{var q;if(!R){const z=x.data[0];L(!!z);const U=z,X=U.error||((q=U[0])===null||q===void 0?void 0:q.error);if(X){D(Ve,`RPC '${e}' stream ${i} received error:`,X);const ne=X.status;let H=function(I){const T=pe[I];if(T!==void 0)return Mh(T)}(ne),E=X.message;H===void 0&&(H=S.INTERNAL,E="Unknown error status: "+ne+" with message "+X.message),R=!0,C.So(new V(H,E)),g.close()}else D(Ve,`RPC '${e}' stream ${i} received:`,z),C.bo(z)}}),N(u,Ql.STAT_EVENT,x=>{x.stat===_o.PROXY?D(Ve,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===_o.NOPROXY&&D(Ve,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}/**
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
 */function Ed(){return typeof window<"u"?window:null}function ji(){return typeof document<"u"?document:null}/**
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
 */function ri(r){return new Wp(r,!0)}/**
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
 */class pa{constructor(e,t,n=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-n);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Td{constructor(e,t,n,i,s,a,u,c){this.ui=e,this.Ho=n,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new pa(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(fe(t.toString()),fe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===t&&this.P_(n,i)},n=>{e(()=>{const i=new V(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class q_ extends Td{constructor(e,t,n,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Yp(this.serializer,e),n=function(s){if(!("targetChange"in s))return B.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?me(a.readTime):B.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Po(this.serializer),t.addTarget=function(s,a){let u;const c=a.target;if(u=Wi(c)?{documents:Qh(s,c)}:{query:Wh(s,c)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=qh(s,a.resumeToken);const h=Ro(s,a.expectedCount);h!==null&&(u.expectedCount=h)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=Ln(s,a.snapshotVersion.toTimestamp());const h=Ro(s,a.expectedCount);h!==null&&(u.expectedCount=h)}return u}(this.serializer,e);const n=Zp(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Po(this.serializer),t.removeTarget=e,this.a_(t)}}class j_ extends Td{constructor(e,t,n,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return L(!!e.streamToken),this.lastStreamToken=e.streamToken,L(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){L(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Xp(e.writeResults,e.commitTime),n=me(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Po(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>zr(this.serializer,n))};this.a_(t)}}/**
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
 */class z_ extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,So(t,n),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(S.UNKNOWN,s.toString())})}Lo(e,t,n,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(e,So(t,n),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class $_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(fe(t),this.D_=!1):D("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class G_{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{n.enqueueAndForget(async()=>{Lt(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=F(c);h.L_.add(4),await Jn(h),h.q_.set("Unknown"),h.L_.delete(4),await ii(h)}(this))})}),this.q_=new $_(n,i)}}async function ii(r){if(Lt(r))for(const e of r.B_)await e(!0)}async function Jn(r){for(const e of r.B_)await e(!1)}function _s(r,e){const t=F(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Ia(t)?ya(t):Xn(t).r_()&&_a(t,e))}function qn(r,e){const t=F(r),n=Xn(t);t.N_.delete(e),n.r_()&&wd(t,e),t.N_.size===0&&(n.r_()?n.o_():Lt(t)&&t.q_.set("Unknown"))}function _a(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xn(r).A_(e)}function wd(r,e){r.Q_.xe(e),Xn(r).R_(e)}function ya(r){r.Q_=new $p({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),Xn(r).start(),r.q_.v_()}function Ia(r){return Lt(r)&&!Xn(r).n_()&&r.N_.size>0}function Lt(r){return F(r).L_.size===0}function vd(r){r.Q_=void 0}async function K_(r){r.q_.set("Online")}async function Q_(r){r.N_.forEach((e,t)=>{_a(r,e)})}async function W_(r,e){vd(r),Ia(r)?(r.q_.M_(e),ya(r)):r.q_.set("Unknown")}async function H_(r,e,t){if(r.q_.set("Online"),e instanceof Uh&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const u of s.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(r,e)}catch(n){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await is(r,n)}else if(e instanceof qi?r.Q_.Ke(e):e instanceof Bh?r.Q_.He(e):r.Q_.We(e),!t.isEqual(B.min()))try{const n=await md(r.localStore);t.compareTo(n)>=0&&await function(s,a){const u=s.Q_.rt(a);return u.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,h)=>{const f=s.N_.get(c);if(!f)return;s.N_.set(c,f.withResumeToken(de.EMPTY_BYTE_STRING,f.snapshotVersion)),wd(s,c);const g=new rt(f.target,c,h,f.sequenceNumber);_a(s,g)}),s.remoteSyncer.applyRemoteEvent(u)}(r,t)}catch(n){D("RemoteStore","Failed to raise snapshot:",n),await is(r,n)}}async function is(r,e,t){if(!Ft(e))throw e;r.L_.add(1),await Jn(r),r.q_.set("Offline"),t||(t=()=>md(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await ii(r)})}function Ad(r,e){return e().catch(t=>is(r,t,e))}async function Yn(r){const e=F(r),t=xt(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;J_(e);)try{const i=await k_(e.localStore,n);if(i===null){e.O_.length===0&&t.o_();break}n=i.batchId,Y_(e,i)}catch(i){await is(e,i)}bd(e)&&Rd(e)}function J_(r){return Lt(r)&&r.O_.length<10}function Y_(r,e){r.O_.push(e);const t=xt(r);t.r_()&&t.V_&&t.m_(e.mutations)}function bd(r){return Lt(r)&&!xt(r).n_()&&r.O_.length>0}function Rd(r){xt(r).start()}async function X_(r){xt(r).p_()}async function Z_(r){const e=xt(r);for(const t of r.O_)e.m_(t.mutations)}async function ey(r,e,t){const n=r.O_.shift(),i=ra.from(n,e,t);await Ad(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Yn(r)}async function ty(r,e){e&&xt(r).V_&&await async function(n,i){if(function(a){return Fh(a)&&a!==S.ABORTED}(i.code)){const s=n.O_.shift();xt(n).s_(),await Ad(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Yn(n)}}(r,e),bd(r)&&Rd(r)}async function nl(r,e){const t=F(r);t.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const n=Lt(t);t.L_.add(3),await Jn(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ii(t)}async function ko(r,e){const t=F(r);e?(t.L_.delete(2),await ii(t)):e||(t.L_.add(2),await Jn(t),t.q_.set("Unknown"))}function Xn(r){return r.K_||(r.K_=function(t,n,i){const s=F(t);return s.w_(),new q_(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:K_.bind(null,r),Ro:Q_.bind(null,r),mo:W_.bind(null,r),d_:H_.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),Ia(r)?ya(r):r.q_.set("Unknown")):(await r.K_.stop(),vd(r))})),r.K_}function xt(r){return r.U_||(r.U_=function(t,n,i){const s=F(t);return s.w_(),new j_(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:X_.bind(null,r),mo:ty.bind(null,r),f_:Z_.bind(null,r),g_:ey.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await Yn(r)):(await r.U_.stop(),r.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class Ea{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const a=Date.now()+n,u=new Ea(e,t,a,i,s);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zn(r,e){if(fe("AsyncQueue",`${e}: ${r}`),Ft(r))return new V(S.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Vn{constructor(e){this.comparator=e?(t,n)=>e(t,n)||O.comparator(t.key,n.key):(t,n)=>O.comparator(t.key,n.key),this.keyedMap=vr(),this.sortedSet=new re(this.comparator)}static emptySet(e){return new Vn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Vn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class rl{constructor(){this.W_=new re(O.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):M():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class jn{constructor(e,t,n,i,s,a,u,c,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new jn(e,t,Vn.emptySet(t),a,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class ny{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class ry{constructor(){this.queries=il(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const i=F(t),s=i.queries;i.queries=il(),s.forEach((a,u)=>{for(const c of u.j_)c.onError(n)})})(this,new V(S.ABORTED,"Firestore shutting down"))}}function il(){return new lt(r=>wh(r),Xr)}async function Ta(r,e){const t=F(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(n=2):(s=new ny,n=e.J_()?0:1);try{switch(n){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=Zn(a,`Initialization of query '${An(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&va(t)}async function wa(r,e){const t=F(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function iy(r,e){const t=F(r);let n=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const u of a.j_)u.X_(i)&&(n=!0);a.z_=i}}n&&va(t)}function sy(r,e,t){const n=F(r),i=n.queries.get(e);if(i)for(const s of i.j_)s.onError(t);n.queries.delete(e)}function va(r){r.Y_.forEach(e=>{e.next()})}var Oo,sl;(sl=Oo||(Oo={})).ea="default",sl.Cache="cache";class Aa{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new jn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Oo.Cache}}/**
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
 */class oy{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
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
 */class ol{constructor(e){this.serializer=e}Es(e){return Je(this.serializer,e)}ds(e){return e.metadata.exists?Kh(this.serializer,e.document,!1):se.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return me(e)}}class ay{constructor(e,t,n){this.ca=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Sd(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const n=G.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,n=new ol(this.serializer);for(const i of e)if(i.metadata.queries){const s=n.Es(i.metadata.name);for(const a of i.metadata.queries){const u=(t.get(a)||$()).add(s);t.set(a,u)}}return t}async complete(){const e=await O_(this.localStore,new ol(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const n of this.queries)await F_(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function Sd(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class Pd{constructor(e){this.key=e}}class Vd{constructor(e){this.key=e}}class Dd{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=$(),this.mutatedKeys=$(),this.Aa=Ah(e),this.Ra=new Vn(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new rl,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const _=i.get(f),R=Zr(this.query,g)?g:null,C=!!_&&this.mutatedKeys.has(_.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let x=!1;_&&R?_.data.isEqual(R.data)?C!==N&&(n.track({type:3,doc:R}),x=!0):this.ga(_,R)||(n.track({type:2,doc:R}),x=!0,(c&&this.Aa(R,c)>0||h&&this.Aa(R,h)<0)&&(u=!0)):!_&&R?(n.track({type:0,doc:R}),x=!0):_&&!R&&(n.track({type:1,doc:_}),x=!0,(c||h)&&(u=!0)),x&&(R?(a=a.add(R),s=N?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{Ra:a,fa:n,ns:u,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(R,C){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return N(R)-N(C)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(n),i=i!=null&&i;const u=t&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new jn(this.query,e.Ra,s,a,e.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new rl,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=$(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new Vd(n))}),this.da.forEach(n=>{e.has(n)||t.push(new Pd(n))}),t}ba(e){this.Ta=e.Ts,this.da=$();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return jn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class uy{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class cy{constructor(e){this.key=e,this.va=!1}}class ly{constructor(e,t,n,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new lt(u=>wh(u),Xr),this.Ma=new Map,this.xa=new Set,this.Oa=new re(O.comparator),this.Na=new Map,this.La=new la,this.Ba={},this.ka=new Map,this.qa=un.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function hy(r,e,t=!0){const n=ys(r);let i;const s=n.Fa.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Cd(n,e,t,!0),i}async function dy(r,e){const t=ys(r);await Cd(t,e,!0,!1)}async function Cd(r,e,t,n){const i=await Bn(r.localStore,Me(e)),s=i.targetId,a=r.sharedClientState.addLocalQueryTarget(s,t);let u;return n&&(u=await ba(r,e,s,a==="current",i.resumeToken)),r.isPrimaryClient&&t&&_s(r.remoteStore,i),u}async function ba(r,e,t,n,i){r.Ka=(g,_,R)=>async function(N,x,q,z){let U=x.view.ma(q);U.ns&&(U=await ts(N.localStore,x.query,!1).then(({documents:E})=>x.view.ma(E,U)));const X=z&&z.targetChanges.get(x.targetId),ne=z&&z.targetMismatches.get(x.targetId)!=null,H=x.view.applyChanges(U,N.isPrimaryClient,X,ne);return Fo(N,x.targetId,H.wa),H.snapshot}(r,g,_,R);const s=await ts(r.localStore,e,!0),a=new Dd(e,s.Ts),u=a.ma(s.documents),c=ni.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=a.applyChanges(u,r.isPrimaryClient,c);Fo(r,t,h.wa);const f=new uy(e,t,a);return r.Fa.set(e,f),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),h.snapshot}async function fy(r,e,t){const n=F(r),i=n.Fa.get(e),s=n.Ma.get(i.targetId);if(s.length>1)return n.Ma.set(i.targetId,s.filter(a=>!Xr(a,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Un(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&qn(n.remoteStore,i.targetId),zn(n,i.targetId)}).catch(Ot)):(zn(n,i.targetId),await Un(n.localStore,i.targetId,!0))}async function my(r,e){const t=F(r),n=t.Fa.get(e),i=t.Ma.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),qn(t.remoteStore,n.targetId))}async function gy(r,e,t){const n=Va(r);try{const i=await function(a,u){const c=F(a),h=ce.now(),f=u.reduce((R,C)=>R.add(C.key),$());let g,_;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=qe(),N=$();return c.cs.getEntries(R,f).next(x=>{C=x,C.forEach((q,z)=>{z.isValidDocument()||(N=N.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,C)).next(x=>{g=x;const q=[];for(const z of u){const U=qp(z,g.get(z.key).overlayedDocument);U!=null&&q.push(new ht(z.key,U,fh(U.value.mapValue),ue.exists(!0)))}return c.mutationQueue.addMutationBatch(R,h,q,u)}).next(x=>{_=x;const q=x.applyToLocalDocumentSet(g,N);return c.documentOverlayCache.saveOverlays(R,x.batchId,q)})}).then(()=>({batchId:_.batchId,changes:Rh(g)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(a,u,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new re(j)),h=h.insert(u,c),a.Ba[a.currentUser.toKey()]=h}(n,i.batchId,t),await dt(n,i.changes),await Yn(n.remoteStore)}catch(i){const s=Zn(i,"Failed to persist write");t.reject(s)}}async function xd(r,e){const t=F(r);try{const n=await N_(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(L(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?L(a.va):i.removedDocuments.size>0&&(L(a.va),a.va=!1))}),await dt(t,n,e)}catch(n){await Ot(n)}}function al(r,e,t){const n=F(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Fa.forEach((s,a)=>{const u=a.view.Z_(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const c=F(a);c.onlineState=u;let h=!1;c.queries.forEach((f,g)=>{for(const _ of g.j_)_.Z_(u)&&(h=!0)}),h&&va(c)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function py(r,e,t){const n=F(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Na.get(e),s=i&&i.key;if(s){let a=new re(O.comparator);a=a.insert(s,se.newNoDocument(s,B.min()));const u=$().add(s),c=new ti(B.min(),new Map,new re(j),a,u);await xd(n,c),n.Oa=n.Oa.remove(s),n.Na.delete(e),Pa(n)}else await Un(n.localStore,e,!1).then(()=>zn(n,e,t)).catch(Ot)}async function _y(r,e){const t=F(r),n=e.batch.batchId;try{const i=await x_(t.localStore,e);Sa(t,n,null),Ra(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await dt(t,i)}catch(i){await Ot(i)}}async function yy(r,e,t){const n=F(r);try{const i=await function(a,u){const c=F(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,u).next(g=>(L(g!==null),f=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(n.localStore,e);Sa(n,e,t),Ra(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await dt(n,i)}catch(i){await Ot(i)}}async function Iy(r,e){const t=F(r);Lt(t.remoteStore)||D("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(a){const u=F(a);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(n===-1)return void e.resolve();const i=t.ka.get(n)||[];i.push(e),t.ka.set(n,i)}catch(n){const i=Zn(n,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Ra(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function Sa(r,e,t){const n=F(r);let i=n.Ba[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ba[n.currentUser.toKey()]=i}}function zn(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||Nd(r,n)})}function Nd(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(qn(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),Pa(r))}function Fo(r,e,t){for(const n of t)n instanceof Pd?(r.La.addReference(n.key,e),Ey(r,n)):n instanceof Vd?(D("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||Nd(r,n.key)):M()}function Ey(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(D("SyncEngine","New document in limbo: "+t),r.xa.add(n),Pa(r))}function Pa(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new O(G.fromString(e)),n=r.qa.next();r.Na.set(n,new cy(t)),r.Oa=r.Oa.insert(t,n),_s(r.remoteStore,new rt(Me(Qn(t.path)),n,"TargetPurposeLimboResolution",Be.oe))}}async function dt(r,e,t){const n=F(r),i=[],s=[],a=[];n.Fa.isEmpty()||(n.Fa.forEach((u,c)=>{a.push(n.Ka(c,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const g=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){i.push(h);const g=ma.Wi(c.targetId,h);s.push(g)}}))}),await Promise.all(a),n.Ca.d_(i),await async function(c,h){const f=F(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>v.forEach(h,_=>v.forEach(_.$i,R=>f.persistence.referenceDelegate.addReference(g,_.targetId,R)).next(()=>v.forEach(_.Ui,R=>f.persistence.referenceDelegate.removeReference(g,_.targetId,R)))))}catch(g){if(!Ft(g))throw g;D("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const R=f.os.get(_),C=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(_,N)}}}(n.localStore,s))}async function Ty(r,e){const t=F(r);if(!t.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const n=await fd(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(u=>{u.forEach(c=>{c.reject(new V(S.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await dt(t,n.hs)}}function wy(r,e){const t=F(r),n=t.Na.get(e);if(n&&n.va)return $().add(n.key);{let i=$();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const u=t.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}async function vy(r,e){const t=F(r),n=await ts(t.localStore,e.query,!0),i=e.view.ba(n);return t.isPrimaryClient&&Fo(t,e.targetId,i.wa),i}async function Ay(r,e){const t=F(r);return _d(t.localStore,e).then(n=>dt(t,n))}async function by(r,e,t,n){const i=F(r),s=await function(u,c){const h=F(u),f=F(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",g=>f.Mn(g,c).next(_=>_?h.localDocuments.getDocuments(g,_):v.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Yn(i.remoteStore):t==="acknowledged"||t==="rejected"?(Sa(i,e,n||null),Ra(i,e),function(u,c){F(F(u).mutationQueue).On(c)}(i.localStore,e)):M(),await dt(i,s)):D("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Ry(r,e){const t=F(r);if(ys(t),Va(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await ul(t,n.toArray());t.Qa=!0,await ko(t.remoteStore,!0);for(const s of i)_s(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const n=[];let i=Promise.resolve();t.Ma.forEach((s,a)=>{t.sharedClientState.isLocalQueryTarget(a)?n.push(a):i=i.then(()=>(zn(t,a),Un(t.localStore,a,!0))),qn(t.remoteStore,a)}),await i,await ul(t,n),function(a){const u=F(a);u.Na.forEach((c,h)=>{qn(u.remoteStore,h)}),u.La.pr(),u.Na=new Map,u.Oa=new re(O.comparator)}(t),t.Qa=!1,await ko(t.remoteStore,!1)}}async function ul(r,e,t){const n=F(r),i=[],s=[];for(const a of e){let u;const c=n.Ma.get(a);if(c&&c.length!==0){u=await Bn(n.localStore,Me(c[0]));for(const h of c){const f=n.Fa.get(h),g=await vy(n,f);g.snapshot&&s.push(g.snapshot)}}else{const h=await pd(n.localStore,a);u=await Bn(n.localStore,h),await ba(n,kd(h),a,!1,u.resumeToken)}i.push(u)}return n.Ca.d_(s),i}function kd(r){return Th(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function Sy(r){return function(t){return F(F(t).persistence).Qi()}(F(r).localStore)}async function Py(r,e,t,n){const i=F(r);if(i.Qa)return void D("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const a=await _d(i.localStore,vh(s[0])),u=ti.createSynthesizedRemoteEventForCurrentChange(e,t==="current",de.EMPTY_BYTE_STRING);await dt(i,a,u);break}case"rejected":await Un(i.localStore,e,!0),zn(i,e,n);break;default:M()}}async function Vy(r,e,t){const n=ys(r);if(n.Qa){for(const i of e){if(n.Ma.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){D("SyncEngine","Adding an already active target "+i);continue}const s=await pd(n.localStore,i),a=await Bn(n.localStore,s);await ba(n,kd(s),a.targetId,!1,a.resumeToken),_s(n.remoteStore,a)}for(const i of t)n.Ma.has(i)&&await Un(n.localStore,i,!1).then(()=>{qn(n.remoteStore,i),zn(n,i)}).catch(Ot)}}function ys(r){const e=F(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=xd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=py.bind(null,e),e.Ca.d_=iy.bind(null,e.eventManager),e.Ca.$a=sy.bind(null,e.eventManager),e}function Va(r){const e=F(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_y.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yy.bind(null,e),e}function Dy(r,e,t){const n=F(r);(async function(s,a,u){try{const c=await a.getMetadata();if(await function(R,C){const N=F(R),x=me(C.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",q=>N.Gr.getBundleMetadata(q,C.id)).then(q=>!!q&&q.createTime.compareTo(x)>=0)}(s.localStore,c))return await a.close(),u._completeWith(function(R){return{taskState:"Success",documentsLoaded:R.totalDocuments,bytesLoaded:R.totalBytes,totalDocuments:R.totalDocuments,totalBytes:R.totalBytes}}(c)),Promise.resolve(new Set);u._updateProgress(Sd(c));const h=new ay(c,s.localStore,a.serializer);let f=await a.Ua();for(;f;){const _=await h.la(f);_&&u._updateProgress(_),f=await a.Ua()}const g=await h.complete();return await dt(s,g.Ia,void 0),await function(R,C){const N=F(R);return N.persistence.runTransaction("Save bundle","readwrite",x=>N.Gr.saveBundleMetadata(x,C))}(s.localStore,c),u._completeWith(g.progress),Promise.resolve(g.Pa)}catch(c){return Ye("SyncEngine",`Loading bundle failed with ${c}`),u._failWith(c),Promise.resolve(new Set)}})(n,e,t).then(i=>{n.sharedClientState.notifyBundleLoaded(i)})}class $r{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ri(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return dd(this.persistence,new hd,e.initialUser,this.serializer)}Ga(e){return new ha(ps.Zr,this.serializer)}Wa(e){return new Id}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$r.provider={build:()=>new $r};class Cy extends $r{constructor(e){super(),this.cacheSizeBytes=e}ja(e,t){L(this.persistence.referenceDelegate instanceof es);const n=this.persistence.referenceDelegate.garbageCollector;return new od(n,e.asyncQueue,t)}Ga(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new ha(n=>es.Zr(n,t),this.serializer)}}class Od extends $r{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Va(this.Ja.syncEngine),await Yn(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return dd(this.persistence,new hd,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new od(n,e.asyncQueue,t)}Ha(e,t){const n=new Yg(t,this.persistence);return new Jg(e.asyncQueue,n)}Ga(e){const t=fa(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new da(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Ed(),ji(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Id}}class xy extends Od{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof lo&&(this.sharedClientState.syncEngine={no:by.bind(null,t),ro:Py.bind(null,t),io:Vy.bind(null,t),Qi:Sy.bind(null,t),eo:Ay.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await Ry(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=Ed();if(!lo.D(t))throw new V(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=fa(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new lo(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Gr{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>al(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ty.bind(null,this.syncEngine),await ko(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ry}()}createDatastore(e){const t=ri(e.databaseInfo.databaseId),n=function(s){return new U_(s)}(e.databaseInfo);return function(s,a,u,c){return new z_(s,a,u,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,a,u){return new G_(n,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>al(this.syncEngine,t,0),function(){return tl.D()?new tl:new M_}())}createSyncEngine(e,t){return function(i,s,a,u,c,h,f){const g=new ly(i,s,a,u,c,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=F(i);D("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Jn(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Gr.provider={build:()=>new Gr};function cl(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Is{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):fe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Ny{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new Ae,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(n=>{n&&n.ua()?this.metadata.resolve(n.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.aa)}`))},n=>this.metadata.reject(n))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),n=Number(t);isNaN(n)&&this.ru(`length string (${t}) is not valid number`);const i=await this.iu(n);return new oy(JSON.parse(i),e.length+n)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class ky{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new V(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const a=F(i),u={documents:s.map(g=>jr(a.serializer,g))},c=await a.Lo("BatchGetDocuments",a.serializer.databaseId,G.emptyPath(),u,s.length),h=new Map;c.forEach(g=>{const _=Jp(a.serializer,g);h.set(_.key.toString(),_)});const f=[];return s.forEach(g=>{const _=h.get(g.toString());L(!!_),f.push(_)}),f}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Hn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const i=O.fromPath(n);this.mutations.push(new ta(i,this.precondition(i)))}),await async function(n,i){const s=F(n),a={writes:i.map(u=>zr(s.serializer,u))};await s.Mo("Commit",s.serializer.databaseId,G.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw M();t=B.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new V(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(B.min())?ue.exists(!1):ue.updateTime(t):ue.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(B.min()))throw new V(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ue.updateTime(t)}return ue.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class Oy{constructor(e,t,n,i,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=i,this.deferred=s,this._u=n.maxAttempts,this.t_=new pa(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new ky(this.datastore),t=this.cu(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(i=>{this.lu(i)}))}).catch(n=>{this.lu(n)})})}cu(e){try{const t=this.updateFunction(e);return!Jr(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Fh(t)}return!1}}/**
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
 */class Fy{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ee.UNAUTHENTICATED,this.clientId=Yl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async a=>{D("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(D("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Zn(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function fo(r,e){r.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await fd(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function ll(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Da(r);D("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>nl(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>nl(e.remoteStore,i)),r._onlineComponents=e}async function Da(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await fo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ye("Error using user provided cache. Falling back to memory cache: "+t),await fo(r,new $r)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await fo(r,new Cy(void 0));return r._offlineComponents}async function Es(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await ll(r,r._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await ll(r,new Gr))),r._onlineComponents}function Fd(r){return Da(r).then(e=>e.persistence)}function Ca(r){return Da(r).then(e=>e.localStore)}function Md(r){return Es(r).then(e=>e.remoteStore)}function xa(r){return Es(r).then(e=>e.syncEngine)}function My(r){return Es(r).then(e=>e.datastore)}async function $n(r){const e=await Es(r),t=e.eventManager;return t.onListen=hy.bind(null,e.syncEngine),t.onUnlisten=fy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=dy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=my.bind(null,e.syncEngine),t}function Ly(r){return r.asyncQueue.enqueue(async()=>{const e=await Fd(r),t=await Md(r);return e.setNetworkEnabled(!0),function(i){const s=F(i);return s.L_.delete(0),ii(s)}(t)})}function By(r){return r.asyncQueue.enqueue(async()=>{const e=await Fd(r),t=await Md(r);return e.setNetworkEnabled(!1),async function(i){const s=F(i);s.L_.add(0),await Jn(s),s.q_.set("Offline")}(t)})}function Uy(r,e){const t=new Ae;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,a){try{const u=await function(h,f){const g=F(h);return g.persistence.runTransaction("read document","readonly",_=>g.localDocuments.getDocument(_,f))}(i,s);u.isFoundDocument()?a.resolve(u):u.isNoDocument()?a.resolve(null):a.reject(new V(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const c=Zn(u,`Failed to get document '${s} from cache`);a.reject(c)}}(await Ca(r),e,t)),t.promise}function Ld(r,e,t={}){const n=new Ae;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,u,c,h){const f=new Is({next:_=>{f.Za(),a.enqueueAndForget(()=>wa(s,g));const R=_.docs.has(u);!R&&_.fromCache?h.reject(new V(S.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&_.fromCache&&c&&c.source==="server"?h.reject(new V(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Aa(Qn(u.path),f,{includeMetadataChanges:!0,_a:!0});return Ta(s,g)}(await $n(r),r.asyncQueue,e,t,n)),n.promise}function qy(r,e){const t=new Ae;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,a){try{const u=await ts(i,s,!0),c=new Dd(s,u.Ts),h=c.ma(u.documents),f=c.applyChanges(h,!1);a.resolve(f.snapshot)}catch(u){const c=Zn(u,`Failed to execute query '${s} against cache`);a.reject(c)}}(await Ca(r),e,t)),t.promise}function Bd(r,e,t={}){const n=new Ae;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,u,c,h){const f=new Is({next:_=>{f.Za(),a.enqueueAndForget(()=>wa(s,g)),_.fromCache&&c.source==="server"?h.reject(new V(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Aa(u,f,{includeMetadataChanges:!0,_a:!0});return Ta(s,g)}(await $n(r),r.asyncQueue,e,t,n)),n.promise}function jy(r,e){const t=new Is(e);return r.asyncQueue.enqueueAndForget(async()=>function(i,s){F(i).Y_.add(s),s.next()}(await $n(r),t)),()=>{t.Za(),r.asyncQueue.enqueueAndForget(async()=>function(i,s){F(i).Y_.delete(s)}(await $n(r),t))}}function zy(r,e,t,n){const i=function(a,u){let c;return c=typeof a=="string"?Lh().encode(a):a,function(f,g){return new Ny(f,g)}(function(f,g){if(f instanceof Uint8Array)return cl(f,g);if(f instanceof ArrayBuffer)return cl(new Uint8Array(f),g);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),u)}(t,ri(e));r.asyncQueue.enqueueAndForget(async()=>{Dy(await xa(r),i,n)})}function $y(r,e){return r.asyncQueue.enqueue(async()=>function(n,i){const s=F(n);return s.persistence.runTransaction("Get named query","readonly",a=>s.Gr.getNamedQuery(a,i))}(await Ca(r),e))}/**
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
 */function Ud(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const hl=new Map;/**
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
 */function Na(r,e,t){if(!t)throw new V(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function qd(r,e,t,n){if(e===!0&&n===!0)throw new V(S.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function dl(r){if(!O.isDocumentKey(r))throw new V(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function fl(r){if(O.isDocumentKey(r))throw new V(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ts(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":M()}function Y(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new V(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ts(r);throw new V(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function jd(r,e){if(e<=0)throw new V(S.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */class ml{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ud((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class si{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ml({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ml(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Bg;switch(n.type){case"firstParty":return new zg(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=hl.get(t);n&&(D("ComponentProvider","Removing Datastore"),hl.delete(t),n.terminate())}(this),Promise.resolve()}}function Gy(r,e,t,n={}){var i;const s=(r=Y(r,si))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let u,c;if(typeof n.mockUserToken=="string")u=n.mockUserToken,c=Ee.MOCK_USER;else{u=sm(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const h=n.mockUserToken.sub||n.mockUserToken.user_id;if(!h)throw new V(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ee(h)}r._authCredentials=new Ug(new Jl(u,c))}}/**
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
 */let Le=class zd{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new zd(this.firestore,e,this._query)}},le=class $d{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new At(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $d(this.firestore,e,this._key)}},At=class Gd extends Le{constructor(e,t,n){super(e,t,Qn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new O(e))}withConverter(e){return new Gd(this.firestore,e,this._path)}};function Kd(r,e,...t){if(r=_e(r),Na("collection","path",e),r instanceof si){const n=G.fromString(e,...t);return fl(n),new At(r,null,n)}{if(!(r instanceof le||r instanceof At))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(G.fromString(e,...t));return fl(n),new At(r.firestore,null,n)}}function Ky(r,e){if(r=Y(r,si),Na("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new V(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Le(r,null,function(n){return new ct(G.emptyPath(),n)}(e))}function ss(r,e,...t){if(r=_e(r),arguments.length===1&&(e=Yl.newId()),Na("doc","path",e),r instanceof si){const n=G.fromString(e,...t);return dl(n),new le(r,null,new O(n))}{if(!(r instanceof le||r instanceof At))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(G.fromString(e,...t));return dl(n),new le(r.firestore,r instanceof At?r.converter:null,new O(n))}}function Qd(r,e){return r=_e(r),e=_e(e),(r instanceof le||r instanceof At)&&(e instanceof le||e instanceof At)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function Wd(r,e){return r=_e(r),e=_e(e),r instanceof Le&&e instanceof Le&&r.firestore===e.firestore&&Xr(r._query,e._query)&&r.converter===e.converter}/**
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
 */class gl{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new pa(this,"async_queue_retry"),this.Vu=()=>{const n=ji();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=ji();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ji();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ae;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ft(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw fe("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Ea.createAndSchedule(this,e,t,n,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&M()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Mo(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class Qy{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ae,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const Wy=-1;let ge=class extends si{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new gl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gl(e),this._firestoreClient=void 0,await e}}};function xe(r){if(r._terminated)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Hd(r),r._firestoreClient}function Hd(r){var e,t,n;const i=r._freezeSettings(),s=function(u,c,h,f){return new Ip(u,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ud(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Fy(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}function Hy(r,e){Ye("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return Jd(r,Gr.provider,{build:n=>new Od(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function Jy(r){Ye("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();Jd(r,Gr.provider,{build:t=>new xy(t,e.cacheSizeBytes)})}function Jd(r,e,t){if((r=Y(r,ge))._firestoreClient||r._terminated)throw new V(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new V(S.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},Hd(r)}function Yy(r){if(r._initialized&&!r._terminated)throw new V(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ae;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!He.D())return Promise.resolve();const i=n+"main";await He.delete(i)}(fa(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Xy(r){return function(t){const n=new Ae;return t.asyncQueue.enqueueAndForget(async()=>Iy(await xa(t),n)),n.promise}(xe(r=Y(r,ge)))}function Zy(r){return Ly(xe(r=Y(r,ge)))}function eI(r){return By(xe(r=Y(r,ge)))}function tI(r,e){const t=xe(r=Y(r,ge)),n=new Qy;return zy(t,r._databaseId,e,n),n}function nI(r,e){return $y(xe(r=Y(r,ge)),e).then(t=>t?new Le(r,null,t.query):null)}/**
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
 */class Ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ze(de.fromBase64String(e))}catch(t){throw new V(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ze(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Nt=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let hn=class{constructor(e){this._methodName=e}};/**
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
 */class ws{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}/**
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
 */class ka{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const rI=/^__.*__$/;class iI{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new ht(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wn(e,this.data,t,this.fieldTransforms)}}class Yd{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ht(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Xd(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class vs{constructor(e,t,n,i,s,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new vs(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return os(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Xd(this.Cu)&&rI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class sI{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ri(e)}Qu(e,t,n,i=!1){return new vs({Cu:e,methodName:t,qu:n,path:ae.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dn(r){const e=r._freezeSettings(),t=ri(r._databaseId);return new sI(r._databaseId,!!e.ignoreUndefinedProperties,t)}function As(r,e,t,n,i,s={}){const a=r.Qu(s.merge||s.mergeFields?2:0,e,t,i);qa("Data must be an object, but it was:",a,n);const u=tf(n,a);let c,h;if(s.merge)c=new Ue(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const _=Lo(e,g,t);if(!a.contains(_))throw new V(S.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);rf(f,_)||f.push(_)}c=new Ue(f),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new iI(new ve(u),c,h)}class oi extends hn{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oi}}function Zd(r,e,t){return new vs({Cu:3,qu:e.settings.qu,methodName:r._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Oa extends hn{_toFieldTransform(e){return new ei(e.path,new Fn)}isEqual(e){return e instanceof Oa}}class Fa extends hn{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Zd(this,e,!0),n=this.Ku.map(s=>fn(s,t)),i=new rn(n);return new ei(e.path,i)}isEqual(e){return e instanceof Fa&&xr(this.Ku,e.Ku)}}class Ma extends hn{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Zd(this,e,!0),n=this.Ku.map(s=>fn(s,t)),i=new sn(n);return new ei(e.path,i)}isEqual(e){return e instanceof Ma&&xr(this.Ku,e.Ku)}}class La extends hn{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Mn(e.serializer,Vh(e.serializer,this.$u));return new ei(e.path,t)}isEqual(e){return e instanceof La&&this.$u===e.$u}}function Ba(r,e,t,n){const i=r.Qu(1,e,t);qa("Data must be an object, but it was:",i,n);const s=[],a=ve.empty();Mt(n,(c,h)=>{const f=ja(e,c,t);h=_e(h);const g=i.Nu(f);if(h instanceof oi)s.push(f);else{const _=fn(h,g);_!=null&&(s.push(f),a.set(f,_))}});const u=new Ue(s);return new Yd(a,u,i.fieldTransforms)}function Ua(r,e,t,n,i,s){const a=r.Qu(1,e,t),u=[Lo(e,n,t)],c=[i];if(s.length%2!=0)throw new V(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)u.push(Lo(e,s[_])),c.push(s[_+1]);const h=[],f=ve.empty();for(let _=u.length-1;_>=0;--_)if(!rf(h,u[_])){const R=u[_];let C=c[_];C=_e(C);const N=a.Nu(R);if(C instanceof oi)h.push(R);else{const x=fn(C,N);x!=null&&(h.push(R),f.set(R,x))}}const g=new Ue(h);return new Yd(f,g,a.fieldTransforms)}function ef(r,e,t,n=!1){return fn(t,r.Qu(n?4:3,e))}function fn(r,e){if(nf(r=_e(r)))return qa("Unsupported field value:",e,r),tf(r,e);if(r instanceof hn)return function(n,i){if(!Xd(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,i){const s=[];let a=0;for(const u of n){let c=fn(u,i.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=_e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Vh(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ce.fromDate(n);return{timestampValue:Ln(i.serializer,s)}}if(n instanceof ce){const s=new ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ln(i.serializer,s)}}if(n instanceof ws)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ze)return{bytesValue:qh(i.serializer,n._byteString)};if(n instanceof le){const s=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:oa(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof ka)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw u.Bu("VectorValues must only contain numeric values.");return ea(u.serializer,c)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${Ts(n)}`)}(r,e)}function tf(r,e){const t={};return ch(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mt(r,(n,i)=>{const s=fn(i,e.Mu(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function nf(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ce||r instanceof ws||r instanceof Ze||r instanceof le||r instanceof hn||r instanceof ka)}function qa(r,e,t){if(!nf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=Ts(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function Lo(r,e,t){if((e=_e(e))instanceof Nt)return e._internalPath;if(typeof e=="string")return ja(r,e);throw os("Field path arguments must be of type string or ",r,!1,void 0,t)}const oI=new RegExp("[~\\*/\\[\\]]");function ja(r,e,t){if(e.search(oI)>=0)throw os(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Nt(...e.split("."))._internalPath}catch{throw os(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function os(r,e,t,n,i){const s=n&&!n.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${n}`),a&&(c+=` in document ${i}`),c+=")"),new V(S.INVALID_ARGUMENT,u+r+c)}function rf(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class Kr{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(bs("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class aI extends Kr{data(){return super.data()}}function bs(r,e){return typeof e=="string"?ja(r,e):e instanceof Nt?e._internalPath:e._delegate._internalPath}/**
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
 */function sf(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new V(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class za{}class ai extends za{}function It(r,e,...t){let n=[];e instanceof za&&n.push(e),n=n.concat(t),function(s){const a=s.filter(c=>c instanceof $a).length,u=s.filter(c=>c instanceof Rs).length;if(a>1||a>0&&u>0)throw new V(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Rs extends ai{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Rs(e,t,n)}_apply(e){const t=this._parse(e);return af(e._query,t),new Le(e.firestore,e.converter,bo(e._query,t))}_parse(e){const t=dn(e.firestore);return function(s,a,u,c,h,f,g){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){_l(g,f);const R=[];for(const C of g)R.push(pl(c,s,C));_={arrayValue:{values:R}}}else _=pl(c,s,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||_l(g,f),_=ef(u,a,g,f==="in"||f==="not-in");return K.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function uI(r,e,t){const n=e,i=bs("where",r);return Rs._create(i,n,t)}class $a extends za{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new $a(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Z.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const u=s.getFlattenedFilters();for(const c of u)af(a,c),a=bo(a,c)}(e._query,t),new Le(e.firestore,e.converter,bo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ga extends ai{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ga(e,t)}_apply(e){const t=function(i,s,a){if(i.startAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qr(s,a)}(e._query,this._field,this._direction);return new Le(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new ct(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function cI(r,e="asc"){const t=e,n=bs("orderBy",r);return Ga._create(n,t)}class Ss extends ai{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Ss(e,t,n)}_apply(e){return new Le(e.firestore,e.converter,Ji(e._query,this._limit,this._limitType))}}function lI(r){return jd("limit",r),Ss._create("limit",r,"F")}function hI(r){return jd("limitToLast",r),Ss._create("limitToLast",r,"L")}class Ps extends ai{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Ps(e,t,n)}_apply(e){const t=of(e,this.type,this._docOrFields,this._inclusive);return new Le(e.firestore,e.converter,function(i,s){return new ct(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function dI(...r){return Ps._create("startAt",r,!0)}function fI(...r){return Ps._create("startAfter",r,!1)}class Vs extends ai{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Vs(e,t,n)}_apply(e){const t=of(e,this.type,this._docOrFields,this._inclusive);return new Le(e.firestore,e.converter,function(i,s){return new ct(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function mI(...r){return Vs._create("endBefore",r,!1)}function gI(...r){return Vs._create("endAt",r,!0)}function of(r,e,t,n){if(t[0]=_e(t[0]),t[0]instanceof Kr)return function(s,a,u,c,h){if(!c)throw new V(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const g of Pn(s))if(g.field.isKeyField())f.push(tn(a,c.key));else{const _=c.data.field(g.field);if(cs(_))throw new V(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const R=g.field.canonicalString();throw new V(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${R}' (used as the orderBy) does not exist.`)}f.push(_)}return new Ct(f,h)}(r._query,r.firestore._databaseId,e,t[0]._document,n);{const i=dn(r.firestore);return function(a,u,c,h,f,g){const _=a.explicitOrderBy;if(f.length>_.length)throw new V(S.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const R=[];for(let C=0;C<f.length;C++){const N=f[C];if(_[C].field.isKeyField()){if(typeof N!="string")throw new V(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof N}`);if(!Xo(a)&&N.indexOf("/")!==-1)throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${N}' contains a slash.`);const x=a.path.child(G.fromString(N));if(!O.isDocumentKey(x))throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const q=new O(x);R.push(tn(u,q))}else{const x=ef(c,h,N);R.push(x)}}return new Ct(R,g)}(r._query,r.firestore._databaseId,i,e,t,n)}}function pl(r,e,t){if(typeof(t=_e(t))=="string"){if(t==="")throw new V(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xo(e)&&t.indexOf("/")!==-1)throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(G.fromString(t));if(!O.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return tn(r,new O(n))}if(t instanceof le)return tn(r,t._key);throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ts(t)}.`)}function _l(r,e){if(!Array.isArray(r)||r.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function af(r,e){const t=function(i,s){for(const a of i)for(const u of a.getFlattenedFilters())if(s.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ka{convertValue(e,t="none"){switch(Vt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(at(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Mt(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>oe(a.doubleValue));return new ka(s)}convertGeoPoint(e){return new ws(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ls(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Lr(e));default:return null}}convertTimestamp(e){const t=ot(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=G.fromString(e);L(Xh(n));const i=new Pt(n.get(1),n.get(3)),s=new O(n.popFirst(5));return i.isEqual(t)||fe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Ds(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class pI extends Ka{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ze(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}/**
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
 */class Yt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let ut=class extends Kr{constructor(e,t,n,i,s,a){super(e,t,n,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(bs("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}},Cr=class extends ut{data(e={}){return super.data(e)}},kt=class{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Yt(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Cr(this._firestore,this._userDataWriter,n.key,n,new Yt(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const c=new Cr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Yt(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const c=new Cr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Yt(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return u.type!==0&&(h=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:_I(u.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function _I(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}function uf(r,e){return r instanceof ut&&e instanceof ut?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof kt&&e instanceof kt&&r._firestore===e._firestore&&Wd(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
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
 */function yI(r){r=Y(r,le);const e=Y(r.firestore,ge);return Ld(xe(e),r._key).then(t=>Qa(e,r,t))}class mn extends Ka{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ze(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function II(r){r=Y(r,le);const e=Y(r.firestore,ge),t=xe(e),n=new mn(e);return Uy(t,r._key).then(i=>new ut(e,n,r._key,i,new Yt(i!==null&&i.hasLocalMutations,!0),r.converter))}function EI(r){r=Y(r,le);const e=Y(r.firestore,ge);return Ld(xe(e),r._key,{source:"server"}).then(t=>Qa(e,r,t))}function TI(r){r=Y(r,Le);const e=Y(r.firestore,ge),t=xe(e),n=new mn(e);return sf(r._query),Bd(t,r._query).then(i=>new kt(e,n,r,i))}function wI(r){r=Y(r,Le);const e=Y(r.firestore,ge),t=xe(e),n=new mn(e);return qy(t,r._query).then(i=>new kt(e,n,r,i))}function vI(r){r=Y(r,Le);const e=Y(r.firestore,ge),t=xe(e),n=new mn(e);return Bd(t,r._query,{source:"server"}).then(i=>new kt(e,n,r,i))}function yl(r,e,t){r=Y(r,le);const n=Y(r.firestore,ge),i=Ds(r.converter,e,t);return ui(n,[As(dn(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,ue.none())])}function Il(r,e,t,...n){r=Y(r,le);const i=Y(r.firestore,ge),s=dn(i);let a;return a=typeof(e=_e(e))=="string"||e instanceof Nt?Ua(s,"updateDoc",r._key,e,t,n):Ba(s,"updateDoc",r._key,e),ui(i,[a.toMutation(r._key,ue.exists(!0))])}function AI(r){return ui(Y(r.firestore,ge),[new Hn(r._key,ue.none())])}function bI(r,e){const t=Y(r.firestore,ge),n=ss(r),i=Ds(r.converter,e);return ui(t,[As(dn(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,ue.exists(!1))]).then(()=>n)}function cf(r,...e){var t,n,i;r=_e(r);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Mo(e[a])||(s=e[a],a++);const u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Mo(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(n=g.error)===null||n===void 0?void 0:n.bind(g),e[a+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let c,h,f;if(r instanceof le)h=Y(r.firestore,ge),f=Qn(r._key.path),c={next:g=>{e[a]&&e[a](Qa(h,r,g))},error:e[a+1],complete:e[a+2]};else{const g=Y(r,Le);h=Y(g.firestore,ge),f=g._query;const _=new mn(h);c={next:R=>{e[a]&&e[a](new kt(h,_,g,R))},error:e[a+1],complete:e[a+2]},sf(r._query)}return function(_,R,C,N){const x=new Is(N),q=new Aa(R,x,C);return _.asyncQueue.enqueueAndForget(async()=>Ta(await $n(_),q)),()=>{x.Za(),_.asyncQueue.enqueueAndForget(async()=>wa(await $n(_),q))}}(xe(h),f,u,c)}function RI(r,e){return jy(xe(r=Y(r,ge)),Mo(e)?e:{next:e})}function ui(r,e){return function(n,i){const s=new Ae;return n.asyncQueue.enqueueAndForget(async()=>gy(await xa(n),i,s)),s.promise}(xe(r),e)}function Qa(r,e,t){const n=t.docs.get(e._key),i=new mn(r);return new ut(r,i,e._key,n,new Yt(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const SI={maxAttempts:5};/**
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
 */let PI=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=dn(e)}set(e,t,n){this._verifyNotCommitted();const i=Tt(e,this._firestore),s=Ds(i.converter,t,n),a=As(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(a.toMutation(i._key,ue.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const s=Tt(e,this._firestore);let a;return a=typeof(t=_e(t))=="string"||t instanceof Nt?Ua(this._dataReader,"WriteBatch.update",s._key,t,n,i):Ba(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,ue.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Tt(e,this._firestore);return this._mutations=this._mutations.concat(new Hn(t._key,ue.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new V(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Tt(r,e){if((r=_e(r)).firestore!==e)throw new V(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */let VI=class extends class{constructor(t,n){this._firestore=t,this._transaction=n,this._dataReader=dn(t)}get(t){const n=Tt(t,this._firestore),i=new pI(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return M();const a=s[0];if(a.isFoundDocument())return new Kr(this._firestore,i,a.key,a,n.converter);if(a.isNoDocument())return new Kr(this._firestore,i,n._key,null,n.converter);throw M()})}set(t,n,i){const s=Tt(t,this._firestore),a=Ds(s.converter,n,i),u=As(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,i);return this._transaction.set(s._key,u),this}update(t,n,i,...s){const a=Tt(t,this._firestore);let u;return u=typeof(n=_e(n))=="string"||n instanceof Nt?Ua(this._dataReader,"Transaction.update",a._key,n,i,s):Ba(this._dataReader,"Transaction.update",a._key,n),this._transaction.update(a._key,u),this}delete(t){const n=Tt(t,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Tt(e,this._firestore),n=new mn(this._firestore);return super.get(e).then(i=>new ut(this._firestore,n,t._key,i._document,new Yt(!1,!1),t.converter))}};function DI(r,e,t){r=Y(r,ge);const n=Object.assign(Object.assign({},SI),t);return function(s){if(s.maxAttempts<1)throw new V(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(s,a,u){const c=new Ae;return s.asyncQueue.enqueueAndForget(async()=>{const h=await My(s);new Oy(s.asyncQueue,h,u,a,c).au()}),c.promise}(xe(r),i=>e(new VI(r,i)),n)}/**
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
 */function CI(){return new oi("deleteField")}function xI(){return new Oa("serverTimestamp")}function NI(...r){return new Fa("arrayUnion",r)}function kI(...r){return new Ma("arrayRemove",r)}function OI(r){return new La("increment",r)}(function(e,t=!0){(function(i){Kn=i})($o),xn(new en("firestore",(n,{instanceIdentifier:i,options:s})=>{const a=n.getProvider("app").getImmediate(),u=new ge(new qg(n.getProvider("auth-internal")),new Gg(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new V(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pt(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),it(uc,"4.7.4",e),it(uc,"4.7.4","esm2017")})();const FI="@firebase/firestore-compat",MI="0.3.39";/**
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
 */function Wa(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new V("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function El(){if(typeof Uint8Array>"u")throw new V("unimplemented","Uint8Arrays are not available in this environment.")}function Tl(){if(!_p())throw new V("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Qr{constructor(e){this._delegate=e}static fromBase64String(e){return Tl(),new Qr(Ze.fromBase64String(e))}static fromUint8Array(e){return El(),new Qr(Ze.fromUint8Array(e))}toBase64(){return Tl(),this._delegate.toBase64()}toUint8Array(){return El(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Bo(r){return LI(r,["next","error","complete"])}function LI(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}/**
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
 */class BI{enableIndexedDbPersistence(e,t){return Hy(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Jy(e._delegate)}clearIndexedDbPersistence(e){return Yy(e._delegate)}}class lf{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Pt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Ye("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Gy(this._delegate,e,t,n)}enableNetwork(){return Zy(this._delegate)}disableNetwork(){return eI(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,qd("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Xy(this._delegate)}onSnapshotsInSync(e){return RI(this._delegate,e)}get app(){if(!this._appCompat)throw new V("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Gn(this,Kd(this._delegate,e))}catch(t){throw Fe(t,"collection()","Firestore.collection()")}}doc(e){try{return new $e(this,ss(this._delegate,e))}catch(t){throw Fe(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Oe(this,Ky(this._delegate,e))}catch(t){throw Fe(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return DI(this._delegate,t=>e(new hf(this,t)))}batch(){return xe(this._delegate),new df(new PI(this._delegate,e=>ui(this._delegate,e)))}loadBundle(e){return tI(this._delegate,e)}namedQuery(e){return nI(this._delegate,e).then(t=>t?new Oe(this,t):null)}}class Cs extends Ka{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qr(new Ze(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return $e.forKey(t,this.firestore,null)}}function UI(r){Mg(r)}class hf{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Cs(e)}get(e){const t=Xt(e);return this._delegate.get(t).then(n=>new Wr(this._firestore,new ut(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const i=Xt(e);return n?(Wa("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const s=Xt(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,n,...i),this}delete(e){const t=Xt(e);return this._delegate.delete(t),this}}class df{constructor(e){this._delegate=e}set(e,t,n){const i=Xt(e);return n?(Wa("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const s=Xt(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,n,...i),this}delete(e){const t=Xt(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class cn{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Cr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Hr(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=cn.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let s=i.get(t);return s||(s=new cn(e,new Cs(e),t),i.set(t,s)),s}}cn.INSTANCES=new WeakMap;class $e{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Cs(e)}static forPath(e,t,n){if(e.length%2!==0)throw new V("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new $e(t,new le(t._delegate,n,new O(e)))}static forKey(e,t,n){return new $e(t,new le(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Gn(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Gn(this.firestore,Kd(this._delegate,e))}catch(t){throw Fe(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=_e(e),e instanceof le?Qd(this._delegate,e):!1}set(e,t){t=Wa("DocumentReference.set",t);try{return t?yl(this._delegate,e,t):yl(this._delegate,e)}catch(n){throw Fe(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?Il(this._delegate,e):Il(this._delegate,e,t,...n)}catch(i){throw Fe(i,"updateDoc()","DocumentReference.update()")}}delete(){return AI(this._delegate)}onSnapshot(...e){const t=ff(e),n=mf(e,i=>new Wr(this.firestore,new ut(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return cf(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=II(this._delegate):(e==null?void 0:e.source)==="server"?t=EI(this._delegate):t=yI(this._delegate),t.then(n=>new Wr(this.firestore,new ut(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new $e(this.firestore,e?this._delegate.withConverter(cn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Fe(r,e,t){return r.message=r.message.replace(e,t),r}function ff(r){for(const e of r)if(typeof e=="object"&&!Bo(e))return e;return{}}function mf(r,e){var t,n;let i;return Bo(r[0])?i=r[0]:Bo(r[1])?i=r[1]:typeof r[0]=="function"?i={next:r[0],error:r[1],complete:r[2]}:i={next:r[1],error:r[2],complete:r[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(n=i.complete)===null||n===void 0?void 0:n.bind(i)}}class Wr{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new $e(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return uf(this._delegate,e._delegate)}}class Hr extends Wr{data(e){const t=this._delegate.data(e);return this._delegate._converter||Lg(t!==void 0),t}}class Oe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Cs(e)}where(e,t,n){try{return new Oe(this.firestore,It(this._delegate,uI(e,t,n)))}catch(i){throw Fe(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Oe(this.firestore,It(this._delegate,cI(e,t)))}catch(n){throw Fe(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Oe(this.firestore,It(this._delegate,lI(e)))}catch(t){throw Fe(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Oe(this.firestore,It(this._delegate,hI(e)))}catch(t){throw Fe(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Oe(this.firestore,It(this._delegate,dI(...e)))}catch(t){throw Fe(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Oe(this.firestore,It(this._delegate,fI(...e)))}catch(t){throw Fe(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Oe(this.firestore,It(this._delegate,mI(...e)))}catch(t){throw Fe(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Oe(this.firestore,It(this._delegate,gI(...e)))}catch(t){throw Fe(t,"endAt()","Query.endAt()")}}isEqual(e){return Wd(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=wI(this._delegate):(e==null?void 0:e.source)==="server"?t=vI(this._delegate):t=TI(this._delegate),t.then(n=>new Uo(this.firestore,new kt(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=ff(e),n=mf(e,i=>new Uo(this.firestore,new kt(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return cf(this._delegate,t,n)}withConverter(e){return new Oe(this.firestore,e?this._delegate.withConverter(cn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class qI{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Hr(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Uo{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Oe(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Hr(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new qI(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new Hr(this._firestore,n))})}isEqual(e){return uf(this._delegate,e._delegate)}}class Gn extends Oe{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new $e(this.firestore,e):null}doc(e){try{return e===void 0?new $e(this.firestore,ss(this._delegate)):new $e(this.firestore,ss(this._delegate,e))}catch(t){throw Fe(t,"doc()","CollectionReference.doc()")}}add(e){return bI(this._delegate,e).then(t=>new $e(this.firestore,t))}isEqual(e){return Qd(this._delegate,e._delegate)}withConverter(e){return new Gn(this.firestore,e?this._delegate.withConverter(cn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Xt(r){return Y(r,le)}/**
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
 */class Ha{constructor(...e){this._delegate=new Nt(...e)}static documentId(){return new Ha(ae.keyField().canonicalString())}isEqual(e){return e=_e(e),e instanceof Nt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Jt{constructor(e){this._delegate=e}static serverTimestamp(){const e=xI();return e._methodName="FieldValue.serverTimestamp",new Jt(e)}static delete(){const e=CI();return e._methodName="FieldValue.delete",new Jt(e)}static arrayUnion(...e){const t=NI(...e);return t._methodName="FieldValue.arrayUnion",new Jt(t)}static arrayRemove(...e){const t=kI(...e);return t._methodName="FieldValue.arrayRemove",new Jt(t)}static increment(e){const t=OI(e);return t._methodName="FieldValue.increment",new Jt(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const jI={Firestore:lf,GeoPoint:ws,Timestamp:ce,Blob:Qr,Transaction:hf,WriteBatch:df,DocumentReference:$e,DocumentSnapshot:Wr,Query:Oe,QueryDocumentSnapshot:Hr,QuerySnapshot:Uo,CollectionReference:Gn,FieldPath:Ha,FieldValue:Jt,setLogLevel:UI,CACHE_SIZE_UNLIMITED:Wy};function zI(r,e){r.INTERNAL.registerComponent(new en("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(n,i)},"PUBLIC").setServiceProps(Object.assign({},jI)))}/**
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
 */function $I(r){zI(r,(e,t)=>new lf(e,t,new BI)),r.registerVersion(FI,MI)}$I(zl);export{zl as f};