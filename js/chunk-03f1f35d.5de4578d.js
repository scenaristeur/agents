(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03f1f35d"],{"0cb2":function(e,n,o){var r=o("e330"),t=o("7b0b"),d=Math.floor,a=r("".charAt),i=r("".replace),s=r("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,n,o,r,c,h){var f=o+e.length,v=r.length,p=u;return void 0!==c&&(c=t(c),p=l),i(h,p,(function(t,i){var l;switch(a(i,0)){case"$":return"$";case"&":return e;case"`":return s(n,0,o);case"'":return s(n,f);case"<":l=c[s(i,1,-1)];break;default:var u=+i;if(0===u)return t;if(u>v){var h=d(u/10);return 0===h?t:h<=v?void 0===r[h-1]?a(i,1):r[h-1]+a(i,1):t}l=r[u-1]}return void 0===l?"":l}))}},5319:function(e,n,o){"use strict";var r=o("2ba4"),t=o("c65b"),d=o("e330"),a=o("d784"),i=o("d039"),s=o("825a"),l=o("1626"),u=o("5926"),c=o("50c4"),h=o("577e"),f=o("1d80"),v=o("8aa5"),p=o("dc4a"),m=o("0cb2"),g=o("14c3"),w=o("b622"),F=w("replace"),N=Math.max,b=Math.min,y=d([].concat),k=d([].push),x=d("".indexOf),$=d("".slice),P=function(e){return void 0===e?e:String(e)},C=function(){return"$0"==="a".replace(/./,"$0")}(),L=function(){return!!/./[F]&&""===/./[F]("a","$0")}(),M=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));a("replace",(function(e,n,o){var d=L?"$":"$0";return[function(e,o){var r=f(this),d=void 0==e?void 0:p(e,F);return d?t(d,e,r,o):t(n,h(r),e,o)},function(e,t){var a=s(this),i=h(e);if("string"==typeof t&&-1===x(t,d)&&-1===x(t,"$<")){var f=o(n,a,i,t);if(f.done)return f.value}var p=l(t);p||(t=h(t));var w=a.global;if(w){var F=a.unicode;a.lastIndex=0}var C=[];while(1){var L=g(a,i);if(null===L)break;if(k(C,L),!w)break;var M=h(L[0]);""===M&&(a.lastIndex=v(i,c(a.lastIndex),F))}for(var I="",G=0,T=0;T<C.length;T++){L=C[T];for(var z=h(L[0]),O=N(b(u(L.index),i.length),0),S=[],_=1;_<L.length;_++)k(S,P(L[_]));var A=L.groups;if(p){var D=y([z],S,O,i);void 0!==A&&k(D,A);var B=h(r(t,void 0,D))}else B=m(z,i,O,S,A,t);O>=G&&(I+=$(i,G,O)+B,G=O+z.length)}return I+$(i,G)}]}),!M||!C||L)},c740:function(e,n,o){"use strict";var r=o("23e7"),t=o("b727").findIndex,d=o("44d2"),a="findIndex",i=!0;a in[]&&Array(1)[a]((function(){i=!1})),r({target:"Array",proto:!0,forced:i},{findIndex:function(e){return t(this,e,arguments.length>1?arguments[1]:void 0)}}),d(a)},ef88:function(e,n,o){"use strict";o.r(n);var r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("div",{ref:"guiDiv",staticStyle:{position:"absolute",top:"500",left:"200","z-index":"2"}}),o("div",{ref:"guiProps",staticStyle:{position:"absolute",top:"200",left:"100","z-index":"2"}}),o("b-modal",{attrs:{id:"modal-field",title:"New Field"},on:{ok:e.addField}},[null!=e.field?o("b-form-input",{attrs:{placeholder:"new property / link"},model:{value:e.field.name,callback:function(n){e.$set(e.field,"name",n)},expression:"field.name"}}):e._e()],1)],1)},t=[],d=(o("b0c0"),o("ac1f"),o("5319"),o("c740"),o("d3b7"),o("25f0"),o("8992")),a=o("5a89"),i=o("7997"),s={name:"Ui",props:["Graph","nodes"],data:function(){return{field:null,clearing:!1,fieldType:"text",show:!1,currentProp:{},newValue:null,link:{},permissions:null}},mounted:function(){var e=this.$refs.guiDiv;this.gui=new d["GUI"]({autoPlace:!1}),e.appendChild(this.gui.domElement),this.buildGuiTools()},methods:{updateNodeFolder:function(){null!=this.nodeFolder&&this.gui.removeFolder(this.nodeFolder),this.nodeFolder=this.gui.addFolder("Node"),console.log(this.currentNode),this.nodeFolder.add(this.currentNode,"ve:name"),this.nodeFolder.add(this.currentNode,"ve:age"),this.nodeFolder.add(this.currentNode,"ve:type"),this.nodeFolder.add(this.currentNode,"ve:url"),this.nodeFolder.add(this.currentNode,"ve:privacy"),this.nodeFolder.add(this.currentNode,"ve:created");var e=this.nodeFolder.addFolder("Properties"),n=this.nodeFolder.addFolder("Links"),o={newProperty:this.newProperty,newLink:this.newLink,message:"props menu",messageLink:"Link menu",speed:.8};e.add(o,"newProperty").name("New property"),n.add(o,"newLink").name("New link"),e.add(o,"message"),n.add(o,"messageLink");var r=e.addFolder("sub");r.add(o,"speed",-5,5);var t=this,d=this.nodeFolder.addColor(this.currentNode,"color").name("Color").listen();d.onChange((function(e){console.log("must update color value",e),t.currentNode.color=e})),this.nodeFolder.open()},buildGuiNode:function(){var e={message:"props menu",messageLink:"Link menu",speed:.8};this.nodeFolder=this.gui.addFolder("Node");var n=this.nodeFolder.addFolder("Props"),o=this.nodeFolder.addFolder("Links");n.add(e,"message"),o.add(e,"messageLink");var r=n.addFolder("sub");r.add(e,"speed",-5,5)},buildGuiTools:function(){var e={newNeurone:this.newNeurone,resetCamera:this.resetCamera},n=this.gui.addFolder("Tools");n.add(e,"newNeurone").name("New neurone"),n.add(e,"resetCamera").name("Reset camera"),n.open()},buildGuiTest:function(){var e=new a["BoxGeometry"],n=new a["MeshBasicMaterial"]({color:65280,wireframe:!0}),o=new a["Mesh"](e,n);this.Graph.scene().add(o);var r={message:"dat.gui",speed:.8,displayOutline:!1,color:"#ff0000"},t=this.gui.addFolder("Test");t.add(o.rotation,"x",0,2*Math.PI),t.add(o.rotation,"y",0,2*Math.PI),t.add(o.rotation,"z",0,2*Math.PI),t.add(r,"message"),t.add(r,"speed",-5,5),t.add(r,"displayOutline");var d=t.addColor(r,"color").name("Color").listen();d.onChange((function(e){o.material.color.setHex(e.replace("#","0x"))}))},newProperty:function(){console.log("newProperty"),this.field={name:"",category:"ve:properties"},this.$bvModal.show("modal-field")},addField:function(){if(console.log(this.field),0==this.clearing){var e={name:this.field.name,values:[]};void 0==this.currentNode[this.field.category]&&(this.currentNode[this.field.category]=[]);var n=this.currentNode[this.field.category].findIndex((function(n){return n.name==e.name}));-1===n?this.currentNode[this.field.category].push(e):alert(e.name+" already exist")}console.log(this.currentNode)},newLink:function(){console.log("newLink"),this.field={name:"",category:"ve:links"},this.$bvModal.show("modal-field")},newNeurone:function(){console.log("newNeurone");var e=new i["Factory"];console.log("Test import neurone-factory ",e);var n=e.create();console.log("neurone ",n);var o=n._data;void 0==o["ve:name"]&&(o["ve:name"]="test"),void 0==o["color"]&&(o["color"]=this.randomColor()),this.nodes.push(o),this.Graph.graphData({nodes:this.nodes,links:this.links}),console.log("should make a node autofocus")},resetCamera:function(){this.Graph.cameraPosition({x:0,y:0,z:40},3e3)},randomColor:function(){for(var e="#",n=0;n<6;n++){var o=Math.random(),r=16*o|0;e+=r.toString(16)}return e}},watch:{currentNode:function(){console.log(this.currentNode),this.updateNodeFolder(this.currentNode)}},computed:{currentNode:{get:function(){return this.$store.state.app.currentNode},set:function(){}}}},l=s,u=o("2877"),c=Object(u["a"])(l,r,t,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-03f1f35d.5de4578d.js.map