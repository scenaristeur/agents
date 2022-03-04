"use strict";(self["webpackChunkagents"]=self["webpackChunkagents"]||[]).push([[384],{2384:function(t,e,s){s.r(e),s.d(e,{default:function(){return a}});var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"login"},[null==t.session||0==t.session.isLoggedIn?s("div",{staticClass:"d-flex align-items-center"},[s("b-form-group",[s("b-form-select",{attrs:{autofocus:"",size:"sm",options:t.issuers},on:{change:t.login},scopedSlots:t._u([{key:"first",fn:function(){return[s("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Login / Connexion --")])]},proxy:!0}],null,!1,3168236525),model:{value:t.issuer,callback:function(e){t.issuer=e},expression:"issuer"}}),"other"==t.issuer?s("div",[s("b-form-group",{attrs:{id:"fieldset-1",description:"ex: `https://solidcommunity.net`",label:"Entrez l'url de votre fournissuer de POD","label-for":"input-1","valid-feedback":"Merci!","invalid-feedback":t.invalidFeedback,state:t.state}},[s("b-form-input",{attrs:{id:"input-1",state:t.state,trim:""},on:{change:t.onChange},model:{value:t.other,callback:function(e){t.other=e},expression:"other"}})],1),s("b-button",{attrs:{size:"sm",variant:"info"}},[t._v("Login / connexion")])],1):t._e()],1)],1):s("div",{staticClass:"d-flex align-items-center"},[s("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:t.logout}},[t._v("Logout")])],1)])},i=[],n={name:"Login",data(){return{issuers:[{value:"https://broker.pod.inrupt.com",text:"Broker Pod Inrupt (Entreprise Solid Server)"},{value:"https://inrupt.net",text:"Inrupt.net"},{value:"https://dev.inrupt.net",text:"dev.inrupt.net"},{value:"https://solidcommunity.net",text:"SolidCommunity.net"},{value:"https://solidweb.org",text:"Solidweb.org"},{value:"https://trinpod.us/",text:"Trinpod.us"},{value:"other",text:"Autre / Other"}],issuer:null,restore:!0,other:""}},methods:{onInput(){console.log("input",this.other)},onChange(){console.log("change",this.other),void 0!=this.other&&void 0!=this.other.length&&(this.issuer=this.other,this.login(this.issuer))},login(t){console.log(t),this.issuer=t,null!=this.issuer&&"other"!=this.issuer&&(console.log(this.issuer),this.$login(this.issuer))},logout(){this.$logout()}},computed:{session:{get(){return this.$store.state.solid.session},set(){}},state(){return this.other.startsWith("http")},invalidFeedback(){return this.other.length>0&&!this.other.startsWith("http")?"L'url de ton fournisseur devrait commencer par `http`":"l'url de ton fournisseur/provider, pas celle de ton webId"}}},r=n,l=s(1001),u=(0,l.Z)(r,o,i,!1,null,null,null),a=u.exports}}]);
//# sourceMappingURL=384.dba82a51.js.map