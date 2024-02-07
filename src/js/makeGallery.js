import { refs } from './refs';
import { makeMarcup } from './makeMarcup';
import { onError } from './onError';

export function makeGalleryItem(response) {
  const result = response.hits.map(makeMarcup).join('');

  if (response.hits.length) {
    refs.galleryList.innerHTML = result;
  } else {
    onError();
  }
}
