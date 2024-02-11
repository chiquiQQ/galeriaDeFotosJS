console.log(`La ventana de tu navegador mide ${window.innerWidth}px de ancho`);
console.log(`La ventana de tu navegador mide ${window.innerHeight}px de alto`);

/*
    window.open()
    Nos permite abrir ventanas del navegador
    Nota: es posible que el navegador te pida permisos para abrir una
    nueva ventana.

    1er parametro: direccion de la nueva ventana
    2do parametro: nombre de la ventana
    3er parametro: cadena de texto de opciones

    Nos devuelve un objeto para acceder a esa ventana 
*/

let ventana;
const abrirVentana = () =>{
    ventana = window.open('http://google.com', 'Mi nueva ventana', 'width=500,height=500');
    ventana.document.write('<h1>Hola, escribiendo en la nueva ventana!</h1>') 
};


const cerrarVentana = () =>{
    ventana.close();
}


/*
    Screen Object 
    Representa la pantalla del usuario
*/

console.log(`Ancho de la pantalla ${window.screen.width}`);
console.log(`Alto de la pantalla ${window.screen.height}`);

console.log(`Ancho de la pantalla sin la barra ${window.screen.availWidth}`);
console.log(`Alto de la pantalla sin la barra ${window.screen.availHeight}`);