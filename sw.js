if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const o=e=>i(e,r),u={module:{uri:r},exports:t,require:o};s[r]=Promise.all(l.map((e=>u[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-4de3aa5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-b05135ab.css",revision:null},{url:"assets/index-c07f4a3f.js",revision:null},{url:"assets/index-legacy-24e74985.js",revision:null},{url:"assets/polyfills-legacy-dab38e1d.js",revision:null},{url:"assets/web-vitals-de291302.js",revision:null},{url:"assets/web-vitals-legacy-af3fa288.js",revision:null},{url:"index.html",revision:"02e69d482348c65b7c854cfffbb54e1c"},{url:"registerSW.js",revision:"a51f7c79840b489dde1a63e533b85e89"},{url:"manifest.webmanifest",revision:"3021d91da4425fcf005e375f895f528a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
