(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-186c49e5"],{"09ed":function(e,t,n){"use strict";n.r(t);var c=n("1da1"),r=(n("96cf"),n("7a23")),o=n("5502"),i=n("80c0"),a=n("883c"),u=Object(r["createTextVNode"])("单曲"),l=Object(r["createTextVNode"])("专辑"),d=Object(r["createTextVNode"])("MV"),b=Object(r["createTextVNode"])("歌手详情"),s=Object(r["createTextVNode"])("相似歌手"),j=Object(r["createTextVNode"])(" Loading... "),O={name:"singerContent"},f=Object.assign(O,{setup:function(e){var t=Object(o["b"])(),n=Object(r["computed"])((function(){return t.state.singer.singerId})),O=Object(r["ref"])(null);return Object(r["onMounted"])(Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["e"])(n.value);case 2:t=e.sent,O.value=t.data.data;case 4:case"end":return e.stop()}}),e)})))),function(e,t){var n,c=Object(r["resolveComponent"])("skeleton1"),o=Object(r["resolveComponent"])("el-menu-item"),a=Object(r["resolveComponent"])("el-menu"),f=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(c,{loading:null===(n=Object(r["unref"])(O))||void 0===n?void 0:n.artist.id,image:{width:"210px",height:"220px"},margin:{width:"900px",marginLeft:"20px"}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i["a"],{singerDetail:Object(r["unref"])(O)},null,8,["singerDetail"])]})),_:1},8,["loading"]),Object(r["createVNode"])(a,{"default-active":e.$route.path,router:"",mode:"horizontal"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(o,{index:"/SingerContent"},{default:Object(r["withCtx"])((function(){return[u]})),_:1}),Object(r["createVNode"])(o,{index:"/SingerContent/album"},{default:Object(r["withCtx"])((function(){return[l]})),_:1}),Object(r["createVNode"])(o,{index:"/SingerContent/mv"},{default:Object(r["withCtx"])((function(){return[d]})),_:1}),Object(r["createVNode"])(o,{index:"/SingerContent/singerDetail"},{default:Object(r["withCtx"])((function(){return[b]})),_:1}),Object(r["createVNode"])(o,{index:"/SingerContent/similaritySinger"},{default:Object(r["withCtx"])((function(){return[s]})),_:1})]})),_:1},8,["default-active"]),(Object(r["openBlock"])(),Object(r["createBlock"])(r["Suspense"],null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,null,{default:Object(r["withCtx"])((function(e){var t=e.Component;e.route;return[(Object(r["openBlock"])(),Object(r["createBlock"])(r["KeepAlive"],null,[(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(t)))],1024))]})),_:1})]})),fallback:Object(r["withCtx"])((function(){return[j]})),_:1}))],64)}}});const p=f;t["default"]=p},"633f":function(e,t,n){},"80c0":function(e,t,n){"use strict";n("b0c0");var c=n("7a23"),r={class:"content"},o={class:"A"},i={class:"B"},a={class:"C"},u=Object(c["createTextVNode"])("收藏"),l=Object(c["createTextVNode"])("个人主页"),d={class:"D"},b={props:{singerDetail:{type:Object}},setup:function(e){return function(t,n){var b=Object(c["resolveComponent"])("el-image"),s=Object(c["resolveComponent"])("el-link"),j=Object(c["resolveComponent"])("el-button"),O=Object(c["resolveComponent"])("el-collapse-item"),f=Object(c["resolveComponent"])("el-collapse");return Object(c["openBlock"])(),Object(c["createElementBlock"])("header",null,[Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(b,{class:"cover",src:e.singerDetail.artist.cover,alt:"img"},null,8,["src"])]),Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("h2",null,Object(c["toDisplayString"])(e.singerDetail.artist.name),1)]),Object(c["createElementVNode"])("div",i,[Object(c["createVNode"])(s,{type:"info"},{default:Object(c["withCtx"])((function(){var t;return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(null===(t=e.singerDetail.identify)||void 0===t?void 0:t.imageDesc),1)]})),_:1})]),Object(c["createElementVNode"])("div",a,[Object(c["createVNode"])(j,{size:"small",round:"",icon:"el-icon-folder-add"},{default:Object(c["withCtx"])((function(){return[u]})),_:1}),Object(c["createVNode"])(j,{size:"small",round:"",icon:"el-icon-user"},{default:Object(c["withCtx"])((function(){return[l]})),_:1})]),Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("p",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.singerDetail.secondaryExpertIdentiy,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{style:{"margin-right":"25px"},key:e.expertIdentiyId},Object(c["toDisplayString"])(e.expertIdentiyName)+":"+Object(c["toDisplayString"])(e.expertIdentiyCount),1)})),128))]),Object(c["createVNode"])(f,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(O,{title:"点击展开更多"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.singerDetail.artist.briefDesc),1)]})),_:1})]})),_:1})])])])}}},s=(n("cb24"),n("6b0d")),j=n.n(s);const O=j()(b,[["__scopeId","data-v-00c65ddc"]]);t["a"]=O},"883c":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"g",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return d}));var c=n("1ae0");function r(e){return Object(c["a"])({url:"/artist/list",params:e})}function o(e){return Object(c["a"])({url:"/artist/top/song",params:{id:e}})}function i(e,t){return Object(c["a"])({url:"/artist/album",params:{id:e,limit:10,offset:t}})}function a(e){return Object(c["a"])({url:"/artist/detail",params:{id:e}})}function u(e){return Object(c["a"])({url:"/artist/desc",params:{id:e}})}function l(e){return Object(c["a"])({url:"/simi/artist",params:{id:e}})}function d(e){return Object(c["a"])({url:"/artist/mv",params:{id:e}})}},cb24:function(e,t,n){"use strict";n("633f")}}]);