import { fetchReviews } from './swagger-api';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const reviewsListEl = document.querySelector('.js-reviews-list');
const reviewsPaginationContsinerEl = document.querySelector('.js-reviews-pagination');


const renderReviews = (reviews) => {
    if (!reviews.length) {
        showErrorMessage();
    }
    const markup = reviews.map(createReviewCardTemplate).join('');
    reviewsListEl.innerHTML = markup;
}


fetchReviews()
    .then(response => {
        console.log(response.data);
        renderReviews(response.data);
    })
    .catch(err => {
        console.log(err);
        showErrorMessage();
    });


const showErrorMessage = () => {
        reviewsListEl.innerHTML = `<p class="reviews-eroor-message">Not found</p>`;
        // reviewsPaginationContsinerEl.classList.add('visually-hidden');
    };

const createReviewCardTemplate = reviewer => {
const {
    author,
    avatar_url,
    review
    } = reviewer;

    return `
    <li class="swiper-slide review-item">
        <img class="reviewer-avatar" src=${avatar_url} alt="reviewer-${author}">
        <h3 class="reviewer-name">${author}</h3>
        <p class="review-text">${review}</p>
    </li>`;
}


const initializeSwiper = () => {
    new Swiper('.swiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-reviews-button-next',
        prevEl: '.swiper-reviews-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    //   slidesPerView: 1, // 1 відгук на екрані
      spaceBetween: 16, // Відстань між відгуками
    });
};