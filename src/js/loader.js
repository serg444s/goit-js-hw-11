import { refs } from './refs';

export function loaderOn() {
  const loader = document.createElement('span');
  loader.classList.add('loader');
  refs.galleryList.before(loader);
}

export function loaderOff() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}
