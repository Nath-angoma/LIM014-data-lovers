// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};


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
  let arraySort = [];
  arraySort = poke.sort((a, b) => {
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
      /* return (nameA > nameB) ? 1 : ((nameA < nameB) ? -1 : 0); */
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
  return arraySort;
};

//Busqueda de pokemon

/*export const search=(a, b)=>{
  const pokemon =a.filter(poke=>poke.name.StartsWith(b.toLoweCase()));

  return pokemon;
};*/

/*export const btnSearch = (arr, name) => {
  const getPokemon = arr.filter(obj => obj.name.toUpperCase() === name.toUpperCase());
  return getPokemon;
};*/

