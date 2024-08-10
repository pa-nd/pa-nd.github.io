var u_negative = true;
// Določeno v nadaljevanju (random)
var u_longitude;
var u_latitude;
var u_azimuth;

var u_scale = 1.2;
var constellations = false;
var allowed_r = 6;

const pokazi_text = "Pokaži rešitev";
const skrij_text = "Skrij rešitev";

function g(id) {
    return document.getElementById(id);
};

//////// PRIDOBI OBJEKTE
const canvas = g("canv");
const ctx = canvas.getContext("2d");
const iframe = g("ifr");
const btn_resitev = g("btn_resitev");
const navodilaP = g("navodilaP");
const showConstellations_btn = g("showConstellations");
const nakljucneMagnitude_btn = g("nakljucneMagnitude");
var glasbeneZeljeDiv = g("glasbeneZeljeDiv");

// Seznam želenih magnitud
  // default magnitude
glasbene = [0.0, 1.5, 3.0];

var zvezda_arr = [];

var number_guesses = 0;

/////////// INICIALIZIRAJ, ČE OBSTAJAJO GLASBENE IZ PREJŠNJEGA OBISKA
if (sessionStorage.getItem("glasbene") != null) {
  data = sessionStorage.getItem("glasbene");
  glasbene = JSON.parse(data.slice(1));
  if (data[0] == "1") {
    nakljucneMagnitude_btn.checked = true;
    nakljucneMagnitude(nakljucneMagnitude_btn);
    nakljucneInput.value = 3;

  } else {
    nakljucneMagnitude_btn.checked = false;
    reloadGlasbene();
  }
} else {
  reloadGlasbene();
}

function saveGlasbene_toSesStor() {
  if (nakljucneMagnitude_btn.checked) {
      sessionStorage.setItem("glasbene", "1" + JSON.stringify(glasbene));
  }
  else {
    sessionStorage.setItem("glasbene", "0" + JSON.stringify(glasbene));
  }
}

// Preračun magnitude v radij zvezde
function mag_to_r(mag) {
    return Math.E ** ((1.6 - mag) / 5.0) * 3 / 1.2 * u_scale;
}

// Ob kliku: označi pravilne zvezde
function checkStars(evt) {
  if (btn_resitev.innerHTML == pokazi_text) {
    var rect = canvas.getBoundingClientRect(),
        scaleX = canvas.width / rect.width,
        scaleY = canvas.height / rect.height;
    var x = (evt.clientX - rect.left) * scaleX;
    var y = (evt.clientY - rect.top) * scaleY;

    const audio_correct = new Audio("correct.wav");
    const audio_false = new Audio("false.wav");
    var something_found = false;
    for (const el of zvezda_arr) {
        var dist = Math.sqrt((x - el.x) ** 2 + (y - el.y) ** 2);
        if (dist <= allowed_r) {
            el.found = true;
            something_found = true;
        }
    }
    if (!something_found)
      audio_false.play();
    drawStars();

  number_guesses++;

  // preveri, če je našel vse
  var all_found = true;
  for (const el of zvezda_arr) {
    if (!(el.found))
      all_found = false;
  }
  if (all_found) {
    btn_resitev.innerHTML = skrij_text;
    btn_resitev.style.display = "none";
      var audio_end = new Audio("end.wav");
      audio_end.play();
      var modal = g("infoModal");
    	var span = document.getElementsByClassName("close")[0];
    	var celicaBes = "Čestitke! Našel si vse zvezde v " + number_guesses + " poskus";
      if (number_guesses == 1)
        celicaBes += "u!";
      else
        celicaBes += "ih!";
      g("modalInhalt").innerHTML = celicaBes;
    	modal.style.display = "block";
    	span.onclick = function() {
    	  modal.style.display = "none";
    	}
    	window.onclick = function(event) {
    	  if (event.target == modal) {
    	    modal.style.display = "none";
    	  }
    	}

  } else {
    if (something_found)
      audio_correct.play();
  }


}

}
canvas.addEventListener("click", checkStars);

function getURL() {
    return ("https://virtualsky.lco.global/embed/index.html?cardinalpoints=false&az=" + u_azimuth +
        "&longitude=" + u_longitude +
        "&latitude=" + u_latitude +
        "&gradient=false&projection=stereo&mouse=false&keyboard=false&scalestars=" + u_scale +
        "&negative=" + u_negative +
        "&constellations=" + constellations +
        "&clock=Jan%2001%202020%2001:00:00&showplanets=false&showplanetlabels=false&showdate=false&showposition=false&magnitude=6");
}

function drawStar(x, y, r, color, lw=0, strokeColor="black") {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
  ctx.lineWidth = lw;
  ctx.strokeStyle = strokeColor;
  ctx.stroke();
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const el of zvezda_arr) {
        if (el.found) {
          drawStar(el.x, el.y, el.r, "#09e81c", el.r * 0.4, "black");
        }
        else {
          drawStar(el.x, el.y, el.r, "black");
        }
    }
}

// dodaj solution naknadno
function drawSolution() {
  for (const el of zvezda_arr) {
      if (!(el.found)) {
        drawStar(el.x, el.y, 8, "red", 2, "black");
      }
  }
}

function updateNavodila(len) {
    var appT;
    if (len == 1) {
        appT = "1 zvezda je odveč. Najdi jo!";
    } else if (len == 2) {
        appT = "2 zvezdi sta odveč. Najdi ju!";
    } else if (len == 3 || len == 4) {
        appT = "" + len + " zvezde so odveč. Najdi jih!";
    } else {
        appT = "" + len + " zvezd je odveč. Najdi jih!";
    }
    navodilaP.innerHTML = appT + " Nebo in odvečne zvezde se ob vsaki osvežitvi strani spremenijo.";
}
// Dodaj popolnoma nove zvezde, osveži
function restart() {
  number_guesses = 0;
  btn_resitev.style.display = "block";
  btn_resitev.innerHTML = pokazi_text;
  // generiraj zvezde
    zvezda_arr = [];
    u_azimuth = Math.random() * 360;
    u_longitude = Math.random() * 360 - 180;
    u_latitude = Math.random() * 180 - 90;
    iframe.setAttribute("src", getURL());

    iframe.onload = function() {
        var len = glasbene.length;
        if (nakljucneMagnitude_btn.checked) {
          const nakljucneInput = g("nakljucneInput");
          if (!nakljucneInput.value) {
            alert("Vnesi veljavno število odvečnih zvezd!");
          } else {
            len = nakljucneInput.value;
          }
        }
        for (var i = 0; i < len; i++) {
            var rand1 = Math.random() * (canvas.width - 16) + 8;
            var rand2 = Math.random() * (canvas.height - 16) + 8;
            var zvezda = {
                x: rand1,
                y: rand2,
                r: mag_to_r(glasbene[i]),
                found: false
            };
            if (nakljucneMagnitude_btn.checked) {
                const nakljucneInput = g("nakljucneInput");
                if (nakljucneInput.value) {
                  zvezda.r = mag_to_r(Math.random() * 3.5 + 1.0);
                }
            }
            zvezda_arr.push(zvezda);
        }
        updateNavodila(len);
        // izriši
        drawStars();
        iframe.onload = 0;

        // Stalen link

        /*var thisUrl = window.location;
          sentUrl = thisUrl.origin + thisUrl.pathname + "?perm=true&lat=" + u_latitude +
          "&lon=" + u_longitude +
          "&az=" + u_azimuth +
          "&zvezde=" + JSON.stringify(zvezda_arr);

          g("permLink").href = sentUrl;
        */
    };
};

function showSolution() {
  drawStars();
    if (btn_resitev.innerHTML == skrij_text) {
        btn_resitev.innerHTML = pokazi_text;
    } else {
        drawSolution();
        btn_resitev.innerHTML = skrij_text;
    }
};

function showConstellations() {
    constellations = showConstellations_btn.checked;
    iframe.setAttribute("src", getURL());
    iframe.onload = function() {
        drawStars();
        iframe.onload = 0;
    }
}

function reloadGlasbene() {
    glasbeneZeljeDiv.innerHTML = "<p>Vnesi želene magnitude odvečnih zvezd:</p>";
    for (const el of glasbene) {
        glasbeneZeljeDiv.innerHTML += '<input class="glasbeneInput" onchange="changeGlasbene()" type="number" min="-1.5" max="4.5" step="0.1" onkeyup="enforceMinMax(this)" value="' + el + '" />';
    }
    glasbeneZeljeDiv.innerHTML += '<br/><button id="dodajGlasbene" onclick="dodajGlasbene()">+</button><button id="odstraniGlasbene" onclick="odstraniGlasbene()">-</button>';
}

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


function enforceMinMax(el) {
    if (el.value != "") {
        if (parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min;
        }
        if (parseInt(el.value) > parseInt(el.max)) {
            el.value = el.max;
        }
    }
}

function nakljucneMagnitude(e) {
    if (e.checked) {
        glasbeneZeljeDiv.innerHTML = '<p>Število odvečnih zvezd: <input type="number" id="nakljucneInput" min="1" max="9" onkeyup="enforceMinMax(this)"/>' + '</p>';
    } else {
        reloadGlasbene();
    }
    saveGlasbene_toSesStor();
}
