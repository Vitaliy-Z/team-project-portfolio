import Swiper from 'swiper';
import Accordion from "accordion-js";

new Accordion(".about-me-list", {
    duration: 500,
    elementClass: 'about-me-item',
    triggerClass: 'about-me-list-button',
    panelClass: 'about-me-item-l',
    showMultiple: true,
    beforeOpen: (currElement) => {
        console.log(currElement);
        currElement.querySelector('.about-me-item-l').style.visibility = 'visible';
    },
    beforeClose: (currElement) => {
        currElement.querySelector('.about-me-item-l').style.visibility = 'hidden';
    }
});


