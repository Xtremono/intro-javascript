//import {heroes} from "./data/heroes"

import {heroes} from './data/heroes'

//const getHeroeById = (id) => {
   // return heroes.find(heroe => {             // itero sobre cada "heroe" del array
     //   if (heroe.id === id) {                // busco el id de cada heroe del array y si coincide con el id, devuelvo al heroe
       //     return true;
       // } else {
         //   return false;
       // }
   // })
//};

const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);           // forma mas facil de hacer, y que funciona igual a la primera
;

console.log(getHeroeById(2)); // find(): Retorna un solo elemento (el primero que cumpla la condición) o undefined si no hay coincidencias.

const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

console.log(getHeroeByOwner("Marvel")); // filter(): Retorna un arreglo con todos los elementos que cumplan la condición (puede ser un arreglo vacío si no hay coincidencias).