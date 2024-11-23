// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

function initialiser() {
	remplir();
	filtrer();
	accorderProfil();
	accorderParticulier();
}

function accorderParticulier() {
	obtenir("select-particulier", "I").addEventListener(
		"change",
		function() {
			particulier = this.value;
			valeurs = particuliers[codeCatégories[particulier.split(" ")[0]]][particulier.slice(3)];
			index = 0;
			for (nom of Object.keys(valeurs)) {
				if (Object.keys(valeurs)[index] == "devise" || Object.keys(valeurs)[index] == "cri") {
					obtenir(nom, "N")[0].value = valeurs[nom][1];
				} else {
					obtenir(nom, "N")[0].value = valeurs[nom][0] + " " + valeurs[nom][1];
				}
				index++;
			}
		}
	);
}

function accorderProfil() {
	obtenir("select-profil", "I").addEventListener(
		"change",
		function() {
			profil = this.value;
			valeurs = profils[codeCatégories[profil.split(" ")[0]]][profil.slice(3)];
			index = 0;
			for (nom of Object.keys(valeurs)) {
				if (Object.keys(valeurs)[index] == "devise" || Object.keys(valeurs)[index] == "cri") {
					obtenir(nom, "N")[0].value = valeurs[nom][1];
				} else {
					obtenir(nom, "N")[0].value = valeurs[nom][0] + " " + valeurs[nom][1];
				}
				index++;
			}
		}
	);
}

function filtrer() {
	obtenir("select-catégorie", "I").addEventListener(
		"change",
		function() {
			obtenir("optgroup", "S").forEach(
				function(groupe) {
					if (groupe.label == "**") {
						return;
					} else if (obtenir("select-catégorie", "I").value == "") {
						groupe.style.display = "block";
						return;
					}
					if (obtenir("select-catégorie", "I").value == groupe.label) {
						groupe.style.display = "block";
					} else {
						groupe.style.display = "none";
					}
				}
			);
		}
	);
}

function remplir() {
	listes = [catégories, profils, particuliers, écus, couronnes, heaumes, portants, portants, colliers, manteaux, couronnes];
	noms = [
		"select-catégorie",
		"select-profil",
		"select-particulier",
		"écu",
		"couronne",
		"heaume",
		"portant-dextre",
		"portant-senestre",
		"collier",
		"manteau",
		"couronne-manteau",
	];
	index = 0;
	for (liste of listes) {
		if (liste == catégories || liste == profils || liste == particuliers) {
			selectProfil = obtenir(noms[index], "I");
		} else {selectProfil = obtenir(noms[index], "C")[0];}
		option = document.createElement("option");
		if (liste == catégories) {option.textContent = "Tous";}
		else {option.textContent = "∅";}
		option.value = "";
		selectProfil.appendChild(option);
		for (codeCatégorie of Object.keys(liste)) {
			if (liste == catégories) {
				for (champ of Object.keys(catégories)) {
					option = document.createElement("option");
					option.textContent = champ;
					option.value = champ;
					selectProfil.appendChild(option);
				}
				break;
			} else {
				optgroup = document.createElement("optgroup");
				optgroup.label = codeCatégorie;
				for (champ of Object.keys(liste[codeCatégorie])) {
					option = document.createElement("option");
					option.textContent = champ;
					option.value = catégories[codeCatégorie] + " " + champ;
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