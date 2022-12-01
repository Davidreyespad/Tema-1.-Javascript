/* Dados dos números indicar cuál es mayor, menor o si son iguales. */

num1 = parseInt(prompt("Introduce el PRIMER número:"));
num2 = parseInt(prompt("Introduce el SEGUNDO número:"));
 
if (num1 > num2) {
  alert(`${num1} (el primer número) es MAYOR que ${num2} (el segundo número)`);
} else {
  if (num1 < num2) {
    alert(`${num1} (el primer número) es MENOR que ${num2} (el segundo número)`);
  } else {
    alert("Ambos números son iguales.");
  }
}
