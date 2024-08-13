function g(id) {
    return document.getElementById(id);
}
var pravilni = 0;
var napacni = 0;
var pravilniList = [];
var napacniList = [];
var utezi = [];
var randomUtezi = [];
var najvecjiIndex;
var currentStar;
var planetarium;

function generirajZvezdo() {
    var randInd;
    do {
    var sum = 0;
    for (var i = 0; i <= najvecjiIndex; i++) {
        sum += utezi[i];
        randomUtezi[i] = sum;
    }
    var randomNum = Math.random() * randomUtezi[najvecjiIndex];
    for (var i = 0; i <= najvecjiIndex; i++) {
        if (randomUtezi[i] >= randomNum) {
            randInd = i;
            break;
        }
    }
} while (randInd == currentStar)
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
    g("naslov2").innerHTML = "Do " + mejnaMagnituda + ". magnitude (" + (najvecjiIndex + 1) + " zvezd)";

    pravilniList = new Array(najvecjiIndex+1).fill(0);
    napacniList = new Array(najvecjiIndex+1).fill(0);
    utezi = new Array(najvecjiIndex+1).fill(1);
    randomUtezi = new Array(najvecjiIndex+1).fill(0);
    generirajZvezdo();
}
function preveri() {
    const zvezda = zvezdeList[currentStar];
    const text = g("igraInput").value;
    if (text.toLowerCase() == zvezda.Name.toLowerCase()) {
        pravilni++;
        pravilniList[currentStar]++;
        g("pravilniP").innerHTML = "" + pravilni + " pravilnih";
        g("odgovor").style.color = "#79fc84";
    } else {
        napacni++;
        napacniList[currentStar]++;
        g("napacniP").innerHTML = "" + napacni + " napačnih";
        g("odgovor").style.color = "#fc7979";
    }
    utezi[currentStar] = 1 + 3 * (napacniList[currentStar]) / (napacniList[currentStar] + pravilniList[currentStar]);

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