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
      /* Ferry's work */
      const scrollposition = window.scrollY;
      const blurElement = document.getElementById('transition-blur');
      const introSection = document.getElementById('intro');
      const introHeight = introSection.offsetHeight;

      /* Setting when the blur getting started */
      const blurStart = introHeight * 0.5; /* Set a blur when the scrolling reaches 50% */
      const blurEnd = introHeight * 0.9; /* Set a blur when the scrolling reaches almost end */

      if (scrollposition > blurStart && scrollposition < blurEnd) {
        /* Set a blur and opacity gradually */
        const blurAmount = (scrollposition - blurStart) / (blurEnd - blurStart);
        blurElement.style.opacity = blurAmount; // changing the blur gradually
        blurElement.style.filter = 'blur(${blurAmount * 10) / 100}px)'; // adding the blur gradually        
      } 
      
      else if (scrollposition >= blurEnd) {
        // after passing through intro section then remove the blur 
        blurElement.style.opacity = 0;
        blurElement.style.filter = 'blur(0px)';
      } 
      
      else {
        // before reaches the blur area, keep it hiding
        blurElement.style.opacity = 0;
        blurElement.style.filter = 'blur(0px)';
      }
    });
});