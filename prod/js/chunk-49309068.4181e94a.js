(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49309068"],{"3d41":function(t,e,n){"use strict";n.r(e);n("b0c0");var c=n("7a23"),b=n("6c02"),a=n("5502"),u=n("f1b7"),i=n("8d85"),l={setup:function(t){var e=Object(c["T"])([]);Object(i["e"])().then((function(t){e.value=t.data.data}));var n=Object(a["b"])(),l=Object(b["d"])(),r=function(t){n.commit("setSingerId",t),l.push("/SingerContent")};return function(t,n){var b,a,i=Object(c["X"])("skeleton1");return Object(c["O"])(),Object(c["o"])(c["b"],null,[Object(c["p"])("h4",null,"收藏的歌手("+Object(c["bb"])(Object(c["fb"])(e).length)+")",1),Object(c["s"])(i,{count:(null===(b=t.$store.state.data)||void 0===b?void 0:b.artistCount)>8?8:null===(a=t.$store.state.data)||void 0===a?void 0:a.artistCount,loading:Object(c["fb"])(e).length,image:{width:"80px",height:"80px"},row:1},{default:Object(c["nb"])((function(){return[(Object(c["O"])(!0),Object(c["o"])(c["b"],null,Object(c["V"])(Object(c["fb"])(e),(function(t){return Object(c["O"])(),Object(c["o"])("div",{key:t.id,style:{"margin-top":"10px"}},[Object(c["s"])(u["a"],{onClick:function(e){return r(t.id)},image:t.img1v1Url,name:t.name,label:"专辑: "+t.albumSize,album:"MV: "+t.mvSize},null,8,["onClick","image","name","label","album"])])})),128))]})),_:1},8,["count","loading"])],64)}}};const r=l;e["default"]=r},f1b7:function(t,e,n){"use strict";n("a9e3"),n("b0c0");var c=n("7a23"),b={class:"item"},a={class:"cover"},u={class:"label"},i={class:"label"},l={props:{image:{type:String},name:{type:String},label:{type:[String,Number]},album:{type:[String,Number]}},setup:function(t){return function(e,n){var l=Object(c["X"])("el-image"),r=Object(c["X"])("el-col"),o=Object(c["X"])("el-row");return Object(c["O"])(),Object(c["o"])("nav",b,[Object(c["s"])(o,{class:"item-newSong",align:"middle"},{default:Object(c["nb"])((function(){return[Object(c["s"])(r,{span:3},{default:Object(c["nb"])((function(){return[Object(c["p"])("div",a,[Object(c["s"])(l,{src:t.image,class:"image"},null,8,["src"])])]})),_:1}),Object(c["s"])(r,{span:10},{default:Object(c["nb"])((function(){return[Object(c["p"])("div",null,Object(c["bb"])(t.name),1)]})),_:1}),Object(c["s"])(r,{span:9},{default:Object(c["nb"])((function(){return[Object(c["p"])("div",u,Object(c["bb"])(t.label),1)]})),_:1}),Object(c["s"])(r,{span:2},{default:Object(c["nb"])((function(){return[Object(c["p"])("div",i,Object(c["bb"])(t.album),1)]})),_:1})]})),_:1})])}}},r=(n("f572"),n("d959")),o=n.n(r);const s=o()(l,[["__scopeId","data-v-031eaf6d"]]);e["a"]=s},f572:function(t,e,n){"use strict";n("f7a2")},f7a2:function(t,e,n){}}]);