"use strict";(self["webpackChunkagents"]=self["webpackChunkagents"]||[]).push([[190],{9113:function(e,o,t){t.r(o),t.d(o,{default:function(){return i}});var r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("h1",[e._v("world node : "+e._s(e.currentNode.name))]),t("b",[e._v("id :")]),e._v(" "+e._s(e.currentNode.id)),t("br"),t("b",[e._v("type :")]),e._v(" "+e._s(e.currentNode.type)+" | "),t("b",[e._v("status :")]),e._v(" "+e._s(e.currentNode.status)),t("br"),t("b",[e._v("description :")]),e._v(" "+e._s(e.currentNode.description)),t("br"),e._v(" img, links... "),t("hr"),"gun"==e.currentNode.id?t("div",[e._v(" To explore a gun brain you had to specify the rootNode you want to explore."),t("br")]):e._e(),"solid"==e.currentNode.id?t("div",[e._v(" You can login to explore your Pod and your friend's pods or you can explore by url."),t("br"),t("b-row",[t("SolidLogin")],1)],1):e._e(),t("hr"),t("b-row",[t("b-col",{staticClass:"col-10 col-md-6 "},[t("b-input",{attrs:{placeholder:"type the rootNode + Enter"},on:{keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.rootNodeChanged.apply(null,arguments)}},model:{value:e.rootNode,callback:function(o){e.rootNode=o},expression:"rootNode"}})],1),t("b-col",[t("b-button",{attrs:{variant:"primary"},on:{click:e.rootNodeChanged}},[e._v("Explore")])],1)],1),t("hr")],1)},n=[],d={name:"BrainNode",components:{SolidLogin:()=>t.e(118).then(t.bind(t,8118))},data(){return{rootNode:""}},created(){this.rootNode=this.$store.state.app.currentNode.examples[0].value},methods:{rootNodeChanged(){switch(console.log(this.rootNode),this.currentNode.id){case"solid":this.$store.commit("app/mustExplore",this.rootNode);break;case"gun":this.$gunExplore(this.rootNode);break;default:}}},watch:{currentNode(){this.rootNode=this.$store.state.app.currentNode.examples[0].value}},computed:{currentNode:{get(){return this.$store.state.app.currentNode},set(e){this.$store.commit("app/setCurrentNode",e)}}}},s=d,a=t(1001),u=(0,a.Z)(s,r,n,!1,null,null,null),i=u.exports}}]);
//# sourceMappingURL=190.3db5dee6.js.map