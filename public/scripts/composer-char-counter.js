$(document).ready(function() {
  //   // --- our code goes here ---
  var textarea = document.forms.textarea;
  var counter = document.getElementsByClassName("counter");

  $(".new-tweet-textbox").on("input", function() {
    var remaining = 140 - $(this).val().length;

    $(".counter").text(remaining);
    if (remaining < 0) {
      $(".counter").addClass("turnRed");
    } else {
      $(".counter").removeClass("turnRed");
    }
    return remaining;
  });
});
