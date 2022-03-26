
let a=10;
let b=a;

a=30; // La variable "b" aún valdrá 10 y no 30

console.log(a, b);

let juan = {nombre : 'Juan'};
let ana = juan;

ana.nombre='Ana'; // Juan también pasará a llamarse Ana

console.log(juan, ana);

const cambiaNombre = (persona) => {
    persona.nombre = 'José';
    return persona;
}

let peter = {nombre: 'Peter'};
let jose = cambiaNombre(peter);

console.log(peter, jose);

// Para solucionar, rompermos Referencia

const frutas=['Manzana', 'Pera', 'Banana'];
const otrasFrutas = [...frutas]; // Usamos el operador Spread para separar "Frutas" de "Otras Frutas"

otrasFrutas.push('Mango'); // Agregamos una fruta al Arreglo (Sólo de Otras Frutas, gracias al operados ... (Spread))

console.table({frutas, otrasFrutas});


