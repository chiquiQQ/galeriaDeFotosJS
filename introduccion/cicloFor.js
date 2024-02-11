const nombres = ["Carlos", "Christian", "Christoher", "Estefania", "Erika", "Manuel"];

//nombres.forEach( (nombre) => console.log(nombre));

/*
    Ciclo For 
    Repite un bloque de codigo mientras se cumpla una condicion

    Expresion 1: Se ajusta una sola vez antes de comenzar a repetir el bloque de 
    codigo
    Expresion 2: Una condicion, mientras se cumpla se ejecutara el bloque de 
    codigo
    Expresion 3: Esta expresion se ejecuta siempre y despues de que se ejecute
    el bloque de codigo
*/

for (let numero = 0; numero < nombres.length; numero++){
    console.log(nombres[numero]);
}

