"use strict";(self["webpackChunkagents"]=self["webpackChunkagents"]||[]).push([[112],{3112:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[e("b-nav-form",[e("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}})],1),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-navbar-brand",{attrs:{href:"#"}},[t._v("Agents")]),e("b-nav-item-dropdown",{attrs:{text:t.world||"World",right:""}},[e("b-dropdown-item",{attrs:{href:"#"},on:{click:function(n){return t.changeWorld("solid")}}},[t._v("solid")]),e("b-dropdown-item",{attrs:{href:"#"},on:{click:function(n){return t.changeWorld("gun")}}},[t._v("gundb")]),e("b-dropdown-item",{attrs:{href:"#",disabled:""},on:{click:function(n){return t.changeWorld("ipfs")}}},[t._v("ipfs")]),e("b-dropdown-item",{attrs:{href:"#",disabled:""},on:{click:function(n){return t.changeWorld("mld")}}},[t._v("m-ld")]),e("b-dropdown-item",{attrs:{href:"#"},on:{click:function(n){return t.changeWorld(null)}}},[t._v("none")])],1),"solid"==t.world?e("SolidLogin"):"gun"==t.world?e("b-nav-dropdown",{attrs:{text:"Gun User"}},[void 0!=t.gunUser?e("div",[t._v(" gunUser : "+t._s(t.gunUser.alias)+" ")]):t._e(),e("GunSignin"),e("GunLogin")],1):e("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",[t._v("User")])]},proxy:!0}])},[e("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile "+t._s(t.world))]),e("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign In/Out "+t._s(t.world))])],1)],1),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[e("b-dropdown-item",{attrs:{href:"#",disabled:""}},[t._v("This module is not implemented yet")]),e("b-dropdown-item",{attrs:{href:"#",disabled:""}},[t._v("EN")]),e("b-dropdown-item",{attrs:{href:"#",disabled:""}},[t._v("FR")]),e("b-dropdown-item",{attrs:{href:"#",disabled:""}},[t._v("ES")]),e("b-dropdown-item",{attrs:{href:"#",disabled:""}},[t._v("RU")]),e("b-dropdown-item",{attrs:{href:"#",disabled:""}},[t._v("FA")])],1),e("b-nav-item",{attrs:{href:"https://github.com/scenaristeur/agents/blob/main/README.md",target:"_blank"}},[t._v("Help")])],1)],1)],1)},o=[],a={name:"NavBar",components:{SolidLogin:()=>e.e(118).then(e.bind(e,8118)),GunSignin:()=>e.e(610).then(e.bind(e,8610)),GunLogin:()=>e.e(698).then(e.bind(e,8698))},methods:{changeWorld(t){console.log(t),this.$store.commit("app/setWorld",t)}},watch:{},computed:{world:{get(){return this.$store.state.app.world},set(){}},gunUser:{get(){return this.$store.state.gun.gunUser},set(){}}}},s=a,d=e(1001),i=(0,d.Z)(s,r,o,!1,null,null,null),l=i.exports}}]);
//# sourceMappingURL=112.d2d8da2c.js.map