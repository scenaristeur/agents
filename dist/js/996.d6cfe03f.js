"use strict";(self["webpackChunkagents"]=self["webpackChunkagents"]||[]).push([[996],{996:function(e,s,o){o.r(s),o.d(s,{default:function(){return a}});var t=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",[e.paths.length>0?o("div",[e._v("Exploring "+e._s(e.paths.length)+" paths. ")]):e._e(),o("CommandInput"),o("Graph",{attrs:{nodes:e.nodes,links:e.links,graphNeedUpdate:e.graphNeedUpdate},on:{update:function(s){e.graphNeedUpdate=s}}}),o("Node"),e._v(" "+e._s(e.pod)+" ")],1)},l=[],n={name:"Visu",components:{Graph:()=>o.e(608).then(o.bind(o,6608)),CommandInput:()=>o.e(932).then(o.bind(o,8932)),Node:()=>o.e(395).then(o.bind(o,3395))},data(){return{links:[],paths:[],jump:0,graphNeedUpdate:!1}},mounted(){console.log("MUST TAKE A LOOK AT COMMUNICA !"),this.showWorlds()},methods:{async explore2(e){console.log(e)},onInputObjectChange(e){let s,o,t;switch(console.log("onCommand",e),e.type){case"triplet":s=this.nodeFromLabel(e.value.subject),this.saveNode(s),o=this.nodeFromLabel(e.value.object),this.saveNode(o),console.log(s.id,o.id),t=this.edgeFromLabel({source:s.id,target:o.id,label:e.value.predicate}),console.log(t),this.saveEdge(t),e.triple={subject:s,edge:t,object:o},this.$saveToGun(e);break;case"url":console.log(e);break;default:console.log("TODO",e)}},saveNode(e){var s=this.nodes.findIndex((s=>s.id==e.id));-1===s?this.nodes.push(e):Object.assign(this.nodes[s],e),this.sendUpdate(e)},saveEdge(e){console.log(e),console.log(this.links),this.links.push(e),console.log(this.nodes,this.links),this.sendUpdate(e)},nodeFromLabel(e){let s="#"+e.trim().split(" ").join("_");return{id:s,name:e,age:0,type:"neurone"}},edgeFromLabel(e){return console.log(e),{source:e.source,target:e.target,label:e.label}},async sendUpdate(e){console.log(e),console.log("le json",this.json)},async exploreFriends(e){let s=this;s.jump++,e.friends.forEach((async function(o){console.log(o);try{if(void 0!=o.webId){let t={url:o.webId,name:o.webId,type:"friend",color:"#00ff00",webId:o.webId};console.log(t);let l=await s.$getPodInfos(t);console.log(l);let n=s.nodes.find((e=>e.url==t.url));console.log("exist",n),void 0==n&&s.nodes.push(t),s.links.push({source:e.webId,target:o.webId,label:"friend"});let r={url:l.storage,name:"storage",color:"#ffff00",type:"storage"};s.nodes.push(r),s.links.push({source:o.webId,target:l.storage,label:"storage"}),console.log(s.jump)}console.log("webId undefined",o.webId)}catch(t){console.log(t)}}))},async explore(e){if(console.log(e),e.endsWith("card#me")){let s=await this.$getPodInfos({webId:e});e=s.storage,this.exploreFriends(s)}let s=this,o=await this.$getResources(e);void 0!=o.compacted?this.processJsonld(o):o.forEach((async function(o){if("file"==o.type){console.log("on entre ici",o),await s.$getResource(o);let e=await s.$getJsonLd(o.url);console.log(e)}console.log(o),s.nodes.push(o),s.links.push({source:e,target:o.url})}))},processJsonld(e){let s=`${e.compacted.url}`,o=-1;for(let t=0;t<this.nodes.length;t++){let l=this.nodes[t];l.url==s&&(o=t,Object.assign(this.nodes[o],e.compacted),this.graphNeedUpdate=!0)}},async explore1(e){this.paths.push(e);let s=await this.$getResources(e);console.log(s);let o=this;s.forEach((function(s){if("folder"==s.type)o.explore(s.url);else if(s.url.endsWith(".jsonld")||"application/ld+json"==s.file.type){s.color="#ffff00";const e=new FileReader;e.onload=async()=>{s.jsonld=JSON.parse(e.result),s.name=s.jsonld["name"],console.log("jsonld",s.jsonld["properties"]);for(const e of s.jsonld["properties"]){console.log(e);for(const s of e.values)console.log(s)}},e.onerror=e=>{console.log(e)},e.readAsText(s.file)}else s.url.endsWith(".ttl")&&(s.color="#00ff00");"inbox"==s.name&&(s.color="#ffffff"),o.nodes.push(s),o.links.push({source:e,target:s.url})})),this.paths=this.paths.filter((s=>s!==e))},showWorlds(){console.log(this.worlds)}},watch:{async pod(){if(null!=this.pod){console.log(this.pod);let e={url:this.pod.storage,name:"storage",color:"#ffff00",type:"storage"};this.nodes.push(e);let s={url:this.pod.webId,name:this.pod.name||this.pod.webId,color:"#ff0000",type:"webId"};this.nodes.push(s),this.links.push({source:this.pod.webId,target:this.pod.storage,label:"storage"}),this.explore(this.pod.storage),this.exploreFriends(this.pod)}else this.nodes=[],this.links=[]},mustExplore(){if(null!=this.mustExplore){console.log("mustExplore",this.mustExplore);let e=this.nodes.find((e=>e.url=this.mustExplore)),s=this.mustExplore;console.log("exist ? ",e),void 0==e&&this.nodes.push({url:s,name:s,color:"#ff00ff",type:"storage"}),this.explore(this.mustExplore)}},inputObject(){this.onInputObjectChange(this.inputObject)},worlds(){this.showWorlds()}},computed:{pod:{get(){return this.$store.state.solid.pod},set(){}},mustExplore:{get(){return this.$store.state.app.mustExplore},set(){}},inputObject:{get(){return this.$store.state.app.inputObject},set(){}},nodes:{get(){return this.$store.state.nodes.nodes},set(){}},worlds:{get(){return this.$store.state.app.worlds},set(){}}}},r=n,i=o(1001),d=(0,i.Z)(r,t,l,!1,null,null,null),a=d.exports}}]);
//# sourceMappingURL=996.d6cfe03f.js.map