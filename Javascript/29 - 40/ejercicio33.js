"use strict";
/* 33. Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier
Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como ¡ o ¿ */

const validarNombre = (cadena ="") => {

    let nombreVerdadero = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/ig.test(cadena);

    return(nombreVerdadero)
    ? console.log(`${cadena} SÍ es un nombre válido`)
    : console.log(`${cadena} NO es un nombre válido`);

                /* return(emailVerdadero)
                ? console.log(`${cadena} SÍ es un email válido`)
                : console.log(`${cadena} NO es un email válido`);*/
}

validarNombre("88");
validarNombre("+ç´.,");
validarNombre("Javier Ferrer");
validarNombre("Javier Ferrer11");



