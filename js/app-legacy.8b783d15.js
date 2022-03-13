(function(){var e={1661:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1661,e.exports=t},8606:function(e,t,n){"use strict";n(6992),n(8674),n(9601),n(7727),n(4916),n(3123);var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._v(" "+e._s(e.session)+" "),n("br"),n("small",[e._v("0.0.1 - navigation menu")])],1)},a=[],s={name:"App",components:{},created:function(){this.$checkSession()},mounted:function(){},watch:{$route:function(){void 0!=this.$route.query.source&&this.$route.query.source.length>0?this.$processSource(this.$route.query):(this.$store.commit("nodes/setSource",null),this.$checkSession())}},computed:{session:{get:function(){return this.$store.state.solid.session},set:function(){}}}},i=s,u=n(1001),c=(0,u.Z)(i,o,a,!1,null,null,null),l=c.exports,d=n(5205);(0,d.z)("".concat("/agents/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("Agents has been updated, please close the app & re-open")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n(1539),n(8783),n(3948);var p=n(8345),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("NavBar"),n("AppHeader"),n("Visu"),n("FabButton"),n("b-row",[n("b-col"),n("b-col",{staticClass:"col-10 col-md-6 "},[n("b-form-input",{attrs:{placeholder:"pod url"},on:{change:e.onChange},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),n("b-col",[n("b-button",{attrs:{variant:"primary"},on:{click:e.onChange}},[e._v("Explore")])],1)],1),n("GunTest"),e._v(" "+e._s(e.files)+" ")],1)},m=[],h=n(6198),g=(n(5666),{name:"Home",components:{Visu:function(){return n.e(193).then(n.bind(n,8193))},GunTest:function(){return n.e(685).then(n.bind(n,3685))},FabButton:function(){return n.e(857).then(n.bind(n,8857))},NavBar:function(){return n.e(944).then(n.bind(n,3944))},AppHeader:function(){return n.e(809).then(n.bind(n,4809))}},data:function(){return{url:"https://spoggy-test5.solidcommunity.net/public/neurones"}},created:function(){this.$store.dispatch("nodes/getNodes")},methods:{onChange:function(){var e=this;return(0,h.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e.url),e.$store.commit("app/mustExplore",e.url);case 2:case"end":return t.stop()}}),t)})))()}},watch:{nodes:function(){console.log("local nodes",this.nodes)}},computed:{files:{get:function(){return this.$store.state.app.files},set:function(){}},folders:{get:function(){return this.$store.state.app.folders},set:function(){}},nodes:{get:function(){return this.$store.state.nodes.nodes},set:function(){}}}}),v=g,w=(0,u.Z)(v,f,m,!1,null,null,null),b=w.exports;r["default"].use(p.Z);var y,x=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:function(){return n.e(443).then(n.bind(n,4584))}},{path:"/agents",name:"Agents",component:function(){return n.e(353).then(n.bind(n,9315))}}],k=new p.Z({mode:"history",base:"/agents/",routes:x}),R=k,S=n(629),N=function(){return{session:null,pod:null}},$={addWorkspace:function(e,t){return(0,h.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.state.pod.workspaces.push(t),r["default"].prototype.$addWorkspaceToPod(t);case 2:case"end":return n.stop()}}),n)})))()}},O={setPod:function(e,t){console.log("pod",t),e.pod=t},setSession:function(e,t){e.session=t}},j={namespaced:!0,state:N,actions:$,mutations:O},Z=(n(4765),function(){return{world:null,navigation:"preview",brains:{},brain:null,files:[],folders:[],mustExplore:null,currentNode:null,inputObject:null,search:"",header:"tutorial",worlds:[{id:"solid",name:"Solid",status:"enabled",description:"Your data, your choice. Advancing Web standards to empower people.",img:"https://solidproject.org/assets/img/solid-emblem.svg",type:"world",links:[{name:"Solid Project",url:"https://solidproject.org/"},{name:"Forum",url:"https://forum.solidproject.org/"},{name:"Inrupt",url:"https://inrupt.com/"}]},{id:"gun",name:"GunDB",status:"enabled",description:"A decentralized database",img:"https://camo.githubusercontent.com/64213f411349db936a0fa36ef41741b170d4c8d34d1cc0d1c887f7d880838707/68747470733a2f2f636c6475702e636f6d2f5445793979476834356c2e737667",links:[{name:"Doc",url:"https://gun.eco/"}],type:"world"},{id:"html",name:"Html",status:"todo",description:"a basic html world",type:"world"},{id:"ipfs",name:"Ipfs",status:"work in progress",description:"description",type:"world"},{id:"safe",name:"Safe",status:"disabled",description:"description",type:"world"},{id:"notion",name:"Notion",status:"disabled",description:"description",type:"world"},{id:"mld",name:"m-ld",status:"todo",description:"description",type:"world"},{id:"local",name:"local/indexdb",status:"work in progress",description:"description",type:"world"},{id:"meta",name:"Metaverse",status:"disabled",description:"description",type:"world"},{id:"filecoin",name:"filecoin",status:"disabled",description:"description",type:"world"},{id:"robot",name:"Robots",status:"todo",description:"robots",type:"world"},{id:"ia",name:"IA",status:"todo",description:"ia",type:"world"},{id:"quantique",name:"Informatique Quantique",status:"todo",description:"quantique",type:"world"},{id:"semapps",name:"Semapps",status:"todo",description:"",type:"world"},{id:"fediverse",name:"Fediverse",status:"todo",description:"",type:"world"},{id:"blockchain",name:"Blockchain",status:"todo",description:"",type:"world"},{id:"communica",name:"Communica",status:"todo",description:"Explore Wikipedia and other federated queries with Communica",type:"world"},{id:"crdt",name:"Crdt",status:"todo",description:"",type:"world"}]}}),_={},C={setHeader:function(e,t){e.header=t},setBrain:function(e,t){console.log("BRAIN",t),e.brain=t},setWorld:function(e,t){e.header=t.id,e.world=t},setNavigation:function(e,t){e.navigation=t},setBrainGroup:function(e,t){void 0==e.brains[t.world]&&(e.brains[t.world]={}),e.brains[t.world][t.privacy]=t.brains,console.log(e.brains)},setSearch:function(e,t){e.search=t},addFile:function(e,t){e.files.push(t)},addFolder:function(e,t){e.folders.push(t)},mustExplore:function(e,t){e.mustExplore=t},setCurrentNode:function(e,t){null!=t&&"world"==t.type&&this.commit("app/setWorld",t),e.currentNode=t},setInputObject:function(e,t){console.log(t),"commande"==t.type?(e.action={action:e.commands[t.value]},console.log(e.action),void 0==e.action.action&&alert("Warning : Unknown action "+t.value+" , type /h for help")):e.inputObject=t}},E={namespaced:!0,state:Z,actions:_,mutations:C},P=(n(8309),n(4747),n(8862),n(4553),n(1249),n(561),"neuronesdb"),I=1,A={getDb:function(){return(0,h.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){if(y)return e(y);console.log("OPENING DB",y);var n=window.indexedDB.open(P,I);n.onerror=function(e){console.log("Error opening db",e),t("Error")},n.onsuccess=function(t){y=t.target.result,e(y)},n.onupgradeneeded=function(e){console.log("onupgradeneeded");var t=e.target.result;t.createObjectStore("nodes",{keyPath:"id"})}})));case 1:case"end":return e.stop()}}),e)})))()},deleteNode:function(e){var t=this;return(0,h.Z)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getDb();case 2:return r=n.sent,n.abrupt("return",new Promise((function(t){var n=r.transaction(["nodes"],"readwrite");n.oncomplete=function(){t()};var o=n.objectStore("nodes");o.delete(e.id)})));case 4:case"end":return n.stop()}}),n)})))()},clearStore:function(){var e=this;return(0,h.Z)(regeneratorRuntime.mark((function t(){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("clear store"),t.prev=1,t.next=4,e.getDb();case 4:n=t.sent,r=n.transaction(["nodes"],"readwrite"),o=r.objectStore("nodes"),a=o.clear(),a.onsuccess=function(e){console.log(e)},t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),alert(t.t0);case 14:return t.next=16,e.getNodes();case 16:case"end":return t.stop()}}),t,null,[[1,11]])})))()},getNodes:function(){var e=this;return(0,h.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDb();case 2:return n=t.sent,t.abrupt("return",new Promise((function(e){var t=n.transaction(["nodes"],"readonly");t.oncomplete=function(){e(o)};var r=t.objectStore("nodes"),o=[];r.openCursor().onsuccess=function(e){var t=e.target.result;t&&(o.push(t.value),t.continue())}})));case 4:case"end":return t.stop()}}),t)})))()},saveNode:function(e){var t=this;return(0,h.Z)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getDb();case 2:return r=n.sent,n.abrupt("return",new Promise((function(t){var n=r.transaction(["nodes"],"readwrite");n.oncomplete=function(){t()};var o=n.objectStore("nodes");o.put(e)})));case 4:case"end":return n.stop()}}),n)})))()}},B=n(2045),W=function(){return{nodes:[],remoteNodes:[],currentNode:null,notBoth:[],mustUpdate:[],source:null,currentWorkspace:null,editorContent:""}},D={deleteNode:function(e,t){return(0,h.Z)(regeneratorRuntime.mark((function n(){var o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=t.exclude,delete t.exclude,console.log(o),a=confirm("Are you sur you want to delete "+t.name),1!=a){n.next=22;break}if("remote"==o){n.next=18;break}if(null==e.rootState.solid.pod){n.next=17;break}return n.prev=7,n.next=10,r["default"].prototype.$deleteRemote(t);case 10:n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](7),console.log(n.t0);case 15:n.next=18;break;case 17:console.log("is not connected");case 18:if("local"==o){n.next=22;break}return console.log("store is being asked to delete "+t.id,t.name),n.next=22,A.deleteNode(t);case 22:case"end":return n.stop()}}),n,null,[[7,12]])})))()},getNodes:function(e){return(0,h.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.state.nodes=[],t.next=3,A.getNodes();case 3:n=t.sent,n.forEach((function(t){e.state.nodes.push(t)}));case 5:case"end":return t.stop()}}),t)})))()},saveNode:function(e,t){return(0,h.Z)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=t.exclude,delete t.exclude,console.log(o),void 0==t.id&&(t.id=(0,B.Z)()),void 0==t.created&&(t.created=Date.now()),t.updated=Date.now(),"remote"==o){n.next=20;break}if(null==e.rootState.solid.pod){n.next=19;break}return n.prev=8,n.next=11,r["default"].prototype.$createRemote(t);case 11:t=n.sent,n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](8),console.log(n.t0);case 17:n.next=20;break;case 19:console.log("is not connected");case 20:if("local"==o){n.next=24;break}return console.log("store is being asked to save "+JSON.stringify(t)),n.next=24,A.saveNode(t);case 24:case"end":return n.stop()}}),n,null,[[8,14]])})))()},clearStore:function(){return(0,h.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=confirm("Do you want to KEEP all nodes stored on this device ?"),0!=t){e.next=4;break}return e.next=4,A.clearStore();case 4:case"end":return e.stop()}}),e)})))()}},F={setRemotes:function(e,t){console.log("remotes",t),e.remoteNodes=t},setCurrentNode:function(e,t){e.currentNode=t},addNotBoth:function(e,t){var n=e.notBoth.findIndex((function(e){return e.id==t.id}));-1===n&&e.notBoth.push(t)},removeNotBoth:function(e,t){var n=e.notBoth.map((function(e){return e.id})).indexOf(t.id);e.notBoth.splice(n,1)},addMustUpdate:function(e,t){var n=e.mustUpdate.findIndex((function(e){return e.id==t.id}));-1===n&&e.mustUpdate.push(t)},removeMustUpdate:function(e,t){var n=e.mustUpdate.map((function(e){return e.id})).indexOf(t.id);e.mustUpdate.splice(n,1)},setSource:function(e,t){console.log("source",t),e.source=t},setCurrentWorkspace:function(e,t){e.currentWorkspace=t},setEditorContent:function(e,t){e.editorContent=t}},T={namespaced:!0,state:W,actions:D,mutations:F},q=function(){return{gunUser:void 0}},U={},L={setGunUser:function(e,t){console.log(t),e.gunUser=t}},G={namespaced:!0,state:q,actions:U,mutations:L};r["default"].use(S.ZP);var M=new S.ZP.Store({state:{},mutations:{},actions:{},modules:{solid:j,app:E,nodes:T,gun:G}}),H=n(7152),V={en:{message:{hello:"Hello World",chooseWorld:"Choose the world you want to enter"}},fr:{message:{hello:"Salut Tout le monde",chooseWorld:"Choisissez le monde dans lequel vous voulez entrer"}},ja:{message:{hello:"こんにちは、世界",chooseWorld:"入りたい世界を選んでください"}},de:{message:{hello:"Hallo Welt",chooseWorld:"Wählen Sie die Welt, die Sie betreten möchten"}},es:{message:{hello:"Hola Mundo",chooseWorld:"Elige el mundo al que quieres entrar"}},ru:{message:{hello:"Привет мир",chooseWorld:"Выберите мир, в который хотите войти"}}},z=n(9927),Y=(n(6699),n(2023),n(174)),J=n(5287),Q=n(1197),X=n(8992),K=n(3372),ee=n(4305),te={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;e.prototype.$checkSession=(0,h.Z)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ee.handleIncomingRedirect({restorePreviousSession:!0}).then((function(e){if(1==e.isLoggedIn){console.log("Logged in with WebID [".concat(e.webId,"]")),n.commit("solid/setSession",e);var r=ee.getDefaultSession();t.$getPodInfosFromSession(r)}}));case 2:case"end":return e.stop()}}),e)}))),e.prototype.$login=function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("login",t),ee.getDefaultSession().info.isLoggedIn){e.next=4;break}return e.next=4,ee.login({oidcIssuer:t,redirectUrl:window.location.href,clientName:"Verse"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$logout=(0,h.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=ee.getDefaultSession(),e.next=3,t.logout();case 3:n.commit("solid/setSession",null),n.commit("solid/setPod",null);case 5:case"end":return e.stop()}}),e)}))),e.prototype.$getPodInfosFromSession=function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r={},r.logged=t.info.isLoggedIn,!r.logged){e.next=14;break}return r.webId=t.info.webId,e.next=6,this.$getPodInfos(r);case 6:r=e.sent,void 0==r.neuroneStore&&(r.neuroneStore=r.storage+"public/neurones/"),void 0==r.workspaces&&(r.workspaces=[]),n.commit("solid/setPod",r),console.log(r),r.storage,e.next=15;break;case 14:n.commit("solid/setPod",null);case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getPodInfos=function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){var n,r,o,a,s,i,u,c,l,d,p,f,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,Y.OE)(t.webId,{fetch:ee.fetch});case 3:return n=e.sent,e.next=6,(0,J.YY)(n,t.webId);case 6:return r=e.sent,e.next=9,(0,Q.oX)(r,X.xY.name);case 9:return t.name=e.sent,e.next=12,(0,Q.MQ)(r,X.xY.knows).map((function(e){return{webId:e}}));case 12:return t.friends=e.sent,e.next=15,(0,Q.Gr)(r,K.WS.storage);case 15:return t.storage=e.sent,e.next=18,(0,Q.Gr)(r,X.Fv.hasPhoto);case 18:return t.photo=e.sent,t.workspaces=[],o=t.storage+"settings/publicTypeIndex.ttl",e.next=23,(0,Y.OE)(o,{fetch:ee.fetch});case 23:return a=e.sent,e.next=26,(0,J.oY)(a);case 26:s=e.sent,i=!1,u=!1,e.prev=29,l=(0,z.Z)(s);case 31:return e.next=33,l.next();case 33:if(!(i=!(d=e.sent).done)){e.next=51;break}return p=d.value,e.next=37,(0,Q.MQ)(p,"http://www.w3.org/ns/solid/terms#forClass");case 37:if(f=e.sent,!f.includes("https://scenaristeur.github.io/verse#Workspace")){e.next=48;break}return console.log(p),m={},e.next=43,(0,Q.oX)(p,X.AS.name);case 43:return m.name=e.sent,e.next=46,(0,Q.Gr)(p,K.UG.instance);case 46:m.storage=e.sent,t.workspaces.push(m);case 48:i=!1,e.next=31;break;case 51:e.next=57;break;case 53:e.prev=53,e.t0=e["catch"](29),u=!0,c=e.t0;case 57:if(e.prev=57,e.prev=58,!i||null==l.return){e.next=62;break}return e.next=62,l.return();case 62:if(e.prev=62,!u){e.next=65;break}throw c;case 65:return e.finish(62);case 66:return e.finish(57);case 67:e.next=72;break;case 69:e.prev=69,e.t1=e["catch"](0),console.log("erreur",e.t1,t);case 72:return e.next=74,t;case 74:return e.abrupt("return",e.sent);case 75:case"end":return e.stop()}}),e,null,[[0,69],[29,53,57,67],[58,,62,66]])})));return function(t){return e.apply(this,arguments)}}()}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(te);var ne=te,re=n(2032),oe=(n(7852),n(6403)),ae=n(8504),se=n(6805),ie={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;console.log(n),e.prototype.$getResources=function(){var t=(0,h.Z)(regeneratorRuntime.mark((function t(n){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("path",n),r=[],t.prev=2,t.next=5,(0,Y.OE)(n,{fetch:ee.fetch});case 5:return o=t.sent,console.log(o),t.next=9,(0,Y.kQ)(o,{fetch:ee.fetch}).map((function(e){var t={id:e,url:e,parent:n},r=e.split("/");return e.endsWith("/")?(t.name=r[r.length-2],t.type="folder",t.icon="📁",t.parent=n):(t.name=r[r.length-1],t.type="file",t.icon="📄",t.parent=n),t}));case 9:r=t.sent,t.next=18;break;case 12:return t.prev=12,t.t0=t["catch"](2),console.log(t.t0,t.t0.message),t.next=17,e.prototype.$getJsonLd(n);case 17:r=t.sent;case 18:return t.abrupt("return",r);case 19:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}(),e.prototype.$getJsonLd=function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("path",t),n={},e.prev=2,e.next=5,se.documentLoader(t,(function(e){e&&console.log(e)}));case 5:n=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),console.log(e.t0);case 11:return n.jsonld=JSON.parse(n.document),r=n.jsonld["@context"],r.age="ve:age",r.created="ve:created",r.name="ve:name",r.privacy="ve:privacy",r.properties="ve:properties",r.synchronized="ve:synchronized",r.type="ve:type",r.updated="ve:updated",r.url="ve:url",console.log(r),e.next=25,se.compact(n.jsonld,r);case 25:return o=e.sent,n.compacted=o,delete n.document,console.log("DOC",n),e.abrupt("return",n);case 30:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getPermissions=function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.url,e.next=3,(0,oe.hn)(n,{fetch:ee.fetch});case 3:return r=e.sent,e.abrupt("return",r.internal_resourceInfo.permissions);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getResources1=function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){var n,r,o,a,s,i,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.next=3,(0,Y.OE)(t,{fetch:ee.fetch});case 3:return r=e.sent,e.next=6,(0,Y.kQ)(r,{fetch:ee.fetch});case 6:o=e.sent,a=(0,re.Z)(o),e.prev=8,a.s();case 10:if((s=a.n()).done){e.next=21;break}return i=s.value,u={url:i,parent:t},e.next=15,(0,oe.hn)(i,{fetch:ee.fetch});case 15:u.file=e.sent,c=i.split("/"),i.endsWith("/")?(u.name=c[c.length-2],u.type="folder",u.icon="📁"):(u.name=c[c.length-1],u.type="file",u.icon="📄"),n.push(u);case 19:e.next=10;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e["catch"](8),a.e(e.t0);case 26:return e.prev=26,a.f(),e.finish(26);case 29:return e.abrupt("return",n);case 30:case"end":return e.stop()}}),e,null,[[8,23,26,29]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getResource=function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,oe.hn)(t.url,{fetch:ee.fetch});case 2:if(n=e.sent,"application/ld+json"!=n.type){e.next=11;break}return e.next=6,(0,oe.hn)(t.url,{fetch:ee.fetch});case 6:r=e.sent,o=new FileReader,o.onload=(0,h.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.reader=JSON.parse(o.result);case 1:case"end":return e.stop()}}),e)}))),o.onerror=function(e){console.log(e)},o.readAsText(r);case 11:t.file=n,console.log("Reader",t);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$updateFile=function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),n=t.file.type,e.prev=2,e.next=5,(0,oe._u)(t.url,new Blob([t.content],{type:n}),{contentType:n,fetch:ee.fetch});case 5:return r=e.sent,console.log("File saved at ".concat((0,ae.LH)(r))),e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getContent=function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("get content de ",t),e.prev=1,e.next=4,(0,oe.hn)(t,{fetch:ee.fetch});case 4:r=e.sent,o=new FileReader,o.onload=(0,h.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=o.result,console.log("content",t),n.commit("bureau/setContent",t);case 3:case"end":return e.stop()}}),e)}))),o.onerror=function(e){console.log(e)},o.readAsText(r),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$createFolder=function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,Y.Mf)(t,{fetch:ee.fetch});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(ie);var ue=ie,ce={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;console.log(n),e.prototype.$createBrain=function(){var t=(0,h.Z)(regeneratorRuntime.mark((function t(r){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("creation",r),o=[],a=null,t.t0=r.world,t.next="gun"===t.t0?6:12;break;case 6:return a="user"==r.privacy?e.prototype.$gun.user().get("brains"):e.prototype.$gun.get("brains"),a.map().on((function(e,t){console.log(t,e),o.push({key:t,node:e})})),a.set({name:r.name,created:Date.now(),type:r.type}),r.brains=o,console.log("brains",r.brains),t.abrupt("break",13);case 12:console.log("todo");case 13:return n.commit("app/setBrain",r),t.abrupt("return",r);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.prototype.$gunGet=function(){var t=(0,h.Z)(regeneratorRuntime.mark((function t(r){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=[],e.prototype.$gun.get(r.name).map().on((function(e,t){console.log(t,e),o.push({key:t,node:e})})),console.log(o),r.gunNodes=o,console.log(r),n.commit("app/setBrain",r),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.prototype.$saveToGun=function(){var t=(0,h.Z)(regeneratorRuntime.mark((function t(r){var o,a,s,i,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("brain",n.state.gun.brain),o=n.state.gun.brain.name,console.log(r,r.value,r.triple),a=r.triple.object,delete a.__ob__,delete a.__threeObj,s=e.prototype.$gun.get(o).set(a),i=r.triple.subject,delete i.__ob__,delete i.__threeObj,u=r.triple.edge.label,i[u]=s,console.log(i),e.prototype.$gun.get(o).set(i);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(ce);var le=ce,de=n(5069),pe=n(3017),fe=(n(44),n(1885)),me=n(1587),he=n.n(me),ge=n(5402),ve=n.n(ge);r["default"].use(H.Z);var we=V,be=new H.Z({locale:navigator.language.split("-")[0]||"en",fallbackLocale:"en",messages:we});r["default"].use(ne,{store:M}),r["default"].use(ue,{store:M}),r["default"].use(le,{store:M}),r["default"].use(de.XG7),r["default"].use(pe.A7),r["default"].use(fe),r["default"].use(he(),{iconType:"MaterialDesign"}),r["default"].use(ve(),{peers:["https://gun-manhattan.herokuapp.com/gun"]}),r["default"].config.productionTip=!1,new r["default"]({router:R,store:M,i18n:be,render:function(e){return e(l)}}).$mount("#app")},7670:function(){}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var i=!0,u=0;u<r.length;u++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(i=!1,a<s&&(s=a));if(i){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var s={};e=e||[null,t({}),t([]),t(t)];for(var i=2&o&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){s[e]=function(){return r[e]}}));return s["default"]=function(){return r},n.d(a,s),a}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({353:"agents",443:"about"}[e]||e)+"-legacy."+{56:"c074a801",118:"ba486b58",186:"ee87a45f",193:"25dd05a6",202:"61cc75b4",284:"fa980af9",324:"a92b4a74",353:"d0edad65",443:"6d84278f",484:"89581662",500:"a6afdbdf",597:"bf7001e7",610:"ac78a6bd",635:"6917b7a8",685:"30903187",698:"ed8c1230",738:"b18ce01a",761:"bb4225c6",809:"e47e56bf",857:"da8a709a",944:"4ded4e94",988:"a65acc41"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{118:"389bce8c",635:"9af57d6c"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="agents:";n.l=function(r,o,a,s){if(e[r])e[r].push(o);else{var i,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[o];var p=function(t,n){i.onerror=i.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/agents/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var s=n.miniCssF(r),i=n.p+s;if(t(s,i))return o();e(r,i,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={118:1,635:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var s=n.p+n.u(t),i=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};n.l(s,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,s=r[0],i=r[1],u=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(u)var l=u(n)}for(t&&t(r);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkagents"]=self["webpackChunkagents"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8606)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.8b783d15.js.map