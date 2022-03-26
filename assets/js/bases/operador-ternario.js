
//EJERCICIO: Días de semana se abre a las 11 y fines de semana a las 9

const dia=1; // 0:Domingo
const horaActual=11;

let horaApertura;
let mensaje;

if(dia===0 || dia===6) {
    console.log('Fin de Semana');
    horaApertura=9;
}else {
    console.log('Día de Semana');
    horaApertura=11;
}

if (horaActual >= horaApertura) {
    mensaje= 'Está abierto';
}else {
    mensaje= `Está cerrado. Hora de Apertura ${horaApertura}`; 
}

console.log(horaApertura, mensaje);

// Con Operador Ternario
console.log('==========OPERADOR TERNARIO=========');

const dia2=1; // 0:Domingo
const horaActual2=11;

let horaApertura2;
let mensaje2;

horaApertura2 = ([0,6].includes(dia2)) ? 9:11;

mensaje2 = (horaActual2 >= horaApertura2) ? 'Está abierto' : `Está cerrado. Hora de Apertura ${horaApertura2}`;

console.log(horaApertura2, mensaje2);