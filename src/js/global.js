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