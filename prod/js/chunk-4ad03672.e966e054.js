(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ad03672"],{1442:function(e,t,n){"use strict";n("dd54")},"52ac":function(e,t,n){"use strict";n.d(t,"k",(function(){return r})),n.d(t,"p",(function(){return o})),n.d(t,"l",(function(){return a})),n.d(t,"n",(function(){return i})),n.d(t,"o",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"g",(function(){return j})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return f})),n.d(t,"j",(function(){return m})),n.d(t,"m",(function(){return p})),n.d(t,"i",(function(){return g})),n.d(t,"h",(function(){return N}));var c=n("1ae0");function r(){return Object(c["a"])({url:"/personalized/djprogram"})}function o(){return Object(c["a"])({url:"/dj/sublist"})}function a(){return Object(c["a"])({url:"/dj/personalize/recommend"})}function i(){return Object(c["a"])({url:"/personalized/privatecontent"})}function l(e,t){return Object(c["a"])({url:"/personalized/privatecontent/list",params:{limit:e,offset:t}})}function u(){return Object(c["a"])({url:"/dj/catelist"})}function d(e){return Object(c["a"])({url:"/dj/recommend/type",params:{type:e}})}function b(){return Object(c["a"])({url:"/dj/banner"})}function j(e){return Object(c["a"])({url:"/dj/hot",params:{limit:6,offset:e}})}function s(e){return Object(c["a"])({url:"/dj/toplist/pay",params:{limit:12,offset:e}})}function O(){return Object(c["a"])({url:"/dj/category/recommend"})}function f(e){return Object(c["a"])({url:"/dj/detail",params:{rid:e}})}function m(e){return Object(c["a"])({url:"/dj/program",params:{rid:e}})}function p(){return Object(c["a"])({url:"/dj/program/toplist",params:{limit:30,offset:0}})}function g(e,t){return Object(c["a"])({url:"/dj/toplist",params:{type:e,offset:t}})}function N(){return Object(c["a"])({url:"/dj/program/toplist/hours",params:{limit:30}})}},d0c4:function(e,t,n){"use strict";n.r(t);n("d81d"),n("b0c0"),n("fb6a");var c=n("7a23"),r=n("a8d5"),o=n.n(r),a=n("52ac"),i=n("6c02"),l=n("0717"),u=n("5502"),d=function(e){return Object(c["pushScopeId"])("data-v-d20a7b6a"),e=e(),Object(c["popScopeId"])(),e},b={class:"content"},j={class:"A"},s=Object(c["createTextVNode"])("播客"),O={class:"B"},f={href:""},m={style:{"margin-left":"10px"}},p={class:"C"},g=Object(c["createTextVNode"])("播放全部"),N=Object(c["createTextVNode"])("收藏全部"),V=Object(c["createTextVNode"])("分享"),v={class:"D"},h={class:"tags"},y={key:0},C=d((function(){return Object(c["createElementVNode"])("br",null,null,-1)})),E=d((function(){return Object(c["createElementVNode"])("h2",null,"声音",-1)})),k={class:"item"},w={style:{"margin-left":"10px"}},x={key:0,class:"iconfont icon-yangshengqi"},D={key:1},S={class:"cover"},_=d((function(){return Object(c["createElementVNode"])("img",{class:"icon",src:o.a,alt:""},null,-1)})),B={class:"label"},z={class:"label"},T={class:"label"},U={name:"program"},$=Object.assign(U,{setup:function(e){var t=Object(i["c"])(),n=Object(u["b"])(),r=Object(c["computed"])((function(){return n.state.songDetail.songArray}));Object(a["j"])(t.query.id).then((function(e){var t=e.data.programs.map((function(e){return{al:{picUrl:e.coverUrl},id:e.mainSong.id,name:e.name,dt:e.mainSong.duration,label:e.channels[0],album:e.createTime}}));n.commit("setSongMusic",t)}));var o=Object(c["ref"])(),d=function(e,t){o.value=t,n.commit("setSongDetail",e),n.commit("play",t),l["a"].emit("playMusic")},U=Object(c["ref"])([]);return Object(a["e"])(t.query.id).then((function(e){U.value.push(e.data.data)})),function(e,t){var n=Object(c["resolveComponent"])("el-image"),o=Object(c["resolveComponent"])("el-tag"),a=Object(c["resolveComponent"])("el-avatar"),i=Object(c["resolveComponent"])("el-button"),l=Object(c["resolveComponent"])("el-collapse-item"),u=Object(c["resolveComponent"])("el-collapse"),$=Object(c["resolveComponent"])("skeleton1"),I=Object(c["resolveComponent"])("el-divider"),q=Object(c["resolveComponent"])("el-col"),A=Object(c["resolveComponent"])("el-row");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])($,{loading:Object(c["unref"])(U).length,image:{width:"220px",height:"220px"},row:5},{default:Object(c["withCtx"])((function(){var t;return[Object(c["createElementVNode"])("header",null,[Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(n,{class:"cover",src:Object(c["unref"])(U)[0].picUrl,alt:"img"},null,8,["src"])]),Object(c["createElementVNode"])("div",b,[Object(c["createElementVNode"])("div",j,[Object(c["createVNode"])(o,{type:"danger",size:"mini"},{default:Object(c["withCtx"])((function(){return[s]})),_:1}),Object(c["createElementVNode"])("h2",null,Object(c["toDisplayString"])(Object(c["unref"])(U)[0].name),1)]),Object(c["createElementVNode"])("div",O,[Object(c["createVNode"])(a,{class:"img",size:30,src:null===(t=Object(c["unref"])(U)[0].dj.avatarDetail)||void 0===t?void 0:t.identityIconUrl},null,8,["src"]),Object(c["createElementVNode"])("a",f,Object(c["toDisplayString"])(Object(c["unref"])(U)[0].dj.nickname),1),Object(c["createElementVNode"])("span",m,Object(c["toDisplayString"])(e.$formatTime(Object(c["unref"])(U)[0].createTime))+" 创建",1)]),Object(c["createElementVNode"])("div",p,[Object(c["createVNode"])(i,{size:"medium",type:"danger",round:"",icon:"el-icon-caret-right"},{default:Object(c["withCtx"])((function(){return[g]})),_:1}),Object(c["createVNode"])(i,{size:"medium",round:"",icon:"el-icon-folder-add"},{default:Object(c["withCtx"])((function(){return[N]})),_:1}),Object(c["createVNode"])(i,{size:"medium",round:"",icon:"el-icon-share"},{default:Object(c["withCtx"])((function(){return[V]})),_:1})]),Object(c["createElementVNode"])("div",v,[Object(c["createElementVNode"])("p",null,[Object(c["createElementVNode"])("span",h,[Object(c["createVNode"])(o,{type:"danger",size:"mini"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(Object(c["unref"])(U)[0].secondCategory),1)]})),_:1})])]),Object(c["createElementVNode"])("p",null,"电台:"+Object(c["toDisplayString"])(Object(c["unref"])(U)[0].programCount)+" 播放: "+Object(c["toDisplayString"])(e.$formatNumber(Object(c["unref"])(U)[0].subCount)),1),Object(c["unref"])(U)[0].desc&&Object(c["unref"])(U)[0].desc<80?(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",y,Object(c["toDisplayString"])(Object(c["unref"])(U)[0].desc),1)):(Object(c["openBlock"])(),Object(c["createBlock"])(u,{key:1},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{title:"点击展开更多"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(Object(c["unref"])(U)[0].desc),1)]})),_:1})]})),_:1}))])])])]})),_:1},8,["loading"]),C,Object(c["createVNode"])(I,{"content-position":"left"},{default:Object(c["withCtx"])((function(){return[E]})),_:1}),Object(c["createElementVNode"])("nav",k,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(r),(function(t,r){return Object(c["openBlock"])(),Object(c["createBlock"])(A,{class:"item-newSong",align:"middle",onDblclick:function(e){return d(t,r)},key:t.id},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(q,{span:1},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",w,[t.id===e.$store.state.songDetail.songDetail.id?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",x)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",D,Object(c["toDisplayString"])(r+1),1))])]})),_:2},1024),Object(c["createVNode"])(q,{span:2},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",S,[Object(c["createVNode"])(n,{src:t.al.picUrl,class:"image"},null,8,["src"]),_])]})),_:2},1024),Object(c["createVNode"])(q,{span:10},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",null,Object(c["toDisplayString"])(t.name),1)]})),_:2},1024),Object(c["createVNode"])(q,{span:5},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",B,Object(c["toDisplayString"])(t.label),1)]})),_:2},1024),Object(c["createVNode"])(q,{span:5},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",z,Object(c["toDisplayString"])(e.$formatTime(t.album).slice(0,10)),1)]})),_:2},1024),Object(c["createVNode"])(q,{span:1},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",T,Object(c["toDisplayString"])(e.$formatTime(t.dt).slice(-5)),1)]})),_:2},1024)]})),_:2},1032,["onDblclick"])})),128))])],64)}}}),I=(n("1442"),n("6b0d")),q=n.n(I);const A=q()($,[["__scopeId","data-v-d20a7b6a"]]);t["default"]=A},dd54:function(e,t,n){}}]);