$(document).ready(function() {
    console.log("index ready");
  

//swiper



var swiper = new Swiper('.swiper-container', {
  loop : true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
  navigation: {
    nextEl: '.R_btn',
    prevEl: '.L_btn',
  }
});



  }); //total