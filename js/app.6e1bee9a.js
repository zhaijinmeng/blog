(function(e){function n(n){for(var r,a,l=n[0],c=n[1],s=n[2],f=0,d=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(n);while(d.length)d.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,l=1;l<t.length;l++){var c=t[l];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/blog/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var u=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("64a9"),o=t.n(r);o.a},"526f":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("HelloWorld")],1)},i=[],a=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("div",{attrs:{id:"container"}}),t("div",{attrs:{id:"container2"}})])}],c=t("5a89"),s=t("4086"),u=t("e642"),f={name:"HelloWorld",props:{msg:String},data:function(){return{camera1:null,scene1:null,renderer1:null,mesh1:null,camera2:null,scene2:null,renderer2:null,mesh2:null}},methods:{init1:function(){var e=this,n=document.getElementById("container");this.camera1=new c["r"](45,n.clientWidth/n.clientHeight/2,.1,2e3),this.camera1.position.x=-.01,this.camera1.position.z=.6,this.scene1=new c["v"];var t=new c["a"]("#fff",5),r=new s["a"];r.setPath("../../public/objmtl/"),r.load("20357_Cube_Bookcase_v1.mtl",(function(r){r.preload();var o=new u["a"];o.setMaterials(r),o.setPath("../../public/objmtl/"),o.load("20357_Cube_Bookcase_v1.obj",(function(r){r.scale.x=.0075,r.scale.y=r.scale.z=.015,r.material=new c["o"]({color:16777215}),e.mesh1=r,e.mesh1.rotation.x=1.45,e.mesh1.rotation.y=0,e.mesh1.rotation.z=.3,e.mesh1.position.z=e.mesh1.position.z/2,e.scene1.add(e.mesh1),e.scene1.add(t),e.renderer1=new c["z"]({antialias:!0}),e.renderer1.setSize(n.clientWidth,n.clientHeight),n.appendChild(e.renderer1.domElement),e.renderer1.render(e.scene1,e.camera1)}))}),(function(){}),(function(){alert("error")}))},animate1:function(){requestAnimationFrame(this.animate1),this.mesh1.rotation.z+=.005,this.renderer1.render(this.scene1,this.camera1)}},mounted:function(){var e=this;this.init1(),this.init2(),setTimeout((function(){e.animate1(),e.animate2()}),1e3)}},d=f,p=(t("ad48"),t("2877")),h=Object(p["a"])(d,a,l,!1,null,"56928f5b",null),m=h.exports,v={name:"app",components:{HelloWorld:m}},b=v,y=(t("034f"),Object(p["a"])(b,o,i,!1,null,null,null)),_=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(_)}}).$mount("#app")},"64a9":function(e,n,t){},ad48:function(e,n,t){"use strict";var r=t("526f"),o=t.n(r);o.a}});
//# sourceMappingURL=app.6e1bee9a.js.map