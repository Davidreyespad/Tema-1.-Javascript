/* 2. Modifica el programa anterior: si los números no son un número o son menores o iguales a
ceros, que los vuelva a pedir. */

let num1 = parseInt(prompt("ingrese el numero 1"));
        let num2 = parseInt(prompt("ingrese el numero 2"));

        console.log(num1);
        console.log(num2);

        while (num1 <= 0 || isNaN(num1)===true) {
            alert("tienen que ser numeros positivos");
            num1 = parseInt(prompt("ingrese el numero 1 otra vez"));
        }

        
        
        while (num2 <= 0 || isNaN(num2)===true) {
            alert("tienen que ser numeros positivos");
            num2 = parseInt(prompt("ingrese el numero 2 otra vez"));
        }



        if (num1 > num2) {
            alert(`${num1} (el primer número) es MAYOR que ${num2} (el segundo número)`);
          } else {
            if (num1 < num2) {
              alert(`${num1} (el primer número) es MENOR que ${num2} (el segundo número)`);
            } else {
              alert("Ambos números son iguales.");
            }
          }
          