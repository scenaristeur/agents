"use strict";(self["webpackChunkagents"]=self["webpackChunkagents"]||[]).push([[118],{8118:function(t,e,s){s.r(e),s.d(e,{default:function(){return a}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"login"},[null==t.session||0==t.session.isLoggedIn?s("div",{staticClass:"d-flex align-items-center"},[s("b-form-group",[s("b-form-select",{attrs:{autofocus:"",size:"sm",options:t.issuers},on:{change:t.login},scopedSlots:t._u([{key:"first",fn:function(){return[s("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Login / Connexion --")])]},proxy:!0}],null,!1,3168236525),model:{value:t.issuer,callback:function(e){t.issuer=e},expression:"issuer"}}),"other"==t.issuer?s("div",[s("b-form-group",{attrs:{id:"fieldset-1",description:"ex: `https://solidcommunity.net`",label:"Entrez l'url de votre fournissuer de POD","label-for":"input-1","valid-feedback":"Merci!","invalid-feedback":t.invalidFeedback,state:t.state}},[s("b-form-input",{attrs:{id:"input-1",state:t.state,trim:""},on:{change:t.onChange},model:{value:t.other,callback:function(e){t.other=e},expression:"other"}})],1),s("b-button",{attrs:{size:"sm",variant:"info"}},[t._v("Login / connexion")])],1):t._e()],1)],1):s("div",{staticClass:"d-flex align-items-center"},[s("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:t.logout}},[t._v("Logout")])],1)])},i=[],o=(s(6755),{name:"SolidLogin",data:function(){return{issuers:[{value:"https://broker.pod.inrupt.com",text:"Broker Pod Inrupt (Entreprise Solid Server)"},{value:"https://inrupt.net",text:"Inrupt.net"},{value:"https://dev.inrupt.net",text:"dev.inrupt.net"},{value:"https://solidcommunity.net",text:"SolidCommunity.net"},{value:"https://solidweb.org",text:"Solidweb.org"},{value:"https://trinpod.us/",text:"Trinpod.us"},{value:"other",text:"Autre / Other"}],issuer:null,restore:!0,other:""}},methods:{onInput:function(){console.log("input",this.other)},onChange:function(){console.log("change",this.other),void 0!=this.other&&void 0!=this.other.length&&(this.issuer=this.other,this.login(this.issuer))},login:function(t){console.log(t),this.issuer=t,null!=this.issuer&&"other"!=this.issuer&&(console.log(this.issuer),this.$login(this.issuer))},logout:function(){this.$logout()}},computed:{session:{get:function(){return this.$store.state.solid.session},set:function(){}},state:function(){return this.other.startsWith("http")},invalidFeedback:function(){return this.other.length>0&&!this.other.startsWith("http")?"L'url de ton fournisseur devrait commencer par `http`":"l'url de ton fournisseur/provider, pas celle de ton webId"}}}),r=o,u=s(1001),l=(0,u.Z)(r,n,i,!1,null,null,null),a=l.exports},6755:function(t,e,s){var n=s(2109),i=s(1702),o=s(1236).f,r=s(7466),u=s(1340),l=s(3929),a=s(4488),h=s(4964),c=s(1913),d=i("".startsWith),p=i("".slice),f=Math.min,g=h("startsWith"),v=!c&&!g&&!!function(){var t=o(String.prototype,"startsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!v&&!g},{startsWith:function(t){var e=u(a(this));l(t);var s=r(f(arguments.length>1?arguments[1]:void 0,e.length)),n=u(t);return d?d(e,n,s):p(e,s,s+n.length)===n}})}}]);
//# sourceMappingURL=118-legacy.a6b48c7c.js.map