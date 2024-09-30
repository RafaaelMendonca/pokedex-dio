const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


// proxima aula para assistir é MANIPULANDO O RESULTADO DA REQUISIÇÃO ATRAVÉS DE UMA PROMISSE
fetch(url)
    .then(function(response) {
        console.log(response)
})

console.log("ola");
