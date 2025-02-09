import { fetchReviews } from './swagger-api';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const reviewsListEl = document.querySelector('.js-reviews-list');
const reviewsNavContainerEl = document.querySelector('.js-reviews-nav');


const renderReviews = (reviews) => {
    if (!reviews.length) {
        showErrorMessage();
        return;
    }

    const markup = reviews.map(createReviewCardTemplate).join('');
    reviewsListEl.innerHTML = markup;


new Swiper('.reviews-swiper', {
  spaceBetween: 16,
  wrapperClass: 'reviews-swiper-wrapper',
  slideClass: 'reviews-swiper-slide',
  navigation: {
    nextEl: '.reviews-swiper-button-next',
    prevEl: '.reviews-swiper-button-prev',
  },

  slidesPerView: 4,
});
    
    // setTimeout(() => {
    //   initializeSwiper();
    // }, 0); 
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
        reviewsNavContainerEl.classList.add('visually-hidden');
    };

const createReviewCardTemplate = reviewer => {
const {
    author,
    avatar_url,
    review
    } = reviewer;

    return `
    <li class="reviews-swiper-slide review-item">
        <img class="reviewer-avatar" src=${avatar_url} alt="reviewer-${author}">
        <h3 class="reviewer-name">${author}</h3>
        <p class="review-text">${review}</p>
    </li>`;
}




// const initializeSwiper = () => {
    
// };