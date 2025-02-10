document.addEventListener('DOMContentLoaded', function () {
    const coversSection = document.querySelector('#covers');

    if (!coversSection) return;

    const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                    coversSection.classList.toggle('in-viewport', entry.isIntersecting);
            });
        }, {threshold: 0.2}
    );
        observer.observe(coversSection);
});






















