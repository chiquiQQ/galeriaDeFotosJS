const promesa = new Promise((resolve, reject) => {
    // acion que se ejecutará.
    setTimeout(() => {
        const exito = false;

        if(exito){
            resolve('La operacion tuvo éxito');
        }else {
            reject('La operacion fracasó');
        }
    }, 4000);
});

promesa.then((mensaje) =>{
    alert(mensaje);
});

promesa.catch((mensaje) =>{
    alert(mensaje);
});