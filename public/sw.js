if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>c(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/-DAbM0T0v2jY95c723eo8/_buildManifest.js",revision:"89fc4ce3959415a64e769f5353741983"},{url:"/_next/static/-DAbM0T0v2jY95c723eo8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/789-439d5d4dfa8b9897.js",revision:"439d5d4dfa8b9897"},{url:"/_next/static/chunks/framework-114634acb84f8baa.js",revision:"114634acb84f8baa"},{url:"/_next/static/chunks/main-8e65c6fcee628a80.js",revision:"8e65c6fcee628a80"},{url:"/_next/static/chunks/pages/_app-9f5c20c358333f33.js",revision:"9f5c20c358333f33"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/account-1158153514700312.js",revision:"1158153514700312"},{url:"/_next/static/chunks/pages/checkout-88a573e3de9ebd91.js",revision:"88a573e3de9ebd91"},{url:"/_next/static/chunks/pages/index-e4fad6730c204173.js",revision:"e4fad6730c204173"},{url:"/_next/static/chunks/pages/login-5c798eba7dfd726a.js",revision:"5c798eba7dfd726a"},{url:"/_next/static/chunks/pages/new-password-fd64fb5275ec748b.js",revision:"fd64fb5275ec748b"},{url:"/_next/static/chunks/pages/orders-4938124598123190.js",revision:"4938124598123190"},{url:"/_next/static/chunks/pages/password-recovery-2c3af2f2e326fae5.js",revision:"2c3af2f2e326fae5"},{url:"/_next/static/chunks/pages/send-email-217cd100bd3fe655.js",revision:"217cd100bd3fe655"},{url:"/_next/static/chunks/pages/signup-28b1c65032c0302e.js",revision:"28b1c65032c0302e"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/1b35905a38fdbf23.css",revision:"1b35905a38fdbf23"},{url:"/_next/static/css/258d696b927529b6.css",revision:"258d696b927529b6"},{url:"/_next/static/css/2fc34e0c2de0386e.css",revision:"2fc34e0c2de0386e"},{url:"/_next/static/css/35e2a441e1c1a06b.css",revision:"35e2a441e1c1a06b"},{url:"/_next/static/css/61eace8b93ac8452.css",revision:"61eace8b93ac8452"},{url:"/_next/static/css/71730f46f216e2c7.css",revision:"71730f46f216e2c7"},{url:"/_next/static/css/795ff8480f8d774a.css",revision:"795ff8480f8d774a"},{url:"/_next/static/css/9c3d98860ed40ec1.css",revision:"9c3d98860ed40ec1"},{url:"/_next/static/css/9cb7cc48a7cdbe8c.css",revision:"9cb7cc48a7cdbe8c"},{url:"/_next/static/css/ffa74775e0808dce.css",revision:"ffa74775e0808dce"},{url:"/icon-192x192.png",revision:"6d3d24ce41fc302726e17f6cbe8095bb"},{url:"/icon-256x256.png",revision:"c82c6287cb525b5f9a2f6da714fffb30"},{url:"/icon-384x384.png",revision:"ff298341c96d4d507fa119cceebd4279"},{url:"/icon-512x512.png",revision:"2c52d0b28c8a98d83443cbf2a9ad31ae"},{url:"/manifest.json",revision:"fe2c44d928b0e9ebc9b4bb2b2a276b5e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
