/* 6. Mostrar todos los números impares que hay entre dos números introducidos por el usuario. */

num1 = parseInt(prompt(" Introduzca el primer número "));
num2 = parseInt(prompt(" Introduzca el segundo número "));


if (num1 > num2) {

  auxiliar = num1;
  num1 = num2;
  num2 = auxiliar;
  
}

for (let index = num1 + 1; index < num2; index++) {
    if (index % 2 !== 0) {
    console.log(index);
    }
}