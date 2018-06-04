/* add some jquery animation on hover of Scroll Down text*/
$(document).ready(function() {
  $('#hfont1').hover(function() {
    $(this).animate({
      "color": "#efbe5c",
      "font-size": "52pt"
    }, 1000);
  }, function() {
    $(this).animate({
      "color": "#e8a010",
      "font-size": "48pt"
    }, 1000);
  });
});
//remove fade-out class once loaded
$(document).ready(function() {
  $(function() {
    $('body').removeClass('fade-out');
  });
});
/* make my image moveable-draggable*/
$(function() {
  $(".profile-img").draggable();
});
