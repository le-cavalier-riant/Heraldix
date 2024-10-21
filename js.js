couronnes = {
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
	"Chevalier": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Torse_of_a_Chevalier_of_France.svg"
}

function générerArmoirie() {

	paramètresURL = new URLSearchParams(window.location.search);

	couronne = paramètresURL.get("couronne");
	écu = paramètresURL.get("écu");
	portantSenestre = paramètresURL.get("portant-senestre");
	portantDextre = paramètresURL.get("portant-dextre");
	cri = paramètresURL.get("cri");
	devise = paramètresURL.get("devise");

	if (couronne) {document.getElementById("img-couronne").src = couronnes[couronne];}
	if (écu) {document.getElementById("img-écu").src = "Écus/" + écu + ".png";}
	if (portantSenestre) {document.getElementById("img-portant-senestre").src = "Portants/" + portantSenestre + ".png";}
	if (portantDextre) {document.getElementById("img-portant-dextre").src = "Portants/" + portantDextre + ".png";}
	if (cri) {document.getElementById("span-cri").innerText = cri;} else {document.getElementById("td-cri").style.display = "none";}
	if (devise) {document.getElementById("span-devise").innerText = devise;} else {document.getElementById("td-devise").style.display = "none";}

}

/* https://fr.wikipedia.org/wiki/Couronne_(h%C3%A9raldique) */
