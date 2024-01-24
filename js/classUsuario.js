export default class Usuario{
    #id;
    #nombre;
    #email;
    #password;
    #estado;
    #perfil;
    constructor(nombre, email, password, estado, perfil){
        this.#id = uuidv4();
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

    toJSON(){
        return{
            id: this.id,
            nombre: this.nombre,
            email: this.email,
            password: this.password,
            estado: this.estado,
            perfil: this.perfil
        }
    }
}