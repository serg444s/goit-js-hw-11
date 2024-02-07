import{i as l,S as u}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const a={form:document.querySelector(".user-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery")},f="Sorry, there are no images matching your search query. Please try again!";function c(){l.error({message:f,position:"topRight"})}function m(t){const o="42220995-e7901b62efa710cae16c4a0a7",s="https://pixabay.com/api/",n=`q=${t}&image_type=photo&orientation=horizontal&safesearch=true`,e=`${s}?key=${o}&${n}`;return fetch(e).then(r=>{if(console.log(r),!r.ok)throw new Error(r.status);return r.json()})}function p(t){return`<li class="gallery-item">
  
  <div class="gallery">

  <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
  </a>

</div>

  <div class="list-text">

    <p>Likes <span>${t.likes}</span></p>
    <p>Views <span>${t.views}</span></p>
    <p>Comments <span>${t.comments}</span></p>
    <p>Downloads <span>${t.downloads}</span></p>

</div>

</li>`}function d(t){const o=t.hits.map(p).join("");t.hits.length?a.galleryList.innerHTML=o:c()}function y(t){t.preventDefault();const o=t.currentTarget.elements.input.value.trim();m(o).then(d).catch(c).finally(a.form.reset())}new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});a.form.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
