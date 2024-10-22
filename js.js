couronnes = {
/* Royaume de France */
	"Roi": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Royal_Crown_of_France_%28accurate_red_bonnet%29.svg",
	"Dauphin": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Crown_of_the_Dauphin_of_France_%28variant%29.svg",
	"Fils": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Crown_of_a_Royal_Prince_of_the_Blood_of_France.svg",
	"Petit-fils": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Crown_of_a_Royal_Prince_of_the_Blood_of_France_%28variant%29.svg",
	"Prince du sang": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Crown_of_a_Prince_of_the_Blood_of_France_%28variant%29.svg",
	"Duc et pair": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Crown_of_a_Duke_of_France.svg",
	"Duc": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Crown_of_a_Duke_of_France_%28variant%29.svg",
	"Marquis et pair": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Crown_of_a_Marquis_of_France.svg",
	"Marquis": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Crown_of_a_Marquis_of_France_%28variant%29.svg",
	"Comte et pair": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Crown_of_a_Count_of_France.svg",
	"Comte": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Crown_of_a_Count_of_France_%28variant%29.svg",
	"Vicomte": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Crown_of_a_Viscount_of_France_%28variant%29.svg",
	"Vidame": "https://upload.wikimedia.org/wikipedia/commons/0/03/Crown_of_a_Vidame_of_France.svg",
	"Baron": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Crown_of_a_Baron_of_France.svg",
	"Banneret": "https://upload.wikimedia.org/wikipedia/commons/3/31/Crown_of_a_Chevalier_of_France.svg",
	"Chevalier": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Torse_of_a_Chevalier_of_France.svg",
/* Empire français */
	"Empereur (1804)": "https://upload.wikimedia.org/wikipedia/commons/4/41/Heraldic_Crown_of_the_First_French_Empire.svg",
	"Empereur (1852)": "https://upload.wikimedia.org/wikipedia/commons/6/68/Imperial_Crown_of_Napoleon.svg",
	"Prince souverain": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Crown_of_a_Napoleonic_Prince_Souverain.svg",
	"Prince": "https://upload.wikimedia.org/wikipedia/commons/8/81/Cap_of_an_Imperial_Prince_Grand_Dignitary.svg",
	"Duc impérial": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Cap_of_an_Imperial_Duke.svg",
	"Comte impérial": "https://upload.wikimedia.org/wikipedia/commons/6/62/Cap_of_an_Imperial_Count.svg",
	"Baron impérial": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cap_of_an_Imperial_Baron.svg",
	"Chevalier impérial": "https://upload.wikimedia.org/wikipedia/commons/4/40/Cap_of_an_Imperial_Knight.svg",
/* Villes françaises */
	"Capitale": "https://upload.wikimedia.org/wikipedia/commons/1/11/Mural_Crown_of_a_French_Capital.svg",
	"Chef-lieu": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Mural_Crown_of_a_French_City.svg",
	"Commune": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Mural_Crown_of_a_French_Commune.svg",
/* Espagne */
	"Grand d'Espagne": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Heraldic_Crown_of_Spanish_Grandee.svg"
}

colliers = {
	"Ordre de Saint-Michel": "https://upload.wikimedia.org/wikipedia/commons/5/53/Order_of_Saint_Michael_%28heraldry%29.svg",
	"Ordre du Saint-Esprit": "https://upload.wikimedia.org/wikipedia/commons/3/34/Order_of_the_Holy_Spirit_%28heraldry%29.svg",
	"Corde": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Heraldic_cord.svg"
}

heaumes = {
	"": ""
}

manteaux = {
	"Grand d'Espagne": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Manto_de_Grande_de_Espa%C3%B1a.svg"
}

function générerArmoirie() {

	paramètresURL = new URLSearchParams(window.location.search);

	couronne = paramètresURL.get("couronne");
	heaume = paramètresURL.get("heaume");
	écu = paramètresURL.get("écu");
	portantSenestre = paramètresURL.get("portant-senestre");
	portantDextre = paramètresURL.get("portant-dextre");
	collier = paramètresURL.get("collier");
	cri = paramètresURL.get("cri");
	devise = paramètresURL.get("devise");

	if (couronne) {document.getElementById("img-couronne").src = couronnes[couronne];}
	if (heaume) {
		document.getElementById("img-heaume").src = "Heaumes/" + heaume + ".png";
		/* if (heaume) {
			document.getElementById("img-couronne").style.width = "100px";
			document.getElementById("img-couronne").style.marginBottom = "0px";
		} */
	}
	if (écu) {document.getElementById("img-écu").src = "Écus/" + écu + ".png";}
	if (portantSenestre) {document.getElementById("img-portant-senestre").src = "Portants/" + portantSenestre + ".png";}
	if (portantDextre) {document.getElementById("img-portant-dextre").src = "Portants/" + portantDextre + ".png";}
	if (collier) {
		document.getElementById("img-collier").src = colliers[collier];
		document.getElementById("img-écu").style.position = "absolute";
		document.getElementById("img-écu").style.marginLeft = "-213px";
		document.getElementById("img-écu").style.marginTop = "33px";
	} else {
		document.getElementById("img-collier").style.display = "none";
	}
	if (cri) {document.getElementById("span-cri").innerText = cri;} else {document.getElementById("td-cri").style.display = "none";}
	if (devise) {document.getElementById("span-devise").innerText = devise;} else {document.getElementById("td-devise").style.display = "none";}

}

/* https://fr.wikipedia.org/wiki/Couronne_(h%C3%A9raldique) */
