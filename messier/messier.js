// Get Element by Id
function g(id) {
	return document.getElementById(id);
}

///// INICIALIZACIJA PODATKOV /////
// var data je definiran v data.js
var tabela = g("tabela");
var kontrolGumb = g("kontrolGumb");
var kontrolDiv = g("kontrolDiv");
var kontrolNavodila = g("kontrolNavodila");

// Parametri v tabeli, sp = specifikacije parametrov
var curLayout = [sp.iau, sp.l_ozvezdje];
// Parametri zunaj tabele
var remLayout = [sp.ozvezdje, sp.nav_mag, sp.tip, sp.tezavnost, sp.ngc];
// Vrstni red objektov
var vrstniRed = [];
for (var i = 0; i < 110; i++) {
	vrstniRed.push(i);
}
// Skriti način
var prikazanoVse = true;
// Prikazani kontrolerji
var kontrolerji = false;

////////////////////
///// FUNKCIJE /////
////////////////////

///// POSTAVITEV TABELE //////
// Dodaj celico
// vrsta, številka vrstice, zap. št. objekta, kodno ime
function dodajCelico(vrsta, i, n, ime) {
	var celica = vrsta.insertCell(i);
	celica.className = ime;
	celica.id = ime + "-" + n;
	celica.setAttribute("onmouseover", "pokaziParam(\"" + ime + "-" +  n + "\")");
	celica.setAttribute("onmouseout", "skrijParam(\"" + ime + "-" +  n + "\")");
	return celica;
}

// Funkcija, ki se sproži ob vsaki posodobitvi
function init() {
	kontrolerji = kontrolGumb.checked;

	// Nastavi kontrolerski div
	if (kontrolerji) {
		kontrolNavodila.style.display = "inline";
		kontrolDiv.style.display = "block";
	}
	else {
		kontrolNavodila.style.display = "none";
		kontrolDiv.style.display = "none";
	}

	kontrolDiv.innerHTML = "";
	// Prikaži gumbe v kontrolerskem divu
	for (el in remLayout) {
		// Primer: <button id="abc-r" onclick="kontrolerDodaj(this)"> tekst </button>
		kontrolDiv.innerHTML += "<button id=\"" + remLayout[el].koda + "-r\" onclick=\"kontrolerDodaj(this)\">" + remLayout[el].ime + "</button>";
	}

	// Glava tabele
	var headString = "";

	if (kontrolerji)
	{
		headString += `<style>
		.napisHeader:hover {
		  background-color: #bb3333;
		}

		.napisHeader:active {
		  background-color: #cc3333;
		}
	</style>`;
	}
	
	headString += "<thead><tr><th id=\"ime-h\" style=\"width: 2ch;\">#</th>";
	for (const elem in curLayout) {
		headString += "<th title=\"" + curLayout[elem].title + "\" id=\"" + curLayout[elem].koda + "-h\" style=\"width:" + curLayout[elem].sirina + "ch;\">";

		if (kontrolerji) {
			headString += "<i class=\"fa fa-arrow-left\" onclick=\"kontrolerLevo(this)\" id=\"" + curLayout[elem].koda + "-l\"></i><br />";
		}

		headString += "<span id=\"" + curLayout[elem].koda + "-z\" class=\"napisHeader\" onclick=\"kontrolerOdstrani(this)\">" + curLayout[elem].ime + "</span>";

		if (kontrolerji) {
			headString += "<br /><i class=\"fa fa-arrow-right\" onclick=\"kontrolerDesno(this)\" id=\"" + curLayout[elem].koda + "-d\"></i>";
		}

		headString += "</th>";
	}
	headString += "<th id=\"podrobnosti-h\">Info</th></tr></thead>";
	tabela.innerHTML = headString;


	// Za vsako vrstico, vnesi celice
	for (var j = 0; j < vrstniRed.length; j++) {
		var elem = vrstniRed[j];
		var vrsta = tabela.insertRow(j+1);
		vrsta.id = "vrsta-" + elem;

		var ime = dodajCelico(vrsta, 0, elem, "ime");
		ime.innerHTML = "M" + (elem+1);
		ime.setAttribute("onmouseover", "prikaziVrstico(" + elem + ")");
		ime.setAttribute("onmouseout", "skrijVrstico(" + elem + ")");
		// Za vsak izbran parameter ...
		for (const eleme in curLayout) {
			var celica = dodajCelico(vrsta, parseInt(eleme)+1, elem, curLayout[eleme].koda);
			// Če ni skriti način, prikaži vse vrednosti
			if (prikazanoVse) {
				celica.innerHTML = data[elem][curLayout[eleme].koda];
			}
		}
		var podrobnosti = dodajCelico(vrsta, curLayout.length + 1, elem, "podrobnosti");
		podrobnosti.className = "infoTd";
		podrobnosti.setAttribute("onclick", "info(" + elem + ")");
		podrobnosti.innerHTML = "<i class=\"podrobnosti fa fa-info-circle\"></i>";
	}
}

///// SKRITI NAČIN /////
// Prikaži/skrij vse
function prikaziVse() {
	prikazanoVse = !document.getElementById("prikaziVseC").checked;
	init();
}
// Ko je miška nad celico
function pokaziParam(id) {
	if (!prikazanoVse) {
		var celica = document.getElementById(id);
		var param = id.split("-")[0];
		if (param !== "ime" && param !== "podrobnosti") {
			celica.innerHTML = data[parseInt(id.split("-")[1])][param];
		}
	}
}
// Ko gre miška ven iz celice
function skrijParam(id) {
	if (!prikazanoVse) {
		var celica = document.getElementById(id);
		var param = id.split("-")[0];
		if (param !== "ime" && param !== "podrobnosti") {
			celica.innerHTML = "";
		}
	}
}
function prikaziVrstico(id) {
	if (!prikazanoVse) {
		var celice = tabela.rows[parseInt(vrstniRed.indexOf(id))+1].cells;
		for (elem in curLayout) {
			celice[1+parseInt(elem)].innerHTML = data[id][curLayout[elem].koda];
		}
	}
}
function skrijVrstico(id) {
	if (!prikazanoVse) {
		var celice = tabela.rows[parseInt(vrstniRed.indexOf(id))+1].cells;
		for (elem in curLayout) {
			celice[1+parseInt(elem)].innerHTML = "";
		}
	}
}

///// PRIKAZ PODROBNOSTI /////

// Ko kliknem na info ...
function info(n) {
	var modal = g("infoModal");

	var span = document.getElementsByClassName("close")[0];

	var celicaBes = "<img src=\"negativi/M" + (n+1) + "_Finder_Chart-1.jpg\" alt=\"Karta za M" + (n+1) + "\" class=\"finder_chart\" />";
	celicaBes += "<img src=\"skice/s" + (n+1) + ".jpg\" alt=\"Skica od M" + (n+1) + "\" class=\"skica\" />";
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
}

///// KONTROLERJI /////
// Dodaj parameter v tabelo
function kontrolerDodaj(element) {
	var id = element.id;
	var ime = id.slice(0, -2);
	var objekt = sp[ime];
	curLayout.unshift(objekt);
	var indeks = remLayout.indexOf(objekt);
	remLayout.splice(indeks, 1);
	init();
}
// Odstrani parameter iz tabele
function kontrolerOdstrani(element) {
	if (kontrolerji) {
		var id = element.id;
		var ime = id.slice(0, -2);
		var objekt = sp[ime];
		remLayout.unshift(objekt);
		var indeks = curLayout.indexOf(objekt);
		curLayout.splice(indeks, 1);
		init();
	}
}
// Premakni parameter levo
function kontrolerLevo(element) {
	var id = element.id;
	var ime = id.slice(0, -2);
	var objekt = sp[ime];
	var indeks = curLayout.indexOf(objekt);
	var temp = curLayout[indeks];
	if (indeks === 0) {
		curLayout[indeks] = curLayout[curLayout.length-1];
		curLayout[curLayout.length-1] = temp;
	}
	else {
		curLayout[indeks] = curLayout[indeks-1];
		curLayout[indeks-1] = temp;
	}
	init();
}
// Premakni parameter desno
function kontrolerDesno(element) {
	var id = element.id;
	var ime = id.slice(0, -2);
	var objekt = sp[ime];
	var indeks = curLayout.indexOf(objekt);
	var temp = curLayout[indeks];
	if (indeks == curLayout.length-1) {
		curLayout[indeks] = curLayout[0];
		curLayout[0] = temp;
	}
	else {
		curLayout[indeks] = curLayout[indeks+1];
		curLayout[indeks+1] = temp;
	}
	init();
}

///// VRSTNI RED /////
// Naključno razporedi
function nakljucno() {
	vrstniRed = vrstniRed.sort((a, b) => 0.5 - Math.random());
	init();
}
// Razvrsti od 1 do 110
function razvrsti() {
	for (var i = 0; i < 110; i++) {
		vrstniRed[i] = i;
	}
	init();
}
// Maratonski vrstni red
function vrstniRedMaraton() {
	vrstniRed = maratonVrstniRed;
	init();
}


/////////////////////////
///// ZAČNI PROGRAM /////
/////////////////////////
init();
