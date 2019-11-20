$(window).on('scroll',function(){
	var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
  //$('.above-footer-section').html(scrollBottom);
    if(scrollBottom < 200){
    	$('.footer-contact-form').addClass('footer_sticky');
    }else{
    	$('.footer-contact-form').removeClass('footer_sticky'); 
    }
}).trigger('scroll');
