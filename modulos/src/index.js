/*
    Name Imports

import {nombre as name, obtenerPost} from "./namedExports";

console.log('Mi nombre es ' + name);
console.log(obtenerPost());
*/



/*
    Namespace Imports

import * as datos from './namedExports';
console.log(datos.nombre);
console.log(datos.obtenerPost());

*/



/*
    Default Imports

import obtenerUsuario from "./defaultExport";
console.log(obtenerUsuario());
*/







// JS Vanila sin librerias o frameworks 


/*
    Empty Imports
    Carga todo el código pero sin hacer ningun objeto
*/

import './emptyExport';
import {correo} from './emptyExport';
console.log(correo);




