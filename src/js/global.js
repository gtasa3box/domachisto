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

//number input flag 
const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
      initialCountry: "ru",
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
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