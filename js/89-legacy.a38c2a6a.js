(self["webpackChunkagents"]=self["webpackChunkagents"]||[]).push([[89],{89:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Gun test "),n("b-input",{attrs:{placeholder:"type a command and press enter"},on:{change:function(e){return t.command()}},model:{value:t.command_input,callback:function(e){t.command_input=e},expression:"command_input"}}),n("h3",[t._v("Some possible commands")]),t._m(0),t._v(" Result : "+t._s(t.last)+" "),n("b-input",{model:{value:t.newDo,callback:function(e){t.newDo=e},expression:"newDo"}}),n("b-button",{on:{click:t.add}},[t._v("Add")]),n("ul",t._l(t.todos,(function(e,o){return n("li",{key:o},[t._v(" "+t._s(o)+" : "+t._s(e.title||e.GrosTitre))])})),0),n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},on:{input:t.updateText},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),n("b-input",{model:{value:t.speak_text,callback:function(e){t.speak_text=e},expression:"speak_text"}}),n("b-button",{on:{click:t.speak}},[t._v("Speak")]),t._v(" causette : "+t._s(t.causette)+" ")],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("my.object.name = truc")]),n("li",[t._v("cat my.object.name")]),n("li",[t._v('my.object.test = {"og": "gro", "trif": "gr", "gft": 5}')]),n("li",[t._v("cat my.object.test.og")])])}],a=n(2032),i=(n(1249),n(4916),n(5306),n(8757),n(3210),n(3123),n(561),n(9600),{name:"GunTest",components:{},data:function(){return{todos:{},newDo:"",command_input:"",last:{key:"",value:""},text:"",speak_text:"",causette:[]}},mounted:function(){var t=this,e=String.fromCharCode(13,10);this.$gun.get("RaN5Dom_todos").map().on((function(e,n){t.todos[n]=e}));var n={name:"RaN5Dom_neurones"};this.$gunGet(n),this.$gun.get("RaN5Dom_text").once((function(n){void 0!=n&&(t.text=n.text.replaceAll("\\n",e))})),this.$gun.get("RaN5Dom_text").on((function(n){console.log("Receiving Update"),console.log(n),t.text=n.text.replaceAll("\\n",e)})),this.$gun.on("auth",(function(t){console.log("auth",t)}))},methods:{speak:function(){console.log("speak_text",this.speak_text),void 0!=this.gunUser?(this.$gun.user().get("said").set(this.speak_text),this.speak_text=""):alert("you should 'Gun Login' to speak! ")},add:function(){this.$gun.get("RaN5Dom_todos").set({GrosTitre:this.newDo}),this.newDo=""},command:function(){var t={};t.fullCommand=this.command_input.trim(),t.commandArray=t.fullCommand.split(" "),t.first=t.commandArray[0],console.log("command",t),"="==t.commandArray[1]&&this.set(t),"cat"==t.commandArray[0]&&this.cat(t),this.command_input=""},cat:function(t){var e=this,n=t.commandArray[1];console.log("lecture de ",n);var o,r=n.split("."),i=void 0,s=(0,a.Z)(r);try{for(s.s();!(o=s.n()).done;){var u=o.value;console.log(u),i=void 0==i?this.$gun.get(u):i.get(u),console.log("current",i)}}catch(c){s.e(c)}finally{s.f()}i.once((function(t,n){console.log(n,t),console.log("the value is",t),e.last.key=n,e.last.value=t}))},set:function(t){var e=t.commandArray[0];t.commandArray.splice(0,2);var n=t.commandArray.join(" ");console.log("affectation de ",n,"dans",e);var o,r=e.split("."),i=void 0,s=(0,a.Z)(r);try{for(s.s();!(o=s.n()).done;){var u=o.value;console.log(u),i=void 0==i?this.$gun.get(u):i.get(u),console.log("current",i)}}catch(c){s.e(c)}finally{s.f()}i.once((function(t,e){console.log(e,t),console.log("the value is",t)}));try{n=JSON.parse(n)}catch(l){console.log(l)}finally{i.put(n)}},updateText:function(){console.log("Updating Text",this.text),this.$gun.get("RaN5Dom_text").put({text:this.text})},updateSay:function(){var t=this;this.causette=[],this.$gun.user().get("said").map().once((function(e){console.log("SAY",e),t.causette.push(e)}))}},watch:{gunUser:function(){console.log("gunUser",this.gunUser),void 0!=this.gunUser&&this.updateSay()}},computed:{gunUser:{get:function(){return this.$store.state.gun.gunUser},set:function(){}}}}),s=i,u=n(1001),c=(0,u.Z)(s,o,r,!1,null,null,null),l=c.exports},647:function(t,e,n){var o=n(1702),r=n(7908),a=Math.floor,i=o("".charAt),s=o("".replace),u=o("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,o,f,d){var g=n+t.length,v=o.length,m=l;return void 0!==f&&(f=r(f),m=c),s(d,m,(function(r,s){var c;switch(i(s,0)){case"$":return"$";case"&":return t;case"`":return u(e,0,n);case"'":return u(e,g);case"<":c=f[u(s,1,-1)];break;default:var l=+s;if(0===l)return r;if(l>v){var d=a(l/10);return 0===d?r:d<=v?void 0===o[d-1]?i(s,1):o[d-1]+i(s,1):r}c=o[l-1]}return void 0===c?"":c}))}},6091:function(t,e,n){var o=n(6530).PROPER,r=n(7293),a=n(1361),i="​᠎";t.exports=function(t){return r((function(){return!!a[t]()||i[t]()!==i||o&&a[t].name!==t}))}},3111:function(t,e,n){var o=n(1702),r=n(4488),a=n(1340),i=n(1361),s=o("".replace),u="["+i+"]",c=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),f=function(t){return function(e){var n=a(r(e));return 1&t&&(n=s(n,c,"")),2&t&&(n=s(n,l,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9600:function(t,e,n){"use strict";var o=n(2109),r=n(1702),a=n(8361),i=n(5656),s=n(9341),u=r([].join),c=a!=Object,l=s("join",",");o({target:"Array",proto:!0,forced:c||!l},{join:function(t){return u(i(this),void 0===t?",":t)}})},8757:function(t,e,n){"use strict";var o=n(2109),r=n(7854),a=n(6916),i=n(1702),s=n(4488),u=n(614),c=n(7850),l=n(1340),f=n(8173),d=n(7066),g=n(647),v=n(5112),m=n(1913),p=v("replace"),h=RegExp.prototype,x=r.TypeError,_=i(d),y=i("".indexOf),k=i("".replace),$=i("".slice),b=Math.max,w=function(t,e,n){return n>t.length?-1:""===e?n:y(t,e,n)};o({target:"String",proto:!0},{replaceAll:function(t,e){var n,o,r,i,d,v,A,R,D,S=s(this),j=0,U=0,E="";if(null!=t){if(n=c(t),n&&(o=l(s("flags"in h?t.flags:_(t))),!~y(o,"g")))throw x("`.replaceAll` does not allow non-global regexes");if(r=f(t,p),r)return a(r,t,S,e);if(m&&n)return k(l(S),t,e)}i=l(S),d=l(t),v=u(e),v||(e=l(e)),A=d.length,R=b(1,A),j=w(i,d,0);while(-1!==j)D=v?l(e(d,j,i)):g(d,i,j,[],void 0,e),E+=$(i,U,j)+D,U=j+A,j=w(i,d,j+R);return U<i.length&&(E+=$(i,U)),E}})},5306:function(t,e,n){"use strict";var o=n(2104),r=n(6916),a=n(1702),i=n(7007),s=n(7293),u=n(9670),c=n(614),l=n(9303),f=n(7466),d=n(1340),g=n(4488),v=n(1530),m=n(8173),p=n(647),h=n(7651),x=n(5112),_=x("replace"),y=Math.max,k=Math.min,$=a([].concat),b=a([].push),w=a("".indexOf),A=a("".slice),R=function(t){return void 0===t?t:String(t)},D=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[_]&&""===/./[_]("a","$0")}(),j=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));i("replace",(function(t,e,n){var a=S?"$":"$0";return[function(t,n){var o=g(this),a=void 0==t?void 0:m(t,_);return a?r(a,t,o,n):r(e,d(o),t,n)},function(t,r){var i=u(this),s=d(t);if("string"==typeof r&&-1===w(r,a)&&-1===w(r,"$<")){var g=n(e,i,s,r);if(g.done)return g.value}var m=c(r);m||(r=d(r));var x=i.global;if(x){var _=i.unicode;i.lastIndex=0}var D=[];while(1){var S=h(i,s);if(null===S)break;if(b(D,S),!x)break;var j=d(S[0]);""===j&&(i.lastIndex=v(s,f(i.lastIndex),_))}for(var U="",E=0,N=0;N<D.length;N++){S=D[N];for(var T=d(S[0]),C=y(k(l(S.index),s.length),0),G=[],O=1;O<S.length;O++)b(G,R(S[O]));var M=S.groups;if(m){var I=$([T],G,C,s);void 0!==M&&b(I,M);var Z=d(o(r,void 0,I))}else Z=p(T,s,C,G,M,r);C>=E&&(U+=A(s,E,C)+Z,E=C+T.length)}return U+A(s,E)}]}),!j||!D||S)},3210:function(t,e,n){"use strict";var o=n(2109),r=n(3111).trim,a=n(6091);o({target:"String",proto:!0,forced:a("trim")},{trim:function(){return r(this)}})}}]);
//# sourceMappingURL=89-legacy.a38c2a6a.js.map