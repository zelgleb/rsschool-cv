const hamburger = document.querySelector(".hamburger ");
const nav = document.querySelector(".navigation__list");
const nav1 = document.querySelector(".navigation__item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger_active");
  nav.classList.toggle("navigation__list_active");
  nav1.classList.toggle("navigation__item_active");
});
