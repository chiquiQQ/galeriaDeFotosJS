/*
    ⭐ Bubbling (falso, por defecto)    ----> Podemos ponerle un tercer valor al () del addEvenTListener (y si no le pones false o true es como si le colocaras false, porque viene por defecto)
    En bubling el evento del elemento hijo reacciona primero y despues el evento del elemento padre.

    ⭐ Capturing (true)
    En capturing el elemento padre reacciona primero y despues el elemento hijo 
*/


const contenedor = document.getElementById('contenedor1')     //  ⭐ e: para recibir la informacion del evento

contenedor.addEventListener(
    'click', 
    (e) => {   
    console.log('Hiciste click en el contenedor')
    }, 
    true  /*El valor booleano va en el contenedor padre que esta haciendo la propagacion*/
);

const primeraCaja = document.querySelector('.caja')
primeraCaja.addEventListener('click', (e) => {
    console.log('Hiciste click en la caja 1');
});