//stock-close
$('.close').on('click', function(){
    $($(this).data('target')).toggleClass('not-active')  
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
    