import { genreList, getGenres } from './fetch-genres';

import axios from 'axios';

const inputEl = document.querySelector('.header-search-bar__input');
const searchButtonEl = document.querySelector('.header-search-bar__button');
const warningEl = document.querySelector('.header-search-bar__warning');
const galleryEl = document.querySelector('.cards-wrapper');
const loadMoreInputButtonEl = document.querySelector('.load-more');
const loadMoreTrendingButtonEl = document.querySelector('.load-more-trending');

const API_key = 'dbea77d3eb5b3622b027f73f6a5032fe';
let page = 1;

warningEl.style.visibility = 'hidden';

const getMoviesSearch = async () => {
  try {
    const searchMovieAPI_URL = 'https://api.themoviedb.org/3/search/movie';
    const result = await axios.get(
      `${searchMovieAPI_URL}?api_key=${API_key}&query=${inputEl.value}&page=${page}&language=en-US`,
    );

    // console.log('response getMovies', result);
    const movies = result.data.results;
    // console.log('movies', movies);
    await getGenres();

    return movies;
  } catch (error) {
    console.error(error);
  }
};

const createMovieCardSearch = movies => {
  console.log('movies', movies);
  return movies
    .map(movie => {
      const genreNames = movie.genre_ids
        .slice(0, 3)
        .map(genreId => genreList[genreId])
        .join(', ');
      return `<div id="card" class="card"><img class="card__poster" src='https://image.tmdb.org/t/p/w500
${movie.poster_path}' alt='Poster of ${movie.title} movie' data-id="${movie.id}"></a>
    <div class="card__info">
      <div class="card__quick-info">
        <div class="card__movie-title">${movie.title}</div>
        <div class="card__movie-genre">${genreNames}</div>
        <div class="card__movie-release">${movie.release_date.slice(0, 4)}</div>
      </div>
      <div class="card__movie-rating">${Math.round(movie.vote_average * 10) / 10}</div>
    </div>
  </div>`;
    })
    .join('');
};

const loadMorePhotosInput = () => {
  getMoviesSearch().then(movies => {
    page += 1;
    galleryEl.insertAdjacentHTML('beforeend', createMovieCardSearch(movies));
  });
};

searchButtonEl.addEventListener('click', event => {
  event.preventDefault();
  page = 1;
  const loadMoreTrendingButtonEl = (document.querySelector('.load-more-trending').hidden = true);
  const loadMoreInputButtonEl = (document.querySelector('.load-more').hidden = false);
  getMoviesSearch().then(movies => {
    // const movieData = movies;
    // console.log('movieData', movieData);

    if (movies.length === 0) {
      galleryEl.innerHTML = '';
      inputEl.value = '';
      warningEl.style.visibility = 'visible';
    } else {
      warningEl.style.visibility = 'hidden';
      galleryEl.innerHTML = createMovieCardSearch(movies);
    }
  });
});

inputEl.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchButtonEl.click();
  }
});

loadMoreInputButtonEl.addEventListener('click', event => {
  page += 1;
  loadMorePhotosInput();
});
