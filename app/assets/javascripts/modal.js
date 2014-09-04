$(document).ready(function(){
  var photo_url
  var caption
  $('.user-photo.th').click(function(){
    $('#overlay, #modal, #modal-caption, #close-btn').fadeIn('fast');
    photo_url = $(this).data('photo-url')
    caption = $(this).children('.caption').text()
    document.getElementById('modal-photo').innerHTML = "<img src=" + photo_url + " height='612' width='612'>"
    document.getElementById('modal-caption').innerHTML = caption
    $('#user-feed, #background-img').addClass('blurry')
  })
})
$(document).on('click', '#close-btn', function(){
  $('#close-btn, #overlay, #modal, #modal-caption').fadeOut('fast');
  $('#user-feed, #background-img').removeClass('blurry');
})
$(document).ready(function(){
  user_feed_height = $(window).height() - $('.top-bar').height()
  $('#user-feed').css('min-height', user_feed_height)
  console.log('auto_height:' + user_feed_height)
  container_top_margin = $('#background-img').height()
  $('.container').css('top', container_top_margin)
  console.log('container_top_margin:' + container_top_margin)
})
$(window).resize(function(){
  background_img_margin = $('#background-img').height()
  auto_height = $(window).height() - $('.top-bar').height()
  $('#user-feed').css('min-height', auto_height)
  $('.container').css('top', background_img_margin)
})