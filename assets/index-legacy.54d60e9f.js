!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?e(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);c=!0);}catch(l){i=!0,a=l}finally{try{c||null==r.return||r.return()}finally{if(i)throw a}}return o}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=document.createElement("style");l.innerHTML='body{background-color:#161b1d;color:#e2e7e9;font-family:"Fira Sans","Droid Sans","Helvetica Neue","Roboto","Oxygen",sans-serif;margin:0}code{font-family:"Fira Code","Menlo","Monaco","Consolas",monospace}.Flame:hover{box-shadow:#ff8000 0 0 .625rem,red 0 0 1.25rem,0 0 2.5rem rgba(0,0,0,0)}.Frame{background-color:#161b1d;border-radius:1.25rem;border:.25rem solid #6c8693;display:flex;flex-direction:row;height:2rem;min-width:2rem;overflow:hidden;color:#6c8693}.App header{height:5rem;display:flex;flex-direction:row;justify-content:center;align-items:center}.App header .Controls{display:flex;flex-direction:row;overflow-x:auto;padding:2rem}.App main{height:calc(100vh - 5rem);overflow-y:auto}.DipSwitch{margin:0 .625rem}.DipSwitch .checkbox{display:none}.DipSwitch *{cursor:pointer;transition:all .4s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none}.DipSwitch .Small{display:flex;justify-content:center;align-items:center;width:2rem}@media screen and (min-width: 32rem){.DipSwitch .Small{display:none}}.DipSwitch .Large{display:none;align-items:center;padding-right:.625rem}@media screen and (min-width: 32rem){.DipSwitch .Large{display:flex}}.DipSwitch .Frame .toggleWrapper{display:flex;align-items:center;justify-content:center;cursor:pointer;width:2rem;height:2rem}.DipSwitch .Frame .toggleWrapper .toggle{background-color:transparent;border-radius:50%;border:.25rem solid #6c8693;height:.5rem;width:.5rem}.DipSwitch .checkbox:checked+.Frame{background-color:#a7b6be}.DipSwitch .checkbox:checked+.Frame .toggle{background-color:#161b1d;border-color:transparent;border-radius:.6rem;width:0}.DipSwitch .checkbox:checked+.Frame .label{color:#161b1d}.Length{margin:0 .625rem;display:block;height:2.5rem;width:2.5rem;transition:all .4s ease-in-out;font-family:sans-serif;font-size:1rem;cursor:pointer;text-align:center}.Length:active{background-color:#a7b6be;color:#161b1d}\n',document.head.appendChild(l),System.register(["./vendor-legacy.fd570d5a.js"],(function(e,c){"use strict";var i,l,u;return{setters:[function(e){i=e.r,l=e.R,u=e.a}],execute:function(){var e,s,f,m=(o(e={},"09","Number"),o(e,"AZ","Upper Case"),o(e,"SM","Symbol"),e),d=(o(s={},"09","9"),o(s,"AZ","Z"),o(s,"SM","#"),s),h="abcdefghijklmnopqrstuvwxyz",p=(o(f={},"09","0123456789"),o(f,"AZ","ABCDEFGHIJKLMNOPQRSTUVWXYZ"),o(f,"SM","=+-*@$%!&?,.:;^#(){}[]|"),o(f,"az",h),f),g=function(e){var t=a(e,2),r=t[0];return t[1]?p[r]:""},v=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Array.from(new Set(t.flat().join("")))},y=function(e){return"pwgen-charset-".concat(e)};function b(e){var t=e.charset,r=e.update,n=i.exports.useState((function(){return function(e){try{var t,r=null!==(t=localStorage.getItem(y(e)))&&void 0!==t?t:"false";return JSON.parse(r)}catch(a){var n=a.message;return console.warn(n),!1}}(t)})),c=a(n,2),l=c[0],u=c[1];i.exports.useEffect((function(){return r(o({},t,l))}),[]);var s=function(e){r(o({},t,e)),u(e),function(e,t){Promise.resolve().then((function(){return y(e)})).then((function(e){return localStorage.setItem(e,JSON.stringify(t))})).catch((function(){}))}(t,e)};return[l,function(){return s(!l)}]}function w(e){var t=a(b(e),2),r=t[0],n=t[1],o="dipSwitch-".concat(e.charset),c=m[e.charset],i=d[e.charset],u="".concat(r?"disable":"enable"," ").concat(c," characters").toLocaleLowerCase();return l.createElement("div",{className:"DipSwitch","data-testid":o},l.createElement("input",{checked:r,className:"checkbox",id:o,onChange:function(){return n(!r)},type:"checkbox"}),l.createElement("label",{className:"Frame Flame",htmlFor:o,title:u},l.createElement("div",{className:"Large"},l.createElement("label",{className:"toggleWrapper",htmlFor:o},l.createElement("div",{className:"toggle"})),l.createElement("p",{className:"label"},c)),l.createElement("div",{className:"Small"},l.createElement("p",{className:"label"},i))))}var S={root:null,rootMargin:"20px",threshold:0};function E(e){for(var t=e.length,r=(0===t?-1:e[t-1])+1,n=e.slice(t-25),a=r;a<r+25;a++)n.push(a);return n}function x(e){var t=e.render,r=function(){var e=a(i.exports.useState([]),2),t=e[0],r=e[1],n=i.exports.useRef(null);return i.exports.useEffect((function(){if(n.current){var e=new IntersectionObserver((function(e){var t;null!==(t=e[0])&&void 0!==t&&t.isIntersecting&&r(E)}),S);return e.observe(n.current),function(){return e.disconnect()}}}),[]),{list:t,loader:n}}(),n=r.list,o=r.loader;return l.createElement("section",{className:"InfiniScroll"},n.map(t),l.createElement("nav",{ref:o}))}function O(e){var t=function(e){var t=a(i.exports.useState(""),2),r=t[0],n=t[1];return i.exports.useEffect((function(){var t=!0;if(null!=e)return e().then((function(e){t&&n(e)})).catch(console.warn),function(){t=!1}}),[e]),r}(e.generator);return l.createElement("pre",null,t)}function j(e){for(var t=e.length,r=e.charset,n=e.random,a="",o=-1,c=0;c<t;++c){var i=void 0;do{i=n.pop()}while(i===o);o=i,a+=r[i]}return a}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.array=new Uint32Array(1024),this.index=1024,this.range=t}var t,r,a;return t=e,(r=[{key:"pop",value:function(){return this.index>=1024&&(crypto.getRandomValues(this.array),this.index=0),this.array[this.index++]%this.range}}])&&n(t.prototype,r),a&&n(t,a),e}();function A(e){var t;if(e<1)throw new Error("length too short ".concat(e));for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];var o=v.apply(void 0,n);if(o.length<1)throw new Error("empty charset");if(null==(null===(t=crypto)||void 0===t?void 0:t.getRandomValues))throw new Error("missing crypto facility");var c=new k(o.length);return function(){return Promise.resolve({length:e,charset:o,random:c}).then(j)}}function D(){var e=a(i.exports.useState({}),2),n=e[0],o=e[1],c=a(i.exports.useState(8),2),u=c[0],s=c[1],f=Object.entries(n).map(g),m=A.apply(void 0,[u,h].concat(r(f)));return[function(e){return l.createElement(O,t({key:e},{generator:m}))},function(e){var r=e.charset,a=e.length;void 0!==r&&o(t(t({},n),r)),void 0!==a&&a>=4&&s(a)}]}var F="pwgen-length";function N(){try{var e,t=null!==(e=localStorage.getItem(F))&&void 0!==e?e:"8";return JSON.parse(t)}catch(n){var r=n.message;return console.warn(r),8}}var P={8:12,12:16,16:24,24:32,32:8};function C(e){var t=e.update,r=a(i.exports.useState(N),2),n=r[0],o=r[1];i.exports.useEffect((function(){return t(n)}),[]);var c=function(e){var r;t(e),o(e),r=e,Promise.resolve().then((function(){return localStorage.setItem(F,JSON.stringify(r))})).catch((function(){}))};return[n,function(){var e;return c(null!==(e=P[n])&&void 0!==e?e:8)}]}function I(e){var t=a(C(e),2),r=t[0],n=t[1];return l.createElement("button",{className:"Frame Flame Length","data-testid":"Length",onClick:function(){return n()},type:"submit",title:"change the length of the password"},r)}function L(e){var t=e.update,r=function(e){return t({charset:e})};return l.createElement("div",{className:"Controls"},l.createElement(w,{charset:"AZ",update:r}),l.createElement(w,{charset:"09",update:r}),l.createElement(w,{charset:"SM",update:r}),l.createElement(I,{update:function(e){return t({length:e})}}))}function M(){var e=a(D(),2),t=e[0],r=e[1];return l.createElement("div",{className:"App"},l.createElement("header",null,l.createElement(L,{update:r})),l.createElement("main",null,l.createElement(x,{render:t})))}var T,R;u.render(l.createElement(i.exports.StrictMode,null,l.createElement(M,null)),document.getElementById("root")),T instanceof Function&&(R=function(){return c.import("./web-vitals-legacy.07020f14.js")},R()).then((function(e){var t=e.getCLS,r=e.getFID,n=e.getFCP,a=e.getLCP,o=e.getTTFB;t(T),r(T),n(T),a(T),o(T)})).catch((function(e){var t=e.stack;return console.warn(t)}))}}}))}();
