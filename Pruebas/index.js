let contador = 0;
function noParesDeContarImparesHasta(numero){
for (let i = 0; i <= numero; i++){
    if (i % 2 != 0){
        contador++;
               }
    } return contador;
}
//console.log (noParesDeContarImparesHasta(9));

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
console.log (estudiantes[0].aprobado);
let aprobados = estudiantes.aprobado.filter(function(check){
    return check == true;
})
let desaprobados = estudiantes.aprobado.filter(function(check){
    return check == false;
})
console.log(desaprobados);