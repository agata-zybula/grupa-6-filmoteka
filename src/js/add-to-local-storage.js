import { genreList, getGenres } from './fetch-genres';
import axios from 'axios';

const findMovieApi_URL = 'https://api.themoviedb.org/3/movie/';
const API_key = 'dbea77d3eb5b3622b027f73f6a5032fe';

async function getMovieById(filmId) {
  try {
    const response = await axios.get(`${findMovieApi_URL}${filmId}?api_key=${API_key}`);
    const movies = response.data;

    console.log(`movies`, movies);
    await getGenres();
    return movies;
  } catch (error) {
    console.error(error);
  }
}

export function localStorageHandler() {
  const addToWatchedButton = document.getElementById('addToWatched');
  const addToQueueButton = document.getElementById('addToQueue');

  let STORAGE_WATCHED = 'watched-movies';
  let STORAGE_QUEUED = 'queued-movies';

  function addToWatched(event) {
    const movieEl = document.querySelector('.id');
    const movieId = movieEl.innerHTML;

    const existingEntries = JSON.parse(localStorage.getItem(STORAGE_WATCHED) || '[]');

    if (!existingEntries.includes(movieId)) {
      existingEntries.push(movieId);

      localStorage.setItem(STORAGE_WATCHED, JSON.stringify(existingEntries));
    } else {
      console.log(movieId + ' already exists');
    }
  }

  function addToQueued(event) {
    const movieEl = document.querySelector('.id');
    const movieId = movieEl.innerHTML;

    const existingEntries = JSON.parse(localStorage.getItem(STORAGE_QUEUED) || '[]');

    if (!existingEntries.includes(movieId)) {
      existingEntries.push(movieId);

      localStorage.setItem(STORAGE_QUEUED, JSON.stringify(existingEntries));
    } else {
      console.log(movieId + ' already exists');
    }
  }

  if (addToWatchedButton) {
    addToWatchedButton.addEventListener('click', addToWatched);
  }

  if (addToQueueButton) {
    addToQueueButton.addEventListener('click', addToQueued);
  }
}

localStorageHandler();

const galleryEl = document.querySelector('.cards-wrapper');
const STORAGE_WATCHED = 'watched-movies';
const STORAGE_QUEUED = 'queued-movies';

const createMovieCard = movies => {
  return movies
    .map(movie => {
      const genreNames = movie.genres;
      console
        .log(genreNames)
        ?.slice(0, 3)
        .map(genreId => genreList[genreId])
        .join(', ');

      let title = movie.title;
      if (title.length > 50) {
        title = title.slice(0, 50) + '...';
      }

      return `<div id="card" class="card"><img class="card__poster" src='https://image.tmdb.org/t/p/w500${
        movie.poster_path
      }' alt='Poster of ${movie.title} movie' data-id="${movie.id}"></a>
    <div class="card__info">
      <div class="card__quick-info">
        <div class="card__movie-title">${title}</div>
        <div class="card__movie-genre">${genreNames}</div>
        <div class="card__movie-release">${movie.release_date?.slice(0, 4)}</div>
      </div>
      <div class="card__movie-rating">${Math.round(movie.vote_average * 10) / 10}</div>
    </div>
  </div>`;
    })
    .join('');
};

function clearGallery() {
  galleryEl.innerHTML = '';
}

async function renderWatchedMovies() {
  const watchedArray = JSON.parse(localStorage.getItem(STORAGE_WATCHED) || '[]');

  if (watchedArray.length === 0) {
    const noMovies = document.createElement('div');
    noMovies.innerHTML = `<p>There's nothing here.</p>`;
    galleryEl.appendChild(noMovies);
    return;
  }

  clearGallery();

  for (const movieId of watchedArray) {
    const movieData = await getMovieById(movieId);
    const movie = {
      id: movieData.id,
      title: movieData.title,
      vote_average: movieData.vote_average,
      vote_count: movieData.vote_count,
      popularity: movieData.popularity,
      originalTitle: movieData.original_title,
      overview: movieData.overview,
      poster_path: movieData.poster_path,
      release_date: movieData.release_date,
    };

    // Render the movie card using the movie object
    const movieCard = createMovieCard([movie]);
    galleryEl.innerHTML += movieCard;
  }
}

async function renderQueuedMovies() {
  const queuedArray = JSON.parse(localStorage.getItem(STORAGE_QUEUED) || '[]');

  if (queuedArray.length === 0) {
    const noMovies = document.createElement('div');
    noMovies.innerHTML = `<p>There's nothing here.</p>`;
    galleryEl.appendChild(noMovies);
    return;
  }

  clearGallery();

  for (const movieId of queuedArray) {
    const movieData = await getMovieById(movieId);
    const movie = {
      id: movieData.id,
      title: movieData.title,
      vote_average: movieData.vote_average,
      vote_count: movieData.vote_count,
      popularity: movieData.popularity,
      originalTitle: movieData.original_title,
      overview: movieData.overview,
      poster_path: movieData.poster_path,
      release_date: movieData.release_date,
    };

    console.log(movie);

    // Render the movie card using the movie object
    const movieCard = createMovieCard([movie]);
    galleryEl.innerHTML += movieCard;
  }
}

const watchedButton = document.getElementById('watchedButton');
const queuedButton = document.getElementById('queuedButton');

if (watchedButton) {
  watchedButton.addEventListener('click', event => {
    event.preventDefault();
    renderWatchedMovies();
  });
}

if (queuedButton) {
  queuedButton.addEventListener('click', event => {
    event.preventDefault();
    renderQueuedMovies();
  });
}
