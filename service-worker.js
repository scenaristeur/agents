if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const u=e=>n(e,r),o={module:{uri:r},exports:t,require:u};s[r]=Promise.all(l.map((e=>o[e]||u(e)))).then((e=>(i(...e),t)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"agents"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/agents/communica.html",revision:"7d4bfb0c8be13311fcd313a2b44582ee"},{url:"/agents/css/384.389bce8c.css",revision:null},{url:"/agents/css/app.397cd39e.css",revision:null},{url:"/agents/css/chunk-vendors.339c5200.css",revision:null},{url:"/agents/index.html",revision:"eecde6b56a628846bdfaeffae0a4f4db"},{url:"/agents/js/135.1c9af574.js",revision:null},{url:"/agents/js/384.dba82a51.js",revision:null},{url:"/agents/js/416.c5bf0854.js",revision:null},{url:"/agents/js/610.fefff927.js",revision:null},{url:"/agents/js/680.95fc4f21.js",revision:null},{url:"/agents/js/72.42bad5d6.js",revision:null},{url:"/agents/js/750.c4ea11c5.js",revision:null},{url:"/agents/js/932.5be810d7.js",revision:null},{url:"/agents/js/about.6d84278f.js",revision:null},{url:"/agents/js/app.17dab60a.js",revision:null},{url:"/agents/manifest.json",revision:"0c5206c844f7287042fe3d33698ea3f7"},{url:"/agents/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
