/*
    .indexOf()
    Obtenemos el primer index de un elemento. Si no hay elemento nos retorna -1
*/

const nombres = ['Carlos', 'Rafael','Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
// console.log(nombres.indexOf('Angel'));

/*
    .lastIndexOf()
    Obtenemos el ultimo index de un elemento.
    por ejemplo el ultimo Rafael que tenemos
*/
// console.log(nombres.lastIndexOf('Rafael'));

/*
    .forEach()
    nos permite ejecutar una funcion por cada elemento
*/

// nombres.forEach((nombre, index) => {
//     console.log(`Hola ${nombre} (${index})`);
// });

/*
    .find()
    Nos permite recorrer un arreglo y devuelve el primer elemento que retornemos
*/

// const resultado = nombres.find((nombre) => {
//     if(nombre[0] === 'E'){
//         return nombre;
//     }
// });

// console.log(resultado);


/*
    .map()
    Nos permite ejecutar una funcion por cada elemento
    y crear un nuevo arreglo en base a los resultados de esa funcion
*/

/* const nombresMayusculas = nombres.map((nombre)=> nombre.toUpperCase());
console.log(nombresMayusculas); */


/*
    .filter()
    Nos permite ejecutar una funcion por cada elemento y luego crear
    un nuevo arreglo en base a los resultados de esa funcion

    A diferencia de map filter solo va a devolver un arreglo con los
    resultados que cumplan con una condicion
*/

/* const nombresCuatroletras = nombres.filter((nombre)=>{
    if(nombre.length === 4){
        return nombre;
    }
});

console.log(nombresCuatroletras); */


/*
    .includes()
    Nos permite saber si el arreglo contiene un elemento en especificado
*/
/* 
console.log(nombres.includes('Julio'));
console.log(nombres.includes('Carlos')); */

/*
    .every()
    Nos permite ejecutar un condicional sobre cada elemento y 
    nos devuelve true si TODOS los elementos cumplieron con la condicion

    Para validar formularios.Donde quieres comprobar de que todos los 
    campos del formulario sean validos
*/

/* const nombresValidos = nombres.every((nombre)=>{
    if(typeof nombre === 'string'){
        return true;
    } else {
        return false;
    }
})
console.log(`Todos los nombres son validos = ${nombresValidos}`); */



/*
    .some()
    Nos permite ejecutar un condicional sobre cada elemento y 
    nos devuelve true si algun elemento cumplió la condición

    //True si hay algun valor invalido
    // false si no hay algun valor invalido
*/

const nombresValidos = nombres.some((nombre)=>{
    if(typeof nombre !== 'string'){
        return true;
    } else {
        return false;
    }
})
console.log(`Todos los nombres son validos = ${nombresValidos}`);


