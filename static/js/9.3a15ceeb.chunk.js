(this["webpackJsonpmyreact-epic"]=this["webpackJsonpmyreact-epic"]||[]).push([[9],{330:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(72),c=n(68),u=n(24),i=n(11),o=n(327),s=n(139),g=n(187),m=n(329),d=n(25);function h(){var e=Object(u.a)(["\n    max-width:400px;\n"]);return h=function(){return e},e}function p(){var e=Object(u.a)(["\n    margin:20px 0;\n    text-align:center;\n    "]);return p=function(){return e},e}function f(){var e=Object(u.a)(["\n    margin-top:30px;\n    border:1px  dashed #ccc;\n    padding:20px;\n"]);return f=function(){return e},e}var E=o.a.Dragger,b=d.a.div(f()),v=d.a.h2(p()),j=d.a.img(h()),w=Object(l.a)((function(){var e=Object(c.a)(),t=e.ImageStore,n=e.UserStore,l=Object(r.useRef)(),u=Object(r.useRef)(),o=Object(i.d)((function(){return{width:null,setWidth:function(e){this.width=e},get widthStr(){return o.width?"/w/".concat(o.width):""},height:null,setHeight:function(e){this.height=e},get heightStr(){return o.height?"/h/".concat(o.height):""},get furlStr(){return t.serverFile.attributes.url.attributes.url+"?imageView2/0"+o.widthStr+o.heightStr}}})),d={name:"file",showUploadList:!1,multiple:!1,beforeUpload:function(e){return console.log("file: ",e),t.setFile(e),t.setFilename(e.name),n.currentUser?/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/gi.test(e.type)?e.size>2097152?(s.b.error("\u56fe\u7247\u6700\u5927 2 M"),!1):(t.upload().then((function(e){console.log("serverFile\u4e0a\u4f20\u6210\u529f: ",e)})).catch((function(e){console.log("error in Uploader component: ",e)})),!1):(s.b.error("\u53ea\u80fd\u4e0a\u4f20png/svg/jpg/gif\u683c\u5f0f\u7684\u56fe\u7247"),!1):(s.b.warning("\u8bf7\u5148\u767b\u9646\u518d\u4e0a\u4f20\uff01\uff01\uff01"),!1)}};return a.a.createElement(a.a.Fragment,null,a.a.createElement(g.a,{spinning:t.isUploading},a.a.createElement(E,d,a.a.createElement("p",{className:"ant-upload-drag-icon"},a.a.createElement(m.a,null)),a.a.createElement("p",{className:"ant-upload-text"},"\u70b9\u51fb\u6216\u8005\u62d6\u62fd\u4e0a\u4f20\u56fe\u7247"),a.a.createElement("p",{className:"ant-upload-hint"},"\u4ec5\u652f\u6301.png/.gif/.jpg/.svg\u683c\u5f0f\u7684\u56fe\u7247\uff0c\u56fe\u7247\u6700\u5927 2 M"))),t.serverFile?a.a.createElement(b,null,a.a.createElement(v,null,"\u4e0a\u4f20\u7ed3\u679c"),a.a.createElement("dl",null,a.a.createElement("dt",null,"\u7ebf\u4e0a\u5730\u5740"),a.a.createElement("dd",null,a.a.createElement("a",null,t.serverFile.attributes.url.attributes.url)),a.a.createElement("dt",null,"\u6587\u4ef6\u540d"),a.a.createElement("dd",null,t.filename),a.a.createElement("dt",null,"\u56fe\u7247\u9884\u89c8"),a.a.createElement("dd",null,a.a.createElement(j,{src:t.serverFile.attributes.url.attributes.url})),a.a.createElement("dt",null,"\u66f4\u591a\u5c3a\u5bf8"),a.a.createElement("dd",null,a.a.createElement("input",{ref:l,onChange:function(){console.log("bindWidthChange..."),console.log("refWidth: ",l),o.setWidth(l.current.value)},placeholder:"\u6700\u5927\u5bbd\u5ea6\uff08\u53ef\u9009\uff09"}),a.a.createElement("input",{ref:u,onChange:function(){o.setHeight(u.current.value)},placeholder:"\u6700\u5927\u9ad8\u5ea6\uff08\u53ef\u9009\uff09"})),a.a.createElement("dd",null,a.a.createElement("a",{target:"_blank",href:o.furlStr},o.furlStr)))):null)})),O=Object(l.a)((function(e){var t=e.children,n=Object(c.a)().UserStore;return a.a.createElement(a.a.Fragment,null,n.currentUser?null:a.a.createElement("h2",null,t))})),S=Object(l.a)((function(){Object(c.a)().UserStore;return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null,"\u8bf7\u5148\u767b\u9646\u518d\u4e0a\u4f20\uff01\uff01\uff01"),a.a.createElement(w,null))}));t.default=S}}]);
//# sourceMappingURL=9.3a15ceeb.chunk.js.map