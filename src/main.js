import { refs } from './js/refs';
import { fetchImg } from './js/fetch';
import { makeGalleryItem } from './js/makeGallery';
import { onError } from './js/onError';
import { onFormSubmit } from './js/onFormSubmit';

refs.form.addEventListener('submit', onFormSubmit);
