import Accordion from "accordion-js";

import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';


new Accordion(".about-me-list", {
    duration: 500,
    elementClass: 'about-me-item',
    triggerClass: 'about-me-list-button',
    panelClass: 'about-me-item-l',
    showMultiple: true,
    beforeOpen: (currElement) => {
        currElement.querySelector('.about-me-item-l').style.visibility = 'visible';
    },
    beforeClose: (currElement) => {
        currElement.querySelector('.about-me-item-l').style.visibility = 'hidden';
    }
});



new Swiper('.about-me-skills-list', {
    loop: true, 
    oneWayMovement: true,
    edgeSwipeDetection: true,
    slideToClickedSlide: true,
    wrapperClass: 'about-me-skills-list-i',
    slideClass: 'about-me-skills-item-l',
    modules: [Navigation, Mousewheel, Keyboard],
    centeredSlides: false,
    loopedSlides: 6,
    navigation: {
        nextEl: '.about-me-skills-button',
    },
    cssMode: true,
    mousewheel: {
    invert: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
    spaceBetween: 0,
    breakpoints: {
        320: {
            slidesPerView: 'auto', 
        },
        768: {
            slidesPerView: 'auto', 
            centeredSlides: true, 
        },
        1440: {
            slidesPerView: 6,
        },
    },
});