let tab = [10, 2, 1, 17, 4, 7, 9, 3, 20, 8];

function moyenne (tab) {
    let somme = 0;
    for (let i = 0; i < tab.length; i++) {
        somme += tab[i];
        }
    return somme / tab.length;
    }

console.log('la moyenne est :' + moyenne(tab));