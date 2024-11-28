// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

function initialiser() {
	remplirProfilsHeaumesCouronnes();
	remplirHeaumes();
	remplirCouronnes();
	remplirParticuliers();
	remplirManteaux();
	remplirÉcus();
	remplirPortants();
}

function afficher(titre) {
	tables = {
		"Profils | Couronnes & Heaumes": "table-profils-heaumes-couronnes",
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

function remplirHeaumes() {
	colonnes = 2;
	document.getElementById("table-heaumes").insertRow().insertCell(0).outerHTML =
		"<th colspan = " + (colonnes + 1) + ">" + "Sans profil" + "</th>"
	;
	document.getElementById("table-heaumes").insertRow().insertCell(0).outerHTML =
		"<th></th>" + "<th colspan = " + colonnes + ">" + "Heaumes" + "</th>"
	;
	for (catégorie of Object.keys(heaumes)) {
		document.getElementById("table-heaumes").insertRow().insertCell(0).outerHTML =
			"<th>" + catégorie + "</th>" + "<th colspan = " + colonnes + ">" + catégorie + "</th>"
		;
		for (profil of Object.keys(heaumes[catégorie])) {
			c = "";
			for (i = 0; i < heaumes[catégorie][profil].length; i++) {
				c +=
					"<td>" +
						"<a href = \"" + heaumes[catégorie][profil][i] + "\">" +
							"<img src = \"" + heaumes[catégorie][profil][i] + "\" class = img-icône>" +
						"</a>" +
					"</td>"
				;
			}
			for (j = heaumes[catégorie][profil].length; j < colonnes; j++) {
				c += "<td class = td-vide></td>";
			}
			document.getElementById("table-heaumes").insertRow().insertCell(0).outerHTML =
				"<td>" + profil + "</td>" + c
			;
		}
	}
}

function remplirCouronnes() {
	colonnes = 3;
	document.getElementById("table-couronnes").insertRow().insertCell(0).outerHTML =
		"<th colspan = " + (2 * colonnes + 1) + ">" + "Sans profil" + "</th>"
	;
	document.getElementById("table-couronnes").insertRow().insertCell(0).outerHTML =
		"<th></th>" + "<th colspan = " + colonnes + ">" + "Couronnes" + "</th>"
	;
	for (catégorie of Object.keys(couronnes)) {
		document.getElementById("table-couronnes").insertRow().insertCell(0).outerHTML =
			"<th>" + catégorie + "</th>" +
			"<th colspan = " + colonnes + ">" + catégorie + "</th>"
		;
		for (profil of Object.keys(couronnes[catégorie])) {
			c = "";
			for (i = 0; i < couronnes[catégorie][profil].length; i++) {
				c +=
					"<td>" +
						"<a href = \"" + couronnes[catégorie][profil][i] + "\">" +
							"<img src = \"" + couronnes[catégorie][profil][i] + "\" class = img-icône>" +
						"</a>" +
					"</td>"
				;
			}
			for (j = couronnes[catégorie][profil].length; j < colonnes; j++) {
				c += "<td class = td-vide></td>";
			}
			document.getElementById("table-couronnes").insertRow().insertCell(0).outerHTML =
				"<td>" + profil + "</td>" + c
			;
		}
	}
}

function remplirPortants() {
	colonnes = 3;
	document.getElementById("table-portants").insertRow().insertCell(0).outerHTML =
		"<th colspan = " + (colonnes + 1) + ">" + "Sans profil" + "</th>"
	;
	document.getElementById("table-portants").insertRow().insertCell(0).outerHTML =
		"<th></th>" + "<th colspan = " + colonnes + ">" + "Portants" + "</th>"
	;
	for (catégorie of Object.keys(portants)) {
		document.getElementById("table-portants").insertRow().insertCell(0).outerHTML =
			"<th>" + catégorie + "</th>" + "<th colspan = " + colonnes + ">" + catégorie + "</th>"
		;
		for (profil of Object.keys(portants[catégorie])) {
			c = "";
			for (i = 0; i < portants[catégorie][profil].length; i++) {
				c +=
					"<td>" +
						"<a href = \"" + portants[catégorie][profil][i] + "\">" +
							"<img src = \"" + portants[catégorie][profil][i] + "\" class = img-icône>" +
						"</a>" +
					"</td>"
				;
			}
			for (j = portants[catégorie][profil].length; j < colonnes; j++) {
				c += "<td class = td-vide></td>";
			}
			document.getElementById("table-portants").insertRow().insertCell(0).outerHTML =
				"<td>" + profil + "</td>" + c
			;
		}
	}
}

function remplirÉcus() {
	colonnes = 17;
	document.getElementById("table-écus").insertRow().insertCell(0).outerHTML =
		"<th colspan = " + (colonnes + 1) + ">" + "Sans profil" + "</th>"
	;
	document.getElementById("table-écus").insertRow().insertCell(0).outerHTML =
		"<th></th>" + "<th colspan = " + colonnes + ">" + "Écus" + "</th>"
	;
	for (catégorie of Object.keys(écus)) {
		document.getElementById("table-écus").insertRow().insertCell(0).outerHTML =
			"<th>" + catégorie + "</th>" + "<th colspan = " + colonnes + ">" + catégorie + "</th>"
		;
		for (profil of Object.keys(écus[catégorie])) {
			c = "";
			for (i = 0; i < écus[catégorie][profil].length; i++) {
				c +=
					"<td>" +
						"<a href = \"" + écus[catégorie][profil][i] + "\">" +
							"<img src = \"" + écus[catégorie][profil][i] + "\" class = img-icône>" +
						"</a>" +
					"</td>"
				;
			}
			for (j = écus[catégorie][profil].length; j < colonnes; j++) {
				c += "<td class = td-vide></td>";
			}
			document.getElementById("table-écus").insertRow().insertCell(0).outerHTML =
				"<td>" + profil + "</td>" + c
			;
		}
	}
}

function remplirManteaux() {
	colonnes = 2;
	document.getElementById("table-manteaux").insertRow().insertCell(0).outerHTML =
		"<th colspan = " + (colonnes + 1) + ">" + "Sans profil" + "</th>"
	;
	document.getElementById("table-manteaux").insertRow().insertCell(0).outerHTML =
		"<th></th>" + "<th colspan = " + colonnes + ">" + "Manteaux" + "</th>"
	;
	for (catégorie of Object.keys(manteaux)) {
		document.getElementById("table-manteaux").insertRow().insertCell(0).outerHTML =
			"<th>" + catégorie + "</th>" + "<th colspan = " + colonnes + ">" + catégorie + "</th>"
		;
		for (profil of Object.keys(manteaux[catégorie])) {
			c = "";
			for (i = 0; i < manteaux[catégorie][profil].length; i++) {
				c +=
					"<td>" +
						"<a href = \"" + manteaux[catégorie][profil][i] + "\">" +
							"<img src = \"" + manteaux[catégorie][profil][i] + "\" class = img-icône>" +
						"</a>" +
					"</td>"
				;
			}
			for (j = manteaux[catégorie][profil].length; j < colonnes; j++) {
				c += "<td class = td-vide></td>";
			}
			document.getElementById("table-manteaux").insertRow().insertCell(0).outerHTML =
				"<td>" + profil + "</td>" + c
			;
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

function remplirProfilsHeaumesCouronnes() {
	colonnes = [5, 4];
	document.getElementById("table-profils-heaumes-couronnes").insertRow().insertCell(0).outerHTML =
		"<td></td>" + "<th colspan = " + colonnes[0] + ">" + "Couronnes" + "</th>" + "<th colspan = " + colonnes[1] + ">" + "Heaumes" + "</th>"
	;
	for (catégorie of Object.keys(profils)) {
		document.getElementById("table-profils-heaumes-couronnes").insertRow().insertCell(0).outerHTML =
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
				}
			} else {
				c += "<td colspan = " + colonnes[1] + " class = td-vide></td>";
			}
			document.getElementById("table-profils-heaumes-couronnes").insertRow().insertCell(0).outerHTML =
				"<td>" + profil + "</td>" + c
			;
		}
	}
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //