$(document).ready(function() {
  $(".new-tweet").hide();
  $(".btn-compose").click(function() {
    $(".new-tweet").slideToggle();
    $("form textarea").focus();
  });
});
