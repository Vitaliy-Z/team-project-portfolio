import iziToast from 'izitoast';
import { fetchComment } from './swagger-api';

const footerFromEl = document.querySelector('.footer-contact-form');
const footerModalEl = document.querySelector('.modal');
const footerModalHeaderEl = document.querySelector('.footer-modal-header');
const footerModalParagrapgEl = document.querySelector(
  '.footer-modal-paragraph'
);

const validationMessage = footerFromEl.querySelector('.validation-message');
const modalBtnClose = footerModalEl.querySelector('.modal-close');

iziToast.settings({
  position: 'topCenter',
  timeout: 3500,
  transitionIn: 'bounceInDown',
});

footerFromEl.addEventListener('submit', onSubmit);
footerModalEl.addEventListener(
  'click',
  evt => evt.target === evt.currentTarget && toggleModal()
);
document.addEventListener('keydown', evt => {
  if (
    evt.code === 'Escape' &&
    !footerModalEl.classList.contains('visually-hidden')
  )
    toggleModal();
});
modalBtnClose.addEventListener('click', () => toggleModal());
footerFromEl.elements.email.addEventListener('input', onValidation);

async function onSubmit(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const comment = e.currentTarget.elements.comment.value;

  const res = await fetchComment({ email, comment });

  if (res.status !== 201) {
    iziToast.error({
      message: 'Sorry, something happened correct the data and try again',
    });
    return;
  }

  footerFromEl.reset();

  addTextModal(res.data);
  toggleModal();
}

function onValidation({ currentTarget }) {
  const re = /^\w+(.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const isValid = re.test(String(currentTarget.value).toLowerCase());

  if (isValid) {
    currentTarget.classList.remove('invalid'),
      currentTarget.classList.add('valid');
    validationMessage.style.color = '#3CBC81';
    validationMessage.textContent = 'Success!';
  } else {
    currentTarget.classList.remove('valid'),
      currentTarget.classList.add('invalid');
    validationMessage.style.color = ' #E74A3B';
    validationMessage.textContent = 'Invalid email, try again';
  }
}
function toggleModal() {
  if (footerModalEl.classList.contains('visually-hidden')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  footerModalEl.classList.toggle('visually-hidden');
}
function addTextModal({ title, message }) {
  footerModalHeaderEl.textContent = title;
  footerModalParagrapgEl.textContent = message;
}
