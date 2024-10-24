/* ================================================================================================================= */
/*                                                                                                                   */
/*                                                     Héraldix                                                      */
/*                                                                                                                   */
/* ================================================================================================================= */

couronnes = {
/* Royaume de France */
	"Roi":          	"https://upload.wikimedia.org/wikipedia/commons/1/1c/Royal_Crown_of_France_(accurate_red_bonnet).svg",
	"Dauphin":      	"https://upload.wikimedia.org/wikipedia/commons/7/7e/Crown_of_the_Dauphin_of_France_(variant).svg",
	"Fils":         	"https://upload.wikimedia.org/wikipedia/commons/6/6d/Crown_of_a_Royal_Prince_of_the_Blood_of_France.svg",
	"Petit-fils":   	"https://upload.wikimedia.org/wikipedia/commons/1/1f/Crown_of_a_Royal_Prince_of_the_Blood_of_France_(variant).svg",
	"Prince du sang":	"https://upload.wikimedia.org/wikipedia/commons/3/3b/Crown_of_a_Prince_of_the_Blood_of_France_(variant).svg",
	"Duc et pair":  	"https://upload.wikimedia.org/wikipedia/commons/8/8e/Crown_of_a_Duke_of_France.svg",
	"Duc":          	"https://upload.wikimedia.org/wikipedia/commons/d/d4/Crown_of_a_Duke_of_France_(variant).svg",
	"Marquis et pair":	"https://upload.wikimedia.org/wikipedia/commons/e/e0/Crown_of_a_Marquis_of_France.svg",
	"Marquis":      	"https://upload.wikimedia.org/wikipedia/commons/7/7a/Crown_of_a_Marquis_of_France_(variant).svg",
	"Comte et pair":	"https://upload.wikimedia.org/wikipedia/commons/b/b9/Crown_of_a_Count_of_France.svg",
	"Comte":        	"https://upload.wikimedia.org/wikipedia/commons/b/b1/Crown_of_a_Count_of_France_(variant).svg",
	"Vicomte":      	"https://upload.wikimedia.org/wikipedia/commons/e/e8/Crown_of_a_Viscount_of_France_(variant).svg",
	"Vidame":       	"https://upload.wikimedia.org/wikipedia/commons/0/03/Crown_of_a_Vidame_of_France.svg",
	"Baron":        	"https://upload.wikimedia.org/wikipedia/commons/b/b7/Crown_of_a_Baron_of_France.svg",
	"Banneret":      	"https://upload.wikimedia.org/wikipedia/commons/3/31/Crown_of_a_Chevalier_of_France.svg",
	"Chevalier":    	"https://upload.wikimedia.org/wikipedia/commons/6/6d/Torse_of_a_Chevalier_of_France.svg",
/* Empire français */
	"Empereur (1804)":      	"https://upload.wikimedia.org/wikipedia/commons/4/41/Heraldic_Crown_of_the_First_French_Empire.svg",
	"Empereur (1852)":      	"https://upload.wikimedia.org/wikipedia/commons/6/68/Imperial_Crown_of_Napoleon.svg",
	"Prince souverain impérial":	"https://upload.wikimedia.org/wikipedia/commons/e/e6/Crown_of_a_Napoleonic_Prince_Souverain.svg",
	"Prince impérial":      	"https://upload.wikimedia.org/wikipedia/commons/8/81/Cap_of_an_Imperial_Prince_Grand_Dignitary.svg",
	"Duc impérial":         	"https://upload.wikimedia.org/wikipedia/commons/5/5d/Cap_of_an_Imperial_Duke.svg",
	"Comte impérial":       	"https://upload.wikimedia.org/wikipedia/commons/6/62/Cap_of_an_Imperial_Count.svg",
	"Baron impérial":       	"https://upload.wikimedia.org/wikipedia/commons/a/ae/Cap_of_an_Imperial_Baron.svg",
	"Chevalier impérial":   	"https://upload.wikimedia.org/wikipedia/commons/4/40/Cap_of_an_Imperial_Knight.svg",
/* Villes françaises */
	"Capitale":	"https://upload.wikimedia.org/wikipedia/commons/1/11/Mural_Crown_of_a_French_Capital.svg",
	"Chef-lieu":	"https://upload.wikimedia.org/wikipedia/commons/a/a2/Mural_Crown_of_a_French_City.svg",
	"Commune":	"https://upload.wikimedia.org/wikipedia/commons/a/aa/Mural_Crown_of_a_French_Commune.svg",
/* Royaume d'Espagne */
	"Grand d'Espagne":	"https://upload.wikimedia.org/wikipedia/commons/b/bd/Heraldic_Crown_of_Spanish_Grandee.svg"
}

colliers = {
/* Royaume de France */
	"Ordre de Saint-Michel":	"https://upload.wikimedia.org/wikipedia/commons/5/53/Order_of_Saint_Michael_(heraldry).svg",
	"Ordre du Saint-Esprit":	"https://upload.wikimedia.org/wikipedia/commons/3/34/Order_of_the_Holy_Spirit_(heraldry).svg",
	"Corde":                	"https://upload.wikimedia.org/wikipedia/commons/1/1e/Heraldic_cord.svg"
}

heaumes = {
	"Comte":	"https://upload.wikimedia.org/wikipedia/commons/0/0d/Meuble_héraldique_Heaume_comte.svg",
	"Vicomte":	"https://upload.wikimedia.org/wikipedia/commons/0/0d/Meuble_héraldique_Heaume_comte.svg"
}

manteaux = {
/* Royaume de France */
	"Pair": 	"https://upload.wikimedia.org/wikipedia/commons/a/a7/Blue_heraldic_mantle.svg",
	"Rouge":	"https://upload.wikimedia.org/wikipedia/commons/0/06/Generic_mantle.svg",
/* Royaume d'Espagne */
	"Grand d'Espagne":	"https://upload.wikimedia.org/wikipedia/commons/4/4f/Manto_de_Grande_de_España.svg"
}

portants = {
	"Ange":         	"Portants/Ange.png",
	"Lion":         	"Portants/Lion.png",
	"Ange (3/4)":   	"https://upload.wikimedia.org/wikipedia/commons/f/ff/Angelic_Supporter_(Heraldry).svg",
	"Ange (profil)":	"https://upload.wikimedia.org/wikipedia/commons/6/68/Meuble_héraldique_Ange_debout.svg",
	"Sauvage":      	"https://upload.wikimedia.org/wikipedia/commons/9/91/Wildman_Supporter_(Heraldry).svg",
	"Sauvage (pied sur sphère + bras tendu)":	"https://upload.wikimedia.org/wikipedia/commons/7/7b/Wild_man_holding_club_with_one_foot_on_sphere.svg"
}

function inverser(image) {
	if (image.transform == "scaleX(-1)") {
		image.transform = "";
	} else {
		image.transform = "scaleX(-1)";
	}
}

function générerArmoirie() {

	paramètresURL = new URLSearchParams(window.location.search);

	couronne = paramètresURL.get("couronne");
	heaume = paramètresURL.get("heaume");
	écu = paramètresURL.get("écu");
	portantDextre = paramètresURL.get("portant-dextre");
	portantSenestre = paramètresURL.get("portant-senestre");
	collier = paramètresURL.get("collier");
	manteau = paramètresURL.get("manteau");
	cri = paramètresURL.get("cri");
	devise = paramètresURL.get("devise");

	if (couronne) {document.getElementById("img-couronne").src = couronnes[couronne];}
	if (heaume) {
		document.getElementById("img-heaume").src = "Heaumes/" + heaume + ".png";
		if (heaume) {
			document.getElementById("img-couronne").style.width = "100px";
			document.getElementById("img-couronne").style.marginBottom = "0px";
		}
	}
	if (écu) {document.getElementById("img-écu").src = "Écus/" + écu + ".png";}
	if (portantDextre) {document.getElementById("img-portant-dextre").src = portants[portantDextre];}
	if (portantSenestre) {document.getElementById("img-portant-senestre").src = portants[portantSenestre];}
	if (collier) {
		document.getElementById("img-collier").src = colliers[collier];
		document.getElementById("img-portant-dextre").style.marginRight = "-140px";
		document.getElementById("img-portant-senestre").style.marginLeft = "-140px";
	} else {
		document.getElementById("img-collier").style.display = "none";
		document.getElementById("img-portant-dextre").style.marginRight = "10px";
		document.getElementById("img-portant-senestre").style.marginLeft = "10px";
	}
	if (manteau) {
		document.getElementById("div-contenu").style.backgroundImage = "url('" + manteaux[manteau] + "')";
	}
	if (cri) {
		document.getElementById("span-cri").innerText = cri;
	} else {
		document.getElementById("div-cri").style.display = "none";
	}
	if (devise) {
		document.getElementById("span-devise").innerText = devise;
	} else {
		document.getElementById("div-devise").style.display = "none";
	}

}

/* ================================================================================================================= */
/*                                                                                                                   */
/*                                                     Héraldix                                                      */
/*                                                                                                                   */
/* ================================================================================================================= */