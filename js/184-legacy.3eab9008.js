(self["webpackChunkagents"]=self["webpackChunkagents"]||[]).push([[184],{4184:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.paths.length>0?t("div",[e._v("Exploring "+e._s(e.paths.length)+" paths. ")]):e._e(),t("CommandInput"),"preview"==e.navigation&&null!=e.currentNode?t("Node"):e._e(),t("Graph",{attrs:{nodes:e.nodes,links:e.links,graphNeedUpdate:e.graphNeedUpdate},on:{update:function(n){e.graphNeedUpdate=n}}}),t("b-button",{on:{click:e.clear}},[e._v("clear")]),t("b-button",{on:{click:e.save}},[e._v("save")]),e._v(" "+e._s(e.pod)+" ")],1)},r=[],s=t(9726);function i(e){if(Array.isArray(e))return e}t(2526),t(1817),t(1539),t(2165),t(8783),t(3948);function u(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,r,s=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(o=t.next()).done);i=!0)if(s.push(o.value),n&&s.length===n)break}catch(a){u=!0,r=a}finally{try{i||null==t["return"]||t["return"]()}finally{if(u)throw r}}return s}}var a=t(8936);t(1703);function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,n){return i(e)||u(e,n)||(0,a.Z)(e,n)||c()}var d=t(2032),f=t(6198),h=(t(5666),t(4553),t(9600),t(4916),t(3123),t(3210),t(4747),t(9826),t(7852),t(8309),t(7327),t(9720),t(1249),t(2479),t(2045)),p={name:"Visu",components:{Graph:function(){return t.e(684).then(t.bind(t,684))},CommandInput:function(){return Promise.all([t.e(566),t.e(186)]).then(t.bind(t,8932))},Node:function(){return Promise.all([t.e(566),t.e(78)]).then(t.bind(t,3976))}},data:function(){return{links:[],paths:[],jump:0,graphNeedUpdate:!1,gunCpt:0,gunNodes:{},gunLinks:[]}},mounted:function(){console.log("MUST TAKE A LOOK AT COMMUNICA !"),this.showWorlds()},methods:{explore2:function(e){return(0,f.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log(e);case 1:case"end":return n.stop()}}),n)})))()},onInputObjectChange:function(e){var n,t,o;switch(console.log("onCommand",e),e.type){case"triplet":n=this.nodeFromLabel(e.value.subject),this.saveNode(n),t=this.nodeFromLabel(e.value.object),this.saveNode(t),console.log(n.id,t.id),o=this.edgeFromLabel({source:n.id,target:t.id,label:e.value.predicate}),console.log(o),this.saveEdge(o),e.triple={subject:n,edge:o,object:t},this.$saveToGun(e);break;case"url":console.log(e);break;default:console.log("TODO",e)}},saveNode:function(e){var n=this.nodes.findIndex((function(n){return n.id==e.id}));-1===n?this.nodes.push(e):Object.assign(this.nodes[n],e),this.sendUpdate(e)},saveEdge:function(e){console.log(e),console.log(this.links),this.links.push(e),console.log(this.nodes,this.links),this.sendUpdate(e)},nodeFromLabel:function(e){var n="#"+e.trim().split(" ").join("_");return{id:n,name:e,age:0,type:"neurone"}},edgeFromLabel:function(e){return console.log(e),{source:e.source,target:e.target,label:e.label}},sendUpdate:function(e){var n=this;return(0,f.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e),console.log("le json",n.json);case 2:case"end":return t.stop()}}),t)})))()},exploreFriends:function(e){var n=this;return(0,f.Z)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=n,o.jump++,e.friends.forEach(function(){var n=(0,f.Z)(regeneratorRuntime.mark((function n(t){var r,s,i,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log(t),n.prev=1,void 0==t.webId){n.next=17;break}return r={url:t.webId,name:t.webId,type:"friend",color:"#00ff00",webId:t.webId},console.log(r),n.next=7,o.$getPodInfos(r);case 7:s=n.sent,console.log(s),i=o.nodes.find((function(e){return e.url==r.url})),console.log("exist",i),void 0==i&&o.nodes.push(r),o.links.push({source:e.webId,target:t.webId,label:"friend"}),u={url:s.storage,name:"storage",color:"#ffff00",type:"storage"},o.nodes.push(u),o.links.push({source:t.webId,target:s.storage,label:"storage"}),console.log(o.jump);case 17:console.log("webId undefined",t.webId),n.next=23;break;case 20:n.prev=20,n.t0=n["catch"](1),console.log(n.t0);case 23:case"end":return n.stop()}}),n,null,[[1,20]])})));return function(e){return n.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()},explore:function(e){var n=this;return(0,f.Z)(regeneratorRuntime.mark((function t(){var o,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e),!e.endsWith("card#me")){t.next=7;break}return t.next=4,n.$getPodInfos({webId:e});case 4:o=t.sent,e=o.storage,n.exploreFriends(o);case 7:return r=n,t.next=10,n.$getResources(e);case 10:s=t.sent,void 0!=s.compacted?n.processJsonld(s):s.forEach(function(){var n=(0,f.Z)(regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("file"!=t.type){n.next=4;break}return console.log("on entre ici",t),n.next=4,r.$getResource(t);case 4:console.log(t),r.nodes.push(t),r.links.push({source:e,target:t.url});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 12:case"end":return t.stop()}}),t)})))()},processJsonld:function(e){for(var n="".concat(e.compacted.url),t=-1,o=0;o<this.nodes.length;o++){var r=this.nodes[o];r.url==n&&(t=o,Object.assign(this.nodes[t],e.compacted),this.graphNeedUpdate=!0)}},explore1:function(e){var n=this;return(0,f.Z)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.paths.push(e),t.next=3,n.$getResources(e);case 3:o=t.sent,console.log(o),r=n,o.forEach((function(n){if("folder"==n.type)r.explore(n.url);else if(n.url.endsWith(".jsonld")||"application/ld+json"==n.file.type){n.color="#ffff00";var t=new FileReader;t.onload=(0,f.Z)(regeneratorRuntime.mark((function e(){var o,r,s,i,u,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.jsonld=JSON.parse(t.result),n.name=n.jsonld["name"],console.log("jsonld",n.jsonld["properties"]),o=(0,d.Z)(n.jsonld["properties"]);try{for(o.s();!(r=o.n()).done;){s=r.value,console.log(s),i=(0,d.Z)(s.values);try{for(i.s();!(u=i.n()).done;)a=u.value,console.log(a)}catch(c){i.e(c)}finally{i.f()}}}catch(c){o.e(c)}finally{o.f()}case 5:case"end":return e.stop()}}),e)}))),t.onerror=function(e){console.log(e)},t.readAsText(n.file)}else n.url.endsWith(".ttl")&&(n.color="#00ff00");"inbox"==n.name&&(n.color="#ffffff"),r.nodes.push(n),r.links.push({source:e,target:n.url})})),n.paths=n.paths.filter((function(n){return n!==e}));case 8:case"end":return t.stop()}}),t)})))()},showWorlds:function(){var e=this;console.log(this.worlds),this.savedWorld={nodes:this.nodes,links:this.links},this.nodes=[],this.links=[],Object.assign(this.nodes,this.worlds),this.nodes.push({id:"worlds",name:"Worlds",color:"#ffff00",type:"univers"}),this.worlds.forEach((function(n){var t=e.nodes.find((function(e){return e.id===n.status})),o="enabled"==n.status?"#00ff00":"#ff0000";void 0==t&&e.nodes.push({id:n.status,name:n.status,color:o,type:"status"}),e.links.push({source:n.id,target:n.status,label:"status"}),e.links.push({source:"worlds",target:n.status})}))},gunNodeLoop1:function(e,n){console.log(e,n);var t=this.nodes.find((function(e){return e.id==n}));console.log("node parent",t);for(var o=(0,h.Z)(),r={id:o},i=0,u=Object.entries(e);i<u.length;i++){var a=l(u[i],2),c=a[0],d=a[1];switch(console.log(c,(0,s.Z)(d),d),(0,s.Z)(d)){case"string":case"number":case"boolean":t[c]=d;var f=this.nodes.findIndex((function(e){return e.id==t.id}));-1===f?this.nodes.push(t):Object.assign(this.nodes[f],t);break;case"object":this.nodes.push(r),this.links.push({source:n,target:r.id,label:c}),this.gunNodeLoop(d,r.id);break;default:console.log("no handler for ",(0,s.Z)(d))}}},readGunNode:function(e,n){var t=this;n++;var o=this;console.log(n,"soul",e);var r={id:e,name:e};this.gunNodes[e]=r;var s=this.nodes.findIndex((function(e){return e.id==r.id}));-1===s?this.nodes.push(r):Object.assign(this.nodes[s],r),console.log(n,Object.entries(o.gunNodes).length),n<3&&Object.entries(o.gunNodes).length<50&&this.$gun.get(e).map((function(r,s){if(null!=r&&void 0!=r._){var i=r._["#"];t.readGunNode(i,n);var u={source:e,target:i,label:s};o.gunLinks.push(u)}else null!=r&&(t.gunNodes[e][s]=r)}));for(var i=function(){var e=a[u];c=t.nodes.findIndex((function(n){return n.id==e.id})),-1===c?t.nodes.push(e):Object.assign(t.nodes[c],e)},u=0,a=Object.values(this.gunNodes);u<a.length;u++){var c;i()}console.log("done read gun"),this.graphNeedUpdate=!0},clear:function(){while(this.links.length>0)this.links.shift();while(this.nodes.length>0)this.nodes.shift()},save:function(){console.log("todo")}},watch:{gunNode1:function(){var e=0;this.gunNodes={},this.readGunNode(this.gunNode.id,e),console.log("DONEGUN ")},gunNode:function(){var e=this,n=this.nodes.findIndex((function(n){return n.id==e.gunNode.id}));-1===n?this.nodes.push(this.gunNode):Object.assign(this.nodes[n],this.gunNode);var t=this.nodes.find((function(n){return n.id==e.gunNode.id}));console.log("n",t),this.$gun.get(this.gunNode.id).once((function(e){console.log(e)}))},gunNode2:function(){var e=this;console.log(this.gunNode);var n=this.nodes.findIndex((function(n){return n.id==e.gunNode.id}));-1===n?this.nodes.push(this.gunNode):Object.assign(this.nodes[n],this.gunNode),"brain"==this.gunNode.type&&this.$gun.get(this.gunNode.id).load((function(e){console.log("doc",e),console.log("done")}))},pod:function(){var e=this;return(0,f.Z)(regeneratorRuntime.mark((function n(){var t,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:null!=e.pod?(console.log(e.pod),t={url:e.pod.storage,name:"storage",color:"#ffff00",type:"storage"},e.nodes.push(t),o={url:e.pod.webId,name:e.pod.name||e.pod.webId,color:"#ff0000",type:"webId"},e.nodes.push(o),e.links.push({source:e.pod.webId,target:e.pod.storage,label:"storage"}),e.explore(e.pod.storage),e.exploreFriends(e.pod)):(e.nodes=[],e.links=[]);case 1:case"end":return n.stop()}}),n)})))()},mustExplore:function(){var e=this;if(null!=this.mustExplore){console.log("mustExplore",this.mustExplore);var n=this.nodes.find((function(n){return n.url=e.mustExplore})),t=this.mustExplore;console.log("exist ? ",n),void 0==n&&this.nodes.push({id:t,url:t,name:t,color:"#ff00ff",type:"storage"}),this.explore(this.mustExplore)}},inputObject:function(){this.onInputObjectChange(this.inputObject)},worlds:function(){this.showWorlds()}},computed:{pod:{get:function(){return this.$store.state.solid.pod},set:function(){}},mustExplore:{get:function(){return this.$store.state.app.mustExplore},set:function(){}},inputObject:{get:function(){return this.$store.state.app.inputObject},set:function(){}},nodes:{get:function(){return this.$store.state.nodes.nodes},set:function(){}},worlds:{get:function(){return this.$store.state.app.worlds},set:function(){}},navigation:{get:function(){return this.$store.state.app.navigation},set:function(){}},currentNode:{get:function(){return this.$store.state.app.currentNode},set:function(){}},gunNode:{get:function(){return this.$store.state.app.gunNode},set:function(){}}}},g=p,v=t(1001),m=(0,v.Z)(g,o,r,!1,null,null,null),b=m.exports},4699:function(e,n,t){var o=t(9781),r=t(1702),s=t(1956),i=t(5656),u=t(5296).f,a=r(u),c=r([].push),l=function(e){return function(n){var t,r=i(n),u=s(r),l=u.length,d=0,f=[];while(l>d)t=u[d++],o&&!a(r,t)||c(f,e?[t,r[t]]:r[t]);return f}};e.exports={entries:l(!0),values:l(!1)}},6091:function(e,n,t){var o=t(6530).PROPER,r=t(7293),s=t(1361),i="​᠎";e.exports=function(e){return r((function(){return!!s[e]()||i[e]()!==i||o&&s[e].name!==e}))}},3111:function(e,n,t){var o=t(1702),r=t(4488),s=t(1340),i=t(1361),u=o("".replace),a="["+i+"]",c=RegExp("^"+a+a+"*"),l=RegExp(a+a+"*$"),d=function(e){return function(n){var t=s(r(n));return 1&e&&(t=u(t,c,"")),2&e&&(t=u(t,l,"")),t}};e.exports={start:d(1),end:d(2),trim:d(3)}},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},7327:function(e,n,t){"use strict";var o=t(2109),r=t(2092).filter,s=t(1194),i=s("filter");o({target:"Array",proto:!0,forced:!i},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},9826:function(e,n,t){"use strict";var o=t(2109),r=t(2092).find,s=t(1223),i="find",u=!0;i in[]&&Array(1)[i]((function(){u=!1})),o({target:"Array",proto:!0,forced:u},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s(i)},9600:function(e,n,t){"use strict";var o=t(2109),r=t(1702),s=t(8361),i=t(5656),u=t(9341),a=r([].join),c=s!=Object,l=u("join",",");o({target:"Array",proto:!0,forced:c||!l},{join:function(e){return a(i(this),void 0===e?",":e)}})},9720:function(e,n,t){var o=t(2109),r=t(4699).entries;o({target:"Object",stat:!0},{entries:function(e){return r(e)}})},2479:function(e,n,t){var o=t(2109),r=t(4699).values;o({target:"Object",stat:!0},{values:function(e){return r(e)}})},3210:function(e,n,t){"use strict";var o=t(2109),r=t(3111).trim,s=t(6091);o({target:"String",proto:!0,forced:s("trim")},{trim:function(){return r(this)}})},9726:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});t(2526),t(1817),t(1539),t(2165),t(8783),t(3948);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}}}]);
//# sourceMappingURL=184-legacy.3eab9008.js.map