(self["webpackChunkagents"]=self["webpackChunkagents"]||[]).push([[755],{9755:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return h}});var r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("div",{ref:"guiDiv",staticStyle:{position:"absolute",top:"500",left:"200","z-index":"2"}}),o("div",{ref:"guiProps",staticStyle:{position:"absolute",top:"200",left:"100","z-index":"2"}}),o("b-modal",{attrs:{id:"modal-field",title:"New Field"},on:{ok:e.addField}},[null!=e.field?o("b-form-input",{attrs:{placeholder:"new property / link"},model:{value:e.field.name,callback:function(n){e.$set(e.field,"name",n)},expression:"field.name"}}):e._e()],1),o("b-modal",{attrs:{id:"modal-brain",title:"Brain"}},[o("b-form-input",{attrs:{placeholder:"Enter the brain name"},model:{value:e.brainName,callback:function(n){e.brainName=n},expression:"brainName"}}),o("b-button",{attrs:{variant:"primary"},on:{click:e.newBrain}},[e._v("New Brain")]),o("b-list-group",{staticStyle:{height:"200px","overflow-y":"scroll"}},e._l(e.brains,(function(n){return o("b-list-group-item",{key:n.id,attrs:{button:""},on:{click:function(o){return e.switchBrain(n)}}},[e._v(" "+e._s(n.name)+" ")])})),1)],1),o("b-modal",{attrs:{id:"modal-properties",title:"Properties"}}),o("b-modal",{attrs:{id:"modal-links",title:"Links"}})],1)},t=[],i=(o(8309),o(4916),o(5306),o(4553),o(1539),o(9714),o(4376)),a=o(9477),d=o(9988),s={name:"Ui",props:["Graph","nodes"],data:function(){return{brain:null,brains:[],brainName:"",field:null,clearing:!1,fieldType:"text",show:!1,currentProp:{},newValue:null,link:{},permissions:null}},mounted:function(){var e=this.$refs.guiDiv;this.gui=new i.GUI({autoPlace:!1}),e.appendChild(this.gui.domElement),this.buildGuiTools()},methods:{updateNodeFolder:function(){null!=this.nodeFolder&&this.gui.removeFolder(this.nodeFolder);var e={openProperties:this.openProperties,openLinks:this.openLinks};this.nodeFolder=this.gui.addFolder("Node"),console.log(this.currentNode),void 0==this.currentNode.age&&(this.currentNode.age=0),void 0==this.currentNode.privacy&&(this.currentNode.privacy=""),this.nodeFolder.add(this.currentNode,"name"),this.nodeFolder.add(this.currentNode,"age"),this.nodeFolder.add(this.currentNode,"privacy"),void 0!=this.currentNode.created&&this.nodeFolder.add(this.currentNode,"created"),this.nodeFolder.add(e,"openProperties").name("Properties"),this.nodeFolder.add(e,"openLinks").name("Links");var n=this;if(void 0!=this.currentNode.color){var o=this.nodeFolder.addColor(this.currentNode,"color").name("Color").listen();o.onChange((function(e){console.log("must update color value",e),n.currentNode.color=e.replace("#","0x")}))}this.nodeFolder.add(this.currentNode,"privacy"),this.nodeFolder.open()},addValue:function(){console.log("new value")},buildGuiNode:function(){var e={message:"props menu",messageLink:"Link menu",speed:.8};this.nodeFolder=this.gui.addFolder("Node");var n=this.nodeFolder.addFolder("Props"),o=this.nodeFolder.addFolder("Links");n.add(e,"message"),o.add(e,"messageLink");var r=n.addFolder("sub");r.add(e,"speed",-5,5)},buildGuiTools:function(){var e={openBrains:this.openBrains,newNeurone:this.newNeurone,resetCamera:this.resetCamera},n=this.gui.addFolder("Tools");n.add(e,"openBrains").name("Brains"),n.add(e,"newNeurone").name("New neurone"),n.add(e,"resetCamera").name("Reset camera"),n.open(),this.gui.open()},buildGuiTest:function(){var e=new a.DvJ,n=new a.vBJ({color:65280,wireframe:!0}),o=new a.Kj0(e,n);this.Graph.scene().add(o);var r={message:"dat.gui",speed:.8,displayOutline:!1,color:"#ff0000"},t=this.gui.addFolder("Test");t.add(o.rotation,"x",0,2*Math.PI),t.add(o.rotation,"y",0,2*Math.PI),t.add(o.rotation,"z",0,2*Math.PI),t.add(r,"message"),t.add(r,"speed",-5,5),t.add(r,"displayOutline");var i=t.addColor(r,"color").name("Color").listen();i.onChange((function(e){o.material.color.setHex(e.replace("#","0x"))}))},openProperties:function(){this.$bvModal.show("modal-properties")},openLinks:function(){this.$bvModal.show("modal-links")},newProperty:function(){console.log("newProperty"),this.field={name:"",category:"ve:properties"},this.$bvModal.show("modal-field")},addField:function(){if(console.log(this.field),0==this.clearing){var e={name:this.field.name,values:[]};void 0==this.currentNode[this.field.category]&&(this.currentNode[this.field.category]=[]);var n=this.currentNode[this.field.category].findIndex((function(n){return n.name==e.name}));-1===n?this.currentNode[this.field.category].push(e):alert(e.name+" already exist")}console.log(this.currentNode),this.updateNodeFolder()},newLink:function(){console.log("newLink"),this.field={name:"",category:"links"},this.$bvModal.show("modal-field")},openBrains:function(){this.$bvModal.show("modal-brain")},newBrain:function(){this.brain=new d.am({name:this.brainName}),console.log(this.brain),this.brains.push(this.brain),this.brainName=""},switchBrain:function(e){console.log(e),this.$emit("switch-brain",e)},newNeurone:function(){console.log("newNeurone");var e=new d.GI({name:"name for graph_"+this.nodes.length,age:0,type:"neurone"});console.log("neurone ",e),this.nodes.push(e),console.log("should make a node autofocus")},resetCamera:function(){this.Graph.cameraPosition({x:0,y:0,z:40},3e3)},randomColor:function(){for(var e="#",n=0;n<6;n++){var o=Math.random(),r=16*o|0;e+=r.toString(16)}return e}},watch:{currentNode:function(){console.log(this.currentNode),this.updateNodeFolder(this.currentNode)}},computed:{currentNode:{get:function(){return this.$store.state.app.currentNode},set:function(){}}}},l=s,u=o(1001),c=(0,u.Z)(l,r,t,!1,null,null,null),h=c.exports},647:function(e,n,o){var r=o(1702),t=o(7908),i=Math.floor,a=r("".charAt),d=r("".replace),s=r("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,n,o,r,c,h){var p=o+e.length,f=r.length,v=u;return void 0!==c&&(c=t(c),v=l),d(h,v,(function(t,d){var l;switch(a(d,0)){case"$":return"$";case"&":return e;case"`":return s(n,0,o);case"'":return s(n,p);case"<":l=c[s(d,1,-1)];break;default:var u=+d;if(0===u)return t;if(u>f){var h=i(u/10);return 0===h?t:h<=f?void 0===r[h-1]?a(d,1):r[h-1]+a(d,1):t}l=r[u-1]}return void 0===l?"":l}))}},5306:function(e,n,o){"use strict";var r=o(2104),t=o(6916),i=o(1702),a=o(7007),d=o(7293),s=o(9670),l=o(614),u=o(9303),c=o(7466),h=o(1340),p=o(4488),f=o(1530),v=o(8173),m=o(647),g=o(7651),b=o(5112),N=b("replace"),w=Math.max,k=Math.min,F=i([].concat),y=i([].push),$=i("".indexOf),x=i("".slice),P=function(e){return void 0===e?e:String(e)},C=function(){return"$0"==="a".replace(/./,"$0")}(),B=function(){return!!/./[N]&&""===/./[N]("a","$0")}(),L=!d((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));a("replace",(function(e,n,o){var i=B?"$":"$0";return[function(e,o){var r=p(this),i=void 0==e?void 0:v(e,N);return i?t(i,e,r,o):t(n,h(r),e,o)},function(e,t){var a=s(this),d=h(e);if("string"==typeof t&&-1===$(t,i)&&-1===$(t,"$<")){var p=o(n,a,d,t);if(p.done)return p.value}var v=l(t);v||(t=h(t));var b=a.global;if(b){var N=a.unicode;a.lastIndex=0}var C=[];while(1){var B=g(a,d);if(null===B)break;if(y(C,B),!b)break;var L=h(B[0]);""===L&&(a.lastIndex=f(d,c(a.lastIndex),N))}for(var M="",G=0,I=0;I<C.length;I++){B=C[I];for(var _=h(B[0]),T=w(k(u(B.index),d.length),0),S=[],z=1;z<B.length;z++)y(S,P(B[z]));var D=B.groups;if(v){var E=F([_],S,T,d);void 0!==D&&y(E,D);var O=h(r(t,void 0,E))}else O=m(_,d,T,S,D,t);T>=G&&(M+=x(d,G,T)+O,G=T+_.length)}return M+x(d,G)}]}),!L||!C||B)}}]);
//# sourceMappingURL=755-legacy.47bcbf18.js.map