const personaArreglo = ['Mary', 21, 'sciencesmary@correo.com', true, true];
/* console.log(personaArreglo[0]); */

const persona = {
    nombre: 'Mary',
    edad: 21,
    correo: 'correo.com',
    suscripciones:{
        web: true,
        correo: true,
    },
    coloresFavoritos:['Negro', 'Rojo'],
    saludo: function(){
        alert('Hola!');
    },
};

/* console.log(persona.nombre);
console.log(persona['edad']); */

const variable = 'suscripciones';


persona.pais = 'Venezuela';
console.log(persona);
persona.saludo();
