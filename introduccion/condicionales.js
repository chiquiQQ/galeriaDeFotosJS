/* if( usuario.edad > 17){
    console.log('El usuario es mayor de edad, puede entrar al concierto')
}else{
    console.log('El usuario es menor de edad y no puede entrar')
} */



/* if ((usuario.edad >= 18) && (usuario.ticket == true)){
    console.log('Adelante, tiene entrada y es mayor de edad');
}else{
    console.log('No tienes la edad ni el tickect. Anda para alla')
}; */




/* if(usuario.edad >= 18){
    if(usuario.ticket){
        console.log('el usuario es > y tiene 1 ticket')
    } else{
        console.log('El usuario es mayor de edad pero no tiene ticket')
    }
}else{
    console.log('El usuario es menor de edad')
} */

const usuario ={
    edad: 21,
    pais: 'argentina',
    ticket: false,
};

if(usuario.pais === 'Venezuela'){
    console.log('El usuario es venezolano');
}else if(usuario.pais === 'España'){
    console.log('El usuario es de España')
}else{
    console.log('El usuario es d eotro pais')
}