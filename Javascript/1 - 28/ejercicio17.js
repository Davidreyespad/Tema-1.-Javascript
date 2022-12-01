"use strict";
/* 17. Programa una función que cuente el número de caracteres de una cadena de texto, pe.
miFunción("Hola Mundo") devolverá 10.*/

function contarCaracteres ( cadena = "" ) {
    if (!cadena) {
     console.warn ("No introduciste ninguna cadena");
    } else {
     console.info (`La cadena "${cadena}" tiene ${cadena.length} caracteres.`);
    }
}

  contarCaracteres("Hola mundo");