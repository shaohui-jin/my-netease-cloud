(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04f7bb46"],{"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("fb6a"),r("d3b7"),r("b0c0"),r("a630"),r("3ca3");var n=r("6b75");function c(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(t,e):void 0}}},2909:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("6b75");function c(t){if(Array.isArray(t))return Object(n["a"])(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=r("06c5");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return c(t)||o(t)||Object(i["a"])(t)||a()}},"4df4":function(t,e,r){"use strict";var n=r("0366"),c=r("7b0b"),o=r("9bdd"),i=r("e95a"),a=r("50c4"),u=r("8418"),l=r("9a1f"),b=r("35a1");t.exports=function(t){var e,r,f,s,d,m,v=c(t),y="function"==typeof this?this:Array,O=arguments.length,j=O>1?arguments[1]:void 0,p=void 0!==j,A=b(v),h=0;if(p&&(j=n(j,O>2?arguments[2]:void 0,2)),void 0==A||y==Array&&i(A))for(e=a(v.length),r=new y(e);e>h;h++)m=p?j(v[h],h):v[h],u(r,h,m);else for(s=l(v,A),d=s.next,r=new y;!(f=d.call(s)).done;h++)m=p?o(s,j,[f.value,h],!0):f.value,u(r,h,m);return r.length=h,r}},"573d":function(t,e,r){},"6b75":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},"99aa":function(t,e,r){"use strict";r("573d")},"9bdd":function(t,e,r){var n=r("825a"),c=r("2a62");t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(i){c(t,"throw",i)}}},a630:function(t,e,r){var n=r("23e7"),c=r("4df4"),o=r("1c7e"),i=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:c})},d28b:function(t,e,r){var n=r("746f");n("iterator")},dfb3:function(t,e,r){"use strict";r.r(e);var n=r("2909"),c=(r("a9e3"),r("c740"),r("b0c0"),r("7a23")),o=r("5502"),i={id:"section"},a={class:"header-header"},u=["onClick"],l={props:{currentTime:{type:Number},lyricArr:{type:Array}},emits:["closeLyricPopup","scrollPlay"],setup:function(t,e){var r=e.emit,l=t,b=Object(o["b"])(),f=Object(c["T"])(),s=Object(c["T"])([]),d=Object(c["k"])((function(){return b.state.songDetail.songDetail}));Object(c["lb"])(l.lyricArr,(function(t){Object(c["C"])((function(){s.value=Object(n["a"])(document.querySelectorAll(".box-main-nav"))}))}),{immediate:!0}),Object(c["lb"])((function(){var t;return null===(t=l.lyricArr)||void 0===t?void 0:t.findIndex((function(t,e){return l.currentTime>=t.time&&l.currentTime<l.lyricArr[e+1].time}))}),(function(t){t>5&&(f.value.scrollTop=50*(t-5))}));var m,v=function(){r("closeLyricPopup")},y=Object(c["T"])(!1);addEventListener("mousewheel",(function(){y.value=!0,clearTimeout(m),m=setTimeout((function(){y.value=!1}),3e3)}));var O=function(t){r("scrollPlay",t)};return function(e,r){return Object(c["O"])(),Object(c["o"])("section",i,[Object(c["p"])("i",{class:"el-icon-close",onClick:v}),Object(c["p"])("header",a,Object(c["bb"])(Object(c["fb"])(d).name),1),Object(c["p"])("main",{class:"box-main",ref:function(t,e){e["dom"]=t,Object(c["z"])(f)?f.value=t:f=t}},[(Object(c["O"])(!0),Object(c["o"])(c["b"],null,Object(c["V"])(t.lyricArr,(function(e,r){return Object(c["O"])(),Object(c["o"])("nav",{id:"box-main-nav",key:r,class:Object(c["D"])(["box-main-nav",Object(c["fb"])(y)?"scroll-pointer":"",t.currentTime>=e.time&&t.currentTime<t.lyricArr[r+1].time?"active-lyric":""]),onClick:function(t){return O(e.time)}},Object(c["bb"])(e.lyric),11,u)})),128))],512)])}}},b=(r("99aa"),r("d959")),f=r.n(b);const s=f()(l,[["__scopeId","data-v-7ac14344"]]);e["default"]=s}}]);