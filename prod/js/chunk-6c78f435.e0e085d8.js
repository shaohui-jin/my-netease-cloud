(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c78f435","chunk-686669e6"],{"0906":function(t,e,n){},1243:function(t,e,n){"use strict";n.r(e);n("c740"),n("caad"),n("2532"),n("b0c0"),n("a15b"),n("d81d"),n("fb6a");var c=n("7a23"),r=n("6c02"),i=n("5502"),a=(n("c6a0"),n("0717")),u=function(t){return Object(c["R"])("data-v-643a044f"),t=t(),Object(c["P"])(),t},o={key:0,style:{width:"15px",height:"15px"},class:"svg","aria-hidden":"true"},b=u((function(){return Object(c["p"])("use",{"xlink:href":"#icon-yangshengqi"},null,-1)})),s=[b],l={key:1},f={key:0,style:{color:"red","font-size":"14px"},class:"iconfont icon-xihuan"},O={key:1,title:"喜欢",class:"iconfont icon-aixin",style:{"font-size":"15px"}},d=u((function(){return Object(c["p"])("i",{title:"下载",class:"iconfont icon-xiazai",style:{"font-size":"15px"}},null,-1)})),j=Object(c["r"])("MV"),p={setup:function(t){var e=Object(i["b"])(),n=Object(r["d"])(),u=Object(c["k"])((function(){return e.state.songDetail.songArray})),b=Object(c["k"])((function(){return e.state.songDetail.songDetail.id})),p=Object(c["T"])(-1),m=function(t){if(t.id!==b.value){var n=u.value.findIndex((function(e){return e.id===t.id}));p.value=n,e.commit("setSongDetail",t),e.commit("play",n),a["a"].emit("playMusic")}},w=function(t){n.push("/videoDetail?id=".concat(t))},g=Object(c["k"])((function(){return e.state.songDetail.songDetail.id})),v=function(t){return e.state.singer.likeMusic.includes(t)};return a["a"].on("playAll1",(function(){m(u.value[0])})),function(t,e){var n=Object(c["X"])("el-table-column"),r=Object(c["X"])("el-tag"),i=Object(c["X"])("el-table");return Object(c["O"])(),Object(c["m"])(i,{data:Object(c["fb"])(u),stripe:"",size:"small","highlight-current-row":!0,onRowDblclick:m,style:{width:"100%"}},{default:Object(c["nb"])((function(){return[Object(c["s"])(n,{width:"45"},{default:Object(c["nb"])((function(t){return[t.row.id===Object(c["fb"])(g)?(Object(c["O"])(),Object(c["o"])("svg",o,s)):(Object(c["O"])(),Object(c["o"])("span",l,Object(c["bb"])(t.row.index),1))]})),_:1}),Object(c["s"])(n,{ref:function(t,e){e["dom"]=t},width:"45"},{default:Object(c["nb"])((function(t){return[v(t.row.id)?(Object(c["O"])(),Object(c["o"])("i",f)):(Object(c["O"])(),Object(c["o"])("i",O))]})),_:1},512),Object(c["s"])(n,{width:"40"},{default:Object(c["nb"])((function(){return[d]})),_:1}),Object(c["s"])(n,{prop:"name",label:"音乐标题",width:"400"},{default:Object(c["nb"])((function(t){return[Object(c["p"])("span",{class:Object(c["D"])(["music-title",{active:t.row.id===Object(c["fb"])(g)}])},Object(c["bb"])(t.row.name),3),t.row.mv?(Object(c["O"])(),Object(c["m"])(r,{key:0,onClick:function(e){return w(t.row.mv)},type:"danger",size:"mini"},{default:Object(c["nb"])((function(){return[j]})),_:2},1032,["onClick"])):Object(c["n"])("",!0)]})),_:1}),Object(c["s"])(n,{label:"歌手",width:"275"},{default:Object(c["nb"])((function(t){var e;return[Object(c["r"])(Object(c["bb"])(null===(e=t.row.ar)||void 0===e?void 0:e.map((function(t){return t.name})).join(" / ")),1)]})),_:1}),Object(c["s"])(n,{label:"歌手专辑",width:"300"},{default:Object(c["nb"])((function(t){return[Object(c["r"])(Object(c["bb"])(t.row.al.name),1)]})),_:1}),Object(c["s"])(n,{prop:"address",label:"时长"},{default:Object(c["nb"])((function(e){return[Object(c["r"])(Object(c["bb"])(t.$formatTime(e.row.dt).slice(-5)),1)]})),_:1})]})),_:1},8,["data"])}}},m=(n("4f13"),n("d959")),w=n.n(m);const g=w()(p,[["__scopeId","data-v-643a044f"]]);e["default"]=g},"4f13":function(t,e,n){"use strict";n("0906")},"883c":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return b})),n.d(e,"f",(function(){return s}));var c=n("1ae0");function r(t){return Object(c["a"])({url:"/artist/list",params:t})}function i(t){return Object(c["a"])({url:"/artist/top/song",params:{id:t}})}function a(t,e){return Object(c["a"])({url:"/artist/album",params:{id:t,limit:10,offset:e}})}function u(t){return Object(c["a"])({url:"/artist/detail",params:{id:t}})}function o(t){return Object(c["a"])({url:"/artist/desc",params:{id:t}})}function b(t){return Object(c["a"])({url:"/simi/artist",params:{id:t}})}function s(t){return Object(c["a"])({url:"/artist/mv",params:{id:t}})}},9525:function(t,e,n){"use strict";n.r(e);var c=n("1da1"),r=(n("96cf"),n("7a23")),i=n("1243"),a=n("5502"),u=n("883c"),o={setup:function(t){var e=Object(a["b"])(),n=Object(r["k"])((function(){return e.state.singer.singerId}));return Object(r["L"])(Object(c["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["g"])(n.value);case 2:c=t.sent,e.commit("setSongMusic",c.data.songs);case 4:case"end":return t.stop()}}),t)})))),function(t,e){return Object(r["O"])(),Object(r["m"])(i["default"])}}};const b=o;e["default"]=b}}]);