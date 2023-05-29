import { genreList, getGenres } from "./fetch-genres";

const API_key = "dbea77d3eb5b3622b027f73f6a5032fe";
const findMovieApi_URL = "https://api.themoviedb.org/3/movie/";

async function getMovieById(filmId) {
  const response = await fetch(`${findMovieApi_URL}/${filmId}?api_key=${API_key}`);
  return response.json();
}

getMovieById();

async function getMovieData(filmId) {
  getMovieById(filmId).then(movies => {
    const movieData = movies;

    const movie = {
      title: movieData.title,
      vote_average: movieData.vote_average,
      vote_count: movieData.vote_count,
      popularity: movieData.popularity,
      originalTitle: movieData.original_title,
      // genre: movies.genre_ids,
      overview: movieData.overview,
      poster_path: movieData.poster_path,
    };
    console.log(movie);
  });
}

  const galleryEl = document.querySelector(".cards-wrapper");

function clearGallery() {
  galleryEl.innerHTML = "";
};

export async function renderWatchedMovies(STORAGE_WATCHED) {

  async function getId() {

    const moviesArray = [];
    const getIdIntoArray = await fetch(`${findMovieApi_URL}/${filmId}?api_key=${API_key}`)
      .then(response => response.json())
    moviesArray.push(Object.values(getIdIntoArray))
  }

  async function iterateThroughArray() {

    const watchedArray = JSON.parse(localStorage.getItem(STORAGE_WATCHED));

    for (let i = 0; i <= watchedArray.length; i++) {
      if (watchedArray[i] !== moviesArray[i] || watchedArray.length === null) {
        const noMovies = document.createElement("div");
        noMovies.innerHTML = `<p>There's nothing here.</p>`;
        galleryEl.appendChild(noMovies);
      } else {
        galleryEl.innerHTML = "aaa"
      };
      createMovieCardSearch(watchedArray);
    }
  }
  iterateThroughArray();
}

// const headerWatchedButton = document.getElementById("watchedButton");
//   headerWatchedButton.addEventListener("click", () => {
//     clearGallery();
//     console.log(STORAGE_WATCHED)
//     renderWatchedMovies()
//   });

// renderWatchedMovies()

// headerWatchedButton.addEventListener("click", () => {
//   clearGallery();
//   if (!headerWatchedButton.classList.contains("watched__button--active")) {
//     headerWatchedButton.classList.add("watched__button--active");
//     headerQueuedButton.classList.remove("watched__button--active");
//     }
// });

// const headerQueuedButton = document.getElementById("queuedButton");

// headerQueuedButton.addEventListener("click", () => {
//   clearGallery();
//   if (!headerQueuedButton.classList.contains("watched__button--active")) {
//     headerQueuedButton.classList.add("watched__button--active");
//     headerWatchedButton.classList.remove("watched__button--active");
//     }
// });



// `
//       <div id="card" class="card"><img class="card__poster" src='https://image.tmdb.org/t/p/w500${
//         movie.poster_path}' alt=Poster of ${movie.title} movie data-id="${movie.id}"></a>
//         <div class="card__info">
//           <div class="card__quick-info">
//             <div class="card__movie-title">${movie.title}</div>
//             <div class="card__movie-genre"></div>
//             <div class="card__movie-release">${movie.release_date.slice(0, 4)}</div>
//           </div>
//           <div class="card__movie-rating">${Math.round(movie.vote_average * 10) / 10}</div>
//         </div>
//       </div>`