$(document).ready(function() {
	
  $('.timeline-event').on('click', function(){
    $('#modal-1').find('h3').text($(this).data('year'));
    $('#modal-1').find('p').text($(this).data('text'));
  });

});