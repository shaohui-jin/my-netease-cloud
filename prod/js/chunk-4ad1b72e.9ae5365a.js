(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ad1b72e"],{"0481":function(e,t,n){"use strict";var c=n("23e7"),r=n("a2bf"),a=n("7b0b"),i=n("07fa"),l=n("5926"),o=n("65f0");c({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=a(this),n=i(t),c=o(t,0);return c.length=r(c,t,t,n,0,void 0===e?1:l(e)),c}})},4069:function(e,t,n){var c=n("44d2");c("flat")},"4fad":function(e,t,n){var c=n("23e7"),r=n("6f53").entries;c({target:"Object",stat:!0},{entries:function(e){return r(e)}})},"6f53":function(e,t,n){var c=n("83ab"),r=n("e330"),a=n("df75"),i=n("fc6a"),l=n("d1e7").f,o=r(l),u=r([].push),s=function(e){return function(t){var n,r=i(t),l=a(r),s=l.length,b=0,f=[];while(s>b)n=l[b++],c&&!o(r,n)||u(f,e?[n,r[n]]:r[n]);return f}};e.exports={entries:s(!0),values:s(!1)}},"883c":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return s}));var c=n("1ae0");function r(e){return Object(c["a"])({url:"/artist/list",params:e})}function a(e){return Object(c["a"])({url:"/artist/top/song",params:{id:e}})}function i(e,t){return Object(c["a"])({url:"/artist/album",params:{id:e,limit:10,offset:t}})}function l(e){return Object(c["a"])({url:"/artist/detail",params:{id:e}})}function o(e){return Object(c["a"])({url:"/artist/desc",params:{id:e}})}function u(e){return Object(c["a"])({url:"/simi/artist",params:{id:e}})}function s(e){return Object(c["a"])({url:"/artist/mv",params:{id:e}})}},a2bf:function(e,t,n){"use strict";var c=n("da84"),r=n("e8b5"),a=n("07fa"),i=n("0366"),l=c.TypeError,o=function(e,t,n,c,u,s,b,f){var d,j,O=u,p=0,m=!!b&&i(b,f);while(p<c){if(p in n){if(d=m?m(n[p],p,t):n[p],s>0&&r(d))j=a(d),O=o(e,t,d,j,O,s-1)-1;else{if(O>=9007199254740991)throw l("Exceed the acceptable array length");e[O]=d}O++}p++}return O};e.exports=o},ab7e:function(e,t,n){},da18:function(e,t,n){"use strict";n.r(t);n("0481"),n("4069"),n("4fad"),n("b0c0");var c=n("7a23"),r=n("883c"),a=n("6c02"),i=n("5502"),l=function(e){return Object(c["pushScopeId"])("data-v-2ecd59bb"),e=e(),Object(c["popScopeId"])(),e},o=l((function(){return Object(c["createElementVNode"])("strong",null,"语种:",-1)})),u=["onClick"],s={class:"category"},b=l((function(){return Object(c["createElementVNode"])("strong",null,"分类:",-1)})),f=["onClick"],d={style:{display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},j=l((function(){return Object(c["createElementVNode"])("strong",null,"筛选:",-1)})),O=["onClick"],p=l((function(){return Object(c["createElementVNode"])("br",null,null,-1)})),m=l((function(){return Object(c["createElementVNode"])("br",null,null,-1)})),v=l((function(){return Object(c["createElementVNode"])("br",null,null,-1)})),g={key:0,style:{display:"flex","justify-content":"center"}},k={setup:function(e){var t=Object(c["ref"])([]),n=Object(c["ref"])(0),l=Object(c["reactive"])({limit:10,offset:0,initial:-1,type:-1,area:-1});Object(r["c"])(l).then((function(e){t.value=e.data.artists,n.value=e.data.artists.length}));for(var k=Object(c["ref"])([]),y=0;y<26;y++)k.value.push(String.fromCharCode(65+y));var h=[[{area:"全部",id:-1},{area:"华语",id:7},{area:"欧美",id:96},{area:"日本",id:8},{area:"韩国",id:16},{area:"其他",id:0}],[{type:"全部",id:-1},{type:"男歌手",id:1},{type:"女歌手",id:2},{type:"乐队",id:3}]],C=function(e){n.value=0,"area"===Object.entries(e).flat(1)[0]?l.area=e.id:"type"===Object.entries(e).flat(1)[0]?l.type=e.id:l.initial=e,Object(r["c"])(l).then((function(e){t.value=e.data.artists,n.value=e.data.artists.length}))},E=function(e){n.value=0,l.offset=10*(e-1),Object(r["c"])(l).then((function(e){t.value=e.data.artists,n.value=e.data.artists.length}))},B=Object(a["d"])(),x=Object(i["b"])(),N=function(e){x.commit("setSingerId",e),B.push("/SingerContent")};return function(e,r){var a=Object(c["resolveComponent"])("el-card"),i=Object(c["resolveComponent"])("el-image"),y=Object(c["resolveComponent"])("skeleton2"),B=Object(c["resolveComponent"])("el-pagination");return Object(c["openBlock"])(),Object(c["createElementBlock"])("section",null,[Object(c["createVNode"])(a,{class:"box-card"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",null,[o,(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(h)[0],(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{class:Object(c["normalizeClass"])({active:Object(c["unref"])(l).area===e.id}),onClick:function(t){return C(e)},key:e.id,style:{"margin-left":"20px"}},Object(c["toDisplayString"])(e.area),11,u)})),128))]),Object(c["createElementVNode"])("div",s,[b,(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(h)[1],(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{class:Object(c["normalizeClass"])({active:Object(c["unref"])(l).type===e.id}),onClick:function(t){return C(e)},key:e.id,style:{"margin-left":"20px"}},Object(c["toDisplayString"])(e.type),11,f)})),128))]),Object(c["createElementVNode"])("div",d,[j,Object(c["createElementVNode"])("span",{style:{"margin-left":"12px"},onClick:r[0]||(r[0]=function(e){return C(-1)}),class:Object(c["normalizeClass"])({active:-1===Object(c["unref"])(l).initial})},"热门",2),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(k),(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{class:Object(c["normalizeClass"])({active:Object(c["unref"])(l).initial===e}),onClick:function(t){return C(e)},key:t,style:{"margin-left":"20px"}},Object(c["toDisplayString"])(e),11,O)})),128)),Object(c["createElementVNode"])("span",{style:{"margin-left":"20px"},onClick:r[1]||(r[1]=function(e){return C(0)}),class:Object(c["normalizeClass"])({active:0===Object(c["unref"])(l).initial})},"#",2)])]})),_:1}),p,Object(c["createVNode"])(y,{loading:Object(c["unref"])(n),count:10,size:{width:"210px",height:"220px"},show:!1},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("footer",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(t),(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"box",key:e.id},[Object(c["createVNode"])(i,{onClick:function(t){return N(e.id)},src:e.img1v1Url,class:"image"},null,8,["onClick","src"]),Object(c["createElementVNode"])("div",null,Object(c["toDisplayString"])(e.name),1)])})),128))])]})),_:1},8,["loading"]),m,v,Object(c["unref"])(t).length?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",g,[Object(c["createVNode"])(B,{background:"",layout:"prev, pager, next",onCurrentChange:E,total:1e3})])):Object(c["createCommentVNode"])("",!0)])}}},y=(n("f3e4"),n("6b0d")),h=n.n(y);const C=h()(k,[["__scopeId","data-v-2ecd59bb"]]);t["default"]=C},f3e4:function(e,t,n){"use strict";n("ab7e")}}]);