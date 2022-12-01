"use strict";
/* 41. Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const funcionAleatoria = (min, max) => {

    return Math.floor(Math.random()*(max-min+1)+min);
}   
console.log(funcionAleatoria(501, 600));


/* 
const numeroRamdi = (min,max) => parseInt(Math.random()*(max-min)+min); 
console.log(numeroRamdi(501,600)); 
*/