"use strict";
/* 19. Programa una función que dada una String te devuelva un Array de textos separados por
cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

const separarTexto= (cadena) => {
  console.log(cadena.split(" "));
}

separarTexto("Hola cómo estás?");
