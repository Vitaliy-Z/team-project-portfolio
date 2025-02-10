document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const successModal = document.getElementById('successModal');
  const modalClose = document.querySelector('.modal-close');
  const emailContainer = document.querySelector('.email-container');
  const emailInput = document.querySelector('input[type="email"]');
  const validationMessage = emailContainer.querySelector('.validation-message');
  const sendButton = document.querySelector('.send-button');

  function validateEmail(email) {
    const re = /^\w+(.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return re.test(String(email).toLowerCase());
  }

  function resetValidation() {
    emailContainer.classList.remove('valid', 'invalid');
    validationMessage.textContent = '';
  }

  // Handle form submission
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    // The :active pseudo-class will handle the initial color change
    // We don't need to manually set it here

    // Small delay before showing modal to allow button animation to be visible
    setTimeout(() => {
      successModal.style.display = 'block';
      contactForm.reset();
      resetValidation();
    }, 200);
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

  emailInput.addEventListener('input', e => {
    const email = e.target.value;

    if (email === '') {
      resetValidation();
      return;
    }

    if (validateEmail(email)) {
      emailContainer.classList.remove('invalid');
      emailContainer.classList.add('valid');
      validationMessage.textContent = 'Success!';
    } else {
      emailContainer.classList.remove('valid');
      emailContainer.classList.add('invalid');
      validationMessage.textContent = 'Invalid email, try again';
    }
  });
});
