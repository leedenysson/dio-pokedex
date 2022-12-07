const pokeApi = {}

function convertPokeApiToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    return pokemon
}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiToPokemon)
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