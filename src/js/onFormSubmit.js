import { refs } from './refs';
import { makeGalleryItem } from './makeGallery';
import { onError } from './onError';
import { fetchImg } from './fetch';

export function onFormSubmit(event) {
  refs.loader.removeAttribute('hidden');
  event.preventDefault();
  const userSearch = event.currentTarget.elements.input.value.trim();

  fetchImg(userSearch)
    .then(makeGalleryItem)
    .catch(onError)
    .finally(refs.loader.setAttribute('hidden', true), refs.form.reset());
}
