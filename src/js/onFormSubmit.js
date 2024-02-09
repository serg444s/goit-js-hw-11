import { refs } from './refs';
import { makeGalleryItem } from './makeGallery';
import { onError } from './onError';
import { fetchImg } from './fetch';
import { loaderOn } from './loader';

export function onFormSubmit(event) {
  loaderOn();
  event.preventDefault();
  refs.galleryList.innerHTML = '';
  const userSearch = event.currentTarget.elements.input.value.trim();

  fetchImg(userSearch)
    .then(makeGalleryItem)
    .catch(onError)
    .finally(refs.form.reset());
}
