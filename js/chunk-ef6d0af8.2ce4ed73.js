(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef6d0af8"],{"126f":function(e,t,n){"use strict";n("d11d")},"392a":function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),a=n("a0dd"),o=n("5502"),i=n("6c02"),r=n("c6a0"),l=n("0250"),s=n("a5e1"),u={class:"section"},b={class:"section"},d={class:"pagination"},m={setup:function(e){var t=Object(c["reactive"])({limit:10,area:"ALL",offset:0}),n=Object(c["ref"])([]),m=Object(i["d"])(),j=Object(o["b"])(),O=function(e){j.commit("setHeader"),Object(l["a"])(e.id).then((function(e){j.commit("setSongList",Object(s["a"])(e.data.album)),j.commit("setSongMusic",e.data.songs),m.push("/detail/song")}))},f=function(){Object(r["c"])(t).then((function(e){n.value=null===e||void 0===e?void 0:e.data.albums}))},p=function(e){t.area=e.area,f()},k=function(e){t.limit=e,f()},v=function(e){t.offset=e,f()};return function(e,t){var o=Object(c["resolveComponent"])("el-skeleton-item"),i=Object(c["resolveComponent"])("cover"),r=Object(c["resolveComponent"])("el-skeleton"),l=Object(c["resolveComponent"])("el-pagination");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(a["a"],{onChange:p}),Object(c["createVNode"])(r,{count:1,loading:!Boolean(n.value.length),animated:!0},{template:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",u,[(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(10,(function(e){return Object(c["createElementVNode"])("div",{key:e,class:"item"},[Object(c["createVNode"])(o,{variant:"image",class:"skeleton-image"}),Object(c["createVNode"])(o,{variant:"p",class:"skeleton-p"})])})),64))])]})),default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("section",b,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.value,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:e.id,image:e.picUrl,name:e.name,onClick:function(t){return O(e)}},null,8,["image","name","onClick"])})),128))])]})),_:1},8,["loading"]),Object(c["createElementVNode"])("div",d,[Object(c["createVNode"])(l,{background:"","page-sizes":[10,20,30,40],"page-size":10,layout:"sizes, prev, pager, next, jumper",total:400,onSizeChange:k,onCurrentChange:v})])],64)}}},j=(n("126f"),n("6b0d")),O=n.n(j);const f=O()(m,[["__scopeId","data-v-cc20f47e"]]);t["default"]=f},"3bbd":function(e,t,n){},a0dd:function(e,t,n){"use strict";n("b0c0");var c=n("7a23"),a={class:"tags-box"},o=["onClick"],i={emits:["change"],setup:function(e,t){var n=t.emit,i=Object(c["ref"])(),r=Object(c["ref"])([{name:"全部",area:"ALL",type:0},{name:"华语",area:"ZH",type:7},{name:"欧美",area:"EA",type:96},{name:"韩国",area:"KR",type:16},{name:"日本",area:"JP",type:8}]),l=function(e){i.value=e.name,n("change",e)};return Object(c["onMounted"])((function(){l(r.value[0])})),function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("section",a,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(r.value,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{key:t,class:Object(c["normalizeClass"])({active:i.value===e.name}),onClick:function(t){return l(e)}},Object(c["toDisplayString"])(e.name),11,o)})),128))])}}},r=(n("d351"),n("6b0d")),l=n.n(r);const s=l()(i,[["__scopeId","data-v-bc7f2564"]]);t["a"]=s},d11d:function(e,t,n){},d351:function(e,t,n){"use strict";n("3bbd")}}]);