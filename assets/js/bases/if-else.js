
let a=5;

if (a > 10) {
    console.log('a es mayor a 10'); // Nunca se ejecuta esta Linea ya que no cumple la condición Booleana
} else {
    console.log('a es menor a 10');
}

console.log('Fin de Programa');

// Otro ejemplo

const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes...

console.log( hoy );
console.log( dia );

if (dia === 0) {
    console.log('Hoy es Domingo');
}else if (dia === 1) {
    console.log('Hoy es Lunes');
}else if (dia === 2) {
    console.log('Hoy es Martes')
}else {
    console.log('Hoy no es Domingo ni Lunes ni Martes');
}

// EJERCICIO: sin usar IF, ELSE, SWITCH obtener el día de la semana (usando sólo Objetos)

dia=3;

const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado'
}

console.log(diasLetras[dia] || 'Día no definido'); 

// EJERCICIO: sin usar IF, ELSE, SWITCH obtener el día de la semana (usando sólo Arreglos)

dia=6;

const diasLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

console.log(diasLetras2[dia]);