(self["webpackChunkagents"]=self["webpackChunkagents"]||[]).push([[681],{4681:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return h}});var t=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",[n("div",{ref:"guiDiv",staticStyle:{position:"absolute",top:"500",left:"200","z-index":"2"}}),n("div",{ref:"guiProps",staticStyle:{position:"absolute",top:"200",left:"100","z-index":"2"}}),n("b-modal",{attrs:{id:"modal-field",title:"New Field"},on:{ok:e.addField}},[null!=e.field?n("b-form-input",{attrs:{placeholder:"new property / link"},model:{value:e.field.name,callback:function(r){e.$set(e.field,"name",r)},expression:"field.name"}}):e._e()],1),n("b-modal",{attrs:{id:"modal-brain",title:"Brain"}},[e._v(" Current World : "+e._s(e.world)+" "),n("b-form-input",{attrs:{placeholder:"Enter the brain name"},model:{value:e.brainName,callback:function(r){e.brainName=r},expression:"brainName"}}),n("b-form-group",{attrs:{label:"New Brain privacy"},scopedSlots:e._u([{key:"default",fn:function(r){var t=r.ariaDescribedby;return[n("b-form-radio",{attrs:{"aria-describedby":t,name:"privacy",value:"public"},model:{value:e.privacy,callback:function(r){e.privacy=r},expression:"privacy"}},[e._v("Public")]),n("b-form-radio",{attrs:{"aria-describedby":t,name:"privacy",value:"user"},model:{value:e.privacy,callback:function(r){e.privacy=r},expression:"privacy"}},[e._v("User")])]}}])}),n("b-button",{attrs:{variant:"primary"},on:{click:e.newBrain}},[e._v("New Brain")]),n("b-list-group",{staticStyle:{height:"200px","overflow-y":"scroll"}},e._l(e.brains,(function(r){return n("b-list-group-item",{key:r.id,attrs:{button:""},on:{click:function(n){return e.switchBrain(r)}}},[e._v(" "+e._s(r.name)+" ")])})),1),e._v(" brains "+e._s(e.brains)+" ")],1),n("b-modal",{attrs:{id:"modal-properties",title:"Properties"}}),n("b-modal",{attrs:{id:"modal-links",title:"Links"}})],1)},o=[],i=(n(8309),n(4916),n(5306),n(4553),n(1539),n(9714),n(4376)),a=n(9477),s=n(9988),d={name:"Ui",props:["Graph","nodes"],data:function(){return{brain:null,brainName:"",field:null,clearing:!1,fieldType:"text",show:!1,currentProp:{},newValue:null,link:{},permissions:null,privacy:"public"}},mounted:function(){var e=this.$refs.guiDiv;this.gui=new i.GUI({autoPlace:!1}),e.appendChild(this.gui.domElement),this.buildGuiTools()},methods:{updateNodeFolder:function(){null!=this.nodeFolder&&this.gui.removeFolder(this.nodeFolder);var e={openProperties:this.openProperties,openLinks:this.openLinks};this.nodeFolder=this.gui.addFolder("Node"),console.log(this.currentNode),void 0==this.currentNode.age&&(this.currentNode.age=0),void 0==this.currentNode.privacy&&(this.currentNode.privacy=""),this.nodeFolder.add(this.currentNode,"name"),this.nodeFolder.add(this.currentNode,"age"),this.nodeFolder.add(this.currentNode,"privacy"),void 0!=this.currentNode.created&&this.nodeFolder.add(this.currentNode,"created"),this.nodeFolder.add(e,"openProperties").name("Properties"),this.nodeFolder.add(e,"openLinks").name("Links");var r=this;if(void 0!=this.currentNode.color){var n=this.nodeFolder.addColor(this.currentNode,"color").name("Color").listen();n.onChange((function(e){console.log("must update color value",e),r.currentNode.color=e.replace("#","0x")}))}this.nodeFolder.add(this.currentNode,"privacy"),this.nodeFolder.open()},addValue:function(){console.log("new value")},buildGuiNode:function(){var e={message:"props menu",messageLink:"Link menu",speed:.8};this.nodeFolder=this.gui.addFolder("Node");var r=this.nodeFolder.addFolder("Props"),n=this.nodeFolder.addFolder("Links");r.add(e,"message"),n.add(e,"messageLink");var t=r.addFolder("sub");t.add(e,"speed",-5,5)},buildGuiTools:function(){var e={openBrains:this.openBrains,newNeurone:this.newNeurone,resetCamera:this.resetCamera},r=this.gui.addFolder("Tools");r.add(e,"openBrains").name("Brains"),r.add(e,"newNeurone").name("New neurone"),r.add(e,"resetCamera").name("Reset camera"),r.open(),this.gui.open()},buildGuiTest:function(){var e=new a.DvJ,r=new a.vBJ({color:65280,wireframe:!0}),n=new a.Kj0(e,r);this.Graph.scene().add(n);var t={message:"dat.gui",speed:.8,displayOutline:!1,color:"#ff0000"},o=this.gui.addFolder("Test");o.add(n.rotation,"x",0,2*Math.PI),o.add(n.rotation,"y",0,2*Math.PI),o.add(n.rotation,"z",0,2*Math.PI),o.add(t,"message"),o.add(t,"speed",-5,5),o.add(t,"displayOutline");var i=o.addColor(t,"color").name("Color").listen();i.onChange((function(e){n.material.color.setHex(e.replace("#","0x"))}))},openProperties:function(){this.$bvModal.show("modal-properties")},openLinks:function(){this.$bvModal.show("modal-links")},newProperty:function(){console.log("newProperty"),this.field={name:"",category:"ve:properties"},this.$bvModal.show("modal-field")},addField:function(){if(console.log(this.field),0==this.clearing){var e={name:this.field.name,values:[]};void 0==this.currentNode[this.field.category]&&(this.currentNode[this.field.category]=[]);var r=this.currentNode[this.field.category].findIndex((function(r){return r.name==e.name}));-1===r?this.currentNode[this.field.category].push(e):alert(e.name+" already exist")}console.log(this.currentNode),this.updateNodeFolder()},newLink:function(){console.log("newLink"),this.field={name:"",category:"links"},this.$bvModal.show("modal-field")},openBrains:function(){this.$bvModal.show("modal-brain")},newBrain:function(){this.brain=new s.am({name:this.brainName,world:this.world,privacy:this.privacy}),this.$createBrain(this.brain),this.brainName=""},switchBrain:function(e){console.log(e),this.$gunGet(e),this.$emit("switch-brain",e)},newNeurone:function(){console.log("newNeurone");var e=new s.GI({name:"name for graph_"+this.nodes.length,age:0,type:"neurone"});console.log("neurone ",e),this.nodes.push(e),console.log("should make a node autofocus")},resetCamera:function(){this.Graph.cameraPosition({x:0,y:0,z:40},3e3)},randomColor:function(){for(var e="#",r=0;r<6;r++){var n=Math.random(),t=16*n|0;e+=t.toString(16)}return e}},watch:{currentNode:function(){console.log(this.currentNode),this.updateNodeFolder(this.currentNode)},world:function(){this.$bvModal.show("modal-brain")},brains:function(){console.log("must update",this.brains)}},computed:{currentNode:{get:function(){return this.$store.state.app.currentNode},set:function(){}},brains:{get:function(){return this.$store.state.app.brains},set:function(){}},world:{get:function(){return this.$store.state.app.world},set:function(){}}}},l=d,u=n(1001),c=(0,u.Z)(l,t,o,!1,null,null,null),h=c.exports},647:function(e,r,n){var t=n(1702),o=n(7908),i=Math.floor,a=t("".charAt),s=t("".replace),d=t("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,n,t,c,h){var p=n+e.length,f=t.length,v=u;return void 0!==c&&(c=o(c),v=l),s(h,v,(function(o,s){var l;switch(a(s,0)){case"$":return"$";case"&":return e;case"`":return d(r,0,n);case"'":return d(r,p);case"<":l=c[d(s,1,-1)];break;default:var u=+s;if(0===u)return o;if(u>f){var h=i(u/10);return 0===h?o:h<=f?void 0===t[h-1]?a(s,1):t[h-1]+a(s,1):o}l=t[u-1]}return void 0===l?"":l}))}},5306:function(e,r,n){"use strict";var t=n(2104),o=n(6916),i=n(1702),a=n(7007),s=n(7293),d=n(9670),l=n(614),u=n(9303),c=n(7466),h=n(1340),p=n(4488),f=n(1530),v=n(8173),m=n(647),g=n(7651),b=n(5112),w=b("replace"),N=Math.max,y=Math.min,k=i([].concat),F=i([].push),$=i("".indexOf),x=i("".slice),P=function(e){return void 0===e?e:String(e)},C=function(){return"$0"==="a".replace(/./,"$0")}(),_=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),B=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));a("replace",(function(e,r,n){var i=_?"$":"$0";return[function(e,n){var t=p(this),i=void 0==e?void 0:v(e,w);return i?o(i,e,t,n):o(r,h(t),e,n)},function(e,o){var a=d(this),s=h(e);if("string"==typeof o&&-1===$(o,i)&&-1===$(o,"$<")){var p=n(r,a,s,o);if(p.done)return p.value}var v=l(o);v||(o=h(o));var b=a.global;if(b){var w=a.unicode;a.lastIndex=0}var C=[];while(1){var _=g(a,s);if(null===_)break;if(F(C,_),!b)break;var B=h(_[0]);""===B&&(a.lastIndex=f(s,c(a.lastIndex),w))}for(var M="",L=0,G=0;G<C.length;G++){_=C[G];for(var I=h(_[0]),S=N(y(u(_.index),s.length),0),T=[],z=1;z<_.length;z++)F(T,P(_[z]));var D=_.groups;if(v){var E=k([I],T,S,s);void 0!==D&&F(E,D);var O=h(t(o,void 0,E))}else O=m(I,s,S,T,D,o);S>=L&&(M+=x(s,L,S)+O,L=S+I.length)}return M+x(s,L)}]}),!B||!C||_)}}]);
//# sourceMappingURL=681-legacy.39dd5614.js.map