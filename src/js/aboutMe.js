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


new Swiper('.about-me-skills-list', {

    loop: true,
    oneWayMovement: true,
    edgeSwipeDetection: true,
    slideToClickedSlide: true,
    wrapperClass: 'about-me-skills-list-i',
    slideClass: 'about-me-skills-item-l',
    slidesPerView: 6,
    centeredSlides: false,
    loopedSlides: 6,
    navigation: {
        nextEl: '.about-me-skills-button',
    },
    cssMode: true,
});
