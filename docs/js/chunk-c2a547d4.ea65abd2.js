(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2a547d4"],{"5a19":function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("div",{attrs:{id:"chart"}},[r("a",{attrs:{href:""},on:{click:t.download}},[t._v("下载为png图片")])])])},e=[];r("cadf"),r("551c"),r("097d");function o(t,n){var r=new XMLSerializer,a='<?xml version="1.0" standalone="no"?>\r\n'.concat(r.serializeToString(t)),e=new Image;e.src="data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(a));var o=document.createElement("canvas");o.width=t.clientWidth,o.height=t.clientHeight;var c=o.getContext("2d");e.onload=function(){c.drawImage(e,0,0);var t=document.createElement("a");t.download="".concat(n,".png"),t.href=o.toDataURL("image/png"),t.click()}}function c(){for(var t=[],n=0;n<64;n+=1){var r=Math.floor(n/8),a=n%8;t.push({x:r,y:a})}return t}function i(t){var n=1e3,r=1e3,a=["a","b","c","d","e","f","g","h"],e=[8,7,6,5,4,3,2,1],o=c(),i=100,f=["#f0f0f0","#333"],u=t.select("#chart").append("svg").attr("width",n).attr("height",r).attr("id","mysvg").attr("style","background:".concat(f[1])),d=u.append("g").attr("transform","translate(100, 100)"),l=u.append("g");l.append("rect").attr("stroke-width","2").attr("x",98).attr("y",98).attr("width",804).attr("height",804).attr("fill","none").attr("stroke",f[0]).attr("stroke-width",3),a.forEach(function(t,n){l.append("text").attr("x",function(){return 100*n+150}).attr("y",90).attr("fill",f[0]).attr("transform","rotate(180, ".concat(100*n+150," 85)")).text(function(){return t})}),a.forEach(function(t,n){l.append("text").attr("x",function(){return 100*n+150}).attr("y",920).attr("fill",f[0]).text(function(){return t})}),e.forEach(function(t,n){l.append("text").attr("x",80).attr("y",function(){return 100*n+150}).attr("fill",f[0]).text(function(){return t})}),e.forEach(function(t,n){l.append("text").attr("x",910).attr("y",function(){return 100*n+150}).attr("fill",f[0]).attr("transform","rotate(180, 915 ".concat(100*n+150,")")).text(function(){return t})}),d.selectAll("rect").data(o).enter().append("rect").attr("x",function(t){return t.x*i}).attr("y",function(t){return t.y*i}).attr("width",i).attr("height",i).attr("fill",function(t,n){return Math.floor(n/8)%2===0?n%2===0?f[0]:f[1]:n%2===0?f[1]:f[0]})}var f={name:"Chess",methods:{download:function(){o(document.getElementById("mysvg"),"chess")}},mounted:function(){i(this.$d3)}},u=f,d=(r("e3fc"),r("2877")),l=Object(d["a"])(u,a,e,!1,null,null,null);l.options.__file="Chess.vue";n["default"]=l.exports},d2fd:function(t,n,r){},e3fc:function(t,n,r){"use strict";var a=r("d2fd"),e=r.n(a);e.a}}]);
//# sourceMappingURL=chunk-c2a547d4.ea65abd2.js.map