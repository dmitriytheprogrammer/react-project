if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const d=e=>s(e,r),l={module:{uri:r},exports:t,require:d};i[r]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(o(...e),t)))}}define(["./workbox-b9e6edb1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-BldtG2QO.css",revision:null},{url:"index.html",revision:"ab4c8d0fc5b36901fd1b16184dffba9f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.ico",revision:"ddedc54fe3760b960b5acf880a580209"},{url:"apple-touch-icon.png",revision:"55eb7bda629ff38781d2479f7d95dc83"},{url:"logo512.png",revision:"417a5e7d9f98e6b7da35b2044bf7a337"},{url:"manifest.webmanifest",revision:"0595d027712ec951567a756e0c821c78"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
