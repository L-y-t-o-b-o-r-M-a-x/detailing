import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const el = document.querySelector('.news-slider');

const swiper = new Swiper(el, {
  slidesPerView: 1,
  loop: true,
  navigation: {
    prevEl: ".news-btn--prev",
    nextEl: ".news-btn--next",
  },
});

