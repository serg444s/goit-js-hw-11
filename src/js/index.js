import { refs } from './refs';
import { fetchImg } from './fetch';
import { makeGalleryItem } from './makeGallery';
import { onError } from './onError';
import { onFormSubmit } from './onFormSubmit';
import { gallery } from './modal';

refs.form.addEventListener('submit', onFormSubmit);
