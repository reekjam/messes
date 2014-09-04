$(document).ready(function(){
  $('#select-month').on('ajax:success', function(){
    selected_month = $('select#month').val()
    $.ajax({
      type: 'GET',
      url: '/users/feed',
      dataType: 'json',
      data: { 'month': selected_month }
    })
  })
})