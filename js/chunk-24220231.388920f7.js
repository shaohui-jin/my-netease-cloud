(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24220231","chunk-789b2006"],{"1d9f":function(t,e,n){"use strict";n("387e")},"387e":function(t,e,n){},"883c":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"f",(function(){return d}));var c=n("1ae0");function r(t){return Object(c["a"])({url:"/artist/list",params:t})}function i(t){return Object(c["a"])({url:"/artist/top/song",params:{id:t}})}function o(t,e){return Object(c["a"])({url:"/artist/album",params:{id:t,offset:e}})}function a(t){return Object(c["a"])({url:"/artist/detail",params:{id:t}})}function u(t){return Object(c["a"])({url:"/artist/desc",params:{id:t}})}function l(t){return Object(c["a"])({url:"/simi/artist",params:{id:t}})}function d(t){return Object(c["a"])({url:"/artist/mv",params:{id:t}})}},b404:function(t,e,n){"use strict";n.r(e);n("c740"),n("caad"),n("2532"),n("b0c0"),n("a15b"),n("d81d"),n("fb6a");var c=n("7a23"),r=n("6c02"),i=n("5502"),o=n("0717"),a=function(t){return Object(c["pushScopeId"])("data-v-3b3f0162"),t=t(),Object(c["popScopeId"])(),t},u={key:0,class:"id","aria-hidden":"true"},l=a((function(){return Object(c["createElementVNode"])("use",{"xlink:href":"#icon-yangshengqi"},null,-1)})),d=[l],s={key:1},b={key:0,class:"iconfont icon-xihuan icon red-icon"},f={key:1,title:"喜欢",class:"iconfont icon-aixin icon"},j=a((function(){return Object(c["createElementVNode"])("i",{title:"下载",class:"iconfont icon-xiazai icon"},null,-1)})),O=Object(c["createTextVNode"])("MV"),p={setup:function(t){var e=Object(i["b"])(),n=Object(r["d"])(),a=Object(c["computed"])((function(){return e.state.songDetail.songArray})),l=Object(c["computed"])((function(){return e.state.songDetail.songDetail.id})),p=function(t){if(t.id!==l.value){var n=a.value.findIndex((function(e){return e.id===t.id}));e.commit("setSongDetail",t),e.commit("play",n),o["a"].emit("playMusic")}},m=function(t){n.push("/detail/mv?id=".concat(t))},w=function(t){return e.state.singer.likeMusic.includes(t)};return o["a"].on("playAll",(function(){p(a.value[0])})),function(t,e){var n=Object(c["resolveComponent"])("el-table-column"),r=Object(c["resolveComponent"])("el-tag"),i=Object(c["resolveComponent"])("el-table");return Object(c["openBlock"])(),Object(c["createBlock"])(i,{data:Object(c["unref"])(a),stripe:"",size:"small","highlight-current-row":"",onRowDblclick:p},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(n,{width:"45"},{default:Object(c["withCtx"])((function(t){return[t.row.id===Object(c["unref"])(l)?(Object(c["openBlock"])(),Object(c["createElementBlock"])("svg",u,d)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",s,Object(c["toDisplayString"])(t.row.index),1))]})),_:1}),Object(c["createVNode"])(n,{width:"45"},{default:Object(c["withCtx"])((function(t){return[w(t.row.id)?(Object(c["openBlock"])(),Object(c["createElementBlock"])("i",b)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("i",f))]})),_:1}),Object(c["createVNode"])(n,{width:"40"},{default:Object(c["withCtx"])((function(){return[j]})),_:1}),Object(c["createVNode"])(n,{prop:"name",label:"音乐标题",width:"400"},{default:Object(c["withCtx"])((function(t){return[Object(c["createElementVNode"])("span",{class:Object(c["normalizeClass"])(["mr-5",{active:t.row.id===Object(c["unref"])(l)}])},Object(c["toDisplayString"])(t.row.name),3),t.row.mv?(Object(c["openBlock"])(),Object(c["createBlock"])(r,{key:0,type:"danger",size:"mini",onClick:function(e){return m(t.row.mv)}},{default:Object(c["withCtx"])((function(){return[O]})),_:2},1032,["onClick"])):Object(c["createCommentVNode"])("",!0)]})),_:1}),Object(c["createVNode"])(n,{label:"歌手",width:"275"},{default:Object(c["withCtx"])((function(t){var e;return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(null===(e=t.row.ar)||void 0===e?void 0:e.map((function(t){return t.name})).join(" / ")),1)]})),_:1}),Object(c["createVNode"])(n,{label:"歌手专辑",width:"300"},{default:Object(c["withCtx"])((function(t){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.row.al.name),1)]})),_:1}),Object(c["createVNode"])(n,{prop:"address",label:"时长"},{default:Object(c["withCtx"])((function(e){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.$formatTime(e.row.dt).slice(-5)),1)]})),_:1})]})),_:1},8,["data"])}}},m=(n("1d9f"),n("6b0d")),w=n.n(m);const h=w()(p,[["__scopeId","data-v-3b3f0162"]]);e["default"]=h},f117:function(t,e,n){"use strict";n.r(e);var c=n("1da1"),r=(n("96cf"),n("7a23")),i=n("b404"),o=n("5502"),a=n("883c"),u={setup:function(t){var e=Object(o["b"])(),n=Object(r["computed"])((function(){return e.state.singer.singerId}));return Object(r["watch"])(n,function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["g"])(n);case 2:c=t.sent,e.commit("setSongMusic",c.data.songs);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{immediate:!0,deep:!0}),function(t,e){return Object(r["openBlock"])(),Object(r["createBlock"])(i["default"])}}};const l=u;e["default"]=l}}]);