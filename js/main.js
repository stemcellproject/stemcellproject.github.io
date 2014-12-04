$(document).ready(function() {
	
  $('.timeline-event').on('click', function(){
    $('#modal-1').find('.img').html("");

    $('#modal-1').find('h3').text($(this).data('year'));
    $('#modal-1').find('p').text($(this).data('text'));

    if ($(this).data('img')){
       $('#modal-1').find('.img').html('<img src="img/'+$(this).data('img')+'"/>');

      if ($(this).data('img') == 'marrow.png'){
        $('#modal-1').find('.img').css({'-webkit-transform':'rotate(45deg)'});
      }

      else {
        $('#modal-1').find('.img').css({'-webkit-transform':'rotate(0deg)'});
      }
    }
  });

});