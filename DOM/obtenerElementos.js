/*
     ⭐getElementById
    Nos permite obtener un elemento en base a su atributo id

const contenedor1 = document.getElementById('contenedor1');
console.log(contenedor1)
*/


/*
     ⭐children
    Nos permite obtener los elementos hijo


console.log(contenedor1.children);
*/


/*
     ⭐parentElement
    Nos permite obtener el elemento padre de un elemento


console.log(contenedor1.parentElement);
*/


/*
     ⭐getElementsByTagName

    Nos permite tener una coleccion de elemntos en base a la etiqueta

    Nota:devuelve una coleccion HTML. Una coleccion no es un arreglo 


const divs = document.getElementsByTagName('div');
console.log(divs);
console.log(`Tenemos ${divs.length} divs en nuestra pagina`)
*/


/*
     ⭐getElementsByClassName
    Nos permite obtner una coleccion de elementos en base a su clase CSS
    Nota: Devuelve una coleccion HTML (nosotros no podriamos utilizar el metodo de forEach en colecciones HTML)


const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);
*/



/*
     ⭐querySelector
    Nos devuelve el primer elemento que coincida con un selector ('#') estilo CSS
    Nota: devuelve un NodeList


const caja = document.querySelector('#contenedor1 .caja')
console.log(caja);
*/




/*
     ⭐querySelectorAll
    Nos permite obtener una coleccion de elementos en base a un selector estilo CSS
    Nota: Devuelve un nodelist
*/
const cajas = document.querySelectorAll('#contenedor1 .caja')
console.log(cajas);


cajas.forEach((caja)=>{
    console.log(caja);
}) // el forEach solo lo vamos a poder ejecutar en las listas de nodos


/*
     ⭐closest
    Nos permite buscar de adentro hacia afuera en busca de un elemento 
*/

const ultimaCaja = document.querySelector('.caja:last-child');
console.log(ultimaCaja);
console.log(ultimaCaja.closest('.contenedor-principal'));



/*
     ⭐Podemos encadenar todos los metodos para obtener elementos
*/

const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelectorAll('.caja'));