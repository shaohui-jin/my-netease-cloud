(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-143290c7"],{"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),c=n("da84"),o=n("c65b"),a=n("e330"),i=n("1626"),u=n("861d"),l=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),f=c.Error,s=a(/./.test);r({target:"RegExp",proto:!0,forced:!l},{test:function(e){var t=this.exec;if(!i(t))return s(this,e);var n=o(t,this,e);if(null!==n&&!u(n))throw new f("RegExp exec method returned something other than an Object or null");return!!n}})},"06c5":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3"),n("ac1f"),n("00b4");var r=n("6b75");function c(e,t){if(e){if("string"===typeof e)return Object(r["a"])(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(e,t):void 0}}},"18ef":function(e,t,n){"use strict";n.d(t,"m",(function(){return c})),n.d(t,"p",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"q",(function(){return i})),n.d(t,"o",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"j",(function(){return f})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"h",(function(){return b})),n.d(t,"g",(function(){return p})),n.d(t,"i",(function(){return m})),n.d(t,"k",(function(){return j})),n.d(t,"l",(function(){return O})),n.d(t,"f",(function(){return v})),n.d(t,"n",(function(){return h})),n.d(t,"a",(function(){return y}));var r=n("1ae0");function c(){return Object(r["a"])({url:"/video/group/list"})}function o(){return Object(r["a"])({url:"/video/category/list"})}function a(e){return Object(r["a"])({url:"/video/timeline/all",params:{offset:e}})}function i(e){return Object(r["a"])({url:"/video/url?id=".concat(e)})}function u(e){return Object(r["a"])({url:"/video/detail?id=".concat(e)})}function l(e){return Object(r["a"])({url:"/video/group",params:e})}function f(e){return Object(r["a"])({url:"/mv/first",params:{limit:8,area:e}})}function s(){return Object(r["a"])({url:"/personalized/mv"})}function d(){return Object(r["a"])({url:"/mv/exclusive/rcmd",params:{limit:8}})}function b(e,t){return Object(r["a"])({url:"/top/mv",params:{limit:10,area:e,offset:t}})}function p(e){return Object(r["a"])({url:"/mv/detail?mvid=".concat(e)})}function m(e){return Object(r["a"])({url:"/mv/url?id=".concat(e)})}function j(e){return Object(r["a"])({url:"/simi/mv?mvid=".concat(e)})}function O(e){return Object(r["a"])({url:"/related/allvideo?id=".concat(e)})}function v(e,t){return Object(r["a"])({url:"/comment/mv",params:{id:e,limit:10,offset:t}})}function h(e,t){return Object(r["a"])({url:"/comment/video",params:{id:e,limit:10,offset:t}})}function y(e){return Object(r["a"])({url:"/mv/all",params:e})}},"1f49":function(e,t,n){"use strict";n("a9e3");var r=n("7a23"),c={style:{width:"49%","margin-top":"15px",display:"flex","justify-content":"flex-start"}},o={style:{"margin-left":"10px",display:"flex","flex-direction":"column","justify-content":"space-evenly"}},a={props:{count:{type:Number,default:1},loading:{type:Number,default:0}},setup:function(e){return function(t,n){var a=Object(r["resolveComponent"])("el-skeleton-item"),i=Object(r["resolveComponent"])("el-skeleton");return Object(r["openBlock"])(),Object(r["createBlock"])(i,{loading:!Boolean(e.loading),count:e.count,animated:!0,style:{width:"100%",display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},{template:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",c,[Object(r["createVNode"])(a,{variant:"image",style:{width:"234px",height:"130px"}}),Object(r["createElementVNode"])("div",o,[Object(r["createVNode"])(a,{variant:"h1",style:{width:"321px"}}),Object(r["createVNode"])(a,{variant:"h1",style:{width:"250px"}})])])]})),default:Object(r["withCtx"])((function(){return[Object(r["renderSlot"])(t.$slots,"default")]})),_:3},8,["loading","count"])}}};const i=a;t["a"]=i},"20f5":function(e,t,n){"use strict";n("59d4")},2909:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("6b75");function c(e){if(Array.isArray(e))return Object(r["a"])(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var a=n("06c5");n("d9e2");function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return c(e)||o(e)||Object(a["a"])(e)||i()}},"4df4":function(e,t,n){"use strict";var r=n("da84"),c=n("0366"),o=n("c65b"),a=n("7b0b"),i=n("9bdd"),u=n("e95a"),l=n("68ee"),f=n("07fa"),s=n("8418"),d=n("9a1f"),b=n("35a1"),p=r.Array;e.exports=function(e){var t=a(e),n=l(this),r=arguments.length,m=r>1?arguments[1]:void 0,j=void 0!==m;j&&(m=c(m,r>2?arguments[2]:void 0));var O,v,h,y,g,k,E=b(t),x=0;if(!E||this==p&&u(E))for(O=f(t),v=n?new this(O):p(O);O>x;x++)k=j?m(t[x],x):t[x],s(v,x,k);else for(y=d(t,E),g=y.next,v=n?new this:[];!(h=o(g,y)).done;x++)k=j?i(y,m,[h.value,x],!0):h.value,s(v,x,k);return v.length=x,v}},5063:function(e,t,n){},"59d4":function(e,t,n){},"6b75":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"9bdd":function(e,t,n){var r=n("825a"),c=n("2a62");e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(a){c(e,"throw",a)}}},a630:function(e,t,n){var r=n("23e7"),c=n("4df4"),o=n("1c7e"),a=!o((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:a},{from:c})},a87e:function(e,t,n){"use strict";n("5063")},ab36:function(e,t,n){var r=n("861d"),c=n("9112");e.exports=function(e,t){r(t)&&"cause"in t&&c(e,"cause",t.cause)}},b980:function(e,t,n){var r=n("d039"),c=n("5c6c");e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",c(1,7)),7!==e.stack)}))},c770:function(e,t,n){var r=n("e330"),c=r("".replace),o=function(e){return String(Error(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,i=a.test(o);e.exports=function(e,t){if(i&&"string"==typeof e)while(t--)e=c(e,a,"");return e}},d28b:function(e,t,n){var r=n("746f");r("iterator")},d9e2:function(e,t,n){var r=n("23e7"),c=n("da84"),o=n("2ba4"),a=n("e5cb"),i="WebAssembly",u=c[i],l=7!==Error("e",{cause:7}).cause,f=function(e,t){var n={};n[e]=a(e,t,l),r({global:!0,forced:l},n)},s=function(e,t){if(u&&u[e]){var n={};n[e]=a(i+"."+e,t,l),r({target:i,stat:!0,forced:l},n)}};f("Error",(function(e){return function(t){return o(e,this,arguments)}})),f("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),f("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),f("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),f("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),f("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),f("URIError",(function(e){return function(t){return o(e,this,arguments)}})),s("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),s("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),s("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},db0d:function(e,t,n){"use strict";n.r(t);var r=n("2909"),c=n("1da1"),o=(n("b0c0"),n("96cf"),n("7a23")),a=n("1f49"),i=n("6c02"),u=n("f63a"),l=n("18ef"),f=function(e){return Object(o["pushScopeId"])("data-v-e7149986"),e=e(),Object(o["popScopeId"])(),e},s=Object(o["createTextVNode"])("MV排行榜"),d={class:"right"},b=["onClick"],p=["onClick"],m=f((function(){return Object(o["createElementVNode"])("br",null,null,-1)})),j=Object(o["createTextVNode"])("点击加载更多"),O=Object(o["createTextVNode"])("没有数据了"),v={setup:function(e){var t=Object(o["ref"])(!0),n=Object(o["ref"])("内地"),f=Object(o["ref"])(["内地","港台","欧美","日本","韩国"]),v=Object(o["ref"])([]);Object(o["onMounted"])(Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["h"])(n.value);case 2:t=e.sent,v.value=t.data.data;case 4:case"end":return e.stop()}}),e)}))));var h=function(e){n.value=e,Object(l["h"])(n.value).then((function(e){v.value=e.data.data}))},y=Object(i["d"])(),g=function(e){y.push("/videoDetail?id=".concat(e))},k=0,E=function(){k+=10,Object(l["h"])(n.value,k).then((function(e){var t;(t=v.value).push.apply(t,Object(r["a"])(e.data.data))})).catch((function(e){t.value=!1}))};return function(e,r){var c=Object(o["resolveComponent"])("titleTop"),i=Object(o["resolveComponent"])("el-divider");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("header",null,[Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(c,null,{default:Object(o["withCtx"])((function(){return[s]})),_:1})]),Object(o["createElementVNode"])("div",d,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(Object(o["unref"])(f),(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{onClick:function(t){return h(e)},class:Object(o["normalizeClass"])({active:Object(o["unref"])(n)===e}),key:t},Object(o["toDisplayString"])(e),11,b)})),128))])]),Object(o["createVNode"])(a["a"],{count:10,loading:Object(o["unref"])(v).length},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("section",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(Object(o["unref"])(v),(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("main",{class:"mvTopList",onClick:function(t){return g(e.id)},key:e.id},[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])({active:t<3}),style:{width:"30px","font-size":"25px","margin-right":"10px","font-weight":"900"}},Object(o["toDisplayString"])(t+1<10?"0".concat(t+1):t+1),3),Object(o["createVNode"])(u["a"],{image:e.cover,count:e.score,label:e.artists,name:e.name},null,8,["image","count","label","name"])],8,p)})),128))])]})),_:1},8,["loading"]),m,Object(o["unref"])(t)&&Object(o["unref"])(v).length>9?(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:0,onClick:E},{default:Object(o["withCtx"])((function(){return[j]})),_:1})):(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:1},{default:Object(o["withCtx"])((function(){return[O]})),_:1}))],64)}}},h=(n("20f5"),n("6b0d")),y=n.n(h);const g=y()(v,[["__scopeId","data-v-e7149986"]]);t["default"]=g},e391:function(e,t,n){var r=n("577e");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},e5cb:function(e,t,n){"use strict";var r=n("d066"),c=n("1a2d"),o=n("9112"),a=n("3a9b"),i=n("d2bb"),u=n("e893"),l=n("7156"),f=n("e391"),s=n("ab36"),d=n("c770"),b=n("b980"),p=n("c430");e.exports=function(e,t,n,m){var j=m?2:1,O=e.split("."),v=O[O.length-1],h=r.apply(null,O);if(h){var y=h.prototype;if(!p&&c(y,"cause")&&delete y.cause,!n)return h;var g=r("Error"),k=t((function(e,t){var n=f(m?t:e,void 0),r=m?new h(e):new h;return void 0!==n&&o(r,"message",n),b&&o(r,"stack",d(r.stack,2)),this&&a(y,this)&&l(r,this,k),arguments.length>j&&s(r,arguments[j]),r}));if(k.prototype=y,"Error"!==v&&(i?i(k,g):u(k,g,{name:!0})),u(k,h),!p)try{y.name!==v&&o(y,"name",v),y.constructor=k}catch(E){}return k}}},f63a:function(e,t,n){"use strict";n("a9e3"),n("fb6a"),n("b0c0");var r=n("7a23"),c=function(e){return Object(r["pushScopeId"])("data-v-32d9a7ac"),e=e(),Object(r["popScopeId"])(),e},o={class:"cover"},a={class:"left"},i={class:"play"},u=c((function(){return Object(r["createElementVNode"])("i",{class:"el-icon-caret-right"},null,-1)})),l={class:"playCount"},f={key:0,class:"time"},s={class:"right"},d={class:"name"},b={key:0,class:"label"},p={key:1,class:"label"},m={props:{image:{type:String},name:{type:String},time:{type:Number},label:{type:[String,Array]},count:{type:Number}},setup:function(e){return function(t,n){var c=Object(r["resolveComponent"])("el-image");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createElementVNode"])("div",a,[Object(r["createVNode"])(c,{src:e.image,class:"image"},null,8,["src"]),Object(r["createElementVNode"])("div",i,[u,Object(r["createElementVNode"])("span",l,Object(r["toDisplayString"])(t.$formatNumber(e.count)),1)]),e.time?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",f,Object(r["toDisplayString"])(t.$formatTime(e.time).slice(-5)),1)):Object(r["createCommentVNode"])("",!0)]),Object(r["createElementVNode"])("div",s,[Object(r["createElementVNode"])("div",d,Object(r["toDisplayString"])(e.name),1),Array.isArray(e.label)?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",b,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.label,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:t},[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.name||e.userName),1)],64)})),128))])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",p,Object(r["toDisplayString"])(e.label),1))])])}}},j=(n("a87e"),n("6b0d")),O=n.n(j);const v=O()(m,[["__scopeId","data-v-32d9a7ac"]]);t["a"]=v}}]);