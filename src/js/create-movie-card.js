export const createMovieCard = movies => {
  return movies.results
    .map(movie => {
      return `<div id="card" class="card"><img class="card__poster" src='https://image.tmdb.org/t/p/w220_and_h330_face${
        movie.poster_path
      }' alt=Poster of ${movie.title} movie></a>
    <div class="card__info">
      <div class="card__quick-info">
        <div class="card__movie-title">${movie.title}</div>
        <div class="card__movie-genre">${movie.id}</div>
        <div class="card__movie-release">${movie.release_date.slice(0, 4)}</div>
      </div>
      <div class="card__movie-rating">${Math.round(movie.vote_average * 10) / 10}</div>
    </div>
  </div>`;
    })
    .join('');
};
