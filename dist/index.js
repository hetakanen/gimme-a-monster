!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).gimmeAMonster=e()}(function(){return function n(r,a,s){function i(o,e){if(!a[o]){if(!r[o]){var t="function"==typeof require&&require;if(!e&&t)return t(o,!0);if(u)return u(o,!0);throw(t=new Error("Cannot find module '"+o+"'")).code="MODULE_NOT_FOUND",t}t=a[o]={exports:{}},r[o][0].call(t.exports,function(e){return i(r[o][1][e]||e)},t,t.exports,n,r,a,s)}return a[o].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)i(s[e]);return i}({1:[function(e,o,t){o.exports=["red","blue","green","yellow","purple"]},{}],2:[function(e,o,t){o.exports=["round-eyed","square-eyed","googly-eyed"]},{}],3:[function(e,o,t){o.exports=["alien","monster"]},{}],4:[function(e,o,t){o.exports=["smiling","grinning","pouting","screaming"]},{}],5:[function(e,o,t){o.exports=["round","square","oval"]},{}],6:[function(e,o,t){o.exports=["tiny","small","huge","enormous"]},{}],7:[function(e,o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=e("./monsterGenerator");o.exports={generateMonster:e=>(0,n.generate)(e),sayHello:()=>{console.log("hello")}}},{"./monsterGenerator":8}],8:[function(e,o,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.generate=void 0;const r=n(e("./data/color-options.json")),a=n(e("./data/size-options.json")),s=n(e("./data/shape-options.json")),i=n(e("./data/mood-options.json")),u=n(e("./data/eye-options.json")),d=n(e("./data/monster-options.json")),p=e("./randomValueGenerator"),l=e("./stringFormatter");t.generate=e=>{var{complexity:o,casing:e}=e;const t={stringified:"",properties:{}};"high"===o&&(t.properties.size=(0,p.getRandomValue)(a.default),t.properties.mood=(0,p.getRandomValue)(i.default)),"high"!==o&&"medium"!==o||(t.properties.eyes=(0,p.getRandomValue)(u.default),t.properties.shape=(0,p.getRandomValue)(s.default)),t.properties.color=(0,p.getRandomValue)(r.default),t.properties.type=(0,p.getRandomValue)(d.default);o=f(t.properties);return t.stringified=(0,l.format)(o,e),t};const f=e=>{const o=[];for(const t in e)o.push(e[t]);return o.join(" ")}},{"./data/color-options.json":1,"./data/eye-options.json":2,"./data/monster-options.json":3,"./data/mood-options.json":4,"./data/shape-options.json":5,"./data/size-options.json":6,"./randomValueGenerator":9,"./stringFormatter":10}],9:[function(e,o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomNumber=t.getRandomValue=void 0;t.getRandomValue=e=>e[Math.floor(Math.random()*e.length)];t.getRandomNumber=(e,o=0)=>Math.floor(Math.random()*(e-o+1)+o)},{}],10:[function(e,o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.format=void 0;t.format=(e,o)=>{switch(o){case"capitalize":return(t=e).charAt(0).toUpperCase()+t.slice(1);case"upper":return e.toUpperCase();case"lower":return e.toLocaleLowerCase();default:return e}var t}},{}]},{},[7])(7)});
//# sourceMappingURL=index.js.map
