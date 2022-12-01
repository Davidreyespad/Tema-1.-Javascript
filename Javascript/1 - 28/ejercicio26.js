"use strict";
/* 26. Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras
“a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares.*/


const r = (/[md].*[ao]/gi)
console.log(r.test("MO"));



/*
            const cadenaEmpieza = (cadena, palabra) => {

                let emp = new RegExp(/^[m, d]/, "g");
                let acab = new RegExp(/$[a, o]/, "g");
                return cadena.match(emp).length;   
                return palabra.match(acab).length;   

              }

              console.log(contarPalabra("Hola mundo adios mundo mundo mundo ", "mundo"));

  */