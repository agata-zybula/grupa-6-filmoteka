import { createMovieCard } from './create-movie-card';


// funkcja do pobrania listy gatunków filmowych za pomocą interfejsu API The Movie Database (TMDb).
const getGenres = () => {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=fe36e1a920a96782eff1e1dab760f0ae&language=en-US`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
};

const galleryEl = document.querySelector('.cards-wrapper');


// funkcja do pobierania szczegółów filmu za pomocą interfejsu API TMDb.
const getMovieDetails = (details) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${details}?api_key=fe36e1a920a96782eff1e1dab760f0ae&language=en-US`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
};


// pobiera listę popularnych filmów
const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=fe36e1a920a96782eff1e1dab760f0ae&page=1`
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => console.log(error.message));
};


//  funkcja do pobierania danych filmu i tworzenia znaczników HTML dla galerii
const createGallery = async () => {
  const movies = await getMovies();
  const genres = await getGenres();
  const movieDetailsPromises = movies.map((movie) =>
    getMovieDetails(movie.id)
  );
  Promise.all(movieDetailsPromises)
    .then((movieDetails) => {
      const moviesWithGenresAndYear = movieDetails.map((movieDetail) => ({
        ...movieDetail,
        genre_names: movieDetail.genre_ids.map(
          (genreId) =>
            genres.genres.find((genre) => genre.id === genreId).name
        ),
        year: new Date(movieDetail.release_date).getFullYear(),
      }));
      galleryEl.innerHTML = createMovieCard(moviesWithGenresAndYear);
    })
    .catch((error) => console.log(error.message));
};

createGallery();
