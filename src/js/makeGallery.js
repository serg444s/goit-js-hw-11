import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refs';

export function makeGalleryItem(arr) {
  const result = arr
    .map(
      image => `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
  </a>
  <div class="list-text">
  <p>Likes <span>${image.likes}</span></p>
<p>Views <span>${image.views}</span></p>
<p>Comments <span>${image.comments}</span></p>
<p>Downloads <span>${image.downloads}</span></p>
</div>
</li>`
    )
    .join('');

  refs.galleryList.innerHTML = result;
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
