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

function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}

$(document).ready(function() {

  $(window).scroll(function () {
    if ($(window).scrollTop() > 87) {
      $("#nav").addClass("nav_fixed");
    }
    if ($(window).scrollTop() < 88) {
      $("#nav").removeClass("nav_fixed");
    }
  });
});

var windowHeight;
var docHeight;
var maxScroll;

function sayHeight() {
  windowHeight = window.innerHeight;
  docHeight = document.body.scrollHeight;
  maxScroll = docHeight - windowHeight;
}

var check = 0;

$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if (check == 0) {
    sayHeight();
    check = 1;
  }
  var heh = 255 - Math.round((scroll / maxScroll) * 255);
  console.log("heh: " + heh)
  document.getElementById("container").style.background = rgb(heh, heh, heh);
});
