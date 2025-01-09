let vote = ["Pomme", "Banane", "Orange", "Pomme", "Raisin", "Banane", "Banane"]

function compteur (vote) {
    let cpt = {}
    for (let i = 0; i < vote.length; i++) {
        if (cpt[vote[i]]) {
            cpt[vote[i]] += 1
        } else {
            cpt[vote[i]] = 1
            }
        }
    return cpt ;
    }

function gagnant (vote) {
    let cpt = compteur(vote)
    let maxi = 0 ;
    let gagnant = "";
    for (let fruit in cpt) {
        if (cpt[fruit] > maxi) {
            maxi = cpt[fruit]
            gagnant = fruit
            }
    }
    return gagnant ;

}

console.log(compteur(vote))
console.log('le gagnant est : ', gagnant(vote))
