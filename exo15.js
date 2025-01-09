let panier = [
    {nom : "oeuf", prix : 2.29, quantite : 4}, 
    {nom : "fromage", prix : 3.99, quantite : 2},
    {nom : "jambon", prix : 4.99, quantite : 1},
    {nom : "saucisse", prix : 5.99, quantite : 3},
];

function prix_total(panier){
    let total = 0;
    for (let i = 0; i < panier.length; i++) {
        total += panier[i].prix * panier[i].quantite;
    }
    return total;
}

function ajouter(panier, obj_art){
    panier.push(obj_art);
}

function supprimer(panier, nom){
    for (let i = 0; i < panier.length; i++) {
        if (panier[i].nom === nom) {
            panier.splice(i, 1);
            return 'Article supprimé avec succès';
        }
    }
    return 'Article non trouvé';
}



ajouter(panier, {nom : "eau", prix : 0.27, quantite : 3}); 
console.log(prix_total(panier));
console.log(supprimer(panier, "eau"));
console.log(panier)
console.log(prix_total(panier));