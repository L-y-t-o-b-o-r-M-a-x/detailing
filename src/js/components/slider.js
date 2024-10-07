import Swiper, { Autoplay, Navigation, Pagination } from "swiper";

Swiper.use([Autoplay, Navigation, Pagination]);

const el = document.querySelector(".services-slider");

const swiper = new Swiper(el, {
  slidesPerView: 3,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 3000,
  // },
  centeredSlides: true,
  effect: "coverflow", // Указываем эффект 3D
  grabCursor: true,
  centeredSlides: true,
  // slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50, // Поворот слайдов (градусы)
    stretch: 50, // Растяжение между слайдами
    depth: 100, // Глубина 3D эффекта
    modifier: 1, // Модификатор 3D эффекта
    slideShadows: true, // Тени на слайдах
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  576: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
    },
});

