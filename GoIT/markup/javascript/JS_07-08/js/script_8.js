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


  $('input').hover(function() {
    $(this).siblings('span').css('opacity', '1');
    var hoverText = $(this).attr('title');
        // $(this).attr('title', '');

    $(this).siblings('span').text(hoverText);
  }, function() {
    $(this).siblings('span').css('opacity', '0');

  });

  $('.showButton').on('click', function() {
    var firstNameText = $('#firstname').attr('title');
    $('#firstname').siblings('span').text(firstNameText).css('opacity', '1');
    var lastNameText = $('#lastname').attr('title');
    $('#lastname').siblings('span').text(lastNameText).css('opacity', '1');
    var addressText = $('#address').attr('title');
    $('#address').siblings('span').text(addressText).css('opacity', '1');
  });



});
