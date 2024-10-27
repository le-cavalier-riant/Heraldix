/* ================================================================================================================= */
/*                                                                                                                   */
/*                                                     Héraldix                                                      */
/*                                                                                                                   */
/* ================================================================================================================= */

function synchroniser() {
	document.getElementById("select-titre").addEventListener(
		"change",
		function() {
			titre = this.value;
			if (titre == "Roi") {
				document.getElementsByName("couronne")[0].value = "Roi";
				document.getElementsByName("écu")[0].value = "France";
				document.getElementsByName("heaume")[0].value = "Roi";
				document.getElementsByName("manteau")[0].value = "Pair";
				document.getElementsByName("portant-dextre")[0].value = "Ange";
				document.getElementsByName("portant-senestre")[0].value = "Ange";
				document.getElementsByName("devise")[0].value = "Lilia non laborant neque nent";
				document.getElementsByName("cri")[0].value = "Montjoie saint Denis";
			} else if (titre == "Prince (du sang royal)") {
				document.getElementsByName("couronne")[0].value = "Prince (du sang royal)";
				document.getElementsByName("heaume")[0].value = "Prince";
				document.getElementsByName("manteau")[0].value = "Sans";
			} else if (titre == "Duc (souverain)") {
				document.getElementsByName("couronne")[0].value = "Duc";
				document.getElementsByName("heaume")[0].value = "Prince";
				document.getElementsByName("manteau")[0].value = "Sans";
			} else if (titre == "Prince") {
				document.getElementsByName("couronne")[0].value = "Prince";
				document.getElementsByName("heaume")[0].value = "Prince";
				document.getElementsByName("manteau")[0].value = "Sans";
			} else if (titre == "Duc (non souverain)") {
				document.getElementsByName("couronne")[0].value = "Duc";
				document.getElementsByName("heaume")[0].value = "Duc";
				document.getElementsByName("manteau")[0].value = "Sans";
			} else if (titre == "Marquis et pair") {
				document.getElementsByName("couronne")[0].value = "Marquis et pair";
				document.getElementsByName("heaume")[0].value = "Marquis";
				document.getElementsByName("manteau")[0].value = "Pair";
			} else if (titre == "Marquis") {
				document.getElementsByName("couronne")[0].value = "Marquis";
				document.getElementsByName("heaume")[0].value = "Marquis";
				document.getElementsByName("manteau")[0].value = "Sans";
			} else if (titre == "Sans") {
				document.getElementsByName("couronne")[0].value = "Sans";
				document.getElementsByName("heaume")[0].value = "Sans";
				document.getElementsByName("manteau")[0].value = "Sans";
				document.getElementsByName("écu")[0].value = "Sans";
				document.getElementsByName("portant-dextre")[0].value = "Sans";
				document.getElementsByName("portant-senestre")[0].value = "Sans";
				document.getElementsByName("devise")[0].value = "";
				document.getElementsByName("cri")[0].value = "";
			}
		}
	);
}

/* ================================================================================================================= */
/*                                                                                                                   */
/*                                                     Héraldix                                                      */
/*                                                                                                                   */
/* ================================================================================================================= */