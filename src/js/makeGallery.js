import { refs } from './refs';
import { makeMarcup } from './makeMarcup';
import { onError } from './onError';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { loaderOff } from './loader';


export function makeGalleryItem(response) {
  const result = response.hits.map(makeMarcup).join('');

  if (response.hits.length) {
    refs.galleryList.innerHTML = result;
    let lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
    lightbox.refresh();
    loaderOff();
  } else {
    onError();
  }
}
