import { validarCantidadCaracteres } from "./helpers.js";

function validarEmail(email){
    let patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(patron.test(email)){
        return true;
    }else{
        return false; 
    }
}

function validarPassword(password){
    let patron = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    if(patron.test(password)){
        return true;
    }else{
        return false;
    }
}

function validarSelect(opcion){
    if(opcion != ''){
        return true;
    }else{
        return false;
    }
}


export function resumenDeValidaciones(nombre, email, password, estado, perfil){
    let resumen = '';
    if(!validarCantidadCaracteres(nombre, 3, 100)){
        resumen += 'El nombre y apellido deben tener entre 2 y 100 caracteres <br>';
    }
    if(!validarEmail(email)){
        resumen += 'El correo electronico no es un formato valido <br>';
    }
    if(!validarPassword(password)){
        resumen += 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico <br>'
    }
    if(!validarSelect(estado)){
        resumen += 'Debe seleccionar el estado del usuario (Activo o Inactivo) <br>'
    }
    if(!validarSelect(perfil)){
        resumen += 'Debe seleccionar el perfil del usuario<br>'
    }
    return resumen; 
}