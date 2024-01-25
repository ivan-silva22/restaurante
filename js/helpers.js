export function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('dato correcto');
        return true;
    }else{
        console.log('dato incorrecto');
        return false;
    }
}

function validarCategoria(opcion){
    if(opcion != ''){
        return true;
    }else{
        return false;
    }
}

function validarPrecio(precio){
    let patron = /^[1-9]\d{0,4}$/
    if(patron.test(precio)){
        return true;
    }else{
        return false;
    }
}

function validarImagen(imagen){
    let patron = /\.(jpe?g|png|webp)$/i;
    if(patron.test(imagen)){
        console.log('dato correcto')
        return true;
    }else{
        console.log('dato incorrecto');
        return false;
    }
}

function validarEstado(opcion){
    if(opcion != ''){
        return true;
    }else{
        return false;
    }
}



export function resumenValidacion(nombre, categoria, precio, imagen, estado){
    let resumen = '';
    if(!validarCantidadCaracteres(nombre, 3, 100)){
        resumen+= 'El nombre del producto debe tener entre 3 y 100 caracteres <br>';
    }
    if(!validarCategoria(categoria)){
        resumen += 'Debe seleccionar una categoria <br>';
    }
    if(!validarPrecio(precio)){
        resumen += 'El precio debe tener un rango de 1 y 10000 <br>';
    }
    if(!validarImagen(imagen)){
        resumen += 'El formato de imagen debe ser (.jpg / .jpeg / .webp)'
    }
    if(!validarEstado(estado)){
        resumen += 'Debe seleccionar un estado (Activo o Inactivo';
    }
    return resumen;
}