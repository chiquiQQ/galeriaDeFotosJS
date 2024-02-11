class Usuario{
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    }

    static borrar(id_usuario){
        console.log(`El usuario con el id: ${id_usuario} ha sido borrado de la DB`);
    }
}

Usuario.borrar(1); 




// const usuario = new Usuario('Mary', 'correo@correo.com');
// usuario.borrarUsuario(1);