"use strict";
/* 36. Programa una función que dado un array devuelva el número más alto y el más bajo de dicho 
array, p.e. miFuncion([1,5,34,99,-60]) devolverá [99,-60] */

const extremosArray = (array = undefined) => {
    return console.log(
        `Array original= ${array}. 
        \nValor máximo = ${Math.max(...array)}. 
        \nValor mínimo = ${Math.min(...array)}.`);
}

extremosArray([1,5,34,99,-60]); 