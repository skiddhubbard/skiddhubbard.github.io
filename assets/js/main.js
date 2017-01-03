$(document).ready (function () {
  $(window).on("scroll touchmove", function () {
    $('header, nav li, nav ul, #logo, #logo-mobile').toggleClass('smaller', $(document).scrollTop() > 100);
  });
});
