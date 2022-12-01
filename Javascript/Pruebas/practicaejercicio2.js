"use strict";
/* Dado un array de texto, crea una función que devuelva un nuevo array */
/* Ordenar de mayor a menor  */


let v = ["hola", "ala", "adios"];

const quitarCaracter = (v, caracter) => {

    return v.map(palabra => palabra.replaceAll (caracter,""));

    /* return v.map(element => element.includes(caracter) 
    ? element.replaceAll (caracter,"")
    : element
    ); */
}

const ordenarArray = (array) => {

    return v.sort((a, b) => b.length - a.length);

}

console.log(quitarCaracter(v, "a"));
console.log(ordenarArray(v));


