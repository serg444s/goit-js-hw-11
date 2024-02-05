import { refs } from './refs';
import { makeGalleryItem } from './makeGallery';
import { onError } from './onError';
import { fetchImg } from './fetch';

export function onFormSubmit(event) {
  event.preventDefault();
  const userSearch = event.currentTarget.elements.input.value.trim();
  console.log(userSearch);

  fetchImg(userSearch)
    .then(makeGalleryItem)
    .catch(onError)
    .finally(refs.form.requestFullscreen());
}
