"use strict";
/* 20. Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
Hola Mundo Hola Mundo Hola Mundo.*/

const repetirCadena = (cadena, num) => {
    let cadenaRep=" ";
    let contador=0;

    do {
        cadenaRep = cadenaRep + cadena + " ";
        contador++;
    } while (contador < num)

    return cadenaRep;
}

let cadena=" ", repeticiones= 0, resultado=" ";

do {
    cadena = prompt("Introduce una cadena:");
} while (cadena.length < 1);

do {
    repeticiones = parseInt(prompt("¿Cuántas veces quieres que se repita la cadena?"));
} while (isNaN(repeticiones));

resultado = repetirCadena(cadena, repeticiones);

console.log(resultado);
