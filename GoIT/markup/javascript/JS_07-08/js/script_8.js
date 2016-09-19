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

// ---------------------------------

$('label').append('<span>'+$('input').attr('title')+'</span>');

$('input').hover(function () {


    $(this).siblings('span').css('opacity', '1');
    var titleText = $(this).attr('title');
    $(this).attr('title', '');
    $(this).children('input').text(titleText);

}, function() {
     $(this).siblings('span').css('opacity', '0');
     $(this).attr('title', $(this).text());
     $(this).children('input').remove();
});


 $('.showButton').on('click', function() {
   $('span').show().css('opacity', '1');
 });

});
