!function(){function e(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=c(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function c(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=document.createElement("style");u.innerHTML='body{background-color:#161b1d;color:#e2e7e9;font-family:"Fira Sans","Droid Sans","Helvetica Neue","Roboto","Oxygen",sans-serif;margin:0;font-size:1rem;letter-spacing:0}@media (hover: hover){.Flame:hover{box-shadow:#ff8000 0 0 .625rem,red 0 0 1.25rem,0 0 2.5rem rgba(0,0,0,0)}}.Frame{background-color:#161b1d;border-radius:1.25rem;border:.25rem solid #6c8693;display:flex;flex-direction:row;height:2rem;min-width:2rem;overflow:hidden;color:#6c8693}.App header{height:5rem;display:flex;flex-direction:row;justify-content:center;align-items:center}.App header .Controls{display:flex;flex-direction:row;overflow-x:auto;padding:1rem}.App main{height:calc(100vh - 5rem);overflow:hidden}.DipSwitch{margin:0 .625rem}.DipSwitch .checkbox{display:none}.DipSwitch *{cursor:pointer;transition:all .4s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none}.DipSwitch .Small{display:flex;justify-content:center;align-items:center;width:2rem}@media screen and (min-width: 32rem){.DipSwitch .Small{display:none}}.DipSwitch .Large{display:none;align-items:center;padding-right:.625rem}@media screen and (min-width: 32rem){.DipSwitch .Large{display:flex}}.DipSwitch .Frame .toggleWrapper{display:flex;align-items:center;justify-content:center;cursor:pointer;width:2rem;height:2rem}.DipSwitch .Frame .toggleWrapper .toggle{background-color:transparent;border-radius:50%;border:.25rem solid #6c8693;height:.5rem;width:.5rem}.DipSwitch .checkbox:checked+.Frame{background-color:#a7b6be}.DipSwitch .checkbox:checked+.Frame .toggle{background-color:#161b1d;border-color:transparent;border-radius:.6rem;width:0}.DipSwitch .checkbox:checked+.Frame .label{color:#161b1d}.InfiniScroll{height:100%;overflow-y:auto;padding:0 2rem;position:relative}.InfiniScroll .Standard{position:absolute;visibility:hidden}.InfiniScroll .Grid{display:inline-flex;flex-flow:wrap row;justify-content:space-between;gap:8px}.InfiniScroll .Grid nav{background-color:red;bottom:-80%;height:1rem;position:absolute;visibility:hidden;width:1rem}.Length{margin:0 .625rem;display:block;height:2.5rem;width:2.5rem;transition:all .4s ease-in-out;font-family:sans-serif;font-size:1rem;cursor:pointer;text-align:center}.Length:active{background-color:#a7b6be;color:#161b1d}@-webkit-keyframes cardEntrance{0%{opacity:.5}to{opacity:1}}@keyframes cardEntrance{0%{opacity:.5}to{opacity:1}}.Password{font-family:"Fira Code","Menlo","Monaco","Consolas",monospace;font-size:1rem;margin:0}.Password.Ready{-webkit-animation:cardEntrance 2s ease-out backwards;animation:cardEntrance 2s ease-out backwards}\n',document.head.appendChild(u),System.register(["./vendor-legacy.453447f5.js"],(function(t,c){"use strict";var l,u,s,f;return{setters:[function(e){l=e.p,u=e.r,s=e.R,f=e.a}],execute:function(){var t,d,m,h=(a(t={},"09","Number"),a(t,"AZ","Upper Case"),a(t,"SM","Symbol"),t),p=(a(d={},"09","9"),a(d,"AZ","Z"),a(d,"SM","#"),d),v="abcdefghijklmnopqrstuvwxyz",g=(a(m={},"09","0123456789"),a(m,"AZ","ABCDEFGHIJKLMNOPQRSTUVWXYZ"),a(m,"SM","=+-*@$%!&?,.:;^#(){}[]|"),a(m,"az",v),m),y=function(e){var t=o(e,2),r=t[0];return t[1]?g[r]:""},b=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Array.from(new Set(t.flat().join("")))},w=l(1),S=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function E(e){var t=e.generator,r=e.seed,n=function(e){var t=e.generator,r=e.seed,n=o(u.exports.useState(""),2),a=n[0],i=n[1];return u.exports.useEffect((function(){if(null!=t){var e=!0,r=function(t){e&&i(t)};return i(""),w((function(){return Promise.resolve(10).then(S).then(t).then(r)})).catch(console.warn),function(){e=!1,w.clearQueue()}}}),[t,r]),a}({generator:t,seed:r}),a=n?" Ready":"";return s.createElement("p",{className:"Password".concat(a),id:"".concat(r)},n)}function x(e){for(var t=e.length,r=e.charset,n=e.random,o="",a=-1,i=0;i<t;++i){var c=void 0;do{c=n.pop()}while(c===a);a=c,o+=r[c]}return o}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.array=new Uint32Array(1024),this.index=1024,this.range=t}var t,r,o;return t=e,(r=[{key:"pop",value:function(){return this.index>=1024&&(crypto.getRandomValues(this.array),this.index=0),this.array[this.index++]%this.range}}])&&n(t.prototype,r),o&&n(t,o),e}();function O(e){var t;if(0===e)return function(){return Promise.resolve("")};if(e<4)throw new Error("length too short ".concat(e));for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];var a=b.apply(void 0,n);if(a.length<1)throw new Error("empty charset");if(null==(null===(t=crypto)||void 0===t?void 0:t.getRandomValues))throw new Error("missing crypto facility");var i=new k(a.length);return function(){return Promise.resolve({length:e,charset:a,random:i}).then(x)}}var j=l(1);function N(t){var r=t.length,n=t.charset,o=Object.entries(n).map(y);return O.apply(void 0,[r,v].concat(e(o)))}function P(){var e=u.exports.useRef({charset:{},length:0}),t=o(u.exports.useState(e.current),2),n=t[0],a=t[1],i=function(e){var t=u.exports.useRef({}),r=u.exports.useCallback((function(r){clearTimeout(t.current.timeout),t.current.timeout=setTimeout(r,e)}),[e]);return u.exports.useEffect((function(){return function(){return clearTimeout(t.current.timeout)}}),[e]),r}(200),c=N(n);return{generator:function(e){var t={live:!0},r={id:e,ready:!1,value:"".padEnd(null==n?void 0:n.length,"_"),cancel:function(){t.live=!1,delete r.cancel,t.resolve&&t.resolve(),null!=t.timeout&&(clearTimeout(t.timeout),delete t.timeout)}};return r.promise=j((function(){return new Promise((function(e){t.resolve=e,t.timeout=setTimeout(e,10)}))})).then((function(){return t.live?c():Promise.resolve(r.value)})).then((function(e){return t.live?(r.value=e,r.ready=!0,delete r.promise,delete r.cancel,e):r.value})),r},options:n,update:function(t){var o,c,l,u;e.current=(o=e.current,c=t,{charset:r(r({},null==o?void 0:o.charset),null==c?void 0:c.charset),length:null!==(l=null!==(u=null==c?void 0:c.length)&&void 0!==u?u:null==o?void 0:o.length)&&void 0!==l?l:8}),i((function(){var t,r;t=n,r=e.current,JSON.stringify(t)!==JSON.stringify(r)&&a(e.current)}))}}}var A=function(e){return"pwgen-charset-".concat(e)};function I(e){var t=e.charset,r=e.update,n=u.exports.useState((function(){return function(e){try{var t,r=null!==(t=localStorage.getItem(A(e)))&&void 0!==t?t:"false";return JSON.parse(r)}catch(o){var n=o.message;return console.warn(n),!1}}(t)})),i=o(n,2),c=i[0],l=i[1];u.exports.useEffect((function(){return r(a({},t,c))}),[]);var s=function(e){r(a({},t,e)),l(e),function(e,t){Promise.resolve().then((function(){return A(e)})).then((function(e){return localStorage.setItem(e,JSON.stringify(t))})).catch((function(){}))}(t,e)};return[c,function(){return s(!c)}]}function D(e){var t=e.id,r=e.charset,n=e.checked,o=h[r],a=p[r],i="".concat(n?"disable":"enable"," ").concat(o," characters").toLocaleLowerCase();return s.createElement("label",{className:"Frame Flame",htmlFor:t,title:i},s.createElement("div",{className:"Large"},s.createElement("label",{className:"toggleWrapper",htmlFor:t},s.createElement("div",{className:"toggle"})),s.createElement("p",{className:"label"},o)),s.createElement("div",{className:"Small"},s.createElement("p",{className:"label"},a)))}function F(e){var t=o(I(e),2),r=t[0],n=t[1],a="dipSwitch-".concat(e.charset);return s.createElement("div",{className:"DipSwitch","data-testid":a},s.createElement("input",{checked:r,className:"checkbox",id:a,onChange:function(){return n(!r)},type:"checkbox"}),s.createElement(D,{id:a,charset:e.charset,checked:r}))}var C=function(e){var t,r;return(null!==(t=null===(r=e[e.length-1])||void 0===r?void 0:r.id)&&void 0!==t?t:-1)+1},R=function(t){var r=t.full,n=t.size,o=t.slice,a=t.generator;return function(t){if(!o&&t.length>n)return t;if(r){var i=C(t);t.forEach((function(e){var t;return null===(t=e.cancel)||void 0===t?void 0:t.call(e)})),t=[a(i)]}else if(o){var c=Math.ceil(2*n/3);t.slice(0,c).forEach((function(e){var t;return null===(t=e.cancel)||void 0===t?void 0:t.call(e)})),t=t.slice(t.length-c)}return function(t,r){var n=r.generator,o=r.size;if(t.length>o)return t;t=e(t);for(var a=C(t);t.length<o;)t.push(n(a++));return t}(t,{generator:a,size:n})}};function T(e){var t=o(u.exports.useState([]),2),n=t[0],a=t[1],c=o(u.exports.useState({done:!0}),2),l=c[0],s=c[1],f=u.exports.useRef(0),d=u.exports.useCallback((function(e){return s((function(t){return r(r(r({},t),e),{},{done:!1})}))}),[]),m=function(e){var t=u.exports.useRef(null);return u.exports.useEffect((function(){if(t.current){var r=new IntersectionObserver((function(t){o(t,1)[0].isIntersecting&&e({slice:!0})}));return r.observe(t.current),function(){return r.disconnect()}}console.warn("useInfiniScroll IntersectionObserver not ready")}),[e]),t}(d),h=function(e,t){var r=u.exports.useRef(null),n=u.exports.useRef(null);return u.exports.useEffect((function(){if(r.current&&n.current){var o={cw:0,ch:0,iw:0,ih:0},a=new ResizeObserver((function(a){var c,l=i(a);try{for(l.s();!(c=l.n()).done;){var u=c.value,s=u.contentRect,f=u.target;f===n.current&&(o.iw=s.width+8,o.ih=s.height+8),f===r.current&&(o.cw=s.width,o.ch=s.height)}}catch(p){l.e(p)}finally{l.f()}if(o.iw&&o.ih){var d=Math.floor(o.ch/o.ih),m=Math.floor(o.cw/o.iw),h=2*Math.floor(d*m);h>0&&t.current<=h&&e(),t.current=h}}));return a.observe(r.current),a.observe(n.current),function(){return a.disconnect()}}console.warn("useInfiniScroll ResizeObserver not ready")}),[e,t]),[r,n]}(d,f),p=o(h,2),v=p[0],g=p[1];return u.exports.useEffect((function(){return d({full:!0})}),[e,d]),u.exports.useEffect((function(){if(!l.done){var t=setTimeout((function(){s({done:!0}),a(R(r(r({},l),{},{size:f.current,generator:e})))}),500);return function(){return clearTimeout(t)}}}),[l]),{grid:v,list:n,standard:g,loader:m}}function M(e){var t=e.id,r=e.value,n=e.promise,a=e.cancel,i=o(u.exports.useState(r),2),c=i[0],l=i[1];return u.exports.useEffect((function(){return n&&n.then((function(e){return l(e.padEnd(length,"*"))})).catch(console.warn),a}),[n,a]),s.createElement("button",{className:"Password",id:"".concat(t)},c)}function L(e){var t=e.generator,n=e.options.length,o=T(t),a=o.grid,i=o.list,c=o.loader,l=o.standard,f=u.exports.useCallback((function(e){return s.createElement(M,r(r({key:e.id},e),{length:n}))}),[i,n]),d=u.exports.useMemo((function(){return s.createElement("div",{className:"Standard",ref:l},s.createElement(M,r({},t(-1))))}),[t,l]);return s.createElement("section",{className:"InfiniScroll",ref:a},d,s.createElement("div",{className:"Grid"},i.map(f),s.createElement("nav",{ref:c})))}var z="pwgen-length";function J(){try{var e,t=null!==(e=localStorage.getItem(z))&&void 0!==e?e:"8";return JSON.parse(t)}catch(n){var r=n.message;return console.warn(r),8}}var Z={8:12,12:16,16:24,24:32,32:8};function G(e){var t=e.update,r=o(u.exports.useState(J),2),n=r[0],a=r[1];u.exports.useEffect((function(){return t(n)}),[]);var i=function(e){var r;t(e),a(e),r=e,Promise.resolve().then((function(){return localStorage.setItem(z,JSON.stringify(r))})).catch((function(){}))};return[n,function(){var e;return i(null!==(e=Z[n])&&void 0!==e?e:8)}]}function U(e){var t=o(G(e),2),r=t[0],n=t[1];return s.createElement("button",{className:"Frame Flame Length","data-testid":"Length",onClick:function(){return n()},type:"submit",title:"change the length of the password"},r)}function W(e){var t=e.update,r=function(e){return t({charset:e})};return s.createElement("div",{className:"Controls"},s.createElement(U,{update:function(e){return t({length:e})}}),s.createElement(F,{charset:"AZ",update:r}),s.createElement(F,{charset:"09",update:r}),s.createElement(F,{charset:"SM",update:r}))}function B(){var e=P();return s.createElement("div",{className:"App"},s.createElement("main",null,s.createElement(L,r(r({},e),{},{Component:E}))),s.createElement("header",null,s.createElement(W,r({},e))))}var H,V;f.render(s.createElement(B,null),document.getElementById("root")),H instanceof Function&&(V=function(){return c.import("./web-vitals-legacy.07020f14.js")},V()).then((function(e){var t=e.getCLS,r=e.getFID,n=e.getFCP,o=e.getLCP,a=e.getTTFB;t(H),r(H),n(H),o(H),a(H)})).catch((function(e){var t=e.stack;return console.warn(t)}))}}}))}();
