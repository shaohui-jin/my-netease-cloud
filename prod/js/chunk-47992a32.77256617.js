(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47992a32"],{"60af":function(e,t,n){},"7b8c":function(e,t,n){"use strict";n("60af")},"883c":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"g",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return l}));var r=n("1ae0");function c(e){return Object(r["a"])({url:"/artist/list",params:e})}function a(e){return Object(r["a"])({url:"/artist/top/song",params:{id:e}})}function u(e,t){return Object(r["a"])({url:"/artist/album",params:{id:e,limit:10,offset:t}})}function o(e){return Object(r["a"])({url:"/artist/detail",params:{id:e}})}function i(e){return Object(r["a"])({url:"/artist/desc",params:{id:e}})}function s(e){return Object(r["a"])({url:"/simi/artist",params:{id:e}})}function l(e){return Object(r["a"])({url:"/artist/mv",params:{id:e}})}},9760:function(e,t,n){"use strict";n.r(t);var r=n("1da1"),c=(n("b0c0"),n("96cf"),n("7a23")),a=n("883c"),u=n("6c02"),o=n("5502"),i=n("0250"),s=n("a5e1"),l=function(e){return Object(c["pushScopeId"])("data-v-687381d8"),e=e(),Object(c["popScopeId"])(),e},b=l((function(){return Object(c["createElementVNode"])("br",null,null,-1)})),d={class:"div"},m=l((function(){return Object(c["createElementVNode"])("br",null,null,-1)})),f={setup:function(e){var t=Object(u["d"])(),n=Object(o["b"])(),l=Object(c["computed"])((function(){return n.state.singer.singerId})),f=Object(c["ref"])([]);Object(c["onMounted"])(Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["b"])(l.value);case 2:t=e.sent,f.value=t.data.hotAlbums;case 4:case"end":return e.stop()}}),e)}))));var p=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["b"])(l.value,t);case 2:n=e.sent,f.value=n.data.hotAlbums;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){Object(i["a"])(e).then((function(e){n.commit("setSongList",Object(s["a"])(e.data.album)),n.commit("setSongMusic",e.data.songs),t.push("/songDetail")}))};return function(e,t){var n=Object(c["resolveComponent"])("cover"),r=Object(c["resolveComponent"])("el-pagination");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[b,Object(c["createElementVNode"])("div",d,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(f.value,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(n,{image:e.picUrl,name:e.name,onClick:function(t){return j(e.id)},time:e.publishTime,key:e.id},null,8,["image","name","onClick","time"])})),128))]),m,f.value.length>10?(Object(c["openBlock"])(),Object(c["createBlock"])(r,{key:0,onCurrentChange:p,background:"",layout:"prev, pager, next",total:100})):Object(c["createCommentVNode"])("",!0)],64)}}},p=(n("7b8c"),n("6b0d")),j=n.n(p);const O=j()(f,[["__scopeId","data-v-687381d8"]]);t["default"]=O}}]);