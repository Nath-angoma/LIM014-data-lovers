//import {order } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
//import data from './data/pokemon/pokemon.js';
//console.log(example, data);
// console.log(data);
//Aquí estoy declarando una función que recibe como parámetro un arreglo de pokemones
//getElementBy Id trae un array con todos los elementos con el id que se le indique para poder recorrer un for despúes
//Inicio la variable con un valor vacio para que en un principio reciba la lista (ul)
//Despues hago uso de un bucle para iterar cada uno de los objetos del array y almacenarlos en la variable pokemon
//luego hace el procedimiento del bloque (sentencia porque realizará una acción ) y pasa con el siguiente elemento del arreglo


import data from './data/pokemon/pokemon.js';
import {pokedex} from './data.js';

const containerList = document.getElementById("list")
const pokemonModal = document.getElementById('miModal');
var body = document.getElementsByTagName("body")[0];

const showData = function (pokemonArray) {
  let pokemonList = ""


  pokemonArray.forEach( pokemon => {
    const item = document.createElement('li')
    item.className = 'pokemon '
    item.id = pokemon.num
    containerList.appendChild(item).innerHTML = `
         <span class="number-prefix ${pokemon.type[0]}">${pokemon.num}</span>
         <section>
           <figure class="card">
             <p class="info">${pokemon.name}</p>
             <img src="${pokemon.img}" class="imgPokemon">
           </figure>

         </section>
         <div class="type">${pokemon.type.map(type => '<span class="' + type + '">'+ type +'</span>')}</div>
         <button id="button-${pokemon.num}">More info</button>
    `
    const pokemonButton = document.getElementById('button-'+pokemon.num)

    pokemonButton.addEventListener('click', () => {
      console.log('se disparo evento de ', pokemonButton.id)
      pokemonModal.style.display = "block";
      body.style.position = "static";
      body.style.height = "100%";
      body.style.overflow = "hidden";

      pokemonModal.innerHtml = `
      
      <div class="modal-contenido">
        <a href="#">X</a>
        <div class="row1">
          <div class="modal_block1">
            <img class="modal_block1 - img" src="https://www.serebii.net/pokemongo/pokemon/001.png">
            <p class="modal_block1-txt"> N° 001</p>
            <p class="txt-modal-title">BULBASAUR</p>
            <p class="version-description"> About:This Pokémon is born with a seed on its back, which sprouts over time.
            </p>
          </div>

          <section class="restandweak">
            <h4 class="type"> Type </h4>
            <img class="resist-weak-img" src="./img/types-pokemon/fire.png">
            <div class="modal_block4">


              <div class="resist-weak-ctn">
                <h4 class="modal-h4"> RESISTANCE</h4>
                <div>
                  <img class="resist-weak-img" src="./img/types-pokemon/water.png">
                  <img class="resist-weak-img" src="./img/types-pokemon/electric.png">
                  <img class="resist-weak-img" src="./img/types-pokemon/grass.png">
                  <img class="resist-weak-img" src="./img/types-pokemon/fighting.png">
                  <img class="resist-weak-img" src="./img/types-pokemon/fairy.png">
                </div>

              </div>

              <div class="resist-weak-ctn">
                <h4 class="modal-h4">WEAKNESSES</h4>
                <div>
                  <img class="resist-weak-img" src="./img/types-pokemon/fire.png">
                  <img class="resist-weak-img" src="./img/types-pokemon/ice.png">
                  <img class="resist-weak-img" src="./img/types-pokemon/flying.png">
                  <img class="resist-weak-img" src="./img/types-pokemon/psychic.png">
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="row2">
          <article class="rows">

            <section class="firstRow">
              <section class="heighWeight">
                <p> Height:0.61M </p>
                <br>
                <p> Weight:8.5kg </p>
              </section>
              <section class="egg">
                <img class="egg" src="./img/egg-lucky.png">
                <p> 2km</p>
              </section>
            </section>
            <section class="secondRow">


              <article class="sub-title">
                <article class="titleAttack" colspan="3."> Quick Move: </article>
                <p class="information"> Ember </p>
                <p class="information"> scratch </p>
              </article>



              <article class="sub-title">
                <article class="titleAttack" colspan="4.">Special Attack: </article>
                <p class="information"> Flame chang </p>
                <p class="information"> Flame burst</p>
                <p class="information"> Flamethrower </p>
              </article>

            </section>

          </article>
          <div class="evolandstas" id="column-M">
            <!-- <div class="modal_block2">   
                        <h3 class="modal-h3">EVOLUTION</h3>
                     </div>-->
            <section class="evoluciones">

              <div class="container-movements">
                <h3 class="modal-h3">EVOLUTION</h3>
                <div class="evolution-each-container">
                  <img class="evolution-img" src="https://www.serebii.net/pokemongo/pokemon/002.png">
                  <p class="evolution-p">IVYSAUR</p>
                  <p class="evolution-p">N°002</p>
                </div>
                <div class="evolution-each-container">
                  <img class="evolution-img" src="https://www.serebii.net/pokemongo/pokemon/003.png">
                  <p class="evolution-p">VENUSAUR</p>
                  <p class="evolution-p">N°003</p>
                </div>
              </div>
            </section>
            <section class="column">
              <h2 class="subtitle"> Stats </h2>
              <p> Max-Hp
                <br>
                113
              </p>
              <p> Max-cp
                <br>
                1115
              </p>
              <p>
                <Base-attack></Base-attack>
                <br>
                118
              </p>
              <p> Base-Defense
                <br>
                111
              </p>
              <p> Base-Stamina
                <br>
                128
              </p>
            </section>
          </div>
        </div>
      </div>
      `
    })

  })
  /*
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
  */
}

showData(data.pokemon)

const filterBy = document.getElementById('selectType');
filterBy.addEventListener('change', () => {
  const pokemonType = filterBy.value;
  showData(pokedex.filterByType(data.pokemon, pokemonType))

});

const orderby = document.getElementById('orderby');
//const listElement = document.getElementById('list');
orderby.addEventListener('change', () => {
  const orderbyValue = orderby.value;
  showData(pokedex.orderByName(data.pokemon, orderbyValue))
});

const searchBy = document.getElementById('inputSearch');
searchBy.addEventListener('change', () => {
  const pokemonName = searchBy.value;
  showData(pokedex.filterByName(data.pokemon, pokemonName))

});

















