!function(e){function n(o){if(t[o])return t[o].a;var i=t[o]={f:o,o:!1,a:{}};return e[o].call(i.a,i,i.a,n),i.o=!0,i.a}var t={};n.B=e,n.w=t,n.f=function(e){return e},n.l=function(e,t){n.m(e)||Object.defineProperty(e,"a",{configurable:!1,enumerable:!0,get:t})},n.A=function(e){var t=e&&e.u?function(){return e.default}:function(){return e};return n.l(t,t),t},n.m=function(e){return Object.prototype.hasOwnProperty.call(e,"a")},n.p="",n(n.C=9)}([,,function(e,n,t){e.a=t.p+"embedEn.html"},function(e,n,t){e.a=t.p+"embedSv.html"},function(e,n,t){e.a=t.p+"iframeEn.html"},function(e,n,t){e.a=t.p+"iframeSv.html"},function(e,n,t){e.a=t.p+"index.html"},function(e,n){function t(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname)}var o;n.install=function(e){e||(e={}),t()?navigator.serviceWorker.register("sw.js"):window.applicationCache&&(e=function(){var e=document.createElement("iframe");e.src="appcache/manifest.html",e.style.display="none",o=e,document.body.appendChild(e)},"complete"===document.readyState?setTimeout(e):window.addEventListener("load",e))},n.v=function(){},n.update=function(){if(t()&&navigator.serviceWorker.getRegistration().then(function(e){if(e)return e.update()}),o)try{o.contentWindow.applicationCache.update()}catch(e){}}},function(e,n,t){n=t(10),"string"==typeof n&&(n=[[e.f,n,""]]),t(13)(n,{}),n.s&&(e.a=n.s)},function(e,n,t){t(6),t(2),t(3),t(4),t(5),t(8),t(7).install({H:function(){console.log("SW Event:","onUpdating")},F:function(){console.log("SW Event:","onUpdateReady")},G:function(){console.log("SW Event:","onUpdated"),window.location.reload()},D:function(){console.log("SW Event:","onUpdateFailed")}})},function(e,n,t){n=e.a=t(11)(),n.push([e.f,".content{z-index:5;position:fixed;bottom:0}.modal{z-index:20}.primary{margin:1.2vh 0;height:12.5vh;width:100%;padding:4.4vh 0}.mdi-48px.mdi-set,.mdi-48px.mdi:before{font-size:8vh}.toolbar{z-index:2000}footer.page-footer{line-height:18px;padding-left:40vw}.strong{font-weight:800}nav .brand-logo{font-size:1.6rem;text-transform:uppercase;font-weight:600}.logoImg{-webkit-transition:transform .6s cubic-bezier(.165,.84,.44,1);transition:transform .6s cubic-bezier(.165,.84,.44,1);margin-top:.9rem;margin-right:9px;width:32px}img.logoImg:hover{transform:rotate(1turn)}.turn{transform:rotate(.5turn)}",""])},function(e){e.a=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.f=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<n.length;i++)r=n[i],"number"==typeof r[0]&&o[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]="("+r[2]+") and ("+t+")"),e.push(r))},e}},,function(e){function n(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}function t(e,n){for(var t=0;t<e.length;t++){var o=e[t],i=s[o.id];if(i){i.i++;for(var r=0;r<i.b.length;r++)i.b[r](o.b[r]);for(;r<o.b.length;r++)i.b.push(f(o.b[r],n))}else{for(i=[],r=0;r<o.b.length;r++)i.push(f(o.b[r],n));s[o.id]={id:o.id,i:1,b:i}}}}function o(e){for(var n=[],t={},o=0;o<e.length;o++){var i=e[o],r=i[0],i={c:i[1],media:i[2],g:i[3]};t[r]?t[r].b.push(i):n.push(t[r]={id:r,b:[i]})}return n}function i(e,n){var t=p(),o=g[g.length-1];if("top"===e.h)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),g.push(n);else{if("bottom"!==e.h)throw Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function r(e){e.parentNode.removeChild(e),0<=(e=g.indexOf(e))&&g.splice(e,1)}function a(e){var n=document.createElement("style");return n.type="text/css",i(e,n),n}function c(e){var n=document.createElement("link");return n.rel="stylesheet",i(e,n),n}function f(e,n){var t,o,i;if(n.j){var f=v++;t=m||(m=a(n)),o=u.bind(null,t,f,!1),i=u.bind(null,t,f,!0)}else e.g&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=c(n),o=d.bind(null,t),i=function(){r(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(n),o=l.bind(null,t),i=function(){r(t)});return o(e),function(n){n?n.c===e.c&&n.media===e.media&&n.g===e.g||o(e=n):i()}}function u(e,n,t,o){t=t?"":o.c,e.styleSheet?e.styleSheet.cssText=b(n,t):(t=document.createTextNode(t),o=e.childNodes,o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(t,o[n]):e.appendChild(t))}function l(e,n){var t=n.c;if((n=n.media)&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function d(e,n){var t=n.c;(n=n.g)&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),n=e.href,e.href=URL.createObjectURL(new Blob([t],{type:"text/css"})),n&&URL.revokeObjectURL(n)}var s={},h=n(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),p=n(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,g=[];e.a=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw Error("The style-loader cannot be used in a non-browser environment");n=n||{},void 0===n.j&&(n.j=h()),void 0===n.h&&(n.h="bottom");var i=o(e);return t(i,n),function(e){for(var r=[],a=0;a<i.length;a++){var c=s[i[a].id];c.i--,r.push(c)}for(e&&(a=o(e),t(a,n)),a=0;a<r.length;a++)if(c=r[a],0===c.i){for(e=0;e<c.b.length;e++)c.b[e]();delete s[c.id]}}};var b=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()}]);