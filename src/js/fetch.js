import { refs } from './refs';
import { onError } from './onError';

export function fetchImg(input) {
  const URL = `https://pixabay.com/api/?key=42220995-e7901b62efa710cae16c4a0a7&q=${input}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
