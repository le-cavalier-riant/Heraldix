// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

function afficher(titre) {
	tables = {
		"Profils": "table-profils",
		"Couronnes": "table-couronnes",
		"Heaumes": "table-heaumes",
		"Particuliers": "table-particuliers",
		"Écus": "table-écus",
		"Portants": "table-portants",
		"Manteaux": "table-manteaux",
	};
	if (obtenir(tables[titre.innerText], "I").style.display == "table") {
		obtenir(tables[titre.innerText], "I").style.display = "none";
	} else {
		obtenir(tables[titre.innerText], "I").style.display = "table";
	}
}

function initialiser() {
	remplirProfils();
	remplir();
	remplirParticuliers();
}

function remplirProfils() {
	colonnes = [5, 4];
	document.getElementById("table-profils").insertRow().insertCell(0).outerHTML =
		"<td></td>" + "<th colspan = " + colonnes[0] + ">" + "Couronnes" + "</th>" + "<th colspan = " + colonnes[1] + ">" + "Heaumes" + "</th>"
	;
	for (catégorie of Object.keys(profils)) {
		document.getElementById("table-profils").insertRow().insertCell(0).outerHTML =
			"<th>" + catégorie + "</th>" +
			"<th colspan = " + colonnes[0] + ">" + catégorie +
			"</th>" + "<th colspan = " + colonnes[1] + ">" + catégorie + "</th>"
		;
		for (profil of Object.keys(profils[catégorie])) {
			c = "";
			if (Object.keys(couronnes).includes(catégorie)) {
				if (Object.keys(couronnes[catégorie]).includes(profil)) {
					for (i = 0; i < couronnes[catégorie][profil].length; i++) {
						c +=
							"<td>" +
								"<a href = \"" + couronnes[catégorie][profil][i] + "\">" +
									"<img src = \"" + couronnes[catégorie][profil][i] + "\" class = img-icône>" +
								"</a>" +
							"</td>"
						;
					}
					for (j = couronnes[catégorie][profil].length; j < colonnes[0]; j++) {
						c += "<td class = td-vide></td>";
					}
					delete couronnes[catégorie][profil];
				} else {
					c += "<td colspan = " + colonnes[0] + " class = td-vide></td>";
				}
			} else {
				c += "<td colspan = " + colonnes[0] + " class = td-vide></td>";
			}
			if (Object.keys(heaumes).includes(catégorie)) {
				if (Object.keys(heaumes[catégorie]).includes(profil)) {
					for (i = 0; i < heaumes[catégorie][profil].length; i++) {
						c +=
							"<td>" +
								"<a href = " + heaumes[catégorie][profil][i] + ">" +
									"<img src = \"" + heaumes[catégorie][profil][i] + "\" class = img-icône>" +
								"</a>" +
							"</td>"
						;
					}
					for (j = heaumes[catégorie][profil].length; j < colonnes[1]; j++) {
						c += "<td class = td-vide></td>";
					}
					delete heaumes[catégorie][profil];
				} else {
					c += "<td colspan = " + colonnes[0] + " class = td-vide></td>";
				}
			} else {
				c += "<td colspan = " + colonnes[1] + " class = td-vide></td>";
			}
			document.getElementById("table-profils").insertRow().insertCell(0).outerHTML =
				"<td>" + profil + "</td>" + c
			;
		}
	}
}

function remplir() {
	listes = [couronnes, heaumes, écus, portants, manteaux];
	colonnes = [3, 2, 10, 3, 2];
	tableaux = ["table-couronnes", "table-heaumes", "table-écus", "table-portants", "table-manteaux"];
	for (k = 0; k < 5; k++) {
		for (catégorie of Object.keys(listes[k])) {
			obtenir(tableaux[k], "I").insertRow().insertCell(0).outerHTML =
				"<th>" + catégorie + "</th>" +
				"<th colspan = " + colonnes[k] + ">" + catégorie + "</th>"
			;
			for (profil of Object.keys(listes[k][catégorie])) {
				ligne = "";
				for (i = 0; i < listes[k][catégorie][profil].length; i++) {
					ligne +=
						"<td>" +
							"<a href = \"" + listes[k][catégorie][profil][i] + "\">" +
								"<img src = \"" + listes[k][catégorie][profil][i] + "\" class = img-icône>" +
							"</a>" +
						"</td>"
					;
				}
				for (j = listes[k][catégorie][profil].length; j < colonnes[k]; j++) {
					ligne += "<td class = td-vide></td>";
				}
				obtenir(tableaux[k], "I").insertRow().insertCell(0).outerHTML =
					"<td>" + profil + "</td>" + ligne
				;
			}
		}
	}
}

function remplirParticuliers() {
	for (catégorie of Object.keys(particuliers)) {
		document.getElementById("table-particuliers").insertRow().insertCell(0).outerHTML =
			"<th>" + catégorie + "</th>"
		;
		for (profil of Object.keys(particuliers[catégorie])) {
			document.getElementById("table-particuliers").insertRow().insertCell(0).outerHTML =
				"<td>" + profil + "</td>"
			;
		}
	}
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //