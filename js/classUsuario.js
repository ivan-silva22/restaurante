export default class Usuario{
    #id;
    #nombre;
    #email;
    #password;
    #estado;
    #perfil;
    constructor(id, nombre, email, password, estado, perfil){
        this.#id = id;
        this.#nombre = nombre;
        this.#email = email;
        this.#password = password;
        this.#estado = estado;
        this.#perfil = perfil;
    }
    get id(){
        return this.#id;
    }
    set id(nuevoId){
        this.#id = nuevoId;
    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }

    get email(){
        return this.#email;
    }
    set email(nuevoEmail){
        this.#email = nuevoEmail;
    }

    get password(){
        return this.#password;
    }
    set password(nuevoPassword){
        this.#password = nuevoPassword;
    }

    get estado(){
        return this.#estado;
    }
    set estado(nuevoEstado){
        this.#estado = nuevoEstado;
    }

    get perfil(){
        return this.#perfil;
    }
    set perfil(nuevoPerfil){
        this.#perfil = nuevoPerfil;
    }
}