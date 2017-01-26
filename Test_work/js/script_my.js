// jQuery(window).resize(function() {
//     console.log('width_my', jQuery(window).width());
//    	if (jQuery(window).width() > 960) document.write ('<link rel="stylesheet" href="css/animate.css">');
// })

// jQuery(document).ready(function() {
//   jQuery('.fadeInLeft').addClass('hidden').viewportChecker({
//    classToAdd: 'visible animated fadeInLeft',
//    offset: 100
//   });
// });
//
// jQuery(document).ready(function() {
//   jQuery('.fadeInRight').addClass('hidden').viewportChecker({
//    classToAdd: 'visible animated fadeInRight',
//    offset: 100
//   });
// });
//
// jQuery(document).ready(function() {
//   jQuery('.fadeInDown').addClass('hidden').viewportChecker({
//    classToAdd: 'visible animated fadeInDown',
//    offset: 100
//   });
// });
//
// jQuery(document).ready(function() {
//   jQuery('.fadeInUp').addClass('hidden').viewportChecker({
//    classToAdd: 'visible animated fadeInUp',
//    offset: 100
//   });
// });
//
// jQuery(document).ready(function() {
//   jQuery('.zoomInUp').addClass('hidden').viewportChecker({
//    classToAdd: 'visible animated zoomInUp',
//    offset: 100
//   });
// });
//
// jQuery(document).ready(function() {
//   jQuery('.zoomInDown').addClass('hidden').viewportChecker({
//    classToAdd: 'visible animated zoomInDown',
//    offset: 100
//   });
// });



// -----------------------------

$( function() {
  $( "#datepicker" ).datepicker({
    dateFormat: 'dd/mm/yy',
    duration: 'slow',
    maxDate: '+6m',
    minDate: '0d',

  });
  $("#datepicker" ).datepicker("setDate" , "0");


} );
