// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

function accorder() {
	document.getElementById("select-profil").addEventListener(
		"change",
		function() {
			profil = this.value;
			valeurs = profils[codePays[profils.split(" ")[0]]][profil.slice(3)] || profils["Sans"];
			for ([nom, valeur] of Object.entries(valeurs)) {
				document.getElementsByName(nom)[0].value = valeur;
			}
		}
	);
}

function collier2() {
	document.getElementsByName("collier")[0].addEventListener(
		"change",
		function() {
			collier = this.value;
			if (collier != "") {document.getElementsByClassName("caché")[0].style.display = "block";}
			else {
				document.getElementsByClassName("caché")[0].style.display = "none";
				document.getElementsByName("collier-2")[0].value = "";
			}
		}
	);
}

function remplir() {
	listes = [profils, écus, couronnes, heaumes, portants, portants, colliers, manteaux];
	noms = ["select-profil", "écu", "couronne", "heaume", "portant-dextre", "portant-senestre", "collier", "manteau"];
	index = 0;
	for (liste of listes) {
		if (liste == profils) {selectProfil = document.getElementById(noms[index]);}
		else {selectProfil = document.getElementsByName(noms[index])[0];}
		optionSans = document.createElement("option");
		optionSans.textContent = "Sans";
		optionSans.value = "";
		selectProfil.appendChild(optionSans);
		listePays = {
			"Royaume de France": "RF ",
			"Empire français": "EF",
			"Villes français": "VF",
			"Reino de España": "RE ",
			"United Kingdom": "UK ",
		}
		code = "";
		if (liste == écus || liste == portants) {
			for (champ of Object.keys(liste)) {
				option = document.createElement("option");
				option.textContent = champ;
				option.value = code + champ;
				selectProfil.appendChild(option);
			}
		}
		else {
			for (pays of Object.keys(liste)) {
				code = listePays[pays];
				optgroup = document.createElement("optgroup");
				optgroup.label = pays;
				for (champ of Object.keys(liste[pays])) {
					option = document.createElement("option");
					option.textContent = champ;
					option.value = code + champ;
					optgroup.appendChild(option);
				}
				selectProfil.appendChild(optgroup);
			}
		}
		index ++;
	}
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //