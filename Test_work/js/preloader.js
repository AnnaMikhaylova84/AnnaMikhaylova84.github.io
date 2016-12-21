$(window).on('load', function () {
	var $preloader = $('#circular'),
	$svg_anm   = $preloader.find('.circularG');
	$svg_anm.delay(3000).fadeOut(1500);   // animation
	$preloader.delay(2000).fadeOut(2500);  // fon
});
