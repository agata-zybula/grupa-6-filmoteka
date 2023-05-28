const API_key = "dbea77d3eb5b3622b027f73f6a5032fe";
const findMovieApi_URL = "https://api.themoviedb.org/3/movie/";

async function getMovieById(filmId) {
  const response = await fetch(`${findMovieApi_URL}/${filmId}?api_key=${API_key}`);
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
      overview: movieData.overview,
      poster_path: movieData.poster_path,
    };
    console.log(movie);
  });
}

const createMovieCardSearch = movies => {
  // console.log('movies', movies);
  return movies
    .map(movie => {
      const genreNames = movie.genre_ids
        .slice(0, 3)
        .map(genreId => genreList[genreId])
        .join(', ');
      return `<div id="card" class="card"><img class="card__poster" src='https://image.tmdb.org/t/p/w220_and_h330_face${
        movie.poster_path
      }' alt=Poster of ${movie.title} movie data-id="${movie.id}"></a>
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

        //   if (!getFromLocalStorage(STORAGE_WATCHED) || getFromLocalStorage(STORAGE_WATCHED).length === 0) {
        //         galleryEl.innerHTML = "There are no movies in 'Watched'.";
        //         return;
        //     } else {
export function getInfoFromLocalStorageHandler() {

    const headerWatchedButton = document.getElementById("watchedButton");
    const headerQueuedButton = document.getElementById("queuedButton");
    
    function getFromLocalStorage(key) {
        const savedData = localStorage.getItem(key);
        const parsedData = JSON.parse(savedData);
        return parsedData;
    }

    async function renderWatchedMovies(STORAGE_WATCHED) {
        const galleryEl = document.querySelector(".cards-wrapper");
        // event.preventDefault();
        getMovieData(filmId).then(movies => {
            if (!getFromLocalStorage(STORAGE_WATCHED) || getFromLocalStorage(STORAGE_WATCHED).length === 0) {
                galleryEl.innerHTML = "aaaa"
            } else {
                galleryEl.innerHTML = createMovieCardSearch(movies);
            }
        })
    }
    
    headerWatchedButton.addEventListener("click", () => {
        if (!headerWatchedButton.classList.contains("watched__button--active")) {
            headerWatchedButton.classList.add("watched__button--active");
            headerQueuedButton.classList.remove("watched__button--active");
        }
    });
    
    headerQueuedButton.addEventListener("click", () => {
        if (!headerQueuedButton.classList.contains("watched__button--active")) {
            headerQueuedButton.classList.add("watched__button--active");
            headerWatchedButton.classList.remove("watched__button--active");
        }
    });

    headerWatchedButton.addEventListener("click", renderWatchedMovies);
    // headerQueuedButton.addEventListener("click", renderQueuedMovies);
};

getInfoFromLocalStorageHandler();


// // // const createMovieCardSearch = movies => {
// // //   return movies
// // //     .map(movie => {
// // //       const genreNames = movie.genre_ids
// // //         .slice(0, 3)
// // //         .map(genreId => genreList[genreId])
// // //         .join(', ');
// // //       return `<div id="card" class="card"><img class="card__poster" src='https://image.tmdb.org/t/p/w220_and_h330_face${
// // //         movie.poster_path
// // //       }' alt=Poster of ${movie.title} movie data-id="${movie.id}"></a>
// // //     <div class="card__info">
// // //       <div class="card__quick-info">
// // //         <div class="card__movie-title">${movie.title}</div>
// // //         <div class="card__movie-genre">${genreNames}</div>
// // //         <div class="card__movie-release">${movie.release_date.slice(0, 4)}</div>
// // //       </div>
// // //       <div class="card__movie-rating">${Math.round(movie.vote_average * 10) / 10}</div>
// // //     </div>
// // //   </div>`;
// // //     })
// // //     .join('');
// // // };