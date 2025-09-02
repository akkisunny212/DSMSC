(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();var c={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l;function m(){if(l)return n;l=1;var d=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function i(s,e,r){var t=null;if(r!==void 0&&(t=""+r),e.key!==void 0&&(t=""+e.key),"key"in e){r={};for(var u in e)u!=="key"&&(r[u]=e[u])}else r=e;return e=r.ref,{$$typeof:d,type:s,key:t,ref:e!==void 0?e:null,props:r}}return n.Fragment=o,n.jsx=i,n.jsxs=i,n}var a;function x(){return a||(a=1,c.exports=m()),c.exports}var f=x();const R=new URLSearchParams(window.location.search),p=R.get("redirect");p&&window.history.replaceState(null,"","/DSMSC"+p);createRoot(document.getElementById("root")).render(f.jsx(StrictMode,{children:f.jsx(App,{})}));
