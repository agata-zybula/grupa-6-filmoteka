export function localStorageHandler() {
    const addToWatchedButton = document.getElementById("addToWatched");
    const addToQueueButton = document.getElementById("addToQueue");
    
    let STORAGE_WATCHED = "watched-movies";
    let STORAGE_QUEUED = "queued-movies";
    
    let moviesWatched = [];
    let moviesQueued = [];

    function addToWatched() {
        
        const titleEl = document.querySelector("h2.modal__title");
        const movieTitle = titleEl.innerHTML

        const existingEntries = JSON.parse(localStorage.getItem(STORAGE_WATCHED) || '[]');
        
        if (!existingEntries.includes(movieTitle)) {
            existingEntries.push(movieTitle);
            
            localStorage.setItem(STORAGE_WATCHED, JSON.stringify(existingEntries));
        } else {
            console.log(movieTitle + ' already exists')
        }
    }

    function addToQueued() {
        
        const titleEl = document.querySelector("h2.modal__title");
        const movieTitle = titleEl.innerHTML

        const existingEntries = JSON.parse(localStorage.getItem(STORAGE_QUEUED) || '[]');
        
        if (!existingEntries.includes(movieTitle)) {
            existingEntries.push(movieTitle);
            
            localStorage.setItem(STORAGE_QUEUED, JSON.stringify(existingEntries));
        } else {
            console.log(movieTitle + ' already exists')
        }
    }
    
    addToWatchedButton.addEventListener("click", addToWatched);
    addToQueueButton.addEventListener("click", addToQueued);
}

localStorageHandler();