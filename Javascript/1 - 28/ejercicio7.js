/* 7.Mostrar todos los números divisores de un número introducido por el usuario. */

var num1=0,
conc= " ",

num1 = parseInt(prompt(" Introduzca el número del cual quiere saber los divisores "));

for (i = 1; i <= num1; i++) {
    
    
    if (num1 % i == 0) conc = conc + " " + i;
  }

console.log("Los divisores de " + num1 + " son =" + conc);
