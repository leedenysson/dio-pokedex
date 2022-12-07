const pokeApi = {}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json()) //converte para json
        .then((jsonBody) => jsonBody.results) //resultado em json [pokemons]
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails)) //converte lista em uma lista de promessas de detalhamento dos pokemons em json**
        .then((detailRequest) => Promise.all(detailRequest)) //requisições 
        .then((pokemonDetails) => pokemonDetails)
}