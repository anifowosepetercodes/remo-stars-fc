console.log("Slide JS loaded")
// GALLERY SLIDE
var swiper = new Swiper(".Swiper-five", {
            slidesPerView: 5,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
                1300: { slidesPerView: 5 }
            }
        });

     // MEET THE TEAM SLIDE
var swiper = new Swiper(".Swiper-four", {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                1300: { slidesPerView: 4 }
            }
        });

        // NEWS SLIDER
/* 
  window.onload = function () {
    let index = 0;
    const offset = 130; // 7rem + gap
    const visible = 4;
    const total = document.querySelectorAll('.othernews-one').length;
    const track = document.querySelector('.allother-news');

    if (!track) {
      console.error('Track element not found!');
      return;
    }

    setInterval(() => {
      index++;
      if (index > total - visible) index = 0;
      track.style.transform = `translateY(-${index * offset}px)`;
    }, 2000);
  } */

