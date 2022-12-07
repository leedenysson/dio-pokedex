function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonList(pokemon){
    return `
    <li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            ${convertPokemonTypesToLi(pokemon.types).join('')}
        </ol>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
    </div>
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonList).join('')
})
// 1)
// const listItems = []
// for (let i = 0; i < pokemons.length; i++) {
//     const pokemon = pokemons[i];
//     listItems.push(convertPokemonList(pokemon))
// }
// console.log(listItems)
// 2)
// const newList = pokemons.map((pokemon) => {
//     return convertPokemonList(pokemon)
// })
// const newHtml = newList.join('')
// pokemonList.innerHTML += newHtml
// 3)
// const newList = pokemons.map((pokemon) => convertPokemonList(pokemon))
// const newHtml = newList.join('')
// pokemonList.innerHTML += newHtml
// 4) 
// const newList = pokemons.map(convertPokemonList).join('')
// pokemonList.innerHTML += newHtml
// 5)
// pokemonList.innerHTML += pokemons.map(convertPokemonList).join('')
// https://www.youtube.com/watch?v=4x-kMJ4pTTg&ab_channel=DIO    