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
  





  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    slidesPerGroup: 1, // Move one slide at a time
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        "600px": {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        "768px": {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 30,
        },
        "1024px": {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
    }
});


