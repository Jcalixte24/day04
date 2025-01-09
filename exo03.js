const nombre = "10,20,30,40";

//console.log(nombre);

var tab = nombre.split(",");

console.log("Le nombre total d'éléments est : " + tab.length);
console.log("Les éléments sont : " + tab);

var somme = 0;
for (var i = 0; i < tab.length; i++) {
    somme = somme + parseInt(tab[i]); //convertir chaine de caractere en entier
}

console.log("la somme est : " + somme);

moyenne = somme / tab.length;
console.log("la moyenne est : " + moyenne);

res= []
for (var i = 0; i < tab.length; i++) {
    if (parseInt(tab[i]) > moyenne) {
        res.push(tab[i]);
        }
    }

console.log(res)
    
