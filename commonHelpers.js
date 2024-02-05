import{S as c,i as l}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const a={form:document.querySelector(".user-form"),formInput:document.querySelector(".form-inpu"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery")};function u(n){const t=`https://pixabay.com/api?key=42220995-e7901b62efa710cae16c4a0a7&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function f(n){const o=n.map(t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
  </a>
  <div class="list-text">
  <p>Likes <span>${t.likes}</span></p>
<p>Views <span>${t.views}</span></p>
<p>Comments <span>${t.comments}</span></p>
<p>Downloads <span>${t.downloads}</span></p>
</div>
</li>`).join("");a.galleryList.innerHTML=o}new c(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const p="Sorry, there are no images matching your search query. Please try again!";function m(){l.error({message:p,position:"topRight"})}function d(n){n.preventDefault();const o=n.currentTarget.elements.input.value.trim();console.log(o),u(o).then(f).catch(m).finally(a.form.requestFullscreen())}a.form.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
