/*
    Break
    La sentencia break nos sirve para salir de bloques de tipo Switch.
    Pero tambien nos sirve para forzar la salida de un ciclo
*/

/* const nombres = ['Arturo', 'Andres', 'Alejandro', 'Roberto', 'Adrian', 'Antonio', 'Angel'];

for(let i = 0; i < nombres.length; i++){
    if(nombres[i][0] !== 'A'){
        console.log('ALTO! Hay una palabra que no empieza con A');
        console.log(`${nombres[i]} no empieza con a`)
        break;;
    }

    console.log(nombres[i]);
} */




/*
    Continue
    La sentencia continue nos sirve para saltar a la siguiente iteracion
*/

const invitados = ['Carlos', 'Christian', 'Christopher', 'Jorge', 'Estefania',
'Manuel', 'Erika', 'Manuel'];

console.log('Lista de personas aceptadas:');

for(let i = 0; i < invitados.length; i++){

    if(invitados[i] === 'Jorge'){
        continue;
    }
    console.log(invitados[i])
}