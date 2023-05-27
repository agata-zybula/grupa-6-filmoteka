import { createMovieCard } from './create-movie-card';
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
const getGenres = async () => {
  try {
    const fetchGenres = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=fe36e1a920a96782eff1e1dab760f0ae&language=en-US',
    );
    const genres = await fetchGenres.json();
    return genres;
  } catch (error) {
    console.log(error.message);
  }
};

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
const updatePage = () => {
  getMovies();
  createGallery();
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

// firstPageButton.addEventListener('click', e => {
//   e.preventDefault();
//   currentPage = firstPage;
//   currentPageButton.innerHTML = currentPage;
//   if (currentPage <= 3) {
//     currentPageButton.innerHTML = currentPage;
//     currentPageAddOneButton.innerHTML = '';
//     currentPageAddTwoButton.innerHTML = '';
//     currentPageMinusOneButton.innerHTML = '';
//     currentPageMinusTwoButton.innerHTML = '';
//     dots1El.innerHTML = '';
//     dots2El.innerHTML = '';
//     firstPageButton.innerHTML = '';
//     lastPageButton.innerHTML = '';
//   } else {
//     currentPageButton.innerHTML = currentPage;
//     currentPageAddOneButton.innerHTML = currentPage + 1;
//     currentPageAddTwoButton.innerHTML = currentPage + 2;
//     currentPageMinusOneButton.innerHTML = currentPage - 1;
//     currentPageMinusTwoButton.innerHTML = currentPage - 2;
//     dots1El.innerHTML = '...';
//     dots2El.innerHTML = '...';
//     firstPageButton.innerHTML = 1;
//     lastPageButton.innerHTML = 20;
//   }
//   getMovies();
//   createGallery();
// });

// lastPageButton.addEventListener('click', e => {
//   e.preventDefault();
//   currentPage = lastPage;
//   currentPageButton.innerHTML = currentPage;
//   if (currentPage <= 3) {
//     currentPageButton.innerHTML = currentPage;
//     currentPageAddOneButton.innerHTML = '';
//     currentPageAddTwoButton.innerHTML = '';
//     currentPageMinusOneButton.innerHTML = '';
//     currentPageMinusTwoButton.innerHTML = '';
//     dots1El.innerHTML = '';
//     dots2El.innerHTML = '';
//     firstPageButton.innerHTML = '';
//     lastPageButton.innerHTML = '';
//   } else {
//     currentPageButton.innerHTML = currentPage;
//     currentPageAddOneButton.innerHTML = currentPage + 1;
//     currentPageAddTwoButton.innerHTML = currentPage + 2;
//     currentPageMinusOneButton.innerHTML = currentPage - 1;
//     currentPageMinusTwoButton.innerHTML = currentPage - 2;
//     dots1El.innerHTML = '...';
//     dots2El.innerHTML = '...';
//     firstPageButton.innerHTML = 1;
//     lastPageButton.innerHTML = 20;
//   }
//   getMovies();
//   createGallery();
// });
