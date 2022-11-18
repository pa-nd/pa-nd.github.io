var data = [
	{"iau":"Tau", "l_ozvezdje":"Taurus", "ozvezdje":"Bik"},
	{"iau":"Aqr", "l_ozvezdje":"Aquarius", "ozvezdje":"Vodnar"},
	{"iau":"CVn", "l_ozvezdje":"Canes Venatici", "ozvezdje":"Lovska psa"},
	{"iau":"Sco", "l_ozvezdje":"Scorpius", "ozvezdje":"Škorpijon"},
	{"iau":"Ser", "l_ozvezdje":"Serpens", "ozvezdje":"Kača"},
	{"iau":"Sco", "l_ozvezdje":"Scorpius", "ozvezdje":"Škorpijon"},
	{"iau":"Sco", "l_ozvezdje":"Scorpius", "ozvezdje":"Škorpijon"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Oph", "l_ozvezdje":"Ophiuchus", "ozvezdje":"Kačenosec"},
	{"iau":"Oph", "l_ozvezdje":"Ophiuchus", "ozvezdje":"Kačenosec"},
	{"iau":"Sct", "l_ozvezdje":"Scutum", "ozvezdje":"Ščit"},
	{"iau":"Oph", "l_ozvezdje":"Ophiuchus", "ozvezdje":"Kačenosec"},
	{"iau":"Her", "l_ozvezdje":"Hercules", "ozvezdje":"Herkul"},
	{"iau":"Oph", "l_ozvezdje":"Ophiuchus", "ozvezdje":"Kačenosec"},
	{"iau":"Peg", "l_ozvezdje":"Pegasus", "ozvezdje":"Pegaz"},
	{"iau":"Ser", "l_ozvezdje":"Serpens", "ozvezdje":"Kača"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Oph", "l_ozvezdje":"Ophiuchus", "ozvezdje":"Kačenosec"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Sct", "l_ozvezdje":"Scutum", "ozvezdje":"Ščit"},
	{"iau":"Vul", "l_ozvezdje":"Vulpecula", "ozvezdje":"Lisička"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Cyg", "l_ozvezdje":"Cygnus", "ozvezdje":"Labod"},
	{"iau":"Cap", "l_ozvezdje":"Capricornus", "ozvezdje":"Kozorog"},
	{"iau":"And", "l_ozvezdje":"Andromeda", "ozvezdje":"Andromeda"},
	{"iau":"And", "l_ozvezdje":"Andromeda", "ozvezdje":"Andromeda"},
	{"iau":"Tri", "l_ozvezdje":"Triangulum", "ozvezdje":"Trikotnik"},
	{"iau":"Per", "l_ozvezdje":"Perseus", "ozvezdje":"Perzej"},
	{"iau":"Gem", "l_ozvezdje":"Gemini", "ozvezdje":"Dvojčka"},
	{"iau":"Aur", "l_ozvezdje":"Auriga", "ozvezdje":"Voznik"},
	{"iau":"Aur", "l_ozvezdje":"Auriga", "ozvezdje":"Voznik"},
	{"iau":"Aur", "l_ozvezdje":"Auriga", "ozvezdje":"Voznik"},
	{"iau":"Cyg", "l_ozvezdje":"Cygnus", "ozvezdje":"Labod"},
	{"iau":"UMa", "l_ozvezdje":"Ursa Major", "ozvezdje":"Veliki medved"},
	{"iau":"CMa", "l_ozvezdje":"Canis Major", "ozvezdje":"Veliki pes"},
	{"iau":"Ori", "l_ozvezdje":"Orion", "ozvezdje":"Orion"},
	{"iau":"Ori", "l_ozvezdje":"Orion", "ozvezdje":"Orion"},
	{"iau":"Cnc", "l_ozvezdje":"Cancer", "ozvezdje":"Rak"},
	{"iau":"Tau", "l_ozvezdje":"Taurus", "ozvezdje":"Bik"},
	{"iau":"Pup", "l_ozvezdje":"Puppis", "ozvezdje":"Krma"},
	{"iau":"Pup", "l_ozvezdje":"Puppis", "ozvezdje":"Krma"},
	{"iau":"Hya", "l_ozvezdje":"Hydra", "ozvezdje":"Vodna kača"},
	{"iau":"Vir", "l_ozvezdje":"Virgo", "ozvezdje":"Devica"},
	{"iau":"Mon", "l_ozvezdje":"Monoceros", "ozvezdje":"Samorog"},
	{"iau":"CVn", "l_ozvezdje":"Canes Venatici", "ozvezdje":"Lovska psa"},
	{"iau":"Cas", "l_ozvezdje":"Cassiopeia", "ozvezdje":"Kasiopeja"},
	{"iau":"Com", "l_ozvezdje":"Coma Berenices", "ozvezdje":"Berenikini kodri"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Lyr", "l_ozvezdje":"Lyra", "ozvezdje":"Lira"},
	{"iau":"Lyr", "l_ozvezdje":"Lyra", "ozvezdje":"Lira"},
	{"iau":"Vir", "l_ozvezdje":"Virgo", "ozvezdje":"Devica"},
	{"iau":"Vir", "l_ozvezdje":"Virgo", "ozvezdje":"Devica"},
	{"iau":"Vir", "l_ozvezdje":"Virgo", "ozvezdje":"Devica"},
	{"iau":"Vir", "l_ozvezdje":"Virgo", "ozvezdje":"Devica"},
	{"iau":"Oph", "l_ozvezdje":"Ophiuchus", "ozvezdje":"Kačenosec"},
	{"iau":"CVn", "l_ozvezdje":"Canes Venatici", "ozvezdje":"Lovska psa"},
	{"iau":"Com", "l_ozvezdje":"Coma Berenices", "ozvezdje":"Berenikini kodri"},
	{"iau":"Leo", "l_ozvezdje":"Leo", "ozvezdje":"Lev"},
	{"iau":"Leo", "l_ozvezdje":"Leo", "ozvezdje":"Lev"},
	{"iau":"Cnc", "l_ozvezdje":"Cancer", "ozvezdje":"Rak"},
	{"iau":"Hya", "l_ozvezdje":"Hydra", "ozvezdje":"Vodna kača"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Sge", "l_ozvezdje":"Sagitta", "ozvezdje":"Puščica"},
	{"iau":"Aqr", "l_ozvezdje":"Aquarius", "ozvezdje":"Vodnar"},
	{"iau":"Aqr", "l_ozvezdje":"Aquarius", "ozvezdje":"Vodnar"},
	{"iau":"Psc", "l_ozvezdje":"Pisces", "ozvezdje":"Ribi"},
	{"iau":"Sgr", "l_ozvezdje":"Sagittarius", "ozvezdje":"Strelec"},
	{"iau":"Per", "l_ozvezdje":"Perseus", "ozvezdje":"Perzej"},
	{"iau":"Cet", "l_ozvezdje":"Cetus", "ozvezdje":"Kit"},
	{"iau":"Ori", "l_ozvezdje":"Orion", "ozvezdje":"Orion"},
	{"iau":"Lep", "l_ozvezdje":"Lepus", "ozvezdje":"Zajec"},
	{"iau":"Sco", "l_ozvezdje":"Scorpius", "ozvezdje":"Škorpijon"},
	{"iau":"UMa", "l_ozvezdje":"Ursa Major", "ozvezdje":"Veliki medved"},
	{"iau":"UMa", "l_ozvezdje":"Ursa Major", "ozvezdje":"Veliki medved"},
	{"iau":"Hya", "l_ozvezdje":"Hydra", "ozvezdje":"Vodna kača"},
	{"iau":"Vir", "l_ozvezdje":"Virgo", "ozvezdje":"Devica"},
	{"iau":"Com", "l_ozvezdje":"Coma Berenices", "ozvezdje":"Berenikini kodri"},
	{"iau":"Vir", "l_ozvezdje":"Virgo", "ozvezdje":"Devica"},
	{"iau":"Vir", "l_ozvezdje":"Virgo", "ozvezdje":"Devica"},
	{"iau":"Com", "l_ozvezdje":"Coma Berenices", "ozvezdje":"Berenikini kodri"},
	{"iau":"Vir", "l_ozvezdje":"Virgo", "ozvezdje":"Devica"},
	{"iau":"Vir", "l_ozvezdje":"Virgo", "ozvezdje":"Devica"},
	{"iau":"Com", "l_ozvezdje":"Coma Berenices", "ozvezdje":"Berenikini kodri"},
	{"iau":"Her", "l_ozvezdje":"Hercules", "ozvezdje":"Krma"},
	{"iau":"Pup", "l_ozvezdje":"Puppis", "ozvezdje":"Krma"},
	{"iau":"CVn", "l_ozvezdje":"Canes Venatici", "ozvezdje":"Lovska psa"},
	{"iau":"Leo", "l_ozvezdje":"Leo", "ozvezdje":"Lev"},
	{"iau":"Leo", "l_ozvezdje":"Leo", "ozvezdje":"Lev"},
	{"iau":"UMa", "l_ozvezdje":"Ursa Major", "ozvezdje":"Veliki medved"},
	{"iau":"Com", "l_ozvezdje":"Coma Berenices", "ozvezdje":"Berenikini kodri"},
	{"iau":"Com", "l_ozvezdje":"Coma Berenices", "ozvezdje":"Berenikini kodri"},
	{"iau":"Com", "l_ozvezdje":"Coma Berenices", "ozvezdje":"Berenikini kodri"},
	{"iau":"UMa", "l_ozvezdje":"Ursa Major", "ozvezdje":"Veliki medved"},
	{"iau":"Dra", "l_ozvezdje":"Draco", "ozvezdje":"Zmaj"},
	{"iau":"Cas", "l_ozvezdje":"Cassiopeia", "ozvezdje":"Kasiopeja"},
	{"iau":"Vir", "l_ozvezdje":"Virgo", "ozvezdje":"Devica"},
	{"iau":"Leo", "l_ozvezdje":"Leo", "ozvezdje":"Lev"},
	{"iau":"CVn", "l_ozvezdje":"Canes Venatici", "ozvezdje":"Lovska psa"},
	{"iau":"Oph", "l_ozvezdje":"Ophiuchus", "ozvezdje":"Kačenosec"},
	{"iau":"UMa", "l_ozvezdje":"Ursa Major", "ozvezdje":"Veliki medved"},
	{"iau":"UMa", "l_ozvezdje":"Ursa Major", "ozvezdje":"Veliki medved"},
	{"iau":"And", "l_ozvezdje":"Andromeda", "ozvezdje":"Andromeda"}];
var tabela = document.getElementById("tabela");
var kontrolerjiB = document.getElementById("kontrolerjiB");
var kontrolerjiDiv = document.getElementById("kontrolerjiDiv");
var sp = {
	"iau": {"koda": "iau", "ime": "IAU", "sirina": 4},
	"l_ozvezdje": {"koda": "l_ozvezdje", "ime": "L. ozvezdje", "sirina": 14},
	"ozvezdje": {"koda": "ozvezdje", "ime": "Ozvezdje", "sirina": 13}
};
var curLayout = [sp.iau, sp.l_ozvezdje];
var remLayout = [sp.ozvezdje];
var vrstniRed = [];
for (var i = 0; i < 110; i++) {
	vrstniRed.push(i);
}
var prikazanoVse = true;

var kontrolerji = false;

function dCel(vrsta, i, n, ime) {
	var celica = vrsta.insertCell(i);
	celica.className = ime;
	celica.id = ime + "-" + n;
	celica.setAttribute("onmouseover", "pokaziParam(\"" + ime + "-" +  n + "\")");
	celica.setAttribute("onmouseout", "skrijParam(\"" + ime + "-" +  n + "\")");
	return celica;
}

function init() {
	kontrolerji = kontrolerjiB.checked;

	// Nastavi kontrolerski div
	if (kontrolerji) {
		document.getElementById("navodilaKontrolerji").style.display = "inline";
	}
	else {
		document.getElementById("navodilaKontrolerji").style.display = "none";
	}
	if (kontrolerji) {
		kontrolerjiDiv.style.display = "block";
	}
	else {
		kontrolerjiDiv.style.display = "none";
	}
	kontrolerjiDiv.innerHTML = "";
	for (el in remLayout) {
		kontrolerjiDiv.innerHTML += "<button id=\"" + remLayout[el].koda + "-r\" onclick=\"kontrolerDodaj(this)\">" + remLayout[el].ime + "</button>";
	}

	var headString = "<thead><tr><th id=\"ime-h\" style=\"width: 2ch;\">#</th>";
	for (const elem in curLayout) {
		headString += "<th id=\"" + curLayout[elem].koda + "-h\" style=\"width:" + curLayout[elem].sirina + "ch;\">";
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
	for (var j = 0; j < 110; j++) {
		var elem = vrstniRed[j];
		var vrsta = tabela.insertRow(j+1);

		var ime = dCel(vrsta, 0, elem, "ime");
		ime.innerHTML = "M" + (elem+1);
		for (const eleme in curLayout) {
			var celica = dCel(vrsta, parseInt(eleme)+1, elem, curLayout[eleme].koda);
			if (prikazanoVse) {
				celica.innerHTML = data[elem][curLayout[eleme].koda];
			}
		}
		var podrobnosti = dCel(vrsta, curLayout.length + 1, elem, "podrobnosti");
		podrobnosti.className = "infoTd";
		podrobnosti.setAttribute("onclick", "info(" + elem + ")");
		podrobnosti.innerHTML = "<i class=\"podrobnosti fa fa-info-circle\"></i>";
	}

}
function pokaziParam(id) {
	if (!prikazanoVse) {
		var celica = document.getElementById(id);
		var param = id.split("-")[0];
		if (param !== "ime" && param !== "podrobnosti") {
			celica.innerHTML = data[parseInt(id.split("-")[1])][param];
		}
	}
}
function skrijParam(id) {
	if (!prikazanoVse) {
		var celica = document.getElementById(id);
		var param = id.split("-")[0];
		if (param !== "ime" && param !== "podrobnosti") {
			celica.innerHTML = "";
		}
	}

}
var odprtInfo = false;
var odprtI = -1;

function odpriN(n) {
	odprtI = n;
	var vrsta = tabela.insertRow(vrstniRed.indexOf(n)+2);
	var celica = vrsta.insertCell(0);
	celica.setAttribute("colspan", 100);
	celica.innerHTML="<img src=\"negativi/M" + (n+1) + "_Finder_Chart-1.jpg\" class=\"finder_chart\" />";

}

function info(n) {
	if (odprtInfo) {
		tabela.deleteRow(vrstniRed.indexOf(n)+2);
		if (odprtI === n) {
			odprtInfo = false;
			odprtI = -1;
		}
		else {
			odpriN(n);
		}
	}
	else {
		odprtInfo = true;
		odpriN(n);
	}
}
function kontrolerDodaj(element) {
	var id = element.id;
	var ime = id.slice(0, -2);
	var objekt = sp[ime];
	curLayout.unshift(objekt);
	var indeks = remLayout.indexOf(objekt);
	remLayout.splice(indeks, 1);
	init();
}
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
function nakljucno() {
	vrstniRed = vrstniRed.sort((a, b) => 0.5 - Math.random());
	init();
}
function razvrsti() {
	for (var i = 0; i < 110; i++) {
		vrstniRed[i] = i;
	}
	init();
}
function prikaziVse() {
	prikazanoVse = document.getElementById("prikaziVseC").checked;
	init();
}

init();
