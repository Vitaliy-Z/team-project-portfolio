import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [Navigation, Mousewheel, Keyboard],
  navigation: {
    nextEl: '.project-swiper-button-next',
    prevEl: '.project-swiper-button-prev',
  },
   mousewheel: {
    invert: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

document.querySelectorAll('.see-project').forEach(button => {
  button.addEventListener('click', function () {
    window.open('https://github.com/github', '_blank');
  });
});

