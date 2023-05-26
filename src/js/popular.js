// import { createMovieCard } from './create-movie-card';
import { genreList, getGenres } from './fetch-genres';
import axios from 'axios';

const API_key = 'dbea77d3eb5b3622b027f73f6a5032fe';
const galleryEl = document.querySelector('.cards-wrapper');

let currentPage = 1;
let firstPage = 1;
let lastPage = 20;
let moviesOnPage = 40;

const currentPageButton = document.getElementById(`current-page`);
const arrowLeftButton = document.getElementById(`arrow-left`);
const arrowRightButton = document.getElementById(`arrow-right`);
const currentPageAddOneButton = document.getElementById(`current-page+1`);
const currentPageAddTwoButton = document.getElementById(`current-page+2`);
const currentPageMinusOneButton = document.getElementById(`current-page-1`);
const currentPageMinusTwoButton = document.getElementById(`current-page-2`);
const firstPageButton = document.getElementById(`first-page`);
const lastPageButton = document.getElementById(`last-page`);
const dots1El = document.getElementById(`dots1`);
const dots2El = document.getElementById(`dots2`);

const getTrending = async () => {
  try {
    const searchTrendingAPI_URL = 'https://api.themoviedb.org/3/trending/movie/day';
    const result = await axios.get(
      `${searchTrendingAPI_URL}?api_key=${API_key}& page=1&language=en-US`,
    );

    const movies = result.data.results;
    await getGenres();

    return movies;
  } catch (error) {
    console.error(error);
  }
};

const createMovieCard = movies => {
  return movies
    .map(movie => {
      const genreNames = movie.genre_ids
        .slice(0, 3)
        .map(genreId => genreList[genreId])
        .join(', ');
      return `<div id="card" class="card"><img class="card__poster" src='https://image.tmdb.org/t/p/w220_and_h330_face${
        movie.poster_path
      }' alt='Poster of ${movie.title} movie'></a>
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

getTrending().then(movies => {
  galleryEl.innerHTML = createMovieCard(movies);
});

// Pagination

[document.getElementById(`current-page-1`), document.getElementById(`arrow-left`)].forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    currentPage -= 1;
    getMovies();
    createGallery();
    if (currentPage <= 3) {
      currentPageButton.innerHTML = currentPage;
      currentPageAddOneButton.innerHTML = ``;
      currentPageAddTwoButton.innerHTML = ``;
      currentPageMinusOneButton.innerHTML = ``;
      currentPageMinusTwoButton.innerHTML = ``;
      dots1El.innerHTML = ``;
      dots2El.innerHTML = ``;
      firstPageButton.innerHTML = ``;
      lastPageButton.innerHTML = ``;
    } else {
      currentPageButton.innerHTML = currentPage;
      currentPageAddOneButton.innerHTML = currentPage + 1;
      currentPageAddTwoButton.innerHTML = currentPage + 2;
      currentPageMinusOneButton.innerHTML = currentPage - 1;
      currentPageMinusTwoButton.innerHTML = currentPage - 2;
      dots1El.innerHTML = `...`;
      dots2El.innerHTML = `...`;
      firstPageButton.innerHTML = 1;
      lastPageButton.innerHTML = 20;
    }
  });
});

[document.getElementById(`current-page+1`), document.getElementById(`arrow-right`)].forEach(
  item => {
    item.addEventListener('click', e => {
      e.preventDefault();

      currentPage += 1;
      getMovies();
      createGallery();
      if (currentPage <= 3) {
        currentPageButton.innerHTML = currentPage;
        currentPageAddOneButton.innerHTML = ``;
        currentPageAddTwoButton.innerHTML = ``;
        currentPageMinusOneButton.innerHTML = ``;
        currentPageMinusTwoButton.innerHTML = ``;
        dots1El.innerHTML = ``;
        dots2El.innerHTML = ``;
        firstPageButton.innerHTML = ``;
        lastPageButton.innerHTML = ``;
      } else {
        currentPageButton.innerHTML = currentPage;
        currentPageAddOneButton.innerHTML = currentPage + 1;
        currentPageAddTwoButton.innerHTML = currentPage + 2;
        currentPageMinusOneButton.innerHTML = currentPage - 1;
        currentPageMinusTwoButton.innerHTML = currentPage - 2;
        dots1El.innerHTML = `...`;
        dots2El.innerHTML = `...`;
        firstPageButton.innerHTML = 1;
        lastPageButton.innerHTML = 20;
      }
    });
  },
);

currentPageMinusTwoButton.addEventListener('click', e => {
  e.preventDefault();
  currentPage -= 2;
  getMovies();
  createGallery();
  if (currentPage <= 3) {
    currentPageButton.innerHTML = currentPage;
    currentPageAddOneButton.innerHTML = ``;
    currentPageAddTwoButton.innerHTML = ``;
    currentPageMinusOneButton.innerHTML = ``;
    currentPageMinusTwoButton.innerHTML = ``;
    dots1El.innerHTML = ``;
    dots2El.innerHTML = ``;
    firstPageButton.innerHTML = ``;
    lastPageButton.innerHTML = ``;
  } else {
    currentPageButton.innerHTML = currentPage;
    currentPageAddOneButton.innerHTML = currentPage + 1;
    currentPageAddTwoButton.innerHTML = currentPage + 2;
    currentPageMinusOneButton.innerHTML = currentPage - 1;
    currentPageMinusTwoButton.innerHTML = currentPage - 2;
    dots1El.innerHTML = `...`;
    dots2El.innerHTML = `...`;
    firstPageButton.innerHTML = 1;
    lastPageButton.innerHTML = 20;
  }
});

currentPageAddTwoButton.addEventListener('click', e => {
  e.preventDefault();
  currentPage += 2;
  getMovies();
  createGallery();
  if (currentPage <= 3) {
    currentPageButton.innerHTML = currentPage;
    currentPageAddOneButton.innerHTML = ``;
    currentPageAddTwoButton.innerHTML = ``;
    currentPageMinusOneButton.innerHTML = ``;
    currentPageMinusTwoButton.innerHTML = ``;
    dots1El.innerHTML = ``;
    dots2El.innerHTML = ``;
    firstPageButton.innerHTML = ``;
    lastPageButton.innerHTML = ``;
  } else {
    currentPageButton.innerHTML = currentPage;
    currentPageAddOneButton.innerHTML = currentPage + 1;
    currentPageAddTwoButton.innerHTML = currentPage + 2;
    currentPageMinusOneButton.innerHTML = currentPage - 1;
    currentPageMinusTwoButton.innerHTML = currentPage - 2;
    dots1El.innerHTML = `...`;
    dots2El.innerHTML = `...`;
    firstPageButton.innerHTML = 1;
    lastPageButton.innerHTML = 20;
  }
});

firstPageButton.addEventListener('click', e => {
  e.preventDefault();
  currentPage = firstPage;
  getMovies();
  createGallery();
  if (currentPage <= 3) {
    currentPageButton.innerHTML = currentPage;
    currentPageAddOneButton.innerHTML = ``;
    currentPageAddTwoButton.innerHTML = ``;
    currentPageMinusOneButton.innerHTML = ``;
    currentPageMinusTwoButton.innerHTML = ``;
    dots1El.innerHTML = ``;
    dots2El.innerHTML = ``;
    firstPageButton.innerHTML = ``;
    lastPageButton.innerHTML = ``;
  } else {
    currentPageButton.innerHTML = currentPage;
    currentPageAddOneButton.innerHTML = currentPage + 1;
    currentPageAddTwoButton.innerHTML = currentPage + 2;
    currentPageMinusOneButton.innerHTML = currentPage - 1;
    currentPageMinusTwoButton.innerHTML = currentPage - 2;
    dots1El.innerHTML = `...`;
    dots2El.innerHTML = `...`;
    firstPageButton.innerHTML = 1;
    lastPageButton.innerHTML = 20;
  }
});

lastPageButton.addEventListener('click', e => {
  e.preventDefault();
  currentPage = lastPage;
  getMovies();
  createGallery();
  if (currentPage <= 3) {
    currentPageButton.innerHTML = currentPage;
    currentPageAddOneButton.innerHTML = ``;
    currentPageAddTwoButton.innerHTML = ``;
    currentPageMinusOneButton.innerHTML = ``;
    currentPageMinusTwoButton.innerHTML = ``;
    dots1El.innerHTML = ``;
    dots2El.innerHTML = ``;
    firstPageButton.innerHTML = ``;
    lastPageButton.innerHTML = ``;
  } else {
    currentPageButton.innerHTML = currentPage;
    currentPageAddOneButton.innerHTML = currentPage + 1;
    currentPageAddTwoButton.innerHTML = currentPage + 2;
    currentPageMinusOneButton.innerHTML = currentPage - 1;
    currentPageMinusTwoButton.innerHTML = currentPage - 2;
    dots1El.innerHTML = `...`;
    dots2El.innerHTML = `...`;
    firstPageButton.innerHTML = 1;
    lastPageButton.innerHTML = 20;
  }
});

// const API_KEY = 'fe36e1a920a96782eff1e1dab760f0ae';
//  async function fetchGenres() {
//  console.log('fetchGenres started');
//  const searchParams = new URLSearchParams({
//  api_key: API_KEY
//  });

//  const url = `https://api.themoviedb.org/3/genre/movie/list?${searchParams}`;
//  console.log('fetchGenres url:', url);

//  const response = await fetch(url);
//  console.log('fetchGenres response:', response);
//  const genres = await response.json();
//  console.log('fetchGenres genres:', genres);

//  return genres;
//  }
