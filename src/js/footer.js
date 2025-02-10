import { fetchComment } from './swagger-api';

const footerFromEl = document.querySelector('.footer-contact-form');
const footerModalEl = document.querySelector('.modal');

footerFromEl.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const comment = e.currentTarget.elements.comment.value;

  console.log(email, comment);

  const res = await fetchComment({ email, comment });

  if (res.status !== 201) {
    console.error(res.data);
    return;
  }

  console.log('res:', res);
}

function toggleModal() {
  footerFromEl.classList.toggle('.visually-hidden');
}
