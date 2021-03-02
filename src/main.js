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



const showData = function (pokemonArray) {
  let list = document.getElementById("list")
  let pokemonList = ""
  for (let pokemon of pokemonArray) {
    pokemonList += `        <li class="pokemon">
         <span class="number-prefix ${pokemon.type[0]}">${pokemon.num}</span>
         <section class="">
           <figure class="card" id="${pokemon.num}" >
             <p class="info">${pokemon.name}</p>
             <img src="${pokemon.img}" class="imgPokemon" >
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

  // Se obtiene el boton que abre el modal

  let arrayCard = document.getElementsByClassName("card");
  for(let cardPokemon of arrayCard){
     cardPokemon.onclick=function() { 
      modal.style.display = "block";
      //console.log("cardPokemon.onclick",cardPokemon.id);
      // recorrer el arreglo de los pokemon y capturar un elemento
      for(const poke of data.pokemon){
        //Necesito del elemento el id y comparalo conb el id de mi card al hacer click
        if(poke.num == cardPokemon.id){
          //el map me devuelve un array
          let arrayImage= poke.type.map(t=>  ` <img class="resist-weak-img" src="./${getImageType(t)}"> ` )
          arrayImage.join("");
          let modalContent = document.getElementById("bodyModal");  
          modalContent.innerHTML =
          ` 
          <div class="row1">
          <div class="modal_block1">
          <img class="modal_block1 - img"  src="${poke.img}" >
          <p class= "modal_block1-txt"> N: ${poke.num}</p>
          <p class="txt-modal-title">${poke.name.toUpperCase()}</p>
          <p class="version-description">About:${poke.about}</p>
        </div>
        <section class="restandweak"> 
    <h4 class="type"> Type </h4>
     ${arrayImage.join("")}
    <div class="modal_block4">
          
          
    <div class="resist-weak-ctn">
        <h4 class="modal-h4"> RESISTANCE</h4>
         <div>
         <div class="resistant">${resistant(poke.resistant)}</div>
        </div>
            
    </div>    
         
    <div class="resist-weak-ctn">
        <h4 class="modal-h4">WEAKNESSES</h4>
            <div >
            <div class="resistant">${weaknesses(poke.weaknesses)}</div>
            </div>
    </div>
  </div>
  </section>
        </div>
        <div class="row2">
            <article class="rows">
                <div class="firstRow">
                    <section class="heighWeight">
                    <p>Height <br>${poke.size['height']} </p>
                    <p>Weight <br>${poke.size['weight']} </p>
                    </section>
                    <section class="egg">
                        <img class="egg" src="./img/egg.png">
                        <p> 2km</p>
                    </section>
                </div>
        <section class="tablas">
        
            <article class="titleAttack" colspan="3."> Quick Move: </article>

            <article class= "sub-title">
            <div>${showsAttacks(obtainNames(poke['quick-move']))}</div> 
               
            </article>
                
                
            <article class="titleAttack" colspan="4.">Special Attack: </article>

            <article class= "sub-title">
            <div>${showsAttacks(obtainNames(poke['special-attack']))}</div>
            </article>  
                    
        </section>
            </article>
        </div>

        <div class="evolandstas" id="column-M">
           <!-- <div class="modal_block2">   
               <h3 class="modal-h3">EVOLUTION</h3>
            </div>-->
            <section class="evoluciones">
                <h3 class="modal-h3">EVOLUTION</h3>
                <div class="container-movements">
                ${Evolution(poke)}
                </div>
            </section>
            <section class="column">
            
                <h2 class="subtitle"> Stats </h2>
                    <canvas id="myChart" width="400" height="400">${StatsCanvas[poke.stats]}</canvas>
            </section>
        `;
        break; 
        }

      }
  // Get the <span> element that closes the modal
  StatsCanvas();
    }
    
  }
  
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

// Get the modal
let modal = document.getElementById("myModal");

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}   

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
   // showDataModal();
  }
}

function getImageType(type){
  let url = "";
  switch (type){
    case "grass" : 
      url= "img/poketype/grass.png";
      break;
    case "poison":
      url= "img/poketype/poison.png";
      break;
    case "dragon":
      url="img/poketype/dragon.png";
      break;
    case "electric":
      url="img/poketype/electric.png";
      break;
    case "fairy":
      url="img/paketype/fairy.png";
      break;
    case "fighting":
      url="img/poketype/fighting.png";
      break;
      case "fire":
      url="img/poketype/fire.png";
      break;
    case "flying":
      url="img/poketype/flying.png";
      break;
    case "ghost":
      url="img/poketype/ghost.png";
      break;
      case "ground":
        url="img/poketype/ground.png";
        break;
      case "ice":
        url="img/poketype/ice.png";
        break;
      case "bug":
        url="img/poketype/bug.png";
        break;
        case "normal":
          url="img/poketype/normal.png";
          break;
        case "psychic":
          url="img/poketype/psychic.png";
          break;
        case "rock":
          url="img/poketype/rock.png";
          break;
          case "steel":
            url="img/poketype/steel.png";
            break;
          case "water":
            url="img/poketype/water.png";
            break;

  }
  return url;
}

const resistant = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((resistantPokemon) => {
    console.log(resistantPokemon)
    imgEachPokemon += `<img src="img/poketype/${resistantPokemon}.png" alt="resistant"/>`;
    //console.log(resistantPokemon)
  });
  console.log(arrayType)
  return imgEachPokemon;
};

const weaknesses = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((weaknessesPokemon) => {
    imgEachPokemon += `<img src="img/poketype/${weaknessesPokemon}.png" alt="weaknesses"/>`;
  });
  return imgEachPokemon;
};

const obtainNames = (attack) => {
  const names = attack.map(name => name.name);
  return names;
};

const showsAttacks = (arrayAtacks) => {
  let stabEachPokemon = '';
  arrayAtacks.forEach((nuevo) => {
    stabEachPokemon += `<p class="comun-attack">${nuevo}</p>`;
  });
  return stabEachPokemon;
};

/*function showTable(data) {
  const table = data.map(elemento => {
    return `<td>${elemento}</td>`
  }).join('');
  return table;
}
export const attackName = (attack) => {
  const name = attack.map(name => name.name);
  return name;
};*/

const Evolution = (pokemon) => {
  let templateEvolution = '';
  if (pokemon.evolution['next-evolution'] === undefined && pokemon.evolution['prev-evolution'] === undefined) {
    templateEvolution += `
  <div class="evolution-each-container">
    <h4 class="">This pokemon is not part of an evolutionary line</h4>
  </div>
  `;
  }
  if (pokemon.evolution['next-evolution'] !== undefined) {
    templateEvolution += `
  <div id="${pokemon.evolution['next-evolution'][0].num}" class="evolution-each-container">
    <img class="evolution-img" src="https://www.serebii.net/pokemongo/pokemon/${pokemon.evolution['next-evolution'][0].num}.png"/>
    <h4 class="evolution-h4">Next-evolution</h4>
    <p class="evolution-p">#${pokemon.evolution['next-evolution'][0].num}</p>
    <p class="evolution-p">${pokemon.evolution['next-evolution'][0].name.toUpperCase()}</p>
  </div>
  `;
    if (pokemon.evolution['next-evolution'][0]['next-evolution'] !== undefined) {
      templateEvolution += `
      <div id="${pokemon.evolution['next-evolution'][0]['next-evolution'][0].num}"  class="evolution-each-container">
        <img class="evolution-img" src="https://www.serebii.net/pokemongo/pokemon/${pokemon.evolution['next-evolution'][0]['next-evolution'][0].num}.png"/>
        <h4 class="evolution-h4">Next-evolution</h4>
        <p class="evolution-p">#${pokemon.evolution['next-evolution'][0]['next-evolution'][0].num}</p>
        <p class="evolution-p">${pokemon.evolution['next-evolution'][0]['next-evolution'][0].name.toUpperCase()}</p>
      </div>
      `;
    }
  }
  if (pokemon.evolution['prev-evolution'] !== undefined) {
    templateEvolution += `
      <div id="${pokemon.evolution['prev-evolution'][0].num}" class="evolution-each-container">
        <img class="evolution-img" src="https://www.serebii.net/pokemongo/pokemon/${pokemon.evolution['prev-evolution'][0].num}.png"/>
        <h4 class="evolution-h4">Prev-evolution</h4>
        <p class="evolution-p">#${pokemon.evolution['prev-evolution'][0].num}</p>
        <p class="evolution-p">${pokemon.evolution['prev-evolution'][0].name.toUpperCase()}</p>
      </div>
      `;
    if (pokemon.evolution['prev-evolution'][0]['prev-evolution'] !== undefined) {
      templateEvolution += `
      <div id="${pokemon.evolution['prev-evolution'][0]['prev-evolution'][0].num}" class="evolution-each-container">
        <img class="evolution-img" src="https://www.serebii.net/pokemongo/pokemon/${pokemon.evolution['prev-evolution'][0]['prev-evolution'][0].num}.png"/>
        <h4 class="evolution-h4">Prev-evolution</h4>
        <p class="evolution-p">#${pokemon.evolution['prev-evolution'][0]['prev-evolution'][0].num}</p>
        <p class="evolution-p">${pokemon.evolution['prev-evolution'][0]['prev-evolution'][0].name.toUpperCase()}</p>
      </div>
      `;
    }
  }
  return templateEvolution;
};

function getNextEvolution(elemento) {
  let nextEvolution = elemento[0]['next-evolution'];
  const evolutions =[];
  if(nextEvolution) {
    evolutions.push(...getNextEvolution(nextEvolution));
  }
  evolutions.push(elemento[0]);
  return evolutions.reverse();
}
function getPrevEvolution(elemento) {
  let prevEvolution = elemento[0]['prev-evolution'];
  const evolutions =[];
  if(prevEvolution) {
    evolutions.push(...getNextEvolution(prevEvolution));
  }
  evolutions.push(elemento[0]);
  return evolutions.reverse();
}







/*const StatsCanvas = (pokemon) => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx,{
    type:"bar",
    data: {
      labels:['base-defense', 'base-stamina','max-cp','max-hp'],
      dataset:[{
        label:'Stats',
        data: [pokemon],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor:'rgba(66,134,244)', 
      }],
    },
  });
  return myChart
  }*/
  
  
  const StatsCanvas = (pokemon) => {
    const ctx = document.getElementById('myChart').getContext('2d');
    // eslint-disable-next-line no-undef
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['base-attack', 'base-defense', 'base-stamina', 'max-hp'],
        datasets: [{
          label: 'Pokemon Stats',
          data: 3[pokemon.stats['base-attack'], pokemon.stats['base-defense'], pokemon.stats['base-stamina'], pokemon.stats['max-cp']/10, pokemon.stats['max-hp']],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor:'rgba(66,134,244)',
        }],
      },
    });
    console.log(myChart)
    return myChart;
    
  }

  