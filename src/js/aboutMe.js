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
    loop: true, // Безкінечний цикл
    oneWayMovement: true,
    edgeSwipeDetection: true,
    slideToClickedSlide: true,
    wrapperClass: 'about-me-skills-list-i',
    slideClass: 'about-me-skills-item-l',
    centeredSlides: false,
    loopedSlides: 6,
    navigation: {
        nextEl: '.about-me-skills-button',
    },
    cssMode: true,

    // Видаляємо відступи між слайдами
    spaceBetween: 0,

    // Додаємо адаптивність без відступів і з рівномірним розташуванням
    breakpoints: {
        320: {
            slidesPerView: 'auto', // Автоматичний розрахунок
        },
        768: {
            slidesPerView: 'auto', // Автоматичний розрахунок для планшетів
            centeredSlides: true, // Центруємо активний слайд
        },
        1440: {
           // Автоматичний розрахунок для великих екранів
            slidesPerView: 6,
        },
    },
});