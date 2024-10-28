/* ================================================================================================================= */
/*                                                                                                                   */
/*                                                     Héraldix                                                      */
/*                                                                                                                   */
/* ================================================================================================================= */

function inverser(style) {
	if (style.transform == "scaleX(-1)") {style.transform = "";} else {style.transform = "scaleX(-1)";}
}

function déplacer(image, décalage, axe) {
	if (axe == "↓") {document.getElementById(image).style.marginTop = décalage + "px";}
	else if (axe == "←") {document.getElementById(image).style.marginRight = décalage + "px";}
	else if (axe == "→") {document.getElementById(image).style.marginLeft = décalage + "px";}
}

function paramètres() {
	if (document.getElementById("table-déplacer").style.display == "block") {
		document.getElementById("table-déplacer").style.display = "none";
	} else {
		document.getElementById("table-déplacer").style.display = "block";
	}
}

function générerArmoirie() {

	paramètresURL = new URLSearchParams(window.location.search);

	couronne = paramètresURL.get("couronne");
	heaume = paramètresURL.get("heaume");
	écu = paramètresURL.get("écu");
	portantDextre = paramètresURL.get("portant-dextre");
	portantSenestre = paramètresURL.get("portant-senestre");
	collier = paramètresURL.get("collier");
	manteau = paramètresURL.get("manteau");
	cri = paramètresURL.get("cri");
	devise = paramètresURL.get("devise");

	if (couronne) {document.getElementById("img-couronne").src = couronnes[couronne];}
	if (heaume) {
		document.getElementById("img-heaume").src = heaumes[heaume];
		if (heaume) {
			document.getElementById("img-couronne").style.width = "80px";
			document.getElementById("img-couronne").style.marginBottom = "-30px";
		}
	}
	if (écu) {document.getElementById("img-écu").src = écus[écu];}
	if (portantDextre) {document.getElementById("img-portant-dextre").src = portants[portantDextre];}
	if (portantSenestre) {document.getElementById("img-portant-senestre").src = portants[portantSenestre];}
	if (collier) {
		document.getElementById("img-collier").src = colliers[collier];
		document.getElementById("img-portant-dextre").style.marginRight = "-140px";
		document.getElementById("img-portant-senestre").style.marginLeft = "-140px";
	} else {
		document.getElementById("img-collier").style.display = "none";
		document.getElementById("img-portant-dextre").style.marginRight = "10px";
		document.getElementById("img-portant-senestre").style.marginLeft = "10px";
	}
	if (manteau) {
		document.getElementById("img-manteau").src = manteaux[manteau];
		if (couronne || heaume) {
			if (manteau != "Grand") {
				document.getElementById("img-couronne-manteau").src = couronnes[couronne];
			}
		}
	}
	if (cri) {document.getElementById("span-cri").innerText = cri;}
	else {document.getElementById("div-cri").style.display = "none";}
	if (devise) {document.getElementById("span-devise").innerText = devise;}
	else {document.getElementById("div-devise").style.display = "none";}
}

/* ================================================================================================================= */
/*                                                                                                                   */
/*                                                     Héraldix                                                      */
/*                                                                                                                   */
/* ================================================================================================================= */