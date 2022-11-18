function g(id) {
	return document.getElementById(id);
}
function getJD(Y, M, D) {
	if (M === 1 || M === 2) {
		Y--;
		M += 12;
	}
	var A = Math.floor(Y / 100.0);
	var B = 2 - A + Math.floor(A / 4.0);
	return (Math.floor(365.25 * (Y + 4716)) + Math.floor(30.6001 * (M + 1)) + D + B - 1524.5);
}
function getSiderealTimeGreenwich(JD) {
	var T = (Math.floor(JD - 0.5) - 2451545.0) / 36525.0;
	var theta0 = (280.46061837 + 360.98564736629 * (JD - 2451545.0) + 0.000387933 * T * T - T * T * T / 38710000.0) % 360.0 / 180.0 * Math.PI;
	return theta0;
}
function getRAFromInput(id) {
	var v = g(id).value;
	var ra = parseInt(v[9] + v[10] + v[11]) / 1000.0 + parseInt(v[6] + v[7]);
	ra /= 60.0;
	ra += parseInt(v[3] + v[4]);
	ra /= 60.0;
	ra += parseInt(v[0] + v[1]);
	ra *= Math.PI / 12.0;
	return ra;
}
function getDecFromInput(rId) {
	if (parseInt(g(rId + "1").value) < 0.0) {
		var dec = -parseFloat(g(rId + "3").value) / 60.0;
		dec -= parseInt(g(rId + "2").value);
		dec /= 60.0;
		dec += parseInt(g(rId + "1").value);
		dec *= Math.PI / 180.0;
		return dec;
	}
	else {
		var dec = parseFloat(g(rId + "3").value) / 60.0;
		dec += parseInt(g(rId + "2").value);
		dec /= 60.0;
		dec += parseInt(g(rId + "1").value);
		dec *= Math.PI / 180.0;
		return dec;
	}
}
function getFormattedDelta(delta) {
	delta = delta / Math.PI * 180.0;
	output = "" + parseInt(delta) + "° ";
	delta = Math.abs((delta - parseInt(delta)) * 60.0);
	output += parseInt(delta) + "\' ";
	delta = Math.round((delta - parseInt(delta)) * 6000.0) / 100.0;
	output += delta + "\"";
	return output;
}
function getFormattedAlfa(alfa) {
	alfa = alfa / Math.PI * 12.0;
	output = "" + parseInt(alfa) + "h ";
	alfa = Math.abs((alfa - parseInt(alfa)) * 60.0);
	output += parseInt(alfa) + "m ";
	alfa = Math.round((alfa - parseInt(alfa)) * 6000.0) / 100.0;
	output += alfa + "s";
	return output;
}
	
function izracunajPolozaj() {
	// Pridobi podatke
	var alfa1 = getRAFromInput("ra1");
	var delta1 = getDecFromInput("dec1");
	var alfa2 = getRAFromInput("ra2");
	var delta2 = getDecFromInput("dec2");
	var d1 = g("d1").value;
	var d2 = g("d2").value;
	var phi = g("fi").value / 180.0 * Math.PI;
	
	var D1 = Math.acos(Math.sin(delta1)*Math.sin(delta2)+Math.cos(delta1)*Math.cos(delta2)*Math.cos(alfa2-alfa1))
	var D2 = D1 / d1 * d2
	var phi1 = 0.0
	if (delta1 < delta2) {
		phi1 = Math.PI - Math.asin(Math.sin(alfa2 - alfa1) * Math.cos(delta1) / Math.sin(D1))
	}
	else {
		phi1 = Math.asin(Math.sin(alfa2 - alfa1) * Math.cos(delta1) / Math.sin(D1))
	}
	var phi2 = phi - phi1
	var delta = Math.asin(Math.cos(D2)*Math.sin(delta2) + Math.sin(D2)*Math.cos(delta2)*Math.cos(phi2))
	var alfa = alfa2 + Math.asin(Math.sin(phi2) * Math.sin(D2) / Math.cos(delta))
	
	g("dec").innerHTML = getFormattedDelta(delta);
	g("ra").innerHTML = getFormattedAlfa(alfa);
}

function izracunajVisino() {
	var Ar = 6378140;
	var Br = 6356755;
	
	var fi1 = g("fi1").value / 180.0 * Math.PI;
	var lambda1 = g("lambda1").value / 180.0 * Math.PI;
	var h1 = g("h1").value;
	var fi2 = g("fi2").value / 180.0 * Math.PI;
	var lambda2 = g("lambda2").value / 180.0 * Math.PI;
	var h2 = g("h2").value;
	var delta1 = getDecFromInput("vdec1");
	var ra1 = getRAFromInput("vra1");
	var delta2 = getDecFromInput("vdec2");
	var ra2 = getRAFromInput("vra2");
	
	var JD = getJD(2022, 7, 28.8566435185);
	var theta0 = getSiderealTimeGreenwich(JD);
	
	function p(Fi, Lambda, H) {
		var u = Math.atan(Br / Ar * Math.tan(Fi));
		var ro_sin_fic = Br / Ar * Math.sin(u) + H / Ar * Math.sin(Fi)
        var ro_cos_fic = Math.cos(u) + H / Ar * Math.cos(Fi)
        var fic = Math.atan(ro_sin_fic / ro_cos_fic)
        var ro = ro_sin_fic / Math.sin(fic)
        var r_real = ro * Ar
        return [r_real * Math.cos(fic) * Math.cos(Lambda), r_real * Math.cos(fic) * Math.sin(Lambda), r_real * Math.sin(fic)];
	}
	var p1 = p(fi1, lambda1, h1);
	var p2 = p(fi2, lambda2, h2);
	
	var rH1 = (ra1 - theta0) % (2 * Math.PI);
	var rH2 = (ra2 - theta0) % (2 * Math.PI);
	
	function v(Delta, RH) {
		return [Math.cos(Delta) * Math.cos(RH), Math.cos(Delta) * Math.sin(RH), Math.sin(Delta)];
	}
	var v1 = v(delta1, rH1);
	var v2 = v(delta2, rH2);
	
	var vc = [v2[1]*v1[2]-v2[2]*v1[1],v2[2]*v1[0]-v2[0]*v1[2],v2[0]*v1[1]-v2[1]*v1[0]];
	
	A = [
	[v1[0], -v2[0], vc[0], p2[0]-p1[0]],
	[v1[1], -v2[1], vc[1], p2[1]-p1[1]],
	[v1[2], -v2[2], vc[2], p2[2]-p1[2]]
	];
	
	for (var i = 1; i < 3; i++) {
		for (var j = 3; j >= 0; j--) {
			A[i][j] -= A[0][j] / A[0][0] * A[i][0];
		}
	}
	for (var j = 3; j >= 1; j--) {
		A[2][j] -= A[1][j] / A[1][1] * A[2][1];
	}
	var t3 = A[2][3] / A[2][2];
	var t2 = (A[1][3] - t3 * A[1][2]) / A[1][1];
	var t1 = (A[0][3] - t3 * A[0][2] - t2 * A[0][1]) / A[0][0];
	var iss_v = [0.0, 0.0, 0.0];
	for (var i = 0; i < 3; i++) {
		iss_v[i] = (p1[i] + p2[i] + t1 * v1[i] + t2 * v2[i]) / 2.0;
	}
	var iss_size = Math.sqrt(iss_v[0]*iss_v[0] + iss_v[1]*iss_v[1] + iss_v[2]*iss_v[2]);
	var iss_fic = Math.asin(iss_v[2] / iss_size);
	var iss_lambda = Math.atan(iss_v[1] / iss_v[0]);
	var iss_rho = iss_size / Ar;
	var iss_fi = iss_fic;
	for (var i = 0; i < 10; i++) {
		iss_fi = Math.atan((Math.sin(iss_fic) - (Br*Br/(Ar*Ar)-1)/(iss_rho * Math.sqrt(1.0/(Math.tan(iss_fi)*Math.tan(iss_fi))+Br*Br/(Ar*Ar))))/Math.cos(iss_fic))
	}
	var u = Math.atan(Br / Ar * Math.tan(iss_fi));
	var H = Ar / Math.cos(iss_fi) * (iss_rho * Math.cos(iss_fic) - Math.cos(u));
	var err = t3 / 40000000.0 * 360.0;
	
	g("lambdaResult").innerHTML = "λ = " + Math.round(iss_lambda*180.0/Math.PI*1e4)/1e4 + "° ± " + Math.round(Math.abs(err/2.0)*1e5)/1e5 + "°";
	g("fiResult").innerHTML = "φ = " + Math.round(iss_fi*180.0/Math.PI*1e4)/1e4 + "° ± " + Math.round(Math.abs(err/2.0)*1e5)/1e5 + "°";
	g("RResult").innerHTML = "R = " + Math.round(iss_size / 1000.0*1e2)/1e2 + " km ± " + Math.round(Math.abs(t3/2000.0)*1e3)/1e3 + " km";
	g("HResult").innerHTML = "H = " + Math.round(H / 1000.0*1e2)/1e2 + " km ± " + Math.round(Math.abs(t3/2000.0)*1e3)/1e3 + " km";
}
function izbrisiVse() {
	g("ra1").value = 0;
	g("dec11").value = 0;
	g("dec12").value = 0;
	g("dec13").value = 0;
	g("ra2").value = 0;
	g("dec21").value = 0;
	g("dec22").value = 0;
	g("dec23").value = 0;
	g("d1").value = 0;
	g("d2").value = 0;
	g("fi").value = 0;
	g("lambda1").value = 0;
	g("fi1").value = 0;
	g("h1").value = 0;
	g("lambda2").value = 0;
	g("fi2").value = 0;
	g("h2").value = 0;
	g("vra1").value = 0;
	g("vdec11").value = 0;
	g("vdec12").value = 0;
	g("vdec13").value = 0;
	g("vra2").value = 0;
	g("vdec21").value = 0;
	g("vdec22").value = 0;
	g("vdec23").value = 0;
}
