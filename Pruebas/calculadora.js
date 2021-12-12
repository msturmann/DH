const sumar = require ("./OPERACIONES/sumar.js");
const restar = require ("./OPERACIONES/restar.js");
const dividir = require ("./OPERACIONES/dividir.js");
const multiplicar = require ("./OPERACIONES/multiplicar.js");

let resultado = sumar (1,2);
console.log (resultado);

resultado = restar (2,1);
console.log (resultado);

resultado = dividir (0, 8);
console.log (resultado);