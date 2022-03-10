(self["webpackChunkagents"]=self["webpackChunkagents"]||[]).push([[830],{7830:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.paths.length>0?t("div",[e._v("Exploring "+e._s(e.paths.length)+" paths. ")]):e._e(),t("CommandInput"),t("Graph",{attrs:{nodes:e.nodes,links:e.links}}),e._v(" "+e._s(e.pod)+" ")],1)},o=[],s=t(2032),i=t(6198),u=(t(5666),t(1539),t(8783),t(3948),t(4553),t(9600),t(4916),t(3123),t(3210),t(4747),t(9826),t(7852),t(8309),t(7327),{name:"Visu",components:{Graph:function(){return t.e(58).then(t.bind(t,5058))},CommandInput:function(){return Promise.all([t.e(988),t.e(186)]).then(t.bind(t,8932))}},data:function(){return{links:[],paths:[],jump:0}},created:function(){console.log("MUST TAKE A LOOK AT COMMUNICA !")},methods:{explore2:function(e){return(0,i.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log(e);case 1:case"end":return n.stop()}}),n)})))()},onInputObjectChange:function(e){var n,t,r;switch(console.log("onCommand",e),e.type){case"triplet":n=this.nodeFromLabel(e.value.subject),this.saveNode(n),t=this.nodeFromLabel(e.value.object),this.saveNode(t),console.log(n.id,t.id),r=this.edgeFromLabel({source:n.id,target:t.id,label:e.value.predicate}),console.log(r),this.saveEdge(r),e.triple={subject:n,edge:r,object:t},this.$saveToGun(e);break;case"url":console.log(e);break;default:console.log("TODO",e)}},saveNode:function(e){var n=this.nodes.findIndex((function(n){return n.id==e.id}));-1===n?this.nodes.push(e):Object.assign(this.nodes[n],e),this.sendUpdate(e)},saveEdge:function(e){console.log(e),console.log(this.links),this.links.push(e),console.log(this.nodes,this.links),this.sendUpdate(e)},nodeFromLabel:function(e){var n="#"+e.trim().split(" ").join("_");return{id:n,name:e,age:0,type:"neurone"}},edgeFromLabel:function(e){return console.log(e),{source:e.source,target:e.target,label:e.label}},sendUpdate:function(e){var n=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e),console.log("le json",n.json);case 2:case"end":return t.stop()}}),t)})))()},exploreFriends:function(e){var n=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=n,r.jump++,e.friends.forEach(function(){var n=(0,i.Z)(regeneratorRuntime.mark((function n(t){var o,s,i,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log(t),n.prev=1,void 0==t.webId){n.next=17;break}return o={url:t.webId,name:t.webId,type:"friend",color:"#00ff00",webId:t.webId},console.log(o),n.next=7,r.$getPodInfos(o);case 7:s=n.sent,console.log(s),i=r.nodes.find((function(e){return e.url==o.url})),console.log("exist",i),void 0==i&&r.nodes.push(o),r.links.push({source:e.webId,target:t.webId,label:"friend"}),u={url:s.storage,name:"storage",color:"#ffff00",type:"storage"},r.nodes.push(u),r.links.push({source:t.webId,target:s.storage,label:"storage"}),console.log(r.jump);case 17:console.log("webId undefined",t.webId),n.next=23;break;case 20:n.prev=20,n.t0=n["catch"](1),console.log(n.t0);case 23:case"end":return n.stop()}}),n,null,[[1,20]])})));return function(e){return n.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()},explore:function(e){var n=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var r,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e),!e.endsWith("card#me")){t.next=7;break}return t.next=4,n.$getPodInfos({webId:e});case 4:r=t.sent,e=r.storage,n.exploreFriends(r);case 7:return o=n,t.next=10,n.$getResources(e);case 10:s=t.sent,s.forEach(function(){var n=(0,i.Z)(regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("file"!=t.type){n.next=3;break}return n.next=3,o.$getResource(t);case 3:console.log(t),o.nodes.push(t),o.links.push({source:e,target:t.url});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 12:case"end":return t.stop()}}),t)})))()},explore1:function(e){var n=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.paths.push(e),t.next=3,n.$getResources(e);case 3:r=t.sent,console.log(r),o=n,r.forEach((function(n){if("folder"==n.type)o.explore(n.url);else if(n.url.endsWith(".jsonld")||"application/ld+json"==n.file.type){n.color="#ffff00";var t=new FileReader;t.onload=(0,i.Z)(regeneratorRuntime.mark((function e(){var r,o,i,u,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.jsonld=JSON.parse(t.result),n.name=n.jsonld["name"],console.log("jsonld",n.jsonld["properties"]),r=(0,s.Z)(n.jsonld["properties"]);try{for(r.s();!(o=r.n()).done;){i=o.value,console.log(i),u=(0,s.Z)(i.values);try{for(u.s();!(a=u.n()).done;)c=a.value,console.log(c)}catch(l){u.e(l)}finally{u.f()}}}catch(l){r.e(l)}finally{r.f()}case 5:case"end":return e.stop()}}),e)}))),t.onerror=function(e){console.log(e)},t.readAsText(n.file)}else n.url.endsWith(".ttl")&&(n.color="#00ff00");"inbox"==n.name&&(n.color="#ffffff"),o.nodes.push(n),o.links.push({source:e,target:n.url})})),n.paths=n.paths.filter((function(n){return n!==e}));case 8:case"end":return t.stop()}}),t)})))()}},watch:{pod:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:null!=e.pod?(console.log(e.pod),t={url:e.pod.storage,name:"storage",color:"#ffff00",type:"storage"},e.nodes.push(t),r={url:e.pod.webId,name:e.pod.name||e.pod.webId,color:"#ff0000",type:"webId"},e.nodes.push(r),e.links.push({source:e.pod.webId,target:e.pod.storage,label:"storage"}),e.explore(e.pod.storage),e.exploreFriends(e.pod)):(e.nodes=[],e.links=[]);case 1:case"end":return n.stop()}}),n)})))()},mustExplore:function(){var e=this;if(null!=this.mustExplore){console.log("mustExplore",this.mustExplore);var n=this.nodes.find((function(n){return n.url=e.mustExplore})),t=this.mustExplore;console.log("exist ? ",n),void 0==n&&this.nodes.push({url:t,name:t,color:"#ff00ff",type:"storage"}),this.explore(this.mustExplore)}},inputObject:function(){this.onInputObjectChange(this.inputObject)},nodes:function(){console.log("local nodes",this.nodes),this.nodes.forEach((function(e){console.log(e.id,e.name,e.url)}))}},computed:{pod:{get:function(){return this.$store.state.solid.pod},set:function(){}},mustExplore:{get:function(){return this.$store.state.app.mustExplore},set:function(){}},inputObject:{get:function(){return this.$store.state.app.inputObject},set:function(){}},nodes:{get:function(){return this.$store.state.nodes.nodes},set:function(){}}}}),a=u,c=t(1001),l=(0,c.Z)(a,r,o,!1,null,null,null),f=l.exports},6091:function(e,n,t){var r=t(6530).PROPER,o=t(7293),s=t(1361),i="​᠎";e.exports=function(e){return o((function(){return!!s[e]()||i[e]()!==i||r&&s[e].name!==e}))}},3111:function(e,n,t){var r=t(1702),o=t(4488),s=t(1340),i=t(1361),u=r("".replace),a="["+i+"]",c=RegExp("^"+a+a+"*"),l=RegExp(a+a+"*$"),f=function(e){return function(n){var t=s(o(n));return 1&e&&(t=u(t,c,"")),2&e&&(t=u(t,l,"")),t}};e.exports={start:f(1),end:f(2),trim:f(3)}},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},7327:function(e,n,t){"use strict";var r=t(2109),o=t(2092).filter,s=t(1194),i=s("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},9826:function(e,n,t){"use strict";var r=t(2109),o=t(2092).find,s=t(1223),i="find",u=!0;i in[]&&Array(1)[i]((function(){u=!1})),r({target:"Array",proto:!0,forced:u},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),s(i)},9600:function(e,n,t){"use strict";var r=t(2109),o=t(1702),s=t(8361),i=t(5656),u=t(9341),a=o([].join),c=s!=Object,l=u("join",",");r({target:"Array",proto:!0,forced:c||!l},{join:function(e){return a(i(this),void 0===e?",":e)}})},3210:function(e,n,t){"use strict";var r=t(2109),o=t(3111).trim,s=t(6091);r({target:"String",proto:!0,forced:s("trim")},{trim:function(){return o(this)}})}}]);
//# sourceMappingURL=830-legacy.2d2ce37e.js.map