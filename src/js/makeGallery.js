import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refs';
import { makeMarcup } from './makeMarcup';

export function makeGalleryItem(arr) {
  const result = arr.map(makeMarcup).join('');

  refs.galleryList.innerHTML = result;
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
