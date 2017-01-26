
$( function() {
  $( "#datepicker" ).datepicker({
    dateFormat: 'dd/mm/yy',
    duration: 'slow',
    maxDate: '+6m',
    minDate: '0d',

  });
  $("#datepicker" ).datepicker("setDate" , "0");


} );
