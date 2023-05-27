import { genreList, getGenres } from './fetch-genres';

import axios from 'axios';

const inputEl = document.querySelector('.header-search-bar__input');
const searchButtonEl = document.querySelector('.header-search-bar__button');
const warningEl = document.querySelector('.header-search-bar__warning');
// Pagination elements
let currentPage = 1;
let firstPage = 1;
let lastPage = 20;
const moviesPerPage = 2;

const currentPageButton = document.getElementById('current-page');
const arrowLeftButton = document.getElementById('arrow-left');
const arrowRightButton = document.getElementById('arrow-right');
const currentPageAddOneButton = document.getElementById('current-page+1');
const currentPageAddTwoButton = document.getElementById('current-page+2');
const currentPageMinusOneButton = document.getElementById('current-page-1');
const currentPageMinusTwoButton = document.getElementById('current-page-2');
const firstPageButton = document.getElementById('first-page');
const lastPageButton = document.getElementById('last-page');
const dots1El = document.getElementById('dots1');
const dots2El = document.getElementById('dots2');
const galleryEl = document.querySelector('.cards-wrapper');
// ------------------------------------------------------------------------------------------
const API_key = 'dbea77d3eb5b3622b027f73f6a5032fe';

warningEl.style.visibility = 'hidden';

const getMovies = async () => {
  try {
    const searchMovieAPI_URL = 'https://api.themoviedb.org/3/search/movie';
    const result = await axios.get(
      `${searchMovieAPI_URL}?api_key=${API_key}&query=${inputEl.value}&page=${currentPage}&language=en-US`,
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

const createMovieCard = movies => {
  // console.log('movies', movies);
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

searchButtonEl.addEventListener('click', event => {
  event.preventDefault();
  getMovies().then(movies => {
    // const movieData = movies;
    // console.log('movieData', movieData);

    if (movies.length === 0) {
      galleryEl.innerHTML = '';
      inputEl.value = '';
      warningEl.style.visibility = 'visible';
    } else {
      warningEl.style.visibility = 'hidden';
      galleryEl.innerHTML = createMovieCard(movies);
    }
  });
});

inputEl.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchButtonEl.click();
  }
});

// Pagination
const updatePage = () => {
  getMovies().then(movies => {
    // const movieData = movies;
    // console.log('movieData', movieData);

    if (movies.length === 0) {
      galleryEl.innerHTML = '';
      inputEl.value = '';
      warningEl.style.visibility = 'visible';
    } else {
      warningEl.style.visibility = 'hidden';
      galleryEl.innerHTML = createMovieCard(movies);
    }
  });
  if (currentPage === 1) {
    currentPageButton.innerHTML = currentPage;
    arrowLeftButton.style.visibility = 'hidden';
    currentPageAddOneButton.innerHTML = currentPage + 1;
    currentPageAddTwoButton.innerHTML = currentPage + 2;
    currentPageMinusOneButton.innerHTML = '';
    currentPageMinusTwoButton.innerHTML = '';
    dots1El.innerHTML = '';
    dots2El.innerHTML = '...';
    lastPageButton.innerHTML = lastPage;
    firstPageButton.innerHTML = ``;
  } else if (currentPage === 2) {
    currentPageButton.innerHTML = currentPage;
    arrowLeftButton.style.visibility = 'visible';
    currentPageAddOneButton.innerHTML = currentPage + 1;
    currentPageAddTwoButton.innerHTML = currentPage + 2;
    currentPageMinusOneButton.innerHTML = currentPage - 1;
    currentPageMinusTwoButton.innerHTML = ``;
    firstPageButton.innerHTML = ``;
    dots1El.innerHTML = '';
  } else if (currentPage === 3) {
    currentPageButton.innerHTML = currentPage;
    currentPageMinusOneButton.innerHTML = currentPage - 1;
    currentPageMinusTwoButton.innerHTML = currentPage - 2;
    currentPageAddOneButton.innerHTML = currentPage + 1;
    currentPageAddTwoButton.innerHTML = currentPage + 2;
    firstPageButton.innerHTML = ``;
    dots1El.innerHTML = '';
  } else if (currentPage === 4) {
    currentPageButton.innerHTML = currentPage;
    currentPageMinusOneButton.innerHTML = currentPage - 1;
    currentPageMinusTwoButton.innerHTML = currentPage - 2;
    currentPageAddOneButton.innerHTML = currentPage + 1;
    currentPageAddTwoButton.innerHTML = currentPage + 2;
    dots1El.innerHTML = firstPage;
    firstPageButton.innerHTML = ``;
  } else if (currentPage >= 4) {
    currentPageButton.innerHTML = currentPage;
    currentPageAddOneButton.innerHTML = currentPage + 1;
    currentPageAddTwoButton.innerHTML = currentPage + 2;
    currentPageMinusOneButton.innerHTML = currentPage - 1;
    currentPageMinusTwoButton.innerHTML = currentPage - 2;
    dots1El.innerHTML = '...';
    dots2El.innerHTML = '...';
    firstPageButton.innerHTML = firstPage;
    lastPageButton.innerHTML = lastPage;
  }
  console.log(currentPage);
};
updatePage();
const handlePageUpdate = increment => {
  currentPage += increment;
  updatePage();
};

const handleFirstPage = () => {
  currentPage = firstPage;
  updatePage();
};

const handleLastPage = () => {
  currentPage = lastPage;
  updatePage();
};

firstPageButton.addEventListener('click', e => {
  e.preventDefault();
  handleFirstPage();
});

lastPageButton.addEventListener('click', e => {
  e.preventDefault();
  arrowLeftButton.style.visibility = 'visible';
  handleLastPage();
});

arrowLeftButton.addEventListener('click', e => {
  e.preventDefault();
  handlePageUpdate(-1);
});
currentPageMinusOneButton.addEventListener('click', e => {
  e.preventDefault();
  handlePageUpdate(-1);
});

arrowRightButton.addEventListener('click', e => {
  e.preventDefault();
  handlePageUpdate(1);
});
currentPageAddOneButton.addEventListener('click', e => {
  e.preventDefault();
  handlePageUpdate(1);
});

currentPageMinusTwoButton.addEventListener('click', e => {
  e.preventDefault();
  handlePageUpdate(-2);
});
currentPageAddTwoButton.addEventListener('click', e => {
  e.preventDefault();
  handlePageUpdate(2);
});

currentPageAddTwoButton.addEventListener('click', e => {
  e.preventDefault();
  handlePageUpdate(2);
});
