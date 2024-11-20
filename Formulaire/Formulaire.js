// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

function filtrer() {
	document.getElementById("select-pays").addEventListener(
		"change",
		function() {
			document.querySelectorAll("optgroup").forEach(
				function(groupe) {
					if (groupe.label == "**") {
						return;
					} else if (document.getElementById("select-pays").value == "") {
						groupe.style.display = "block";
						return;
					}
					if (document.getElementById("select-pays").value == groupe.label) {
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
			valeurs = profils[codePays[profil.split(" ")[0]]][profil.slice(3)];
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
	listes = [pays, profils, écus, couronnes, heaumes, portants, portants, colliers, manteaux];
	noms = [
		"select-pays",
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
		if (liste == profils || liste == pays) {selectProfil = document.getElementById(noms[index]);}
		else {selectProfil = document.getElementsByName(noms[index])[0];}
		option = document.createElement("option");
		if (liste == pays) {option.textContent = "Tous";}
		else {option.textContent = "∅";}
		option.value = "";
		selectProfil.appendChild(option);
		for (codePays2 of Object.keys(liste)) {
			if (liste == pays) {
				for (champ of Object.keys(pays)) {
					option = document.createElement("option");
					option.textContent = champ;
					option.value = champ;
					selectProfil.appendChild(option);
				}
				break;
			} else {
				optgroup = document.createElement("optgroup");
				optgroup.label = codePays2;
				for (champ of Object.keys(liste[codePays2])) {
					option = document.createElement("option");
					option.textContent = champ;
					option.value = pays[codePays2] + " " + champ;
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