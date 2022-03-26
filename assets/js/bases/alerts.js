// mensaje de Alerta común
alert('Hola Mundo'); 

// mensaje de Alerta que acepta valores
prompt('¿Cuál es tu nombre?', 'Sin Nombre'); 

// se puede tomar el valor, declarando una variable y mostrarlo por consola
let nombre=prompt('Cuál es tu nombre?', 'Sin nombre');
console.log(nombre);

//mensaje que devuelve un Booleano
confirm('¿Está seguro que desea borrar esto?');

//podemos tomar el valor del booleano y ver si es TRUE o FALSE (según apretemos OK o CANCELAR)
const seleccion=confirm('está seguro que quiere borrar?');
console.log(seleccion); 