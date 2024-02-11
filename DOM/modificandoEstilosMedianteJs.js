/*
     ⭐ Modificando estilos CSS mediante "inlines styles"
*/

const ultimaCaja = document.querySelector("#contenedor2 .caja:last-child");
ultimaCaja.style.background = '#000';
ultimaCaja.style.color = '#fff';

const cajas = document.querySelectorAll('.caja');
let tamaño = 24;

const incrementarFuente = () =>{
    cajas.forEach((caja)=>{
        caja.style.fontSize = `${tamaño + 1}px`;
        tamaño++;
    });
}

const disminuirFuente = () =>{
    cajas.forEach((caja)=>{
        tamaño--;
        caja.style.fontSize = `${tamaño}px`;
    });
}