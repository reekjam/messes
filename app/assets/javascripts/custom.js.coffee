jQuery ->
  $(".year-media").hide();
  $(document).on "click", ".year-break", () ->
    $(this).nextAll(".year-media:first").slideToggle "fast", ->