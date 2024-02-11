let numero = 1;

let contadorLetras = (palabra) =>{
    numero = palabra.length;
    console.log(`${palabra} tiene ${numero} letras`);

    let funcionAnidada = () =>{
        console.log(numero);
    }
    funcionAnidada()
}

contadorLetras('Chiquinquira');
// console.log(numero);
