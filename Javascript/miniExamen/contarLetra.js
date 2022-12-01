"use strict";
/* Dado un vector con números y textos:
a) Crea una función que devuelva cuántos textos y cuántos números hay. [3p]
b) Crea una función que devuelva todos los números que sean primos. [3 p]
c) Crea una función que devuelva todas las palabras que tengan un carácter repetido (ya sea
mayúscula o minúscula), al menos, dos veces, que se le pase por parámetro. El carácter
es una constante que se modifica en el código y debe estar debidamente indicada. [4p]
No se pueden usar prompt, ni alert, ni componentes de ese tipo.
Las funciones no pueden incluir un texto de resultado, solo pueden devolver el dato que se
solicita.
Se valorará positivamente el uso de las estructuras propias de Javascript vistas en clase: arrow
functions, expresiones regulares, funciones de array y de cadenas, estructuras repetitivas para
arrays o cadenas, ...
Ejemplo:
Entrada: [1,”2”, “cuatro”,”hola que haces”,8,7,22,11,”Dumbo”,”pala”]
Salida:
a) {textos:5,números:5}
b) [1,7,11]
c) Si carácter es 'a', devolverá [“hola que haces”,”pala”] */

const array = [1,"2", "cuatro","hola que haces",8,7,22,11,"Dumbo","pala"];

const contarLetras = array => {
  return { textos: array.filter(item=>typeof(item)==="string").length,
  numeros: array.filter(item=> typeof(item)==="number").length
  }

};

const esPrimo = num => {

  for(let i = 2; i<num; i++){
    if (num%i===0) return false;
  }
  return true;
}


const numerosPrimos = array => {

  const numeros = array.filter(item=> typeof(item)==="number");
  return numeros.filter(esPrimo);
}


const ocurrencias = (item, expr) => {
  const result = item.match(expr);
  if (result === null) return 0
  else return result.length;

}


const caracterRepetido = (array, caracter) => {

  const textos= array.filter(item => typeof(item)==="string");

  const expr = new RegExp (caracter, "ig");
  return textos.filter(item => ocurrencias(item, expr) >= 2)

}

console.log(contarLetras(array));

console.log(numerosPrimos(array));

let caracter="a";
console.log(caracterRepetido(array, caracter));

