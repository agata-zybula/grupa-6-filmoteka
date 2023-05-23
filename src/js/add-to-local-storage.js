export function localStorageHandler() {
    const addToWatchedButton = document.getElementById("addToWatched");
    const addToQueueButton = document.getElementById("addToQueue");
    
    let STORAGE_WATCHED = "watched-movies";
    let STORAGE_QUEUED = "queued-movies";
    
    let moviesWatched = [];
    let moviesQueued = [];
    
    if (localStorage.getItem(STORAGE_WATCHED) != null) {
        moviesWatched = JSON.parse(localStorage.getItem(STORAGE_WATCHED));
    }
    
    if (localStorage.getItem(STORAGE_QUEUED) != null) {
        moviesQueued = JSON.parse(localStorage.getItem(STORAGE_QUEUED));
    }
    
    function addtoWatched() {
        const movieId = document.querySelector(".modal").getAttribute("data-movie-id");
        const currentMovie = "aaaa";
        
        if (moviesWatched.every(element => element.id !== Number(movieId))) {
            moviesWatched.push(currentMovie);
        }
        localStorage.setItem(STORAGE_WATCHED, JSON.stringify(moviesWatched));
    }
    
    function addToQueued() {
        const movieId = document.querySelector(".modal").getAttribute("data-movie-id");
        const currentMovie = "sdsdsada";
        
        if (moviesQueued.every(element => element.id !== Number(movieId))) {
            moviesQueued.push(currentMovie);
        }
        
        localStorage.setItem(STORAGE_QUEUED, JSON.stringify(moviesQueued));
    }
    
    addToWatchedButton.addEventListener("click", addtoWatched);
    addToQueueButton.addEventListener("click", addToQueued);
}