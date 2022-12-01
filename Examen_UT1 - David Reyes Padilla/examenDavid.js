"use strict";
/* 
    Dado un vector de objetos literales con el siguiente formato: {nombreCompleto:”Ana Pérez
        Soler”, DNI: “21147465T”, edad: 21}:
    a. Crea una función que reciba como parámetro el array original y devuelva un array
        con los identificadores de los usuarios. Para ello debes coger la primera letra
        (minúsculas y sin tildes) del nombre, las tres primeras letras del primer apellido
        (minúsculas y sin tildes), las tres primeras del segundo apellido (minúsculas y sin
        tildes) y los tres últimos dígitos del DNI. Usa la función map.(3p)
        NOTA: Se entiende que los nombres y los apellidos no son compuestos y todos
        tienen tres o más caracteres.
    b. Crea una función que reciba como parámetro el array original y devuelva un array
        con los DNI que sean válidos. NOTA: Los DNI pueden tener la letra en mayúscula o
        minúscula pero no tienen un separador entre número y letra. Usa la función filter y
        map. (3p)
    c. Crea una función que reciba como parámetro el array original y devuelva un array
        con los objetos ordenados por edad de mayor a menor. NOTA: Usar la función sort.
        (2p)
    d. Crea una función que reciba como parámetro el array original y devuelva un array
        con las edades que sean números casi primos (es un número que solo es divisible
        por sí mismo, la unidad y por un solo número que no sea ni la unidad ni si mismo).
        Usa la función filter y map. (2p)
    
    Ejemplo.
        Entrada:
        [{nombre:”Ana Pérez Soler”, DNI: “21147465T”, edad: 4},
        {nombre:”Álvaro García Castro”, DNI: “24545535G”, edad: 32},
        {nombre:”Paloma González Máxim”, DNI: “45678912L”, edad: 9},
        {nombre:”Alberto Alguacil Alcalde”, DNI: “79753330W”, edad: 17}
        ]
    Salida:
        A: [“apersol465”,”agarcas535”,”pgonmax912”,”aalgalc330”]
        B: [“21147465T”,” 24545535G”,” 79753330W”]
        C: [{nombre:”Álvaro García Castro”, DNI: “24545535G”, edad: 32},{nombre:”Alberto Alguacil
        Alcalde”, DNI: “79753330W”, edad: 17},{nombre:”Paloma González Máxim”, DNI: “45678912L”,
        edad: 9},{nombre:”Ana Pérez Soler”, DNI: “21147465T”, edad: 4}] 
*/

    
let array =[
    {nombre:"Ana Pérez Soler", DNI: "21147465T", edad: 4},
    {nombre:"Álvaro García Castro", DNI: "24545535G", edad: 32},
    {nombre:"Paloma González Máxim", DNI: "45678912L", edad: 9},
    {nombre:"Alberto Alguacil Alcalde", DNI: "79753330W", edad: 17}
    ]


const c = array => {
    let mayorMenor= array.sort((a,b) => b.edad - a.edad);
    return {
        "Array ordenado de mayor a menor edad: ": mayorMenor   
    }
}
      
const numPrimo = numero =>{
    for (let i=2; i<numero; i++){
        if(numero%i===5)
        return false;
    }
    return true;
}
  
const d = arrayEdad => {
    return arrayEdad.filter(numPrimo);
}


const arrayEdad = [9, 4, 32, 17]


console.log(c(array));
console.log(d(arrayEdad));