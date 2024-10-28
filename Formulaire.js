/* ================================================================================================================= */
/*                                                                                                                   */
/*                                                     Héraldix                                                      */
/*                                                                                                                   */
/* ================================================================================================================= */

function accorder() {
	document.getElementById("select-titre").addEventListener(
		"change",
		function() {
			titre = this.value;
			valeurs = valeursParDefaut[titre] || valeursParDefaut["Sans"];
			for ([nom, valeur] of Object.entries(valeurs)) {
				document.getElementsByName(nom)[0].value = valeur;
			}
		}
	);
}

/* function colliersss() {
	document.getElementsByName("collier")[0].addEventListener(
		"change",
		function() {
			collier = this.value;
			if (collier != "") {document.getElementsByClassName("caché")[1].style.display = "block";}
			else {document.getElementsByClassName("caché")[1].style.display = "none";}
		}
	);
} */

/* ================================================================================================================= */
/*                                                                                                                   */
/*                                                     Héraldix                                                      */
/*                                                                                                                   */
/* ================================================================================================================= */