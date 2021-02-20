
//Para filtrar la data 

export const pokedex = {

  filterByType: (pokemons, pokemonType) => {
    const result = pokemons.filter(pokemon => pokemon.type.includes(pokemonType))
    return result;
  },
//Para ordenar
  orderByName: (pokemons, orderBy) => {
    let sortObj = [];
    
    switch (orderBy) {
      case 'A-Z':
        sortObj = pokemons.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
        break;
      case 'Z-A':
        sortObj = pokemons.sort((a, b) => ((a.name >= b.name) ? -1 : 1));
        break;
      case 'default':
        sortObj = pokemons;
        break;
      }
      return sortObj;
  },
  //Para buscar pokemon por nombre
  filterByName: (pokemons, pokemonName) => {
    const result = pokemons.filter(pokemon => pokemon.name.includes(pokemonName))
    return result;
  }

}




















