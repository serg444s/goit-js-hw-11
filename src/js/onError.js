import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function onError(error) {
  iziToast.error({
    message: error,
    position: 'topRight',
  });
}
