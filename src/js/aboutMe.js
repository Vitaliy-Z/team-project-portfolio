import Swiper from 'swiper';
import Accordion from "accordion-js";

new Accordion(".about-me-list", {
    elementClass: 'about-me-item',
    triggerClass: 'about-me-list-button',
    panelClass: 'about-me-item-l',
    showMultiple: true,
});


const swiper = document.querySelector('.about-me-list-button');