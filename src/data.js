// estas funciones son de ejemplo

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
      break;*/
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
  return arrSort;
};