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
		comptes[image] = (comptes[image] + 1) % heaumes[heaume].length;
		document.getElementById("img-heaume").src = heaumes[heaume][comptes[image]];
	} else if (image == "Portant à dextre") {
		comptes[image] = (comptes[image] + 1) % portants[portantDextre].length;
		document.getElementById("img-portant-dextre").src = portants[portantDextre][comptes[image]];
	} else if (image == "Écu") {
		comptes[image] = (comptes[image] + 1) % écus[écu].length;
		document.getElementById("img-écu").src = écus[écu][comptes[image]];
	} else if (image == "Portant à senestre") {
		comptes[image] = (comptes[image] + 1) % portants[portantSenestre].length;
		document.getElementById("img-portant-senestre").src = portants[portantSenestre][comptes[image]];
	}
}

function déplacer(image, décalage, direction) {
	if (direction == "↓") {document.getElementById(image).style.marginTop = décalage + "px";} else
	if (direction == "↑") {document.getElementById(image).style.marginBottom = (- décalage) + "px";} else
	if (direction == "←") {document.getElementById(image).style.marginRight = (- décalage) + "px";} else
	if (direction == "→") {document.getElementById(image).style.marginLeft = décalage + "px";}
	if (image == "img-portant-dextre") {
		if (direction == "↓") {document.getElementsByClassName("span-déplacer")[6 + 0].innerText = décalage;} else
		if (direction == "←") {document.getElementsByClassName("span-déplacer")[6 + 0 + 6].innerText = décalage;}
	} else if (image == "img-portant-senestre") {
		if (direction == "↓") {document.getElementsByClassName("span-déplacer")[6 + 1].innerText = décalage;} else
		if (direction == "→") {document.getElementsByClassName("span-déplacer")[6 + 1 + 6].innerText = décalage;}
	} else if (image == "img-manteau") {
		if (direction == "↓") {document.getElementsByClassName("span-déplacer")[6 + 2].innerText = décalage;} else
		if (direction == "→") {document.getElementsByClassName("span-déplacer")[6 + 2 + 6].innerText = décalage;}
	} else if (image == "img-collier") {
		if (direction == "↓") {document.getElementsByClassName("span-déplacer")[6 + 3].innerText = décalage;} else
		if (direction == "→") {document.getElementsByClassName("span-déplacer")[6 + 3 + 6].innerText = décalage;}
	} else if (image == "img-heaume") {
		if (direction == "↑") {document.getElementsByClassName("span-déplacer")[6 + 4].innerText = décalage;} else
		if (direction == "→") {document.getElementsByClassName("span-déplacer")[6 + 4 + 6].innerText = décalage;}
	}
}

function redimensionner(image, décalage) {
	document.getElementById(image).style.width = décalage + "px";
	if (image == "img-portant-dextre") {
		document.getElementsByClassName("span-déplacer")[0].innerText = décalage;
	} else if (image == "img-portant-senestre") {
		document.getElementsByClassName("span-déplacer")[1].innerText = décalage;
	} else if (image == "img-manteau") {
		document.getElementsByClassName("span-déplacer")[2].innerText = décalage;
	} else if (image == "img-collier") {
		document.getElementsByClassName("span-déplacer")[3].innerText = décalage;
	} else if (image == "img-heaume") {
		document.getElementsByClassName("span-déplacer")[4].innerText = décalage;
	}
}

function paramètres() {
	if (document.getElementById("table-paramètres").style.display == "block") {
		document.getElementById("table-paramètres").style.display = "none";
		document.getElementById("button-paramètres").innerText = "↑ Paramètres ↑";
	} else {
		document.getElementById("table-paramètres").style.display = "block";
		document.getElementById("button-paramètres").innerText = "↓ Masquer ↓";
	}
}

function afficher(nom) {
	if (nom == "portant-dextre") {colonne = 0;} else
	if (nom == "portant-senestre") {colonne = 1;} else
	if (nom == "manteau") {colonne = 2;} else
	if (nom == "collier") {colonne = 3;} else
	if (nom == "heaume") {colonne = 4;}
	document.querySelectorAll("tr td")[colonne].style.display = "table-cell";
	document.querySelectorAll("tr td")[colonne + 6].style.display = "table-cell";
	document.querySelectorAll("tr td")[colonne + 12].style.display = "table-cell";
	document.querySelectorAll("tr td")[colonne + 18].style.display = "table-cell";
}

function générerArmoirie() {
	
	élements = ["Portant à dextre", "Écu", "Portant à senestre", "Manteau", "Collier", "Heaume"];
	comptes = {};
		élements.forEach(
			élement => {
			comptes[élement] = 0;
		}
	);

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

	if (couronne) {document.getElementById("img-couronne").src = couronnes[couronne][0];}
	if (heaume) {
		afficher("heaume");
		document.getElementById("img-heaume").src = heaumes[heaume][0];
		if (heaume) {
			document.getElementById("img-couronne").style.width = "80px";
			document.getElementById("img-couronne").style.marginBottom = "-30px";
		}
	}
	if (écu) {document.getElementById("img-écu").src = écus[écu][0];}
	if (portantDextre) {
		afficher("portant-dextre");
		document.getElementById("img-portant-dextre").src = portants[portantDextre][0];
	}
	if (portantSenestre) {
		afficher("portant-senestre");
		document.getElementById("img-portant-senestre").src = portants[portantSenestre][0];
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
		document.getElementById("img-manteau").src = manteaux[manteau][0];
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