let swiper = new Swiper('.card-content', {
    loop: true,
    spaceBetween:32, 
    grabCursor:true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

document.addEventListener('DOMContentLoaded', () => {
    let navEl = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 56) {
            navEl.classList.add('scrolled');
        } else {
            navEl.classList.remove('scrolled');
        }
    });
});

