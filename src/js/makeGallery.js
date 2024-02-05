import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function makeGalleryItem(arr) {
  const result = arr
    .map(
      image => `<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img class="gallery-image" src="${image.preview}" alt="${image.description}" />
  </a>
</li>`
    )
    .join('');

  galleryList.innerHTML = result;
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
