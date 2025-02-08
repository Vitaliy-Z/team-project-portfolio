document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const successModal = document.getElementById('successModal');
  const modalClose = document.querySelector('.modal-close');

  // Handle form submission
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    successModal.style.display = 'block';
    contactForm.reset();
  });

  // Close modal when clicking the close button
  modalClose.addEventListener('click', () => {
    successModal.style.display = 'none';
  });

  // Close modal when clicking outside the modal content
  window.addEventListener('click', e => {
    if (e.target === successModal) {
      successModal.style.display = 'none';
    }
  });
});
