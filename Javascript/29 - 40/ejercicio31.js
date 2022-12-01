"use strict";
/* 31. Programa una función que dada una fecha válida determine cuantos años han pasado hasta
el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”) */

const pasoTiempo = fecha =>{

    let fechaActual = new Date();

    return Math.abs(fechaActual.getFullYear()-fecha.getFullYear());
};

const diaMalo =new Date ('2001-09-11');
const diaBueno = new Date ('2002-02-18');
const diaTonto = new Date ('1970-02-18');
 
 
 
console.log(pasoTiempo(diaMalo));
console.log(pasoTiempo(diaBueno));
console.log(pasoTiempo(diaTonto));