if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1bfc9850.f539066a305947f5fec4.js",revision:"8a8d580b0f0fb1256bd0200eaa9cb90f"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.d33382ef7f15e4e74b3c.js",revision:"6ae2dcd7ba316795ba68d6a9e27f8a2e"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.eac52b64542b2f751ace.js",revision:"e4ade5a7f91d211bd2d9a27e6ef35e71"},{url:"/_next/static/chunks/framework.cdbdac0a36200f52203c.js",revision:"56af6501d39d0d407e4004733ea3ef34"},{url:"/_next/static/chunks/main-902fde7a99539a7b923a.js",revision:"0a85db29dd9cba17b692e6aacc5ae201"},{url:"/_next/static/chunks/pages/_app-8a584505dfdbc7d3c638.js",revision:"5269ba9182dc6dff97213625cb7da9e8"},{url:"/_next/static/chunks/pages/_error-9fd2a92907d9e764c1c2.js",revision:"03374838c4bfbc119e27f9c496b08373"},{url:"/_next/static/chunks/pages/index-f815331c8beb5e43916c.js",revision:"b9b624b709a43b9c6ab7dbace90a032b"},{url:"/_next/static/chunks/polyfills-11c8eba6a84e3fddec04.js",revision:"950295a8416ad5c28e5c1e51da0ee266"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/sHfvjrbUWoJLNj1jwQg5I/_buildManifest.js",revision:"ec6a31cdb39ffdb1de3bf21b04a0ddfc"},{url:"/_next/static/sHfvjrbUWoJLNj1jwQg5I/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/assets/apple-icon-120.png",revision:"f9e6a92fd8c6528664b4541187571c1d"},{url:"/assets/apple-icon-152.png",revision:"ebfceb89c2814c40beca3f98e142b6bc"},{url:"/assets/apple-icon-167.png",revision:"4fd8397ef8348fa4b92bc51941fafb8e"},{url:"/assets/apple-icon-180.png",revision:"bbddea0c3079fed3bf352dedaec32390"},{url:"/assets/apple-splash-1125-2436.png",revision:"ff0511c417a8378f875d82ce2ca90028"},{url:"/assets/apple-splash-1242-2208.png",revision:"34793be8b029a89a151ee2ed7a85c511"},{url:"/assets/apple-splash-1242-2688.png",revision:"e78c2fef75dafd95a1d67ab12f8f52d8"},{url:"/assets/apple-splash-1536-2048.png",revision:"1a4cc42fad2dc137ed6d97bd47fae887"},{url:"/assets/apple-splash-1668-2224.png",revision:"a5ba71ebcfcf9f05494d2e6795843c13"},{url:"/assets/apple-splash-1668-2388.png",revision:"6cb3031161e50d5402928be467945b4f"},{url:"/assets/apple-splash-2048-2732.png",revision:"3ce1a3f565b6d0dc9120a67d7ebd0c0d"},{url:"/assets/apple-splash-640-1136.png",revision:"fd67c07db8039b2cc0d3ce11d3b4861a"},{url:"/assets/apple-splash-750-1334.png",revision:"010eec568b9565058c133e22df5480ff"},{url:"/assets/apple-splash-828-1792.png",revision:"5c217c039b6ee4c1ed8283cf75b127bc"},{url:"/assets/manifest-icon-192.png",revision:"5dd9c0145a5e6ea599b58b0ecaa1c969"},{url:"/assets/manifest-icon-512.png",revision:"41a36ab06ce521edaec570d85b5146d1"},{url:"/favicon.ico",revision:"aaa31b9b5d3ab197e27efde92f3fa9c8"},{url:"/manifest.json",revision:"e9a22b8944ae402b93eb92112a4370ba"},{url:"/robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
