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

        
const button = document.querySelector('.see-project');
        
        button.addEventListener('click', function(event) {
            window.location.href = 'https://github.com/github'; 
        });

        window.addEventListener('click', function(event) {
            if (!button.contains(event.target)) {
                event.stopPropagation(); 
            }
        });

