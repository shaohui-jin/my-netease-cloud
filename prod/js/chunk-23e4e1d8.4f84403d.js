(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23e4e1d8","chunk-5f64fc90"],{"0906":function(t,e,n){},1243:function(t,e,n){"use strict";n.r(e);n("c740"),n("caad"),n("2532"),n("b0c0"),n("a15b"),n("d81d"),n("fb6a");var c=n("7a23"),i=n("6c02"),b=n("5502"),r=(n("c6a0"),n("0717")),a=function(t){return Object(c["R"])("data-v-643a044f"),t=t(),Object(c["P"])(),t},u={key:0,style:{width:"15px",height:"15px"},class:"svg","aria-hidden":"true"},o=a((function(){return Object(c["p"])("use",{"xlink:href":"#icon-yangshengqi"},null,-1)})),l=[o],s={key:1},O={key:0,style:{color:"red","font-size":"14px"},class:"iconfont icon-xihuan"},j={key:1,title:"喜欢",class:"iconfont icon-aixin",style:{"font-size":"15px"}},d=a((function(){return Object(c["p"])("i",{title:"下载",class:"iconfont icon-xiazai",style:{"font-size":"15px"}},null,-1)})),f=Object(c["r"])("MV"),p={setup:function(t){var e=Object(b["b"])(),n=Object(i["d"])(),a=Object(c["k"])((function(){return e.state.songDetail.songArray})),o=Object(c["k"])((function(){return e.state.songDetail.songDetail.id})),p=Object(c["T"])(-1),v=function(t){if(t.id!==o.value){var n=a.value.findIndex((function(e){return e.id===t.id}));p.value=n,e.commit("setSongDetail",t),e.commit("play",n),r["a"].emit("playMusic")}},m=function(t){n.push("/videoDetail?id=".concat(t))},g=Object(c["k"])((function(){return e.state.songDetail.songDetail.id})),h=function(t){return e.state.singer.likeMusic.includes(t)};return r["a"].on("playAll1",(function(){v(a.value[0])})),function(t,e){var n=Object(c["X"])("el-table-column"),i=Object(c["X"])("el-tag"),b=Object(c["X"])("el-table");return Object(c["O"])(),Object(c["m"])(b,{data:Object(c["fb"])(a),stripe:"",size:"small","highlight-current-row":!0,onRowDblclick:v,style:{width:"100%"}},{default:Object(c["nb"])((function(){return[Object(c["s"])(n,{width:"45"},{default:Object(c["nb"])((function(t){return[t.row.id===Object(c["fb"])(g)?(Object(c["O"])(),Object(c["o"])("svg",u,l)):(Object(c["O"])(),Object(c["o"])("span",s,Object(c["bb"])(t.row.index),1))]})),_:1}),Object(c["s"])(n,{ref:function(t,e){e["dom"]=t},width:"45"},{default:Object(c["nb"])((function(t){return[h(t.row.id)?(Object(c["O"])(),Object(c["o"])("i",O)):(Object(c["O"])(),Object(c["o"])("i",j))]})),_:1},512),Object(c["s"])(n,{width:"40"},{default:Object(c["nb"])((function(){return[d]})),_:1}),Object(c["s"])(n,{prop:"name",label:"音乐标题",width:"400"},{default:Object(c["nb"])((function(t){return[Object(c["p"])("span",{class:Object(c["D"])(["music-title",{active:t.row.id===Object(c["fb"])(g)}])},Object(c["bb"])(t.row.name),3),t.row.mv?(Object(c["O"])(),Object(c["m"])(i,{key:0,onClick:function(e){return m(t.row.mv)},type:"danger",size:"mini"},{default:Object(c["nb"])((function(){return[f]})),_:2},1032,["onClick"])):Object(c["n"])("",!0)]})),_:1}),Object(c["s"])(n,{label:"歌手",width:"275"},{default:Object(c["nb"])((function(t){var e;return[Object(c["r"])(Object(c["bb"])(null===(e=t.row.ar)||void 0===e?void 0:e.map((function(t){return t.name})).join(" / ")),1)]})),_:1}),Object(c["s"])(n,{label:"歌手专辑",width:"300"},{default:Object(c["nb"])((function(t){return[Object(c["r"])(Object(c["bb"])(t.row.al.name),1)]})),_:1}),Object(c["s"])(n,{prop:"address",label:"时长"},{default:Object(c["nb"])((function(e){return[Object(c["r"])(Object(c["bb"])(t.$formatTime(e.row.dt).slice(-5)),1)]})),_:1})]})),_:1},8,["data"])}}},v=(n("4f13"),n("d959")),m=n.n(v);const g=m()(p,[["__scopeId","data-v-643a044f"]]);e["default"]=g},"3a38":function(t,e,n){},"4f13":function(t,e,n){"use strict";n("0906")},"80c0":function(t,e,n){"use strict";n("b0c0");var c=n("7a23"),i={class:"content"},b={class:"A"},r={class:"B"},a={class:"C"},u=Object(c["r"])("收藏"),o=Object(c["r"])("个人主页"),l={class:"D"},s={props:{singerDetail:{type:Object}},setup:function(t){return function(e,n){var s=Object(c["X"])("el-image"),O=Object(c["X"])("el-link"),j=Object(c["X"])("el-button"),d=Object(c["X"])("el-collapse-item"),f=Object(c["X"])("el-collapse");return Object(c["O"])(),Object(c["o"])("header",null,[Object(c["p"])("div",null,[Object(c["s"])(s,{class:"cover",src:t.singerDetail.artist.cover,alt:"img"},null,8,["src"])]),Object(c["p"])("div",i,[Object(c["p"])("div",b,[Object(c["p"])("h2",null,Object(c["bb"])(t.singerDetail.artist.name),1)]),Object(c["p"])("div",r,[Object(c["s"])(O,{type:"info"},{default:Object(c["nb"])((function(){var e;return[Object(c["r"])(Object(c["bb"])(null===(e=t.singerDetail.identify)||void 0===e?void 0:e.imageDesc),1)]})),_:1})]),Object(c["p"])("div",a,[Object(c["s"])(j,{size:"small",round:"",icon:"el-icon-folder-add"},{default:Object(c["nb"])((function(){return[u]})),_:1}),Object(c["s"])(j,{size:"small",round:"",icon:"el-icon-user"},{default:Object(c["nb"])((function(){return[o]})),_:1})]),Object(c["p"])("div",l,[Object(c["p"])("p",null,[(Object(c["O"])(!0),Object(c["o"])(c["b"],null,Object(c["V"])(t.singerDetail.secondaryExpertIdentiy,(function(t){return Object(c["O"])(),Object(c["o"])("span",{style:{"margin-right":"25px"},key:t.expertIdentiyId},Object(c["bb"])(t.expertIdentiyName)+":"+Object(c["bb"])(t.expertIdentiyCount),1)})),128))]),Object(c["s"])(f,null,{default:Object(c["nb"])((function(){return[Object(c["s"])(d,{title:"点击展开更多"},{default:Object(c["nb"])((function(){return[Object(c["r"])(Object(c["bb"])(t.singerDetail.artist.briefDesc),1)]})),_:1})]})),_:1})])])])}}},O=(n("cb24"),n("d959")),j=n.n(O);const d=j()(s,[["__scopeId","data-v-00c65ddc"]]);e["a"]=d},8115:function(t,e,n){},a152:function(t,e,n){"use strict";n.r(e);var c=n("1da1"),i=(n("96cf"),n("a15b"),n("b0c0"),n("7a23")),b=(n("80c0"),n("1243")),r=n("c6a0"),a=n("8d85"),u=n("5502"),o=function(t){return Object(i["R"])("data-v-8cfa1736"),t=t(),Object(i["P"])(),t},l={class:"content"},s={class:"A"},O={class:"B"},j={class:"C"},d=Object(i["r"])("播放全部"),f=Object(i["r"])("收藏全部"),p=Object(i["r"])("分享"),v=Object(i["r"])("VIP下载"),m=o((function(){return Object(i["p"])("br",null,null,-1)})),g={setup:function(t){var e=Object(u["b"])(),n=Object(i["k"])((function(){return e.state.login.profile})),o={uid:n.value.userId},g=Object(i["T"])([]);return Object(a["f"])(o).then((function(t){g.value=t.data.playlist})),Object(i["L"])(Object(c["a"])(regeneratorRuntime.mark((function t(){var c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["a"])(n.value.userId);case 2:return c=t.sent,t.next=5,Object(r["e"])(c.data.ids.join());case 5:i=t.sent,e.commit("setSongMusic",i.data.songs);case 7:case"end":return t.stop()}}),t)})))),function(t,e){var n=Object(i["X"])("el-image"),c=Object(i["X"])("el-link"),r=Object(i["X"])("el-button"),a=Object(i["X"])("skeleton1");return Object(i["O"])(),Object(i["o"])(i["b"],null,[Object(i["s"])(a,{image:{width:"170px",height:"170px"},loading:Object(i["fb"])(g).length},{default:Object(i["nb"])((function(){return[Object(i["p"])("header",null,[Object(i["p"])("div",null,[Object(i["s"])(n,{class:"cover",src:Object(i["fb"])(g)[0].coverImgUrl,alt:"img"},null,8,["src"])]),Object(i["p"])("div",l,[Object(i["p"])("div",s,[Object(i["p"])("h2",null,Object(i["bb"])(Object(i["fb"])(g)[0].name),1)]),Object(i["p"])("div",O,[Object(i["s"])(c,{type:"info"},{default:Object(i["nb"])((function(){return[Object(i["r"])(Object(i["bb"])(Object(i["fb"])(g)[0].creator.nickname),1)]})),_:1})]),Object(i["p"])("div",j,[Object(i["s"])(r,{size:"medium",type:"danger",round:"",icon:"el-icon-caret-right"},{default:Object(i["nb"])((function(){return[d]})),_:1}),Object(i["s"])(r,{size:"medium",disabled:"",round:"",icon:"el-icon-folder-add"},{default:Object(i["nb"])((function(){return[f]})),_:1}),Object(i["s"])(r,{size:"medium",round:"",icon:"el-icon-share"},{default:Object(i["nb"])((function(){return[p]})),_:1}),Object(i["s"])(r,{size:"medium",round:"",icon:"el-icon-upload"},{default:Object(i["nb"])((function(){return[v]})),_:1})])])])]})),_:1},8,["loading"]),m,Object(i["s"])(b["default"])],64)}}},h=(n("c4e3"),n("d959")),y=n.n(h);const w=y()(g,[["__scopeId","data-v-8cfa1736"]]);e["default"]=w},a15b:function(t,e,n){"use strict";var c=n("23e7"),i=n("44ad"),b=n("fc6a"),r=n("a640"),a=[].join,u=i!=Object,o=r("join",",");c({target:"Array",proto:!0,forced:u||!o},{join:function(t){return a.call(b(this),void 0===t?",":t)}})},c4e3:function(t,e,n){"use strict";n("3a38")},cb24:function(t,e,n){"use strict";n("8115")},d81d:function(t,e,n){"use strict";var c=n("23e7"),i=n("b727").map,b=n("1dde"),r=b("map");c({target:"Array",proto:!0,forced:!r},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);