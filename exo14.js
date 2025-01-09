let etudiants = [
    {"nom": "Japhet", "age": 17, "note" : 15},
    {"nom": "Calixte", "age": 18, "note" : 18 },
    {"nom": "jean", "age": 20, "note" : 8 },
    {"nom": "nul", "age": 21, "note" : 6},
    {"nom": "moi", "age": 16, "note" : 19},
    
]

function best_notes(etudiants) {
    let best = etudiants[0];
    for (let i = 0; i < etudiants.length; i++) {
        if (etudiants[i].note > best.note) {
            best = etudiants[i];
            }
        }
        return best;
    }


function note (etudiants) {
    let res = [];
    for (let i = 0; i < etudiants.length; i++) {
        if (etudiants[i].note >=  15) {
            res.push(etudiants[i].nom);
            }
        }
    return res;


}

function moyenne(etudiants) {
    let somme = 0;
    for (let i = 0; i < etudiants.length; i++) {
        somme += etudiants[i].note;
    }
    return somme / etudiants.length;
}



console.log(best_notes(etudiants))
console.log(note(etudiants))
console.log('la moyenne de la classe est de :', moyenne(etudiants))