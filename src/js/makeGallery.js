import { refs } from './refs';
import { makeMarcup } from './makeMarcup';

export function makeGalleryItem(response) {
  const result = response.hits.map(makeMarcup).join('');

  refs.galleryList.innerHTML = result;
}
