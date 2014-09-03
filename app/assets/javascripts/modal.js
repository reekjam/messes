$(document).ready(function(){
  var photo_url
  $('.user-photo.th').click(function(){
    $('#overlay').fadeIn('fast');
    $('#modal').fadeIn('fast');
    $('#close-btn').fadeIn('fast');
    photo_url = $(this).data('photo-url')
    document.getElementById('modal-photo').innerHTML = "<img src=" + photo_url + " height='612' width='612'>"
  })
})
$(document).on('click', '#close-btn', function(){
  $(this).fadeOut('fast');
  $('#overlay').fadeOut('fast');
  $('#modal').fadeOut('fast');
})
$(document).ready(function(){
  auto_height = $(window).height() - $('.top-bar').height()
  $('#user-feed').css('min-height', auto_height)
})
$(window).resize(function(){
  auto_height = $(window).height() - $('.top-bar').height()
  $('#user-feed').css('min-height', auto_height)
})