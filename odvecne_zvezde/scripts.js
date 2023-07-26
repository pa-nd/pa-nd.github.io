var u_neg = true;
var u_lon;
var u_lat;
var u_az;
var u_scale = 1.2;
var shown = false;
var constellations = false;
var max_r = 8;
var allowed_r = 6;
var glasbene = [];
var zvezda_arr = [];
var nakljucneMagnitude_bool = false;

/////////// INICIALIZIRAJ, ČE OBSTAJAJO GLASBENE IZ PREJŠNJEGA OBISKA
if (sessionStorage.getItem("glasbene") == null) {
    glasbene = [0.0, 1.5, 3.0];
} else {
    glasbene = JSON.parse(sessionStorage.getItem("glasbene"));
}


function saveGlasbene_toSesStor() {
    sessionStorage.setItem("glasbene", JSON.stringify(glasbene));
}

function mag_to_r(mag) {
    return Math.E ** ((1.6 - mag) / 5.0) * 3 / 1.2 * u_scale;
}

function g(id) {
    return document.getElementById(id);
};
//////// PRIDOBI OBJEKTE
const canvas = g("canv");
const ctx = canvas.getContext("2d");
const iframe = g("ifr");
const button = g("btn");
const navodilaP = g("navodilaP");
const showConstellations_btn = g("showConstellations");
var glasbeneZeljeDiv = g("glasbeneZeljeDiv");

// Ob kliku: označi pravilne zvezde
function draw(evt) {
    var rect = canvas.getBoundingClientRect(),
        scaleX = canvas.width / rect.width,
        scaleY = canvas.height / rect.height;
    var x = (evt.clientX - rect.left) * scaleX;
    var y = (evt.clientY - rect.top) * scaleY;

    for (const el of zvezda_arr) {
        var dist = Math.sqrt((x - el.x) ** 2 + (y - el.y) ** 2);
        if (dist <= allowed_r) {
            el.found = true;
        }
    }
    showWithoutReload();
}
canvas.addEventListener("click", draw);

function getURL() {
    return ("https://virtualsky.lco.global/embed/index.html?cardinalpoints=false&az=" + u_az +
        "&longitude=" + u_lon +
        "&latitude=" + u_lat +
        "&gradient=false&projection=stereo&mouse=false&keyboard=false&scalestars=" + u_scale +
        "&negative=" + u_neg +
        "&constellations=" + constellations +
        "&showplanets=false&showplanetlabels=false&showdate=false&showposition=false&magnitude=6");
}

function drawStars(color="black", const_r=0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const el of zvezda_arr) {
        if (el.found) {
            ctx.fillStyle = "#09e81c";
        } else {
            ctx.fillStyle = color;
        }
        ctx.beginPath();
        if (const_r != 0) {
          ctx.arc(el.x, el.y, const_r, 0, 2 * Math.PI);
        } else {
          ctx.arc(el.x, el.y, el.r, 0, 2 * Math.PI);
        }
        ctx.fill();
        if (el.found) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = "black";
            ctx.stroke();
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
function onReload() {

    zvezda_arr = [];
    u_az = Math.random() * 360;
    u_lon = Math.random() * 360 - 180;
    u_lat = Math.random() * 180 - 90;
    iframe.setAttribute("src", getURL());

    iframe.onload = function() {
        var len = glasbene.length;
        if (nakljucneMagnitude_bool) {
          const nakljucneInput = g("nakljucneInput");
          if (!nakljucneInput.value) {
            alert("Vnesi veljavno število odvečnih zvezd!");
          } else {
            len = nakljucneInput.value;
          }
        }
        for (var i = 0; i < len; i++) {
            var rand1 = Math.floor(Math.random() * (canvas.width - 16) + 8);
            var rand2 = Math.floor(Math.random() * (canvas.height - 16) + 8);
            var zvezda = {
                x: rand1,
                y: rand2,
                r: mag_to_r(glasbene[i]),
                found: false
            };
            if (nakljucneMagnitude_bool) {
                const nakljucneInput = g("nakljucneInput");
                if (nakljucneInput.value) {
                  zvezda.r = mag_to_r(Math.random() * 6 - 1.5);
                }
            }
            zvezda_arr.push(zvezda);
        }
        drawStars();
        updateNavodila(len);
        iframe.onload = 0;

        // Stalen link

        /*var thisUrl = window.location;
          sentUrl = thisUrl.origin + thisUrl.pathname + "?perm=true&lat=" + u_lat +
          "&lon=" + u_lon +
          "&az=" + u_az +
          "&zvezde=" + JSON.stringify(zvezda_arr);

          g("permLink").href = sentUrl;
        */
        shown = false;
        button.innerHTML = "Pokaži rešitev";
    };
};

function show() {
    for (const el of zvezda_arr) {
        el.found = false;
    }
    if (shown) {
        drawStars();
        shown = false;
        button.innerHTML = "Pokaži rešitev";
    } else {
        drawStars("lightgreen", 8);
        shown = true;
        button.innerHTML = "Skrij rešitev";
    }
};

function showWithoutReload() {
    iframe.setAttribute("src", getURL());
    iframe.onload = function() {
        drawStars("black");
        iframe.onload = 0;
    }
    shown = false;
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

function showConstellations() {
    constellations = showConstellations_btn.checked;
    showWithoutReload();
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
        nakljucneMagnitude_bool = true;
        glasbeneZeljeDiv.innerHTML = '<p>Število odvečnih zvezd: <input type="number" id="nakljucneInput" min="1" max="9" onkeyup="enforceMinMax(this)"/>' + '</p>';
    } else {
        nakljucneMagnitude_bool = false;
        reloadGlasbene();
    }
}

reloadGlasbene();
