"use strict";
/* 21. Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola
Mundo") devolverá "odnuM aloH". */

/*
            const invertirTexto = (cadena) => {
              let invertido = "";
              for (let contador = cadena.length - 1; contador >= 0; contador--) {
                invertido += cadena[contador];
              }
              console.log(invertido);
            };

invertirTexto("Hola Mundo");
*/

const reverseText = (text = "") => text.split("").reverse().join(""); 
//convertimos en un array, le damos la vuelta y lo volvemos a convertir a cadena

let example = "hola mundo", result;

result = reverseText(example);

result === ""
  ? console.log("No hay cadena")
  : console.log(`La cadena ${example} invertida es ${result}`);
