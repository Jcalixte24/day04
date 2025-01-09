
let ph = "Avec Dieu on n' échoue jamais";
var cpt = 0;

function compteur_mot(phrase) {
    if (phrase.length > 0) {
        let mot = phrase.split(" "); // Conversion en tableau en prenant les espaces
        cpt = mot.length; 
        return cpt;
    } else {
        return "Le tableau est vide";
    }
}

console.log(compteur_mot(ph));