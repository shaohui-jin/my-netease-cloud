(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0401800d"],{"18ef":function(e,t,n){"use strict";n.d(t,"m",(function(){return r})),n.d(t,"p",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"q",(function(){return i})),n.d(t,"o",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return s})),n.d(t,"h",(function(){return f})),n.d(t,"g",(function(){return j})),n.d(t,"i",(function(){return O})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return v})),n.d(t,"f",(function(){return p})),n.d(t,"n",(function(){return g})),n.d(t,"a",(function(){return k}));var c=n("1ae0");function r(){return Object(c["a"])({url:"/video/group/list"})}function a(){return Object(c["a"])({url:"/video/category/list"})}function o(e){return Object(c["a"])({url:"/video/timeline/all",params:{offset:e}})}function i(e){return Object(c["a"])({url:"/video/url?id=".concat(e)})}function u(e){return Object(c["a"])({url:"/video/detail?id=".concat(e)})}function l(e){return Object(c["a"])({url:"/video/group",params:e})}function d(e){return Object(c["a"])({url:"/mv/first",params:{limit:8,area:e}})}function b(){return Object(c["a"])({url:"/personalized/mv"})}function s(){return Object(c["a"])({url:"/mv/exclusive/rcmd",params:{limit:8}})}function f(e,t){return Object(c["a"])({url:"/top/mv",params:{limit:10,area:e,offset:t}})}function j(e){return Object(c["a"])({url:"/mv/detail?mvid=".concat(e)})}function O(e){return Object(c["a"])({url:"/mv/url?id=".concat(e)})}function m(e){return Object(c["a"])({url:"/simi/mv?mvid=".concat(e)})}function v(e){return Object(c["a"])({url:"/related/allvideo?id=".concat(e)})}function p(e,t){return Object(c["a"])({url:"/comment/mv",params:{id:e,limit:10,offset:t}})}function g(e,t){return Object(c["a"])({url:"/comment/video",params:{id:e,limit:10,offset:t}})}function k(e){return Object(c["a"])({url:"/mv/all",params:e})}},"5c57":function(e,t,n){},"685a":function(e,t,n){"use strict";n("dcb2")},"8ffd":function(e,t,n){"use strict";n("a9e3");var c=n("7a23"),r={style:{width:"24%"}},a={props:{count:{type:Number,default:1},loading:{type:Number,default:0}},setup:function(e){return function(t,n){var a=Object(c["resolveComponent"])("el-skeleton-item"),o=Object(c["resolveComponent"])("el-skeleton");return Object(c["openBlock"])(),Object(c["createBlock"])(o,{loading:!Boolean(e.loading),count:e.count,animated:!0,style:{width:"100%",display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},{template:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",r,[Object(c["createVNode"])(a,{variant:"image",style:{width:"100%",height:"150px"}}),Object(c["createVNode"])(a,{variant:"p",style:{width:"100%",margin:"10px 0"}}),Object(c["createVNode"])(a,{variant:"p",style:{width:"100%"}})])]})),default:Object(c["withCtx"])((function(){return[Object(c["renderSlot"])(t.$slots,"default")]})),_:3},8,["loading","count"])}}};const o=a;t["a"]=o},d0ff:function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),r=n("8ffd"),a=n("6c02"),o=n("da3c"),i=n("18ef"),u=function(e){return Object(c["pushScopeId"])("data-v-22b5f7e4"),e=e(),Object(c["popScopeId"])(),e},l={class:"left"},d={class:"left"},b=u((function(){return Object(c["createElementVNode"])("i",{class:"el-icon-arrow-right"},null,-1)})),s={class:"category"},f=["onClick"],j={class:"right"},O=["onClick"],m={class:"videoContent"},v={class:"bottom-pages"},p={setup:function(e){var t=Object(a["d"])(),n=function(e){t.push("/videoDetail?vid=".concat(e))},u=Object(c["ref"])(!1),p=Object(c["ref"])([]),g=Object(c["ref"])("全部视频");Object(i["m"])().then((function(e){p.value=e.data.data}));var k=Object(c["ref"])([]);Object(i["p"])().then((function(e){k.value=e.data.data}));var h=Object(c["ref"])([]);Object(i["b"])().then((function(e){h.value=e.data.datas}));var y={id:"",offset:0},N=function(e){y.id=e.id,u.value=!1,g.value=e.name,Object(i["c"])(y).then((function(e){h.value=e.data.datas}))},V=function(e){y.offset=e,y.id?Object(i["c"])(y).then((function(e){h.value=e.data.datas})):Object(i["b"])(e).then((function(e){h.value=e.data.datas}))};return function(e,t){var a=Object(c["resolveComponent"])("el-button"),i=Object(c["resolveComponent"])("el-divider"),y=Object(c["resolveComponent"])("el-popover"),C=Object(c["resolveComponent"])("el-pagination");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("header",null,[Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(y,{placement:"bottom-start",width:550,visible:Object(c["unref"])(u),"onUpdate:visible":t[0]||(t[0]=function(e){return Object(c["isRef"])(u)?u.value=e:u=e}),trigger:"click"},{reference:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",d,[Object(c["createVNode"])(a,{type:"success",size:"mini",round:""},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(Object(c["unref"])(g)),1),b]})),_:1})])]})),default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["title",{active:"全部视频"===Object(c["unref"])(g)}])},"全部视频",2),Object(c["createVNode"])(i),Object(c["createElementVNode"])("section",s,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(p),(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("nav",{class:Object(c["normalizeClass"])(["tag",{active:Object(c["unref"])(g)===e.name}]),onClick:function(t){return N(e)},key:e.id},Object(c["toDisplayString"])(e.name),11,f)})),128))])]})),_:1},8,["visible"])]),Object(c["createElementVNode"])("div",j,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(k),(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["rightTag",{active:Object(c["unref"])(g)===e.name}]),key:e.id,onClick:function(t){return N(e)}},Object(c["toDisplayString"])(e.name),11,O)})),128))])]),Object(c["createVNode"])(r["a"],{count:8,loading:Object(c["unref"])(h).length},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("main",m,[Object(c["createVNode"])(o["a"],{onGoDetail:n,videoArray:Object(c["unref"])(h)},null,8,["videoArray"])])]})),_:1},8,["loading"]),Object(c["createElementVNode"])("footer",v,[Object(c["createVNode"])(C,{background:"",layout:"prev, pager, next",onCurrentChange:V,total:1e3})])],64)}}},g=(n("def9"),n("6b0d")),k=n.n(g);const h=k()(p,[["__scopeId","data-v-22b5f7e4"]]);t["default"]=h},da3c:function(e,t,n){"use strict";n("fb6a");var c=n("7a23"),r=function(e){return Object(c["pushScopeId"])("data-v-be951be6"),e=e(),Object(c["popScopeId"])(),e},a=["onClick"],o={class:"top"},i={class:"play"},u=r((function(){return Object(c["createElementVNode"])("i",{class:"el-icon-caret-right"},null,-1)})),l={class:"playCount"},d={key:0,class:"time"},b={class:"bottom"},s={class:"name"},f={class:"label"},j={props:{videoArray:{type:Array}},emits:["goDetail"],setup:function(e,t){var n=t.emit,r=function(e){n("goDetail",e)};return function(t,n){var j=Object(c["resolveComponent"])("el-image");return Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.videoArray,(function(e){var n;return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{onClick:function(t){return r(e.data.vid)},class:"video",key:e.data.vid},[Object(c["createElementVNode"])("div",o,[Object(c["createVNode"])(j,{src:e.data.coverUrl,class:"image"},null,8,["src"]),Object(c["createElementVNode"])("div",i,[u,Object(c["createElementVNode"])("span",l,Object(c["toDisplayString"])(t.$formatNumber(e.data.cover)),1)]),e.data.durationms?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",d,Object(c["toDisplayString"])(t.$formatTime(e.data.durationms).slice(-5)),1)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("div",b,[Object(c["createElementVNode"])("div",s,Object(c["toDisplayString"])(e.data.title),1),Object(c["createElementVNode"])("div",f,Object(c["toDisplayString"])(null===(n=e.data.creator)||void 0===n?void 0:n.nickname),1)])],8,a)})),128)}}},O=(n("685a"),n("6b0d")),m=n.n(O);const v=m()(j,[["__scopeId","data-v-be951be6"]]);t["a"]=v},dcb2:function(e,t,n){},def9:function(e,t,n){"use strict";n("5c57")}}]);