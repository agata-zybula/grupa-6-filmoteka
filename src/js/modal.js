import { createMovieCard } from './create-movie-card';
import { localStorageHandler } from './add-to-local-storage';
// import { renderModalMarkup } from './render-modal-markup';

// Open or close modal
const openModal = document.querySelector('[data-modal-open]');
const openModalOnCard = document.querySelector('.card');
const modalWindow = document.querySelector('.modal__window');
const closeModal = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

document.addEventListener('keydown', offModalForEscape);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}
function offModalForEscape(e) {
  if (e.key === 'Escape') {
    modal.classList.add('is-hidden');
  }
}

const posters = document.querySelector('.cards-wrapper');
posters.addEventListener('click', selectFilm);

function selectFilm(event) {
  let filmId = event.target.dataset.id;

  getMovieData(filmId);
  toggleModal();
}

// function showModal(data) {
//   const markup = renderModalMarkup(data);
//   modal.insertAdjacentHTML("beforeend", markup);
// };

// function modalHandler() {

//   function renderModal() {
//     openModalOnCard.forEach(function(event) {
//       event.addEventListener("click", () => {
//         modal.classList.remove("is-hidden")

//       })
//       document.addEventListener("keydown", closeOnESC);
//       document.addEventListener("click", closeOnBackdrop);
//       document.addEventListener("click", closeOnButton);
//     })
//     // modal.classList.remove("is-hidden");
//     // document.addEventListener("keydown", closeOnESC);
//     // document.addEventListener("click", closeOnBackdrop);
//     // document.addEventListener("click", closeOnButton);
//   }

//   function closeModal() {
//     modal.classList.add("is-hidden");
//     document.removeEventListener("keyup", closeOnESC);
//     document.removeEventListener("click", closeOnBackdrop);
//     document.removeEventListener("click", closeOnButton);
//   }

//   function closeOnESC(event) {
//     if (event.key === "Escape") {
//       closeModal();
//     }
//   }

//   function closeOnBackdrop(event) {
//     if (event.target !== modal) {
//       closeModal();
//     }
//   }

//   function closeOnButton(event) {
//     if (event.target === closeModal) {
//       closeModal();
//     }
//   }
// };

// modalHandler();

//openModal.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);

// Fetch movie info
const titleEl = document.querySelector('h2.modal__title');
const voteRatingEl = document.getElementById('queryVoteRating');
const voteCountEl = document.getElementById('queryVoteCount');
const popularityEl = document.getElementById('queryPopularity');
const originalTitleEl = document.getElementById('queryOriginalTitle');
const genreEl = document.getElementById('queryGenre');
const posterEl = document.querySelector('.modal__poster');
const overviewEl = document.querySelector('.modal__summary-text');
const cardEl = document.querySelector('.card');

// Fetch trending
const inputEl = document.querySelector('.header-search-bar__input');

const searchMovieAPI_URL = 'https://api.themoviedb.org/3/search/movie';
const API_key = 'dbea77d3eb5b3622b027f73f6a5032fe';

const findMovieApi_URL = 'https://api.themoviedb.org/3/movie/';

const fetchMovies = async () => {
  const response = await fetch(
    `${searchMovieAPI_URL}?api_key=${API_key}&query=${inputEl.value}&page=1&language=en-US`,
  );
  return response.json();
};

async function getMovieById(filmId) {
  const response = await fetch(`${findMovieApi_URL}/${filmId}?api_key=${API_key}`);

  console.log('response', response);
  return response.json();
}

function getMovieData(filmId) {
  getMovieById(filmId).then(movies => {
    const movieData = movies;

    const movie = {
      title: movieData.title,
      vote_average: movieData.vote_average,
      vote_count: movieData.vote_count,
      popularity: movieData.popularity,
      originalTitle: movieData.original_title,
      // genre: movies.genre_ids,
      id: movieData.id,
      overview: movieData.overview,
      poster_path: movieData.poster_path,
    };

    console.log('movie', movie);

    //const modalShow = movie => {
    //cardEl.addEventListener('click', () => {
    //cardEl.forEach(movie => {
    let modal = document.querySelector('.modal');
    const closeModal = document.querySelector('[data-modal-close]');
    const posterEl = document.querySelector('.modal__poster');
    const titleEl = document.querySelector('h2.modal__title');
    const voteRatingEl = document.getElementById('queryVoteRating');
    const voteCountEl = document.getElementById('queryVoteCount');
    const popularityEl = document.getElementById('queryPopularity');
    const originalTitleEl = document.getElementById('queryOriginalTitle');
    // const genreEl = getElementById("queryGenre");
    const overviewEl = document.querySelector('.modal__summary-text');

    modal.classList.remove('is-hidden');
    posterEl.src = `https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`;
    titleEl.innerHTML = `${movie.title}`;
    console.log(`${movie.title}`);
    voteRatingEl.innerHTML = `${movie.vote_average}`;
    //oteCountEl.innerHTML = `${movie.vote_count}`;
    popularityEl.innerHTML = `${movie.popularity}`;
    originalTitleEl.innerHTML = `${movie.originalTitle}`;
    overviewEl.innerHTML = `${movie.overview}`;

    closeModal.addEventListener('click', () => {
      modal.classList.add('is-hidden');
    });
    //});
    //});
    //};
  });
}
