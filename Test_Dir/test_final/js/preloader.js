$(window).on('load', function () {
	var $preloader = $('#cssload-pgloading'),
	$svg_anm   = $preloader.find('.cssload-bokeh');
	$svg_anm.delay(3000).fadeOut(1500);
	$preloader.delay(2000).fadeOut(2500);
});
