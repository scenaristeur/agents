"use strict";(self["webpackChunkagents"]=self["webpackChunkagents"]||[]).push([[857],{8857:function(o,t,n){n.r(t),n.d(t,{default:function(){return u}});var l=function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("vue-fab",{attrs:{mainBtnColor:o.mainBtnColor}},o._l(o.menu,(function(t,l){return n("fab-item",{key:l,attrs:{idx:l,title:t.title,color:t.color,icon:t.icon},on:{clickItem:o.clickItem}})})),1)},e=[],c={name:"FabButton",data:function(){return{menu:[{icon:"public",title:"Worlds",color:"#ff9900"},{icon:"toc",title:"gun refactoring",color:"#999",world:"gun"},{icon:"toc",title:"solid refactoring",color:"#999",world:"solid"},{icon:"toc",title:"ipfs todo",color:"#999"},{icon:"toc",title:"m-ld todo",color:"#999"},{icon:"add_a_photo",title:"Add a Photo",color:"#999"}],mainBtnColor:"#3eaf7c"}},methods:{clickItem:function(o){var t=this.menu[o.idx];console.log(t.world),this.$store.commit("app/setWorld",t.world),alert(o.idx)}}},i=c,r=n(1001),a=(0,r.Z)(i,l,e,!1,null,null,null),u=a.exports}}]);
//# sourceMappingURL=857-legacy.fb1e9f78.js.map