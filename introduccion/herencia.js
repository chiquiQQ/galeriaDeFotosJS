class Usuario{
    constructor(usuario, password){
        this.usuario = usuario;
        this.password = password;
    }

    obtenerPost(){
        const posts = ['post1', 'post2'];
        return posts;
    }
}

class Moderador extends Usuario{
    constructor(usuario, password, permisos){
        super(usuario, password);
        this.permisos = permisos;
    }

    borrarPosts(id){
        if(this.permisos.includes('borrar')){
            console.log(`El post con el id ${id} ha sido eliminado`);
        }else{
            console.log('No tienes los permisos para borrar un post')
        }
    }
}

const usuario = new Usuario('Carlos', '123');
console.log(usuario.obtenerPost());

const usuario2 = new Moderador('Arturo', '456', ['editar']);
console.log(usuario2.obtenerPost())


console.log(usuario2.permisos);
usuario2.borrarPosts(7);
