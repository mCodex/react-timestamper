if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,a,r)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return t;case"module":return c;default:return e(s)}}))).then((e=>{const s=r(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/react-timestamper/_next/static/chunks/1bfc9850-7fd278152b5797764e49.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/_next/static/chunks/25-0c1e12b6ebf991c7276a.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/_next/static/chunks/282-13594e64e48e3b841ffb.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/_next/static/chunks/288-77889f10337701536126.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/_next/static/chunks/352-d163c3bc13f31cc86089.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/_next/static/chunks/915-3bc61c53b2b0b79ae80f.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/_next/static/chunks/framework-753b177feb90cabc7527.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/_next/static/chunks/main-0e72df510668a92c270f.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/_next/static/chunks/pages/_app-07cbcc4cf4c17cd31cca.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/_next/static/chunks/pages/_error-7d9a1e452356f5124997.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/_next/static/chunks/pages/index-c6e8bf1a1dbc63df3d7a.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/_next/static/chunks/polyfills-8683bd742a84c1edd48c.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/_next/static/chunks/webpack-d6108efd7cc85497fa73.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/_next/static/f95tRg4s61cvCpliMI1-J/_buildManifest.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/_next/static/f95tRg4s61cvCpliMI1-J/_ssgManifest.js",revision:"f95tRg4s61cvCpliMI1-J"},{url:"/react-timestamper/assets/apple-icon-120.png",revision:"f9e6a92fd8c6528664b4541187571c1d"},{url:"/react-timestamper/assets/apple-icon-152.png",revision:"ebfceb89c2814c40beca3f98e142b6bc"},{url:"/react-timestamper/assets/apple-icon-167.png",revision:"4fd8397ef8348fa4b92bc51941fafb8e"},{url:"/react-timestamper/assets/apple-icon-180.png",revision:"bbddea0c3079fed3bf352dedaec32390"},{url:"/react-timestamper/assets/apple-splash-1125-2436.png",revision:"ff0511c417a8378f875d82ce2ca90028"},{url:"/react-timestamper/assets/apple-splash-1242-2208.png",revision:"34793be8b029a89a151ee2ed7a85c511"},{url:"/react-timestamper/assets/apple-splash-1242-2688.png",revision:"e78c2fef75dafd95a1d67ab12f8f52d8"},{url:"/react-timestamper/assets/apple-splash-1536-2048.png",revision:"1a4cc42fad2dc137ed6d97bd47fae887"},{url:"/react-timestamper/assets/apple-splash-1668-2224.png",revision:"a5ba71ebcfcf9f05494d2e6795843c13"},{url:"/react-timestamper/assets/apple-splash-1668-2388.png",revision:"6cb3031161e50d5402928be467945b4f"},{url:"/react-timestamper/assets/apple-splash-2048-2732.png",revision:"3ce1a3f565b6d0dc9120a67d7ebd0c0d"},{url:"/react-timestamper/assets/apple-splash-640-1136.png",revision:"fd67c07db8039b2cc0d3ce11d3b4861a"},{url:"/react-timestamper/assets/apple-splash-750-1334.png",revision:"010eec568b9565058c133e22df5480ff"},{url:"/react-timestamper/assets/apple-splash-828-1792.png",revision:"5c217c039b6ee4c1ed8283cf75b127bc"},{url:"/react-timestamper/assets/manifest-icon-192.png",revision:"5dd9c0145a5e6ea599b58b0ecaa1c969"},{url:"/react-timestamper/assets/manifest-icon-512.png",revision:"41a36ab06ce521edaec570d85b5146d1"},{url:"/react-timestamper/favicon.ico",revision:"aaa31b9b5d3ab197e27efde92f3fa9c8"},{url:"/react-timestamper/manifest.json",revision:"63434ac69866c3a72c612ff6b91ef4c2"},{url:"/react-timestamper/robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/react-timestamper",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
