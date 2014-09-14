$(document).ready(function(){
  var photo_url
  var caption
  set_margin()
})
$(document).on('click', '.user-photo.th', function(){
  $('#overlay, #modal, #modal-caption, #close-btn').fadeIn('fast');
  photo_url = $(this).data('photo-url')
  caption = $(this).children('.caption').text()
  modal_size = $(window).width() * .42
  photo_size = $(window).width() * .40
  document.getElementById('modal').style.width = modal_size+'px'
  document.getElementById('modal').style.height = modal_size+'px'
  document.getElementById('modal-photo').innerHTML = "<img src=" + photo_url + " height=" + photo_size + " width=" + photo_size + ">"
  document.getElementById('modal-caption').innerHTML = caption
  $('#user-feed, #background-img').addClass('blurry')
})
$(document).on('click', '#close-btn', function(){
  $('#close-btn, #overlay, #modal, #modal-caption').fadeOut('fast');
  $('#user-feed, #background-img').removeClass('blurry');
})
$(window).resize(function(){
  set_margin()
})

function set_margin(){
  var win_width = $(window).width()
  var container_top_margin = win_width * .5625
  var user_feed_height = $(window).height() - $('.top-bar').height()
  $('.container').css('top', container_top_margin)
  $('#user-feed').css('min-height', user_feed_height)
  console.log(container_top_margin)
}