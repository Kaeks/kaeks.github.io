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

var arr = [];
var volume = 0.2;
var seconds = 1;
var tone = 0;

var soundTop = 4000;
var soundBottom = 50;

function calcTone(hi, lo, percentage) {
  return Math.round(hi * (1 - percentage) + lo * percentage);
}

$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if (check == 0) {
    sayHeight();
    check = 1;
  }
  var he = scroll / maxScroll;
  var heh = 255 - Math.round(he * 255);
  console.log("he: " + he)
  console.log("heh: " + heh)
  document.getElementById("container").style.background = rgb(heh, heh, heh);
  tone = calcTone(soundTop, soundBottom, he);
  console.log("tone is: " + tone);
  for (var i = 0; i < context.sampleRate * seconds; i++) {
    arr[i] = sineWaveAt(i, tone) * volume
  }
  playSound(arr);
});

window.AudioContext = window.AudioContext || window.webkitAudioContext;

var context = new AudioContext();

function playSound(arr) {
  console.log("ding dong");
  var buf = new Float32Array(arr.length)
  for (var i = 0; i < arr.length; i++) buf[i] = arr[i]
  var buffer = context.createBuffer(1, buf.length, context.sampleRate)
  buffer.copyToChannel(buf, 0)
  var source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.start(0);
}

function sineWaveAt(sampleNumber, tone) {
  var sampleFreq = context.sampleRate / tone
  return Math.sin(sampleNumber / (sampleFreq / (Math.PI*2)))
}
