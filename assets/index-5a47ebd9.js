(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn.addEventListener("click",t),n.closeModalBtn.addEventListener("click",t);function t(){n.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const n={openMobylBtn:document.querySelector("[data-mobyl-open]"),closeMobylBtn:document.querySelector("[data-mobyl-close]"),mobyl:document.querySelector("[data-mobyl]")};n.openMobylBtn.addEventListener("click",t),n.closeMobylBtn.addEventListener("click",t);function t(){n.mobyl.classList.toggle("is-hidden")}})();let d=document.querySelectorAll(".card-input");d.length>0&&d.forEach(n=>{n.addEventListener("input",function(t){var l=t.target.value;l=l.replace(/\D/g,""),l=l.substring(0,16),l=l.replace(/(\d{4})/g,"$1 ").trim(),t.target.value=l})});
