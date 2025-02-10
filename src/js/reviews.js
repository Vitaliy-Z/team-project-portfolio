import { fetchReviews } from './swagger-api';
import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviewsListEl = document.querySelector('.js-reviews-list');
const reviewsNavContainerEl = document.querySelector('.js-reviews-nav');
const nextButton = document.querySelector('.btn-forward');
const prevButton = document.querySelector('.btn-backward');

const renderReviews = reviews => {
  if (!reviews.length) {
    showErrorMessage();
    return;
  }

  const markup = reviews.map(createReviewCardTemplate).join('');
  reviewsListEl.innerHTML = markup;

  setTimeout(() => {
    initializeSwiper();
  }, 0);
};

fetchReviews()
  .then(response => {
    renderReviews(response.data);
  })
  .catch(err => {
    console.error(err);
    showErrorMessage();
  });

const showErrorMessage = () => {
  reviewsListEl.innerHTML = `<p class="reviews-eroor-message">Not found</p>`;
  reviewsNavContainerEl.classList.add('visually-hidden');
};

const createReviewCardTemplate = reviewer => {
  const { author, avatar_url, review } = reviewer;

  return `
    <li class="reviews-swiper-slide review-item">
        <img class="reviewer-avatar" src=${avatar_url} alt="reviewer-${author}">
        <h3 class="reviewer-name">${author}</h3>
        <p class="review-text">${review}</p>
    </li>`;
};

const initializeSwiper = () => {
  new Swiper('.reviews-swiper', {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 16,
    autoHeight: true,
    loop: false,
    grabCursor: true,
    direction: 'horizontal',
    wrapperClass: 'reviews-swiper-wrapper',
    slideClass: 'reviews-swiper-slide',
    modules: [Navigation, Mousewheel, Keyboard],
    navigation: {
      nextEl: '.reviews-swiper-button-next',
      prevEl: '.reviews-swiper-button-prev',
    },
    mousewheel: {
      invert: true,
      sensitivity: 1,
      eventsTarget: '.reviews-swiper-wrapper',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      enabled: true,
      eventsTarget: '.reviews-swiper',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    on: {
      slideChange: function (swiper) {
        if (swiper.isEnd) {
          nextButton.classList.add('swiper-button-disabled');
          nextButton.setAttribute('disabled', true);
        } else {
          nextButton.classList.remove('swiper-button-disabled');
          nextButton.removeAttribute('disabled');
        }
        if (swiper.isBeginning) {
          prevButton.classList.add('swiper-button-disabled');
          prevButton.setAttribute('disabled', true);
        } else {
          prevButton.classList.remove('swiper-button-disabled');
          prevButton.removeAttribute('disabled');
        }
      },
    },
  });
};
