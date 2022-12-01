/*12. Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
miFuncion(0,"C") devolverá 32°F */

function conversorTemp(num, unidad) {
  if (unidad === "f" || unidad === "F") {
    return (num - 32) * (5 / 9);
  } else {
    return num * (9 / 5) + 32;
  }
}
 
const conversorTemp2 = function (num, unidad) {
  if (unidad === "f" || unidad === "F") {
    return (num - 32) * (5 / 9);
  } else {
    return num * (9 / 5) + 32;
  }
};
 
const conversorTemp3 = (num, unidad) => {
  if (unidad === "f" || unidad === "F") {
    return (num - 32) * (5 / 9);
  } else {
    return num * (9 / 5) + 32;
  }
};
 
let numero, unidad, resultado;
 
do {
  numero = parseInt(prompt("Introduce una temperatura"));
} while (isNaN(numero));
 
do {
  unidad = prompt("Introduce una unidad de medida (F o C)");
} while (unidad !== "f" && unidad !== "F" && unidad !== "c" && unidad !== "C");
 
resultado = conversorTemp(numero, unidad).toFixed(2);
 
if (unidad === "f" || unidad === "F") {
  console.log(`La temperatura ${numero}ºF es igual a ${resultado}ºC`);
} else {
  console.log(`La temperatura ${numero}ºC es igual a ${resultado}ºF`);
}



/*
const convertirGrados = (grados = undefined, tipo) => {
    if (!grados)
      return console.log("Debe ingresar un valor para los grados a convertir");
  
    if (typeof grados !== "number")
      return console.log("El valor ingresado debe ser un numero");
  
    if (typeof tipo !== "string")
      return console.log(
        "El valor ingresado debe ser C para Celsius o F para Fahrenheit"
      );
  
    if (!tipo)
      return console.log("Debe ingresar un valor C o F para el tipo de grados");
  
    if (tipo !== "c" && tipo !== "f")
      return "Debe ingresar un valor C o F para el tipo de grados";
  
    const c = "c";
    const f = "f";
    let gradosF, gradosC;
  
    if (tipo.toLowerCase() === c) {
      gradosF = (grados * 1.8) + 32;
      return console.log(
        `${grados} Grados Celsius es equivalente a ${gradosF} Fahrenheit`
      );
    }
  
    if (tipo.toLowerCase() === f) {
      gradosC = (grados - 32) / 1.8;
      return console.log(
        `${grados} Grados Fahrenheit es equivalente a ${gradosC} Celsius `
      );
    }
  };
  
  convertirGrados(30, "c");
  convertirGrados(86, "f");
  convertirGrados(46, "c");
  convertirGrados(55, "f");
  convertirGrados("f");
  convertirGrados(32, "f");
  convertirGrados(0, "c");
  */