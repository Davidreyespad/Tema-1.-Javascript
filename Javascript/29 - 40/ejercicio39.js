"use strict";

/* 39. Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi
Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true] */

const quitarDuplicados = (array = undefined) => {

    return console.log({
        original: array,
        sinDuplicados: array.filter((value,index,self) => self.indexOf(value) === index)
    });
}

quitarDuplicados(["x", 10, "x", 2, "10" , 10, true, true]);
