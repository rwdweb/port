$(function(){

    // Banner Slide part
    $('.qoute_main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 800,
      fade: true,
      arrows: false,
      dots: true,
      // autoplay: true,
    });

    // Banner Slide part
    $('.brand_main').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      speed: 800,
      nextArrow: ".nexxt",
      prevArrow: ".preev"
    }); 

  $('.percent').percentageLoader({
    valElement: 'p',
    strokeWidth: 8,
    bgColor: '#fff',
    ringColor: '#ffe600',
    textColor: '#ffe600',
    fontSize: '40px',
    fontWeight: 'lighter'
  });

  // Counter Up Part

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.circlechart').circlechart(); // Initialization

  // Banner Slide part
    $('.banner_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: ".next",
        prevArrow: ".prev",
        speed: 800,
      }); 

      // MixitUp part  

      var mixitup = require('mixitup');


})