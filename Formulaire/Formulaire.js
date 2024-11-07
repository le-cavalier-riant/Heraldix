// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

function accorder() {
	document.getElementById("select-titre").addEventListener(
		"change",
		function() {
			titre = this.value;
			valeurs = profils[titre] || profils["Sans"];
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
	listes = [titres, écus, couronnes, heaumes, portants, portants, colliers, manteaux];
	noms = ["select-titre", "écu", "couronne", "heaume", "portant-dextre", "portant-senestre", "collier", "manteau"];
	index = 0;
	for (liste of listes) {
		if (liste == titres) {selectTitre = document.getElementById(noms[index]);}
		else {selectTitre = document.getElementsByName(noms[index])[0];}
		optionSans = document.createElement("option");
		optionSans.textContent = "Sans";
		optionSans.value = "";
		selectTitre.appendChild(optionSans);
		for (champ in liste) {
			optgroup = document.createElement("optgroup");
			optgroup.label = champ;
			liste[champ].forEach(
				optionText => {
					option = document.createElement("option");
					option.textContent = optionText;
					optgroup.appendChild(option);
				}
			);
			selectTitre.appendChild(optgroup);
		}
		index ++;
	}
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //