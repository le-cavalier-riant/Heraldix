// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

pays2 = {
	"Royaume de France": "RF", 
	"Empire français": "EF", 
	"Villes françaises": "VF", 
	"Reino de España": "RE", 
	"United Kingdom": "UK", 
	"Heiliges Römisches Reich": "HR", 
	"Reino de Portugal": "RP", 
	"Groussherzogtum Lëtzebuerg": "GL", 
	"Konungariket Sverige": "KS", 
	"Status Civitatis Vaticanæ": "SV",
}

codePays = {
	"**": "**",
	"RF": "Royaume de France",
	"EF": "Empire français",
	"VF": "Villes françaises",
	"RE": "Reino de España",
	"UK": "United Kingdom",
	"HR": "Heiliges Römisches Reich",
	"RP": "Reino de Portugal",
	"GL": "Groussherzogtum Lëtzebuerg",
	"KS": "Konungariket Sverige",
	"SV": "Status Civitatis Vaticanæ",
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
		listePays = {
			"**": "**",
			"Royaume de France": "RF", 
			"Empire français": "EF", 
			"Villes françaises": "VF", 
			"Reino de España": "RE", 
			"United Kingdom": "UK", 
			"Heiliges Römisches Reich": "HR", 
			"Reino de Portugal": "RP", 
			"Groussherzogtum Lëtzebuerg": "GL", 
			"Konungariket Sverige": "KS", 
			"Status Civitatis Vaticanæ": "SV", 
		}
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
					option.value = listePays[pays] + " " + champ;
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