const galleryEl = document.querySelector(".cards-wrapper");

function clearGallery() {
  galleryEl.innerHTML = "";
};

const myLibraryButton = document.querySelector(".header-my-library__link");

myLibraryButton.addEventListener("click", clearGallery);