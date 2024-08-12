function g(id) {
    return document.getElementById(id);
}
var pravilni = 0;
var napacni = 0;
var najvecjiIndex;
var currentStar;

function generirajZvezdo() {
    currentStar = Math.floor(Math.random() * najvecjiIndex);
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
    } else {
        napacni++;
        g("napacniP").innerHTML = "" + napacni + " napačnih";
    }
    var opisText = zvezda.Letter + " " + zvezda.Constellation + ": " + zvezda.HR_classification + ", " + zvezda.Magnitude + "<sup>mag</sup>";
    g("podrobenOpis").innerHTML = opisText;
    g("odgovor").innerHTML = zvezda.Name;
    g("igraInput").value = "";
    generirajZvezdo();
}
function search(e) {
    e = e || window.event;
    if(e.keyCode == 13) {
        preveri();
    }
}