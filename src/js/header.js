(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu-modal]'),
    menuLinks: document.querySelectorAll('.menu-link'),
    headerBtn: document.querySelector('.header-btm'),
    mobMenuheaderBtn: document.querySelector('.order-btn'),
    footerForm: document.querySelector('#contactForm'),
  };

  const isMobile = () => window.innerWidth <= 767;

  function lockScroll() {
    document.body.style.overflow = 'hidden';
  }

  function unlockScroll() {
    document.body.style.overflow = 'auto';
  }

  refs.headerBtn.addEventListener('click', () => {
    if (isMobile()) {
      toggleModal();
      refs.footerForm.scrollIntoView();
    } else {
      refs.footerForm.scrollIntoView();
    }
  });

  refs.mobMenuheaderBtn.addEventListener('click', () => {
    if (isMobile()) {
      toggleModal();
      refs.footerForm.scrollIntoView();
    } else {
      refs.footerForm.scrollIntoView();
    }
  });

  refs.openModalBtn.addEventListener('click', () => {
    if (isMobile()) {
      toggleModal();
      lockScroll();  
    }
  });

  refs.closeModalBtn.addEventListener('click', () => {
    if (isMobile()) {
      toggleModal();
      unlockScroll(); 
    }
  });

  refs.menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement && isMobile()) {
        e.preventDefault();
        toggleModal();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        unlockScroll();  
      } else if (targetElement && !isMobile()) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();

const menuLinks = document.querySelectorAll('.menu-item');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
  });
});
