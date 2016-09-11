$(function() {

  $('.tab li').on('click', function(event) {
    if ($(this).hasClass('active')) {
      return false;
    }
    if ($('.tab li').hasClass('active')) {
      $('.tab li').removeClass('active');
    }
    $(this).toggleClass('active');
    var number = $(this).index();
    var numberOfTab = '.tabText' + number;
    $('.tabText p').hide();
    $(numberOfTab).show();
  });


  $("input[name='firstName']").on('mouseover', function() {
    $(".showField1").show();
    // $(".showField1").animate({
		// 	opasity: 1
		// }, 1000, function() {
		// 	$(".showField1").show();
		// });

  });
  $("input[name='firstName']").on('mouseleave', function() {
    $('.showField1').hide();
  });
  $("input[name='lastName']").on('mouseover', function() {
    $('.showField2').show();
  });
  $("input[name='lastName']").on('mouseleave', function() {
    $('.showField2').hide();
  });
  $("input[name='address']").on('mouseover', function() {
    $('.showField3').show();
  });
  $("input[name='address']").on('mouseleave', function() {
    $('.showField3').hide();
  });

  $('.showButton').on('click', function() {
    $('.show').show();
  });

});
