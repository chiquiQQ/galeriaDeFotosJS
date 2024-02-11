// length -Devuelve el de numero de caracteres de una cadena de texto 

/* const texto = 'Hola soy un texto';
console.log(texto.length); */



// indexOf() .lastIndexOf -Devuelve el index del primer/ultimo caracter especificado.
/* 
const texto = 'Hola soy un texto';
console.log(texto.lastIndexOf('o')); */



// .slice() -Devuelve un fragmento de una cadena de texto.
// 1er parametro - index desde donde queremos cortar 
// 2do parametro (opcional)  -index hasta donde queremos cortar

/* const texto = 'Hola soy un texto';
const index = texto.indexOf('s');
const lastIndex = texto.lastIndexOf('o');
console.log(texto.slice(index, lastIndex + 1));
 */


// .replace() -Devuelve una cadena de texto en donde reemplaza un valor por otro
// 1er parametro -el texto que queremos reemplazar 
// 2do parametro -el texto que queremos colocar

/* const texto = 'Hola soy un texto';
console.log(texto.replace('soy un texto', 'soy Mary')); */



// .split() - Convierte una cadena de texto en un arreglo.
// Tenemos que especificar donde cortar cada elemento.

// 1er parametri - el caracter que funcionara como separador

const texto = 'Hola soy un texto';
const newText = texto.split(' ');
console.log(newText);



/*
    .toLowerCase()   .toUpperCase()
    Devuelve una cadena de texto de puras minusculas/mayusculas 
*/

console.log(texto.toUpperCase());

