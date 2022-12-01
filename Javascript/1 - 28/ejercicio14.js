/* 14. Programa una función que devuelva el monto final después de aplicar un descuento a una
cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */


let cantidad = parseInt(prompt('Dime una cantidad a la que aplicar un descuento:'))
let descuento = parseInt(prompt('Ahora dime el descuento a aplicar:'))
 
let descontar = (cantidad, descuento) => {
    return cantidad - (cantidad * (descuento / 100))
    //return cantidad * (1 - descuento / 100)
}
 
alert(`El monto final, una vez aplicado el descuento, es de ${descontar(cantidad, descuento)}`)


/*
const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn("No ingresaste el monto");

  if (typeof monto !== "number")
    return console.error(`El valor " ${monto} " ingresado , NO es un número`);

  if (monto === 0) return console.error(" El monto no puede ser 0 ");

  if (Math.sign(monto) === -1)
    return console.error("El monto no puede ser negativo");

  if (typeof descuento !== "number")
    return console.error(`El valor " ${descuento} " ingresado , NO es un número`);

  if (Math.sign(descuento) - 1)
    return console.error("El descuento no puede ser negativo");

  return console.info(
    `${monto}$ - ${descuento} % = ${monto - (monto * descuento) / 100} $`
  );
};

aplicarDescuento();
aplicarDescuento("1000");
aplicarDescuento(-3240);
aplicarDescuento(0);
aplicarDescuento(245, -123);
aplicarDescuento(32);
aplicarDescuento(100, 25);
*/