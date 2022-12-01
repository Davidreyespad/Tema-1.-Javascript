"use strict";
/* 13. DESGLOSE CADENA
Realiza un programa que reciba una cadena con el siguiente formato:
“nombre:apellidos:telefono:email:codigopostal”
Tras recibir la cadena, debe desglosar y mostrar la siguiente información:
● Código postal.
● Apellidos.
● Email.
● Suponiendo un formato de email “direccion@servidor” debe mostrar el nombre del servidor
asociado.
*/

let cadena = "nombre:apellidos:telefono:email@servidor:codigopostal";

const desgloseCadena= cadena => {
    let arrayCadena=cadena.split(":");
    let arrayServidor= arrayCadena[3].split("@");
    let servidor = arrayServidor[1];
    return {
        "Código postal": arrayCadena[4],
        "Apellidos": arrayCadena[1],
        "Email": arrayCadena[3],
        "Servidor": servidor
    }
         
}

console.log(desgloseCadena(cadena));