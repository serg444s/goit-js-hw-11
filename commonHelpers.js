import{i as c,S as u}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const n={form:document.querySelector(".user-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader")};function m(e){return`<li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
          <img
            src="${e.webformatURL}"
            class="gallery-image"
            alt="${e.tags}"
          />
        </a>
        <div class="modat-text">
        
            <div class="modal-element"><p>Likes</p><span>${e.likes}</span></div>
            <div class="modal-element"><p>Views</p><span>${e.views}</span></div>
            <div class="modal-element"><p>Comments</p><span>${e.comments}</span></div>
            <div class="modal-element"><p>Downloads</p><span>${e.downloads}</span></div>
        </div>
      </li>`}const d="Sorry, there are no images matching your search query. Please try again!";function l(){c.error({message:d,position:"topRight"})}function f(){const e=document.createElement("span");e.classList.add("loader"),n.galleryList.before(e)}function p(){const e=document.querySelector(".loader");e&&e.remove()}function y(e){const o=e.hits.map(m).join("");e.hits.length?(n.galleryList.innerHTML=o,new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh(),p()):l()}function h(e){const o="42220995-e7901b62efa710cae16c4a0a7",s="https://pixabay.com/api/",a=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,t=`${s}?key=${o}&${a}`;return fetch(t).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function g(e){f(),e.preventDefault(),n.galleryList.innerHTML="";const o=e.currentTarget.elements.input.value.trim();h(o).then(y).catch(l).finally(n.form.reset())}n.form.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
