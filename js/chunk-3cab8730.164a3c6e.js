(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cab8730"],{5345:function(t,e,n){"use strict";n("bfb5")},"883c":function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"g",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return l}));var r=n("1ae0");function c(t){return Object(r["a"])({url:"/artist/list",params:t})}function a(t){return Object(r["a"])({url:"/artist/top/song",params:{id:t}})}function u(t,e){return Object(r["a"])({url:"/artist/album",params:{id:t,offset:e}})}function i(t){return Object(r["a"])({url:"/artist/detail",params:{id:t}})}function o(t){return Object(r["a"])({url:"/artist/desc",params:{id:t}})}function s(t){return Object(r["a"])({url:"/simi/artist",params:{id:t}})}function l(t){return Object(r["a"])({url:"/artist/mv",params:{id:t}})}},bfb5:function(t,e,n){},c104:function(t,e,n){"use strict";n.r(e);var r=n("1da1"),c=(n("b0c0"),n("96cf"),n("7a23")),a=n("6c02"),u=n("5502"),i=n("883c"),o={key:0,class:"box"},s={setup:function(t){var e=Object(u["b"])(),n=Object(c["computed"])((function(){return e.state.singer.singerId})),s=Object(c["ref"])([]);Object(c["watch"])(n,function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])(e);case 2:n=t.sent,s.value=n.data.artists;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{immediate:!0,deep:!0});var l=Object(a["d"])(),b=function(t){e.commit("setSingerId",t),l.push("/detail/singer")};return function(t,e){var n=Object(c["resolveComponent"])("cover"),r=Object(c["resolveComponent"])("el-empty");return s.value.length?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(s.value,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])(n,{key:t.id,image:t.picUrl,name:t.name,onClick:function(e){return b(t.id)}},null,8,["image","name","onClick"])})),128))])):(Object(c["openBlock"])(),Object(c["createBlock"])(r,{key:1,description:"暂无相似歌手"}))}}},l=(n("5345"),n("6b0d")),b=n.n(l);const d=b()(s,[["__scopeId","data-v-d60ffe2e"]]);e["default"]=d}}]);