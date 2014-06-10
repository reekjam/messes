jQuery ->
  $(".year-media").hide();
  $(document).on "click", ".year-break", () ->
    $this = $(this)
    $(this).nextAll(".year-media:first").slideToggle "fast", ->