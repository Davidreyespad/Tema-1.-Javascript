"use strict";
/* 10. TEMPORIZADOR FECHA
 Realiza un programa que pasados 20 segundos, nos muestre una sola vez 
 la fecha actual del sistema.
*/

let temporizador = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
    }, 2000);