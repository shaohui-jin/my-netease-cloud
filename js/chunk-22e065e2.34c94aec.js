(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22e065e2"],{"3a65":function(e,t,n){"use strict";n("9dd0")},"6c13":function(e,t,n){},7884:function(e,t,n){"use strict";n("a9e3"),n("b0c0");var c=n("7a23"),a={class:"item"},l={class:"cover"},o={class:"label"},r={class:"label"},i={props:{image:{type:String},name:{type:String},label:{type:[String,Number]},album:{type:[String,Number]}},setup:function(e){return function(t,n){var i=Object(c["resolveComponent"])("el-image"),b=Object(c["resolveComponent"])("el-col"),u=Object(c["resolveComponent"])("el-row");return Object(c["openBlock"])(),Object(c["createElementBlock"])("nav",a,[Object(c["createVNode"])(u,{class:"item-newSong",align:"middle"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,{span:3},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(i,{src:e.image,class:"image"},null,8,["src"])])]})),_:1}),Object(c["createVNode"])(b,{span:10},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",null,Object(c["toDisplayString"])(e.name),1)]})),_:1}),Object(c["createVNode"])(b,{span:9},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",o,Object(c["toDisplayString"])(e.label),1)]})),_:1}),Object(c["createVNode"])(b,{span:2},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",r,Object(c["toDisplayString"])(e.album),1)]})),_:1})]})),_:1})])}}},b=(n("7a00"),n("6b0d")),u=n.n(b);const s=u()(i,[["__scopeId","data-v-2eef8bdb"]]);t["a"]=s},"7a00":function(e,t,n){"use strict";n("6c13")},"8c66":function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),a=n("7884"),l=n("5502"),o=n("6c02"),r=n("8d85"),i={class:"skeleton-item-box"},b={key:0},u={key:1},s={setup:function(e){var t=Object(c["ref"])([]),n=Object(c["ref"])(!0);Object(c["onMounted"])((function(){Object(r["e"])().then((function(e){t.value=e.data.data,n.value=!1}))}));var s=Object(l["b"])(),d=Object(o["d"])(),m=function(e){s.commit("setSingerId",e),d.push("/detail/singer")};return function(e,l){var o=Object(c["resolveComponent"])("el-skeleton-item"),r=Object(c["resolveComponent"])("el-empty"),s=Object(c["resolveComponent"])("el-skeleton");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("h4",null,"收藏的歌手("+Object(c["toDisplayString"])(t.value.length)+")",1),Object(c["createVNode"])(s,{count:8,loading:n.value,animated:""},{template:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",i,[Object(c["createVNode"])(o,{variant:"image",class:"skeleton-item-image"}),Object(c["createVNode"])(o,{variant:"p",class:"skeleton-item-p"})])]})),default:Object(c["withCtx"])((function(){return[t.value.length?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",b,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t.value,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:e.id,style:{"margin-top":"10px"}},[Object(c["createVNode"])(a["a"],{image:e.img1v1Url,name:e.name,label:"专辑: "+e.albumSize,album:"MV: "+e.mvSize,onClick:function(t){return m(e.id)}},null,8,["image","name","label","album","onClick"])])})),128))])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",u,[Object(c["createVNode"])(r,{"image-size":300})]))]})),_:1},8,["loading"])],64)}}},d=(n("3a65"),n("6b0d")),m=n.n(d);const j=m()(s,[["__scopeId","data-v-06e3d298"]]);t["default"]=j},"9dd0":function(e,t,n){}}]);