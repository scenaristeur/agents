(self["webpackChunkagents"]=self["webpackChunkagents"]||[]).push([[698],{8698:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-gun-login",modifiers:{"modal-gun-login":!0}}]},[t._v("Gun Login")]),r("b-modal",{attrs:{id:"modal-gun-login",title:"Gun Login"}},[r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"username"}},[r("code",[t._v("username")]),t._v(":")])]),r("b-col",{attrs:{sm:"9"}},[r("b-form-input",{attrs:{id:"username",type:"text"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1),r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"passphrase"}},[r("code",[t._v("passphrase")]),t._v(":")])]),r("b-col",{attrs:{sm:"9"}},[r("b-form-input",{attrs:{id:"passphrase",type:"password"},model:{value:t.passphrase,callback:function(e){t.passphrase=e},expression:"passphrase"}})],1)],1),r("b-button",{on:{click:t.login}},[t._v("Log In")]),r("b-button",{on:{click:t.leave}},[t._v("Leave")]),r("br"),r("b",[t._v(t._s(t.message))])],1)],1)},a=[],o=r(6939),i=r.n(o),s={name:"GunLogin",data(){return{username:"",passphrase:"",message:"",user:void 0}},async created(){console.log("SEA",i()),this.user=this.$gun.user()},methods:{async leave(){this.user.leave(),this.$store.commit("gun/setGunUser",void 0)},async login(){this.message="",await this.user.auth(this.username.trim(),this.passphrase.trim(),this.loginCallback)},loginCallback(t){console.log("user",this.user,t),this.user.is?(this.message="You are logged in",this.$store.commit("gun/setGunUser",this.user.is)):(this.$store.commit("gun/setGunUser",void 0),this.message="Error : "+t.err)}}},c=s,u=r(1001),f=(0,u.Z)(c,n,a,!1,null,null,null),p=f.exports},6939:function(t,e,r){t=r.nmd(t),function(){function e(t,n){return n?r(1661)(t):t.slice?e[a(t)]:function(r,n){t(r={exports:{}}),e[a(n)]=r.exports};function a(t){return t.split("/").slice(-1).toString().replace(".js","")}}var n=t;e((function(t){"undefined"!==typeof window&&(t.window=window);var e,r=t.window||t,a=r.SEA||{};(a.window=t.window)&&(a.window.SEA=a);try{e+""!==typeof n&&(n.exports=a)}catch(o){}t.exports=a}))(e,"./root"),e((function(t){var r=e("./root");try{r.window&&location.protocol.indexOf("s")<0&&location.host.indexOf("localhost")<0&&!/^127\.\d+\.\d+\.\d+$/.test(location.hostname)&&location.protocol.indexOf("file:")<0&&(console.warn("HTTPS needed for WebCrypto in SEA, redirecting..."),location.protocol="https:")}catch(n){}}))(e,"./https"),e((function(t){var n;if(n+""==typeof btoa){if(n+""==typeof Buffer)try{r.g.Buffer=e("buffer",1).Buffer}catch(a){console.log("Please `npm install buffer` or add it to your package.json !")}r.g.btoa=function(t){return Buffer.from(t,"binary").toString("base64")},r.g.atob=function(t){return Buffer.from(t,"base64").toString("binary")}}}))(e,"./base64"),e((function(t){function r(){}e("./base64"),Object.assign(r,{from:Array.from}),r.prototype=Object.create(Array.prototype),r.prototype.toString=function(t,e,r){t=t||"utf8",e=e||0;const n=this.length;if("hex"===t){const t=new Uint8Array(this);return[...Array((r&&r+1||n)-e).keys()].map((r=>t[r+e].toString(16).padStart(2,"0"))).join("")}return"utf8"===t?Array.from({length:(r||n)-e},((t,r)=>String.fromCharCode(this[r+e]))).join(""):"base64"===t?btoa(this):void 0},t.exports=r}))(e,"./array"),e((function(t){e("./base64");var r=e("./array");function n(...t){return console.warn("new SafeBuffer() is depreciated, please use SafeBuffer.from()"),n.from(...t)}n.prototype=Object.create(Array.prototype),Object.assign(n,{from(){if(!Object.keys(arguments).length||null==arguments[0])throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");const t=arguments[0];let e;if("string"===typeof t){const n=arguments[1]||"utf8";if("hex"===n){const n=t.match(/([\da-fA-F]{2})/g).map((t=>parseInt(t,16)));if(!n||!n.length)throw new TypeError("Invalid first argument for type 'hex'.");e=r.from(n)}else if("utf8"===n||"binary"===n){const n=t.length,a=new Uint16Array(n);Array.from({length:n},((e,r)=>a[r]=t.charCodeAt(r))),e=r.from(a)}else if("base64"===n){const n=atob(t),a=n.length,o=new Uint8Array(a);Array.from({length:a},((t,e)=>o[e]=n.charCodeAt(e))),e=r.from(o)}else"binary"===n?e=r.from(t):console.info("SafeBuffer.from unknown encoding: "+n);return e}t.byteLength;const n=t.byteLength?t.byteLength:t.length;if(n){let e;return t instanceof ArrayBuffer&&(e=new Uint8Array(t)),r.from(e||t)}},alloc(t,e=0){return r.from(new Uint8Array(Array.from({length:t},(()=>e))))},allocUnsafe(t){return r.from(new Uint8Array(Array.from({length:t})))},concat(t){if(!Array.isArray(t))throw new TypeError("First argument must be Array containing ArrayBuffer or Uint8Array instances.");return r.from(t.reduce(((t,e)=>t.concat(Array.from(e))),[]))}}),n.prototype.from=n.from,n.prototype.toString=r.prototype.toString,t.exports=n}))(e,"./buffer"),e((function(t){const r=e("./root"),a={Buffer:e("./buffer")};var o,i={};if(JSON.parseAsync=JSON.parseAsync||function(t,e,r){var n;try{e(n,JSON.parse(t,r))}catch(a){e(a)}},JSON.stringifyAsync=JSON.stringifyAsync||function(t,e,r,n){var a;try{e(a,JSON.stringify(t,r,n))}catch(o){e(o)}},a.parse=function(t,e){return new Promise((function(r,n){JSON.parseAsync(t,(function(t,e){t?n(t):r(e)}),e)}))},a.stringify=function(t,e,r){return new Promise((function(n,a){JSON.stringifyAsync(t,(function(t,e){t?a(t):n(e)}),e,r)}))},r.window&&(a.crypto=window.crypto||window.msCrypto,a.subtle=(a.crypto||i).subtle||(a.crypto||i).webkitSubtle,a.TextEncoder=window.TextEncoder,a.TextDecoder=window.TextDecoder,a.random=t=>a.Buffer.from(a.crypto.getRandomValues(new Uint8Array(a.Buffer.alloc(t))))),!a.TextDecoder){const{TextEncoder:t,TextDecoder:r}=e((o+""==typeof n?".":"")+"./lib/text-encoding",1);a.TextDecoder=r,a.TextEncoder=t}if(!a.crypto)try{var s=e("crypto",1);Object.assign(a,{crypto:s,random:t=>a.Buffer.from(s.randomBytes(t))});const{Crypto:t}=e("@peculiar/webcrypto",1);a.ossl=a.subtle=new t({directory:"ossl"}).subtle}catch(c){console.log("Please `npm install @peculiar/webcrypto` or add it to your package.json !")}t.exports=a}))(e,"./shim"),e((function(t){var r=e("./root"),n=e("./shim"),a={pbkdf2:{hash:{name:"SHA-256"},iter:1e5,ks:64},ecdsa:{pair:{name:"ECDSA",namedCurve:"P-256"},sign:{name:"ECDSA",hash:{name:"SHA-256"}}},ecdh:{name:"ECDH",namedCurve:"P-256"},jwk:function(t,e){t=t.split(".");var r=t[0],n=t[1],a={kty:"EC",crv:"P-256",x:r,y:n,ext:!0};return a.key_ops=e?["sign"]:["verify"],e&&(a.d=e),a},keyToJwk:function(t){const e=t.toString("base64"),r=e.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,"");return{kty:"oct",k:r,ext:!1,alg:"A256GCM"}},recall:{validity:43200,hook:function(t){return t}},check:function(t){return"string"==typeof t&&"SEA{"===t.slice(0,4)},parse:async function(t){try{var e="string"==typeof t;return e&&"SEA{"===t.slice(0,4)&&(t=t.slice(3)),e?await n.parse(t):t}catch(r){}return t}};r.opt=a,t.exports=a}))(e,"./settings"),e((function(t){var r=e("./shim");t.exports=async function(t,e){var n="string"==typeof t?t:await r.stringify(t),a=await r.subtle.digest({name:e||"SHA-256"},(new r.TextEncoder).encode(n));return r.Buffer.from(a)}}))(e,"./sha256"),e((function(t){const r=e("./shim"),n=r.subtle,a=r.ossl?r.ossl:n,o=t=>a.digest({name:"SHA-1"},new ArrayBuffer(t));t.exports=o}))(e,"./sha1"),e((function(t){var r,n=e("./root"),a=e("./shim"),o=e("./settings"),i=e("./sha256");n.work=n.work||(async(t,e,s,c)=>{try{var u=(e||{}).epub||e;if(c=c||{},u instanceof Function&&(s=u,u=r),t="string"==typeof t?t:await a.stringify(t),"sha"===(c.name||"").toLowerCase().slice(0,3)){var f=a.Buffer.from(await i(t,c.name),"binary").toString(c.encode||"base64");if(s)try{s(f)}catch(h){console.log(h)}return f}u=u||a.random(9);var p=await(a.ossl||a.subtle).importKey("raw",(new a.TextEncoder).encode(t),{name:c.name||"PBKDF2"},!1,["deriveBits"]),l=await(a.ossl||a.subtle).deriveBits({name:c.name||"PBKDF2",iterations:c.iterations||o.pbkdf2.iter,salt:(new a.TextEncoder).encode(c.salt||u),hash:c.hash||o.pbkdf2.hash},p,c.length||8*o.pbkdf2.ks);t=a.random(t.length);var y=a.Buffer.from(l,"binary").toString(c.encode||"base64");if(s)try{s(y)}catch(h){console.log(h)}return y}catch(h){if(console.log(h),n.err=h,n.throw)throw h;return void(s&&s())}}),t.exports=n.work}))(e,"./work"),e((function(t){var r=e("./root"),n=e("./shim");e("./settings");r.name=r.name||(async(t,e)=>{try{if(t)try{t()}catch(n){console.log(n)}return}catch(n){if(console.log(n),r.err=n,r.throw)throw n;return void(t&&t())}}),r.pair=r.pair||(async(t,e)=>{try{var a=n.ossl||n.subtle,o=await n.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},!0,["sign","verify"]).then((async t=>{var e={};e.priv=(await n.subtle.exportKey("jwk",t.privateKey)).d;var r=await n.subtle.exportKey("jwk",t.publicKey);return e.pub=r.x+"."+r.y,e}));try{var i=await a.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveKey"]).then((async t=>{var e={};e.epriv=(await a.exportKey("jwk",t.privateKey)).d;var r=await a.exportKey("jwk",t.publicKey);return e.epub=r.x+"."+r.y,e}))}catch(c){if(r.window)throw c;if("Error: ECDH is not a supported algorithm"!=c)throw c;console.log("Ignoring ECDH...")}i=i||{};var s={pub:o.pub,priv:o.priv,epub:i.epub,epriv:i.epriv};if(t)try{t(s)}catch(c){console.log(c)}return s}catch(c){if(console.log(c),r.err=c,r.throw)throw c;return void(t&&t())}}),t.exports=r.pair}))(e,"./pair"),e((function(t){var r,n=e("./root"),a=e("./shim"),o=e("./settings"),i=e("./sha256");n.sign=n.sign||(async(t,e,s,c)=>{try{if(c=c||{},!(e||c).priv){if(!n.I)throw"No signing key.";e=await n.I(null,{what:t,how:"sign",why:c.why})}if(r===t)throw"`undefined` not allowed.";var u=await o.parse(t),f=c.check=c.check||u;if(n.verify&&(n.opt.check(f)||f&&f.s&&f.m)&&r!==await n.verify(f,e)){var p=await o.parse(f);if(c.raw||(p="SEA"+await a.stringify(p)),s)try{s(p)}catch(d){console.log(d)}return p}var l=e.pub,y=e.priv,h=o.jwk(l,y),g=await i(u),w=await(a.ossl||a.subtle).importKey("jwk",h,{name:"ECDSA",namedCurve:"P-256"},!1,["sign"]).then((t=>(a.ossl||a.subtle).sign({name:"ECDSA",hash:{name:"SHA-256"}},t,new Uint8Array(g))));p={m:u,s:a.Buffer.from(w,"binary").toString(c.encode||"base64")};if(c.raw||(p="SEA"+await a.stringify(p)),s)try{s(p)}catch(d){console.log(d)}return p}catch(d){if(console.log(d),n.err=d,n.throw)throw d;return void(s&&s())}}),t.exports=n.sign}))(e,"./sign"),e((function(t){var r,n=e("./root"),a=e("./shim"),o=e("./settings"),i=e("./sha256");n.verify=n.verify||(async(t,e,s,c)=>{try{var u=await o.parse(t);if(!1===e){var f=await o.parse(u.m);if(s)try{s(f)}catch(b){console.log(b)}return f}c=c||{};var p,l,y,h=e.pub||e,g=n.opt.slow_leak?await n.opt.slow_leak(h):await(a.ossl||a.subtle).importKey("jwk",o.jwk(h),{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),w=await i(u.m);try{if(p=a.Buffer.from(u.s,c.encode||"base64"),l=new Uint8Array(p),y=await(a.ossl||a.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},g,l,new Uint8Array(w)),!y)throw"Signature did not match."}catch(b){if(n.opt.fallback)return await n.opt.fall_verify(t,e,s,c)}var d=y?await o.parse(u.m):r;if(s)try{s(d)}catch(b){console.log(b)}return d}catch(b){if(console.log(b),n.err=b,n.throw)throw b;return void(s&&s())}}),t.exports=n.verify;var s={},c=(n.opt.slow_leak=t=>{if(s[t])return s[t];var e=o.jwk(t);return s[t]=(a.ossl||a.subtle).importKey("jwk",e,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),s[t]},n.opt);n.opt.fall_verify=async function(t,e,s,u,f){if(f===n.opt.fallback)throw"Signature did not match";f=f||1;var p=t||"";t=n.opt.unpack(t)||t;var l,y,h,g=await o.parse(t),w=e.pub||e,d=await n.opt.slow_leak(w),b=f<=n.opt.fallback?a.Buffer.from(await a.subtle.digest({name:"SHA-256"},(new a.TextEncoder).encode(await o.parse(g.m)))):await i(g.m);try{if(l=a.Buffer.from(g.s,u.encode||"base64"),y=new Uint8Array(l),h=await(a.ossl||a.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},d,y,new Uint8Array(b)),!h)throw"Signature did not match."}catch(v){try{l=a.Buffer.from(g.s,"utf8"),y=new Uint8Array(l),h=await(a.ossl||a.subtle).verify({name:"ECDSA",hash:{name:"SHA-256"}},d,y,new Uint8Array(b))}catch(v){if(!h)throw"Signature did not match."}}var m=h?await o.parse(g.m):r;if(c.fall_soul=p["#"],c.fall_key=p["."],c.fall_val=t,c.fall_state=p[">"],s)try{s(m)}catch(v){console.log(v)}return m},n.opt.fallback=2}))(e,"./verify"),e((function(t){var r=e("./shim"),n=e("./settings"),a=e("./sha256");const o=async(t,e,o)=>{o=o||{};const i=t+(e||r.random(8)).toString("utf8"),s=r.Buffer.from(await a(i),"binary"),c=n.keyToJwk(s);return await r.subtle.importKey("jwk",c,{name:"AES-GCM"},!1,["encrypt","decrypt"])};t.exports=o}))(e,"./aeskey"),e((function(t){var r,n=e("./root"),a=e("./shim"),o=(e("./settings"),e("./aeskey"));n.encrypt=n.encrypt||(async(t,e,i,s)=>{try{s=s||{};var c=(e||s).epriv||e;if(r===t)throw"`undefined` not allowed.";if(!c){if(!n.I)throw"No encryption key.";e=await n.I(null,{what:t,how:"encrypt",why:s.why}),c=e.epriv||e}var u="string"==typeof t?t:await a.stringify(t),f={s:a.random(9),iv:a.random(15)},p=await o(c,f.s,s).then((t=>a.subtle.encrypt({name:s.name||"AES-GCM",iv:new Uint8Array(f.iv)},t,(new a.TextEncoder).encode(u)))),l={ct:a.Buffer.from(p,"binary").toString(s.encode||"base64"),iv:f.iv.toString(s.encode||"base64"),s:f.s.toString(s.encode||"base64")};if(s.raw||(l="SEA"+await a.stringify(l)),i)try{i(l)}catch(y){console.log(y)}return l}catch(y){if(console.log(y),n.err=y,n.throw)throw y;return void(i&&i())}}),t.exports=n.encrypt}))(e,"./encrypt"),e((function(t){var r=e("./root"),n=e("./shim"),a=e("./settings"),o=e("./aeskey");r.decrypt=r.decrypt||(async(t,e,i,s)=>{try{s=s||{};var c=(e||s).epriv||e;if(!c){if(!r.I)throw"No decryption key.";e=await r.I(null,{what:t,how:"decrypt",why:s.why}),c=e.epriv||e}var u,f,p,l=await a.parse(t);try{u=n.Buffer.from(l.s,s.encode||"base64"),f=n.Buffer.from(l.iv,s.encode||"base64"),p=n.Buffer.from(l.ct,s.encode||"base64");var y=await o(c,u,s).then((t=>n.subtle.decrypt({name:s.name||"AES-GCM",iv:new Uint8Array(f),tagLength:128},t,new Uint8Array(p))))}catch(g){if("utf8"===s.encode)throw"Could not decrypt";if(r.opt.fallback)return s.encode="utf8",await r.decrypt(t,e,i,s)}var h=await a.parse(new n.TextDecoder("utf8").decode(y));if(i)try{i(h)}catch(g){console.log(g)}return h}catch(g){if(console.log(g),r.err=g,r.throw)throw g;return void(i&&i())}}),t.exports=r.decrypt}))(e,"./decrypt"),e((function(t){var r=e("./root"),n=e("./shim");e("./settings");r.secret=r.secret||(async(t,e,o,i)=>{try{if(i=i||{},!e||!e.epriv||!e.epub){if(!r.I)throw"No secret mix.";e=await r.I(null,{what:t,how:"secret",why:i.why})}var s=t.epub||t,c=e.epub,u=e.epriv,f=n.ossl||n.subtle,p=a(s),l=Object.assign({public:await f.importKey(...p,!0,[])},{name:"ECDH",namedCurve:"P-256"}),y=a(c,u),h=await f.importKey(...y,!1,["deriveBits"]).then((async t=>{var e=await f.deriveBits(l,t,256),r=new Uint8Array(e),n=await f.importKey("raw",r,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"]);return f.exportKey("jwk",n).then((({k:t})=>t))})),g=h;if(o)try{o(g)}catch(w){console.log(w)}return g}catch(w){if(console.log(w),r.err=w,r.throw)throw w;return void(o&&o())}});var a=(t,e)=>{var[r,n]=t.split("."),a=e?{d:e}:{};return["jwk",Object.assign(a,{x:r,y:n,kty:"EC",crv:"P-256",ext:!0}),{name:"ECDH",namedCurve:"P-256"}]};t.exports=r.secret}))(e,"./secret"),e((function(t){var r=e("./root");r.certify=r.certify||(async(t,e={},n,a,o={})=>{try{if(console.log("SEA.certify() is an early experimental community supported method that may change API behavior without warning in any future version."),t=(()=>{var e=[];if(t){if(("string"===typeof t||Array.isArray(t))&&t.indexOf("*")>-1)return"*";if("string"===typeof t)return t;if(Array.isArray(t)){if(1===t.length&&t[0])return"object"===typeof t[0]&&t[0].pub?t[0].pub:"string"===typeof t[0]?t[0]:null;t.map((t=>{"string"===typeof t?e.push(t):"object"===typeof t&&t.pub&&e.push(t.pub)}))}return"object"===typeof t&&t.pub?t.pub:e.length>0?e:null}})(),!t)return console.log("No certificant found.");const c=!o.expiry||"number"!==typeof o.expiry&&"string"!==typeof o.expiry?null:parseFloat(o.expiry),u=(e||{}).read?e.read:null,f=(e||{}).write?e.write:"string"===typeof e||Array.isArray(e)||e["+"]||e["#"]||e["."]||e["="]||e["*"]||e[">"]||e["<"]?e:null,p=(o||{}).block||(o||{}).blacklist||(o||{}).ban||{},l=p.read&&("string"===typeof p.read||(p.read||{})["#"])?p.read:null,y="string"===typeof p?p:p.write&&("string"===typeof p.write||p.write["#"])?p.write:null;if(!u&&!f)return console.log("No policy found.");const h=JSON.stringify({c:t,...c?{e:c}:{},...u?{r:u}:{},...f?{w:f}:{},...l?{rb:l}:{},...y?{wb:y}:{}}),g=await r.sign(h,n,null,{raw:1});var i=g;if(o.raw||(i="SEA"+JSON.stringify(i)),a)try{a(i)}catch(s){console.log(s)}return i}catch(s){if(r.err=s,r.throw)throw s;return void(a&&a())}}),t.exports=r.certify}))(e,"./certify"),e((function(t){var r=e("./shim"),n=e("./root");n.work=e("./work"),n.sign=e("./sign"),n.verify=e("./verify"),n.encrypt=e("./encrypt"),n.decrypt=e("./decrypt"),n.certify=e("./certify"),n.random=n.random||r.random,n.Buffer=n.Buffer||e("./buffer"),n.keyid=n.keyid||(async t=>{try{const e=r.Buffer.concat(t.replace(/-/g,"+").replace(/_/g,"/").split(".").map((t=>r.Buffer.from(t,"base64")))),n=r.Buffer.concat([r.Buffer.from([153,e.length/256,e.length%256]),e]),a=await sha1hash(n),o=r.Buffer.from(a,"binary");return o.toString("hex",o.length-8)}catch(e){throw console.log(e),e}}),((n.window||{}).GUN||{}).SEA=n,t.exports=n}))(e,"./sea"),e((function(t){var r,a,o=e("./sea");function i(t){this._={$:this}}function s(){return r.state().toString(36).replace(".","")}r=o.window?o.window.GUN||{chain:{}}:e((a+""==typeof n?".":"")+"./gun",1),o.GUN=r,i.prototype=function(){function t(){}return t.prototype=r.chain,new t}(),i.prototype.constructor=i,r.chain.user=function(t){var e,r=this,n=r.back(-1);if(t)return t=o.opt.pub((t._||"")["#"])||t,n.get("~"+t);if(e=n.back("user"))return e;n=n._;var a=n,c=a.opt.uuid||s;return(a=(e=a.user=r.chain(new i))._).opt={},a.opt.uuid=function(t){var e=c(),r=n.user;return r&&(r=r.is)&&(r=r.pub)?(e="~"+r+"/"+e,t&&t.call&&t(null,e),e):e},e},r.User=i,i.GUN=r,i.SEA=r.SEA=o,t.exports=i}))(e,"./user"),e((function(t){var r,a=""+r!=typeof window?window.Gun||{chain:{}}:e((""+r===typeof n?".":"")+"./gun",1);a.chain.then=function(t,e){var r=this,n=new Promise((function(t,n){r.once(t,e)}));return t?n.then(t):n}}))(e,"./then"),e((function(t){var r=e("./user"),n=r.SEA,a=r.GUN,o=function(){};r.prototype.create=function(...t){var e,r="object"===typeof t[0]&&(t[0].pub||t[0].epub)?t[0]:"object"===typeof t[1]&&(t[1].pub||t[1].epub)?t[1]:null,i=r&&(r.pub||r.epub)?r.pub:"string"===typeof t[0]?t[0]:null,s=r&&(r.pub||r.epub)?r:i&&"string"===typeof t[1]?t[1]:null,c=t.filter((t=>"function"===typeof t))[0]||null,u=t&&t.length>1&&"object"===typeof t[t.length-1]?t[t.length-1]:{},f=this,p=f._,l=f.back(-1);if((c=c||o,u=u||{},!1!==u.check)&&(i||(e="No user."),(s||"").length<8&&(e="Password too short!"),e))return c({err:a.log(e)}),f;if(p.ing)return(c||o)({err:a.log("User is already being created or authenticated!"),wait:!0}),f;p.ing=!0;var y={};return y.a=function(t){if(y.pubs=t,t&&!u.already){var e={err:a.log("User already created!")};return p.ing=!1,(c||o)(e),void f.leave()}y.salt=String.random(64),n.work(s,y.salt,y.b)},y.b=function(t){y.proof=t,r?y.c(r):n.pair(y.c)},y.c=function(t){var e;y.pair=t||{},(e=p.root.user)&&(e._.sea=t,e.is={pub:t.pub,epub:t.epub,alias:i}),y.data={pub:t.pub},y.d()},y.d=function(){y.data.alias=i,y.e()},y.e=function(){y.data.epub=y.pair.epub,n.encrypt({priv:y.pair.priv,epriv:y.pair.epriv},y.proof,y.f,{raw:1})},y.f=function(t){y.data.auth=JSON.stringify({ek:t,s:y.salt}),y.g(y.data.auth)},y.g=function(t){var e;y.data.auth=y.data.auth||t,l.get(e="~"+y.pair.pub).put(y.data).on(y.h);var r={};r[e]={"#":e},l.get("~@"+i).put(r).get(e).on(y.i)},y.h=function(t,e,r,n){n.off(),y.h.ok=1,y.i()},y.i=function(t,e,n,a){a&&(y.i.ok=1,a.off()),y.h.ok&&y.i.ok&&(p.ing=!1,c({ok:0,pub:y.pair.pub}),o===c&&(r?f.auth(r):f.auth(i,s)))},l.get("~@"+i).once(y.a),f},r.prototype.leave=function(t,e){var r=this,a=r.back(-1)._.user;if(a&&(delete a.is,delete a._.is,delete a._.sea),n.window)try{var o={};o=window.sessionStorage,delete o.recall,delete o.pair}catch(i){}return r}}))(e,"./create"),e((function(t){var r=e("./user"),n=r.SEA,a=r.GUN,o=function(){};function i(t){if("string"!=typeof t)return t;try{t=JSON.parse(t)}catch(e){t={}}return t}r.prototype.auth=function(...t){var e="object"===typeof t[0]&&(t[0].pub||t[0].epub)?t[0]:"object"===typeof t[1]&&(t[1].pub||t[1].epub)?t[1]:null,r=e||"string"!==typeof t[0]?null:t[0],s=r&&"string"===typeof t[1]?t[1]:null,c=t.filter((t=>"function"===typeof t))[0]||null,u=t&&t.length>1&&"object"===typeof t[t.length-1]?t[t.length-1]:{},f=this,p=f._,l=f.back(-1);if(p.ing)return(c||o)({err:a.log("User is already being created or authenticated!"),wait:!0}),f;p.ing=!0;var y,h={};return h.a=function(t){if(!t)return h.b();if(!t.pub){var e=[];return Object.keys(t).forEach((function(r){"_"!=r&&e.push(t[r])})),h.b(e)}if(h.name)return h.f(t);h.c((h.data=t).auth)},h.b=function(t){var e=(h.list=(h.list||[]).concat(t||[])).shift();if(y===e)return h.name?h.err("Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer."):h.err("Wrong user or password.");l.get(e).once(h.a)},h.c=function(t){return y===t?h.b():"string"==typeof t?h.c(i(t)):void n.work(s,(h.auth=t).s,h.d,h.enc)},h.d=function(t){n.decrypt(h.auth.ek,t,h.e,h.enc)},h.e=function(t){if(y===t)return h.enc?(h.enc=null,h.b()):(h.enc={encode:"utf8"},h.c(h.auth));h.half=t,h.f(h.data)},h.f=function(t){var e=h.half||{},r=h.data||{};h.g(h.lol={pub:t.pub||r.pub,epub:t.epub||r.epub,priv:t.priv||e.priv,epriv:t.epriv||e.epriv})},h.g=function(t){if(!t||!t.pub||!t.epub)return h.b();h.pair=t;var e=l._.user,g=e._,w=(g.tag,g.opt);g=e._=l.get("~"+t.pub)._,g.opt=w,e.is={pub:t.pub,epub:t.epub,alias:r||t.pub},g.sea=h.pair,p.ing=!1;try{s&&y==(i(p.root.graph["~"+t.pub].auth)||"")[":"]&&(u.shuffle=u.change=s)}catch(b){}if(u.change?h.z():(c||o)(g),n.window&&(f.back("user")._.opt||u).remember)try{var d={};d=window.sessionStorage,d.recall=!0,d.pair=JSON.stringify(t)}catch(b){}try{l._.tag.auth?l._.on("auth",g):setTimeout((function(){l._.on("auth",g)}),1)}catch(b){a.log("Your 'auth' callback crashed with:",b)}},h.z=function(){h.salt=String.random(64),n.work(u.change,h.salt,h.y)},h.y=function(t){n.encrypt({priv:h.pair.priv,epriv:h.pair.epriv},t,h.x,{raw:1})},h.x=function(t){h.w(JSON.stringify({ek:t,s:h.salt}))},h.w=function(t){if(u.shuffle){console.log("migrate core account from UTF8 & shuffle");var e={};Object.keys(h.data).forEach((function(t){e[t]=h.data[t]})),delete e._,e.auth=t,l.get("~"+h.pair.pub).put(e)}l.get("~"+h.pair.pub).get("auth").put(t,c||o)},h.err=function(t){var e={err:a.log(t||"User cannot be found!")};p.ing=!1,(c||o)(e)},h.plugin=function(t){if(!(h.name=t))return h.err();var e=[t];"~"!==t[0]&&(e[1]="~"+t,e[2]="~@"+t),h.b(e)},e?h.g(e):r?l.get("~@"+r).once(h.a):r||s||n.name(h.plugin),f}}))(e,"./auth"),e((function(t){var r=e("./user"),n=r.SEA;r.GUN;r.prototype.recall=function(t,e){var r=this,a=r.back(-1);if(t=t||{},t&&t.sessionStorage){if(n.window)try{var o={};o=window.sessionStorage,o&&(a._.opt.remember=!0,(r.back("user")._.opt||t).remember=!0,(o.recall||o.pair)&&a.user().auth(JSON.parse(o.pair),e))}catch(i){}return r}return r}}))(e,"./recall"),e((function(t){var r=e("./user"),n=r.SEA,a=r.GUN,o=function(){};r.prototype.pair=function(){var t,e=this;try{t=new Proxy({DANGER:"☠"},{get:function(t,r,n){if(e.is&&(e._||"").sea)return e._.sea[r]}})}catch(r){}return t},r.prototype.delete=async function(t,e,r){console.log("user.delete() IS DEPRECATED AND WILL BE MOVED TO A MODULE!!!");var n=this,i=(n.back(-1),n.back("user"));try{i.auth(t,e,(function(t){(i.is||{}).pub;i.map().once((function(){this.put(null)})),i.leave(),(r||o)({ok:0})}))}catch(s){a.log("User.delete failed! Error:",s)}return n},r.prototype.alive=async function(){console.log("user.alive() IS DEPRECATED!!!");const t=this.back(-1);try{return await authRecall(t),t._.user._}catch(e){const t="No session!";throw a.log(t),{err:t}}},r.prototype.trust=async function(t){console.log("`.trust` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!"),a.is(t)&&t.get("pub").get(((t,e)=>{console.log(t,e)})),t.get("trust").get(path).put(theirPubkey)},r.prototype.grant=function(t,e){console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");var r=this,a=r.back(-1).user(),o=a._.sea,i="";return r.back((function(t){t.is||(i+=t.get||"")})),async function(){var r,s=await a.get("grant").get(o.pub).get(i).then();s=await n.decrypt(s,o),s||(s=n.random(16).toString(),r=await n.encrypt(s,o),a.get("grant").get(o.pub).get(i).put(r));var c=t.get("pub").then(),u=t.get("epub").then();c=await c,u=await u;var f=await n.secret(u,o);r=await n.encrypt(s,f),a.get("grant").get(c).get(i).put(r,e)}(),r},r.prototype.secret=function(t,e){console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");var r=this,a=r.back(-1).user(),o=a.pair(),i="";return r.back((function(t){t.is||(i+=t.get||"")})),async function(){var s,c=await a.get("trust").get(o.pub).get(i).then();c=await n.decrypt(c,o),c||(c=n.random(16).toString(),s=await n.encrypt(c,o),a.get("trust").get(o.pub).get(i).put(s)),s=await n.encrypt(t,c),r.put(s,e)}(),r},t.exports=r}))(e,"./share"),e((function(t){var r,a=e("./sea"),o=e("./settings"),i=function(){},s=""+r!=typeof window?window.Gun||{on:i}:e((""+r===typeof n?".":"")+"./gun",1);function c(t){var e,r=this,n=r.as,o=t.put,i=o["#"],u=o["."],f=o[":"],p=o[">"],l=t["#"];if(i&&u)if((t._||"").faith&&(n.opt||"").faith&&"function"==typeof t._)a.opt.pack(o,(function(e){a.verify(e,!1,(function(e){o["="]=a.opt.unpack(e),r.to.next(t)}))}));else{var y=function(e){n.on("in",{"@":l,err:t.err=e})};(t._||"").DBG&&((t._||"").DBG.c=+new Date),0<=i.indexOf("<?")&&(e=parseFloat(i.split("<?")[1]||""),e&&p<s.state()-1e3*e)?(e=t._)&&e.stun&&e.stun--:"~@"!==i?"~@"!==i.slice(0,2)?(e=a.opt.pub(i))?c.pub(r,t,f,u,i,n,y,n.user||"",e):0<=i.indexOf("#")?c.hash(r,t,f,u,i,n,y):c.any(r,t,f,u,i,n,y,n.user||""):c.pubs(r,t,f,u,i,n,y):c.alias(r,t,f,u,i,n,y)}}s.on("opt",(function(t){t.sea||(t.sea={own:{}},t.on("put",c,t)),this.to.next(t)})),c.hash=function(t,e,r,n,o,i,s){a.work(r,null,(function(r){if(r&&r===n.split("#").slice(-1)[0])return t.to.next(e);s("Data hash not same as hash!")}),{name:"SHA-256"})},c.alias=function(t,e,r,n,a,o,i){return r?"~@"+n===f(r)?t.to.next(e):void i("Alias not same!"):i("Data must exist!")},c.pubs=function(t,e,r,n,a,o,i){return r?n===f(r)?t.to.next(e):void i("Alias not same!"):i("Alias must exist!")},c.pub=async function(t,e,n,i,c,u,p,l,y){var h;const g=await o.parse(n)||{},w=(n,o,u)=>{if(n.m&&n.s&&o&&y)return a.verify(n,y,(n=>{if(r!==n&&r!==n.e&&e.put[">"]&&e.put[">"]>parseFloat(n.e))return p("Certificate expired.");if(r!==n&&n.c&&n.w&&(n.c===o||n.c.indexOf("*")>-1)){let e=c.indexOf("/")>-1?c.replace(c.substring(0,c.indexOf("/")+1),""):"";String.match=String.match||s.text.match;const r=Array.isArray(n.w)?n.w:"object"===typeof n.w||"string"===typeof n.w?[n.w]:[];for(const s of r)if(String.match(e,s["#"])&&String.match(i,s["."])||!s["."]&&String.match(e,s["#"])||!s["#"]&&String.match(i,s["."])||String.match(e?e+"/"+i:i,s["#"]||s)){if(s["+"]&&s["+"].indexOf("*")>-1&&e&&-1==e.indexOf(o)&&-1==i.indexOf(o))return p(`Path "${e}" or key "${i}" must contain string "${o}".`);if(n.wb&&("string"===typeof n.wb||(n.wb||{})["#"])){var a=t.as.root.$.back(-1);return"string"===typeof n.wb&&"~"!==n.wb.slice(0,1)&&(a=a.get("~"+y)),a.get(n.wb).get(o).once((t=>!t||1!==t&&!0!==t?u(n):p(`Certificant ${o} blocked.`)))}return u(n)}return p("Certificate verification fail.")}}))};if("pub"===i&&"~"+y===c)return n===y?t.to.next(e):p("Account not same!");(h=l.is)&&h.pub&&!g["*"]&&!g["+"]&&(y===h.pub||y!==h.pub&&((e._.msg||{}).opt||{}).cert)?a.opt.pack(e.put,(i=>{a.sign(i,l._.sea,(async function(i){if(r===i)return p(a.err||"Signature fail.");if(e.put[":"]={":":h=a.opt.unpack(i.m),"~":i.s},e.put["="]=h,y===l.is.pub)return(h=f(n))&&((u.sea.own[h]=u.sea.own[h]||{})[y]=1),void JSON.stringifyAsync(e.put[":"],(function(r,n){return r?p(r||"Stringify error."):(e.put[":"]=n,t.to.next(e))}));if(y!==l.is.pub&&((e._.msg||{}).opt||{}).cert){const r=await o.parse(e._.msg.opt.cert);r&&r.m&&r.s&&w(r,l.is.pub,(n=>{e.put[":"]["+"]=r,e.put[":"]["*"]=l.is.pub,JSON.stringifyAsync(e.put[":"],(function(r,n){return r?p(r||"Stringify error."):(e.put[":"]=n,t.to.next(e))}))}))}}),{raw:1})})):a.opt.pack(e.put,(n=>{a.verify(n,g["*"]||y,(function(n){var o;return n=a.opt.unpack(n),r===n?p("Unverified data."):((o=f(n))&&y===a.opt.pub(o)&&((u.sea.own[o]=u.sea.own[o]||{})[y]=1),g["+"]&&g["+"]["m"]&&g["+"]["s"]&&g["*"]?void w(g["+"],g["*"],(r=>(e.put["="]=n,t.to.next(e)))):(e.put["="]=n,t.to.next(e)))}))}))},c.any=function(t,e,r,n,a,o,i,s){if(o.opt.secure)return i("Soul missing public key at '"+n+"'.");o.on("secure",(function(e){if(this.off(),!o.opt.secure)return t.to.next(e);i("Data cannot be changed.")})).on.on("secure",e)};var u=s.valid,f=function(t,e){return"string"==typeof(e=u(t))&&e},p=((s.state||"").ify,/[^\w_-]/);a.opt.pub=function(t){if(t&&(t=t.split("~"),t&&(t=t[1])&&(t=t.split(p).slice(0,2),t&&2==t.length&&"@"!==(t[0]||"")[0])))return t=t.slice(0,2).join("."),t},a.opt.stringy=function(t){},a.opt.pack=function(t,e,n,o,i){var c,u;if(a.opt.check(t))return e(t);t&&t["#"]&&t["."]&&t[">"]&&(c=t[":"],u=1),JSON.parseAsync(u?c:t,(function(a,c){var u=r!==(c||"")[":"]&&(c||"")["~"];e(u?{m:{"#":i||t["#"],".":n||t["."],":":(c||"")[":"],">":t[">"]||s.state.is(o,n)},s:u}:t)}))};var l=a.opt;a.opt.unpack=function(t,e,n){var o;if(r!==t){if(t&&r!==(o=t[":"]))return o;if(e=e||l.fall_key,!n&&l.fall_val&&(n={},n[e]=l.fall_val),e&&n){if(t===n[e])return t;if(!a.opt.check(n[e]))return t;var i=n&&n._&&n._["#"]||l.fall_soul,c=s.state.is(n,e)||l.fall_state;return t&&4===t.length&&i===t[0]&&e===t[1]&&y(c)===y(t[3])?t[2]:c<a.opt.shuffle_attack?t:void 0}}},a.opt.shuffle_attack=15463296e5;var y=Math.floor}))(e,"./index")}()}}]);
//# sourceMappingURL=698.aca1359f.js.map