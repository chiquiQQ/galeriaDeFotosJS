const eliminarCaja = () =>{
    const padre = document.getElementById('contenedor1');
    const cajaAEliminar = padre.querySelector('.caja');
    
    if(cajaAEliminar){
        padre.removeChild(cajaAEliminar);
    
        const cajasRestantes = padre.querySelectorAll(".caja");
        if(cajasRestantes.length === 0){
            const botonEliminar = document.getElementById('boton');
            botonEliminar.innerHTML = "Vacio";
        }
    }
}

//  ⭐Necesitamos el contenedor padre y el metodo de remove child