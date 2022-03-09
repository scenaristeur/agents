"use strict";(self["webpackChunkagents"]=self["webpackChunkagents"]||[]).push([[211],{4211:function(t,n,r){r.r(n),r.d(n,{default:function(){return l}});var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}})],1),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-navbar-brand",{attrs:{href:"#"}},[t._v("Agents")]),r("b-nav-item-dropdown",{attrs:{text:t.world||"World",right:""}},[r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(n){return t.changeWorld("solid")}}},[t._v("solid")]),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(n){return t.changeWorld("gun")}}},[t._v("gundb")]),r("b-dropdown-item",{attrs:{href:"#",disabled:""},on:{click:function(n){return t.changeWorld("ipfs")}}},[t._v("ipfs")]),r("b-dropdown-item",{attrs:{href:"#",disabled:""},on:{click:function(n){return t.changeWorld("mld")}}},[t._v("m-ld")])],1),"solid"==t.world?r("SolidLogin"):"gun"==t.world?r("b-nav-dropdown",{attrs:{text:"Gun User"}},[void 0!=t.gunUser?r("div",[t._v(" gunUser : "+t._s(t.gunUser.alias)+" ")]):t._e(),r("GunSignin"),r("GunLogin")],1):r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("em",[t._v("User")])]},proxy:!0}])},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile "+t._s(t.world))]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign In/Out "+t._s(t.world))])],1)],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[r("b-dropdown-item",{attrs:{href:"#",disabled:""}},[t._v("This module is not implemented yet")]),r("b-dropdown-item",{attrs:{href:"#",disabled:""}},[t._v("EN")]),r("b-dropdown-item",{attrs:{href:"#",disabled:""}},[t._v("FR")]),r("b-dropdown-item",{attrs:{href:"#",disabled:""}},[t._v("ES")]),r("b-dropdown-item",{attrs:{href:"#",disabled:""}},[t._v("RU")]),r("b-dropdown-item",{attrs:{href:"#",disabled:""}},[t._v("FA")])],1),r("b-nav-item",{attrs:{href:"https://github.com/scenaristeur/agents/blob/main/README.md",target:"_blank"}},[t._v("Help")])],1)],1)],1)},o=[],a=(r(1539),r(8783),r(3948),{name:"NavBar",components:{SolidLogin:function(){return r.e(118).then(r.bind(r,8118))},GunSignin:function(){return r.e(610).then(r.bind(r,8610))},GunLogin:function(){return r.e(698).then(r.bind(r,8698))}},methods:{changeWorld:function(t){console.log(t),this.$store.commit("app/setWorld",t)}},watch:{},computed:{world:{get:function(){return this.$store.state.app.world},set:function(){}},gunUser:{get:function(){return this.$store.state.gun.gunUser},set:function(){}}}}),s=a,i=r(1001),d=(0,i.Z)(s,e,o,!1,null,null,null),l=d.exports}}]);
//# sourceMappingURL=211-legacy.c0123884.js.map