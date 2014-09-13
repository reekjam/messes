$(document).ready(function(){
  var photo_url
  var caption
  var win_width = $(window).width()
  var container_top_margin = win_width * .5625
  $('.container').css('top', container_top_margin)
  var user_feed_height = $(window).height() - $('.top-bar').height()
  $('#user-feed').css('min-height', user_feed_height)
})
$(document).on('click', '.user-photo.th', function(){
  $('#overlay, #modal, #modal-caption, #close-btn').fadeIn('fast');
  photo_url = $(this).data('photo-url')
  caption = $(this).children('.caption').text()
  document.getElementById('modal-photo').innerHTML = "<img src=" + photo_url + " height='612' width='612'>"
  document.getElementById('modal-caption').innerHTML = caption
  $('#user-feed, #background-img').addClass('blurry')
})
$(document).on('click', '#close-btn', function(){
  $('#close-btn, #overlay, #modal, #modal-caption').fadeOut('fast');
  $('#user-feed, #background-img').removeClass('blurry');
})
$(window).resize(function(){
  var win_width = $(window).width()
  var container_top_margin = win_width * .5625
  var user_feed_height = $(window).height() - $('.top-bar').height()
  $('#user-feed').css('min-height', user_feed_height)
  $('.container').css('top', container_top_margin)
})