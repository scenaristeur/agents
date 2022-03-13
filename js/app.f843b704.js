(function(){var e={1661:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1661,e.exports=t},8559:function(e,t,o){"use strict";var n=o(144),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view"),e._v(" "+e._s(e.session)+" "),o("br"),o("small",[e._v("0.0.1 - navigation menu")])],1)},s=[],a={name:"App",components:{},created(){this.$checkSession()},mounted(){},watch:{$route(){void 0!=this.$route.query.source&&this.$route.query.source.length>0?this.$processSource(this.$route.query):(this.$store.commit("nodes/setSource",null),this.$checkSession())}},computed:{session:{get(){return this.$store.state.solid.session},set(){}}}},i=a,l=o(1001),c=(0,l.Z)(i,r,s,!1,null,null,null),d=c.exports,u=o(5205);(0,u.z)("/agents/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("Agents has been updated, please close the app & re-open")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var p=o(8345),f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("NavBar"),o("AppHeader"),o("Visu"),o("FabButton"),o("GunTest"),e._v(" "+e._s(e.files)+" ")],1)},g=[],m={name:"Home",components:{Visu:()=>o.e(835).then(o.bind(o,1835)),GunTest:()=>o.e(685).then(o.bind(o,3685)),FabButton:()=>o.e(857).then(o.bind(o,8857)),NavBar:()=>o.e(505).then(o.bind(o,5505)),AppHeader:()=>o.e(809).then(o.bind(o,4809))},created(){this.$store.dispatch("nodes/getNodes")},computed:{files:{get(){return this.$store.state.app.files},set(){}},folders:{get(){return this.$store.state.app.folders},set(){}}}},h=m,y=(0,l.Z)(h,f,g,!1,null,null,null),w=y.exports;n["default"].use(p.Z);const v=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:()=>o.e(443).then(o.bind(o,4584))},{path:"/agents",name:"Agents",component:()=>o.e(353).then(o.bind(o,9315))}],b=new p.Z({mode:"history",base:"/agents/",routes:v});var N=b,k=o(629);const S=()=>({session:null,pod:null}),$={async addWorkspace(e,t){e.state.pod.workspaces.push(t),n["default"].prototype.$addWorkspaceToPod(t)}},O={setPod(e,t){console.log("pod",t),e.pod=t},setSession(e,t){e.session=t}};var _={namespaced:!0,state:S,actions:$,mutations:O};const j=()=>({world:null,navigation:"preview",brains:{},brain:null,files:[],folders:[],mustExplore:null,currentNode:null,inputObject:null,search:"",header:"tutorial",gunNode:null,worlds:[{id:"solid",name:"Solid",status:"enabled",description:"Your data, your choice. Advancing Web standards to empower people.",img:"https://solidproject.org/assets/img/solid-emblem.svg",type:"world",links:[{name:"Solid Project",url:"https://solidproject.org/"},{name:"Forum",url:"https://forum.solidproject.org/"},{name:"Inrupt",url:"https://inrupt.com/"}],examples:[{name:"spoggy-5 neurones",value:"https://spoggy-test5.solidcommunity.net/public/"}]},{id:"local",name:"local/indexdb",status:"enabled",description:"description",type:"world"},{id:"gun",name:"GunDB",status:"enabled",description:"A decentralized database",img:"https://camo.githubusercontent.com/64213f411349db936a0fa36ef41741b170d4c8d34d1cc0d1c887f7d880838707/68747470733a2f2f636c6475702e636f6d2f5445793979476834356c2e737667",links:[{name:"Doc",url:"https://gun.eco/"}],type:"world",examples:[{name:"RaN5Dom_neurones",value:"RaN5Dom_neurones"},{name:"test",value:"test"},{name:"my",value:"my"}]},{id:"html",name:"Html",status:"todo",description:"a basic html world",type:"world"},{id:"ipfs",name:"Ipfs",status:"work in progress",description:"description",type:"world"},{id:"safe",name:"Safe",status:"disabled",description:"description",type:"world"},{id:"notion",name:"Notion",status:"disabled",description:"description",type:"world"},{id:"mld",name:"m-ld",status:"todo",description:"description",type:"world"},{id:"meta",name:"Metaverse",status:"disabled",description:"description",type:"world"},{id:"filecoin",name:"filecoin",status:"disabled",description:"description",type:"world"},{id:"robot",name:"Robots",status:"todo",description:"robots",type:"world"},{id:"ia",name:"IA",status:"todo",description:"ia",type:"world"},{id:"quantique",name:"Informatique Quantique",status:"todo",description:"quantique",type:"world"},{id:"semapps",name:"Semapps",status:"todo",description:"",type:"world"},{id:"fediverse",name:"Fediverse",status:"todo",description:"",type:"world"},{id:"blockchain",name:"Blockchain",status:"todo",description:"",type:"world"},{id:"communica",name:"Communica",status:"todo",description:"Explore Wikipedia and other federated queries with Communica",type:"world"},{id:"crdt",name:"Crdt",status:"todo",description:"",type:"world"}]}),E={},x={setHeader(e,t){e.header=t},setBrain(e,t){console.log("BRAIN",t),e.brain=t},setWorld(e,t){e.header=t.id,e.world=t,this.commit("app/setNavigation","preview")},setGunNode(e,t){e.gunNode=t},setNavigation(e,t){e.navigation=t},setBrainGroup(e,t){void 0==e.brains[t.world]&&(e.brains[t.world]={}),e.brains[t.world][t.privacy]=t.brains,console.log(e.brains)},setSearch(e,t){e.search=t},addFile(e,t){e.files.push(t)},addFolder(e,t){e.folders.push(t)},mustExplore(e,t){e.mustExplore=t},setCurrentNode(e,t){null!=t&&"world"==t.type&&(this.commit("app/setNavigation","preview"),this.commit("app/setWorld",t)),e.currentNode=t},setInputObject(e,t){console.log(t),"commande"==t.type?(e.action={action:e.commands[t.value]},console.log(e.action),void 0==e.action.action&&alert("Warning : Unknown action "+t.value+" , type /h for help")):e.inputObject=t}};var C={namespaced:!0,state:j,actions:E,mutations:x};const P="neuronesdb",I=1;let A;var B={async getDb(){return new Promise(((e,t)=>{if(A)return e(A);console.log("OPENING DB",A);let o=window.indexedDB.open(P,I);o.onerror=e=>{console.log("Error opening db",e),t("Error")},o.onsuccess=t=>{A=t.target.result,e(A)},o.onupgradeneeded=e=>{console.log("onupgradeneeded");let t=e.target.result;t.createObjectStore("nodes",{keyPath:"id"})}}))},async deleteNode(e){let t=await this.getDb();return new Promise((o=>{let n=t.transaction(["nodes"],"readwrite");n.oncomplete=()=>{o()};let r=n.objectStore("nodes");r.delete(e.id)}))},async clearStore(){console.log("clear store");try{let n=await this.getDb();var e=n.transaction(["nodes"],"readwrite"),t=e.objectStore("nodes"),o=t.clear();o.onsuccess=function(e){console.log(e)}}catch(n){alert(n)}await this.getNodes()},async getNodes(){let e=await this.getDb();return new Promise((t=>{let o=e.transaction(["nodes"],"readonly");o.oncomplete=()=>{t(r)};let n=o.objectStore("nodes"),r=[];n.openCursor().onsuccess=e=>{let t=e.target.result;t&&(r.push(t.value),t.continue())}}))},async saveNode(e){let t=await this.getDb();return new Promise((o=>{let n=t.transaction(["nodes"],"readwrite");n.oncomplete=()=>{o()};let r=n.objectStore("nodes");r.put(e)}))}},D=o(2045);const W=()=>({nodes:[],remoteNodes:[],currentNode:null,notBoth:[],mustUpdate:[],source:null,currentWorkspace:null,editorContent:""}),F={async deleteNode(e,t){let o=t.exclude;delete t.exclude,console.log(o);let r=confirm("Are you sur you want to delete "+t.name);if(1==r){if("remote"!=o)if(null!=e.rootState.solid.pod)try{await n["default"].prototype.$deleteRemote(t)}catch(s){console.log(s)}else console.log("is not connected");"local"!=o&&(console.log("store is being asked to delete "+t.id,t.name),await B.deleteNode(t))}},async getNodes(e){e.state.nodes=[];let t=await B.getNodes();t.forEach((t=>{e.state.nodes.push(t)}))},async saveNode(e,t){let o=t.exclude;if(delete t.exclude,console.log(o),void 0==t.id&&(t.id=(0,D.Z)()),void 0==t.created&&(t.created=Date.now()),t.updated=Date.now(),"remote"!=o)if(null!=e.rootState.solid.pod)try{t=await n["default"].prototype.$createRemote(t)}catch(r){console.log(r)}else console.log("is not connected");"local"!=o&&(console.log("store is being asked to save "+JSON.stringify(t)),await B.saveNode(t))},async clearStore(){let e=confirm("Do you want to KEEP all nodes stored on this device ?");0==e&&await B.clearStore()}},T={setRemotes(e,t){console.log("remotes",t),e.remoteNodes=t},setCurrentNode(e,t){e.currentNode=t},addNotBoth(e,t){var o=e.notBoth.findIndex((e=>e.id==t.id));-1===o&&e.notBoth.push(t)},removeNotBoth(e,t){var o=e.notBoth.map((e=>e.id)).indexOf(t.id);e.notBoth.splice(o,1)},addMustUpdate(e,t){var o=e.mustUpdate.findIndex((e=>e.id==t.id));-1===o&&e.mustUpdate.push(t)},removeMustUpdate(e,t){var o=e.mustUpdate.map((e=>e.id)).indexOf(t.id);e.mustUpdate.splice(o,1)},setSource(e,t){console.log("source",t),e.source=t},setCurrentWorkspace(e,t){e.currentWorkspace=t},setEditorContent(e,t){e.editorContent=t}};var q={namespaced:!0,state:W,actions:F,mutations:T};const U=()=>({gunUser:void 0}),G={},L={setGunUser(e,t){console.log(t),e.gunUser=t}};var R={namespaced:!0,state:U,actions:G,mutations:L};n["default"].use(k.ZP);var M=new k.ZP.Store({state:{},mutations:{},actions:{},modules:{solid:_,app:C,nodes:q,gun:R}}),H=o(7152),V={en:{message:{hello:"Hello World",chooseWorld:"Choose the world you want to enter"}},fr:{message:{hello:"Salut Tout le monde",chooseWorld:"Choisissez le monde dans lequel vous voulez entrer"}},ja:{message:{hello:"こんにちは、世界",chooseWorld:"入りたい世界を選んでください"}},de:{message:{hello:"Hallo Welt",chooseWorld:"Wählen Sie die Welt, die Sie betreten möchten"}},es:{message:{hello:"Hola Mundo",chooseWorld:"Elige el mundo al que quieres entrar"}},ru:{message:{hello:"Привет мир",chooseWorld:"Выберите мир, в который хотите войти"}}},Z=o(9518),z=o(5287),Y=o(1197),J=o(8992),Q=o(3372),X=o(4305);const K={install(e,t={}){let o=t.store;e.prototype.$checkSession=async function(){await X.handleIncomingRedirect({restorePreviousSession:!0}).then((e=>{if(1==e.isLoggedIn){console.log(`Logged in with WebID [${e.webId}]`),o.commit("solid/setSession",e);let t=X.getDefaultSession();this.$getPodInfosFromSession(t)}}))},e.prototype.$login=async function(e){console.log("login",e),X.getDefaultSession().info.isLoggedIn||await X.login({oidcIssuer:e,redirectUrl:window.location.href,clientName:"Verse"})},e.prototype.$logout=async function(){let e=X.getDefaultSession();await e.logout(),o.commit("solid/setSession",null),o.commit("solid/setPod",null)},e.prototype.$getPodInfosFromSession=async function(e){let t={};t.logged=e.info.isLoggedIn,t.logged?(t.webId=e.info.webId,t=await this.$getPodInfos(t),void 0==t.neuroneStore&&(t.neuroneStore=t.storage+"public/neurones/"),void 0==t.workspaces&&(t.workspaces=[]),o.commit("solid/setPod",t),console.log(t),t.storage):o.commit("solid/setPod",null)},e.prototype.$getPodInfos=async function(e){try{const t=await(0,Z.OE)(e.webId,{fetch:X.fetch});let o=await(0,z.YY)(t,e.webId);e.name=await(0,Y.oX)(o,J.xY.name),e.friends=await(0,Y.MQ)(o,J.xY.knows).map((e=>({webId:e}))),e.storage=await(0,Y.Gr)(o,Q.WS.storage),e.photo=await(0,Y.Gr)(o,J.Fv.hasPhoto),e.workspaces=[];let n=e.storage+"settings/publicTypeIndex.ttl";const r=await(0,Z.OE)(n,{fetch:X.fetch});let s=await(0,z.oY)(r);for await(const a of s){let t=await(0,Y.MQ)(a,"http://www.w3.org/ns/solid/terms#forClass");if(t.includes("https://scenaristeur.github.io/verse#Workspace")){console.log(a);let t={};t.name=await(0,Y.oX)(a,J.AS.name),t.storage=await(0,Y.Gr)(a,Q.UG.instance),e.workspaces.push(t)}}}catch(t){console.log("erreur",t,e)}return await e}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(K);var ee=K,te=o(6403),oe=o(8504),ne=o(6805);const re={install(e,t={}){let o=t.store;console.log(o),e.prototype.$getResources=async function(t){console.log("path",t);let o=[];try{const e=await(0,Z.OE)(t,{fetch:X.fetch});console.log(e),o=await(0,Z.kQ)(e,{fetch:X.fetch}).map((e=>{let o={id:e,url:e,parent:t},n=e.split("/");return e.endsWith("/")?(o.name=n[n.length-2],o.type="folder",o.icon="📁",o.parent=t):(o.name=n[n.length-1],o.type="file",o.icon="📄",o.parent=t),o}))}catch(n){console.log(n,n.message),o=await e.prototype.$getJsonLd(t)}return o},e.prototype.$getJsonLd=async function(e){console.log("path",e);let t={};try{t=await ne.documentLoader(e,(function(e){e&&console.log(e)}))}catch(r){console.log(r)}t.jsonld=JSON.parse(t.document);let o=t.jsonld["@context"];o.age="ve:age",o.created="ve:created",o.name="ve:name",o.privacy="ve:privacy",o.properties="ve:properties",o.synchronized="ve:synchronized",o.type="ve:type",o.updated="ve:updated",o.url="ve:url",console.log(o);const n=await ne.compact(t.jsonld,o);return t.compacted=n,delete t.document,console.log("DOC",t),t},e.prototype.$getPermissions=async function(e){let t=e.url;const o=await(0,te.hn)(t,{fetch:X.fetch});return o.internal_resourceInfo.permissions},e.prototype.$getResources1=async function(e){let t=[];const o=await(0,Z.OE)(e,{fetch:X.fetch});let n=await(0,Z.kQ)(o,{fetch:X.fetch});for(const r of n){let o={url:r,parent:e};o.file=await(0,te.hn)(r,{fetch:X.fetch});let n=r.split("/");r.endsWith("/")?(o.name=n[n.length-2],o.type="folder",o.icon="📁"):(o.name=n[n.length-1],o.type="file",o.icon="📄"),t.push(o)}return t},e.prototype.$getResource=async function(e){const t=await(0,te.hn)(e.url,{fetch:X.fetch});if("application/ld+json"==t.type){const t=await(0,te.hn)(e.url,{fetch:X.fetch}),o=new FileReader;o.onload=async()=>{e.reader=JSON.parse(o.result)},o.onerror=e=>{console.log(e)},o.readAsText(t)}e.file=t,console.log("Reader",e)},e.prototype.$updateFile=async function(e){console.log(e);let t=e.file.type;try{const o=await(0,te._u)(e.url,new Blob([e.content],{type:t}),{contentType:t,fetch:X.fetch});return console.log(`File saved at ${(0,oe.LH)(o)}`),o}catch(o){console.log(o)}},e.prototype.$getContent=async function(e){console.log("get content de ",e);try{const t=await(0,te.hn)(e,{fetch:X.fetch}),n=new FileReader;n.onload=async()=>{let e=n.result;console.log("content",e),o.commit("bureau/setContent",e)},n.onerror=e=>{console.log(e)},n.readAsText(t)}catch(t){console.log(t)}},e.prototype.$createFolder=async function(e){await(0,Z.Mf)(e,{fetch:X.fetch})}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(re);var se=re;const ae={install(e,t={}){let o=t.store;async function n(e){let t=[];var o=e._["#"];return console.log("soul",o),e.map().once((e=>{t.push(e)})),t}console.log(o),e.prototype.$gunExplore=async function(t){console.log(t),console.log("build gun._.graph");let o=e.prototype.$gun.get(t);console.log("Gun Node",o);let r=await n(o);return console.log("graph",r),console.log(e.prototype.$gun),e.prototype.$gun.get(t).open((e=>{console.log("doc",e)})),r},e.prototype.$createBrain=async function(t){console.log("creation",t);let n=[],r=null;switch(t.world){case"gun":r="user"==t.privacy?e.prototype.$gun.user().get("brains"):e.prototype.$gun.get("brains"),r.map().on(((e,t)=>{console.log(t,e),n.push({key:t,node:e})})),r.set({name:t.name,created:Date.now(),type:t.type}),t.brains=n,console.log("brains",t.brains);break;default:console.log("todo")}return o.commit("app/setBrain",t),t},e.prototype.$gunGet=async function(t){let n=[];return e.prototype.$gun.get(t.name).map().on(((e,t)=>{console.log(t,e),n.push({key:t,node:e})})),console.log(n),t.gunNodes=n,console.log(t),o.commit("app/setBrain",t),t},e.prototype.$saveToGun=async function(t){console.log("brain",o.state.gun.brain);let n=o.state.gun.brain.name;console.log(t,t.value,t.triple);let r=t.triple.object;delete r.__ob__,delete r.__threeObj;let s=e.prototype.$gun.get(n).set(r),a=t.triple.subject;delete a.__ob__,delete a.__threeObj;let i=t.triple.edge.label;a[i]=s,console.log(a),e.prototype.$gun.get(n).set(a)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(ae);var ie=ae,le=o(5069),ce=o(3017),de=(o(44),o(1885)),ue=o(1587),pe=o.n(ue),fe=o(5402),ge=o.n(fe);n["default"].use(H.Z);const me=V,he=new H.Z({locale:navigator.language.split("-")[0]||"en",fallbackLocale:"en",messages:me});n["default"].use(ee,{store:M}),n["default"].use(se,{store:M}),n["default"].use(ie,{store:M}),n["default"].use(le.XG7),n["default"].use(ce.A7),n["default"].use(de),n["default"].use(pe(),{iconType:"MaterialDesign"}),o.e(506).then(o.t.bind(o,2597,23)),n["default"].use(ge(),{peers:["https://gun-manhattan.herokuapp.com/gun"]}),n["default"].config.productionTip=!1,new n["default"]({router:N,store:M,i18n:he,render:e=>e(d)}).$mount("#app")},7670:function(){}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,s){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],s=e[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,r,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var s=Object.create(null);o.r(s);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&r&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){a[e]=function(){return n[e]}}));return a["default"]=function(){return n},o.d(s,a),s}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+({353:"agents",443:"about"}[e]||e)+"."+{118:"4f81fa7b",141:"480fee7e",202:"801a1774",205:"35e289a7",284:"fefa4ecf",324:"74791b36",353:"d0edad65",443:"6d84278f",505:"5f42d64e",506:"fd0cece4",553:"34516dd6",597:"da53ef87",610:"fefff927",685:"b6c2acf6",698:"7fdb98eb",738:"49c92ea2",761:"834a518a",806:"4c61ce03",809:"24a8810c",835:"30a3a4f1",857:"92f4e73e",932:"b7136864",976:"78dd8606"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{118:"389bce8c",553:"9af57d6c"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="agents:";o.l=function(n,r,s,a){if(e[n])e[n].push(r);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+s){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+s),i.src=n),e[n]=[r];var p=function(t,o){i.onerror=i.onload=null,clearTimeout(f);var r=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/agents/"}(),function(){var e=function(e,t,o,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(s){if(r.onerror=r.onload=null,"load"===s.type)o();else{var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=i,r.parentNode.removeChild(r),n(l)}};return r.onerror=r.onload=s,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){r=a[n],s=r.getAttribute("data-href");if(s===e||s===t)return r}},n=function(n){return new Promise((function(r,s){var a=o.miniCssF(n),i=o.p+a;if(t(a,i))return r();e(n,i,r,s)}))},r={143:0};o.f.miniCss=function(e,t){var o={118:1,553:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=s);var a=o.p+o.u(t),i=new Error,l=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,r[1](i)}};o.l(a,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,a=n[0],i=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var d=l(o)}for(t&&t(n);c<a.length;c++)s=a[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},n=self["webpackChunkagents"]=self["webpackChunkagents"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(8559)}));n=o.O(n)})();
//# sourceMappingURL=app.f843b704.js.map