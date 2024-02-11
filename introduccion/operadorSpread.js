/* 
        Operador Spread

        Permite tomar los elementos de un arreglo u objeto y expandirlos
        en otro sitio 
*/

/* const frutas = ['Manzana', 'Pera', 'Piña', 'Melon',  'Uvas'];
const comidaFavorita = ['Pizza', 'Sushi', ...frutas];
console.log(comidaFavorita);

const datosLogin = {
    correo: 'sciencesmary@gmail.com',
    password: '123',
};

const usuario = {
    nombre: 'Mary',
    ...datosLogin,
    edad: '21',
};

console.log(usuario); */



/*
        Parametri Rest
        Permite que una funcion contenga un numero indefinido de argumentos.
        Los argumentos extra que encuentre los convertira en un arreglo.
*/

/* const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log(nombre, correo, datosAdicionales);
};

registrarUsuario('Mary', 'correo@gmail.com', 21, 'Estados Unidos'); */




/*
    Destructuracion de Objetos
    Nos permite obtener elementos o propiedades de un arreglo u objeto y
    guardarlos en una variable.
*/

const amigos = ['Alejandro', 'Cesar', 'Manuel'];
// const primerAmigo = amigos[0];
// const segundoAmigo = amigos[1];

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;

console.log(primerAmigo);


const persona = {
    nombre: 'Mary',
    edad: 21,
    pais: 'Estados Unidos'
};

const {nombre, pais} = persona;
console.log(nombre, pais);


const mostrarEdad = (nombre, edad) => {
    console.log(`${nombre} tiene ${edad} años`);
};

mostrarEdad(persona.nombre, persona.edad);

