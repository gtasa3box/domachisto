//stock-close
$('.close').on('click', function(){
    $($(this).data('target')).toggleClass('not-active')  
});