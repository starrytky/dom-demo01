parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var d=dom.find(".item1")[0],e=dom.create("<div>create new div<div>");dom.after(d,e);var o=dom.find(".item2")[0],i=dom.create("<div>node1</div>"),n=dom.create("<div>node2</div>");o.appendChild(i),dom.after(i,n);var t=dom.find(".item .content")[2],m=dom.create("<div>node1</div>"),a=dom.create("<div>node2</div>");t.appendChild(m),dom.before(m,a);var r=dom.find(".item .content")[3],v=dom.create("<div>node1</div>"),c=dom.create("<div>node2</div>");r.appendChild(v),v.append(c);var p=dom.find(".item .content")[4],f=dom.create("<div>node1</div>"),l=dom.create("<div>node2</div>");p.appendChild(f),dom.wrap(f,l);var h=dom.find(".item .content")[5],C=dom.create("<div>node1</div>");h.appendChild(C),C.parentNode.removeChild(C);var s=dom.find(".item .content")[6],u=dom.create("<div>node2</div>");s.appendChild(u),s.appendChild(C),dom.empty(s);var w=dom.find("#test>.red")[0];dom.style(w,"color","red");var y=dom.find(".red");dom.each(y,function(d){return console.log(d)});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.72065642.js.map