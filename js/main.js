//Бургер
const burger = document.querySelector("#burger");
const nav = document.querySelector("#nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav--active");
  burger.classList.toggle("burger--active");
  document.body.classList.toggle("stop-scroll");
});

// Модальное окно
const modalBtn = document.querySelector("#modal__btn");
const modalParent = document.querySelector(".modal-parent");

// Открытие окно
modalBtn.addEventListener("click", () => {
  modalParent.classList.add("modal-parent__open");
});

// Закрытие окно
modalParent.querySelector(".modal").addEventListener("click", (event) => {
  event._isClick = true;
});

modalParent.addEventListener("click", (event) => {
  if (event._isClick === true) return;
  modalParent.classList.remove("modal-parent__open");
});

window.addEventListener("keydown", (text) => {
  if (text.key === "Escape") {
    modalParent.classList.remove("modal-parent__open");
  }
});

// Слайдер

const swiper = new Swiper("#gallery", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    prevEl: "#gallery-prev",
    nextEl: "#gallery-next",
  },
});
