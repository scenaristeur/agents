(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ba49074"],{"0cb2":function(e,n,r){var a=r("e330"),t=r("7b0b"),o=Math.floor,i=a("".charAt),d=a("".replace),s=a("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,n,r,a,c,v){var f=r+e.length,h=a.length,p=l;return void 0!==c&&(c=t(c),p=u),d(v,p,(function(t,d){var u;switch(i(d,0)){case"$":return"$";case"&":return e;case"`":return s(n,0,r);case"'":return s(n,f);case"<":u=c[s(d,1,-1)];break;default:var l=+d;if(0===l)return t;if(l>h){var v=o(l/10);return 0===v?t:v<=h?void 0===a[v-1]?i(d,1):a[v-1]+i(d,1):t}u=a[l-1]}return void 0===u?"":u}))}},5319:function(e,n,r){"use strict";var a=r("2ba4"),t=r("c65b"),o=r("e330"),i=r("d784"),d=r("d039"),s=r("825a"),u=r("1626"),l=r("5926"),c=r("50c4"),v=r("577e"),f=r("1d80"),h=r("8aa5"),p=r("dc4a"),g=r("0cb2"),b=r("14c3"),m=r("b622"),w=m("replace"),x=Math.max,$=Math.min,k=o([].concat),G=o([].push),M=o("".indexOf),N=o("".slice),y=function(e){return void 0===e?e:String(e)},I=function(){return"$0"==="a".replace(/./,"$0")}(),C=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),F=!d((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,n,r){var o=C?"$":"$0";return[function(e,r){var a=f(this),o=void 0==e?void 0:p(e,w);return o?t(o,e,a,r):t(n,v(a),e,r)},function(e,t){var i=s(this),d=v(e);if("string"==typeof t&&-1===M(t,o)&&-1===M(t,"$<")){var f=r(n,i,d,t);if(f.done)return f.value}var p=u(t);p||(t=v(t));var m=i.global;if(m){var w=i.unicode;i.lastIndex=0}var I=[];while(1){var C=b(i,d);if(null===C)break;if(G(I,C),!m)break;var F=v(C[0]);""===F&&(i.lastIndex=h(d,c(i.lastIndex),w))}for(var P="",T=0,L=0;L<I.length;L++){C=I[L];for(var O=v(C[0]),S=x($(l(C.index),d.length),0),z=[],D=1;D<C.length;D++)G(z,y(C[D]));var B=C.groups;if(p){var E=k([O],z,S,d);void 0!==B&&G(E,B);var J=v(a(t,void 0,E))}else J=g(O,d,S,z,B,t);S>=T&&(P+=N(d,T,S)+J,T=S+O.length)}return P+N(d,T)}]}),!F||!I||C)},ef88:function(e,n,r){"use strict";r.r(n);var a=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("div",{ref:"guiDiv",staticStyle:{position:"absolute",top:"500",left:"200","z-index":"2"}}),r("div",{ref:"guiProps",staticStyle:{position:"absolute",top:"200",left:"100","z-index":"2"}})])},t=[],o=(r("b0c0"),r("ac1f"),r("5319"),r("d3b7"),r("25f0"),r("8992")),i=r("5a89"),d={name:"Ui",props:["Graph","nodes"],mounted:function(){var e=this.$refs.guiDiv;console.log(e),this.gui=new o["GUI"]({autoPlace:!1}),e.appendChild(this.gui.domElement),this.buildGuiTools(),this.buildGuiNode(),this.buildGuiTest()},methods:{buildGuiNode:function(){var e={message:"props menu",messageLink:"Link menu",speed:.8},n=this.gui.addFolder("Node"),r=n.addFolder("Props"),a=n.addFolder("Links");r.add(e,"message"),a.add(e,"messageLink");var t=r.addFolder("sub");t.add(e,"speed",-5,5)},buildGuiTools:function(){var e={newNeurone:this.newNeurone},n=this.gui.addFolder("Tools");n.add(e,"newNeurone").name("New neurone"),n.open()},buildGuiTest:function(){var e=new i["BoxGeometry"],n=new i["MeshBasicMaterial"]({color:65280,wireframe:!0}),r=new i["Mesh"](e,n);this.Graph.scene().add(r);var a={message:"dat.gui",speed:.8,displayOutline:!1,color:"#ff0000"},t=this.gui.addFolder("Test");t.add(r.rotation,"x",0,2*Math.PI),t.add(r.rotation,"y",0,2*Math.PI),t.add(r.rotation,"z",0,2*Math.PI),t.add(a,"message"),t.add(a,"speed",-5,5),t.add(a,"displayOutline");var o=t.addColor(a,"color").name("Color").listen();o.onChange((function(e){r.material.color.setHex(e.replace("#","0x"))}))},newNeurone:function(){console.log("newNeurone");var e={name:"test",type:void 0,color:this.randomColor()};this.nodes.push(e),this.Graph.graphData({nodes:this.nodes,links:this.links})},randomColor:function(){for(var e="#",n=0;n<6;n++){var r=Math.random(),a=16*r|0;e+=a.toString(16)}return e}}},s=d,u=r("2877"),l=Object(u["a"])(s,a,t,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-0ba49074.941854cd.js.map