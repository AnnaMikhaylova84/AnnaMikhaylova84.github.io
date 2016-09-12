(function($) {

	$.fn.carousel = function() {

		var left = $('.carousel-arrow-left');
		var right = $('.carousel-arrow-right');
		var elementList = $('.carousel-list');

		var pixelOffset = 335;
		var currentLeftValue = 0;

		var elementsCount = elementList.find('li').length;
		var minimumOffset = - ((elementsCount - 3) * pixelOffset);
		var maximumOffset = 0;

		left.on('click', function() {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += pixelOffset;
				elementList.animate({left: currentLeftValue + "px"}, 2000);
			}
		});

			right.on('click', function() {
			if (currentLeftValue != minimumOffset) {
				currentLeftValue -= pixelOffset;
				elementList.animate({left: currentLeftValue + "px"}, 2000);
			}
		});

		return this;
	}


})(jQuery);
