//https://www.delftstack.com/fr/howto/javascript/javascript-max-of-array/

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


let tab = [10, 2, 1, 17, 4, 7, 9, 3, 20, 8];
var Maximum = maxi(tab);
var Minimum = mini(tab);
console.log('Le Maximum est :' ,Maximum);
console.log('Le Minimum est :' ,Minimum);




