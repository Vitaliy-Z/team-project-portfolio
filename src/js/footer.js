document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const successModal = document.getElementById('successModal');
  const modalClose = document.querySelector('.modal-close');
  const emailInput = contactForm.querySelector('input[name="email"]');
  const commentsInput = contactForm.querySelector('textarea[name="comments"]');

  // Handle form submission
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();

    const formData = {
      email: emailInput.value.trim(),
      comment: commentsInput.value.trim(),
    };
    console.log('Sending data:', formData);

    try {
      const response = await fetch('/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 201) {
        successModal.style.display = 'block';
        contactForm.reset();
      } else {
        showToast(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      showToast('Network error. Please check your connection and try again.');
    }
  });

  // Close modal handlers
  modalClose.addEventListener('click', () => {
    successModal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === successModal) {
      successModal.style.display = 'none';
    }
  });

  // Toast notification
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // Toast styles
  const style = document.createElement('style');
  style.textContent = `
    .toast {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #333;
      color: white;
      padding: 12px 24px;
      border-radius: 4px;
      z-index: 1000;
      animation: fadeIn 0.3s, fadeOut 0.3s 2.7s;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
});
