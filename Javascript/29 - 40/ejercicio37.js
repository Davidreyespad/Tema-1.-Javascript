"use strict";
/* 37. Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el
primero almacena los números pares y en el segundo los impares, pe.
miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

const paresImpares = (numeros = undefined) => {

  numeros = numeros.filter((numero) => typeof numero === "number");

  let pares = [];
  let impares = [];

  for (let i = 0; i < numeros.length; i++) {
    numeros[i] % 2 === 0 ? pares.push(numeros[i]) : impares.push(numeros[i]);
  }

  return {
    pares,
    impares,
  };
};

console.log(paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
console.log(paresImpares([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 0, -3, -4, -12]));
