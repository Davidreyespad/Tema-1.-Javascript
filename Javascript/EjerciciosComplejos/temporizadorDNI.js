"use strict";
/* 9. TEMPORIZADOR DNI
Realiza un programa que cada 20 segundos (mediante setInterval) solicite un DNI hasta que alguien
le escriba la cadena “-1”.
En ese momento, el programa debe mostrar seguidas las letras de todos los DNIs introducidos. */

function askDNI() {
    let letra;
    let cad = prompt("Cuál es su DNI, ponga -1 para parar", "12345678");
    if (cad = "-1") {
        clearInterval(intervalo);
        alert(arrayLetra).join(" ; ");
    }else {
        letra = letraDNI(cad);
        arrayLetra.push(letra);
    }
  }

let arrayLetra = []  
let intervalo = setInterval(askDNI, 7000);