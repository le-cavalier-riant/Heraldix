// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

URL = new URLSearchParams(window.location.search);

couronne = URL.get("couronne");
heaume = URL.get("heaume");
portantDextre = URL.get("portant-dextre");
écu = URL.get("écu");
portantSenestre = URL.get("portant-senestre");
collier = URL.get("collier");
manteau = URL.get("manteau");
cri = URL.get("cri");
devise = URL.get("devise");

function sauvegarder() {
}

function inverser(style) {
	if (style.transform == "scaleX(-1)") {style.transform = "";} else {style.transform = "scaleX(-1)";}
}

function basculer(image) {
	images = {
		"Heaume": [heaumes, heaume, "img-heaume"],
		"Couronne": [couronnes, couronne, "img-couronne"],
		"Portant à dextre": [portants, portantDextre, "img-portant-dextre"],
		"Écu": [écus, écu, "img-écu"],
		"Portant à senestre": [portants, portantSenestre, "img-portant-senestre"],
		"Collier": [colliers, collier, "img-collier"],
		"Manteau": [manteaux, manteau, "img-manteau"],
	}
	if (images[image][0][codePays[images[image][1].split(" ")[0]]][images[image][1].slice(3)].length == 1) {
		alert("Seule version de « " + images[image][1].slice(3) + " » en tant que « " + image + " ».");
	} else if (comptes[image] + 2 == images[image][0][codePays[images[image][1].split(" ")[0]]][images[image][1].slice(3)].length) {
		alert("Dernière version de « " + images[image][1].slice(3) + " » en tant que « " + image + " ».");
	}
	if (image == "Couronne") {
		comptes[image] = (comptes[image] + 1) % couronnes[codePays[couronne.split(" ")[0]]][couronne.slice(3)].length;
		document.getElementById("img-couronne").src = couronnes[codePays[couronne.split(" ")[0]]][couronne.slice(3)][comptes[image]];
		if (manteau) {
			document.getElementById("img-couronne-manteau").src = couronnes[codePays[couronne.split(" ")[0]]][couronne.slice(3)][comptes[image]];
		}
	} else {
		comptes[image] =
		(comptes[image] + 1) % images[image][0][codePays[images[image][1].split(" ")[0]]][images[image][1].slice(3)].length;
		document.getElementById(images[image][2]).src =
		images[image][0][codePays[images[image][1].split(" ")[0]]][images[image][1].slice(3)][comptes[image]];
	}
}

function déplacer(image, sens) {
	if (sens == "↓" || sens == "↑") {
		document.getElementById(image).style.marginTop = (parseInt(document.getElementById(image).style.marginTop.split("px")[0]) + (sens == "↓" ? 10 : -10)) + "px";
		décalage = document.getElementById(image).style.marginTop;
	} else {
		document.getElementById(image).style.marginRight = (parseInt(document.getElementById(image).style.marginRight.split("px")[0]) + (sens == "←" ? 10 : -10)) + "px";
		décalage = document.getElementById(image).style.marginRight;
	}
	if (image == "img-couronne") {
		if (sens == "↓" || sens == "↑") {document.getElementsByClassName("span-transformer")[14 + 0].innerText = décalage;} else
		if (sens == "←" || sens == "→") {document.getElementsByClassName("span-transformer")[14 + 0 + 7].innerText = décalage;}
	} else if (image == "img-heaume") {
		if (sens == "↓" || sens == "↑") {document.getElementsByClassName("span-transformer")[14 + 1].innerText = décalage;} else
		if (sens == "←" || sens == "→") {document.getElementsByClassName("span-transformer")[14 + 1 + 7].innerText = décalage;}
	} else if (image == "img-portant-dextre") {
		if (sens == "↓" || sens == "↑") {document.getElementsByClassName("span-transformer")[14 + 2].innerText = décalage;} else
		if (sens == "←" || sens == "→") {document.getElementsByClassName("span-transformer")[14 + 2 + 7].innerText = décalage;}
	} else if (image == "img-écu") {
		if (sens == "↓" || sens == "↑") {document.getElementsByClassName("span-transformer")[14 + 3].innerText = décalage;} else
		if (sens == "←" || sens == "→") {document.getElementsByClassName("span-transformer")[14 + 3 + 7].innerText = décalage;}
	} else if (image == "img-portant-senestre") {
		if (sens == "↓" || sens == "↑") {document.getElementsByClassName("span-transformer")[14 + 4].innerText = décalage;} else
		if (sens == "←" || sens == "→") {document.getElementsByClassName("span-transformer")[14 + 4 + 7].innerText = décalage;}
	} else if (image == "img-manteau") {
		if (sens == "↓" || sens == "↑") {document.getElementsByClassName("span-transformer")[14 + 5].innerText = décalage;} else
		if (sens == "←" || sens == "→") {document.getElementsByClassName("span-transformer")[14 + 5 + 7].innerText = décalage;}
	} else if (image == "img-collier") {
		if (sens == "↓" || sens == "↑") {document.getElementsByClassName("span-transformer")[14 + 6].innerText = décalage;} else
		if (sens == "←" || sens == "→") {document.getElementsByClassName("span-transformer")[14 + 6 + 7].innerText = décalage;}
	}
}

function redimensionner(image, sens) {
	if (sens == "←" || sens == "→") {
		document.getElementById(image).width += (sens == "→" ? 10 : -10);
		taille = document.getElementById(image).width;
		if (image == "img-couronne") {document.getElementsByClassName("span-transformer")[0].innerHTML = taille;} else
		if (image == "img-heaume") {document.getElementsByClassName("span-transformer")[1].innerHTML = taille;} else
		if (image == "img-portant-dextre") {document.getElementsByClassName("span-transformer")[2].innerHTML = taille;} else
		if (image == "img-écu") {document.getElementsByClassName("span-transformer")[3].innerHTML = taille;} else
		if (image == "img-portant-senestre") {document.getElementsByClassName("span-transformer")[4].innerHTML = taille;} else
		if (image == "img-manteau") {document.getElementsByClassName("span-transformer")[5].innerHTML = taille;} else
		if (image == "img-collier") {document.getElementsByClassName("span-transformer")[6].innerHTML = taille;}
	} else {
		document.getElementById(image).height += (sens == "↑" ? 10 : -10);
		taille = document.getElementById(image).height;
		if (image == "img-couronne") {document.getElementsByClassName("span-transformer")[7 + 0].innerHTML = taille;} else
		if (image == "img-heaume") {document.getElementsByClassName("span-transformer")[7 + 1].innerHTML = taille;} else
		if (image == "img-portant-dextre") {document.getElementsByClassName("span-transformer")[7 + 2].innerHTML = taille;} else
		if (image == "img-écu") {document.getElementsByClassName("span-transformer")[7 + 3].innerHTML = taille;} else
		if (image == "img-portant-senestre") {document.getElementsByClassName("span-transformer")[7 + 4].innerHTML = taille;} else
		if (image == "img-manteau") {document.getElementsByClassName("span-transformer")[7 + 5].innerHTML = taille;} else
		if (image == "img-collier") {document.getElementsByClassName("span-transformer")[7 + 6].innerHTML = taille;}
	}
}

function paramètres() {
	if (document.getElementById("table-paramètres").style.display == "block") {
		document.getElementById("table-paramètres").style.display = "none";
		document.getElementById("button-paramètres").innerText = "↓ Paramètres ↓";
	} else {
		document.getElementById("table-paramètres").style.display = "block";
		document.getElementById("button-paramètres").innerText = "↑ Masquer ↑";
	}
}

function afficher(nom) {
	if (nom == "couronne") {colonne = 0;} else
	if (nom == "heaume") {colonne = 1;} else
	if (nom == "portant-dextre") {colonne = 2;} else
	if (nom == "écu") {colonne = 3;} else
	if (nom == "portant-senestre") {colonne = 4;} else
	if (nom == "manteau") {colonne = 5;} else
	if (nom == "collier") {colonne = 6;}
	for (ligne = 0; ligne < 5; ligne++) {
		document.querySelectorAll("td")[colonne + ligne * 7].style.display = "table-cell";
	}
}

function titre() {
	if (couronne) {
		if (écu) {
			if (voyelles.includes(écu.slice(3)[0])) {
				if (voyelles.includes(couronne.slice(3)[0])) {
					document.title = "Armoirie d'" + couronne.slice(3) + " d'" + écu.slice(3) + " — Héraldix";
					document.querySelectorAll("h1")[0].innerHTML = "<hr>Armoirie d'" + couronne.slice(3) + " d'" + écu.slice(3) + "<hr>";
				} else {
					document.title = "Armoirie de " + couronne.slice(3) + " d'" + écu.slice(3) + " — Héraldix";
					document.querySelectorAll("h1")[0].innerHTML = "<hr>Armoirie de " + couronne.slice(3) + " d'" + écu.slice(3) + "<hr>";
				}
			} else {
				if (voyelles.includes(couronne.slice(3)[0])) {
					document.title = "Armoirie d'" + couronne.slice(3) + " de " + écu.slice(3) + " — Héraldix";
					document.querySelectorAll("h1")[0].innerHTML = "<hr>Armoirie d'" + couronne.slice(3) + " de " + écu.slice(3) + "<hr>";
				} else {
					document.title = "Armoirie de " + couronne.slice(3) + " de " + écu.slice(3) + " — Héraldix";
					document.querySelectorAll("h1")[0].innerHTML = "<hr>Armoirie de " + couronne.slice(3) + " de " + écu.slice(3) + "<hr>";
				}
			}
		} else {
			if (voyelles.includes(couronne.slice(3)[0])) {
				document.title = "Armoirie d'" + couronne.slice(3) + " — Héraldix";
				document.querySelectorAll("h1")[0].innerHTML = "<hr>Armoirie d'" + couronne.slice(3) + "<hr>";
			} else {
				document.title = "Armoirie de " + couronne.slice(3) + " — Héraldix";
				document.querySelectorAll("h1")[0].innerHTML = "<hr>Armoirie de " + couronne.slice(3) + "<hr>";
			}
		}
	} else {
		if (écu) {
			if (voyelles.includes(écu.slice(3)[0])) {
				document.title = "Armoirie d'" + écu.slice(3) + " — Héraldix";
				document.querySelectorAll("h1")[0].innerHTML = "<hr>Armoirie d'" + écu.slice(3) + "<hr>";
			} else {
				document.title = "Armoirie de " + écu.slice(3) + " — Héraldix";
				document.querySelectorAll("h1")[0].innerHTML = "<hr>Armoirie de " + écu.slice(3) + "<hr>";
			}
		}
	}
}

function générer() {
	éléments = ["Couronne", "Heaume", "Portant à dextre", "Écu", "Portant à senestre", "Collier", "Manteau"];
	comptes = {};
	for (élément of éléments) {comptes[élément] = 0;}
	if (couronne) {
		afficher("couronne");
		document.getElementById("img-couronne").src = couronnes[codePays[couronne.split(" ")[0]]][couronne.slice(3)][0];
	}
	if (heaume) {
		afficher("heaume");
		document.getElementById("img-heaume").src = heaumes[codePays[heaume.split(" ")[0]]][heaume.slice(3)][0];
		document.getElementById("img-heaume").height = 150;
		document.getElementById("img-heaume").style.marginBottom = "-150px";
		if (couronne) {
			document.getElementById("img-couronne").style.width = "80px";
			document.getElementById("img-couronne").style.marginBottom = "-30px";
		}
	}
	if (écu) {
		afficher("écu");
		document.getElementById("img-écu").src = écus[codePays[écu.split(" ")[0]]][écu.slice(3)][0];
		document.getElementById("img-écu").width = 200;
		document.getElementById("img-écu").style.marginTop = "100px";
	}
	if (portantDextre) {
		afficher("portant-dextre");
		document.getElementById("img-portant-dextre").src = portants[codePays[portantDextre.split(" ")[0]]][portantDextre.slice(3)][0];
		document.getElementById("img-portant-dextre").width = 300;
		document.getElementById("img-portant-dextre").height = 350;
	}
	if (portantSenestre) {
		afficher("portant-senestre");
		document.getElementById("img-portant-senestre").src = portants[codePays[portantSenestre.split(" ")[0]]][portantSenestre.slice(3)][0];
		document.getElementById("img-portant-senestre").width = 300;
		document.getElementById("img-portant-senestre").height = 350;
	}
	if (collier) {
		afficher("collier");
		document.getElementById("img-collier").src = colliers[codePays[collier.split(" ")[0]]][collier.slice(3)];
		document.getElementById("img-collier").width = 300;
		document.getElementById("img-collier").style.marginTop = "75px";
		document.getElementById("img-portant-dextre").style.marginRight = "-140px";
		document.getElementById("img-portant-senestre").style.marginLeft = "-140px";
	} else {
		document.getElementById("img-collier").style.display = "none";
		document.getElementById("img-portant-dextre").style.marginRight = "10px";
		document.getElementById("img-portant-senestre").style.marginLeft = "10px";
	}
	if (manteau) {
		afficher("manteau");
		document.getElementById("img-manteau").src = manteaux[codePays[manteau.split(" ")[0]]][manteau.slice(3)][0];
		document.getElementById("img-manteau").width = 700;
		document.getElementById("img-manteau").style.marginTop = "170px";
		if (couronne && heaume && manteau != "Grand") {
			document.getElementById("img-couronne-manteau").src = couronnes[codePays[couronne.split(" ")[0]]][couronne.slice(3)][0];
		}
	} else {
		document.getElementById("div-couronne").style.marginTop = "0";
	}
	if (cri) {document.getElementById("span-cri").innerText = cri;}
	else {document.getElementById("div-cri").style.display = "none";}
	if (devise) {document.getElementById("span-devise").innerText = devise;}
	else {document.getElementById("div-devise").style.display = "none";}
	titre();
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //