// before using spinner: npm i notiflix
import { Loading } from 'notiflix/build/notiflix-loading-aio';

// add to your script:
// import { spinner, removeSpinner } from './spinner';
// usage: spinner() and removeSpinner()

export function spinner() {
  Loading.circle('Loading...');
}

export function removeSpinner() {
  Loading.remove(400);
}
