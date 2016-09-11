$(function() {
    $('.jcarousel').jcarousel({
    });
    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });
    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
    $('.jcarousel').jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    });

    $('.jcarousel')
    .on('jcarousel:reload jcarousel:create', function () {
        var carousel = $(this),
            width = carousel.innerWidth();

        if (width >= 900) {
            width = width / 3;
        } else if (width >= 350) {
            width = width / 2;
        }

        carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
    })
    .jcarousel({
        wrap: 'circular'
    });

    $('select').niceSelect();

    $('input').iCheck({
      checkboxClass: 'icheckbox_polaris',
      radioClass: 'iradio_polaris',
      increaseArea: '-10%'
    });

    $('#test-check1').iCheck('destroy');

	});

	$(function() {
		$('.checkBox').mousedown(function() {
			changeCheck($(this));
		});

		$('.checkBox').each(function() {
			changeCheckStart($(this));
		});

		function changeCheck(el) {
			var input = el.find('input').eq(0);
				if(!input.attr('checked')) {
					el.css('background-position','0 -17px');
					input.attr('checked', true);
					} else {
							el.css('background-position','0 0');
							input.attr('checked', false);
						}
				return true;
		}

		function changeCheckStart(el)	{
			var input = el.find('input').eq(0);
				if(input.attr('checked')) {
					el.css('background-position','0 -17px');
				}
		return true;
		}
});

$(function() {
		$('nav ul li').hover(
        function() {
            $(this).find('ul:first').stop();
            $(this).find('ul:first').slideToggle();
        }
    );
});
