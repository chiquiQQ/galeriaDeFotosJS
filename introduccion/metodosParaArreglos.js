const colores =['Rojo', 'Verde', 'Azul'];

/* lenght 
 (propiedad) -Nos permite conocer la cantidad de elementos en un arreglo
*/

console.log(colores.length); 

/*
    .toString()
    Nos permite transformar un arreglo a una cadena de texto.
    Por ejemplo para poder mostrarlo en el navegador. 
*/

// document.body.innerHTML = colores.toString();

/*
    .join()
    Nos permite transformar un arreglo a una cadena de texto y separar cada elemento.
*/

// console.log(colores.join('- -')); 


/*
    .sort()
    Nos permite transformar un arreglo de cadenas de texto, de forma alfabetica
*/

const letras = ['c', 'b', 'd', 'a'];
console.log(letras.sort());

const numeros = ['3', '2', '4', '1'];
console.log(numeros.sort());

console.log(letras);


/*
    .reverse()
    Nos permite transformar un arreglo de cadenas de texto, de forma reversa
*/

console.log(letras.reverse());

/*
    .concat()
    Nos permite juntar dos arreglos en uno solo
*/

const arreglo1 = [1, 2, 3];
const arreglo2 = ['A', 'B', 'C', 'D'];

const arreglo3 = arreglo1.concat(arreglo2);

console.log(arreglo3);

/*
    .push()
    Nos permite agregar un elemnto al final de un arreglo.
*/

colores.push('Amarillo');
console.log(colores);

/*
    .pop()
    Nos permite eliminar el ultimo elemento de un arreglo.
*/

colores.pop();
console.log(colores);

/*
    .shift()
    Elimina el primer elemento de un arreglo y recorre los elementos
*/

const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
console.log(dias);

const diaEliminado = dias.shift();
console.log(diaEliminado);

console.log(dias[0]);