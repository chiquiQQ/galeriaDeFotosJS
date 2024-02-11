/*
    ALERTA 
    Para informarle al usuario de algo.

    alert('Hola usuario');
*/

/*
    VENTANA DE CONFIRMACION
    Una ventana donde el usuario puede aceptar o cancelar.
    Retorna verdadero o falso dependiendo de la respuesta del usuario.
*/

/* const ingresar = ()=>{
    const accesoPermitido = confirm('Eres mayor de edad?');
    if(accesoPermitido){
        alert('Bienvenido');
    }else{
        console.log('Le vamos a decir a tus padres')
    }
} */



const saludo = () => {
    const nombre = prompt('Escribe tu nombre');
    alert(`Binevenido ${nombre}`)
}