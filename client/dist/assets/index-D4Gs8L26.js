(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const c=document.querySelector("#quote-btn"),s=document.querySelector("#catagory-input");async function l(){const o=document.querySelector(".quote"),n=s==null?void 0:s.value,r=await(await fetch(`/api/quotes?cat=${n}`)).json();r.quote&&o?(o.style.color="initial",o.innerText=`"${r.quote}"`):r.message&&o&&(o.style.color="red",o.innerText=r.message)}c==null||c.addEventListener("click",l);s==null||s.addEventListener("keydown",o=>{o.key==="Enter"&&l()});
