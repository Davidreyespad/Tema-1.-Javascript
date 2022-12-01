"use strict";
/* 27. En un vector de números, indicar:
    a. El número de elementos del vector.
    b. Cuántos son pares y cuántos impares y cuáles son.
    c. La suma de todos los números negativos.
    d. El producto de todos los números positivos.
    e. Cuántos son primos y cuáles son.
    f. Los números que ocupan las posiciones pares del vector.
    g. El número mayor.
    h. El número menor.
    i. La media de todos los números, los números que están por encima y los que están por
    debajo.
    j. El vector ordenado de mayor a menos y viceversa.
    k. Buscar un valor introducido por el usuario e indicar si existe o no. 
*/

let array = [-35, 55, -78, 5, 7, 99, 4, -250, 77, 23, 14, 45]

//a. El número de elementos del vector.

console.log("Este array tiene " + array.length + " elementos");


//b. Cuántos son pares y cuántos impares y cuáles son.

let pares = array.filter((numero) => (numero % 2) == 0);
console.log(`El número de elementos pares es: ${pares.length} y esos números pares son: ${pares}`);

let impares = array.filter((numero) => (numero % 2) !== 0);
console.log(`El número de elementos pares es: ${impares.length} y esos números pares son: ${impares}`);


//c. La suma de todos los números negativos.

let sumaNegativos  =0

const filtradoNumerosNegativos  = array.filter((valorNegativos)=> valorNegativos < 0)

for (let i = 0; i < filtradoNumerosNegativos.length; i++) {
    sumaNegativos += filtradoNumerosNegativos[i]
}
console.log (`La suma de los negativos es:  ${sumaNegativos}`)


//d.El producto de todos los números positivos.


let filtradoNumerosPositivos = array.filter((valorPositivos)=> valorPositivos > 0);
let resultadoPositivos = filtradoNumerosPositivos.reduce((a, b) => a * b);
console.log (`El producto de los positivos es: ${resultadoPositivos}`)


//e. Cuántos son primos y cuáles son.               

const esPrimo = n => {
  if (n%i===0) return false


}

//f. Los números que ocupan las posiciones pares del vector.

                              //let array = [-35, 55, -78, 5, 7, 99, 4, -250, 77, 23, 14, 45]
  let posicionesPares = array.filter((valor, index) => ( index % 2) !== 0);
  console.log(posicionesPares);

//g.El número mayor.

let mayor = Math.max(...array);
let mayorFuncion = array.reduce(( x, y) => x>y ? x : y);
//console.log(`El número mayor es: ${mayor}`)
console.log(`El número mayor es: ${mayorFuncion}`);


//h. El número menor.

var menor = Math.min(...array);
let menorFuncion = array.reduce( ( x, y) => x>y ? x : y);
//console.log(`El número menor es: ${menor}`)
console.log(`El número menor es: ${menorFuncion}`)



//i. La media de todos los números, los números que están por encima y los que están por debajo.

let sumaValores = array.reduce((a, b) => a + b);
let media = sumaValores / array.length;

console.log(`La media es: ${media}`);

let mayorMedia = array.filter((valor) => valor > media);
console.log(`Los valores que están por encima de la media son: ${mayorMedia}`);

let menorMedia = array.filter((valor) => valor < media);
console.log(`Los valores que están por debajo de la media son: ${menorMedia}`);


//j. El vector ordenado de mayor a menos y viceversa.

function menorMayor(a, b) {
  return a - b;
}

console.log('Ordenado de menor a mayor:', array.sort(menorMayor));


function mayorMenor(a, b) {
  return b - a;
}

console.log('Ordenado de mayor a menor:', array.sort(mayorMenor));


//k. Buscar un valor introducido por el usuario e indicar si existe o no. 



