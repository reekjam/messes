$(document).ready(function(){
  $('.user-photo.th').click(function(){
    $('#overlay').show();
    $('.modal').show();
  })
})
$(document).on('click', '#overlay', function(){
  $('#overlay').hide();
  $('.modal').hide();
})