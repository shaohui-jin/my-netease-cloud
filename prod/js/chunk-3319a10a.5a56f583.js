(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3319a10a"],{"5a90":function(e,t,c){"use strict";c.r(t);c("99af");var a=c("7a23"),n=c("da3c"),o=c("6c02"),r=c("5502"),i=c("74b4"),l=c("a5e1"),d={style:{display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},s={setup:function(e){var t=Object(a["ref"])([]),c=Object(r["b"])(),s=Object(a["computed"])((function(){return c.state.songDetail.keywords})),u={keywords:s.value,type:1014,limit:16};Object(i["b"])(u).then((function(e){t.value=Object(l["i"])(e.data.result.videos)}));var b=Object(o["d"])(),f=function(e){b.push("/videoDetail?".concat(e.length<20?"id":"vid","=").concat(e))};return function(e,c){var o=Object(a["resolveComponent"])("skeleton2");return Object(a["openBlock"])(),Object(a["createBlock"])(o,{count:12,loading:Object(a["unref"])(t).length,size:{width:"286px",height:"150px"}},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",d,[Object(a["createVNode"])(n["a"],{videoArray:Object(a["unref"])(t),onGoDetail:f},null,8,["videoArray"])])]})),_:1},8,["loading"])}}};const u=s;t["default"]=u},"685a":function(e,t,c){"use strict";c("dcb2")},"99af":function(e,t,c){"use strict";var a=c("23e7"),n=c("da84"),o=c("d039"),r=c("e8b5"),i=c("861d"),l=c("7b0b"),d=c("07fa"),s=c("8418"),u=c("65f0"),b=c("1dde"),f=c("b622"),p=c("2d00"),v=f("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",m=n.TypeError,y=p>=51||!o((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),g=b("concat"),k=function(e){if(!i(e))return!1;var t=e[v];return void 0!==t?!!t:r(e)},h=!y||!g;a({target:"Array",proto:!0,forced:h},{concat:function(e){var t,c,a,n,o,r=l(this),i=u(r,0),b=0;for(t=-1,a=arguments.length;t<a;t++)if(o=-1===t?r:arguments[t],k(o)){if(n=d(o),b+n>j)throw m(O);for(c=0;c<n;c++,b++)c in o&&s(i,b,o[c])}else{if(b>=j)throw m(O);s(i,b++,o)}return i.length=b,i}})},da3c:function(e,t,c){"use strict";c("fb6a");var a=c("7a23"),n=function(e){return Object(a["pushScopeId"])("data-v-be951be6"),e=e(),Object(a["popScopeId"])(),e},o=["onClick"],r={class:"top"},i={class:"play"},l=n((function(){return Object(a["createElementVNode"])("i",{class:"el-icon-caret-right"},null,-1)})),d={class:"playCount"},s={key:0,class:"time"},u={class:"bottom"},b={class:"name"},f={class:"label"},p={props:{videoArray:{type:Array}},emits:["goDetail"],setup:function(e,t){var c=t.emit,n=function(e){c("goDetail",e)};return function(t,c){var p=Object(a["resolveComponent"])("el-image");return Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.videoArray,(function(e){var c;return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{onClick:function(t){return n(e.data.vid)},class:"video",key:e.data.vid},[Object(a["createElementVNode"])("div",r,[Object(a["createVNode"])(p,{src:e.data.coverUrl,class:"image"},null,8,["src"]),Object(a["createElementVNode"])("div",i,[l,Object(a["createElementVNode"])("span",d,Object(a["toDisplayString"])(t.$formatNumber(e.data.cover)),1)]),e.data.durationms?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",s,Object(a["toDisplayString"])(t.$formatTime(e.data.durationms).slice(-5)),1)):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("div",u,[Object(a["createElementVNode"])("div",b,Object(a["toDisplayString"])(e.data.title),1),Object(a["createElementVNode"])("div",f,Object(a["toDisplayString"])(null===(c=e.data.creator)||void 0===c?void 0:c.nickname),1)])],8,o)})),128)}}},v=(c("685a"),c("6b0d")),j=c.n(v);const O=j()(p,[["__scopeId","data-v-be951be6"]]);t["a"]=O},dcb2:function(e,t,c){}}]);