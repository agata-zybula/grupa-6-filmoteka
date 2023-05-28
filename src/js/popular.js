import { genreList, getGenres } from './fetch-genres';
import axios from 'axios';

const API_key = 'dbea77d3eb5b3622b027f73f6a5032fe';
const galleryEl = document.querySelector('.cards-wrapper');
const loadMoreTrendingButtonEl = document.querySelector('.load-more-trending');
let page = 1;

const getTrending = async () => {
  try {
    const searchTrendingAPI_URL = 'https://api.themoviedb.org/3/trending/movie/day';
    const result = await axios.get(
      `${searchTrendingAPI_URL}?api_key=${API_key}&page=${page}&language=en-US`,
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
      return `<div id="card" class="card"><img class="card__poster" src='https://image.tmdb.org/t/p/w500${
        movie.poster_path
      }' alt='Poster of ${movie.title} movie' data-id="${movie.id}"></a>
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

const loadMoreMovies = () => {
  getTrending().then(movies => {
    galleryEl.insertAdjacentHTML('beforeend', createMovieCard(movies));
    page += 1;
  });
};

const handleScroll = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    loadMoreMovies();
  }
};

window.addEventListener('scroll', handleScroll);

// Initial page load
getTrending().then(movies => {
  galleryEl.innerHTML = createMovieCard(movies);
  page += 1;
});
