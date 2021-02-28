export const pokedex = {
  //Para filtrar la data por tipo
    filterByType: (pokemons, pokemonType) => {
      if(pokemonType === '') {
        return pokemons
      }
      const result = pokemons.filter(pokemon => pokemon.type.includes(pokemonType))
      return result;
    },
  //Para ordenar
    orderByName: (pokemons, orderBy) => {
      let sortObj = [];
      let option = orderBy.replace(/ /g,'')
  
      switch (option) {
        case 'A-Z':
          sortObj = pokemons.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
          break;
        case 'Z-A':
          sortObj = pokemons.sort((a, b) => ((a.name >= b.name) ? -1 : 1));
          break;
        case 'Order':
          sortObj = pokemons.sort((a, b) => ((a.num <= b.num) ? -1 : 1));;
          break;
        }
        return sortObj;
    },
    //Para buscar pokemon por nombre
    filterByName: (pokemons, pokemonName) => {
      const result = pokemons.filter(pokemon => pokemon.name.includes(pokemonName))
      return result;
    },
    //Estadistica que suma todos los stats de ese pokemon y lo divide por la cantidad de stats
    calculateStats: (pokemon) => {
      let stat = parseFloat(pokemon.stats['base-attack'])
      stat += parseFloat(pokemon.stats['base-defense'])
      stat += parseFloat(pokemon.stats['base-stamina'])
      stat += parseFloat(pokemon.stats['max-cp'])
      stat += parseFloat(pokemon.stats['max-hp'])
      return stat / 5
    }
  
  }