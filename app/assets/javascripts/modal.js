$(document).ready(function(){
  var photo_url
  var caption
  $('.user-photo.th').click(function(){
    $('#overlay').fadeIn('fast');
    $('#modal').fadeIn('fast');
    $('#close-btn').fadeIn('fast');
    photo_url = $(this).data('photo-url')
    document.getElementById('modal-photo').innerHTML = "<img src=" + photo_url + " height='612' width='612'>"
    caption = $(this).children('.caption').text()
    document.getElementById('modal-caption').innerHTML = caption
    $('#modal-caption').fadeIn('fast')
  })
})
$(document).on('click', '#close-btn', function(){
  $(this).fadeOut('fast');
  $('#overlay').fadeOut('fast');
  $('#modal').fadeOut('fast');
  $('#modal-caption').fadeOut('fast');
})
$(document).ready(function(){
  auto_height = $(window).height() - $('.top-bar').height()
  $('#user-feed').css('min-height', auto_height)
})
$(window).resize(function(){
  auto_height = $(window).height() - $('.top-bar').height()
  $('#user-feed').css('min-height', auto_height)
})