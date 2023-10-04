$(function () {
  $('.bike__slider, .slider__items').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    speed: 2000,
    cssEase: 'linear',
  }),
    $('.price-slider__items').slick({
      arrows: false,
      dots: true,
      fade: true,
      speed: 1000,
      cssEase: 'linear',
    }),
    $('.menu, .bike__column, .form').on('click', 'a', function (event) {
      event.preventDefault()
      var id = $(this).attr('href'),
        top = $(id).offset().top
      $('body,html').animate({ scrollTop: top }, 1000)
    })
})

// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
