(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7287fada"],{"159b":function(e,n,r){var t=r("da84"),o=r("fdbc"),s=r("785a"),a=r("17c2"),c=r("9112"),u=function(e){if(e&&e.forEach!==a)try{c(e,"forEach",a)}catch(n){e.forEach=a}};for(var i in o)o[i]&&u(t[i]&&t[i].prototype);u(s)},"17c2":function(e,n,r){"use strict";var t=r("b727").forEach,o=r("a640"),s=o("forEach");e.exports=s?[].forEach:function(e){return t(this,e,arguments.length>1?arguments[1]:void 0)}},"4de4":function(e,n,r){"use strict";var t=r("23e7"),o=r("b727").filter,s=r("1dde"),a=s("filter");t({target:"Array",proto:!0,forced:!a},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"7aab":function(e,n,r){"use strict";r.r(n);var t=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[e.paths.length>0?r("div",[e._v("Exploring "+e._s(e.paths.length)+" paths. ")]):e._e(),r("Graph",{attrs:{nodes:e.nodes,links:e.links}}),e._v(" "+e._s(e.pod)+" ")],1)},o=[],s=r("b85c"),a=r("1da1"),c=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("159b"),r("7db0"),r("8a79"),r("b0c0"),r("4de4"),{name:"Visu",components:{Graph:function(){return r.e("chunk-3ae91c72").then(r.bind(null,"46ef"))}},data:function(){return{nodes:[],links:[],paths:[],jump:0}},methods:{explore2:function(e){return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log(e);case 1:case"end":return n.stop()}}),n)})))()},exploreFriends:function(e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t=n,t.jump++,e.friends.forEach(function(){var n=Object(a["a"])(regeneratorRuntime.mark((function n(r){var o,s,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log(r),n.prev=1,void 0==r.webId){n.next=17;break}return o={url:r.webId,name:r.webId,type:"friend",color:"#00ff00",webId:r.webId},console.log(o),n.next=7,t.$getPodInfos(o);case 7:s=n.sent,console.log(s),a=t.nodes.find((function(e){return e.url==o.url})),console.log("exist",a),void 0==a&&t.nodes.push(o),t.links.push({source:e.webId,target:r.webId,label:"friend"}),c={url:s.storage,name:"storage",color:"#ffff00",type:"storage"},t.nodes.push(c),t.links.push({source:r.webId,target:s.storage,label:"storage"}),console.log(t.jump);case 17:console.log("webId undefined",r.webId),n.next=23;break;case 20:n.prev=20,n.t0=n["catch"](1),console.log(n.t0);case 23:case"end":return n.stop()}}),n,null,[[1,20]])})));return function(e){return n.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()},explore:function(e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var t,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(console.log(e),!e.endsWith("card#me")){r.next=7;break}return r.next=4,n.$getPodInfos({webId:e});case 4:t=r.sent,e=t.storage,n.exploreFriends(t);case 7:return o=n,r.next=10,n.$getResources(e);case 10:s=r.sent,s.forEach((function(n){o.nodes.push(n),o.links.push({source:e,target:n.url})}));case 12:case"end":return r.stop()}}),r)})))()},explore1:function(e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var t,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.paths.push(e),r.next=3,n.$getResources(e);case 3:t=r.sent,console.log(t),o=n,t.forEach((function(n){if("folder"==n.type)o.explore(n.url);else if(n.url.endsWith(".jsonld")||"application/ld+json"==n.file.type){n.color="#ffff00";var r=new FileReader;r.onload=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,o,a,c,u,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.jsonld=JSON.parse(r.result),n.name=n.jsonld["ve:name"],console.log("jsonld",n.jsonld["ve:properties"]),t=Object(s["a"])(n.jsonld["ve:properties"]);try{for(t.s();!(o=t.n()).done;){a=o.value,console.log(a),c=Object(s["a"])(a.values);try{for(c.s();!(u=c.n()).done;)i=u.value,console.log(i)}catch(l){c.e(l)}finally{c.f()}}}catch(l){t.e(l)}finally{t.f()}case 5:case"end":return e.stop()}}),e)}))),r.onerror=function(e){console.log(e)},r.readAsText(n.file)}else n.url.endsWith(".ttl")&&(n.color="#00ff00");"inbox"==n.name&&(n.color="#ffffff"),o.nodes.push(n),o.links.push({source:e,target:n.url})})),n.paths=n.paths.filter((function(n){return n!==e}));case 8:case"end":return r.stop()}}),r)})))()}},watch:{pod:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:null!=e.pod?(console.log(e.pod),r={url:e.pod.storage,name:"storage",color:"#ffff00",type:"storage"},e.nodes.push(r),t={url:e.pod.webId,name:e.pod.name||e.pod.webId,color:"#ff0000",type:"webId"},e.nodes.push(t),e.links.push({source:e.pod.webId,target:e.pod.storage,label:"storage"}),e.explore(e.pod.storage),e.exploreFriends(e.pod)):(e.nodes=[],e.links=[]);case 1:case"end":return n.stop()}}),n)})))()},mustExplore:function(){var e=this;if(null!=this.mustExplore){console.log("mustExplore",this.mustExplore);var n=this.nodes.find((function(n){return n.url=e.mustExplore})),r=this.mustExplore;void 0==n&&this.nodes.push({url:r,name:r,color:"#ff00ff",type:"storage"}),this.explore(this.mustExplore)}}},computed:{pod:{get:function(){return this.$store.state.solid.pod},set:function(){}},mustExplore:{get:function(){return this.$store.state.app.mustExplore},set:function(){}}}}),u=c,i=r("2877"),l=Object(i["a"])(u,t,o,!1,null,null,null);n["default"]=l.exports},"7db0":function(e,n,r){"use strict";var t=r("23e7"),o=r("b727").find,s=r("44d2"),a="find",c=!0;a in[]&&Array(1)[a]((function(){c=!1})),t({target:"Array",proto:!0,forced:c},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),s(a)},a640:function(e,n,r){"use strict";var t=r("d039");e.exports=function(e,n){var r=[][e];return!!r&&t((function(){r.call(null,n||function(){throw 1},1)}))}}}]);
//# sourceMappingURL=chunk-7287fada.0f49057f.js.map