var u_neg = true;
var u_lon = 45.8;
var u_lat = 14.7;
var u_az = 0.0;
var u_scale = 1.2;
var shown = false;
var constellations = false;
var max_r = 8;

var glasbene = [];
if (sessionStorage.getItem("glasbene") == null) {
  glasbene = [0.0, 1.5, 3.0];
} else {
  glasbene = JSON.parse(sessionStorage.getItem("glasbene"));
}
function saveGlasbene_toSesStor() {
  sessionStorage.setItem("glasbene", JSON.stringify(glasbene));
}

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
const navodilaP = g("navodilaP");
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

  iframe.setAttribute("src", URL);
  iframe.onload = function(){
  ctx.fillStyle = "black";
  for (var i = 0; i < glasbene.length; i++) {
    ctx.beginPath();
    var rand1 = Math.floor(Math.random() * (canvas.width-16) + 8);
    var rand2 = Math.floor(Math.random() * (canvas.height-16) + 8);

    var zvezda = {x: rand1, y: rand2, r: mag_to_r(glasbene[i])};
    zvezda_arr.push(zvezda);
    ctx.arc(rand1, rand2, zvezda.r, 0, 2 * Math.PI);
    ctx.fill();
  }
  iframe.onload = 0;
  // Update navodila
  var appT;
  if (glasbene.length == 1) {
    appT = "1 zvezda je odveč. Najdi jo!";
  } else if (glasbene.length == 2) {
    appT = "2 zvezdi sta odveč. Najdi ju!";
  } else if (glasbene.length == 3 || glasbene.length == 4) {
    appT = "" + glasbene.length + " zvezde so odveč. Najdi jih!";
  } else {
    appT = "" + glasbene.length + " zvezd je odveč. Najdi jih!";
  }
  navodilaP.innerHTML = appT + " Nebo in odvečne zvezde se ob vsaki osvežitvi strani spremenijo.";
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
  alert("a");
  var URL =
  "https://virtualsky.lco.global/embed/index.html?cardinalpoints=false&az=" + u_az +
  "&longitude=" + u_lon +
  "&latitude=" + u_lat +
  "&gradient=false&projection=stereo&mouse=false&keyboard=false&scalestars=" + u_scale +
  "&negative=" + u_neg +
  "&constellations=" + constellations +
  "&showplanets=false&showplanetlabels=false&showdate=false&showposition=false&magnitude=6";
  iframe.setAttribute("src", URL);
}

function reloadGlasbene() {
  glasbeneZeljeDiv.innerHTML = "";
  for (const el of glasbene) {
    glasbeneZeljeDiv.innerHTML += '<input class="glasbeneInput" onchange="changeGlasbene()" type="number" min="-1.5" max="4.5" step="0.1" value="' + el + '" />';
  }
  glasbeneZeljeDiv.innerHTML += '<br/><button id="dodajGlasbene" onclick="dodajGlasbene()">+</button><button id="odstraniGlasbene" onclick="odstraniGlasbene()">-</button>';
}
reloadGlasbene();
function dodajGlasbene() {
  if (glasbene.length < 10) {
    glasbene.push(0.0);
    reloadGlasbene();
  }
  saveGlasbene_toSesStor();
}
function odstraniGlasbene() {
  if (glasbene.length > 1) {
    glasbene.pop();
    reloadGlasbene();
  }
  saveGlasbene_toSesStor();
}
function changeGlasbene() {
  glasbene = [];
  var arr = document.getElementsByClassName("glasbeneInput");
  for (const el of arr) {
    glasbene.push(parseFloat(el.value));
  }
  saveGlasbene_toSesStor();
}
function showConstellations() {
  constellations = showConstellations_btn.checked;
  showWithoutReload();
}
