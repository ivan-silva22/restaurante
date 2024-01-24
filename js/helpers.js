function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('dato correcto');
        return true;
    }else{
        console.log('dato incorrecto');
        return false;
    }
}

function validarPrecio(precio){
    let patron = new RegExp("[1-9]{1-5}")
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




export function resumenValidacion(nombre, categoria, precio, imagen, estado){
    let resumen = '';
    if(!validarCantidadCaracteres(nombre, 3, 100)){
        resumen+= 'El nombre del producto debe tener entre 3 y 100 caracteres <br>';
    }
    if(!validarCantidadCaracteres(categoria, 3, 100)){
        resumen += 'La categoria debe tener entre 3 y 100 caracteres <br>';
    }
    if(!validarPrecio(precio)){
        resumen += 'El precio debe tener un rango de 1 y 10000<br>';
    }
    if(!validarImagen(imagen)){
        resumen += 'El formato de imagen debe ser (.jpg / .jpeg / .webp)'
    }
    if(!validarCantidadCaracteres(estado, 3, 100)){
        resumen += 'El estado debe tener entre 3 y 100 caracteres';
    }
    return resumen;
}