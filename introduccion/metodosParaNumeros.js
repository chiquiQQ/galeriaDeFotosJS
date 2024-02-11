/* 
    .toString()
*/

/* let numero = 19;
console.log(numero, typeof numero);

numero = (numero.toString());
console.log(numero, typeof numero);
 */


/* 
    .toFixed()
    Permite obtenr un numero con la cantidad de decimales especificados
*/

/* const numero = 3.1415;
console.log(numero.toFixed(10)); */



/* 
    parseInt()
    Intenta transformar un valor a un entero
*/

/* const numero1 = parseInt(prompt('Escribe un numero'));
const numero2 = parseInt(prompt('Escribe otro numero'));
console.log(numero1 + numero2);
 */

/* 
    parseFloat()
    Intenta transformar un valor a un numero con decimales
*/

/* const numero1 = parseFloat(prompt('Escribe un numero'));
const numero2 = parseFloat(prompt('Escribe otro numero'));
console.log(numero1 + numero2); */



/* 
    Math.random()
    Genera un numero al azar entre 0 y 1
*/

/* const numero = Math.random();
console.log(numero); */


/* 
    Math.floor()
    Redondea hacia abajo un numero
*/

console.log(Math.floor('10.1'))


/* 
    Math.floor()
    Redondea hacia arriba un numero
*/

console.log(Math.ceil('10.1'))



/* 
    Math.round()
    Redondea hacia el entero mas cercano
*/


console.log(Math.round('10.1'));
console.log(Math.round('10.99'));



//Ejemplo de numero al azar del 0 al 100

const randomNumber = Math.random();
console.log(Math.floor(randomNumber * 101))