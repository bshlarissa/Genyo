function escolherNome(){

    var nomePets = ["Acerola", "Tequila", "Nutella", "Amendoim", "Biscoito",
    "Amora", "Bacon", "Batata", "Chocolate", "Bisteca","Coxinha", "Mel", 
    "Baunilha", "Whisky", "Almôndega",
    "Quindim", "Bombom", "Alecrim", "Vodka", "Cacau",
    "Bolacha", "Paçoca", "Pipoca", "Gergelim", "Pudim", "Sherlock", 
    "Diana", "Aladdin", "Bambi", "Fiona",
    "Hulk", "Charles", "Merlin", "Harry", "Tarzan",
    "Penélope", "Scooby", "Hermione", "Mafalda", "Ariel",
    "Nemo", "Yoda", "Bolt", "Prenda", "Homer", "Thunder",
    "Percy", "Will", "Gromit", "Matilda", "Groot",
    "Luca", "Woody", "Relâmpago", "Sid", "Tony",
    "Troy", "Danny", "Speed", "Natasha", "Stitch"]

    var nomeAleatorio = Math.floor(Math.random() * nomePets.length);
    document.getElementById("nomeEscolhido").innerHTML = "<p>" + nomePets[nomeAleatorio];
}

// Fiz com ajuda desse vídeo: https://www.youtube.com/watch?v=2Hv3xFOqRxw
// Nomes para cachorros: conheça algumas opções criativas: https://www.petz.com.br/blog/dicas/nomes-para-cachorro/
