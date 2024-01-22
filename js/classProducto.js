export default class Producto{
    #codigo;
    #nombre;
    #categoria;
    #imagen;
    #precio;
    #estado;
    constructor(nombre, categoria, imagen, precio, estado){
        this.#codigo = uuidv4();
        this.#nombre = nombre;
        this.#categoria = categoria;
        this.#imagen = imagen;
        this.#precio = precio;
        this.#estado = estado;
    }
    get codigo(){
        return this.#codigo;
    }
    set codigo(nuevoCodigo){
        this.#codigo = nuevoCodigo;
    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }

    get categoria(){
        return this.#categoria;
    }
    set categoria(nuevaCategoria){
        this.#categoria = nuevaCategoria;
    }

    get imagen(){
        return this.#imagen;
    }
    set imagen(nuevaImagen){
        this.#imagen = nuevaImagen;
    }

    get precio(){
        return this.#precio;
    }
    set precio(nuevoPrecio){
        this.#precio = nuevoPrecio;
    }

    get estado(){
        return this.#estado;
    }
    set estado(nuevoEstado){
        this.#estado = nuevoEstado;
    }

    toJSON(){
        return{
            codigo: this.codigo,
            nombre: this.nombre,
            categoria: this.categoria,
            imagen: this.imagen,
            precio: this.precio,
            estado: this.estado
        }
    }
}