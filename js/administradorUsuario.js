import Usuario from "./classUsuario.js";
import { resumenDeValidaciones } from "./validacionAdminUsuario.js";
import { limpiarFormulario } from "./administrador.js";


let formularioUsuario = document.getElementById('form-usuario');
let listaUsuarios = [];
let nombreUsuarioAdmin = document.getElementById('nombreUsuarioAdmin'),
    emailUsuarioAdmin = document.getElementById('emailUsuarioAdmin'),
    passwordUsuarioAdmin = document.getElementById('passwordUsuarioAdmin'),
    estadoUsuarioAdmin = document.getElementById('estadoUsuarioAdmin'),
    perfilUsuarioAdmin = document.getElementById('perfilUsuarioAdmin');
let modalFormUsuario =  new bootstrap.Modal(document.getElementById('modalFormUsuario'));
console.log(formularioUsuario)
let btnCrearUsuario = document.getElementById('btnCrearUsuario');

formularioUsuario.addEventListener('submit', prepararFormularioUsuario);
btnCrearUsuario.addEventListener('click', mostrarFormModal);

function prepararFormularioUsuario(e){
    e.preventDefault();
    crearUsuario()
}

function crearUsuario(){
    let validaciones = resumenDeValidaciones(nombreUsuarioAdmin.value, emailUsuarioAdmin.value, passwordUsuarioAdmin.value, estadoUsuarioAdmin.value, perfilUsuarioAdmin.value);
    if(validaciones.length === 0){
        let nuevoUsuario = new Usuario(
            nombreUsuarioAdmin.value,
            emailUsuarioAdmin.value,
            passwordUsuarioAdmin.value,
            estadoUsuarioAdmin.value,
            perfilUsuarioAdmin.value
        )
        console.log(nuevoUsuario);
        listaUsuarios.push(nuevoUsuario);
        console.log(listaUsuarios)
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
        limpiarFormulario();
    }else{
        let alerta = document.getElementById('alerta');
        alerta.innerHTML = validaciones;
        alerta.className = 'alert alert-danger mt-3';
    }
    
}

function mostrarFormModal(){
    modalFormUsuario.show()
    
}