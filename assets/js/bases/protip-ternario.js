// 1
const elMayor = (a, b) => (a>b) ? a:b;
console.log(elMayor(10, 15));
// 2
const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares'
console.log(tieneMembresia(false));
// 3
const amigo=true;

const amigosArr=[
    'Mick',
    'Eddie',
    'Kurt',
    amigo ? 'Indio' : 'Ceratti', // Al ser TRUE "amigo" saldrá "Indio"
]

console.log(amigosArr);

// 4

const nota=82;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log(nota, grado);