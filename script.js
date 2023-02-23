const menuBtnEl = document.querySelector(".menu");
const closeBtnEl = document.querySelector(".close-menu");

const overlayEl = document.querySelector(".overlay");
const headEl = document.querySelector(".head");

const close = function (e) {
  e.preventDefault();
  overlayEl.classList.add("hidden");
  closeBtnEl.classList.add("hidden");

  headEl.classList.remove("nav-open");
};

menuBtnEl.addEventListener("click", function (e) {
  e.preventDefault();
  overlayEl.classList.remove("hidden");
  closeBtnEl.classList.remove("hidden");

  headEl.classList.add("nav-open");
});

closeBtnEl.addEventListener("click", close);
overlayEl.addEventListener("click", close);
