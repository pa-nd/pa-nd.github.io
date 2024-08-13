function g(id) {
    return document.getElementById(id);
}
var pravilni = 0;
var napacni = 0;
var najvecjiIndex;
var currentStar;
var planetarium;

function generirajZvezdo() {
    var randInd;
    do {
        randInd = Math.floor(Math.random() * najvecjiIndex);
    } while (currentStar == randInd);
    currentStar = randInd;
    g("imeZvezde").innerHTML = "" + zvezdeList[currentStar].Letter + " " + zvezdeList[currentStar].Constellation + ": ";
}


function zacniIgro() {

    const mejnaMagnituda = parseFloat(g("mejnaMagnituda").value);
    g("izborDiv").style.display = "none";
    g("igraDiv").style.display = "block";
    for (var i = 0; i < zvezdeList.length; i++) {
        if (parseFloat(zvezdeList[i].Magnitude) > mejnaMagnituda) {
            najvecjiIndex = i - 1;
            break;
        }
    }
    
    generirajZvezdo();
}
function preveri() {
    const zvezda = zvezdeList[currentStar];
    const text = g("igraInput").value;
    if (text.toLowerCase() == zvezda.Name.toLowerCase()) {
        pravilni++;
        g("pravilniP").innerHTML = "" + pravilni + " pravilnih";
        g("odgovor").style.color = "#79fc84";
    } else {
        napacni++;
        g("napacniP").innerHTML = "" + napacni + " napačnih";
        g("odgovor").style.color = "#fc7979";
    }
    var opisText = zvezda.Letter + " " + zvezda.Constellation + ": " + zvezda.HR_classification + ", " + zvezda.Magnitude + "<sup>mag</sup>";
    g("podrobenOpis").innerHTML = opisText;
    g("odgovor").innerHTML = zvezda.Name;
    g("igraInput").value = "";

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