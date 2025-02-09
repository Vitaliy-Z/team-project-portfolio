const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

document.querySelectorAll('.see-project').forEach(button => {
  button.addEventListener('click', function () {
    window.location.href = 'https://github.com/github';
  });
});
