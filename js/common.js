$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//bxslider
	$('.slider_wrap ul').bxSlider({
		slideWidth: 373,
	    minSlides: 1,
	    maxSlides: 3,
	    slideMargin: 0
	});

	//menu
	$( ".menu_trigger" ).click(function() {
	  $( ".head_menu ul" ).slideToggle( "slow", function() {
	    // Animation complete.
	  });
	});

});