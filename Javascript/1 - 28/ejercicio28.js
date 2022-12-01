"use strict";
/*28.En un vector de cadenas, indicar:
    a. La cadena más corta.
    b. La cadena más larga.
    c. La cadena con más letras ‘a’.
    d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son.  
*/

//a. La cadena más corta.

                        /*let palabrasCorta = ['Corta', 'Medianamente', 'La más larga que existe'];
                        let totalesCorta  = [];
                        for(let palabraCorta of palabrasCorta) {
                          totalesCorta.push(palabraCorta.length);
                        }

                        let minimo = Math.min.apply(null, totalesCorta);

                        for (let elementoCorta of palabrasCorta) {
                          if (elementoCorta.length === minimo) {
                            console.log(`La palabra más corta es: ${elementoCorta}`);
                          }
                        } */
let arrayCorto = ['Corta', 'Medianamente', 'La más larga que existe'];
let cadenaCorta = arrayCorto.reduce((x,y) => x.length < y.length ?x :y); 
console.log(`La palabra más corta es: ${cadenaCorta}`);                        

//b. La cadena más larga.

                                        /* let palabrasLarga = ['Corta', 'Medianamente', 'La más larga que existe'];
                                          let totalesLarga  = [];
                                          for(let palabraLarga of palabrasLarga) {
                                              totalesLarga.push(palabraLarga.length);
                                          }

                                          let maximo = Math.max.apply(null, totalesLarga);

                                          for (let elementoLarga of palabrasLarga) {
                                            if (elementoLarga.length === maximo) {
                                              console.log(`La palabra más larga es: ${elementoLarga}`);
                                            }
                                          } */

let arrayLargo = ['Corta', 'Medianamente', 'La más larga que existe'];
let cadenaLarga = arrayLargo.reduce((x,y) => x.length > y.length ?x :y); 
console.log(`La palabra más larga es: ${cadenaLarga}`);     

//c. La cadena con más letras ‘a’.

let arrayA = ['Trampa', 'Banana', 'La más larga que tenga mama', `aaaaaaaaaaaaaaaaaaaa`];
          /*const numA = cadena =>{
            if (cadena.match(/a/gi)===null){
              return 0;
            }
          return cadena.match(/a/gi).length;  
          }
          return (cadena===null) ?0 :cadena.length; */

let cadenaA = arrayA.reduce((a,b) => a.match(/a/g).length > b.match(/a/g).length ?a :b);
console.log(`La cadena con mas "a" es: ${cadenaA}`);     


//d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son.



