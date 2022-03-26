//const arreglo1=new Array(10); //Arreglo Vacío de 10 elementos

//const arreglo2=[]; // Arreglo Vacío



let videoJuegos=['Mario Bros', 'Mafia', 'Pes10'];

console.log(videoJuegos); // Muestra los elementos del Arreglo

console.log({videoJuegos}); // Muestra la cantidad del Arreglo 

console.log(videoJuegos[0]); // Muestra el primer elemento del Arreglo

//En JS los Arreglos NO tienen que ser del mismo tipo
let arregloCosas=[
    true,
    123,
    'José',
    1+2,
    ['iPico', 'Drag2', 'Drag X'], // Arreglo dentro del Arreglo 
] 

console.log({arregloCosas});

console.log(arregloCosas[4][2]); // Muestra el elemento del Arreglo dentro del Arreglo
