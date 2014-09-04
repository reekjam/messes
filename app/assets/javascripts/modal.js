$(document).ready(function(){
  var photo_url
  var caption
  var background_img_margin = $('#background-img').height();
  console.log(background_img_margin)
  $('.container').css('top', background_img_margin)
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
  $('this, #overlay, #modal, #modal-caption').fadeOut('fast');
  $('#user-feed, #background-img').removeClass('blurry');
})
$(document).ready(function(){
  auto_height = $(window).height() - $('.top-bar').height()
  $('#user-feed').css('min-height', auto_height)
})
$(window).resize(function(){
  background_img_margin = $('#background-img').height()
  auto_height = $(window).height() - $('.top-bar').height()
  $('#user-feed').css('min-height', auto_height)
  $('.container').css('top', background_img_margin)
})