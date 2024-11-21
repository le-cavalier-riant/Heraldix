// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

function initialiser() {
	remplir();
	filtrer();
	accorder();
}

function filtrer() {
	document.getElementById("select-catégorie").addEventListener(
		"change",
		function() {
			document.querySelectorAll("optgroup").forEach(
				function(groupe) {
					if (groupe.label == "**") {
						return;
					} else if (document.getElementById("select-catégorie").value == "") {
						groupe.style.display = "block";
						return;
					}
					if (document.getElementById("select-catégorie").value == groupe.label) {
						groupe.style.display = "block";
					} else {
						groupe.style.display = "none";
					}
				}
			);
		}
	);
}

function accorder() {
	document.getElementById("select-profil").addEventListener(
		"change",
		function() {
			profil = this.value;
			valeurs = profils[codeCatégories[profil.split(" ")[0]]][profil.slice(3)];
			index = 0;
			for (nom of Object.keys(valeurs)) {
				if (Object.keys(valeurs)[index] == "devise" || Object.keys(valeurs)[index] == "cri") {
					document.getElementsByName(nom)[0].value = valeurs[nom][1];
				} else {
					document.getElementsByName(nom)[0].value = valeurs[nom][0] + " " + valeurs[nom][1];
				}
				index++;
			}
		}
	);
}

function remplir() {
	listes = [catégories, profils, écus, couronnes, heaumes, portants, portants, colliers, manteaux];
	noms = [
		"select-catégorie",
		"select-profil",
		"écu",
		"couronne",
		"heaume",
		"portant-dextre",
		"portant-senestre",
		"collier",
		"manteau",
	];
	index = 0;
	for (liste of listes) {
		if (liste == profils || liste == catégories) {selectProfil = document.getElementById(noms[index]);}
		else {selectProfil = document.getElementsByName(noms[index])[0];}
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