

/* if(usuario.pais == 'Venezuela'){
    console.log(`El usuario es de ${usuario.pais}`)
}else if (usuario.pais === 'España'){
    console.log('El usuario es español')
}else(
    console.log('El usuario no es de Venezuela o España')
) */

const usuario ={
    nombre: 'Mary',
    pais: 'Inglaterra',
};

switch(usuario.pais){
    case 'Venezuela':
        console.log('El usuario es venezolano');
        break;
    case 'España':
        console.log('El usuario es español');
        break;
    case 'Argentina':
        console.log('El usuario es argentino');
        break;
    default:
        console.log('El usuario es de otro pais')
}