!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-lupus-paragraph-quote",[],t):"object"==typeof exports?exports["vue-lupus-paragraph-quote"]=t():e["vue-lupus-paragraph-quote"]=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"PgQuote",props:{dataFieldText:{type:String,default:function(){return""}}},computed:{hasText:function(){return""!==this.dataFieldText}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t.default=o.a},function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"paragraph paragraph--quote"},[this.hasText?t("div",{staticClass:"paragraph__field-quote",domProps:{innerHTML:this._s(this.fieldText)}}):this._e(),this._v(" "),this._t("field-text")],2)},o=[];r._withStripped=!0,n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},function(e,t,n){"use strict";function r(e,t,n,r,o,u,i,a){var s,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),u&&(f._scopeId="data-v-"+u),i?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=s):o&&(s=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(f.functional){f._injectStyles=s;var c=f.render;f.render=function(e,t){return s.call(t),c(e,t)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,s):[s]}return{exports:e,options:f}}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(1);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);var i=n(3),a=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);a.options.__file="src/pg-quote.vue",t.default=a.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PgQuote=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(4));t.PgQuote=r.default}])});