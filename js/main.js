// new Splide( '#thumbnail-carousel', {
//     fixedWidth : "14%",
//     fixedHeight: "auto",
//     gap        : 45,
//     rewind     : true,
//     pagination : false,
//     focus      : 'center',
//     // breakpoints: {
//     //   "600px": {
//     //     fixedWidth : 70,
//     //     fixedHeight: 64,
//     //   },
//     // },
//   } ).mount();

new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 5,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto', 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        // when window width is >= 992px (desktop)
        992: {
          slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
          },
          600:{
            slidesPerView: 1,
          }
      },
  });

  const swiper2 = new Swiper('.swiper-container2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto', 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar2',
    },
    breakpoints: {
        // when window width is >= 992px (desktop)
        992: {
          slidesPerView: 4,
        },
        768: {
            slidesPerView: 2,
          },
          600:{
            slidesPerView: 1,
          }
      },
  });



  document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.whatCard');
    const colors = ['#bbf0FF80', '#efeff6', '#f68C201A', '#e6faea', '#efeff6','#f68C201A'];

    cards.forEach((card, index) => {
        const colorIndex = index % colors.length;
        card.style.backgroundColor = colors[colorIndex];
    });
});