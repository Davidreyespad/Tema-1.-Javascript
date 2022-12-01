"use strict";
/* 25. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en
un sentido que en otro), pe. miFuncion(2002) devolverá true. */

const capicua = (cadena = " ") => {
  cadena = cadena.toString();
  let cadenaReves = cadena.split("").reverse().join("");

  return cadena === cadenaReves
    ? console.info(`Sí es capicúa, ${cadena} y ${cadenaReves} son iguales`)
    : console.info(`No es capicúa, ${cadena} y ${cadenaReves} no son iguales`);
};

capicua(1001);
capicua(1010);
