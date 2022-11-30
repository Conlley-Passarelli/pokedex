var pokemons = []
var listPokemonContentElement = document.querySelector('.list-content')

function fetchPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((response) => Promise.all(response.results.map(pokemon => 
            fetch(pokemon.url)
            .then((response) => response.json())
            .then((response) => ({
                id: response.id,
                name: response.name,
                image: response.sprites.other.dream_world.front_default,
                type: response.types[0].type.name
            }))
        )))
        .then((response) => response.map(pokemon => pokemons.push(pokemon)))
        .finally(() => listPokemonContentElement.innerHTML = listPokemons())
}

function listPokemons() {
    return pokemons.map(pokemon => `
    <div class="card">
          <img class="card-image" src="${pokemon.image}" alt="">
          <small class="card-id">${pokemon.id}</small>
          <strong class="card-name">${pokemon.name}</strong>
    </div>
    `).join('')
}

fetchPokemons()