'use strict'

  $("#icon-menu a").on("click", function() {
    let choice = $(this).data("tab");
    $(".tab-content").hide();
    $("#" + choice).fadeIn(200);
  });
