import { refs } from './refs';

export function fetchImg() {
  const userSearch = refs.formInput.value;
  console.log(userSearch);
  const BASIC_API = 'https://pixabay.com/api';
  const URL = `${BASIC_API}?key=42220995-e7901b62efa710cae16c4a0a7&q=${userSearch}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
