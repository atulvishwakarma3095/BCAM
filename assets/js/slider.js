/**
   * Clients Slider
   */
  new Swiper('.hero-slider', {
    speed: 1000,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 20
      }
    }
  });