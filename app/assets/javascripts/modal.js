$(document).ready(function(){
  var photo_url
  $('.user-photo.th').click(function(){
    $('#overlay').show();
    $('.modal').show();
    photo_url = $(this).data('photo-url')
    console.log(photo_url)
  })
})
$(document).on('click', '#overlay', function(){
  $('#overlay').hide();
  $('.modal').hide();
})