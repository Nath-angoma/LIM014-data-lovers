import data from './data/pokemon/pokemon.js';
import {pokedex} from './data.js';



const showData = function (pokemonArray) {
  let list = document.getElementById("list")
  let pokemonList = ""

  for (let pokemon of pokemonArray) {
    pokemonList += `        <li id="${pokemon.num}" class="pokemon">
         <span class="number-prefix ${pokemon.type[0]}">${pokemon.num}</span>
         <section>
           <figure class="card">
             <p class="info">${pokemon.name}</p>
             <img src="${pokemon.img}" class="imgPokemon">
           </figure>

         </section>
         <div class="type">`
    for (let poketype of pokemon.type) {
      pokemonList += `          <span class="${poketype}">${poketype}</span>`
    }
    `          </div>
       </li>`
  }
  //Aquí estoy concatenando lo que ya tengo es decir las listas con el primer pokemon  
  //he usado inerHTML para cambiar el html de un elemento en este caso la lista no ordenada
  list.innerHTML = pokemonList;
}

showData(data.pokemon)

const filterBy = document.getElementById('selectType');
filterBy.addEventListener('change', () => {
  const pokemonType = filterBy.value;
  showData(pokedex.filterByType(data.pokemon, pokemonType))

});

const orderby = document.getElementById('orderby');
const listElement = document.getElementById('list');
orderby.addEventListener('change', () => {
  const orderbyValue = orderby.value;
  showData(pokedex.orderByName(data.pokemon, orderbyValue))
});
