function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('dato correcto');
        return true;
    }else{
        console.log('dato incorrecto');
        return false;
    }
}




export function resumenValidacion(nombre, categoria, precio, estado){
    let resumen = '';
    if(!validarCantidadCaracteres(nombre, 3, 100)){
        resumen+= 'El nombre del producto debe tener entre 3 y 100 caracteres <br>';
    }
    if(!validarCantidadCaracteres(categoria, 3, 100)){
        resumen += 'La categoria debe tener entre 3 y 100 caracteres <br>';
    }
    if(!validarCantidadCaracteres(precio, 1, 10000)){
        resumen += 'El precio debe tener entre 1 y 10000 caracteres <br>';
    }
    if(!validarCantidadCaracteres(estado, 3, 100)){
        resumen += 'El estado debe tener entre 3 y 100 caracteres';
    }
    return resumen;
}