(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c2a7aca"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var c=n("6b75");function r(t,e){if(t){if("string"===typeof t)return Object(c["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(c["a"])(t,e):void 0}}},"18ef":function(t,e,n){"use strict";n.d(e,"m",(function(){return r})),n.d(e,"p",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"q",(function(){return i})),n.d(e,"o",(function(){return o})),n.d(e,"c",(function(){return b})),n.d(e,"j",(function(){return l})),n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return f})),n.d(e,"h",(function(){return O})),n.d(e,"g",(function(){return d})),n.d(e,"i",(function(){return j})),n.d(e,"k",(function(){return v})),n.d(e,"l",(function(){return p})),n.d(e,"f",(function(){return m})),n.d(e,"n",(function(){return y})),n.d(e,"a",(function(){return g}));var c=n("1ae0");function r(){return Object(c["a"])({url:"/video/group/list"})}function a(){return Object(c["a"])({url:"/video/category/list"})}function u(t){return Object(c["a"])({url:"/video/timeline/all",params:{offset:t}})}function i(t){return Object(c["a"])({url:"/video/url?id=".concat(t)})}function o(t){return Object(c["a"])({url:"/video/detail?id=".concat(t)})}function b(t){return Object(c["a"])({url:"/video/group",params:t})}function l(t){return Object(c["a"])({url:"/mv/first",params:{limit:8,area:t}})}function s(){return Object(c["a"])({url:"/personalized/mv"})}function f(){return Object(c["a"])({url:"/mv/exclusive/rcmd",params:{limit:8}})}function O(t,e){return Object(c["a"])({url:"/top/mv",params:{limit:10,area:t,offset:e}})}function d(t){return Object(c["a"])({url:"/mv/detail?mvid=".concat(t)})}function j(t){return Object(c["a"])({url:"/mv/url?id=".concat(t)})}function v(t){return Object(c["a"])({url:"/simi/mv?mvid=".concat(t)})}function p(t){return Object(c["a"])({url:"/related/allvideo?id=".concat(t)})}function m(t,e){return Object(c["a"])({url:"/comment/mv",params:{id:t,limit:10,offset:e}})}function y(t,e){return Object(c["a"])({url:"/comment/video",params:{id:t,limit:10,offset:e}})}function g(t){return Object(c["a"])({url:"/mv/all",params:t})}},"1f49":function(t,e,n){"use strict";n("a9e3");var c=n("7a23"),r={style:{width:"49%","margin-top":"15px",display:"flex","justify-content":"flex-start"}},a={style:{"margin-left":"10px",display:"flex","flex-direction":"column","justify-content":"space-evenly"}},u={props:{count:{type:Number,default:1},loading:{type:Number,default:0}},setup:function(t){return function(e,n){var u=Object(c["X"])("el-skeleton-item"),i=Object(c["X"])("el-skeleton");return Object(c["O"])(),Object(c["m"])(i,{loading:!Boolean(t.loading),count:t.count,animated:!0,style:{width:"100%",display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},{template:Object(c["nb"])((function(){return[Object(c["p"])("div",r,[Object(c["s"])(u,{variant:"image",style:{width:"234px",height:"130px"}}),Object(c["p"])("div",a,[Object(c["s"])(u,{variant:"h1",style:{width:"321px"}}),Object(c["s"])(u,{variant:"h1",style:{width:"250px"}})])])]})),default:Object(c["nb"])((function(){return[Object(c["W"])(e.$slots,"default")]})),_:3},8,["loading","count"])}}};const i=u;e["a"]=i},"4df4":function(t,e,n){"use strict";var c=n("0366"),r=n("7b0b"),a=n("9bdd"),u=n("e95a"),i=n("50c4"),o=n("8418"),b=n("9a1f"),l=n("35a1");t.exports=function(t){var e,n,s,f,O,d,j=r(t),v="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,y=void 0!==m,g=l(j),h=0;if(y&&(m=c(m,p>2?arguments[2]:void 0,2)),void 0==g||v==Array&&u(g))for(e=i(j.length),n=new v(e);e>h;h++)d=y?m(j[h],h):j[h],o(n,h,d);else for(f=b(j,g),O=f.next,n=new v;!(s=O.call(f)).done;h++)d=y?a(f,m,[s.value,h],!0):s.value,o(n,h,d);return n.length=h,n}},"685a":function(t,e,n){"use strict";n("b2d4")},6970:function(t,e,n){},"6b75":function(t,e,n){"use strict";function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,c=new Array(e);n<e;n++)c[n]=t[n];return c}n.d(e,"a",(function(){return c}))},"714f":function(t,e,n){},"8ffd":function(t,e,n){"use strict";n("a9e3");var c=n("7a23"),r={style:{width:"24%"}},a={props:{count:{type:Number,default:1},loading:{type:Number,default:0}},setup:function(t){return function(e,n){var a=Object(c["X"])("el-skeleton-item"),u=Object(c["X"])("el-skeleton");return Object(c["O"])(),Object(c["m"])(u,{loading:!Boolean(t.loading),count:t.count,animated:!0,style:{width:"100%",display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},{template:Object(c["nb"])((function(){return[Object(c["p"])("div",r,[Object(c["s"])(a,{variant:"image",style:{width:"100%",height:"150px"}}),Object(c["s"])(a,{variant:"p",style:{width:"100%",margin:"10px 0"}}),Object(c["s"])(a,{variant:"p",style:{width:"100%"}})])]})),default:Object(c["nb"])((function(){return[Object(c["W"])(e.$slots,"default")]})),_:3},8,["loading","count"])}}};const u=a;e["a"]=u},9342:function(t,e,n){"use strict";function c(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return o}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var c,r,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(c=n.next()).done);u=!0)if(a.push(c.value),e&&a.length===e)break}catch(o){i=!0,r=o}finally{try{u||null==n["return"]||n["return"]()}finally{if(i)throw r}}return a}}var a=n("06c5");function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){return c(t)||r(t,e)||Object(a["a"])(t,e)||u()}function o(t){return new Promise((function(e){var n=new IntersectionObserver((function(c){var r=i(c,1),a=r[0].isIntersecting;a&&(e(),n.unobserve(t.value))}));n.observe(t.value)}))}},"9bdd":function(t,e,n){var c=n("825a"),r=n("2a62");t.exports=function(t,e,n,a){try{return a?e(c(n)[0],n[1]):e(n)}catch(u){r(t,"throw",u)}}},a288:function(t,e,n){"use strict";n("714f")},a630:function(t,e,n){var c=n("23e7"),r=n("4df4"),a=n("1c7e"),u=!a((function(t){Array.from(t)}));c({target:"Array",stat:!0,forced:u},{from:r})},a87e:function(t,e,n){"use strict";n("c8b6")},b2d4:function(t,e,n){},c8b6:function(t,e,n){},d28b:function(t,e,n){var c=n("746f");c("iterator")},da3c:function(t,e,n){"use strict";n("fb6a");var c=n("7a23"),r=function(t){return Object(c["R"])("data-v-be951be6"),t=t(),Object(c["P"])(),t},a=["onClick"],u={class:"top"},i={class:"play"},o=r((function(){return Object(c["p"])("i",{class:"el-icon-caret-right"},null,-1)})),b={class:"playCount"},l={key:0,class:"time"},s={class:"bottom"},f={class:"name"},O={class:"label"},d={props:{videoArray:{type:Array}},emits:["goDetail"],setup:function(t,e){var n=e.emit,r=function(t){n("goDetail",t)};return function(e,n){var d=Object(c["X"])("el-image");return Object(c["O"])(!0),Object(c["o"])(c["b"],null,Object(c["V"])(t.videoArray,(function(t){var n;return Object(c["O"])(),Object(c["o"])("div",{onClick:function(e){return r(t.data.vid)},class:"video",key:t.data.vid},[Object(c["p"])("div",u,[Object(c["s"])(d,{src:t.data.coverUrl,class:"image"},null,8,["src"]),Object(c["p"])("div",i,[o,Object(c["p"])("span",b,Object(c["bb"])(e.$formatNumber(t.data.cover)),1)]),t.data.durationms?(Object(c["O"])(),Object(c["o"])("span",l,Object(c["bb"])(e.$formatTime(t.data.durationms).slice(-5)),1)):Object(c["n"])("",!0)]),Object(c["p"])("div",s,[Object(c["p"])("div",f,Object(c["bb"])(t.data.title),1),Object(c["p"])("div",O,Object(c["bb"])(null===(n=t.data.creator)||void 0===n?void 0:n.nickname),1)])],8,a)})),128)}}},j=(n("685a"),n("d959")),v=n.n(j);const p=v()(d,[["__scopeId","data-v-be951be6"]]);e["a"]=p},ec6d:function(t,e,n){"use strict";n("6970")},ecca:function(t,e,n){"use strict";n.r(e);var c=n("1da1"),r=(n("96cf"),n("7a23")),a=n("8ffd"),u=n("6c02"),i=(n("b0c0"),n("1f49")),o=n("f63a"),b=n("9342"),l=n("18ef"),s=Object(r["r"])("MV排行榜"),f={class:"right"},O=["onClick"],d=["onClick"],j={emits:["load"],setup:function(t,e){var n=e.emit,a=Object(r["T"])(""),j=Object(r["T"])("内地"),v=Object(r["T"])(["内地","港台","欧美","日本","韩国"]),p=Object(r["T"])([]);Object(r["L"])(Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["a"])(a);case 2:return t.next=4,Object(l["h"])(j.value);case 4:e=t.sent,p.value=e.data.data,n("load");case 7:case"end":return t.stop()}}),t)}))));var m=function(t){j.value=t,Object(l["h"])(j.value).then((function(t){p.value=t.data.data}))},y=Object(u["d"])(),g=function(t){y.push("/videoDetail?id=".concat(t))};return function(t,e){var n=Object(r["X"])("titleTop");return Object(r["O"])(),Object(r["o"])(r["b"],null,[Object(r["p"])("header",null,[Object(r["p"])("div",null,[Object(r["s"])(n,null,{default:Object(r["nb"])((function(){return[s]})),_:1})]),Object(r["p"])("div",f,[(Object(r["O"])(!0),Object(r["o"])(r["b"],null,Object(r["V"])(Object(r["fb"])(v),(function(t,e){return Object(r["O"])(),Object(r["o"])("span",{onClick:function(e){return m(t)},class:Object(r["D"])({active:Object(r["fb"])(j)===t}),key:e},Object(r["bb"])(t),11,O)})),128))])]),Object(r["p"])("section",{ref:function(t,e){e["dom"]=t,Object(r["z"])(a)?a.value=t:a=t}},[Object(r["s"])(i["a"],{count:10,loading:Object(r["fb"])(p).length},{default:Object(r["nb"])((function(){return[(Object(r["O"])(!0),Object(r["o"])(r["b"],null,Object(r["V"])(Object(r["fb"])(p),(function(t){return Object(r["O"])(),Object(r["o"])("main",{class:"mvTopList",onClick:function(e){return g(t.id)},key:t.id},[Object(r["s"])(o["a"],{image:t.cover,count:t.score,label:t.artists,name:t.name},null,8,["image","count","label","name"])],8,d)})),128))]})),_:1},8,["loading"])],512)],64)}}},v=(n("ec6d"),n("d959")),p=n.n(v);const m=p()(j,[["__scopeId","data-v-9718dc30"]]);var y=m,g=n("a5e1"),h=n("da3c"),w=function(t){return Object(r["R"])("data-v-0e161660"),t=t(),Object(r["P"])(),t},x={class:"nav"},k=Object(r["r"])("最新MV"),A={class:"tags"},_=["onClick"],T={class:"header",style:{height:"440px"}},C=w((function(){return Object(r["p"])("br",null,null,-1)})),D=Object(r["r"])("热播MV"),I={class:"main",style:{height:"220px"}},N=w((function(){return Object(r["p"])("br",null,null,-1)})),S=Object(r["r"])("网易出品"),V={class:"footer",style:{height:"440px"}},X=w((function(){return Object(r["p"])("br",null,null,-1)})),R={style:{height:"850px"}},$={setup:function(t){var e=Object(r["T"])("内地"),n=Object(r["T"])(["内地","港台","欧美","日本","韩国"]),i=Object(r["T"])([]),o=function(t){e.value=t,Object(l["j"])(t).then((function(t){i.value=Object(g["d"])(t.data.data)}))};Object(l["j"])().then((function(t){i.value=Object(g["d"])(t.data.data)}));var s=Object(r["T"])([]);Object(l["e"])().then((function(t){s.value=Object(g["d"])(t.data.result)}));var f=Object(r["T"])(),O=Object(r["T"])([]);Object(r["L"])(Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["a"])(f);case 2:return t.next=4,Object(l["d"])();case 4:e=t.sent,O.value=Object(g["d"])(e.data.data);case 6:case"end":return t.stop()}}),t)}))));var d=Object(u["d"])(),j=function(t){d.push("/videoDetail?id=".concat(t))};return function(t,c){var u=Object(r["X"])("titleTop");return Object(r["O"])(),Object(r["o"])(r["b"],null,[Object(r["p"])("nav",x,[Object(r["s"])(u,null,{default:Object(r["nb"])((function(){return[k]})),_:1}),Object(r["p"])("div",A,[(Object(r["O"])(!0),Object(r["o"])(r["b"],null,Object(r["V"])(Object(r["fb"])(n),(function(t,n){return Object(r["O"])(),Object(r["o"])("span",{key:n,onClick:function(e){return o(t)},class:Object(r["D"])({active:Object(r["fb"])(e)===t})},Object(r["bb"])(t),11,_)})),128))])]),Object(r["s"])(a["a"],{count:8,loading:Object(r["fb"])(i).length},{default:Object(r["nb"])((function(){return[Object(r["p"])("header",T,[Object(r["s"])(h["a"],{onGoDetail:j,videoArray:Object(r["fb"])(i)},null,8,["videoArray"])])]})),_:1},8,["loading"]),C,Object(r["s"])(u,null,{default:Object(r["nb"])((function(){return[D]})),_:1}),Object(r["s"])(a["a"],{count:4,loading:Object(r["fb"])(s).length},{default:Object(r["nb"])((function(){return[Object(r["p"])("main",I,[Object(r["s"])(h["a"],{onGoDetail:j,videoArray:Object(r["fb"])(s)},null,8,["videoArray"])])]})),_:1},8,["loading"]),N,Object(r["s"])(u,null,{default:Object(r["nb"])((function(){return[S]})),_:1}),Object(r["p"])("div",{ref:function(t,e){e["dom"]=t,Object(r["z"])(f)?f.value=t:f=t}},[Object(r["s"])(a["a"],{count:8,loading:Object(r["fb"])(O).length},{default:Object(r["nb"])((function(){return[Object(r["p"])("footer",V,[Object(r["s"])(h["a"],{onGoDetail:j,videoArray:Object(r["fb"])(O)},null,8,["videoArray"])])]})),_:1},8,["loading"])],512),X,Object(r["p"])("div",R,[Object(r["s"])(y)])],64)}}};n("a288");const M=p()($,[["__scopeId","data-v-0e161660"]]);e["default"]=M},f63a:function(t,e,n){"use strict";n("a9e3"),n("fb6a"),n("b0c0");var c=n("7a23"),r=function(t){return Object(c["R"])("data-v-32d9a7ac"),t=t(),Object(c["P"])(),t},a={class:"cover"},u={class:"left"},i={class:"play"},o=r((function(){return Object(c["p"])("i",{class:"el-icon-caret-right"},null,-1)})),b={class:"playCount"},l={key:0,class:"time"},s={class:"right"},f={class:"name"},O={key:0,class:"label"},d={key:1,class:"label"},j={props:{image:{type:String},name:{type:String},time:{type:Number},label:{type:[String,Array]},count:{type:Number}},setup:function(t){return function(e,n){var r=Object(c["X"])("el-image");return Object(c["O"])(),Object(c["o"])("div",a,[Object(c["p"])("div",u,[Object(c["s"])(r,{src:t.image,class:"image"},null,8,["src"]),Object(c["p"])("div",i,[o,Object(c["p"])("span",b,Object(c["bb"])(e.$formatNumber(t.count)),1)]),t.time?(Object(c["O"])(),Object(c["o"])("span",l,Object(c["bb"])(e.$formatTime(t.time).slice(-5)),1)):Object(c["n"])("",!0)]),Object(c["p"])("div",s,[Object(c["p"])("div",f,Object(c["bb"])(t.name),1),Array.isArray(t.label)?(Object(c["O"])(),Object(c["o"])("div",O,[(Object(c["O"])(!0),Object(c["o"])(c["b"],null,Object(c["V"])(t.label,(function(t,e){return Object(c["O"])(),Object(c["o"])(c["b"],{key:e},[Object(c["r"])(Object(c["bb"])(t.name||t.userName),1)],64)})),128))])):(Object(c["O"])(),Object(c["o"])("div",d,Object(c["bb"])(t.label),1))])])}}},v=(n("a87e"),n("d959")),p=n.n(v);const m=p()(j,[["__scopeId","data-v-32d9a7ac"]]);e["a"]=m}}]);