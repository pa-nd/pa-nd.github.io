function g(id) 
{
    return document.getElementById(id);
}
/*var result = [];
for (var i = 0; i < boundaries.length; i++)
{
    const element = boundaries[i];
    var nov = {};
    nov.ozvezdje = element[0];
    nov.polygon = [];
    for (var j = 0; j < (element.length-1.)/2.; j++)
    {
        nov.polygon.push({'RA': element[2 * j + 1], 'Dec': element[2*j + 2]});
    }
    result.push(nov);
}
console.log(result);
g("input").innerHTML = result;*/

/*function is_inside(point, constell_id) {
    let inside = false;
    polygon = boundaries[constell_id].polygon;
    let RA = point.RA;
    let Dec = point.Dec;
    for (let i = 0; i < polygon.length-1; i++) {
        let p1 = polygon[i];
        console.log(p1);
        let p2 = polygon[i+1];
        if (RA > Math.min(p1.RA, p2.RA))
        {
            if (RA <= Math.max(p1.RA, p2.RA))
            {
                const x_intersection = ((RA - p1.RA) * (p2.Dec - p1.Dec)) / (p2.RA - p1.RA) + p1.Dec;
 
                if (p1.Dec === p2.Dec || Dec <= x_intersection) {
                    alert("ven");
                    inside = !inside;
                }
            }
        }
    }
    return inside;
}*/
var planetarium;
var RA_rand;
var Dec_rand;


function potrdi() {
    g("potrdiBtn").style.display = "none";
    g("novoBtn").style.display = "block";
    let RA_inp = g("RA").value;
    const Dec = parseFloat(g("Dec").value);
    RA_inp = RA_inp.split(":");
    let hours = parseInt(RA_inp[0]);
    let mins = parseInt(RA_inp[1]);
    const RA = 15 * (hours + mins / 60);

    planetarium = S.virtualsky({
        'id': 'starmap1',
        'projection': 'gnomic',
        'ra': RA_rand,
        'dec': Dec_rand,
        'ground': false,
        'constellations': true,
        'fov': 35,
        'showposition': false,
        'showdate': false,
        'scalestars': 2,
        'showplanets': false,
        'showplanetlabels': false,
        'cardinalpoints': false,
        'gridlines_eq': true,
        'gridstep': 15
    });
    planetarium.addPointer({
		'ra': RA_rand,
		'dec': Dec_rand,
		'label': 'lokacija',
		'colour':'rgb(255,220,220)'
	});
    planetarium.addPointer({
		'ra': RA,
		'dec': Dec,
		'label': 'ugib',
		'colour':'rgb(255,220,220)'
	});
    let RA_hours = Math.floor(RA_rand / 15);
    let RA_mins = Math.floor((RA_rand/15 - RA_hours)*60);
    Delta_RA = (RA - RA_rand)/180 * Math.PI;
    Dec1 = Dec_rand/180 * Math.PI;
    Dec2 = Dec/180 * Math.PI;
    razdalja = 180/Math.PI * Math.acos(Math.sin(Dec1)*Math.sin(Dec2) + Math.cos(Dec1)*Math.cos(Dec2)*Math.cos(Delta_RA));
    g("odgovor").innerHTML = "RA: " + RA_hours + "<sup>h</sup>" + RA_mins + "<sup>m</sup>, Dec: " + Math.floor(Dec_rand*100)/100 + "°. (Δ = " + Math.round(razdalja*10)/10 + "°)";
    planetarium.panTo(RA, Dec, 1000);
}

function novo() {
    g("potrdiBtn").style.display = "block";
    g("novoBtn").style.display = "none";
    g("odgovor").innerHTML = "";
    RA_rand = 360 * Math.random();
    Dec_rand = (180 * Math.random() - 90);
    
    planetarium = S.virtualsky({
        'id': 'starmap1',
        'projection': 'gnomic',
        'ra': RA_rand,
        'dec': Dec_rand,
        'ground': false,
        'constellations': true,
        'fov': 35,
        'showposition': false,
        'showdate': false,
        'scalestars': 2,
        'showplanets': false,
        'showplanetlabels': false,
        'cardinalpoints': false
    });
    planetarium.addPointer({
		'ra': RA_rand,
		'dec': Dec_rand,
		'label': 'lokacija',
		'colour':'rgb(255,220,220)'
	});
}


S(document).ready(function() {
    novo();
});