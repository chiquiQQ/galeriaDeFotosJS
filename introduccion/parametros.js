/* const saludo = (nombre = 'amigo') =>{
    console.log(`Hola ${nombre}!`);
};

saludo('Mary');
saludo();
 */

const operacion = (tipo, numero1, numero2) =>{
    if (tipo === 'suma'){
        console.log(numero1 + numero2);
    } else if (tipo === 'resta'){
        console.log(numero1 - numero2)
    } else{
        console.log('Operacion no valida');
    }
};

operacion('suma', 2, 5);
operacion('resta', 456, 897);
operacion('multiplicacion', 456, 897);