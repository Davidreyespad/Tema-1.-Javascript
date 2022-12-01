"use strict";
/* 38. Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma
descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] } */

const ordenarArray = array => {
    
  let asc = [...array].sort( (a,b)=> a - b)
  let desc = [...array].sort((a, b) => b - a)
  return console.log({
    ascendente: asc,
    descendente: desc,
  });
};

const numeros = [7, 5, 4, 8, 6]
console.log(ordenarArray(numeros));