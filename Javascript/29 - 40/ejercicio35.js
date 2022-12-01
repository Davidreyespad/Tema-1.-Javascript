"use strict";
/* Programa una función que dado un array numérico devuelve otro array con los números
elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */
//if (numeros === undefined)
//  return console.log("Debes ingresar un array de numeros");
//if (numeros.length === 0) return console.log("El array ingresado está vacio");


const elevarCuadrado = (numeros = undefined) => {
   
    numeros = numeros.filter((numero) => typeof numero === "number");
  
    let cuadrado = [];
  
    for (let i = 0; i < numeros.length; i++) {
      cuadrado.push(Math.pow(numeros[i], 2));
    }
  
    return console.log(cuadrado);
  };
  
  elevarCuadrado([1, 2, 3]);
  elevarCuadrado([1, 4, 5]);
  elevarCuadrado([12, 6, 23]);
