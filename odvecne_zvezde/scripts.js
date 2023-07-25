var u_neg = true;
var u_lon = 45.8;
var u_lat = 14.7;
var u_az = 0.0;
var u_scale = 1.2;
var shown = false;
var N = 3;
var constellations = false;
var max_r = 8;

var glasbene = [0.0, 1.5, 3.0];
function mag_to_r(mag) {
  return Math.E**((1.6 - mag)/5.0) * 3 / 1.2 * u_scale;
}

function g(id) {
  return document.getElementById(id);
};
const canvas = g("canv");
const ctx = canvas.getContext("2d");
const iframe = g("ifr");
const button = g("btn");
const showConstellations_btn = g("showConstellations");
var glasbeneZeljeDiv = g("glasbeneZeljeDiv");

var zvezda_arr = [];

function onReload() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  zvezda_arr = [];
  u_az = Math.random() * 360;
  u_lon = Math.random() * 360 - 180;
  u_lat = Math.random() * 180 - 90;
  var URL =
  "https://virtualsky.lco.global/embed/index.html?cardinalpoints=false&az=" + u_az +
  "&longitude=" + u_lon +
  "&latitude=" + u_lat +
  "&gradient=false&projection=stereo&mouse=false&keyboard=false&scalestars=" + u_scale +
  "&negative=" + u_neg +
  "&constellations=" + constellations +
  "&showplanets=false&showplanetlabels=false&showdate=false&showposition=false&magnitude=6";
  ifr.setAttribute("src", URL);
  iframe.onload = function(){
  ctx.fillStyle = "black";
  for (var i = 0; i < N; i++) {
    ctx.beginPath();
    var rand1 = Math.floor(Math.random() * (canvas.width-16) + 8);
    var rand2 = Math.floor(Math.random() * (canvas.height-16) + 8);

    var zvezda = {x: rand1, y: rand2, r: mag_to_r(glasbene[i])};
    zvezda_arr.push(zvezda);
    ctx.arc(rand1, rand2, zvezda.r, 0, 2 * Math.PI);
    ctx.fill();
  }
  shown = false;
};
};
function show() {
  if (shown) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    for (const el in zvezda_arr) {
      ctx.beginPath();
      ctx.arc(zvezda_arr[el].x, zvezda_arr[el].y, zvezda_arr[el].r, 0, 2 * Math.PI);
      ctx.fill();
    }
    shown = false;
    button.innerHTML = "Pokaži rešitev";
  }
  else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "lightgreen";
    for (const el in zvezda_arr) {
      ctx.beginPath();
      ctx.arc(zvezda_arr[el].x, zvezda_arr[el].y, max_r, 0, 2 * Math.PI);
      ctx.fill();
    }
    shown = true;
    button.innerHTML = "Skrij rešitev";
  }
};
function showWithoutReload() {
  var URL =
  "https://virtualsky.lco.global/embed/index.html?cardinalpoints=false&az=" + u_az +
  "&longitude=" + u_lon +
  "&latitude=" + u_lat +
  "&gradient=false&projection=stereo&mouse=false&keyboard=false&scalestars=" + u_scale +
  "&negative=" + u_neg +
  "&constellations=" + constellations +
  "&showplanets=false&showplanetlabels=false&showdate=false&showposition=false&magnitude=6";
  ifr.setAttribute("src", URL);
}

function reloadGlasbene() {
  glasbeneZeljeDiv.innerHTML = "";
  for (const el of glasbene) {
    glasbeneZeljeDiv.innerHTML += '<input class="glasbeneInput" onchange="changeGlasbene()" type="number" min="-1.5" max="4.5" step="0.1" value="' + el + '" />';
  }
  glasbeneZeljeDiv.innerHTML += '<button id="dodajGlasbene" onclick="dodajGlasbene()">+</button><button id="odstraniGlasbene" onclick="odstraniGlasbene()">-</button>';
}
reloadGlasbene();
function dodajGlasbene() {
  if (N < 10) {
    glasbene.push(0.0);
    N++;
    reloadGlasbene();
  }
}
function odstraniGlasbene() {
  if (N > 1) {
    glasbene.pop();
    N--;
    reloadGlasbene();
  }
}
function changeGlasbene() {
  glasbene = [];
  var arr = document.getElementsByClassName("glasbeneInput");
  for (const el of arr) {
    glasbene.push(parseInt(el.value));
  }
  console.log(glasbene);
}
function showConstellations() {
  constellations = showConstellations_btn.checked;
  showWithoutReload();
}
