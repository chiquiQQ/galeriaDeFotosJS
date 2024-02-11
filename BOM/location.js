// href - Retorna la URL de la pagina actual

console.log(location.href);

// hostname - Retorna el host de la pagina actual

console.log(location.hostname);

// pathname - Retorna la ruta y un archivo de la pagina actual

console.log(location.pathname);
console.log(location.protocol);

const cargarDocumento = () =>{
    location.assign('http://google.com')
}


const irAdelante = () => {
    history.forward();
}