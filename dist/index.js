!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).gimmeAMonster=e()}(function(){return function n(r,i,a){function u(t,e){if(!i[t]){if(!r[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(s)return s(t,!0);throw(o=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",o}o=i[t]={exports:{}},r[t][0].call(o.exports,function(e){return u(r[t][1][e]||e)},o,o.exports,n,r,i,a)}return i[t].exports}for(var s="function"==typeof require&&require,e=0;e<a.length;e++)u(a[e]);return u}({1:[function(e,t,o){t.exports=["red","blue","green","yellow","purple"]},{}],2:[function(e,t,o){t.exports=["round eyed","square eyed"]},{}],3:[function(e,t,o){t.exports=["alien","monster"]},{}],4:[function(e,t,o){t.exports=["tiny","small","huge","enormous"]},{}],5:[function(e,t,o){t.exports=["round","square","oval"]},{}],6:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});const n=e("./monsterGenerator");o.default=e=>(0,n.generate)(e.complexity)},{"./monsterGenerator":7}],7:[function(e,t,o){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){e[n=void 0===n?o:n]=t[o]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t};Object.defineProperty(o,"__esModule",{value:!0}),o.generate=void 0;const a=i(e("./data/color-options.json")),u=i(e("./data/shape-options.json")),s=i(e("./data/mouth-options.json")),d=i(e("./data/eye-options.json")),f=i(e("./data/monster-options.json")),l=e("./randomValueGenerator");o.generate=(e="low")=>{var t={color:"",type:"",stringify:""};return"high"===e&&c(t),"high"!==e&&"medium"!==e||(p(t),m(t)),y(t),g(t),t};const c=e=>{e.eyeAmount=(0,l.getRandomNumber)(10),e.eyes=(0,l.getRandomValue)(d),e.stringify+=e.eyeAmount+" "+e.eyes+" "},p=e=>{e.mouth=(0,l.getRandomValue)(s),e.stringify+=e.mouth+" "},m=e=>{e.shape=(0,l.getRandomValue)(u),e.stringify+=e.shape+" "},y=e=>{e.color=(0,l.getRandomValue)(a),e.stringify+=e.color+" "},g=e=>{e.type=(0,l.getRandomValue)(f),e.stringify+=e.type}},{"./data/color-options.json":1,"./data/eye-options.json":2,"./data/monster-options.json":3,"./data/mouth-options.json":4,"./data/shape-options.json":5,"./randomValueGenerator":8}],8:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.getRandomNumber=o.getRandomValue=void 0;o.getRandomValue=e=>e[Math.floor(Math.random()*e.length)];o.getRandomNumber=e=>Math.floor(Math.random()*e)},{}]},{},[6])(6)});
//# sourceMappingURL=index.js.map
