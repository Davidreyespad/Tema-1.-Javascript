"use strict";
/* 34. Programa una función que valide que un texto sea un email válido, p.e. miFuncion
(“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos
guión alto y bajo+@+caracteres, números+.+al menos dos caracteres. */

const validarEmail = (cadena ="") => {

    let emailVerdadero = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

    return emailVerdadero.test(cadena);

}

console.log(validarEmail("88"));
console.log(validarEmail("javier.ferrer@iesmartinezm"));
console.log(validarEmail("javier-ferrer@iesmartinezm.es"));
