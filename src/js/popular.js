import { createMovieCard } from './create-movie-card';
import { ifPagination } from './pagination';
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

const getGenres = async () => {
  try {
    const fetchGenres = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=fe36e1a920a96782eff1e1dab760f0ae&language=en-US`,
    );
    const genres = await fetchGenres.json();
    return genres;
  } catch (error) {
    console.log(error.message);
  }
};

const galleryEl = document.querySelector('.cards-wrapper');

const getMovies = async () => {
  try {
    const fetchMovies = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=fe36e1a920a96782eff1e1dab760f0ae&page=${currentPage}`,
    );
    const movies = await fetchMovies.json();
    return movies;
  } catch (error) {
    console.log(error.message);
  }
};
const createGallery = async () => {
  const movies = await getMovies();
  const genres = await getGenres();
  galleryEl.innerHTML = await createMovieCard(movies);
};

createGallery();

// Pagination

[document.getElementById(`current-page-1`), document.getElementById(`arrow-left`)].forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    console.log(`click`);
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
      console.log(`click`);
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
  console.log(`click`);
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
  console.log(`click`);
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
  console.log(`click`);
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
  console.log(`click`);
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
