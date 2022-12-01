"use strict";
/* 8.Mostrar la tabla de multiplicar de un número introducido por pantalla. */

let num;
num = parseInt(prompt("Introduce un número:"));
 
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} es igual a ${num * i}`);
}

