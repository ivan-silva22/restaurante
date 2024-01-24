import Usuario from "./classUsuario.js";
import { resumenDeValidaciones } from "./validacionAdminUsuario.js";

let formularioUsuario = document.getElementById('form-usuario');
let listaUsuarios = [];
let nombre = document.getElementById('nombre'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    estado = document.getElementById('estado'),
    perfil = document.getElementById('perfil');

formularioUsuario.addEventListener('submit', prepararFormulario);

function prepararFormulario(e){
    e.preventDefault();
    crearUsuario()
}

function crearUsuario(){
    let validaciones = resumenDeValidaciones(nombre.value, email.value, password.value, estado.value, perfil.value);
    if(validaciones.length === 0){
        let nuevoUsuario = new Usuario(
            nombre.value,
            email.value,
            password.value,
            estado.value,
            perfil.value
        )
        console.log(nuevoUsuario);
        listaUsuarios.push(nuevoUsuario);
        console.log(listaUsuarios)
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
    }else{
        let alerta = document.getElementById('alerta');
        alerta.innerHTML = validaciones;
        alerta.className = 'alert alert-danger mt-3';
    }
    
}