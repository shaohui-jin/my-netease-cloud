(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e0c43f7","chunk-1bb1fff6"],{1243:function(e,t,c){"use strict";c.r(t);c("c740"),c("caad"),c("2532"),c("b0c0"),c("a15b"),c("d81d"),c("fb6a");var n=c("7a23"),o=c("6c02"),r=c("5502"),a=(c("c6a0"),c("0717")),i=function(e){return Object(n["pushScopeId"])("data-v-643a044f"),e=e(),Object(n["popScopeId"])(),e},l={key:0,style:{width:"15px",height:"15px"},class:"svg","aria-hidden":"true"},u=i((function(){return Object(n["createElementVNode"])("use",{"xlink:href":"#icon-yangshengqi"},null,-1)})),d=[u],b={key:1},s={key:0,style:{color:"red","font-size":"14px"},class:"iconfont icon-xihuan"},j={key:1,title:"喜欢",class:"iconfont icon-aixin",style:{"font-size":"15px"}},O=i((function(){return Object(n["createElementVNode"])("i",{title:"下载",class:"iconfont icon-xiazai",style:{"font-size":"15px"}},null,-1)})),f=Object(n["createTextVNode"])("MV"),p={setup:function(e){var t=Object(r["b"])(),c=Object(o["d"])(),i=Object(n["computed"])((function(){return t.state.songDetail.songArray})),u=Object(n["computed"])((function(){return t.state.songDetail.songDetail.id})),p=Object(n["ref"])(-1),m=function(e){if(e.id!==u.value){var c=i.value.findIndex((function(t){return t.id===e.id}));p.value=c,t.commit("setSongDetail",e),t.commit("play",c),a["a"].emit("playMusic")}},v=function(e){c.push("/videoDetail?id=".concat(e))},g=Object(n["computed"])((function(){return t.state.songDetail.songDetail.id})),h=function(e){return t.state.singer.likeMusic.includes(e)};return a["a"].on("playAll1",(function(){m(i.value[0])})),function(e,t){var c=Object(n["resolveComponent"])("el-table-column"),o=Object(n["resolveComponent"])("el-tag"),r=Object(n["resolveComponent"])("el-table");return Object(n["openBlock"])(),Object(n["createBlock"])(r,{data:Object(n["unref"])(i),stripe:"",size:"small","highlight-current-row":!0,onRowDblclick:m,style:{width:"100%"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(c,{width:"45"},{default:Object(n["withCtx"])((function(e){return[e.row.id===Object(n["unref"])(g)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",l,d)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",b,Object(n["toDisplayString"])(e.row.index),1))]})),_:1}),Object(n["createVNode"])(c,{ref:"dom",width:"45"},{default:Object(n["withCtx"])((function(e){return[h(e.row.id)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",s)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",j))]})),_:1},512),Object(n["createVNode"])(c,{width:"40"},{default:Object(n["withCtx"])((function(){return[O]})),_:1}),Object(n["createVNode"])(c,{prop:"name",label:"音乐标题",width:"400"},{default:Object(n["withCtx"])((function(e){return[Object(n["createElementVNode"])("span",{class:Object(n["normalizeClass"])(["music-title",{active:e.row.id===Object(n["unref"])(g)}])},Object(n["toDisplayString"])(e.row.name),3),e.row.mv?(Object(n["openBlock"])(),Object(n["createBlock"])(o,{key:0,onClick:function(t){return v(e.row.mv)},type:"danger",size:"mini"},{default:Object(n["withCtx"])((function(){return[f]})),_:2},1032,["onClick"])):Object(n["createCommentVNode"])("",!0)]})),_:1}),Object(n["createVNode"])(c,{label:"歌手",width:"275"},{default:Object(n["withCtx"])((function(e){var t;return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(null===(t=e.row.ar)||void 0===t?void 0:t.map((function(e){return e.name})).join(" / ")),1)]})),_:1}),Object(n["createVNode"])(c,{label:"歌手专辑",width:"300"},{default:Object(n["withCtx"])((function(e){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.row.al.name),1)]})),_:1}),Object(n["createVNode"])(c,{prop:"address",label:"时长"},{default:Object(n["withCtx"])((function(t){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$formatTime(t.row.dt).slice(-5)),1)]})),_:1})]})),_:1},8,["data"])}}},m=(c("4f13"),c("6b0d")),v=c.n(m);const g=v()(p,[["__scopeId","data-v-643a044f"]]);t["default"]=g},"4f13":function(e,t,c){"use strict";c("8e4a")},"633f":function(e,t,c){},"80c0":function(e,t,c){"use strict";c("b0c0");var n=c("7a23"),o={class:"content"},r={class:"A"},a={class:"B"},i={class:"C"},l=Object(n["createTextVNode"])("收藏"),u=Object(n["createTextVNode"])("个人主页"),d={class:"D"},b={props:{singerDetail:{type:Object}},setup:function(e){return function(t,c){var b=Object(n["resolveComponent"])("el-image"),s=Object(n["resolveComponent"])("el-link"),j=Object(n["resolveComponent"])("el-button"),O=Object(n["resolveComponent"])("el-collapse-item"),f=Object(n["resolveComponent"])("el-collapse");return Object(n["openBlock"])(),Object(n["createElementBlock"])("header",null,[Object(n["createElementVNode"])("div",null,[Object(n["createVNode"])(b,{class:"cover",src:e.singerDetail.artist.cover,alt:"img"},null,8,["src"])]),Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("h2",null,Object(n["toDisplayString"])(e.singerDetail.artist.name),1)]),Object(n["createElementVNode"])("div",a,[Object(n["createVNode"])(s,{type:"info"},{default:Object(n["withCtx"])((function(){var t;return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(null===(t=e.singerDetail.identify)||void 0===t?void 0:t.imageDesc),1)]})),_:1})]),Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(j,{size:"small",round:"",icon:"el-icon-folder-add"},{default:Object(n["withCtx"])((function(){return[l]})),_:1}),Object(n["createVNode"])(j,{size:"small",round:"",icon:"el-icon-user"},{default:Object(n["withCtx"])((function(){return[u]})),_:1})]),Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("p",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.singerDetail.secondaryExpertIdentiy,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("span",{style:{"margin-right":"25px"},key:e.expertIdentiyId},Object(n["toDisplayString"])(e.expertIdentiyName)+":"+Object(n["toDisplayString"])(e.expertIdentiyCount),1)})),128))]),Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(O,{title:"点击展开更多"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.singerDetail.artist.briefDesc),1)]})),_:1})]})),_:1})])])])}}},s=(c("cb24"),c("6b0d")),j=c.n(s);const O=j()(b,[["__scopeId","data-v-00c65ddc"]]);t["a"]=O},"8e4a":function(e,t,c){},a152:function(e,t,c){"use strict";c.r(t);var n=c("1da1"),o=(c("96cf"),c("a15b"),c("b0c0"),c("7a23")),r=(c("80c0"),c("1243")),a=c("c6a0"),i=c("8d85"),l=c("5502"),u=function(e){return Object(o["pushScopeId"])("data-v-8cfa1736"),e=e(),Object(o["popScopeId"])(),e},d={class:"content"},b={class:"A"},s={class:"B"},j={class:"C"},O=Object(o["createTextVNode"])("播放全部"),f=Object(o["createTextVNode"])("收藏全部"),p=Object(o["createTextVNode"])("分享"),m=Object(o["createTextVNode"])("VIP下载"),v=u((function(){return Object(o["createElementVNode"])("br",null,null,-1)})),g={setup:function(e){var t=Object(l["b"])(),c=Object(o["computed"])((function(){return t.state.login.profile})),u={uid:c.value.userId},g=Object(o["ref"])([]);return Object(i["f"])(u).then((function(e){g.value=e.data.playlist})),Object(o["onMounted"])(Object(n["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(c.value.userId);case 2:return n=e.sent,e.next=5,Object(a["e"])(n.data.ids.join());case 5:o=e.sent,t.commit("setSongMusic",o.data.songs);case 7:case"end":return e.stop()}}),e)})))),function(e,t){var c=Object(o["resolveComponent"])("el-image"),n=Object(o["resolveComponent"])("el-link"),a=Object(o["resolveComponent"])("el-button"),i=Object(o["resolveComponent"])("skeleton1");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(i,{image:{width:"170px",height:"170px"},loading:Object(o["unref"])(g).length},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("header",null,[Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(c,{class:"cover",src:Object(o["unref"])(g)[0].coverImgUrl,alt:"img"},null,8,["src"])]),Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("h2",null,Object(o["toDisplayString"])(Object(o["unref"])(g)[0].name),1)]),Object(o["createElementVNode"])("div",s,[Object(o["createVNode"])(n,{type:"info"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(Object(o["unref"])(g)[0].creator.nickname),1)]})),_:1})]),Object(o["createElementVNode"])("div",j,[Object(o["createVNode"])(a,{size:"medium",type:"danger",round:"",icon:"el-icon-caret-right"},{default:Object(o["withCtx"])((function(){return[O]})),_:1}),Object(o["createVNode"])(a,{size:"medium",disabled:"",round:"",icon:"el-icon-folder-add"},{default:Object(o["withCtx"])((function(){return[f]})),_:1}),Object(o["createVNode"])(a,{size:"medium",round:"",icon:"el-icon-share"},{default:Object(o["withCtx"])((function(){return[p]})),_:1}),Object(o["createVNode"])(a,{size:"medium",round:"",icon:"el-icon-upload"},{default:Object(o["withCtx"])((function(){return[m]})),_:1})])])])]})),_:1},8,["loading"]),v,Object(o["createVNode"])(r["default"])],64)}}},h=(c("c4e3"),c("6b0d")),V=c.n(h);const N=V()(g,[["__scopeId","data-v-8cfa1736"]]);t["default"]=N},a15b:function(e,t,c){"use strict";var n=c("23e7"),o=c("e330"),r=c("44ad"),a=c("fc6a"),i=c("a640"),l=o([].join),u=r!=Object,d=i("join",",");n({target:"Array",proto:!0,forced:u||!d},{join:function(e){return l(a(this),void 0===e?",":e)}})},acb8:function(e,t,c){},c4e3:function(e,t,c){"use strict";c("acb8")},cb24:function(e,t,c){"use strict";c("633f")},d81d:function(e,t,c){"use strict";var n=c("23e7"),o=c("b727").map,r=c("1dde"),a=r("map");n({target:"Array",proto:!0,forced:!a},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);