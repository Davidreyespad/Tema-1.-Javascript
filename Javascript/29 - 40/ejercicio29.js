"use strict";
/* 29. Programa una función para convertir números de base binaria a decimal y viceversa, pe.
miFuncion(100,2) devolverá 4 base 10 */

const cambiarBinario = (numero, base) => {
  if (!numero) return console.log("No ingresaste un numero");
  if (!base) return console.log("No ingresaste una base");
  if (typeof numero !== "number") return console.log(`${numero} no es un numero`);
  if (typeof base !== "number") return console.log(`${base} no es una base`);

  if (base === 2) {
    console.log(`${numero} con base ${base} = ${parseInt(numero, base)} con base 10`);
  } else if (base === 10) {
    console.log(`${numero} con base ${base} = ${(numero.toString(2))} con base 2`);
  } else {
    return console.log(`No es valido`);
  }
};

cambiarBinario(10, 4);
cambiarBinario(100, 2);
cambiarBinario(1110010, 2);
cambiarBinario(4, 10);




