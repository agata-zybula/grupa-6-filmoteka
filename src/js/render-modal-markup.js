export function renderModalMarkup() {
    return `<img class="modal__poster" src="https://image.tmdb.org/t/p/w220_and_h330_face${
        movie.poster_path
      }" alt="Poster of ${movie.title} movie" />
        <div class="modal__info">
            <h2 class="modal__title uppercase" id="queryTitle">${movie.title}</h2>
            <div class="modal__details">
                <ul class="modal__details-categories">
                    <li>Vote / Votes</li>
                    <li>Popularity</li>
                    <li>Original Title</li>
                    <li>Genre</li>
                </ul>
                <ul class="modal__details-values">
                    <li id="queryRating"><span class="modal__details-values--buttonwannabe">${movie.vote_average}</span> / <span>${movie.vote_count}</span></li>
                    <li id="queryPopularity">${movie.popularity}</li>
                    <li class="uppercase" id="queryOriginalTitle">${movie.original_title}</li>
                    <li id="queryGenre">}</li>
                </ul>
            </div>
            <div class="modal__summary-box">
                <h3 class="uppercase">About</h3>
                <p class="modal__summary-text"></p>
            </div>
            <div class="modal__button-box">
                <button class="modal__bottom-button add-padding" id="addToWatched">Add to watched</button>
                <button class="modal__bottom-button" id="addToQueue">Add to queue</button>
            </div>`
}
