!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/excalidraw/",r(r.s=0)}([function(e,t){importScripts("/workbox/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"/workbox/"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{'revision':'bf9770af265568a64b8ede3a49d538f8','url':'/excalidraw/index.html'},{'revision':null,'url':'/excalidraw/static/css/main.91bb8feb.chunk.css'},{'revision':null,'url':'/excalidraw/static/js/0.49653fad.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/1.71d17536.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/47.65a6b4da.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/48.9f070412.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/49.db14cbd4.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/50.af9467ce.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/51.643757c6.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/52.c3c1706b.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/53.a081839a.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/54.a34bea3b.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/55.7f298d8b.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/56.01a67e8c.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/57.6f04fbfe.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/58.8c186608.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/59.d93439da.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/60.eee384f8.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/bug-issue-template.fa74d76c.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/firebase.e84942c0.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-ar-SA-json.a792471d.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-bg-BG-json.ccacf7cb.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-ca-ES-json.e551b809.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-cs-CZ-json.dbc9e89d.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-da-DK-json.98d08078.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-de-DE-json.36b65cc7.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-el-GR-json.0eb200d0.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-es-ES-json.8871c033.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-fa-IR-json.fa504123.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-fi-FI-json.c87cede3.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-fr-FR-json.a811d5c0.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-he-IL-json.dd4641c8.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-hi-IN-json.1aaeb405.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-hu-HU-json.0b5565f9.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-id-ID-json.36cf546f.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-it-IT-json.4565ddb9.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-ja-JP-json.d3a956fc.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-kab-KAB-json.f966eabe.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-kk-KZ-json.659d493e.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-ko-KR-json.2ca92932.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-lv-LV-json.09bd1eaa.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-my-MM-json.3e055bb5.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-nb-NO-json.286ab170.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-nl-NL-json.d18c8649.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-nn-NO-json.8e6e5890.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-oc-FR-json.7c0608f8.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-pa-IN-json.771a93a8.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-pl-PL-json.948f3730.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-pt-BR-json.8a16d6c0.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-pt-PT-json.e1e79fa2.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-ro-RO-json.9cbd126b.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-ru-RU-json.8cab2d3b.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-sk-SK-json.1ba4879a.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-sv-SE-json.1a2630bc.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-tr-TR-json.6dc897ee.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-uk-UA-json.5c85019c.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-zh-CN-json.40d88667.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/i18n-zh-TW-json.cf9a0d1b.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/image.e2c5666c.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/main.e13266ad.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/pwacompat.c95f20ce.chunk.js'},{'revision':null,'url':'/excalidraw/static/js/runtime-main.2fec7391.js'},{'revision':null,'url':'/excalidraw/static/js/socketIoClient.f08d1b35.chunk.js'}]),workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("./index.html"),{blacklist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}),workbox.routing.registerRoute(new RegExp("/(fonts.css|.+.(ttf|woff2|otf))"),new workbox.strategies.StaleWhileRevalidate({cacheName:"fonts",plugins:[new workbox.expiration.Plugin({maxEntries:10})]})),self.addEventListener("fetch",(e=>{if("POST"===e.request.method&&e.request.url.endsWith("/web-share-target"))return e.respondWith((async()=>{const t=(await e.request.formData()).get("file"),r=await caches.open("web-share-target");return await r.put("shared-file",new Response(t)),Response.redirect("/?web-share-target",303)})())}))}]);
//# sourceMappingURL=service-worker.js.map