!function(){function e(e,r,t,n,o,a,i){try{var c=e[a](i),u=c.value}catch(l){return void t(l)}c.done?r(u):Promise.resolve(u).then(n,o)}function r(r){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=r.apply(t,n);function c(r){e(i,o,a,c,u,"next",r)}function u(r){e(i,o,a,c,u,"throw",r)}c(void 0)}))}}function t(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}(e,r)||l(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=l(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw a}}}}function l(e,r){if(e){if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var f=document.createElement("style");f.innerHTML="body{background-color:#161b1d;color:#e2e7e9;font-family:Fira Sans,Droid Sans,Helvetica Neue,Roboto,Oxygen,sans-serif;margin:0;font-size:1rem;letter-spacing:0}@media (hover: hover){.Flame:hover{box-shadow:#ff8000 0 0 .625rem,red 0 0 1.25rem,0 0 2.5rem rgba(0,0,0,0)}}.Frame{background-color:#161b1d;border-radius:1.25rem;border:.25rem solid #6c8693;display:flex;flex-direction:row;height:2rem;min-width:2rem;overflow:hidden;color:#6c8693}.App header{height:5rem;display:flex;flex-direction:row;justify-content:center;align-items:center}.App header .Controls{display:flex;flex-direction:row;overflow-x:auto;padding:1rem}.App main{height:calc(100vh - 5rem);overflow:hidden}.DipSwitch{margin:0 .625rem}.DipSwitch .checkbox{display:none}.DipSwitch *{cursor:pointer;transition:all .4s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none}.DipSwitch .Small{display:flex;justify-content:center;align-items:center;width:2rem}@media screen and (min-width: 32rem){.DipSwitch .Small{display:none}}.DipSwitch .Large{display:none;align-items:center;padding-right:.625rem}@media screen and (min-width: 32rem){.DipSwitch .Large{display:flex}}.DipSwitch .Frame .toggleWrapper{display:flex;align-items:center;justify-content:center;cursor:pointer;width:2rem;height:2rem}.DipSwitch .Frame .toggleWrapper .toggle{background-color:transparent;border-radius:50%;border:.25rem solid #6c8693;height:.5rem;width:.5rem}.DipSwitch .checkbox:checked+.Frame{background-color:#a7b6be}.DipSwitch .checkbox:checked+.Frame .toggle{background-color:#161b1d;border-color:transparent;border-radius:.6rem;width:0}.DipSwitch .checkbox:checked+.Frame .label{color:#161b1d}.InfiniScroll{height:100%;overflow-y:auto;padding:0 2rem;position:relative}.InfiniScroll .Standard{position:absolute;visibility:hidden}.InfiniScroll .Grid{display:inline-flex;flex-flow:wrap row;justify-content:space-around;gap:8px}.InfiniScroll .Grid nav{background-color:red;bottom:-80%;height:1rem;position:absolute;visibility:hidden;width:1rem}@-webkit-keyframes cardEntrance{0%{opacity:.5}to{opacity:1}}@keyframes cardEntrance{0%{opacity:.5}to{opacity:1}}.Password{background-color:#364349;border-radius:.5rem;color:#e2e7e9;cursor:pointer;font-family:Fira Code,Menlo,Monaco,Consolas,monospace;font-size:1rem;margin:0;min-width:4rem;padding:.5rem 1rem}.Password:disabled{background-color:#161b1d;color:#364349}.Password.Ready{-webkit-animation:cardEntrance 2s ease-out backwards;animation:cardEntrance 2s ease-out backwards}.Length{margin:0 .625rem;display:block;height:2.5rem;width:2.5rem;transition:all .4s ease-in-out;font-family:sans-serif;font-size:1rem;cursor:pointer;text-align:center}.Length:active{background-color:#a7b6be;color:#161b1d}\n",document.head.appendChild(f),System.register(["./vendor-legacy.fd570d5a.js"],(function(e,n){"use strict";var l,s,f;return{setters:[function(e){l=e.r,s=e.R,f=e.a}],execute:function(){var e,d,h,m=(c(e={},"09","Number"),c(e,"AZ","Upper Case"),c(e,"SM","Symbol"),e),p=(c(d={},"09","9"),c(d,"AZ","Z"),c(d,"SM","#"),d),v="abcdefghijklmnopqrstuvwxyz",g=(c(h={},"09","0123456789"),c(h,"AZ","ABCDEFGHIJKLMNOPQRSTUVWXYZ"),c(h,"SM","=+-*@$%!&?,.:;^#(){}[]|"),c(h,"az",v),h),b=function(e){var r=i(e,2),t=r[0];return r[1]?g[t]:""},y=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return Array.from(new Set(r.flat().join("")))};function w(e){for(var r=e.length,t=e.charset,n=e.random,o="",a=-1,i=0;i<r;++i){var c=void 0;do{c=n.pop()}while(c===a);a=c,o+=t[c]}return o}var x=function(){function e(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.array=new Uint32Array(1024),this.index=1024,this.range=r}var r,t,n;return r=e,(t=[{key:"pop",value:function(){return this.index>=1024&&(crypto.getRandomValues(this.array),this.index=0),this.array[this.index++]%this.range}}])&&a(r.prototype,t),n&&a(r,n),e}();function S(e){var r;if(0===e)return function(){return Promise.resolve("")};if(e<4)throw new Error("length too short ".concat(e));for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var a=y.apply(void 0,n);if(a.length<1)throw new Error("empty charset");if(null==(null===(r=crypto)||void 0===r?void 0:r.getRandomValues))throw new Error("missing crypto facility");var i=new x(a.length);return function(){return Promise.resolve({length:e,charset:a,random:i}).then(w)}}function E(e){var r=l.exports.useRef({}),t=l.exports.useCallback((function(t){clearTimeout(r.current.timeout),r.current.timeout=setTimeout(t,e)}),[e]);return l.exports.useEffect((function(){return function(){return clearTimeout(r.current.timeout)}}),[e]),t}function k(e){var r=e.length,n=e.charset,o=Object.entries(n).map(b);return S.apply(void 0,[r,v].concat(t(o)))}function O(){var e=l.exports.useRef({charset:{},length:0}),r=i(l.exports.useState(e.current),2),t=r[0],n=r[1],a=E(200),c=k(t);return o(o({},t),{},{generator:c,update:function(r){var i,c,u,l;e.current=(i=e.current,c=r,{charset:o(o({},null==i?void 0:i.charset),null==c?void 0:c.charset),length:null!==(u=null!==(l=null==c?void 0:c.length)&&void 0!==l?l:null==i?void 0:i.length)&&void 0!==u?u:8}),a((function(){var r,o;r=t,o=e.current,JSON.stringify(r)!==JSON.stringify(o)&&n(e.current)}))}})}var j=function(e){return"pwgen-charset-".concat(e)};function I(e){var r=e.charset,t=e.update,n=l.exports.useState((function(){return function(e){try{var r,t=null!==(r=localStorage.getItem(j(e)))&&void 0!==r?r:"false";return JSON.parse(t)}catch(o){var n=o.message;return console.warn(n),!1}}(r)})),o=i(n,2),a=o[0],u=o[1];l.exports.useEffect((function(){return t(c({},r,a))}),[]);var s=function(e){t(c({},r,e)),u(e),function(e,r){Promise.resolve().then((function(){return j(e)})).then((function(e){return localStorage.setItem(e,JSON.stringify(r))})).catch((function(){}))}(r,e)};return[a,function(){return s(!a)}]}function P(e){var r=e.id,t=e.charset,n=e.checked,o=m[t],a=p[t],i="".concat(n?"disable":"enable"," ").concat(o," characters").toLocaleLowerCase();return s.createElement("label",{className:"Frame Flame",htmlFor:r,title:i},s.createElement("div",{className:"Large"},s.createElement("label",{className:"toggleWrapper",htmlFor:r},s.createElement("div",{className:"toggle"})),s.createElement("p",{className:"label"},o)),s.createElement("div",{className:"Small"},s.createElement("p",{className:"label"},a)))}function A(e){var r=i(I(e),2),t=r[0],n=r[1],o="dipSwitch-".concat(e.charset);return s.createElement("div",{className:"DipSwitch","data-testid":o},s.createElement("input",{checked:t,className:"checkbox",id:o,onChange:function(){return n(!t)},type:"checkbox"}),s.createElement(P,{id:o,charset:e.charset,checked:t}))}var N=function(e){var r,t;return(null!==(r=null===(t=e[e.length-1])||void 0===t?void 0:t.id)&&void 0!==r?r:-1)+1},C=function(e){return function(r){var n=e.cols,o=e.full,a=e.index,i=e.length,c=e.rows,u=e.shred,l=e.slice;if(o)r=[{id:N(r),length:i,shred:u,value:""}],a.current=0;else if(l){var s=Math.ceil(c.current/3)*n.current;r=r.slice(s),a.current=Math.max(0,a.current-s)}return function(e,r){var n=r.length,o=r.cols,a=r.rows,i=r.shred,c=o.current*a.current;if(e.length>c)return e.slice(0,c);var u=N(e);for(e=t(e);e.length<c;)e.push({id:u++,length:n,shred:i,value:""});return e}(r,e)}};function F(e,r){if(e.current){var t=function(e){return function(r){i(r,1)[0].isIntersecting&&e()}}(r),n=new IntersectionObserver(t);return n.observe(e.current),function(){return n.disconnect()}}console.warn("useInfiniScroll IntersectionObserver not ready")}function R(e,r){var t=setInterval((function(){return function(e,r){var t,n=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();n&&(n.bottom>window.innerHeight||n.right>window.innerWidth||r())}(e,r)}),200);return function(){return clearInterval(t)}}function D(e){var r={cw:0,ch:0,iw:0,ih:0};return function(t){!function(e,r,t){var n,o=e.grid,a=e.standard,i=u(t);try{for(i.s();!(n=i.n()).done;){var c=n.value,l=c.contentRect,s=c.target;s===a.current&&(r.iw=l.width+8,r.ih=l.height+8),s===o.current&&(r.cw=l.width,r.ch=l.height)}}catch(f){i.e(f)}finally{i.f()}}(e,r,t);var n=!1;if(r.iw&&r.ih){var o=2*Math.floor(r.ch/r.ih),a=Math.floor(r.cw/r.iw);e.rows.current!=o&&(e.rows.current=o,n=!0),e.cols.current!=a&&(e.cols.current=a,n=!0)}n&&e.refresh()}}var L=function(e,r){return function(n){var a=n[e.current];if(!a)return n;var i=t(n);return i[e.current]=o(o({},a),{},{value:r}),e.current++,i}};function M(e){var n=e.generator,a=e.length,c=i(l.exports.useState([]),2),u=c[0],s=c[1],f=l.exports.useRef(0),d=l.exports.useRef(0),h=l.exports.useRef(0),m=i(l.exports.useState({done:!0}),2),p=m[0],v=m[1],g=l.exports.useCallback((function(e){return v((function(r){return o(o(o({},r),e),{},{done:!1})}))}),[]),b=function(e){var r=l.exports.useRef(null),t=E(100),n=l.exports.useCallback((function(){return t((function(){return e({slice:!0})}))}),[t,e]);return l.exports.useEffect((function(){return F(r,n)}),[n]),l.exports.useEffect((function(){return R(r,n)}),[n]),[r]}(g),y=i(b,1)[0],w=function(e,r,t){var n=l.exports.useRef(null),o=l.exports.useRef(null);return l.exports.useEffect((function(){if(n.current&&o.current){var a=D({cols:r,rows:t,grid:n,standard:o,refresh:e}),i=new ResizeObserver(a);return i.observe(n.current),i.observe(o.current),function(){return i.disconnect()}}console.warn("useInfiniScroll ResizeObserver not ready")}),[r,t,e]),[n,o]}(g,f,d),x=i(w,2),S=x[0],k=x[1];l.exports.useEffect((function(){return g({full:!0})}),[n,a,g]);var O=l.exports.useCallback((function(e){return s(function(e){return function(r){var n=r[e];if(!n)return r;var a=t(r);return a[e]=o(o({},n),{},{value:""}),a}}(e))}),[]);return l.exports.useEffect((function(){p.done||a&&(s(C(o(o({},p),{},{cols:f,rows:d,index:h,length:a,shred:O}))),v({done:!0}))}),[a,p,O]),l.exports.useEffect((function(){if(a){var e=!0;return Promise.resolve().then(r(regeneratorRuntime.mark((function r(){var t,o,a,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t=d.current*f.current;case 1:if(!(e&&h.current<t)){r.next=10;break}return r.next=4,Promise.all([n(),new Promise((function(e){return requestAnimationFrame(e)}))]);case 4:o=r.sent,a=i(o,1),c=a[0],s(L(h,c)),r.next=1;break;case 10:case"end":return r.stop()}}),r)})))).catch(console.warn),function(){e=!1}}}),[n,a,p]),{grid:S,list:u,loader:y,standard:k}}function T(e){var r=e.id,t=e.index,n=e.length,o=e.shred,a=e.value,i=void 0===a?"":a,c=l.exports.useCallback((function(){i&&navigator.clipboard.writeText(i).then((function(){return o(t)})).catch(console.warn)}),[t,o,i]),u=i.padEnd(n,"*"),f=["Password"];return i&&f.push("Ready"),s.createElement("button",{className:f.join(" "),disabled:!i,id:"".concat(r),onClick:c},u)}function z(e){var r=M(e),t=r.grid,n=r.list,a=r.loader,i=r.standard;return s.createElement("section",{className:"InfiniScroll",ref:t},s.createElement("div",{className:"Standard",ref:i},s.createElement(T,o(o({id:-1},e),{},{index:-1,shred:function(){}}))),s.createElement("div",{className:"Grid"},n.map((function(e,r){return s.createElement(T,o(o({key:e.id},e),{},{index:r}))})),s.createElement("nav",{ref:a})))}var J="pwgen-length";function Z(){try{var e,r=null!==(e=localStorage.getItem(J))&&void 0!==e?e:"8";return JSON.parse(r)}catch(n){var t=n.message;return console.warn(t),8}}var W={8:12,12:16,16:24,24:32,32:8};function B(e){var r=e.update,t=i(l.exports.useState(Z),2),n=t[0],o=t[1];l.exports.useEffect((function(){return r(n)}),[]);var a=function(e){var t;r(e),o(e),t=e,Promise.resolve().then((function(){return localStorage.setItem(J,JSON.stringify(t))})).catch((function(){}))};return[n,function(){var e;return a(null!==(e=W[n])&&void 0!==e?e:8)}]}function G(e){var r=i(B(e),2),t=r[0],n=r[1];return s.createElement("button",{className:"Frame Flame Length","data-testid":"Length",onClick:function(){return n()},type:"submit",title:"change the length of the password"},t)}function H(e){var r=e.update,t=function(e){return r({charset:e})};return s.createElement("div",{className:"Controls"},s.createElement(G,{update:function(e){return r({length:e})}}),s.createElement(A,{charset:"AZ",update:t}),s.createElement(A,{charset:"09",update:t}),s.createElement(A,{charset:"SM",update:t}))}function U(){var e=O();return s.createElement("div",{className:"App"},s.createElement("main",null,s.createElement(z,o({},e))),s.createElement("header",null,s.createElement(H,o({},e))))}var V,q;f.render(s.createElement(U,null),document.getElementById("root")),V instanceof Function&&(q=function(){return n.import("./web-vitals-legacy.90f7ad05.js")},q()).then((function(e){var r=e.getCLS,t=e.getFID,n=e.getFCP,o=e.getLCP,a=e.getTTFB;r(V),t(V),n(V),o(V),a(V)})).catch((function(e){var r=e.stack;return console.warn(r)}))}}}))}();
//# sourceMappingURL=index-legacy.8ec974dd.js.map
