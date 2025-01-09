let personne = {"nom": "Alice", 
    "age": 30, 
    "adresse": { "rue": 4 , "ville" : "Paris" ,'codePostal' : 75 },
    "hobbies": ["lecture", "natation", "voyages"] }

console.log(personne)

personne.hobbies.push("manger")
personne.age = 31
delete(personne.adresse.codePostal)
console.log(personne)

