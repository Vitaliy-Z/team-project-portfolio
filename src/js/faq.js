import Accordion from "accordion-js";

const list = document.querySelector(".faq-list");
const btn = document.querySelectorAll(".faq-btn");


// document.addEventListener("DOMContentLoaded", () => {
  const accordion = new Accordion(list, {
    duration: 800,
    showMultiple: true,
    openOnInit: [],
  });
  
  btn.forEach(button => {
    button.addEventListener('click', (event) => {
        const item = event.target.closest('.faq-container');
        item.classList.toggle("is-active");
      accordion.toggle(item);
    });
  });
// });