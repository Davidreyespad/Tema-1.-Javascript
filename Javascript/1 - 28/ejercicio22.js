"use strict";
/* 22.Programa una función para contar el número de veces que se repite una palabra en un texto
largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const contarPalabra = (cadena, palabra) => {

    let er = new RegExp(palabra, "g");
    return cadena.match(er).length;   
  }

  console.log(contarPalabra("Hola mundo adios mundo mundo mundo ", "mundo"));
