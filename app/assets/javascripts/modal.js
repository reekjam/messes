$(document).ready(function(){
  var photo_url
  $('.user-photo.th').click(function(){
    $('#overlay').fadeIn('fast');
    $('#modal').fadeIn('fast');
    photo_url = $(this).data('photo-url')
    document.getElementById('modal-photo').innerHTML = "<img src=" + photo_url + " height='612' width='612'>"
  })
})
$(document).on('click', '#overlay', function(){
  $('#overlay').fadeOut('fast');
  $('#modal').fadeOut('fast');
})