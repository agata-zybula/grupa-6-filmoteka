import { createMovieCard } from './create-movie-card';

const inputEl = document.querySelector('.header-search-bar__input');
const searchButtonEl = document.querySelector('.header-search-bar__button');
const galleryEl = document.querySelector('.cards-wrapper');
const warningEl = document.querySelector('.header-search-bar__warning');

const searchMovieAPI_URL = 'https://api.themoviedb.org/3/search/movie';
const searchGenresAPI_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const API_key = 'dbea77d3eb5b3622b027f73f6a5032fe';

warningEl.style.visibility = 'hidden';

const fetchMovies = async () => {
  const response = await fetch(
    `${searchMovieAPI_URL}?api_key=${API_key}&query=${inputEl.value}&page=1&language=en-US`,
  );
  return response.json();
};

searchButtonEl.addEventListener('click', event => {
  event.preventDefault();
  page = 1;
  fetchMovies()
    .then(movies => {
      const movieData = movies.results;
      console.log(movieData);

      if (movies.results.length === 0) {
        galleryEl.innerHTML = '';
        inputEl.value = '';
        warningEl.style.visibility = 'visible';
      } else {
        warningEl.style.visibility = 'hidden';
        galleryEl.innerHTML = createMovieCard(movies);
        page += 1;
      }
    })

    .catch(error => console.log(error));
});
