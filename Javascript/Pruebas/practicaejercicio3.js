/* Dado una url, devuelve el nombre de dominio */

let url = "https://www.nombredominio.com/dsdshnfa/";

const nombreDominio = (cadena) => {
 
    let arrayUrl = cadena.split(".");

    return arrayUrl[1];
}

console.log(nombreDominio(url));
