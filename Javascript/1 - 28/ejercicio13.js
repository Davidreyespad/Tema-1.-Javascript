/*13. Programa una función que calcule el factorial de un número (El factorial de un entero positivo
n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.
miFuncion(5) devolverá 120. */

function factorial(num) {
 
  if (num === 0) {
      return 1;
  }
  return num * factorial(num - 1);

}

const factorial2 = function (num) {
  if (num === 0) {
      return 1;
  }
  return num * factorial2(num - 1);
}

const factorial3 = num => {
  if (num === 0) {
      return 1;
  }
  return num * factorial3(num - 1);
}

let numero, resultado;

do {
  numero = parseInt(prompt("Introduce un numero"));
} while (isNaN(numero) || numero <= 0);

resultado = factorial(numero);

console.log(`El factorial de ${numero} es: ${resultado}`);

/*
const factorial = ( numero = undefined ) => {
 if (numero === undefined) return console.warn("No ingresaste un número") ;

 if (typeof numero !=="number") return console.error (`El valor " ${numero} " ingresado , NO es un número`) ;

 if (numero === 0) return console.error ("El número no puede ser 0 ") ;

if (Math.sign(numero)===-1) return console.error ("El número no puede ser negativo") ;
 
let factorial = 1 ;

 for ( let i = numero ; i > 1 ; i-- ) {
  factorial *= i ;
}
 return console.info (`El factorial de ${numero} es ${factorial}`) ;
 
}

factorial();
factorial("1000");
factorial(-140);
factorial(0);
factorial(10);
factorial(9);
*/