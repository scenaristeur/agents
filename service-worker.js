if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>n(s,r),a={module:{uri:r},exports:u,require:t};e[r]=Promise.all(l.map((s=>a[s]||t(s)))).then((s=>(i(...s),u)))}}define(["./workbox-f3ddde50"],(function(s){"use strict";s.setCacheNameDetails({prefix:"agents"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/agents/communica.html",revision:"7d4bfb0c8be13311fcd313a2b44582ee"},{url:"/agents/css/118.389bce8c.css",revision:null},{url:"/agents/css/139.9af57d6c.css",revision:null},{url:"/agents/css/app.397cd39e.css",revision:null},{url:"/agents/css/chunk-vendors.339c5200.css",revision:null},{url:"/agents/index.html",revision:"04eeb0dec85306d5581267026da7983d"},{url:"/agents/js/118.4f81fa7b.js",revision:null},{url:"/agents/js/139.1aa3eda1.js",revision:null},{url:"/agents/js/202.801a1774.js",revision:null},{url:"/agents/js/240.5a49437c.js",revision:null},{url:"/agents/js/284.fefa4ecf.js",revision:null},{url:"/agents/js/324.74791b36.js",revision:null},{url:"/agents/js/355.fd59efbb.js",revision:null},{url:"/agents/js/395.4be6359d.js",revision:null},{url:"/agents/js/610.fefff927.js",revision:null},{url:"/agents/js/685.b6c2acf6.js",revision:null},{url:"/agents/js/692.7f79ec33.js",revision:null},{url:"/agents/js/698.7fdb98eb.js",revision:null},{url:"/agents/js/738.49c92ea2.js",revision:null},{url:"/agents/js/761.834a518a.js",revision:null},{url:"/agents/js/857.92f4e73e.js",revision:null},{url:"/agents/js/932.924b3dc4.js",revision:null},{url:"/agents/js/about.6d84278f.js",revision:null},{url:"/agents/js/agents.2bcf01d6.js",revision:null},{url:"/agents/js/app.736b3fba.js",revision:null},{url:"/agents/manifest.json",revision:"0c5206c844f7287042fe3d33698ea3f7"},{url:"/agents/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
