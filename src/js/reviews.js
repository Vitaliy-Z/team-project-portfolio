import { fetchReviews } from './swagger-api';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviewsListEl = document.querySelector('.js-reviews-list');
const reviewsPaginationContsinerEl = document.querySelector('.js-reviews-pagination');

console.log(reviewsPaginationContsinerEl);


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
        reviewsPaginationContsinerEl.classList.add('visually-hidden');
    };

const createReviewCardTemplate = reviewer => {
const {
    author,
    avatar_url,
    review
    } = reviewer;

    return `
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <li class="review-item">
                <img class="reviewer-avatar" src=${avatar_url}    alt="reviewer-${author}">
                <h3 class="reviewer-name">${author}</h3>
                <p class="review-text">${review}</p>
                </li>
            </div>
        </div>

    <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>`;
}


const initializeSwiper = () => {
    new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1, // 1 відгук на екрані
        spaceBetween: 20, // Відстань між відгуками
    });
};