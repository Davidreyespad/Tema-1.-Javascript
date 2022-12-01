/*Realizar una pequeña calculadora, donde el programa solicite dos números y una operación
aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario
son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado. */


let num1, num2;
let parsearNum1, parsearNum2;
let operacionElegir;
let resSuma, resResta, resMultiplicacion, resDividir;

do {
  num1 = prompt("Dame el numero 1", 0);
  parsearNum1 = parseInt(num1);
} while (parsearNum1 <= 0 || isNaN(parsearNum1) == true);

do {
  num2 = prompt("Dame el numero 2", 0);
  parsearNum2 = parseInt(num2);
} while (parsearNum2 <= 0 || isNaN(parsearNum2) == true);

alert(
  "Elige una opcion" +
    "\n1.SUMAR" +
    "\n2.RESTAR" +
    "\n3.MULTIPLICAR" +
    "\n4.DIVIDIR"
);

operacionElegir =parseInt(prompt("Dame la operacion que deseas hacer"));

while (operacionElegir > 4 || operacionElegir <= 0) {
  operacionElegir = parseInt(prompt("Dame la operacion que deseas hacer"));
}

switch (operacionElegir) {
  case 1:
    resSuma = parsearNum1 + parsearNum2;
    console.log(`El total de la suma es: ${resSuma}`);
    break;

  case 2:
    if (parsearNum1 > parsearNum2) {
      resResta = parsearNum1 - parsearNum2;
    } else {
      resResta = parsearNum2 - parsearNum1;
    }
    console.log(`El total de la resta es: ${resResta}`);

    break;

  case 3:
    resMultiplicacion = parsearNum1 * parsearNum2;
    console.log(`El total de la multiplicacion es: ${resMultiplicacion}`);
    break;

  case 4:
    if(parsearNum2===0){

      console.log(`ERROR`);
    }else{

      resDividir = parsearNum1 / parsearNum2;
      console.log(`El total de la dividion es: ${resDividir}`);

    }
    

    try {
        if (num2 == 0) {
            throw new Error ("No es posible dividir entre 0");
        }
        else {
            alert(`${num1} / ${num2} = ${num1 / num2}`);
        }
    }   catch (eror) {

        console.log(`Se produjo el siguiente error: ${error}`);
        
    }

    default:
        console.log(`No se ha elegido ninguna opcion`);
          break;
    
}
