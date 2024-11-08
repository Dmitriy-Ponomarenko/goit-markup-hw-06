// menu.js

const modal = document.querySelector(".backdrop");
const contactsLink = document.getElementById("contacts-link");
const mobileContactsLink = document.getElementById("mobile-contacts-link");
const mobileMenu = document.querySelector(".mobile-menu-wrapper");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu-close-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const openModalBtn = document.getElementById("open-modal-btn");

function openModal() {
  modal.classList.add("is-open");
}

function closeModal() {
  modal.classList.remove("is-open");
}

function openMobileMenu() {
  mobileMenu.classList.add("is-open");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("is-open");
}

contactsLink.addEventListener("click", openModal);
mobileContactsLink.addEventListener("click", () => {
  closeMobileMenu();
  openModal();
});

openModalBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
mobileMenuBtn.addEventListener("click", openMobileMenu);
mobileMenuCloseBtn.addEventListener("click", closeMobileMenu);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
