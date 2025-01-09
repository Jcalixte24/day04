let tab = [10, 2, 1, 17, 4, 7, 9, 3, 20, 8];

function tri(tab) {
    let l = tab.length;
    for (let i = 0; i < l; i++) {
        for (let j = i + 1; j < l; j++) {
            if (tab[i] > tab[j]) {
                let temp = tab[i];
                tab[i] = tab[j];
                tab[j] = temp;
            }
        }
    }
    return tab; 
}

console.log(tri(tab));
