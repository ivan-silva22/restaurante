import Usuario from './classUsuario.js';

const emailUser = document.getElementById('emailSesion');
const passwordUser = document.getElementById('passwordSesion');
const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('submit', formularioLogin);

function formularioLogin(e){
    e.preventDefault();
}