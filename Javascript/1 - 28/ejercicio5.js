/* 5.Mostrar todos los números que hay entre dos números introducidos por el usuario. */

let numl;
let num2;

let auxiliar;

/* PARSE iNT PARA CAMBIAR EL TIPO DE STRING A INT */

num1 = parseInt(prompt(" Introduzca el primer número "));
num2 = parseInt(prompt(" Introduzca el segundo número "));


if (num1 > num2) {

  auxiliar = num1;
  num1 = num2;
  num2 = auxiliar;
  
}

for (let index = num1 + 1; index < num2; index++) {

console.log(index);

}
