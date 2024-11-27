// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

function initialiser() {
	document.getElementById("table-profils").insertRow().insertCell(0).outerHTML =
		"<td></td>" + "<th colspan = 10>" + "Couronnes" + "</th>" + "<th colspan = 10>" + "Heaumes" + "</th>"
	;
	for (catégorie of Object.keys(profils)) {
		document.getElementById("table-profils").insertRow().insertCell(0).outerHTML =
			"<th>" + catégorie + "</th>" +
			"<th colspan = 10>" + catégorie +
			"</th>" + "<th colspan = 10>" + catégorie + "</th>"
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
					for (j = couronnes[catégorie][profil].length; j < 10; j++) {
						c += "<td class = td-vide></td>";
					}
					delete couronnes[catégorie][profil];
				}
			} else {
				c += "<td colspan = 10 class = td-vide></td>";
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
					for (j = heaumes[catégorie][profil].length; j < 10; j++) {
						c += "<td class = td-vide></td>";
					}
					delete heaumes[catégorie][profil];
				}
			} else {
				c += "<td colspan = 10 class = td-vide></td>";
			}
			document.getElementById("table-profils").insertRow().insertCell(0).outerHTML =
				"<td>" + profil + "</td>" + c
			;
		}
	}
	document.getElementById("table-profils").insertRow().insertCell(0).outerHTML =
		"<th colspan = 21>" + "Sans profil" + "</th>"
	;
	document.getElementById("table-profils").insertRow().insertCell(0).outerHTML =
		"<th></th>" + "<th colspan = 10>" + "Couronnes" + "</th>"
	;
	for (catégorie of Object.keys(couronnes)) {
		document.getElementById("table-profils").insertRow().insertCell(0).outerHTML =
			"<th>" + catégorie + "</th>" + "<th colspan = 10>" + catégorie + "</th>"
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
			for (j = couronnes[catégorie][profil].length; j < 10; j++) {
				c += "<td class = td-vide></td>";
			}
			document.getElementById("table-profils").insertRow().insertCell(0).outerHTML =
				"<td>" + profil + "</td>" + c
			;
		}
	}
	document.getElementById("table-profils-heaumes").insertRow().insertCell(0).outerHTML =
		"<th colspan = 11>" + "Sans profil" + "</th>"
	;
	document.getElementById("table-profils-heaumes").insertRow().insertCell(0).outerHTML =
		"<th></th>" + "<th colspan = 10>" + "heaumes" + "</th>"
	;
	for (catégorie of Object.keys(heaumes)) {
		document.getElementById("table-profils-heaumes").insertRow().insertCell(0).outerHTML =
			"<th>" + catégorie + "</th>" + "<th colspan = 10>" + catégorie + "</th>"
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
			for (j = heaumes[catégorie][profil].length; j < 10; j++) {
				c += "<td class = td-vide></td>";
			}
			document.getElementById("table-profils-heaumes").insertRow().insertCell(0).outerHTML =
				"<td>" + profil + "</td>" + c
			;
		}
	}
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