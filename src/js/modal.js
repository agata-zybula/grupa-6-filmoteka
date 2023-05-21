// Open or close modal
const openModal = document.querySelector("[data-modal-open]");
const closeModal = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");

function toggleModal() {
    modal.classList.toggle("is-hidden");
};

openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);