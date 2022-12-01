"use strict";
/* 32. Programa una función que dada una cadena de texto cuente el número de vocales y
consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */

const contarLetras = (cadena = "") => {
        //if (!cadena) return console.warn("No ingresaste una cadena de texto");

        //if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, no es una cadena de texto`);

let vocales = 0;
let consonantes = 0;
let cadenas = cadena;

for (let letra of cadenas) {
if (/[aeiouáéíóú]/ig.test(letra)) vocales++;
if (/[^aeiouáéíóú]/ig.test(letra)) consonantes ++;

}
return console.log({
    cadenas,
    vocales,
    consonantes
})
}

contarLetras("Hola Mundo");
contarLetras("Murcielago");
contarLetras("BCDFGHKLMNÑPQRSTVWXYZbcdfghjklmnñpqrstvwxyz");