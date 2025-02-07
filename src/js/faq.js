import Accordion from "accordion-js";

const list = document.querySelector(".faq-list");
const btn = document.querySelectorAll(".faq-btn");

  const accordion = new Accordion(list, {
    duration: 400,
    showMultiple: true,
      openOnInit: [],
      elementClass: 'faq-container',
      triggerClass: 'faq-btn',
      panelClass: 'faq-container-text',
      activeClass: 'is-active',
      beforeOpen: (currentElement) => {
          currentElement.querySelector('.faq-container-text').style.visibility = 'visible';
      },
      beforeClose: (currentElement) => {
          currentElement.querySelector('.faq-container-text').style.visibility = 'hidden';
      }
  });
  
//   btn.forEach(button => {
//     button.addEventListener('click', (event) => {
//         const item = event.target.closest('.faq-container');
//         item.classList.toggle("is-active");
//       accordion.toggle(item);
//     });
//   });