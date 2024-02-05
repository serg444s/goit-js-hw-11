import { refs } from './refs';
import { makeGalleryItem } from './makeGallery';
import { onError } from './onError';
import { fetchImg } from './fetch';

export function onFormSubmit(event) {
  event.preventDefault();

  fetchImg()
    .then(makeGalleryItem)
    .catch(onError)
    .finally(refs.form.requestFullscreen());
}
