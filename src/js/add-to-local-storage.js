const findMovieApi_URL = 'https://api.themoviedb.org/3/movie/';
const API_key = 'dbea77d3eb5b3622b027f73f6a5032fe';

async function getMovieById(filmId) {
  const response = await fetch(`${findMovieApi_URL}/${filmId}?api_key=${API_key}`);
  return response.json();
}

function getMovieData(filmId) {
  getMovieById(filmId).then(movies => {
    const movieData = movies;

    const movie = {
      id: movieData.id,
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

    })
};

export function localStorageHandler() {
    const addToWatchedButton = document.getElementById("addToWatched");
    const addToQueueButton = document.getElementById("addToQueue");
    
    let STORAGE_WATCHED = "watched-movies";
    let STORAGE_QUEUED = "queued-movies";
    
    function addToWatched(event) {
        
        const movieEl = document.querySelector(".id");
        const movieId = movieEl.innerHTML

        const existingEntries = JSON.parse(localStorage.getItem(STORAGE_WATCHED) || "[]");
        
        if (!existingEntries.includes(movieId)) {
            existingEntries.push(movieId);
            
            localStorage.setItem(STORAGE_WATCHED, JSON.stringify(existingEntries));
        } else {
            console.log(movieId + " already exists")
        }
    }

    function addToQueued(event) {
        
        const movieEl = document.querySelector(".id");
        const movieId = movieEl.innerHTML

        const existingEntries = JSON.parse(localStorage.getItem(STORAGE_QUEUED) || "[]");
        
        if (!existingEntries.includes(movieId)) {
            existingEntries.push(movieId);
            
            localStorage.setItem(STORAGE_QUEUED, JSON.stringify(existingEntries));
        } else {
            console.log(movieId + " already exists")
        }
    }
    
    addToWatchedButton.addEventListener("click", addToWatched);
    addToQueueButton.addEventListener("click", addToQueued);
}

localStorageHandler();