const galleryEl = document.querySelector(".library-wrapper");

function clearGallery() {
  galleryEl.innerHTML = "";
};

const myLibraryButton = document.querySelector(".header-my-library__link");

myLibraryButton.addEventListener("click", clearGallery);