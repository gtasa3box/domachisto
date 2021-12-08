//stock-close
$('.close').on('click', function(){
    $($(this).data('target')).toggleClass('not-active')  
});
//mob-nav
$('.burger').on('click', function(){
  $(this).addClass('not-active')
  $($(this).data('target')).toggleClass('not-active')  
});
$('.close-mobnav').on('click', function(){
  $('.burger').toggleClass('not-active')  
});
//drop-nav
$('#uslugi').on('click', function(){
    $($(this).data('target')).toggleClass('active')  
});
//parallax
$('.move-elem').paroller();

//tabs
$('.tabs__nav-elem').on('click', function(){
    $('.tabs__nav-elem').removeClass('active')
    $(this).addClass('active')
    $('.tabs__elem').removeClass('active')
    $($(this).data('target')).addClass('active')
});

//examples slider
$('.slider-examples').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

//employees slider
$('.slider-employees').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1099,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//questions-drop
$('.questions__smalltitle').on('click', function(){
  $(this).toggleClass('active') 
  $($(this).data('target')).stop(true, false).slideToggle()  
});

//btn-top 
$(document).ready(function() { 
  var button = $('.btn-top');	
  $(window).scroll (function () {
    if ($(this).scrollTop () > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
});	 
button.on('click', function(){
$('body, html').animate({
scrollTop: 0
}, 800);
return false;
});		 
});

//btn-contact
$('.btn-contact').on('click', function(){
  $(this).toggleClass('active') 
  $($(this).data('target')).stop(true, false).slideToggle() 
});

//nav active elem 
$(function() {
  $('.nav__drop-elem').removeClass('active') 
  $('.nav__elem').removeClass('active') 

  var loc = window.location.href;
  if(/kitchen-cleaning/.test(loc)) {
    $('#uluga1').addClass('active');
  }
  if(/cleaning-the-bathroom/.test(loc)) {
    $('#uluga2').addClass('active');
  }
  if(/cleaning-of-cottages/.test(loc)) {
    $('#uluga3').addClass('active');
  }
  if(/clear-out/.test(loc)) {
    $('#uluga4').addClass('active');
  }
  if(/dry-cleaning-of-upholstered-furniture/.test(loc)) {
    $('#uluga5').addClass('active');
  }
  if(/cleaning-a-neglected-apartment/.test(loc)) {
    $('#uluga6').addClass('active');
  }
  if(/apartment-cleaning-after-renovation/.test(loc)) {
    $('#uluga7').addClass('active');
  }
  if(/washing-windows/.test(loc)) {
    $('#uluga8').addClass('active');
  }
  //
  if(/prices/.test(loc)) {
    $('#price-nav').addClass('active');
  }
  if(/sales/.test(loc)) {
    $('#sales-nav').addClass('active');
  }
  if(/about/.test(loc)) {
    $('#about-nav').addClass('active');
  }
  if(/contacts/.test(loc)) {
    $('#contact-nav').addClass('active');
  }
});
//nav-active-end

//tabs-uslugi
$('.intro-uslugi__tab').on('click', function(){
  $('.intro-uslugi__tab').removeClass('active')
  $(this).addClass('active')
  $('table').addClass('non-active')
  $($(this).data('target')).removeClass('non-active')
});

//header-fixed-top

$(window).scroll(function(){
  $('.header').toggleClass('fixed-top', $(this).scrollTop() > 300);
});

//header-fixed-top-end

//number input flag ---last js!! (Помещать в конце всего js, если не отработает на странице, код js, который под ним - работать не будет)
const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
      initialCountry: "ru",
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

//popup
const phoneInputField4 = document.querySelector("#phone4");
    const phoneInput4 = window.intlTelInput(phoneInputField4, {
      initialCountry: "ru",
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
//popup-end

const phoneInputField2 = document.querySelector("#phone2");
    const phoneInput2 = window.intlTelInput(phoneInputField2, {
      initialCountry: "ru",
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const phoneInputField3 = document.querySelector("#phone3");
    const phoneInput3 = window.intlTelInput(phoneInputField3, {
      initialCountry: "ru",
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

