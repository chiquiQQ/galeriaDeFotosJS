const operacion = (tipo, num1, num2) =>{
    if (tipo === 'suma'){
        return num1 + num2;
    } else if (tipo === 'resta'){
        return num1 - num2;
    } else {
        return 'Lo sentimos, solo podemos sumar y restar';
    }
};

const miVariable = operacion('suma', 100, 11);
console.log(miVariable);



