let tab = [];

for (let i = 0; i < 50; i++) {
    res = Math.random() * 100
    tab.push(parseInt(res)); 
}

console.log(tab);

function moyenne (tab) {
    let somme = 0;
    for (let i = 0; i < tab.length; i++) {
        somme += tab[i];
        }
    return somme / tab.length;
    }



function mini(tab) {
    var l = tab.length;
    var minimum = tab[l - 1]; 
    while (l--) {
        if (tab[l] < minimum) {
            minimum = tab[l]; 
        }
    }
    return minimum;
};

function maxi(tab) {
    var l = tab.length;
    maximum = tab[l - 1]; 
    while (l--) {
        if (tab[l] > maximum) {
            maximum = tab[l]; 
        }
    }
    return maximum;
};

function nb_pair (tab) {
    let compteur = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] % 2 == 0) {
            compteur++;
            }
        }
    return compteur;
}

console.log('la moyenne est :' + moyenne(tab));
console.log('le plus petit nombre est :' + mini(tab));
console.log('Le plus grand nombre est : ' + maxi(tab));
console.log('le nombre de pair est : ' + nb_pair(tab));

