jQuery(document).ready(function() {
  jQuery('.fadeInLeft').addClass('hidden').viewportChecker({
   classToAdd: 'visible animated fadeInLeft',
   offset: 100
  });
});

jQuery(document).ready(function() {
  jQuery('.fadeInRight').addClass('hidden').viewportChecker({
   classToAdd: 'visible animated fadeInRight',
   offset: 100
  });
});

jQuery(document).ready(function() {
  jQuery('.fadeInDown').addClass('hidden').viewportChecker({
   classToAdd: 'visible animated fadeInDown',
   offset: 100
  });
});

jQuery(document).ready(function() {
  jQuery('.fadeInUp').addClass('hidden').viewportChecker({
   classToAdd: 'visible animated fadeInUp',
   offset: 100
  });
});

jQuery(document).ready(function() {
  jQuery('.zoomInUp').addClass('hidden').viewportChecker({
   classToAdd: 'visible animated zoomInUp',
   offset: 100
  });
});

jQuery(document).ready(function() {
  jQuery('.zoomInDown').addClass('hidden').viewportChecker({
   classToAdd: 'visible animated zoomInDown',
   offset: 100
  });
});

$( function() {
  $( "#datepicker" ).datepicker({
    // altField: 'toLocaleDateString()',
    dateFormat: 'dd/mm/yy',
    duration: 'slow',
    maxDate: '+6m',
    minDate: '0d',
    
  });

} );
