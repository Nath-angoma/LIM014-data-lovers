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
import {
   orderBy, 
} from './data.js';

 const showData = function(pokemonArray) {
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

 
 const pokemones = data.pokemon;
 const orderby = document.getElementById('orderby');
 const listElement = document.getElementById('list');
 orderby.addEventListener('change', () => {
   const orderbyValue = orderby.value;
    const showInfo = pokemon => `
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
   listElement.innerHTML = `${(orderBy(pokemones, orderbyValue)).map(showInfo).join('')}`;
 });

 


 /*
 const formulario = document.querySelector("inputSearch");
 let boton = document.querySelector("·btn-search");


 const filtrar=()=>{
  let lista.innerHTML ="";
   const texto = formulario.value.toLowerCase();
   for(let pokemon of pokemonArray){
     let nombre = pokemon.name.toLoweCase();
     if(nombre.indexOf(texto)!==1){
        lista += `        <li id="${pokemon.num}" class="pokemon">
        <span class="number-prefix ${pokemon.type[0]}">${pokemon.num}</span>
        <section>
          <figure class="card">
            <p class="info">${pokemon.name}</p>
            <img src="${pokemon.img}" class="imgPokemon">
          </figure>

        </section>
        <div class="type">`
        for (let poketype of pokemon.type) {
          lista += `          <span class="${poketype}">${poketype}</span>`
        }
          `          </div>
      </li>`
     }

   }
    if(lista.innerHTML === ''){
      lista.innerHTML += `          <li>noay
      </li>`
    }
    lista.innerHTML = list;
 }


 boton.addEventListener('click', filtrar)*/