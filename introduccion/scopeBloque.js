const edad = 19;

if(edad >= 18){
    const accesoPermitido = true;
    console.log(accesoPermitido);

    if(true){
        console.log(accesoPermitido);
    }

    const miFuncion = () =>{
        console.log(accesoPermitido)
    };
    miFuncion();
}

// console.log(accesoPermitido);