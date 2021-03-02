
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





















// estas funciones son de ejemplo
/*
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const order = (arrayObj, orderBy) => {
  let sortObj = [];
  switch (orderBy) {
    case 'a-z':
      sortObj = arrayObj.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
      break;
    /*case 'max-cp':
      sortObj = arrayObj.sort((a, b) => a.stats['max-cp'] - b.stats['max-cp']);
      break;
    case 'max-hp':
      sortObj = arrayObj.sort((a, b) => a.stats['max-hp'] - b.stats['max-hp']);
      break;
    case 'num':
      sortObj = arrayObj.sort((a, b) => a.num - b.num);
      break;----
      default:
    }
    
    return sortObj;
}


// Muestra solo un poco
export const showInfo = pokemon => `
        <li class="pokemon">
            <span class="number-prefix">${pokemon.num}</span>
            <section>
              <figure class="card">
                <p class="info">${pokemon.name}</p>
                <img src="${pokemon.img}" class="imgPokemon">
              </figure>            
            </section>
            <div class="type"> 
              
        <span class=" ${pokemon.type[0]}">${pokemon.type[0]}</span>
        <span class=" ${pokemon.type[1]}">${pokemon.type[1]}</span>    
          </div>
        </li>
        `;
        

// Ordena Alfabeticamente
export const orderBy = (poke, order) => {
  let arrSort = [];
  arrSort = poke.sort((a, b) => {
    const nameA = a.name;
    const nameB = b.name;
    
    if (order === 'A-Z') {
      if (nameA > nameB) {
        return 1;
      }

      if (nameA < nameB) {
        return -1;
      }
      {
        return 0;
      }
      /* return (nameA > nameB) ? 1 : ((nameA < nameB) ? -1 : 0); ---
    }
    if (order === 'Z-A') {
      if (nameA > nameB) {
        return -1;
      }

      if (nameA < nameB) {
        return 1;
      }
      {
        return 0;
      }
    }
    
  });
  return arrSort;
};*/

//Busqueda de pokemon

/*export const search=(a, b)=>{
  const pokemon =a.filter(poke=>poke.name.StartsWith(b.toLoweCase()));

  return pokemon;
};*/

/*export const btnSearch = (arr, name) => {
  const getPokemon = arr.filter(obj => obj.name.toUpperCase() === name.toUpperCase());
  return getPokemon;
};*/

