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
couronneManteau = URL.get("couronne-manteau");
cri = URL.get("cri");
devise = URL.get("devise");

images = {
	"Couronne": [couronnes, couronne, "img-couronne"],
	"Heaume": [heaumes, heaume, "img-heaume"],
	"Portant à dextre": [portants, portantDextre, "img-portant-dextre"],
	"Écu": [écus, écu, "img-écu"],
	"Portant à senestre": [portants, portantSenestre, "img-portant-senestre"],
	"Manteau": [manteaux, manteau, "img-manteau"],
	"Collier": [colliers, collier, "img-collier"],
	"Couronne du manteau": [couronnes, couronneManteau, "img-couronne-manteau"],
}

function afficher(nom) {
	if (nom == "couronne") {colonne = 0;} else
	if (nom == "heaume") {colonne = 1;} else
	if (nom == "portant-dextre") {colonne = 2;} else
	if (nom == "écu") {colonne = 3;} else
	if (nom == "portant-senestre") {colonne = 4;} else
	if (nom == "manteau") {colonne = 5;} else
	if (nom == "couronne-manteau") {colonne = 6;} else
	if (nom == "collier") {colonne = 7;}
	for (ligne = 0; ligne < 5; ligne++) {
		obtenir("td", "S")[colonne + ligne * 8].style.display = "table-cell";
	}
}

function basculer(image) {
	if (image.split(" ")[0] == "Portant") {
		image = image.split(" ")[0] + " " + image.split(" ")[1] + " " + image.split(" ")[2];
	} else if (image == "Couronne du manteau") {
		image = image.split(" ")[0] + " " + image.split(" ")[1] + " " + image.split(" ")[2];
	} else {
		image = image.split(" ")[0];
	}
	comptes[image] =
		(comptes[image] + 1) %
		images[image][0][codeCatégories[images[image][1].split(" ")[0]]][images[image][1].slice(3)].length
	;
	obtenir(images[image][2], "I").src =
		images[image][0][codeCatégories[images[image][1].split(" ")[0]]][images[image][1].slice(3)][comptes[image]]
	;
	obtenir("#table-paramètres tr td button", "S")[Object.keys(images).indexOf(image)].innerText =
		image +
		" (" +
		(comptes[image] + 1) +
		" / " +
		images[image][0][codeCatégories[images[image][1].split(" ")[0]]][images[image][1].slice(3)].length +
		")"
	;
}

function déplacer(image, sens) {
	if (sens == "↓" || sens == "↑") {
		obtenir(image, "I").style.marginTop =
			(
				parseInt(obtenir(image, "I").style.marginTop.split("px")[0]) +
				(sens == "↓" ? 10 : -10)
			) +
			"px"
		;
		décalage = obtenir(image, "I").style.marginTop;
	} else {
		obtenir(image, "I").style.marginRight =
			(
				parseInt(obtenir(image, "I").style.marginRight.split("px")[0]) +
				(sens == "←" ? 10 : -10)
			) +
			"px"
		;
		décalage = obtenir(image, "I").style.marginRight;
	}
	if (image == "img-couronne") {
		if (sens == "↓" || sens == "↑") {
			obtenir("span-transformer", "C")[14 + 0].innerText = décalage;
		} else if (sens == "←" || sens == "→") {
			obtenir("span-transformer", "C")[14 + 0 + 7].innerText = décalage;
		}
	} else if (image == "img-heaume") {
		if (sens == "↓" || sens == "↑") {
			obtenir("span-transformer", "C")[14 + 1].innerText = décalage;
		} else if (sens == "←" || sens == "→") {
			obtenir("span-transformer", "C")[14 + 1 + 7].innerText = décalage;
		}
	} else if (image == "img-portant-dextre") {
		if (sens == "↓" || sens == "↑") {
			obtenir("span-transformer", "C")[14 + 2].innerText = décalage;
		} else if (sens == "←" || sens == "→") {
			obtenir("span-transformer", "C")[14 + 2 + 7].innerText = décalage;
		}
	} else if (image == "img-écu") {
		if (sens == "↓" || sens == "↑") {
			obtenir("span-transformer", "C")[14 + 3].innerText = décalage;
		} else if (sens == "←" || sens == "→") {
			obtenir("span-transformer", "C")[14 + 3 + 7].innerText = décalage;
		}
	} else if (image == "img-portant-senestre") {
		if (sens == "↓" || sens == "↑") {
			obtenir("span-transformer", "C")[14 + 4].innerText = décalage;
		} else if (sens == "←" || sens == "→") {
			obtenir("span-transformer", "C")[14 + 4 + 7].innerText = décalage;
		}
	} else if (image == "img-manteau") {
		if (sens == "↓" || sens == "↑") {
			obtenir("span-transformer", "C")[14 + 5].innerText = décalage;
		} else if (sens == "←" || sens == "→") {
			obtenir("span-transformer", "C")[14 + 5 + 7].innerText = décalage;
		}
	} else if (image == "img-collier") {
		if (sens == "↓" || sens == "↑") {
			obtenir("span-transformer", "C")[14 + 6].innerText = décalage;
		} else if (sens == "←" || sens == "→") {
			obtenir("span-transformer", "C")[14 + 6 + 7].innerText = décalage;
		}
	}
}

function générer() {
	éléments = Object.keys(images);
	comptes = {};
	for (élément of éléments) {comptes[élément] = 0;}
	if (couronne) {
		afficher("couronne");
		obtenir("img-couronne", "I").src =
			couronnes[codeCatégories[couronne.split(" ")[0]]][couronne.slice(3)][0]
		;
	}
	if (heaume) {
		afficher("heaume");
		obtenir("img-heaume", "I").src =
			heaumes[codeCatégories[heaume.split(" ")[0]]][heaume.slice(3)][0]
		;
		obtenir("img-heaume", "I").height = 150;
		obtenir("img-heaume", "I").style.marginBottom = "-150px";
		if (couronne) {
			obtenir("img-couronne", "I").style.width = "80px";
			obtenir("img-couronne", "I").style.marginBottom = "-30px";
		}
	}
	if (écu) {
		afficher("écu");
		obtenir("img-écu", "I").src = écus[codeCatégories[écu.split(" ")[0]]][écu.slice(3)][0];
		obtenir("img-écu", "I").width = 200;
		obtenir("img-écu", "I").style.marginTop = "100px";
	}
	if (portantDextre) {
		afficher("portant-dextre");
		obtenir("img-portant-dextre", "I").src =
			portants[codeCatégories[portantDextre.split(" ")[0]]][portantDextre.slice(3)][0]
		;
		obtenir("img-portant-dextre", "I").width = 300;
		obtenir("img-portant-dextre", "I").height = 350;
	}
	if (portantSenestre) {
		afficher("portant-senestre");
		obtenir("img-portant-senestre", "I").src =
			portants[codeCatégories[portantSenestre.split(" ")[0]]][portantSenestre.slice(3)][0]
		;
		obtenir("img-portant-senestre", "I").width = 300;
		obtenir("img-portant-senestre", "I").height = 350;
	}
	if (collier) {
		afficher("collier");
		obtenir("img-collier", "I").src = colliers[codeCatégories[collier.split(" ")[0]]][collier.slice(3)];
		obtenir("img-collier", "I").width = 300;
		obtenir("img-collier", "I").style.marginTop = "75px";
		obtenir("img-portant-dextre", "I").style.marginRight = "-140px";
		obtenir("img-portant-senestre", "I").style.marginLeft = "-140px";
	} else {
		obtenir("img-collier", "I").style.display = "none";
		obtenir("img-portant-dextre", "I").style.marginRight = "10px";
		obtenir("img-portant-senestre", "I").style.marginLeft = "10px";
	}
	if (manteau) {
		afficher("manteau");
		obtenir("img-manteau", "I").src = manteaux[codeCatégories[manteau.split(" ")[0]]][manteau.slice(3)][0];
		obtenir("img-manteau", "I").width = 700;
		obtenir("img-manteau", "I").style.marginTop = "170px";
		if (couronneManteau) {
			obtenir("img-couronne-manteau", "I").src =
				couronnes[codeCatégories[couronneManteau.split(" ")[0]]][couronneManteau.slice(3)][0]
			;
		}
	} else {
		obtenir("div-couronne", "I").style.marginTop = "0";
	}
	if (cri) {obtenir("span-cri", "I").innerText = cri;}
	else {obtenir("div-cri", "I").style.display = "none";}
	if (devise) {obtenir("span-devise", "I").innerText = devise;}
	else {obtenir("div-devise", "I").style.display = "none";}
	titre();
}

function initialiser() {
	remplir();
	générer();
}

function inverser(style) {
	if (style.transform == "scaleX(-1)") {style.transform = "";} else {style.transform = "scaleX(-1)";}
}

function paramètres() {
	if (obtenir("table-paramètres", "I").style.display == "block") {
		obtenir("table-paramètres", "I").style.display = "none";
		obtenir("button-paramètres", "I").innerText = "↓ Paramètres ↓";
	} else {
		obtenir("table-paramètres", "I").style.display = "block";
		obtenir("button-paramètres", "I").innerText = "↑ Masquer ↑";
	}
}

function redimensionner(image, sens) {
	if (sens == "←" || sens == "→") {
		obtenir(image, "I").width += (sens == "→" ? 10 : -10);
		taille = obtenir(image, "I").width;
		if (image == "img-couronne") {obtenir("span-transformer", "C")[0].innerHTML = taille;} else
		if (image == "img-heaume") {obtenir("span-transformer", "C")[1].innerHTML = taille;} else
		if (image == "img-portant-dextre") {obtenir("span-transformer", "C")[2].innerHTML = taille;} else
		if (image == "img-écu") {obtenir("span-transformer", "C")[3].innerHTML = taille;} else
		if (image == "img-portant-senestre") {obtenir("span-transformer", "C")[4].innerHTML = taille;} else
		if (image == "img-manteau") {obtenir("span-transformer", "C")[5].innerHTML = taille;} else
		if (image == "img-collier") {obtenir("span-transformer", "C")[6].innerHTML = taille;}
	} else {
		obtenir(image, "I").height += (sens == "↑" ? 10 : -10);
		taille = obtenir(image, "I").height;
		if (image == "img-couronne") {obtenir("span-transformer", "C")[7 + 0].innerHTML = taille;} else
		if (image == "img-heaume") {obtenir("span-transformer", "C")[7 + 1].innerHTML = taille;} else
		if (image == "img-portant-dextre") {obtenir("span-transformer", "C")[7 + 2].innerHTML = taille;} else
		if (image == "img-écu") {obtenir("span-transformer", "C")[7 + 3].innerHTML = taille;} else
		if (image == "img-portant-senestre") {obtenir("span-transformer", "C")[7 + 4].innerHTML = taille;} else
		if (image == "img-manteau") {obtenir("span-transformer", "C")[7 + 5].innerHTML = taille;} else
		if (image == "img-collier") {obtenir("span-transformer", "C")[7 + 6].innerHTML = taille;}
	}
}

function remplir() {
	tableParamètres = obtenir("table-paramètres", "I");	
	ligne = "";
	for (i = 0; i < 7; i++) {
		ligne += "<td><button onclick = basculer(this.innerText)>" + Object.keys(images)[i] + "</button></td>";
	}
	tableParamètres.insertRow().insertCell(0).outerHTML = ligne;
	ligne = "";
	for (i = 0; i < 7; i++) {
		ligne +=
			"<td><button onclick = \"redimensionner('" + images[Object.keys(images)[i]][2] + "', '←')\">-</button>"
		;
		ligne += "↔";
		ligne += "<button onclick = \"redimensionner('" + images[Object.keys(images)[i]][2] + "', '→')\">+</button>";
		ligne += "<span class = span-transformer>∅</span></td>";
	}
	tableParamètres.insertRow().insertCell(0).outerHTML = ligne;
	ligne = "";
	for (i = 0; i < 7; i++) {
		ligne +=
			"<td><button onclick = \"redimensionner('" + images[Object.keys(images)[i]][2] + "', '↓')\">-</button>"
		;
		ligne += "↕";
		ligne += "<button onclick = \"redimensionner('" + images[Object.keys(images)[i]][2] + "', '↑')\">+</button>";
		ligne += "<span class = span-transformer>∅</span></td>";
	}
	tableParamètres.insertRow().insertCell(0).outerHTML = ligne;
	ligne = "";
	for (i = 0; i < 7; i++) {
		ligne += "<td><button onclick = \"déplacer('" + images[Object.keys(images)[i]][2] + "', '↑')\">↑</button>";
		ligne += "<button onclick = \"déplacer('" + images[Object.keys(images)[i]][2] + "', '↓')\">↓</button>";
		ligne += "<span class = span-transformer>∅</span></td>";
	}
	tableParamètres.insertRow().insertCell(0).outerHTML = ligne;
	ligne = "";
	for (i = 0; i < 7; i++) {
		ligne += "<td><button onclick = \"déplacer('" + images[Object.keys(images)[i]][2] + "', '←')\">←</button>";
		ligne += "<button onclick = \"déplacer('" + images[Object.keys(images)[i]][2] + "', '→')\">→</button>";
		ligne += "<span class = span-transformer>∅</span></td>";
	}
	tableParamètres.insertRow().insertCell(0).outerHTML = ligne;
}

function sauvegarder() {
	window.print();
	/*navigator.clipboard.writeText("");*/
}

function titre() {
	if (couronne) {
		if (écu) {
			if (voyelles.includes(écu.slice(3)[0])) {
				if (voyelles.includes(couronne.slice(3)[0])) {
					document.title = "Armoirie d'" + couronne.slice(3) + " d'" + écu.slice(3) + " — Héraldix";
					obtenir("h1", "S")[0].innerHTML =
						"<hr>Armoirie d'" + couronne.slice(3) + " d'" + écu.slice(3) + "<hr>"
					;
				} else {
					document.title = "Armoirie de " + couronne.slice(3) + " d'" + écu.slice(3) + " — Héraldix";
					obtenir("h1", "S")[0].innerHTML =
						"<hr>Armoirie de " + couronne.slice(3) + " d'" + écu.slice(3) + "<hr>"
					;
				}
			} else {
				if (voyelles.includes(couronne.slice(3)[0])) {
					document.title = "Armoirie d'" + couronne.slice(3) + " de " + écu.slice(3) + " — Héraldix";
					obtenir("h1", "S")[0].innerHTML =
						"<hr>Armoirie d'" + couronne.slice(3) + " de " + écu.slice(3) + "<hr>"
					;
				} else {
					document.title = "Armoirie de " + couronne.slice(3) + " de " + écu.slice(3) + " — Héraldix";
					obtenir("h1", "S")[0].innerHTML =
						"<hr>Armoirie de " + couronne.slice(3) + " de " + écu.slice(3) + "<hr>"
					;
				}
			}
		} else {
			if (voyelles.includes(couronne.slice(3)[0])) {
				document.title = "Armoirie d'" + couronne.slice(3) + " — Héraldix";
				obtenir("h1", "S")[0].innerHTML = "<hr>Armoirie d'" + couronne.slice(3) + "<hr>";
			} else {
				document.title = "Armoirie de " + couronne.slice(3) + " — Héraldix";
				obtenir("h1", "S")[0].innerHTML = "<hr>Armoirie de " + couronne.slice(3) + "<hr>";
			}
		}
	} else {
		if (écu) {
			if (voyelles.includes(écu.slice(3)[0])) {
				document.title = "Armoirie d'" + écu.slice(3) + " — Héraldix";
				obtenir("h1", "S")[0].innerHTML = "<hr>Armoirie d'" + écu.slice(3) + "<hr>";
			} else {
				document.title = "Armoirie de " + écu.slice(3) + " — Héraldix";
				obtenir("h1", "S")[0].innerHTML = "<hr>Armoirie de " + écu.slice(3) + "<hr>";
			}
		}
	}
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //