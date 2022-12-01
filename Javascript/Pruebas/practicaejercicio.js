"use strict";
/* Dado un vector de numeros, devuelve un objeto indicando la media, 
los números que están por enecima y por debajo. 
Array = [3, 8, -21, 10, 100]
media: 20
encima:[100]
debajo:[3, 8, -21, 10]

Ordenar de mayor a menor
*/

let arrayVectores=[3, 8, -21, 10, 100];

let ejercicioMedia = arrayVectores => {
    let sumaNumeros = arrayVectores.reduce((acc, valorActual) => acc + valorActual);
    let mediaNumeros = sumaNumeros/arrayVectores.length;
    let mayorMenor = arrayVectores.sort((a, b) => b - a);

    return {
        Media:mediaNumeros,
        EncimaMedia: arrayVectores.filter((numero) => numero > mediaNumeros),
        DebajoMedia: arrayVectores.filter((numero) => numero < mediaNumeros),
        MayorAMenor: mayorMenor
    }

}

console.log(ejercicioMedia(arrayVectores));


/* NO LO QUIERE ASÍ

let arrayVectores=[3, 8, -21, 10, 100];

const sumaNumeros = arrayVectores.reduce((acc, valorActual) => acc + valorActual);
const mediaNumeros = sumaNumeros / arrayVectores.length;

const encimaMedia = arrayVectores.filter(numero => numero > mediaNumeros);
const debajoMedia = arrayVectores.filter(numero => numero < mediaNumeros);

console.log(`Media de array= ${mediaNumeros}`);
console.log(`Números que están por encima de la media= ${encimaMedia}`);
console.log(`Números que están por debajo de la media= ${debajoMedia}`);

*/