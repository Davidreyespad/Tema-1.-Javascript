/*9. Realizar una pequeña calculadora, donde el programa solicite dos números y una operación
aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario
son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado.*/

//Variante con Try-Catch

let num1 = 0,
  num2 = 0,
  operador;
resultado = 0;

do {
  num1 = parseInt(prompt("Introduce un número"));
} while (isNaN(num1));

do {
  num2 = parseInt(prompt("Introduce otro número"));
} while (isNaN(num2));

do {
  operador = prompt("Introduce un operador (+,-,*,/)");
} while (
  operador !== "+" &&
  operador !== "-" &&
  operador !== "*" &&
  operador !== "/"
);

switch (operador) {
  case "+":
    alert(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case "-":
    alert(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case "*":
    alert(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case "/":
    try {
      if (num2 === 0) {
        throw new Error("No se puede dividir entre cero.");
      }
      //No hace falta el else ya que si salta la excepción, esta parte del código no se ejecuta

      alert(`${num1} / ${num2} = ${num1 / num2}`);
    } catch (antonio) {
      console.log(`Se produjo el siguiente error: ${antonio}`);
    }

    break;
  default:
    alert("El operador introducido no es un operador válido.");
}
