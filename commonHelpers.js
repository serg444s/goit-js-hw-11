import{S as c,i as l}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const a={form:document.querySelector(".user-form"),formInput:document.querySelector(".form-inpu"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery")};function u(e){const s=`https://pixabay.com/api?key=42220995-e7901b62efa710cae16c4a0a7&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}function f(e){return`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
  </a>
  <div class="list-text">
  <p>Likes <span>${e.likes}</span></p>
<p>Views <span>${e.views}</span></p>
<p>Comments <span>${e.comments}</span></p>
<p>Downloads <span>${e.downloads}</span></p>
</div>
</li>`}function p(e){const o=e.map(f).join("");a.galleryList.innerHTML=o}new c(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const m="Sorry, there are no images matching your search query. Please try again!";function d(){l.error({message:m,position:"topRight"})}function y(e){e.preventDefault();const o=e.currentTarget.elements.input.value.trim();console.log(o),u(o).then(p).catch(d).finally(a.form.reset())}a.form.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map