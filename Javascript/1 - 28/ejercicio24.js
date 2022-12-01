"use strict";
/* 24. Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.
miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.*/

const eliminarCaracteres = (cadena, buscarCaracter)=> {
    return console.info(cadena.replace(new RegExp(buscarCaracter, 'gi'), ' '))
}

eliminarCaracteres("xyz1", "xyz");
eliminarCaracteres("xyz2", "xyz");
eliminarCaracteres("xyz3", "xyz");
eliminarCaracteres("xyz4", "xyz");
eliminarCaracteres("xyz5", "xyz");

