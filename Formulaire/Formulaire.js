// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

pays2 = {
	"**": "**",
	"Royaume de France": "RF",
	"Empire français": "EF",
	"Villes françaises": "VF",
	"Royaume d'Espagne": "RE",
	"Royaume-Uni": "RU",
	"Saint-Empire romain germanique": "ER",
	"État du Vatican": "EV",
	"Royaume du Portugal": "RP",
	"Grand-Duché de Luxembourg": "GL",
	"Royaume de Suède": "RS",
	"Royaume de Jérusalem": "RJ",
}

codePays = {
	"**": "**",
	"RF": "Royaume de France",
	"EF": "Empire français",
	"VF": "Villes françaises",
	"RE": "Royaume d'Espagne",
	"RU": "Royaume-Uni",
	"ER": "Saint-Empire romain germanique",
	"EV": "État du Vatican",
	"RP": "Royaume du Portugal",
	"GL": "Grand-Duché de Luxembourg",
	"RS": "Royaume de Suède",
	"RJ": "Royaume de Jérusalem",
}

function filtrer() {
	document.getElementById("select-pays").addEventListener(
		"change",
		function() {
			document.querySelectorAll("#select-profil optgroup").forEach(
				function(groupe) {
					if (document.getElementById("select-pays").value == "") {
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

/* function collier2() {
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
} */

function remplir() {
	listes = [pays2, profils, écus, couronnes, heaumes, portants, portants, colliers, manteaux];
	noms = ["select-pays", "select-profil", "écu", "couronne", "heaume", "portant-dextre", "portant-senestre", "collier", "manteau"];
	index = 0;
	for (liste of listes) {
		if (liste == profils || liste == pays2) {selectProfil = document.getElementById(noms[index]);}
		else {selectProfil = document.getElementsByName(noms[index])[0];}
		option = document.createElement("option");
		if (liste == pays2) {option.textContent = "Tous";}
		else {option.textContent = "Sans";}
		option.value = "";
		selectProfil.appendChild(option);
		for (pays of Object.keys(liste)) {
			if (liste == pays2) {
				for (champ of Object.keys(pays2)) {
					option = document.createElement("option");
					option.textContent = champ;
					option.value = champ;
					selectProfil.appendChild(option);
				}
				break;
			} else {
				optgroup = document.createElement("optgroup");
				optgroup.label = pays;
				for (champ of Object.keys(liste[pays])) {
					option = document.createElement("option");
					option.textContent = champ;
					option.value = pays2[pays] + " " + champ;
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