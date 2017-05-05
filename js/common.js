$(function() {

	var $nav = $('.promoblock-header__nav'),
			$hamburger = $('.hamburger');

	$hamburger.click(function(e) {
		$(this).toggleClass('is-active');
		$nav.stop(true, true).slideToggle(300);
	});
	
});



