function fetchPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((response) => console.log(response))
}

fetchPokemons()