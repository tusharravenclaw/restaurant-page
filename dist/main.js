(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(820),t.b),d=i()(r()),p=s()(l);d.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100%;\n  background-image: url("+p+');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.header-box {\n  width: 100vw;\n  background-color: rgb(0, 0, 0, 0.4);\n}\n\n.logo {\n  text-align: center;\n  padding: 20px;\n  font-size: 48px;\n  font-weight: bold;\n  font-family: cursive;\n  color: white;\n}\n.nav-box {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  gap: 30px;\n}\n\n.nav-button {\n  background: none;\n  color: white;\n  border: none;\n  font-size: 36px;\n  font-family: fantasy;\n}\n\n.main-box {\n  padding: 30px 210px;\n}\n\n.home-box,\n.menu-box,\n.contact-box {\n  background-color: rgb(0, 0, 0, 0.5);\n  padding: 30px;\n  gap: 20px;\n}\n\n.home-box,\n.contact-box {\n  display: flex;\n  flex-direction: column;\n}\n\n.home-box {\n  align-items: center;\n}\n\n.menu-box {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\n.home-box div {\n  color: white;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n}\n\n.hero-text {\n  font-size: 36px;\n}\n\n.hero-subtext {\n  font-size: 24px;\n}\n\n.chef-img {\n  height: 300px;\n  width: 300px;\n  object-fit: cover;\n  object-position: 20% 20%;\n  border-radius: 50%;\n}\n\n.cta-text {\n  font-size: 28px;\n}\n\n.item-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  color: white;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n}\n\n.item-name {\n  font-size: 32px;\n}\n\n.item-price {\n  font-size: 24px;\n}\n\n.item-image {\n  height: 200px;\n  width: 200px;\n  border: 2px solid white;\n  border-radius: 30px;\n}\n\n.contact-box {\n  color: white;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n}\n\n.contact,\n.address {\n  font-size: 24px;\n}\n\n.map-img {\n  height: 500px;\n  object-fit: cover;\n  object-position: 50% 100%;\n}\n',""]);const u=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},820:(n,e,t)=>{n.exports=t.p+"0cffdad92bbe9590eb0f.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,t.p,t.p,t.p,t.p,t.p,t.p,t.p;const h=t.p+"c9375198f3228f091050.jpg";let b;!function(){const n=document.querySelector("#content"),e=document.createElement("div");e.className="header-box",n.appendChild(e);const t=document.createElement("div");t.className="logo",t.textContent="Molten Cave",e.appendChild(t);const o=document.createElement("div");o.className="nav-box",e.appendChild(o);const r=document.createElement("button");r.className="nav-button",r.textContent="Home",o.appendChild(r);const a=document.createElement("button");a.className="nav-button",a.textContent="Menu",o.appendChild(a);const i=document.createElement("button");i.className="nav-button",i.textContent="Contact",o.appendChild(i)}(),b=document.createElement("div"),b.className="main-box",content.appendChild(b),function(){const n=document.createElement("div");n.className="contact-box",b.appendChild(n);const e=document.createElement("div");e.textContent="📞 123-456-789",e.className="contact",n.appendChild(e);const t=document.createElement("div");t.textContent="🏤 Grand Trunk Rd, Dharamveer Colony, Gharaunda, Haryana - 132114",t.className="address",n.appendChild(t);const o=document.createElement("img");o.src=h,o.className="map-img",n.appendChild(o)}()})()})();