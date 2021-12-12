// Importamos el módulo fs para leer el archivo tareas.JSON
const fs = require ("fs");
const archivoTareas = fs.readFileSync("./tareas.json");
//console.log (contenido.toString());

// Convierte el JSON en datos de Javascript
const tareas = JSON.parse (archivoTareas);
// Uso un for para iterar sobre tareas
//for (let tarea of tareas ){
    //console.log (tarea.titulo);
//}

// console.log (contenidoParseado);

// Programa para pasar un argumento al ejecutar node
console.log (process.argv[2]);
let comando = process.argv[2];
//if (comando == "listar"){
//    console.log (tareas);
//} else if (comando == undefined){
//    console.log ("Atención - Tienes que pasar una acción.");
//} else {
//   console.log ("No entiendo qué quieres hacer.");
//}

// otra opción
switch (comando){
    case "listar":
        console.log (tareas);
        break;
    case undefined:
        console.log ("Atención - Tienes que pasar una acción.");
        break;
    default:
        console.log ("No entiendo qué quieres hacer.");
}