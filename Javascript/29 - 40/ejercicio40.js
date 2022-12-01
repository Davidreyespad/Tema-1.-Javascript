"use strict";
/* 40. Programa una función para devolver la edad de una persona dada su fecha de nacimiento en
este formato dd/mm/aaa. */

const calcularEdad = (anio, mes, dia) => {

    let fechaActual = new Date();
    //let fechaNacimiento = new Date(anio, mes, dia);
    let anioActual = fechaActual.getFullYear();
    let mesActual = fechaActual.getMonth();
    let diaActual = fechaActual.getDay();

    let edad = anioActual - anio;

    if (mesActual < mes - 1) {
        edad--;
    }

    if (mes - 1 == mesActual && diaActual < dia) {
        edad--;
    }

    return edad;
};

console.log(calcularEdad(2000, 10, 15));