// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

function inverser(style) {
	if (style.transform == "scaleX(-1)") {style.transform = "";} else {style.transform = "scaleX(-1)";}
}

function basculer(image) {
	if (image == "Heaume") {
		comptes[heaume] = (comptes[heaume] + 1) % heaumes[heaume].length;
		document.getElementById("img-heaume").src = heaumes[heaume][comptes[heaume]];
	} else if (image == "	") {
		comptes[heaume] = (comptes[heaume] + 1) % heaumes[heaume].length;
		document.getElementById("img-heaume").src = heaumes[heaume][comptes[heaume]];
	}
}

function déplacer(image, décalage, direction) {
	if (direction == "↓") {document.getElementById(image).style.marginTop = décalage + "px";} else
	if (direction == "↑") {document.getElementById(image).style.marginBottom = (- décalage) + "px";} else
	if (direction == "←") {document.getElementById(image).style.marginRight = (- décalage) + "px";} else
	if (direction == "→") {document.getElementById(image).style.marginLeft = décalage + "px";}
	if (image == "img-portant-dextre") {
		if (direction == "↓") {document.getElementsByClassName("span-déplacer")[0].innerText = décalage;} else
		if (direction == "←") {document.getElementsByClassName("span-déplacer")[0 + 5].innerText = décalage;}
	} else if (image == "img-portant-senestre") {
		if (direction == "↓") {document.getElementsByClassName("span-déplacer")[1].innerText = décalage;} else
		if (direction == "→") {document.getElementsByClassName("span-déplacer")[1 + 5].innerText = décalage;}
	} else if (image == "img-manteau") {
		if (direction == "↓") {document.getElementsByClassName("span-déplacer")[2].innerText = décalage;} else
		if (direction == "→") {document.getElementsByClassName("span-déplacer")[2 + 5].innerText = décalage;}
	} else if (image == "img-collier") {
		if (direction == "↓") {document.getElementsByClassName("span-déplacer")[3].innerText = décalage;} else
		if (direction == "→") {document.getElementsByClassName("span-déplacer")[3 + 5].innerText = décalage;}
	} else if (image == "img-heaume") {
		if (direction == "↑") {document.getElementsByClassName("span-déplacer")[4].innerText = décalage;} else
		if (direction == "→") {document.getElementsByClassName("span-déplacer")[4 + 5].innerText = décalage;}
	}
}

function paramètres() {
	if (document.getElementById("table-paramètres").style.display == "block") {
		document.getElementById("table-paramètres").style.display = "none";
		document.getElementById("button-paramètres").innerText = "Paramètres";
	} else {
		document.getElementById("table-paramètres").style.display = "block";
		document.getElementById("button-paramètres").innerText = "Masquer";
	}
	/* document.querySelectorAll("input[type='range']").forEach(
		input => {
			input.min = -100;
			input.max = 100;
			input.step = 5;
		}
	); */
}

function afficher(nom) {
	if (nom == "portant-dextre") {colonne = 0;} else
	if (nom == "portant-senestre") {colonne = 1;} else
	if (nom == "manteau") {colonne = 2;} else
	if (nom == "collier") {colonne = 3;} else
	if (nom == "heaume") {colonne = 4;}
	document.querySelectorAll("tr td")[colonne].style.display = "table-cell";
	document.querySelectorAll("tr td")[colonne + 5].style.display = "table-cell";
	document.querySelectorAll("tr td")[colonne + 10].style.display = "table-cell";
}

function générerArmoirie() {
	
	comptes = {
		"Roi":	0,
		"Prince":	0,
		"Duc":	0,
		"Marquis":	0,
		"Comte":	0,
		"Baron":	0,
		"Gentilhomme d'ancienne race":	0,
		"Gentilhomme de trois races":	0,
		"Anobli":	0,
		"Bâtard":	0,
	}
	
	URL = new URLSearchParams(window.location.search);

	couronne = URL.get("couronne");
	heaume = URL.get("heaume");
	écu = URL.get("écu");
	portantDextre = URL.get("portant-dextre");
	portantSenestre = URL.get("portant-senestre");
	collier = URL.get("collier");
	manteau = URL.get("manteau");
	cri = URL.get("cri");
	devise = URL.get("devise");

	if (couronne) {document.getElementById("img-couronne").src = couronnes[couronne];}
	if (heaume) {
		afficher("heaume");
		document.getElementById("img-heaume").src = heaumes[heaume][0];
		if (heaume) {
			document.getElementById("img-couronne").style.width = "80px";
			document.getElementById("img-couronne").style.marginBottom = "-30px";
		}
	}
	if (écu) {document.getElementById("img-écu").src = écus[écu];}
	if (portantDextre) {
		afficher("portant-dextre");
		document.getElementById("img-portant-dextre").src = portants[portantDextre];
	}
	if (portantSenestre) {
		afficher("portant-senestre");
		document.getElementById("img-portant-senestre").src = portants[portantSenestre];
	}
	if (collier) {
		afficher("collier");
		document.getElementById("img-collier").src = colliers[collier];
		document.getElementById("img-portant-dextre").style.marginRight = "-140px";
		document.getElementById("img-portant-senestre").style.marginLeft = "-140px";
	} else {
		document.getElementById("img-collier").style.display = "none";
		document.getElementById("img-portant-dextre").style.marginRight = "10px";
		document.getElementById("img-portant-senestre").style.marginLeft = "10px";
	}
	if (manteau) {
		afficher("manteau");
		document.getElementById("img-manteau").src = manteaux[manteau];
		if (couronne || heaume) {
			if (manteau != "Grand") {
				document.getElementById("img-couronne-manteau").src = couronnes[couronne];
			}
		}
	} else {
		document.getElementById("div-couronne").style.marginTop = "0";
	}
	if (cri) {document.getElementById("span-cri").innerText = cri;}
	else {document.getElementById("div-cri").style.display = "none";}
	if (devise) {document.getElementById("span-devise").innerText = devise;}
	else {document.getElementById("div-devise").style.display = "none";}
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //