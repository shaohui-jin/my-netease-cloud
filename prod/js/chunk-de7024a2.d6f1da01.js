(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de7024a2"],{6733:function(e,t,n){"use strict";n("854f")},"854f":function(e,t,n){},afba:function(e,t,n){},b2eb:function(e,t,n){"use strict";n("afba")},e0fc:function(e,t,n){"use strict";n("b0c0");var c=n("7a23"),a=["onClick"],u={emits:["change"],setup:function(e,t){var n=t.emit,u=Object(c["T"])("全部"),i=Object(c["T"])([{name:"全部",area:"ALL",type:0},{name:"华语",area:"ZH",type:7},{name:"欧美",area:"EA",type:96},{name:"韩国",area:"KR",type:16},{name:"日本",area:"JP",type:8}]),o=function(e){u.value=e.name,n("change",e)};return function(e,t){return Object(c["O"])(),Object(c["o"])("nav",null,[(Object(c["O"])(!0),Object(c["o"])(c["b"],null,Object(c["V"])(Object(c["fb"])(i),(function(e,t){return Object(c["O"])(),Object(c["o"])("div",{onClick:function(t){return o(e)},class:Object(c["D"])({active:Object(c["fb"])(u)===e.name}),key:t},Object(c["bb"])(e.name),11,a)})),128))])}}},i=(n("6733"),n("d959")),o=n.n(i);const b=o()(u,[["__scopeId","data-v-027365a5"]]);t["a"]=b},f740:function(e,t,n){"use strict";n.r(t);var c=n("1da1"),a=(n("b0c0"),n("96cf"),n("7a23")),u=n("6c02"),i=n("e0fc"),o=n("c6a0"),b=n("0250"),r=n("a5e1"),s=n("5502"),l=function(e){return Object(a["R"])("data-v-677f1005"),e=e(),Object(a["P"])(),e},O={class:"section"},f=l((function(){return Object(a["p"])("br",null,null,-1)})),j={style:{display:"flex","justify-content":"center"}},d={setup:function(e){var t={limit:10,area:"ALL",offset:0},n=Object(a["T"])([]);Object(a["L"])(Object(c["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["c"])(t);case 2:c=e.sent,n.value=null===c||void 0===c?void 0:c.data.albums;case 4:case"end":return e.stop()}}),e)}))));var l=Object(u["d"])(),d=Object(s["b"])(),m=function(e){d.commit("setHeader"),Object(b["a"])(e.id).then((function(e){d.commit("setSongList",Object(r["a"])(e.data.album)),d.commit("setSongMusic",e.data.songs)})),l.push("/songDetail")},p=function(e){n.value.length=0,t.area=e.area,Object(o["c"])(t).then((function(e){n.value=e.data.albums}))},v=function(e){t.limit=e,Object(o["c"])(t).then((function(e){n.value=e.data.albums}))},g=function(e){n.value.length=0,t.offset=e,Object(o["c"])(t).then((function(e){n.value=e.data.albums}))};return function(e,t){var c=Object(a["X"])("cover"),u=Object(a["X"])("skeleton2"),o=Object(a["X"])("el-pagination");return Object(a["O"])(),Object(a["o"])(a["b"],null,[Object(a["s"])(i["a"],{onChange:p}),Object(a["p"])("section",null,[Object(a["s"])(u,{count:10,loading:Object(a["fb"])(n).length,size:{width:"200px",height:"200px"},show:!1},{default:Object(a["nb"])((function(){return[Object(a["p"])("section",O,[(Object(a["O"])(!0),Object(a["o"])(a["b"],null,Object(a["V"])(Object(a["fb"])(n),(function(e){return Object(a["O"])(),Object(a["m"])(c,{onClick:function(t){return m(e)},image:e.picUrl,name:e.name,key:e.id},null,8,["onClick","image","name"])})),128))])]})),_:1},8,["loading"]),f,Object(a["p"])("div",j,[Object(a["s"])(o,{background:"",onSizeChange:v,onCurrentChange:g,"page-sizes":[10,20,30,40],"page-size":10,layout:"sizes, prev, pager, next, jumper",total:400})])])],64)}}},m=(n("b2eb"),n("d959")),p=n.n(m);const v=p()(d,[["__scopeId","data-v-677f1005"]]);t["default"]=v}}]);