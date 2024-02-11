const usuario = {
    nombre: 'Mary',
    edad: 21,
    amigos: ['Angela', 'Monseñor', 'Ricardo'],
    saludo: () => {
        console.log('Hola!');
    },
};

//Metodos propios 
//Los objetos pueden tener métodos personalizados.

usuario.saludo();

//Object.keys()
//Nos devuelve un arreglo con las llaves (keys) del objeto.

const resulatdos = Object.keys(usuario);
console.log(resulatdos);


//Object.values()
//Nos devuelve un arreglo con los valores (values) del objeto.


const resultado = Object.values(usuario);
console.log(resultado);

//Object.entries()
//Nos devuelve un arreglo con las parejas de clave y valor del objeto.

const result = Object.entries(usuario);
console.log(result);

console.log(`El objeto tiene ${result.length} propiedades`);
