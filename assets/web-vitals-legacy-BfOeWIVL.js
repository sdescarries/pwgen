System.register([],(function(e,n){"use strict";return{execute:function(){var n,t=-1,r=function(e){addEventListener("pageshow",(function(n){n.persisted&&(t=n.timeStamp,e(n))}),!0)},i=function(){var e=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(e&&e.responseStart>0&&e.responseStart<performance.now())return e},o=function(){var e=i();return e&&e.activationStart||0},a=function(e,n){var r=i(),a="navigate";return t>=0?a="back-forward-cache":r&&(document.prerendering||o()>0?a="prerender":document.wasDiscarded?a="restore":r.type&&(a=r.type.replace(/_/g,"-"))),{name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:a}},c=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){n(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},t||{})),r}}catch(e){}},u=function(e,n,t,r){var i,o;return function(a){n.value>=0&&(a||r)&&((o=n.value-(i||0))||void 0===i)&&(i=n.value,n.delta=o,n.rating=function(e,n){return e>n[1]?"poor":e>n[0]?"needs-improvement":"good"}(n.value,t),e(n))}},s=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},f=function(e){document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&e()}))},d=function(e){var n=!1;return function(){n||(e(),n=!0)}},l=-1,v=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},h=function(e){"hidden"===document.visibilityState&&l>-1&&(l="visibilitychange"===e.type?e.timeStamp:0,p())},m=function(){addEventListener("visibilitychange",h,!0),addEventListener("prerenderingchange",h,!0)},p=function(){removeEventListener("visibilitychange",h,!0),removeEventListener("prerenderingchange",h,!0)},g=function(){return l<0&&(l=v(),m(),r((function(){setTimeout((function(){l=v(),m()}),0)}))),{get firstHiddenTime(){return l}}},y=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},T=[1800,3e3],C=function(e,n){n=n||{},y((function(){var t,i=g(),f=a("FCP"),d=c("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(d.disconnect(),e.startTime<i.firstHiddenTime&&(f.value=Math.max(e.startTime-o(),0),f.entries.push(e),t(!0)))}))}));d&&(t=u(e,f,T,n.reportAllChanges),r((function(r){f=a("FCP"),t=u(e,f,T,n.reportAllChanges),s((function(){f.value=performance.now()-r.timeStamp,t(!0)}))})))}))},E=[.1,.25],b=0,P=1/0,L=0,S=function(e){e.forEach((function(e){e.interactionId&&(P=Math.min(P,e.interactionId),L=Math.max(L,e.interactionId),b=L?(L-P)/7+1:0)}))},I=function(){return n?b:performance.interactionCount||0},A=function(){"interactionCount"in performance||n||(n=c("event",S,{type:"event",buffered:!0,durationThreshold:0}))},w=[],M=new Map,k=0,F=[],x=function(e){if(F.forEach((function(n){return n(e)})),e.interactionId||"first-input"===e.entryType){var n=w[w.length-1],t=M.get(e.interactionId);if(t||w.length<10||e.duration>n.latency){if(t)e.duration>t.latency?(t.entries=[e],t.latency=e.duration):e.duration===t.latency&&e.startTime===t.entries[0].startTime&&t.entries.push(e);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};M.set(r.id,r),w.push(r)}w.sort((function(e,n){return n.latency-e.latency})),w.length>10&&w.splice(10).forEach((function(e){return M.delete(e.id)}))}}},N=function(e){var n=self.requestIdleCallback||self.setTimeout,t=-1;return e=d(e),"hidden"===document.visibilityState?e():(t=n(e),f(e)),t},R=[200,500],q=[2500,4e3],H={};e({FCPThresholds:T,onFCP:C,CLSThresholds:E,onCLS:function(e,n){n=n||{},C(d((function(){var t,i=a("CLS",0),o=0,d=[],l=function(e){e.forEach((function(e){if(!e.hadRecentInput){var n=d[0],t=d[d.length-1];o&&e.startTime-t.startTime<1e3&&e.startTime-n.startTime<5e3?(o+=e.value,d.push(e)):(o=e.value,d=[e])}})),o>i.value&&(i.value=o,i.entries=d,t())},v=c("layout-shift",l);v&&(t=u(e,i,E,n.reportAllChanges),f((function(){l(v.takeRecords()),t(!0)})),r((function(){o=0,i=a("CLS",0),t=u(e,i,E,n.reportAllChanges),s((function(){return t()}))})),setTimeout(t,0))})))},INPThresholds:R,onINP:function(e,n){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(n=n||{},y((function(){var t;A();var i,o=a("INP"),s=function(e){N((function(){e.forEach(x);var n=function(){var e=Math.min(w.length-1,Math.floor((I()-k)/50));return w[e]}();n&&n.latency!==o.value&&(o.value=n.latency,o.entries=n.entries,i())}))},d=c("event",s,{durationThreshold:null!==(t=n.durationThreshold)&&void 0!==t?t:40});i=u(e,o,R,n.reportAllChanges),d&&(d.observe({type:"first-input",buffered:!0}),f((function(){s(d.takeRecords()),i(!0)})),r((function(){k=I(),w.length=0,M.clear(),o=a("INP"),i=u(e,o,R,n.reportAllChanges)})))})))},LCPThresholds:q,onLCP:function(e,n){n=n||{},y((function(){var t,i=g(),l=a("LCP"),v=function(e){n.reportAllChanges||(e=e.slice(-1)),e.forEach((function(e){e.startTime<i.firstHiddenTime&&(l.value=Math.max(e.startTime-o(),0),l.entries=[e],t())}))},h=c("largest-contentful-paint",v);if(h){t=u(e,l,q,n.reportAllChanges);var m=d((function(){H[l.id]||(v(h.takeRecords()),h.disconnect(),H[l.id]=!0,t(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,(function(){return N(m)}),{once:!0,capture:!0})})),f(m),r((function(r){l=a("LCP"),t=u(e,l,q,n.reportAllChanges),s((function(){l.value=performance.now()-r.timeStamp,H[l.id]=!0,t(!0)}))}))}}))}})}}}));
//# sourceMappingURL=web-vitals-legacy-BfOeWIVL.js.map