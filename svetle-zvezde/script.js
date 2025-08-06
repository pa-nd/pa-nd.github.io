function g(id) {
    return document.getElementById(id);
}
var pravilni = 0;
var napacni = 0;
var pravilniList = [];
var napacniList = [];
var utezi = [];
var randomUtezi = [];
var najvecjiIndex = zvezdeList.length;
var spodnjiIndex = -1;
var currentStar;
var planetarium;
var uteziFactor = 3;
var maska = [];


// Dodaj celico
// vrsta, številka vrstice, zap. št. objekta, kodno ime
function dodajCelico(vrsta, i, n, ime) {
	var celica = vrsta.insertCell(i);
	celica.className = ime;
	celica.id = ime + "-" + n;
	//celica.setAttribute("onmouseover", "pokaziParam(\"" + ime + "-" +  n + "\")");
	//celica.setAttribute("onmouseout", "skrijParam(\"" + ime + "-" +  n + "\")");
	return celica;
}

function preglejZvezde() {
    podatkiZaTabelo = [];
    for (var i = 0; i < maska.length; i++) {
        podatkiZaTabelo[i] = {id: i, pravilni: pravilniList[i], napacni: napacniList[i]};
    }
    
    podatkiZaTabelo.sort((a, b) => {return (a.pravilni-a.napacni) - (b.pravilni-b.napacni)});
    g("igraDiv").style.display = "none";
    var tabela = g("tabela");
    g("tabelaDiv").style.display = "block";

	// Glava tabele
	var headString = "";
	
	headString += "<thead><tr><th id=\"ime-h\" style=\"width: 0.5ch;\">#</th>";
	headString += "<th title=\"Bayerjeva oznaka\" id=\"Bayer-h\" style=\"width:7ch;\"><span id=\"Bayer-z\" class=\"napisHeader\">Bayer</span></th>";
	headString += "<th title=\"Ime zvezde\" id=\"Name-h\" style=\"width:15ch;\"><span id=\"Name-z\" class=\"napisHeader\">Ime</span></th>";
	headString += "<th title=\"Magnituda\" id=\"Magnitude-h\" style=\"width:5ch;\"><span id=\"Magnitude-z\" class=\"napisHeader\">Mag.</span></th>";
	headString += "<th title=\"Pravilno/Napačno\" id=\"PN-h\" style=\"width:5ch;\"><span id=\"PN-z\" class=\"napisHeader\">P/N</span></th>";
	tabela.innerHTML = headString;

	// Za vsako vrstico, vnesi celice
	for (var j = 0; j < maska.length; j++) {
        var elem = podatkiZaTabelo[j]["id"];
        var maskedElem = maska[elem];
		var vrsta = tabela.insertRow(j+1);
		vrsta.id = "vrsta-" + maskedElem;
		var ime = dodajCelico(vrsta, 0, maskedElem, "ime");
		ime.innerHTML = "" + (maskedElem+1);
		//ime.setAttribute("onmouseover", "prikaziVrstico(" + elem + ")");
		//ime.setAttribute("onmouseout", "skrijVrstico(" + elem + ")");
		// Za vsak izbran parameter ...
        var celica = dodajCelico(vrsta, 1, maskedElem, "Bayer");
        celica.innerHTML = zvezdeList[maskedElem]["Letter"] + " " + zvezdeList[maskedElem]["Constellation"];
        var celica = dodajCelico(vrsta, 2, maskedElem, "Name");
        celica.innerHTML = zvezdeList[maskedElem]["Name"];
        var celica = dodajCelico(vrsta, 3, maskedElem, "Magnitude");
        celica.innerHTML = zvezdeList[maskedElem]["Magnitude"];
        var celica = dodajCelico(vrsta, 4, maskedElem, "P/N");
        
        celica.innerHTML = "<span id=\"pravilniP\">" + pravilniList[elem] + "</span>/<span id=\"napacniP\">" + napacniList[elem] + "</span>";
        if (pravilniList[elem] - napacniList[elem] < 0)
            celica.style.backgroundColor = "#750c0c";
        else if (pravilniList[elem] - napacniList[elem] > 0)
            celica.style.backgroundColor = "#0d750c";
    }
}
function nadaljuj() {
    g("igraDiv").style.display = "block";
    g("tabelaDiv").style.display = "none";
}

function generirajZvezdo() {
    var randInd;

    var sum = 0;
    randomUtezi[0] = 0;
    for (var i = 1; i < randomUtezi.length; i++) {
        sum += utezi[i-1];
        randomUtezi[i] = sum;
    }
    
    var randomNum = Math.random() * randomUtezi[randomUtezi.length-1];

    for (var i = 0; i <= maska.length; i++) {
        if (randomUtezi[i] >= randomNum) {
            randInd = i-1;
            break;
        }
    }

    currentStar = randInd;
    g("imeZvezde").innerHTML = "" + zvezdeList[maska[currentStar]].Letter + " " + zvezdeList[maska[currentStar]].Constellation + ": ";
}


function omejiMagnitude() {
    const spodnjaMagnituda = parseFloat(g("spodnjaMagnituda").value);
    const mejnaMagnituda = parseFloat(g("mejnaMagnituda").value);

    if (mejnaMagnituda > spodnjaMagnituda) {
        for (var i = 0; i < zvezdeList.length; i++) {
            if (spodnjiIndex == -1) {
                if (parseFloat(zvezdeList[i].Magnitude) >= spodnjaMagnituda) {
                    spodnjiIndex = i;
                }
            }
            if (parseFloat(zvezdeList[i].Magnitude) > mejnaMagnituda) {
                najvecjiIndex = i - 1;
                break;
            }
        }
        for (var i = spodnjiIndex; i <= najvecjiIndex; i++) {
            maska.push(i);
        }
        pravilniList = Array(maska.length).fill(0);
        napacniList = Array(maska.length).fill(0);
        utezi = Array(maska.length).fill(1);
        randomUtezi = Array(maska.length+1).fill(1);
            
        g("izborDiv").style.display = "none";
        g("igraDiv").style.display = "block";
        g("naslov2").innerHTML = "Med " + spodnjaMagnituda + ". in " + mejnaMagnituda + ". magnitudo (" + (maska.length) + " zvezd)";

        generirajZvezdo();
    } else {
        alert("Slabo izbrane meje!");
        location.reload();
    }
    
}

function poBayerju() {
    const index = parseInt(g("Bayer-s").value);
    const abeceda = ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ",
        "ν", "ξ", "ο", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω"];
    const mutiranaAbeceda = abeceda.slice(0, index+1);
    for (var i = 0; i < zvezdeList.length; i++) {
        var str = zvezdeList[i]["Letter"];
        for (var j = 0; j < str.length; j++) {
            if (mutiranaAbeceda.includes(str[j])) {
                maska.push(i);
                break;
            }
        }
    }
    pravilniList = Array(maska.length).fill(0);
    napacniList = Array(maska.length).fill(0);
    utezi = Array(maska.length).fill(1);
    randomUtezi = Array(maska.length+1).fill(1);
    
    g("izborDiv").style.display = "none";
    g("igraDiv").style.display = "block";
    g("naslov2").innerHTML = "Izbrane vse zvezde do " + mutiranaAbeceda[index] + " (" + (maska.length) + " zvezd)";

    generirajZvezdo();
}

function preveri() {
    const zvezda = zvezdeList[maska[currentStar]];
    const text = g("igraInput").value.trim().replace(/\s/g, '');
    if (text.toLowerCase() == zvezda.Name.toLowerCase().replace(/\s/g, '')) {
        pravilni++;
        pravilniList[currentStar]++;
        g("pravilniP").innerHTML = "" + pravilni + " pravilnih";
        g("odgovor").style.color = "#79fc84";
        utezi[currentStar] /= uteziFactor;
    } else {
        napacni++;
        napacniList[currentStar]++;
        g("napacniP").innerHTML = "" + napacni + " napačnih";
        g("odgovor").style.color = "#fc7979";
        utezi[currentStar] *= uteziFactor;
    }

    var opisText = zvezda.Letter + " " + zvezda.Constellation + ": " + zvezda.HR_classification + ", " + zvezda.Magnitude + "<sup>mag</sup>";
    g("podrobenOpis").innerHTML = opisText;
    g("odgovor").innerHTML = zvezda.Name;
    g("igraInput").value = "";

    // prvic
    if (napacni + pravilni == 1) {
    planetarium = S.virtualsky({
		'id': 'starmap1',
		'projection': 'gnomic',
		'ra': parseFloat(zvezda.RA),
		'dec': parseFloat(zvezda.Dec),
		'ground': false,
		'constellations': true,
		'fov': 25,
        'showposition': false,
        'showdate': false,
        'scalestars': 2,
        'showplanets': false,
        'showplanetlabels': false,
        'cardinalpoints': false
	});

    } else {
        planetarium.panTo(parseFloat(zvezda.RA),parseFloat(zvezda.Dec), 1000);
    }
    
	planetarium.addPointer({
		'ra':parseFloat(zvezda.RA),
		'dec':parseFloat(zvezda.Dec),
		'label':zvezda.Letter + " " + zvezda.Constellation,
		'colour':'rgb(255,220,220)'
	});
    generirajZvezdo();
}
function search(e) {
    e = e || window.event;
    if(e.keyCode == 13) {
        preveri();
    }
}
