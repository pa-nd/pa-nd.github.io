var u_neg = true;
var u_lon = 45.8;
var u_lat = 14.7;
var u_az = 0.0;
var u_scale = 1.2;
var shown = false;

function g(id) {
  return document.getElementById(id);
};
const canvas = g("canv");
const ctx = canvas.getContext("2d");
const iframe = g("ifr");
const button = g("btn");

var zvezda_arr = [];

function onReload() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  u_az = Math.random() * 360;
  u_lon = Math.random() * 360 - 180;
  u_lat = Math.random() * 180 - 90;
  var URL =
  "https://virtualsky.lco.global/embed/index.html?cardinalpoints=false&az=" + u_az +
  "&longitude=" + u_lon +
  "&latitude=" + u_lat +
  "&gradient=false&projection=stereo&mouse=false&keyboard=false&scalestars=" + u_scale +
  "&negative=" + u_neg +
  "&showplanets=false&showplanetlabels=false&showdate=false&showposition=false&magnitude=6";
  ifr.setAttribute("src", URL);
  iframe.onload = function(){
  ctx.fillStyle = "black";
  for (var i = 0; i < 3; i++) {
    ctx.beginPath();
    var rand1 = Math.floor(Math.random() * 784 + 8);
    var rand2 = Math.floor(Math.random() * 484 + 8);
    var zvezda = {x: rand1, y: rand2, r: 3};
    zvezda_arr.push(zvezda);
    ctx.arc(rand1, rand2, 3, 0, 2 * Math.PI);
    ctx.fill();
  }
};
};
function show() {
  if (shown) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    for (var i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(zvezda_arr[i].x, zvezda_arr[i].y, zvezda_arr[i].r, 0, 2 * Math.PI);
      ctx.fill();
    }
    shown = false;
    button.innerHTML = "Pokaži rešitev";
  }
  else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "lightgreen";
    for (var i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(zvezda_arr[i].x, zvezda_arr[i].y, zvezda_arr[i].r, 0, 2 * Math.PI);
      ctx.fill();
    }
    shown = true;
    button.innerHTML = "Skrij rešitev";
  }
};
