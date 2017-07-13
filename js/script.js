$(document).ready(function() {

  $(window).scroll(function () {
    if ($(window).scrollTop() > 87) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 88) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});

var n = 0;
function testClr(elmnt) {
  var list = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
  ]
  elmnt.style.color = list[n];
  if (n == list.length-1) {
    n = 0;
  } else {
    n++;
  }
}