if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const o=e=>i(e,r),u={module:{uri:r},exports:t,require:o};s[r]=Promise.all(l.map((e=>u[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-b7e829be"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-legacy.1d393a84.js",revision:null},{url:"assets/index.d8099cc9.js",revision:null},{url:"assets/index.eafd25fb.css",revision:null},{url:"assets/polyfills-legacy.68b882fd.js",revision:null},{url:"assets/vendor-legacy.ac8b54ec.js",revision:null},{url:"assets/vendor.df994e90.js",revision:null},{url:"assets/web-vitals-legacy.237d4091.js",revision:null},{url:"assets/web-vitals.a2d693e8.js",revision:null},{url:"index.html",revision:"6cfa8e353b680b15f71e4d164456c854"},{url:"registerSW.js",revision:"a51f7c79840b489dde1a63e533b85e89"},{url:"manifest.webmanifest",revision:"3021d91da4425fcf005e375f895f528a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
