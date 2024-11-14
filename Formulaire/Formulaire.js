// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //

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
	"SC": "Status Civitatis Vaticanӕ",
}

function accorder() {
	document.getElementById("select-profil").addEventListener(
		"change",
		function() {
			profil = this.value;
			valeurs = profils[codePays[profil.split(" ")[0]]][profil.slice(3)];
			for (nom of Object.keys(valeurs)) {
				// if (valeurs[nom][0] == "**") {
				// 	document.getElementsByName(nom)[0].value = valeurs[nom][1];
				// } else {
					document.getElementsByName(nom)[0].value = valeurs[nom][0] + " " + valeurs[nom][1];
				// }
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
			"Status Civitatis Vaticanӕ": "SC", 
		}
		for (pays of Object.keys(liste)) {
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
		index ++;
	}
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                     Héraldix                                                      //
//                                                                                                                   //
// ================================================================================================================= //